import React, { useRef, useState, useEffect } from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import HomeIcon from "../../components/icons/HomeIcon";
import { Button, IconButton, useToast } from "@chakra-ui/react";
import { CameraIcon } from "lucide-react";
import axios from "axios";
import { API_BASE_URL} from "../../api/constant.ts";
const CameraPage: React.FC = () => {
    const navigate = useNavigate();
    const toast = useToast();
    const [isCameraActive, setIsCameraActive] = useState(false);
    const [capturedImage, setCapturedImage] = useState<string | null>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        startCamera();
        return () => stopCamera(); // 페이지 떠날 때 카메라 정지
    }, []);

    const startCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
                setIsCameraActive(true);
            }
        } catch (error) {
            console.error("카메라 접근 오류:", error);
        }
    };

    const stopCamera = () => {
        const stream = videoRef.current?.srcObject as MediaStream;
        stream?.getTracks().forEach(track => track.stop());
        setIsCameraActive(false);
    };

    const captureImage = () => {
        if (videoRef.current && canvasRef.current) {
            const canvas = canvasRef.current;
            const video = videoRef.current;
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            const context = canvas.getContext("2d");
            if (context) {
                context.drawImage(video, 0, 0, canvas.width, canvas.height);
                const imageData = canvas.toDataURL("image/png");
                setCapturedImage(imageData);
            }
        }
    };

    const stopAndCapture = () => {
        captureImage();
        stopCamera();
    };

    const analyzeImage = async () => {
        if (!capturedImage) {
            toast({
                title: "분석할 이미지가 없습니다.",
                status: "warning",
                duration: 2000,
                isClosable: true,
            });
            return;
        }
        try {
            // 1단계: AI API로 이미지 전송
            const aiResponse = await axios.post("/ai/analyze", { image: capturedImage });
            const fishData = aiResponse.data.fishInfo;

            if (!fishData || fishData.length === 0) {
                navigate("/notfound");
                return;
            }

            // 2단계: 물고기 데이터 백엔드로 전송
            const backendResponse = await axios.post(
                `${API_BASE_URL}/api/v1/pokedex/update`,
                { caughtPokemons: fishData },
                { headers: { "Content-Type": "application/json" } }
            );

            // 3단계: 분석 페이지로 이동
            const { pokemonStatus } = backendResponse.data;
            navigate("/analysis", { state: { pokemonStatus } });
        } catch (error) {
            toast({
                title: "분석 실패",
                description: "다시 시도해주세요.",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        }
    };

    return (
        <Wrapper>
            <IconButton
                icon={<HomeIcon boxSize="30px" />}
                aria-label="홈으로 이동"
                onClick={() => navigate("/main")}
                variant="ghost"
                _hover={{ bg: "transparent" }}
                _active={{ bg: "transparent" }}
                _focus={{ boxShadow: "none" }}
                position="absolute"
                left="0"
                zIndex="10"
            />

            <CameraWrapper>
                <video ref={videoRef} autoPlay style={{ width: "100%", height: "90%", display: isCameraActive ? "block" : "none", objectFit: "cover"}} />

                {isCameraActive && (
                    <Button onClick={stopAndCapture} mt='40px' mb="10px" borderRadius="50%" bg='white' border="1px solid black" color='black' w={16} h={16} boxShadow="0px 4px 8px rgba(0, 0, 0, 0.2)">
                        <CameraIcon size="40" />
                    </Button>
                )}

                {!isCameraActive && (
                    <>
                        <img src={capturedImage || ""} alt="캡처된 이미지" style={{ width: "100%", height: "90%", objectFit: "cover" }} />

                        <BottomButton
                            onClick={startCamera}
                            isPrimary
                            mt="10px"
                            mb="10px"
                            borderRadius="50%"
                            bg="white"
                            border="1px solid black"
                            color="black"
                            w={16}
                            h={16}
                            boxShadow="0px 4px 8px rgba(0, 0, 0, 0.2)"
                        >
                            다시 찍기
                        </BottomButton>

                        <BottomButton
                            onClick={analyzeImage}
                            mt="10px"
                            mb="10px"
                            borderRadius="50%"
                            bg="white"
                            border="1px solid black"
                            color="black"
                            w={16}
                            h={16}
                            boxShadow="0px 4px 8px rgba(0, 0, 0, 0.2)"
                        >
                            분석하기
                        </BottomButton>
                    </>
                )}

                <canvas ref={canvasRef} style={{ display: "none" }} />
            </CameraWrapper>
        </Wrapper>
    );
};

export default CameraPage;

const Wrapper = styled.div`
    background-color: #E9F9FF;
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const CameraWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 90%;
`;

interface BottomButtonProps {
    isPrimary?: boolean;
}

const BottomButton = styled(Button)<BottomButtonProps>`
    background-color: #FFFFFF;
    color: #05518F;
    width: 40%;
    height: 70px;
    font-weight: 300;
    font-size: 24px;
    border-radius: 10px;
    border: none;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    position: absolute;
    bottom: 20px;
    text-align: center;
    ${({ isPrimary }) =>
        isPrimary
            ? `left: 30px;`
            : `right: 30px;`}

    &:hover {
        background-color: #C5EFFF;
    }

    &:active {
        background-color: #55CFFF;
        transform: scale(0.95);
        box-shadow: 0 0 20px rgba(85, 207, 255, 0.6);
    }
`;

import React, { useRef, useState, useEffect } from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import HomeIcon from "../../components/icons/HomeIcon";
import { Button, IconButton } from "@chakra-ui/react";
import { CameraIcon } from "lucide-react";

const CameraPage: React.FC = () => {
    const navigate = useNavigate();
    const [isCameraActive, setIsCameraActive] = useState(false);
    const [capturedImage, setCapturedImage] = useState<string | null>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // 페이지 로드 시 카메라 시작
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

            // 현재 비디오 프레임을 캔버스에 그리기
            const context = canvas.getContext("2d");
            if (context) {
                context.drawImage(video, 0, 0, canvas.width, canvas.height);
                // 캔버스 내용을 base64 형식으로 변환하여 이미지 데이터 저장
                const imageData = canvas.toDataURL("image/png");
                setCapturedImage(imageData);
            }
        }
    };

    const stopAndCapture = () => {
        captureImage();
        stopCamera();
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
            {/* <MainFish src={start_img} alt="fish" />*/}
           

            <CameraWrapper>
                <video ref={videoRef} autoPlay style={{ width: "100%", height: "90%", marginTop: "0px", display: isCameraActive ? "block" : "none", objectFit: "cover"}} />

                {/* 사진 캡처 버튼 */}
                {isCameraActive && (
                    <Button onClick={stopAndCapture} mt='40px' mb="10px" borderRadius="50%" bg='white' border="1px solid black" color='black' w={16} h={16} boxShadow="0px 4px 8px rgba(0, 0, 0, 0.2)">
                        <CameraIcon size="40" />
                    </Button>
                )}

                {/* 캡처된 사진 미리보기 및 하단 버튼 */}
                {!isCameraActive && (
                    <>
                        <img src={capturedImage || ""} alt="캡처된 이미지" style={{ width: "100%", height: "90%", marginTop: "0px",  objectFit: "cover" }} />
                        
                        {/* 다시 찍기 버튼 */}
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

                        {/* 분석하기 버튼 */}
                        <BottomButton
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

                {/* 캡처를 위한 캔버스 (보이지 않게 숨김) */}
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

const MainFish = styled.img`
    margin-top: 40px;
    width: 200px;
`;

const CameraWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 90%;
`;

// styled-component에서 props를 받아 다른 스타일 적용
interface BottomButtonProps {
    isPrimary?: boolean;
}

const BottomButton = styled(Button)<BottomButtonProps>`
    background-color: #FFFFFF;
    color: #05518F;
    width: 40%;
    height: 70px;
    font-weight: 300;
    height: 40px;
    font-size: 24px;
    border-radius: 10px;
    border: none;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    position: absolute;
    bottom: 20px;
    text-align: center;
    ${({ isPrimary }) =>
        isPrimary
            ? `
        left: 30px;
    `
            : `
        right: 30px;
    `}
    

    &:hover {
        background-color: #C5EFFF;
    }

    &:active {
        background-color: #55CFFF;
        transform: scale(0.95); /* 눌렀을 때 살짝 축소 효과 */
        box-shadow: 0 0 20px rgba(85, 207, 255, 0.6); /* 번지는 효과 */
    }
`;

import React, { useRef, useState, useEffect } from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import HomeIcon from "../../components/icons/HomeIcon";
import { Button, Flex, IconButton, useToast } from "@chakra-ui/react";
import { CameraIcon, ImageIcon, SwitchCameraIcon } from "lucide-react";
import axios from "axios";
import LoadingSpinner from "../../components/LoadingSpinner";
import { API_BASE_URL } from "../../api/constant";

const CameraPage: React.FC = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [isRearCamera, setIsRearCamera] = useState(true); // 후면 카메라 상태
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false); // 로딩 상태 추가
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null); // 파일 선택 input 참조
  const accessToken = localStorage.getItem("accessToken");


  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((err: unknown) => {
        console.error("Camera access denied:", err);
      });
  }, []);

  useEffect(() => {
    startCamera();
    return () => stopCamera(); // 페이지 떠날 때 카메라 정지
  }, []);
  const switchCamera = async () => {
    if (videoRef.current && videoRef.current.srcObject) {
      // 기존 스트림 중지
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach((track) => track.stop());
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: isRearCamera ? "user" : { exact: "environment" } },
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
      setIsRearCamera(!isRearCamera); // 카메라 상태 토글
    } catch (err) {
      console.error("Error switching the camera:", err);
      toast({
        title: "카메라 전환에 실패했습니다.",
        description: "브라우저 또는 기기 설정을 확인해주세요.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };
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
    stream?.getTracks().forEach((track) => track.stop());
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
        stopCamera();
      }
    }
  };
  const handleGallerySelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // 사용자가 선택한 첫 번째 파일
    if (file) {
      const reader = new FileReader(); // FileReader를 사용해 파일 읽기
      reader.onload = (e) => {
        setCapturedImage(e.target?.result as string); // Base64로 변환된 이미지 저장
        stopCamera(); // 갤러리 이미지를 선택하면 카메라 중지
      };
      reader.readAsDataURL(file); // 파일을 Base64 문자열로 변환
    }
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
    console.log(capturedImage);
    setLoading(true); // 로딩 상태 활성화
    try {
      // 1단계: AI API로 이미지 전송
      const aiResponse = await axios.post("http://34.64.216.227:8080", {
        image: capturedImage,
      });
      const detections = aiResponse.data;

      if (!detections || detections.length === 0) {
        setLoading(false);
        navigate("/notfound");
        return;
      }

      // 2단계: 물고기 데이터 백엔드로 전송
      const backendResponse = await axios.post(
        `${API_BASE_URL}/api/v1/pokedex/update`,
        { caughtPokemons: detections },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`, // 인증 토큰
            "Content-Type": "application/json",
          },
        }
      );

      // 3단계: 분석 페이지로 이동
      const { pokemonStatus } = backendResponse.data;
      navigate("/analysis", { state: { pokemonStatus } });
    } catch {
      toast({
        title: "분석 실패",
        description: "다시 시도해주세요.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false); // 로딩 상태 비활성화
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
        {loading ? (
          <LoadingSpinner /> // 로딩 중일 때 LoadingSpinner 표시
        ) : (
          <>
            <video
              ref={videoRef}
              autoPlay
              style={{
                width: "100%",
                height: "90%",
                display: isCameraActive ? "block" : "none",
                objectFit: "cover",
              }}
            />

            {isCameraActive && (
              <Flex
                alignItems="baseline"
                justifyContent="center"
                mt="40px"
                width="100%"
              >
                {/* 갤러리 버튼 (왼쪽 끝) */}
                <GalleryButton
                  onClick={() => fileInputRef.current?.click()}
                  ml="20px"
                >
                  <ImageIcon size="40" />
                </GalleryButton>

                {/* 카메라 버튼 (중앙) */}
                <CameraButton onClick={captureImage}>
                  <CameraIcon size="40" />
                </CameraButton>

                <SwitchButton onClick={switchCamera} mr="20px">
                  <SwitchCameraIcon size="40" />
                </SwitchButton>
              </Flex>
            )}

            {!isCameraActive && (
              <>
                <img
                  src={capturedImage || ""}
                  alt="캡처된 이미지"
                  style={{ width: "100%", height: "90%", objectFit: "cover" }}
                />

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
          </>
        )}
        {/* 숨겨진 input */}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleGallerySelect}
        />
        <canvas ref={canvasRef} style={{ display: "none" }} />
      </CameraWrapper>
    </Wrapper>
  );
};

export default CameraPage;

const Wrapper = styled.div`
  background-color: #e9f9ff;
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
  background-color: #ffffff;
  color: #05518f;
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
  ${({ isPrimary }) => (isPrimary ? `left: 30px;` : `right: 30px;`)}

  &:hover {
    background-color: #c5efff;
  }

  &:active {
    background-color: #55cfff;
    transform: scale(0.95);
    box-shadow: 0 0 20px rgba(85, 207, 255, 0.6);
  }
`;

const GalleryButton = styled(Button)`
  background-color: #ffffff;
  color: black;
  width: 60px;
  height: 60px;
  font-weight: 300;
  font-size: 24px;
  border-radius: 10px;
  border: none;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  position: absolute;
  left: 20px;
  text-align: center;
  &:hover {
    background-color: #c5efff;
  }

  &:active {
    background-color: #55cfff;
    transform: scale(0.95);
    box-shadow: 0 0 20px rgba(85, 207, 255, 0.6);
  }
`;
const CameraButton = styled(Button)`
  background-color: #ffffff;
  color: black;
  width: 80px;
  height: 80px;
  font-weight: 300;
  font-size: 24px;
  border-radius: 50%;
  border: none;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  bottom: 20px;
  text-align: center;
  &:hover {
    background-color: #c5efff;
  }

  &:active {
    background-color: #55cfff;
    transform: scale(0.95);
    box-shadow: 0 0 20px rgba(85, 207, 255, 0.6);
  }
`;
// const CameraButton = styled(Button)`
//     border-radius: 50%;
//     background-color: white;
//     border: 1px solid black;
//     width: 70px;
//     height: 70px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);

//     &:hover {
//         background-color: #f0f0f0;
//     }
// `;
const SwitchButton = styled(Button)`
 background-color: #ffffff;
  color: black;
  width: 60px;
  height: 60px;
  font-weight: 300;
  font-size: 24px;
  border-radius: 10px;
  border: none;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  position: absolute;
  right: 20px;
  text-align: center;
  &:hover {
    background-color: #c5efff;
  }

  &:active {
    background-color: #55cfff;
    transform: scale(0.95);
    box-shadow: 0 0 20px rgba(85, 207, 255, 0.6);
  }
`;

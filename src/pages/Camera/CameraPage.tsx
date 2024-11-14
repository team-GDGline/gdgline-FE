import React, { useRef, useState, useEffect } from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import HomeIcon from "../../components/icons/HomeIcon";
import { Button } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { CameraIcon } from "lucide-react";
import start_img from "../../assets/start_img.svg";

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
          />
          <MainFish src={start_img} alt="fish" />
      
     
        <video ref={videoRef} autoPlay style={{ width: "100%", marginTop: "32px", display: isCameraActive ? "block" : "none" }} />
        
        {/* 사진 캡처 버튼 */}
        {isCameraActive &&   <Button onClick={stopAndCapture} mt='10px' mb="10px" borderRadius="50%"  bg='white' border="1px solid black" color='black' w={16} h={16} boxShadow={"0px 4px 8px rgba(0, 0, 0, 0.2)"} >
                  <CameraIcon size="40"/>
                  </Button>}
        
        {/* 캡처된 사진 미리보기 */}
        {capturedImage && (
          <div>
         {!isCameraActive && (  <><img src={capturedImage} alt="캡처된 이미지" style={{ width: "100%", marginTop: "32px" }} />
            <Button onClick={startCamera} mt='10px' mb="10px" borderRadius="50%"  bg='white' border="1px solid black" color='black' w={16} h={16} boxShadow={"0px 4px 8px rgba(0, 0, 0, 0.2)"} >
                  다시 찍기
                  </Button>
                  </>)}
          </div>
        )}
        
        {/* 캡처를 위한 캔버스 (보이지 않게 숨김) */}
        <canvas ref={canvasRef} style={{ display: "none" }} />
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
margin-top: 52px;
  width: 200px;  
`;
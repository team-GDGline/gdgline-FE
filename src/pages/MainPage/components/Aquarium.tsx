import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import background_aquarium from "../../../assets/background_aquarium.svg";
// 개별적으로 이미지를 import
import gardenEel from "../../../assets/pixel/gardenEel.svg";
import napoleonWrasse from "../../../assets/pixel/napoleonWrasse.svg";
import arowana from "../../../assets/pixel/arowana.svg";
import blacktipReefShark from "../../../assets/pixel/blacktipReefShark.svg";
import africanManatee from "../../../assets/pixel/africanManatee.svg";
import giantGrouper from "../../../assets/pixel/giantGrouper.svg";
import smallClawedOtter from "../../../assets/pixel/smallClawedOtter.svg";
import piranha from "../../../assets/pixel/piranha.svg";
import zebraShark from "../../../assets/pixel/zebraShark.svg";
import californiaSeaLion from "../../../assets/pixel/californiaSeaLion.svg";
import clownfish from "../../../assets/pixel/clownfish.svg";
import blackStingray from "../../../assets/pixel/blackStingray.svg";
import leatherbackSeaTurtle from "../../../assets/pixel/leatherbackSeaTurtle.svg";
import humboldtPenguin from "../../../assets/pixel/humboldtPenguin.svg";

// 이미지 배열 생성
// 이미지와 위치 정보를 포함한 객체 배열
const fishPixel = [
  { src: gardenEel, top: "75%", left: "10%", width: "80px", height: "80px" },
  {
    src: napoleonWrasse,
    top: "45%",
    left: "80%",
    width: "60px",
    height: "60px",
  },
  { src: arowana, top: "40%", left: "5%", width: "60px", height: "60px" },
  {
    src: blacktipReefShark,
    top: "5%",
    left: "60%",
    width: "140px",
    height: "140px",
  },
  {
    src: africanManatee,
    top: "45%",
    left: "30%",
    width: "80px",
    height: "80px",
  },
  { src: giantGrouper, top: "2%", left: "80%", width: "80px", height: "80px" },
  {
    src: smallClawedOtter,
    top: "75%",
    left: "30%",
    width: "80px",
    height: "80px",
  },
  { src: piranha, top: "35%", left: "55%", width: "50px", height: "50px" },
  { src: zebraShark, top: "15%", left: "10%", width: "100px", height: "100px" },
  {
    src: californiaSeaLion,
    top: "75%",
    left: "55%",
    width: "80px",
    height: "80px",
  },
  { src: clownfish, top: "65%", left: "5%", width: "80px", height: "80px" },
  {
    src: blackStingray,
    top: "5%",
    left: "30%",
    width: "110px",
    height: "110px",
  },
  {
    src: leatherbackSeaTurtle,
    top: "55%",
    left: "65%",
    width: "80px",
    height: "80px",
  },
  {
    src: humboldtPenguin,
    top: "70%",
    left: "80%",
    width: "80px",
    height: "80px",
  },
];

interface AquariumProps {
  children?: React.ReactNode; // children을 선택적 속성으로 변경
}

const Aquarium: React.FC<AquariumProps> = ({ children }) => {
  return (
    <AquariumWrapper>
      {fishPixel.map((fish, index) => (
        <FishPixel
          key={index}
          src={fish.src}
          alt={`fish-${index}`}
          style={{
            top: fish.top,
            left: fish.left,
            width: fish.width,
            height: fish.height,
          }}
        />
      ))}
      {children}
    </AquariumWrapper>
  );
};

export default Aquarium;

const AquariumWrapper = styled.div`
  width: 100%;
  height: 50%;
  background-image: url(${background_aquarium});
  background-size: contain;
  position: relative;
  overflow: hidden;
`;

// 랜덤하게 움직이는 픽셀 아트 스타일 애니메이션
const floatAnimation = (x: number, y: number) => keyframes`
  0% { transform: translate(0, 0); }
  50% { transform: translate(${x}px, ${y}px); }
  100% { transform: translate(0, 0); }
`;

const FishPixel = styled.img`
  position: absolute;
  animation: ${() =>
      floatAnimation(Math.random() * 20 - 10, Math.random() * 20 - 10)}
    3s ease-in-out infinite;
  image-rendering: pixelated; /* 픽셀 아트 효과 */
`;

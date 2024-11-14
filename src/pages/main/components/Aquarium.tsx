import styled from "@emotion/styled";
import  {ReactNode } from "react";
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
const fishPixel = [
  gardenEel, 
  napoleonWrasse,
  arowana,
  blacktipReefShark,
  africanManatee,
  giantGrouper,
  smallClawedOtter,
  piranha,
  zebraShark,
  californiaSeaLion,
  clownfish,
  blackStingray,
  leatherbackSeaTurtle,
  humboldtPenguin
];


interface AquariumProps {
  children: ReactNode;
}

const Aquarium: React.FC<AquariumProps> = ({children}) => {
  return (
    <AquariumWrapper>
      {fishPixel.map((fish, index) => (
          <FishPixel key={index} src={fish} alt={`fish-${index}`} />
      ))}
        {children}
    </AquariumWrapper>
  );
};

export default Aquarium;

const AquariumWrapper = styled.div`
  width: 100%;
  height: 40%;
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
  width: 24px; /* 픽셀 아트 크기 */
  height: 24px;
  animation: ${() => floatAnimation(Math.random() * 20 - 10, Math.random() * 20 - 10)} 3s ease-in-out infinite;
  image-rendering: pixelated; /* 픽셀 아트 효과 */
`;
import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import axios from "axios";

import background_aquarium from "../../../assets/background_aquarium.svg";
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
import { API_BASE_URL } from "../../../api/constant";

const fishPixel = [
  { src: gardenEel, key: "gardenEel", top: "75%", left: "10%", width: "80px", height: "80px" },
  { src: napoleonWrasse, key: "napoleonWrasse", top: "45%", left: "80%", width: "60px", height: "60px" },
  { src: arowana, key: "arowana", top: "40%", left: "5%", width: "60px", height: "60px" },
  { src: blacktipReefShark, key: "blacktipReefShark", top: "5%", left: "60%", width: "140px", height: "140px" },
  { src: africanManatee, key: "africanManatee", top: "45%", left: "30%", width: "80px", height: "80px" },
  { src: giantGrouper, key: "giantGrouper", top: "2%", left: "80%", width: "80px", height: "80px" },
  { src: smallClawedOtter, key: "smallClawedOtter", top: "75%", left: "30%", width: "80px", height: "80px" },
  { src: piranha, key: "piranha", top: "35%", left: "55%", width: "50px", height: "50px" },
  { src: zebraShark, key: "zebraShark", top: "15%", left: "10%", width: "100px", height: "100px" },
  { src: californiaSeaLion, key: "californiaSeaLion", top: "75%", left: "55%", width: "80px", height: "80px" },
  { src: clownfish, key: "clownfish", top: "65%", left: "5%", width: "80px", height: "80px" },
  { src: blackStingray, key: "blackStingray", top: "5%", left: "30%", width: "110px", height: "110px" },
  { src: leatherbackSeaTurtle, key: "leatherbackSeaTurtle", top: "55%", left: "65%", width: "80px", height: "80px" },
  { src: humboldtPenguin, key: "humboldtPenguin", top: "70%", left: "80%", width: "80px", height: "80px" },
];

interface AquariumProps {
  children?: React.ReactNode;
}

const Aquarium: React.FC<AquariumProps> = ({ children }) => {
  const [fishData, setFishData] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const fetchFishData = async () => {
      try {
        // const response = await axios.get(`${API_BASE_URL}/api/v1/pokedex`);
        // setFishData(response.data); // 물고기 데이터 저장
        setFishData(
          {
            "gardenEel": true,
            "napoleonWrasse": false,
            "arowana": true,
            "blacktipReefShark": false,
            "africanManatee": true,
            "giantGrouper": false,
            "smallClawedOtter": true,
            "piranha": false,
            "zebraShark": true,
            "californiaSeaLion": true,
            "clownfish": false,
            "blackStingray": true,
            "leatherbackSeaTurtle": false,
            "humboldtPenguin": true
          }
        )
      } catch (error) {
        console.error("물고기 데이터를 가져오는 중 오류가 발생했습니다:", error);
      }
    };

    fetchFishData();
  }, []);

  return (
    <AquariumWrapper>
      {Object.entries(fishData).map(([key, value]) => {
        if (!value) return null; // 잡히지 않은 물고기는 표시하지 않음

        // 잡힌 물고기의 정보를 fishPixel 배열에서 찾음
        const fishInfo = fishPixel.find(fish => fish.key === key);
        if (!fishInfo) return null;

        return (
          <FishPixel
            key={key}
            src={fishInfo.src}
            alt={`fish-${key}`}
            style={{
              top: fishInfo.top,
              left: fishInfo.left,
              width: fishInfo.width,
              height: fishInfo.height,
            }}
          />
        );
      })}
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

const floatAnimation = (x: number, y: number) => keyframes`
  0% { transform: translate(0, 0); }
  50% { transform: translate(${x}px, ${y}px); }
  100% { transform: translate(0, 0); }
`;

const FishPixel = styled.img`
  position: absolute;
  animation: ${() =>
    floatAnimation(Math.random() * 20 - 10, Math.random() * 20 - 10)} 3s ease-in-out infinite;
  image-rendering: pixelated;
`;

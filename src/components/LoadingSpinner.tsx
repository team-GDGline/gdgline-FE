import fishIcon from "../assets/fishIcon.svg";
import {SyncLoader} from "react-spinners";
import {useEffect, useState} from "react";
import styled from "@emotion/styled";
import { Text } from "@chakra-ui/react";
export default function LoadingSpinner({timeout = 200}) {
  const [showSpinner, setShowSpinner] = useState(false);

  /**
   * [timeout]ms 후에 spinner를 보여준다.
   */
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpinner(true);
    }, timeout);

    return () => clearTimeout(timer); // 메모리 누수 방지
  }, []);


  return (
  <Wrapper>
      {showSpinner && (
        <>
          <img className="w-[60px] h-[60px]" src={fishIcon}/>
          <div className="h-[12px]"/>
          <SyncLoader color="#59CAFC" size={10}/>
          <Text mt="10px" fontSize='1xl' color="white">물고기 박사님이 확인 중이에요~</Text>
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
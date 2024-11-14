import { Button } from "@chakra-ui/react";
import { MouseEventHandler, ReactNode } from "react";
interface NextButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const NextButton: React.FC<NextButtonProps> = ({ children, onClick }) => {
  return (
    <Button
      onClick={onClick} // onClick 이벤트 연결
      bg="#C5EFFF"
      color="#05518F"
      fontSize="3xl"
      fontWeight={500}
      width="calc(100% - 96px)"
      height="60px"
      borderRadius="10px"
      _hover={{ bg: "#C5EFFF" }}
      position="absolute"
      bottom="120px"
      boxShadow="0px 4px 8px rgba(0, 0, 0, 0.2)" // 옅은 그림자
      _active={{
        bg: "#55CFFF",
        transform: "scale(0.95)", // 눌렀을 때 살짝 축소 효과
        boxShadow: "0 0 20px rgba(85, 207, 255, 0.6)", // 번지는 효과
      }}
    >
      {children}
    </Button>
  );
};

export default NextButton;

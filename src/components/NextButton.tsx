import { Button } from "@chakra-ui/react";
import { ReactNode } from "react";

interface NextButtonProps {
    children: ReactNode;
}

const NextButton: React.FC<NextButtonProps> = ({children}) => {
    return(
        <Button
            bg="#C5EFFF"
            color="#05518F"
            fontSize="3xl"
            fontWeight={500}
            width="calc(100% - 96px)"
            height="60px"
            borderRadius="10px"
            _hover={{bg: "#C5EFFF"}}
            position="absolute"
            bottom="100px"
            boxShadow="0px 4px 8px rgba(0, 0, 0, 0.2)" // 옅은 그림자
        >
            {children}
        </Button>
    );}

;

export default NextButton;
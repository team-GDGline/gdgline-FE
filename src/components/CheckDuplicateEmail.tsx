import { ReactNode } from "react";
import { 
    Input, Text, Button
 } from "@chakra-ui/react";
import styled from "@emotion/styled";

interface CheckDEProps {
    value: string;
    text: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
}

const CheckDuplicateEmail: React.FC<CheckDEProps> = ({ value, text, handleChange, placeholder }) => {
  return (
    <>
    <Text mb='8px' color="white" fontWeight="100" alignSelf="start"  ml="48px">{text}</Text>
    <Wrapper>
    
      <Input
      variant="filled"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        _placeholder={{ opacity: 1, color: 'gray.500' }}
        size='sm'
        height="60px"
        borderRadius="10px"
        backgroundColor="white"
        mb="24px"
      />
      <Button 
      w="60px" h="56px" 
      backgroundColor="#11597F" 
      color="white"
      borderRadius="10px"
      fontWeight="200">
        중복 확인
      </Button>
   </Wrapper>
   </>
  );
};

export default CheckDuplicateEmail;

const Wrapper = styled.div`
    display: flex;
    width: calc(100% - 96px);
    gap: 8px;
    align-items: baseline;
`;
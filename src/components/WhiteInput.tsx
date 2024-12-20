import { 
    Input, Text
 } from "@chakra-ui/react";


interface WhiteInputProps {
    value: string;
    text: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
}

const WhiteInput: React.FC<WhiteInputProps> = ({ value, text, handleChange, placeholder }) => {
  return (
    <>
      <Text mb='8px' color="white" fontWeight="100" alignSelf="start"  ml="48px">{text}</Text>
      <Input
      variant="filled"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        _placeholder={{ opacity: 1, color: 'gray.500' }}
        size='sm'
        width="calc(100% - 96px)"
        height="60px"
        borderRadius="10px"
        backgroundColor="white"
        mb="24px"
        _hover={{ backgroundColor: "white" }} // Keeps the background white on hover
        _focus={{ backgroundColor: "white", boxShadow: "none" }} // Keeps the background white on focus
      />
    </>
  );
};

export default WhiteInput;

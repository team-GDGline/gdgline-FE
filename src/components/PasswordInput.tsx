import { Input, Text } from "@chakra-ui/react";

interface PasswordInputProps {
  value: string;
  text: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  value,
  text,
  handleChange,
  placeholder,
}) => {
  return (
    <>
      <Text mb="8px" color="white" fontWeight="100" alignSelf="start" ml="48px">
        {text}
      </Text>
      <Input
        variant="filled"
        type="password"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        size="sm"
        width="calc(100% - 96px)"
        height="60px"
        borderRadius="10px"
        backgroundColor="white"
        mb="24px"
      />
    </>
  );
};

export default PasswordInput;

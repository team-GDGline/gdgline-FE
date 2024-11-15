import {ReactNode, useState } from "react";
import { Input, Text, Button, useToast } from "@chakra-ui/react";
import styled from "@emotion/styled";
import axios from "axios";
import { API_BASE_URL } from "../api/constant";
interface CheckDEProps {
    value: string;
    text: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
}

const CheckDuplicateEmail: React.FC<CheckDEProps> = ({ value, text, handleChange, placeholder }) => {
    const toast = useToast();

    const checkEmail = async () => {
        try {
            const response = await axios.get(`/api/v1/user/email/${value}`);
            if (response.data) {
                toast({
                    title: "가입 가능한 이메일입니다.",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                });
            } else {
                toast({
                    title: "이미 가입된 이메일입니다.",
                    status: "error",
                    duration: 3000,
                    isClosable: true,
                });
            }
        } catch (error) {
            toast({
                title: "오류가 발생했습니다.",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        }
    };

    return (
        <>
            <Text mb='8px' color="white" fontWeight="100" alignSelf="start" ml="48px">{text}</Text>
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
                    w="60px"
                    h="56px"
                    backgroundColor="#11597F"
                    color="white"
                    borderRadius="10px"
                    fontWeight="200"
                    onClick={checkEmail}
                >
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

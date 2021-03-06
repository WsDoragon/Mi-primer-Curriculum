import {
  Box,
  Center,
  FormControl,
  FormLabel,
  Input,
  Button,
  toast,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { GiClick } from "react-icons/Gi";

const select = () => {
  const { push } = useRouter();
  const [email, setEmail] = useState("");
  const toast = useToast();
  return (
    <>
      <Center>
        <Box margin="50px">
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="test@test.com"
              value={email}
              onChange={({ target: { value } }) => {
                setEmail(value);
              }}
            />
          </FormControl>

          <Button
            colorScheme="green"
            margin="10px"
            rightIcon={<GiClick size="30px" />}
            type="submit"
            onClick={() => {
              if (email.includes("@")) {
                push("/formulario?email=" + email);
              } else {
                toast({
                  title: "Error",
                  description: "Falta el @ en su Email",
                  status: "warning",
                  duration: 3000,
                });
              }
            }}
          >
            Siguiente
          </Button>
        </Box>
      </Center>
    </>
  );
};
//
export default select;

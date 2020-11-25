import {
  Box,
  Center,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { GiClick } from "react-icons/Gi";

const select = () => {
  const { push } = useRouter();
  const [email, setEmail] = useState("");
  return (
    <>
      <Center>
        <Box margin="50px">
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="email"
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
            onClick={() => {
              push("/formulario?email=" + email);
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

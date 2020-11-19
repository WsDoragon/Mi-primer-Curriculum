import {
  Box,
  Center,
  Stack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
} from "@chakra-ui/core";
import {GiClick} from "react-icons/Gi"

const select = () => {
  return (
    <>
      <Center>
        <Box margin="50px">
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input placeholder="email" />
          </FormControl>
          <Button colorScheme = "green" margin="10px" rightIcon={<GiClick size="30px"/>}>
          Siguiente
          </Button>
        </Box>
      </Center>

    </>
  );
};

export default select;

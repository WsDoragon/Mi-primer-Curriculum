import {
  Box,
  Center,
  Stack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/core";

const select = () => {
  return (
    <>
      <Center>
        <Box>
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input placeholder="email" />
          </FormControl>
        </Box>
      </Center>
    </>
  );
};

export default select;

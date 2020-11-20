import { Heading, Stack, Box, Center, Button, Link } from "@chakra-ui/react";
import { HiShieldCheck } from "react-icons/hi";

export default function IndexPage() {
  return (
    <>
      <Stack spacing="45px" padding="10px">
        <Heading align="center">Mi primer Curriculum</Heading>
        <Center>
          <Box
            p="6"
            m="4"
            flexBasis="45%"
            borderWidth="2px"
            borderColor="black"
            rounded="lg"
          >
            Esta es una pagina web diseñada para ayudarte a la confección de un
            Curriculum Estadar y tu informacion sera unicamente usada con este
            proposito. Si estas de acuerdo presiona: "Quiero comenzar con mi CV"
          </Box>
        </Center>
        <Center>
          <Link href="/Select">
            <Button
              colorScheme="blue"
              rightIcon={<HiShieldCheck size="30px" />}
            >
              Quiero comenzar mi CV
            </Button>
          </Link>
        </Center>
      </Stack>
    </>
  );
}

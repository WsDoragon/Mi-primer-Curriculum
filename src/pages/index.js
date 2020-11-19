import {
  Heading,
  Stack,
  Text,
  Box,
  Center,
  Grid,
  GridItem,
  Button,
  Link,
} from "@chakra-ui/core";
import {HiShieldCheck} from "react-icons/Hi"
//import { Center, Square, Circle } from "@chakra-ui/react";

import { ProbandoJavascript } from "../components/ProbandoJavascript";
import { ProbandoAPI } from "../components/ProbandoAPI";
import { ProbandoListas } from "../components/ProbandoListas";
import { ProbandoInput } from "../components/ProbandoInput";
import { page1 } from "../components/page1";

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
            Esta es una pagina web diseñada para ayudarte a la confección de un Curriculum Estadar y
            tu informacion sera unicamente usada con este proposito. Si estas de acuerdo presiona: "Quiero comenzar con mi CV"
          </Box>
        </Center>
        <Center>
          <Link href="/Select">
            <Button colorScheme="blue" rightIcon={<HiShieldCheck size="30px"/>}> 
            Quiero comenzar mi CV
            </Button>
          </Link>
        </Center>
      </Stack>
    </>
  );
}

//<ProbandoJavascript />
//<ProbandoAPI />
//<ProbandoListas />
//<ProbandoInput />

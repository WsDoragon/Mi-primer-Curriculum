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
        <Heading>Mi primer Curriculum</Heading>
        <Center>
          <Box
            p="6"
            m="4"
            flexBasis="45%"
            borderWidth="2px"
            borderColor="black"
            rounded="lg"
          >
            Esta es una pagina web creada para apoyar a personas que requieren
            de ayuda para crear su Curriculum para postular a trabajos.
          </Box>
        </Center>
        <Center>
          <Link href="/Select">
            <Button> Quiero comenzar mi CV</Button>
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

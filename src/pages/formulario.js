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
  Link
} from "@chakra-ui/core";
import {GiClick} from "react-icons/Gi"
import { ProbandoAPI } from "../components/ProbandoAPI";

//recibir el email y obtener el endpoint
const formulario = () => {
  return (
    <>
      <ProbandoAPI />
    </>
  );
};

export default formulario;

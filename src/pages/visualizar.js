import { Text, Heading, Box, Flex } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

export const dataFormulario = { formulario: null };

export default function Visualizar() {
  if (!dataFormulario.formulario) {
    return <Text>No existe Formulario</Text>;
  }

  return (
    <div padding="40px 40px 40px 40px">
      <Heading align="center">Curriculum Vitae</Heading>
      <Box
        padding="20px"
        margin="8px"
        //borderWidth="2px"
        //borderColor="black"
        /*height= "100%"
        width= "100%"*/
      >
        <h1>
          Nombre:{" "}
          {dataFormulario.formulario.nombre +
            " " +
            dataFormulario.formulario.apellido}{" "}
        </h1>
        <h1>run: {dataFormulario.formulario.rut} </h1>
        <h1>
          Fecha de nacimiento {dataFormulario.formulario.fecha_nacimiento}{" "}
        </h1>
        <h1>Domicilio: {dataFormulario.formulario.rut} </h1>
        <h1>Telefono: {dataFormulario.formulario.telefono} </h1>
        <h1>Email: {dataFormulario.formulario.email} </h1>
        <h1>Nacionalidad:{dataFormulario.formulario.nacionalidad}</h1>
        <h1>Idiomas: {dataFormulario.formulario.idiomas}</h1>
      </Box>

      <Flex>
        <Box
          padding="20px"
          margin="8px"
          borderWidth="2px"
          //borderColor="Gray"
          //height= "100%"
          width="30%"
        >
          <h1>Perfil:</h1>
        </Box>

        <Box
          padding="20px"
          margin="8px"
          borderWidth="2px"
          borderColor="Gray"
          //height= "100%"
          width="100%"
        >
          Vivo en {dataFormulario.formulario.direccion}, me coincidero una
          persona
          {dataFormulario.habilidades_blandas}, en cuanto a mi formacion es de
          {(" "+ dataFormulario.formulario.tipo_formacion + " ")}
          actualmente, me intereso por
          {(dataFormulario.formulario.intereses)} y tengo bastante
          facilidades, algunas son; 
          {(dataFormulario.formulario.habilidades)}
        </Box>
      </Flex>

      <Flex>
        <Box
          padding="20px"
          margin="8px"
          borderWidth="2px"
          //borderColor="Gray"
          //height= "100%"
          width="30%"
        >
          <h1>Actividades laborales:</h1>
        </Box>

        <Box
          padding="20px"
          margin="8px"
          borderWidth="2px"
          borderColor="Gray"
          //height= "100%"
          width="100%"
        >
          {(dataFormulario.formulario.experiencia_texto)}
        </Box>
      </Flex>

      <Flex>
        <Box
          padding="20px"
          margin="8px"
          borderWidth="2px"
          //borderColor="Gray"
          //height= "100%"
          width="30%"
        >
          <h1>Informacion de Interes:</h1>
        </Box>

        <Box
          padding="20px"
          margin="8px"
          borderWidth="2px"
          borderColor="Gray"
          //height= "100%"
          width="100%"
        >
          {(dataFormulario.formulario.competencias_digitales)}
          {(dataFormulario.formulario.premios)}
          {(dataFormulario.capcitaciones)}
        </Box>
      </Flex>
    </div>
  );
}

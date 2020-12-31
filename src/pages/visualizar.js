import { Text, Heading, Box, Flex, Button, ButtonGroup } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export const dataFormulario = { formulario: null };

export default function Visualizar() {
  if (!dataFormulario.formulario) {
    return <Text>No existe Formulario</Text>;
  }

  useEffect(() => {
    window.print();
  });

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
        <h1>Run: {dataFormulario.formulario.rut} </h1>
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
          Vivo en {(dataFormulario.formulario.direccion)}. 
          <h1>Me considero una persona {(dataFormulario.formulario.habilidades_blandas)} .</h1>
          <h1>En cuanto a mi formación es de tipo 
          {(" "+ dataFormulario.formulario.tipo_formacion + " ")}</h1>
          <h1>Actualmente me intereso por {(dataFormulario.formulario.intereses)} y tengo bastantes
          facilidades en diversas áreas, algunas son; 
          {(dataFormulario.formulario.habilidades)}</h1>
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
        > Competencias digitales: 
          <h1>{(" " + dataFormulario.formulario.competencias_digitales)} 
          {(", "+ dataFormulario.formulario. otras_comp_digitales)} .</h1>
          
          Premios: <h1>{(" " + dataFormulario.formulario.premios)}.</h1>
          Capacitaciones: <h1>{(" " + dataFormulario.formulario.capacitaciones)}.</h1>
        </Box>
      </Flex>
    </div>
  );
}

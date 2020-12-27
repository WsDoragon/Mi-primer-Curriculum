import { Text, Heading, Box } from "@chakra-ui/react";

export const dataFormulario = { formulario: null };

export default function Visualizar() {
  if (!dataFormulario.formulario) {
    return <Text>No existe Formulario</Text>;
  }

  return (
    <div margin="10px">
      <Heading align="center">Curriculum Vitae</Heading>
      <h1>
        Nombre:{" "}
        {JSON.stringify(
          dataFormulario.formulario.nombre +
            " " +
            dataFormulario.formulario.apellido
        )}{" "}
      </h1>
      <h1>rut: {JSON.stringify(dataFormulario.formulario.rut)} </h1>
      <h1>
        Fecha de nacimiento{" "}
        {JSON.stringify(
          "Fecha de nacimiento" + dataFormulario.formulario.fecha_nacimiento
        )}{" "}
      </h1>
      <h1>Domicilio: {JSON.stringify(dataFormulario.formulario.rut)} </h1>
      <h1>Telefono: {JSON.stringify(dataFormulario.formulario.telefono)} </h1>
      <h1>email: {JSON.stringify(dataFormulario.formulario.email)} </h1>
      <h1 align="center">Perfil:</h1>
      <Box
        p="6"
        m="4"
        flexBasis="45%"
        borderWidth="2px"
        borderColor="black"
        rounded="lg"
      >
        Vivo en {JSON.stringify(dataFormulario.formulario.direccion)}, me
        coincidero una persona
        {JSON.stringify(dataFormulario.habilidades_blandas)}, en cuanto a mi
        formacion es de{" "}
        {JSON.stringify(dataFormulario.formulario.tipo_formacion)}
        actualmente, me intereso por{" "}
        {JSON.stringify(dataFormulario.formulario.intereses)} y tengo bastante
        facilidades para
        {JSON.stringify(dataFormulario.formulario.habilidades)}
      </Box>
      <h1 align="center">Actividades laborales:</h1>
      <Box
        p="6"
        m="4"
        flexBasis="45%"
        borderWidth="2px"
        borderColor="black"
        rounded="lg"
      >
        {JSON.stringify(dataFormulario.formulario.experiencia_texto)}
      </Box>

      <h1 align="center">Informacion de Interes:</h1>
      <Box
        p="6"
        m="4"
        flexBasis="45%"
        borderWidth="2px"
        borderColor="black"
        rounded="lg"
      >
        {JSON.stringify(dataFormulario.formulario.competencias_digitales)}
        {JSON.stringify(dataFormulario.formulario.premios)}
        {JSON.stringify(dataFormulario.capcitaciones)}
      </Box>
    </div>
  );
}
import axios from "axios";
import { useState, useEffect } from "react";
import {
  Stack,
  Spinner,
  useToast,
  Input,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
//recibir el email y obtener el endpoint

export const getServerSideProps = (ctx) => {
  return {
    props: {
      email: ctx.query.email || "",
    },
  };
};

const formulario = ({ email }) => {
  const { push } = useRouter();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const toast = useToast();

  useEffect(() => {
    if (!email) {
      toast({
        status: "error",
        title: "Sin correo especificado!",
        description: "Será redireccionado",
      });

      setTimeout(() => {
        push("/select");
      }, 2000);
      return;
    }
    axios
      .post("/api/obtener_curriculum_base", {
        id_usuario: email,
      })
      .then(({ data }) => {
        setData(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [email]);

  return (
    <Stack padding="20px">
      {loading && <Spinner />}
      {data ? (
        <Stack>
          <InputGroup size="sm">
            <InputLeftAddon children="Nombre" />
            <Input
              borderRadius="0"
              placeholder="Inserte nombre"
              value={data.nombre}
              onChange={({ target: { value } }) => {
                setData({
                  ...data,
                  nombre: value,
                });
              }}
            />
          </InputGroup>

          <InputGroup size="sm">
            <InputLeftAddon children="Apellido" />
            <Input
              borderRadius="0"
              placeholder="Inserte apellido"
              defaultValue={data.apellido}
              onChange={({ target: { value } }) => {
                setData({
                  ...data,
                  apellido: value,
                });
              }}
            />
          </InputGroup>

          <InputGroup size="sm">
            <InputLeftAddon children="Telefono" />
            <Input
              borderRadius="0"
              placeholder="Inserte telefono"
              defaultValue={data.telefono}
              onChange={({ target: { value } }) => {
                setData({
                  ...data,
                  telfono: value,
                });
              }}
            />
          </InputGroup>

          <InputGroup size="sm">
            <InputLeftAddon children="Direccion" />
            <Input
              borderRadius="0"
              placeholder="Inserte direccion"
              defaultValue={data.direccion}
              onChange={({ target: { value } }) => {
                setData({
                  ...data,
                  direccion: value,
                });
              }}
            />
          </InputGroup>

          <InputGroup size="sm">
            <InputLeftAddon children="Email" />
            <Input
              borderRadius="0"
              placeholder="Inserte Email"
              defaultValue={data.email}
              onChange={({ target: { value } }) => {
                setData({
                  ...data,
                  email: value,
                });
              }}
            />
          </InputGroup>

          <InputGroup size="sm">
            <InputLeftAddon children="Formacion" />
            <Input
              borderRadius="0"
              placeholder="Inserte Tipo de formacion"
              defaultValue={data.tipo_formacion}
              onChange={({ target: { value } }) => {
                setData({
                  ...data,
                  tipo_formacion: value,
                });
              }}
            />
          </InputGroup>

          <InputGroup size="sm">
            <InputLeftAddon children="Intereses" />
            <Input
              borderRadius="0"
              placeholder="Inserte Intereses"
              defaultValue={data.intereses}
              onChange={({ target: { value } }) => {
                setData({
                  ...data,
                  intereses: value,
                });
              }}
            />
          </InputGroup>

          <InputGroup size="sm">
            <InputLeftAddon children="Habilidades" />
            <Input
              borderRadius="0" // Que hace esto?
              placeholder="Inserte Habilidades"
              defaultValue={data.habilidades}
              onChange={({ target: { value } }) => {
                setData({
                  ...data,
                  habilidades: value,
                });
              }}
            />
          </InputGroup>

          <InputGroup size="sm">
            <InputLeftAddon children="Experiencia" />
            <Input
              borderRadius="0" // Que hace esto?
              placeholder="Inserte Experiencias"
              defaultValue={data.experiencia_texto}
              onChange={({ target: { value } }) => {
                setData({
                  ...data,
                  experiencia_texto: value,
                });
              }}
            />
          </InputGroup>

          <InputGroup size="sm">
            <InputLeftAddon children="Experiencia 2" />
            <Input
              borderRadius="0" // Que hace esto?
              placeholder="Complete informacion"
              defaultValue={data.experiencia_items}
              onChange={({ target: { value } }) => {
                setData({
                  ...data,
                  experiencia_items: value,
                });
              }}
            />
          </InputGroup>

          <InputGroup size="sm">
            <InputLeftAddon children="Idiomas" />
            <Input
              borderRadius="0" // Que hace esto?
              placeholder="Complete Información"
              defaultValue={data.idiomas}
              onChange={({ target: { value } }) => {
                setData({
                  ...data,
                  idiomas: value,
                });
              }}
            />
          </InputGroup>

          <InputGroup size="sm">
            <InputLeftAddon children="Competencias Digitales" />
            <Input
              borderRadius="0" // Que hace esto?
              placeholder="Complete Información"
              defaultValue={data.competencias_digitales}
              onChange={({ target: { value } }) => {
                setData({
                  ...data,
                  competencias_digitales: value,
                });
              }}
            />
          </InputGroup>

          <InputGroup size="sm">
            <InputLeftAddon children="Otras competencias digitales" />
            <Input
              borderRadius="0" // Que hace esto?
              placeholder="Insete Competencias Digitales"
              defaultValue={data.otras_comp_digitales}
              onChange={({ target: { value } }) => {
                setData({
                  ...data,
                  otras_comp_digitales: value,
                });
              }}
            />
          </InputGroup> 

          <InputGroup size="sm">
            <InputLeftAddon children="Habilidades blandas" />
            <Input
              borderRadius="0" // Que hace esto?
              placeholder="Insete habilidades blandas"
              defaultValue={data.habilidades_blandas}
              onChange={({ target: { value } }) => {
                setData({
                  ...data,
                  habilidades_blandas: value,
                });
              }}
            />
          </InputGroup> 

          <InputGroup size="sm">
            <InputLeftAddon children="Premios" />
            <Input
              borderRadius="0" // Que hace esto?
              placeholder="Insete premios recibidos"
              defaultValue={data.premios}
              onChange={({ target: { value } }) => {
                setData({
                  ...data,
                  premios: value,
                });
              }}
            />
          </InputGroup>

          <InputGroup size="sm">
            <InputLeftAddon children="Capacitaciones" />
            <Input
              borderRadius="0" 
              placeholder="Insete Capacitaciónes realizadas"
              defaultValue={data.capacitaciones}
              onChange={({ target: { value } }) => {
                setData({
                  ...data,
                  capacitaciones: value,
                });
              }}
            />
          </InputGroup> 
        </Stack>
      ) : null}
    </Stack>
  );
};

export default formulario;

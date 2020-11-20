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
      email: ctx.query.email,
    },
  };
};

const formulario = ({ email }) => {
  const { push } = useRouter();
  const [data, setData] = useState({});
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
        </Stack>
      ) : null}
    </Stack>
  );
};

export default formulario;

import axios from "axios";
import { useState, useEffect } from "react";
//Date picker (npm install react-datepicker --save)
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  Stack,
  Center,
  Box,
  Spinner,
  useToast,
  Input,
  InputGroup,
  InputLeftAddon,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Flex,
  Heading,
  RadioGroup,
  HStack,
  Radio,
  Checkbox,
  CheckboxGroup,
  Textarea, 
  extendTheme, 
  ChakraProvider,
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
  const [startDate, setStartDate] = useState(new Date());

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
      <Heading align="center"> Formulario: Mi primer Curriculum</Heading>
      {data ? (
        <Stack>
          <Flex>
            <InputGroup padding="10px" size="sm" width="50%">
              <InputLeftAddon children="Nombre" />
              <Input
                borderRadius="0"
                placeholder="Inserte nombre"
                Value={data.nombre}
                onChange={({ target: { value } }) => {
                  setData({
                    ...data,
                    nombre: value,
                  });
                }}
              />
            </InputGroup>
            <InputGroup padding="10px" size="sm" width="50%">
              <InputLeftAddon children="Apellidos" />
              <Input
                borderRadius="0"
                placeholder="Inserte apellidos"
                Value={data.apellido}
                onChange={({ target: { value } }) => {
                  setData({
                    ...data,
                    apellido: value,
                  });
                }}
              />
            </InputGroup>
            </Flex>

            <Flex>
            <InputGroup padding="10px" size="sm" width="100%">
              <InputLeftAddon children="RUT" />
              <Input
                borderRadius="0"
                placeholder="Inserte rut"
                value={data.rut}
                onChange={({ target: { value } }) => {
                  setData({
                    ...data,
                    rut: value,
                  });
                }}
              />
            </InputGroup>

            <InputGroup padding="10px" size="sm">
              <InputLeftAddon children="Género" />
              <FormControl as="fieldset">
                <RadioGroup value={data.genero} onChange={(value)=>{
                  setData({
                    ...data,
                    genero: value
                  })
                }}>
                  <HStack spacing="24px">
                    <Radio size="sm" padding="5px" value="femenino">Femenino</Radio>
                    <Radio size="sm" padding="5px" value="masculino">Masculino</Radio>
                    <Radio size="sm" padding="5px" value="no_binario">No Binario</Radio>
                  </HStack>
                </RadioGroup>
              </FormControl>
            </InputGroup>
            </Flex>

            <Flex>
            <InputGroup padding="10px" size="sm">
              <InputLeftAddon children="Fecha de Nacimiento" />
              <Center>
                <Box
                  padding="3px" 
                  borderWidth="1px"
                  borderColor="blue"
                  rounded="lg"
                  textAlign="center"
                >
                  <DatePicker
                    css={{ textAlign: "center", visibility: "hidden" }}
                    rounded="lg"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </Box>
              </Center>
            </InputGroup>

            <InputGroup padding="10px" size="sm">
              <InputLeftAddon children="Nacionalidad" />
              <Input
                borderRadius="0"
                placeholder="Inserte nacionalidad"
                Value={data.nacionalidad}
                onChange={({ target: { value } }) => {
                  setData({
                    ...data,
                    nacionalidad: value,
                  });
                }}
              />
            </InputGroup>
            </Flex>

          <Flex>
            <InputGroup padding="10px" size="sm">
              <InputLeftAddon children="Telefono" />
              <Input
                borderRadius="0"
                placeholder="Inserte telefono"
                Value={data.telefono}
                onChange={({ target: { value } }) => {
                  setData({
                    ...data,
                    telfono: value,
                  });
                }}
              />
            </InputGroup>

            <InputGroup padding="10px" size="sm">
              <InputLeftAddon children="Direccion" />
              <Input
                borderRadius="0"
                placeholder="Inserte direccion"
                Value={data.direccion}
                onChange={({ target: { value } }) => {
                  setData({
                    ...data,
                    direccion: value,
                  });
                }}
              />
            </InputGroup>
          </Flex>

          <Flex>
          <InputGroup padding="10px" size="sm">
            <InputLeftAddon children="Email" />
            <Input
              borderRadius="0"
              placeholder="Inserte Email"
              Value={data.email}
              onChange={({ target: { value } }) => {
                setData({
                  ...data,
                  email: value,
                });
              }}
            />
          </InputGroup>

          <InputGroup padding="10px" size="sm">
            <InputLeftAddon children="Formacion" />
            <FormControl as="fieldset">
                <RadioGroup Value="">
                  <HStack spacing="24px">
                    <Radio size="sm" padding="5px" value="TP">Tecnico Profesional</Radio>
                    <Radio size="sm" padding="5px" value="CH">Cientifico Humanista</Radio>
                  </HStack>
                </RadioGroup>
              </FormControl>
          </InputGroup>
          </Flex>

          <Flex>
          <InputGroup padding="10px" size="sm">
            <InputLeftAddon children="Intereses" />
            <Input
              borderRadius="0"
              placeholder="Inserte Intereses"
              Value={data.intereses}
              onChange={({ target: { value } }) => {
                setData({
                  ...data,
                  intereses: value,
                });
              }}
            />
          </InputGroup>

          <InputGroup padding="10px" size="sm">
            <InputLeftAddon children="Habilidades" />
            <Input
              borderRadius="0" // Que hace esto?
              placeholder="Inserte Habilidades"
              Value={data.habilidades}
              onChange={({ target: { value } }) => {
                setData({
                  ...data,
                  habilidades: value,
                });
              }}
            />
          </InputGroup>
          </Flex>

          <Flex>
          <InputGroup padding="10px" size="sm">
            <InputLeftAddon children="Experiencia" />
            <Textarea
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

          <InputGroup padding="10px" size="sm">
            <InputLeftAddon children="Experiencia 2" />
            <Textarea
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
          </Flex>

          <Flex>
          <InputGroup padding="10px" size="sm">
            <InputLeftAddon children="Idiomas" />
            <Textarea
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

          <InputGroup padding="10px" size="sm">
            <InputLeftAddon children="Competencias Digitales" />
            <Textarea
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
          </Flex>

          <Flex>
          <InputGroup padding="10px" size="sm">
            <InputLeftAddon children="Otras competencias digitales" />
            <Textarea
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

          <InputGroup padding="10px" size="sm">
            <InputLeftAddon children="Habilidades blandas" />
            <Textarea
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
          </Flex>

          <Flex>
          <InputGroup padding="10px" size="sm">
            <InputLeftAddon children="Premios" />
              <FormControl as="fieldset">
                <RadioGroup Value="">
                  <HStack spacing="24px">
                    <Radio size="sm" padding="5px" value="Si">Si</Radio>
                    <Radio size="sm" padding="5px" value="No">No</Radio>
                  </HStack>
                </RadioGroup>
              </FormControl>
          </InputGroup>

          <InputGroup padding="10px" size="sm" >
            <InputLeftAddon children="Capacitaciones" />
              <FormControl as="fieldset">
                <RadioGroup defaultValue="">
                  <HStack spacing="24px">
                    <Radio size="sm" padding="5px" value="Si">Si</Radio>
                    <Radio size="sm" padding="5px" value="No">No</Radio>
                  </HStack>
                </RadioGroup>
              </FormControl>
          </InputGroup>
          </Flex>

          <Flex>
          <InputGroup padding="10px" size="sm" >
            <Textarea
              Value={data.premios}
              onChange={({ target: { value } }) => {
                setData({
                  ...data,
                  premios: value,
                });
              }}
              placeholder="En el caso de responder si"
              size="sm"
            />
          </InputGroup>

          <InputGroup padding="10px" size="sm">
            <Textarea
              Value={data.capacitaciones}
              onChange={({ target: { value } }) => {
                setData({
                  ...data,
                  capacitaciones: value,
                });
              }}
              placeholder="En el caso de responder Sí"
              size="sm"
            />
          </InputGroup>
          </Flex>
        </Stack>
      ) : null}
    </Stack>
  );
};

export default formulario;

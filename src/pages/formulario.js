import axios from "axios";
import { useState, useEffect } from "react";
//Date picker (npm install react-datepicker --save)
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { dataFormulario } from "./visualizar";
import {
  Button,
  ButtonGroup,
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
  Select,
  CheckboxGroup,
  Textarea,
  extendTheme,
  ChakraProvider,
  useColorMode,
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
      <Heading align="center"> Mi primer Curriculum</Heading>
      {data ? (
        <Stack>
          <Flex>
            <InputGroup size="sm" width="50%" padding="10px">
              <InputLeftAddon children="Nombres" />
              <Input
                borderRadius="0"
                placeholder="Juan José"
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
                placeholder="Perez Gonzalez"
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
                placeholder="11.222.333-4"
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
                <RadioGroup
                  value={data.genero}
                  onChange={(value) => {
                    setData({
                      ...data,
                      genero: value,
                    });
                  }}
                >
                  <HStack spacing="24px">
                    <Radio size="sm" padding="5px" value="femenino">
                      Femenino
                    </Radio>
                    <Radio size="sm" padding="5px" value="masculino">
                      Masculino
                    </Radio>
                    <Radio size="sm" padding="5px" value="No binario">
                      No Binario
                    </Radio>
                  </HStack>
                </RadioGroup>
              </FormControl>
            </InputGroup>
          </Flex>

          <Flex>
            <InputGroup size="sm" padding="10px">
              <InputLeftAddon children="Fecha de Nacimiento" />
              <Box borderWidth="3px" borderColor="blue" rounded="lg">
                <DatePicker
                  dateFormat="dd/MM/yyyy"
                  css={{ visibility: "hidden" }}
                  //rounded="lg"
                  selected={new Date(data.fecha_nacimiento)}
                  onChange={(date) =>
                    setData({ ...data, fecha_nacimiento: date.toISOString() })
                  }
                />
              </Box>
            </InputGroup>

            <InputGroup padding="10px" size="sm">
              <InputLeftAddon children="Nacionalidad" />
              <Input
                borderRadius="0"
                placeholder="Chilena u otra"
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
                placeholder="9xxxxxxxx"
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
                placeholder="Casa, Calle/Pasaje, Sector"
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
              <Select
                placeholder="Seleccione"
                Value={data.tipo_formacion}
                onChange={({ target: { value } }) => {
                  setData({
                    ...data,
                    tipo_formacion: value,
                  });
                }}
              >
                <option value="Básica Completa">Básica Completa</option>
                <option value="Básica Incompleta">Básica Incompleta</option>
                <option value="Liceo Cientifico Humanista Completo">
                  Liceo Cientifico Humanista Completo
                </option>
                <option value="Liceo Cientifico Humanista Incompleto">
                  Liceo Cientifico Humanista Incompleto
                </option>
                <option value="Liceo Tecnico Profesional Completo">
                  Liceo Tecnico Profesional Completo
                </option>
                <option value="Liceo Tecnico Profecional Incompleto">
                  Liceo Tecnico Profecional Incompleto
                </option>
              </Select>
            </InputGroup>
          </Flex>

          <Flex>
          <InputGroup padding="10px" size="sm">
              <InputLeftAddon children="Idiomas" />
              <CheckboxGroup 
                Value={data.idiomas}
                onChange={ value  => {
                  setData({
                    ...data,
                    idiomas: value,
                  });
                }} >
                <HStack>
                  <Checkbox value="Español ">Español</Checkbox>
                  <Checkbox value="Ingles ">Ingles</Checkbox>
                  <Checkbox value="Frances ">Frances</Checkbox>
                  <Checkbox value="Portugues ">Portugues</Checkbox>
                  <Checkbox value="Ruso ">Ruso</Checkbox>
                  <Checkbox value="Italiano ">Italiano</Checkbox>
                </HStack>
              </CheckboxGroup>
            </InputGroup>

            <InputGroup padding="10px" size="sm">
              <InputLeftAddon children="Intereses" />
              <Input
                borderRadius="0"
                placeholder="Inserte acciones. Ej: Aprender, nadar, etc.."
                Value={data.intereses}
                onChange={({ target: { value } }) => {
                  setData({
                    ...data,
                    intereses: value,
                  });
                }}
              />
            </InputGroup>
          </Flex>

          <Heading align="center" size="md">
            {" "}
            Experiencia Laboral:
          </Heading>
          <Flex>
            <InputGroup padding="10px" size="sm">
              <Textarea
                placeholder="Ninguna/ Trabajar en ******** ocupe el puesto de ********* entre el periodo de tiempo XX/XX/XXXX hasta XX/XX/XXXX, mi experiencia trabajando ahí fue ..."
                Value={data.experiencia_texto}
                onChange={({ target: { value } }) => {
                  setData({
                    ...data,
                    experiencia_texto: value,
                  });
                }}
              />
            </InputGroup>
          </Flex>

          <Flex>
            <InputGroup padding="10px" size="sm">
              <InputLeftAddon children="Habilidades" />
              <Textarea
                placeholder="Inserte Habilidades, continuando la frase 'algunas son:'"
                Value={data.habilidades}
                onChange={({ target: { value } }) => {
                  setData({
                    ...data,
                    habilidades: value,
                  });
                }}
              />
            </InputGroup>

            <InputGroup padding="10px" size="sm">
              <InputLeftAddon children="Habilidades blandas" />
              <Textarea
                placeholder="Inserte habilidades blandas, continuando la frase 'me considero una persona..'"
                Value={data.habilidades_blandas}
                onChange={({ target: { value } }) => {
                  setData({
                    ...data,
                    habilidades_blandas: value,
                  });
                }}
              />
            </InputGroup>
          </Flex>

          <InputGroup padding="10px" size="sm">
            <InputLeftAddon children="Competencias digitales" />
            <CheckboxGroup Value={data.competencias_digitales}
                onChange={ value  => {
                  setData({
                    ...data,
                    competencias_digitales: value,
                  });
                }} >
              <HStack>
                <Checkbox value="Base de Datos ">Base de Datos</Checkbox>
                <Checkbox value="Planilla de Cálculo ">
                  Planilla de Cálculo
                </Checkbox>
                <Checkbox value="Procesamiento de Texto ">
                  Procesamiento de Texto
                </Checkbox>
                <Checkbox value="Presentaciones ">Presentaciones</Checkbox>
                <Checkbox value="Manejo de Internet ">
                  Manejo de Internet
                </Checkbox>
                <Checkbox value="Edición de Video ">Edición de Video</Checkbox>
                <Checkbox value="Edición de Imagenes ">
                  Edición de Imagenes
                </Checkbox>
              </HStack>
            </CheckboxGroup>
          </InputGroup>

          <InputGroup padding="10px" size="sm">
            <InputLeftAddon children="Otras competencias digitales" />
            <Input
              borderRadius="0" // Que hace esto?
              placeholder="Inserte Competencias Digitales"
              Value={data.otras_comp_digitales}
              onChange={({ target: { value } }) => {
                setData({
                  ...data,
                  otras_comp_digitales: value,
                });
              }}
            />
          </InputGroup>

          <Flex>
            <InputGroup padding="10px" size="sm" width="50%">
              <InputLeftAddon children="Premios" />
              <FormControl as="fieldset">
                <RadioGroup Value="">
                  <HStack spacing="24px">
                    <Radio size="sm" padding="5px" value="Si">
                      Si
                    </Radio>
                    <Radio size="sm" padding="5px" value="No">
                      No
                    </Radio>
                  </HStack>
                </RadioGroup>
              </FormControl>
            </InputGroup>

            <InputGroup padding="10px" size="sm">
              <InputLeftAddon children="En el caso de responder si" />
              <Input
                borderRadius="0"
                placeholder="Inserte Premios obtenidos"
                Value={data.premios}
                onChange={({ target: { value } }) => {
                  setData({
                    ...data,
                    premios: value,
                  });
                }}
              />
            </InputGroup>
          </Flex>

          <Flex>
            <InputGroup padding="10px" size="sm" width="50%">
              <InputLeftAddon children="Capacitaciones" />
              <FormControl as="fieldset">
                <RadioGroup Value="">
                  <HStack spacing="24px">
                    <Radio size="sm" padding="5px" value="Si">
                      Si
                    </Radio>
                    <Radio size="sm" padding="5px" value="No">
                      No
                    </Radio>
                  </HStack>
                </RadioGroup>
              </FormControl>
            </InputGroup>

            <InputGroup padding="10px" size="sm">
              <InputLeftAddon children="En el caso de responder si" />
              <Input
                borderRadius="0"
                placeholder="Inserte Capacitaciones realizadas"
                Value={data.capacitaciones}
                onChange={({ target: { value } }) => {
                  setData({
                    ...data,
                    capacitaciones: value,
                  });
                }}
              />
            </InputGroup>
          </Flex>
          <Center>
            <ButtonGroup variant="outline" spacing="6">
              <Button
                colorScheme="blue"
                onClick={() => {
                  dataFormulario.formulario = data;
                  push("/visualizar");
                }}
              >
                Finalizar
              </Button>
            </ButtonGroup>
          </Center>
        </Stack>
      ) : null}
    </Stack>
  );
};

export default formulario;

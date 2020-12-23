import { Text } from "@chakra-ui/react"

export const dataFormulario={formulario:null}


export default function Visualizar(){
  if (!dataFormulario.formulario){
    return <Text>No existe Formulario</Text>
  }
  
  return <div>{JSON.stringify(dataFormulario)} </div>
}  
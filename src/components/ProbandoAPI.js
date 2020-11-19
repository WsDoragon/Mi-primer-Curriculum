import { Button, Text, useToast } from "@chakra-ui/core";
import Axios from "axios";
import { useState } from "react";
import { MdHttp } from "react-icons/md";

export const ProbandoAPI = () => {
  const [apiData, setApiData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const { data } = await Axios.post("/api/obtener_curriculum_base", {
    id_usuario: "bladimirpardom@gmail.com",
  });

  return (
    <>
      {apiData ? <Text>{apiData}</Text> : null}{
          const dataString = JSON.stringify(data);
          // hacer maping del curriculum
          setApiData(dataString);
        }    
  </>
  );
};

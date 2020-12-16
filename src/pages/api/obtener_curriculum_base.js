import { NextApiResponse, NextApiRequest } from "next";

/**
 * @export
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
export default async (req, res) => {
  let curriculum = {
    id_usuario: req.body.id_usuario,
    nombre: "",
    apellido: "",
    rut: "",
    genero: "", // Femenino, Masculino, No binario.
    fecha_nacimiento: "",
    nacionalidad: "", // Chileno,
    telefono: 624612572,
    direccion: "",
    email: req.body.id_usuario,
    tipo_formacion: "", // TP, CH
    intereses: "",
    habilidades: "",
    experiencia_texto: "",
    experiencia_items: [
      { exp_descripcion: "xxxxx", desde: "13-10-2017", hasta: "15-12-2017" },
    ],
    idiomas: [
      {
        idioma: "español",
        nivel: "básico", // "básico","medio","fluido"
      },
    ],
    competencias_digitales: {
      proc_texto: "básico", // "nulo","básico","medio","fluido"
      planilla_calculo: "básico",
      internet: "básico",
      base_datos: "básico",
      presentaciones: "básico",
      edicion_video: "básico",
      edicion_imagenes: "básico",
    },
    otras_comp_digitales: "",
    habilidades_blandas: "",
    premios: "",
    capacitaciones: "",
  };

  res.send(curriculum);
};

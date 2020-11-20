import { NextApiResponse, NextApiRequest } from "next";

/**
 * @export
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
export default async (req, res) => {
  let curriculum = {
    id_usuario: req.body.id_usuario,
    nombre: "juan",
    apellido: "guerra",
    telefono: 624612572,
    direccion: "",
    email: "",
    tipo_formacion: "TP", // TP, CH
    intereses: "",
    abilidades: "",
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
    abilidades_blandas: "",
    premios: "",
    capacitaciones: "",
  };

  res.send(curriculum);
};

import { MongoClient } from "mongodb";

const uri = "mongodb://mongo.pablosz.tech?retryWrites=true&w=majority";

if (!process.env.MONGODB_PASSWORD) {
  setInterval(() => {
    console.error(
      "CREA UN ARCHIVO .env CON LA CONTRASEÑA PARA LA BASE DE DATOS!"
    );
  }, 1000);
}

const client = new MongoClient(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  auth: {
    user: "user-info104-grupo3",
    password:
      process.env.MONGODB_PASSWORD ||
      "Agrega MONGODB_PASSWORD=tu_contraseña en archivo .env",
  },
});

export const dbConnection = client
  .connect()
  .then((client) => {
    return client.db("info104-grupo3");
  })
  .catch((err) => {
    console.error(err);
    throw Error(err);
  });

import multer from "multer";
import { v4 as uuid } from "uuid";
import axios from "axios";
import token from "./constantes";
const upload = multer({
  storage: multer.diskStorage({
    destination: "./public/uploads",

    filename: (req, file, cb) => cb(null, `${uuid()}&${file.originalname}`),
  }),
});

async function sendtoFacebook(
  url = "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1120&q=80"
) {
  const res = await axios.post(
    `https://graph.facebook.com/757916544599335/photos?url=${url}&access_token=${token}`
  );
  return res.data;
}
export { upload, sendtoFacebook };

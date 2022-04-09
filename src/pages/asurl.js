import axios from "axios";
import { useState } from "react";

export default function asUrl() {
  const [url, setUrl] = useState("");
  async function sendImage() {
    const res = await axios.post("http://localhost:3000/api/asurl", { url });

    console.log(res.data);
  }
  return (
    <div>
      <h1>Subir imagen desde url</h1>
      <input
        placeholder="url"
        type="url"
        value={url}
        onChange={({ target }) => setUrl(target.value)}
      />
      <button onClick={sendImage}>Enviar</button>
    </div>
  );
}

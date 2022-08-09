import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

import * as ga from "../lib/google-analytics";

export default function Abount() {
  const [message, setMessage] = useState("");

  const handleInput = (e: any) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    ga.event({
      action: "submit_form",
      category: "Contant",
      label: "Message_Contant",
      value: message,
    });

    setMessage("");
  };

  return (
    <div>
      <Head>
        <title>Pagina Sobre</title>
      </Head>
      <h2>Welcome Abount Page</h2>

      <Link href={"/"}>
        <a>Go To abount home</a>
      </Link>

      <div style={{ marginTop: "61px" }}>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Message:</span>
            <textarea
              name="message"
              id="message"
              onChange={handleInput}
              value={message}
            ></textarea>
          </label>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}

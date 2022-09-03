import React from "react";
// import styles from "./MainCard.module.css";
import CommentInput from "../CommentInput/CommentInput";
import { UserContext } from "../../UserContext";

const MainCard = () => {
  const dados = React.useContext(UserContext);
  console.log(dados);

  return (
    <section className="rounded-md bg-white py-4 px-4">
      <h1 className="font-bold text-neutral-600 text-2xl mb-4">Hello User.</h1>
      <CommentInput action="send" />
    </section>
  );
};

export default MainCard;

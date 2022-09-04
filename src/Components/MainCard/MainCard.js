import React from "react";
// import styles from "./MainCard.module.css";
import CommentInput from "../CommentInput/CommentInput";
import { UserContext } from "../../UserContext";

const MainCard = () => {
  const { userdata, loading } = React.useContext(UserContext);
  console.log(userdata);

  return (
    <section className="rounded-md bg-white py-4 px-4 relative">
      <h1 className="font-bold text-neutral-600 text-2xl mb-4">
        Hello {userdata && <>{userdata["username"]}</>}
      </h1>
      <CommentInput action="send" />
    </section>
  );
};

export default MainCard;

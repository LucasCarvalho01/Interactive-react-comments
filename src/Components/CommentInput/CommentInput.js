import React from "react";
import { UserContext } from "../../UserContext.js";
import Button from "../FormElements/Button";
import Textarea from "../FormElements/Textarea";

const CommentInput = ({ action }) => {
  const [message, setMessage] = React.useState("");
  const { userdata, loading } = React.useContext(UserContext);

  return (
    <div className="relative">
      <form>
        <Textarea
          placeholder="What are your thoughts?"
          id="mainMessage"
          name="mainMessage"
          message={message}
          setMessage={setMessage}
        />

        <Button action={action} />
      </form>

      <div className="inline-block rounded-full overflow-hidden absolute left-0 -bottom-3">
        {userdata && <img src={userdata.image.png} alt="User profile" />}
      </div>
    </div>
  );
};

export default CommentInput;

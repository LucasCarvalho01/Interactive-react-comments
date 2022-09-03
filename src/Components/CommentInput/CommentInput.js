import React from "react";
import userPhoto from "../../images/avatars/image-juliusomo.png";
import Button from "../FormElements/Button";
import Textarea from "../FormElements/Textarea";

const CommentInput = ({ action }) => {
  const [message, setMessage] = React.useState("");

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
        <img src={userPhoto} alt="User profile" />
      </div>
    </div>
  );
};

export default CommentInput;

import React from "react";
import { UserContext } from "../../UserContext.js";
import Button from "../FormElements/Button";
import Textarea from "../FormElements/Textarea";

const CommentInput = ({ action }) => {
  const [message, setMessage] = React.useState("");
  const { comments, setComments, userdata, loading, getCurrentId } =
    React.useContext(UserContext);

  function handleNewComment(event) {
    if (event) {
      event.preventDefault();
    }

    // Create new object with info of new comment to be posted
    const newComment = {
      id: +getCurrentId(),
      content: message,
      createdAt: "just now",
      replies: [],
      score: 0,
      user: userdata,
    };

    setComments((prev) => [newComment, ...prev]);

    setMessage("");
  }

  return (
    <div className="relative">
      <form onSubmit={handleNewComment}>
        <Textarea
          placeholder="What are your thoughts?"
          id="mainMessage"
          name="mainMessage"
          message={message}
          setMessage={setMessage}
          handleNewComment={handleNewComment}
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

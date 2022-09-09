import React from "react";
import Textarea from "../FormElements/Textarea";

// receives parameter inidcating who the reply is directed
const ReplyBox = ({ replyTo }) => {
  const [replyMsg, setReplyMsg] = React.useState("");

  const novoReply = {
    content:
      "este é um novo comentário que eu fiz para poder testar e incrementá-lo a lista de comentários já existentes. Espero muit oque funcione do jeito que espero!",
    createdAt: "1 min ago",
    id: 10,
    replyingTo: "maxblagun",
    score: 1,
    user: {
      image: {
        png: "./images/avatars/image-juliusomo.png",
      },
      username: "registadeu",
    },
  };

  function handleSubmit(event) {
    if (event) {
      event.preventDefault();
    }

    if (replyMsg) {
      console.log(replyTo, replyMsg);
      setReplyMsg("");
    }
  }

  // execute when enter is pressed on textarea
  function handleEnterSubmit(event) {
    if (event.key === "Enter" && event.shiftKey === false) {
      event.preventDefault();
      handleSubmit();
    }
  }

  return (
    <div className="rounded-md bg-white py-4 px-4 mb-8 -mt-4">
      <form onSubmit={handleSubmit}>
        <p className="text-sm text-slate-400 mb-2">Replying to {replyTo}</p>
        <textarea
          className="border rounded-md block w-full h-40 p-2 resize-none text-sm overflow-auto hover:border-gray-800 hover:border-2 focus:border-gray-800 focus:outline-none focus:border-2 active:border-gray-800 active:border-2"
          value={replyMsg}
          onChange={({ target }) => setReplyMsg(target.value)}
          onKeyDown={(event) => handleEnterSubmit(event)}
          placeholder=""
          id="directReply"
          name="directReply"
          autoFocus
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white uppercase font-medium px-8 py-2 rounded-md tracking-wide block ml-auto mt-6 mb-4 hover:cursor-pointer "
        >
          Reply
        </button>
      </form>
    </div>
  );
};

export default ReplyBox;

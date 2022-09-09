import React from "react";
import { ReactComponent as ReplyIcon } from "../../images/icon-reply.svg";
import { ReactComponent as DeleteIcon } from "../../images/icon-delete.svg";
import ReplyBox from "./ReplyBox";
import ReplyCard from "./ReplyCard";
import styles from "./ReplyCard.module.css";

const FeedCard = ({ content, createdAt, replies, score, user, userLogin }) => {
  // state to know if user has voted in that comment
  const [upvoted, setUpvoted] = React.useState(false);
  const [downvoted, setDownvoted] = React.useState(false);
  const [votes, setVotes] = React.useState(score);

  // state to controle the reply text box
  const [replying, setReplying] = React.useState(false);

  // function to update the score
  function handleUpvote() {
    setUpvoted((prev) => !prev);
    upvoted ? setVotes((prev) => prev - 1) : setVotes((prev) => prev + 1);
    setDownvoted(false);
  }

  function handleDownVote() {
    setDownvoted((prev) => !prev);
    downvoted ? setVotes((prev) => prev + 1) : setVotes((prev) => prev - 1);
    setUpvoted(false);
  }

  function handleNewReply() {
    setReplying(true);
  }

  function handleDeleteComment(event) {
    console.log(event.target);
  }

  return (
    <>
      <div className="relative rounded-md bg-white py-4 px-4 mb-8">
        <div>
          <div className="flex gap-4 items-center">
            <img src={user.image.png} alt={user.username} className=" w-8" />
            <h2 className="font-semibold">{user.username}</h2>
            <h3 className="text-stone-500">{createdAt && <>{createdAt}</>}</h3>
          </div>
          <p className="text-stone-500 my-4">{content}</p>
        </div>

        <div className="rounded-lg inline-flex items-center bg-indigo-50 font-semibold">
          <button
            className={`text-lg text-indigo-300 px-4 py-2 hover:md:text-indigo-500 ${
              upvoted && "text-indigo-500"
            }`}
            onClick={handleUpvote}
          >
            +
          </button>
          <span className="py-2 text-indigo-500">{votes ? votes : 0}</span>
          <button
            className={`text-lg text-indigo-300 px-4 py-2 hover:md:text-indigo-500 ${
              downvoted && "text-indigo-500"
            }`}
            onClick={handleDownVote}
          >
            -
          </button>
        </div>

        <div className="absolute right-1 bottom-3">
          {userLogin.username === user.username ? (
            <button
              onClick={handleDeleteComment}
              className={`inline-flex items-center gap-1 text-red-600 font-semibold p-4 px-1 mr-2 hover:text-red-300 ${styles.deleteBtn}`}
            >
              <DeleteIcon />
              <span>Delete</span>
            </button>
          ) : null}

          <button
            className={`inline-flex items-center gap-1 text-indigo-600 font-semibold p-4 pl-1 hover:text-indigo-300 ${styles.replyBtn} `}
            onClick={handleNewReply}
          >
            <ReplyIcon />
            <span>Reply</span>
          </button>
        </div>
      </div>

      {replying && <ReplyBox replyTo={user.username} />}

      {/* Check if there are replies to that comment, and render them */}
      {replies.length ? (
        <div className="border-l-2 pl-4 -mt-3">
          {replies.map(
            ({ id, user, createdAt, replyingTo, content, score }) => {
              return (
                <ReplyCard
                  key={id}
                  user={user}
                  createdAt={createdAt}
                  replyingTo={replyingTo}
                  content={content}
                  score={score}
                />
              );
            }
          )}
        </div>
      ) : null}
    </>
  );
};

export default FeedCard;

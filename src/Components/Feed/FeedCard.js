import { ReactComponent as ReplyIcon } from "../../images/icon-reply.svg";
import styles from "./FeedCard.module.css";

const FeedCard = ({ content, createdAt, replies, score, user }) => {
  return (
    <>
      <div className="rounded-md bg-white py-4 px-4 mb-8">
        <div>
          <div className="flex gap-4 items-center">
            <img src={user.image.png} alt={user.username} className=" w-8" />
            <h2 className="font-semibold">{user.username}</h2>
            <h3 className="text-stone-500">{createdAt && <>{createdAt}</>}</h3>
          </div>
          <p className="text-stone-500 my-4">{content}</p>
        </div>

        <div className="rounded-lg inline-flex items-center bg-indigo-50 font-semibold">
          <button className="text-lg text-indigo-300 px-4 py-2  hover:text-indigo-500">
            +
          </button>
          <span className="py-2 text-indigo-500">{score}</span>
          <button className="text-lg text-indigo-300 px-4 py-2 hover:text-indigo-500">
            -
          </button>
        </div>

        <button
          className={`inline-flex float-right items-center gap-2 text-indigo-600 font-semibold p-4 hover:text-indigo-300 ${styles.replyBtn} `}
        >
          <ReplyIcon />
          <span>Reply</span>
        </button>
      </div>

      {/* Check if there are replies to that comment, and render them */}
      {replies.length ? (
        <div className="border-l-2 pl-4 -mt-3">
          {replies.map((reply) => {
            return (
              <div
                key={reply.id}
                className="rounded-md bg-white py-4 px-4 mb-4"
              >
                <div>
                  <div className="flex gap-4 items-center">
                    <img
                      src={reply.user.image.png}
                      alt={reply.user.username}
                      className=" w-8"
                    />
                    <h2 className="font-semibold">{reply.user.username}</h2>
                    <h3 className="text-stone-500">{reply.createdAt}</h3>
                  </div>
                  <p className="text-stone-500 my-4">
                    <span className="font-semibold text-indigo-600">
                      {"@" + reply.replyingTo}
                    </span>{" "}
                    {reply.content}
                  </p>
                </div>

                <div className="rounded-lg inline-flex items-center bg-indigo-50 font-semibold">
                  <button className="text-lg text-indigo-300 px-4 py-2  hover:text-indigo-500">
                    +
                  </button>
                  <span className="py-2 text-indigo-500">{reply.score}</span>
                  <button className="text-lg text-indigo-300 px-4 py-2 hover:text-indigo-500">
                    -
                  </button>
                </div>

                <button
                  className={`inline-flex float-right items-center gap-2 text-indigo-600 font-semibold p-4 hover:text-indigo-300 ${styles.replyBtn} `}
                >
                  <ReplyIcon />
                  <span>Reply</span>
                </button>
              </div>
            );
          })}
        </div>
      ) : null}
    </>
  );
};

export default FeedCard;

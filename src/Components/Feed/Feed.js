import React from "react";
import { UserContext } from "../../UserContext";
import FeedCard from "./FeedCard";

const Feed = () => {
  const { userdata, comments, loading, error } = React.useContext(UserContext);

  return (
    <section className="my-8">
      {loading && <p>Carregando...</p>}

      {comments &&
        comments.map(({ id, content, user, score, replies, createdAt }) => (
          <FeedCard
            userLogin={userdata}
            key={id}
            content={content}
            user={user}
            score={score}
            replies={replies}
            createdAt={createdAt}
          />
        ))}

      {error && <p>Um erro ocorreu.</p>}
    </section>
  );
};

export default Feed;

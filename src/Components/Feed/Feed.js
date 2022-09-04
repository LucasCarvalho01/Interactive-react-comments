import React from "react";
import useFetch from "../../Hooks/useFetch";
import FeedCard from "./FeedCard";

const Feed = () => {
  const { data, loading, error, request } = useFetch("./data.json", "feed");

  React.useEffect(() => {
    request();
  }, [request]);

  // console.log(data);

  return (
    <section className="my-8">
      {loading && <p>Carregando...</p>}

      {data &&
        data.map(({ id, content, user, score, replies, createdAt }) => (
          <FeedCard
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

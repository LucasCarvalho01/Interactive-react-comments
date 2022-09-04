const FeedCard = ({ content, createdAt, replies, score, user }) => {
  console.log(user);
  return (
    <div>
      <div>
        {/* <img src={user.image.png} alt={user.username} /> */}
        <h2>{user.username}</h2>
      </div>
    </div>
  );
};

export default FeedCard;

const Textarea = ({
  placeholder,
  id,
  name,
  message,
  setMessage,
  handleNewComment,
}) => {
  // Function to prevent enter from breaking new line and not send comment
  function handleEnterSubmit(event) {
    if (event.key === "Enter" && event.shiftKey === false) {
      event.preventDefault();
      handleNewComment();
    }
  }

  return (
    <textarea
      className="border rounded-md block w-full h-28 p-2 resize-none text-sm overflow-auto hover:border-gray-800 hover:border-2 focus:border-gray-800 focus:outline-none focus:border-2 active:border-gray-800 active:border-2"
      value={message}
      onChange={({ target }) => setMessage(target.value)}
      placeholder={placeholder}
      id={id}
      name={name}
      onKeyDown={(event) => handleEnterSubmit(event)}
    />
  );
};

export default Textarea;

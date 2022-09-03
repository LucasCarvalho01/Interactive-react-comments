const Textarea = ({ placeholder, id, name, message, setMessage }) => {
  return (
    <textarea
      className="border rounded-md block w-full h-20 p-2 resize-none text-sm overflow-auto hover:border-gray-800 hover:border-2 focus:border-gray-800 focus:outline-none focus:border-2 active:border-gray-800 active:border-2"
      value={message}
      onChange={({ target }) => setMessage(target.value)}
      placeholder={placeholder}
      id={id}
      name={name}
    />
  );
};

export default Textarea;

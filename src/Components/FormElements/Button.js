const Button = ({ action }) => {
  return (
    <button className="bg-indigo-700 text-white uppercase font-medium px-8 py-2 rounded-md tracking-wide block ml-auto mt-6 mb-4 hover:cursor-pointer ">
      {action}
    </button>
  );
};

export default Button;

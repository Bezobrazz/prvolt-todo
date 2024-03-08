const Input = () => {
  return (
    <div className="w-full max-w-lg flex justify-center gap-2">
      <input
        type="text"
        placeholder="Type here you ToDo"
        className=" input border input-bordered w-full max-w-xs mb-10"
      />
      <button className="btn btn-primary">Add To Do</button>
    </div>
  );
};

export default Input;

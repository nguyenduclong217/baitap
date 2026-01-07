// bai tap
const Input = () => {
  const [value, setValue] = React.useState("");
  const [items, setItem] = React.useState([]);
  const [error, setError] = React.useState("");
  const handleChangeValue = (e) => {
    setValue(e.target.value);
    if (error) setError("");
  };

  const handleClick = () => {
    const trimmedValue = value.trim();

    if (!trimmedValue) {
      setError("Task không được để trống!");
      return;
    }
    const isDuplicate = items.some(
      (item) => item.text.toLowerCase() === trimmedValue.toLowerCase()
    );

    if (isDuplicate) {
      setError("Task này đã tồn tại!");
      return;
    }
    setItem([
      ...items,
      { text: trimmedValue, isEditing: false, editValue: trimmedValue },
    ]);
    setValue("");
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // xoa the
  const handleDelete = (_index) => {
    const isConfirm = window.confirm("Bạn có chắc muốn xóa task này không?");

    if (!isConfirm) return;
    setItem(items.filter((_, index) => index !== _index));
  };
  // Sua the

  return (
    <>
      <form
        className="form1 flex w-[85%] m-auto border border-violet-700 my-[20px]"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="What the task today?"
          className="px-3 py-2 w-[75%] bg-[#1a1a40] outline-none text-white"
          onChange={handleChangeValue}
          value={value}
        />
        <button
          className="bg-violet-700 text-white p-1 w-[25%]"
          onClick={handleClick}
        >
          Add Task
        </button>
      </form>
      {error && (
        <p className="text-red-400 text-sm text-center mb-2">{error}</p>
      )}
      <ul className="list w-[85%] mx-auto">
        {items.map((item, index) => (
          <li key={index} className="pb-2">
            <div className="relative">
              <div className="flex justify-between p-[8px] bg-violet-700 rounded-[5px]">
                <p className="text-white text-[1rem]">{item.text}</p>
                <span>
                  <button
                    onClick={() => {
                      const newItems = [...items];
                      newItems[index].isEditing = true;
                      newItems[index].editValue = newItems[index].text;
                      setItem(newItems);
                    }}
                  >
                    <i className="fa-regular fa-pen-to-square text-white"></i>
                  </button>
                  <button onClick={() => handleDelete(index)}>
                    <i className="fa-solid fa-trash text-white"></i>
                  </button>
                </span>
              </div>

              {item.isEditing && (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();

                    const trimmed = item.editValue.trim();
                    if (!trimmed) {
                      alert("Task không được để trống!");
                      return;
                    }

                    const isDuplicate = items.some(
                      (t, i) =>
                        i !== index &&
                        t.text.toLowerCase() === trimmed.toLowerCase()
                    );

                    if (isDuplicate) {
                      alert("Task này đã tồn tại!");
                      return;
                    }

                    const newItems = [...items];
                    newItems[index].text = trimmed;
                    newItems[index].isEditing = false;
                    setItem(newItems);
                  }}
                  className="absolute inset-0 flex border border-violet-700 bg-[#1a1a40]"
                >
                  <input
                    autoFocus
                    className="w-[75%] px-2 bg-transparent text-white outline-none"
                    value={item.editValue}
                    onChange={(e) => {
                      const newItems = [...items];
                      newItems[index].editValue = e.target.value;
                      setItem(newItems);
                    }}
                  />
                  <button className="w-[25%] bg-violet-700 text-white">
                    Update
                  </button>
                </form>
              )}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
const element = (
  <div className="h-screen max-w-[100%] bg-violet-700 flex items-start">
    <div className="h mx-auto mt-[100px] w-[400px] bg-[#1a1a40] rounded-md">
      <h1 className="text-center my-6 text-white text-[1.7rem]">
        Get Things Done !
      </h1>
      <Input />
    </div>
  </div>
);
// React Dom
const root = document.querySelector("#root");
const container = ReactDOM.createRoot(root);
container.render(element);

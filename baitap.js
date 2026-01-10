const Input = () => {
  // Khoi tao
  const [value, setValue] = React.useState("");
  const [items, setItem] = React.useState([]);
  const [mes, setMes] = React.useState("");

  // Chan form
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  // tao ra the
  const handleChangeValue = (e) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    const trimmedValue = value.trim();

    if (!trimmedValue) {
      setMes("Không được để trống");
      return;
    }
    // Bao loi khi gap trung lap
    // Ham some tim kiem trung lap vd [1,2,3].some(n => n>2) =>true
    const isDuplicate = items.some(
      (item) => item.text.toLowerCase() === trimmedValue.toLocaleLowerCase()
    );

    if (isDuplicate) {
      setMes("Task này đã tồn tại");
      return;
    }

    setItem([...items, { text: trimmedValue, isEditing: false }]);
    setMes("");
    setValue("");
  };
  // Sua the(chuyen doi false -> true cho phep mo the)
  const handleEdit = (index) => {
    setItem(
      items.map((item, i) =>
        i === index ? { ...item, isEditing: true, editValue: item.text } : item
      )
    );
  };
  // Sua the input
  const handleEditValue = (index, value) => {
    setItem(
      items.map((item, i) =>
        i === index ? { ...item, editValue: value } : item
      )
    );
  };
  // Sua the thanh cong

  const handleEditSuccess = (index) => {
    // khong duoc de input trong

    const trimmed = items[index].editValue.trim();

    if (!trimmed) {
      setItem(
        items.map((item, i) =>
          i === index
            ? { ...item, editError: "Không được để trống ô này" }
            : item
        )
      );
      return;
    }

    // the bi chung
    const isDuplicate = items.some(
      (item, i) =>
        i !== index && item.text.toLowerCase() === trimmed.toLowerCase()
    );

    if (isDuplicate) {
      setItem(
        items.map((item, i) =>
          i === index ? { ...item, editError: "Task này đã tồn tại" } : item
        )
      );
      return;
    }
    setItem(
      items.map((item, i) =>
        i === index
          ? { ...item, isEditing: false, text: item.editValue, editError: "" }
          : item
      )
    );
  };

  // Xoa the
  const handleDelete = (_index) => {
    const isConfirm = window.confirm("Bạn có chắc muốn xóa thẻ này?");

    if (!isConfirm) return;
    setItem(items.filter((_, index) => index !== _index));
  };
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
      {mes && <p className="text-red-400 text-sm text-center mb-2">{mes}</p>}
      <ul className="list w-[85%] mx-auto">
        {items.map((item, index) => (
          <li key={index} className="pb-2">
            <div className="relative">
              <div className="flex justify-between p-[8px] bg-violet-700 rounded-[5px]">
                <p className="text-white text-[1rem]">{item.text}</p>
                <span>
                  <button>
                    {/* Sua the */}
                    <i
                      className="fa-regular fa-pen-to-square text-white"
                      onClick={() => handleEdit(index)}
                    ></i>
                  </button>
                  <button onClick={() => handleDelete(index)}>
                    <i className="fa-solid fa-trash text-white"></i>
                  </button>
                </span>
              </div>
              {item.isEditing && (
                <form
                  onSubmit={handleSubmit}
                  className="absolute inset-0 flex border border-violet-700 bg-[#1a1a40]"
                >
                  <input
                    autoFocus
                    className="w-[75%] px-2 bg-transparent text-white outline-none"
                    value={item.editValue}
                    onChange={(e) => handleEditValue(index, e.target.value)}
                  />
                  <button
                    className="w-[25%] bg-violet-700 text-white"
                    onClick={() => handleEditSuccess(index)}
                  >
                    Update
                  </button>
                </form>
              )}
            </div>
            {item.editError && (
              <p className="text-red-400 text-sm mt-1">{item.editError}</p>
            )}
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

const root = document.querySelector("#root");
const container = ReactDOM.createRoot(root);
container.render(element);

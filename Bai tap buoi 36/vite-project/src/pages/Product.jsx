import { useSearchParams } from "react-router-dom";

export default function Product() {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleChangeStatus = (e) => {
    const value = e.target.value;
    setSearchParams({
      status: value,
      q: searchParams.get("q") ?? "",
    });
  };
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchParams({
      status: searchParams.get("status") ?? "",
      q: value,
    });
  };
  return (
    <div>
      <h1>Products</h1>
      <select onChange={handleChangeStatus}>
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
      <input type="text" placeholder="Tu khoa...." onChange={handleSearch} />
      <p>KeyWord : {searchParams.get("q")}</p>
      <p>Status : {searchParams.get("status")}</p>
    </div>
  );
}

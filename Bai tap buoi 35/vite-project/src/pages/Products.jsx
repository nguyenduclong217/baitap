import { createContext, useEffect, useState } from "react";
import ProductPage from "../components/ProductPage";
import { useSearchParams } from "react-router-dom";

export const AppContext = createContext();
export default function Products() {
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [debounce, setDebounce] = useState("");
  const [totalPage, setTotalPage] = useState(0);
  // const [page, setPage] = useState(1);

  // Lay page tu  Url
  const pageFromUrl = Number(searchParams.get("page")) || 1;

  // State dua vao Url
  const [page, setPage] = useState(pageFromUrl);

  // Url doi --> Page doi
  useEffect(() => {
    setPage(pageFromUrl);
  }, [searchParams]);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    if (inputValue.trim()) {
      setSearchParams({ q: inputValue });
    } else {
      setSearchParams({});
    }
  };

  const handleChangePage = (p) => {
    setSearchParams({
      q: searchParams.get("q") || "",
      page: p,
    });
  };

  useEffect(() => {
    const q = searchParams.get("q") || "";
    setValue(q);
    setDebounce(q);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounce(value);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [value]);
  return (
    <AppContext.Provider
      value={{
        debounce,
        searchParams,
        page,
        setPage,
        totalPage,
        setTotalPage,
        handleChangePage,
      }}
    >
      <h1>Sản phẩm</h1>
      <input
        type="text"
        className="border border-black/50 px-2"
        placeholder="Tim kiem...."
        onChange={handleChange}
        value={value}
      />
      <ProductPage />
    </AppContext.Provider>
  );
}

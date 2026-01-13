import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Loading from "./Loading";
import { AppContext } from "../pages/Products";
import ListPage from "./ListPage";

export default function ProductPage() {
  const [loading, setLoading] = useState(false);
  // san pham
  const [products, setProducts] = useState([]);
  const { searchParams, debounce, page, setTotalPage } = useContext(AppContext);

  const limit = 10;
  useEffect(() => {
    const productApi = async () => {
      try {
        setLoading(true);
        const skip = (page - 1) * limit;
        const url = debounce.trim()
          ? `https://dummyjson.com/products/search?q=${debounce}&limit=${limit}&skip=${skip}`
          : `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Không tìm thấy api");
        }
        const data = await res.json();
        // const products = data.products;
        // console.log(products);
        setProducts(data.products);
        const pageNumber = Math.ceil(data.total / limit);
        setTotalPage(pageNumber);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    productApi();
  }, [debounce, page]);

  if (searchParams.get("q") && products.length === 0) {
    return <h1 className="text-3xl font-bold my-5">Không tìm thấy kết quả</h1>;
  }
  return (
    <>
      {loading && <Loading />}
      <div>
        {products.map((product, index) => (
          <div
            key={index}
            className="border border-gray-500 mt-2 rounded-[5px] w-[300px] "
          >
            <img src={product.images[0]} alt="img" className="w-40" />
            <h2 className="text-[1.2rem] font-bold mb-5">{product.title}</h2>
            <p className="mb-5 font-bold text-xl text-red-500">
              ${product.price}
            </p>
            <NavLink to={`/products/${product.id}`} className="text-blue-700">
              Xem chi tiết
            </NavLink>
          </div>
        ))}
      </div>
      <ListPage />
    </>
  );
}

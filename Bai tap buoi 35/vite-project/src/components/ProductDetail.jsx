import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";

export default function ProductDetail() {
  const { id } = useParams();
  const [img, setImg] = useState("");
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleChangeImg = (index) => {
    setCurrentIndex(index);
    setImg(product.images[index]);
  };

  const handlePrev = () => {
    let newIndex = currentIndex - 1;
    if (currentIndex === 0) {
      newIndex = product.images.length - 1;
    }
    setCurrentIndex(newIndex);
    setImg(product.images[newIndex]);
  };

  const handleNext = () => {
    let newIndex = currentIndex + 1;
    if (currentIndex === product.images.length - 1) {
      newIndex = 0;
    }
    setCurrentIndex(newIndex);
    setImg(product.images[newIndex]);
  };
  useEffect(() => {
    const productDetailApi = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        if (!res.ok) {
          throw new Error("Không tìm thấy api");
        }
        const data = await res.json();
        console.log(data);
        setCurrentIndex(0);
        setImg(data.images[0]);
        setProduct(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    productDetailApi();
  }, []);
  return (
    <>
      {loading && <Loading />}
      <div className="m-10">
        <div className="flex flex-col gap-10 mb-5 w-2xs">
          <div className="border border-gray-500 rounded-2xl">
            <img src={img} alt="img" />
          </div>
          <ul className="flex gap-4">
            <li>
              <button
                onClick={handlePrev}
                className="px-3 py-1 border rounded bg-gray-200 cursor-pointer"
              >
                Prev
              </button>
            </li>

            {product?.images?.map((image, index) => (
              <li key={index}>
                <img
                  src={image}
                  alt="img"
                  className={
                    image === img
                      ? "border border-black/20 cursor-pointer"
                      : "border-white cursor-pointer"
                  }
                  onClick={() => handleChangeImg(index)}
                />
              </li>
            ))}
            <li>
              <button
                onClick={handleNext}
                className="px-3 py-1 border rounded bg-gray-200 cursor-pointer"
              >
                Next
              </button>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-[22px] font-bold mb-3">{product.title}</h1>
          <p className="mb-5 font-bold text-[20px] text-red-500">
            ${product.price}
          </p>
          <p className="w-[300px]">{product.description}</p>
        </div>
      </div>
    </>
  );
}

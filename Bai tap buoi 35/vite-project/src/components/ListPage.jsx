import React, { useContext } from "react";
import { AppContext } from "../pages/Products";

export default function ListPage() {
  // const [page, setPage] = useState("");
  // const [loading, setLoading] = useState(false);
  // const { page, setPage } = useContext(AppContext);
  const { page, totalPage, handleChangePage } = useContext(AppContext);

  return (
    <div className="mt-4">
      {Array.from({ length: totalPage }, (_, index) => {
        const pageNumber = index + 1;
        return (
          <button
            key={pageNumber}
            onClick={() => handleChangePage(pageNumber)}
            className={`px-2 py-1 ${
              page === pageNumber
                ? "bg-green-400 text-white"
                : "bg-gray-400 text-black"
            }`}
          >
            {pageNumber}
          </button>
        );
      })}
    </div>
  );
}

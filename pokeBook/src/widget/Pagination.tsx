import React from "react";
import { Primitive } from "@radix-ui/react-primitive";
import { useColourStore, useGetAllPokeMonData } from "../ZustansStore/store";

interface PaginationUIProps {
  currentPage?: number;
  totalPages?: number;
  pageSize?: number;
  onPageChange?: (page: number | string) => void;
  onPageSizeChange?: (size: number) => void;
}

export const Pagination_UI: React.FC<PaginationUIProps> = ({
  currentPage = 1,
  totalPages = 500,
  pageSize = 8,
  onPageChange,
  onPageSizeChange,
}) => {
  //   const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
  const theme = useColourStore((state: any) => state.colorTheme.colour_holder);
  const SetNextUrl = useGetAllPokeMonData((state: any) => state.SetNextUrl);
  const SetPrevUrl = useGetAllPokeMonData((state: any) => state.SetPrevUrl);
  const SetLimit = useGetAllPokeMonData((state: any) => state.SetLimit);
  const SetPage = useGetAllPokeMonData((state: any) => state.SetPage);
  const nextUrl = useGetAllPokeMonData((state: any) => state.next);
  const prevUrl = useGetAllPokeMonData((state: any) => state.prev);
  const getPages = (currentPage: number, totalPages: number) => {
    const pages = [];

    if (totalPages <= 10) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      if (currentPage > 5) {
        pages.push("...");
      }
      let startPage = Math.max(currentPage - 3, 2);
      let endPage = Math.min(currentPage + 3, totalPages - 1);

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 4) {
        pages.push("...");
      }
      pages.push(totalPages);
    }

    return pages;
  };
  const pages_1 = getPages(currentPage, totalPages);
  return (
    <main className="w-full">
      <div className="w-full flex justify-between items-center ">
        <div>
        <button
          className="px-4 py-2 border rounded"
          disabled={currentPage === 1}
          onClick={() => {
            if (onPageChange) onPageChange(currentPage - 1);
            SetPrevUrl(prevUrl);
          }}
        >
          <svg
            width="10"
            height="16"
            viewBox="0 0 10 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.45616 14.825L1.13741 8.52505C1.06241 8.45005 1.00916 8.3688 0.977664 8.2813C0.946164 8.1938 0.930664 8.10005 0.931164 8.00005C0.931164 7.90005 0.946914 7.8063 0.978414 7.7188C1.00991 7.6313 1.06291 7.55005 1.13741 7.47505L7.45616 1.1563C7.63117 0.981299 7.84992 0.893799 8.11241 0.893799C8.37492 0.893799 8.59991 0.987549 8.78741 1.17505C8.97491 1.36255 9.06866 1.5813 9.06866 1.8313C9.06866 2.0813 8.97491 2.30005 8.78741 2.48755L3.27491 8.00005L8.78741 13.5125C8.96241 13.6875 9.04992 13.9033 9.04992 14.1598C9.04992 14.4163 8.95617 14.638 8.76866 14.825C8.58116 15.0125 8.36241 15.1063 8.11241 15.1063C7.86241 15.1063 7.64366 15.0125 7.45616 14.825Z"
              fill="black"
            />
          </svg>
        </button>
          {pages_1.map((page) => (
            <Primitive.button
              key={page}
              className={`px-4 py-2 border rounded ${
                currentPage === page ? "bg-blue-500 text-white" : "bg-white"
              }`}
              style={{
                backgroundColor: `${currentPage === page ? theme : "white"}`,
              }}
              onClick={() => {
                if (onPageChange) onPageChange(page);
              }}
            >
              {page}
            </Primitive.button>
          ))}
          <button
            className="px-4 py-2 border rounded"
            disabled={currentPage === totalPages}
            onClick={() => {
              if (onPageChange) onPageChange(currentPage + 1);
              SetNextUrl(nextUrl);
            }}
          >
            <svg
              width="10"
              height="16"
              viewBox="0 0 10 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.54384 14.825L8.86259 8.52505C8.93759 8.45005 8.99084 8.3688 9.02234 8.2813C9.05384 8.1938 9.06934 8.10005 9.06884 8.00005C9.06884 7.90005 9.05309 7.8063 9.02159 7.7188C8.99009 7.6313 8.93709 7.55005 8.86259 7.47505L2.54384 1.1563C2.36883 0.981299 2.15008 0.893799 1.88759 0.893799C1.62508 0.893799 1.40009 0.987549 1.21259 1.17505C1.02509 1.36255 0.931335 1.5813 0.931335 1.8313C0.931335 2.0813 1.02509 2.30005 1.21259 2.48755L6.72509 8.00005L1.21259 13.5125C1.03759 13.6875 0.950085 13.9033 0.950085 14.1598C0.950085 14.4163 1.04383 14.638 1.23134 14.825C1.41884 15.0125 1.63759 15.1063 1.88759 15.1063C2.13759 15.1063 2.35634 15.0125 2.54384 14.825Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
        <select
          value={pageSize}
          onChange={(e) => {
            const newSize = Number(e.target.value);
            if (onPageSizeChange) onPageSizeChange(newSize);
            SetLimit(
              `https://pokeapi.co/api/v2/pokemon?limit=${newSize}&offset=0`
            );
            SetPage(newSize);
          }}
          className="px-2 py-1 border rounded"
          defaultValue={8}
        >
          <option value={8}>8</option>
          <option value={12}>12</option>
          <option value={16}>16</option>
          <option value={24}>24</option>
        </select>
      </div>
    </main>
  );
};

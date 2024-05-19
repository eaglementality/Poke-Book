import { Primitive } from '@radix-ui/react-primitive';
interface props{
     currentPage: number; totalPages: number; pageSize: number; onPageChange: (page: any) => void; onPageSizeChange: (size: any) => void; 
}
export const Pagination_UI = ({currentPage, totalPages, pageSize, onPageChange, onPageSizeChange }:props) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="flex items-center space-x-2">
      <select
        value={pageSize}
        onChange={(e) => onPageSizeChange(Number(e.target.value))}
        className="px-2 py-1 border rounded"
      >
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={20}>20</option>
      </select>
      <button
        className="px-4 py-2 border rounded"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Previous
      </button>
      {pages.map(page => (
        <Primitive.button
          key={page}
          className={`px-4 py-2 border rounded ${currentPage === page ? 'bg-blue-500 text-white' : 'bg-white'}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </Primitive.button>
      ))}
      <button
        className="px-4 py-2 border rounded"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};



import { Link } from "react-router-dom";
import useVirtualization from "../hooks/useVirtualization";

export default function VirtualizedTable({ data }) {

  const {
    visibleRows,
    totalHeight,
    offsetY,
    setScrollTop
  } = useVirtualization(data);

  return (
    <div
      className="h-[500px] overflow-auto border bg-red-800"
      onScroll={(e) => setScrollTop(e.target.scrollTop)}
    >
      <div style={{ height: totalHeight }}>

        <div style={{ transform: `translateY(${offsetY}px)` }}>

          {visibleRows.map((emp) => (
            <Link
              key={emp.id}
              to={`/details/${emp.id}`}
              className="block h-[50px] border-b px-4 flex items-center"
            >
              {emp.name} - {emp.city}
            </Link>
          ))}

        </div>

      </div>
    </div>
  );
}
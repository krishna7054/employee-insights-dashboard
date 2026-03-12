import { useEffect, useState } from "react";
import VirtualizedTable from "../components/VirtualizedTable";

export default function List() {

  const [data, setData] = useState([]);

  useEffect(() => {

    fetch(
      "https://backend.jotish.in/backend_dev/gettabledata.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: "test",
          password: "123456"
        })
      }
    )
      .then((res) => res.json())
      .then((d) => setData(d.data || []));

  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl mb-4">Employees</h1>

      <VirtualizedTable data={data} />
    </div>
  );
}
import SalaryChart from "../components/SalaryChart";
import CityMap from "../components/CityMap";

export default function Result() {

  const image = localStorage.getItem("auditImage");

  const sampleData = [
    { city: "Delhi", salary: 80000 },
    { city: "Mumbai", salary: 70000 },
    { city: "Chennai", salary: 60000 }
  ];

  return (
    <div className="p-6 space-y-6">

      <h1>Audit Image</h1>

      <img src={image} className="w-64 border" />

      <SalaryChart data={sampleData} />

      <CityMap />

    </div>
  );
}
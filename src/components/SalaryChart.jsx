export default function SalaryChart({ data }) {

  return (
    <svg width="400" height="200">

      {data.map((d, i) => (

        <rect
          key={i}
          x={i * 80}
          y={200 - d.salary / 500}
          width="40"
          height={d.salary / 500}
          fill="blue"
        />

      ))}

    </svg>
  );
}
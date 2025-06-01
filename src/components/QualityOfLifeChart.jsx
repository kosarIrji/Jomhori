// RadarChartComponent.jsx
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const QualityOfLifeChart = ({ dataValues, names }) => {
  const labels = [
    "سرزندگی اجتماعی",
    "دسترسی به خدمات شهری",
    "فضای سبز و آرامش",
    "امنیت",
    "کیفیت کالبدی محله",
  ];

  const colors = [
   "#f28e2b","#59a14f",  "#4e79a7",  "#e15759", "#76b7b2", "#edc948", "#b07aa1"
  ];

  // تبدیل داده‌ها به فرمت مناسب نمودار
  const chartData = labels.map((label, i) => {
    const entry = { subject: label, fullMark: 100 };
    names.forEach((name, index) => {
      entry[name] = dataValues[index]?.[i] ?? 0;
    });
    return entry;
  });

  // رندر تیک‌های سفارشی برای محور زاویه‌ای
  const renderCustomTick = ({ payload, x, y, textAnchor }) => {
    const radiusOffset = 8;
    const angle = payload.coordinate * (Math.PI / 180);
    const adjustedX = x - Math.cos(angle) * radiusOffset;
    const adjustedY = y - Math.sin(angle) * radiusOffset;

    return (
      <text
        x={adjustedX}
        y={adjustedY}
        textAnchor={textAnchor}
        fontSize={13}
        fill="#2c3e50"
        fontWeight="500"
      >
        {payload.value}
      </text>
    );
  };

  return (
    <div className="w-full  mx-auto bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center">
      <h2 className="text-xl md:text-2xl font-extrabold text-[#4F7C6B] text-center mb-6">
        مقایسه کیفیت زندگی در محله‌ها
      </h2>
      <ResponsiveContainer width="100%" height={500}>
        <RadarChart cx="50%" cy="50%" outerRadius="75%" data={chartData}>
          <PolarGrid stroke="#ccc" />
          <PolarAngleAxis dataKey="subject" tick={renderCustomTick} />
          <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fontSize: 11 }} />
          {names.map((name, index) => (
            <Radar
              key={name}
              name={name}
              dataKey={name}
              stroke={colors[index % colors.length]}
              fill={colors[index % colors.length]}
              fillOpacity={0.3}
              strokeWidth={2}
            />
          ))}
          <Tooltip />
          <Legend wrapperStyle={{ fontSize: 14, marginTop: 10 }} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default QualityOfLifeChart;

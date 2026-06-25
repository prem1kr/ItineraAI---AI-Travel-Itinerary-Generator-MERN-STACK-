
const DayPlan = ({ day, title, activities = [] }) => {
  return (
    <div className="bg-white rounded-xl border p-5">
      <div className="mb-4">
        <h3 className="text-lg font-bold">Day {day}</h3>
        <p className="text-blue-600">{title}</p>
      </div>

      <ul className="space-y-3">
        {activities.map((activity, index) => (
          <li key={index} className="border-l-4 border-blue-600 pl-4">{activity}</li>
        ))}
      </ul>
    </div>
  );
};

export default DayPlan;
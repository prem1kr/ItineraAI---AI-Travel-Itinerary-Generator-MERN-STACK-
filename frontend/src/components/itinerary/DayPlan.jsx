
const DayPlan = ({ day, title, activities = [] }) => {
  return (
    <div className="bg-white rounded-xl border p-5">
      <div className="mb-4">
        <h3 className="text-lg font-bold">Day {day}</h3>
        <p className="text-blue-600">{title}</p>
      </div>

      <ul className="space-y-5">
        {activities.map((activity, index) => (
          <li
            key={activity._id || index}
            className="border rounded-lg p-4 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                {activity.time}
              </span>
            </div>

            <h4 className="font-semibold mt-3">
              {activity.event}
            </h4>

            <p className="text-gray-600 mt-2">
              {activity.recommendation}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DayPlan;
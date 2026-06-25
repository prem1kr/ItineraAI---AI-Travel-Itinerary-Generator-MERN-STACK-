import { FiMapPin, FiHome, FiNavigation } from "react-icons/fi";

const Timeline = ({ timeline = [] }) => {
  return (
    <div className="space-y-4">
      {timeline.map((item, index) => (
        <div key={index} className="flex gap-4">
          <div>
            <div className="w-10 h-10 bg-blue-100 rounded-full flex justify-center items-center">
              {item.type === "flight" && (<FiNavigation />)}
              {item.type === "hotel" && (<FiHome />)}
              {item.type === "activity" && (<FiMapPin />)}
            </div>
          </div>

          <div className="flex-1 bg-white border rounded-xl p-4">
            <h4 className="font-semibold">{item.title}</h4>
            <p className="text-gray-500 text-sm">{item.time}</p>
            <p className="mt-2">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
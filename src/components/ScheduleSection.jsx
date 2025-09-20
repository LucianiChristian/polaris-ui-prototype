import React from "react";
import { Plus, Clock } from "lucide-react";

const ScheduleSection = ({ schedule, onAddSchedule }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            <Clock className="w-5 h-5" />
            Daily Schedule
          </h3>
          <button onClick={onAddSchedule}>
            <Plus className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700" />
          </button>
        </div>
      </div>
      <div className="p-4 space-y-3">
        {schedule.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50"
          >
            <div className="text-sm font-medium text-blue-600 w-20">
              {item.time}
            </div>
            <div className="flex-1">
              <div className="font-medium text-gray-900">{item.event}</div>
              <div className="text-sm text-gray-600">{item.location}</div>
            </div>
          </div>
        ))}
        <button
          className="w-full p-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-gray-400 hover:text-gray-600"
          onClick={onAddSchedule}
        >
          + Add new appointment
        </button>
      </div>
    </div>
  );
};

export default ScheduleSection;

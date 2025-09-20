import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const DateNavigation = ({ currentDate, onNavigate }) => {
  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border p-4 mb-6">
      <div className="flex items-center justify-between">
        <button
          onClick={() => onNavigate(-1)}
          className="p-2 hover:bg-gray-100 rounded-lg"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            {formatDate(currentDate)}
          </h2>
        </div>
        <button
          onClick={() => onNavigate(1)}
          className="p-2 hover:bg-gray-100 rounded-lg"
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default DateNavigation;

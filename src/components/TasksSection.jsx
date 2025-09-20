import React, { useState } from "react";
import { Plus } from "lucide-react";

const TasksSection = ({ tasks, onAddTask }) => {
  const [showStatusGuide, setShowStatusGuide] = useState(false);

  const getPriorityColor = (priority) => {
    if (priority.startsWith("A"))
      return "text-red-700 bg-red-100 border border-red-200";
    if (priority.startsWith("B"))
      return "text-amber-700 bg-amber-100 border border-amber-200";
    if (priority.startsWith("C"))
      return "text-green-700 bg-green-100 border border-green-200";
    return "text-gray-600 bg-gray-100 border border-gray-200";
  };

  const getDispositionColor = (disposition) => {
    const colors = {
      P: "text-blue-700 bg-blue-100 border border-blue-200",
      C: "text-green-700 bg-green-100 border border-green-200",
      X: "text-red-700 bg-red-100 border border-red-200",
      F: "text-purple-700 bg-purple-100 border border-purple-200",
      D: "text-orange-700 bg-orange-100 border border-orange-200",
    };
    return (
      colors[disposition] || "text-gray-600 bg-gray-100 border border-gray-200"
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Daily Tasks</h3>
            <div className="flex items-center gap-2 mt-1">
              <p className="text-sm text-gray-600">
                Priority: A=Urgent, B=Important, C=Optional
              </p>
              <button
                onClick={() => setShowStatusGuide(!showStatusGuide)}
                className="text-xs text-blue-600 hover:text-blue-800 underline"
              >
                {showStatusGuide ? "Hide guide" : "Show status guide"}
              </button>
            </div>
          </div>
          <button onClick={onAddTask}>
            <Plus className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700" />
          </button>
        </div>

        {showStatusGuide && (
          <div className="mt-4 p-3 bg-gray-50 rounded-lg border">
            <h4 className="font-medium text-gray-900 mb-2 text-sm">
              Task Status Reference
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2 text-xs">
              {[
                {
                  code: "P",
                  label: "In Progress",
                  color: "text-blue-600 bg-blue-50",
                },
                {
                  code: "C",
                  label: "Completed",
                  color: "text-green-600 bg-green-50",
                },
                {
                  code: "X",
                  label: "Deleted",
                  color: "text-red-600 bg-red-50",
                },
                {
                  code: "F",
                  label: "Forwarded",
                  color: "text-purple-600 bg-purple-50",
                },
                {
                  code: "D",
                  label: "Delegated",
                  color: "text-orange-600 bg-orange-50",
                },
              ].map(({ code, label, color }) => (
                <div key={code} className="flex items-center gap-1">
                  <span className={`px-2 py-1 rounded ${color} font-mono`}>
                    {code}
                  </span>
                  <span className="text-gray-600">{label}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="p-4 space-y-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50"
          >
            <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" />
            <span
              className={`px-2 py-1 rounded font-mono text-xs ${getPriorityColor(
                task.priority
              )}`}
            >
              {task.priority}
            </span>
            <span
              className={`px-2 py-1 rounded font-mono text-xs ${getDispositionColor(
                task.disposition
              )}`}
            >
              {task.disposition}
            </span>
            <span className="flex-1 text-gray-900">{task.text}</span>
          </div>
        ))}
        <button
          className="w-full p-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-gray-400 hover:text-gray-600"
          onClick={onAddTask}
        >
          + Add new task
        </button>
      </div>
    </div>
  );
};

export default TasksSection;

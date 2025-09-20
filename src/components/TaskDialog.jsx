import React, { useState } from "react";
import { X, FileText } from "lucide-react";

const TaskDialog = ({ isOpen, onClose, contacts }) => {
  const [priorityLetter, setPriorityLetter] = useState("A");
  const [priorityNumber, setPriorityNumber] = useState("1");
  const [status, setStatus] = useState("P");
  const [delegatedTo, setDelegatedTo] = useState("");
  const [showDelegation, setShowDelegation] = useState(false);

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
    setShowDelegation(newStatus === "D");
    if (newStatus !== "D") {
      setDelegatedTo("");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg mx-4 border border-gray-200">
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              Create New Task
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Organize your work with priority-based task management
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-400 hover:text-gray-600" />
          </button>
        </div>

        <div className="px-6 pb-6">
          <div className="space-y-6">
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-900 mb-2">
                <FileText className="w-4 h-4 text-gray-500" />
                What needs to be done?
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="e.g., Review quarterly sales report with team"
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Priority
                </label>
                <select
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg"
                  value={priorityLetter}
                  onChange={(e) => setPriorityLetter(e.target.value)}
                >
                  <option value="A">A - Must do today</option>
                  <option value="B">B - Should do today</option>
                  <option value="C">C - Nice to do today</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Order
                </label>
                <select
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg"
                  value={priorityNumber}
                  onChange={(e) => setPriorityNumber(e.target.value)}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Status
                </label>
                <select
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg"
                  value={status}
                  onChange={(e) => handleStatusChange(e.target.value)}
                >
                  <option value="P">P - In Progress</option>
                  <option value="C">C - Completed</option>
                  <option value="D">D - Delegated</option>
                  <option value="F">F - Forwarded</option>
                  <option value="X">X - Deleted</option>
                </select>
              </div>
            </div>

            {showDelegation && (
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Delegate to:
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={delegatedTo}
                    onChange={(e) => setDelegatedTo(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Type a contact name..."
                    list="contacts-list"
                  />
                  <datalist id="contacts-list">
                    {contacts.map((contact, index) => (
                      <option key={index} value={contact} />
                    ))}
                  </datalist>
                </div>
                <p className="text-xs text-gray-600 mt-1">
                  Start typing to see suggestions from your contacts
                </p>
              </div>
            )}

            <div className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
              <strong>Current priority:</strong> {priorityLetter}
              {priorityNumber}
              {priorityLetter === "A" && " (Must do today)"}
              {priorityLetter === "B" && " (Should do today)"}
              {priorityLetter === "C" && " (Nice to do today)"}
              {showDelegation && delegatedTo && (
                <span>
                  {" "}
                  • <strong>Delegated to:</strong> {delegatedTo}
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="flex gap-3 px-6 py-4 border-t border-gray-100 bg-gray-50 rounded-b-xl">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-white transition-colors text-gray-700 font-medium"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              console.log("Adding task");
              onClose();
            }}
            className="flex-1 px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-sm"
          >
            ✓ Create Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskDialog;

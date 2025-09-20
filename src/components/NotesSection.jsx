import React from "react";
import { Plus, FileText } from "lucide-react";

const NotesSection = ({ notes, onAddNote }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Daily Notes
          </h3>
          <button onClick={onAddNote}>
            <Plus className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700" />
          </button>
        </div>
      </div>
      <div className="p-4 space-y-3">
        {notes.map((note) => (
          <div
            key={note.id}
            className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50"
          >
            {note.project && (
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">
                  {note.project}
                </span>
                {note.person && (
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                    {note.person}
                  </span>
                )}
              </div>
            )}
            <div className="text-gray-900">{note.note}</div>
          </div>
        ))}
        <button
          className="w-full p-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-gray-400 hover:text-gray-600"
          onClick={onAddNote}
        >
          + Add new note
        </button>
      </div>
    </div>
  );
};

export default NotesSection;

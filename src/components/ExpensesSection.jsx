import React from "react";
import { Plus, DollarSign } from "lucide-react";

const ExpensesSection = ({ expenses, onAddExpense }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            <DollarSign className="w-5 h-5" />
            Daily Expenses
          </h3>
          <button onClick={onAddExpense}>
            <Plus className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700" />
          </button>
        </div>
      </div>
      <div className="p-4 space-y-3">
        {expenses.map((expense) => (
          <div
            key={expense.id}
            className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50"
          >
            <div className="w-16 text-sm font-medium text-gray-600">
              {expense.type}
            </div>
            <div className="flex-1 text-gray-900">{expense.expense}</div>
            <div className="font-medium text-green-600">{expense.amount}</div>
          </div>
        ))}
        <button
          className="w-full p-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-gray-400 hover:text-gray-600"
          onClick={onAddExpense}
        >
          + Add new expense
        </button>
      </div>
    </div>
  );
};

export default ExpensesSection;

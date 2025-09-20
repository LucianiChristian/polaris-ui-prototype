import React, { useState } from "react";
import DateNavigation from "./DateNavigation";
import TasksSection from "./TasksSection";
import ScheduleSection from "./ScheduleSection";
import ExpensesSection from "./ExpensesSection";
import NotesSection from "./NotesSection";

const DailyView = ({ onOpenDialog }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const [tasks] = useState([
    {
      id: 1,
      text: "Review quarterly reports",
      priority: "A1",
      disposition: "P",
    },
    { id: 2, text: "Call marketing team", priority: "A2", disposition: "P" },
    {
      id: 3,
      text: "Update project timeline",
      priority: "B1",
      disposition: "F",
    },
    {
      id: 4,
      text: "Schedule dentist appointment",
      priority: "C1",
      disposition: "D",
    },
  ]);

  const [schedule] = useState([
    {
      id: 1,
      time: "9:00 AM",
      event: "Team standup",
      location: "Conference Room A",
    },
    { id: 2, time: "11:00 AM", event: "Client presentation", location: "Zoom" },
    { id: 3, time: "2:00 PM", event: "Project review", location: "Office" },
    { id: 4, time: "4:00 PM", event: "1-on-1 with Sarah", location: "Office" },
  ]);

  const [expenses] = useState([
    { id: 1, type: "Travel", expense: "Uber to airport", amount: "$45.00" },
    { id: 2, type: "Meals", expense: "Client lunch", amount: "$87.50" },
    { id: 3, type: "Office", expense: "Printer paper", amount: "$15.99" },
  ]);

  const [notes] = useState([
    {
      id: 1,
      project: "Website Redesign",
      person: "John Smith",
      note: "Discussed color palette preferences. Client wants more blue tones.",
    },
    {
      id: 2,
      project: "Mobile App",
      person: "Sarah Chen",
      note: "API integration completed. Ready for testing phase.",
    },
    {
      id: 3,
      project: "Personal",
      person: "",
      note: "Remember to pick up dry cleaning after work.",
    },
  ]);

  const navigateDate = (days) => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + days);
    setCurrentDate(newDate);
  };

  return (
    <>
      <DateNavigation currentDate={currentDate} onNavigate={navigateDate} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TasksSection tasks={tasks} onAddTask={() => onOpenDialog("task")} />

        <ScheduleSection
          schedule={schedule}
          onAddSchedule={() => onOpenDialog("schedule")}
        />

        <ExpensesSection
          expenses={expenses}
          onAddExpense={() => onOpenDialog("expense")}
        />

        <NotesSection notes={notes} onAddNote={() => onOpenDialog("note")} />
      </div>
    </>
  );
};

export default DailyView;

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import DailyView from "./components/DailyView";
import TaskDialog from "./components/TaskDialog";
import "./App.css";
import ContactsSection from "./components/ContactsSection";
import ProjectsSection from "./components/ProjectsSection";

const App = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [dialogType, setDialogType] = useState("");

  const contacts = [
    "John Smith",
    "Sarah Chen",
    "Mike Johnson",
    "Lisa Wong",
    "Alex Rivera",
    "Emma Davis",
  ];

  const openDialog = (type) => {
    setDialogType(type);
    setShowDialog(true);
  };

  const closeDialog = () => {
    setShowDialog(false);
    setDialogType("");
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Routes>
            <Route path="/" element={<DailyView onOpenDialog={openDialog} />} />
            <Route
              path="/projects"
              element={
                <ProjectsSection onAddProject={() => openDialog("project")} />
              }
            />
            <Route
              path="/contacts"
              element={
                <ContactsSection
                  contacts={contacts}
                  onAddContact={() => openDialog("contact")}
                />
              }
            />
          </Routes>
        </div>

        <TaskDialog
          isOpen={showDialog && dialogType === "task"}
          onClose={closeDialog}
          contacts={contacts}
        />
      </div>
    </Router>
  );
};

export default App;

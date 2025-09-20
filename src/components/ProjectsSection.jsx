import React, { useState } from "react";
import {
  Plus,
  Search,
  Filter,
  Calendar,
  Users,
  MoreVertical,
  Edit,
  Trash2,
  User,
  UserPlus,
} from "lucide-react";

const ProjectsSection = ({ onAddProject }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [showProjectDetail, setShowProjectDetail] = useState(null);

  // Sample projects data
  const sampleProjects = [
    {
      id: 1,
      name: "Website Redesign",
      description:
        "Complete overhaul of company website with modern design and improved UX",
      status: "Active",
      progress: 75,
      deadline: "2025-10-15",
      budget: "$25,000",
      priority: "High",
      team: [
        { id: 1, name: "John Smith", role: "UI Designer", avatar: "JS" },
        { id: 2, name: "Sarah Chen", role: "Developer", avatar: "SC" },
        { id: 3, name: "Mike Johnson", role: "Backend Dev", avatar: "MJ" },
      ],
      tasks: 12,
      completedTasks: 9,
      notes: 8,
    },
    {
      id: 2,
      name: "Mobile App Development",
      description: "Native iOS and Android app for customer engagement",
      status: "Active",
      progress: 45,
      deadline: "2025-12-01",
      budget: "$50,000",
      priority: "High",
      team: [
        { id: 2, name: "Sarah Chen", role: "Lead Developer", avatar: "SC" },
        { id: 4, name: "Lisa Wong", role: "Product Manager", avatar: "LW" },
        { id: 5, name: "Alex Rivera", role: "DevOps", avatar: "AR" },
      ],
      tasks: 24,
      completedTasks: 11,
      notes: 15,
    },
    {
      id: 3,
      name: "Marketing Campaign Q4",
      description: "Holiday season marketing push across digital channels",
      status: "Planning",
      progress: 20,
      deadline: "2025-11-15",
      budget: "$15,000",
      priority: "Medium",
      team: [
        { id: 4, name: "Lisa Wong", role: "Marketing Lead", avatar: "LW" },
        { id: 6, name: "Emma Davis", role: "Content Creator", avatar: "ED" },
      ],
      tasks: 8,
      completedTasks: 2,
      notes: 5,
    },
    {
      id: 4,
      name: "Database Migration",
      description: "Migrate legacy database to cloud infrastructure",
      status: "Completed",
      progress: 100,
      deadline: "2025-09-01",
      budget: "$30,000",
      priority: "High",
      team: [
        { id: 5, name: "Alex Rivera", role: "DevOps Lead", avatar: "AR" },
        { id: 2, name: "Sarah Chen", role: "Database Admin", avatar: "SC" },
      ],
      tasks: 15,
      completedTasks: 15,
      notes: 12,
    },
    {
      id: 5,
      name: "Customer Portal",
      description: "Self-service portal for customer account management",
      status: "On Hold",
      progress: 30,
      deadline: "2026-02-01",
      budget: "$40,000",
      priority: "Low",
      team: [
        { id: 3, name: "Mike Johnson", role: "Full Stack Dev", avatar: "MJ" },
      ],
      tasks: 18,
      completedTasks: 5,
      notes: 3,
    },
  ];

  const filteredProjects = sampleProjects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || project.status.toLowerCase() === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-700 border-green-200";
      case "Planning":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "Completed":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "On Hold":
        return "bg-gray-100 text-gray-700 border-gray-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-700";
      case "Medium":
        return "bg-yellow-100 text-yellow-700";
      case "Low":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getProgressColor = (progress) => {
    if (progress >= 80) return "bg-green-500";
    if (progress >= 50) return "bg-yellow-500";
    return "bg-blue-500";
  };

  const formatDeadline = (deadline) => {
    const date = new Date(deadline);
    const now = new Date();
    const diffTime = date - now;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) return `${Math.abs(diffDays)} days overdue`;
    if (diffDays === 0) return "Due today";
    if (diffDays === 1) return "Due tomorrow";
    if (diffDays <= 7) return `Due in ${diffDays} days`;
    return date.toLocaleDateString();
  };

  const getAvatarColor = (name) => {
    const colors = [
      "bg-red-100 text-red-600",
      "bg-blue-100 text-blue-600",
      "bg-green-100 text-green-600",
      "bg-yellow-100 text-yellow-600",
      "bg-purple-100 text-purple-600",
      "bg-pink-100 text-pink-600",
    ];
    const index = name.length % colors.length;
    return colors[index];
  };

  if (showProjectDetail) {
    const project = sampleProjects.find((p) => p.id === showProjectDetail);
    return (
      <div className="bg-white rounded-lg shadow-sm border">
        {/* Project Detail Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => setShowProjectDetail(null)}
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              ← Back to Projects
            </button>
            <div className="flex gap-2">
              <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg">
                <Edit className="w-4 h-4" />
              </button>
              <button className="p-2 text-gray-500 hover:bg-gray-100 hover:text-red-600 rounded-lg">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {project.name}
              </h2>
              <p className="text-gray-600 mb-4">{project.description}</p>

              <div className="flex items-center gap-4 text-sm">
                <span
                  className={`px-3 py-1 rounded-full border ${getStatusColor(
                    project.status
                  )}`}
                >
                  {project.status}
                </span>
                <span
                  className={`px-2 py-1 rounded ${getPriorityColor(
                    project.priority
                  )}`}
                >
                  {project.priority} Priority
                </span>
                <span className="text-gray-600">Budget: {project.budget}</span>
              </div>
            </div>

            <div className="text-right">
              <div className="text-3xl font-bold text-gray-900">
                {project.progress}%
              </div>
              <div className="text-sm text-gray-600">Complete</div>
            </div>
          </div>
        </div>

        {/* Project Stats */}
        <div className="p-6 border-b border-gray-200">
          <div className="grid grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">
                {project.tasks}
              </div>
              <div className="text-sm text-gray-600">Total Tasks</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                {project.completedTasks}
              </div>
              <div className="text-sm text-gray-600">Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">
                {project.notes}
              </div>
              <div className="text-sm text-gray-600">Notes</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-gray-900">
                {formatDeadline(project.deadline)}
              </div>
              <div className="text-sm text-gray-600">Deadline</div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Team Members
            </h3>
            <button className="bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2 text-sm">
              <UserPlus className="w-4 h-4" />
              Add Member
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.team.map((member) => (
              <div
                key={member.id}
                className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg"
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm ${getAvatarColor(
                    member.name
                  )}`}
                >
                  {member.avatar}
                </div>
                <div>
                  <div className="font-medium text-gray-900">{member.name}</div>
                  <div className="text-sm text-gray-600">{member.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Projects</h3>
            <p className="text-sm text-gray-600 mt-1">
              Manage your active projects and teams
            </p>
          </div>
          <button
            onClick={onAddProject}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2 transition-colors"
          >
            <Plus className="w-4 h-4" />
            New Project
          </button>
        </div>

        {/* Search and Filter */}
        <div className="flex items-center gap-4">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="planning">Planning</option>
            <option value="completed">Completed</option>
            <option value="on hold">On Hold</option>
          </select>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="p-6">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <Search className="w-12 h-12 mx-auto mb-4 text-gray-300" />
            <p>No projects found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => setShowProjectDetail(project.id)}
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {project.name}
                    </h4>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                  <button className="p-1 text-gray-400 hover:text-gray-600">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>

                {/* Status and Priority */}
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className={`px-2 py-1 rounded text-xs border ${getStatusColor(
                      project.status
                    )}`}
                  >
                    {project.status}
                  </span>
                  <span
                    className={`px-2 py-1 rounded text-xs ${getPriorityColor(
                      project.priority
                    )}`}
                  >
                    {project.priority}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${getProgressColor(
                        project.progress
                      )}`}
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>

                {/* Team Avatars */}
                <div className="flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {project.team.slice(0, 3).map((member, index) => (
                      <div
                        key={index}
                        className={`w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-xs font-semibold ${getAvatarColor(
                          member.name
                        )}`}
                        title={member.name}
                      >
                        {member.avatar}
                      </div>
                    ))}
                    {project.team.length > 3 && (
                      <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 text-gray-600 flex items-center justify-center text-xs font-semibold">
                        +{project.team.length - 3}
                      </div>
                    )}
                  </div>

                  <div className="text-sm text-gray-600">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    {formatDeadline(project.deadline)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsSection;

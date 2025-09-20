import React, { useState } from "react";
import {
  Plus,
  Search,
  Mail,
  Phone,
  MapPin,
  Edit,
  Trash2,
  Filter,
} from "lucide-react";

const ContactsSection = ({ contacts, onAddContact }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  // Sample contacts with more detailed data
  const sampleContacts = [
    {
      id: 1,
      name: "John Smith",
      role: "UI Designer",
      company: "Design Co",
      email: "john@designco.com",
      phone: "(555) 123-4567",
      location: "New York, NY",
      projects: ["Website Redesign", "Mobile App"],
      tags: ["Design", "Freelancer"],
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Senior Developer",
      company: "Tech Corp",
      email: "sarah@techcorp.com",
      phone: "(555) 234-5678",
      location: "San Francisco, CA",
      projects: ["Website Redesign", "Database Migration"],
      tags: ["Development", "Full-time"],
    },
    {
      id: 3,
      name: "Mike Johnson",
      role: "Backend Developer",
      company: "Dev Solutions",
      email: "mike@devsolutions.com",
      phone: "(555) 345-6789",
      location: "Austin, TX",
      projects: ["Mobile App"],
      tags: ["Development", "Contractor"],
    },
    {
      id: 4,
      name: "Lisa Wong",
      role: "Marketing Manager",
      company: "Growth Agency",
      email: "lisa@growthagency.com",
      phone: "(555) 456-7890",
      location: "Los Angeles, CA",
      projects: ["Marketing Campaign"],
      tags: ["Marketing", "Agency"],
    },
    {
      id: 5,
      name: "Alex Rivera",
      role: "DevOps Engineer",
      company: "Cloud Systems",
      email: "alex@cloudsystems.com",
      phone: "(555) 567-8901",
      location: "Seattle, WA",
      projects: ["Database Migration"],
      tags: ["DevOps", "Full-time"],
    },
    {
      id: 6,
      name: "Emma Davis",
      role: "Product Manager",
      company: "Startup Inc",
      email: "emma@startupinc.com",
      phone: "(555) 678-9012",
      location: "Boston, MA",
      projects: ["Mobile App", "Marketing Campaign"],
      tags: ["Product", "Leadership"],
    },
  ];

  const filteredContacts = sampleContacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
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

  return (
    <div className="bg-white rounded-lg shadow-sm border">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Contacts</h3>
            <p className="text-sm text-gray-600 mt-1">
              Manage your professional network
            </p>
          </div>
          <button
            onClick={onAddContact}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2 transition-colors"
          >
            <Plus className="w-4 h-4" />
            Add Contact
          </button>
        </div>

        {/* Search and Filter */}
        <div className="flex items-center gap-4">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search contacts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Filter className="w-5 h-5" />
          </button>
        </div>

        {/* Filters (when expanded) */}
        {showFilters && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg border">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Company
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded text-sm">
                  <option value="">All Companies</option>
                  <option value="design-co">Design Co</option>
                  <option value="tech-corp">Tech Corp</option>
                  <option value="dev-solutions">Dev Solutions</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Role
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded text-sm">
                  <option value="">All Roles</option>
                  <option value="developer">Developer</option>
                  <option value="designer">Designer</option>
                  <option value="manager">Manager</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Location
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded text-sm">
                  <option value="">All Locations</option>
                  <option value="ny">New York</option>
                  <option value="sf">San Francisco</option>
                  <option value="austin">Austin</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Tags
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded text-sm">
                  <option value="">All Tags</option>
                  <option value="development">Development</option>
                  <option value="design">Design</option>
                  <option value="marketing">Marketing</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Contact List */}
      <div className="p-6">
        {filteredContacts.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <Search className="w-12 h-12 mx-auto mb-4 text-gray-300" />
            <p>No contacts found matching your search.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredContacts.map((contact) => (
              <div
                key={contact.id}
                className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {/* Avatar */}
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold text-sm ${getAvatarColor(
                        contact.name
                      )}`}
                    >
                      {getInitials(contact.name)}
                    </div>

                    {/* Contact Info */}
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {contact.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {contact.role} at {contact.company}
                      </p>

                      {/* Contact Details */}
                      <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <Mail className="w-3 h-3" />
                          {contact.email}
                        </div>
                        <div className="flex items-center gap-1">
                          <Phone className="w-3 h-3" />
                          {contact.phone}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {contact.location}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    <button className="p-2 text-gray-500 hover:bg-gray-100 rounded transition-colors">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-500 hover:bg-gray-100 hover:text-red-600 rounded transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Projects and Tags */}
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    {contact.projects.length > 0 && (
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium text-gray-600">
                          Projects:
                        </span>
                        <div className="flex gap-1">
                          {contact.projects.map((project, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded"
                            >
                              {project}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex gap-1">
                    {contact.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
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

export default ContactsSection;

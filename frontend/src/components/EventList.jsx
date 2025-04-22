import React, { useState } from "react";
import { Edit, Trash2, X, ArrowLeft } from "lucide-react";
import EventModal from "./EventModal";

// Sample data for previous events
const initialEvents = [
  {
    id: 1,
    title: "Tech Conference 2023",
    subtitle: "Exploring the Future of AI",
    description:
      "A three-day conference featuring keynote speakers, workshops, and networking opportunities focused on artificial intelligence and machine learning.",
    images:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    keyInformation: [
      "Over 50 speakers from leading tech companies",
      "Workshops on practical AI implementation",
      "Networking events with industry professionals",
    ],
    informationSource: [
      { from: "Dr. Jane Smith", topic: "The Ethics of AI in Healthcare" },
      {
        from: "https://techconference2023.example.com",
        topic: "Conference Website",
      },
    ],
  },
  {
    id: 2,
    title: "Web Development Workshop",
    subtitle: "Modern Frontend Frameworks",
    description:
      "A hands-on workshop covering React, Vue, and other modern web development tools and techniques.",
    images:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    peopleInformation: {
      info1: ["Sarah Johnson - React Expert", "Mike Brown - Vue Specialist"],
      info2: [
        "Morning Session - React Fundamentals",
        "Afternoon Session - Vue.js",
      ],
      info3: ["Code Lab - Building Apps", "Q&A Session"],
    },
    informationSource: [
      { from: "Frontend Masters", topic: "Workshop Materials" },
      { from: "Dev Community", topic: "Best Practices" },
    ],
  },
  {
    id: 3,
    title: "Design Systems Symposium",
    subtitle: "Building Scalable UI Components",
    description:
      "Learn how to create and maintain design systems that scale across large applications.",
    images:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    peopleInformation: {
      info1: ["Alex Chen - Design Lead", "Emma Wilson - UI Architect"],
      info2: ["Component Library Workshop", "Design Token Session"],
      info3: ["Case Studies", "Implementation Strategies"],
    },
    informationSource: [
      { from: "Design Systems Weekly", topic: "System Architecture" },
      { from: "UX Collective", topic: "Component Design" },
    ],
  },
];

export default function EventList() {
  const [events, setEvents] = useState(initialEvents);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [eventToDelete, setEventToDelete] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleDeleteClick = (id) => {
    setEventToDelete(id);
    setIsDeleteDialogOpen(true);
  };

  const handleConfirmDelete = () => {
    if (eventToDelete) {
      setEvents(events.filter((event) => event.id !== eventToDelete));
      setEventToDelete(null);
      setIsDeleteDialogOpen(false);
    }
  };

  const handleEditClick = (event) => {
    setSelectedEvent(event);
    setIsEditModalOpen(true);
  };

  const handleViewDetails = (event) => {
    setSelectedEvent(event);
    setIsDetailsModalOpen(true);
  };

  const handleUpdateEvent = (updatedEvent) => {
    setEvents(
      events.map((event) =>
        event.id === updatedEvent.id ? updatedEvent : event
      )
    );
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={event.images}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 flex-grow">
              <h3 className="text-xl font-semibold mb-1 line-clamp-1">
                {event.title}
              </h3>
              <p className="text-sm text-gray-500 mb-2">{event.subtitle}</p>
              <p className="text-sm line-clamp-3">{event.description}</p>
            </div>
            <div className="p-4 pt-0 flex justify-between">
              <button
                className="px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50"
                onClick={() => handleViewDetails(event)}
              >
                View Details
              </button>
              <div className="flex gap-2">
                <button
                  className="p-2 text-gray-600 hover:text-gray-900"
                  onClick={() => handleEditClick(event)}
                >
                  <Edit className="h-4 w-4" />
                </button>
                <button
                  className="p-2 text-red-500 hover:text-red-600"
                  onClick={() => handleDeleteClick(event.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Delete Dialog */}
      {isDeleteDialogOpen && (
        <div className="modal-overlay">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full modal-animation modal-content modal-delete">
            <h3 className="text-lg font-semibold mb-2">Delete Event</h3>
            <p className="text-gray-600 mb-4">
              Are you sure you want to delete this event? This action cannot be
              undone.
            </p>
            <div className="flex justify-end gap-2">
              <button
                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900"
                onClick={() => setIsDeleteDialogOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 text-sm bg-red-500 text-white rounded-md hover:bg-red-600"
                onClick={handleConfirmDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Details Modal */}
      {isDetailsModalOpen && selectedEvent && (
        <div className="fixed inset-0 bg-white z-50">
          <div className="max-w-7xl mx-auto px-4 py-6 modal-animation">
            <div className="flex items-center gap-4 mb-6">
              <button
                onClick={() => setIsDetailsModalOpen(false)}
                className="inline-flex items-center text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Events
              </button>
              <div className="flex-1" />
              <button
                onClick={() => {
                  setIsDetailsModalOpen(false);
                  handleEditClick(selectedEvent);
                }}
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                <Edit className="h-4 w-4 mr-2" />
                Edit Event
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h1 className="text-4xl font-bold mb-4">
                  {selectedEvent.title}
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  {selectedEvent.subtitle}
                </p>

                <div className="space-y-8">
                  <section>
                    <h2 className="text-2xl font-semibold mb-4">Description</h2>
                    <p className="text-gray-600">{selectedEvent.description}</p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold mb-4">
                      Key Information
                    </h2>
                    <div className="space-y-4">
                      {selectedEvent.keyInformation &&
                        selectedEvent.keyInformation.map((info, index) => (
                          <div key={index} className="flex gap-4">
                            <span className="text-gray-500">{index + 1}</span>
                            <p>{info}</p>
                          </div>
                        ))}
                      {selectedEvent.peopleInformation &&
                        Object.entries(selectedEvent.peopleInformation).map(
                          ([key, items], index) => (
                            <div key={key} className="space-y-2">
                              <h4 className="font-medium">
                                Information Point {index + 1}
                              </h4>
                              <ul className="list-disc list-inside space-y-1">
                                {items.map((item, i) => (
                                  <li key={i} className="text-gray-600">
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )
                        )}
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold mb-4">
                      Information Sources
                    </h2>
                    <div className="grid gap-4">
                      {selectedEvent.informationSource.map((source, index) => (
                        <div key={index} className="border rounded-lg p-4">
                          <div className="mb-2">
                            <h3 className="font-medium">Source</h3>
                            <p className="text-gray-600">
                              {source.from.startsWith("http") ? (
                                <a
                                  href={source.from}
                                  className="text-blue-600 hover:underline"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {source.from}
                                </a>
                              ) : (
                                source.from
                              )}
                            </p>
                          </div>
                          <div>
                            <h3 className="font-medium">Topic</h3>
                            <p className="text-gray-600">{source.topic}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              </div>

              <div>
                <div className="bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={selectedEvent.images}
                    alt={selectedEvent.title}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {selectedEvent && (
        <EventModal
          event={selectedEvent}
          isOpen={isEditModalOpen}
          onClose={() => {
            setIsEditModalOpen(false);
            setSelectedEvent(null);
          }}
          onSuccess={handleUpdateEvent}
        />
      )}
    </>
  );
}

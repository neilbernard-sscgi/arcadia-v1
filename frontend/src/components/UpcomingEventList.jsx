import React, { useState } from "react";
import { Edit, Trash2, Calendar } from "lucide-react";
import UpcomingEventModal from "./UpcomingEventModal";

// Sample data for upcoming events
const initialUpcomingEvents = [
  {
    id: 1,
    title: "React Summit 2025",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: 2,
    title: "UX Design Conference",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: 3,
    title: "DevOps World 2025",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
];

export default function UpcomingEventList() {
  const [events, setEvents] = useState(initialUpcomingEvents);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [eventToDelete, setEventToDelete] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
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
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 bg-white rounded-full p-1">
                <Calendar className="h-4 w-4 text-gray-600" />
              </div>
            </div>
            <div className="p-4 flex-grow">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium mr-2">{event.title}</h3>
                <div className="flex gap-2 shrink-0">
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
          </div>
        ))}
      </div>

      {/* Delete Dialog */}
      {isDeleteDialogOpen && (
        <div className="modal-overlay">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full modal-animation modal-content modal-delete">
            <h3 className="text-lg font-semibold mb-2">
              Delete Upcoming Event
            </h3>
            <p className="text-gray-600 mb-4">
              Are you sure you want to delete this upcoming event? This action
              cannot be undone.
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

      {/* Edit Modal */}
      {selectedEvent && (
        <UpcomingEventModal
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

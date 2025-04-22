import React, { useState } from "react";
import { PlusCircle } from "lucide-react";
import EventList from "./EventList";
import UpcomingEventList from "./UpcomingEventList";
import EventModal from "./EventModal";
import UpcomingEventModal from "./UpcomingEventModal";

export default function App() {
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  const [isUpcomingEventModalOpen, setIsUpcomingEventModalOpen] =
    useState(false);

  return (
    <div className="container mx-auto py-8 px-4">
      {/* Upcoming Events Section */}
      <div className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Upcoming Events</h1>
          <button
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-blue-700"
            onClick={() => setIsUpcomingEventModalOpen(true)}
          >
            <PlusCircle className="h-4 w-4" />
            Add Upcoming Event
          </button>
        </div>

        <UpcomingEventList />
      </div>

      {/* Previous Events Section */}
      <div>
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Previous Events</h1>
          <button
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-blue-700"
            onClick={() => setIsEventModalOpen(true)}
          >
            <PlusCircle className="h-4 w-4" />
            Add New Event
          </button>
        </div>

        <EventList />
      </div>

      {/* Modals */}
      <EventModal
        isOpen={isEventModalOpen}
        onClose={() => setIsEventModalOpen(false)}
        onSuccess={() => setIsEventModalOpen(false)}
      />

      <UpcomingEventModal
        isOpen={isUpcomingEventModalOpen}
        onClose={() => setIsUpcomingEventModalOpen(false)}
        onSuccess={() => setIsUpcomingEventModalOpen(false)}
      />
    </div>
  );
}

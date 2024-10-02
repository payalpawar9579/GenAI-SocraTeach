import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Calendar = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedYear, setSelectedYear] = useState(currentDate.getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(currentDate.getMonth());
  const [events, setEvents] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const [eventDescription, setEventDescription] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleMonthChange = (event) => {
    const month = parseInt(event.target.value, 10);
    setSelectedMonth(month);
    setCurrentDate(new Date(selectedYear, month, 1));
  };

  const handleYearChange = (event) => {
    const year = parseInt(event.target.value, 10);
    setSelectedYear(year);
    setCurrentDate(new Date(year, selectedMonth, 1));
  };

  const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
  const firstDay = new Date(selectedYear, selectedMonth, 1).getDay();

  const days = [];
  for (let i = 0; i < firstDay; i++) {
    days.push(<div key={`empty-${i}`} className="flex justify-center items-center h-20"></div>);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    const dateKey = `${selectedYear}-${selectedMonth + 1}-${i}`;
    days.push(
      <div
        key={i}
        className="flex justify-center items-center h-20 border border-transparent bg-white bg-opacity-20 rounded-lg hover:bg-blue-500 cursor-pointer transition-all duration-200 ease-in-out text-white"
        style={{ width: '46px', height: '46px', borderRadius: '23px' }}
        onClick={() => {
          setSelectedDate(dateKey);
          setEventDescription(events[dateKey] || '');
          setIsModalOpen(true);
          setIsEditing(!!events[dateKey]);
        }}
      >
        {i}
      </div>
    );
  }

  const handleSaveEvent = () => {
    if (selectedDate && eventDescription) {
      setEvents((prevEvents) => ({
        ...prevEvents,
        [selectedDate]: eventDescription,
      }));
      resetModal();
    }
  };

  const resetModal = () => {
    setEventDescription('');
    setSelectedDate(null);
    setIsModalOpen(false);
    setIsEditing(false);
  };

  const handleDeleteEvent = () => {
    if (selectedDate) {
      setEvents((prevEvents) => {
        const newEvents = { ...prevEvents };
        delete newEvents[selectedDate];
        return newEvents;
      });
      resetModal();
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center relative p-4"
      style={{
        backgroundImage: `url(/Images/Coursebg.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backdropFilter: 'blur(5px)',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30 z-0" />
      <div className="flex bg-black bg-opacity-90 rounded-lg shadow-lg w-full max-w-4xl text-center z-10" style={{ marginTop: '-4px' }}>
        
        {/* Calendar Section */}
        <div className="flex flex-col w-2/3 p-4 bg-gray-900 bg-opacity-80 rounded-lg shadow-md" style={{ marginTop: '-4px' }}>
          <h1 className="text-3xl font-bold mb-3 text-white">Calendar</h1>
          <h2 className="text-xl mb-3 text-white">
            {new Date(selectedYear, selectedMonth).toLocaleString('default', { month: 'long' })} {selectedYear}
          </h2>
          
          {/* Month and Year Dropdowns */}
          <div className="flex justify-center mb-3">
            <select value={selectedMonth} onChange={handleMonthChange} className="bg-blue-500 text-white rounded-lg p-1 mx-1">
              {Array.from({ length: 12 }, (_, index) => (
                <option key={index} value={index}>
                  {new Date(0, index).toLocaleString('default', { month: 'long' })}
                </option>
              ))}
            </select>
            
            <select value={selectedYear} onChange={handleYearChange} className="bg-blue-500 text-white rounded-lg p-1 mx-1">
              {Array.from({ length: 3000 - 1901 + 1 }, (_, index) => (
                <option key={index} value={1901 + index}>
                  {1901 + index}
                </option>
              ))}
            </select>
          </div>

          {/* Days of the Week and Days in the Month */}
          <div className="grid grid-cols-7 gap-2">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div key={day} className="font-bold text-white">{day}</div>
            ))}
            {days}
          </div>
        </div>

        {/* Events List Section */}
        <div className="w-1/3 p-4" style={{ marginTop: '-4px' }}>
          {/* Back Button */}
          <div className="mb-3">
            <button 
              onClick={() => navigate('/Dashboard')} // Navigate back to Dashboard
              className="bg-blue-500 text-white p-2 rounded-lg"
            >
              Back
            </button>
          </div>

          <h2 className="text-xl font-bold text-white mb-3">Events</h2>
          <div className="bg-gray-900 bg-opacity-80 rounded-lg shadow-md p-4">
            <div className="space-y-2">
              {Object.keys(events).length > 0 ? (
                <table className="w-full text-left text-white">
                  <thead>
                    <tr>
                      <th className="p-2">Date</th>
                      <th className="p-2">Event Description</th>
                      <th className="p-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.keys(events).map((key) => (
                      <tr key={key} className="hover:bg-gray-700">
                        <td className="p-2">{key}</td>
                        <td className="p-2">{events[key]}</td>
                        <td className="p-2">
                          <button onClick={() => {
                            setSelectedDate(key);
                            setEventDescription(events[key]);
                            setIsModalOpen(true);
                            setIsEditing(true);
                          }} className="text-yellow-500 ml-2">
                            Edit
                          </button>
                          <button onClick={() => {
                            setSelectedDate(key);
                            handleDeleteEvent();
                          }} className="text-red-500 ml-2">
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="bg-gray-600 rounded-lg p-4 text-white">No events added.</div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Event Input */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-20">
          <div className="bg-black bg-opacity-70 absolute inset-0" onClick={() => setIsModalOpen(false)} />
          <div className="bg-white p-4 rounded-lg relative z-30 w-72 mx-auto" style={{ marginTop: '-4px' }}>
            <h2 className="text-lg mb-3">{isEditing ? 'Edit Event' : 'Add Event'}</h2>
            <textarea
              value={eventDescription}
              onChange={(e) => setEventDescription(e.target.value)}
              placeholder="Enter event description"
              className="bg-gray-200 text-black rounded-lg p-2 w-full h-28 resize-none"
            />
            <div className="flex justify-between mt-4">
              {isEditing ? (
                <>
                  <button onClick={handleDeleteEvent} className="bg-red-500 text-white font-semibold py-2 px-3 rounded-lg">
                    Delete
                  </button>
                  <button onClick={handleSaveEvent} className="bg-blue-500 text-white font-semibold py-2 px-3 rounded-lg">
                    Save Changes
                  </button>
                </>
              ) : (
                <button onClick={handleSaveEvent} className="bg-blue-500 text-white font-semibold py-2 px-3 rounded-lg">
                  Save Event
                </button>
              )}
              <button onClick={() => setIsModalOpen(false)} className="bg-gray-400 text-white font-semibold py-2 px-3 rounded-lg">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;

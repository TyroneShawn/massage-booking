import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { getDay } from 'date-fns';
import { useTranslation } from 'react-i18next';

const masseuses = [
  { name: 'Stacy', description: 'Specializes in Swedish massage with over 10 years of experience.', image: 'https://placehold.co/600x400?text=Stacy', availableDays: [1, 3, 5], availableTimes: ['10:00', '14:00'] },
  { name: 'Katya', description: 'Expert in deep tissue massage, known for her healing hands.', image: 'https://placehold.co/600x400?text=Katya', availableDays: [2, 4], availableTimes: ['09:00', '13:00'] },
  { name: 'John', description: 'Certified in sports massage, helping athletes recover faster.', image: 'https://placehold.co/600x400?text=John', availableDays: [1, 4], availableTimes: ['11:00', '15:00'] },
  { name: 'Lisa', description: 'Aromatherapy massage specialist with a gentle touch.', image: 'https://placehold.co/600x400?text=Lisa', availableDays: [3, 6], availableTimes: ['12:00', '16:00'] },
  { name: 'Michael', description: 'Renowned for his shiatsu massage techniques.', image: 'https://placehold.co/600x400?text=Michael', availableDays: [2, 5], availableTimes: ['10:00', '14:00'] },
  { name: 'Sarah', description: 'Passionate about reflexology and its benefits.', image: 'https://placehold.co/600x400?text=Sarah', availableDays: [1, 4], availableTimes: ['09:00', '13:00'] },
  { name: 'Emily', description: 'Integrates hot stone therapy for a relaxing experience.', image: 'https://placehold.co/600x400?text=Emily', availableDays: [3, 5], availableTimes: ['11:00', '15:00'] },
  { name: 'Daniel', description: 'Skilled in prenatal massage, catering to expecting mothers.', image: 'https://placehold.co/600x400?text=Daniel', availableDays: [2, 6], availableTimes: ['12:00', '16:00'] },
  { name: 'Sophia', description: 'Specializes in Thai massage, known for her calming sessions.', image: 'https://placehold.co/600x400?text=Sophia', availableDays: [1, 3], availableTimes: ['10:00', '14:00'] },
  { name: 'David', description: 'Offers therapeutic massage for chronic pain relief.', image: 'https://placehold.co/600x400?text=David', availableDays: [2, 4, 6], availableTimes: ['19:00'] },
  { name: 'Anna', description: 'Expert in lymphatic drainage massage.', image: 'https://placehold.co/600x400?text=Anna', availableDays: [5, 0], availableTimes: ['09:00', '13:00'] },
  { name: 'James', description: 'Combines acupuncture with massage therapy.', image: 'https://placehold.co/600x400?text=James', availableDays: [2, 4], availableTimes: ['11:00', '15:00'] },
  { name: 'Olivia', description: 'Focuses on relaxation and stress relief through massage.', image: 'https://placehold.co/600x400?text=Olivia', availableDays: [3, 6], availableTimes: ['12:00', '16:00'] },
  { name: 'Robert', description: 'Known for his effective trigger point therapy.', image: 'https://placehold.co/600x400?text=Robert', availableDays: [1, 5], availableTimes: ['10:00', '14:00'] },
  { name: 'Mia', description: 'Utilizes cupping therapy along with traditional massage.', image: 'https://placehold.co/600x400?text=Mia', availableDays: [2, 0], availableTimes: ['09:00', '13:00'] },
];

function BookingPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMasseuse, setSelectedMasseuse] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [filteredMasseuses, setFilteredMasseuses] = useState(masseuses);

  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const masseuseName = params.get('masseuse');
    if (masseuseName) {
      const selected = masseuses.find(masseuse => masseuse.name === masseuseName);
      setSelectedMasseuse(selected);
    }
  }, [location.search]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    filterMasseuses(event.target.value);
  };

  const filterMasseuses = (term) => {
    const filtered = masseuses.filter((masseuse) =>
      masseuse.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredMasseuses(filtered);
  };

  const handleMasseuseChange = (event) => {
    const selected = masseuses.find(masseuse => masseuse.name === event.target.value);
    setSelectedMasseuse(selected);
    setSelectedDate(null);
    setSelectedTime('');
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTime('');
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/processing');
  };

  const getAvailableTimes = () => {
    if (!selectedMasseuse) {
      return [];
    }
    return selectedMasseuse.availableTimes;
  };

  const isDayDisabled = (date) => {
    if (!selectedMasseuse) {
      return false;
    }
    const day = getDay(date); // get day of the week as an integer (0 for Sunday, 6 for Saturday)
    return !selectedMasseuse.availableDays.includes(day);
  };

  return (
    <div className="min-h-screen bg-muted text-foreground">
      <main className="flex flex-col md:flex-row items-center justify-center p-8 space-y-8 md:space-y-0 md:space-x-8">
        <div className="bg-card p-8 rounded-lg shadow-lg w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">{t('Book Masseuse')}</h2>
          <p className="text-muted-foreground mb-8">{t('Search and Select Masseuse. Book Appointment Email will be sent to you.')}</p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-muted-foreground">{t('Search Masseuses')}</label>
              <input
                type="text"
                id="search"
                value={searchTerm}
                onChange={handleSearchChange}
                className="mt-1 block w-full bg-input border border-border rounded-md p-2"
                placeholder={t('Search Masseuses...')}
              />
            </div>
            <div>
              {filteredMasseuses.map((masseuse, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id={`masseuse-${index}`}
                    name="masseuse"
                    value={masseuse.name}
                    onChange={handleMasseuseChange}
                    checked={selectedMasseuse && selectedMasseuse.name === masseuse.name}
                    className="h-4 w-4 text-primary border-gray-300 focus:ring-primary"
                  />
                  <label htmlFor={`masseuse-${index}`} className="text-sm font-medium text-muted-foreground">{masseuse.name}</label>
                </div>
              ))}
            </div>
            <div className="flex space-x-4">
              <div className="flex-1">
                <label htmlFor="first-name" className="block text-sm font-medium text-muted-foreground">{t('First name')}</label>
                <input type="text" id="first-name" name="first-name" className="mt-1 block w-full bg-input border border-border rounded-md p-2" placeholder="Jane" />
              </div>
              <div className="flex-1">
                <label htmlFor="last-name" className="block text-sm font-medium text-muted-foreground">{t('Last name')}</label>
                <input type="text" id="last-name" name="last-name" className="mt-1 block w-full bg-input border border-border rounded-md p-2" placeholder="Smitherton" />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-muted-foreground">{t('Email address')}</label>
              <input type="email" id="email" name="email" className="mt-1 block w-full bg-input border border-border rounded-md p-2" placeholder="email@janesfakedomain.net" />
            </div>
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-muted-foreground">{t('Select Date')}</label>
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                filterDate={isDayDisabled}
                minDate={new Date()}
                className="mt-1 block w-full bg-input border border-border rounded-md p-2"
                placeholderText={t('Select Date')}
              />
            </div>
            <div>
              <label htmlFor="time" className="block text-sm font-medium text-muted-foreground">{t('Select Time')}</label>
              <select
                id="time"
                name="time"
                value={selectedTime}
                onChange={handleTimeChange}
                className="mt-1 block w-full bg-input border border-border rounded-md p-2"
                disabled={!selectedDate}
              >
                <option value="">{t('Select Time')}</option>
                {getAvailableTimes().map((time, index) => (
                  <option key={index} value={time}>{time}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-muted-foreground">Your message</label>
              <textarea id="message" name="message" rows="4" className="mt-1 block w-full bg-input border border-border rounded-md p-2" placeholder="Enter your question or message"></textarea>
            </div>
            <button type="submit" className="bg-primary text-primary-foreground w-full py-2 rounded-md">{t('Submit')}</button>
          </form>
        </div>
        <div className="w-full md:w-1/2">
          <img src={selectedMasseuse?.image ?? "/img/swedmass.jpg"} alt="Masseuse giving a massage" className="rounded-lg shadow-lg" />
          {selectedMasseuse && (
            <div className="bg-card p-4 mt-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">{selectedMasseuse.name}</h3>
              <p>{selectedMasseuse.description}</p>
              <p><strong> Available Days:</strong> {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
                .filter((day, index) => !selectedMasseuse.availableDays.includes(index))
                .join(', ')}</p>
              <p><strong>Available Times:</strong> {selectedMasseuse.availableTimes.join(', ')}</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default BookingPage;

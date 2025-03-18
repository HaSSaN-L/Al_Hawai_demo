import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface TimeSlot {
  time: string;
  available: boolean;
}

const AppointmentScheduler = () => {
  const { t } = useTranslation();
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedOffice, setSelectedOffice] = useState('');
  const [selectedAttorney, setSelectedAttorney] = useState('');

  // Get tomorrow's date for min date attribute
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  // Get date 30 days from now for max date attribute
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 30);
  const maxDateStr = maxDate.toISOString().split('T')[0];

  const timeSlots: TimeSlot[] = [
    { time: '09:00', available: true },
    { time: '10:00', available: true },
    { time: '11:00', available: true },
    { time: '12:00', available: false },
    { time: '14:00', available: true },
    { time: '15:00', available: true },
    { time: '16:00', available: false },
    { time: '17:00', available: true }
  ];

  const attorneys = [
    { 
      id: '1', 
      nameKey: 'team.attorneys.mahmoud.name', 
      specializationKey: 'team.attorneys.mahmoud.specialization' 
    },
    { 
      id: '2', 
      nameKey: 'team.attorneys.sarah.name', 
      specializationKey: 'team.attorneys.sarah.specialization' 
    },
    { 
      id: '3', 
      nameKey: 'team.attorneys.omar.name', 
      specializationKey: 'team.attorneys.omar.specialization' 
    },
    { 
      id: '4', 
      nameKey: 'team.attorneys.fatima.name', 
      specializationKey: 'team.attorneys.fatima.specialization' 
    }
  ];

  const offices = [
    { 
      id: 'sharjah', 
      nameKey: 'contact.sharjahOffice', 
      addressKey: 'contact.sharjahAddress' 
    },
    { 
      id: 'dubai', 
      nameKey: 'contact.dubaiOffice', 
      addressKey: 'contact.dubaiAddress' 
    }
  ];

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
    // Reset time when date changes
    setSelectedTime('');
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm">
      <h3 className="text-xl font-bold mb-6">{t('appointment.title')}</h3>
      
      {/* Office Selection */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {t('appointment.selectOffice')}
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {offices.map((office) => (
            <button
              key={office.id}
              onClick={() => setSelectedOffice(office.id)}
              className={`p-4 rounded-lg border-2 transition-all ${
                selectedOffice === office.id
                  ? 'border-amber-400 bg-amber-50'
                  : 'border-gray-200 hover:border-amber-200'
              }`}
            >
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                <div className="text-left">
                  <p className="font-semibold">{t(office.nameKey)}</p>
                  <p className="text-sm text-gray-600">{t(office.addressKey)}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Attorney Selection */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {t('appointment.selectAttorney')}
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {attorneys.map((attorney) => (
            <button
              key={attorney.id}
              onClick={() => setSelectedAttorney(attorney.id)}
              className={`p-4 rounded-lg border-2 transition-all ${
                selectedAttorney === attorney.id
                  ? 'border-amber-400 bg-amber-50'
                  : 'border-gray-200 hover:border-amber-200'
              }`}
            >
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                <div className="text-left">
                  <p className="font-semibold">{t(attorney.nameKey)}</p>
                  <p className="text-sm text-gray-600">{t(attorney.specializationKey)}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Date Selection */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {t('appointment.selectDate')}
        </label>
        <div className="relative">
          <Calendar className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
          <input
            type="date"
            value={selectedDate}
            onChange={handleDateChange}
            min={minDate}
            max={maxDateStr}
            className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
          />
        </div>
      </div>

      {/* Time Selection */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {t('appointment.selectTime')}
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {timeSlots.map((slot, index) => (
            <button
              key={index}
              onClick={() => setSelectedTime(slot.time)}
              disabled={!slot.available}
              className={`
                py-3 px-4 rounded-lg border-2 transition-all flex items-center justify-center gap-2
                ${!slot.available && 'opacity-50 cursor-not-allowed bg-gray-50'}
                ${selectedTime === slot.time
                  ? 'border-amber-400 bg-amber-50'
                  : 'border-gray-200 hover:border-amber-200'
                }
              `}
            >
              <Clock className="w-4 h-4 text-amber-400" />
              <span>{slot.time}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Submit Button */}
      <button
        disabled={!selectedDate || !selectedTime || !selectedOffice || !selectedAttorney}
        className="w-full bg-amber-400 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-amber-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        <span>{t('appointment.confirm')}</span>
        <span className="group-hover:translate-x-1 transition-transform ltr-only">→</span>
        <span className="group-hover:-translate-x-1 transition-transform rtl-only">←</span>
      </button>

      <p className="text-sm text-gray-500 text-center mt-4">
        {t('appointment.freeConsultation')}
      </p>
    </div>
  );
};

export default AppointmentScheduler;
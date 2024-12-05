import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from 'lucide-react';
import { format, addMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, isToday } from 'date-fns';

interface DatePickerProps {
  label: string;
  date: Date;
  onDateChange: (date: Date) => void;
}

export default function DatePicker({ label, date, onDateChange }: DatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const days = eachDayOfInterval({
    start: startOfMonth(currentMonth),
    end: endOfMonth(currentMonth),
  });

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const prevMonth = () => setCurrentMonth(addMonths(currentMonth, -1));

  const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  const firstDayOfMonth = startOfMonth(currentMonth).getDay();

  return (
    <div className="relative flex-1">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-left flex items-center justify-between hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500"
      >
        <div>
          <div className="text-sm text-gray-500">{label}</div>
          <div className="text-gray-900">{format(date, 'EEE, MMM d')}</div>
        </div>
        <CalendarIcon className="w-5 h-5 text-gray-400" />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-lg border border-gray-200 p-4 z-20">
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={prevMonth}
                className="p-1 hover:bg-gray-100 rounded-full"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <div className="font-medium">
                {format(currentMonth, 'MMMM yyyy')}
              </div>
              <button
                onClick={nextMonth}
                className="p-1 hover:bg-gray-100 rounded-full"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            <div className="grid grid-cols-7 gap-1 mb-2">
              {weekDays.map((day) => (
                <div
                  key={day}
                  className="text-center text-sm font-medium text-gray-500"
                >
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: firstDayOfMonth }).map((_, index) => (
                <div key={`empty-${index}`} />
              ))}
              {days.map((day) => {
                const isSelected = isSameDay(day, date);
                const isCurrentMonth = isSameMonth(day, currentMonth);
                const isTodayDate = isToday(day);

                return (
                  <button
                    key={day.toString()}
                    onClick={() => {
                      onDateChange(day);
                      setIsOpen(false);
                    }}
                    className={`
                      h-8 rounded-full text-sm flex items-center justify-center
                      ${!isCurrentMonth && 'text-gray-300'}
                      ${isSelected && 'bg-primary-500 text-white hover:bg-primary-600'}
                      ${!isSelected && isCurrentMonth && 'hover:bg-gray-100 text-gray-900'}
                      ${isTodayDate && !isSelected && 'border border-primary-500'}
                    `}
                  >
                    {format(day, 'd')}
                  </button>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
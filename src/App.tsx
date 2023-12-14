// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import { DatePicker } from '@mui/x-date-pickers';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DayCalendarSkeleton } from '@mui/x-date-pickers/DayCalendarSkeleton';
import dayjs, { Dayjs } from 'dayjs';
import React from 'react';

const selectDay = (day: string) => {
  var day = day.toUpperCase();

  if (day === 'DO') {
    return 'Dom';
  }
  if (day === 'LU') {
    return 'Lun';
  }
  if (day === 'MA') {
    return 'Mar';
  }
  if (day === 'MI') {
    return 'Mie';
  }
  if (day === 'JU') {
    return 'Jue';
  }
  if (day === 'VI') {
    return 'Vie';
  }

  return 'Sab';
};

export default function App() {
  const [firstOfMonth, setFirstOfMonth] = React.useState<any>(dayjs());
  const [isLoading] = React.useState<boolean>(false);
  const [currentMonth, setCurrentMonth] = React.useState<number>(dayjs().month());

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker />
      <DateCalendar 
      showDaysOutsideCurrentMonth={true}
      dayOfWeekFormatter={(day: string) => selectDay(day) as string}
      defaultValue={dayjs()}
      value={firstOfMonth}
      loading={isLoading}
      reduceAnimations={true}
      onChange={(value: any) => { 
        setFirstOfMonth(value);
       }}

      renderLoading={() => <DayCalendarSkeleton />}
      />
    </LocalizationProvider>
  );
}
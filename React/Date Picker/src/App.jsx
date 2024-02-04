import { useEffect, useState } from "react";
import "./App.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  const [date, setDate] = useState(new Date().toISOString().slice(0, 7));
  // Calculate initial minDate and maxDate
  const initialMinDate = new Date().toISOString().slice(0, 7);
  const initialMaxDate = calculateMaxDate(initialMinDate);

  const [minDate, setMinDate] = useState(initialMinDate);
  const [maxDate, setMaxDate] = useState(initialMaxDate);

  // Function to calculate maxDate based on minDate
  function calculateMaxDate(minDate) {
    const minDateObj = new Date(minDate);
    const maxDateObj = new Date(minDateObj);
    maxDateObj.setMonth(minDateObj.getMonth() + 2);
    return maxDateObj.toISOString().slice(0, 7);
  }

  // Update maxDate when minDate changes
  useEffect(() => {
    const newMaxDate = calculateMaxDate(minDate);
    setMaxDate(newMaxDate);
  }, [minDate]);

  const [selectedMonth, setSelectedMonth] = useState(null);
  const [isMonthPickerOpen, setMonthPickerOpen] = useState(false);

  const handleButtonClick = () => {
    setMonthPickerOpen(!isMonthPickerOpen);
  };

  const handleMonthChange = (date) => {
    setSelectedMonth(date);
    setMonthPickerOpen(false);
  };

  return (
    <div className="box">
      {/* <div className="overlay"></div> */}
      {/* <input
        className="text-[14px] font-[700] m-0 px-[10px] py-[5px] w-[160px] flex flex-row justify-center items-center rounded-[8px]"
        defaultValue={date}
        type="month"
        min={minDate}
        max={maxDate}
        id="datePicker"
        // value={selectedMonth.toISOString().slice(0, 7)}
        required
      /> */}

      <button onClick={handleButtonClick}>Open Month Picker</button>
      {isMonthPickerOpen && (
        <DatePicker
          selected={selectedMonth}
          onChange={handleMonthChange}
          showMonthYearPicker
          dateFormat="MMMM yyyy"
        />
      )}
    </div>
  );
}

export default App;

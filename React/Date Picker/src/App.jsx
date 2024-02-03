import { useEffect, useState } from "react";
import "./App.css";

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

  return (
    <div>
      <input
        defaultValue={date}
        type="month"
        min={minDate}
        max={maxDate}
        id="datePicker"
        // value={selectedMonth.toISOString().slice(0, 7)}
        required
      />
    </div>
  );
}

export default App;

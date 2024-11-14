import { useState } from "react";

import Datepicker from "react-tailwindcss-datepicker";
import moment from "moment";

const DateSelector = ({ setSelectedPublicationDate }) => {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const handleDateSearch = (date) => {
    const startOfYear = moment(date).startOf("year").toISOString();
    const endOfYear = moment(date).endOf("year").toISOString();
    setSelectedPublicationDate({ startOfYear, endOfYear });
  };

  return (
    <div className="flex flex-col gap-2 items-center">
      <input
        onChange={(e) => handleDateSearch(e.target.value)}
        className="input"
        type="date"
        placeholder="publication date"
        required
        pattern="/^\d{4}-\d{2}-\d{2}$/"
      />
    </div>
  );
};

export default DateSelector;

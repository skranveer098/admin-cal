import React, { useState, useEffect } from "react";
import "./calender.css";

const Calender = () => {
  const [date, setDate] = useState(new Date());
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const renderCalendar = () => {
    const start = new Date(year, month, 1).getDay();
    const endDate = new Date(year, month + 1, 0).getDate();
    const end = new Date(year, month, endDate).getDay();
    const endDatePrev = new Date(year, month, 0).getDate();

    let datesHtml = [];

    for (let i = start; i > 0; i--) {
      datesHtml.push(<li key={`prev-${i}`} className="inactive">{endDatePrev - i + 1}</li>);
    }

    for (let i = 1; i <= endDate; i++) {
      const isToday =
        i === date.getDate() &&
        month === new Date().getMonth() &&
        year === new Date().getFullYear();
      datesHtml.push(
        <li key={`current-${i}`} className={isToday ? "today" : ""}>
          <button className="datebox">{i}</button>
        </li>
      );
    }

    for (let i = end; i < 6; i++) {
      datesHtml.push(
        <li key={`next-${i}`} className="inactive">
          <button className="datebox">{i - end + 1}</button>
        </li>
      );
    }

    return datesHtml;
  };

  const handleNavClick = (direction) => {
    if (direction === "prev") {
      if (month === 0) {
        setYear(year - 1);
        setMonth(11);
      } else {
        setMonth(month - 1);
      }
    } else if (direction === "next") {
      if (month === 11) {
        setYear(year + 1);
        setMonth(0);
      } else {
        setMonth(month + 1);
      }
    }
  };

  useEffect(() => {
    setDate(new Date(year, month, new Date().getDate()));
  }, [month, year]);

  return (
    <div className="calendar">
      <header>
        <h3>{`${months[month]} ${year}`}</h3>
        <nav>
          <button id="prev" onClick={() => handleNavClick("prev")}></button>
          <button id="next" onClick={() => handleNavClick("next")}></button>
        </nav>
      </header>
      <section>
        <ul className="days">
          <li>Sun</li>
          <li>Mon</li>
          <li>Tue</li>
          <li>Wed</li>
          <li>Thu</li>
          <li>Fri</li>
          <li>Sat</li>
        </ul>
        <ul className="dates">{renderCalendar()}</ul>
      </section>
    </div>
  );
};

export default Calender;


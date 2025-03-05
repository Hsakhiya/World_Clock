import React, { useEffect, useState } from "react";
import "./worldclock.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Worldclock() {
  const cities = [
    { name: "Kolkota", timeZone: "Asia/Kolkata" },
    { name: "New York", timeZone: "America/New_York" },
    { name: "London", timeZone: "Asia/Kolkata" },
    { name: "Tokyo", timeZone: "Europe/London" },
    { name: "Perth", timeZone: "Australia/Perth" },
    { name: "Shanghai", timeZone: "Asia/Shanghai" },
  ];

  const citys = ["Kolkota", "New York", "London", "Tokyo", "Perth"];

  const [time, setTime] = useState(new Date().toLocaleTimeString({}));
  const [date, setDate] = useState(new Date().toLocaleDateString({}));

  useEffect(() => {
    const updateTimes = () => {
      const newTime = {};
      const newDate = {};
      citys.forEach((city) => {
        newTime[city] = new Date().toLocaleTimeString("en-US", {
          timeZone: city.timeZone,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        });

        newDate[city] = new Date().toLocaleDateString("en-us", {
          timeZone: city.timeZone,
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        });
      });
      setTime(newTime);
      setDate(newDate);
    };
    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  const [isFullScreen, setIsFullScreen] = useState(false); // State to track full-screen status

  const toggleFullScreen = () => {
    const container = document.documentElement; // Get the document element (html)

    if (!isFullScreen) {
      if (container.requestFullscreen) {
        container.requestFullscreen(); // Enter full-screen mode
      } else if (container.mozRequestFullScreen) {
        // Firefox
        container.mozRequestFullScreen();
      } else if (container.webkitRequestFullscreen) {
        // Chrome, Safari, and Opera
        container.webkitRequestFullscreen();
      } else if (container.msRequestFullscreen) {
        // IE/Edge
        container.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen(); // Exit full-screen mode
      } else if (document.mozCancelFullScreen) {
        // Firefox
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        // Chrome, Safari, and Opera
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        // IE/Edge
        document.msExitFullscreen();
      }
    }

    setIsFullScreen(!isFullScreen); // Toggle the full-screen state
  };

  return (
    <>
      <div className="container">
        <i
          className="fas fa-expand fullscreen-icon"
          onClick={toggleFullScreen}
          title="Enter Full Screen"
        ></i>
        <div className="topContainer">
          <div className="topCityName">{"Kolkota"}</div>
          <div className="topCityTime">{time["Kolkota"]}</div>
          <div className="topCityTime">{date["Kolkota"]}</div>
        </div>
        <div className="grid-container">
          {citys.map((city,index) => (
            <div key={index} className="grid-item">
              <div className="cityName">{city}</div>
              <div className="cityTime">{time[city]}</div>
              <div className="cityTime">{date[city]}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Worldclock;

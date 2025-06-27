import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { MdAccessTime, MdPerson, MdPlayCircle } from "react-icons/md";
import dayjs from "dayjs";
import isToday from "dayjs/plugin/isToday";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import duration from "dayjs/plugin/duration";

dayjs.extend(isToday);
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);
dayjs.extend(duration);

const dummyLiveSessions = [
  {
    id: 1,
    title: "React Fundamentals",
    instructor: "Jane Doe",
    date: "2025-06-26",
    time: "15:00",
    joinLink: "https://example.com/react-class",
  },
  {
    id: 2,
    title: "JavaScript Debugging",
    instructor: "John Smith",
    date: "2025-06-25",
    time: "22:00",
    joinLink: "https://example.com/js-class",
  },
  {
    id: 3,
    title: "Career Guidance",
    instructor: "Alex",
    date: "2025-06-28",
    time: "10:00",
    joinLink: "https://example.com/career",
  },
];

const getStatus = (date, time) => {
  const sessionTime = dayjs(`${date} ${time}`);
  const now = dayjs();
  if (now.isBefore(sessionTime)) return "Upcoming";
  if (now.isAfter(sessionTime.add(1, "hour"))) return "Completed";
  return "Live Now";
};

const LiveClasses = () => {
  const [filter, setFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("asc");
  const [filteredSessions, setFilteredSessions] = useState([]);
  const [nextSession, setNextSession] = useState(null);
  const [countdown, setCountdown] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    let sessions = [...dummyLiveSessions].sort((a, b) => {
      const aTime = dayjs(`${a.date} ${a.time}`);
      const bTime = dayjs(`${b.date} ${b.time}`);
      return sortOrder === "asc" ? aTime - bTime : bTime - aTime;
    });

    const now = dayjs();
    if (selectedDate) {
      const target = dayjs(selectedDate).format("YYYY-MM-DD");
      sessions = sessions.filter((s) => s.date === target);
    } else if (filter === "Today") {
      sessions = sessions.filter((s) => dayjs(`${s.date} ${s.time}`).isToday());
    } else if (filter === "This Week") {
      const endOfWeek = now.endOf("week");
      sessions = sessions.filter((s) => {
        const time = dayjs(`${s.date} ${s.time}`);
        return (
          time.isSameOrAfter(now, "day") &&
          time.isSameOrBefore(endOfWeek, "day")
        );
      });
    }

    setFilteredSessions(sessions);
  }, [filter, sortOrder, selectedDate]);

  useEffect(() => {
    const upcoming = dummyLiveSessions
      .filter((s) => getStatus(s.date, s.time) === "Upcoming")
      .sort(
        (a, b) => dayjs(`${a.date} ${a.time}`) - dayjs(`${b.date} ${b.time}`)
      )[0];

    setNextSession(upcoming || null);
  }, []);

  useEffect(() => {
    if (!nextSession) return;

    const interval = setInterval(() => {
      const now = dayjs();
      const eventTime = dayjs(`${nextSession.date} ${nextSession.time}`);
      const diff = eventTime.diff(now);

      if (diff <= 0) {
        setCountdown("Starting soon...");
        clearInterval(interval);
        return;
      }

      const dur = dayjs.duration(diff);
      setCountdown(
        `${String(dur.hours()).padStart(2, "0")}:${String(
          dur.minutes()
        ).padStart(2, "0")}:${String(dur.seconds()).padStart(2, "0")}`
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [nextSession]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-4 gap-10">
      {/* Left Calendar Section */}
      <div className="col-span-1 space-y-4">
        <h2 className="text-xl font-semibold text-gray-700 flex items-center gap-2">
          📅 Calendar
        </h2>
        <Calendar
          onClickDay={(value) => {
            setSelectedDate(value);
            setFilter("This Week");
          }}
          tileContent={({ date }) => {
            const dateStr = dayjs(date).format("YYYY-MM-DD");
            const sessionsOnDate = dummyLiveSessions.filter(
              (s) => s.date === dateStr
            );

            if (sessionsOnDate.length === 0) return null;

            return (
              <div className="flex justify-center mt-1">
                {sessionsOnDate.map((session, idx) => {
                  const status = getStatus(session.date, session.time);
                  const color =
                    status === "Live Now"
                      ? "bg-green-500"
                      : status === "Upcoming"
                      ? "bg-yellow-500"
                      : "bg-gray-400";

                  return (
                    <span
                      key={idx}
                      className={`w-2 h-2 mx-[1px] rounded-full ${color}`}
                      title={`${session.title} - ${status}`}
                    />
                  );
                })}
              </div>
            );
          }}
        />
        <div className="flex items-center gap-4 mt-4">
          <span className="flex items-center gap-1 text-sm">
            <span className="w-3 h-3 bg-green-500 rounded-full inline-block" />{" "}
            Live
          </span>
          <span className="flex items-center gap-1 text-sm">
            <span className="w-3 h-3 bg-yellow-500 rounded-full inline-block" />{" "}
            Upcoming
          </span>
          <span className="flex items-center gap-1 text-sm">
            <span className="w-3 h-3 bg-gray-400 rounded-full inline-block" />{" "}
            Completed
          </span>
        </div>

        {selectedDate && (
          <button
            onClick={() => setSelectedDate(null)}
            className="text-sm text-blue-600 underline"
          >
            Clear Date Filter
          </button>
        )}
      </div>

      {/* Right Session List Section */}
      <div className="col-span-1 lg:col-span-3 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-800">📺 Live Classes</h1>
          <button
            onClick={() =>
              setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"))
            }
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
          >
            {sortOrder === "asc" ? "Earliest → Latest" : "Latest → Earliest"}
          </button>
        </div>

        {/* Countdown Card */}
        {nextSession && (
          <div className="bg-blue-100 text-blue-800 rounded-lg p-4 shadow flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <div>
              <p className="text-lg font-medium">
                ⏳ Next: <strong>{nextSession.title}</strong>
              </p>
              <p className="text-sm">
                {nextSession.date} at {nextSession.time}
              </p>
            </div>
            <p className="text-xl font-bold mt-2 sm:mt-0">🕒 {countdown}</p>
          </div>
        )}

        {/* Filter Buttons */}
        <div className="flex gap-3 flex-wrap">
          {["All", "Today", "This Week"].map((label) => (
            <button
              key={label}
              onClick={() => {
                setFilter(label);
                setSelectedDate(null);
              }}
              className={`px-4 py-2 text-sm rounded-full border transition ${
                filter === label && !selectedDate
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-600 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Session Cards */}
        {filteredSessions.length === 0 ? (
          <p className="text-gray-500">
            No sessions found for the selected criteria.
          </p>
        ) : (
          <div className="grid gap-6">
            {filteredSessions.map((session) => {
              const status = getStatus(session.date, session.time);
              const statusColor =
                status === "Live Now"
                  ? "text-green-600"
                  : status === "Upcoming"
                  ? "text-yellow-600"
                  : "text-gray-500";

              return (
                <div
                  key={session.id}
                  className="border rounded-xl p-5 bg-white shadow hover:shadow-md transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                        <MdPlayCircle className="text-blue-500" />
                        {session.title}
                      </h3>
                      <p className="text-sm text-gray-600 flex items-center gap-1">
                        <MdPerson className="text-gray-400" />
                        {session.instructor}
                      </p>
                      <p className="text-sm text-gray-600 flex items-center gap-1">
                        <MdAccessTime className="text-gray-400" />
                        {session.date} @ {session.time}
                      </p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end mt-4 sm:mt-0 space-y-2">
                      <span className={`text-sm font-medium ${statusColor}`}>
                        {status}
                      </span>
                      {status === "Live Now" && (
                        <a
                          href={session.joinLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
                        >
                          Join Now
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default LiveClasses;

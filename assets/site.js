const parseLocalDate = (value) => {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
};

const startOfDay = (date = new Date()) => new Date(date.getFullYear(), date.getMonth(), date.getDate());

function updateCourseCalendar() {
  const statusBlock = document.querySelector("[data-course-start]");
  const rows = [...document.querySelectorAll(".schedule-row[data-start]")];
  if (!statusBlock || !rows.length) return;

  const today = startOfDay();
  const courseStart = parseLocalDate(statusBlock.dataset.courseStart);
  const courseEnd = parseLocalDate(statusBlock.dataset.courseEnd);
  const status = document.querySelector("#course-status");
  const dateLabel = document.querySelector("#today-date");
  const day = 24 * 60 * 60 * 1000;

  dateLabel.dateTime = [today.getFullYear(), String(today.getMonth() + 1).padStart(2, "0"), String(today.getDate()).padStart(2, "0")].join("-");
  dateLabel.textContent = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric"
  }).format(today);

  let activeRow = null;
  let nextRow = null;

  rows.forEach((row) => {
    const start = parseLocalDate(row.dataset.start);
    const end = parseLocalDate(row.dataset.end);
    if (today >= start && today <= end) activeRow = row;
    if (!nextRow && today < start) nextRow = row;
    if (today > end) row.classList.add("is-past");
  });

  if (today < courseStart) {
    const days = Math.ceil((courseStart - today) / day);
    status.textContent = `Course begins in ${days} day${days === 1 ? "" : "s"}`;
    activeRow = nextRow;
  } else if (today > courseEnd) {
    status.textContent = "The Fall 2026 course has concluded";
  } else if (activeRow) {
    status.textContent = activeRow.querySelector(".week-label").textContent;
  } else if (nextRow) {
    status.textContent = `Next: ${nextRow.querySelector(".week-label").textContent}`;
    activeRow = nextRow;
  }

  if (activeRow) {
    activeRow.classList.add("is-current");
    activeRow.setAttribute("aria-current", "date");
  }
}

updateCourseCalendar();

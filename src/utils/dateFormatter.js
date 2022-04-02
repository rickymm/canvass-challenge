const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export default function dateFormatter(dateString) {
  const [year, monthStr, rest] = dateString.split("-");
  const day = rest.slice(0, 2);
  const month = months[Number(monthStr) - 1];

  return `${month} ${day} ${year}`;
}

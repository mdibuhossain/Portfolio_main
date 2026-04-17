const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

function parse(ym: string): { year: number; month: number } {
  const [y, m] = ym.split("-").map((n) => Number.parseInt(n, 10));
  return { year: y, month: m ?? 1 };
}

export function formatMonthYear(ym: string): string {
  const { year, month } = parse(ym);
  return `${MONTHS[month - 1] ?? ""} ${year}`.trim();
}

export function formatRange(start: string, end: string | null): string {
  const startLabel = formatMonthYear(start);
  const endLabel = end === null ? "Present" : formatMonthYear(end);
  return `${startLabel} \u2014 ${endLabel}`;
}

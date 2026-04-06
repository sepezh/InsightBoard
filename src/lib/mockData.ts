export const mockData = Array.from({ length: 120 }).map((_, i) => {
  const date = new Date("2024-01-01");
  date.setDate(date.getDate() + i);

  const users = 150 + Math.sin(i / 5) * 40 + i * 0.5;
  const engagement = 80 + Math.cos(i / 7) * 20 + i * 0.3;
  const activity = 40 + Math.sin(i / 3) * 15 + i * 0.2;

  return {
    date: date.toISOString().slice(0, 10),
    users: Math.round(users),
    engagement: Math.round(engagement),
    activity: Math.round(activity),
  };
});

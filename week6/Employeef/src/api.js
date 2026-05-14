export const API_BASE_URL =
  (import.meta.env.VITE_API_URL || "http://localhost:4000").trim();

export const employeeApiUrl = (path = "") =>
  `${API_BASE_URL}/emp-api/employees${path}`;

// 1. Validate task title
export function validateTitle(title) {
  if (!title || title.trim().length < 3) {
    return false;
  }
  return true;
}

// 2. Validate priority
export function validatePriority(priority) {
  const valid = ['low', 'medium', 'high'];
  return valid.includes(priority.toLowerCase());
}

// 3. Validate due date
export function validateDueDate(date) {
  const today = new Date();
  const due = new Date(date);
  return due > today;
}
export const getFromLocalStorage = (key) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : [];
  } catch (error) {
    console.error("Error parsing localStorage data:", error);
    return [];
  }
};
export const addToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
export const deleteFromLocalStorage = (key) => {
  localStorage.removeItem(key);
};

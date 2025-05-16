export const getFromLocalStorage = (key) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : [];
  } catch (error) {
    console.error("Error parsing localStorage data:", error);
    return error;
  }
};
export const addToLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Error updating localStorage data:", error);
    return error;
  }
};
export const deleteFromLocalStorage = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error("Error deleteing localStorage data:", error);
    return error;
  }
};

// onKeyDown
export const saveContentAfterPressEnter = (e) => {
  if (e.key === "Enter") {
    e.target.blur();
  }
};

// Select all input values when click
export const selectAllInLineText = (e) => {
  e.target.focus();
  e.target.select(); // same: document.execCommand("selectAll", false, null);
};

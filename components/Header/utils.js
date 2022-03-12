/**
 *
 * @param {Date} startDate
 * @param {Date} endDate
 * @returns {object}
 */

const getSelectionRange = (startDate, endDate) => ({
  startDate,
  endDate,
  key: "selection"
});

export { getSelectionRange };

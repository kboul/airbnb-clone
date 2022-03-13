import PropTypes from "prop-types";

export const appartment = {
  id: PropTypes.string,
  img: PropTypes.string,
  location: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  star: PropTypes.number,
  price: PropTypes.string,
  total: PropTypes.string,
  long: PropTypes.number,
  lat: PropTypes.number
};

export default {
  searchResults: PropTypes.arrayOf(PropTypes.shape(appartment)).isRequired
};

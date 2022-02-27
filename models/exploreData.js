import PropTypes from "prop-types";

export const exploreItem = {
  distance: PropTypes.string,
  id: PropTypes.number,
  img: PropTypes.string,
  location: PropTypes.string
};

export default {
  exploreData: PropTypes.arrayOf(PropTypes.shape(exploreItem)).isRequired
};

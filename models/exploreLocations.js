import PropTypes from "prop-types";

export const exploreItem = {
  distance: PropTypes.string,
  id: PropTypes.string,
  img: PropTypes.string,
  location: PropTypes.string
};

export default {
  exploreLocations: PropTypes.arrayOf(PropTypes.shape(exploreItem)).isRequired
};

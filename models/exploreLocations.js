import PropTypes from "prop-types";

export const exploreLocation = {
  distance: PropTypes.string,
  id: PropTypes.string,
  img: PropTypes.string,
  location: PropTypes.string
};

export default {
  exploreLocations: PropTypes.arrayOf(PropTypes.shape(exploreLocation))
    .isRequired
};

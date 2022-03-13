import PropTypes from "prop-types";

export const card = {
  id: PropTypes.string,
  img: PropTypes.string,
  title: PropTypes.string
};

export default {
  cards: PropTypes.arrayOf(PropTypes.shape(card)).isRequired
};

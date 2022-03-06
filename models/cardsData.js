import PropTypes from "prop-types";

export const cardItem = {
  id: PropTypes.string,
  img: PropTypes.string,
  title: PropTypes.string
};

export default {
  cardsData: PropTypes.arrayOf(PropTypes.shape(cardItem)).isRequired
};

import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export const convertRatingToIcons = (rating: number) => {
  const roundedRating = Math.round(rating * 2) / 2; 
  const ratingIcons = [];
  for (let i = 0; i < 5; i++) {
    if (roundedRating - i >= 1) {
      ratingIcons.push(<FaStar key={i} />);
    } else if (roundedRating - i === 0.5) {
      ratingIcons.push(<FaStarHalfAlt key={i} />);
    } else {
      ratingIcons.push(<FaRegStar key={i} />);
    }
  }
  return ratingIcons;
}
 

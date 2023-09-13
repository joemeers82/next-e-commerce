import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import StarBorderPurple500OutlinedIcon from "@mui/icons-material/StarBorderPurple500Outlined";
import StarHalfOutlinedIcon from "@mui/icons-material/StarHalfOutlined";

export default function Rating({ rating }) {
  const fullStars = Math.floor(rating.rate);
  const halfStar = rating.rate % 1 > 0;
  const totalStars = [];

  // Add full stars
  for (let i = 0; i < fullStars; i++) {
    totalStars.push(<StarOutlinedIcon key={i} />);
  }

  // Add half star if needed
  if (halfStar) {
    totalStars.push(<StarHalfOutlinedIcon key="half" />);
  }

  // Fill up the rest with empty stars until you reach 5 stars
  for (let i = totalStars.length; i < 5; i++) {
    totalStars.push(<StarBorderPurple500OutlinedIcon key={`empty-${i}`} />);
  }

  return (
    <p className="flex gap-3 my-3 items-center">
      <span>{rating.rate}</span>
      <span>{totalStars}</span>
      <span>{rating.count}</span>
    </p>
  );
}

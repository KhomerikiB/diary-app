// take colors by week day
const colors = [
  { left: "#fd746c", right: "#ff9068" },
  { left: "#f46b45", right: "#eea849" },
  { left: "#D1913C", right: "#f46b45" },
  { left: "#FFA17F", right: "#FFD194" },
  { left: "#D38312", right: "#A83279" },
  { left: "#ff4e50", right: "#f9d423" },
  { left: "#c21500", right: "#ffc500" },
];

const generateGradientColorStyles = (day: number, rating: number | null) => {
  const BASE_OPACITY = 0.2;
  const { left, right } = colors[day - 1];
  const gradient = `linear-gradient(to right, ${left}, ${right})`;
  const opacity = rating ? BASE_OPACITY * rating : 1;
  return {
    background: gradient,
    opacity: opacity,
  };
};
export default generateGradientColorStyles;

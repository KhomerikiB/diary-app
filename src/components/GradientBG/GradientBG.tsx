import { format, parseISO } from "date-fns";
import generateGradientColorStyles from "helpers/generateGradientColorStyles";
import "./GradientBG.scss";
type GradientProps = {
  day: string;
  rating: number | null;
};
const GradientBG = ({ day, rating }: GradientProps) => {
  const weekDay = Number(format(parseISO(day), "i"));
  const generatedColorStyles = generateGradientColorStyles(weekDay, rating);

  return <div className="gradient-bg" style={generatedColorStyles}></div>;
};

export default GradientBG;

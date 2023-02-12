import "./MainTitle.scss";
type Props = {
  children: React.ReactNode;
};
const MainTitle = ({ children }: Props) => {
  return <h1 className="text-center main-title uppercase">{children}</h1>;
};

export default MainTitle;

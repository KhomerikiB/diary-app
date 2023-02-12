import clsx from "clsx";
import "./CircleButton.scss";
type CircleButtonProps = {
  isActive?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  size?: "main" | "small";
  disabled?: boolean;
  className?: string;
};

const CircleButton = ({
  isActive,
  onClick,
  children,
  size = "main",
  disabled,
  className = "",
}: CircleButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "circle-button",
        className,
        size,
        isActive && "circle-button--active"
      )}
    >
      {children}
    </button>
  );
};

export default CircleButton;

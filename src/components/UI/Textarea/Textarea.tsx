import "./Textarea.scss";
type TextareaProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
};

const Textarea = ({ value, onChange, placeholder }: TextareaProps) => {
  return (
    <textarea
      className="textarea"
      placeholder={placeholder}
      rows={3}
      value={value}
      onChange={(e) => onChange(e)}
    ></textarea>
  );
};

export default Textarea;

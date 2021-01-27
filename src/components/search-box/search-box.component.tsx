import "./search-box.styles.css";

interface SearchBoxProps {
  placeholder?: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBox = ({ placeholder, handleChange }: SearchBoxProps): JSX.Element => {
  return <input className="search" type="search" placeholder={placeholder} onChange={handleChange} />;
};

import { useHistory } from "react-router-dom";

import styled from "styled-components";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const history = useHistory();
  const onSubmit = (e) => {
    history.push(`?s=${searchQuery}`);
    e.preventDefault();
  };

  return (
    <Form action="/" method="get" autoComplete="off" onSubmit={onSubmit}>
      <label htmlFor="header-search">
        <span className="visually-hidden">Look for a recipe?</span>
      </label>
      <Input
        value={searchQuery}
        onInput={(e) => setSearchQuery(e.target.value)}
        type="text"
        id="header-search"
        placeholder="Look for a recipe?"
        name="s"
      />
      <Button type="submit">Search</Button>
    </Form>
  );
};

export default SearchBar;

const Form = styled.form`
  .visually-hidden {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
`;

const Input = styled.input`
  background-color: #bebebe;
  border: 2px solid #fff;
  border-radius: 20px;
  color: #922c88;
  font-weight: bold;
  padding: 1.2rem;
  opacity: 0.7;
  box-shadow: 0 0 5px rgba(75, 75, 75, 0.07);
  margin-top: 24px;
`;

const Button = styled.button`
  position: relative;
  color: #ffffff;
  letter-spacing: 1px;
  margin: 20px;
  font-size: 18px;
  padding: 10px;
  text-align: center;
  transition: 0.5s;
  border-radius: 10px;
  cursor: pointer;
  border-radius: 25px;
  border: none;
  background: #922c88;
`;

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
        <span className="visually-hidden">Search through all recipes!</span>
      </label>
      <input
        value={searchQuery}
        onInput={(e) => setSearchQuery(e.target.value)}
        type="text"
        id="header-search"
        placeholder="Search through all recipes!"
        name="s"
      />
      <button type="submit">Search</button>
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

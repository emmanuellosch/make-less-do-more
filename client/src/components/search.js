import styled from "styled-components";

const SearchBar = () => (
  <Form action="/" method="get">
    <label htmlFor="header-search">
      <span className="visually-hidden">Search through all recipes!</span>
    </label>
    <input
      type="text"
      id="header-search"
      placeholder="Search through all recipes!"
      name="s"
    />
    <button type="submit">Search</button>
  </Form>
);

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

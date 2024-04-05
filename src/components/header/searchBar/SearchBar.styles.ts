import { styled } from "styled-components";

export const StyledSearchBar = styled.div`
  display: flex;
  align-items: stretch;
  width: 33.5vw;
  border: 1px solid ${({ theme }) => theme.grey2};
  border-radius: 3rem;
  background-color: ${({ theme }) => theme.grey2};
  overflow: hidden;

  input {
    flex: 1;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-size: inherit;
    padding-left: 1rem;
    outline: none;
  }
`;

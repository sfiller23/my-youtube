import { styled } from "styled-components";

export const Text = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: 0.9rem;

  &.logo {
    letter-spacing: -1px;
    font-size: 1.4rem;
    font-family: "Oswald", sans-serif;
  }

  &.auth {
    color: ${({ theme }) => theme.authBlue};
    font-weight: bold;
  }
`;

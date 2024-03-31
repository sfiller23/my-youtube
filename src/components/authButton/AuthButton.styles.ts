import { styled } from "styled-components";

export const StyledAuthButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  border: 2px solid ${({ theme }) => theme.grey2};
  padding: 0.4rem 0.7rem;
  border-radius: 10rem;
  width: max-content;
  color: ${({ theme }) => theme.authBlue};
`;

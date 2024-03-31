import { keyframes, styled } from "styled-components";

const beats = keyframes`
  0% {
    transform: scale(.8);
  }
  50%{
    transform: scale(1.1);
  }
  100%{
    transform: scale(.8);
  }
  `;

export const Icon = styled.div<{ $showBackground?: boolean }>`
  background-color: ${({ theme, $showBackground }) =>
    $showBackground ? theme.grey2 : "transparent"};
  border-radius: 100rem;
  color: ${({ theme }) => theme.text};
  display: flex;
  justify-content: center;
  padding: 0.6rem;
  cursor: pointer;

  &.menu {
    &:hover {
      background-color: ${({ theme }) => theme.grey2};
    }
  }

  &.listening {
    background-color: ${({ theme }) => theme.youtubeRed};
    animation: ${beats} 1s linear infinite;
    color: ${({ theme }) => theme.white};
  }

  &.disabled {
    &:hover {
      cursor: not-allowed;
    }
  }
`;

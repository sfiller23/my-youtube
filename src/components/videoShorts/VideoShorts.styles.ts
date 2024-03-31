import { styled } from "styled-components";

export const StyledVideoShorts = styled.div`
  width: 100%;
  margin-top: 2rem;
`;

export const VideoShortsHeading = styled.div`
  display: flex;
  align-items: center;

  p {
    font-size: 22px;
    margin-left: 0.5rem;
    font-weight: bold;
  }
`;

export const MoreLessContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  border-top: 1px solid ${({ theme }) => theme.divider};
  margin-top: 2.5rem;
  margin-bottom: 0.5rem;
`;

export const ShortsVideosContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  column-gap: 1rem;
  row-gap: 1rem;
  margin-top: 1.5rem;
`;

export const MoreLessButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem 0rem;
  width: 23.5rem;
  background-color: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.divider};
  border-radius: 100rem;
  transform: translateY(-50%);

  &:hover {
    background-color: ${({ theme }) => theme.grey2};
    cursor: pointer;
  }

  .icon {
    color: ${({ theme }) => theme.text};
  }
`;

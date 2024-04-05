import { CSSProperties } from "preact/compat";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 5.8vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`;

export const CenteredSection = styled.section<{
  cssProps?: CSSProperties;
}>`
  display: flex;
  align-items: center;
  gap: ${(props) => props.cssProps?.gap ?? "1rem"};
  position: ${(props) => props.cssProps?.position ?? "static"};
`;

export const LogoLinkToHome = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  text-decoration: none;
`;

import styled from "styled-components";
import {Link} from "react-router-dom";

export const Button = styled(Link)`
  /* border-radius: 50px; */
  white-space: nowrap;
  background: ${({primary}) => (primary ? "#101522" : "#cd853f")};
  padding: ${({big}) => (big ? "16px 40px" : "14px 24px")};
  color: ${({primary}) => (primary ? "#fff" : "#000d1a")};
  font-size: ${({big}) => (big ? "20px" : "14px")};
  text-decoration: none;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-2px);
  }
`;

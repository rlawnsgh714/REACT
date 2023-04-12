import styled from "styled-components";

export const MyButton = styled.button`
  background-color: ${(props) => (props.dis ? "blue" : "green")};
  color: white;
`;

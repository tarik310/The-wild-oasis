import styled from "styled-components";
const StyledDemoMessage = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  background-color: var(--color-yellow-700);
  color: var(--color-grey-0);
  border-radius: 10px;
`;
export default function DemoMessage() {
  return (
    <StyledDemoMessage>
      <p>
        Inserting, updating, and deleting data features are <strong>DISABLED</strong>.
        This app is used for Demo only.
      </p>
    </StyledDemoMessage>
  );
}

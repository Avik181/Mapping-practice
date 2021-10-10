import "./styles.css";
import styled from "styled-components";
import Form from "./Form";

const Container = styled.div`
  background-color: whiet;
  display: inline-flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  text-align: center;
  h1 {
    text-align: start;
  }
  h5 {
    padding: 15px 0;
    text-align: start;
  }

  form {
    text-align: start;
    width: 100%;
  }
  width: 100vw;
  height: 100vh;
`;

const Content = styled.div`
  background-color: white;
  padding: 20px;
  width: fit-content;
  margin: auto;
  border-radius: 7px;
  box-shadow: 0 0 20px grey;
`;
export default function App() {
  return (
    <Container>
      <Content>
        <h1>This is a Contact form</h1>
        <h5>Fill up this form</h5>
        <Form name="First Name" />
        <Form name="Last Name" />
        <Form name="Address" />
        <Form name="Email" />
        <Form name="Contact info" />
      </Content>
    </Container>
  );
}

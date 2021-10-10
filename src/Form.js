import styled from "styled-components";

const Formm = styled.div`
  input {
    width: 90%;
    height: 4vh;
    margin-bottom: 15px;
  }
`;
function Form({ name }) {
  return (
    <Formm>
      <form>
        <label for="fname">{name}</label>
        <br />
        <input type="text" id="fname" name="fname" />
        <br />
      </form>
    </Formm>
  );
}

export default Form;

import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;

  input {
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 10px;
    width: 100%;
    margin: 0 5px;
  }

  button {
    border-radius: 10px;
    color: black;
    background-color: #ccc;
    padding: 10px 20px;
    margin: 0 5px;

    &:hover {
      background-color: #ddd;
      box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
    }
  }
`

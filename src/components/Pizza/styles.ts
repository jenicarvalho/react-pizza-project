import styled from 'styled-components';

export const Container = styled.div<any>`
  label {
    display: grid;
    grid-template-columns: 1fr 2fr;
    background-color: var(--lightGray);
    border-radius: 20px;
    transition: all 0.3s ease;
    border: 1px solid transparent;
    cursor: pointer;

    &:hover {
      border-color: var(--green);
      box-shadow:  2px 8px 28px rgba(0, 0, 0, 0.13);
    }
  }
`

export const Image = styled.div<any>`
  background-image: url(${(props) => props.background});
  background-size: cover;
  overflow: hidden;
  width: 230px;
  height: 250px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
`
export const Text = styled.div`
  line-height: 24px;
  padding: 20px;

  h3 {
    color: #444;
    font-size: 25px;
    margin-bottom: 10px;
    line-height: 30px;
  }

  ul {
    list-style: none
  }

  li {
    margin-bottom: 10px;
  }

  li strong {
    color: #8c8e91
  }
`

export const Price = styled.div`
  color: var(--green);
  font-size: 30px;
`

export const Buy = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Group = styled.div`
  display: flex;
  justify-content: space-between;

  input[type='radio'] {
    width: 20px;
    height: 20px;

    &::after {
      width: 22px;
      height: 22px;
      border-radius: 5px;
      top: -3px;
      left: -3px;
      position: relative;
      background-color: #fff;
      content: '';
      display: inline-block;
      visibility: visible;
      border: 2px solid #d2e0e3;
    }

    &:checked::after {
      width: 8px;
      height: 8px;
      border-radius: 10px;
      top: -3px;
      left: -3px;
      position: relative;
      background-color: var(--green);
      content: '';
      display: inline-block;
      visibility: visible;
      border: 6px solid #b0e1c9;
      padding: 5px;
    }
  }
`
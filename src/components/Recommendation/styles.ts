import styled from 'styled-components';

export const Container = styled.div` 
  background-color: var(--lightGray);
  border-radius: 20px;
  padding: 20px;
  margin: -30px auto 0;
  position: relative;

  h2 {
    color: #6a6a85;
    margin-bottom: 10px;
  }
`;


export const PointsCTA = styled.div`
  top: -10px;
  right: -10px;
  position: absolute;
  background-color: var(--lightBlue);
  color: #fff;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 20px;
  padding: 10px;
  border: 5px double var(--orange);

  span {
    font-size: 13px;
  }
`

export const Obs = styled.small`
  display: block;
  margin: 10px auto;
  text-align: right;

  span {
    color: red;
  }
`

export const ContainerPizza = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`
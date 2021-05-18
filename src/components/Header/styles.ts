import styled from 'styled-components';

export const Container = styled.header`
  background-color: var(--blue);
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding: 50px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  height: 200px;
  
  img {
    width: 300px;
  }
`;

export const Points = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;

  img {
    width: 70px;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;

  span {
    color: #fff
  }

  strong {
    color: var(--orange);
  }

`;
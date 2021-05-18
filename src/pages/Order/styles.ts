import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;

  > div {
    margin-bottom: 20px;
  }

  h2 {
    margin-top: 20px;
  }

  h4 {
    display: flex;
    justify-content: space-between;
    color: var(--lightBlue);
    margin: 10px 0;
    align-items: center;
    font-weight: 600;
  }
`;
 
export const ConfirmOrder = styled.ul`
  list-style: none;
  padding: 20px;
  background-color: var(--lightGray);

  li {
    display: flex;
    justify-content: space-between;
    line-height: 50px;

    + li {
      border-top: 2px dotted #bbb;
    }
    
    span, strong {
      color: #333
    }
  }
`;
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import { AlignButton } from '../../components/Button/styles';
import { Steps } from '../../components/Steps';
import { finishOrder } from '../../store/ducks/order/action';

import { Container } from './styles'

const Finished = () => {
  const dispatch = useDispatch();
  
  dispatch(finishOrder())

  return (
    <Container>
      <h2>Pedido confirmado!</h2>
      <h4><Steps>4 / 4</Steps></h4>

      <AlignButton justify="center">
        <Link to="/">
          <Button icon="ᐊ" iconPosition="left">Fazer novo pedido</Button>
        </Link>
      </AlignButton>
    </Container>
  );
}

export default Finished; 
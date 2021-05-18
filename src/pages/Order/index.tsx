import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import { AlignButton } from '../../components/Button/styles';
import { Steps } from '../../components/Steps';
import { ApplicationState } from '../../store';
import { savePoints } from '../../store/ducks/points/action';

import { Container, ConfirmOrder } from './styles'

const Order = () => {
  const dispatch = useDispatch();

  const { dough, flavor, price, size, recommendation } = useSelector((state: ApplicationState) => state.order) 
  const { total } = useSelector((state: ApplicationState) => state.points) 
  const { points } = useSelector((state: ApplicationState) => state.recommendations.pizza) 

  const finishOrder = () => {
    if(recommendation) {
      const localStoragePoints = Number(localStorage.getItem('stoomPoints'))
      const totalPoints = localStoragePoints !== 0 ? localStoragePoints : total

      const pointsUpdated = totalPoints + points
      localStorage.setItem('stoomPoints', pointsUpdated.toString())
      dispatch(savePoints(pointsUpdated))
    }
  }

  return (
    <Container>
      <h2>Confirme seu pedido</h2>
      <h4>detalhes: <Steps>3 / 4</Steps></h4>

      <ConfirmOrder>
        <li>{dough} </li>
        <li>{size} </li>
        <li>{flavor} </li>
        <li><strong>TOTAL</strong> <span>R$ {price},00</span></li>
      </ConfirmOrder>
      <AlignButton justify="space-between">
          <Link to="/">
          { !recommendation && <Button icon="ᐊ" iconPosition="left">Ir para a home</Button> }
          </Link>
        <Link to="/finished">
          <Button icon="✔" version="secondary" onClick={finishOrder}>Finalizar meu Pedido</Button>
        </Link>
      </AlignButton>
    </Container>
  );
}

export default Order; 
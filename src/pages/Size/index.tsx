import { useState } from 'react';
import ChooseSize from '../../components/ChooseSize';
import { Steps } from '../../components/Steps';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import { AlignButton } from '../../components/Button/styles';

import { Container } from './styles'
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../store';
import { saveOrder } from '../../store/ducks/order/action';

const Size = () => {
  const dispatch = useDispatch();

  const [selected, setSelected] = useState<any>({})

  const { sizes } = useSelector((state: ApplicationState) => state.pizzas) 

  const { dough, price } = useSelector((state: ApplicationState) => state.order) 

  const saveSelected = () => {
    const save = {
      dough: dough,
      size: selected.title,
      price: Number(price + selected.price)
    }
    dispatch(saveOrder(save))
  } 

  return (
    <Container>
      <h2>Monte sua pizza</h2>
      <h4>Escolha o tamanho <Steps>1 / 4</Steps></h4>

      <ChooseSize content={sizes} setSelected={setSelected} />
      <AlignButton justify="space-between">
        <Link to="/">
          <Button icon="ᐊ" iconPosition="left">Ir para a home</Button>
        </Link>
        <Link to="/choose-pizza-flavor">
          <Button icon="ᐅ" onClick={saveSelected}>Continuar meu Pedido</Button>
        </Link>
      </AlignButton>
    </Container>
  );
}

export default Size; 
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import { AlignButton } from '../../components/Button/styles';
import ChooseFlavor from '../../components/ChooseFlavor';
import { Steps } from '../../components/Steps';
import { ApplicationState } from '../../store';
import { saveOrder } from '../../store/ducks/order/action';

import { Container } from './styles'

const Flavor = () => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState<any>({})

  const { flavors } = useSelector((state: ApplicationState) => state.pizzas) 

  const { dough, price, size } = useSelector((state: ApplicationState) => state.order) 

  const saveSelected = () => {
    const save = {
      dough: dough,
      size: size,
      flavor: selected.title,
      recommendation: false,
      price: Number(price + selected.price)
    }
    dispatch(saveOrder(save))
  } 

  return (
    <Container>
      <h2>Monte sua pizza</h2>
      <h4>Escolha o recheio <Steps>2 / 4</Steps></h4>

      <ChooseFlavor content={flavors} setSelected={setSelected} />
      <AlignButton justify="space-between">
        <Link to="/">
          <Button icon="ᐊ" iconPosition="left">Ir para a home</Button>
        </Link>
        <Link to="/order">
          <Button icon="ᐅ" onClick={saveSelected}>Confirmar meu Pedido</Button>
        </Link>
      </AlignButton>
    </Container>
  );
}

export default Flavor; 
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import { AlignButton } from '../../components/Button/styles';
import ChooseDough from '../../components/ChooseDough';
import Recommendation from '../../components/Recommendation';
import { Steps } from '../../components/Steps';
import { loadRecommendationRequest } from '../../store/ducks/recommendations/action';
import { loadPizzasRequest } from '../../store/ducks/pizzas/action';
import { ApplicationState } from '../../store/';

import { Container } from './styles'
import { saveOrder } from '../../store/ducks/order/action';

const Home = () => {

  const [selected, setSelected] = useState<any>({})

  const dispatch = useDispatch();

  const { doughs } = useSelector((state: ApplicationState) => state.pizzas) 
  const { pizza, loading } = useSelector((state: ApplicationState) => state.recommendations) 

  useEffect(() => {
    dispatch(loadRecommendationRequest())
    dispatch(loadPizzasRequest())
  }, [dispatch])

  const saveSelected = () => {
    const save = {
      dough: selected.title,
      price: selected.price
    }
    dispatch(saveOrder(save))
  }

  return (
    <Container>
      {!loading && <Recommendation pizza={pizza}/> }
      <h2>Ou monte sua pizza</h2>
      <h4>Selecione sua massa: <Steps>0 / 4</Steps></h4>

      {! loading && <ChooseDough content={doughs} setSelected={setSelected}/> }
      <AlignButton>
        <Link to="/choose-pizza-size">
          <Button icon="ᐅ" onClick={saveSelected}>Montar meu Pedido</Button>
        </Link>
      </AlignButton>
    </Container>
  );
}

export default Home; 
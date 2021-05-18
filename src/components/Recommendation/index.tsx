import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom"
import Button from '../Button';

import { saveOrder } from '../../store/ducks/order/action';
import { Recommendation as RecommendationType } from '../../store/ducks/recommendations/types';

import { Obs, Container, PointsCTA, ContainerPizza } from './styles';
import { Text, Price, Image, Buy, Group } from '../Pizza/styles';

interface Props {
  pizza: RecommendationType
}

const Recommendation = ({pizza}: Props ) => {

  const dispatch = useDispatch();
  const history = useHistory()

  const { points, massa, ingredientes, image, price, title, tamanho } = pizza

  const save = {
    dough: massa,
    flavor: title,
    size: tamanho,
    price: price,
    points: points,
    recommendation: true
  }
 
  const orderRecommendation = () => {

    dispatch(saveOrder(save))

    history.push('/order')
  }

  return (
    <>
      <Container>
        <h2>Pizza do dia:</h2>
        <ContainerPizza>
          <Image background={image} />
          <Text>
            <Group>
              <h3>{title}</h3>
            </Group>
            <ul>
              <li>
                <strong>Massa</strong>
                <div>{massa}</div>
              </li>
              <li>
                <strong>Ingredientes</strong>
                <div>{ingredientes}</div>
              </li>
              </ul>
            <Buy>
              <Price>R$ <strong>{price}</strong></Price>
              <Button icon="✔" onClick={() => orderRecommendation()}>quero!</Button>
            </Buy>
          </Text>
        </ContainerPizza>
        <PointsCTA>
          <strong>{points}</strong>
          <span>pontos</span>
        </PointsCTA>
      </Container>
      <Obs>ganhe pontos ao concluir o seu pedido <span>*</span></Obs>
    </>
  );
}

export default Recommendation;
import{ useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Logo from '../../images/logo.png'
import IconStoomPoints from '../../images/icon-stoom-points.png'
import { loadPointsRequest } from '../../store/ducks/points/action';
import { ApplicationState } from '../../store/';
import { Container, Points, Text } from './styles';

const Header = () => {

  const { total, loading } = useSelector((state: ApplicationState) => state.points) 

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPointsRequest())
  }, [dispatch])

  const localStoragePoints = Number(localStorage.getItem('stoomPoints'))
  const totalPoints = localStoragePoints !== 0 ? localStoragePoints : total

  return (
    <Container>
      <img src={Logo} alt="Stoom Pizza"/>
      <Points>
        <img src={IconStoomPoints} alt="Stoom Points"/>
        <Text>
          <strong>StoomPoints</strong>
          {!loading && <strong> <span>{totalPoints}</span> pontos.</strong>}
        </Text>
      </Points>
    </Container>
  );
}

export default Header;
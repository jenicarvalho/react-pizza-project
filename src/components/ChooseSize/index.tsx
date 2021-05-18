import { PizzaItem } from '../../store/ducks/pizzas/types';
import Pizza from '../Pizza';

interface Props {
  content: PizzaItem[],
  setSelected: (data: any) => void
}

const ChooseSize = ({ content, setSelected }: Props) => {

  return (
    <> 
      { content.map((item: any) => (
        <Pizza content={item} key={item.id} order={setSelected}>
          <p>{item.description}</p>
        </Pizza>
      ))}
    </>
  );
}

export default ChooseSize; 
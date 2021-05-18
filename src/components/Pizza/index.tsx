import { Container, Text, Price, Image, Buy, Group } from './styles';

interface Props {
  content: {
    title: string,
    price: number,
    image: string
  },
  children: React.ReactNode,
  order?: (data: any) => void
}

const Pizza = (props: Props) => {

  const { title,  price, image } = props.content

  return (
    <Container>
      <label onClick={() => props.order && props.order({title, price})}>
        <Image background={image} />
        <Text>
          <Group>
            <h3>{title}</h3>
            <input type="radio" name="massa" value={title} />
          </Group>
          {props.children}
          <Buy>
            <Price>R$ <strong>{price}</strong></Price>
          </Buy>
        </Text>
    </label>
    </Container>
  );
}

export default Pizza;
 
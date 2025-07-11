import Section from '../Section'

import { Items, Item } from './styles'

import diablo from '../../assets/images/diablo.png'

const Gallery = () => (
  <Section title="Galeria" background="black">
    <Items>
      <Item>
        <img src={diablo} alt="imagem do diablo" />
      </Item>
      <Item>
        <img src={diablo} alt="imagem do diablo" />
      </Item>
      <Item>
        <img src={diablo} alt="imagem do diablo" />
      </Item>
      <Item>
        <img src={diablo} alt="imagem do diablo" />
      </Item>
    </Items>
  </Section>
)

export default Gallery

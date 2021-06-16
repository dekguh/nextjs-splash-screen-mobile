import styles from '../styles/Home.module.css';
import Image from '../components/atomics/Image';
import Container from '../components/atomics/Container';
import Button from '../components/atomics/Button';
import Paragraph from '../components/atomics/Paragraph';
import Title from '../components/atomics/Title';

export default function Home() {
  return (
    <>
      <Container>
        <Image src='/images/hand-sanitizer.png' medium/>
        <Title text='Dont Worry' align='center' medium/>
        <Paragraph
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' 
          align='center'
        />
        <Button text='button' roundedFull></Button>
      </Container>
    </>
  )
}

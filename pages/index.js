import styles from '../styles/Home.module.css';
import Container from '../components/atomics/container';
import SplashItem from '../components/molecules/SplashItem';

export default function Home() {
  return (
    <>
      <Container>
        <SplashItem
          image='/images/hand-sanitizer.png'
          title='Dont Worry'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
          btnText='what next?'
        />
      </Container>
    </>
  )
}

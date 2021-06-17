import styles from '../styles/Home.module.css';
import Container from '../components/atomics/Container';
import SplashSection from '../components/organisms/SplashSection';

export default function Home() {
  return (
    <>
      <Container data-testid='splash-1'>
        <SplashSection />
      </Container>
    </>
  )
}

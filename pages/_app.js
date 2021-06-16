import 'reset-css';
import '../styles/globals.css';
import LayoutWrap from '../components/utils/LayoutWrap';

function MyApp({ Component, pageProps }) {
  return (
  <LayoutWrap>
    <Component {...pageProps} />
  </LayoutWrap>
  )
}

export default MyApp
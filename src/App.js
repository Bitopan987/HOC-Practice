import Followers from './Followers';
import Following from './Following';
import Spinner from './Spinner';
import './style/loader.css';
import Test from './Test';
import Test2 from './Test2';
import SuperHero from './SuperHero';

function App() {
  return (
    <>
      <Followers />
      <Following />
      <SuperHero> Bitopan </SuperHero>
      <SuperHero> Tinkal </SuperHero>
    </>
  );
}

export default App;

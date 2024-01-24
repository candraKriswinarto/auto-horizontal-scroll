import Banner from './Banner';
import { images } from './data';

function App() {
  return (
    <div className='app'>
      <h1>Hello world</h1>
      <Banner images={images} speed={20000} />
    </div>
  );
}

export default App;

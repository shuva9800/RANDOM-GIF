import Random from './components/Random';
import Tag from './components/Tag'

export default function App() {
  return (
    <div className="background">
      <h1 className='heading'>RANDOM GIF'S</h1>
      <div className='items'>
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}

import { useParams } from 'react-router-dom';
import './Main.css';

export default function Main() {
  const { r, g, b } = useParams();
  return (
    <div id="background" style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}>
      <h1 style={{ color: `rgb(${r - 50}, ${g - 50}, ${b - 50})` }}> Current Color Is {r}, {g}, {b}</h1>
    </div>
  );
}
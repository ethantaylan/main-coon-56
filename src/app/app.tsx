import { BrowserRouter } from 'react-router-dom';
import { Home } from './pages/home';

export function App() {
  return (
      <BrowserRouter>
        <Home />
      </BrowserRouter>
  );
}

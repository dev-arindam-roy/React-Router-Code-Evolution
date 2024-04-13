import './App.css';
import HeaderNav from './components/HeaderNav';
import AppRoute from './routes/AppRoute';

import { AuthProvider } from './middleware/Auth';

function App() {
  return (
    
      <AuthProvider>
      <HeaderNav />
      <AppRoute/>
      </AuthProvider>
    
  );
}

export default App;

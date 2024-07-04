import Home from './pages/HomePage/Home';
import {Provider} from 'react-redux'
import store from './store';

function App() {
  return (
    <Provider store={store}>
  <Home/>
  </Provider>
  );
}

export default App;

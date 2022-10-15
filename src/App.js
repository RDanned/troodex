import './assets/main.css'
import FirstTask from './pages/FirstTask'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
      <Provider store={store}>
        <div className="App">
          <FirstTask />
        </div>
      </Provider>
  );
}

export default App;

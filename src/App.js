import './assets/main.css'
import FirstTask from './pages/FirstTask'
import { Provider } from 'react-redux'
import store from './store'
import router from './router'
import {
    createBrowserRouter,
    RouterProvider,
    Outlet
} from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
      <Provider store={store}>
          <RouterProvider router={router}>
                <div className="App">
                    <Navbar />
                    {/*<FirstTask />*/}
                    <div className="page">
                        <Outlet />
                    </div>
                </div>
          </RouterProvider>
      </Provider>
  );
}

export default App;

import './App.css';
import Dashboard from './pages/Dashboard';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Discover from './pages/Discover';
import Article from './pages/Article'
import { ContextProvider } from './context/ContextProvider';


function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Dashboard/>,
      children:[
        {
          index:true,
          element:<Discover/>
        },
        {
          path:"/article",
          element:<Article/>
        }
      ]  
    }
  ])
  return (
    <div className="App">
      <ContextProvider>
        <RouterProvider router={router}/>
      </ContextProvider>

    </div>
  );
}

export default App;

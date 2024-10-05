import './App.css';
import Dashboard from './pages/Dashboard';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Discover from './pages/Discover';
import Article from './pages/Article'


function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Dashboard/>,
      children:[
        {
          index:true,
          path:"/discover",
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
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;

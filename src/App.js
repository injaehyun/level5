import './App.css';
import { BrowserRouter, Outlet, Route, Router, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Join from './pages/Join';
import { QueryClient, QueryClientProvider } from 'react-query';
import Main from './pages/Main';
import Work from './pages/Work';
import Todolist from './pages/Todolist';
import Home from './pages/Home';
import Gnb from './components/Gnb';
import Layout from './components/Layout';

const Queryclient = new QueryClient();





function App() {
  return (
        
      <BrowserRouter>
         <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/join' element={<Join />} />
          <Route path='/main' element={<Layout />}> 
            <Route index element={<Main />} /> 
            <Route path='work' element={<Work />} />
            <Route path='todolist' element={<Todolist />} />
          </Route>
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
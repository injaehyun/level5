import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Join from './pages/Join';
import { QueryClient, QueryClientProvider } from 'react-query';
import Main from './pages/Main';
import Work from './pages/Work';
import Todolist from './pages/Todolist';


const Queryclient = new QueryClient();



function App() {

  return (
    <QueryClientProvider client={Queryclient}>
<BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/join' element={<Join />}/>
      <Route path='/main' element={<Main />}/>
      <Route path='/work' element={<Work />}/>
      <Route path='/todolist' element={<Todolist />}/>
    </Routes>
    </BrowserRouter>
    </QueryClientProvider>
    
  );
}

export default App;

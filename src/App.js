import {Routes, Route} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Search from './Pages/Search';
import NotFoundPage from './Pages/NotFoundPage';

function App() {
  return (
    <>
      <div className="app">
        

      <Routes>
        
          <Route path='/' element={<Home/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='*' element={<NotFoundPage/>}/>
            
              
        
            {/* <div className="app__page">
              <Sidebar></Sidebar>
              <RecommendedVideos></RecommendedVideos>
            </div> */}
          
          {/* <Route path='/about' element={<About></About>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route> */}
        
      </Routes>










        {/* <Header></Header>
        
        <div className="app__page">
          <Sidebar></Sidebar>
          <RecommendedVideos></RecommendedVideos>
        </div> */}
        
      </div>
    </>
  );
}

export default App;

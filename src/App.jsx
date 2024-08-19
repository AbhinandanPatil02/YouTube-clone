import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { useAuth } from './context/AuthProvider';
import { Routes ,Route} from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';
import PlayingVideo from './components/PlayingVideo';
import Loading from "./loader/Loding"
const App = () => {
    const { loading } = useAuth();

    // console.log(loading);
    // console.log(data);

    return (
        <div>
            {loading &&<Loading/>}
            <Navbar />
            <Routes>
                <Route path="/" exact element={<Home/>}  />
                <Route path="/search/:searchQuery" element={<Search/>}  />
                <Route path="/video/:id" element={<PlayingVideo/>}  />

            </Routes>
            
        </div>
    );
};

export default App;

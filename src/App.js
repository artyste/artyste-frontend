import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import HomeScreen from './screens/HomeScreen';
import AssetScreen from './screens/AssetScreen';
import GalleriesScreen from './screens/GalleriesScreen';
import GalleryDetailScreen from './screens/GalleryDetailScreen';

import Galleries from "./screens/Galleries";
import Assets from "./screens/Assets";
import AssetDetail from "./screens/Asset-detail";
import Signin from "./screens/Signin";
import Signup from "./screens/Signup";
import GalleryDetail from "./screens/Gallery-detail";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
    
            <Route path='/' component={ HomeScreen } exact />
            <Route path='/signin' component={ Signin } />
            <Route path='/signup' component={ Signup } />

            <Route path='/galleries' component={ GalleriesScreen } />
            <Route path='/artists' component={ Galleries }/>
            <Route path='/asset/:id' component={ AssetScreen } />

            <Route path='/gallery/:slug' component={ GalleryDetailScreen } />
            <Route path='/artist/:slug' component={ AssetDetail } />

            <Route path=':user/assets' component={ AssetDetail } />
            <Route path=':user/assets/create' component={ AssetDetail } />
                 
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

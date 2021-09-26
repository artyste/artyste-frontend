import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./screens/Home"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Galleries from "./screens/Galleries";
import Assets from "./screens/Assets";
import AssetDetail from "./screens/Asset-detail";
import Signin from "./screens/Signin";
import Signup from "./screens/Signup";
import GalleryDetail from "./screens/Gallery-detail";



function App() {
  return (
      <Router>
          <Header/>
          <main className="py-3">
              <Container>

                  <Route path='/' component={ Home } exact/>
                  <Route path='/signin' component={ Signin } exact/>
                  <Route path='/signup' component={ Signup } exact/>

                  <Route path='/galleries' component={ Galleries }/>
                  <Route path='/artists' component={ Galleries }/>
                  <Route path='/assets/:id' component={ AssetDetail } exact/>

                  <Route path='/gallery/:slug' component={ GalleryDetail } exact/>
                  <Route path='/artist/:slug' component={ AssetDetail } exact/>

                  <Route path=':user/assets' component={ AssetDetail } exact/>
                  <Route path=':user/assets/create' component={ AssetDetail } exact/>

              </Container>
          </main>
          <Footer/>
      </Router>
  );
}

export default App;

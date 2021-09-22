import { Container } from 'react-bootstrap'
import Home from "./screens/Home"
import Header from "./components/Header";
import Footer from "./components/Footer";



function App() {
  return (
      <div>
          <Header/>
          <main className="py-3">
              <Container>
                  <Home/>
              </Container>
          </main>
          <Footer/>
      </div>
  );
}

export default App;

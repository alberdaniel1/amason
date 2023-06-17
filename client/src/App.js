import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from './componets/header';
import Footer from './componets/footer';

const App = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <Outlet/>
        </Container>
      </main>
      <Footer />
    </>
  );
};
export default App;
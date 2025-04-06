import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Outlet } from 'react-router-dom';

const HomeTemplate = () => {
  return (
    <div className='container mx-auto'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeTemplate;

import './App.css';
import Main from './pages/views/Main';
import Cursor from './utils/Cursor';
import './scroll.css';
import Header from './components/Header';

// import SmoothScrollComponent from './utils/Scroll/SmoothScrollComponent';
function App() {
  return (
    <>
      <Header />
      <Main />
      <Cursor />
      {/* <SmoothScrollComponent /> */}
    </>
  );
}

export default App;

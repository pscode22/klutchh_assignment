import './styles/App.css';
import Header from './components/Header';
import NewsFeed from './components/NewsFeed';
import CenterComponent from './components/CenterComponent';
import LiveMatches from './components/LiveMatches';

function App() {
  return (
    <div className="App">
      <Header />

      <div className='heroSection'>
        <NewsFeed />
        <CenterComponent />
        <LiveMatches />
      </div>

    </div>
  );
}

export default App;

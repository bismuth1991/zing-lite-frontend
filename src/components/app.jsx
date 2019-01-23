import React from 'react';
import { Route } from 'react-router-dom';

import RootPage from './main/root_page_container';
import SongIndexContainer from './song_index/song_index_container';
import AudioPlayerContainer from './audio_player/audio_player_container';

const App = () => (
  <div className="Main">
    <nav className="Main-nav">
      <ul className="Grid Grid--center Grid--justifySpaceAround" style={{ height: '2em' }}>
        <li className="no-margin-bottom"><a href="#/home">Home</a></li>
        <li className="no-margin-bottom"><a href="#/home">Playlist</a></li>
        <li className="no-margin-bottom"><a href="#/home">Login/Signup</a></li>
      </ul>
    </nav>

    <main className="Main-body">
      <div className="Main-content">
        <Route path="/home" component={SongIndexContainer} />
      </div>

      <aside className="Main-aside">
        <Route path="/home" component={AudioPlayerContainer} />
      </aside>

      <Route path="/" component={RootPage} />
    </main>
  </div>
);

export default App;

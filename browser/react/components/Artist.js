import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'


const Artist = (props) => {
  const artist = props.artist;
  const selectArtist = props.selectArtist;

  return (
        <div>
            <h3>ARTIST NAME</h3>
            <h4>ALBUMS</h4>
            <h4>SONGS</h4>
        </div>
  );

}

export default Artist;
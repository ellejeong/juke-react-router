import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

const Artists = (props) => {
//   const artists = props.artists;
//   const selectArtist = props.selectArtist;

  return (
    <div>
        <h3>Artists</h3>
            <div className="list-group">
            {
            props.artists.map(artist => {
                return (
                    <div className="list-group-item" key={artist.id}>
                    {/* determine where to actually Link to later! */}
                    <Link to="/artists/:artistId">{ artist.name }</Link>   
                    </div>
                    )    
                })
            }
            </div>
    </div>
  );
}

export default Artists;
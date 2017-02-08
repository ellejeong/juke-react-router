import React, {Component} from 'react';
import Songs from '../components/Songs';
import Albums from '../components/Albums';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'



export default class Artist extends Component {
  constructor(props) {
    super(props);
    //inheriting state through props since this is not the 'main' component
  }
  componentDidMount() {
    // this is fetching information when a component loads
    // artists and artist are receiving the same props now
    // because of this, we already have access to the selectArtist method
    const selectedArtist = this.props.selectedArtist;
    const artistId = this.props.routeParams.artistId;
    const selectArtist = this.props.selectArtist;

    // when we navigate to localhost:1337/#/albums/1 --> 
    // we fetch the album with id of 1
    // set it onto our this.state.
    // then re-render the component with appropriate album!
    selectArtist(artistId);
    // this puts albumId puts it on state!
  }

  render(){
    const artist = this.props.selectedArtist;
    const artistSongs = this.props.selectedArtistSongs;
    const artistAlbums = this.props.selectedArtistAlbums;
    
    return (
            <div>
                <h3>{artist && artist.name }</h3>
                <h4>{artistSongs && artistSongs.songId }</h4>
                <h4>{artistAlbums && artistAlbums.name}</h4>
            </div>
    );
      
  }

}

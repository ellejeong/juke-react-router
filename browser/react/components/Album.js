import React, {Component} from 'react';
import Songs from '../components/Songs';

export default class Album extends Component {
  constructor(props) {
    super(props);

    //inheriting state through props since this is not the 'main' component
  }
  
  componentDidMount() {
    // this is fetching information when a component loads
    // albums and album are receiving the same props now
    // because of this, we already have access to the selectAlbum method
    const albumId = this.props.routeParams.albumId;
    const selectedAlbum = this.props.selectedAlbum;
    const selectAlbum = this.props.selectAlbum;

    // when we navigate to localhost:1337/#/albums/1 --> 
    // we fetch the album with id of 1
    // set it onto our this.state.
    // then re-render the component with appropriate album!
    selectAlbum(albumId);
    // this puts albumId puts it on state!
  }

  render() {
      const album = this.props.selectedAlbum;
      const currentSong = this.props.currentSong;
      const isPlaying = this.props.isPlaying;
      const toggleOne = this.props.toggleOne;
      
      // 'album && album.name' => check if album is there, then run album.name
      // otherwise if it isn't there, it'll still run the render and skip
      return (
      <div className="album">
        <div>
          <h3>{album && album.name }</h3>
          <img src={album && album.imageUrl } className="img-thumbnail" />
        </div>
        <Songs
          songs={album && album.songs}
          currentSong={currentSong}
          isPlaying={isPlaying}
          toggleOne={toggleOne} />
      </div>
    );
  }
}
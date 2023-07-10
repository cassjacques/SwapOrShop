import React from 'react';
import FileUpload from '../../components/Upload/FileUpload';


class NewFitPage extends React.Component {
  state = {
    title: '',
    blogPost: '',
    nowPlaying: '',
    weather: '',
    vibe: '',
    fileName: '',
  };

  setFileName = (fileName) => {
    this.setState({
      fileName: fileName
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:4020/api/v1/fits', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    })
      .then((response) => {
        return response.json
      })
      .then((jsonData) => {
        this.props.history.push('/fits');
      })
      .catch((err) => {
        console.log(err)
      });
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  render() {
    return (
      <div  className="card new right">
        <h1>Add A New Fit</h1>

        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="title">Title</label><br />
            <input type="text" id="title" name="title" value={this.state.title} onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="blogPost">Blog Post</label><br />
            <textarea id="blogPost" name="blogPost" cols="20" rows="20" value={this.state.blogPost} onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="nowPlaying">Now Playing</label><br />
            <input type="text" id="nowPlaying" name="nowPlaying" value={this.state.nowPlaying} onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="weather">Weather</label><br />
            <input type="text" id="weather" name="weather" value={this.state.weather} onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="vibe">Vibe</label><br />
            <input type="text" id="vibe" name="vibe" value={this.state.vibe} onChange={this.handleChange} />
          </div>
          <FileUpload setFileName={this.setFileName} />
          <button type="submit">Add Fit</button>
        </form>
      </div>
    );
  }
}

export default NewFitPage;

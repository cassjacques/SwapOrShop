import React from 'react';
import { useHistory } from "react-router-dom";

class ShowFitPage extends React.Component {
    state = {
        fit: {
            title: '',
            blogPost: '',
            nowPlaying: '',
            weather: '',
            vibe: '',
            fileName: '',
        }
    };

    setFileName = (fileName) => {
        this.setState({
          fileName: fileName
        })
      }

    componentDidMount = () => {
        fetch(`http://localhost:4020/api/v1/fits/${this.props.match.params.id}`)
            .then((response) => {
                return response.json();
            })
            .then((jsonData) => {
                this.setState({
                    fit: jsonData
                })
            })
            .catch((err) => console.log(err));
    }

    render() {
        return (
            <form>
                <div className="card">
                    <h1>{this.state.fit.title}</h1>

                    <p>{this.state.fit.blogPost}</p>

                    <h2>Now Playing:</h2>
                        <p>{this.state.fit.nowPlaying}</p>

                    <h2>Weather:</h2>
                        <p>{this.state.fit.weather}</p>

                    <h2>Vibe:</h2>
                        <p>{this.state.fit.vibe}</p>

                    <h2>Photo:</h2>
                    <p>{this.state.sos.fileName}</p>

                    <p>{this.state.sos.fileName}</p>
                </div>
            </form>
        );
    };
};



export default ShowFitPage;

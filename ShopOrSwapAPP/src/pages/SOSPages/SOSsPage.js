import React from 'react'
import SOSsList from '../../components/SOSs/SOSsList';

class SOSsPage extends React.Component {
    state = {
        soss: [],
    };

    componentDidMount() {
        fetch('http://localhost:4020/api/v1/soss')
            .then((response) => response.json())
            .then((jsonData) => {
                this.setState({
                    soss: jsonData,
                });
            })
            .catch()
    }

    handleDeleteSOS = (sosId) => {
        fetch(`http://localhost:4020/api/v1/soss/${sosId}`, {
            method: 'DELETE'
        })
            .then((response) => {
                return response.json();
            })
            .then(() => {
                const stateCopy = { ...this.state };
                const updatedState = stateCopy.soss.filter((sosObj) => {
                    return sosObj._id !== sosId
                });
                this.setState({
                    soss: updatedState
                });
            })
            .catch((err) => console.log(err))
    };


    render() {
        return (
            <div>
                <SOSsList soss={this.state.soss} deleteSOS={this.handleDeleteSOS} />
            </div>
        )
    };
};

export default SOSsPage;
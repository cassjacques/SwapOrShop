import React from 'react';

class EditProfilePage extends React.Component {

  state = {
    email: '',
    password: '',
    userName: '',
    city: '',
    starsign: '',
  }


  componentDidMount = () => {
    fetch(`http://localhost:4020/api/v1/profile/${this.props.match.params.id}`)
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        this.setState(
          jsonData
        )
      })
      .catch((err) => console.log(err));
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:4020/api/v1/profile/${this.props.match.params.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    })
      .then(() => this.props.history.push('/profile'))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <h1>Edit</h1>

        <form  className="card" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="email">Email</label><br />
            <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="password">Password</label><br />
            <textarea id="password" name="password" cols="20" rows="20" value={this.state.password} onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="userName">User Name</label><br />
            <input type="text" id="userName" name="userName" value={this.state.userName} onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="city">City</label><br />
            <input type="text" id="city" name="city" value={this.state.city} onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="starsign">starsign</label><br />
            <input type="date" id="starsign" name="starsign" value={this.state.starsign} onChange={this.handleChange} />
          </div>
          <button type="submit">Update Profile</button>
        </form>

      </div>
    );
  };
};

export default EditProfilePage;
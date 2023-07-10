import React from 'react';

class EditSOSPage extends React.Component {

  state = {
    title: '',
    blogPost: '',
    brand: '',
    size: '',
    condition: '',
    price: '',
  }


  componentDidMount = () => {
    fetch(`http://localhost:4020/api/v1/soss/${this.props.match.params.id}`)
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
    fetch(`http://localhost:4020/api/v1/soss/${this.props.match.params.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    })
      .then(() => this.props.history.push('/soss'))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <h1>Edit</h1>

        <form  className="card" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="title">Title</label><br />
            <input type="text" id="title" name="title" value={this.state.title} onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="blogPost">Blog Post</label><br />
            <textarea id="blogPost" name="blogPost" cols="20" rows="20" value={this.state.blogPost} onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="brand">Brand</label><br />
            <input type="text" id="brand" name="brand" value={this.state.brand} onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="size">Size</label><br />
            <input type="text" id="size" name="size" value={this.state.size} onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="condition">Condition</label><br />
            <input type="text" id="condition" name="condition" value={this.state.condition} onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="price">Price</label><br />
            <input type="text" id="price" name="price" value={this.state.price} onChange={this.handleChange} />
          </div>
          <button type="submit">Update SOS</button>
        </form>

      </div>
    );
  };
};

export default EditSOSPage;
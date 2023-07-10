import { Link } from 'react-router-dom';

const FitsCard = (props) => {
  return (
    <div>
      <Link to={`/show-fit/${props.fit._id}`}><h3>{props.fit.title}</h3></Link>
      <button onClick={() => props.deleteFit(props.fit._id)}>delete</button>{' '}
      <Link to={`/edit-fit/${props.fit._id}`}><button>Edit</button></Link>
    </div>
  );
};

export default FitsCard;
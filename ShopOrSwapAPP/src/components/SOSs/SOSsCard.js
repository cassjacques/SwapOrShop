import { Link } from 'react-router-dom';

const SOSsCard = (props) => {
  return (
    <div>
      <Link to={`/show-sos/${props.sos._id}`}><h4>{props.sos.title}</h4></Link>
      <button onClick={() => props.deleteSOS(props.sos._id)}>delete</button>{' '}
      <Link to={`/edit-sos/${props.sos._id}`}><button>Edit</button></Link>
    </div>
  );
};

export default SOSsCard;

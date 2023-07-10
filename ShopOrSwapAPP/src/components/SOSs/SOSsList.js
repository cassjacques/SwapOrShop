import SOSsCard from './SOSsCard';

const SOSsList = (props) => {
    return props.soss.map((sossObj) => {
        return (
            <div className="card show">
            <SOSsCard key={sossObj._id} sos={sossObj} deleteSOS={props.deleteSOS} />
            </div>
        )
    });
};

export default SOSsList;

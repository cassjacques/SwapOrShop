import FitsCard from './FitsCard';

const FitsList = (props) => {
    return props.fits.map((fitsObj) => {
        return (
            <div className="card show fits right">
            <FitsCard key={fitsObj._id} fit={fitsObj} deleteFit={props.deleteFit} />
            </div>
        )
    });
};

export default FitsList;
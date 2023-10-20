import { PropTypes } from 'prop-types';
// import { FaTrophy } from 'react-icons/fa';

const Brands = ({ brand }) => {



    return (
        <div className="border-[#d7619cb2] border-4 p-4 rounded-3xl flex flex-col items-center justify-center">
            <figure className=''><img className='w-[200px] h-[150px]' src={brand.image} /></figure>
            <div className="card-body">
                <h2 className="card-title text-5xl text-[#f37db8]">{brand.name}</h2>
                {/* <FaTrophy></FaTrophy> */}

            </div>
        </div>
    );
};

Brands.propTypes = {
    brand: PropTypes.string
}

export default Brands;
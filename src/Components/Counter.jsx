import { FaCar, FaStar, FaTrophy, FaUsers } from 'react-icons/fa';

const Counter = () => {
    return (
        <div className="bg-cover bg-no-repeat my-12 py-16 px-40" style={{ backgroundImage: 'url(https://i.ibb.co/sW7gBWX/counter-bg.jpg)' }}>
            <div className="py lg:flex items-center gap-32 text-center text-[#f9c200]">
                <div className='text-7xl flex flex-col items-center gap-4 p-4'>
                    <FaUsers></FaUsers>
                    <p className='text-6xl text-white'>519</p>
                    <h4 className='text-lg text-[#999] uppercase'>Happy Client</h4>
                </div>
                <div className='text-7xl flex flex-col items-center gap-4 p-4'>
                    <FaCar></FaCar>
                    <p className='text-6xl text-white'>663</p>
                    <h4 className='text-lg text-[#999] uppercase'>Car Sale</h4>
                </div>
                <div className='text-7xl flex flex-col items-center gap-4 p-4'>
                    <FaStar></FaStar>
                    <p className='text-6xl text-white'>4.6</p>
                    <h4 className='text-lg text-[#999] uppercase'>Rating</h4>
                </div>
                <div className='text-7xl flex flex-col items-center gap-4 p-4'>
                    <FaTrophy></FaTrophy>
                    <p className='text-6xl text-white'>1023</p>
                    <h4 className='text-lg text-[#999] uppercase'>Happy Client</h4>
                </div>
            </div>
        </div>
    );
};

export default Counter;
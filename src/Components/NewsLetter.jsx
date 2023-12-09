import { FaPaperPlane } from "react-icons/fa";

const NewsLetter = () => {
    return (
        <div className="w-full h-full mx-auto my-16">
            <div className="w-full flex gap-12 items-center lg:flex-row flex-col bg-secondary-focus px-40 py-24">
                <div className="text-white mr-20 w-1/3">
                    <h2 className="text-3xl font-medium mb-2">Newsletter</h2>
                    <p className="">Subscribe for weekly newsletter</p>
                </div>
                <div className="flex w-2/3">
                    <input className="p-4 w-2/3" type="email" placeholder="Enter Your Email Address" />
                    <button className="flex px-6 py-4 bg-black text-white">Sign Up <FaPaperPlane></FaPaperPlane> </button>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;


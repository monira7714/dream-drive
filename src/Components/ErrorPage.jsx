
const ErrorPage = () => {
    // secondary-content
    // text-[#eb9f9f7f]
    // text-[#eb9f9fc7]
    return (
        <div className="my-36 font-poppins text-center space-y-4 flex flex-col items-center">

            <h1 className="text-9xl  font-extrabold text-secondary-focus/50">404</h1>
            <p className="text-3xl text-secondary/40 font-medium">Page Not Found</p>
            <p className="w-1/2 text-secondary/95 text-xl">The Page you are looking for may have been moved, deleted or possibly never existed</p>
            <img src="https://www.landrover.com/content/dam/lrdx/logo/lrdx-brand-logo-dark.svg"/>
        </div>
    );
};

export default ErrorPage;
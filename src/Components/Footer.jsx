
const Footer = () => {
    return (
        <footer className="flex flex-col space-y-4 place-items-center p-10 bg-secondary-content text-black">
            <div>
                <img className="border-2 w-[100px] h-[50px] rounded-lg" src="https://i.ibb.co/6yhNJj3/logo1-removebg-preview.png" />
            </div>
            <div className="flex md:gap-40 ">
                <nav>
                    <header className="footer-title">Services</header>
                    <div className="flex flex-col space-y-4">
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                    </div>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <div className="flex flex-col space-y-4">
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                    </div>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <div className="flex flex-col space-y-4">
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </div>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
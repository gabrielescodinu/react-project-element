import logo from '../images/logo.svg';
import Logo from './Logo';

function Navbar() {
    const customLogoClass = 'h-16 w-16';
    
    return (
        <div className="absolute top-0 w-full bg-white text-white p-8 z-10 flex justify-between items-center bg-gradient-to-r from-template-violet to-template-magenta">
            <Logo src={`${logo}`} alt="Example image" customClass={customLogoClass} />
            <div>
                <a className="mr-8" href="home">Home</a>
                <a className="mr-8" href="features">Features</a>
                <a className="mr-8" href="pricing">Pricing</a>
            </div>
        </div>
    );
}

export default Navbar;
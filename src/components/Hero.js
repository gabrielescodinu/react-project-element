import ButtonMain from './ButtonMain';

function Hero(props) {
    return (
        <div className="p-8 lg:px-40 min-h-screen flex flex-col justify-center w-full bg-red-500 bg-cover bg-center bg-fixed"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)), url(${props.backgroundImage})`,
            }}
        >
            <h1 className="text-white font-bold text-6xl lg:w-2/3">{props.text}</h1>
            <ButtonMain link="#" text="Find Out More!" className="bg-template-lightRed" />
        </div>
    );
}

export default Hero;
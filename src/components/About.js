import ButtonMain from './ButtonMain';

function About(props) {
    return (
        <div className={`p-8 lg:px-40 py-40 flex flex-col justify-center w-full ${props.className}`}>
            <h1 className="text-white font-bold text-4xl lg:w-1/2">{props.title}</h1>
            <p className="mt-8 text-white text-xl lg:w-1/2">{props.content}</p>
            <ButtonMain link="#" text="Read More" className="bg-template-magenta" />
        </div>
    );
}

export default About;
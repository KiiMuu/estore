import Typewriter from 'typewriter-effect';

const Jumborton = ({ text }) => {
    return (
        <Typewriter
            options={{
                strings: text,
                autoStart: true,
                loop: true,
                deleteSpeed: 10,
                delay: 30,
            }}
        />
    );
}

export default Jumborton;
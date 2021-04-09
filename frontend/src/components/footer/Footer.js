import { EFooter } from './styles';

const Footer = () => {
    return (
        <EFooter>
            <div className='container'>
                <p>
                    {new Date().getFullYear()} Copywright &copy;. Made by <a href='https://github.com/KiiMuu' target='_blank' rel='noreferrer'>KiMMuu</a>.
                </p>
            </div>
        </EFooter>
    )
}

export default Footer;
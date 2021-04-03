import { EFooter } from './styles';
import { HeartFilled } from '@ant-design/icons';

const Footer = () => {
    return (
        <EFooter>
            <div className='container'>
                <p>
                    {new Date().getFullYear()} Copywright &copy;. Made with <HeartFilled style={{ color: 'darkgreen' }} /> by KiMMuu.
                </p>
            </div>
        </EFooter>
    )
}

export default Footer;
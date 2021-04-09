import { Link } from 'react-router-dom';
import Jumborton from '../../components/layout/jumborton/Jumborton';

import { 
    Preview,
    PreviewText,
} from './styles';

const HomePreview = () => {
    const strings = [
        'eStore Latest New Arrivals.',
        'Best Offers & Sellers.',
        'Top Rated Products.'
    ];

    return (
        <Preview>
            <div className='container'>
                <PreviewText>
                    <Jumborton text={strings} />
                    <p><span>eStore</span> is your hanty canty.</p>
                    <Link to='/shop'>See All Products</Link>
                </PreviewText>
            </div>
        </Preview>
    )
}

export default HomePreview

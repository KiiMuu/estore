import Jumborton from '../../components/layout/jumborton/Jumborton';

import { 
    Preview,
    PreviewText,
} from './styles';

const HomePreview = () => {
    const strings = [
        'eStore Latest New Arrivals.',
        'Best Offers & Sellers.',
        'Buy once, Gain Twice.'
    ];

    return (
        <Preview>
            <div className='container'>
                <PreviewText>
                    <Jumborton text={strings} />
                    <p><span>eStore</span> for buying and selling all kinds of products.</p>
                    
                </PreviewText>
            </div>
        </Preview>
    )
}

export default HomePreview

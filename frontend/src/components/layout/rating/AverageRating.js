// * styles
import { StyledTag } from './styles';

// * @antd
import Rate from 'antd/lib/rate';

export const AverageRating = product => {
    if (product?.ratings) {
        let total = [];
        let length = product?.ratings.length;

        product?.ratings.map(rate => total.push(rate.numberOfStars));

        let totalReduced = total.reduce((prev, next) => prev + next, 0);

        let highest = length * 5;
        
        let result = (totalReduced * 5) / highest;

        return (
            <>
                <Rate disabled value={result} allowHalf /> 
                <StyledTag color='#059669'>{product?.ratings.length}</StyledTag>
            </>
        )
    }
}

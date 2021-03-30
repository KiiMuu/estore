// * styles
import { StyledTag } from './styles';

// * @antd
import Rate from 'antd/lib/rate';

export const AverageRating = product => {
    if (product?.ratings) {
        let total = [];
        let length = product?.ratings.length;
        console.log({length})

        product?.ratings.map(rate => total.push(rate.numberOfStars));

        let totalReduced = total.reduce((prev, next) => prev + next, 0);
        console.log({totalReduced})

        let highest = length * 5;
        console.log({highest})
        
        let result = (totalReduced * 5) / highest;
        console.log({result})

        return (
            <>
                <Rate disabled value={result} allowHalf /> 
                <StyledTag color='#87d068'>{product?.ratings.length}</StyledTag>
            </>
        )
    }
}

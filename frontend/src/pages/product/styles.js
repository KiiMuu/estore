import styled from 'styled-components';
import { primaryColor } from '../../themes/colors';
import { topSpace } from '../../themes/spaces';

export const StyledProduct = styled.div`
    padding: ${topSpace} 0;
`;

export const RelatedProducts = styled.div`
    padding: 0 0 ${topSpace} 0;
`;

export const Loader = styled.div`
    padding-top: ${topSpace};
`;

export const StyledHeading = styled.h4`
    color: ${primaryColor};
    margin-bottom: 3rem;
    font-size: 1.8rem;
`;
import styled from 'styled-components';
import { 
    headingStyle, 
    inputIcon, 
    inputLabel 
} from '../../../themes/mixins';
import { 
    marginBottomBox, 
    marginTopBox 
} from '../../../themes/spaces';
import { addButtonQuery } from '../../../themes/breakpoints';
import { primaryColor } from '../../../themes/colors';

// * @antd
import Typography from 'antd/lib/typography';
import PageHeader from 'antd/lib/page-header';

const {
    Title,
    Text,
} = Typography;

// * CreateCoupon.js
export const CouponsWrapper = styled.div`
    padding: 3rem 0;
    height: 100%;
    max-height: 100%;
`;

export const StyledTitle = styled(Title)`
    && {
        ${headingStyle};
        text-transform: uppercase;
        margin-bottom: 0;
    }
`;

export const StyledText = styled(Text)`
    && {
        margin-bottom: ${marginBottomBox};
        display: block;
    }
`;

export const InputLabel = styled.div`
    ${inputLabel};
    &:not(:first-child) {
        margin-top: 1rem;
    }
`;

export const InputControl = styled.div`
    ${inputIcon};
    margin-top: -1rem;
    input {
        height: 4rem;
    }
`;

export const AddButton = styled.div`
    display: flex;
    justify-content: flex-end;
    ${addButtonQuery};
`;

export const StyledPicker = styled.div`
    margin-top: 1rem;
    width: 100%;
    label {
        display: block;
        color: #000;
        font-weight: 500;
        margin-bottom: .2rem;
    }
`;

// * Coupons.js
export const StyledCoupons = styled.div`
    margin-top: ${marginTopBox};
`;

export const StyledActions = styled.div`
    form {
        display: flex;
        align-items: center;
        input {
            border: 1px solid rgba(0 0 0 / 10%);
            outline: none;
            padding-left: .5rem;
        }
    }
    span {
        cursor: pointer;
    }
`;

export const Loader = styled.div`
    color: ${primaryColor};
    font-size: 2.5rem;
    text-align: center;
`;


export const StyledPageHeader = styled(PageHeader)`
    border: 1px solid rgba(0 0 0 / 10%);
`;
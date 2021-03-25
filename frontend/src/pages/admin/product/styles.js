import styled from 'styled-components';
import { headingStyle, inputIcon, inputLabel } from '../../../themes/mixins';
import { marginBottomBox, marginTopBox } from '../../../themes/spaces';
import { addButtonQuery } from '../../../themes/breakpoints';

// * @antd
import Typography from 'antd/lib/typography';
import Select from 'antd/lib/select';
import PageHeader from 'antd/lib/page-header';
import { primaryColor } from '../../../themes/colors';

const {
    Title,
    Text,
} = Typography;

// * CreateProduct.js
export const ProductsWrapper = styled.div`
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

export const StyledSelect = styled(Select)`
    width: 100%;
`;

export const StyledLabel = styled.label`
    display: block;
    color: #000;
    font-weight: 500;
    margin-bottom: .2rem;
`;

// * Products.js
export const StyledProducts = styled.div`
    margin-top: ${marginTopBox};
`;

export const StyledPageHeader = styled(PageHeader)`
    border: 1px solid rgba(0 0 0 / 10%);
`;

export const Loader = styled.div`
    color: ${primaryColor};
    font-size: 2.5rem;
    text-align: center;
`;
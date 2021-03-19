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
import { lightColor, primaryColor } from '../../../themes/colors';

// * @antd
import Typography from 'antd/lib/typography';
import PageHeader from 'antd/lib/page-header';
import Select from 'antd/lib/select';

const {
    Title,
    Text,
} = Typography;

// * CreateCategory.js
export const CategoriesWrapper = styled.div`
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

// * Categories.js
export const StyledCategories = styled.div`
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

// * createSubCategory.js
export const StyledSelect = styled(Select)`
    width: 100%;
`;

export const StyledLabel = styled.label`
    display: block;
    color: #000;
    font-weight: 500;
    margin-bottom: .2rem;
    margin-top: 1rem;
`;

// * SingleSubCategory.js
export const StyledUpdateSelect = styled(Select)`
    width: 100%;
`;

export const ParentSubCat = styled.div`
    cursor: pointer;
    background: ${primaryColor};
    border-radius: .3rem;
    padding: .5rem 1rem;
    span:first-child {
        color: rgba(255 255 255 / 40%);
        display: block;
        font-size: 1.3rem;
    }
    span:last-child {
        color: ${lightColor};
    }
`;
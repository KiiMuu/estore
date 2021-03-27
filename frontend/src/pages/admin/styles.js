import styled from 'styled-components';
import { headerHeight } from '../../themes/spaces';

// * @antd
import Layout from 'antd/lib/layout';
import { layoutQuery } from '../../themes/breakpoints';

const { 
    Content,  
} = Layout;

export const StyledLayout = styled(Layout)`
    && {
        height: 100vh;
    }
`;

export const StyledContent = styled(Content)`
    && {
        margin-top: ${headerHeight};
        background-color: #fff;
        ${layoutQuery};
    }
`;

export const ContentContainer = styled.div`
    height: 100%;
`;
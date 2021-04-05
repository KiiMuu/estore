import styled from 'styled-components';
import { headerHeight } from '../../themes/spaces';
import { adminSiderQuery } from '../../themes/breakpoints';

// * @antd
import Layout from 'antd/lib/layout';

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
        ${adminSiderQuery};
    }
`;

export const ContentContainer = styled.div`
    height: 100%;
`;
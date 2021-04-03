import styled from 'styled-components';
import { inputLabel } from '../../../themes/mixins';
import { marginTopBox } from '../../../themes/spaces';

export const InputLabel = styled.div`
    ${inputLabel};
    margin-top: ${marginTopBox};
`;
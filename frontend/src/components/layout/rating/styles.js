import styled from 'styled-components';
import { primaryColor } from '../../../themes/colors';
import { inputLabel } from '../../../themes/mixins';
import { marginTopBox } from '../../../themes/spaces';

export const RateButton = styled.button`
    background-color: rgba(0 0 0 / 5%);
    padding: .65rem;
    border-radius: .3rem;
    color: ${primaryColor};
    border: none;
    outline: none;
    margin-bottom: .5rem;
    cursor: pointer;
    span {
        margin-right: .3rem;
    }
`;

export const InputLabel = styled.div`
    ${inputLabel};
    margin-top: ${marginTopBox};
`;
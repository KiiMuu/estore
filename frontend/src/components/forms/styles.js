import styled from 'styled-components';
import { primaryColor, primaryDarkColor } from '../../themes/colors';

export const StyledUploadLabel = styled.label`
    display: block;
    cursor: pointer;
    color: ${primaryDarkColor};
    border: .1px dashed ${primaryColor};
    padding: .5rem 1rem;
    margin-top: .5rem;
`;
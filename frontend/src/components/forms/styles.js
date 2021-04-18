import styled from 'styled-components';
import { formSearchQuery } from '../../themes/breakpoints';
import { primaryColor, primaryDarkColor } from '../../themes/colors';

export const StyledUploadLabel = styled.label`
    display: block;
    cursor: pointer;
    color: ${primaryDarkColor};
    border: .1px dashed ${primaryColor};
    padding: .5rem 1rem;
    margin-top: .5rem;
`;

export const Form = styled.form`
    ${formSearchQuery};
`;

export const SearchInput = styled.input`
    height: 4.5rem;
    width: 22rem;
    padding-left: 1rem;
    outline: none;
    font-size: 1.4rem;
    border: .2rem solid rgba(0 0 0 / 15%);
    color: #444;
    border-radius: .3rem;
    transition: all .15s ease-in-out;
    &:focus {
        border: .2rem solid #059669 !important;
        box-shadow: 0 0 0.15rem 0.2rem rgb(5 150 105 / 65%);
    }
`;
import styled, { css } from 'styled-components';

const Button = ({ text, ...rest }) => {
    return (
        <ButtonStyled {...rest}>
            {text}
        </ButtonStyled>
    )
}

const ButtonStyled = styled.button`
    padding: 12px 25px;
    border-width: 1px;
    border-style: solid;
    border-color: #5944D3;
    color: #5944D3;
    background-color: transparent;
    border-radius: 4px;
    transition: 0.5s;

    &:hover {
        background-color: #5944D3;
        color: #FFFFFF;
    }

    ${props => props.roundedFull && css`
        border-radius: 20px;
    `}
`;

export default Button

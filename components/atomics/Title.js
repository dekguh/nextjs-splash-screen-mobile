import styled, { css } from "styled-components"

const Title = ({ text, ...rest }) => {
    return (
        <TitleStyled {...rest}>{text}</TitleStyled>
    )
}

const TitleStyled = styled.span`
    color: #150646;
    display: block;
    line-height: 1.2;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: ${props => props.marginBottom ? props.marginBottom : '8px'};
    ${props => props.medium && css`
        font-size: 16px;
    `}
    ${props => props.large && css`
        font-size: 18px;
    `}
    text-align: ${props => props.align ? props.align : 'left'};
`;

export default Title

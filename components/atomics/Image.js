import styled, { css } from 'styled-components';

const Image = ({ src, ...rest }) => {
    return (
        <ImageStyled
            src={src}
            {...rest}
        />
    )
}

const ImageStyled = styled.img`
    height: 150px;
    ${props => props.medium && css`
        height: 200px;
    `}
    ${props => props.extraLarge && css`
        height: 250px;
    `}
`;

export default Image

import styled, { css } from 'styled-components';

const Container = ( { children, ...rest }) => {
    return (
        <ContainerStyled {...rest}>
            {children}
        </ContainerStyled>
    )
}

const ContainerStyled = styled.div`
    padding: ${props => props.padding ? props.padding : '20px 20px'};
`;

export default Container

import styled, { css } from 'styled-components';

const Container = ( { children, ...rest }) => {
    return (
        <ContainerStyled {...rest}>
            {children}
        </ContainerStyled>
    )
}

const ContainerStyled = styled.div`
    position: relative;
    padding: ${props => props.padding ? props.padding : '0 0'};
    min-height: 100vh;
`;

export default Container

import styled, { css } from 'styled-components';

const Paragraph = ( { text, ...rest } ) => {
    return (
        <ParagraphStyled {...rest}>
            {text}
        </ParagraphStyled>
    )
}

const ParagraphStyled = styled.p`
    color: #6A6A6A;
    line-height: 1.7;
    text-align: ${props => props.align ? props.align : 'left'};
`;

export default Paragraph

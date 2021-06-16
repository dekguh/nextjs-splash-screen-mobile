import styled, { css } from 'styled-components';
import Image from '../atomics/Image';
import Button from '../atomics/Button';
import Paragraph from '../atomics/Paragraph';
import Title from '../atomics/Title';

const SplashItem = ({ image, title, description, btnText, btnClick }) => {
    return (
        <SplashWrap>
            <Image
                src={image}
                style={{
                    marginBottom: '30px'
                }}
                medium
            />
            <Title
                text={title}
                style={{
                    marginBottom: '8px'
                }}
                align='center'
                medium
            />
            <Paragraph
                text={description}
                align='center'
                style={{
                    marginBottom: '16px'
                }}
            />
            <Button text={btnText} onClick={btnClick} roundedFull />
        </SplashWrap>
    )
}

const SplashWrap = styled.div`
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    padding: 40px;
    text-align: center;
`;

export default SplashItem

import { useState } from 'react';
import SplashItem from '../molecules/SplashItem';

const SplashSection = () => {
    const [splashNum, setSplashNum] = useState(1);
    return (
        <>
            {splashNum == 1 && <SplashItem
                image='/images/hand-sanitizer.png'
                title='Dont Worry'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
                btnText='what next?'
                btnClick={e => setSplashNum(2)}
            />}
            {splashNum == 2 && <SplashItem
                image='/images/using-mask.png'
                title='Using Mask'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
                btnText='seriously, next?'
                btnClick={e => setSplashNum(3)}
            />}
            {splashNum == 3 && <SplashItem
                image='/images/check-temperature.png'
                title='Check Temperature'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
                btnText='im cold, next?'
                btnClick={e => setSplashNum(4)}
            />}
            {splashNum == 4 && <SplashItem
                image='/images/hand-wash.png'
                title='Hand Wash'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
                btnText='oke bye'
                btnClick={e => setSplashNum(4)}
            />}
        </>
    )
}

export default SplashSection

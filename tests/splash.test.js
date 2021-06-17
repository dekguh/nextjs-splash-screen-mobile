/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import MyApp from '../pages/_app';
import Home from '../pages/index';
import SplashSection from '../components/organisms/SplashSection';

describe('Splash Screen', () => {
    test('render splash on APP', () => {
        render(<Home />);
        const elementSplashItem1 = screen.getByTestId('splash-1');
        expect(elementSplashItem1).toHaveTextContent('Dont Worry');
    })
})
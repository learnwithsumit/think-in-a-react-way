import useWindowWidth from '../hooks/useWindowWidth';

export default function LayoutComponentOne() {
    const onSmallScreen = useWindowWidth(600);

    return (
        <div>
            <h1>You are browsing on {onSmallScreen ? 'small' : 'large'} device</h1>
        </div>
    );
}

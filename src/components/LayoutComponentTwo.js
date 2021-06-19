import useWindowWidth from '../hooks/useWindowWidth';

export default function LayoutComponentTwo() {
    const onSmallScreen = useWindowWidth(768);

    return (
        <div className={onSmallScreen ? 'small' : 'large'}>
            <h1>This is another component</h1>
        </div>
    );
}

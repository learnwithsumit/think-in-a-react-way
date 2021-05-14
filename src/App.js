import { useState } from 'react';
import MyComponent from './components/MyComponent';

export default function App() {
    const [show, setShow] = useState(true);

    return (
        <div className="app">
            <div>{show && <MyComponent />}</div>
            <p>
                <button type="button" onClick={() => setShow((prevShow) => !prevShow)}>
                    {show ? 'Hide post' : 'Show post'}
                </button>
            </p>
        </div>
    );
}

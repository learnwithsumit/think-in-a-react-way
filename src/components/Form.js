import { useEffect, useRef } from 'react';
import Input from './Input';

export default function Form() {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <div>
            <p>
                <Input ref={inputRef} type="text" placeholder="enter something" />
            </p>
        </div>
    );
}

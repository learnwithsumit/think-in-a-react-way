import { useContext } from 'react';
// eslint-disable-next-line import/no-cycle
import { counterContext } from '../App';

export default function ComponentA() {
    const countContext = useContext(counterContext);

    return (
        <div>
            <p>Component A</p>
            <button type="button" onClick={() => countContext.countDispatch('increment')}>
                Increment
            </button>
            <button type="button" onClick={() => countContext.countDispatch('decrement')}>
                Decrement
            </button>
        </div>
    );
}

import { useCallback, useMemo, useState } from 'react';
import Button from './components/Button';
import ShowCount from './components/ShowCount';
import Title from './components/Title';

function App() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const incrementByOne = useCallback(() => {
        setCount1((prevCount) => prevCount + 1);
    }, []);

    const incrementByFive = useCallback(() => {
        setCount2((prevCount) => prevCount + 5);
    }, []);

    const isEvenOrOdd = useMemo(() => {
        let i = 0;
        while (i < 1000000000) i += 1; // costly operation
        return count1 % 2 === 0;
    }, [count1]);

    return (
        <div className="app">
            <Title />
            <ShowCount count={count1} title="Counter 1" />
            <span>{isEvenOrOdd ? 'Even' : 'Odd'}</span>
            <Button handleClick={incrementByOne}>Increment by one</Button>
            <hr />
            <ShowCount count={count2} title="Counter 2" />
            <Button handleClick={incrementByFive}>Increment by five</Button>
        </div>
    );
}

export default App;

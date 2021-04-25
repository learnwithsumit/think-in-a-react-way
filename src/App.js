import React from 'react';
import ClickCounter from './components/ClickCounter';
import Counter from './components/Counter';
import Section from './components/Section';
import ThemeContext from './contexts/themeContext';

export default class App extends React.Component {
    state = {
        // eslint-disable-next-line react/no-unused-state
        theme: 'light',
        // eslint-disable-next-line react/no-unused-state
        switchTheme: () => {
            this.setState(({ theme }) => {
                if (theme === 'dark') {
                    return {
                        theme: 'light',
                    };
                }
                return {
                    theme: 'dark',
                };
            });
        },
    };

    render() {
        return (
            <div className="app">
                <Counter>
                    {(counter, incrementCount) => (
                        <ClickCounter count={counter} incrementCount={incrementCount} />
                    )}
                </Counter>
                <ThemeContext.Provider value={this.state}>
                    <Section />
                </ThemeContext.Provider>
            </div>
        );
    }
}

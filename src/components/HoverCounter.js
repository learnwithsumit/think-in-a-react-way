import React from 'react';

export default function HoverCounter({ count, incrementCount, theme, switchTheme }) {
    const style = theme === 'dark' ? { backgroundColor: '#000000', color: '#ffffff' } : null;

    console.log('HoverCounter rendered');
    return (
        <div>
            <h1 onMouseOver={incrementCount} style={style}>
                Hovered {count} times
            </h1>
            <button type="button" onClick={switchTheme}>
                Change Theme
            </button>
        </div>
    );
}

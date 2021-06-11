import React from 'react';

function Input({ type, placeholder }, ref) {
    return <input ref={ref} type={type} placeholder={placeholder} />;
}

const forwardedInput = React.forwardRef(Input);

export default forwardedInput;

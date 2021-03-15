import React from 'react';

class Button extends React.Component {
    shouldComponentUpdate(nextProps) {
        const { change: currentChange, locale: currentLocale } = this.props;
        const { change: nextChange, locale: nextLocale } = nextProps;
        if (currentChange === nextChange && nextLocale === currentLocale) {
            return false;
        }
        return true;
    }

    render() {
        const { change, locale, show, enable } = this.props;
        if (!enable) return null;
        return (
            <>
                <button type="button" onClick={() => change(locale)}>
                    {locale === 'bn-BD' ? 'Change Clock' : 'গড়ি পরিবর্তন করুন'}
                </button>
                {show && <p>Hello</p>}
            </>
        );
    }
}

export default Button;

export default function Button({ link, text }) {
    return (
        <a href={link} target="_blank" rel="noreferrer">
            {text}
        </a>
    );
}

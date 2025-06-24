import './style.css'

export default function Link(props) {
    return (
        <a href={props.url} target="_blank" className="pink-link">
            {props.text}
        </a>
    );
}

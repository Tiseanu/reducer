import style from './Input.module.css';

const Input = (props) => {
    return (
        <div className={`${style.control} ${typeof props.isValid === 'boolean' && !props.isValid ? style.invalid : ''}`}>
          <label htmlFor={props.htmlFor}>{props.label} {props.isValid}</label>
          <input type={props.type} id={props.id} value={props.value} onChange={props.onChange} onBlur={props.onBlur} />
        </div>
    );
};

export default Input;
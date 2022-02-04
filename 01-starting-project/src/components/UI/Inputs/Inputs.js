
import { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import classes from './Inputs.module.css'

export const Inputs = forwardRef((props, ref)=>{
    let inputRefs = useRef();
    let EmailValid = props.mailisValid;
    let PasswordValid = props.passwordisValid;
    const active = (()=>{
        inputRefs.current.focus();
    });
    useEffect(()=>{
        active();
    },[]);

    useImperativeHandle(ref,()=>{
        return {
            focus:active,
        }
    });
    return (<><div
        className={`${classes.control} ${EmailValid === false ? classes.invalid : ''}`}
    >
        <label htmlFor="email">E-Mail</label>
        <input
             ref={inputRefs}
            type="email"
            id="email"
            value={props.emailValue}
            onChange={props.emailChangeEvent}
            onBlur={props.validateEmailEvent} />
    </div><div
        className={`${classes.control} ${PasswordValid === false ? classes.invalid : ''}`}
    >
            <label htmlFor="password">Password</label>
            <input
                // ref={passwordRefs}
                type="password"
                id="password"
                value={props.passwordValue}
                onChange={props.passwordChangeEvent}
                onBlur={props.validatePasswordEvent} />
        </div></>);
});
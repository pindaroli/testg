import React from 'react'
import {Field, reduxForm} from 'redux-form'
import ruleNode from './ruleNode'


const required = value => value ? undefined : 'Required'
const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength15 = maxLength(15)
const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined
const minValue = min => value =>
    value && value < min ? `Must be at least ${min}` : undefined
const minValue18 = minValue(18)
const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Invalid email address' : undefined
const tooOld = value =>
    value && value > 65 ? 'You might be too old for this' : undefined
const aol = value =>
    value && /.+@aol\.com/.test(value) ?
        'Really? You still use AOL for your email?' : undefined

const renderFieldText = ({input, label, type, len, maxlen, meta: {touched, error, warning}}) => (
    <div className={"col-sm"}>
        <label className={"small"}>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type} maxlength={maxlen} size={len}/>
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
)

const PayForm = (props) => {
    const {handleSubmit, pristine, reset, submitting, rulesMap} = props
    return (

        <form onSubmit={handleSubmit}>
            <div className={"container-fluid"}>
                <div className={"row"}>
                    <Field name="PaymentInstructionId" type="text"
                           component={renderFieldText} label="PaymentInstructionId"
                           maxlen={rulesMap.get("PaymentInstructionId").len}
                           len={rulesMap.get("PaymentInstructionId").len}
                           validate={[required, rulesMap.get("PaymentInstructionId").len]}
                    />
                    <Field name="email" type="email"
                           component={renderFieldText} label="Email"
                           validate={email}
                           warn={aol}
                    />
                    <Field name="age" type="number"
                           component={renderFieldText} label="Age"
                           validate={[required, number, minValue18]}
                           warn={tooOld}
                    />
                </div>
                <div>
                    <button type="submit" disabled={submitting}>Submit</button>
                    <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
                </div>

            </div>
        </form>
    )
}

export default reduxForm({
    form: 'payForm' // a unique identifier for this form
})(PayForm)
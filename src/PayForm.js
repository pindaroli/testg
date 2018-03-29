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
            <input {...input}  type={"Text"} maxlength={maxlen} size={len}/>
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

                    <Field name="PaymentInstructionId"
                           component={renderFieldText} label="PaymentInstructionId"
                           maxlen={rulesMap.get("PaymentInstructionId").len}
                           len={rulesMap.get("PaymentInstructionId").len}
                           //validate={[required, rulesMap.get("PaymentInstructionId").len]}
                    />
                    <Field name="EndToEndId"
                           component={renderFieldText} label="EndToEndId"
                           maxlen={rulesMap.get("EndToEndId").len}
                           len={rulesMap.get("EndToEndId").len}
                           validate={email}
                           warn={aol}
                    />
                    <Field name="ValueDate"
                           component={renderFieldText} label="ValueDate"
                           maxlen={rulesMap.get("ValueDate").len}
                           len={rulesMap.get("ValueDate").len}
                           warn={tooOld}
                    />
                    <Field name="Amount"
                           component={renderFieldText} label="Amount"
                           maxlen={rulesMap.get("Amount").len}
                           len={rulesMap.get("Amount").len}
                           validate={[required]}
                           warn={tooOld}
                    />
                    <Field name="CurrencyCode"
                           component={renderFieldText} label="CurrencyCode"
                           maxlen={rulesMap.get("CurrencyCode").len}
                           len={rulesMap.get("CurrencyCode").len}
                           validate={[required]}
                           warn={tooOld}
                    />
                </div>
                <div className="row">

                    <Field name="Charges"
                           component={renderFieldText} label="Charges"
                           maxlen={rulesMap.get("Charges").len}
                           len={rulesMap.get("Charges").len}
                           validate={[required]}
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
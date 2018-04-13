import React from 'react'
import {Field, reduxForm} from 'redux-form'



const required = value => value ? undefined : '*'
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
            <input {...input} type={"Text"} maxLength={maxlen} size={len}/>
            {touched && ((error && <span className="alert-danger">{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
)

const PayForm = (props) => {
    const {handleSubmit, pristine, reset, submitting, rulesMap} = props;
    return (

        <form onSubmit={handleSubmit}>
            <div className={"container-fluid"}>
                <div className={"row"}>

                    <Field name="PaymentInstructionId"
                           component={renderFieldText} label="PaymentInstructionId"
                           maxlen={rulesMap.get("PaymentInstructionId").len}
                           len={rulesMap.get("PaymentInstructionId").len}
                           validate={rulesMap.get('PaymentInstructionId').isMandatory?[required]:null}
                    />
                    <Field name="EndToEndId"
                           component={renderFieldText} label="EndToEndId"
                           maxlen={rulesMap.get("EndToEndId").len}
                           len={rulesMap.get("EndToEndId").len}
                           validate={rulesMap.get('EndToEndId').isMandatory?[required]:null}
                    />
                    <Field name="ValueDate"
                           component={renderFieldText} label="ValueDate"
                           maxlen={rulesMap.get("ValueDate").len}
                           len={rulesMap.get("ValueDate").len}
                           validate={rulesMap.get('ValueDate').isMandatory?[required]:null}
                    />
                    <Field name="Amount"
                           component={renderFieldText} label="Amount"
                           maxlen={rulesMap.get("Amount").len}
                           len={rulesMap.get("Amount").len}
                           validate={rulesMap.get('Amount').isMandatory?[required]:null}
                    />

                    <Field name="CurrencyCode"
                           component={renderFieldText} label="CurrencyCode"
                           maxlen={rulesMap.get("CurrencyCode").len}
                           len={rulesMap.get("CurrencyCode").len}
                           validate={rulesMap.get('CurrencyCode').isMandatory?[required]:null}
                    />

                </div>
                <div className="row">

                    <Field name="Charges"
                           component={renderFieldText} label="Charges"
                           maxlen={rulesMap.get("Charges").len}
                           len={rulesMap.get("Charges").len}
                           validate={rulesMap.get('Charges').isMandatory?[required]:null}
                    />
                    <Field name="ChargesCurrencyCode"
                           component={renderFieldText} label="ChargesCurrencyCode"
                           maxlen={rulesMap.get("ChargesCurrencyCode").len}
                           len={rulesMap.get("ChargesCurrencyCode").len}
                           validate={rulesMap.get('ChargesCurrencyCode').isMandatory?[required]:null}
                    />
                    <Field name="ChargeIban"
                           component={renderFieldText} label="ChargeIban"
                           maxlen={rulesMap.get("ChargeIban").len}
                           len={rulesMap.get("ChargeIban").len}
                           validate={rulesMap.get('ChargeIban').isMandatory?[required]:null}
                    />
                    <Field name="CategoryPurposeCode"
                           component={renderFieldText} label="CategoryPurposeCode"
                           maxlen={rulesMap.get("CategoryPurposeCode").len}
                           len={rulesMap.get("CategoryPurposeCode").len}
                           validate={rulesMap.get('CategoryPurposeCode').isMandatory?[required]:null}
                    />
                    <Field name="CategoryPurposeProprietary"
                           component={renderFieldText} label="CategoryPurposeProprietary"
                           maxlen={rulesMap.get("CategoryPurposeProprietary").len}
                           len={rulesMap.get("CategoryPurposeProprietary").len}
                           validate={rulesMap.get('CategoryPurposeProprietary').isMandatory?[required]:null}
                    />
                    <Field name="PurposeCode"
                           component={renderFieldText} label="PurposeCode"
                           maxlen={rulesMap.get("PurposeCode").len}
                           len={rulesMap.get("PurposeCode").len}
                           validate={rulesMap.get('CategoryPurposeProprietary').isMandatory?[required]:null}
                    />
                </div>
                <div className="row">

                    <Field name="RemittanceInfoUnstrd"
                           component={renderFieldText} label="RemittanceInfoUnstrd"
                           maxlen={rulesMap.get("RemittanceInfoUnstrd").len}
                           len={rulesMap.get("RemittanceInfoUnstrd").len}
                           validate={rulesMap.get('RemittanceInfoUnstrd').isMandatory?[required]:null}
                    />
                </div>
                <div className="row" >
                    <Field name="SctServiceLevel"
                           component={renderFieldText} label="SctServiceLevel"
                           maxlen={rulesMap.get("SctServiceLevel").len}
                           len={rulesMap.get("SctServiceLevel").len}
                           validate={rulesMap.get('SctServiceLevel').isMandatory?[required]:null}
                    />
                    <Field name="DebtorName"
                           component={renderFieldText} label="DebtorName"
                           maxlen={rulesMap.get("DebtorName").len}
                           len={rulesMap.get("DebtorName").len}
                           validate={rulesMap.get('DebtorName').isMandatory?[required]:null}
                    />
                    <Field name="DebtorAddress1"
                           component={renderFieldText} label="DebtorAddress1"
                           maxlen={rulesMap.get("DebtorAddress1").len}
                           len={rulesMap.get("DebtorAddress1").len}
                           validate={rulesMap.get('DebtorAddress1').isMandatory?[required]:null}
                    />
                    <Field name="DebtorAddress2"
                           component={renderFieldText} label="DebtorAddress2"
                           maxlen={rulesMap.get("DebtorAddress2").len}
                           len={rulesMap.get("DebtorAddress2").len}
                           validate={rulesMap.get('DebtorAddress2').isMandatory?[required]:null}
                    />
                </div>
                <div className="row">
                    <Field name="DebtorCountry"
                           component={renderFieldText} label="DebtorCountry"
                           maxlen={rulesMap.get("DebtorCountry").len}
                           len={rulesMap.get("DebtorCountry").len}
                           validate={rulesMap.get('DebtorCountry').isMandatory?[required]:null}
                    />
                    <Field name="DebtorId"
                           component={renderFieldText} label="DebtorId"
                           maxlen={rulesMap.get("DebtorId").len}
                           len={rulesMap.get("DebtorId").len}
                           validate={rulesMap.get('DebtorId').isMandatory?[required]:null}
                    />
                    <Field name="DebtorIBAN"
                           component={renderFieldText} label="DebtorIBAN"
                           maxlen={rulesMap.get("DebtorIBAN").len}
                           len={rulesMap.get("DebtorIBAN").len}
                           validate={rulesMap.get('DebtorIBAN').isMandatory?[required]:null}
                    />
                    <Field name="DebtorAgentBIC"
                           component={renderFieldText} label="DebtorAgentBIC"
                           maxlen={rulesMap.get("DebtorAgentBIC").len}
                           len={rulesMap.get("DebtorAgentBIC").len}
                           validate={rulesMap.get('DebtorAgentBIC').isMandatory?[required]:null}
                    />
                    <Field name="DebtorAccount"
                           component={renderFieldText} label="DebtorAccount"
                           maxlen={rulesMap.get("DebtorAccount").len}
                           len={rulesMap.get("DebtorAccount").len}
                           validate={rulesMap.get('DebtorAccount').isMandatory?[required]:null}
                    />
                </div>
                <div className="row">
                    <Field name="DebtorBankNationalId"
                           component={renderFieldText} label="DebtorBankNationalId"
                           maxlen={rulesMap.get("DebtorBankNationalId").len}
                           len={rulesMap.get("DebtorBankNationalId").len}
                           validate={rulesMap.get('DebtorBankNationalId').isMandatory?[required]:null}
                    />
                    <Field name="DebtorBranchNationalId"
                           component={renderFieldText} label="DebtorBranchNationalId"
                           maxlen={rulesMap.get("DebtorBranchNationalId").len}
                           len={rulesMap.get("DebtorBranchNationalId").len}
                           validate={rulesMap.get('DebtorBranchNationalId').isMandatory?[required]:null}
                    />
                    <Field name="UltimateDebtorName"
                           component={renderFieldText} label="UltimateDebtorName"
                           maxlen={rulesMap.get("UltimateDebtorName").len}
                           len={rulesMap.get("UltimateDebtorName").len}
                           validate={rulesMap.get('UltimateDebtorName').isMandatory?[required]:null}
                    />
                    <Field name="UltimateDebtorId"
                           component={renderFieldText} label="UltimateDebtorId"
                           maxlen={rulesMap.get("UltimateDebtorId").len}
                           len={rulesMap.get("UltimateDebtorId").len}
                           validate={rulesMap.get('UltimateDebtorId').isMandatory?[required]:null}
                    />
                </div>
                <div className="row">
                    <Field name="CreditorName"
                           component={renderFieldText} label="CreditorName"
                           maxlen={rulesMap.get("CreditorName").len}
                           len={rulesMap.get("CreditorName").len}
                           validate={rulesMap.get('CreditorName').isMandatory?[required]:null}
                    />
                    <Field name="CreditorAddress1"
                           component={renderFieldText} label="CreditorAddress1"
                           maxlen={rulesMap.get("CreditorAddress1").len}
                           len={rulesMap.get("CreditorAddress1").len}
                           validate={rulesMap.get('CreditorAddress1').isMandatory?[required]:null}
                    />
                    <Field name="CreditorAddress2"
                           component={renderFieldText} label="CreditorAddress2"
                           maxlen={rulesMap.get("CreditorAddress2").len}
                           len={rulesMap.get("CreditorAddress2").len}
                           validate={rulesMap.get('CreditorAddress2').isMandatory?[required]:null}
                    />
                    <Field name="CreditorCountry"
                           component={renderFieldText} label="CreditorCountry"
                           maxlen={rulesMap.get("CreditorCountry").len}
                           len={rulesMap.get("CreditorCountry").len}
                           validate={rulesMap.get('CreditorCountry').isMandatory?[required]:null}
                    />
                    <Field name="CreditorId"
                           component={renderFieldText} label="CreditorId"
                           maxlen={rulesMap.get("CreditorId").len}
                           len={rulesMap.get("CreditorId").len}
                           validate={rulesMap.get('CreditorId').isMandatory?[required]:null}
                    />
                </div>
                <div className="row" >
                    <Field name="CreditorIBAN"
                           component={renderFieldText} label="CreditorIBAN"
                           maxlen={rulesMap.get("CreditorIBAN").len}
                           len={rulesMap.get("CreditorIBAN").len}
                           validate={rulesMap.get('CreditorIBAN').isMandatory?[required]:null}
                    />
                    <Field name="CreditorAgentBIC"
                           component={renderFieldText} label="CreditorAgentBIC"
                           maxlen={rulesMap.get("CreditorAgentBIC").len}
                           len={rulesMap.get("CreditorAgentBIC").len}
                           validate={rulesMap.get('CreditorAgentBIC').isMandatory?[required]:null}
                    />
                    <Field name="CreditorAccount"
                           component={renderFieldText} label="CreditorAccount"
                           maxlen={rulesMap.get("CreditorAccount").len}
                           len={rulesMap.get("CreditorAccount").len}
                           validate={rulesMap.get('CreditorAccount').isMandatory?[required]:null}
                    />
                    <Field name="CreditorBankNationalId"
                           component={renderFieldText} label="CreditorBankNationalId"
                           maxlen={rulesMap.get("CreditorBankNationalId").len}
                           len={rulesMap.get("CreditorBankNationalId").len}
                           validate={rulesMap.get('CreditorBankNationalId').isMandatory?[required]:null}
                    />

                </div>
                <div className="row">
                    <Field name="UltimateCreditorName"
                           component={renderFieldText} label="UltimateCreditorName"
                           maxlen={rulesMap.get("UltimateCreditorName").len}
                           len={rulesMap.get("UltimateCreditorName").len}
                           validate={rulesMap.get('UltimateCreditorName').isMandatory?[required]:null}
                    />
                    <Field name="UltimatecreditorId"
                           component={renderFieldText} label="UltimatecreditorId"
                           maxlen={rulesMap.get("UltimatecreditorId").len}
                           len={rulesMap.get("UltimatecreditorId").len}
                           validate={rulesMap.get('UltimatecreditorId').isMandatory?[required]:null}
                    />
                </div>
                <div className="row">
                    <Field name="CreditorNickname"
                           component={renderFieldText} label="CreditorNickname"
                           maxlen={rulesMap.get("CreditorNickname").len}
                           len={rulesMap.get("CreditorNickname").len}
                           validate={rulesMap.get('CreditorNickname').isMandatory?[required]:null}
                    />
                    <Field name="DebtorUserId"
                           component={renderFieldText} label="DebtorUserId"
                           maxlen={rulesMap.get("DebtorUserId").len}
                           len={rulesMap.get("DebtorUserId").len}
                           validate={rulesMap.get('DebtorUserId').isMandatory?[required]:null}
                    />
                    <Field name="DebtorMobile"
                           component={renderFieldText} label="DebtorMobile"
                           maxlen={rulesMap.get("DebtorMobile").len}
                           len={rulesMap.get("DebtorMobile").len}
                           validate={rulesMap.get('DebtorMobile').isMandatory?[required]:null}
                    />
                </div>
                <div className="row">
                    <Field name="DeviceUniqueId"
                           component={renderFieldText} label="DeviceUniqueId"
                           maxlen={rulesMap.get("DeviceUniqueId").len}
                           len={rulesMap.get("DeviceUniqueId").len}
                           validate={rulesMap.get('DeviceUniqueId').isMandatory?[required]:null}
                    />
                    <Field name="DeviceModel"
                           component={renderFieldText} label="DeviceModel"
                           maxlen={rulesMap.get("DeviceModel").len}
                           len={rulesMap.get("DeviceModel").len}
                           validate={rulesMap.get('DeviceModel').isMandatory?[required]:null}
                    />
                    <Field name="DeviceIpAddress"
                           component={renderFieldText} label="DeviceIpAddress"
                           maxlen={rulesMap.get("DeviceIpAddress").len}
                           len={rulesMap.get("DeviceIpAddress").len}
                           validate={rulesMap.get('DeviceIpAddress').isMandatory?[required]:null}
                    />
                </div>
                <div className="row">
                    <Field name="DebtorEmail"
                           component={renderFieldText} label="DebtorEmail"
                           maxlen={rulesMap.get("DebtorEmail").len}
                           len={rulesMap.get("DebtorEmail").len}
                           validate={rulesMap.get('DebtorEmail').isMandatory?[required]:null}
                    />
                    <Field name="CreditorEmail"
                           component={renderFieldText} label="CreditorEmail"
                           maxlen={rulesMap.get("CreditorEmail").len}
                           len={rulesMap.get("CreditorEmail").len}
                           validate={rulesMap.get('CreditorEmail').isMandatory?[required]:null}
                    />

                    <Field name="CreditorMobile"
                           component={renderFieldText} label="CreditorMobile"
                           maxlen={rulesMap.get("CreditorMobile").len}
                           len={rulesMap.get("CreditorMobile").len}
                           validate={rulesMap.get('CreditorMobile').isMandatory?[required]:null}
                    />
                </div>
                <div className="row">
                    <Field name="AuthorizationId"
                           component={renderFieldText} label="AuthorizationId"
                           maxlen={rulesMap.get("AuthorizationId").len}
                           len={rulesMap.get("AuthorizationId").len}
                           validate={rulesMap.get('AuthorizationId').isMandatory?[required]:null}
                    />
                    <Field name="SecurityToken"
                           component={renderFieldText} label="SecurityToken"
                           maxlen={rulesMap.get("SecurityToken").len}
                           len={rulesMap.get("SecurityToken").len}
                           validate={rulesMap.get('SecurityToken').isMandatory?[required]:null}
                    />
                </div>
                <div className="row">
                    <Field name="FillerArea"
                           component={renderFieldText} label="FillerArea"
                           maxlen={rulesMap.get("FillerArea").len}
                           len={rulesMap.get("FillerArea").len}
                           validate={rulesMap.get('FillerArea').isMandatory?[required]:null}
                    />
                </div>
                <div className="row">
                    <Field name="Buffer"
                           component={renderFieldText} label="Buffer"
                           maxlen={2000}
                           len={2000}

                    />
                </div>
                <div>
                    <button type="submit" className="btn" disabled={submitting}>Submit</button>
                    <button type="button" className="btn">Unpack</button>
                    <button type="button" className="btn" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
                </div>

            </div>
        </form>
    )
}

export default reduxForm({
    form: 'payForm' // a unique identifier for this form
})(PayForm)
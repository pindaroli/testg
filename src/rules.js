﻿
const	rules=[
["PaymentInstructionId",1,35],
["EndToEndId",36,35],
["ValueDate",71,8],
["Amount",79,18,true],
["CurrencyCode",97,3],
["Charges",100,18],
["ChargesCurrencyCode",118,3],
["ChargeIban",121,34],
["CategoryPurposeCode",155,4,true],
["CategoryPurposeProprietary",159,35],
["PurposeCode",194,4],
["RemittanceInfoUnstrd",198,140,true],
["SctServiceLevel",338,4,true],
["DebtorName",342,70,true],
["DebtorAddress1",412,70,true],
["DebtorAddress2",482,70,true],
["DebtorCountry",552,2,true],
["DebtorId",554,35],
["DebtorIBAN",589,34,true],
["DebtorAgentBIC",623,11,true],
["DebtorAccount",634,20],
["DebtorBankNationalId",654,10],
["DebtorBranchNationalId",664,10],
["UltimateDebtorName",674,70],
["UltimateDebtorId",744,35],
["CreditorName",779,70,true],
["CreditorAddress1",849,70],
["CreditorAddress2",919,70],
["CreditorCountry",989,2],
["DebtorId",991,35],
["CreditorIBAN",1026,34],
["CreditorAgentBIC",1060,11],
["CreditorAccount",1071,20],
["CreditorBankNationalId",1091,10],
["CreditorBranchNationalId",1101,10],
["UltimateCreditorName",1111,70],
["UltimatecreditorId",1181,35],
["CreditorNickname",1216,70],
["DebtorUserId",1286,16],
["DebtorMobile",1302,16],
["DeviceUniqueId",1318,40],
["DeviceModel",1358,40],
["DeviceIpAddress",1398,15],
["DebtorEmail",1413,50],
["CreditorEmail",1463,50],
["CreditorMobile",1513,16],
["AuthorizationId",1529,48],
["SecurityToken",1577,40],
["FillerArea",1617,384],
] ;


export default rules;

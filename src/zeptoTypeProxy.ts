// Applies the requiered types

import {simpleSend, templateSend, templateBulkSend, successResponse, errorResponse} from "./zeptoTypes.ts"

import { SendMailClient } from "./zepto.ts"

interface client {
	sendMail(arg0: simpleSend): Promise<successResponse>;
	sendMailWithTemplate(arg0: templateSend): Promise<successResponse>;
	mailBatchWithTemplate(arg0: templateBulkSend): Promise<successResponse>;
}

interface clientConstructor {
	new (arg0: {
		url: string
		token: string
	}): client
}

//@ts-ignore apply types to the constructor
const TypedSendMailClient = SendMailClient as clientConstructor

export { TypedSendMailClient as SendMailClient }
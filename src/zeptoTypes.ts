export interface simpleSend {
	bounce_address: string;
	from: User;
	to: To[];
	reply_to?: User[];
	subject: string;
	textbody?: string;
	htmlbody?: string;
	cc?: To[];
	bcc?: To[];
	track_clicks?: boolean;
	track_opens?: boolean;
	client_reference?: string;
	mime_headers?: MIMEHeaders;
	attachments?: Attachment[];
	inline_images?: Attachment[];
}

export interface templateSend extends Omit<simpleSend, "textbody"|"htmlbody"|"subject"> {
	mail_template_key: string;
	merge_info: mergeInfo;
}

export interface templateBulkSend extends Omit<simpleSend, "textbody"|"htmlbody"|"subject"|"to"> {
	mail_template_key: string;
	to: bulkSendTo;
}

export interface successResponse {
    data:       successData[];
    message:    string;
    request_id: string;
    object:     string;
}

interface successData {
	code:            string;
	additional_info: any[];
	message:         string;
}

export interface errorResponse {
	error: {
		code:       string;
    details:    errorDetails[];
    message:    string;
    request_id: string;
	}
}

interface errorDetails {
	code:    string;
	message: string;
	target:  string;
}

interface Attachment {
	content?: string;
	mime_type?: string;
	name?: string;
	file_cache_key?: string;
	cid?: string;
}

interface To {
	email_address: User;
}

interface bulkSendTo extends To {
	merge_info: mergeInfo;
}

interface User {
	address: string;
	name?: string;
}

interface MIMEHeaders {
	"X-Zylker-User": string;
}

type mergeInfo = Record<string, string>
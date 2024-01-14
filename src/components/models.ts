export interface Todo {
    id: number;
    content: string;
}

export interface Meta {
    totalCount: number;
}

// 对话框输入内容
export interface DialogRadioItems {
    label: string;
    value: string;
    color: string;
}

export interface BaseApi {
    code: number,
    msg: string,
    data: any,
}



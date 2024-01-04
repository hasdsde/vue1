interface ICss {
    name: string,
    children: {
        name: string,
        children: {
            value: string, desc: string
        }[]
    }[]
}

const size = {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "48",
}
export const cssList: ICss[] = [
    {
        name: "quasar文字", children: [
            {
                name: "文字大小", children: [
                    {value: "text-h1", desc: "一级标题"},
                    {value: "text-h2", desc: "二级标题"},
                    {value: "text-h3", desc: "三级标题"},
                    {value: "text-h4", desc: "四级标题"},
                    {value: "text-h5", desc: "五级标题"},
                    {value: "text-h6", desc: "六级标题"},
                    {value: "text-subtitle1", desc: "小标题1"},
                    {value: "text-subtitle2", desc: "小标题2"},
                    {value: "text-body1", desc: "正文1"},
                    {value: "text-body2", desc: "正文2"},
                    {value: "text", desc: "bbb"},
                ],
            },
            {
                name: "文字位置", children: [
                    {value: "text-right", desc: "右对齐"},
                    {value: "text-left", desc: "左对齐"},
                    {value: "text-center", desc: "居中对齐"},
                    {value: "text-justify", desc: "两侧对齐"},
                ],
            },
            {
                name: "文字样式", children: [
                    {value: "text-bold", desc: "加粗"},
                    {value: "text-italic", desc: "斜体"},
                    {value: "text-uppercase", desc: "全部大写"},
                    {value: "text-lowercase", desc: "全部小写"},
                    {value: "text-capitalize", desc: "首字母大写"},
                ],
            },
        ]
    },
    {
        name: "Quasar颜色", children: [
            {
                name: "文字颜色(品牌)", children: [
                    {value: "text-primary", desc: "#1976D2"},
                    {value: "text-secondary", desc: "#26A69A"},
                    {value: "text-accent", desc: "#9C27B0"},
                    {value: "text-dark", desc: "#1D1D1D"},
                    {value: "text-positive", desc: "#21BA45"},
                    {value: "text-negative", desc: "#C10015"},
                    {value: "text-info", desc: "#31CCEC"},
                    {value: "text-warning", desc: "#F2C037"},
                ],
            },
            {
                name: "文字颜色(全部)", children: [
                    {value: "text-red", desc: "#f44336"},
                    {value: "text-pink", desc: "#e91e63"},
                    {value: "text-purple", desc: "#9c27b0"},
                    {value: "text-deep-purple", desc: "#673ab7"},
                    {value: "text-indigo", desc: "#3f51b5"},
                    {value: "text-blue", desc: "#2196f3"},
                    {value: "text-light-blue", desc: "#03a9f4"},
                    {value: "text-cyan", desc: "#00bcd4"},
                    {value: "text-teal", desc: "#009688"},
                    {value: "text-green", desc: "#4caf50"},
                    {value: "text-light-green", desc: "#8bc34a"},
                    {value: "text-lime", desc: "#cddc39"},
                    {value: "text-yellow", desc: "#ffeb3b"},
                    {value: "text-amber", desc: "#ffc107"},
                    {value: "text-orange", desc: "#ff9800"},
                    {value: "text-deep-orange", desc: "#ff5722"},
                    {value: "text-brown", desc: "#795548"},
                    {value: "text-grey", desc: "#9e9e9e"},
                    {value: "text-blue-grey", desc: "#607d8b"},
                ],
            },
            {
                name: "背景颜色(品牌)", children: [
                    {value: "bg-primary", desc: "#1976D2"},
                    {value: "bg-secondary", desc: "#26A69A"},
                    {value: "bg-accent", desc: "#9C27B0"},
                    {value: "bg-dark", desc: "#1D1D1D"},
                    {value: "bg-positive", desc: "#21BA45"},
                    {value: "bg-negative", desc: "#C10015"},
                    {value: "bg-info", desc: "#31CCEC"},
                    {value: "bg-warning", desc: "#F2C037"},
                ],
            },
            {
                name: "背景颜色(全部)", children: [
                    {value: "bg-red", desc: "#f44336"},
                    {value: "bg-pink", desc: "#e91e63"},
                    {value: "bg-purple", desc: "#9c27b0"},
                    {value: "bg-deep-purple", desc: "#673ab7"},
                    {value: "bg-indigo", desc: "#3f51b5"},
                    {value: "bg-blue", desc: "#2196f3"},
                    {value: "bg-light-blue", desc: "#03a9f4"},
                    {value: "bg-cyan", desc: "#00bcd4"},
                    {value: "bg-teal", desc: "#009688"},
                    {value: "bg-green", desc: "#4caf50"},
                    {value: "bg-light-green", desc: "#8bc34a"},
                    {value: "bg-lime", desc: "#cddc39"},
                    {value: "bg-yellow", desc: "#ffeb3b"},
                    {value: "bg-amber", desc: "#ffc107"},
                    {value: "bg-orange", desc: "#ff9800"},
                    {value: "bg-deep-orange", desc: "#ff5722"},
                    {value: "bg-brown", desc: "#795548"},
                    {value: "bg-grey", desc: "#9e9e9e"},
                    {value: "bg-blue-grey", desc: "#607d8b"},
                ],
            },
        ]
    },
    {
        name: "Quasar间距", children: [
            {
                name: "margin-top", children: [
                    {value: "q-mt-none", desc: "margin-top: 0"},
                    {value: "q-mt-xs", desc: "margin-top: " + size.xs},
                    {value: "q-mt-sm", desc: "margin-top: " + size.sm},
                    {value: "q-mt-md", desc: "margin-top: " + size.md},
                    {value: "q-mt-lg", desc: "margin-top: " + size.lg},
                    {value: "q-mt-xl", desc: "margin-top: " + size.xl},
                ],
            },
            {
                name: "margin-bottom", children: [
                    {value: "q-mb-none", desc: "margin-bottom: 0"},
                    {value: "q-mb-xs", desc: "margin-bottom: " + size.xs},
                    {value: "q-mb-sm", desc: "margin-bottom: " + size.sm},
                    {value: "q-mb-md", desc: "margin-bottom: " + size.md},
                    {value: "q-mb-lg", desc: "margin-bottom: " + size.lg},
                    {value: "q-mb-xl", desc: "margin-bottom: " + size.xl},
                ],
            },
            {
                name: "margin-right", children: [
                    {value: "q-mr-none", desc: "margin-right: 0"},
                    {value: "q-mr-xs", desc: "margin-right: " + size.xs},
                    {value: "q-mr-sm", desc: "margin-right: " + size.sm},
                    {value: "q-mr-md", desc: "margin-right: " + size.md},
                    {value: "q-mr-lg", desc: "margin-right: " + size.lg},
                    {value: "q-mr-xl", desc: "margin-right: " + size.xl},
                ],
            },
            {
                name: "margin-left", children: [
                    {value: "q-ml-none", desc: "margin-left: 0"},
                    {value: "q-ml-xs", desc: "margin-left: " + size.xs},
                    {value: "q-ml-sm", desc: "margin-left: " + size.sm},
                    {value: "q-ml-md", desc: "margin-left: " + size.md},
                    {value: "q-ml-lg", desc: "margin-left: " + size.lg},
                    {value: "q-ml-xl", desc: "margin-left: " + size.xl},
                ],
            },
        ]
    },
    {
        name: "demo", children: [
            {
                name: "demo", children: [
                    {value: "demo1", desc: "demo"},
                ],
            },
        ]
    }

]
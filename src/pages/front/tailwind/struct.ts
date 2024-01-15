interface ICss {
    name: string,
    children: {
        name: string,
        children: {
            "value": string,
            "desc": string
        }[],
    }[]
}

interface ITag {
    name: string,
    desc: string,
    props: {
        name: string,
        children: ITagInfo[]
    }[] | undefined,
    slots: ITagInfo[],
    events: ITagInfo[],
    methods: ITagInfo[],
}

interface ITagInfo {
    name: string,
    desc: string,
    example: string[] | any
}

const quasarColorsExample = ["text-primary", "text-secondary", "text-accent", "text-dark", "text-positive", "text-negative", "text-info", "text-warning", "text-red", "text-pink", "text-purple", "text-deep-purple", "text-indigo", "text-blue", "text-light-blue", "text-cyan", "text-teal", "text-green", "text-light-green", "text-lime", "text-yellow", "text-amber", "text-orange", "text-deep-orange", "text-brown", "text-grey", "text-blue-grey",]
const quasarFontSizeExample = ["2px", "16px", "2rem"]
const quasarSizeExample = ["xs", "sm", "md", "lg", "xl"]
const quasarAllSize = [...quasarFontSizeExample, ...quasarSizeExample]
const quasarBoolExample = ["true", "false"]
const quasarAlignExample = ["middle", "top", "bottom"]
// 可用的标签

export const tagLists: ITag[] = [
    {name: "div", desc: "div2", props: [], slots: [], events: [], methods: []},
    {name: "html", desc: "html2", props: [], slots: [], events: [], methods: []},
    {name: "head", desc: "", props: [], slots: [], events: [], methods: []},
    {name: "span", desc: "", props: [], slots: [], events: [], methods: []},
    {name: "title", desc: "", props: [], slots: [], events: [], methods: []},
    {name: "link", desc: "", props: [], slots: [], events: [], methods: []},
    {name: "style", desc: "", props: [], slots: [], events: [], methods: []},
    {name: "a", desc: "", props: [], slots: [], events: [], methods: []},
    {name: "script", desc: "", props: [], slots: [], events: [], methods: []},
    {name: "strong", desc: "", props: [], slots: [], events: [], methods: []},
    {name: "br", desc: "", props: [], slots: [], events: [], methods: []},
    {name: "p", desc: "", props: [], slots: [], events: [], methods: []},
    {name: "ul", desc: "", props: [], slots: [], events: [], methods: []},
    {name: "ol", desc: "", props: [], slots: [], events: [], methods: []},
    {name: "li", desc: "", props: [], slots: [], events: [], methods: []},
    {name: "input", desc: "", props: [], slots: [], events: [], methods: []},
    {name: "textarea", desc: "", props: [], slots: [], events: [], methods: []},
    {name: "form", desc: "", props: [], slots: [], events: [], methods: []},
    {name: "select", desc: "", props: [], slots: [], events: [], methods: []},
    {name: "button", desc: "", props: [], slots: [], events: [], methods: []},
    {name: "option", desc: "", props: [], slots: [], events: [], methods: []},
    {name: "body", desc: "", props: [], slots: [], events: [], methods: []},
    {name: "h1", desc: "", props: [], slots: [], events: [], methods: []},
    {name: "h2", desc: "", props: [], slots: [], events: [], methods: []},
    {name: "h3", desc: "", props: [], slots: [], events: [], methods: []},
    {name: "h4", desc: "", props: [], slots: [], events: [], methods: []},
    {name: "h5", desc: "", props: [], slots: [], events: [], methods: []},
    {name: "h6", desc: "", props: [], slots: [], events: [], methods: []},
    {name: "header", desc: "", props: [], slots: [], events: [], methods: []},
    {name: "nav", desc: "", props: [], slots: [], events: [], methods: []},
    {name: "article", desc: "", props: [], slots: [], events: [], methods: []},
    {name: "col", desc: "", props: [], slots: [], events: [], methods: []},
    {name: "table", desc: "", props: [], slots: [], events: [], methods: []},
    {name: "td", desc: "", props: [], slots: [], events: [], methods: []},
    {name: "th", desc: "", props: [], slots: [], events: [], methods: []},
    {name: "tbody", desc: "", props: [], slots: [], events: [], methods: []},
    {name: "thead", desc: "", props: [], slots: [], events: [], methods: []},
    {name: "tfoot", desc: "", props: [], slots: [], events: [], methods: []},
    {name: "img", desc: "", props: [], slots: [], events: [], methods: []},
    {name: "video", desc: "", props: [], slots: [], events: [], methods: []},
    {
        name: "q-ajax-bar", desc: "Ajax栏", props: [
            {
                name: "behavior", children: [
                    {name: "reverse", desc: "bool 反转进度条", example: []},
                    {name: "skip-hijack", desc: "bool 跳过Ajax hijacking", example: quasarBoolExample},
                ]
            },
            {
                name: "style", children: [
                    {name: "position", desc: "string 位置", example: ["top", "right", "bottom", "left"]},
                    {name: "size", desc: "string 大小", example: quasarFontSizeExample},
                    {name: "color", desc: "string 颜色", example: quasarColorsExample},
                ]
            }

        ],
        slots: [],
        events: [
            {name: "@start", desc: "@start -> function() 栏出现时触发", example: []},
            {name: "@stop", desc: "@start -> function() 栏结束时触发", example: []}
        ],
        methods: [
            {name: "start", desc: "start ([speed]) => Number 等待时通知", example: []},
            {name: "increment", desc: "increment ([amount]) => Number 手动触发增量", example: []},
            {name: "start", desc: "stop () => Number 完成后通知", example: []},
        ]
    },
    {
        name: "q-avatar", desc: "头像", props: [
            {
                name: "behavior", children: [{name: "icon", desc: "string material icon或url", example: []},]
            },
            {
                name: "style", children: [
                    {name: "size", desc: "string 大小", example: quasarAllSize},
                    {name: "font-size", desc: "string 文字大小", example: quasarFontSizeExample},
                    {name: "color", desc: "string 颜色", example: quasarColorsExample},
                    {name: "text-color", desc: "string text颜色", example: quasarColorsExample},
                    {name: "square", desc: "bool 方形", example: quasarBoolExample},
                    {name: "rounded", desc: "bool 圆角", example: quasarBoolExample},
                ]
            },
        ], slots: [
            {name: "default", desc: "覆盖img", example: []},
        ], events: [], methods: []
    },
    {
        name: "q-badge", desc: "标记", props: [
            {
                name: "content", children: [{name: "floating", desc: "bool 是否应该浮动到相对定位的父元素的右上角", example: quasarBoolExample},
                    {name: "multi-line", desc: "bool 内容可以换行到多行", example: quasarBoolExample},
                    {name: "label", desc: "string 字符", example: []},
                    {name: "align", desc: "string 位置", example: quasarAlignExample},]
            },
            {
                name: "style", children: [{name: "color", desc: "string 颜色", example: quasarColorsExample},
                    {name: "text-color", desc: "string text颜色", example: quasarColorsExample},
                    {name: "transparent", desc: "bool半透明", example: quasarBoolExample},
                    {name: "outline", desc: "bool外边框", example: quasarBoolExample},
                    {name: "rounded", desc: "bool圆角", example: quasarBoolExample},]
            },


        ], slots: [
            {name: "default", desc: "覆盖label", example: []},
        ], events: [], methods: []
    },
    {
        name: "q-banner", desc: "横幅", props: [
            {
                name: "content", children: [{name: "inline-actions", desc: "顶部文字", example: []},]
            },
            {
                name: "style", children: [{name: "dense", desc: "bool 密集模式", example: quasarColorsExample},
                    {name: "rounded", desc: "bool 圆角", example: quasarColorsExample},
                    {name: "dark", desc: "bool 深色", example: quasarColorsExample},]
            },


        ], slots: [
            {name: "default", desc: "string 内容去向", example: []},
            {name: "avatar", desc: "string 头像", example: []},
            {name: "action", desc: "string 操作", example: []},
        ], events: [], methods: []
    },
    {
        name: "q-bar", desc: "顶栏", props: [
            {
                name: "content", children: [{name: "dense", desc: "bool 密集模式", example: quasarColorsExample},
                    {name: "dark", desc: "bool 深色", example: quasarColorsExample},]
            },

        ], slots: [
            {name: "default", desc: "string 默认内容", example: []},
        ], events: [], methods: []
    },
    {
        name: "q-breadcrumbs", desc: "面包屑组", props: [
            {
                name: "content", children: [
                    {name: "separator", desc: "string 用于分隔痕迹导航的字符串", example: ["/", "-", ">"]},
                    {name: "gutter", desc: "string 装订线值允许您控制痕迹导航元素之间的空间", example: quasarSizeExample},
                    {name: "align", desc: "string 指定如何水平对齐痕迹导航", example: ["left", "right", "center", "around", "between", "evenly"]},
                ]
            },
            {
                name: "style", children: [
                    {name: "active-color", desc: "string 活动痕迹导航的颜色", example: []},
                    {name: "separator-color", desc: "string separator-color", example: []},

                ]
            },
        ],
        slots: [
            {name: "default", desc: "string 内容", example: []},
            {name: "separator", desc: "string separator", example: []},
        ],
        events: [], methods: []
    },
    {
        name: "q-breadcrumbs-el", desc: "面包屑", props: [
            {
                name: "content", children: [{name: "label", desc: "string 字符", example: []},
                    {name: "icon", desc: "string material icon或url", example: []},
                    {name: "tag", desc: "string html的tag", example: ["span", "div"]},]
            },
            {
                name: "nav", children: [{name: "to", desc: "string 字符", example: ["/home/dashboard", ":to={ name: 'my-route-name' }"]},
                    {name: "exact", desc: "bool  等同于 Vue Router 的 'exact' 属性", example: quasarBoolExample},
                    {name: "replace", desc: "bool  等同于 Vue Router 的 'replace' 属性", example: quasarBoolExample},
                    {name: "active-class", desc: "String\n  等同于 Vue Router 的 'active-class' 属性", example: []},
                    {name: "exact-active-class", desc: "String\n  等同于 Vue Router 的 'exact-active-class' 属性", example: []},
                    {name: "href", desc: "string  属性", example: []},
                    {name: "target", desc: "string  属性", example: ["_blank", "_self", "_parent", "_top"]},]
            },
            {
                name: "state", children: [{name: "disable", desc: "bool  禁用", example: quasarBoolExample},]
            },
        ], slots: [{name: "default", desc: "string 内容", example: []},], events: [{
            name: "@click", desc: "@click -> function(evt, go)", example: []
        },], methods: []
    },
    {
        name: "q-btn", desc: "按钮", props: [
            {
                name: "behavior", children: [
                    {name: "loading", desc: "bool 字符", example: quasarBoolExample},
                    {name: "percentage", desc: "number 1-100进度条", example: []},
                    {name: "dark-percentage", desc: "number 深色1-100进度条", example: []},]
            }, {
                name: "content", children: [{name: "label", desc: "string 字符", example: []},
                    {name: "icon", desc: "string material icon或url", example: []},
                    {name: "icon-right", desc: "string material icon或url", example: []},
                    {name: "no-caps", desc: "bool 取消自动大写", example: quasarBoolExample},
                    {name: "no-wrap", desc: "bool 避免标签文本换行", example: quasarBoolExample},
                    {name: "align", desc: "string 对齐", example: ["left", "right", "center", "around", "between", "evenly"]},
                    {name: "stack", desc: "bool 垂直堆叠图标和标签", example: quasarBoolExample},
                    {name: "stretch", desc: "bool 按钮将拉伸到父项的高度", example: quasarBoolExample},]
            }, {
                name: "general", children: [{name: "type", desc: "string 类型", example: ["button", "submit", "a", "reset"]},
                    {name: "tabindex", desc: "string html tabindex", example: ["0", "100",]},]
            },
            {
                name: "nav", children: [{name: "to", desc: "string 字符", example: ["/home/dashboard", ":to={ name: 'my-route-name' }"]},
                    {name: "exact", desc: "bool  等同于 Vue Router 的 'exact' 属性", example: quasarBoolExample},
                    {name: "replace", desc: "bool  等同于 Vue Router 的 'replace' 属性", example: quasarBoolExample},
                    {name: "href", desc: "string  属性", example: []},
                    {name: "target", desc: "string  属性", example: ["_blank", "_self", "_parent", "_top"]},]
            },
            {
                name: "state", children: [
                    {name: "loading", desc: "bool 字符", example: quasarBoolExample},
                    {name: "disable", desc: "bool  禁用", example: quasarBoolExample},
                ]
            },
            {
                name: "state", children: [{name: "size", desc: "string 大小", example: quasarAllSize},
                    {name: "outline", desc: "bool外边框", example: quasarBoolExample},
                    {name: "rounded", desc: "bool圆角", example: quasarBoolExample},
                    {name: "flat", desc: "bool 空心", example: quasarBoolExample},
                    {name: "unelevated", desc: "bool 移除阴影", example: quasarBoolExample},
                    {name: "push", desc: "bool push design", example: quasarBoolExample},
                    {name: "square", desc: "bool 方形", example: quasarBoolExample},
                    {name: "glossy", desc: "bool 光泽", example: quasarBoolExample},
                    {name: "fab", desc: "bool 使按钮大小和形状适合浮动操作按钮", example: quasarBoolExample},
                    {name: "fab-mini", desc: "bool 使按钮大小和形状适合浮动操作按钮", example: quasarBoolExample},
                    {name: "color", desc: "string 颜色", example: quasarColorsExample},
                    {name: "text-color", desc: "string text颜色", example: quasarColorsExample},
                    {name: "dense", desc: "bool 密集模式", example: quasarColorsExample},
                    {name: "ripple", desc: "string 波纹", example: quasarColorsExample},]
            },


        ], slots: [], events: [], methods: []
    },
    {name: "q-avatar", desc: "头像", props: [], slots: [], events: [], methods: []},
    {name: "q-avatar", desc: "头像", props: [], slots: [], events: [], methods: []},
    {name: "q-avatar", desc: "头像", props: [], slots: [], events: [], methods: []},
    {name: "q-avatar", desc: "头像", props: [], slots: [], events: [], methods: []},
    {name: "q-avatar", desc: "头像", props: [], slots: [], events: [], methods: []},
    {name: "q-avatar", desc: "头像", props: [], slots: [], events: [], methods: []},
    {name: "q-avatar", desc: "头像", props: [], slots: [], events: [], methods: []},
    {name: "q-avatar", desc: "头像", props: [], slots: [], events: [], methods: []},
    {name: "q-avatar", desc: "头像", props: [], slots: [], events: [], methods: []},
    {name: "q-avatar", desc: "头像", props: [], slots: [], events: [], methods: []},
    {name: "q-avatar", desc: "头像", props: [], slots: [], events: [], methods: []},
    {name: "q-avatar", desc: "头像", props: [], slots: [], events: [], methods: []},
    {name: "q-avatar", desc: "头像", props: [], slots: [], events: [], methods: []},
    {name: "q-avatar", desc: "头像", props: [], slots: [], events: [], methods: []},
    {name: "q-avatar", desc: "头像", props: [], slots: [], events: [], methods: []},
    {name: "q-avatar", desc: "头像", props: [], slots: [], events: [], methods: []},
    {name: "q-avatar", desc: "头像", props: [], slots: [], events: [], methods: []},
    {name: "q-avatar", desc: "头像", props: [], slots: [], events: [], methods: []},
    {name: "q-avatar", desc: "头像", props: [], slots: [], events: [], methods: []},
    {name: "q-avatar", desc: "头像", props: [], slots: [], events: [], methods: []},
    {name: "q-avatar", desc: "头像", props: [], slots: [], events: [], methods: []},
    {name: "q-avatar", desc: "头像", props: [], slots: [], events: [], methods: []},
    {name: "q-avatar", desc: "头像", props: [], slots: [], events: [], methods: []},
    {name: "q-avatar", desc: "头像", props: [], slots: [], events: [], methods: []},
    {name: "q-avatar", desc: "头像", props: [], slots: [], events: [], methods: []},
    {name: "q-avatar", desc: "头像", props: [], slots: [], events: [], methods: []},
    {name: "q-avatar", desc: "头像", props: [], slots: [], events: [], methods: []},
    {name: "q-avatar", desc: "头像", props: [], slots: [], events: [], methods: []},
    {name: "q-avatar", desc: "头像", props: [], slots: [], events: [], methods: []},
    {name: "q-avatar", desc: "头像", props: [], slots: [], events: [], methods: []},
    {name: "q-avatar", desc: "头像", props: [], slots: [], events: [], methods: []},
    {name: "q-avatar", desc: "头像", props: [], slots: [], events: [], methods: []},
    {name: "q-avatar", desc: "头像", props: [], slots: [], events: [], methods: []},
    {name: "q-avatar", desc: "头像", props: [], slots: [], events: [], methods: []},
    {name: "q-avatar", desc: "头像", props: [], slots: [], events: [], methods: []},
    {name: "q-avatar", desc: "头像", props: [], slots: [], events: [], methods: []},
    {name: "q-avatar", desc: "头像", props: [], slots: [], events: [], methods: []},
    {name: "q-avatar", desc: "头像", props: [], slots: [], events: [], methods: []},
    {name: "q-avatar", desc: "头像", props: [], slots: [], events: [], methods: []},
    {name: "q-avatar", desc: "头像", props: [], slots: [], events: [], methods: []},
    {name: "q-avatar", desc: "头像", props: [], slots: [], events: [], methods: []},
    {name: "q-avatar", desc: "头像", props: [], slots: [], events: [], methods: []},
    {name: "q-avatar", desc: "头像", props: [], slots: [], events: [], methods: []},
    {name: "q-avatar", desc: "头像", props: [], slots: [], events: [], methods: []},
    {name: "q-avatar", desc: "头像", props: [], slots: [], events: [], methods: []},
    {name: "q-avatar", desc: "头像", props: [], slots: [], events: [], methods: []},
    {name: "q-avatar", desc: "头像", props: [], slots: [], events: [], methods: []},
    {name: "q-avatar", desc: "头像", props: [], slots: [], events: [], methods: []},
    {name: "q-avatar", desc: "头像", props: [], slots: [], events: [], methods: []},
    {name: "q-avatar", desc: "头像", props: [], slots: [], events: [], methods: []},
    {name: "q-avatar", desc: "头像", props: [], slots: [], events: [], methods: []},

]
const size = {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "48",
}
// vue属性
export const vueAttrList = [
    {
        name: "条件", children: [
            {value: "v-if", desc: "条件渲染"},
            {value: "v-else", desc: ""},
            {value: "v-else-if", desc: ""},
            {value: "v-show", desc: ""},
        ]
    },
    {
        name: "列表", children: [
            {value: "v-for", desc: ""},
        ]
    },
    {
        name: "事件", children: [
            {value: "v-on", desc: ""},
            {value: "@", desc: ""},
            {value: "@click", desc: ""},
            {value: "@keyup", desc: ""},
            {value: "@keydown", desc: ""},
            {value: "@scroll", desc: ""},
        ]
    },
    {
        name: "表单", children: [
            {value: "v-model", desc: ""},
        ]
    },

]
export const ComponentAttr = [
    {
        name: "q-input", children: [
            {
                name: "行为", children: [
                    {name: "name", desc: "唯一id", example: ["user_id"]}
                ]
            }
        ]
    }
]
export const CssList: ICss[] = [
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
        name: "Quasar外边距", children: [
            {
                name: "margin-all", children: [
                    {value: "q-ma-none", desc: "margin-top: 0"},
                    {value: "q-ma-xs", desc: "margin: " + size.xs},
                    {value: "q-ma-sm", desc: "margin: " + size.sm},
                    {value: "q-ma-md", desc: "margin: " + size.md},
                    {value: "q-ma-lg", desc: "margin: " + size.lg},
                    {value: "q-ma-xl", desc: "margin: " + size.xl},
                ],
            },
            {
                name: "margin-x", children: [
                    {value: "q-mx-none", desc: "margin-left-right-top: 0"},
                    {value: "q-mx-xs", desc: "margin-left-right: " + size.xs},
                    {value: "q-mx-sm", desc: "margin-left-right: " + size.sm},
                    {value: "q-mx-md", desc: "margin-left-right: " + size.md},
                    {value: "q-mx-lg", desc: "margin-left-right: " + size.lg},
                    {value: "q-mx-xl", desc: "margin-left-right: " + size.xl},
                ],
            },
            {
                name: "margin-y", children: [
                    {value: "q-my-none", desc: "margin-top-bottom-top: 0"},
                    {value: "q-my-xs", desc: "margin-top-bottom: " + size.xs},
                    {value: "q-my-sm", desc: "margin-top-bottom: " + size.sm},
                    {value: "q-my-md", desc: "margin-top-bottom: " + size.md},
                    {value: "q-my-lg", desc: "margin-top-bottom: " + size.lg},
                    {value: "q-my-xl", desc: "margin-top-bottom: " + size.xl},
                ],
            },
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
        name: "Quasar内边距", children: [
            {
                name: "padding-all", children: [
                    {value: "q-pa-none", desc: "padding-top: 0"},
                    {value: "q-pa-xs", desc: "padding: " + size.xs},
                    {value: "q-pa-sm", desc: "padding: " + size.sm},
                    {value: "q-pa-md", desc: "padding: " + size.md},
                    {value: "q-pa-lg", desc: "padding: " + size.lg},
                    {value: "q-pa-xl", desc: "padding: " + size.xl},
                ],
            },
            {
                name: "padding-x", children: [
                    {value: "q-px-none", desc: "padding-left-right-top: 0"},
                    {value: "q-px-xs", desc: "padding-left-right: " + size.xs},
                    {value: "q-px-sm", desc: "padding-left-right: " + size.sm},
                    {value: "q-px-md", desc: "padding-left-right: " + size.md},
                    {value: "q-px-lg", desc: "padding-left-right: " + size.lg},
                    {value: "q-px-xl", desc: "padding-left-right: " + size.xl},
                ],
            },
            {
                name: "padding-y", children: [
                    {value: "q-py-none", desc: "padding-top-bottom-top: 0"},
                    {value: "q-py-xs", desc: "padding-top-bottom: " + size.xs},
                    {value: "q-py-sm", desc: "padding-top-bottom: " + size.sm},
                    {value: "q-py-md", desc: "padding-top-bottom: " + size.md},
                    {value: "q-py-lg", desc: "padding-top-bottom: " + size.lg},
                    {value: "q-py-xl", desc: "padding-top-bottom: " + size.xl},
                ],
            },
            {
                name: "padding-top", children: [
                    {value: "q-pt-none", desc: "padding-top: 0"},
                    {value: "q-pt-xs", desc: "padding-top: " + size.xs},
                    {value: "q-pt-sm", desc: "padding-top: " + size.sm},
                    {value: "q-pt-md", desc: "padding-top: " + size.md},
                    {value: "q-pt-lg", desc: "padding-top: " + size.lg},
                    {value: "q-pt-xl", desc: "padding-top: " + size.xl},
                ],
            },
            {
                name: "padding-bottom", children: [
                    {value: "q-pb-none", desc: "padding-bottom: 0"},
                    {value: "q-pb-xs", desc: "padding-bottom: " + size.xs},
                    {value: "q-pb-sm", desc: "padding-bottom: " + size.sm},
                    {value: "q-pb-md", desc: "padding-bottom: " + size.md},
                    {value: "q-pb-lg", desc: "padding-bottom: " + size.lg},
                    {value: "q-pb-xl", desc: "padding-bottom: " + size.xl},
                ],
            },
            {
                name: "padding-right", children: [
                    {value: "q-pr-none", desc: "padding-right: 0"},
                    {value: "q-pr-xs", desc: "padding-right: " + size.xs},
                    {value: "q-pr-sm", desc: "padding-right: " + size.sm},
                    {value: "q-pr-md", desc: "padding-right: " + size.md},
                    {value: "q-pr-lg", desc: "padding-right: " + size.lg},
                    {value: "q-pr-xl", desc: "padding-right: " + size.xl},
                ],
            },
            {
                name: "padding-left", children: [
                    {value: "q-ml-none", desc: "padding-left: 0"},
                    {value: "q-ml-xs", desc: "padding-left: " + size.xs},
                    {value: "q-ml-sm", desc: "padding-left: " + size.sm},
                    {value: "q-ml-md", desc: "padding-left: " + size.md},
                    {value: "q-ml-lg", desc: "padding-left: " + size.lg},
                    {value: "q-ml-xl", desc: "padding-left: " + size.xl},
                ],
            },
        ]
    },
    {
        name: "Quasar阴影", children: [
            {
                name: "底部阴影", children: [
                    {value: "no-shadow", desc: "移除任何阴影"},
                    {value: "inset-shadow", desc: "顶部插入阴影"},
                    {value: "inset-shadow-down", desc: "在顶部设置一个插入阴影"},
                    {value: "shadow-transition", desc: "在底部设置一个插入阴影"},
                    {value: "shadow-1", desc: "设置1的深度"},
                    {value: "shadow-2", desc: "设置2的深度"},
                    {value: "shadow-3", desc: "设置3的深度"},
                    {value: "shadow-4", desc: "设置4的深度"},
                    {value: "shadow-5", desc: "设置5的深度"},
                    {value: "shadow-6", desc: "设置6的深度"},
                    {value: "shadow-7", desc: "设置7的深度"},
                    {value: "shadow-8", desc: "设置8的深度"},
                    {value: "shadow-9", desc: "设置9的深度"},
                    {value: "shadow-10", desc: "设置10的深度"},
                    {value: "shadow-$", desc: "范围1-24"},
                ],
            },
            {
                name: "顶部阴影", children: [
                    {value: "shadow-up-1", desc: "设置1的深度"},
                    {value: "shadow-up-2", desc: "设置2的深度"},
                    {value: "shadow-up-3", desc: "设置3的深度"},
                    {value: "shadow-up-4", desc: "设置4的深度"},
                    {value: "shadow-up-5", desc: "设置5的深度"},
                    {value: "shadow-up-6", desc: "设置6的深度"},
                    {value: "shadow-up-7", desc: "设置7的深度"},
                    {value: "shadow-up-8", desc: "设置8的深度"},
                    {value: "shadow-up-9", desc: "设置9的深度"},
                    {value: "shadow-up-10", desc: "设置10的深度"},
                    {value: "shadow-up-$", desc: "范围1-24"},
                ],
            },
        ]
    },
    {
        name: "Quasar可见性", children: [
            {
                name: "DIV可见性", children: [
                    {value: "disabled", desc: "游标更改为“disable”，不透明度设置为较低值。"},
                    {value: "hidden", desc: "display:none"},
                    {value: "invisible", desc: "visibility:hidden"},
                    {value: "transparent", desc: "透明背景"},
                    {value: "dimmed", desc: "深色覆盖层"},
                    {value: "light-dimmed", desc: "白色覆盖层"},
                    {value: "ellipsis", desc: "显示省略号"},
                    {value: "ellipsis-2", desc: "显示省略号2行"},
                    {value: "ellipsis-3", desc: "显示省略号3行"},
                    {value: "z-top", desc: "置顶(不包括弹窗)"},
                    {value: "z-max", desc: "置顶(所有组件)"},
                ],
            },
            {
                name: "平台可见性", children: [
                    {value: "desktop-only", desc: "仅在桌面上可见"},
                    {value: "mobile-only", desc: "仅在移动设备上可见"},
                    {value: "native-mobile-only", desc: "仅在Cordova/Capacitor上可见"},
                    {value: "cordova-only", desc: "仅在Cordova/Capacitor上可见"},
                    {value: "capacitor-only", desc: "仅在Capacitor包装的应用上可见"},
                    {value: "electron-only", desc: "仅在Electron包装的应用上可见"},
                    {value: "touch-only", desc: "仅在具有触摸功能的平台上可见"},
                    {value: "platform-ios-only", desc: "仅在iOS平台上可见"},
                    {value: "platform-android-only", desc: "仅在Android平台上可见"},
                    {value: "within-iframe-only", desc: "仅当整个网站在IFRAME标记下时才可见"},
                ],
            },
            {
                name: "平台不可见性", children: [
                    {value: "desktop-hide", desc: "仅在桌面上隐藏"},
                    {value: "mobile-hide", desc: "仅在移动设备上隐藏"},
                    {value: "native-mobile-hide", desc: "仅在Cordova/Capacitor上隐藏"},
                    {value: "cordova-hide", desc: "仅在Cordova/Capacitor上隐藏"},
                    {value: "capacitor-hide", desc: "仅在Capacitor包装的应用上隐藏"},
                    {value: "electron-hide", desc: "仅在Electron包装的应用上隐藏"},
                    {value: "touch-hide", desc: "仅在具有触摸功能的平台上隐藏"},
                    {value: "platform-ios-hide", desc: "仅在iOS平台上隐藏"},
                    {value: "platform-android-hide", desc: "仅在Android平台上隐藏"},
                    {value: "within-iframe-hide", desc: "仅当整个网站在IFRAME标记下时才隐藏"},
                ],
            },
            {
                name: "方向/打印", children: [
                    {value: "orientation-portrait", desc: "仅当屏幕方向为纵向时才可见"},
                    {value: "orientation-landscape", desc: "仅当屏幕方向为横向时才可见"},
                    {value: "print-only", desc: "仅在打印媒体上可见 - 在屏幕媒体隐藏"},
                    {value: "print-hide", desc: "屏幕媒体上可见 - 在打印媒体隐藏"},
                ],
            },
        ]
    },
    {
        name: "Quasar定位", children: [
            {
                name: "定位", children: [
                    {value: "fullscreen", desc: "全屏"},
                    {value: "fixed", desc: "position:fixed"},
                    {value: "fixed-center", desc: "position:fixed center"},
                ],
            },
            {
                name: "固定定位", children: [
                    {value: "fixed-top", desc: "固定定位在屏幕顶部"},
                    {value: "fixed-right", desc: "固定定位在屏幕右边缘"},
                    {value: "fixed-bottom", desc: "固定定位在屏幕底部"},
                    {value: "fixed-left", desc: "固定定位在屏幕左边缘"},
                    {value: "fixed-top-left", desc: "固定定位在屏幕左上角"},
                    {value: "fixed-top-right", desc: "固定定位在屏幕右上角"},
                    {value: "fixed-bottom-left", desc: "固定定位在屏幕左下角"},
                    {value: "fixed-bottom-right", desc: "固定定位在屏幕右下角"},
                    {value: "fixed-full", desc: "从固定位置继承边框半径到所有屏幕边缘元素"},
                ],
            },
            {
                name: "绝对定位", children: [
                    {value: "absolute-top", desc: "绝对定位在屏幕顶部"},
                    {value: "absolute-right", desc: "绝对定位在屏幕右边缘"},
                    {value: "absolute-bottom", desc: "绝对定位在屏幕底部"},
                    {value: "absolute-left", desc: "绝对定位在屏幕左边缘"},
                    {value: "absolute-top-left", desc: "绝对定位在屏幕左上角"},
                    {value: "absolute-top-right", desc: "绝对定位在屏幕右上角"},
                    {value: "absolute-bottom-left", desc: "绝对定位在屏幕左下角"},
                    {value: "absolute-bottom-right", desc: "绝对定位在屏幕右下角"},
                    {value: "absolute-full", desc: "从绝对位置继承边框半径到所有屏幕边缘元素"},
                ],
            },
            {
                name: "对齐", children: [
                    {value: "float-left", desc: "float:left"},
                    {value: "float-right", desc: "float:right"},
                    {value: "on-left", desc: "在右侧设置一个小边距;通常用于有兄弟元素的图标元素"},
                    {value: "on-right", desc: "在左侧设置一个小边距;通常用于有兄弟元素的图标元素"},
                    {value: "vertical-top", desc: "vertical-align:top"},
                    {value: "vertical-middle", desc: "vertical-align:middle"},
                    {value: "vertical-bottom", desc: "vertical-align:bottom"},
                ],
            },
        ]
    },
    {
        name: "布局", children: [
            {
                name: "比例", children: [
                    {value: "aspect-auto", desc: "aspect-ratio: auto"},
                    {value: "aspect-square", desc: "aspect-ratio: 1 / 1"},
                    {value: "aspect-video", desc: "aspect-ratio: 16 / 9"},
                ],
            },
            {
                name: "容器大小", children: [
                    {value: "None", desc: "width: 100%;"},
                    {value: "sm:$", desc: "max-width: 640px;"},
                    {value: "md:$", desc: "max-width: 768px;"},
                    {value: "lg:$", desc: "max-width: 1024px;"},
                    {value: "xl:$", desc: "max-width: 1280px;"},
                    {value: "2xl:$", desc: "max-width: 1536px;"},

                ],
            },
            {
                name: "Columns列", children: [
                    {value: "columns-1", desc: "columns: 1;"},
                    {value: "columns-2", desc: "columns: 2;"},
                    {value: "columns-3", desc: "columns: 3;"},
                    {value: "columns-4", desc: "columns: 4;"},
                    {value: "columns-5", desc: "columns: 5;"},
                    {value: "columns-6", desc: "columns: 6;"},
                    {value: "columns-auto", desc: "columns: auto;"},
                    {value: "columns-3xs", desc: "columns: 16rem;"},
                    {value: "columns-2xs", desc: "columns: 10rem;"},
                    {value: "columns-xs", desc: "columns: 24rem;"},
                    {value: "columns-md", desc: "columns: 28rem;"},
                    {value: "columns-lg", desc: "columns: 32rem;"},
                    {value: "columns-xl", desc: "columns: 36rem;"},
                    {value: "columns-2xl", desc: "columns: 42rem;"},
                    {value: "columns-3xl", desc: "columns: 48rem;"},
                ],
            },
            {
                name: "装饰切片", children: [
                    {value: "box-decoration-clone", desc: "box-decoration-break: clone;"},
                    {value: "box-decoration-slice", desc: "box-decoration-break: slice;"},

                ],
            },
            {
                name: "包装盒尺寸", children: [
                    {value: "box-border", desc: "box-sizing: border-box;(包括)"},
                    {value: "box-content", desc: "box-sizing: content-box;(不包括)"},
                ],
            },
            {
                name: "display", children: [
                    {value: "block", desc: "display: block;"},
                    {value: "inline-block", desc: "display: inline-block;"},
                    {value: "inline", desc: "display: inline;"},
                    {value: "flex", desc: "display: flex;"},
                    {value: "inline-flex", desc: "display: inline-flex;"},
                    {value: "table", desc: "display: table;"},
                    {value: "grid", desc: "display: grid;"},
                    {value: "inline-grid", desc: "display: inline-grid;"},
                    {value: "contents", desc: "display: contents;"},
                    {value: "list-item", desc: "display: list-item;"},
                    {value: "hidden", desc: "display: none;"},
                ],
            },
            {
                name: "float浮动", children: [
                    {value: "float-start", desc: "float: inline-start;"},
                    {value: "float-end", desc: "float: inline-end;"},
                    {value: "float-right", desc: "float: right;"},
                    {value: "float-left", desc: "float: left;"},
                    {value: "float-none", desc: "float: none;"},
                ],
            },
            {
                name: "clear清除浮动", children: [
                    {value: "clear-start", desc: "clear: inline-start;"},
                    {value: "clear-end", desc: "clear: inline-end;"},
                    {value: "clear-left", desc: "clear: left;"},
                    {value: "clear-right", desc: "clear: right;"},
                    {value: "clear-both", desc: "clear: both;"},
                    {value: "clear-none", desc: "clear: none;"},
                ],
            },
            {
                name: "堆叠上下文", children: [
                    {value: "isolate", desc: "isolation: isolate;"},
                    {value: "isolation-auto", desc: "isolation: auto;"},
                ],
            },
            {
                name: "对象拟合", children: [
                    {value: "object-contain", desc: "object-fit: contain;"},
                    {value: "object-cover", desc: "object-fit: cover;"},
                    {value: "object-fill", desc: "object-fit: fill;"},
                    {value: "object-none", desc: "object-fit: none;"},
                    {value: "object-scale-down", desc: "object-fit: scale-down;"},
                ],
            },
            {
                name: "定位替换元素", children: [
                    {value: "object-bottom", desc: "object-position: bottom;"},
                    {value: "object-center", desc: "object-position: center;"},
                    {value: "object-left", desc: "object-position: left;"},
                    {value: "object-left-bottom", desc: "object-position: left bottom;"},
                    {value: "object-left-top", desc: "object-position: left top;"},
                    {value: "object-right", desc: "object-position: right;"},
                    {value: "object-right-bottom", desc: "object-position: right bottom;"},
                    {value: "object-right-top", desc: "object-position: right top;"},
                    {value: "object-top", desc: "object-position: top;"}
                ],
            },
            {
                name: "overflow溢出", children: [
                    {"value": "overflow-auto", "desc": "overflow: auto;"},
                    {"value": "overflow-hidden", "desc": "overflow: hidden;"},
                    {"value": "overflow-clip", "desc": "overflow: clip;"},
                    {"value": "overflow-visible", "desc": "overflow: visible;"},
                    {"value": "overflow-scroll", "desc": "overflow: scroll;"},
                    {"value": "overflow-x-auto", "desc": "overflow-x: auto;"},
                    {"value": "overflow-y-auto", "desc": "overflow-y: auto;"},
                    {"value": "overflow-x-hidden", "desc": "overflow-x: hidden;"},
                    {"value": "overflow-y-hidden", "desc": "overflow-y: hidden;"},
                    {"value": "overflow-x-clip", "desc": "overflow-x: clip;"},
                    {"value": "overflow-x-visible", "desc": "overflow-x: visible;"},
                    {"value": "overflow-y-visible", "desc": "overflow-y: visible;"},
                    {"value": "overflow-x-scroll", "desc": "overflow-x: scroll;"},
                    {"value": "overflow-y-scroll", "desc": "overflow-y: scroll;"},
                ],
            },
            {
                name: "overScroll滚动", children: [
                    {
                        "value": "overscroll-auto",
                        "desc": "overscroll-behavior:"
                    },
                    {
                        "value": "overscroll-contain",
                        "desc": "overscroll-behavior:"
                    },
                    {
                        "value": "overscroll-none",
                        "desc": "overscroll-behavior:"
                    },
                    {
                        "value": "overscroll-y-auto",
                        "desc": "overscroll-behavior-y:"
                    },
                    {
                        "value": "overscroll-y-contain",
                        "desc": "overscroll-behavior-y:"
                    },
                    {
                        "value": "overscroll-y-none",
                        "desc": "overscroll-behavior-y:"
                    },
                    {
                        "value": "overscroll-x-auto",
                        "desc": "overscroll-behavior-x:"
                    },
                    {
                        "value": "overscroll-x-contain",
                        "desc": "overscroll-behavior-x:"
                    },
                    {
                        "value": "overscroll-x-none",
                        "desc": "overscroll-behavior-x:"
                    }
                ],
            },
            {
                name: "position位置", children: [
                    {
                        "value": "static",
                        "desc": "position:"
                    },
                    {
                        "value": "fixed",
                        "desc": "position:"
                    },
                    {
                        "value": "absolute",
                        "desc": "position:"
                    },
                    {
                        "value": "relative",
                        "desc": "position:"
                    },
                    {
                        "value": "sticky",
                        "desc": "position:"
                    }
                ],
            }
            ,
            {
                name: "position位置", children: [
                    {
                        "value": "static",
                        "desc": "position:"
                    },
                    {
                        "value": "fixed",
                        "desc": "position:"
                    },
                    {
                        "value": "absolute",
                        "desc": "position:"
                    },
                    {
                        "value": "relative",
                        "desc": "position:"
                    },
                    {
                        "value": "sticky",
                        "desc": "position:"
                    },
                    {
                        "value": "bottom-0",
                        "desc": "bottom: 0px;"
                    },
                    {
                        "value": "left-0",
                        "desc": "left: 0px;"
                    },
                    {
                        "value": "inset-px",
                        "desc": "inset: 1px;"
                    }
                ],
            },
            {
                name: "visibility可见性", children: [
                    {
                        "value": "visible",
                        "desc": "visibility: visible;"
                    },
                    {
                        "value": "invisible",
                        "desc": "visibility: hidden;"
                    },
                    {
                        "value": "collapse",
                        "desc": "visibility: collapse;"
                    }
                ],
            },
            {
                name: "可见性", children: [
                    {
                        "value": "visible",
                        "desc": "visibility: visible;"
                    },
                    {
                        "value": "invisible",
                        "desc": "visibility: hidden;"
                    },
                    {
                        "value": "collapse",
                        "desc": "visibility: collapse;"
                    }
                ]
            }
        ]
    },
    {
        name: "flexBox Gird", children: [
            {
                name: "flex", children: [
                    {
                        "value": "basis-0",
                        "desc": "flex-basis: 0px;"
                    },
                    {
                        "value": "basis-1",
                        "desc": "flex-basis: 0.25rem; /* 4px */"
                    },
                    {
                        "value": "basis-2",
                        "desc": "flex-basis: 0.5rem; /* 8px */"
                    },
                    {
                        "value": "basis-3",
                        "desc": "flex-basis: 0.75rem; /* 12px */"
                    },
                    {
                        "value": "basis-4",
                        "desc": "flex-basis: 1rem; /* 16px */"
                    },
                    {
                        "value": "basis-5",
                        "desc": "flex-basis: 1.25rem; /* 20px */"
                    },
                    {
                        "value": "basis-0.5",
                        "desc": "flex-basis: 0.125rem; /* 2px */"
                    },
                    {
                        "value": "basis-1.5",
                        "desc": "flex-basis: 0.375rem; /* 6px */"
                    },
                    {
                        "value": "basis-2.5",
                        "desc": "flex-basis: 0.625rem; /* 10px */"
                    },
                    {
                        "value": "basis-3.5",
                        "desc": "flex-basis: 0.875rem; /* 14px */"
                    },
                    {
                        "value": "basis-full",
                        "desc": "flex-basis: 100%;"
                    }
                ],
            },
            {
                name: "Flex Direction", children: [
                    {
                        "value": "flex-row",
                        "desc": "flex-direction: row;"
                    },
                    {
                        "value": "flex-row-reverse",
                        "desc": "flex-direction: row-reverse;"
                    },
                    {
                        "value": "flex-col",
                        "desc": "flex-direction: column;"
                    },
                    {
                        "value": "flex-col-reverse",
                        "desc": "flex-direction: column-reverse;"
                    }
                ],
            },
            {
                name: "flex wrap", children: [
                    {
                        "value": "flex-wrap",
                        "desc": "flex-wrap: wrap;"
                    },
                    {
                        "value": "flex-wrap-reverse",
                        "desc": "flex-wrap: wrap-reverse;"
                    },
                    {
                        "value": "flex-nowrap",
                        "desc": "flex-wrap: nowrap;"
                    }
                ],
            },
            {
                name: "Flex", children: [
                    {
                        "value": "flex-1",
                        "desc": "flex: 1 1 0%;"
                    },
                    {
                        "value": "flex-auto",
                        "desc": "flex: 1 1 auto;"
                    },
                    {
                        "value": "flex-initial",
                        "desc": "flex: 0 1 auto;"
                    },
                    {
                        "value": "flex-none",
                        "desc": "flex: none;"
                    }
                ],
            },
            {
                name: "Flex Grow", children: [
                    {
                        "value": "grow",
                        "desc": "flex-grow: 1;"
                    },
                    {
                        "value": "grow-0",
                        "desc": "flex-grow: 0;"
                    }
                ],
            }, {
                name: "Flex Shrink", children: [
                    {
                        "value": "shrink",
                        "desc": "flex-shrink: 1;"
                    },
                    {
                        "value": "shrink-0",
                        "desc": "flex-shrink: 0;"
                    }
                ],
            }, {
                name: "Order", children: [
                    {
                        "value": "order-1",
                        "desc": "order: 1;"
                    },
                    {
                        "value": "order-2",
                        "desc": "order: 2;"
                    },
                    {
                        "value": "order-3",
                        "desc": "order: 3;"
                    },
                    {
                        "value": "order-4",
                        "desc": "order: 4;"
                    },
                    {
                        "value": "order-5",
                        "desc": "order: 5;"
                    },
                    {
                        "value": "order-6",
                        "desc": "order: 6;"
                    }
                ],
            }, {
                name: "Grid Template Columns", children: [
                    {
                        "value": "grid-cols-1",
                        "desc": "grid-template-columns: repeat(1, minmax(0, 1fr));"
                    },
                    {
                        "value": "grid-cols-2",
                        "desc": "grid-template-columns: repeat(2, minmax(0, 1fr));"
                    },
                    {
                        "value": "grid-cols-3",
                        "desc": "grid-template-columns: repeat(3, minmax(0, 1fr));"
                    },
                    {
                        "value": "grid-cols-4",
                        "desc": "grid-template-columns: repeat(4, minmax(0, 1fr));"
                    },
                    {
                        "value": "grid-cols-5",
                        "desc": "grid-template-columns: repeat(5, minmax(0, 1fr));"
                    },
                    {
                        "value": "grid-cols-6",
                        "desc": "grid-template-columns: repeat(6, minmax(0, 1fr));"
                    }
                ],
            }, {
                name: "Grid Column Start / End", children: [
                    {
                        "value": "col-auto",
                        "desc": "grid-column: auto;"
                    },
                    {
                        "value": "col-span-1",
                        "desc": "grid-column: span 1 / span 1;"
                    },
                    {
                        "value": "col-span-2",
                        "desc": "grid-column: span 2 / span 2;"
                    },
                    {
                        "value": "col-span-3",
                        "desc": "grid-column: span 3 / span 3;"
                    },
                    {
                        "value": "col-span-4",
                        "desc": "grid-column: span 4 / span 4;"
                    },
                    {
                        "value": "col-span-5",
                        "desc": "grid-column: span 5 / span 5;"
                    }
                ],
            }, {
                name: "Grid Template Rows", children: [
                    {
                        "value": "grid-rows-1",
                        "desc": "grid-template-rows: repeat(1, minmax(0, 1fr));"
                    },
                    {
                        "value": "grid-rows-2",
                        "desc": "grid-template-rows: repeat(2, minmax(0, 1fr));"
                    },
                    {
                        "value": "grid-rows-3",
                        "desc": "grid-template-rows: repeat(3, minmax(0, 1fr));"
                    },
                    {
                        "value": "grid-rows-4",
                        "desc": "grid-template-rows: repeat(4, minmax(0, 1fr));"
                    },
                    {
                        "value": "grid-rows-5",
                        "desc": "grid-template-rows: repeat(5, minmax(0, 1fr));"
                    },
                    {
                        "value": "grid-rows-6",
                        "desc": "grid-template-rows: repeat(6, minmax(0, 1fr));"
                    }
                ],
            }, {
                name: "Grid Row Start / End", children: [
                    {
                        "value": "row-auto",
                        "desc": "grid-row: auto;"
                    },
                    {
                        "value": "row-span-1",
                        "desc": "grid-row: span 1 / span 1;"
                    },
                    {
                        "value": "row-span-2",
                        "desc": "grid-row: span 2 / span 2;"
                    },
                    {
                        "value": "row-span-3",
                        "desc": "grid-row: span 3 / span 3;"
                    },
                    {
                        "value": "row-span-4",
                        "desc": "grid-row: span 4 / span 4;"
                    },
                    {
                        "value": "row-span-5",
                        "desc": "grid-row: span 5 / span 5;"
                    }
                ],
            }, {
                name: "Grid Auto Flow", children: [
                    {
                        "value": "grid-flow-row",
                        "desc": "grid-auto-flow: row;"
                    },
                    {
                        "value": "grid-flow-col",
                        "desc": "grid-auto-flow: column;"
                    },
                    {
                        "value": "grid-flow-dense",
                        "desc": "grid-auto-flow: dense;"
                    },
                    {
                        "value": "grid-flow-row-dense",
                        "desc": "grid-auto-flow: row dense;"
                    },
                    {
                        "value": "grid-flow-col-dense",
                        "desc": "grid-auto-flow: column dense;"
                    }
                ],
            }, {
                name: "Grid Auto Columns", children: [
                    {
                        "value": "auto-cols-auto",
                        "desc": "grid-auto-columns: auto;"
                    },
                    {
                        "value": "auto-cols-min",
                        "desc": "grid-auto-columns: min-content;"
                    },
                    {
                        "value": "auto-cols-max",
                        "desc": "grid-auto-columns: max-content;"
                    },
                    {
                        "value": "auto-cols-fr",
                        "desc": "grid-auto-columns: minmax(0, 1fr);"
                    }
                ],
            }, {
                name: "Grid Auto Rows", children: [
                    {value: "demo1", desc: "demo"},
                ],
            },
            {
                name: "Gap", children: [
                    {
                        "value": "gap-0",
                        "desc": "gap: 0px;"
                    },
                    {
                        "value": "gap-x-0",
                        "desc": "column-gap: 0px;"
                    },
                    {
                        "value": "gap-y-0",
                        "desc": "row-gap: 0px;"
                    },
                    {
                        "value": "gap-px",
                        "desc": "gap: 1px;"
                    },
                    {
                        "value": "gap-x-px",
                        "desc": "column-gap: 1px;"
                    },
                    {
                        "value": "gap-y-px",
                        "desc": "row-gap: 1px;"
                    }
                ],
            }, {
                name: "Justify Content", children: [
                    {
                        "value": "justify-normal",
                        "desc": "justify-content: normal;"
                    },
                    {
                        "value": "justify-start",
                        "desc": "justify-content: flex-start;"
                    },
                    {
                        "value": "justify-end",
                        "desc": "justify-content: flex-end;"
                    },
                    {
                        "value": "justify-center",
                        "desc": "justify-content: center;"
                    },
                    {
                        "value": "justify-between",
                        "desc": "justify-content: space-between;"
                    },
                    {
                        "value": "justify-around",
                        "desc": "justify-content: space-around;"
                    },
                    {
                        "value": "justify-evenly",
                        "desc": "justify-content: space-evenly;"
                    },
                    {
                        "value": "justify-stretch",
                        "desc": "justify-content: stretch;"
                    }
                ],
            }, {
                name: "Justify Items", children: [
                    {
                        "value": "justify-items-start",
                        "desc": "justify-items: start;"
                    },
                    {
                        "value": "justify-items-end",
                        "desc": "justify-items: end;"
                    },
                    {
                        "value": "justify-items-center",
                        "desc": "justify-items: center;"
                    },
                    {
                        "value": "justify-items-stretch",
                        "desc": "justify-items: stretch;"
                    }
                ],
            }, {
                name: "Justify Self", children: [
                    {
                        "value": "justify-self-auto",
                        "desc": "justify-self: auto;"
                    },
                    {
                        "value": "justify-self-start",
                        "desc": "justify-self: start;"
                    },
                    {
                        "value": "justify-self-end",
                        "desc": "justify-self: end;"
                    },
                    {
                        "value": "justify-self-center",
                        "desc": "justify-self: center;"
                    },
                    {
                        "value": "justify-self-stretch",
                        "desc": "justify-self: stretch;"
                    }
                ],
            }, {
                name: "Align Content", children: [
                    {
                        "value": "content-normal",
                        "desc": "align-content: normal;"
                    },
                    {
                        "value": "content-center",
                        "desc": "align-content: center;"
                    },
                    {
                        "value": "content-start",
                        "desc": "align-content: flex-start;"
                    },
                    {
                        "value": "content-end",
                        "desc": "align-content: flex-end;"
                    },
                    {
                        "value": "content-between",
                        "desc": "align-content: space-between;"
                    },
                    {
                        "value": "content-around",
                        "desc": "align-content: space-around;"
                    },
                    {
                        "value": "content-evenly",
                        "desc": "align-content: space-evenly;"
                    },
                    {
                        "value": "content-baseline",
                        "desc": "align-content: baseline;"
                    },
                    {
                        "value": "content-stretch",
                        "desc": "align-content: stretch;"
                    }
                ],
            }, {
                name: "Align Items", children: [
                    {
                        "value": "items-start",
                        "desc": "align-items: flex-start;"
                    },
                    {
                        "value": "items-end",
                        "desc": "align-items: flex-end;"
                    },
                    {
                        "value": "items-center",
                        "desc": "align-items: center;"
                    },
                    {
                        "value": "items-baseline",
                        "desc": "align-items: baseline;"
                    },
                    {
                        "value": "items-stretch",
                        "desc": "align-items: stretch;"
                    }
                ],
            }, {
                name: "Align Self", children: [
                    {
                        "value": "self-auto",
                        "desc": "align-self: auto;"
                    },
                    {
                        "value": "self-start",
                        "desc": "align-self: flex-start;"
                    },
                    {
                        "value": "self-end",
                        "desc": "align-self: flex-end;"
                    },
                    {
                        "value": "self-center",
                        "desc": "align-self: center;"
                    },
                    {
                        "value": "self-stretch",
                        "desc": "align-self: stretch;"
                    },
                    {
                        "value": "self-baseline",
                        "desc": "align-self: baseline;"
                    }
                ],
            }, {
                name: "Place Content", children: [
                    {
                        "value": "content-normal",
                        "desc": "place-content: normal;"
                    },
                    {
                        "value": "content-center",
                        "desc": "place-content: center;"
                    },
                    {
                        "value": "content-start",
                        "desc": "place-content: flex-start;"
                    },
                    {
                        "value": "content-end",
                        "desc": "place-content: flex-end;"
                    },
                    {
                        "value": "content-between",
                        "desc": "place-content: space-between;"
                    },
                    {
                        "value": "content-around",
                        "desc": "place-content: space-around;"
                    },
                    {
                        "value": "content-evenly",
                        "desc": "place-content: space-evenly;"
                    },
                    {
                        "value": "content-stretch",
                        "desc": "place-content: stretch;"
                    }
                ],
            }, {
                name: "Place Items", children: [
                    {value: "demo1", desc: "demo"},
                ],
            }, {
                name: "demo", children: [
                    {
                        "value": "items-auto",
                        "desc": "place-items: auto auto;"
                    },
                    {
                        "value": "items-start",
                        "desc": "place-items: start start;"
                    },
                    {
                        "value": "items-end",
                        "desc": "place-items: end end;"
                    },
                    {
                        "value": "items-center",
                        "desc": "place-items: center center;"
                    },
                    {
                        "value": "items-stretch",
                        "desc": "place-items: stretch stretch;"
                    }
                ],
            },
            {
                name: "Place Self", children: [
                    {
                        "value": "self-auto",
                        "desc": "place-self: auto auto;"
                    },
                    {
                        "value": "self-start",
                        "desc": "place-self: start start;"
                    },
                    {
                        "value": "self-end",
                        "desc": "place-self: end end;"
                    },
                    {
                        "value": "self-center",
                        "desc": "place-self: center center;"
                    },
                    {
                        "value": "self-stretch",
                        "desc": "place-self: stretch stretch;"
                    }
                ],
            },
        ]
    },
    {
        name: "间隔", children: [
            {
                name: "Padding", children: [
                    {
                        "value": "padding",
                        "desc": "0px"
                    },
                    {
                        "value": "padding-left, padding-right",
                        "desc": "0px"
                    },
                    {
                        "value": "padding-top, padding-bottom",
                        "desc": "0px"
                    },
                    {
                        "value": "padding-inline-start",
                        "desc": "0px"
                    },
                    {
                        "value": "padding-inline-end",
                        "desc": "0px"
                    },
                    {
                        "value": "padding-top",
                        "desc": "0px"
                    },
                    {
                        "value": "padding-right",
                        "desc": "0px"
                    }
                ],
            },
            {
                name: "Margin", children: [
                    {
                        "value": "margin",
                        "desc": "0px"
                    },
                    {
                        "value": "margin-left",
                        "desc": "0px"
                    },
                    {
                        "value": "margin-right",
                        "desc": "0px"
                    },
                    {
                        "value": "margin-top",
                        "desc": "0px"
                    },
                    {
                        "value": "margin-bottom",
                        "desc": "0px"
                    },
                    {
                        "value": "margin-inline-start",
                        "desc": "0px"
                    },
                    {
                        "value": "margin-inline-end",
                        "desc": "0px"
                    },
                    {
                        "value": "margin-top",
                        "desc": "0px"
                    },
                    {
                        "value": "margin-right",
                        "desc": "0px"
                    }
                ],
            },
            {
                name: "Space Between", children: [
                    {
                        "value": "space-x-0",
                        "desc": "0px",
                    },
                    {
                        "value": "space-y-0",
                        "desc": "0px",
                    },
                    {
                        "value": "space-x-0.5",
                        "desc": "0.125rem",
                    },
                    {
                        "value": "space-y-0.5",
                        "desc": "0.125rem",
                    },
                    {
                        "value": "space-x-1",
                        "desc": "0.25rem",
                    },
                    {
                        "value": "space-y-1 ",
                        "desc": "0.25rem",
                    },
                ],
            },
        ]
    },
    {
        name: "尺寸", children: [
            {
                name: "Width", children: [
                    {"value": "w-0", "desc": "width: 0px"},
                    {"value": "w-px", "desc": "width: 1px"},
                    {"value": "w-0.5", "desc": "width: 0.125rem /* 2px */"},
                    {"value": "w-1", "desc": "width: 0.25rem /* 4px */"},
                    {"value": "w-1.5", "desc": "width: 0.375rem /* 6px */"},
                    {"value": "w-2", "desc": "width: 0.5rem /* 8px */"},
                    {"value": "w-2.5", "desc": "width: 0.625rem /* 10px */"},
                    {"value": "w-3", "desc": "width: 0.75rem /* 12px */"}
                ],
            },
            {
                name: "Min-Width", children: [
                    {"value": "min-w-0", "desc": "min-width: 0px"},
                    {"value": "min-w-1", "desc": "min-width: 0.25rem /* 4px */"},
                    {"value": "min-w-2", "desc": "min-width: 0.5rem /* 8px */"},
                    {"value": "min-w-3", "desc": "min-width: 0.75rem /* 12px */"},
                    {"value": "min-w-4", "desc": "min-width: 1rem /* 16px */"},
                    {"value": "min-w-5", "desc": "min-width: 1.25rem /* 20px */"},
                    {"value": "min-w-6", "desc": "min-width: 1.5rem /* 24px */"},
                    {"value": "min-w-7", "desc": "min-width: 1.75rem /* 28px */"}
                ],
            },
            {
                name: "Max-Width", children: [
                    {"value": "max-w-0", "desc": "max-width: 0px"},
                    {"value": "max-w-px", "desc": "max-width: 1px"},
                    {"value": "max-w-0.5", "desc": "max-width: 0.125rem /* 2px */"},
                    {"value": "max-w-1", "desc": "max-width: 0.25rem /* 4px */"},
                    {"value": "max-w-1.5", "desc": "max-width: 0.375rem /* 6px */"},
                    {"value": "max-w-2", "desc": "max-width: 0.5rem /* 8px */"},
                    {"value": "max-w-2.5", "desc": "max-width: 0.625rem /* 10px */"},
                    {"value": "max-w-3", "desc": "max-width: 0.75rem /* 12px */"}
                ],
            },
            {
                name: "Height", children: [
                    {"value": "h-0", "desc": "height: 0px"},
                    {"value": "h-px", "desc": "height: 1px"},
                    {"value": "h-0.5", "desc": "height: 0.125rem /* 2px */"},
                    {"value": "h-1", "desc": "height: 0.25rem /* 4px */"},
                    {"value": "h-1.5", "desc": "height: 0.375rem /* 6px */"},
                    {"value": "h-2", "desc": "height: 0.5rem /* 8px */"},
                    {"value": "h-2.5", "desc": "height: 0.625rem /* 10px */"},
                    {"value": "h-3", "desc": "height: 0.75rem /* 12px */"}
                ],
            },
            {
                name: "Min-Height", children: [
                    {"value": "min-h-0", "desc": "min-height: 0px"},
                    {"value": "min-h-1", "desc": "min-height: 0.25rem /* 4px */"},
                    {"value": "min-h-2", "desc": "min-height: 0.5rem /* 8px */"},
                    {"value": "min-h-3", "desc": "min-height: 0.75rem /* 12px */"},
                    {"value": "min-h-4", "desc": "min-height: 1rem /* 16px */"},
                    {"value": "min-h-5", "desc": "min-height: 1.25rem /* 20px */"},
                    {"value": "min-h-6", "desc": "min-height: 1.5rem /* 24px */"}
                ],
            },
            {
                name: "Max-Height", children: [
                    {"value": "max-h-0", "desc": "max-height: 0px"},
                    {"value": "max-h-px", "desc": "max-height: 1px"},
                    {"value": "max-h-0.5", "desc": "max-height: 0.125rem /* 2px */"},
                    {"value": "max-h-1", "desc": "max-height: 0.25rem /* 4px */"},
                    {"value": "max-h-1.5", "desc": "max-height: 0.375rem /* 6px */"},
                    {"value": "max-h-2", "desc": "max-height: 0.5rem /* 8px */"},
                    {"value": "max-h-2.5", "desc": "max-height: 0.625rem /* 10px */"}
                ],
            },
            {
                name: "size", children: [
                    {"value": "size-0", "desc": "width: 0px;height: 0px"},
                    {"value": "size-px", "desc": "width: 1px;height: 1px"},
                    {"value": "size-0.5", "desc": "width: 0.125rem /* 2px */height: 0.125rem /* 2px */"},
                    {"value": "size-1", "desc": "width: 0.25rem /* 4px */height: 0.25rem /* 4px */"},
                    {"value": "size-1.5", "desc": "width: 0.375rem /* 6px */height: 0.375rem /* 6px */"},
                    {"value": "size-2", "desc": "width: 0.5rem /* 8px */height: 0.5rem /* 8px */"},
                    {"value": "size-2.5", "desc": "width: 0.625rem /* 10px */height: 0.625rem /* 10px */"}
                ]
            }
        ]
    },
    {
        name: "排版", children: [
            {
                name: "Font Family", children: [
                    {
                        value: "font-sans",
                        desc: "font-family: ui-sans-serif, system-ui, sans-serif Apple Color Emoji Segoe UI Emoji Segoe UI Symbol Noto Color Emoji"
                    },
                    {
                        value: "font-serif",
                        desc: "font-family: ui-serif, Georgia, Cambria Times New Roman Times, serif "
                    },
                    {
                        value: "font-mono",
                        desc: "font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono Courier New monospace;"
                    },
                ],
            },
            {
                name: "Font Size", children: [
                    {"value": "text-xs", "desc": "font-size: 0.75rem /* 12px */; line-height: 1rem /* 16px */"},
                    {"value": "text-sm", "desc": "font-size: 0.875rem /* 14px */; line-height: 1.25rem /* 20px */"},
                    {"value": "text-base", "desc": "font-size: 1rem /* 16px */; line-height: 1.5rem /* 24px */"},
                    {"value": "text-lg", "desc": "font-size: 1.125rem /* 18px */; line-height: 1.75rem /* 28px */"},
                    {"value": "text-xl", "desc": "font-size: 1.25rem /* 20px */; line-height: 1.75rem /* 28px */"}
                ],
            },
            {
                name: "Font Smoothing", children: [
                    {"value": "text-xs", "desc": "font-size: 0.75rem /* 12px */; line-height: 1rem /* 16px */"},
                    {"value": "text-sm", "desc": "font-size: 0.875rem /* 14px */; line-height: 1.25rem /* 20px */"},
                    {"value": "text-base", "desc": "font-size: 1rem /* 16px */; line-height: 1.5rem /* 24px */"},
                    {"value": "text-lg", "desc": "font-size: 1.125rem /* 18px */; line-height: 1.75rem /* 28px */"},
                    {"value": "text-xl", "desc": "font-size: 1.25rem /* 20px */; line-height: 1.75rem /* 28px */"}
                ],
            },
            {
                name: "Font Size", children: [
                    {
                        "value": "antialiased",
                        desc: "-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;"
                    }, {
                        "value": "subpixel-antialiased",
                        desc: "-webkit-font-smoothing: auto -moz-osx-font-smoothing: auto;"
                    }
                ],
            },
            {
                name: "Font Style", children: [
                    {value: "italic", desc: "font-style: italic;"},
                    {value: "not-italic", desc: "font-style: normal;"},
                ],
            }, {
                name: "Font Weight", children: [
                    {
                        "value": "font-thin",
                        "desc": "font-weight: 100"
                    },
                    {
                        "value": "font-extralight",
                        "desc": "font-weight: 200"
                    },
                    {
                        "value": "font-light",
                        "desc": "font-weight: 300"
                    },
                    {
                        "value": "font-normal",
                        "desc": "font-weight: 400"
                    },
                    {
                        "value": "font-medium",
                        "desc": "font-weight: 500"
                    },
                    {
                        "value": "font-semibold",
                        "desc": "font-weight: 600"
                    },
                    {
                        "value": "font-bold",
                        "desc": "font-weight: 700"
                    },
                    {
                        "value": "font-extrabold",
                        "desc": "font-weight: 800"
                    },
                    {
                        "value": "font-black",
                        "desc": "font-weight: 900"
                    }
                ],
            }, {
                name: "Font Variant Numeric", children: [
                    {
                        "value": "normal-nums",
                        "desc": "font-variant-numeric: normal"
                    },
                    {
                        "value": "ordinal",
                        "desc": "font-variant-numeric: ordinal"
                    },
                    {
                        "value": "slashed-zero",
                        "desc": "font-variant-numeric: slashed-zero"
                    },
                    {
                        "value": "lining-nums",
                        "desc": "font-variant-numeric: lining-nums"
                    },
                    {
                        "value": "oldstyle-nums",
                        "desc": "font-variant-numeric: oldstyle-nums"
                    },
                    {
                        "value": "proportional-nums",
                        "desc": "font-variant-numeric: proportional-nums"
                    },
                    {
                        "value": "tabular-nums",
                        "desc": "font-variant-numeric: tabular-nums"
                    },
                    {
                        "value": "diagonal-fractions",
                        "desc": "font-variant-numeric: diagonal-fractions"
                    },
                    {
                        "value": "stacked-fractions",
                        "desc": "font-variant-numeric: stacked-fractions"
                    }
                ],
            }, {
                name: "Letter Spacing", children: [
                    {
                        "value": "racking-tighter",
                        "desc": "letter-spacing: -0.05em"
                    },
                    {
                        "value": "tracking-tight",
                        "desc": "letter-spacing: -0.025em"
                    },
                    {
                        "value": "tracking-normal",
                        "desc": "letter-spacing: 0em"
                    },
                    {
                        "value": "tracking-wide",
                        "desc": "letter-spacing: 0.025em"
                    },
                    {
                        "value": "tracking-wider",
                        "desc": "letter-spacing: 0.05em"
                    },
                    {
                        "value": "tracking-widest",
                        "desc": "letter-spacing: 0.1em"
                    }
                ],
            }, {
                name: "Line Clamp", children: [
                    {
                        "value": "line-clamp-1",
                        "desc": "overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 1;"
                    },
                    {
                        "value": "line-clamp-2",
                        "desc": "overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2;"
                    },
                    {
                        "value": "line-clamp-3",
                        "desc": "overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3;"
                    },
                    {
                        "value": "line-clamp-4",
                        "desc": "overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 4;"
                    },
                    {
                        "value": "line-clamp-5",
                        "desc": "overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 5;"
                    },
                    {
                        "value": "line-clamp-6",
                        "desc": "overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 6;"
                    },
                    {
                        "value": "line-clamp-none",
                        "desc": "overflow: visible; display: block; -webkit-box-orient: horizontal; -webkit-line-clamp: none;"
                    }
                ],
            }, {
                name: "Line Height", children: [
                    {
                        "value": "leading-3",
                        "desc": "line-height: 0.75rem; /* 12px */"
                    },
                    {
                        "value": "leading-4",
                        "desc": "line-height: 1rem; /* 16px */"
                    },
                    {
                        "value": "leading-5",
                        "desc": "line-height: 1.25rem; /* 20px */"
                    },
                    {
                        "value": "leading-6",
                        "desc": "line-height: 1.5rem; /* 24px */"
                    },
                    {
                        "value": "leading-7",
                        "desc": "line-height: 1.75rem; /* 28px */"
                    },
                    {
                        "value": "leading-8",
                        "desc": "line-height: 2rem; /* 32px */"
                    },
                    {
                        "value": "leading-9",
                        "desc": "line-height: 2.25rem; /* 36px */"
                    },
                    {
                        "value": "leading-10",
                        "desc": "line-height: 2.5rem; /* 40px */"
                    },
                    {
                        "value": "leading-none",
                        "desc": "line-height: 1;"
                    },
                    {
                        "value": "leading-tight",
                        "desc": "line-height: 1.25;"
                    },
                    {
                        "value": "leading-snug",
                        "desc": "line-height: 1.375;"
                    },
                    {
                        "value": "leading-normal",
                        "desc": "line-height: 1.5;"
                    },
                    {
                        "value": "leading-relaxed",
                        "desc": "line-height: 1.625;"
                    },
                    {
                        "value": "leading-loose",
                        "desc": "line-height: 2;"
                    }
                ],
            }, {
                name: "List Style Image", children: [
                    {value: "list-image-none", desc: "list-style-image: none;"},
                ],
            }, {
                name: "List Style Position", children: [
                    {
                        "value": "list-inside",
                        "desc": "list-style-position: inside"
                    },
                    {
                        "value": "list-outside",
                        "desc": "list-style-position: outside"
                    }
                ],
            }, {
                name: "List Style Type", children: [
                    {
                        "value": "list-none",
                        "desc": "list-style-type: none"
                    },
                    {
                        "value": "list-disc",
                        "desc": "list-style-type: disc"
                    },
                    {
                        "value": "list-decimal",
                        "desc": "list-style-type: decimal"
                    }
                ],
            }, {
                name: "Text Align", children: [
                    {
                        "value": "text-left",
                        "desc": "text-align: left"
                    },
                    {
                        "value": "text-center",
                        "desc": "text-align: center"
                    },
                    {
                        "value": "text-right",
                        "desc": "text-align: right"
                    },
                    {
                        "value": "text-justify",
                        "desc": "text-align: justify"
                    },
                    {
                        "value": "text-start",
                        "desc": "text-align: start"
                    },
                    {
                        "value": "text-end",
                        "desc": "text-align: end"
                    }
                ],
            },
            {
                name: "Text Color", children: [
                    {
                        "value": "text-inherit",
                        "desc": "color: inherit"
                    },
                    {
                        "value": "text-current",
                        "desc": "color: currentColor"
                    },
                    {
                        "value": "text-transparent",
                        "desc": "color: transparent"
                    },
                    {
                        "value": "text-black",
                        "desc": "color: rgb(0, 0, 0)"
                    },
                    {
                        "value": "text-white",
                        "desc": "color: rgb(255, 255, 255)"
                    }
                ],
            }, {
                name: "Text Decoration", children: [
                    {
                        "value": "underline",
                        "desc": "text-decoration-line: underline"
                    },
                    {
                        "value": "overline",
                        "desc": "text-decoration-line: overline"
                    },
                    {
                        "value": "line-through",
                        "desc": "text-decoration-line: line-through"
                    },
                    {
                        "value": "no-underline",
                        "desc": "text-decoration-line: none"
                    }
                ],
            }, {
                name: "Text Decoration Color", children: [
                    {
                        "value": "decoration-inherit",
                        "desc": "text-decoration-color: inherit"
                    },
                    {
                        "value": "decoration-current",
                        "desc": "text-decoration-color: currentColor"
                    },
                    {
                        "value": "decoration-transparent",
                        "desc": "text-decoration-color: transparent"
                    },
                    {
                        "value": "decoration-black",
                        "desc": "text-decoration-color: #000"
                    },
                    {
                        "value": "decoration-white",
                        "desc": "text-decoration-color: #fff"
                    }
                ],
            }, {
                name: "Text Decoration Style", children: [
                    {
                        "value": "decoration-solid",
                        "desc": "text-decoration-style: solid"
                    },
                    {
                        "value": "decoration-double",
                        "desc": "text-decoration-style: double"
                    },
                    {
                        "value": "decoration-dotted",
                        "desc": "text-decoration-style: dotted"
                    },
                    {
                        "value": "decoration-dashed",
                        "desc": "text-decoration-style: dashed"
                    },
                    {
                        "value": "decoration-wavy",
                        "desc": "text-decoration-style: wavy"
                    }
                ],
            }, {
                name: "Text Decoration Thickness", children: [
                    {
                        "value": "decoration-auto",
                        "desc": "text-decoration-thickness: auto"
                    },
                    {
                        "value": "decoration-from-font",
                        "desc": "text-decoration-thickness: from-font"
                    },
                    {
                        "value": "decoration-0",
                        "desc": "text-decoration-thickness: 0px"
                    },
                    {
                        "value": "decoration-1",
                        "desc": "text-decoration-thickness: 1px"
                    },
                    {
                        "value": "decoration-2",
                        "desc": "text-decoration-thickness: 2px"
                    },
                    {
                        "value": "decoration-4",
                        "desc": "text-decoration-thickness: 4px"
                    },
                    {
                        "value": "decoration-8",
                        "desc": "text-decoration-thickness: 8px"
                    }
                ],
            }, {
                name: "Text Underline Offset", children: [
                    {
                        "value": "underline-offset-auto",
                        "desc": "text-underline-offset: auto"
                    },
                    {
                        "value": "underline-offset-0",
                        "desc": "text-underline-offset: 0px"
                    },
                    {
                        "value": "underline-offset-1",
                        "desc": "text-underline-offset: 1px"
                    },
                    {
                        "value": "underline-offset-2",
                        "desc": "text-underline-offset: 2px"
                    },
                    {
                        "value": "underline-offset-4",
                        "desc": "text-underline-offset: 4px"
                    },
                    {
                        "value": "underline-offset-8",
                        "desc": "text-underline-offset: 8px"
                    }
                ],
            }, {
                name: "Text Transform", children: [
                    {
                        "value": "uppercase",
                        "desc": "text-transform: uppercase"
                    },
                    {
                        "value": "lowercase",
                        "desc": "text-transform: lowercase"
                    },
                    {
                        "value": "capitalize",
                        "desc": "text-transform: capitalize"
                    },
                    {
                        "value": "normal-case",
                        "desc": "text-transform: none"
                    }
                ],
            }, {
                name: "Text Overflow", children: [
                    {
                        "value": "truncate",
                        "desc": "overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"
                    },
                    {
                        "value": "text-ellipsis",
                        "desc": "text-overflow: ellipsis"
                    },
                    {
                        "value": "text-clip",
                        "desc": "text-overflow: clip"
                    }
                ],
            }, {
                name: "Text Wrap", children: [
                    {
                        "value": "text-wrap",
                        "desc": "white-space: wrap;"
                    },
                    {
                        "value": "text-nowrap",
                        "desc": "white-space: nowrap;"
                    },
                    {
                        "value": "text-balance",
                        "desc": "This is not a standard CSS property."
                    },
                    {
                        "value": "text-pretty",
                        "desc": "This is not a standard CSS property."
                    }
                ],
            }, {
                name: "Text Indent", children: [
                    {
                        "value": "indent-0",
                        "desc": "text-indent: 0px;"
                    },
                    {
                        "value": "indent-px",
                        "desc": "text-indent: 1px;"
                    },
                    {
                        "value": "indent-0.5",
                        "desc": "text-indent: 0.125rem; /* 2px */"
                    },
                    {
                        "value": "indent-1",
                        "desc": "text-indent: 0.25rem; /* 4px */"
                    },
                    {
                        "value": "indent-1.5",
                        "desc": "text-indent: 0.375rem; /* 6px */"
                    },
                    {
                        "value": "indent-2",
                        "desc": "text-indent: 0.5rem; /* 8px */"
                    },
                    {
                        "value": "indent-2.5",
                        "desc": "text-indent: 0.625rem; /* 10px */"
                    }
                ],
            }, {
                name: "Vertical Align", children: [
                    {
                        "value": "align-baseline",
                        "desc": "vertical-align: baseline;"
                    },
                    {
                        "value": "align-top",
                        "desc": "vertical-align: top;"
                    },
                    {
                        "value": "align-middle",
                        "desc": "vertical-align: middle;"
                    },
                    {
                        "value": "align-bottom",
                        "desc": "vertical-align: bottom;"
                    },
                    {
                        "value": "align-text-top",
                        "desc": "vertical-align: text-top;"
                    },
                    {
                        "value": "align-text-bottom",
                        "desc": "vertical-align: text-bottom;"
                    },
                    {
                        "value": "align-sub",
                        "desc": "vertical-align: sub;"
                    },
                    {
                        "value": "align-super",
                        "desc": "vertical-align: super;"
                    }
                ],
            }, {
                name: "Whitespace", children: [
                    {
                        "value": "whitespace-normal",
                        "desc": "white-space: normal;"
                    },
                    {
                        "value": "whitespace-nowrap",
                        "desc": "white-space: nowrap;"
                    },
                    {
                        "value": "whitespace-pre",
                        "desc": "white-space: pre;"
                    },
                    {
                        "value": "whitespace-pre-line",
                        "desc": "white-space: pre-line;"
                    },
                    {
                        "value": "whitespace-pre-wrap",
                        "desc": "white-space: pre-wrap;"
                    },
                    {
                        "value": "whitespace-break-spaces",
                        "desc": "white-space: break-spaces;"
                    }
                ],
            }, {
                name: "Word Break", children: [
                    {
                        "value": "break-normal",
                        "desc": "overflow-wrap: normal; word-break: normal;"
                    },
                    {
                        "value": "break-words",
                        "desc": "overflow-wrap: break-word;"
                    },
                    {
                        "value": "break-all",
                        "desc": "word-break: break-all;"
                    },
                    {
                        "value": "break-keep",
                        "desc": "word-break: keep-all;"
                    }
                ],
            }, {
                name: "Hyphens", children: [
                    {
                        "value": "hyphens-none",
                        "desc": "hyphens: none;"
                    },
                    {
                        "value": "hyphens-manual",
                        "desc": "hyphens: manual;"
                    },
                    {
                        "value": "hyphens-auto",
                        "desc": "hyphens: auto;"
                    }
                ],
            }, {
                name: "Content", children: [
                    {value: "content-none", desc: "content: none;"},
                ],
            },
        ]
    },
    {
        "name": "背景", "children": [
            {
                name: "Background Attachment", "children": [
                    {
                        "value": "bg-fixed",
                        "desc": "background-attachment: fixed;"
                    },
                    {
                        "value": "bg-local",
                        "desc": "background-attachment: local;"
                    },
                    {
                        "value": "bg-scroll",
                        "desc": "background-attachment: scroll;"
                    }
                ]
            },
            {
                name: "Background Clip", "children": [
                    {
                        "value": "bg-clip-border",
                        "desc": "background-clip: border-box;"
                    },
                    {
                        "value": "bg-clip-padding",
                        "desc": "background-clip: padding-box;"
                    },
                    {
                        "value": "bg-clip-content",
                        "desc": "background-clip: content-box;"
                    },
                    {
                        "value": "bg-clip-text",
                        "desc": "background-clip: text;"
                    }
                ]
            },
            {
                name: "Background Color", "children": [
                    {
                        "value": "bg-inherit",
                        "desc": "background-color: inherit;"
                    },
                    {
                        "value": "bg-current",
                        "desc": "background-color: currentColor;"
                    },
                    {
                        "value": "bg-transparent",
                        "desc": "background-color: transparent;"
                    },
                    {
                        "value": "bg-black",
                        "desc": "background-color: rgb(0, 0, 0);"
                    },
                    {
                        "value": "bg-white",
                        "desc": "background-color: rgb(255, 255, 255);"
                    },
                    {
                        "value": "bg-slate-50",
                        "desc": "background-color: rgb(248, 250, 252);"
                    },
                    {
                        "value": "bg-slate-100",
                        "desc": "background-color: rgb(241, 245, 249);"
                    },
                    {
                        "value": "bg-slate-200",
                        "desc": "background-color: rgb(226, 232, 240);"
                    }
                ]
            },
            {
                name: "Background Origin", "children": [
                    {
                        "value": "bg-origin-border",
                        "desc": "background-origin: border-box;"
                    },
                    {
                        "value": "bg-origin-padding",
                        "desc": "background-origin: padding-box;"
                    },
                    {
                        "value": "bg-origin-content",
                        "desc": "background-origin: content-box;"
                    }
                ]
            },
            {
                name: "Background Position", "children": [
                    {
                        "value": "bg-bottom",
                        "desc": "background-position: bottom;"
                    },
                    {
                        "value": "bg-center",
                        "desc": "background-position: center;"
                    },
                    {
                        "value": "bg-left",
                        "desc": "background-position: left;"
                    },
                    {
                        "value": "bg-left-bottom",
                        "desc": "background-position: left bottom;"
                    },
                    {
                        "value": "bg-left-top",
                        "desc": "background-position: left top;"
                    },
                    {
                        "value": "bg-right",
                        "desc": "background-position: right;"
                    },
                    {
                        "value": "bg-right-bottom",
                        "desc": "background-position: right bottom;"
                    },
                    {
                        "value": "bg-right-top",
                        "desc": "background-position: right top;"
                    },
                    {
                        "value": "bg-top",
                        "desc": "background-position: top;"
                    }
                ]
            },
            {
                name: "Background Repeat", "children": [
                    {
                        "value": "bg-repeat",
                        "desc": "background-repeat: repeat;"
                    },
                    {
                        "value": "bg-no-repeat",
                        "desc": "background-repeat: no-repeat;"
                    },
                    {
                        "value": "bg-repeat-x",
                        "desc": "background-repeat: repeat-x;"
                    },
                    {
                        "value": "bg-repeat-y",
                        "desc": "background-repeat: repeat-y;"
                    },
                    {
                        "value": "bg-repeat-round",
                        "desc": "background-repeat: round;"
                    },
                    {
                        "value": "bg-repeat-space",
                        "desc": "background-repeat: space;"
                    }
                ]
            },
            {
                name: "Background Size", "children": [
                    {
                        "value": "bg-auto",
                        "desc": "background-size: auto;"
                    },
                    {
                        "value": "bg-cover",
                        "desc": "background-size: cover;"
                    },
                    {
                        "value": "bg-contain",
                        "desc": "background-size: contain;"
                    }
                ]
            },
            {
                name: "Background Image", "children": [
                    {
                        "value": "bg-none",
                        "desc": "background-image: none;"
                    },
                    {
                        "value": "bg-gradient-to-t",
                        "desc": "background-image: linear-gradient(to top, var(--tw-gradient-stops));"
                    },
                    {
                        "value": "bg-gradient-to-tr",
                        "desc": "background-image: linear-gradient(to top right, var(--tw-gradient-stops));"
                    },
                    {
                        "value": "bg-gradient-to-r",
                        "desc": "background-image: linear-gradient(to right, var(--tw-gradient-stops));"
                    },
                    {
                        "value": "bg-gradient-to-br",
                        "desc": "background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));"
                    },
                    {
                        "value": "bg-gradient-to-b",
                        "desc": "background-image: linear-gradient(to bottom, var(--tw-gradient-stops));"
                    },
                    {
                        "value": "bg-gradient-to-bl",
                        "desc": "background-image: linear-gradient(to bottom left, var(--tw-gradient-stops));"
                    },
                    {
                        "value": "bg-gradient-to-l",
                        "desc": "background-image: linear-gradient(to left, var(--tw-gradient-stops));"
                    },
                    {
                        "value": "bg-gradient-to-tl",
                        "desc": "background-image: linear-gradient(to top left, var(--tw-gradient-stops));"
                    }
                ]
            },
            {
                name: "Gradient Color Stops", "children": [
                    {
                        "value": "from-inherit",
                        "desc": "--tw-gradient-from: inherit var(--tw-gradient-from-position); --tw-gradient-to: rgb(255 255 255 / 0) var(--tw-gradient-to-position); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);"
                    },
                    {
                        "value": "from-current",
                        "desc": "--tw-gradient-from: currentColor var(--tw-gradient-from-position); --tw-gradient-to: rgb(255 255 255 / 0) var(--tw-gradient-to-position); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);"
                    },
                    {
                        "value": "from-transparent",
                        "desc": "--tw-gradient-from: transparent var(--tw-gradient-from-position); --tw-gradient-to: rgb(0 0 0 / 0) var(--tw-gradient-to-position); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);"
                    },
                    {
                        "value": "from-black",
                        "desc": "--tw-gradient-from: #000 var(--tw-gradient-from-position); --tw-gradient-to: rgb(0 0 0 / 0) var(--tw-gradient-to-position);"
                    }
                ]
            }
        ]
    },
    {
        "name": "border边框", "children": [
            {
                name: "Border Radius", "children": [
                    {
                        "value": "rounded-none",
                        "desc": "border-radius: 0px;"
                    },
                    {
                        "value": "rounded-sm",
                        "desc": "border-radius: 0.125rem; /* 2px */"
                    },
                    {
                        "value": "rounded",
                        "desc": "border-radius: 0.25rem; /* 4px */"
                    },
                    {
                        "value": "rounded-md",
                        "desc": "border-radius: 0.375rem; /* 6px */"
                    },
                    {
                        "value": "rounded-lg",
                        "desc": "border-radius: 0.5rem; /* 8px */"
                    },
                    {
                        "value": "rounded-xl",
                        "desc": "border-radius: 0.75rem; /* 12px */"
                    }
                ]
            }, {
                name: "Border Width", "children": [
                    {
                        "value": "border-0",
                        "desc": "border-width: 0px;"
                    },
                    {
                        "value": "border-2",
                        "desc": "border-width: 2px;"
                    },
                    {
                        "value": "border-4",
                        "desc": "border-width: 4px;"
                    },
                    {
                        "value": "border-8",
                        "desc": "border-width: 8px;"
                    },
                    {
                        "value": "border",
                        "desc": "border-width: 1px;"
                    }
                ]
            }, {
                name: "Border Color", "children": [
                    {
                        "value": "border-inherit",
                        "desc": "border-color: inherit;"
                    },
                    {
                        "value": "border-current",
                        "desc": "border-color: currentColor;"
                    },
                    {
                        "value": "border-transparent",
                        "desc": "border-color: transparent;"
                    },
                    {
                        "value": "border-black",
                        "desc": "border-color: rgb(0 0 0);"
                    },
                    {
                        "value": "border-white",
                        "desc": "border-color: rgb(255 255 255);"
                    },
                    {
                        "value": "border-slate-50",
                        "desc": "border-color: rgb(248 250 252);"
                    },
                    {
                        "value": "border-slate-100",
                        "desc": "border-color: rgb(241 245 249);"
                    },
                    {
                        "value": "border-slate-200",
                        "desc": "border-color: rgb(226 232 240);"
                    }
                ]
            }, {
                name: "Border Style", "children": [
                    {
                        "value": "border-solid",
                        "desc": "border-style: solid;"
                    },
                    {
                        "value": "border-dashed",
                        "desc": "border-style: dashed;"
                    },
                    {
                        "value": "border-dotted",
                        "desc": "border-style: dotted;"
                    },
                    {
                        "value": "border-double",
                        "desc": "border-style: double;"
                    },
                    {
                        "value": "border-hidden",
                        "desc": "border-style: hidden;"
                    },
                    {
                        "value": "border-none",
                        "desc": "border-style: none;"
                    }
                ]
            }, {
                name: "Divide Width", "children": [
                    {
                        "value": "divide-x-0",
                        "desc": "border-right-width: 0px; border-left-width: 0px;"
                    },
                    {
                        "value": "divide-x-2",
                        "desc": "border-right-width: 0px; border-left-width: 2px;"
                    },
                    {
                        "value": "divide-x-4",
                        "desc": "border-right-width: 0px; border-left-width: 4px;"
                    },
                    {
                        "value": "divide-x-8",
                        "desc": "border-right-width: 0px; border-left-width: 8px;"
                    },
                    {
                        "value": "divide-x",
                        "desc": "border-right-width: 0px; border-left-width: 1px;"
                    },
                    {
                        "value": "divide-y-0",
                        "desc": "border-top-width: 0px; border-bottom-width: 0px;"
                    },
                    {
                        "value": "divide-y-2",
                        "desc": "border-top-width: 2px; border-bottom-width: 0px;"
                    },
                    {
                        "value": "divide-y-4",
                        "desc": "border-top-width: 4px; border-bottom-width: 0px;"
                    },
                    {
                        "value": "divide-y-8",
                        "desc": "border-top-width: 8px; border-bottom-width: 0px;"
                    },
                    {
                        "value": "divide-y",
                        "desc": "border-top-width: 1px; border-bottom-width: 0px;"
                    },
                    {
                        "value": "divide-y-reverse",
                        "desc": "--tw-divide-y-reverse: 1;"
                    },
                    {
                        "value": "divide-x-reverse",
                        "desc": "--tw-divide-x-reverse: 1;"
                    }
                ]
            }, {
                name: "Divide Color", "children": [
                    {
                        "value": "divide-inherit",
                        "desc": "border-color: inherit;"
                    },
                    {
                        "value": "divide-current",
                        "desc": "border-color: currentColor;"
                    },
                    {
                        "value": "divide-transparent",
                        "desc": "border-color: transparent;"
                    },
                    {
                        "value": "divide-black",
                        "desc": "border-color: rgb(0 0 0);"
                    },
                    {
                        "value": "divide-white",
                        "desc": "border-color: rgb(255 255 255);"
                    }
                ]
            }, {
                name: "Divide Style", "children": [
                    {
                        "value": "divide-solid",
                        "desc": "border-style: solid;"
                    },
                    {
                        "value": "divide-dashed",
                        "desc": "border-style: dashed;"
                    },
                    {
                        "value": "divide-dotted",
                        "desc": "border-style: dotted;"
                    },
                    {
                        "value": "divide-double",
                        "desc": "border-style: double;"
                    },
                    {
                        "value": "divide-none",
                        "desc": "border-style: none;"
                    }
                ]
            }, {
                name: "Outline Width", "children": [
                    {"value": "outline-0", "desc": "outline-width: 0px;"},
                    {"value": "outline-1", "desc": "outline-width: 1px;"},
                    {"value": "outline-2", "desc": "outline-width: 2px;"},
                    {"value": "outline-4", "desc": "outline-width: 4px;"},
                    {"value": "outline-8", "desc": "outline-width: 8px;"}
                ]
            }, {
                name: "Outline Color", "children": [
                    {"value": "outline-inherit", "desc": "outline-color: inherit;"},
                    {"value": "outline-current", "desc": "outline-color: currentColor;"},
                    {"value": "outline-transparent", "desc": "outline-color: transparent;"},
                    {"value": "outline-black", "desc": "outline-color: #000;"},
                    {"value": "outline-white", "desc": "outline-color: #fff;"}
                ]
            }, {
                name: "Outline Style", "children": [
                    {"value": "outline-none", "desc": "outline: 2px solid transparent; outline-offset: 2px;"},
                    {"value": "outline", "desc": "outline-style: solid;"},
                    {"value": "outline-dashed", "desc": "outline-style: dashed;"},
                    {"value": "outline-dotted", "desc": "outline-style: dotted;"},
                    {"value": "outline-double", "desc": "outline-style: double;"}
                ]
            }, {
                name: "Outline Offset", "children": [
                    {"value": "outline-offset-0", "desc": "outline-offset: 0px;"},
                    {"value": "outline-offset-1", "desc": "outline-offset: 1px;"},
                    {"value": "outline-offset-2", "desc": "outline-offset: 2px;"},
                    {"value": "outline-offset-4", "desc": "outline-offset: 4px;"},
                    {"value": "outline-offset-8", "desc": "outline-offset: 8px;"}
                ]
            }, {
                name: "Ring Width", "children": [
                    {
                        "value": "ring-0",
                        "desc": "box-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);"
                    },
                    {
                        "value": "ring-1",
                        "desc": "box-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);"
                    },
                    {
                        "value": "ring-2",
                        "desc": "box-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);"
                    },
                    {
                        "value": "ring",
                        "desc": "box-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);"
                    },
                    {
                        "value": "ring-4",
                        "desc": "box-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);"
                    },
                    {
                        "value": "ring-8",
                        "desc": "box-shadow: var(--tw-ring-inset) 0 0 0 calc(8px + var(--tw-ring-offset-width)) var(--tw-ring-color);"
                    },
                    {"value": "ring-inset", "desc": "--tw-ring-inset: inset;"}
                ]
            }, {
                name: "Ring Color", "children": [
                    {"value": "ring-inherit", "desc": "--tw-ring-color: inherit;"},
                    {"value": "ring-current", "desc": "--tw-ring-color: currentColor;"},
                    {"value": "ring-transparent", "desc": "--tw-ring-color: transparent;"},
                    {"value": "ring-black", "desc": "--tw-ring-color: rgb(0 0 0);"},
                    {"value": "ring-white", "desc": "--tw-ring-color: rgb(255 255 255);"}
                ]
            }, {
                name: "Ring Offset Width", "children": [
                    {
                        "value": "ring-offset-0",
                        "desc": "--tw-ring-offset-width: 0px; box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);"
                    },
                    {
                        "value": "ring-offset-1",
                        "desc": "--tw-ring-offset-width: 1px; box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);"
                    },
                    {
                        "value": "ring-offset-2",
                        "desc": "--tw-ring-offset-width: 2px; box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);"
                    },
                    {
                        "value": "ring-offset-4",
                        "desc": "--tw-ring-offset-width: 4px; box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);"
                    },
                    {
                        "value": "ring-offset-8",
                        "desc": "--tw-ring-offset-width: 8px; box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);"
                    }
                ]
            }, {
                name: "Ring Offset Color", "children": [
                    {
                        "value": "ring-offset-inherit",
                        "desc": "--tw-ring-offset-color: inherit; box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);"
                    },
                    {
                        "value": "ring-offset-current",
                        "desc": "--tw-ring-offset-color: currentColor; box-shadow: 0 0 0 var(--tw-ring-offset-width) var(-tw-ring-offset-color), var(--tw-ring-shadow);"
                    },
                    {
                        "value": "ring-offset-transparent",
                        "desc": "--tw-ring-offset-color: transparent; box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);"
                    },
                    {
                        "value": "ring-offset-black",
                        "desc": "--tw-ring-offset-color: #000; box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);"
                    },
                    {
                        "value": "ring-offset-white",
                        "desc": "--tw-ring-offset-color: #fff; box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-sh"
                    }
                ]
            },
        ]
    },
    {
        "name": "效果", "children": [
            {
                name: "Box Shadow", "children": [
                    {"value": "shadow-sm", "desc": "box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);"},
                    {
                        "value": "shadow",
                        "desc": "box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);"
                    },
                    {
                        "value": "shadow-md",
                        "desc": "box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);"
                    },
                    {
                        "value": "shadow-lg",
                        "desc": "box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);"
                    },
                    {
                        "value": "shadow-xl",
                        "desc": "box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);"
                    },
                    {"value": "shadow-2xl", "desc": "box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);"},
                    {"value": "shadow-inner", "desc": "box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.05);"},
                    {"value": "shadow-none", "desc": "box-shadow: 0 0 #0000;"}
                ]
            }, {
                name: "Box Shadow Color", "children": [
                    {"value": "shadow-inherit", "desc": "--tw-shadow-color: inherit;"},
                    {"value": "shadow-current", "desc": "--tw-shadow-color: currentColor;"},
                    {"value": "shadow-transparent", "desc": "--tw-shadow-color: transparent;"},
                    {"value": "shadow-black", "desc": "--tw-shadow-color: #000;"},
                    {"value": "shadow-white", "desc": "--tw-shadow-color: #fff;"}
                ]
            }, {
                name: "Opacity", "children": [
                    {"value": "opacity-0", "desc": "opacity: 0;"},
                    {"value": "opacity-5", "desc": "opacity: 0.05;"},
                    {"value": "opacity-10", "desc": "opacity: 0.1;"},
                    {"value": "opacity-15", "desc": "opacity: 0.15;"},
                    {"value": "opacity-20", "desc": "opacity: 0.2;"},
                    {"value": "opacity-25", "desc": "opacity: 0.25;"}
                ]
            }, {
                name: "Mix Blend Mode", "children": [
                    {"value": "mix-blend-normal", "desc": "mix-blend-mode: normal;"},
                    {"value": "mix-blend-multiply", "desc": "mix-blend-mode: multiply;"},
                    {"value": "mix-blend-screen", "desc": "mix-blend-mode: screen;"},
                    {"value": "mix-blend-overlay", "desc": "mix-blend-mode: overlay;"},
                    {"value": "mix-blend-darken", "desc": "mix-blend-mode: darken;"},
                    {"value": "mix-blend-lighten", "desc": "mix-blend-mode: lighten;"},
                    {"value": "mix-blend-color-dodge", "desc": "mix-blend-mode: color-dodge;"},
                    {"value": "mix-blend-color-burn", "desc": "mix-blend-mode: color-burn;"},
                    {"value": "mix-blend-hard-light", "desc": "mix-blend-mode: hard-light;"},
                    {"value": "mix-blend-soft-light", "desc": "mix-blend-mode: soft-light;"},
                    {"value": "mix-blend-difference", "desc": "mix-blend-mode: difference;"},
                    {"value": "mix-blend-exclusion", "desc": "mix-blend-mode: exclusion;"},
                    {"value": "mix-blend-hue", "desc": "mix-blend-mode: hue;"},
                    {"value": "mix-blend-saturation", "desc": "mix-blend-mode: saturation;"},
                    {"value": "mix-blend-color", "desc": "mix-blend-mode: color;"},
                    {"value": "mix-blend-luminosity", "desc": "mix-blend-mode: luminosity;"},
                    {"value": "mix-blend-plus-lighter", "desc": "mix-blend-mode: plus-lighter;"}
                ]
            }, {
                name: "Background Blend Mode", "children": [
                    {"value": "bg-blend-normal", "desc": "background-blend-mode: normal;"},
                    {"value": "bg-blend-multiply", "desc": "background-blend-mode: multiply;"},
                    {"value": "bg-blend-screen", "desc": "background-blend-mode: screen;"},
                    {"value": "bg-blend-overlay", "desc": "background-blend-mode: overlay;"},
                    {"value": "bg-blend-darken", "desc": "background-blend-mode: darken;"},
                    {"value": "bg-blend-lighten", "desc": "background-blend-mode: lighten;"},
                    {"value": "bg-blend-color-dodge", "desc": "background-blend-mode: color-dodge;"},
                    {"value": "bg-blend-color-burn", "desc": "background-blend-mode: color-burn;"},
                    {"value": "bg-blend-hard-light", "desc": "background-blend-mode: hard-light;"},
                    {"value": "bg-blend-soft-light", "desc": "background-blend-mode: soft-light;"},
                    {"value": "bg-blend-difference", "desc": "background-blend-mode: difference;"},
                    {"value": "bg-blend-exclusion", "desc": "background-blend-mode: exclusion;"},
                    {"value": "bg-blend-hue", "desc": "background-blend-mode: hue;"},
                    {"value": "bg-blend-saturation", "desc": "background-blend-mode: saturation;"},
                    {"value": "bg-blend-color", "desc": "background-blend-mode: color;"},
                    {"value": "bg-blend-luminosity", "desc": "background-blend-mode: luminosity;"}
                ]
            },
        ]
    },
    {
        "name": "Filters过滤", "children": [
            {
                name: "Blur", "children": [
                    {"value": "blur-none", "desc": "filter: blur(0);"},
                    {"value": "blur-sm", "desc": "filter: blur(4px);"},
                    {"value": "blur", "desc": "filter: blur(8px);"},
                    {"value": "blur-md", "desc": "filter: blur(12px);"},
                    {"value": "blur-lg", "desc": "filter: blur(16px);"},
                    {"value": "blur-xl", "desc": "filter: blur(24px);"},
                    {"value": "blur-2xl", "desc": "filter: blur(40px);"},
                    {"value": "blur-3xl", "desc": "filter: blur(64px);"}
                ]
            }, {
                name: "Brightness", "children": [
                    {"value": "brightness-0", "desc": "filter: brightness(0);"},
                    {"value": "brightness-50", "desc": "filter: brightness(0.5);"},
                    {"value": "brightness-75", "desc": "filter: brightness(0.75);"},
                    {"value": "brightness-90", "desc": "filter: brightness(0.9);"},
                    {"value": "brightness-95", "desc": "filter: brightness(0.95);"},
                    {"value": "brightness-100", "desc": "filter: brightness(1);"},
                    {"value": "brightness-105", "desc": "filter: brightness(1.05);"},
                    {"value": "brightness-110", "desc": "filter: brightness(1.1);"},
                    {"value": "brightness-125", "desc": "filter: brightness(1.25);"},
                    {"value": "brightness-150", "desc": "filter: brightness(1.5);"},
                    {"value": "brightness-200", "desc": "filter: brightness(2);"}
                ]
            }, {
                name: "Contrast", "children": [
                    {"value": "contrast-0", "desc": "contrast: 0;"},
                    {"value": "contrast-50", "desc": "contrast: 0.5;"},
                    {"value": "contrast-75", "desc": "contrast: 0.75;"},
                    {"value": "contrast-100", "desc": "contrast: 1;"},
                    {"value": "contrast-125", "desc": "contrast: 1.25;"},
                    {"value": "contrast-150", "desc": "contrast: 1.5;"},
                    {"value": "contrast-200", "desc": "contrast: 2;"}
                ]
            }, {
                name: "Drop Shadow", "children": [
                    {"value": "drop-shadow-sm", "desc": "filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.05));"},
                    {
                        "value": "drop-shadow",
                        "desc": "filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1)) drop-shadow(0 1px 1px rgba(0, 0, 0, 0.06));"
                    },
                    {
                        "value": "drop-shadow-md",
                        "desc": "filter: drop-shadow(0 4px 3px rgba(0, 0, 0, 0.07)) drop-shadow(0 2px 2px rgba(0, 0, 0, 0.06));"
                    },
                    {
                        "value": "drop-shadow-lg",
                        "desc": "filter: drop-shadow(0 10px 8px rgba(0, 0, 0, 0.04)) drop-shadow(0 4px 3px rgba(0, 0, 0, 0.1));"
                    },
                    {
                        "value": "drop-shadow-xl",
                        "desc": "filter: drop-shadow(0 20px 13px rgba(0, 0, 0, 0.03)) drop-shadow(0 8px 5px rgba(0, 0, 0, 0.08));"
                    },
                    {"value": "drop-shadow-2xl", "desc": "filter: drop-shadow(0 25px 25px rgba(0, 0, 0, 0.15));"},
                    {"value": "drop-shadow-none", "desc": "filter: drop-shadow(0 0 rgba(0, 0, 0, 0));"}
                ]
            }, {
                name: "Grayscale", "children": [
                    {"value": "grayscale-0", "desc": "filter: grayscale(0);"},
                    {"value": "grayscale", "desc": "filter: grayscale(100%);"}
                ]
            }, {
                name: "Hue Rotate", "children": [
                    {"value": "hue-rotate-0", "desc": "filter: hue-rotate(0deg);"},
                    {"value": "hue-rotate-15", "desc": "filter: hue-rotate(15deg);"},
                    {"value": "hue-rotate-30", "desc": "filter: hue-rotate(30deg);"},
                    {"value": "hue-rotate-60", "desc": "filter: hue-rotate(60deg);"},
                    {"value": "hue-rotate-90", "desc": "filter: hue-rotate(90deg);"},
                    {"value": "hue-rotate-180", "desc": "filter: hue-rotate(180deg);"}
                ]
            }, {
                name: "Invert", "children": [
                    {"value": "invert-0", "desc": "filter: invert(0);"},
                    {"value": "invert", "desc": "filter: invert(100%);"}
                ]
            }, {
                name: "Saturate", "children": [
                    {"value": "saturate-0", "desc": "filter: saturate(0);"},
                    {"value": "saturate-50", "desc": "filter: saturate(0.5);"},
                    {"value": "saturate-100", "desc": "filter: saturate(1);"},
                    {"value": "saturate-150", "desc": "filter: saturate(1.5);"},
                    {"value": "saturate-200", "desc": "filter: saturate(2);"}
                ]
            }, {
                name: "Sepia", "children": [
                    {"value": "sepia-0", "desc": "filter: sepia(0);"},
                    {"value": "sepia", "desc": "filter: sepia(100%);"}
                ]
            }, {
                name: "Backdrop Blur", "children": [
                    {"value": "backdrop-blur-none", "desc": "backdrop-filter: blur(0);"},
                    {"value": "backdrop-blur-sm", "desc": "backdrop-filter: blur(4px);"},
                    {"value": "backdrop-blur", "desc": "backdrop-filter: blur(8px);"},
                    {"value": "backdrop-blur-md", "desc": "backdrop-filter: blur(12px);"},
                    {"value": "backdrop-blur-lg", "desc": "backdrop-filter: blur(16px);"},
                    {"value": "backdrop-blur-xl", "desc": "backdrop-filter: blur(24px);"},
                    {"value": "backdrop-blur-2xl", "desc": "backdrop-filter: blur(40px);"},
                    {"value": "backdrop-blur-3xl", "desc": "backdrop-filter: blur(64px);"}
                ]
            }, {
                name: "Backdrop Brightness", "children": [
                    {"value": "backdrop-brightness-0", "desc": "backdrop-filter: brightness(0);"},
                    {"value": "backdrop-brightness-50", "desc": "backdrop-filter: brightness(0.5);"},
                    {"value": "backdrop-brightness-75", "desc": "backdrop-filter: brightness(0.75);"},
                    {"value": "backdrop-brightness-90", "desc": "backdrop-filter: brightness(0.9);"},
                    {"value": "backdrop-brightness-95", "desc": "backdrop-filter: brightness(0.95);"},
                    {"value": "backdrop-brightness-100", "desc": "backdrop-filter: brightness(1);"},
                    {"value": "backdrop-brightness-105", "desc": "backdrop-filter: brightness(1.05);"},
                    {"value": "backdrop-brightness-110", "desc": "backdrop-filter: brightness(1.1);"},
                    {"value": "backdrop-brightness-125", "desc": "backdrop-filter: brightness(1.25);"},
                    {"value": "backdrop-brightness-150", "desc": "backdrop-filter: brightness(1.5);"},
                    {"value": "backdrop-brightness-200", "desc": "backdrop-filter: brightness(2);"}
                ]
            }, {
                name: "Backdrop Contrast", "children": [
                    {"value": "backdrop-contrast-0", "desc": "backdrop-filter: contrast(0);"},
                    {"value": "backdrop-contrast-50", "desc": "backdrop-filter: contrast(0.5);"},
                    {"value": "backdrop-contrast-75", "desc": "backdrop-filter: contrast(0.75);"},
                    {"value": "backdrop-contrast-100", "desc": "backdrop-filter: contrast(1);"},
                    {"value": "backdrop-contrast-125", "desc": "backdrop-filter: contrast(1.25);"},
                    {"value": "backdrop-contrast-150", "desc": "backdrop-filter: contrast(1.5);"},
                    {"value": "backdrop-contrast-200", "desc": "backdrop-filter: contrast(2);"}
                ]
            }, {
                name: "Backdrop Grayscale", "children": [
                    {"value": "backdrop-grayscale-0", "desc": "backdrop-filter: grayscale(0);"},
                    {"value": "backdrop-grayscale", "desc": "backdrop-filter: grayscale(100%);"}
                ]
            }, {
                name: "Backdrop Hue Rotate", "children": [
                    {"value": "backdrop-hue-rotate-0", "desc": "backdrop-filter: hue-rotate(0deg);"},
                    {"value": "backdrop-hue-rotate-15", "desc": "backdrop-filter: hue-rotate(15deg);"},
                    {"value": "backdrop-hue-rotate-30", "desc": "backdrop-filter: hue-rotate(30deg);"},
                    {"value": "backdrop-hue-rotate-60", "desc": "backdrop-filter: hue-rotate(60deg);"},
                    {"value": "backdrop-hue-rotate-90", "desc": "backdrop-filter: hue-rotate(90deg);"},
                    {"value": "backdrop-hue-rotate-180", "desc": "backdrop-filter: hue-rotate(180deg);"}
                ]
            }, {
                name: "Backdrop Invert", "children": [
                    {"value": "backdrop-invert-0", "desc": "backdrop-filter: invert(0);"},
                    {"value": "backdrop-invert", "desc": "backdrop-filter: invert(100%);"}
                ]
            }, {
                name: "Backdrop Opacity", "children": [
                    {"value": "backdrop-opacity-0", "desc": "backdrop-filter: opacity(0);"},
                    {"value": "backdrop-opacity-5", "desc": "backdrop-filter: opacity(0.05);"},
                    {"value": "backdrop-opacity-10", "desc": "backdrop-filter: opacity(0.1);"},
                    {"value": "backdrop-opacity-15", "desc": "backdrop-filter: opacity(0.15);"}
                ]
            }, {
                name: "Backdrop Saturate", "children": [
                    {"value": "backdrop-saturate-0", "desc": "backdrop-filter: saturate(0);"},
                    {"value": "backdrop-saturate-50", "desc": "backdrop-filter: saturate(0.5);"},
                    {"value": "backdrop-saturate-100", "desc": "backdrop-filter: saturate(1);"},
                    {"value": "backdrop-saturate-150", "desc": "backdrop-filter: saturate(1.5);"},
                    {"value": "backdrop-saturate-200", "desc": "backdrop-filter: saturate(2);"}
                ]
            }, {
                name: "Backdrop Sepia", "children": [
                    {"value": "backdrop-sepia-0", "desc": "backdrop-filter: sepia(0);"},
                    {"value": "backdrop-sepia", "desc": "backdrop-filter: sepia(100%);"}
                ]
            },
        ]
    },
    {
        "name": "表格table", "children": [
            {
                name: "Border Collapse", "children": [
                    {"value": "border-collapse", "desc": "border-collapse: collapse;"},
                    {"value": "border-separate", "desc": "border-collapse: separate;"}
                ]
            }, {
                name: "Border Spacing", "children": [
                    {"value": "border-spacing-0", "desc": "border-spacing: 0px 0px;"},
                    {"value": "border-spacing-x-0", "desc": "border-spacing: 0px var(--tw-border-spacing-y);"},
                    {"value": "border-spacing-y-0", "desc": "border-spacing: var(--tw-border-spacing-x) 0px;"}
                ]
            }, {
                name: "Table Layout", "children": [
                    {"value": "table-auto", "desc": "table-layout: auto;"},
                    {"value": "table-fixed", "desc": "table-layout: fixed;"}
                ]
            }, {
                name: "Caption Side", "children": [
                    {"value": "caption-top", "desc": "caption-side: top;"},
                    {"value": "caption-bottom", "desc": "caption-side: bottom;"}
                ]
            },
        ]
    },
    {
        "name": "Transitions & Animation", "children": [
            {
                name: "Transition Property", "children": [
                    {
                        "value": "transition-none",
                        "desc": "transition-property: none;"
                    },
                    {
                        "value": "transition-all",
                        "desc": "transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;"
                    },
                    {
                        "value": "transition",
                        "desc": "transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;"
                    },
                    {
                        "value": "transition-colors",
                        "desc": "transition-property: color, background-color, border-color, text-decoration-color, fill, stroke; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;"
                    },
                    {
                        "value": "transition-opacity",
                        "desc": "transition-property: opacity; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;"
                    },
                    {
                        "value": "transition-shadow",
                        "desc": "transition-property: box-shadow; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;"
                    },
                    {
                        "value": "transition-transform",
                        "desc": "transition-property: transform; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;"
                    }
                ]
            },
            {
                name: "Transition Duration", "children": [
                    {"value": "duration-0", "desc": "transition-duration: 0s;"},
                    {"value": "duration-75", "desc": "transition-duration: 75ms;"},
                    {"value": "duration-100", "desc": "transition-duration: 100ms;"},
                    {"value": "duration-150", "desc": "transition-duration: 150ms;"},
                    {"value": "duration-200", "desc": "transition-duration: 200ms;"},
                    {"value": "duration-300", "desc": "transition-duration: 300ms;"},
                    {"value": "duration-500", "desc": "transition-duration: 500ms;"},
                    {"value": "duration-700", "desc": "transition-duration: 700ms;"},
                    {"value": "duration-1000", "desc": "transition-duration: 1000ms;"}
                ]
            },
            {
                name: "Transition Timing Function", "children": [
                    {"value": "ease-linear", "desc": "transition-timing-function: linear;"},
                    {"value": "ease-in", "desc": "transition-timing-function: cubic-bezier(0.4, 0, 1, 1);"},
                    {"value": "ease-out", "desc": "transition-timing-function: cubic-bezier(0, 0, 0.2, 1);"},
                    {"value": "ease-in-out", "desc": "transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);"}
                ]
            },
            {
                name: "Transition Delay", "children": [
                    {"value": "delay-0", "desc": "transition-delay: 0s;"},
                    {"value": "delay-75", "desc": "transition-delay: 75ms;"},
                    {"value": "delay-100", "desc": "transition-delay: 100ms;"},
                    {"value": "delay-150", "desc": "transition-delay: 150ms;"},
                    {"value": "delay-200", "desc": "transition-delay: 200ms;"},
                    {"value": "delay-300", "desc": "transition-delay: 300ms;"},
                    {"value": "delay-500", "desc": "transition-delay: 500ms;"},
                    {"value": "delay-700", "desc": "transition-delay: 700ms;"},
                    {"value": "delay-1000", "desc": "transition-delay: 1000ms;"}
                ]
            },
            {
                name: "Animation", "children": [
                    {"value": "animate-none ", "desc": "animation: none;"},
                    {"value": "animate-spin", "desc": "animation: spin 1s linear infinite;"},
                ]
            }
        ]
    },
    {
        "name": "Transforms", "children": [
            {
                name: "Scale", "children": [
                    {"value": "scale-0", "desc": "transform: scale(0);"},
                    {"value": "scale-x-0", "desc": "transform: scaleX(0);"},
                    {"value": "scale-y-0", "desc": "transform: scaleY(0);"},
                    {"value": "scale-50", "desc": "transform: scale(.5);"},
                    {"value": "scale-x-50", "desc": "transform: scaleX(.5);"}
                ]
            }, {
                name: "Rotate", "children": [
                    {"value": "rotate-0", "desc": "transform: rotate(0deg);"},
                    {"value": "rotate-1", "desc": "transform: rotate(1deg);"},
                    {"value": "rotate-2", "desc": "transform: rotate(2deg);"},
                    {"value": "rotate-3", "desc": "transform: rotate(3deg);"},
                    {"value": "rotate-6", "desc": "transform: rotate(6deg);"},
                    {"value": "rotate-12", "desc": "transform: rotate(12deg);"},
                    {"value": "rotate-45", "desc": "transform: rotate(45deg);"},
                    {"value": "rotate-90", "desc": "transform: rotate(90deg);"},
                    {"value": "rotate-180", "desc": "transform: rotate(180deg);"}
                ]
            }, {
                name: "Translate", "children": [
                    {"value": "translate-x-0", "desc": "transform: translateX(0px);"},
                    {"value": "translate-y-0", "desc": "transform: translateY(0px);"},
                    {"value": "translate-x-px", "desc": "transform: translateX(1px);"},
                    {"value": "translate-y-px", "desc": "transform: translateY(1px);"},
                    {"value": "translate-x-0.5", "desc": "transform: translateX(0.125rem);"},
                    {"value": "translate-y-0.5", "desc": "transform: translateY(0.125rem);"}
                ]
            }, {
                name: "Skew", "children": [
                    {"value": "skew-x-0", "desc": "transform: skewX(0deg);"},
                    {"value": "skew-y-0", "desc": "transform: skewY(0deg);"},
                    {"value": "skew-x-1", "desc": "transform: skewX(1deg);"},
                    {"value": "skew-y-1", "desc": "transform: skewY(1deg);"},
                    {"value": "skew-x-2", "desc": "transform: skewX(2deg);"},
                    {"value": "skew-y-2", "desc": "transform: skewY(2deg);"},
                    {"value": "skew-x-3", "desc": "transform: skewX(3deg);"},
                    {"value": "skew-y-3", "desc": "transform: skewY(3deg);"},
                    {"value": "skew-x-6", "desc": "transform: skewX(6deg);"},
                    {"value": "skew-y-6", "desc": "transform: skewY(6deg);"},
                    {"value": "skew-x-12", "desc": "transform: skewX(12deg);"},
                    {"value": "skew-y-12", "desc": "transform: skewY(12deg);"}
                ]
            }, {
                name: "Transform Origin", "children": [
                    {"value": "origin-center", "desc": "transform-origin: center;"},
                    {"value": "origin-top", "desc": "transform-origin: top;"},
                    {"value": "origin-top-right", "desc": "transform-origin: top right;"},
                    {"value": "origin-right", "desc": "transform-origin: right;"},
                    {"value": "origin-bottom-right", "desc": "transform-origin: bottom right;"},
                    {"value": "origin-bottom", "desc": "transform-origin: bottom;"},
                    {"value": "origin-bottom-left", "desc": "transform-origin: bottom left;"},
                    {"value": "origin-left", "desc": "transform-origin: left;"},
                    {"value": "origin-top-left", "desc": "transform-origin: top left;"}
                ]
            },
        ]
    },
    {
        "name": "Interactivity", "children": [
            {
                name: "Accent Color", "children": [
                    {"value": "accent-inherit", "desc": "accent-color: inherit;"},
                    {"value": "accent-current", "desc": "accent-color: currentColor;"},
                    {"value": "accent-transparent", "desc": "accent-color: transparent;"},
                    {"value": "accent-black", "desc": "accent-color: #000;"},
                    {"value": "accent-white", "desc": "accent-color: #fff;"}
                ]
            }, {
                name: "Appearance", "children": [
                    {"value": "appearance-none", "desc": "appearance: none;"},
                    {"value": "appearance-auto", "desc": "appearance: auto;"}
                ]
            }, {
                name: "Cursor", "children": [
                    {"value": "cursor-auto", "desc": "cursor: auto;"},
                    {"value": "cursor-default", "desc": "cursor: default;"},
                    {"value": "cursor-pointer", "desc": "cursor: pointer;"},
                    {"value": "cursor-wait", "desc": "cursor: wait;"},
                    {"value": "cursor-text", "desc": "cursor: text;"},
                    {"value": "cursor-move", "desc": "cursor: move;"},
                    {"value": "cursor-help", "desc": "cursor: help;"},
                    {"value": "cursor-not-allowed", "desc": "cursor: not-allowed;"},
                    {"value": "cursor-none", "desc": "cursor: none;"},
                    {"value": "cursor-context-menu", "desc": "cursor: context-menu;"},
                    {"value": "cursor-progress", "desc": "cursor: progress;"},
                    {"value": "cursor-cell", "desc": "cursor: cell;"},
                    {"value": "cursor-crosshair", "desc": "cursor: crosshair;"},
                    {"value": "cursor-vertical-text", "desc": "cursor: vertical-text;"},
                    {"value": "cursor-alias", "desc": "cursor: alias;"},
                    {"value": "cursor-copy", "desc": "cursor: copy;"},
                    {"value": "cursor-no-drop", "desc": "cursor: no-drop;"},
                    {"value": "cursor-grab", "desc": "cursor: grab;"},
                    {"value": "cursor-grabbing", "desc": "cursor: grabbing;"},
                    {"value": "cursor-all-scroll", "desc": "cursor: all-scroll;"},
                    {"value": "cursor-col-resize", "desc": "cursor: col-resize;"},
                    {"value": "cursor-row-resize", "desc": "cursor: row-resize;"},
                    {"value": "cursor-n-resize", "desc": "cursor: n-resize;"},
                    {"value": "cursor-e-resize", "desc": "cursor: e-resize;"},
                    {"value": "cursor-s-resize", "desc": "cursor: s-resize;"},
                    {"value": "cursor-w-resize", "desc": "cursor: w-resize;"},
                    {"value": "cursor-ne-resize", "desc": "cursor: ne-resize;"},
                    {"value": "cursor-nw-resize", "desc": "cursor: nw-resize;"},
                    {"value": "cursor-se-resize", "desc": "cursor: se-resize;"},
                    {"value": "cursor-sw-resize", "desc": "cursor: sw-resize;"},
                    {"value": "cursor-ew-resize", "desc": "cursor: ew-resize;"},
                    {"value": "cursor-ns-resize", "desc": "cursor: ns-resize;"},
                    {"value": "cursor-nesw-resize", "desc": "cursor: nesw-resize;"},
                    {"value": "cursor-nwse-resize", "desc": "cursor: nwse-resize;"},
                    {"value": "cursor-zoom-in", "desc": "cursor: zoom-in;"},
                    {"value": "cursor-zoom-out", "desc": "cursor: zoom-out;"}
                ]
            }, {
                name: "Caret Color", "children": [
                    {"value": "caret-inherit", "desc": "caret-color: inherit;"},
                    {"value": "caret-current", "desc": "caret-color: currentColor;"},
                    {"value": "caret-transparent", "desc": "caret-color: transparent;"},
                    {"value": "caret-black", "desc": "caret-color: #000;"},
                    {"value": "caret-white", "desc": "caret-color: #fff;"}
                ]
            }, {
                name: "Pointer Events", "children": [
                    {"value": "pointer-events-none", "desc": "pointer-events: none;"},
                    {"value": "pointer-events-auto", "desc": "pointer-events: auto;"}
                ]
            }, {
                name: "Resize", "children": [
                    {"value": "resize-none", "desc": "resize: none;"},
                    {"value": "resize-y", "desc": "resize: vertical;"},
                    {"value": "resize-x", "desc": "resize: horizontal;"},
                    {"value": "resize", "desc": "resize: both;"}
                ]
            }, {
                name: "Scroll Behavior", "children": [
                    {"value": "scroll-auto", "desc": "scroll-behavior: auto;"},
                    {"value": "scroll-smooth", "desc": "scroll-behavior: smooth;"}
                ]
            }, {
                name: "Scroll Margin", "children": [
                    {"value": "scroll-m-0", "desc": "scroll-margin: 0px;"},
                    {"value": "scroll-mx-0", "desc": "scroll-margin-left: 0px; scroll-margin-right: 0px;"},
                    {"value": "scroll-my-0", "desc": "scroll-margin-top: 0px; scroll-margin-bottom: 0px;"},
                    {"value": "scroll-ms-0", "desc": "scroll-margin-inline-start: 0px;"},
                    {"value": "scroll-me-0", "desc": "scroll-margin-inline-end: 0px;"},
                    {"value": "scroll-mt-0", "desc": "scroll-margin-top: 0px;"},
                    {"value": "scroll-mr-0", "desc": "scroll-margin-right: 0px;"},
                    {"value": "scroll-mb-0", "desc": "scroll-margin-bottom: 0px;"},
                    {"value": "scroll-ml-0", "desc": "scroll-margin-left: 0px;"}
                ]
            }, {
                name: "Scroll Padding", "children": [
                    {"value": "scroll-p-0", "desc": "scroll-padding: 0px;"},
                    {"value": "scroll-px-0", "desc": "scroll-padding-left: 0px; scroll-padding-right: 0px;"},
                    {"value": "scroll-py-0", "desc": "scroll-padding-top: 0px; scroll-padding-bottom: 0px;"},
                    {"value": "scroll-ps-0", "desc": "scroll-padding-inline-start: 0px;"},
                    {"value": "scroll-pe-0", "desc": "scroll-padding-inline-end: 0px;"}
                ]
            }, {
                name: "Scroll Snap Align", "children": [
                    {"value": "snap-start", "desc": "scroll-snap-align: start;"},
                    {"value": "snap-end", "desc": "scroll-snap-align: end;"},
                    {"value": "snap-center", "desc": "scroll-snap-align: center;"},
                    {"value": "snap-align-none", "desc": "scroll-snap-align: none;"}
                ]
            }, {
                name: "Scroll Snap Stop", "children": [
                    {"value": "snap-normal", "desc": "scroll-snap-stop: normal;"},
                    {"value": "snap-always", "desc": "scroll-snap-stop: always;"}
                ]
            }, {
                name: "Scroll Snap Type", "children": [
                    {"value": "snap-none", "desc": "scroll-snap-type: none;"},
                    {"value": "snap-x", "desc": "scroll-snap-type: x var(--tw-scroll-snap-strictness);"},
                    {"value": "snap-y", "desc": "scroll-snap-type: y var(--tw-scroll-snap-strictness);"},
                    {"value": "snap-both", "desc": "scroll-snap-type: both var(--tw-scroll-snap-strictness);"},
                    {"value": "snap-mandatory", "desc": "--tw-scroll-snap-strictness: mandatory;"},
                    {"value": "snap-proximity", "desc": "--tw-scroll-snap-strictness: proximity;"}
                ]
            }, {
                name: "Touch Action", "children": [
                    {"value": "touch-auto", "desc": "touch-action: auto;"},
                    {"value": "touch-none", "desc": "touch-action: none;"},
                    {"value": "touch-pan-x", "desc": "touch-action: pan-x;"},
                    {"value": "touch-pan-left", "desc": "touch-action: pan-left;"},
                    {"value": "touch-pan-right", "desc": "touch-action: pan-right;"},
                    {"value": "touch-pan-y", "desc": "touch-action: pan-y;"},
                    {"value": "touch-pan-up", "desc": "touch-action: pan-up;"},
                    {"value": "touch-pan-down", "desc": "touch-action: pan-down;"},
                    {"value": "touch-pinch-zoom", "desc": "touch-action: pinch-zoom;"},
                    {"value": "touch-manipulation", "desc": "touch-action: manipulation;"}
                ]
            }, {
                name: "User Select", "children": [
                    {"value": "select-none", "desc": "user-select: none;"},
                    {"value": "select-text", "desc": "user-select: text;"},
                    {"value": "select-all", "desc": "user-select: all;"},
                    {"value": "select-auto", "desc": "user-select: auto;"}
                ]
            }, {
                name: "Will Change", "children": [
                    {"value": "will-change-auto", "desc": "will-change: auto;"},
                    {"value": "will-change-scroll", "desc": "will-change: scroll-position;"},
                    {"value": "will-change-contents", "desc": "will-change: contents;"},
                    {"value": "will-change-transform", "desc": "will-change: transform;"}
                ]
            },
        ]
    },
    {
        "name": "SVG", "children": [
            {
                name: "Fill", "children": [
                    {"value": "fill-none", "desc": "fill: none;"},
                    {"value": "fill-inherit", "desc": "fill: inherit;"},
                    {"value": "fill-current", "desc": "fill: currentColor;"},
                    {"value": "fill-transparent", "desc": "fill: transparent;"},
                    {"value": "fill-black", "desc": "fill: #000;"},
                    {"value": "fill-white", "desc": "fill: #fff;"}
                ]
            }, {
                name: "Stroke", "children": [
                    {"value": "stroke-none", "desc": "stroke: none;"},
                    {"value": "stroke-inherit", "desc": "stroke: inherit;"},
                    {"value": "stroke-current", "desc": "stroke: currentColor;"},
                    {"value": "stroke-transparent", "desc": "stroke: transparent;"},
                    {"value": "stroke-black", "desc": "stroke: #000;"},
                    {"value": "stroke-white", "desc": "stroke: #fff;"}
                ]
            }, {
                name: "Stroke Width", "children": [
                    {"value": "stroke-0", "desc": "stroke-width: 0;"},
                    {"value": "stroke-1", "desc": "stroke-width: 1;"},
                    {"value": "stroke-2", "desc": "stroke-width: 2;"}
                ]
            },
        ]
    },
    {
        "name": "Accessibility", "children": [
            {
                name: "bbbb", "children": [
                    {"value": "sr-only", "desc": ""},
                    {"value": "not-sr-only", "desc": ""}
                ]
            }, {
                name: "Forced Color Adjust", "children": [
                    {"value": "forced-color-adjust-auto", "desc": ""},
                    {"value": "forced-color-adjust-none", "desc": ""}
                ]
            },
        ]
    },
]
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
        name: "demo", children: [
            {
                name: "demo", children: [
                    {value: "demo1", desc: "demo"},
                ],
            },
        ]
    }
]
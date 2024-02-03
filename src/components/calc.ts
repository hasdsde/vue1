//计算用类

import axios from "axios";
import {GD_WEB_KEY} from "components/pwd";

export interface sorts {
    name: string,
    data: { code: string; name: string; weight: number }[]
}

export const SortData: sorts[] = [
    {
        name: "美食餐饮", data: [
            {name: "购物服务", code: "060000", weight: 2},
            {name: "住宅", code: "120000", weight: 3},
            {name: "企业", code: "170000", weight: 1},
            {name: "风景名胜", code: "110000", weight: 2},
            {name: "餐饮服务", code: "050000", weight: -5},
        ],
    },
    {
        name: "教育培训", data: [
            {name: "学校", code: "141200", weight: 5},
            {name: "培训机构", code: "141400", weight: -5},
            {name: "图书馆", code: "140500", weight: 2},
            {name: "购物服务", code: "060100", weight: 2},
            {name: "商场", code: "060100", weight: 2},
        ],
    }, {
        name: "生活服务", data: [
            {name: "住宅", code: "120000", weight: 5},
            {name: "企业", code: "170000", weight: 2},
            {name: "生活服务", code: "070000", weight: -2},
        ],
    }, {
        name: "美容养生", data: [
            {name: "住宅", code: "120000", weight: 2},
            {name: "医疗保健", code: "090000", weight: -4},
            {name: "生活服务", code: "070000", weight: 3},
            {name: "商场", code: "060100", weight: 2},
        ],
    }, {
        name: "零售连锁", data: [
            {name: "住宅", code: "120000", weight: 5},
            {name: "企业", code: "170000", weight: 3},
            {name: "商场", code: "060100", weight: 2},
            {name: "便民", code: "060200", weight: -5},
        ],
    }, {
        name: "母婴幼儿", data: [
            {name: "小学", code: "141203", weight: 5},
            {name: "幼儿园", code: "141204", weight: 2},
            {name: "住宅", code: "120000", weight: 3},
            {name: "商场", code: "060100", weight: 2},
            {name: "婴儿服务场所", code: "072000", weight: -5},
        ],
    }, {
        name: "家居建材", data: [
            {name: "家居建材市场", code: "060600", weight: -5},
            {name: "家电电子卖场", code: "060300", weight: 2},
            {name: "住宅", code: "120000", weight: 3},
            {name: "综合市场", code: "060700", weight: 3},
        ],
    }, {
        name: "服装鞋帽", data: [
            {name: "服装", code: "061100", weight: -5},
            {name: "商场", code: "060100", weight: 2},
            {name: "住宅", code: "120000", weight: 3},
        ],
    }, {
        name: "汽车项目", data: [
            {name: "汽车维修", code: "030000", weight: -5},
            {name: "汽车销售", code: "020000", weight: 4},
            {name: "摩托车服务", code: "040000", weight: 1},
        ],
    }, {
        name: "休闲娱乐", data: [
            {name: "娱乐场所", code: "080300", weight: -5},
            {name: "餐饮服务", code: "050000", weight: 2},
            {name: "购物服务", code: "060000", weight: 4},
            {name: "住宅", code: "120000", weight: 2},
            {name: "企业", code: "170000", weight: 3},
            {name: "风景名胜", code: "110000", weight: 3},
        ],
    }, {
        name: "互联网", data: [
            {name: "企业", code: "170000", weight: 2},
            {name: "住宅", code: "120000", weight: 1},
        ],
    },
]
export const TransportData = [
    {name: "停车场", code: "150900", weight: 5},
    {name: "公交车站", code: "150700", weight: 5},
    {name: "火车站", code: "150200", weight: 2},
    {name: "机场", code: "150100", weight: 2},
]

export async function AroundSearch(data: number[], lng: number, lat: number) {
    let code: any[] = []
    let url = "https://restapi.amap.com/v5/place/around?parameters"
    let result = {}
    data.forEach((item: any) => {
        item.result = []
        item.score = 0.0
        code.push(item.code)
    })
    let params = {
        "key": GD_WEB_KEY,
        "types": code.toString().replaceAll(",", "|"),
        "location": `${lng},${lat}`,
        "radius": 5000,
        "sortrule": 'distance',
        "page_size": 25,
        "page_num": 1,
    }
    result = await axios.get(url, {params})
    result.data.pois.forEach((poi: any) => {
        data.score = 0
        data.forEach((item: any) => {
            if (poi.type.indexOf(item.name) > -1) {
                item.result.push({
                    name: poi.name,
                    address: poi.address,
                    distance: poi.distance,
                    location: poi.name,
                    type: poi.name,
                    weight: item.weight,
                    score: analyseScore(item.weight, poi.distance)
                })
                item.score = item.score + parseInt(analyseScore(item.weight, poi.distance))
            }
            data.score += item.score
        })
    })
    return data
}

function analyseScore(weight: number, distance: number): string {
    if (distance <= 500) {
        return (weight * (500 - distance) / 500 * 100).toFixed(1)
    }
    if (distance <= 1000) {
        return (weight * (1000 - distance) / 1000 * 80).toFixed(1)
    }
    if (distance <= 2000) {
        return (weight * (1000 - distance) / 1000 * 30).toFixed(1)
    }
    if (distance <= 3000) {
        return (weight * (3000 - distance) / 3000 * 20).toFixed(1)
    }
    if (distance <= 4000) {
        return (weight * (4000 - distance) / 4000 * 15).toFixed(1)
    }
    if (distance <= 5000) {
        return (weight * (5000 - distance) / 5000 * 10).toFixed(1)
    }
}

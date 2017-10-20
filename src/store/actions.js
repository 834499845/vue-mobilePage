/**
 * Created by LangK on 2016/12/20.
 */
import Vue from 'vue'
require("../../API/config")
export default {
    getproductListGetProductList({}, postdata) {
        var ipstr = global.productListGetProductListPath
        return Vue.http.post(ipstr, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    getproductListGetProductInfo({}, postdata) {
        var ipstr = global.productListGetProductInfoPath
        return Vue.http.post(ipstr, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    getapiMyCouponsFindCouponPath({}, postdata) {
        var ipstr = global.apiMyCouponsFindCouponPath
        return Vue.http.post(ipstr, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    }
}

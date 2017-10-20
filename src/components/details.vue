<template xmlns:v-on="http://www.w3.org/1999/xhtml">
    <div class="details">
        <div class="detailsTitle">
            <div>
                商品介绍
            </div>
        </div>
        <div id="detailsHtml">
            <div class="htmlCont" v-html="detailsCont">

            </div>
        </div>
        <!--<div class="detailsParameter">
            <div>
                <div>
                    品牌
                </div>
                <div>
                    罗京
                </div>
            </div>
            <div>
                <div>
                    类型
                </div>
                <div>
                    罗京
                </div>
            </div>
            <div>
                <div>
                    颜色
                </div>
                <div>
                    罗京
                </div>
            </div>
            <div>
                <div>
                    品牌片品
                </div>
                <div>
                    传输方式
                </div>
            </div>
        </div>
        <div class="detailsImg">
            <ul>
                <li v-for="item in imgs">
                    <img :src="item.productUrl" alt="商品大图">
                </li>
            </ul>
        </div>-->
    </div>
</template>
<script>
    import {
        mapActions,
        mapState
    } from 'vuex'
    export default {
        data() {
            return {
                detailsCont: '',
                commityObj: {
                },
                imgs: []
            }
        },
        computed: mapState(['']),
        filters: {},
        created: function () {
            var self = this
            var urlStr = location.href
            var paths = ''
            var code = ''
            if (urlStr.indexOf('?')) {
                if (urlStr.indexOf('?') != -1) {
                    paths = urlStr.split('?')[1]
                    if (paths.indexOf('=')) {
                        if (paths.indexOf('=') != -1) {
                            var id = self.$route.query.id
                            if (id) {
                                self.getproductListGetProductInfo({
                                    productId: id
                                }).then((data) => {
                                    console.log('商品详情', JSON.parse(JSON.stringify(data)))
                                    self.loading = false
                                    if (data.code == 200) {
                                        if (data.data) {
                                            if (data.data.product) {
                                                if (data.data.product.details) {
                                                    self.detailsCont = data.data.product.details
                                                } else {
                                                    self.newstitle = '暂无数据'
                                                }
                                            } else {
                                                self.newstitle = '暂无数据'
                                            }
                                        } else {
                                            self.newstitle = '暂无数据'
                                        }
                                    } else {
                                        self.newstitle = '暂无数据'
                                    }
                                }).catch(msg => {
                                    self.newstitle = '暂无数据'
                                    console.log(msg)
                                })
                            } else {
                                console.log('网址错误')
                                self.newstitle = '暂无数据'
                            }
                        } else {
                            console.log('网址错误')
                            self.newstitle = '暂无数据'
                        }
                    } else {
                        console.log('网址错误')
                        self.newstitle = '暂无数据'
                    }
                } else {
                    console.log('网址错误')
                    self.newstitle = '暂无数据'
                }
            } else {
                console.log('网址错误')
                self.newstitle = '暂无数据'
            }
        },
        beforeDestroy: function () { },
        watch: {},
        methods: {
           ...mapActions(['getproductListGetProductInfo'])
        }
    }

</script>
<style scoped>
    #detailsHtml {
        width: 100%;
        overflow: hidden;
    }
    
    #detailsHtml img {
        width: 100% !important;
    }
    
    .detailsImg li {
        height: 32rem;
        width: 100%;
    }
    
    .detailsImg li img {
        width: 100%;
        height: 100%;
    }
    
    .detailsParameter {
        width: 100%;
        height: 9.387rem;
        background-color: #fff;
        overflow: hidden;
    }
    
    .detailsParameter>div:nth-child(1) {
        margin-top: 0.939rem;
    }
    
    .detailsParameter>div:nth-child(2) {
        margin-top: 0.939rem;
    }
    
    .detailsParameter>div:nth-child(3) {
        margin-top: 0.939rem;
    }
    
    .detailsParameter>div:nth-child(4) {
        margin-top: 0.939rem;
    }
    
    .detailsParameter>div {
        display: flex;
        align-items: center;
        height: 1.2rem;
        margin-left: 1.109rem;
        width: calc(100vw - 1.109rem);
    }
    
    .detailsParameter>div>div:nth-child(1) {
        width: 6.827rem;
        text-align: left;
        font-size: 1.109rem;
        line-height: 1.109rem;
        color: #030303;
        opacity: 0.55;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    
    .detailsParameter>div>div:nth-child(2) {
        width: calc(100vw - 9.136rem);
        text-align: left;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 1.109rem;
        line-height: 1.109rem;
        color: #030303;
    }
    
    .detailsTitle>div {
        margin-left: 1.109rem;
        width: calc(100vw - 1.109rem);
        line-height: 3.755rem;
        font-size: 1.28rem;
        color: #454545;
    }
    
    .detailsTitle {
        height: 3.755rem;
        width: 100%;
        background-color: #fff;
        overflow: hidden;
        position: relative;
        border-top: 1px solid #e6e6e6;
    }
    
    .detailsTitle::after {
        /*position: absolute;
        bottom: 0;
        right: 0;
        width: calc(100vw - 1.109rem);
        height: 1px;
        background-color: #eee;
        content: "";*/
    }
    
    .details {
        width: 100%;
        min-height: 12.8rem;
        overflow: hidden;
        background-color: #f5f5f5;
    }
</style>
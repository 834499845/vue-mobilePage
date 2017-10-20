<template xmlns:v-on="http://www.w3.org/1999/xhtml">
    <div class="particulars">
        <div class="navBar">
            <div>
                <ul>
                    <li v-for="(nav,index) in navs" :class="{selectNav:isSelectNav == index}" @touchend="navTouchend(index)">{{nav.name}}</li>
                </ul>
            </div>
        </div>
        <div class="content">
            <router-view class="view" keep-alive></router-view>
        </div>
        <div class="replaceFootBar">
        </div>
        <div class="footBar">
            <div class="footBarLeft">
                <div @touchend="personalTouchend">
                    <img src="/static/img/1.png" alt="个人中心">
                </div>
                <div @touchend="attentionTouchend">
                    <img src="/static/img/2.png" alt="关注">
                </div>
                <div @touchend="shopingCatTouchend">
                    <img src="/static/img/3.png" alt="加入购物车">
                </div>
            </div>
            <div class="footBarCenter" @touchend="shopCatTouchend">
                加入购物车
            </div>
            <div class="footBarRight" @touchend="purchaseTouchend">
                立即购买
            </div>
        </div>
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
                isSelectNav: 0,
                navs: [{
                    name: '商品',
                    path: 'commodity'
                }, {
                    name: '评价',
                    path: 'evaluate'
                }, {
                    name: '详情',
                    path: 'details'
                }]
            }
        },
        computed: mapState(['']),
        filters: {},
        created: function () {
            var self = this
            this.$router.push({
                path: '/home/particulars/commodity',
                query: self.$route.query
            })
        },
        beforeDestroy: function () { },
        watch: {},
        methods: {
            // navbar touch event
            navTouchend(index) {
                var self = this
                this.isSelectNav = index
                var pathStr = this.navs[index].path
                console.log(pathStr)
                this.$router.push({
                    path: '/home/particulars/' + pathStr,
                    query: self.$route.query
                })
            },
            // personal touch event
            personalTouchend() {

            },
            // attention touch event
            attentionTouchend() {

            },
            // shoping touch event
            shopingCatTouchend() {

            },
            // shopCat touch event
            shopCatTouchend() {

            },
            // purchase touch event
            purchaseTouchend() {

            },
      ...mapActions(['getproductListGetProductList', 'getproductListGetProductInfo'])
        }
    }

</script>
<style scoped lang="scss">
    $color:red;
    @mixin font-dpr($font-size) {
        font-size: $font-size;
        [data-dpr="2"] & {
            font-size: $font-size * 2;
        }
        [data-dpr="3"] & {
            font-size: $font-size * 3;
        }
    }
    
    .content {
        width: 100%;
        min-height: calc(100vh - 7.765rem);
        background-color: #f5f5f5;
    }
    
    .replaceFootBar {
        height: 3.925rem;
    }
    
    .footBarLeft {
        display: flex;
        width: calc(100vw - 18.774rem);
        align-items: center;
    }
    
    .footBarLeft>div {
        width: 1.877rem;
        height: 1.877rem;
    }
    
    .footBarLeft>div:nth-child(1) {
        margin-left: 1.707rem;
    }
    
    .footBarLeft>div:nth-child(2) {
        margin-left: 2.1333rem;
    }
    
    .footBarLeft>div:nth-child(3) {
        margin-left: 2.1333rem
    }
    
    .footBarLeft>div img {
        width: 100%;
        height: 100%;
    }
    
    .footBarCenter {
        width: 0.387rem;
        text-align: center;
        line-height: 0.925rem;
        height: 100%;
        background-color: #fd8f4b;
        font-size: 0.365rem;
        color: #fff;
    }
    
    .footBarRight {
        width: 0.387rem;
        text-align: center;
        line-height: 3.925rem;
        height: 100%;
        background-color: #ed5236;
        font-size: 1.365rem;
        color: #fff;
    }
    
    .footBar {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3.925rem;
        border-top: 1px solid #e6e6e6;
        display: flex;
        align-items: center;
        background-color: #fff;
    }
    
    .navBar>div li {
        width: 2.816rem;
        height: calc(1.2rem - 2px);
        text-align: center;
        line-height: 1.2rem;
        color: #2e2e2e;
        @include font-dpr(14px);
    }
    
    .navBar>div .selectNav {
        border-bottom: 2px solid #ff9f4d;
        /*color: #ff9f4d;*/
    }
    
    .navBar>div ul {
        display: flex;
        justify-content: space-between;
    }
    
    .navBar>div {
        width: 4.66667rem;
        height: 1.2rem;
        border: 1px solid $color;
    }
    
    .navBar {
        height: 1.2rem;
        width: 100%;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid red;
    }
    
    .particulars {
        width: 100%;
        height: 100%;
        position: relative;
    }
</style>
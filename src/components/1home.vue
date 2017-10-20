<template xmlns:v-on="http://www.w3.org/1999/xhtml">
    <div id="app" class="home">
        <div class="fullpage-container">
            <div class="fullpage-wp" v-fullpage="opts">
                <div class="page-1 page">
                    <div class="part-time" v-animate="{value: 'yuanIn',delay: 0}">
                        最强鸡肉
                    </div>
                    <div class="part-1-back" v-animate="{value: 'gunIn',delay: 100}">
                        <img src="/static/img/01.jpg" alt="">
                    </div>
                    <div class="part-1-back1" v-animate="{value: 'daXiaoIn',delay: 300}">
                        点击进入
                    </div>
                    <div class="aaaa">
                    </div>
                    <div class="container" v-animate="{value: 'jinduAAIn',delay: 300}">
                    </div>
                </div>
                <div class="page-2 page">
                    <template v-if="expression">
                        <div class="part-2-time" v-animate="{value: 'slideInLeft',delay: 0}">
                            <img src="/static/img/time2.jpg" alt="">
                        </div>
                    </template>
                    <template v-else>
                        <div class="part-2-time">
                            <img src="/static/img/time2.jpg" alt="">
                        </div>
                    </template>
                    <div class="part-2-page" v-animate="{value: 'slideInRight',delay: 0}">
                        <img src="/static/img/page2.jpg" alt="">
                    </div>
                    <div class="aaaa">

                    </div>
                    <div class="container" v-animate="{value: 'jinduAAIn',delay: 300}">
                    </div>
                    <div class="part-2-back" v-animate="{value: 'zoomIn'}">
                        <img src="/static/img/back.png" alt="">
                    </div>
                </div>
                <div class="page-3 page">
                    <div class="part-3-ranking" v-animate="{value: 'slideInLeft',delay: 0}">
                        <img src="/static/img/time2.jpg" alt="">
                    </div>
                    <div class="part-1-back" v-animate="{value: 'gunIn',delay: 100}">
                        <img src="/static/img/01.jpg" alt="">
                    </div>
                </div>
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
            var self = this
            return {
                expression: true,
                opts: {
                    start: 0,// 从第几页开始
                    backcOp: false,// 返回时是否继续执行动画
                    dir: 'v', //滚动方向，v 垂直 h 水平
                    loop: false,// 是否支持循环播放
                    duration: 500, // 多少秒之后执行动画 默认500ms
                }
            }
        },
        computed: mapState(['']),
        filters: {},
        created: function () {
        },
        beforeDestroy: function () { },
        watch: {
        },
        methods: {
        }
    }

</script>
<style scoped>
    .page-1 {
        background: url('/static/img/1.png') no-repeat;
        background-size: 100%;
        position: relative;
    }
    
    .part-time {
        position: absolute;
        bottom: 151px;
        left: 15px;
        width: 100%;
        height: 25px;
        line-height: 25px;
        width: 100px;
        color: #fff;
        font-size: 20px;
        font-weight: 700;
        text-align: center;
        border: 1px solid #aea;
        background-color: #aea;
    }
    
    .part-1-back {
        position: absolute;
        bottom: 20px;
        left: 150px;
        width: 100%;
        height: 50px;
        width: 50px;
        border-radius: 50%;
        overflow: hidden;
    }
    
    .part-1-back img {
        width: 100%;
        height: 100%;
    }
    
    .part-1-back1 {
        position: absolute;
        bottom: 80px;
        left: 150px;
        width: 100%;
        height: 30px;
        line-height: 30px;
        width: 100px;
        overflow: hidden;
        background-color: #fff;
        text-align: center;
        border-radius: 15px;
        font-size: 15px;
        font-weight: 700px;
        color: #aea;
    }
    
    .aaaa {
        position: absolute;
        top: 0;
        left: 0;
        width: 200px;
        height: 15px;
        border-radius: 6px;
        background-color: #fff;
    }
    
    .container {
        position: absolute;
        top: 0;
        left: 0;
        width: 50px !important;
        height: 15px;
        border-radius: 6px;
        background-color: #f63a0f;
    }
    
    .progress {
        margin: 0;
        height: 15px;
        border-radius: 6px;
        -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.25), 0 1px rgba(255, 255, 255, 0.08);
        box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.25), 0 1px rgba(255, 255, 255, 0.08);
    }
    
    .container1 {
        margin: 10px;
        width: 420px;
        text-align: center;
    }
    
    .progress1 {
        padding: 4px;
        background: rgba(0, 0, 0, 0.25);
        border-radius: 6px;
        margin: 0;
        width: 300px;
        -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.25), 0 1px rgba(255, 255, 255, 0.08);
        box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.25), 0 1px rgba(255, 255, 255, 0.08);
    }
    
    .progress-bar1 {
        top: 0;
        left: 0;
        position: relative;
        height: 16px;
        border-radius: 4px;
        background-color: #f63a0f;
        -webkit-box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.25), inset 0 1px rgba(255, 255, 255, 0.1);
        box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.25), inset 0 1px rgba(255, 255, 255, 0.1);
    }
    
    .page-2 {
        background: url('/static/img/second.png') no-repeat;
        background-size: 100%;
        position: relative;
    }
    
    .part-2-time {
        position: absolute;
        width: 100%;
        height: 5.46667rem;
        top: 2.66667rem;
        left: 0;
        display: flex;
        justify-content: center;
        color: #fff;
    }
    
    .part-2-time img {
        width: 7.06667rem;
        height: 5.46667rem;
    }
    
    .part-2-page {
        position: absolute;
        width: 100%;
        height: 4rem;
        bottom: 3.46667rem;
        left: 0;
        display: flex;
        justify-content: center;
    }
    
    .part-2-page img {
        width: 7.06667rem;
        height: 4rem;
    }
    
    .page-3 {
        background: url('/static/img/thirdly.png') no-repeat;
        background-size: 100%;
        position: relative;
    }
    
    .part-3-ranking {
        position: absolute;
        width: 100%;
        height: 4.8rem;
        top: 2.66667rem;
        left: 0;
        display: flex;
        justify-content: center;
    }
    
    .part-3-ranking img {
        width: 7.06667rem;
        height: 4.8rem;
    }
    
    .part-2-back {
        position: absolute;
        bottom: 20px;
        left: 0;
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .part-2-back img {
        width: 35px;
        height: 20px;
    }
    
    .part-3-back {
        position: absolute;
        bottom: 20px;
        left: 0;
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .part-3-back img {
        width: 35px;
        height: 20px;
    }
    
    .page-container {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }
    
    .page-3 {
        position: relative;
    }
    
    .page-3 p {
        position: absolute;
        text-align: center;
        width: 100px;
        height: 20px;
    }
    
    .part-3-1 {
        top: 10px;
        left: 0;
    }
    
    .part-3-2 {
        top: 70px;
        left: 50px;
    }
    
    .part-3-3 {
        top: 150px;
        left: 130px;
    }
    
    .page {
        height: 100%;
    }
    
    .home {
        background-color: #fff;
        overflow-x: hidden;
        overflow-y: hidden;
        height: 100vh;
        width: 100%;
        position: relative;
    }
</style>
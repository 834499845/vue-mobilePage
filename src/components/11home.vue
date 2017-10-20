<template>
    <div class="home">
        <ul>
            <li class="firstLi">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>编辑</div>
            </li>
            <li class="dateLi" v-for="itemOne in lists">
                <div class="itemOne-one itemTree">
                    <div class="oneTherr" @click="openClick(itemOne)">
                        <div>
                            <img v-if="itemOne.open" src="/static/img/arrowsB.jpg" alt="展开着的" title="展开着的">
                            <img v-else src="/static/img/arrowsR.jpg" alt="收起着的" title="收起着的">
                        </div>
                        <div>
                            {{itemOne.name}}
                        </div>
                    </div>
                    <div>{{itemOne.name1}}</div>
                    <div>{{itemOne.name2}}</div>
                    <div>{{itemOne.name3}}</div>
                    <div class="operation">
                        <div @click="operationClick(itemOne)">编辑</div>
                        <div @click="operationClick(itemOne)">修改</div>
                        <div @click="operationClick(itemOne)">删除</div>
                    </div>
                </div>
                <div class="itemOne-two" v-show='itemOne.open'>
                    <ul>
                        <li v-for="itemTwo in itemOne.children">
                            <div class="itemTree">
                                <div @click="openClick(itemTwo)">
                                    {{itemTwo.name}}
                                </div>
                                <div>{{itemTwo.name1}}</div>
                                <div>{{itemTwo.name2}}</div>
                                <div>{{itemTwo.name3}}</div>
                                <div class="operation">
                                    <div>编辑</div>
                                    <div>修改</div>
                                    <div>删除</div>
                                </div>
                            </div>
                            <div class="itemOne-two" v-show='itemTwo.open'>
                                <ul>
                                    <li v-for="itemTherr in itemTwo.children">
                                        <div class="itemTree">
                                            <div @click="openClick(itemTherr)">
                                                {{itemTherr.name}}
                                            </div>
                                            <div>{{itemTherr.name1}}</div>
                                            <div>{{itemTherr.name2}}</div>
                                            <div>{{itemTherr.name3}}</div>
                                            <div class="operation">
                                                <div>编辑</div>
                                                <div>修改</div>
                                                <div>删除</div>
                                            </div>
                                        </div>
                                        <div class="itemOne-two" v-show='itemTherr.open'>
                                            <ul>
                                                <li v-for="itemFour in itemTherr.children">
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
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
                lists: []
            }
        },
        computed: mapState(['']),
        filters: {},
        created: function () {
            this.lists = [
                {
                    id: 220,
                    parentId: 0,
                    clickNode: false,
                    name: "A",
                    name1: 'A',
                    name2: 'A',
                    name3: 'A',
                    open: true,
                    iconClass: "iconClassRoot",
                    children: [
                        {
                            id: 221,
                            parentId: 220,
                            clickNode: false,
                            open: true,
                            name: "A-1",
                            name1: 'A-1',
                            name2: 'A-1',
                            name3: 'A-1',
                            path: "",
                            children: [{
                                id: 222,
                                parentId: 221,
                                clickNode: false,
                                open: true,
                                name: "A-1-1",
                                name1: 'A-1-1',
                                name2: 'A-1-1',
                                name3: 'A-1-1',
                                path: "",
                                // children: [{
                                //     id: 223,
                                //     parentId: 222,
                                //     clickNode: false,
                                //     name: "1-1-1-1",
                                //     path: ""
                                // }],
                            }],
                        },
                        {
                            id: 21,
                            parentId: 20,
                            clickNode: false,
                            name: "A-2",
                            name1: 'B-2',
                            name2: 'C-2',
                            name3: 'D-2',
                            open: true,
                            path: "",
                            children: [{
                                id: 22,
                                parentId: 21,
                                clickNode: false,
                                open: true,
                                name: "A-2-1",
                                name1: 'B-2-1',
                                name2: 'C-2-1',
                                name3: 'D-2-1',
                                path: "",
                                // children: [{
                                //     id: 23,
                                //     parentId: 22,
                                //     clickNode: false,
                                //     name: "1-2-1-1",
                                //     path: ""
                                // }],
                            }],
                        }
                    ]
                },
                {
                    id: 220,
                    parentId: 0,
                    clickNode: false,
                    name: "F",
                    name1: 'F',
                    name2: 'F',
                    name3: 'F',
                    open: true,
                    iconClass: "iconClassRoot",
                    children: [
                        {
                            id: 221,
                            parentId: 220,
                            clickNode: false,
                            open: true,
                            name: "F-1",
                            name1: 'F-1',
                            name2: 'F-1',
                            name3: 'F-1',
                            path: "",
                            children: [{
                                id: 222,
                                parentId: 221,
                                clickNode: false,
                                open: true,
                                name: "F-1-1",
                                name1: 'F-1-1',
                                name2: 'F-1-1',
                                name3: 'F-1-1',
                                path: "",
                                // children: [{
                                //     id: 223,
                                //     parentId: 222,
                                //     clickNode: false,
                                //     name: "1-1-1-1",
                                //     path: ""
                                // }],
                            }],
                        },
                        {
                            id: 21,
                            parentId: 20,
                            clickNode: false,
                            open: true,
                            name: "F-2",
                            name1: 'F-2',
                            name2: 'F-2',
                            name3: 'F-2',
                            path: "",
                            children: [{
                                id: 22,
                                parentId: 21,
                                clickNode: false,
                                open: true,
                                name: "F-2-1",
                                name1: 'F-2-1',
                                name2: 'F-2-1',
                                name3: 'F-2-1',
                                path: "",
                                // children: [{
                                //     id: 23,
                                //     parentId: 22,
                                //     clickNode: false,
                                //     name: "1-2-1-1",
                                //     path: ""
                                // }],
                            }],
                        }
                    ]
                }
            ]
        },
        beforeDestroy: function () { },
        watch: {
        },
        methods: {
            openClick(m) {
                m.open = !m.open
            },
            operationClick(m) {
                console.log(m)
            },
        }
    }

</script>
<style scoped>
    .oneTherr {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .oneTherr img {
        width: 13px;
        height: 13px;
    }
    
    .itemOne-two {
        border: 1px solid #ccc;
        width: 100%;
    }
    
    .itemOne-two ul {
        width: 100%;
    }
    
    .itemOne-two ul li {
        width: 100%;
    }
    
    .itemOne-one {
        width: 100%;
        display: flex;
    }
    
    .itemTree {
        display: flex;
        width: 100%;
    }
    
    .itemTree>div {
        width: 24%;
        height: 50px;
        border: 1px solid #ccc;
    }
    
    .dateLi {
        display: flex;
        flex-wrap: wrap;
        /*height: 50px;*/
        width: 100%;
    }
    
    .operation {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    
    .operation>div {
        border: 1px solid red;
        padding: 5px;
        border-radius: 5px;
    }
    
    .firstLi {
        display: flex;
        height: 50px;
    }
    
    .firstLi>div {
        width: 24%;
        height: 50px;
        border: 1px solid #ccc;
    }
    
    .home {
        margin: 50px;
        width: 800px;
        min-height: 500px;
        border: 1px solid #ccc;
    }
</style>
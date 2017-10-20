<style>
    .tree {
        overflow: hidden;
    }
    
    .itemOneTwo {
        width: 100%;
    }
    
    .treeTwo li .itemOneOne>div:nth-child(1) img{
        padding-left: 18px;
        border: 1px solid red;
    }
    
    .itemOneTwo ul {
        width: 100%;
        /*border: 1px solid red;*/
        overflow: hidden;
    }
    
    .listTree {
        line-height: 50px;
        text-align: center;
    }
    
    .operationOne {
        display: flex;
        align-items: center;
        /*overflow: hidden;*/
        /*border: 1px solid red;*/
    }
    
    .operationOne>div:nth-child(1) {
        margin-left: 35px;
    }
    
    .operationOne>div:nth-child(2) {
        margin-left: 15px;
    }
    
    .operationOne img {
        width: 13px;
        height: 13px;
    }
    
    .itemOneTwo ul li {
        width: 100%;
    }
    
    .itemOneOne {
        width: 100%;
        display: flex;
        height: 50px;
    }
    
    .dateLi .itemTree {
        display: flex;
        width: 100%;
    }
    
    .tree>li {
        border-bottom: 1px solid #ccc;
    }
    
    .dateLi .itemTree>div {
        width: 24%;
        /*border-left: 1px solid #ccc;*/
        /*border-bottom: 1px solid #ccc;*/
    }
    
    .dateLi .itemTree>div:nth-child(1) {
        border-left: 0;
    }
    
    .dateLi {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
    }
    
    .operation {
        display: flex;
        justify-content: space-around !important;
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
</style>
<template>
    <div>
        <ul class="tree">
            <li class="firstLi">
                <div>111</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>编辑</div>
            </li>
            <ztree-item v-for="(item,i) in lists" :unfoldFun='unfold' :nameCallBack='nameFun' :trees.sync='lists' :model.sync="item"
                :key='i'></ztree-item>
        </ul>
    </div>
</template>
<script>
    import Vue from 'vue'
    export default {
        data() {
            return {
                lists: []
            }
        },
        props: {
            // 树数据
            list: {
                type: Array,
                twoWay: true
            },
            // 点击节点回调
            nameFun: {
                type: Function,
                default: null
            },
            // 点击展开回调
            unfold: {
                type: Function,
                default: null
            },
            // // 是否展开
            // isOpen: {
            //     type: Boolean,
            //     twoWay: true,
            //     default: false
            // }
        },
        filters: {},
        created: function () {
        },
        beforeDestroy: function () { },
        watch: {
            'list': {
                handler: function () {
                    this.initTreeData();
                },
                deep: true
            }
        },
        methods: {
            initTreeData() {
                var tempList = JSON.parse(JSON.stringify(this.list));
                // 递归操作，增加删除一些属性。比如: 展开/收起
                var recurrenceFunc = (data) => {
                    data.forEach((m) => {
                        // m.clickNode = m.hasOwnProperty("clickNode") ? m.clickNode : false;
                        m.children = m.children || [];
                        m.open = m.hasOwnProperty("open") ? m.open : this.isOpen;
                        // m.isExpand = m.hasOwnProperty("open") ? m.open : this.isOpen;
                        // m.loadNode = 0;
                        recurrenceFunc(m.children);
                    })
                };
                recurrenceFunc(tempList);
                this.lists = tempList;
            },
        },
        components: {
            // 组件
            ztreeItem: {
                name: 'ztreeItem',
                props: {
                    model: {
                        type: Object,
                        twoWay: true
                    },
                    // num: {
                    //     type: Number,
                    //     twoWay: true
                    // },
                    // nodes: {
                    //     type: Number,
                    //     twoWay: true,
                    //     default: 0
                    // },
                    trees: {
                        type: Array,
                        twoWay: true,
                        default: []
                    },
                    // root: {
                    //     type: String,
                    //     twoWay: true
                    // },
                    nameCallBack: {
                        type: Function
                    },
                    unfoldFun: {
                        type: Function
                    },
                    // cxtmenufunc: {
                    //     type: Function
                    // }
                },
                methods: {
                    nameFun(m) {
                        // 查找点击的子节点
                        var recurFunc = (data, list) => {
                            data.forEach((i) => {
                                if (i.id == m.id) {
                                    if (typeof this.nameCallBack == "function") {
                                        this.nameCallBack.call(null, m, list);
                                    }
                                }
                                if (i.children) {
                                    recurFunc(i.children, i);
                                }
                            })
                        }
                        recurFunc(this.trees, this.trees);
                    },
                    openClick(m) {
                        if (typeof this.unfoldFun == 'function' && !m.open) {
                            this.unfoldFun.call(null, m)
                        } else {

                        }
                        m.open = !m.open;
                    },
                    operationUpdateClick(m) {
                        console.log(m)
                    },
                    operationLookClick(m) {
                        console.log(m)
                    },
                    operationDeleteClick(m) {
                        console.log(m)
                    }
                },
                computed: {
                    // 给（根 和 子树）赋值不同的样式
                    // rootClass() {
                    //     var strRootClass = '';
                    //     // 根判断
                    //     if (this.root == '0') {
                    //         strRootClass = (this.num == 0 && this.model.children.length == 0) ? "roots_docu" : (this.nodes == 1) || (this.num == 0 && this.nodes != this.num + 1) ?
                    //             "root_" : (this.nodes == this.num + 1) ? "bottom_" : "center_";

                    //         // 子树判断
                    //     } else if (this.root == '1') {
                    //         strRootClass = this.nodes > 1 && this.model.children.length > 0 && this.nodes != this.num + 1
                    //             ? "center_" :
                    //             (this.num == 0 && this.nodes > 1) || (this.nodes != this.num + 1) ? "center_docu" :
                    //                 this.nodes == 1 && this.num != 0 || (this.nodes == this.num + 1 && this.model.children.length > 0) ? "bottom_" : "bottom_docu";
                    //     }

                    //     return strRootClass
                    // },
                    // // 是否有儿子节点
                    // isChildren() {
                    //     return this.num + 1 != this.nodes;
                    // },
                    // // 展开/收起
                    // prefixClass() {
                    //     var returnChar = "";
                    //     if (this.rootClass.indexOf("docu") == -1) {
                    //         if (this.model.isFolder) {
                    //             returnChar = "open";
                    //         } else {
                    //             returnChar = 'close'
                    //         }
                    //     }

                    //     if (this.model.children.length == 0 && this.rootClass.indexOf("docu") == -1) {
                    //         returnChar = 'docu'
                    //     }

                    //     return returnChar;
                    // },
                    // liClassVal() {
                    //     return "level" + this.num;
                    // },
                    // spanClassVal() {
                    //     return "button level" + this.num + " switch " + this.rootClass + this.prefixClass;
                    // },
                    // aClassVal() {
                    //     return this.model.clickNode ? "level" + this.num + ' curSelectedNode' : "level" + this.num;
                    // },
                    // ulClassVal() {
                    //     return this.isChildren && this.model.children.length > 0 ? "level" + this.num + ' line' : "level" + this.num;
                    // }
                },
                template:
                `<li class="dateLi">
                   <div class="itemOneOne itemTree">
                        <div class="operationOne">
                             <div @click="openClick(model)">
                               <img v-if="model.open" src="/static/img/arrowsB.jpg" alt="展开着的" title="展开着的">
                               <img v-else src="/static/img/arrowsR.jpg" alt="收起着的" title="收起着的">
                             </div>
                            <div  @click='nameFun(model)'>
                               {{model.name}}
                            </div>
                        </div>
                        <div class="listTree">{{model.name1}}</div>
                        <div class="listTree">{{model.name2}}</div>
                        <div class="listTree">{{model.name3}}</div>
                        <div class="operation">
                           <div @click="operationUpdateClick(model)">编辑</div>
                           <div @click="operationLookClick(model)">新增</div>
                           <div @click="operationDeleteClick(model)">删除</div>
                        </div>
                  </div>
                  <div class="itemOneTwo" v-show='model.open'>
                    <ul class="treeTwo">
                        <ztree-item v-for="(item,i) in model.children" :unfoldFun='unfoldFun' :nameCallBack='nameCallBack' :trees.sync='trees' :model.sync="item" :key='i'></ztree-item>
                    </ul>
                  </div>
                </li>`
            }
        }
    }

</script>
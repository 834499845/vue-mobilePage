<style>
    .home {
        width: 800px;
        min-height: 500px;
        border: 1px solid #ccc;
        margin: 50px;
    }
</style>
<template>
    <div class="home">
        <vue-ztree :list.sync='lists' :nameFun="nameClick" :unfold='unfoldClick' is-open='true'></vue-ztree>
    </div>
</template>
<script>
    import {
        mapActions,
        mapState
    } from 'vuex'
    import vueZtree from './homeTree.vue'
    export default {
        components: {
            vueZtree
        },
        data() {
            return {
                lists: []
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
            nameClick: function (m, parent) {
                console.log(m.name, parent)
            },
            unfoldClick(m) {
                console.log(m)
            }
        },
        mounted() {
            this.lists = [
                {
                    id: 22545340,
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
                            id: 22624623451,
                            parentId: 220,
                            clickNode: false,
                            open: true,
                            name: "A-1",
                            name1: 'A-1',
                            name2: 'A-1',
                            name3: 'A-1',
                            path: "",
                            children: [{
                                id: 253245324522,
                                parentId: 221,
                                clickNode: false,
                                open: true,
                                name: "A-1-1",
                                name1: 'A-1-1',
                                name2: 'A-1-1',
                                name3: 'A-1-1',
                                path: "",
                                children: [{
                                    id: 223,
                                    name: "A-1-1",
                                    name1: 'A-1-1',
                                    name2: 'A-1-1',
                                    name3: 'A-1-1',
                                    parentId: 222,
                                    clickNode: false,
                                    open: true,
                                    path: ""
                                }],
                            }],
                        },
                        {
                            id: 2534534251,
                            parentId: 20,
                            clickNode: false,
                            name: "A-2",
                            name1: 'B-2',
                            name2: 'C-2',
                            name3: 'D-2',
                            open: true,
                            path: "",
                            children: [{
                                id: 253453252,
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
                    id: 221201,
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
                            id: 4221,
                            parentId: 220,
                            clickNode: false,
                            open: true,
                            name: "F-1",
                            name1: 'F-1',
                            name2: 'F-1',
                            name3: 'F-1',
                            path: "",
                            children: [{
                                id: 2322322,
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
                            id: 232131231,
                            parentId: 20,
                            clickNode: false,
                            open: true,
                            name: "F-2",
                            name1: 'F-2',
                            name2: 'F-2',
                            name3: 'F-2',
                            path: "",
                            children: [{
                                id: 23123212,
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
        }
    }

</script>
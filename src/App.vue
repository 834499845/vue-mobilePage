<template>
    <div id="app" class="views">
        <router-view class="view" keep-alive></router-view>
    </div>

</template>

<script>
    import { mapActions, mapState } from 'vuex'
    export default {
        name: 'views',
        data() {
            return {
            }
        },
        created: function () {
        },
        beforeDestroy: function () {
        },
        methods: {
           ...mapActions([])
        }
    }

</script>
<style>
    @charset "utf-8";
    html,
    body,
    form,
    fieldset,
    p,
    div,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        -webkit-text-size-adjust: 100%;
    }
    
    body {
        -webkit-overflow-scrolling: touch;
        overflow-scrolling: touch;
    }
    
    a {
        text-decoration: none;
    }
    
    img {
        border: 0px solid #ddd;
        outline: none;
    }
    
    [v-cloak] {
        display: none;
    }
    
    ul {
        margin: 0;
        padding: 0;
    }
    
    li {
        list-style: none;
    }
    
    p {
        margin: 0;
        padding: 0;
    }
    
    a,
    button,
    input,
    optgroup,
    select,
    textarea,
    div {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    

    
    body,
    html {
        margin: 0;
        padding: 0;
        font-family: "Microsoft YaHei", Arial, "Helvetica Neue", Helvetica, sans-serif;
    }
    
    input,
    textarea {
        -webkit-appearance: none;
        outline: none;
    }
    
    a,
    img {
        -webkit-touch-callout: none;
        width: 100%;
    }
</style>
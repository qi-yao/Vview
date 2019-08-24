<template>
    <i :class="classes" :style="{fontSize: fontSize+'px'}"></i>
</template>

<script>
    export default {
        props:{
            type:{
                type: String,
                default: ''
            },
            size:{
                type: String,
                default: ''
            }
        },
        computed: {
            classes:function(){
                return `iconfont icon-${this.type}`
            },
            fontSize:function(){
                return `${this.size}`
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>
<template>
    <div class="tabs">
        <router-link to="/recommend"  class="tab-commen ">推荐</router-link>
        <router-link to="/range"  class="tab-commen">排行榜</router-link>
        <router-link to="/search"  class="tab-commen">搜索</router-link>
    </div>
</template>

<script>
    export default {
        name: 'TabBars',
        data(){
          return {


          }
        },
        methods:{

        }

    }
</script>

<style lang="less" scoped>
.tabs {
    padding-top: 85px;
    background: #f4f4f4;
    display: flex;
    flex-flow: row nowrap;
    .tab-commen{
        display: block;
        flex: 1;
        height: 40px;
        line-height: 40px;
        background: white;
        box-sizing: border-box;
        text-align: center;
        font-size: 16px;
    }
    .router-link-active{
        color: #31c27c;
        border-bottom:2px solid #31c27c;
    }
}
</style>

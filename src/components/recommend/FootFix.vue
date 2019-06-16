<template>
    <div class="footFix">
        <div>
            安装QQ音乐 发现更多精彩
        </div>
    </div>
</template>

<script>
    export default {
        name: "FootFix"
    }
</script>

<style lang="less" scoped>
    .footFix{
        position: fixed;
        left:0;
        bottom: 0;
        right: 0;
        width: 100%;
        z-index: 10000;
        background:  rgba(255,255,255,.9);
        padding: 15px 0;
        text-align: center;
        div{
            display: inline-block;
            padding: 0 15px;
            background: #30c27c;
            color: white;
            border-radius: 99px;
            height: 33px;
            line-height: 33px;
            text-align: center;
            font-size: 14px;

        }

    }
</style>

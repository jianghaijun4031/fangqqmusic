<template>
    <div class="listContainer">
        <div class="title">电台</div>
        <div class="viewContainer">
            <div class="viewItem" v-for="(item,index) in radioList" :key="item.radioid">
                <div class="imgC">
                    <img :src="item.picUrl" alt="图片未加载">
                    <span class="iconbc"></span>
                </div>
                <div class="describe">
                    {{item.Ftitle}}
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "RadioStation",
        data (){
            return {
                radioList: [
                    {
                        "picUrl": "http://y.gtimg.cn/music/photo/radio/track_radio_199_13_1.jpg",
                        "Ftitle": "热歌",
                        "radioid": 199
                    },
                    {
                        "picUrl": "http://y.gtimg.cn/music/photo/radio/track_radio_307_13_1.jpg",
                        "Ftitle": "一人一首招牌歌",
                        "radioid": 307
                    }
                ]
            }

        }
    }
</script>

<style lang="less" scoped>
    .listContainer{
        margin-top: 14px;
        box-sizing: border-box;
        padding-left:10px;
        padding-right: 10px;
        .title{
            font-size: 16px;
            margin-bottom: 11px;
        }
        .viewContainer{
            width: 100%;
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            overflow: hidden;
            .viewItem{
                width: 48%;
                background: white;
                .imgC{
                    box-sizing: border-box;

                    position: relative;
                    overflow: hidden;
                    &:before{
                        content: "";
                        display: block;
                        padding-top: 100%;
                    }
                    img{
                        display: block;
                        width: 100%;
                        position: absolute;
                        top: 0;

                    }
                    span{
                        display: block;
                        width: 24px;
                        height: 24px;
                        position: absolute;
                        bottom: 5px;
                        right: 5px;
                        color: white;
                        font-size: 10px;
                        line-height: 24px;
                        text-align: center;
                        background: url("~@/assets/icon/bo.png") no-repeat;
                        background-size: 100%;
                    }
                }
                .describe{
                    height: 36px;
                    line-height: 18px;
                    font-size: 14px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }
        }
    }


</style>

<template>
    <cube-slide class="slidevi" ref="slide" :data="sliderItem">
        <cube-slide-item v-for="(item, index) in sliderItem" :key="index" @click.native="clickHandler(item, index)">
            <a :href="item.linkUrl">
                <img :src="item.picUrl">
            </a>
        </cube-slide-item>
    </cube-slide>
</template>

<script>
    export default {
        name: "Slide",
        data (){
            return {
                sliderItem: [
                    {
                        "linkUrl": "https://y.qq.com/m/digitalbum/gold/index.html?openinqqmusic=1&_video=true&mid=004M8HLn4QOyyn&g_f=shoujijiaodian",
                        "picUrl": "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1379062.jpg",
                        "id": 21564
                    },
                    {
                        "linkUrl": "http://y.qq.com/m/act/sfhd/267.html?ADTAG=jdt&openinqqmusic=1",
                        "picUrl": "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1382153.jpg",
                        "id": 21553
                    },
                    {
                        "linkUrl": "https://y.qq.com/m/digitalbum/gold/index.html?openinqqmusic=1&_video=true&mid=001plzoF2wWJiA&g_f=shoujijiaodian",
                        "picUrl": "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1378600.jpg",
                        "id": 21561
                    },
                    {
                        "linkUrl": "https://y.qq.com/m/digitalbum/gold/index.html?openinqqmusic=1&_video=true&mid=0010AYuF3nqxhw&g_f=shoujijiaodian",
                        "picUrl": "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1375466.jpg",
                        "id": 21508
                    },
                    {
                        "linkUrl": "https://y.qq.com/m/digitalbum/gold/index.html?openinqqmusic=1&_video=true&mid=002aGyPo2OOc4c&g_f=shoujijiaodian",
                        "picUrl": "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1378870.jpg",
                        "id": 21567
                    }
                ]
            }
        },
        methods:{
            clickHandler (val,index){

            }
        }
    }
</script>

<style lang="less" scoped>
    .slidevi{
        width: 100%;
        height: 150px;
    }
</style>

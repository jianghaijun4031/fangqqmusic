<template>
    <div>
        <Slide/>
        <RadioStation />
        <PopularMusic />
        <Footer />
        <FootFix />
    </div>
</template>

<script>
    import Slide from "@/components/recommend/Slide.vue"
    import RadioStation from "@/components/recommend/RadioStation.vue"
    import PopularMusic from "@/components/recommend/PopularMusic.vue";
    import Footer from "@/components/recommend/Footer";
    import FootFix from "@/components/recommend/FootFix";

    export default {
        name: "Recommend",
        components:{
            Slide,
            RadioStation,
            PopularMusic,
            Footer,
            FootFix
        },
        data() {
            return {
                slider: [
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
        }
    }
</script>

<style scoped>

</style>

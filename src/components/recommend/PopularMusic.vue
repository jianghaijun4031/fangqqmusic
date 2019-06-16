<template>
    <div class="listContainer">
        <div class="title">热门歌单</div>
        <div class="viewContainer">
            <div class="viewItem" v-for="(item,index) in songList" :key="item.id">
                <div class="imgC">
                    <img :src="item.picUrl" alt="图片未加载">
                    <span class="iconbc"></span>
                    <span class="icon icon-107 musicNum">{{ zhuan(item.accessnum) }}</span>
                </div>
                <div class="describe">
                    <div class="describetext">
                        {{item.songListDesc}}
                    </div>
                    <div class="author">
                        {{item.songListAuthor}}
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "PopularMusic",
        data (){
            return {
                songList: [
                    {
                        "songListDesc": "催泪大杀器！盘点演唱会经典万人大合唱",
                        "picUrl": "http://p.qpic.cn/music_cover/1Fr9IFMhWDPeUzWKVEjn3QTL2eX2QziaJmaL0ZAmsvtW71ic9IDUoYzg/300?n=1",
                        "id": "2646688496",
                        "accessnum": 10130136,
                        "songListAuthor": "金青松",
                        "pic_mid": "00333So02drvak",
                        "album_pic_mid": ""
                    },
                    {
                        "songListDesc": "纳尼？这些华语歌手竟然会唱日语歌！",
                        "picUrl": "http://p.qpic.cn/music_cover/z8wAFqicQ1qhImeiajkrgiaR4hYM3pzsUULFnicXshFXdw9uGkm261Ex9g/300?n=1",
                        "id": "1144416825",
                        "accessnum": 682487,
                        "songListAuthor": "风吹草地",
                        "pic_mid": "0013j8zs1jRnLQ",
                        "album_pic_mid": ""
                    },
                    {
                        "songListDesc": "精选内地十大民谣歌手代表作",
                        "picUrl": "http://p.qpic.cn/music_cover/hVUsfUFG2DV466URqw7PT7X66OknPIhic2mKDgicawN4qThIR7yhYY1w/300?n=1",
                        "id": "2043041547",
                        "accessnum": 1367708,
                        "songListAuthor": "１'s ヽ",
                        "pic_mid": "004bFmjW2PXSqF",
                        "album_pic_mid": "0032YJyg2yF6Dd"
                    },
                    {
                        "songListDesc": "2016billboard嘻哈榜",
                        "picUrl": "http://p.qpic.cn/music_cover/tkduvk4dwqBxwzZhsNe0nwkwyiaLHVkxtla7REsX0yNkhibOH3Bdb2og/300?n=1",
                        "id": "2040362185",
                        "accessnum": 1161998,
                        "songListAuthor": "CREAMSAUCEONMEBABY",
                        "pic_mid": "000cL0xT2csmd7",
                        "album_pic_mid": "001iJq1y1Uq3zV"
                    },
                    {
                        "songListDesc": "浮光掠影：ACG纯音乐赏析合辑",
                        "picUrl": "http://p.qpic.cn/music_cover/XMPAjfs5uwGZdWII3osvAvCRyNWx8Pqy5Yice41OCZlBhLtk0p0icNvg/300?n=1",
                        "id": "1723063372",
                        "accessnum": 1026417,
                        "songListAuthor": "黎桐同",
                        "pic_mid": "000xFtbN1l8ye8",
                        "album_pic_mid": "002egQPg3DWcCS"
                    },
                    {
                        "songListDesc": "trip-hop单曲大推荐",
                        "picUrl": "http://y.gtimg.cn/music/photo_new/T005R600x600M000002CJKAY1LKpcz.jpg?n=1",
                        "id": "3482605622",
                        "accessnum": 358143,
                        "songListAuthor": "哑忍",
                        "pic_mid": "",
                        "album_pic_mid": "004aOQhn3PPOpK"
                    }
                ]
            }
        },
        methods:{
            zhuan: function(val){
               return " "+(val/10000).toFixed(1)+"万"
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
            flex-flow: row wrap;
            justify-content: space-between;
            overflow: hidden;
            .viewItem{
                width: 48%;
                margin-bottom: 10px;
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
                    .iconbc{
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
                    .musicNum{
                        display: block;
                        position: absolute;
                        bottom: 7px;
                        left: 5px;
                        line-height: 12px;
                        height: 12px;
                        font-size: 12px;
                        color: #fff;
                    }
                }
                .describe{
                    height: 36px;
                    font-size: 14px;
                    .describetext{
                        line-height: 18px;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                    .author{
                        line-height: 18px;

                    }


                }
            }
        }
    }
</style>

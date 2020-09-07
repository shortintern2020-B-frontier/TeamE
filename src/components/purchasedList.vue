<template>
    <v-container class="ma-0 pa-0" fluid>
        <span class="font-weight-bold text-h4 ">事前購入済みリスト</span>
        <v-divider></v-divider>
        <span class="text-subtitle-1">旅行に出発する前に事前購入を済ませておくと、よりリアルな旅行体験を得ることができます。</span>
        <v-card
            v-for="product in products"
            :key="product.name"
            :price="product.price"
            :explain="product.explain"
            :src="product.src"
            :imgsrc='product.imgsrc'
            flat
            class="ml-0 pl-0"
            outlined
            width="700px"

        >
            <v-list-item three-line>
            <v-list-item-content>
                <v-list-item-title class="headline mb-1">{{ product.name }}</v-list-item-title>
                <v-list-item-subtitle>¥{{ product.price  }}</v-list-item-subtitle>
                <v-list-item-subtitle>{{ product.explain  }}</v-list-item-subtitle>
            </v-list-item-content>

            <!--<v-list-item-avatar
                tile
                size="80"
                color="grey"
            >
            <v-img :src="product.imgsrc"></v-img>
            </v-list-item-avatar>-->
            </v-list-item>

            <v-card-actions>
            <v-btn class="ml-6">楽天市場で購入</v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>
export default {
    data:()=>({
        products: [
            {name: 'コーヒー豆　二子玉川ブレンド',price:'1,158',explain:'明るい香りと上品で軽やかな味わいのコーヒー豆です。二子玉川の、コクテル堂コーヒーによるこだわりの一品です。',src: 'https://item.rakuten.co.jp/cocktail-do/111332/'},
            {name: '二子玉川地図柄iphoneケース',price:'3,080',explain:'二子玉川の地図がプリントされたiphoneケースです。これを見ながら二子玉川を旅すれば迷うことはありません。',src: 'https://item.rakuten.co.jp/shop-crossfield/futako-tmgw_backcover_na/'}
        ]
    })
}
</script>

/**
 * @author Tomoharu Yanase
 */
<template>
  <div class="purchase-container">
    <div class="title-container">
      <h6>事前購入済みリスト</h6>
    </div>
    <div class="detail-container">
      <span class="mt-8 mb-8">旅行に出発する前に事前購入を済ませておくと、よりリアルな旅行体験を得ることができます。</span>
      <v-card
        v-for="product in packagedata.purchase_list"
        :key="product.product_name"
        :price="product.product_price"
        :explain="product.product_detail"
        :src="product.product_url"
        :imgsrc="product.product_image"
        flat
        class="ml-0 pl-0 pb-8 mb-8 mt-8"
        outlined
        width="90%"
      >
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title class="headline mb-1">{{ product.product_name }}</v-list-item-title>
            <v-list-item-subtitle>¥{{ product.product_price }}</v-list-item-subtitle>
            <v-list-item-subtitle>{{ product.product_detail }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-card-actions>
          <v-btn class="ml-6" :href="product.product_url" target="_blank">楽天市場で購入</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  props: ['packagedata']
};
</script>

<!-- @author ISSEI MIYAMOTO -->
<style lang="css">
.title-container {
  margin-top: 64px;
  padding-bottom: 16px;
  padding-left: 48px;
  border-bottom: solid 2px #e3e3e3;
}

.detail-container span {
  font-size: 16px;
}
</style>

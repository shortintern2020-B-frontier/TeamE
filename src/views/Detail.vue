<template>
<div class="detail">
    <navbar/>
    <purchasedList/>
</div>
</template>

<script>
import navbar from "@/components/navbar.vue";
import purchasedList from '@/components/purchasedList.vue';

export default {
  name: 'detail',
  components: {
    navbar,
    purchasedList,
  }
}
</script>

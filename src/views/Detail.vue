<template>
<div class="detail">
    <navbar/>
    <joinButton />
    <purchasedList/>
</div>
</template>

<script>
import navbar from "@/components/navbar.vue";
import joinButton from "@/components/joinButton.vue";
import purchasedList from '@/components/purchasedList.vue';

export default {
  name: 'detail',
  components: {
    navbar,
    joinButton,
    purchasedList,
  }
}
</script>


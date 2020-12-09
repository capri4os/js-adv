<template>
  <div :class="[$style.name]">{{ currentItem.name }}</div>
  <div :class="[$style.price]">{{ currentItem.price }}</div>
  <button @click="onBuyClick">Купить</button>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  props: {
    id: String,
  },
  computed: {
    ...mapGetters("goods", ["getData"]),
    currentItem() {
      return this.getData[this.id] || {};
    },
  },
  methods: {
    ...mapActions("goods", ["addInCart"]),
    onBuyClick() {
      this.addInCart(this.id);
    },
  },
};
</script>

<style module lang="scss">
name {
  color: black;
}

price {
  color: black;
}
</style>

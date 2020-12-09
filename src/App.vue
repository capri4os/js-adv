<template>
  <div>
    <header :class="[$style.header]">
      <!-- <Cart /> -->
      <div v-for="id in getItemsInCart" :key="id">{{ id }}</div>
    </header>
    <div :class="[$style.main]">
      <h1>Список товаров:</h1>
      <div :class="[$style.main__list]">
        <Item v-for="id in getItemsOnPage" :key="id" :id="id" />
      </div>
    </div>
  </div>
</template>

<script>
import Item from "./Item.vue";
import { mapGetters, mapActions } from "vuex";

// import Cart from "./Cart";
// import Button from "./Button";

export default {
  components: {
    Item,
    // Cart,
    // Button,
  },

  data() {
    return {
      items: [],
    };
  },
  methods: {},
  computed: {
    ...mapGetters("goods", ["getItemsOnPage", "getItemsInCart"]),
  },
};
</script>

<style></style>

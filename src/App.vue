<template>
  <div>
    <header :class="[$style.header]">
      <div :class="[$style.header__logo]">
        MyAwesomeSop
      </div>
      <Cart />
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
import Cart from "./components/Cart.vue";
import Item from "./components/Item.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    Cart,
    Item,
  },
  data() {
    return {
      items: [],
    };
  },
  methods: {
    ...mapActions("goods", ["requestData"]),
  },
  computed: {
    ...mapGetters("goods", ["getItemsOnPage"]),
  },
  mounted() {
    this.requestData(1);
  },
};
</script>

<style module lang="scss">
:global(*) {
  padding: 0;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}
.header {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background: rgb(27, 39, 123);
  &__logo {
    font-size: 22px;
    color: #fff;
  }
}
.main {
  max-width: 80%;
  margin: auto;
  &__list {
    display: flex;
    justify-content: space-between;
  }
}
</style>

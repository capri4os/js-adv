<template>
  <div>
    <header class="header">
      Магазин вещей
      <Cart />
    </header>
    <div>
      <h1>Список товаров</h1>
      <Item
        v-for="(good, index) in items"
        :key="index"
        :name="good.name"
        :price="good.price"
      />
    </div>
  </div>
</template>

<script>
import Item from "./Item";
import Cart from "./Cart";
import Button from "./Button";

export default {
  components: {
    Item,
    Cart,
    Button,
  },

  data() {
    return {
      items: [
        { name: "title1", price: 1 },
        { name: "title2", price: 2 },
        { name: "title3", price: 3 },
        { name: "title4", price: 4 },
        { name: "title5", price: 5 },
      ],
    };
  },
};
</script>

<style></style>

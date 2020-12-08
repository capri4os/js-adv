<template>
  <div>{{ itemData.name }} - {{ itemData.price }}</div>
</template>

<script>
export default {
  props: {
    name: String,
    price: Number,
  },
};
methods: {
  //добавление в корзину
}
</script>

<style></style>

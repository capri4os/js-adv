<template>
<div>
<header class='header'>
        <h1 class='main-header'>Магазин вещей</h1>
        <!-- <Cart /> -->
    </header>
    
    <div class='goods'></div>
</div>
<main>
    <h2 class='goods-heading'>Список вещей</h2>
</main>
    </template>

    <script>
    export default {
        data () {
            return {
                items: [
                    { name: 'title1', price: 10 },
                    { name: 'title2', price: 20 },
                    { name: 'title3', price: 30 },
                    { name: 'title4', price: 40 },
                    { name: 'title5', price: 50 }
                ]
            }
        }
    }
    </script>
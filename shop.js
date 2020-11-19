class goodsList {
    items = []

    constructor() {
        let goods = this.fetchGoods()
        goods = goods.map(cur => {
            return new goodItem(cur)
        })
        this.items.push(...goods)
        this.render()
    }

    fetchGoods() {
        return [
            { name: 'Юбка', price: 25 },
            { name: 'Костюм', price: 25 },
            { name: 'Жакет', price: 25 },
            { name: 'Платье', price: 25 }
        ]
    }

    render() {
        const mainList = ''
        this.items.forEach(() => {
            const item = new goodItem(goodItem.name, goodItem.price)
            mainList += goodItem.render()
        })
        document.querySelector('.goods').innerHTML = mainList
    }
}

class goodItem {
    name = ''
    price = 0

    constructor({ name, price }) {
        this.name = name
        this.price = price
    }

    render() {
        const itemRender = document.querySelector('.goods')
        if (itemRender) {
            const card = document.createElement('div')
            card.className = 'goods-item'
            card.innerHTML = 'Товар'
            itemRender.appendChild(card)

            const addButton = document.createElement('button')
            addButton.className = 'goods-item-button'
            addButton.innerHTML = 'Добавить в корзину'
            card.appendChild(addButton)
            addButton.onclick = buy()
        }
    }

    add() {
        const choseItems = document.getElementsByClassName('.goods-item')
        for (var i = 0; i < choseItems.length; i++) {
            choseItems[i].onclick = moveToCart
        }

        // moveToCart(eventObj) {
        //     //перемещение в корзину

        // }
    }
}

class Cart {
    itemsInCart = []
    count = 0 // количество товаров
    total = 0 // общая стоимость товаров

    constructor({ count, total }) {
        this.count = count
        this.total = total
    }

    countGoods() {

    } // расчет количества товаров

    totalGoods() {

    } //расчет стоимости товаров

    render() {

    }
}

// class cartList extends goodList {
//     items = []

//     constructor() {

//     }
// }

const list = new goodsList();
list.fetchGoods();
list.render();
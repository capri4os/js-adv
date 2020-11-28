class List {
    items = []

    constructor(item = []) {
        this.item = []
    }

    add(item) {
        const findedItem = this.items.find((fitem) => {
            return fitem.name === item.name
        })

        const addedPromise = new Promise(resolve => {
            if (findedItem) {
                findedItem.counter++
            } else {
                this.items.push(item)
            }
            resolve()
        })

        addedPromise.then(this.render.bind(this))
    }

    remove() {

    }

    render() {
        console.log(this.items)
        this.items.forEach(good => {
            good.render()
        })
    }
}

class ProductList extends List {
    _cartInstance = null
    _pageCounter = 1

    constructor() {
        super()
        let goodsPromise = this.fetchGoods()
        goodsPromise.then(() => {
            this.render()
        })
    }

    fetchGoods() {
        const result = fetch('http://localhost:3000/database.json')
        return result
            .then(res => {
                return res.json()
            })
            .then(data => {
                console.log(data)
                this.items = data.data.map(cur => {
                    return new GoodItem(cur)
                })
            })
            .catch(e => {
                console.log(e)
            })
    }

    render() {
        const ProductListRender = document.querySelector('.goods')
        if (ProductListRender) {
            ProductListRender.innerHTML = ''
            this.items.forEach(good => {
                good.render(ProductListRender)
            })
        }
    }
}

class CartList extends List {
    constructor() {
        super()
        this.init()
    }

    init() {
        const cart = document.createElement('div')
        cart.classList.add('cart')

        const cartList = document.createElement('div')
        cartList.classList.add('cart-list')
        cart.appendChild(cartList)

        const cartButton = new Button('Корзина', () => {
            cartList.classList.toggle('shown')
        })
        cart.appendChild(cartButton.getTemplate())

        const cartRender = document.querySelector('cart')
        if (cartRender) {
            cartRender.appendChild(cart)
        }

        this.render()
    }

    render() {
        const cartRender = document.querySelector('cart-list')
        if (cartRender) {
            cartRender.innerHTML = ''
            if (this.items.length) {
                this.items.forEach(good => {
                    good.render(placeToRender)
                })
            } else {
                placeToRender.innerHTML = 'Нет товаров в корзине!'
            }
        }
    }
}

class GoodItem {
    name = ''
    price = 0
    counter = 1
    _cartInstance = null

    constructor({ name, price }, CartInstance) {
        this.name = name
        this.price = price
        this._cartInstance = CartInstance
    }

    render(itemRender) {
        // const itemRender = document.querySelector('.goods')
        if (itemRender) {
            const card = document.createElement('div')
            card.className = 'goods-item'
            // itemRender.classList.add('goods-item')
            card.innerHTML = `
                <div class="goods-item-img">
                <img src="https://imgholder.ru/170x140/8493a8/adb9ca&text=ФОТО+ТОВАРА&fz=18" alt="">
                </div>
                <div class="goods-item-text">
                Товар: ${this.name}, 
                <br> Цена: ${this.price}
                </div>
                <div class="goods-item-button"></div>
                `
            itemRender.appendChild(card)

            const addButton = new Button('Добавить в корзину', () => {
                this._cartInstance.add(new GoodItemInCart(this))
            })

            card.querySelector('.goods-item-button').appendChild(addButton.getTemplate())
        }
    }
}

class GoodItemInCart extends GoodItem {
    constructor(props) {
        super(props)
    }

    render(goodInCartRender) {
        if (goodInCartRender) {
            const goodInCart = document.createElement('div')
            goodInCart.classList.add('cart-good')
            goodInCart.innerHTML = `${this.name} = ${this.price} x ${this.counter}`
            goodInCartRender.appendChild(goodInCart)
        }
    }
}

const cart = new CartList()
const products = new ProductList(cart)
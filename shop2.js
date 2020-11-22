class List {
    items = []

    constructor(item = []) {
        this.item = []
    }

    render() {
        console.log(this.items)
        this.items.forEach(good => {
            good.render()
        })
    }

    add() {

    }

    remove() {

    }
}

class ProductList extends List {
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

    }

    render() {

    }
}


class GoodItem {
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
            card.innerHTML = `Товар: ${this.name}, <br> Цена: ${this.price}`
            itemRender.appendChild(card)
        }
    }
}

class GoodItemInCart extends GoodItem {
    constructor(props) {
        super(props)
    }

    render() {

    }
}

const products = new ProductList()
// const cart = new CartList()
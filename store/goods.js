const state = {
    data: {
        "1": { id: 1, name: "Юбка", price: 25 },
        "2": { id: 2, name: "Костюм", price: 45 },
        "3": { id: 3, name: "Жакет", price: 35 },
        "4": { id: 4, name: "Платье", price: 55 },
        "5": { id: 5, name: "Брюки", price: 30 },
    },
    itemsOnPage: [],
    itemsInCart: ["1","2"],
}

const getters = {
    getData: state => state.data,
    getItemsOnPage: state => state.itemsOnPage,
    getItemsInCart: state => state.itemsInCart,
}

const actions = {
   requestData () {

   },
   addInCart ({state, commit}, id) {
     commit('addInCart', id)
   }
}

const mutations = {
    setData (state, newData) {
        state.data = newData
    },
    addInCart(state, id ) {
        state.itemsInCart.push(id)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Socks',
            description: 'green color, comfortable fit',
            image: './assets/images/socks_green.jpg',
            onSale: true,
            sizes: [1, 2, 3],
            colors: [{ id: 123, color: "black", quantity: 50 }, { id: 1234, color: "yellow", quantity: 0 }],
            brand: "Vue mastery",
        }
    },
// Adding method that we can use
    methods: {
        addToCart() {
            this.cart +=1 //addressing cart in the data object above
        },
        descrementCart() {
            this.cart -=1
        }
    },
    computed: {
        title() {
            return this.brand + " " + this.product
        }
    }
})

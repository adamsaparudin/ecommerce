var app = new Vue({
  el: "#app",
  data: {
    message: 'This is our home',
    itemData: '',
    newUser: {
      name: '',
      memberId: '',
      address: '',
      zip: '',
      phone: ''
    },
    newItem: {
      itemCode: '',
      name: '',
      description: '',
      price: '',
      stock: ''
    },
    cart: [],
    searchData: '',
    search: ''
  },
  methods: {
    createUser: function(e) {
      e.preventDefault()
      axios.post('http://localhost:3000/users', {
        name: app.newUser.name,
        memberId: app.newUser.memberId,
        address: app.newUser.address,
        zip: app.newUser.zip,
        phone: app.newUser.phone
      }).then(function (response) {
        console.log(response);
      }).catch( (error) => {
        console.log(error);
      })
    },
    createItem: (e) => {
      e.preventDefault()
      axios.post('http://localhost:3000/items', {
        itemCode: app.newItem.itemCode,
        name: app.newItem.name,
        memberId: app.newItem.memberId,
        description: app.newItem.description,
        stock: app.newItem.stock
      }).then( (response) => {
        console.log(response);
      }).catch( (error) => {
        console.log(error);
      })
    },
    requestItem: () => {
      axios.get('http://localhost:3000/items')
      .then( (response) => {
        app.itemData = response.data
      })
      .catch( (error) => {
        console.log(error);
      })
    },
    addToCart: (item, qty) => {
      let isi = {item: item, qty: qty}
      if (app.cart.length === 0)
        app.cart.push(isi)
      else {
        console.log(app.cart.length);
        // let changedCart = app.cart.map(function (data) {
        //   if(data.item._id == item._id)
        //     return data.qty += 1
        //   else {
        //     app.cart.push(isi)
        //   }
        // })
        for(let i=0; i<app.cart.length; i++) {
          if(app.cart[i].item._id == item._id) {
            app.cart[i].qty += 1
            return true
          }
        }
        app.cart.push(isi)
      }
    },
    searchReal: () => {
      axios.get('http://localhost:3000/items/search/' + app.search)
      .then( (response) => {

        console.log(response);
        app.searchData = response.data

      })
      .catch( (error) => {
        console.log(error);
      })
    }
  }
})

app.requestItem()

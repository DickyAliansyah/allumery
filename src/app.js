document.addEventListener('alpine:init' , () => {
    Alpine.data('products', () => ({
        items: [
            {id: 1, name: 'Keripik Pisang Lumer', img: 'assets/images/dish/coklat65.jpg', varian: 'Chocolate', size : '65 gr', price : 5000},
            {id: 2, name: 'Keripik Pisang Lumer', img: 'assets/images/dish/coklat140.jpg', varian: 'Chocolate', size : '145 gr', price : 10000},
            {id: 3, name: 'Keripik Pisang Lumer', img: 'assets/images/dish/coklat250.jpg', varian: 'Chocolate', size : '240 gr', price : 15000},
            {id: 4, name: 'Keripik Pisang Lumer', img: 'assets/images/dish/greentea65.jpg', varian: 'Greentea', size : '65 gr', price : 6000},
            {id: 5, name: 'Keripik Pisang Lumer', img: 'assets/images/dish/greentea140.jpg', varian: 'Greentea', size : '145 gr', price : 11000},
            {id: 6, name: 'Keripik Pisang Lumer', img: 'assets/images/dish/greentea250.jpg', varian: 'Greentea', size : '250 gr', price : 16000},
            {id: 7, name: 'Keripik Pisang Lumer', img: 'assets/images/dish/tiramisu140.jpg', varian: 'Tiramisu', size : '145 gr', price : 12000},
            {id: 8, name: 'Rostel', img: 'assets/images/dish/rostel2.jpg', varian: 'Sosis-Sapi', size : 'Kecil', price : 5000},
            {id: 9, name: 'Rostel', img: 'assets/images/dish/rostel4.jpg', varian: 'Sosis-Sapi', size : 'Sedang', price : 10000}
        ]
    }));

Alpine.store('cart', {
    items:[],
    total: 0,
    quantity: 0,
    add(newItem){
        // cek apakah ada barang yang sama di cart
        const cartItem = this.items.find((item) => item.id === newItem.id)

        // jika belum ada / cart kosong
        if(!cartItem){
            this.items.push({...newItem, quantity: 1, total: newItem.price});
            this.quantity++;
            this.total += newItem.price;

        }else{
            // jika barang sudah ada, cek apakah barang beda atau sama dengan yang ada di cart
            this.items = this.items.map((item) => {
                // jika barang berbeda
                if(item.id !== newItem.id){
                    return item;
                }else{
                    // jika barang sudah ada , tambah quantity dan totalnya
                    item.quantity++
                    item.total = item.price*item.quantity
                    this.quantity++
                    this.total += item.price
                    return item
                }
            })
        }

        console.log(this.items);
    },
    remove(id){
        const cartItem = this.items.find((item) => item.id === id);


        if(cartItem.quantity > 1){

            this.items = this.items.map((item) => {
                if(item.id !== id){
                    return item;
                }else{
                    item.quantity--;
                    item.total = item.price * item.quantity;
                    this.quantity--;
                    this.total -= item.price;
                    return item;
                }
            })
        } else if(cartItem.quantity === 1){
            this.items = this.items.filter((item) => item.id !== id)
            this.quantity--
            this.total -+ cartItem.price
        }
    }
})

});



// Rupiah
const rupiah = (number) => {
    return new Intl.NumberFormat('id-ID' , {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(number)
}



    // form validation
    const checkoutButton = document.querySelector('#checkout-button');
    checkoutButton.disabled = true
    
    const form = document.querySelector('#checkoutForm')
    form.addEventListener('keyup', function(){
        for (let i = 0 ; i < 3 ; i++){
            if (form.elements[i].value.length !== 0){
                 checkoutButton.classList.remove('disabled');
                 checkoutButton.classList.add('disabled')
            } else{
                return false;
            }
        }
        checkoutButton.disabled = false
        checkoutButton.classList.remove('disabled');
    })


    // Kirim data ketika tombol di klik
    checkoutButton.addEventListener('click', function(e){
        e.preventDefault()
        const formdata = new FormData(form)
        const data = new URLSearchParams(formdata)
        const obj = Object.fromEntries(data)
        const nomorWhatsApp = '6285761853324'
        let items = JSON.parse(obj.items);
        let i = 1; // Inisialisasi variabel i

        let itemsText = items.map((item) => {
        let itemText = `${i}. ${item.name} (${item.varian} | ${item.size}) = ${item.quantity}`;
        i++; // Tambahkan i setiap kali iterasi
        return itemText;
        }).join("\n");

        let text = `DATA COSTUMER

Nama : ${obj.name} 
Nomor : ${obj.nomor} 
Alamat : ${obj.alamat}

DATA PESANAN

${itemsText}

TOTAL : ${rupiah(obj.total)}`;

        window.open(`https://wa.me/` + nomorWhatsApp + `?text=` + encodeURIComponent(text));

    })






    
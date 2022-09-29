const LocalDb = (timeRange) => {

    localStorage.setItem('cart', timeRange )

}

const getItemsDb =() =>{
    
    const storedCart = localStorage.getItem('cart')
    if(storedCart){
        const newCart = JSON.parse(storedCart)
        return newCart
    }
}

export {
    LocalDb,
    getItemsDb
}
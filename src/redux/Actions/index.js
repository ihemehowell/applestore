export const additem = (product) =>{
    return{
        type: 'ADDITEM',
        playload: product
    }
}
export const delitem= (product) =>{
    return{
        type: 'DELITEM',
        playload: product
    }
}
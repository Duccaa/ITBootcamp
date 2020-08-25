export const validForm = (amount, description, select) => 
    description.value.trim() !== ''
    && amount.value.trim()
    && !Number.isNaN(Number(amount.value.trim())) 
    && amount.value.trim() > 0 
    && select.value !== '-'


export const resetForm = (amount, description, select) => {
    select.value = '-'
    description.value = ''
    amount.value = ''
}  
export const arraySum = (array) => {   
    let sum = 0
    array.forEach(element => {
        sum += element.amount
    });
    return sum
}

export const percentage = (array1, array2) => {
    if(array1 == 0) return 0 
    return (arraySum(array2)/arraySum(array1)*100).toFixed(1) 
} 

export const percent = (x, array) => {
    if(array == 0) return 0 
    return (x/arraySum(array)*100).toFixed(1) 
}
 
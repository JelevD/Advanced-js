function everyNThElement(arr, num) {
    const result = [];
    for (let i = 0; i < arr.length; i+=num) {
       
            result.push(arr[i]);
        
    }
    return result
}
everyNThElement(['5', 
'20', 
'31', 
'4', 
'20'], 
2
)
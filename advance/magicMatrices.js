function magicMatrices(arr) {
    const rowSum = findRowSum(arr[0]);

    return checkRowValues() && checkColumnValues();


    function findRowSum(row){
        return row.reduce((acc, cur) => acc + cur, 0);
    }

    function checkRowValues(){
        let isEqual = true;

        for (let i = 0; i < arr.length; i++) {
            if(findRowSum(arr[i]) != rowSum){
                isEqual = false;
                break;
            }
            
        }

        return isEqual;
    }

    function checkColumnValues(){
        let isEual = true;

       for (let i = 0; i < arr.length; i++) {
           let columnSum = 0;

           arr.forEach(row =>{
                columnSum += row[i];
           });
           
           if(columnSum != rowSum){
                isEual = false;
                break;
           }
       }

        return isEual;
    }
}
magicMatrices([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]])
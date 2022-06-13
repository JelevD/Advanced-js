function extractIncreasing(arr){
    let biggest = Number.MIN_SAFE_INTEGER;

    return arr.reduce((acc, cur) => {
        if(cur >= biggest){
            biggest = cur;
            acc.push(cur);
        }

        return acc;
    }, []);

}
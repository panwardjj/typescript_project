function  merge(collection_1: number[],collection_2: number[], collection_3: number[]) : number[]{
    collection_3  = collection_3.reverse();

    let result: number[] = [];
    let i=0, j=0, k=0;

    while(i < collection_1.length &&  j <  collection_2.length){
        if(collection_1[i] < collection_2[j]){
            result.push(collection_1[i++]);
        }else{
            result.push(collection_2[j++]);
        }
    }

    while(i <  collection_1.length){
        result.push(collection_1[i++]);
    }

    while(j < collection_2.length){
        result.push(collection_2[j++]);
    }

    let finalResult:number[] = [];
    let r = 0;
    while(r < result.length && k < collection_3.length){
        if(result[r] < collection_3[k]){
            finalResult.push(result[r++]);
        }else{
            finalResult.push(collection_3[k++]);
        }
    }

    while(r < result.length){
        finalResult.push(result[r++]);
    }

    while(k < collection_3.length){
        finalResult.push(collection_3[k++]);
    }

    return finalResult;
}

export default merge;
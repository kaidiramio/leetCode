// shuffle the array

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
 var shuffle = function(nums, n) {
    //     empty array
        let arr = []
        
    //     loop thru the array 
        for(let i = 0 ; i < n; i++){
            arr.push(nums[i], nums[i+n])
    //         push to the end of the array
        }
        return arr
    //     return the array
};
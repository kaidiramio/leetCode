/** Merge Sorted Array
 * 
 * 
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 const merge = function(nums1, m, nums2, n) {
    
    //conditional if n === 0 return
    if(n === 0){return nums1}
    
    // loop through array + nums2 to nums1 ; m from param
    
    for (let i = 0, j = m ; i< nums2.length && j < nums1.length; i++, j++){
        nums1[j] = nums2[i]
    }
    
    // return the merged numbers so nums1 in non-decreasing order
    return nums1.sort((a,b)=> a-b)
    
    
};
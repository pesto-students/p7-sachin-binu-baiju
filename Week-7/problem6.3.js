//Sort array of 0's,1's and 2's

function sort(a, arr_size)
{
    let low = 0; 
    let high = arr_size - 1; 
    let mid = 0;
    let temp = 0; 
    while (mid <= high)
    {
        if(a[mid] == 0)
        {
            temp = a[low]; 
            a[low] = a[mid]; 
            a[mid] = temp; 
            low++; 
            mid++; 
        }
        else if(a[mid] == 1)
        {
            mid++; 
        }
        else
        {
            temp = a[mid]; 
            a[mid] = a[high]; 
            a[high] = temp; 
            high--;
        }  
    }
}
a=[0,2,1,2,0]
arr_size=5
sort(a,arr_size);
console.log(a);
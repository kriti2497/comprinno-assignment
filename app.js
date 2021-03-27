//// Open index.html file with chrome
//// Keep browser console open
//// Enter prompt values
//// check output in console


const assignOne = document.getElementById('assgn-one')
const assignTwo = document.getElementById('assgn-two')
const assignThree = document.getElementById('assgn-three')
const assignFour = document.getElementById('assgn-four')
const assignFive = document.getElementById('assgn-five')
const assignSix = document.getElementById('assgn-six')
const assignSeven = document.getElementById('assgn-seven')


// FIBONACCI SERIES
assignOne.addEventListener('click', () => {
    const userIp = prompt("Enter number of testcases", '');
    // using parseInt to convert string to integer
    const values = +userIp;
    for(let i = 0; i< values; i++){
        strValue = prompt(`Enter string ${i+1}:`, '');
        console.log(strValue)
        // convert strValue to object with key as the letter and its value as no. of occurences
        var result = [...strValue].reduce((a, e) => { a[e] = a[e] ? a[e] + 1 : 1; return a }, {}); 
        // console.log(result); 
        //// get only values from that object
        // console.log(Object.values(result))
        const modifiedArr = Object.values(result);
        // sort number array
        const sortedArr = modifiedArr.sort((a,b)=> a-b);
        // console.log(sortedArr.length);
        // array with less than 3 elements
        if(sortedArr.length < 3){
            console.log('OUTPUT: Dynamic')
        }else{
            // check from last element of array
            for(let i = sortedArr.length -1; i>=0; i--){
                // fibonacci formula
                if(sortedArr[i] == sortedArr[i-1]+ sortedArr[i-2]){
                    console.log('OUTPUT: Dynamic')
                    break
                }else{
                    console.log('OUTPUT: Not Dynamic')
                    break
                }
            }
        }

        console.log('END')
    }

});


// Not Done
// Ordering Teams
// assignTwo.addEventListener('click', () => {
//     const person1 = prompt(`Enter person 1 values separated by a space:`, '');
//     const person2 = prompt(`Enter person 2 values separated by a space:`, '');
//     const person3 = prompt(`Enter person 3 values separated by a space:`, '');

//     const p1 = person1.split(' ')
//     const p2 = person2.split(' ')
//     const p3 = person3.split(' ')
//     console.log(p1, p2, p3)

// });


// TEMPLE LAND
assignThree.addEventListener('click', () => {
    const elements = prompt(`Enter no of elements in array:`, '');
    const parseElement = +elements
    const values = prompt(`Enter array values separated by a space:`, '');
    // let isCoiledCobra = false

    const valArr = values.split(' ')
    console.log('Input:'+valArr)

    // condition to check if there are odd no. of elements and if 1st and last elements are 1
    if(parseElement%2 == 1 && valArr[0] == 1 && valArr[parseElement-1] == 1){
        // console.log('Hello', Math.floor(parseElement/2))
        let isCoiledCobra = true
        for(let i=0; i< Math.floor(parseElement/2); i++){
            // check if element at index i and element at index i from backwards are different OR if difference btwn consecutive elements is 1
            // console.log(i, valArr[i]!=valArr[parseElement-i-1], valArr[i]!=(valArr[i+1]-1))
            if(valArr[i]!=valArr[parseElement-i-1] || valArr[i]!=(valArr[i+1]-1)){
                isCoiledCobra = false;
                break
            }
        }
        if(!isCoiledCobra){
            console.log("OUTPUT: NO");
        }else{
            console.log("OUTPUT: YES")
        }
    }else{
        console.log("OUTPUT: NO")
    }
});


// BEAR AND MILKY COOKIES
assignFour.addEventListener('click', () => {
    const elementNo = +prompt('No. of Minutes', '');
    const values = prompt(`Enter values (cookie and milk) separated by a space:`, '');
    const valArr = values.split(' ')
    let flag = false;
    console.log("INPUT:"+valArr)

    if(valArr.length <= 0){
        flag = true;
    }else{
        for(let i=0;i<valArr.length-1; i++){
            // console.log(valArr[i], valArr[i+1])
            if(valArr[i]== 'cookie' && valArr[i+1] == 'milk' || valArr[i]== 'milk' && valArr[i+1] == 'milk' || valArr[i]== 'milk' && valArr[i+1] == 'cookie'){
                flag = true
            }else{ 
                flag = false;
                break; 
            }
        }
        if(valArr[valArr.length-1] == 'cookie'){
            flag = false;
        }
    }  
    if(flag){
        console.log("OUTPUT: YES")
    }else{
        console.log("OUTPUT: NO")
    }
});


//BEAUTIFUL ARRAY
assignFive.addEventListener('click', () => {
    // const testCases = +prompt('Enter number of test cases:', '');
    const noOfIp = +prompt('Number of inputs:', '');
    const values = prompt(`Enter values of array separated by a space:`, '');
    const valArr = values.split(' ')
    console.log('INPUT:'+valArr)
    const arr = []
    // get all values from array as key and their number of occurences as value
    var result = [...valArr].reduce((a, e) => { a[e] = a[e] ? a[e] + 1 : 1; return a }, {}); 
    // console.log(result)
    // check if -1 doesnt exists as key in result
    if(!(-1 in result)){
        // if no, push 0 as number of occurences of key -1
        arr.push(0)
    }else{
        // if yes, push the number of occurences of -1
        arr.push(result[-1])
    }
    // check if 0 exists as key in result
    if(!(0 in result)){
        // if no, push 0 as number of occurences of key 0
        arr.push(0)
    }else{
        // if yes, push the number of occurrences
        arr.push(result[0])
    }
    if(!(1 in result)){
        arr.push(0)
    }else{
        arr.push(result[1])
    }

    // console.log(arr)
    // console.log(Object.keys(result).length, arr.reduce((a, b) => a + b, 0))
    // calculate difference of sum of elements in arr from no. of keys in result 
    const val = Object.keys(result).length - arr.reduce((a, b) => a + b, 0)
    // console.log(val)
    if(val>1){
        console.log('OUTPUT: No')
    }else{
        if(val && arr[0]){
            console.log('OUTPUT: No')
        }else if(arr[0]> 1 && arr[2] == 0){
            console.log("OUTPUT: No")
        }else {
            console.log("OUTPUT: Yes")
        }
    }
});


// Not Done
// assignSix.addEventListener('click', );

// assignSeven.addEventListener('click', );





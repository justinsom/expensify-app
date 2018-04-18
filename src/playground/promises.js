const promise = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve('This is my resolved data');
//        reject('Error');
    }, 2500);

}).then((data) => {
    
    console.log('1: ', data);
    return data;                    // Pass data to next .then

}).then((data) => {                 // Promise chaining

    console.log('2:  New promise created as a result of resolve of first promise'); 
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('my second promise');
//            reject('Error');
        }, 2500);
    });

}).then((data) => {                 // Resolve for second promise
    
    console.log('3:  This is the revolve of ', data);

}).catch((error) => {

    console.log(error);             // Catch fror all promises

});

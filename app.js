
// console.log('Here we go');
// setTimeout(() => {
//     console.log('Hello World!');
//    }, 2000);


//    console.log('Hello');


//    setTimeout(() => {
//     console.log('How');
//    }, 1000);

//    setTimeout(() => {
//     console.log('are');
//    }, 2000);

//    setTimeout(() => {
//     console.log('you?');
//    }, 3000); 

// let countDown = (num, callback) => {
//     setTimeout(() => {
//         if (num > 1) {
//             console.log(num);
//             countDown(num - 1, callback);
//         } else {
//             callback();
//         }
//         }, 1000);
// };
// const done = () => {
//     console.log("Job's Done");
// };
// countDown(3, done);

// let lunchTime = true; {

// }

const orderMeSomeFood = () => {
    return new Promise((resolve, reject) => {
      if (lunchTime == true) {
        let favorites = {
            food: 'hot chicken',
            drink: 'half and half tea'
}
    Promise.resolve(console.log(favorites));
      } else {
          let error = new Error ('Nope');
          Promise.reject(error)
      } 
      
    }

    );

  };
  orderMeSomeFood()
export const promisify = (callback, args) => {
    return new Promise((res, _) => {
      res(callback(...args));
    });
  };


export function factorial(userInt , promise) {
    if (userInt === 0) return '1';
    if (!userInt) return '';

    let i, nextNumber, carret, result = userInt.toString().split('').reverse().map(Number);

    setTimeout(() => {
        while (--userInt) {
            i = carret = 0
    
            while ((nextNumber = result[i++]) !== undefined || carret) {
                carret = (nextNumber || 0) * userInt + carret
                result[i - 1] = carret % 10
                carret = parseInt(carret / 10)
            }
        }

        promise(result.reverse().join(''))
    } , 1)
}

// export function factorial(userInt) {
//     if (userInt === 0) return '1';
//     if (!userInt) return '';

//     let i, nextNumber, carret, result = userInt.toString().split('').reverse().map(Number);

//     while (--userInt) {
//         i = carret = 0

//         while ((nextNumber = result[i++]) !== undefined || carret) {
//             carret = (nextNumber || 0) * userInt + carret
//             result[i - 1] = carret % 10
//             carret = parseInt(carret / 10)
//         }
//     }

//     return result.reverse().join('')
// }
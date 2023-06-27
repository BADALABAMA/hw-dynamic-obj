const me = {};

// !!Option №1

do {
  userChoice = prompt(
    'Do you want to update/create or delete key and value for the object? u - update/create or d - delete or n - no'
  );

  if (userChoice.toLowerCase() === 'u') {
    const key = prompt('Enter a key');
    const value = prompt('Enter a new value for the key');

    if (!isNaN(value)) {
      //number check
      me[key] = parseFloat(value);
      console.log('Updated object:', me);
    } else {
      // if user add string value
      me[key] = value;
      console.log('Updated object:', me);
    }
  }

  if (userChoice.toLowerCase() === 'd') {
    const keyToDelete = prompt('Enter the key to delete');
    if (keyToDelete in me) {
      delete me[keyToDelete];
      console.log('Updated object:', me);
    }
  }
} while (userChoice.toLowerCase() !== 'n');

console.log('Good bye!');

// !!Option №2

// do {
//   userChoice = prompt(
//     'Do you want to update/create or delete key and value for the object?   u - update/create or d - delete or n - no'
//   );

//   switch (true) {
//     case userChoice.toLowerCase() === 'u':
//       const key = prompt('Enter a key');
//       const value = prompt('Enter a new value for the key');

//       //number check
//       if (!isNaN(value)) {
//         me[key] = parseFloat(value);
//         console.log('Updated object:', me);
//         break;
//       } else {
//         // if user add string value
//         me[key] = value;
//         console.log('Updated object:', me);
//         break;
//       }

//     case userChoice.toLowerCase() === 'd':
//       const keyToDelete = prompt('Enter the key to delete ');
//       break;

//     case keyToDelete in me:
//       delete me[keyToDelete];
//       console.log('Updated object:', me);
//       break;
//   }
// } while (userChoice.toLowerCase() !== 'n');
// console.log('Good bye !');

const arrPromise = [];

for (let i = 1; i <= 10; i++) {
  arrPromise[i-1] = fetch(`https://jsonplaceholder.typicode.com/users/${i}`).then(res => res);
}

Promise.all(arrPromise).then(result => {
  console.log(result);
})
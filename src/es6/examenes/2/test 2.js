export function* getId() {
    let value = 1
    for (let value of array) {
      yield value++;
    }
  } 
  const it = getId(['michi1', 'michi2', 'michi3']);
  console.log(it.next().value);
  
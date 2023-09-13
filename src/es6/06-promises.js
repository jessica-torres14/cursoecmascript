const anotherFuncion = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Hey!! Si funciono');
        }else {
            reject('Whoooops! No funciono');
        }
    })
}

anotherFuncion()
 .then(response => console.log(response))
 .catch(err => console.log(err));
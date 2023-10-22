
function outcome(){
    let num1 = Number(document.getElementById('num-one').value)
    let num2 = Number(document.getElementById('num-two').value)
    let total = 0

    if(document.getElementById('box1').checked)
        total = num1 + num2
    else if(document.getElementById('box2').checked)
        total = num1 - num2
    else if(document.getElementById('box3').checked)
        total = num1 * num2
    else
        total = num1 / num2

    document.getElementById('resultArea').innerHTML= 'Resultado: ' + String(total)
}



//_________________________________ aula exemplos

// const tempLondon = [18, -13, 8, 2]
// const tempPositive = tempLondon.filter (value => value >= 0)
// console.log(tempPositive)

// let clients = ['Andre', 'Jose', 'Marcela']
// //clients.sort()
// clients.reverse()
// console.log(clients)

// let clients = ['Andre', 'Jose', 'Marcela']
// console.log(clients)
// let clientsJoin = clients.join(', ') //adicions qualquer coisa a array
// console.log(clientsJoin)

// let numbers = [5, 6, 7, 8]
// let letters = ['a', 'b', 'c']
// all = numbers.concat(letters)
// half = all.slice(3, 5)
// console.log(all)
// console.log(half)

// let num = [5, 6, 7, 8]
//num = []
//num.length = 0
// num.splice(0, num.length)
// console.log(num)


// const num = [5, 6, 7, 8]
// const final = num.splice(2, 2)
// console.log(num)
// console.log(final)

// const movies = [
//     {id: 1, movieName: 'Chihiro'},
//     {id: 2, movieName: 'Jujutsu'},
//     {id: 3, movieName: 'One Piece'}
// ]
// console.log(movies.find(function(movie){
//     return movie.movieName == 'Jujutsu'
// }))
//console.log(movies.find(movie => movie.movieName == 'Jujutsu'))

// const num = [6, 7, 8, 9]
// console.log(num.includes(8))

// const num = [7, 8, 9]
// num.push(10, 11, 12)
// num.unshift(1, 2, 3)
// num.splice(3, 0, 4, 5, 6)
// console.log(num)

// const friends = ['Lilian', 'Raul', 'Rapha']
// const num = [1, 2, 3, 4, true]
// console.log(friends)
// console.log(num)
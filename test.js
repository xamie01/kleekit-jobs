const nameOfPeople=[
{name:'Alice'},{name: 'bob'} ,{name: 'jeremy'},{name:'sam'},{name:'henry'},{name:'sarah'},{name:'ashley'}
]

for (let i = 0; i <  nameOfPeople.length; i++) {
    console.log("Hello my name is" + " " + nameOfPeople[i].name)
}

for (let i = 0; i <  nameOfPeople.length; i+=2) {
    console.log( nameOfPeople[i].name)
}

for (let i = nameOfPeople.length-1; i>=0; i--) {
    console.log( nameOfPeople[i].name)
}


console.log( nameOfPeople[6].name)
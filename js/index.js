function timer() {
     let id = new Date()
     console.log(id);

     id = id.toTimeString()
     console.log(id);

     id = id.split(' ')
     console.log(id);

     id = id[0]
     console.log(id);


     document.getElementById('time').innerText = id
}

setInterval( timer, 1000 )
function add(){
    const a = document.getElementById('num1').value
    const b = document.getElementById('num2').value
    let sum = parseInt(a)+parseInt(b)
    alert(sum)
}

function minus(){
    const a = document.getElementById('num1').value
    const b = document.getElementById('num2').value
    let sum = parseInt(a)-parseInt(b)
    alert(sum)
}

function times(){
    const a = document.getElementById('num1').value
    const b = document.getElementById('num2').value
    let sum = parseInt(a)*parseInt(b)
    alert(sum)
}

function div(){
    const a = document.getElementById('num1').value
    const b = document.getElementById('num2').value
    let sum = parseInt(a)/parseInt(b)
    alert(sum)
}

function mod(){
    const a = document.getElementById('num1').value
    const b = document.getElementById('num2').value
    let sum = parseInt(a)%parseInt(b)
    alert(sum)
}

function sin(){
    const a = document.getElementById('num1').value
    const b = document.getElementById('num2').value
    alert(Math.sin(a))
}

function cos(){
    const a = document.getElementById('num1').value
    const b = document.getElementById('num2').value
    alert(Math.cos(a))
}

function tan(){
    const a = document.getElementById('num1').value
    const b = document.getElementById('num2').value
    alert(Math.tan(a))
}

function sqrt(){
    const a = document.getElementById('num1').value
    let sum = Math.sqrt(a)
    alert(sum);
}




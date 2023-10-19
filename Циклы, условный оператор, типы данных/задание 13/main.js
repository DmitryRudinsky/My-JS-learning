let n = prompt('Введите верхний предел:', '');
nextPrime:
for (let i = 2; i <= n; i++) { 
    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime; 
    }
    alert(`${i} - это простое число` );
}

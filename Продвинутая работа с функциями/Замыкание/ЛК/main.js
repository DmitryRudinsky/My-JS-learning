// Замыкание – это функция, которая запоминает свои внешние переменные и может
// получить к ним доступ. В некоторых языках это невозможно, или функция должна быть
// написана специальным образом, чтобы получилось замыкание. Но, как было описано
// выше, в JavaScript, все функции изначально являются замыканиями (есть только одно
// исключение, про которое будет рассказано в Синтаксис "new Function").

// То есть, они автоматически запоминают, где были созданы, с помощью скрытого
// свойства [[Environment]] и все они могут получить доступ к внешним переменным.

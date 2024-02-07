// 1 задание

"Исходный код"

function loadJson(url) {
    return fetch(url)
      .then(response => {
        if (response.status == 200) {
          return response.json();
        } else {
          throw new Error(response.status);
        }
      })
  }
  
  loadJson('no-such-user.json') // (3)
    .catch(alert); // Error: 404

"Переписанный код"

async function loadJsonAsync(url){
    let response = await fetch(url);
    if (response.status == 200) return response.json
    else throw new Error(response.status);
}

//2 задание

"Исходный код"

class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

function loadJson(url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new HttpError(response);
      }
    })
}

// Запрашивать логин, пока github не вернёт существующего пользователя.


demoGithubUser();function demoGithubUser() {
  let name = prompt("Введите логин?", "iliakan");

  return loadJson(`https://api.github.com/users/${name}`)
    .then(user => {
      alert(`Полное имя: ${user.name}.`);
      return user;
    })
    .catch(err => {
      if (err instanceof HttpError && err.response.status == 404) {
        alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
        return demoGithubUser();
      } else {
        throw err;
      }
    });
}

"Переписанный код"

class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

async function loadJson(url) {
  let response = await fetch(url);
  if (response.status == 200) {
    return response.json();
  } else {
    throw new HttpError(response);
    }
}

async function demoGithubUser() {
  let user;
  while(true) {
    let name = prompt("Введите логин?", "iliakan");
    try {
      user = await loadJson(`https://api.github.com/users/${name}`);
      break;
    } catch(err) {
      if (err instanceof HttpError && err.response.status == 404) {
          console.log("Такого пользователя не существует, пожалуйста, повторите ввод.");
      } else {
        throw err;
      }
    }
  console.log(`Полное имя: ${user.name}.`);
  return user;
  }
}



//3 задание

async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return 10;
}

function f() {
  wait().then(result => alert(result));
}

f();
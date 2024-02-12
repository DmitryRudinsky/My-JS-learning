"JS различает не только ГЛОБАЛЬНЫЕ и ЛОКАЛЬНЫЕ привязки. Внутри блоков функций можно создавать другие блоки и функции,"
"образуя несколько степеней локальности."

"Например, внутри этой функции, которая выводит ингридиенты, необходимые для приготовления хумуса,"
"Есть ещё одна функция:"

const hummus = function(factor){
  const ingredient = function(amount, unit, name){
    let ingredientAmount = amount * factor;
    if(ingredientAmount > 1){
        unit += "s";
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);
  }
  ingredient(1, "can", 'chickpeas');
  ingredient(0.25, "cup", 'tahini');
  ingredient(0.25, "cup", 'lemon juice');
  ingredient(1, "clove", 'garlick');
  ingredient(2, "tablespoon", 'olive oil');
  ingredient(0.5, "teaspoon", 'cumin');
};

hummus(5);

"Код, размещённый внутри функции ingredient, видит привязку factor Из внешней функции."
"Но её локальные привязки, такие как unit и componentAmount, во внешней функции не видны."


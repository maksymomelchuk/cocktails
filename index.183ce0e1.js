!function(){var n=document.querySelector(".search-form");n.addEventListener("submit",(function(){event.preventDefault(),""===n.searchQuery.value?function(){var n;n=window.innerWidth>=1280?9:window.innerWidth>=768?6:3;for(var t=[],e=0;e<n;e+=1){var r=fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php").then((function(n){return n.json()})).then((function(n){return n.drinks}));t.push(r)}Promise.all(t).then((function(n){return n.flat()})).then((function(n){return n.forEach((function(n){return console.log(n)}))}))}():(t=n.searchQuery.value,fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=".concat(t)).then((function(n){return n.json()})).then((function(n){return n.drinks})).then((function(n){return n.forEach((function(n){return console.log(n)}))})));var t})),fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=".concat(3)).then((function(n){return n.json()})).then((function(n){return n.drinks})).then((function(n){return n.forEach((function(n){return console.log(n)}))}))}();
//# sourceMappingURL=index.183ce0e1.js.map

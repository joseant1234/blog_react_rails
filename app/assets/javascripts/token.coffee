# se puede usar window.token como variable global, pero podria entrar en conflicto si una libreria usa tambien la variable token
# se encierra en un namespace gloabal, dado q es dificil q alguna liberia utilize ese objecto
# con el operador or=, si BlogReactRails no esta definido asignale el valor {}, si ya exite se usa el valor q tiene
window.BlogReactRails or= {}

window.BlogReactRails.token = document.querySelector('meta[name="csrf-token"]').content
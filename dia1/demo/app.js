// let nombre ="Luis";
// nombre="Juan"
// console.log(nombre);
// const apellido ="Navas";
// console.log(apellido);

let alumnos=["Maria","Carolina","Nicolas"];

let profesor={
    nombre:"Luis",
    apellido:"Navas",
    mostrarNombreCompleto:function(){
        return profesor.nombre + ' ' +profesor.apellido;
    }
}
for (let i = 0; i < alumnos.length; i++) {
    console.log(alumnos[i]);
}
console.log(profesor.mostrarNombreCompleto());
console.log("============================================")
console.log("               Menggunakan Pop              ") 
function array_pop() { 
    var kota = ["jakarta", "bandung", "makassar", "tegal"]
console.log(kota);
var kota1 = kota.pop();
console.log(kota1);
return kota;
}
console.log(array_pop());
console.log("============================================")
console.log("               Menggunakan Shift            ")
function array_shift() {
    var kota = ["jakarta", "bandung", "makassar", "tegal"];
    console.log(kota);
    var kota1 = kota.shift()
    console.log(kota1);
    return kota;
}
console.log(array_shift());
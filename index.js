const readline = require("readline-sync")

const angkaPertama = parseFloat(readline.question("Masukkan Angka Pertama :"));
const operator = readline.question("pilih Operator (+, -, *, /, %) :");
const angkaKedua = parseFloat(readline.question("Massukkan Angka kedua :"));



if (isNaN(angkaPertama) || isNaN(angkaKedua)) {
//tampilkan Error
    return console.log("inputan tidak sesuai !!!")
}else{ 
//lanjutkan eksekusi


const hasil = execute(angkaPertama, angkaKedua, operator);
console.log(`hasilnya adalah ${hasil}`);
}

function execute(angkaPertama,angkaKedua,operator){
   


switch (operator) {
    case "+":
return angkaPertama + angkaKedua;
    case "-":
return angkaPertama - angkaKedua;
    case "*":
return angkaPertama * angkaKedua;
    case "/":
        //validasi angkaKedua
        if(angkaKedua === 0 ) {
        return console.log("Error : Tidak Bisa di bagi dengan Nol")
        }

        return angkaPertama / angkaKedua;

    case "%":
        return angkaPertama % angkaKedua;
    default:
        console.log("operator tidak valid");

}
}
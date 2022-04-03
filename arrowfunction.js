const tampilNama = (nama) => {return `Halo, ${nama}`;}
console.log(tampilNama('Mugen'));
console.log(tampilNama)

let mahasiswa = ['Adi Winata', 'Wiratma Jaya', 'Surya Pradana'];
//normal function
let jumlahHuruf = mahasiswa.map(function(nama) {
    return nama.length;
});
console.log(jumlahHuruf);

//arrow function
let jumlahHuruf2 = mahasiswa.map(nama => nama.length);
console.log(jumlahHuruf2);

//arrow function return object
let jumlahHuruf3 = mahasiswa.map(nama => ({'nama': nama, 'jmlHuruf' : nama.length}));
console.table(jumlahHuruf3);

//using this in arrow function
const Mahasiswa = function() {
    this.nama = 'Mas Adi';
    this.umur = 25;
    
    this.sayHello = function() {
        console.log(`Halo, nama saya ${this.nama}. Umur saya ${this.umur} tahun.`);
    }

    //return NaN (Not a Number) cause it couldn't access constructor of Mahasiswa due to hoisting behaviou 
    // setInterval(function () {
    //     console.log(this.umur++);
    // }, 1000);

    //return umur++ cause it could access constructor of Mahasiswa
    setInterval(() => {
        console.log(this.umur++);
    }, 1000);
}

// const masadi = new Mahasiswa();
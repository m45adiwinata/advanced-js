class Pegawai {
    constructor (nama, alamat, gaji) {
        this.nama = nama;
        this.alamat = alamat;
        this.gaji = gaji;
    }

    kerja(jam) {
        this.gaji += jam;
        return "gaji ditambah karena jam kerja +"+jam;
    }

    loan(amt) {
        this.gaji -= amt;
        return "gaji dipotong karena pinjaman Rp"+amt;
    }
}

let masadi = new Pegawai('Mas Adi', 'Singaraja', 3500);
let ogy = new Pegawai('Kadek Ogy', 'Denpasar', 3500);

console.log(masadi.kerja(10));
console.log(ogy.loan(400));
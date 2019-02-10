var arr = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]
// arr.splice(1, 1, "Roman Alamsyah Elsharawy");
// arr.splice(2, 1, "Provinsi: Bandar Lampung");
// arr.splice(4, 1, "Pria", "SMA Internasional Metro");
// console.log(arr);
// var pisah = arr.split([3]);
// console.log(pisah);

function dataHandling2(str) {
    str.splice(1, 1, "Roman Alamsyah Elsharawy");
    str.splice(2, 1, "Provinsi: Bandar Lampung");
    str.splice(4, 1, "Pria", "SMA Internasional Metro");
    console.log(str);

    str.slice(3, 4);
    var irisan2 = str[3].split("/");

    switch (irisan2[1]) {
        case('01'):
            irisan2[1] = 'januari';
            break;
        case('02'):
            irisan2[1] = 'februari';
            break;
        case('03'):
            irisan2[1] = 'maret';
            break;
        case('04'):
            irisan2[1] = 'april';
            break;
        case('05'):
            irisan2[1] = 'mei';
            break;
        case('06'):
            irisan2[1] = 'juni';
            break;
        case('07'):
            irisan2[1] = 'juli';
            break;
        case('08'):
            irisan2[1] = 'agustus';
            break;
        case('09'):
            irisan2[1] = 'september';
            break;
        case('10'):
            irisan2[1] = 'oktober';
            break;
        case('11'):
            irisan2[1] = 'november';
            break;
        case('12'):
            irisan2[1] = 'desember';
            break;
}
    console.log(irisan2[1]);

    var sortArr = (str[3].split("/")).sort(function(value1, value2) {return value2 - value1});

    console.log(sortArr);
    console.log((str[3].split('/')).join('-'));
    console.log(str[1].slice(0, 15));
}

dataHandling2(arr);















// var arr2 = "How are you today ?";
// var pisah = arr2.split(" ")
// console.log(pisah)
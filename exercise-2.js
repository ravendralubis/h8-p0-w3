var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"],
]



function dataHandling(data) {
    for(var i = 0; i < data.length; i++) {
       for(var j = 0; j < data.length; j++) {
                console.log('No. ID: ' + data[j][0]);
                console.log('Nama: ' + data[j][1]);
                console.log('TTL: ' + data[j][2] + data[j][3]);
                console.log('Hobby: ' + data[j][4]);
                console.log('');
       }
       break;
    }
}

dataHandling(input);
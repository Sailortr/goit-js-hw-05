//Bu kod, verilen bir kullanıcılar dizisindeki her bir kullanıcının adını alarak yeni bir dizi oluşturur. 
//Yani, bir kullanıcı nesnesinin içindeki "name" özelliğine ulaşarak sadece isimlerden oluşan yeni bir dizi oluşturur.
//Ve çıktı olarak verir : ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]

//-------------------------------------------------------------------------------------------------------
//Arrow Function ve .map() kullanılmıştır.

const getUserNames = (users) => {
    return users.map(({ name }) => name);  // alternatif bir çözüm yolu ile ({})
};

//---------------------------------------------------------------------------------------------------------

//Fonksiyonun üzerinde çalıştığı girdi dizi.

console.log(
    getUserNames([
        {
            name: "Moore Hensley",
            email: "moorehensley@indexia.com",
            balance: 2811
        },
        {
            name: "Sharlene Bush",
            email: "sharlenebush@tubesys.com",
            balance: 3821
        },
        {
            name: "Ross Vazquez",
            email: "rossvazquez@xinware.com",
            balance: 3793
        },
        {
            name: "Elma Head",
            email: "elmahead@omatom.com",
            balance: 2278
        },
        {
            name: "Carey Barr",
            email: "careybarr@nurali.com",
            balance: 3951
        },
        {
            name: "Blackburn Dotson",
            email: "blackburndotson@furnigeer.com",
            balance: 1498
        },
        {
            name: "Sheree Anthony",
            email: "shereeanthony@kog.com",
            balance: 2764
        },
    ])

); // ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]


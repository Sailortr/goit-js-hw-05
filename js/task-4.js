//Bu kod, verilen bir kullanıcılar dizisindeki belirli bir cinsiyetin toplam bakiyesini hesaplar.
//Ve çıktı olarak verir : // 12053, // 8863

//--------------------------------------------------------------------------------------------------------------
//Arrow Function ile birlikte .reduce() metodu kullanılmıştır.

const getTotalBalanceByGender = (users, gender) => {
    return users.reduce((total, user) => {
        return user.gender === gender ? total + user.balance : total; //Eğer kullanıcının cinsiyeti (user.gender) verilen cinsiyete (gender) eşitse, kullanıcının bakiyesi (user.balance) toplam bakiyeye eklenir.
    }, 0);
};


//---------------------------------------------------------------------------------------------------------------
//Fonksiyonun üzerinde çalıştığı girdi dizi.

const allUsers1 = [
    {
        name: "Moore Hensley",
        gender: "male",
        balance: 2811
    },
    {
        name: "Sharlene Bush",
        gender: "female",
        balance: 3821
    },
    {
        name: "Ross Vazquez",
        gender: "male",
        balance: 3793
    },
    {
        name: "Elma Head",
        gender: "female",
        balance: 2278
    },
    {
        name: "Carey Barr",
        gender: "male",
        balance: 3951
    },
    {
        name: "Blackburn Dotson",
        gender: "male",
        balance: 1498
    },
    {
        name: "Sheree Anthony",
        gender: "female",
        balance: 2764
    }
];

console.log(getTotalBalanceByGender(allUsers1, "male")); // 12053

console.log(getTotalBalanceByGender(allUsers1, "female")); // 8863

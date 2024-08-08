                                    Görev 1: Kullanıcı adları



Bu görevi task-1.js dosyasında çalıştırın.


Bir kullanıcı nesnesi dizisi olan users parametresini alan bir getUserNames(users) ok fonksiyonu yazın. Fonksiyon, users dizisinden tüm kullanıcıların adlarını (name özelliği) içeren bir dizi döndürmelidir.

Aşağıdaki kodu alın ve çalışmasının doğruluğunu kontrol etmek için fonksiyonunuzun bildiriminden sonra yapıştırın. Konsol, çağrılarının sonuçlarını görüntüleyecektir.



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




Bu kodu mentorun kontrol etmesi için bırakın.



Mentorun kontrol ederken dikkat edecekleri:

getUserNames değişkeni tanımlanır.
getUserNames değişkenine (users) parametresi ile bir ok fonksiyonu atanmıştır.
users parametresi üzerinde yineleme yapmak için map() metodunu kullanın
Belirtilen kullanıcı dizisiyle bir işlev çağrıldığında ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"] dizisi döndürülür.
Bir işlevi rastgele ancak geçerli bağımsız değişkenlerle çağırmak doğru değeri döndürür


Çözüm



const getUserNames = (users) => {
  return users.map((user) => user.name);
};



                                    Görev 2. Arkadaşı olan kullanıcılar



Bu görevi task-2.js dosyasında çalıştırın.


İki parametre alan bir getUsersWithFriend(users, friendName) ok fonksiyonu yazın:

ilk parametre users - kullanıcı nesnelerinden oluşan bir dizi
ikinci parametre friendName - aranacak arkadaşın adı.
Fonksiyon, friendName adında bir arkadaşı olan users dizisindeki tüm kullanıcıların bir dizisini döndürmelidir. Her kullanıcının arkadaşları friends özelliğinde saklanır. Böyle bir arkadaşı olan kullanıcı yoksa, fonksiyon boş bir dizi döndürmelidir.



İpuçları:

filter() metodu, belirli bir koşulu sağlayan öğelerle yeni bir dizi oluşturmak için kullanılabilir.
friends dizisinin friendName içerip içermediğini kontrol etmek için includes() yöntemini kullanın.


Aşağıdaki kodu alın ve doğru çalışıp çalışmadığını kontrol etmek için fonksiyonunuzun tanımladıktan sonra yapıştırın. Konsol, çalışmanın sonuçlarını gösterecektir.



const allUsers = [
  {
    name: "Moore Hensley",
    friends: ["Sharron Pace"]
  },
  {
    name: "Sharlene Bush",
    friends: ["Briana Decker", "Sharron Pace"]
  },
  {
    name: "Ross Vazquez",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"]
  },
  {
    name: "Elma Head",
    friends: ["Goldie Gentry", "Aisha Tran"]
  },
  {
    name: "Carey Barr",
    friends: ["Jordan Sampson", "Eddie Strong"]
  },
  {
    name: "Blackburn Dotson",
    friends: ["Jacklyn Lucas", "Linda Chapman"]
  },
  {
    name: "Sheree Anthony",
    friends: ["Goldie Gentry", "Briana Decker"]
  }
];

console.log(getUsersWithFriend(allUsers, "Briana Decker")); 
// [
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"]
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"]
//   }
// ]

console.log(getUsersWithFriend(allUsers, "Goldie Gentry"));
// [
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"]
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"]
//   }
// ]

console.log(getUsersWithFriend(allUsers, "Adrian Cross" )); // []



Bu kodu mentorun kontrol etmesi için bırakın.



Mentorun kontrol ederken dikkat edecekleri:

getUsersWithFriend değişkeni tanımlanmıştır.
getUsersWithFriend değişkenine (users, friendName) parametreli bir ok fonksiyonu atanmıştır.
users parametresi üzerinde yineleme yapmak için filter() yöntemini kullanın
friendName parametresinin değeri "Briana Decker" dizesi ise, fonksiyon Sharlene Bush ve Sheree Anthony adlı kullanıcı nesnelerinden oluşan bir dizi döndürür.
Eğer friendName parametresinin değeri Goldie Gentry dizesi ise, fonksiyon Elma Head ve Sheree Anthony adlı kullanıcı nesnelerinden oluşan bir dizi döndürür.
Eğer friendName parametresinin değeri Adrian Cross dizesi ise, fonksiyon boş bir dizi döndürür
Bir fonksiyonu rastgele ancak geçerli bağımsız değişkenlerle çağırmak doğru değeri döndürür


Çözüm



const getUsersWithFriend = (users, friendName) => {
  return users.filter((user) => user.friends.includes(friendName));
};



                                    Görev 3. Arkadaş sayısına göre sırala



Bu görevi task-3.js dosyasında çalıştırın.


Kullanıcı nesnelerinden oluşan bir dizi olan users parametresini alan sortByDescendingFriendCount(users) isimli bir ok fonksiyonu yazın.

Fonksiyon, azalan arkadaş sayılarına göre sıralanmış tüm kullanıcıların bir dizisini döndürmelidir (friends özelliği).

Aşağıdaki kodu alın ve çalışmasının doğruluğunu kontrol etmek için fonksiyonunuzun tanımlamadan sonra yapıştırın. Konsol, çalışmanın sonuçlarını gösterecektir.



console.log(
  sortByDescendingFriendCount([
    {
      name: "Moore Hensley",
      friends: ["Sharron Pace"],
      gender: "male"
    },
    {
      name: "Sharlene Bush",
      friends: ["Briana Decker", "Sharron Pace"],
      gender: "female"
    },
    {
      name: "Ross Vazquez",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
      gender: "male"
    },
    {
      name: "Elma Head",
      friends: ["Goldie Gentry", "Aisha Tran"],
      gender: "female"
    },
    {
      name: "Carey Barr",
      friends: ["Jordan Sampson", "Eddie Strong"],
      gender: "male"
    },
    {
      name: "Blackburn Dotson",
      friends: ["Jacklyn Lucas", "Linda Chapman"],
      gender: "male"
    },
    {
      name: "Sheree Anthony",
      friends: ["Goldie Gentry", "Briana Decker"],
      gender: "female"
    }
  ])
);
// [
//   {
//     name: "Ross Vazquez",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"],
//     gender: "female"
//   },
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     gender: "female"
//   },
//   {
//     name: "Moore Hensley",
//     friends: ["Sharron Pace"],
//     gender: "male"
//   }
// ]



Bu kodu mentorun kontrol etmesi için bırakın.



Mentorun kontrol ederken bakacakları:

sortByDescendingFriendCount değişkeni bildirilmiştir.
(users) değişkenine sortByDescendingFriendCount parametresiyle bir ok fonksiyonu atanır.
users parametresini sıralamak için toSorted() metodu kullanılır
Belirtilen users dizisi ile bir işlev çağrıldığında, arkadaşlarının sayısına göre azalan sırada sıralanmış yeni bir kullanıcı dizisi döndürülür
Bir işlevi rastgele ancak geçerli bağımsız değişkenlerle çağırmak doğru değeri döndürür


Çözüm

const sortByDescendingFriendCount = (users) => {
  return users.toSorted((a, b) => b.friends.length - a.friends.length);
};



                                      Görev 4. Toplam bakiye

İki parametre alan bir getTotalBalanceByGender(users, gender) ok fonksiyonu yazın:

ilk parametre users - kullanıcı nesnelerinden oluşan bir dizi,
ikinci parametre gender - cinsiyeti saklayan bir dize.
Fonksiyon bir metot çağrı zinciri kullanmalı ve cinsiyeti (özellik gender) gender parametresinin değeriyle eşleşen kullanıcıların toplam bakiyesini (özellik balance) döndürmelidir.

Aşağıdaki kodu alın ve doğru çalışıp çalışmadığını kontrol etmek için fonksiyonunuzun tanımlanmasından sonra yapıştırın. Çalışmasının sonuçları konsolda görüntülenecektir.



const allUsers = [
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

console.log(getTotalBalanceByGender(allUsers, "male")); // 12053

console.log(getTotalBalanceByGender(allUsers, "female")); // 8863



Bu kodu mentorun kontrol etmesi için bırakın.



Mentorun kontrol ederken dikkat edecekleri:

getTotalBalanceByGender değişkeni tanımlanmıştır.
getTotalBalanceByGender değişkenine (users, gender) parametreli bir ok fonksiyonu atanmıştır.
İşlevin gövdesi doğru sırada bir yöntemler zinciri kullanır
Kullanıcılar parametresinin değeri değişmez
Eğer gender parametresinin değeri "male" dizesi ise, fonksiyon 12053 sayısını döndürür.
Eğer gender parametresinin değeri female dizesi ise, fonksiyon 8863 sayısını döndürür.
Rastgele ancak geçerli bağımsız değişkenlere sahip bir işlevin çağrılması doğru değeri döndürür


Çözüm

const getTotalBalanceByGender = (users, gender) => {
  return users.reduce((total, user) => {
    return user.gender === gender ? total + user.balance : total;
  }, 0);
};
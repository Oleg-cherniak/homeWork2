 //  TASK 2 

 const initialData = [
    {
      username: "Maria",
      age: 25,
    },
    {
      username: "Alex",
      age: 21,
    },
    {
      username: "Oleg",
      age: 14,
    },
    {
      username: "Dmitriy",
      age: 35,
    },
    {
      username: "Oksana",
      age: 72,
    },
  ];
  
  const filteredArray = initialData.filter((element, index) => {
    return element.age >= 21;
  });
  const sortedArray = filteredArray.sort((prev, next) =>
    prev.username > next.username ? 1 : -1
  );
  
  console.log(filteredArray);
  console.log(sortedArray);

  // TASK 5 

  const isPalindrome = (letters) => {
    let characters = letters.split(""),
      firstLetter = characters.shift(),
      lastLetter = characters.pop();
  
    if (firstLetter.toLowerCase() !== lastLetter.toLowerCase()) {
      return false;
    }
  
    if (characters.length < 2) {
      return true;
    }
  
    return isPalindrome(characters.join(""));
  };
  console.log(isPalindrome("шалаш"));

  // TASK 8 

  const videos = [
    {
      id: 65432445,
      title: "The Chamber",
    },
    {
      id: 675465,
      title: "Fracture",
    },
    { id: 70111470, title: "Die Hard" },
    { id: 654356453, title: "Bad Boys" },
  ];
  const obj = videos.reduce((acc, elem, index) => {
    acc[index] = elem;
    return acc;
  }, {});
  console.log(obj);

  // TASK 3 !!!!!!!!!! НЕВЕРНО  !!!!!!!!!!!!!!!

  const users = [
    {
      id: 1,
      name: "Alex",
    },
    {
      id: 2,
      name: "Oleg",
    },
    {
      id: 3,
      name: "Igor",
    },
  ];
  
  const fn1 = (arr1, arr2) => {
  
    const result = users.filter((elem, index) => {
  
     return (elem["id"] !== arr2[elem]);
  
  });
  console.log(fn1(users, [2]));

  // TASK 7

    const newReleases = [
    {
        id: 70111470,
        title: "Die Hard", 
        boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        uri: "http://api.netflix.com/catalog/titles/movies/70111470", 
        rating: [4.0],
        bookmark: []
    }, { 
        id: 654356453,
        title: "Bad Boys", 
        boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        uri: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: [5.0], 
        bookmark: [{ id: 432534, time: 65876586 }]
    }, { 
        id: 65432445, 
        title: "The Chamber", 
        boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg", 
        uri: "http://api.netflix.com/catalog/titles/movies/70111470", 
        rating: [4.0], 
        bookmark: []
    }, { 
        id: 675465, 
        title: "Fracture", 
        boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg", 
        uri: "http://api.netflix.com/catalog/titles/movies/70111470", 
        rating: [5.0], 
        bookmark: [{ id: 432534, time: 65876586 }]
    }
];

const newArray = newReleases.reduce((result, elem, index) => {
    if (elem["rating"] === [5.0]) {
        return (result += elem[0]);
    } 

}, [])
console.log(newArray);

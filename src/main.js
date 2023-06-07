


let animals = [
    {
        "name": "Білка",
        "age": 3,
        "type": "білка",
        "city": "Київ",
        "details": "Білка - дуже активна тварина. Вона любить гризти насіння та стрибати по гілках дерев.",
        "img": "https://images.squarespace-cdn.com/content/v1/59b4328f49fc2b50d08701fb/1610583955777-ALHD4BPA03MY0DSOXQ5D/owning_a_pet_squirrel"
    },
    {
        "name": "Мурка",
        "age": 5,
        "type": "кіт",
        "city": "Львів",
        "details": "Мурка - спокійна тварина, яка любить спати на сонці та гратися зі стрункою мишкою.",
        "img": "https://images.unsplash.com/flagged/photo-1557427161-4701a0fa2f42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"
    },
    {
        "name": "Рекс",
        "age": 2,
        "type": "собака",
        "city": "Одеса",
        "details": "Рекс - вірний друг із прекрасним нюхом. Він любить гратися з м'ячем та допомагати своєму господарю.",
        "img": "https://cdn.mos.cms.futurecdn.net/ASHH5bDmsp6wnK6mEfZdcU.jpg"
    },
    {
        "name": "Кеша",
        "age": 7,
        "type": "папуга",
        "city": "Харків",
        "details": "Кеша - розумна папуга, який вміє повторювати слова та фрази. Він любить колекціонувати різнобарвні пір'я.",
        "img": "https://www.northernparrots.com/wp-content/uploads/2023/02/polly-768x1024.jpg"
    },
    {
        "name": "Гарфілд",
        "age": 4,
        "type": "хом'як",
        "city": "Дніпро",
        "details": "Гарфілд - великий і лінивий хом'як. Він любить їсти багато їжі та спати в своїй коморці.",
        "img": "https://media.istockphoto.com/id/91778222/photo/cute-hamster.jpg?s=612x612&w=0&k=20&c=FskEITU9b87SrTomDI763aRffY-3LilQP7ykvua3dko="
    }
]

let counter = 0;

let searchTypeVal = '';

var aName = document.getElementById('name');
var desc = document.getElementById('desc');
var age = document.getElementById('age');
var type = document.getElementById('type');
var city = document.getElementById('city');
var nextButton = document.getElementById('front')
var backButton = document.getElementById('back')
var pic = document.getElementById('pic')
var searchType = document.getElementById('searchType')
console.log(searchType.value)
var searchButton = document.getElementById('searchButton')
var input = document.getElementById('input')



showAnimal();
nextButton.addEventListener('click', nextAnimal)
backButton.addEventListener('click', previousAnimal)

searchButton.addEventListener('click', search)


function nextAnimal() {
    if (counter >= 4) {
        console.log('null')
        counter = 0;
    }
    else counter++;

    showAnimal();

}

function search() {
    console.log(input.value)
    for (let i = 0; i < animals.length; i++) {
        let elem = animals[i];
        console.log(elem[searchType.value])
        if (elem[searchType.value] == input.value) {
            counter = i
        }

    }
    showAnimal()

}




function previousAnimal() {
    if (counter <= 0) {
        counter = animals.length - 1
    }
    else counter--
    console.log(counter);

    showAnimal();

}

function showAnimal() {

    aName.innerHTML = animals[counter].name;
    desc.innerHTML = animals[counter].details;
    age.innerHTML = animals[counter].age;
    type.innerHTML = animals[counter].type;
    city.innerHTML = animals[counter].city;
    pic.style = `background: url(${animals[counter].img})no-repeat;`
    pic.style.backgroundSize = 'cover';
    pic.style.backgroundPosition = 'center'
}



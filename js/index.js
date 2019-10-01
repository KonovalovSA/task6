let objArr = [];

// функция конструктор объекта
function obj(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.canWalk = true;
}

btn.onclick = function () {
    if (form.checkValidity()) {
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let city = document.getElementById('city').value;

    FirstABC = name[0].toUpperCase();
    name = FirstABC + name.slice(1);
    FirstABC = city[0].toUpperCase();
    city = FirstABC + city.slice(1);

    tr = new obj(name, age, city);
    objArr.push(tr);
    objPush();
    }
    return false;
}

// функция добавления строки в таблицу
let objPush = function () {
    let stroka = '';
    for(i = 0;i < objArr.length; i++){
        stroka+= '<tr>';
        stroka+= '<th  scope="row">' + objArr[i].name + '</th>';
        stroka+= '<td>' + objArr[i].age + '</td>';
        stroka+= '<td>' + objArr[i].city + '</td>';
        stroka+= '</tr>';
    }
    document.getElementById('tbody').innerHTML = stroka;
}

    // Сортируем таблицу по: Имени, Возрасту, Городу
nameSort.onclick = function () {
    objArr.sort((prev, next) => {
        if ( prev.name < next.name ) return -1;
        if ( prev.name < next.name ) return 1;
    });
    objPush();
    return false;
}
ageSort.onclick = function () {
    objArr.sort((prev, next) => {
        if ( prev.age < next.age ) return -1;
        if ( prev.age < next.age ) return 1;
    });
    objPush();
    return false;

}
citySort.onclick = function () {
    objArr.sort((prev, next) => {
        if ( prev.city < next.city ) return -1;
        if ( prev.city < next.city ) return 1;
    });
    objPush();
    return false;
}
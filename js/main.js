document.getElementById('btn').onclick = function getBurger() {
    document.getElementById('cost').innerHTML = '';
    document.getElementById('calorie').innerHTML = '';
    let Burger = {};
    let addPrice = [10, 20, 15, 15, 20];
    let addCalorie = [20, 5, 10, 0, 5];

    //Определение начальной стоимости и калорийности бургера
    let size = document.getElementsByName('size');
    for (let i = 0; i < size.length; i++) {
        if (size[i].checked && size[i].value == 'big') {
            Burger.price = 100;
            Burger.calorie = 40;
        }
        if (size[i].checked && size[i].value == 'small') {
            Burger.price = 50;
            Burger.calorie = 20;
        }
    }

    //Определение итоговой стоимости и калорийности бургера после добавления начинки
    let filling = document.getElementById('fill').getElementsByTagName('input');
    for (let i = 0; i < filling.length; i++) {
        if (filling[i].checked) {
            Burger.price = Burger.price + addPrice[i];
            Burger.calorie = Burger.calorie + addCalorie[i];
        }
    }
    document.getElementById('cost').innerHTML = Burger.price;
    document.getElementById('calorie').innerHTML = Burger.calorie;
}
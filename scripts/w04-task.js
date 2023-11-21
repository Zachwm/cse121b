/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Zach McLaughlin",
    photo: "images/hikingpic.jpg",
    favoriteFoods: [
        'Gnocchi',
        'Steak',
        'Potato',
      ],
    hobbies: [
        'Mountain Biking',
        'Gaming'
    ],
    placesLived: []
};
/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
      place: 'Houston, Tx',
      length: '18 years'
    }, 
    {
        place: 'Rexburg, Id',
        length: '2 years'
    }
);
/* DOM Manipulation - Output */
document.querySelector('#name').textContent = myProfile.name;
/* Name */
document.querySelector('#photo').src = myProfile.photo;
/* Photo with attributes */
document.querySelector('#photo').textContent = myProfile.name;
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach (food => {
    let li = document.createElement('li');
    li.textContent = food
    document.querySelector('#favorite-foods').appendChild(li);
});
/* Hobbies List */
myProfile.hobbies.forEach (hobby => {
    let ul = document.createElement('ul');
    ul.textContent = hobby
    document.querySelector('#hobbies').appendChild(ul);
});
/* Places Lived DataList */
myProfile.placesLived.forEach (place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place

    let dd = document.createElement('dd');
    dd.textContent = place.length
    
    let dl = document.querySelector('#places-lived'); 
    dl.appendChild(dt);
    dl.appendChild(dd);
});
'use strict';

let inputFieldText;
let currentDropdownSelection;
let divContainer = document.getElementById('contentContainer');
let nameHeader = document.createElement('h2');
nameHeader.id='nameHeader';
let attributePara_1 = document.createElement('p');
attributePara_1.id='attributePara_1';
let attributePara_2 = document.createElement('p');
attributePara_2.id='attributePara_2';

// console.log(inputFieldText);
let inputFieldBtn = document.getElementById('requestResourceButton');
inputFieldBtn.addEventListener('click', function (event) {
  currentDropdownSelection = document.getElementById('resourceType').value;
  inputFieldText = document.getElementById('resourceId').value;
  // console.log(inputFieldText);
  // console.log(currentDropdownSelection);
  getInformation('https://swapi.co/api/'
  + currentDropdownSelection + '/'+inputFieldText+'/', nameHeader);
});

let getInformation = function (url, element) {
let getInfo = new XMLHttpRequest();
getInfo.addEventListener('load', function(){
  // console.log(getInfo.response);
  let result = JSON.parse(getInfo.response);
  nameHeader.innerText = result['name'];
  attributePara_1.innerText = result['gender'];
  attributePara_2.innerText = result['species'];
  element.append(attributePara_1);
  element.append(attributePara_2);
  divContainer.append(element);
});
getInfo.open('GET',url);
getInfo.send();
}
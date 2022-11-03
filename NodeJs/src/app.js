/*
File: app.js
Author: Szilágyi Nikolett Viola
Copyright: 2022, Szilágyi Nikolett Viola
Group: Szoft-II-N
Date: 2021-11-02
Github: https://github.com/nikolettszilagyii/
Licenc: GNU GPL
*/
var szamitGomb = document.querySelector('#szamitGomb');
var eredmeny = document.querySelector('#eredmeny');

szamitGomb === null || szamolGomb === void 0 ? void 0 : szamolGomb.addEventListener('click', function () {
    var Aoldal = document.querySelector('#Aoldal');
    var Boldal = document.querySelector('#Boldal');
    var Coldal = document.querySelector('#Coldal');
    var Doldal = document.querySelector('#Doldal');
    var AoldalNum = Number(Aoldal.value);
    var BoldalNum = Number(Boldal.value);
    var ColdalNum = Number(Coldal.value);
    var DoldalNum = Number(Doldal.value);
    var terulet = szTerulet(AoldalNum, BoldalNum, ColdalNum, DoldalNum);
    eredmeny.textContent = "Terület: " + String(terulet);
    Aoldal.value = "";
    Boldal.value = "";
    Coldal.value = "";
    Doldal.value = "";
});
function szTerulet(Aoldal, Boldal, Coldal, Doldal) {
    return ((Aoldal + Coldal) / (4 * (Aoldal - Coldal))) * Math.sqrt(2) *
        ((Aoldal + Boldal - Coldal + Doldal) *
            (Aoldal - Boldal - Coldal + Doldal)
            * (Aoldal + Boldal - Coldal - Doldal)
            * (-Aoldal + Boldal + Coldal + Doldal));
}
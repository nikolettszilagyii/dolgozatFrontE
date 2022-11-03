/*
File: app.ts
Author: Szilágyi Nikolett Viola
Copyright: 2022, Szilágyi Nikolett Viola
Group: Szoft-II-N
Date: 2021-11-02
Github: https://github.com/nikolettszilagyii/
Licenc: GNU GPL
*/


const szamitGomb = document.querySelector('#szamitGomb');
const eredmeny = document.querySelector('#eredmeny');


szamitGomb?.addEventListener('click', () => {
    const Aoldal = document.querySelector('#Aoldal') as HTMLInputElement;
    const Boldal = document.querySelector('#Boldal') as HTMLInputElement;
    const Coldal = document.querySelector('#Coldal') as HTMLInputElement;
    const Doldal = document.querySelector('#Doldal') as HTMLInputElement;
    let AoldalNum: number = Number(Aoldal.value);
    let BoldalNum: number = Number(Boldal.value);
    let ColdalNum: number = Number(Coldal.value);
    let DoldalNum: number = Number(Doldal.value);

    let terulet = szTerulet(AoldalNum, BoldalNum, ColdalNum, DoldalNum);
    eredmeny.textContent = "Terület: " + String(terulet);
    Aoldal.value = "";
    Boldal.value = "";
    Coldal.value = "";
    Doldal.value = "";
});

function szTerulet(Aoldal: number, Boldal: number, Coldal: number, Doldal: number):number {
    return ((Aoldal+Coldal)/(4*(Aoldal-Coldal))) * Math.sqrt(2)* 
    ((Aoldal+Boldal-Coldal+Doldal)*
    (Aoldal-Boldal-Coldal+Doldal)
    *(Aoldal+Boldal-Coldal-Doldal)
    *(Aoldal+Boldal+Coldal+Doldal))
};

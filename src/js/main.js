// EXO1
// Créer une fonction qui prend deux paramètres, et les additionne, et fait un console.log du résultat.(Additionner)
let terme1=Math.round(Math.random()*10);
let terme2=Math.round(Math.random()*10);
let addition=(terme1,terme2)=>{
    return terme1+terme2;
}
console.log(`${terme1} + ${terme2} = ${addition(terme1,terme2)}`)

// EXO2
// Créez une fonction qui prend deux paramètres, et soustrait le deuxième au premier, et faites un console.log du résultat.(Soustraction)
terme1=Math.round(Math.random()*10);
terme2=Math.round(Math.random()*10);
let soustraction=(terme1,terme2)=>{
    return terme1-terme2;
}
console.log(`${terme1} - ${terme2} = ${soustraction(terme1,terme2)}`);

// EXO3
// Créez une fonction qui prend deux paramètres, et les multiplie, et faites un console.log du résultat.(Multiplication)
terme1=Math.round(Math.random()*10);
terme2=Math.round(Math.random()*10);
let multiplication=(terme1,terme2)=>{
    return terme1*terme2;
}
console.log(`${terme1} * ${terme2} = ${multiplication(terme1,terme2)}`);
// EXO4 
// Créez une fonction qui prend deux paramètres, et divise le premier par le deuxième, et faites un console.log du résultat.(Division)
terme1=Math.round(Math.random()*10);
terme2=Math.round(Math.random()*10);
let division=(terme1,terme2)=>{
    return terme1/terme2;
}
console.log(`${terme1} / ${terme2} = ${division(terme1,terme2)}`);
// EXO5
// Créez une fonction qui prend deux paramètres, et retourne le reste de la division du premier par le deuxième, et faites un console.log du résultat.(Modulo)
terme1=Math.round(Math.random()*10);
terme2=Math.round(Math.random()*10);
let modulo=(terme1,terme2)=>{
    return terme1%terme2;
}
console.log(`${terme1} % ${terme2} = ${modulo(terme1,terme2)}`);
// EXO6
// Créez une fonction qui prend un paramètre, et retourne le carré de ce nombre, et faites un console.log du résultat.(Racine carrée)
terme1=Math.round(Math.random()*10);

let carre=(terme1)=>{
    return terme1*terme1;
}
console.log(`${terme1}² = ${carre(terme1)}`);
// EXO7
// Créez une fonction qui prend deux paramètres, et retourne le premier nombre à l'exposant du deuxième, et faites un console.log du résultat.(Exposant)
terme1=Math.round(Math.random()*10);
terme2=Math.round(Math.random()*10);

let exposant=(terme1,terme2)=>{
    let res=0;
    
    if(terme2==0){
        res=1;
    }
    else if(terme2==1){
        res=terme1;
    }
    else{
        res=terme1;
        //terme1=2
        //terme2=3
        //res=4
        for(let i=2;i<=terme2;i++){
            res=res*terme1;
        }
    }
    return res;
    
}
console.log(`${terme1} ° ${terme2} = ${exposant(terme1,terme2)}`);


// EXO8
// Créer une function [capitalize] qui transforme n'importe quelle chaine de caractères avec la première lettre en majuscule et le reste en minuscule;


/* let captilalize=(stringg)=>{
    return stringg.charAt(0).toUpperCase()+stringg.substr(1).toLowerCase();
}
console.log(captilalize("stRingg")); */
// EXO9
// Créer une function [calcul] ayant 3 paramètres
// nbr1 , operator , nbr2
// Je dois pouvoir mettre un nombre choisir entre + - * ou / et un second nombre et obtenir une réponse (Utilisez un switch)
/* let calcul=(nbr1,operator,nbr2)=>{
    switch(operator){
        case"+" :
        return nbr1+nbr2;
        case"-" :
        return nbr1-nbr2;
        case"*" :
        return nbr1*nbr2;
        case"/" :
        return nbr1/nbr2;
        default:
        return "yahallo";
    }
}
nbr1=Number((prompt("entrez un chiffre")));
nbr2=Number((prompt("entrez un 2e chiffre")));
operator=(prompt("entrez un operateur"));
alert(calcul(nbr1,operator,nbr2));
 */

// EXO1
// Créer une function [reverseNumber] qui retourne une série de nombre à l'envers (exemple si j'entre 851 elle me retourne 158)
/* let reverseNumber=(number)=>{
    return Number(number.split('').reverse().join(''));

}
console.log(reverseNumber("421")); */

// EXO2
// Créer une function [divPar2] contenant un switch qui vérifie si un nombre est divisible par 2
// Qui répond "Le num x est divisible par 2 x:2 = z"
// Dans le cas ou ce n'est pas divisible il répond : "Ce nombre n'est pas divisible par 2"
/* let divPar2=(num)=>{
    if(num%2==1){
        return "ce nombre nest pas divisible par 2"
    }
    else{

 return `ce nombre est divible par 2  ${num}:2= ${num/2}`
    }
}
console.log(divPar2(4)); */

// EXO3
// Créer une fonction [logIn] qui va demander à l'utilisateur un mot de passe et vérifier s'il a bien entré "mdp" si oui, faites une alert "Vous êtes connecté", si non, redemander le mot de passe jusqu'à ce que l'utilisateur rentre "mdp"
/* let login=(mdp)=>{
    let uti=prompt("Quel est le mdp ?");
    while(uti!=mdp){
      uti=prompt("Quel est le mdp ?");
    }
    alert("gg");
}
console.log(login("papa")); */

//exo special

/* let classeCoding19=[];
//fanny qui rentre en classe 8h43
classeCoding19.push("Fanny");
//8h44 chris rentre
classeCoding19.push("Chris");
//8h45 nasila,stan , mouna et jean rentrent
classeCoding19.push("Nasila","Stan","Mouna","Jean");
//8h51 jean et stan poursuivent dango dehors
classeCoding19.splice(5,1);
classeCoding19.splice(3,1);
//8h55 ali et agim font du bruit
classeCoding19.push("Ali","Agim");
//8h56 antoine rentre et ressort
classeCoding19.push("Antoine");
classeCoding19.pop();
//8h59 yassine rentre plante
classeCoding19.push("Yassine");
//9h00 seifedin et haroune entrent
classeCoding19.push("Seifedin","Haroune");
//9h03 elvis , illias d et e entrent
classeCoding19.push("Elvis","Illias D","Illias E");
//9h04 kevin cafe
classeCoding19.push("Kevin");
//9h05 van et nathan retard et fanny sort
classeCoding19.push("Van Hoa","Nathan");
classeCoding19.shift();
//9h10 adil rentre
classeCoding19.push("Adil");
//9h20 fanny de retour
classeCoding19.push("Fanny");
//9h30 lyra discret
classeCoding19.push("Lyra");
console.log(classeCoding19); */

/* let classeCoding19=[];
let ajouter=(nom,phrase)=>{
    classeCoding19.push(nom);
    console.log(phrase);
    console.log(classeCoding19);
}


let retirer=(nom,phrase,nbr)=>{
    classeCoding19.splice(classeCoding19.indexOf(nom),nbr);
    console.log(phrase);
    console.log(classeCoding19);
} */


/* ## Exo 1 
### Créez un objet avec vos valeurs
### 'Nom', 'prenom', 'age', 'taille'
### Affichez votre age via un console.log() */
let personne={
    nom:"Tran",
    prenom:"Van",
    age:24,
    taille:"165cm",

    bonjour(){
        console.log(`Bonjour ${this.prenom} ${this.nom}`);
    }

}
console.log(personne.age);

/* ## Exo 2 
### Créez un second et un 3eme personnage (le 3eme personnage doit rester vide) */
let personne2={
    nom:"papa",
    prenom:"papa",
    age:"??",
    taille:"??cm",

    bonjour(){
        console.log(`Bonjour ${this.prenom} ${this.nom}`);
    }

}
console.log(personne2);

let personne3={
    nom:"",
    prenom:"",
    age:"",
    taille:"",

    bonjour(){
        console.log(`Bonjour ${this.prenom} ${this.nom}`);
    }

}
console.log(personne3);

/* ## Exo 3
### Remplir les propriétées du 3eme personnage
### Son nom doit valoir le nom du personnage1
### Son age doit valoir celui du personnage2
### Et sa taille doit être rempli avec la valeur que vous souhaitez */

    personne3.nom=personne.nom,
    personne3.age=personne2.age,
    personne3.taille="???",

   
console.log(personne3);


/* ## Exo 1
### Créez un personnage avec un nom un et prenom et donnez lui une méthode 'sePresenter' qui fera un console.log "Bonjour je m'appelle " avec son nom puis son prénom. */
let personne4={
    nom:"ha",
    prenom:"ha",

    sepresenter(){
        console.log(`Bonjour je m'appelle ${this.nom} ${this.prenom}`);
    }
}
/* ## Exo 2
### Créer un objet avec un nom et une méthode
### La méthode de votre objet lance un prompt permetant de changer son age
### Une alert renvoi "[objet] a [age de l'objet] ans" */
let changerAge={
    nom:"questionAge",
    age:0,
    questionage(){
        this.age=prompt("Quel est ton age");
        alert(`${personne4.prenom} a ${changerAge.age}`);
    }
}
/* changerAge.questionage() */
changerAge.questionage();

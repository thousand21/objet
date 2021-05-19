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

/* ## Exo 2

### Créer deux personnages du nom de François et Sergio
### Donnez leur à chacun une propriété panier (tableau) contenant tous deux des ingrédients différents du super marché, par exemple huile,tomate,pain etc..
### Rajouter à François la méthode derober, qui prend 2 aliments du panier de Sergio et les met dans son panier. */

let Francois={
    panier:["huile","tomate"],

    derober(qqun){

       vol=Math.round(Math.random()*(qqun.panier.length-1));
       
        this.panier.push(Sergio.panier[vol]);
        
      
        /*  this.panier.push(qqun.panier[0]); 
         this.panier.push(qqun.panier[1]);  */
        qqun.panier.splice(0,qqun.panier.length);
        /* console.log(vol); */
        
    }

}
let Sergio={
    panier:["chips","frites"],

}
let tapette={
    panier:["chips","frites"],
}

console.log(Francois.panier);
console.log(Sergio.panier);
Francois.derober(Sergio);
console.log(Francois.panier);
console.log(Sergio.panier);


/* ## Exo  4

### Créer un objet "vieille_dame" avec une propriété "âge" assez élevée une propriété "nom" contenant un "prenom" et un "nom de famille" (/!\ Objet dans objet), une propriété "moral" avec comme valeur "mal" et une propriété "objet" par exemple une canne 

### une méthode "parler" qui selon son moral fait une alert différente, si son moral = "mal" alors elle dira "Vous me dérangez et le frappe avec son objet", si son moral = "bien" alors elle dira "bonjour" + le nom du vieil_homme.

### Créer ensuite l'objet vieil_homme avec une propriété "nom" et une méthode "adoucir" qui change le moral de la "vieille_dame" en "bien".

### Faites parler la vieille dame, puis lancer la méthode adoucir du vieil homme et relancer la méthode parler de la vieille dame. */
let vieille_dame={
    age:84,
    moral:"mal",
    objet:"ma canne",

    nom:{
        prenom:"Irene",
        nom:"Berbere",
    },
        
        parler(){
            if(this.moral=="mal"){
                alert(`Vieille dame : Vous me dérangez et je vais vous frapper avec ${this.objet}`);
            }
            else{
                
                alert(`Vieille dame : Bonjour ${vieil_homme.nom.prenom}`);
            
            }
               
                   
               
                    
            
        }
    }


let vieil_homme={
    nom:{
        prenom:"Hercule",
        nom:"Berbere",
    },
    
    adoucir(){
        vieille_dame.moral="bien";
    }
}
vieille_dame.parler();
vieil_homme.adoucir();
vieille_dame.parler();

/* # Exo bonus 1
- Créer un exercice ou une personne rentre dans un magasin avec une somme d'argent et a la fin il faut soustraire l'argent depensé
ex: je rentre dans un magasin, j'ai 30€, j'achete un chocolat qui coute 2€, et une tartine qui coute 3,50€.
Au final, j'ai 24,50€*/
let toi={
    argent:0,
    
    acheter(){
        reponse=prompt("Veux-tu acheter quelque chose?");
        stack=0;
        
        while(reponse=="oui" && stack==0){
            article=prompt("Que veux tu acheter? (chocolat,tartine,saucisse,riz,poisson)");


            if(article=="chocolat"){
                this.argent=this.argent-magasin.chocolat;
                if(this.argent>0){
                    reponse=(prompt(` Il te reste ${this.argent}. Veux tu acheter autre chose?`));
                }
               
                
                else{
                    this.argent=this.argent+magasin.chocolat;
                    reponse=(alert(` Tu n as pas assez pour acheter cet article. Il te reste ${this.argent}.`));
                    
                    stack=1;
                }
            }
            else if(article=="tartine"){
                this.argent=this.argent-magasin.tartine;
                
                
                if(this.argent<=0){
                    this.argent=this.argent+magasin.tartine;
                    reponse=(alert(` Tu n as pas assez pour acheter cet article. Il te reste ${this.argent}. `));
                    
                    stack=2;
                }
                else{
                    reponse=(prompt(` Il te reste ${this.argent}. Veux tu acheter autre chose?`));
                }
                
            }
            else if(article=="saucisse"){
                this.argent=this.argent-magasin.saucisse;
                
                
                
                if(this.argent<=0){
                    this.argent=this.argent+magasin.saucisse;
                    reponse=(alert(` Tu n as pas assez pour acheter cet article. Il te reste ${this.argent}. `));
                    
                    stack=3;
                }
                else{
                    reponse=(prompt(` Il te reste ${this.argent}. Veux tu acheter autre chose?`));
                }
            }
            else if(article=="riz"){
                this.argent=this.argent-magasin.riz;
                
                
                if(this.argent<=0){
                    this.argent=this.argent+magasin.riz;
                    reponse=(alert(` Tu n as pas assez pour acheter cet article. Il te reste ${this.argent}.`));
                    
                    stack=4;
                }
                else{
                    reponse=(prompt(` Il te reste ${this.argent}. Veux tu acheter autre chose?`));
                }
               
            }
            else if(article=="poisson"){
                this.argent=this.argent-magasin.poisson;
               
                if(this.argent<=0){
                    this.argent=this.argent+magasin.poisson;
                    reponse=(alert(` Tu n as pas assez pour acheter cet article. Il te reste ${this.argent}. `));
                    
                    stack=5;
                }
                else{
                    reponse=(prompt(` Il te reste ${this.argent}. Veux tu acheter autre chose?`));
                }
            }
    }
    
    /* if(stack==1){
        
        alert(`Il te reste ${this.argent}. pour les courses de ce soir`);
    }
    else if(stack==2){
        
        alert(`Il te reste ${this.argent}. pour les courses de ce soir`);
    }
    else if(stack==3){
        
        alert(`Il te reste ${this.argent}. pour les courses de ce soir`);
    }
    else if(stack==4){
        
        alert(`Il te reste ${this.argent}. pour les courses de ce soir`);
    }
    else if(stack==5){
        
        alert(`Il te reste ${this.argent}. pour les courses de ce soir`);
    }
    else{
        alert(`Il te reste ${this.argent}. pour les courses de ce soir`);
    } */
    
}

}
let magasin={
    chocolat:2,
    tartine:3,
    saucisse:4,
    riz:5,
    poisson:6,

    total:0,
    }
toi.argent=Number(prompt("Combien tu as dargent"));
toi.acheter();

/*# Exo bonus 2
- Stockez dans une variable "taille_nom_guerrier" la longueur du nom du guerrier
- Stockez dans une variable "troiseme_index_arme_guerrier" l'index 3 de l'arme du guerrier
- Stockez dans une variable "morceau_arme_mage" le nom de l'arme du mage à partir de l'index 2
- Stockez dans une variable "fusion_noms_silvie_nico" le nom du guerrier concaténé au nom du paysan */

/* # Exo bonus 3
- Créez une variable objet du nom de perso2 avec comme proprietées un nom et un age
- Créez une variable objet du nom de perso1 avec comme propriété un nom, un age et comme method "usurpation"
- Il doit pouvoir usurper l'identité du perso2 */


/* ### Créer une class Personnage avec comme propriétés : 
### age , nom , ville
### Faire 2 instances de cette class.*/
class personnage5{
    constructor(age,nom,ville){
        this.age=age;
        this.nom=nom;
        this.ville=ville;
        this.sePresenter=()=>{
            console.log(`Bonjour, je m'appelle ${this.nom}`)
        }
    }
    
}
const pol=new personnage5(50,"papa","Bruxelles");
const mimi=new personnage5(17,"mimi","Bruxelles");
console.log(pol.nom);
/*## EXO2
### Rajouter la methode 'sePresenter' à la class Personnage qui dira "Bonjour, je m'appelle [nom-de-la-personne] !" via un console.log
### Lancer cette méthode sur les deux instances de l'exo1 */
pol.sePresenter();
mimi.sePresenter();

/* ## EXO1
## Traduire le code suivant en class et en instances */

 
/*  let maison = {
  nom: "maison",
 contenu: [],
 }
let epicerie = {
   nom: "epicerie",
   contenu: [],
   ingredients: [],
 };
 let cuisine = {
   nom: "cuisine",
      contenu: [],
   ingredients: [],
 };

 ingredients
 let poivron = {
   nom: 'poivron',
   etat: 'entier',
   prix:  1 ,
  };
  let oignon = {
   nom: 'oignon',
   etat: 'entier',
   prix:  2 ,
  };
  let oeuf = {
   nom: 'oeuf',
   etat: 'entier',
   prix:  4 ,
  };
  let epice = {
   nom: 'epice',
   etat: 'moulu',
   prix:  3.25 ,
  };
  let paprika = {
   nom: 'paprika',
   etat: 'moulu',
   prix:  1.5 ,
  };
  let fromage = {
   nom: 'fromage',
   etat: 'coupé',
   prix:  1.6 ,
  };

 Personne
 let personnage = {
  nom: "Maxime",
  lieu: "néant",
  argent: 100,
  panier: [],
  se_deplacer(x){
  },

  payer(x){
  },
  couper(x,y){
  }
 } */

 class Lieux{
    constructor(nom,contenu,ingredients){
        this.nom=nom;
        this.contenu=contenu;
        this.ingredients=ingredients;
    }
 }
 let maison2=new Lieux("maison",[],);
 let epicerie=new Lieux("epicerie",[],[]);
 let cuisine=new Lieux("cuisine",[],[]);

 class Ingredients{
    constructor(nom,etat,prix){
        this.nom=nom;
        this.etat=etat;
        this.prix=prix;
    }
 }
 let poivron=new Ingredients("poivron","entier",1);
 let oignon=new Ingredients("oignon","entier",2);
 let oeuf=new Ingredients("oeuf","entier",4);
 let epice=new Ingredients("epice","moulu",3.25);
 let paprika=new Ingredients("paprika","moulu",1.5);
 let fromage=new Ingredients("fromage","coupe",1.6);

 class Personne{
    constructor(nom,lieux,argent,panier){
        this.nom=nom;
        this.lieux=lieux;
        this.argent=argent;
        this.panier=panier;
        this.se_deplacer=(x)=>{
        }
      
        this.payer=(x)=>{
        }
        this.couper=(x,y)=>{
        }
    }
    
}
let personnage=new Personne("Maxime","Neant",100,[]);

/* ## Exo3

### Créer une class Objet
### _Propriétés : nom, prix */
/* class Objet{
    constructor(nom,prix){
        this.nom=nom;
        this.prix=prix;
    }
} */

/* ### Créer deux instances d'objets avec un nom et un prix
### Créer une boite (tableau) et mettre les deux objets dedans. */
/* let Objet1=new Objet("crayon",1);
let Objet2=new Objet("gomme",2);
let Boite=[Objet1,Objet2]; */

/* ### Créer une class Personnage
### _Propriétés : nom(string), sac(tableau), argent(number)
### _Méthode : prendre(objet)
### _Méthode : acheter(vendeur, objet) */
/* class Personnage{
    constructor(nom,sac,argent){
        this.nom=nom;
        this.sac=sac;
        this.argent=argent;
        this.prendre=(objet)=>{
            this.sac.push(objet[0].nom);
            objet.shift();
    
        }
        this.acheter=(vendeur,objet)=>{
            this.sac.push(objet.nom);
            this.argent-=objet.prix;
            vendeur.sac.shift();
            vendeur.argent+=objet.prix;
        }
    }
    
}
 */
/* ### Créer deux instances de Personnage et faites leur chacun [prendre] un objet de la boite avec leur méthode.
### Ensuite faites acheter à l'un des deux, l'objet de l'autre. */
/* let popo=new Personnage("popo",[],5);
let pupu=new Personnage("pupu",[],5);
popo.prendre(Boite);
pupu.prendre(Boite);
console.log(popo.sac);
console.log(pupu.sac);
let temp=popo;
pupu.acheter(popo,Objet1);
popo.acheter(pupu,Objet2);
console.log(popo);
console.log(pupu); */

/* ## Exo3

### Créer une class Objet
### _Propriétés : nom, prix */

/* ### Créer deux instances d'objets avec un nom et un prix
### Créer une boite (tableau) et mettre les deux objets dedans. */

/* ### Créer une class Personnage
### _Propriétés : nom(string), sac(tableau), argent(number)
### _Méthode : prendre(objet)
### _Méthode : acheter(vendeur, objet) */

/* ### Créer deux instances de Personnage et faites leur chacun [prendre] un objet de la boite avec leur méthode.
### Ensuite faites acheter à l'un des deux, l'objet de l'autre. */







/* ## EXO4

### Créez une class [Lieu] avec une propriété nom(string) et personnes(array vide). */
class Lieu{
    constructor(nom,personnes){
        this.nom=nom;
        this.personnes=personnes;
    }

}
/* ### Puis créez des instances de [Lieu]: MolenGeek, Snack et Maison */
let Molengeek=new Lieu("Molengeek",[]);
let Snack=new Lieu("Snack",[]);
let Maison=new Lieu("Maison",[]);
/* ### Puis créez une class [Personne] avec une propriété nom(string), prenom(string), argent(number) et une methode seDeplacer(), cette methode permet de vous déplacer dans les differents lieux en faisant appel à la méthode embarquer() du bus. */
class Personne6{
    constructor(nom,prenom,argent){
        this.nom=nom;
        this.prenom=prenom;
        this.argent=argent;
        
        this.seDeplacer=(lieu1,lieu2)=>{
            lieu1.personnes.shift();
            
            
            /* if(lieu2==bus1 && this.argent>=2.80){
                bus1.embarquer(this,lieu2);
            } */
            if(lieu2==bus1){
                bus1.embarquer(this);
            } 
            else{
                lieu2.personnes.push(this.nom);
            }
            

            
        }
    }
}
/* ### Puis créez une instance de votre personnage. */
let Van=new Personne6("Tran","Van",50);
/* ### Créez une class [Bus] avec une propriéte personnes(array vide), une propriéte caisse(number) et une methode embarquer() (qui sera appelée dans la méthode seDeplacer() de la personne) qui va vérifier si vous possedez l'argent, si oui, il le déduit de votre argent, et le rajoute à sa caisse, et le personnage rentre dans le bus. Le bus cout 2.80. */
class Bus{
    constructor(personnes,caisse){
        this.personnes=personnes;
        this.caisse=caisse;
        
        this.embarquer=(personne)=>{
               
                if(personne.argent>=2.8){
                    personne.argent=personne.argent-2.8;
                    this.caisse=this.caisse+2.8;
                    this.personnes.push(personne);
                }
                    
               
                
               
            
        }
    }
}
/* ### Créez une instance de Bus.  */
let bus1=new Bus([],0);
/* ### 8h00 Vous êtes à la maison. */
Maison.personnes.push(Van.nom);
console.log(Maison);
/* ### 8h30 Vous prennez le bus vers MolenGeek. */

Van.seDeplacer(Maison,bus1);
console.log(bus1);
console.log(Maison);

/* ### 8h45 Vous êtes à MolenGeek. */
Van.seDeplacer(bus1,Molengeek);
console.log(bus1);
console.log(Molengeek);
/* ### 12h45 Vous sortez de MolenGeek, vous prenez le bus pour aller au snack. */
Van.seDeplacer(Molengeek,bus1);
Van.seDeplacer(bus1,Snack);
/* ### 13h30 Vous sortez du snack, et vous rentrer pied à MolenGeek pour digérer. */

Van.seDeplacer(Snack,Molengeek);
/* ### 17h10 Vous sortez de MolenGeek, vous prenez le bus pour rentrer chez vous. */
Van.seDeplacer(Molengeek,bus1);
Van.seDeplacer(bus1,Maison);
console.log(Maison);
/* ### Faites un console.log() de votre argent, ainsi que l'argent du Bus */
 console.log(Van.argent); 
 console.log(bus1.caisse); 
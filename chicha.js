const grosSpans = document.querySelectorAll('h1 span');
const titreSpans = document.querySelectorAll('h2 span');
const petitSpans = document.querySelectorAll('h3 span');
const btns = document.querySelectorAll('.btn-first');
const logo = document.querySelector('.logo');
const medias = document.querySelectorAll('.bulle');
const logSociaux2 = document.querySelectorAll('.log');


window.addEventListener('load', () => {

    const TL = gsap.timeline({paused: true});

    TL
    .staggerFrom(grosSpans, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.6)
    .staggerFrom(titreSpans, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.3)
    .staggerFrom(petitSpans, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.3)
    .staggerFrom(btns, 1, {opacity: 0, ease: "power2.out"}, 0.3, '-=1')
    .from(logo, 0.4, {transform: "scale(0)", ease: "power2.out"}, '-=2')
    .staggerFrom(logSociaux2, 1, {top: -200, opacity: 0, ease: "power2.out"}, 0.6)
    .staggerFrom(medias, 1, {right: -200, ease: "power2.out"}, 0.3, '-=1');
    
    
 TL.play();
})
const boutons = document.querySelector('Reservation');

Reservation.addEventListener('click',MessageB1);

function MessageB1() {
    var nomResa = prompt("A quel nom desirez-vous reserver ?")
    var telResa = prompt("Quel est votre numero de mobile ?")
    var repHeure = prompt("Heure d'arrivee prevue ?" +
    "\n(horaire d' ouverture : 14H/2H)")
    while(repHeure.length <= 1 || repHeure.length > 4) {
        prompt("Entrez une horaire valide svp");
        break;
    }
    var repPers = prompt("Nombre de personnes ?")
    var repGout = prompt("Quels gouts desirez-vous ?")
    var repBoisson = prompt("Quels boissons desirez-vous ?")
    confirm("Confirmez-vous la reservation ?" +
    "\n" +
    "\nNom: " + nomResa +
    "\nNumero de tel: " + telResa +
    "\nHeure d'arrivée: " + repHeure + " H" +
    "\nNombre de personne: " + repPers +
    "\nVous avez choisi le gout: " + repGout +
    "\nVous avez choisi comme boisson: " + repBoisson);
    
}
const contact = document.querySelector('Contact');

Contact.addEventListener('click',MessageB2);

function MessageB2() {
    var name = prompt("Entrez votre nom ")
    var email = prompt("Entrez votre email ") 
    var telephone = prompt("Entrez votre numero de telephone ")
    var message = prompt("Entrez votre message ")
    confirm("Confirmez-vous les informations suivantes? " +
        "\n" +
        "\nNom : " + name +
        "\nEmail : " + email +
        "\nTelephone : " + telephone +
        "\nMessage : " + message + 
        "\n" + 
        "\n" +
        "\n" +
        "\nCliquez sur ok pour envoyer");
}

const snap = document.querySelector("#snap");

snap.addEventListener('click',Messagesnap);
    
function Messagesnap() {
    alert("Snapchat: calypso13001");

}
const facebook = document.querySelector("#facebook");
    
facebook.addEventListener('click',Messagefacebook);
        
function Messagefacebook() {
    alert("Facebook: Shisha le Calypso Lounge");
}
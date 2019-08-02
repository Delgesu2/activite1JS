/* 
Activité 1
*/

// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
var listeLiens = [
    {
        titre: "So Foot",
        url: "http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://Wikipedia.org",
        auteur: "annie.zette"
    }
];

// TODO : compléter ce fichier pour ajouter les liens à la page web

for (var lien of listeLiens) {

    const contenu = document.getElementById('contenu');

    // Création des éléments HTML
    var title = document.createElement("span");
    var link = document.createElement("span");
    var author = document.createElement("p");
    var bloc = document.createElement("div");

    // Creation du text du titre
    textLien = document.createTextNode(lien.titre);

    // Création balise <a> + ajout du href
    var a = document.createElement("a");
    a.setAttribute("href", lien.url);
 
    // Rajout de la classe CSS .lien  
    bloc.classList.add("lien");

    // Tout le style du titre   
    title.style.color = "#428bca";
    title.style.fontSize = "1em";
    title.style.fontWeight = "bold"; 
   
    // Contenu du lien et de l'auteur
    link.textContent = lien.url;
    author.textContent = "Ajouté par " + lien.auteur; 

    // On insert le lien
    var lien = title.insertAdjacentElement('afterbegin', a);

    // Style du lien
    lien.style.textDecoration = "none";
    lien.style.marginRight = "5px";
       
    // On met le texte du titre dans le lien
    lien.appendChild(textLien);      
  
    // On met tous les éléments dans la <div> 'bloc'
    bloc.appendChild(title);
    bloc.appendChild(link);
    bloc.appendChild(author);
   
    // Et les 'bloc' s'empilent dans chaque 'contenu' de la boucle for
    contenu.appendChild(bloc);

}

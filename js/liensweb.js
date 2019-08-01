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

    var contenu = document.getElementById('contenu');
    var title = document.createElement("span");
    var link = document.createElement("span");
    var author = document.createElement("p");
 
    // Rajout de la classe CSS .lien  
    contenu.classList.add("lien");

    // Tout le style du titre
    title.id = 'titre';    
    title.style.color = "#428bca";
    title.style.fontSize = "1em";
    title.style.fontWeight = "bold"; 

    // Contenu du titre
    title.textContent = lien.titre;
   
    // Contenu du lien et de l'auteur
    link.textContent = lien.url;
    author.textContent = lien.auteur;       
      
      //var blocTitre = getComputedStyle(document.getElementById("titre"));
      //blocTitre.insertAdjacentHTML("beforebegin", "<a href='lien.url'>");
    contenu.appendChild(title);
      //blocTitre.insertAdjacentHTML("afterend", "</a");
    

    contenu.appendChild(link);
    contenu.appendChild(author);

}

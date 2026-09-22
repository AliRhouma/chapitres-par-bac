# Chapitres par Bac — catalogue Wael Academy

Catalogue hors-ligne des supports de cours : une page HTML autonome qui
recense les vidéos et documents, et permet de composer des chapitres,
leçons et exercices par bac et par matière.

## Fichiers

| Fichier | Rôle |
|---|---|
| `bac-chapitres.html` | l'application, autonome — ouvrir dans un navigateur |
| `chapitres-data.js` | vos chapitres et leçons (sauvegarde, rechargée à l'ouverture) |
| `media.json` | index des 5 965 fichiers affichés dans la modale |
| `dropbox-data.js` | arborescence du Dropbox « Année scolaire 2026-2027 » |
| `gdrive-data.js` | arborescence du Drive « Les vidéos enregistrés » |
| `drouss-data.js` | programme « الدروس » enrichi (titres et adresses de lecture) |
| `ARBRE-modale-bibliotheque.txt` | arbre lisible de la bibliothèque |
| `MODALE-selection-fichiers.md` | documentation technique de la modale |
| `LISEZ-MOI.txt` | mode d'emploi d'origine |
| `suivi_dropbox.py`, `suivi-dropbox.bat` | petit viseur de progression des scans |

## Sources indexées

| Source | Fichiers | Vidéos | Documents |
|---|---:|---:|---:|
| Bunny (20 professeurs) | 873 | 552 | 321 |
| Dropbox — Année scolaire 2026-2027 | 1 347 | 705 | 642 |
| Google Drive — Les vidéos enregistrés | 3 745 | 1 774 | 1 857 |
| **Total** | **5 965** | | |

## Utilisation

Ouvrir `bac-chapitres.html` dans Chrome, Edge ou Firefox. Aucune
installation, aucune connexion requise pour la navigation.

Les chapitres que vous créez sont stockés dans le `localStorage` du
navigateur. Le bouton **Exporter** produit `chapitres-data.js` : replacez-le
à côté du HTML pour retrouver votre travail sur un autre poste.

## Dépôt privé — à conserver ainsi

`dropbox-data.js` contient les adresses de partage Dropbox, qui donnent
accès au contenu sans authentification. Publier ce dépôt reviendrait à
ouvrir l'accès aux 79 Go de la médiathèque.

## Historique

La page d'origine a été détruite par une corruption du support USB
(entrelacement de secteurs) : le tableau des médias s'arrêtait en plein
milieu et quinze définitions JavaScript avaient disparu. Tout ce qui avait
survécu — CSS, balisage, `BACS`, export/import, thème, filtre et la
majeure partie de `render()` — a été conservé ; seul le bloc détruit a été
réécrit, puis la bibliothèque régénérée depuis les sources réelles.

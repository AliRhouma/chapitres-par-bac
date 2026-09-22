# Modale « Nouvelle leçon » — sélecteur de fichiers

Référence de structure du `<dialog id="dlg">` de `bac-chapitres.html`.
Couvre le balisage, les classes CSS, l'état JavaScript et le cycle de vie.

Fichier source : `C:\Users\USER\Documents\Chapitres par Bac\bac-chapitres.html`
La modale commence ligne 170. Le JavaScript qui la pilote est dans le `<script>`
qui suit `const MEDIA = […]`.

---

## 1. Vue d'ensemble

Une seule modale sert quatre cas : nouvelle leçon, nouvel exercice, modification
d'une leçon, modification d'un exercice. Le cas est choisi par l'objet `ctx`
passé à `openItem(ctx)` — le balisage ne change jamais.

```
openItem(ctx)  ──►  remplit l'en-tête, le titre, réinitialise les filtres
                    DSEL ← refs déjà associées
                    libRender()
                    dlg.showModal()

[Enregistrer]  ──►  écrit le titre + Array.from(DSEL) dans ctx.item
                    ou pousse un nouvel item dans ctx.chapter.items
                    save() ; dlg.close() ; render()
```

---

## 2. Balisage

```html
<dialog id="dlg">
 <form method="dialog" class="dlg" id="dlgform">

  <div class="dhead">
    <h2 id="dtitle">Nouvelle leçon</h2>          <!-- titre réécrit par openItem -->
    <div class="crumb" id="dcrumb"></div>        <!-- bac › matière › chapitre -->
  </div>

  <div class="dbody">
    <label class="fl" for="ititle">Titre</label>
    <input type="text" id="ititle" dir="auto"
           placeholder="Titre de la leçon…" autocomplete="off">

    <div class="filters">
      <button class="chip" type="button" data-k="all"      aria-pressed="true">Tout</button>
      <button class="chip" type="button" data-k="video"    aria-pressed="false">Vidéos</button>
      <button class="chip" type="button" data-k="document" aria-pressed="false">Documents</button>
      <button class="chip" type="button" id="onlysel"      aria-pressed="false">Sélection</button>
      <button class="chip" type="button" id="matched"      aria-pressed="false" hidden></button>
      <div style="flex:1 1 150px">
        <input type="search" id="fq" placeholder="Chercher un fichier…" autocomplete="off">
      </div>
    </div>

    <div class="lib" id="lib"></div>             <!-- rempli par libRender() -->
  </div>

  <div class="dfoot">
    <span class="info" id="dinfo"></span>        <!-- « n fichiers sélectionnés » -->
    <button type="button" id="dcancel">Annuler</button>
    <button type="button" class="primary" id="dsave">Enregistrer</button>
  </div>

 </form>
</dialog>
```

### Identifiants

| id | rôle |
|---|---|
| `dlg` | l'élément `<dialog>` ; ouvert par `showModal()` |
| `dlgform` | `method="dialog"` — la touche Échap ferme sans enregistrer |
| `dtitle` | « Nouvelle leçon » / « Modifier exercice » … |
| `dcrumb` | fil d'ariane, fourni par `ctx.crumb` |
| `ititle` | titre de la leçon ou de l'exercice |
| `fq` | recherche plein texte dans la bibliothèque |
| `onlysel` | bascule « n'afficher que la sélection » |
| `matched` | compteur de résultats ; `hidden` tant que `fq` est vide |
| `lib` | conteneur de l'arbre de fichiers |
| `dinfo` | compte de la sélection courante |
| `dcancel` / `dsave` | fermer sans / avec enregistrement |

Les trois boutons `data-k` sont mutuellement exclusifs. `onlysel` est
indépendant et se combine avec eux.

---

## 3. Arbre rendu dans `#lib`

`libRender()` reconstruit entièrement le contenu de `#lib` à chaque appel.
Deux niveaux de `<details>`, puis une ligne par fichier :

```html
<div class="lib" id="lib">

  <details class="grp">                      <!-- 1 groupe = 1 prof -->
    <summary>
      <span class="caret">▶</span>
      <span dir="auto">Algo&Prog__WA</span>
      <span class="count">140</span>
    </summary>

    <details class="sgrp">                   <!-- 1 sous-groupe = 1 dossier -->
      <summary>
        <span class="caret">▶</span>
        <span dir="auto">Semestre 1/01-Les_Matrices/01-Définition</span>
        <span class="count">1</span>
      </summary>

      <div class="files">
        <label class="f">                    <!-- 1 ligne = 1 fichier -->
          <input type="checkbox">
          <span class="ic video">VID</span>
          <span class="fn" dir="auto">1-Définition</span>
          <span class="fc">HRISSEN-ALGO-002</span>
        </label>
      </div>

    </details>
  </details>

</div>
```

Points à respecter :

- la ligne est un `<label>`, donc cliquer le texte coche la case ;
- `.ic` vaut `VID` ou `DOC` selon `f.kind` (`video` / `document`) ;
- `.fn` affiche `titleOf(id)` — le titre renommé s'il existe, sinon celui du fichier ;
- `.fc` affiche le **code de référence**, jamais modifiable ;
- si rien ne correspond : un seul `<p class="none">Aucun fichier ne correspond.</p>` ;
- `grp` et `sgrp` sont ouverts d'office quand une recherche est active ou que
  « Sélection » est enclenché, fermés sinon.

---

## 4. CSS

Tel quel dans le `<style>` du fichier :

```css
dialog{border:0;border-radius:12px;padding:0;background:var(--card);color:var(--ink);
  max-width:760px;width:calc(100vw - 28px);max-height:calc(100vh - 56px)}
dialog::backdrop{background:rgba(0,0,0,.45)}
.dlg{display:flex;flex-direction:column;max-height:calc(100vh - 56px)}
.dhead{padding:15px 18px 12px;border-bottom:1px solid var(--line)}
.dhead h2{margin:0 0 3px;font-size:17px}
.dhead .crumb{color:var(--muted);font-size:12.5px;overflow-wrap:anywhere}
.dbody{padding:14px 18px;overflow:auto;flex:1}
.dfoot{padding:12px 18px;border-top:1px solid var(--line);display:flex;gap:9px;
  align-items:center;flex-wrap:wrap}
.dfoot .info{flex:1;font-size:13px;color:var(--muted);min-width:130px}
label.fl{display:block;font-size:12.5px;color:var(--muted);margin:0 0 5px}

.filters{display:flex;gap:7px;flex-wrap:wrap;align-items:center;margin:14px 0 10px}
.chip{font-size:13px;padding:5px 11px;border-radius:99px;border:1px solid var(--line);
  background:var(--card);color:var(--muted);cursor:pointer}
.chip[aria-pressed="true"]{background:var(--accent-soft);border-color:var(--accent);
  color:var(--accent)}

.lib{border:1px solid var(--line);border-radius:9px;overflow:hidden}
.grp>summary{list-style:none;cursor:pointer;padding:9px 12px;background:var(--bg);
  display:flex;align-items:center;gap:9px;font-size:13.5px;font-weight:600;
  user-select:none;border-bottom:1px solid var(--line)}
.sgrp>summary{list-style:none;cursor:pointer;padding:7px 12px 7px 26px;display:flex;
  align-items:center;gap:8px;font-size:13px;color:var(--muted);user-select:none}
.sgrp>summary:hover{background:var(--accent-soft)}
.files{padding:2px 10px 9px 26px}
.f{display:flex;align-items:center;gap:9px;padding:5px 7px;border-radius:6px;cursor:pointer}
.f:hover{background:var(--accent-soft)}
.f input{margin:0;flex:none;width:15px;height:15px;accent-color:var(--accent)}
.f .fn{flex:1;min-width:0;overflow-wrap:anywhere;font-size:13.5px}
.f .fc{flex:none;font-size:11px;color:var(--muted);font-variant-numeric:tabular-nums}
.none{padding:20px;text-align:center;color:var(--muted);font-size:13.5px}

.ic{flex:none;font-size:10.5px;padding:1px 7px;border-radius:99px;font-weight:600}
.ic.video{background:var(--vid-soft);color:var(--vid)}
.ic.document{background:var(--doc-soft);color:var(--doc)}
```

L'état enfoncé d'une puce passe **uniquement** par `aria-pressed="true"` :
pas de classe `active`. Changer l'attribut suffit à changer le style.

---

## 5. État JavaScript

Quatre variables au niveau module, remises à plat par `openItem()` :

| variable | type | rôle |
|---|---|---|
| `DCTX` | objet ou `null` | contexte d'édition en cours |
| `DSEL` | `Set<string>` | codes de référence cochés |
| `DKIND` | `"all"` \| `"video"` \| `"document"` | filtre de type |
| `DONLY` | booléen | n'afficher que la sélection |

`DCTX` reçoit :

```js
{
  type:    "lesson" | "exercice",
  chapter: <objet chapitre>,        // là où pousser un nouvel item
  item:    <objet item> | null,     // non nul = modification
  subject: "Maths",
  crumb:   "Bac — Maths  ›  Physique  ›  Le condensateur"
}
```

### Fonctions

| fonction | rôle |
|---|---|
| `openItem(ctx)` | prépare et ouvre la modale |
| `libRender()` | reconstruit `#lib` selon `DKIND`, `DONLY`, `#fq` |
| `dinfo()` | met à jour le compteur du pied de page |
| `titleOf(id)` | titre affiché (renommé si présent) |
| `FILES[id]` | fiche du fichier : `{id,title,kind,ext,url,dur,playable,teacher,folder}` |

### Filtrage dans `libRender()`

Un fichier est affiché si les trois conditions sont vraies :

1. `DKIND === "all"` ou `f.kind === DKIND`
2. `DONLY` est faux, ou `DSEL.has(f.id)`
3. `#fq` est vide, ou la requête apparaît dans
   `titre + code + nom du dossier + nom du groupe` (insensible à la casse)

Un groupe ou sous-groupe sans fichier retenu n'est pas rendu du tout.

---

## 6. Événements

```js
.chip[data-k]   → DKIND = data-k ; aria-pressed exclusif ; libRender()
#onlysel        → DONLY = !DONLY ; aria-pressed ; libRender()
#fq  (oninput)  → libRender()
case à cocher   → DSEL.add / DSEL.delete ; dinfo()      (pas de re-rendu)
#dcancel        → dlg.close()                            (aucune écriture)
#dsave          → validation + écriture + save() + close() + render()
dlg "close"     → DCTX = null
```

Cocher une case ne déclenche pas `libRender()` — seulement `dinfo()`.
C'est délibéré : un re-rendu refermerait les `<details>` et ferait sauter le
défilement. Le seul effet visible attendu est le compteur du pied.

---

## 7. Enregistrement

```js
const title = document.getElementById("ititle").value.trim();
if (!title){ document.getElementById("ititle").focus(); return; }   // titre obligatoire
const refs = Array.from(DSEL);

if (DCTX.item){                    // modification sur place
  DCTX.item.title = title;
  DCTX.item.type  = DCTX.type;
  DCTX.item.refs  = refs;
} else {                           // création
  DCTX.chapter.items.push({ id: uid(), type: DCTX.type, title, refs });
}
save(); dlg.close(); render();
```

Un item enregistré a la forme :

```json
{ "id": "a1b2c3d4", "type": "lesson", "title": "Étude expérimentale",
  "refs": ["MAHDI-PHYS-026", "MAHDI-PHYS-023"] }
```

Une sélection vide est autorisée : l'arbre affichera
« Aucun fichier associé. » pour cet item.

---

## 8. Source des données

`libRender()` lit `MEDIA`, pas `FILES` — il lui faut la hiérarchie.

```js
MEDIA = [
  { name: "Algo&Prog__WA",                       // groupe = prof / collection
    folders: [
      { name: "Semestre 1/01-Les_Matrices/01-Définition",   // chemin disque
        files: [
          { id:"HRISSEN-ALGO-002", title:"1-Définition",
            kind:"video", ext:".mp4",
            url:"https://vz-2a40c9b3-ad6.b-cdn.net/<guid>/play_720p.mp4",
            dur: 312 }
        ] } ] } ]
```

`FILES` en est dérivé à plat, indexé par code de référence. Quand un même code
apparaît deux fois (ancienne et nouvelle collection), **l'exemplaire qui possède
une `url` gagne** — sinon un doublon vide masquerait le bon fichier.

Totaux actuels : 20 groupes, 856 fichiers (535 vidéos, 321 documents).

---

## 9. Points à savoir avant de modifier

- **Le code de référence est la clé.** Renommer n'écrit que `TITLES[id]` ;
  `f.title` et `f.id` ne bougent pas. `.fc` doit donc rester non modifiable.
- **`#matched` est un bouton, pas un badge.** Il est réutilisé comme compteur et
  reste `hidden` quand `#fq` est vide. Il ne réagit pas au clic.
- **Numéros de dossier sur deux chiffres.** Les dossiers sont préfixés `01-`,
  `02-`, … `10-`. Sans le zéro, le tri alphabétique donne 1, 10, 2.
- **Les vidéos exigent un referrer.** La bibliothèque a `BlockNoneReferrer=true` :
  une `url` ouverte depuis la page fonctionne, collée seule dans la barre
  d'adresse elle renvoie 403. Les PDF n'ont pas cette contrainte.
- **`playable:false`** signale un fichier absent de Bunny. Aujourd'hui un seul
  cas : `MAHDI-PHYS-080`.
- `libRender()` reconstruit tout : évitez de l'appeler dans une boucle serrée.

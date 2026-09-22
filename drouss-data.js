/* « الدروس » — enrichi le 19/09/2026 08:11:47

   « files » résout chaque code : titre Bunny, type, URL directe, taille, durée.
   Les tableaux « refs » sont INCHANGÉS — utiliser DROUSS_DATA.files[ref].

     files[ref].url        → mp4 168 vidéos / pdf 125 (URL vérifiées en direct)
     files[ref].hls        → playlist.m3u8 (vidéo)
     files[ref].thumbnail  → vignette jpg (vidéo)
     files[ref].playable   → false si le fichier manque réellement dans Bunny

   294 codes : 168 vidéos lisibles, 125 PDF, 1 indisponible.
   ATTENTION : « npm run drouss:data » réécrira ce fichier et supprimera « files ». */
window.DROUSS_DATA = {
 "stamp": "2026-09-19T05:52:16.838Z",
 "filesStamp": "2026-09-19T07:11:47Z",
 "library": {
  "videoLibraryId": 512369,
  "videoCdn": "https://vz-2a40c9b3-ad6.b-cdn.net",
  "filesCdn": "https://wael-academy-files.b-cdn.net",
  "videoNeedsReferrer": true,
  "notes": [
   "VIDEO : <video src=files[ref].url> ou HLS files[ref].hls. La librairie a BlockNoneReferrer=true :",
   "        une page web envoie le Referer toute seule, mais l'url collee seule dans la barre d'adresse renvoie 403.",
   "PDF   : files[ref].url est une url publique directe, sans referrer.",
   "files[ref].playable === false => le fichier n'existe pas reellement dans Bunny."
  ]
 },
 "files": {
  "AMMAR-MECA-001": {
   "type": "video",
   "title": "COTATION FONCTIONELLE  T1 / 01 - [AMMAR-MECA-001] APPLICATION 1",
   "guid": "646083bd-b772-48b7-aaa1-57ff36513d42",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/646083bd-b772-48b7-aaa1-57ff36513d42/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/646083bd-b772-48b7-aaa1-57ff36513d42/thumbnail.jpg",
   "durationSec": 443,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 217381753,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/646083bd-b772-48b7-aaa1-57ff36513d42/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/646083bd-b772-48b7-aaa1-57ff36513d42/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/646083bd-b772-48b7-aaa1-57ff36513d42",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "AMMAR-MECA-002": {
   "type": "video",
   "title": "COTATION FONCTIONELLE  T1 / 02 - [AMMAR-MECA-002] APPLICATION 2",
   "guid": "88939d75-4b72-48f4-9c4a-f1d6490d4045",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/88939d75-4b72-48f4-9c4a-f1d6490d4045/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/88939d75-4b72-48f4-9c4a-f1d6490d4045/thumbnail.jpg",
   "durationSec": 317,
   "resolutions": "480p,720p,240p,360p",
   "sizeBytes": 175386773,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/88939d75-4b72-48f4-9c4a-f1d6490d4045/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/88939d75-4b72-48f4-9c4a-f1d6490d4045/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/88939d75-4b72-48f4-9c4a-f1d6490d4045",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "AMMAR-MECA-003": {
   "type": "video",
   "title": "COTATION FONCTIONELLE  T1 / 03 - [AMMAR-MECA-003] APPLICATION 3",
   "guid": "5bbe89fa-51bb-4ab7-b8d5-5132da680c11",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/5bbe89fa-51bb-4ab7-b8d5-5132da680c11/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/5bbe89fa-51bb-4ab7-b8d5-5132da680c11/thumbnail.jpg",
   "durationSec": 392,
   "resolutions": "480p,720p,240p,360p",
   "sizeBytes": 218333494,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/5bbe89fa-51bb-4ab7-b8d5-5132da680c11/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/5bbe89fa-51bb-4ab7-b8d5-5132da680c11/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/5bbe89fa-51bb-4ab7-b8d5-5132da680c11",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "AMMAR-MECA-004": {
   "type": "video",
   "title": "COTATION FONCTIONELLE  T1 / 04 - [AMMAR-MECA-004] APPLICATION 4",
   "guid": "36f42b37-e511-433e-8577-a993d5f05267",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/36f42b37-e511-433e-8577-a993d5f05267/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/36f42b37-e511-433e-8577-a993d5f05267/thumbnail.jpg",
   "durationSec": 280,
   "resolutions": "480p,720p,240p,360p",
   "sizeBytes": 139440257,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/36f42b37-e511-433e-8577-a993d5f05267/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/36f42b37-e511-433e-8577-a993d5f05267/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/36f42b37-e511-433e-8577-a993d5f05267",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "AMMAR-MECA-005": {
   "type": "video",
   "title": "COTATION FONCTIONELLE  T1 / 05 - [AMMAR-MECA-005] APPLICATION 5",
   "guid": "652b9160-0e35-42fc-8f0b-11376ed9d66b",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/652b9160-0e35-42fc-8f0b-11376ed9d66b/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/652b9160-0e35-42fc-8f0b-11376ed9d66b/thumbnail.jpg",
   "durationSec": 374,
   "resolutions": "480p,720p,240p,360p",
   "sizeBytes": 235299615,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/652b9160-0e35-42fc-8f0b-11376ed9d66b/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/652b9160-0e35-42fc-8f0b-11376ed9d66b/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/652b9160-0e35-42fc-8f0b-11376ed9d66b",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "AMMAR-MECA-006": {
   "type": "video",
   "title": "COTATION FONCTIONELLE  T1 / 06 - [AMMAR-MECA-006] APPLICATION 6",
   "guid": "a350171d-9df2-46a8-9faf-34eef64d89be",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/a350171d-9df2-46a8-9faf-34eef64d89be/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/a350171d-9df2-46a8-9faf-34eef64d89be/thumbnail.jpg",
   "durationSec": 464,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 219947885,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/a350171d-9df2-46a8-9faf-34eef64d89be/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/a350171d-9df2-46a8-9faf-34eef64d89be/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/a350171d-9df2-46a8-9faf-34eef64d89be",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "AMMAR-MECA-007": {
   "type": "pdf",
   "title": "[AMMAR-MECA-007] CORRECTION COTATION FONCTIONNELLE-BAC 2027.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/VIDEOS MECANIQUE AMMAR/[AMMAR-MECA-007] CORRECTION COTATION FONCTIONNELLE-BAC 2027.pdf",
   "ext": "pdf",
   "sizeBytes": 2442376,
   "url": "https://wael-academy-files.b-cdn.net/BAC/VIDEOS%20MECANIQUE%20AMMAR/%5BAMMAR-MECA-007%5D%20CORRECTION%20COTATION%20FONCTIONNELLE-BAC%202027.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "AMMAR-MECA-008": {
   "type": "pdf",
   "title": "[AMMAR-MECA-008] COTATION FONCTIONNELLE  BAC 2027.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/VIDEOS MECANIQUE AMMAR/[AMMAR-MECA-008] COTATION FONCTIONNELLE  BAC 2027.pdf",
   "ext": "pdf",
   "sizeBytes": 1318704,
   "url": "https://wael-academy-files.b-cdn.net/BAC/VIDEOS%20MECANIQUE%20AMMAR/%5BAMMAR-MECA-008%5D%20COTATION%20FONCTIONNELLE%20%20BAC%202027.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "AMMAR-MECA-009": {
   "type": "pdf",
   "title": "[AMMAR-MECA-009] Application 1 - Correction.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/VIDEOS MECANIQUE AMMAR/[AMMAR-MECA-009] Application 1 - Correction.pdf",
   "ext": "pdf",
   "sizeBytes": 543875,
   "url": "https://wael-academy-files.b-cdn.net/BAC/VIDEOS%20MECANIQUE%20AMMAR/%5BAMMAR-MECA-009%5D%20Application%201%20-%20Correction.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "AMMAR-MECA-010": {
   "type": "video",
   "title": "DESSIN DE DEFINITION T1 / 01 - [AMMAR-MECA-010] Application 1",
   "guid": "eb0ef2bf-3dc3-47e7-8c03-b93b08760da5",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/eb0ef2bf-3dc3-47e7-8c03-b93b08760da5/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/eb0ef2bf-3dc3-47e7-8c03-b93b08760da5/thumbnail.jpg",
   "durationSec": 502,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 197373043,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/eb0ef2bf-3dc3-47e7-8c03-b93b08760da5/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/eb0ef2bf-3dc3-47e7-8c03-b93b08760da5/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/eb0ef2bf-3dc3-47e7-8c03-b93b08760da5",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "AMMAR-MECA-011": {
   "type": "pdf",
   "title": "[AMMAR-MECA-011] Application 1.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/VIDEOS MECANIQUE AMMAR/[AMMAR-MECA-011] Application 1.pdf",
   "ext": "pdf",
   "sizeBytes": 461447,
   "url": "https://wael-academy-files.b-cdn.net/BAC/VIDEOS%20MECANIQUE%20AMMAR/%5BAMMAR-MECA-011%5D%20Application%201.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "AMMAR-MECA-012": {
   "type": "pdf",
   "title": "[AMMAR-MECA-012] Application 2 - Correction.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/VIDEOS MECANIQUE AMMAR/[AMMAR-MECA-012] Application 2 - Correction.pdf",
   "ext": "pdf",
   "sizeBytes": 673330,
   "url": "https://wael-academy-files.b-cdn.net/BAC/VIDEOS%20MECANIQUE%20AMMAR/%5BAMMAR-MECA-012%5D%20Application%202%20-%20Correction.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "AMMAR-MECA-013": {
   "type": "video",
   "title": "DESSIN DE DEFINITION T1 / 02 - [AMMAR-MECA-013] Application 2",
   "guid": "5750fe99-e460-4409-9248-be802291055a",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/5750fe99-e460-4409-9248-be802291055a/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/5750fe99-e460-4409-9248-be802291055a/thumbnail.jpg",
   "durationSec": 570,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 221755686,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/5750fe99-e460-4409-9248-be802291055a/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/5750fe99-e460-4409-9248-be802291055a/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/5750fe99-e460-4409-9248-be802291055a",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "AMMAR-MECA-014": {
   "type": "pdf",
   "title": "[AMMAR-MECA-014] Application 2.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/VIDEOS MECANIQUE AMMAR/[AMMAR-MECA-014] Application 2.pdf",
   "ext": "pdf",
   "sizeBytes": 543977,
   "url": "https://wael-academy-files.b-cdn.net/BAC/VIDEOS%20MECANIQUE%20AMMAR/%5BAMMAR-MECA-014%5D%20Application%202.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "AMMAR-MECA-015": {
   "type": "pdf",
   "title": "[AMMAR-MECA-015] Application 3 - Correction.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/VIDEOS MECANIQUE AMMAR/[AMMAR-MECA-015] Application 3 - Correction.pdf",
   "ext": "pdf",
   "sizeBytes": 551116,
   "url": "https://wael-academy-files.b-cdn.net/BAC/VIDEOS%20MECANIQUE%20AMMAR/%5BAMMAR-MECA-015%5D%20Application%203%20-%20Correction.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "AMMAR-MECA-016": {
   "type": "video",
   "title": "DESSIN DE DEFINITION T1 / 03 - [AMMAR-MECA-016] Application 3",
   "guid": "f9abc20a-5dec-4495-810c-b573c83b8551",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/f9abc20a-5dec-4495-810c-b573c83b8551/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/f9abc20a-5dec-4495-810c-b573c83b8551/thumbnail.jpg",
   "durationSec": 545,
   "resolutions": "480p,720p,240p,360p",
   "sizeBytes": 209904087,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/f9abc20a-5dec-4495-810c-b573c83b8551/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/f9abc20a-5dec-4495-810c-b573c83b8551/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/f9abc20a-5dec-4495-810c-b573c83b8551",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "AMMAR-MECA-017": {
   "type": "pdf",
   "title": "[AMMAR-MECA-017] Application 3.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/VIDEOS MECANIQUE AMMAR/[AMMAR-MECA-017] Application 3.pdf",
   "ext": "pdf",
   "sizeBytes": 461443,
   "url": "https://wael-academy-files.b-cdn.net/BAC/VIDEOS%20MECANIQUE%20AMMAR/%5BAMMAR-MECA-017%5D%20Application%203.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "AMMAR-MECA-018": {
   "type": "pdf",
   "title": "[AMMAR-MECA-018] Application 4 - Correction.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/VIDEOS MECANIQUE AMMAR/[AMMAR-MECA-018] Application 4 - Correction.pdf",
   "ext": "pdf",
   "sizeBytes": 672677,
   "url": "https://wael-academy-files.b-cdn.net/BAC/VIDEOS%20MECANIQUE%20AMMAR/%5BAMMAR-MECA-018%5D%20Application%204%20-%20Correction.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "AMMAR-MECA-019": {
   "type": "video",
   "title": "DESSIN DE DEFINITION T1 / 04 - [AMMAR-MECA-019] Application 4",
   "guid": "a1dee843-b0de-4e0f-9c60-ee68d83747c9",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/a1dee843-b0de-4e0f-9c60-ee68d83747c9/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/a1dee843-b0de-4e0f-9c60-ee68d83747c9/thumbnail.jpg",
   "durationSec": 319,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 125700849,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/a1dee843-b0de-4e0f-9c60-ee68d83747c9/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/a1dee843-b0de-4e0f-9c60-ee68d83747c9/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/a1dee843-b0de-4e0f-9c60-ee68d83747c9",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "AMMAR-MECA-020": {
   "type": "pdf",
   "title": "[AMMAR-MECA-020] Application 4.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/VIDEOS MECANIQUE AMMAR/[AMMAR-MECA-020] Application 4.pdf",
   "ext": "pdf",
   "sizeBytes": 610568,
   "url": "https://wael-academy-files.b-cdn.net/BAC/VIDEOS%20MECANIQUE%20AMMAR/%5BAMMAR-MECA-020%5D%20Application%204.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "AMMAR-MECA-043": {
   "type": "pdf",
   "title": "[AMMAR-MECA-043] APPLICATION  1 - Correction.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/VIDEOS MECANIQUE AMMAR/[AMMAR-MECA-043] APPLICATION  1 - Correction.pdf",
   "ext": "pdf",
   "sizeBytes": 683166,
   "url": "https://wael-academy-files.b-cdn.net/BAC/VIDEOS%20MECANIQUE%20AMMAR/%5BAMMAR-MECA-043%5D%20APPLICATION%20%201%20-%20Correction.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "AMMAR-MECA-044": {
   "type": "pdf",
   "title": "[AMMAR-MECA-044] APPLICATION  1.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/VIDEOS MECANIQUE AMMAR/[AMMAR-MECA-044] APPLICATION  1.pdf",
   "ext": "pdf",
   "sizeBytes": 598538,
   "url": "https://wael-academy-files.b-cdn.net/BAC/VIDEOS%20MECANIQUE%20AMMAR/%5BAMMAR-MECA-044%5D%20APPLICATION%20%201.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "AMMAR-MECA-045": {
   "type": "pdf",
   "title": "[AMMAR-MECA-045] APPLICATION  2 - Correction.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/VIDEOS MECANIQUE AMMAR/[AMMAR-MECA-045] APPLICATION  2 - Correction.pdf",
   "ext": "pdf",
   "sizeBytes": 963584,
   "url": "https://wael-academy-files.b-cdn.net/BAC/VIDEOS%20MECANIQUE%20AMMAR/%5BAMMAR-MECA-045%5D%20APPLICATION%20%202%20-%20Correction.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "AMMAR-MECA-046": {
   "type": "pdf",
   "title": "[AMMAR-MECA-046] APPLICATION  2.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/VIDEOS MECANIQUE AMMAR/[AMMAR-MECA-046] APPLICATION  2.pdf",
   "ext": "pdf",
   "sizeBytes": 910525,
   "url": "https://wael-academy-files.b-cdn.net/BAC/VIDEOS%20MECANIQUE%20AMMAR/%5BAMMAR-MECA-046%5D%20APPLICATION%20%202.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "AMMAR-MECA-047": {
   "type": "pdf",
   "title": "[AMMAR-MECA-047] APPLICATION  3 - Correction.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/VIDEOS MECANIQUE AMMAR/[AMMAR-MECA-047] APPLICATION  3 - Correction.pdf",
   "ext": "pdf",
   "sizeBytes": 1420145,
   "url": "https://wael-academy-files.b-cdn.net/BAC/VIDEOS%20MECANIQUE%20AMMAR/%5BAMMAR-MECA-047%5D%20APPLICATION%20%203%20-%20Correction.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "AMMAR-MECA-048": {
   "type": "pdf",
   "title": "[AMMAR-MECA-048] APPLICATION  3.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/VIDEOS MECANIQUE AMMAR/[AMMAR-MECA-048] APPLICATION  3.pdf",
   "ext": "pdf",
   "sizeBytes": 1351301,
   "url": "https://wael-academy-files.b-cdn.net/BAC/VIDEOS%20MECANIQUE%20AMMAR/%5BAMMAR-MECA-048%5D%20APPLICATION%20%203.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "AMMAR-MECA-049": {
   "type": "pdf",
   "title": "[AMMAR-MECA-049] APPLICATION  4 - Correction.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/VIDEOS MECANIQUE AMMAR/[AMMAR-MECA-049] APPLICATION  4 - Correction.pdf",
   "ext": "pdf",
   "sizeBytes": 776872,
   "url": "https://wael-academy-files.b-cdn.net/BAC/VIDEOS%20MECANIQUE%20AMMAR/%5BAMMAR-MECA-049%5D%20APPLICATION%20%204%20-%20Correction.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "AMMAR-MECA-050": {
   "type": "pdf",
   "title": "[AMMAR-MECA-050] APPLICATION  4.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/VIDEOS MECANIQUE AMMAR/[AMMAR-MECA-050] APPLICATION  4.pdf",
   "ext": "pdf",
   "sizeBytes": 651582,
   "url": "https://wael-academy-files.b-cdn.net/BAC/VIDEOS%20MECANIQUE%20AMMAR/%5BAMMAR-MECA-050%5D%20APPLICATION%20%204.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "AMMAR-MECA-051": {
   "type": "pdf",
   "title": "[AMMAR-MECA-051] APPLICATION  5 -DESSIN DENSEMBLE.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/VIDEOS MECANIQUE AMMAR/[AMMAR-MECA-051] APPLICATION  5 -DESSIN DENSEMBLE.pdf",
   "ext": "pdf",
   "sizeBytes": 437802,
   "url": "https://wael-academy-files.b-cdn.net/BAC/VIDEOS%20MECANIQUE%20AMMAR/%5BAMMAR-MECA-051%5D%20APPLICATION%20%205%20-DESSIN%20DENSEMBLE.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "AMMAR-MECA-052": {
   "type": "pdf",
   "title": "[AMMAR-MECA-052] APPLICATION  5- Correction.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/VIDEOS MECANIQUE AMMAR/[AMMAR-MECA-052] APPLICATION  5- Correction.pdf",
   "ext": "pdf",
   "sizeBytes": 776016,
   "url": "https://wael-academy-files.b-cdn.net/BAC/VIDEOS%20MECANIQUE%20AMMAR/%5BAMMAR-MECA-052%5D%20APPLICATION%20%205-%20Correction.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "AMMAR-MECA-053": {
   "type": "pdf",
   "title": "[AMMAR-MECA-053] APPLICATION  5.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/VIDEOS MECANIQUE AMMAR/[AMMAR-MECA-053] APPLICATION  5.pdf",
   "ext": "pdf",
   "sizeBytes": 682222,
   "url": "https://wael-academy-files.b-cdn.net/BAC/VIDEOS%20MECANIQUE%20AMMAR/%5BAMMAR-MECA-053%5D%20APPLICATION%20%205.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "AMMAR-MECA-054": {
   "type": "video",
   "title": "FAST T1 / 01 - [AMMAR-MECA-054] APPLICATION 1",
   "guid": "c03a6031-23f8-4056-9237-d112a74070f7",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/c03a6031-23f8-4056-9237-d112a74070f7/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/c03a6031-23f8-4056-9237-d112a74070f7/thumbnail.jpg",
   "durationSec": 582,
   "resolutions": "480p,720p,240p,360p",
   "sizeBytes": 321342337,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/c03a6031-23f8-4056-9237-d112a74070f7/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/c03a6031-23f8-4056-9237-d112a74070f7/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/c03a6031-23f8-4056-9237-d112a74070f7",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "AMMAR-MECA-055": {
   "type": "video",
   "title": "FAST T1 / 02 - [AMMAR-MECA-055] APPLICATION 2",
   "guid": "e500d0fa-0284-4e65-a63e-57fe5aeed3fc",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/e500d0fa-0284-4e65-a63e-57fe5aeed3fc/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/e500d0fa-0284-4e65-a63e-57fe5aeed3fc/thumbnail.jpg",
   "durationSec": 408,
   "resolutions": "480p,720p,240p,360p",
   "sizeBytes": 277025858,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/e500d0fa-0284-4e65-a63e-57fe5aeed3fc/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/e500d0fa-0284-4e65-a63e-57fe5aeed3fc/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/e500d0fa-0284-4e65-a63e-57fe5aeed3fc",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "AMMAR-MECA-056": {
   "type": "video",
   "title": "FAST T1 / 03 - [AMMAR-MECA-056] APPLICATION 3",
   "guid": "c651f2d7-f1c4-4f9c-a136-2bddab044e18",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/c651f2d7-f1c4-4f9c-a136-2bddab044e18/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/c651f2d7-f1c4-4f9c-a136-2bddab044e18/thumbnail.jpg",
   "durationSec": 452,
   "resolutions": "480p,720p,240p,360p",
   "sizeBytes": 302617084,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/c651f2d7-f1c4-4f9c-a136-2bddab044e18/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/c651f2d7-f1c4-4f9c-a136-2bddab044e18/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/c651f2d7-f1c4-4f9c-a136-2bddab044e18",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "AMMAR-MECA-057": {
   "type": "video",
   "title": "FAST T1 / 04 - [AMMAR-MECA-057] APPLICATION 4",
   "guid": "5340578a-5cc2-42d6-8758-12d9d9434dd6",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/5340578a-5cc2-42d6-8758-12d9d9434dd6/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/5340578a-5cc2-42d6-8758-12d9d9434dd6/thumbnail.jpg",
   "durationSec": 518,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 306246274,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/5340578a-5cc2-42d6-8758-12d9d9434dd6/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/5340578a-5cc2-42d6-8758-12d9d9434dd6/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/5340578a-5cc2-42d6-8758-12d9d9434dd6",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "AMMAR-MECA-058": {
   "type": "video",
   "title": "FAST T1 / 05 - [AMMAR-MECA-058] APPLICATION 5",
   "guid": "d64eedb1-fbc6-415d-861b-1353cd91f111",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/d64eedb1-fbc6-415d-861b-1353cd91f111/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/d64eedb1-fbc6-415d-861b-1353cd91f111/thumbnail.jpg",
   "durationSec": 564,
   "resolutions": "480p,720p,240p,360p",
   "sizeBytes": 357741901,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/d64eedb1-fbc6-415d-861b-1353cd91f111/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/d64eedb1-fbc6-415d-861b-1353cd91f111/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/d64eedb1-fbc6-415d-861b-1353cd91f111",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "ATEF-ELEC-001": {
   "type": "video",
   "title": "01- MIKROC 1 interruption / 01 - [ATEF-ELEC-001] interruption",
   "guid": "36ee88ff-4921-46c0-be72-159d67468fbe",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/36ee88ff-4921-46c0-be72-159d67468fbe/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/36ee88ff-4921-46c0-be72-159d67468fbe/thumbnail.jpg",
   "durationSec": 832,
   "resolutions": "480p,720p,240p,360p",
   "sizeBytes": 445943836,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/36ee88ff-4921-46c0-be72-159d67468fbe/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/36ee88ff-4921-46c0-be72-159d67468fbe/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/36ee88ff-4921-46c0-be72-159d67468fbe",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "ATEF-ELEC-002": {
   "type": "pdf",
   "title": "[ATEF-ELEC-002] MIKROC 1 interruption2026.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/atef HM electrique BAC/[ATEF-ELEC-002] MIKROC 1 interruption2026.pdf",
   "ext": "pdf",
   "sizeBytes": 740981,
   "url": "https://wael-academy-files.b-cdn.net/BAC/atef%20HM%20electrique%20BAC/%5BATEF-ELEC-002%5D%20MIKROC%201%20interruption2026.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "ATEF-ELEC-003": {
   "type": "video",
   "title": "10- LOGIQUE SEQUENTEILLE 2 GRAFCET SYNCHRONISE / 01 - [ATEF-ELEC-003] grafcet",
   "guid": "de2b1cc3-5aaf-499c-87ae-e3d5d1a33af9",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/de2b1cc3-5aaf-499c-87ae-e3d5d1a33af9/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/de2b1cc3-5aaf-499c-87ae-e3d5d1a33af9/thumbnail.jpg",
   "durationSec": 426,
   "resolutions": "480p,720p,240p,360p",
   "sizeBytes": 224965236,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/de2b1cc3-5aaf-499c-87ae-e3d5d1a33af9/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/de2b1cc3-5aaf-499c-87ae-e3d5d1a33af9/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/de2b1cc3-5aaf-499c-87ae-e3d5d1a33af9",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "ATEF-ELEC-004": {
   "type": "pdf",
   "title": "[ATEF-ELEC-004] LOGIQUE SEQUENTEILLE 2 GRAFCET SYNCHRONISE-2026.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/atef HM electrique BAC/[ATEF-ELEC-004] LOGIQUE SEQUENTEILLE 2 GRAFCET SYNCHRONISE-2026.pdf",
   "ext": "pdf",
   "sizeBytes": 763053,
   "url": "https://wael-academy-files.b-cdn.net/BAC/atef%20HM%20electrique%20BAC/%5BATEF-ELEC-004%5D%20LOGIQUE%20SEQUENTEILLE%202%20GRAFCET%20SYNCHRONISE-2026.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "ATEF-ELEC-005": {
   "type": "video",
   "title": "02- MIKROC 2 convertisseur / 01 - [ATEF-ELEC-005] convertion",
   "guid": "3e2cf55f-4eed-440f-b48f-bb5930a80d97",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/3e2cf55f-4eed-440f-b48f-bb5930a80d97/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/3e2cf55f-4eed-440f-b48f-bb5930a80d97/thumbnail.jpg",
   "durationSec": 799,
   "resolutions": "480p,720p,240p,360p",
   "sizeBytes": 411026412,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/3e2cf55f-4eed-440f-b48f-bb5930a80d97/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/3e2cf55f-4eed-440f-b48f-bb5930a80d97/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/3e2cf55f-4eed-440f-b48f-bb5930a80d97",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "ATEF-ELEC-006": {
   "type": "pdf",
   "title": "[ATEF-ELEC-006] MIKROC 2 convertisseur2026.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/atef HM electrique BAC/[ATEF-ELEC-006] MIKROC 2 convertisseur2026.pdf",
   "ext": "pdf",
   "sizeBytes": 722333,
   "url": "https://wael-academy-files.b-cdn.net/BAC/atef%20HM%20electrique%20BAC/%5BATEF-ELEC-006%5D%20MIKROC%202%20convertisseur2026.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "ATEF-ELEC-007": {
   "type": "pdf",
   "title": "[ATEF-ELEC-007] MIKROC 3 Timer02026.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/atef HM electrique BAC/[ATEF-ELEC-007] MIKROC 3 Timer02026.pdf",
   "ext": "pdf",
   "sizeBytes": 678091,
   "url": "https://wael-academy-files.b-cdn.net/BAC/atef%20HM%20electrique%20BAC/%5BATEF-ELEC-007%5D%20MIKROC%203%20Timer02026.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "ATEF-ELEC-008": {
   "type": "video",
   "title": "03- MIKROC 3 Timer / 01 - [ATEF-ELEC-008] timer",
   "guid": "d22d22ec-0a8f-464a-a390-6a02f9009dc4",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/d22d22ec-0a8f-464a-a390-6a02f9009dc4/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/d22d22ec-0a8f-464a-a390-6a02f9009dc4/thumbnail.jpg",
   "durationSec": 636,
   "resolutions": "480p,720p,240p,360p",
   "sizeBytes": 319510619,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/d22d22ec-0a8f-464a-a390-6a02f9009dc4/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/d22d22ec-0a8f-464a-a390-6a02f9009dc4/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/d22d22ec-0a8f-464a-a390-6a02f9009dc4",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "ATEF-ELEC-009": {
   "type": "video",
   "title": "04- CIRCUIT  COMBINATOIRRE ADDITIONNEUR binaire et BCD / 01 - [ATEF-ELEC-009] additionneur BCD et BINAIRE",
   "guid": "311548e6-5762-4ecc-b1be-4e347c7ff7f3",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/311548e6-5762-4ecc-b1be-4e347c7ff7f3/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/311548e6-5762-4ecc-b1be-4e347c7ff7f3/thumbnail.jpg",
   "durationSec": 891,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 421072374,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/311548e6-5762-4ecc-b1be-4e347c7ff7f3/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/311548e6-5762-4ecc-b1be-4e347c7ff7f3/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/311548e6-5762-4ecc-b1be-4e347c7ff7f3",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "ATEF-ELEC-010": {
   "type": "pdf",
   "title": "[ATEF-ELEC-010] CIRCUIT 2 COMBINATOIRRE ADDITIONNEUR binaire et BCD-2026.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/atef HM electrique BAC/[ATEF-ELEC-010] CIRCUIT 2 COMBINATOIRRE ADDITIONNEUR binaire et BCD-2026.pdf",
   "ext": "pdf",
   "sizeBytes": 868452,
   "url": "https://wael-academy-files.b-cdn.net/BAC/atef%20HM%20electrique%20BAC/%5BATEF-ELEC-010%5D%20CIRCUIT%202%20COMBINATOIRRE%20ADDITIONNEUR%20binaire%20et%20BCD-2026.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "ATEF-ELEC-011": {
   "type": "pdf",
   "title": "[ATEF-ELEC-011] CIRCUIT COMBINATOIRRE SOUSTRACTEUR.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/atef HM electrique BAC/[ATEF-ELEC-011] CIRCUIT COMBINATOIRRE SOUSTRACTEUR.pdf",
   "ext": "pdf",
   "sizeBytes": 582387,
   "url": "https://wael-academy-files.b-cdn.net/BAC/atef%20HM%20electrique%20BAC/%5BATEF-ELEC-011%5D%20CIRCUIT%20COMBINATOIRRE%20SOUSTRACTEUR.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "ATEF-ELEC-012": {
   "type": "video",
   "title": "05- CIRCUIT COMBINATOIRRE SOUSTRACTEUR / 01 - [ATEF-ELEC-012] soustracteur binaire",
   "guid": "4f9e6601-ff2f-42dd-97af-687e1fa9bc56",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/4f9e6601-ff2f-42dd-97af-687e1fa9bc56/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/4f9e6601-ff2f-42dd-97af-687e1fa9bc56/thumbnail.jpg",
   "durationSec": 697,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 319137295,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/4f9e6601-ff2f-42dd-97af-687e1fa9bc56/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/4f9e6601-ff2f-42dd-97af-687e1fa9bc56/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/4f9e6601-ff2f-42dd-97af-687e1fa9bc56",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "ATEF-ELEC-013": {
   "type": "pdf",
   "title": "[ATEF-ELEC-013] CIRCUIT 4 COMBINATOIRRE comparateur-2026.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/atef HM electrique BAC/[ATEF-ELEC-013] CIRCUIT 4 COMBINATOIRRE comparateur-2026.pdf",
   "ext": "pdf",
   "sizeBytes": 595779,
   "url": "https://wael-academy-files.b-cdn.net/BAC/atef%20HM%20electrique%20BAC/%5BATEF-ELEC-013%5D%20CIRCUIT%204%20COMBINATOIRRE%20comparateur-2026.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "ATEF-ELEC-014": {
   "type": "video",
   "title": "06- CIRCUIT  COMBINATOIRRE comparateur / 01 - [ATEF-ELEC-014] les comparateur",
   "guid": "3eb720d7-a8ad-4413-bc6a-1e60b9fb82c5",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/3eb720d7-a8ad-4413-bc6a-1e60b9fb82c5/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/3eb720d7-a8ad-4413-bc6a-1e60b9fb82c5/thumbnail.jpg",
   "durationSec": 647,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 379422145,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/3eb720d7-a8ad-4413-bc6a-1e60b9fb82c5/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/3eb720d7-a8ad-4413-bc6a-1e60b9fb82c5/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/3eb720d7-a8ad-4413-bc6a-1e60b9fb82c5",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "ATEF-ELEC-015": {
   "type": "pdf",
   "title": "[ATEF-ELEC-015] CIRCUIT 3 COMBINATOIRRE MUX ET DMUX-2026.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/atef HM electrique BAC/[ATEF-ELEC-015] CIRCUIT 3 COMBINATOIRRE MUX ET DMUX-2026.pdf",
   "ext": "pdf",
   "sizeBytes": 689155,
   "url": "https://wael-academy-files.b-cdn.net/BAC/atef%20HM%20electrique%20BAC/%5BATEF-ELEC-015%5D%20CIRCUIT%203%20COMBINATOIRRE%20MUX%20ET%20DMUX-2026.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "ATEF-ELEC-016": {
   "type": "video",
   "title": "07- CIRCUIT  COMBINATOIRRE MUX ET DMUX / 01 - [ATEF-ELEC-016] MUX ET DMUX",
   "guid": "3466e9c1-ba13-4847-a886-a98bfc87b4d4",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/3466e9c1-ba13-4847-a886-a98bfc87b4d4/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/3466e9c1-ba13-4847-a886-a98bfc87b4d4/thumbnail.jpg",
   "durationSec": 863,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 429883526,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/3466e9c1-ba13-4847-a886-a98bfc87b4d4/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/3466e9c1-ba13-4847-a886-a98bfc87b4d4/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/3466e9c1-ba13-4847-a886-a98bfc87b4d4",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "ATEF-ELEC-017": {
   "type": "pdf",
   "title": "[ATEF-ELEC-017] CIRCUIT 5 COMBINATOIRRE UAL-2026.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/atef HM electrique BAC/[ATEF-ELEC-017] CIRCUIT 5 COMBINATOIRRE UAL-2026.pdf",
   "ext": "pdf",
   "sizeBytes": 602852,
   "url": "https://wael-academy-files.b-cdn.net/BAC/atef%20HM%20electrique%20BAC/%5BATEF-ELEC-017%5D%20CIRCUIT%205%20COMBINATOIRRE%20UAL-2026.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "ATEF-ELEC-018": {
   "type": "video",
   "title": "08- CIRCUIT  COMBINATOIRRE UAL / 01 - [ATEF-ELEC-018] UNITE ARITHMETIQUE ET LOGIQUE",
   "guid": "dedb34b6-10f1-40b8-813d-d57027e9b378",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/dedb34b6-10f1-40b8-813d-d57027e9b378/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/dedb34b6-10f1-40b8-813d-d57027e9b378/thumbnail.jpg",
   "durationSec": 780,
   "resolutions": "480p,720p,240p,360p",
   "sizeBytes": 439268500,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/dedb34b6-10f1-40b8-813d-d57027e9b378/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/dedb34b6-10f1-40b8-813d-d57027e9b378/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/dedb34b6-10f1-40b8-813d-d57027e9b378",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "ATEF-ELEC-019": {
   "type": "video",
   "title": "09- LOGIQUE SEQUENTEILLE 1 COMPTEUR / 01 - [ATEF-ELEC-019] compteur",
   "guid": "e7a517f1-cd13-4558-a94a-a2d52440ac89",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/e7a517f1-cd13-4558-a94a-a2d52440ac89/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/e7a517f1-cd13-4558-a94a-a2d52440ac89/thumbnail.jpg",
   "durationSec": 810,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 421118014,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/e7a517f1-cd13-4558-a94a-a2d52440ac89/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/e7a517f1-cd13-4558-a94a-a2d52440ac89/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/e7a517f1-cd13-4558-a94a-a2d52440ac89",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "ATEF-ELEC-020": {
   "type": "pdf",
   "title": "[ATEF-ELEC-020] LOGIQUE SEQUENTEILLE 1 COMPTEUR-2026.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/atef HM electrique BAC/[ATEF-ELEC-020] LOGIQUE SEQUENTEILLE 1 COMPTEUR-2026.pdf",
   "ext": "pdf",
   "sizeBytes": 746120,
   "url": "https://wael-academy-files.b-cdn.net/BAC/atef%20HM%20electrique%20BAC/%5BATEF-ELEC-020%5D%20LOGIQUE%20SEQUENTEILLE%201%20COMPTEUR-2026.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "ATEF-ELEC-021": {
   "type": "pdf",
   "title": "[ATEF-ELEC-021] serie circuit combinatoire-2026.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/atef HM electrique BAC/[ATEF-ELEC-021] serie circuit combinatoire-2026.pdf",
   "ext": "pdf",
   "sizeBytes": 627200,
   "url": "https://wael-academy-files.b-cdn.net/BAC/atef%20HM%20electrique%20BAC/%5BATEF-ELEC-021%5D%20serie%20circuit%20combinatoire-2026.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "ATEF-ELEC-022": {
   "type": "video",
   "title": "serie circuit combinatoire2026 / 01 - [ATEF-ELEC-022] serie circuit combinatoire",
   "guid": "b58cdc1e-1a96-4175-8f68-73911286fa42",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/b58cdc1e-1a96-4175-8f68-73911286fa42/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/b58cdc1e-1a96-4175-8f68-73911286fa42/thumbnail.jpg",
   "durationSec": 934,
   "resolutions": "480p,720p,240p,360p",
   "sizeBytes": 459672024,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/b58cdc1e-1a96-4175-8f68-73911286fa42/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/b58cdc1e-1a96-4175-8f68-73911286fa42/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/b58cdc1e-1a96-4175-8f68-73911286fa42",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "ATEF-ELEC-023": {
   "type": "pdf",
   "title": "[ATEF-ELEC-023] serie circuit combinatoire2026-CORRECTION.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/atef HM electrique BAC/[ATEF-ELEC-023] serie circuit combinatoire2026-CORRECTION.pdf",
   "ext": "pdf",
   "sizeBytes": 693538,
   "url": "https://wael-academy-files.b-cdn.net/BAC/atef%20HM%20electrique%20BAC/%5BATEF-ELEC-023%5D%20serie%20circuit%20combinatoire2026-CORRECTION.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "ATEF-ELEC-024": {
   "type": "pdf",
   "title": "[ATEF-ELEC-024] serie interruption-correction.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/atef HM electrique BAC/[ATEF-ELEC-024] serie interruption-correction.pdf",
   "ext": "pdf",
   "sizeBytes": 652759,
   "url": "https://wael-academy-files.b-cdn.net/BAC/atef%20HM%20electrique%20BAC/%5BATEF-ELEC-024%5D%20serie%20interruption-correction.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "ATEF-ELEC-025": {
   "type": "pdf",
   "title": "[ATEF-ELEC-025] serie interruption.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/atef HM electrique BAC/[ATEF-ELEC-025] serie interruption.pdf",
   "ext": "pdf",
   "sizeBytes": 556612,
   "url": "https://wael-academy-files.b-cdn.net/BAC/atef%20HM%20electrique%20BAC/%5BATEF-ELEC-025%5D%20serie%20interruption.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "ATEF-ELEC-026": {
   "type": "video",
   "title": "serie interruption / 01 - [ATEF-ELEC-026] serie micro interruption",
   "guid": "17094177-39f0-436b-9427-5741bcc226bd",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/17094177-39f0-436b-9427-5741bcc226bd/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/17094177-39f0-436b-9427-5741bcc226bd/thumbnail.jpg",
   "durationSec": 637,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 307133551,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/17094177-39f0-436b-9427-5741bcc226bd/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/17094177-39f0-436b-9427-5741bcc226bd/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/17094177-39f0-436b-9427-5741bcc226bd",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "ATEF-ELEC-028": {
   "type": "pdf",
   "title": "[ATEF-ELEC-028] serie conversion2026-correction.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/atef HM electrique BAC/[ATEF-ELEC-028] serie conversion2026-correction.pdf",
   "ext": "pdf",
   "sizeBytes": 989978,
   "url": "https://wael-academy-files.b-cdn.net/BAC/atef%20HM%20electrique%20BAC/%5BATEF-ELEC-028%5D%20serie%20conversion2026-correction.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "ATEF-ELEC-029": {
   "type": "pdf",
   "title": "[ATEF-ELEC-029] serie conversion2026.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/atef HM electrique BAC/[ATEF-ELEC-029] serie conversion2026.pdf",
   "ext": "pdf",
   "sizeBytes": 849577,
   "url": "https://wael-academy-files.b-cdn.net/BAC/atef%20HM%20electrique%20BAC/%5BATEF-ELEC-029%5D%20serie%20conversion2026.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "ATEF-ELEC-030": {
   "type": "video",
   "title": "serie micro conversion / 01 - [ATEF-ELEC-030] serie micro conversion",
   "guid": "9d48b6e5-825b-47dc-b181-da0daed25846",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/9d48b6e5-825b-47dc-b181-da0daed25846/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/9d48b6e5-825b-47dc-b181-da0daed25846/thumbnail.jpg",
   "durationSec": 943,
   "resolutions": "480p,720p,240p,360p",
   "sizeBytes": 433077033,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/9d48b6e5-825b-47dc-b181-da0daed25846/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/9d48b6e5-825b-47dc-b181-da0daed25846/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/9d48b6e5-825b-47dc-b181-da0daed25846",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "ELINE-ECO-001": {
   "type": "video",
   "title": "cours TH1 / 01 - [ELINE-ECO-001] choix citoyen du cteur",
   "guid": "0cf9789c-5674-40aa-9c0a-324732415eaa",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/0cf9789c-5674-40aa-9c0a-324732415eaa/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/0cf9789c-5674-40aa-9c0a-324732415eaa/thumbnail.jpg",
   "durationSec": 725,
   "resolutions": "480p,720p,240p,360p",
   "sizeBytes": 333349204,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/0cf9789c-5674-40aa-9c0a-324732415eaa/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/0cf9789c-5674-40aa-9c0a-324732415eaa/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/0cf9789c-5674-40aa-9c0a-324732415eaa",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "ELINE-ECO-002": {
   "type": "pdf",
   "title": "[ELINE-ECO-002] l_équilibre du conso.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/eline bac/[ELINE-ECO-002] l_équilibre du conso.pdf",
   "ext": "pdf",
   "sizeBytes": 539189,
   "url": "https://wael-academy-files.b-cdn.net/BAC/eline%20bac/%5BELINE-ECO-002%5D%20l_%C3%A9quilibre%20du%20conso.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "ELINE-ECO-003": {
   "type": "video",
   "title": "cours TH1 / 02 - [ELINE-ECO-003] L_équilibre du consommateur ( cours)",
   "guid": "d5c6d035-ad21-4c46-ad43-378f7d03851c",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/d5c6d035-ad21-4c46-ad43-378f7d03851c/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/d5c6d035-ad21-4c46-ad43-378f7d03851c/thumbnail.jpg",
   "durationSec": 1166,
   "resolutions": "480p,720p,240p,360p",
   "sizeBytes": 522068332,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/d5c6d035-ad21-4c46-ad43-378f7d03851c/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/d5c6d035-ad21-4c46-ad43-378f7d03851c/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/d5c6d035-ad21-4c46-ad43-378f7d03851c",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "ELINE-ECO-004": {
   "type": "pdf",
   "title": "[ELINE-ECO-004] Méthodologie de la dissertation économique-Copy.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/eline bac/[ELINE-ECO-004] Méthodologie de la dissertation économique-Copy.pdf",
   "ext": "pdf",
   "sizeBytes": 315937,
   "url": "https://wael-academy-files.b-cdn.net/BAC/eline%20bac/%5BELINE-ECO-004%5D%20M%C3%A9thodologie%20de%20la%20dissertation%20%C3%A9conomique-Copy.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "ELINE-ECO-005": {
   "type": "video",
   "title": "cours TH1 / 03 - [ELINE-ECO-005] Méthodologie de la dissertation économique",
   "guid": "8d0ace23-22fd-41bf-8201-b890f61c2068",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/8d0ace23-22fd-41bf-8201-b890f61c2068/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/8d0ace23-22fd-41bf-8201-b890f61c2068/thumbnail.jpg",
   "durationSec": 852,
   "resolutions": "480p,720p,240p,360p",
   "sizeBytes": 275050857,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/8d0ace23-22fd-41bf-8201-b890f61c2068/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/8d0ace23-22fd-41bf-8201-b890f61c2068/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/8d0ace23-22fd-41bf-8201-b890f61c2068",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "ELINE-ECO-006": {
   "type": "pdf",
   "title": "[ELINE-ECO-006] PDF V01.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/eline bac/[ELINE-ECO-006] PDF V01.pdf",
   "ext": "pdf",
   "sizeBytes": 637946,
   "url": "https://wael-academy-files.b-cdn.net/BAC/eline%20bac/%5BELINE-ECO-006%5D%20PDF%20V01.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "ELINE-ECO-007": {
   "type": "pdf",
   "title": "[ELINE-ECO-007] PDF V02.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/eline bac/[ELINE-ECO-007] PDF V02.pdf",
   "ext": "pdf",
   "sizeBytes": 979314,
   "url": "https://wael-academy-files.b-cdn.net/BAC/eline%20bac/%5BELINE-ECO-007%5D%20PDF%20V02.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "ELINE-ECO-008": {
   "type": "pdf",
   "title": "[ELINE-ECO-008] secion 2 le choix citoyen du consommateur bac.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/eline bac/[ELINE-ECO-008] secion 2 le choix citoyen du consommateur bac.pdf",
   "ext": "pdf",
   "sizeBytes": 209252,
   "url": "https://wael-academy-files.b-cdn.net/BAC/eline%20bac/%5BELINE-ECO-008%5D%20secion%202%20le%20choix%20citoyen%20du%20consommateur%20bac.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "ELINE-ECO-009": {
   "type": "video",
   "title": "cours TH1 / 04 - [ELINE-ECO-009] V01",
   "guid": "f67c0e31-126b-4df8-aaae-7f9cfc4f73fa",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/f67c0e31-126b-4df8-aaae-7f9cfc4f73fa/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/f67c0e31-126b-4df8-aaae-7f9cfc4f73fa/thumbnail.jpg",
   "durationSec": 866,
   "resolutions": "480p,720p,240p,360p",
   "sizeBytes": 462574552,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/f67c0e31-126b-4df8-aaae-7f9cfc4f73fa/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/f67c0e31-126b-4df8-aaae-7f9cfc4f73fa/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/f67c0e31-126b-4df8-aaae-7f9cfc4f73fa",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "ELINE-ECO-010": {
   "type": "video",
   "title": "cours TH1 / 05 - [ELINE-ECO-010] V02",
   "guid": "e2e03523-ecc5-4751-a2b0-ae52e333b2db",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/e2e03523-ecc5-4751-a2b0-ae52e333b2db/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/e2e03523-ecc5-4751-a2b0-ae52e333b2db/thumbnail.jpg",
   "durationSec": 1317,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 1323278027,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/e2e03523-ecc5-4751-a2b0-ae52e333b2db/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/e2e03523-ecc5-4751-a2b0-ae52e333b2db/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/e2e03523-ecc5-4751-a2b0-ae52e333b2db",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "ELINE-ECO-012": {
   "type": "video",
   "title": "cours TH2 / 01 - [ELINE-ECO-012] Choix citoyen du producteur",
   "guid": "f9d4dc87-c4a6-40d9-8375-6e0a09c5abd2",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/f9d4dc87-c4a6-40d9-8375-6e0a09c5abd2/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/f9d4dc87-c4a6-40d9-8375-6e0a09c5abd2/thumbnail.jpg",
   "durationSec": 1322,
   "resolutions": "480p,720p,240p,360p",
   "sizeBytes": 585503095,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/f9d4dc87-c4a6-40d9-8375-6e0a09c5abd2/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/f9d4dc87-c4a6-40d9-8375-6e0a09c5abd2/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/f9d4dc87-c4a6-40d9-8375-6e0a09c5abd2",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "ELINE-ECO-013": {
   "type": "video",
   "title": "cours TH2 / 02 - [ELINE-ECO-013] Contrainte budgétaire de producteur",
   "guid": "423e4ff2-7089-4665-aa14-bbef4866f163",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/423e4ff2-7089-4665-aa14-bbef4866f163/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/423e4ff2-7089-4665-aa14-bbef4866f163/thumbnail.jpg",
   "durationSec": 892,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 416744120,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/423e4ff2-7089-4665-aa14-bbef4866f163/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/423e4ff2-7089-4665-aa14-bbef4866f163/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/423e4ff2-7089-4665-aa14-bbef4866f163",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "ELINE-ECO-014": {
   "type": "pdf",
   "title": "[ELINE-ECO-014] contrainte budgétaire du producteur.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/eline bac/[ELINE-ECO-014] contrainte budgétaire du producteur.pdf",
   "ext": "pdf",
   "sizeBytes": 1694153,
   "url": "https://wael-academy-files.b-cdn.net/BAC/eline%20bac/%5BELINE-ECO-014%5D%20contrainte%20budg%C3%A9taire%20du%20producteur.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "ELINE-ECO-015": {
   "type": "pdf",
   "title": "[ELINE-ECO-015] fonction de production partie 1.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/eline bac/[ELINE-ECO-015] fonction de production partie 1.pdf",
   "ext": "pdf",
   "sizeBytes": 839673,
   "url": "https://wael-academy-files.b-cdn.net/BAC/eline%20bac/%5BELINE-ECO-015%5D%20fonction%20de%20production%20partie%201.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "ELINE-ECO-016": {
   "type": "pdf",
   "title": "[ELINE-ECO-016] la fonction de production cours partie2.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/eline bac/[ELINE-ECO-016] la fonction de production cours partie2.pdf",
   "ext": "pdf",
   "sizeBytes": 1442640,
   "url": "https://wael-academy-files.b-cdn.net/BAC/eline%20bac/%5BELINE-ECO-016%5D%20la%20fonction%20de%20production%20cours%20partie2.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "ELINE-ECO-017": {
   "type": "video",
   "title": "cours TH2 / 03 - [ELINE-ECO-017] La fonction de production partie 2",
   "guid": "85d2f63f-8e6f-4004-b118-40190ef3b69c",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/85d2f63f-8e6f-4004-b118-40190ef3b69c/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/85d2f63f-8e6f-4004-b118-40190ef3b69c/thumbnail.jpg",
   "durationSec": 1129,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 759769682,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/85d2f63f-8e6f-4004-b118-40190ef3b69c/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/85d2f63f-8e6f-4004-b118-40190ef3b69c/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/85d2f63f-8e6f-4004-b118-40190ef3b69c",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "ELINE-ECO-018": {
   "type": "video",
   "title": "cours TH2 / 04 - [ELINE-ECO-018] La fonction de production_",
   "guid": "c25d33e9-6f11-4d1f-bf5b-42fd3407f905",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/c25d33e9-6f11-4d1f-bf5b-42fd3407f905/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/c25d33e9-6f11-4d1f-bf5b-42fd3407f905/thumbnail.jpg",
   "durationSec": 1248,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 541344892,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/c25d33e9-6f11-4d1f-bf5b-42fd3407f905/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/c25d33e9-6f11-4d1f-bf5b-42fd3407f905/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/c25d33e9-6f11-4d1f-bf5b-42fd3407f905",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "ELINE-ECO-019": {
   "type": "pdf",
   "title": "[ELINE-ECO-019] SECTION 2 le choix citoyen du producteur-Copy.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/eline bac/[ELINE-ECO-019] SECTION 2 le choix citoyen du producteur-Copy.pdf",
   "ext": "pdf",
   "sizeBytes": 199133,
   "url": "https://wael-academy-files.b-cdn.net/BAC/eline%20bac/%5BELINE-ECO-019%5D%20SECTION%202%20le%20choix%20citoyen%20du%20producteur-Copy.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "ELINE-ECO-020": {
   "type": "video",
   "title": "exercices TH1 / 01 - [ELINE-ECO-020] choix eco du consommateur",
   "guid": "0437e2cb-c538-4ebf-b65a-6f4c430de53d",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/0437e2cb-c538-4ebf-b65a-6f4c430de53d/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/0437e2cb-c538-4ebf-b65a-6f4c430de53d/thumbnail.jpg",
   "durationSec": 2084,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 2137403511,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/0437e2cb-c538-4ebf-b65a-6f4c430de53d/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/0437e2cb-c538-4ebf-b65a-6f4c430de53d/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/0437e2cb-c538-4ebf-b65a-6f4c430de53d",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "ELINE-ECO-021": {
   "type": "pdf",
   "title": "[ELINE-ECO-021] Choix économique du consommateur-Copy.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/eline bac/[ELINE-ECO-021] Choix économique du consommateur-Copy.pdf",
   "ext": "pdf",
   "sizeBytes": 3595995,
   "url": "https://wael-academy-files.b-cdn.net/BAC/eline%20bac/%5BELINE-ECO-021%5D%20Choix%20%C3%A9conomique%20du%20consommateur-Copy.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "ELINE-ECO-023": {
   "type": "pdf",
   "title": "[ELINE-ECO-023] Ex Choix économique -Copy(2).pdf",
   "zone": "wael-academy-files",
   "path": "BAC/eline bac/[ELINE-ECO-023] Ex Choix économique -Copy(2).pdf",
   "ext": "pdf",
   "sizeBytes": 1086528,
   "url": "https://wael-academy-files.b-cdn.net/BAC/eline%20bac/%5BELINE-ECO-023%5D%20Ex%20Choix%20%C3%A9conomique%20-Copy%282%29.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "ELINE-ECO-024": {
   "type": "pdf",
   "title": "[ELINE-ECO-024] Ex Choix économique -Copy.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/eline bac/[ELINE-ECO-024] Ex Choix économique -Copy.pdf",
   "ext": "pdf",
   "sizeBytes": 1086528,
   "url": "https://wael-academy-files.b-cdn.net/BAC/eline%20bac/%5BELINE-ECO-024%5D%20Ex%20Choix%20%C3%A9conomique%20-Copy.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "ELINE-ECO-025": {
   "type": "pdf",
   "title": "[ELINE-ECO-025] Exercice 2 choix economique du consommateur-Copy.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/eline bac/[ELINE-ECO-025] Exercice 2 choix economique du consommateur-Copy.pdf",
   "ext": "pdf",
   "sizeBytes": 1026931,
   "url": "https://wael-academy-files.b-cdn.net/BAC/eline%20bac/%5BELINE-ECO-025%5D%20Exercice%202%20choix%20economique%20du%20consommateur-Copy.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "ELINE-ECO-027": {
   "type": "video",
   "title": "exercices TH1 / 03 - [ELINE-ECO-027] exercice 2",
   "guid": "a7b77b06-53c9-4fab-aadc-d2e99c4296d4",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/a7b77b06-53c9-4fab-aadc-d2e99c4296d4/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/a7b77b06-53c9-4fab-aadc-d2e99c4296d4/thumbnail.jpg",
   "durationSec": 1246,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 970099052,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/a7b77b06-53c9-4fab-aadc-d2e99c4296d4/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/a7b77b06-53c9-4fab-aadc-d2e99c4296d4/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/a7b77b06-53c9-4fab-aadc-d2e99c4296d4",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "ELINE-ECO-028": {
   "type": "video",
   "title": "exercices TH1 / 04 - [ELINE-ECO-028] exercice 3 (sesseion principal 2024)",
   "guid": "f67e4556-ee3c-4909-8735-eba18b2e24b3",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/f67e4556-ee3c-4909-8735-eba18b2e24b3/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/f67e4556-ee3c-4909-8735-eba18b2e24b3/thumbnail.jpg",
   "durationSec": 2231,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 1845333048,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/f67e4556-ee3c-4909-8735-eba18b2e24b3/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/f67e4556-ee3c-4909-8735-eba18b2e24b3/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/f67e4556-ee3c-4909-8735-eba18b2e24b3",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "ELINE-ECO-029": {
   "type": "pdf",
   "title": "[ELINE-ECO-029] Exercice 3-Copy (1) équilibre de consommateur.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/eline bac/[ELINE-ECO-029] Exercice 3-Copy (1) équilibre de consommateur.pdf",
   "ext": "pdf",
   "sizeBytes": 851752,
   "url": "https://wael-academy-files.b-cdn.net/BAC/eline%20bac/%5BELINE-ECO-029%5D%20Exercice%203-Copy%20%281%29%20%C3%A9quilibre%20de%20consommateur.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "ELINE-ECO-030": {
   "type": "pdf",
   "title": "[ELINE-ECO-030] Fonction de la demande-Copy.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/eline bac/[ELINE-ECO-030] Fonction de la demande-Copy.pdf",
   "ext": "pdf",
   "sizeBytes": 939346,
   "url": "https://wael-academy-files.b-cdn.net/BAC/eline%20bac/%5BELINE-ECO-030%5D%20Fonction%20de%20la%20demande-Copy.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "ELINE-ECO-031": {
   "type": "video",
   "title": "exercices TH1 / 05 - [ELINE-ECO-031] fonction de la demande",
   "guid": "4e138556-82af-447b-acc3-e8eaa8b27cdc",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/4e138556-82af-447b-acc3-e8eaa8b27cdc/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/4e138556-82af-447b-acc3-e8eaa8b27cdc/thumbnail.jpg",
   "durationSec": 1462,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 1212034967,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/4e138556-82af-447b-acc3-e8eaa8b27cdc/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/4e138556-82af-447b-acc3-e8eaa8b27cdc/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/4e138556-82af-447b-acc3-e8eaa8b27cdc",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "ELINE-ECO-032": {
   "type": "pdf",
   "title": "[ELINE-ECO-032] le reste de l_exercice 3.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/eline bac/[ELINE-ECO-032] le reste de l_exercice 3.pdf",
   "ext": "pdf",
   "sizeBytes": 936013,
   "url": "https://wael-academy-files.b-cdn.net/BAC/eline%20bac/%5BELINE-ECO-032%5D%20le%20reste%20de%20l_exercice%203.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "ELINE-ECO-035": {
   "type": "video",
   "title": "exercices TH1 / 07 - [ELINE-ECO-035] Problème part 2",
   "guid": "e17aefb4-2265-43b3-bd8d-67473ed01ccd",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/e17aefb4-2265-43b3-bd8d-67473ed01ccd/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/e17aefb4-2265-43b3-bd8d-67473ed01ccd/thumbnail.jpg",
   "durationSec": 1563,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 1287270328,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/e17aefb4-2265-43b3-bd8d-67473ed01ccd/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/e17aefb4-2265-43b3-bd8d-67473ed01ccd/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/e17aefb4-2265-43b3-bd8d-67473ed01ccd",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "ELINE-ECO-036": {
   "type": "video",
   "title": "exercices TH1 / 08 - [ELINE-ECO-036] Problème part 3_",
   "guid": "2bb7b1f5-53f2-4d2e-8936-f9e6718256f7",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/2bb7b1f5-53f2-4d2e-8936-f9e6718256f7/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/2bb7b1f5-53f2-4d2e-8936-f9e6718256f7/thumbnail.jpg",
   "durationSec": 1631,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 1171526150,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/2bb7b1f5-53f2-4d2e-8936-f9e6718256f7/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/2bb7b1f5-53f2-4d2e-8936-f9e6718256f7/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/2bb7b1f5-53f2-4d2e-8936-f9e6718256f7",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "ELINE-ECO-038": {
   "type": "video",
   "title": "exercices TH1 / 10 - [ELINE-ECO-038] probléme part 1",
   "guid": "1929c068-c2c0-4bee-b122-26d4191ff1e3",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/1929c068-c2c0-4bee-b122-26d4191ff1e3/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/1929c068-c2c0-4bee-b122-26d4191ff1e3/thumbnail.jpg",
   "durationSec": 1853,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 1546486749,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/1929c068-c2c0-4bee-b122-26d4191ff1e3/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/1929c068-c2c0-4bee-b122-26d4191ff1e3/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/1929c068-c2c0-4bee-b122-26d4191ff1e3",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "ELINE-ECO-039": {
   "type": "video",
   "title": "exercices TH2 / 01 - [ELINE-ECO-039] Choix économique du producteur exercice 1",
   "guid": "6166653a-d7f5-4391-82a9-bffd90d65573",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/6166653a-d7f5-4391-82a9-bffd90d65573/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/6166653a-d7f5-4391-82a9-bffd90d65573/thumbnail.jpg",
   "durationSec": 1612,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 1242599412,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/6166653a-d7f5-4391-82a9-bffd90d65573/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/6166653a-d7f5-4391-82a9-bffd90d65573/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/6166653a-d7f5-4391-82a9-bffd90d65573",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "ELINE-ECO-040": {
   "type": "video",
   "title": "exercices TH2 / 02 - [ELINE-ECO-040] Dissertation 1",
   "guid": "89c11528-f5b7-407e-b9b7-b544e3a1082d",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/89c11528-f5b7-407e-b9b7-b544e3a1082d/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/89c11528-f5b7-407e-b9b7-b544e3a1082d/thumbnail.jpg",
   "durationSec": 940,
   "resolutions": "480p,720p,240p,360p",
   "sizeBytes": 654846971,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/89c11528-f5b7-407e-b9b7-b544e3a1082d/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/89c11528-f5b7-407e-b9b7-b544e3a1082d/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/89c11528-f5b7-407e-b9b7-b544e3a1082d",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "ELINE-ECO-041": {
   "type": "video",
   "title": "exercices TH2 / 03 - [ELINE-ECO-041] Dissertation 2",
   "guid": "0d2b4843-d873-4124-9c10-23b6b1f3d567",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/0d2b4843-d873-4124-9c10-23b6b1f3d567/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/0d2b4843-d873-4124-9c10-23b6b1f3d567/thumbnail.jpg",
   "durationSec": 1230,
   "resolutions": "480p,720p,240p,360p",
   "sizeBytes": 794818930,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/0d2b4843-d873-4124-9c10-23b6b1f3d567/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/0d2b4843-d873-4124-9c10-23b6b1f3d567/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/0d2b4843-d873-4124-9c10-23b6b1f3d567",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "ELINE-ECO-042": {
   "type": "pdf",
   "title": "[ELINE-ECO-042] Dissertations 2.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/eline bac/[ELINE-ECO-042] Dissertations 2.pdf",
   "ext": "pdf",
   "sizeBytes": 284620,
   "url": "https://wael-academy-files.b-cdn.net/BAC/eline%20bac/%5BELINE-ECO-042%5D%20Dissertations%202.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "ELINE-ECO-043": {
   "type": "pdf",
   "title": "[ELINE-ECO-043] Dissertations.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/eline bac/[ELINE-ECO-043] Dissertations.pdf",
   "ext": "pdf",
   "sizeBytes": 196719,
   "url": "https://wael-academy-files.b-cdn.net/BAC/eline%20bac/%5BELINE-ECO-043%5D%20Dissertations.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "ELINE-ECO-044": {
   "type": "pdf",
   "title": "[ELINE-ECO-044] Exercice choix économique du producteur-Copy.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/eline bac/[ELINE-ECO-044] Exercice choix économique du producteur-Copy.pdf",
   "ext": "pdf",
   "sizeBytes": 1762801,
   "url": "https://wael-academy-files.b-cdn.net/BAC/eline%20bac/%5BELINE-ECO-044%5D%20Exercice%20choix%20%C3%A9conomique%20du%20producteur-Copy.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "ELINE-ECO-047": {
   "type": "pdf",
   "title": "[ELINE-ECO-047] Exercice sur l’équilibre du producteur-Copy.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/eline bac/[ELINE-ECO-047] Exercice sur l’équilibre du producteur-Copy.pdf",
   "ext": "pdf",
   "sizeBytes": 1295051,
   "url": "https://wael-academy-files.b-cdn.net/BAC/eline%20bac/%5BELINE-ECO-047%5D%20Exercice%20sur%20l%E2%80%99%C3%A9quilibre%20du%20producteur-Copy.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "ELINE-ECO-049": {
   "type": "video",
   "title": "exercices TH2 / 06 - [ELINE-ECO-049] L_équilibre du producteur le reste de l_exercice 3",
   "guid": "538f58de-268d-42e7-8558-5ed72b970c09",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/538f58de-268d-42e7-8558-5ed72b970c09/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/538f58de-268d-42e7-8558-5ed72b970c09/thumbnail.jpg",
   "durationSec": 527,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 385799221,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/538f58de-268d-42e7-8558-5ed72b970c09/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/538f58de-268d-42e7-8558-5ed72b970c09/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/538f58de-268d-42e7-8558-5ed72b970c09",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "ELINE-ECO-053": {
   "type": "pdf",
   "title": "[ELINE-ECO-053] la fonction de la demande-Copy.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/eline bac/[ELINE-ECO-053] la fonction de la demande-Copy.pdf",
   "ext": "pdf",
   "sizeBytes": 586318,
   "url": "https://wael-academy-files.b-cdn.net/BAC/eline%20bac/%5BELINE-ECO-053%5D%20la%20fonction%20de%20la%20demande-Copy.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "ELINE-ECO-054": {
   "type": "video",
   "title": "exercices TH2 / 09 - [ELINE-ECO-054] La fonction de la demande",
   "guid": "a8787c7e-82bb-45b2-ac2c-6e7f1e367087",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/a8787c7e-82bb-45b2-ac2c-6e7f1e367087/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/a8787c7e-82bb-45b2-ac2c-6e7f1e367087/thumbnail.jpg",
   "durationSec": 778,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 423013193,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/a8787c7e-82bb-45b2-ac2c-6e7f1e367087/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/a8787c7e-82bb-45b2-ac2c-6e7f1e367087/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/a8787c7e-82bb-45b2-ac2c-6e7f1e367087",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "ELINE-ECO-055": {
   "type": "pdf",
   "title": "[ELINE-ECO-055] L’équilibre de producteur exercice 3.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/eline bac/[ELINE-ECO-055] L’équilibre de producteur exercice 3.pdf",
   "ext": "pdf",
   "sizeBytes": 1677961,
   "url": "https://wael-academy-files.b-cdn.net/BAC/eline%20bac/%5BELINE-ECO-055%5D%20L%E2%80%99%C3%A9quilibre%20de%20producteur%20exercice%203.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "MAHDI-PHYS-002": {
   "type": "video",
   "title": "Bobine dpx / 01 - [MAHDI-PHYS-002] bobine correction ex n 03",
   "guid": "e4718a09-0474-4002-ac3f-ba9456ddff79",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/e4718a09-0474-4002-ac3f-ba9456ddff79/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/e4718a09-0474-4002-ac3f-ba9456ddff79/thumbnail.jpg",
   "durationSec": 728,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 1173487753,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/e4718a09-0474-4002-ac3f-ba9456ddff79/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/e4718a09-0474-4002-ac3f-ba9456ddff79/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/e4718a09-0474-4002-ac3f-ba9456ddff79",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "MAHDI-PHYS-003": {
   "type": "pdf",
   "title": "[MAHDI-PHYS-003] ex n 01-ex n 02 la bobine.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/mahdi BAC/[MAHDI-PHYS-003] ex n 01-ex n 02 la bobine.pdf",
   "ext": "pdf",
   "sizeBytes": 7715674,
   "url": "https://wael-academy-files.b-cdn.net/BAC/mahdi%20BAC/%5BMAHDI-PHYS-003%5D%20ex%20n%2001-ex%20n%2002%20la%20bobine.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "MAHDI-PHYS-004": {
   "type": "pdf",
   "title": "[MAHDI-PHYS-004] ex n 03 bobine.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/mahdi BAC/[MAHDI-PHYS-004] ex n 03 bobine.pdf",
   "ext": "pdf",
   "sizeBytes": 5558407,
   "url": "https://wael-academy-files.b-cdn.net/BAC/mahdi%20BAC/%5BMAHDI-PHYS-004%5D%20ex%20n%2003%20bobine.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "MAHDI-PHYS-005": {
   "type": "pdf",
   "title": "[MAHDI-PHYS-005] LA BOBINE (avec des notes).pdf",
   "zone": "wael-academy-files",
   "path": "BAC/mahdi BAC/[MAHDI-PHYS-005] LA BOBINE (avec des notes).pdf",
   "ext": "pdf",
   "sizeBytes": 1463373,
   "url": "https://wael-academy-files.b-cdn.net/BAC/mahdi%20BAC/%5BMAHDI-PHYS-005%5D%20LA%20BOBINE%20%28avec%20des%20notes%29.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "MAHDI-PHYS-006": {
   "type": "pdf",
   "title": "[MAHDI-PHYS-006] LA BOBINE (vierge).pdf",
   "zone": "wael-academy-files",
   "path": "BAC/mahdi BAC/[MAHDI-PHYS-006] LA BOBINE (vierge).pdf",
   "ext": "pdf",
   "sizeBytes": 880092,
   "url": "https://wael-academy-files.b-cdn.net/BAC/mahdi%20BAC/%5BMAHDI-PHYS-006%5D%20LA%20BOBINE%20%28vierge%29.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "MAHDI-PHYS-007": {
   "type": "video",
   "title": "Bobine dpx / 02 - [MAHDI-PHYS-007] la bobine correction ex n 01",
   "guid": "6d0c95fd-7176-4f8f-ba05-cf5d7d8146d2",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/6d0c95fd-7176-4f8f-ba05-cf5d7d8146d2/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/6d0c95fd-7176-4f8f-ba05-cf5d7d8146d2/thumbnail.jpg",
   "durationSec": 681,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 959808868,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/6d0c95fd-7176-4f8f-ba05-cf5d7d8146d2/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/6d0c95fd-7176-4f8f-ba05-cf5d7d8146d2/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/6d0c95fd-7176-4f8f-ba05-cf5d7d8146d2",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "MAHDI-PHYS-008": {
   "type": "video",
   "title": "Bobine dpx / 03 - [MAHDI-PHYS-008] la bobine correction ex n 02",
   "guid": "760a9124-f9fa-44ac-8b58-3f759b3cf7df",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/760a9124-f9fa-44ac-8b58-3f759b3cf7df/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/760a9124-f9fa-44ac-8b58-3f759b3cf7df/thumbnail.jpg",
   "durationSec": 679,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 1188959245,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/760a9124-f9fa-44ac-8b58-3f759b3cf7df/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/760a9124-f9fa-44ac-8b58-3f759b3cf7df/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/760a9124-f9fa-44ac-8b58-3f759b3cf7df",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "MAHDI-PHYS-009": {
   "type": "video",
   "title": "Bobine dpx / 04 - [MAHDI-PHYS-009] la bobine",
   "guid": "bc53ca4e-62e0-4703-ad84-b255ceb50fd5",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/bc53ca4e-62e0-4703-ad84-b255ceb50fd5/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/bc53ca4e-62e0-4703-ad84-b255ceb50fd5/thumbnail.jpg",
   "durationSec": 1622,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 2828150024,
   "status": "ready",
   "duplicateCount": 2,
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/bc53ca4e-62e0-4703-ad84-b255ceb50fd5/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/bc53ca4e-62e0-4703-ad84-b255ceb50fd5/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/bc53ca4e-62e0-4703-ad84-b255ceb50fd5",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "MAHDI-PHYS-010": {
   "type": "video",
   "title": "cinétique chimique dpx / 01 - [MAHDI-PHYS-010] avancement d'une réaction chimique",
   "guid": "ec17afb0-fcbf-45bb-a4b2-00b3444935ca",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/ec17afb0-fcbf-45bb-a4b2-00b3444935ca/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/ec17afb0-fcbf-45bb-a4b2-00b3444935ca/thumbnail.jpg",
   "durationSec": 732,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 1117892013,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/ec17afb0-fcbf-45bb-a4b2-00b3444935ca/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/ec17afb0-fcbf-45bb-a4b2-00b3444935ca/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/ec17afb0-fcbf-45bb-a4b2-00b3444935ca",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "MAHDI-PHYS-011": {
   "type": "video",
   "title": "cinétique chimique dpx / 02 - [MAHDI-PHYS-011] cinetique chimique correction EX n 03",
   "guid": "ca396cb6-4470-40d1-8750-b278370678a1",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/ca396cb6-4470-40d1-8750-b278370678a1/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/ca396cb6-4470-40d1-8750-b278370678a1/thumbnail.jpg",
   "durationSec": 781,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 1244971386,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/ca396cb6-4470-40d1-8750-b278370678a1/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/ca396cb6-4470-40d1-8750-b278370678a1/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/ca396cb6-4470-40d1-8750-b278370678a1",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "MAHDI-PHYS-012": {
   "type": "video",
   "title": "cinétique chimique dpx / 03 - [MAHDI-PHYS-012] cinétique chimique correction ex n 02",
   "guid": "d4a9c52d-4c3f-4d66-9761-04f465589b3e",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/d4a9c52d-4c3f-4d66-9761-04f465589b3e/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/d4a9c52d-4c3f-4d66-9761-04f465589b3e/thumbnail.jpg",
   "durationSec": 996,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 1446792822,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/d4a9c52d-4c3f-4d66-9761-04f465589b3e/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/d4a9c52d-4c3f-4d66-9761-04f465589b3e/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/d4a9c52d-4c3f-4d66-9761-04f465589b3e",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "MAHDI-PHYS-013": {
   "type": "video",
   "title": "cinétique chimique dpx / 04 - [MAHDI-PHYS-013] cinétique chimique correction EX n 04",
   "guid": "3c1794b1-07df-4b3b-b630-8effa5ea6031",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/3c1794b1-07df-4b3b-b630-8effa5ea6031/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/3c1794b1-07df-4b3b-b630-8effa5ea6031/thumbnail.jpg",
   "durationSec": 527,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 843224524,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/3c1794b1-07df-4b3b-b630-8effa5ea6031/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/3c1794b1-07df-4b3b-b630-8effa5ea6031/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/3c1794b1-07df-4b3b-b630-8effa5ea6031",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "MAHDI-PHYS-014": {
   "type": "video",
   "title": "cinétique chimique dpx / 05 - [MAHDI-PHYS-014] cinétique chimique ex n 01",
   "guid": "3ceb1a9b-889b-4e58-aa10-3329ed6e6139",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/3ceb1a9b-889b-4e58-aa10-3329ed6e6139/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/3ceb1a9b-889b-4e58-aa10-3329ed6e6139/thumbnail.jpg",
   "durationSec": 838,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 1259869928,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/3ceb1a9b-889b-4e58-aa10-3329ed6e6139/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/3ceb1a9b-889b-4e58-aa10-3329ed6e6139/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/3ceb1a9b-889b-4e58-aa10-3329ed6e6139",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "MAHDI-PHYS-015": {
   "type": "video",
   "title": "cinétique chimique dpx / 06 - [MAHDI-PHYS-015] equilibre chimique correction EX n 01",
   "guid": "7b01ab78-dc73-4e36-a7a5-3d16f85128c2",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/7b01ab78-dc73-4e36-a7a5-3d16f85128c2/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/7b01ab78-dc73-4e36-a7a5-3d16f85128c2/thumbnail.jpg",
   "durationSec": 1513,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 2337255639,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/7b01ab78-dc73-4e36-a7a5-3d16f85128c2/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/7b01ab78-dc73-4e36-a7a5-3d16f85128c2/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/7b01ab78-dc73-4e36-a7a5-3d16f85128c2",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "MAHDI-PHYS-016": {
   "type": "video",
   "title": "cinétique chimique dpx / 07 - [MAHDI-PHYS-016] equilibre chimique correction EX n 02",
   "guid": "9ed5447a-7232-44dc-9ec0-f6e8f7c348dd",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/9ed5447a-7232-44dc-9ec0-f6e8f7c348dd/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/9ed5447a-7232-44dc-9ec0-f6e8f7c348dd/thumbnail.jpg",
   "durationSec": 1173,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 1984641113,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/9ed5447a-7232-44dc-9ec0-f6e8f7c348dd/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/9ed5447a-7232-44dc-9ec0-f6e8f7c348dd/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/9ed5447a-7232-44dc-9ec0-f6e8f7c348dd",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "MAHDI-PHYS-017": {
   "type": "video",
   "title": "cinétique chimique dpx / 08 - [MAHDI-PHYS-017] equilibre chimique correction EX n 03",
   "guid": "6600317b-91a4-4e12-9004-5aab97f2f3ea",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/6600317b-91a4-4e12-9004-5aab97f2f3ea/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/6600317b-91a4-4e12-9004-5aab97f2f3ea/thumbnail.jpg",
   "durationSec": 767,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 1128658062,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/6600317b-91a4-4e12-9004-5aab97f2f3ea/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/6600317b-91a4-4e12-9004-5aab97f2f3ea/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/6600317b-91a4-4e12-9004-5aab97f2f3ea",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "MAHDI-PHYS-018": {
   "type": "video",
   "title": "cinétique chimique dpx / 09 - [MAHDI-PHYS-018] loi d'action de masse",
   "guid": "81b5783c-ae22-45bc-87d5-38a3fe0ac765",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/81b5783c-ae22-45bc-87d5-38a3fe0ac765/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/81b5783c-ae22-45bc-87d5-38a3fe0ac765/thumbnail.jpg",
   "durationSec": 194,
   "resolutions": "480p,720p,240p,360p",
   "sizeBytes": 301257466,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/81b5783c-ae22-45bc-87d5-38a3fe0ac765/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/81b5783c-ae22-45bc-87d5-38a3fe0ac765/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/81b5783c-ae22-45bc-87d5-38a3fe0ac765",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "MAHDI-PHYS-019": {
   "type": "video",
   "title": "cinétique chimique dpx / 10 - [MAHDI-PHYS-019] notion equilibre chimique et esterification",
   "guid": "98da7b87-3404-4f49-9737-7b7e215de333",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/98da7b87-3404-4f49-9737-7b7e215de333/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/98da7b87-3404-4f49-9737-7b7e215de333/thumbnail.jpg",
   "durationSec": 691,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 1207128855,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/98da7b87-3404-4f49-9737-7b7e215de333/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/98da7b87-3404-4f49-9737-7b7e215de333/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/98da7b87-3404-4f49-9737-7b7e215de333",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "MAHDI-PHYS-020": {
   "type": "pdf",
   "title": "[MAHDI-PHYS-020] pdf Cinétique chimique - Chapitre 1 - Cours et Exercices.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/mahdi BAC/[MAHDI-PHYS-020] pdf Cinétique chimique - Chapitre 1 - Cours et Exercices.pdf",
   "ext": "pdf",
   "sizeBytes": 3022248,
   "url": "https://wael-academy-files.b-cdn.net/BAC/mahdi%20BAC/%5BMAHDI-PHYS-020%5D%20pdf%20Cin%C3%A9tique%20chimique%20-%20Chapitre%201%20-%20Cours%20et%20Exercices.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "MAHDI-PHYS-021": {
   "type": "pdf",
   "title": "[MAHDI-PHYS-021] pdf L'équilibre chimique BAC.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/mahdi BAC/[MAHDI-PHYS-021] pdf L'équilibre chimique BAC.pdf",
   "ext": "pdf",
   "sizeBytes": 3771654,
   "url": "https://wael-academy-files.b-cdn.net/BAC/mahdi%20BAC/%5BMAHDI-PHYS-021%5D%20pdf%20L%27%C3%A9quilibre%20chimique%20BAC.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "MAHDI-PHYS-022": {
   "type": "video",
   "title": "cinétique chimique dpx / 11 - [MAHDI-PHYS-022] vitesse d'une réaction chimique",
   "guid": "195dd865-8f27-4ebc-bfbd-9f87b6daa493",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/195dd865-8f27-4ebc-bfbd-9f87b6daa493/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/195dd865-8f27-4ebc-bfbd-9f87b6daa493/thumbnail.jpg",
   "durationSec": 716,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 1250264960,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/195dd865-8f27-4ebc-bfbd-9f87b6daa493/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/195dd865-8f27-4ebc-bfbd-9f87b6daa493/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/195dd865-8f27-4ebc-bfbd-9f87b6daa493",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "MAHDI-PHYS-023": {
   "type": "pdf",
   "title": "[MAHDI-PHYS-023] chapitre 01 BS.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/mahdi BAC/[MAHDI-PHYS-023] chapitre 01 BS.pdf",
   "ext": "pdf",
   "sizeBytes": 727991,
   "url": "https://wael-academy-files.b-cdn.net/BAC/mahdi%20BAC/%5BMAHDI-PHYS-023%5D%20chapitre%2001%20BS.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "MAHDI-PHYS-024": {
   "type": "video",
   "title": "condensateur dpx / 01 - [MAHDI-PHYS-024] condensateur correction ex n 01",
   "guid": "a7fc499a-83de-40ba-9f8e-b0899daf8629",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/a7fc499a-83de-40ba-9f8e-b0899daf8629/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/a7fc499a-83de-40ba-9f8e-b0899daf8629/thumbnail.jpg",
   "durationSec": 236,
   "resolutions": "480p,720p,240p,360p",
   "sizeBytes": 309587027,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/a7fc499a-83de-40ba-9f8e-b0899daf8629/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/a7fc499a-83de-40ba-9f8e-b0899daf8629/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/a7fc499a-83de-40ba-9f8e-b0899daf8629",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "MAHDI-PHYS-025": {
   "type": "video",
   "title": "condensateur dpx / 02 - [MAHDI-PHYS-025] condensateur correction exercice n 02",
   "guid": "ad4955a2-d467-4858-a8d5-894ef0fdc123",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/ad4955a2-d467-4858-a8d5-894ef0fdc123/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/ad4955a2-d467-4858-a8d5-894ef0fdc123/thumbnail.jpg",
   "durationSec": 266,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 432894214,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/ad4955a2-d467-4858-a8d5-894ef0fdc123/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/ad4955a2-d467-4858-a8d5-894ef0fdc123/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/ad4955a2-d467-4858-a8d5-894ef0fdc123",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "MAHDI-PHYS-026": {
   "type": "video",
   "title": "condensateur dpx / 03 - [MAHDI-PHYS-026] le condensateur  etude exprémentale",
   "guid": "f3e9f611-0741-47dc-b7e3-c35fa1e451de",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/f3e9f611-0741-47dc-b7e3-c35fa1e451de/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/f3e9f611-0741-47dc-b7e3-c35fa1e451de/thumbnail.jpg",
   "durationSec": 1341,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 2121075080,
   "status": "ready",
   "duplicateCount": 2,
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/f3e9f611-0741-47dc-b7e3-c35fa1e451de/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/f3e9f611-0741-47dc-b7e3-c35fa1e451de/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/f3e9f611-0741-47dc-b7e3-c35fa1e451de",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "MAHDI-PHYS-027": {
   "type": "video",
   "title": "condensateur dpx / 04 - [MAHDI-PHYS-027] le condensateur correction exercice 03",
   "guid": "e705960c-b781-4ffb-9373-8a8e7b5ee609",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/e705960c-b781-4ffb-9373-8a8e7b5ee609/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/e705960c-b781-4ffb-9373-8a8e7b5ee609/thumbnail.jpg",
   "durationSec": 535,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 773146083,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/e705960c-b781-4ffb-9373-8a8e7b5ee609/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/e705960c-b781-4ffb-9373-8a8e7b5ee609/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/e705960c-b781-4ffb-9373-8a8e7b5ee609",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "MAHDI-PHYS-028": {
   "type": "video",
   "title": "condensateur dpx / 05 - [MAHDI-PHYS-028] le condensateur correction exercice n 04",
   "guid": "b1e25942-f830-4cc4-8556-ac120e2f3c5c",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/b1e25942-f830-4cc4-8556-ac120e2f3c5c/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/b1e25942-f830-4cc4-8556-ac120e2f3c5c/thumbnail.jpg",
   "durationSec": 212,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 233992572,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/b1e25942-f830-4cc4-8556-ac120e2f3c5c/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/b1e25942-f830-4cc4-8556-ac120e2f3c5c/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/b1e25942-f830-4cc4-8556-ac120e2f3c5c",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "MAHDI-PHYS-029": {
   "type": "video",
   "title": "condensateur dpx / 06 - [MAHDI-PHYS-029] le condensateur etude théorique",
   "guid": "e328cb19-9bac-4c81-a5a2-68f954fd6630",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/e328cb19-9bac-4c81-a5a2-68f954fd6630/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/e328cb19-9bac-4c81-a5a2-68f954fd6630/thumbnail.jpg",
   "durationSec": 713,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 1311673626,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/e328cb19-9bac-4c81-a5a2-68f954fd6630/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/e328cb19-9bac-4c81-a5a2-68f954fd6630/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/e328cb19-9bac-4c81-a5a2-68f954fd6630",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "MAHDI-PHYS-030": {
   "type": "pdf",
   "title": "[MAHDI-PHYS-030] pdf le condensateur (correx ex).pdf",
   "zone": "wael-academy-files",
   "path": "BAC/mahdi BAC/[MAHDI-PHYS-030] pdf le condensateur (correx ex).pdf",
   "ext": "pdf",
   "sizeBytes": 2180830,
   "url": "https://wael-academy-files.b-cdn.net/BAC/mahdi%20BAC/%5BMAHDI-PHYS-030%5D%20pdf%20le%20condensateur%20%28correx%20ex%29.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "MAHDI-PHYS-031": {
   "type": "pdf",
   "title": "[MAHDI-PHYS-031] correction ex 01 oscillations libres amortie.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/mahdi BAC/[MAHDI-PHYS-031] correction ex 01 oscillations libres amortie.pdf",
   "ext": "pdf",
   "sizeBytes": 6824947,
   "url": "https://wael-academy-files.b-cdn.net/BAC/mahdi%20BAC/%5BMAHDI-PHYS-031%5D%20correction%20ex%2001%20oscillations%20libres%20amortie.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "MAHDI-PHYS-032": {
   "type": "pdf",
   "title": "[MAHDI-PHYS-032] correction ex 02_ex 03 oscillations libres amorties.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/mahdi BAC/[MAHDI-PHYS-032] correction ex 02_ex 03 oscillations libres amorties.pdf",
   "ext": "pdf",
   "sizeBytes": 7672431,
   "url": "https://wael-academy-files.b-cdn.net/BAC/mahdi%20BAC/%5BMAHDI-PHYS-032%5D%20correction%20ex%2002_ex%2003%20oscillations%20libres%20amorties.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "MAHDI-PHYS-033": {
   "type": "video",
   "title": "oscillations libres amorties dpx / 01 - [MAHDI-PHYS-033] oscillatations amorties etude exprémentale",
   "guid": "2ad0f303-3138-4b8a-a0a3-4f4bebadf117",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/2ad0f303-3138-4b8a-a0a3-4f4bebadf117/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/2ad0f303-3138-4b8a-a0a3-4f4bebadf117/thumbnail.jpg",
   "durationSec": 791,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 1193238781,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/2ad0f303-3138-4b8a-a0a3-4f4bebadf117/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/2ad0f303-3138-4b8a-a0a3-4f4bebadf117/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/2ad0f303-3138-4b8a-a0a3-4f4bebadf117",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "MAHDI-PHYS-034": {
   "type": "video",
   "title": "oscillations libres amorties dpx / 02 - [MAHDI-PHYS-034] oscillations amorties correction EX n 01",
   "guid": "6cf7bc07-127f-41f1-9e87-f2e0dc6c78da",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/6cf7bc07-127f-41f1-9e87-f2e0dc6c78da/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/6cf7bc07-127f-41f1-9e87-f2e0dc6c78da/thumbnail.jpg",
   "durationSec": 1048,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 2005682381,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/6cf7bc07-127f-41f1-9e87-f2e0dc6c78da/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/6cf7bc07-127f-41f1-9e87-f2e0dc6c78da/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/6cf7bc07-127f-41f1-9e87-f2e0dc6c78da",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "MAHDI-PHYS-035": {
   "type": "video",
   "title": "oscillations libres amorties dpx / 03 - [MAHDI-PHYS-035] oscillations amorties correction EX n 02",
   "guid": "3eb22385-c6d4-4174-8dc7-a118a176ae67",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/3eb22385-c6d4-4174-8dc7-a118a176ae67/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/3eb22385-c6d4-4174-8dc7-a118a176ae67/thumbnail.jpg",
   "durationSec": 573,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 977034532,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/3eb22385-c6d4-4174-8dc7-a118a176ae67/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/3eb22385-c6d4-4174-8dc7-a118a176ae67/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/3eb22385-c6d4-4174-8dc7-a118a176ae67",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "MAHDI-PHYS-036": {
   "type": "video",
   "title": "oscillations libres amorties dpx / 04 - [MAHDI-PHYS-036] oscillations amorties correction EX n 03",
   "guid": "9cee2ea3-2d1e-4e7e-9f11-6a335dc8b330",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/9cee2ea3-2d1e-4e7e-9f11-6a335dc8b330/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/9cee2ea3-2d1e-4e7e-9f11-6a335dc8b330/thumbnail.jpg",
   "durationSec": 714,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 1386469743,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/9cee2ea3-2d1e-4e7e-9f11-6a335dc8b330/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/9cee2ea3-2d1e-4e7e-9f11-6a335dc8b330/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/9cee2ea3-2d1e-4e7e-9f11-6a335dc8b330",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "MAHDI-PHYS-037": {
   "type": "video",
   "title": "oscillations libres amorties dpx / 05 - [MAHDI-PHYS-037] oscillations amorties etude théorique",
   "guid": "6d202ec5-1c84-4e65-a005-074d6065d9b1",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/6d202ec5-1c84-4e65-a005-074d6065d9b1/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/6d202ec5-1c84-4e65-a005-074d6065d9b1/thumbnail.jpg",
   "durationSec": 1135,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 2316585335,
   "status": "ready",
   "duplicateCount": 2,
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/6d202ec5-1c84-4e65-a005-074d6065d9b1/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/6d202ec5-1c84-4e65-a005-074d6065d9b1/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/6d202ec5-1c84-4e65-a005-074d6065d9b1",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "MAHDI-PHYS-038": {
   "type": "pdf",
   "title": "[MAHDI-PHYS-038] OSCILLATIONS ELECTRIQUES LIBRES AMORTIES pdf.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/mahdi BAC/[MAHDI-PHYS-038] OSCILLATIONS ELECTRIQUES LIBRES AMORTIES pdf.pdf",
   "ext": "pdf",
   "sizeBytes": 2272422,
   "url": "https://wael-academy-files.b-cdn.net/BAC/mahdi%20BAC/%5BMAHDI-PHYS-038%5D%20OSCILLATIONS%20ELECTRIQUES%20LIBRES%20AMORTIES%20pdf.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "MAHDI-PHYS-039": {
   "type": "pdf",
   "title": "[MAHDI-PHYS-039] O oSCILLATIONS ELECTRIQUES LIBRES NON AMORTIES pdf.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/mahdi BAC/[MAHDI-PHYS-039] O oSCILLATIONS ELECTRIQUES LIBRES NON AMORTIES pdf.pdf",
   "ext": "pdf",
   "sizeBytes": 3325354,
   "url": "https://wael-academy-files.b-cdn.net/BAC/mahdi%20BAC/%5BMAHDI-PHYS-039%5D%20O%20oSCILLATIONS%20ELECTRIQUES%20LIBRES%20NON%20AMORTIES%20pdf.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "MAHDI-PHYS-040": {
   "type": "pdf",
   "title": "[MAHDI-PHYS-040] osc non amorties ex n 01-ex n 02.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/mahdi BAC/[MAHDI-PHYS-040] osc non amorties ex n 01-ex n 02.pdf",
   "ext": "pdf",
   "sizeBytes": 10627885,
   "url": "https://wael-academy-files.b-cdn.net/BAC/mahdi%20BAC/%5BMAHDI-PHYS-040%5D%20osc%20non%20amorties%20ex%20n%2001-ex%20n%2002.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "MAHDI-PHYS-041": {
   "type": "pdf",
   "title": "[MAHDI-PHYS-041] osc non amorties ex n 03 - ex n 04.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/mahdi BAC/[MAHDI-PHYS-041] osc non amorties ex n 03 - ex n 04.pdf",
   "ext": "pdf",
   "sizeBytes": 7315088,
   "url": "https://wael-academy-files.b-cdn.net/BAC/mahdi%20BAC/%5BMAHDI-PHYS-041%5D%20osc%20non%20amorties%20ex%20n%2003%20-%20ex%20n%2004.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "MAHDI-PHYS-042": {
   "type": "pdf",
   "title": "[MAHDI-PHYS-042] osc non amorties ex n 05.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/mahdi BAC/[MAHDI-PHYS-042] osc non amorties ex n 05.pdf",
   "ext": "pdf",
   "sizeBytes": 5855696,
   "url": "https://wael-academy-files.b-cdn.net/BAC/mahdi%20BAC/%5BMAHDI-PHYS-042%5D%20osc%20non%20amorties%20ex%20n%2005.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "MAHDI-PHYS-043": {
   "type": "video",
   "title": "oscillations non amorties / 01 - [MAHDI-PHYS-043] oscillation non amorties correction EX n 04",
   "guid": "3b5f9e87-5992-4f4d-ad2f-38f3bf90738d",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/3b5f9e87-5992-4f4d-ad2f-38f3bf90738d/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/3b5f9e87-5992-4f4d-ad2f-38f3bf90738d/thumbnail.jpg",
   "durationSec": 940,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 1597059285,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/3b5f9e87-5992-4f4d-ad2f-38f3bf90738d/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/3b5f9e87-5992-4f4d-ad2f-38f3bf90738d/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/3b5f9e87-5992-4f4d-ad2f-38f3bf90738d",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "MAHDI-PHYS-044": {
   "type": "video",
   "title": "oscillations non amorties / 02 - [MAHDI-PHYS-044] oscillation non amorties correction EX n 05",
   "guid": "6f687820-5ca8-4e14-9e0f-2677fd5f98b8",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/6f687820-5ca8-4e14-9e0f-2677fd5f98b8/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/6f687820-5ca8-4e14-9e0f-2677fd5f98b8/thumbnail.jpg",
   "durationSec": 674,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 1174793573,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/6f687820-5ca8-4e14-9e0f-2677fd5f98b8/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/6f687820-5ca8-4e14-9e0f-2677fd5f98b8/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/6f687820-5ca8-4e14-9e0f-2677fd5f98b8",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "MAHDI-PHYS-045": {
   "type": "video",
   "title": "oscillations non amorties / 03 - [MAHDI-PHYS-045] oscillations entretenues correction EX  n 03",
   "guid": "a9b1dee2-58c7-4d43-97db-6b0beae9d9a6",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/a9b1dee2-58c7-4d43-97db-6b0beae9d9a6/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/a9b1dee2-58c7-4d43-97db-6b0beae9d9a6/thumbnail.jpg",
   "durationSec": 179,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 360382145,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/a9b1dee2-58c7-4d43-97db-6b0beae9d9a6/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/a9b1dee2-58c7-4d43-97db-6b0beae9d9a6/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/a9b1dee2-58c7-4d43-97db-6b0beae9d9a6",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "MAHDI-PHYS-046": {
   "type": "video",
   "title": "oscillations non amorties / 04 - [MAHDI-PHYS-046] oscillations entretenues correction EX n 01",
   "guid": "6fced2e7-2bd2-4d8c-9079-4153743efcad",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/6fced2e7-2bd2-4d8c-9079-4153743efcad/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/6fced2e7-2bd2-4d8c-9079-4153743efcad/thumbnail.jpg",
   "durationSec": 337,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 504881175,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/6fced2e7-2bd2-4d8c-9079-4153743efcad/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/6fced2e7-2bd2-4d8c-9079-4153743efcad/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/6fced2e7-2bd2-4d8c-9079-4153743efcad",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "MAHDI-PHYS-047": {
   "type": "video",
   "title": "oscillations non amorties / 05 - [MAHDI-PHYS-047] oscillations entretenues correction EX n 02",
   "guid": "e08ef4d6-ee3f-43d0-b2d0-3149a4dba26f",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/e08ef4d6-ee3f-43d0-b2d0-3149a4dba26f/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/e08ef4d6-ee3f-43d0-b2d0-3149a4dba26f/thumbnail.jpg",
   "durationSec": 107,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 147443016,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/e08ef4d6-ee3f-43d0-b2d0-3149a4dba26f/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/e08ef4d6-ee3f-43d0-b2d0-3149a4dba26f/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/e08ef4d6-ee3f-43d0-b2d0-3149a4dba26f",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "MAHDI-PHYS-048": {
   "type": "video",
   "title": "oscillations non amorties / 06 - [MAHDI-PHYS-048] oscillations entretenues correction EX n 04",
   "guid": "87c8067d-e007-4019-875b-933cace99679",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/87c8067d-e007-4019-875b-933cace99679/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/87c8067d-e007-4019-875b-933cace99679/thumbnail.jpg",
   "durationSec": 239,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 329435225,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/87c8067d-e007-4019-875b-933cace99679/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/87c8067d-e007-4019-875b-933cace99679/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/87c8067d-e007-4019-875b-933cace99679",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "MAHDI-PHYS-049": {
   "type": "video",
   "title": "oscillations non amorties / 07 - [MAHDI-PHYS-049] oscillations entretenues cours",
   "guid": "6844cee0-f705-4764-a189-2140f8d85eb7",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/6844cee0-f705-4764-a189-2140f8d85eb7/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/6844cee0-f705-4764-a189-2140f8d85eb7/thumbnail.jpg",
   "durationSec": 878,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 1329808742,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/6844cee0-f705-4764-a189-2140f8d85eb7/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/6844cee0-f705-4764-a189-2140f8d85eb7/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/6844cee0-f705-4764-a189-2140f8d85eb7",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "MAHDI-PHYS-050": {
   "type": "video",
   "title": "oscillations non amorties / 08 - [MAHDI-PHYS-050] oscillations non amortie etude théorique partie 1 mp4",
   "guid": "142d80ca-8a4f-423c-b9f5-3d19359d89ea",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/142d80ca-8a4f-423c-b9f5-3d19359d89ea/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/142d80ca-8a4f-423c-b9f5-3d19359d89ea/thumbnail.jpg",
   "durationSec": 1696,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 3328045370,
   "status": "ready",
   "duplicateCount": 2,
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/142d80ca-8a4f-423c-b9f5-3d19359d89ea/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/142d80ca-8a4f-423c-b9f5-3d19359d89ea/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/142d80ca-8a4f-423c-b9f5-3d19359d89ea",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "MAHDI-PHYS-051": {
   "type": "video",
   "title": "oscillations non amorties / 09 - [MAHDI-PHYS-051] oscillations non amorties correction EX n 01",
   "guid": "989e82ad-2991-4524-9612-9294d6be0bfc",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/989e82ad-2991-4524-9612-9294d6be0bfc/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/989e82ad-2991-4524-9612-9294d6be0bfc/thumbnail.jpg",
   "durationSec": 918,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 1613653714,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/989e82ad-2991-4524-9612-9294d6be0bfc/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/989e82ad-2991-4524-9612-9294d6be0bfc/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/989e82ad-2991-4524-9612-9294d6be0bfc",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "MAHDI-PHYS-052": {
   "type": "video",
   "title": "oscillations non amorties / 10 - [MAHDI-PHYS-052] oscillations non amorties correction EX n 03",
   "guid": "c39c85c1-91cd-4fba-a085-8ae2111fce34",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/c39c85c1-91cd-4fba-a085-8ae2111fce34/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/c39c85c1-91cd-4fba-a085-8ae2111fce34/thumbnail.jpg",
   "durationSec": 704,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 1211304870,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/c39c85c1-91cd-4fba-a085-8ae2111fce34/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/c39c85c1-91cd-4fba-a085-8ae2111fce34/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/c39c85c1-91cd-4fba-a085-8ae2111fce34",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "MAHDI-PHYS-053": {
   "type": "video",
   "title": "oscillations non amorties / 11 - [MAHDI-PHYS-053] oscillations non amorties etude théoerique partie 2 p4",
   "guid": "3d6809a6-8f8c-4901-9744-a5ecab19994f",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/3d6809a6-8f8c-4901-9744-a5ecab19994f/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/3d6809a6-8f8c-4901-9744-a5ecab19994f/thumbnail.jpg",
   "durationSec": 785,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 1476308539,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/3d6809a6-8f8c-4901-9744-a5ecab19994f/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/3d6809a6-8f8c-4901-9744-a5ecab19994f/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/3d6809a6-8f8c-4901-9744-a5ecab19994f",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "MAHDI-PHYS-054": {
   "type": "video",
   "title": "oscillations non amorties / 12 - [MAHDI-PHYS-054] oscillations non amorties étude exprémentale",
   "guid": "2700aeb3-2555-4dc2-967b-269192c9e215",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/2700aeb3-2555-4dc2-967b-269192c9e215/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/2700aeb3-2555-4dc2-967b-269192c9e215/thumbnail.jpg",
   "durationSec": 538,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 789182312,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/2700aeb3-2555-4dc2-967b-269192c9e215/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/2700aeb3-2555-4dc2-967b-269192c9e215/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/2700aeb3-2555-4dc2-967b-269192c9e215",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "MAHDI-PHYS-055": {
   "type": "video",
   "title": "oscillations non amorties / 13 - [MAHDI-PHYS-055] oscllations non amortie correction EX n 02",
   "guid": "7be37dbf-c896-4221-b52e-96d1c6f0443f",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/7be37dbf-c896-4221-b52e-96d1c6f0443f/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/7be37dbf-c896-4221-b52e-96d1c6f0443f/thumbnail.jpg",
   "durationSec": 972,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 1988243445,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/7be37dbf-c896-4221-b52e-96d1c6f0443f/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/7be37dbf-c896-4221-b52e-96d1c6f0443f/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/7be37dbf-c896-4221-b52e-96d1c6f0443f",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "MAHDI-PHYS-056": {
   "type": "pdf",
   "title": "[MAHDI-PHYS-056] pdf oscillations electriques entretenues.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/mahdi BAC/[MAHDI-PHYS-056] pdf oscillations electriques entretenues.pdf",
   "ext": "pdf",
   "sizeBytes": 1208853,
   "url": "https://wael-academy-files.b-cdn.net/BAC/mahdi%20BAC/%5BMAHDI-PHYS-056%5D%20pdf%20oscillations%20electriques%20entretenues.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "MAHDI-PHYS-057": {
   "type": "video",
   "title": "RC / 01 - [MAHDI-PHYS-057] correction ex n 01 dipole RC",
   "guid": "ed2ccada-c232-4c6d-96a8-377a34f98e2b",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/ed2ccada-c232-4c6d-96a8-377a34f98e2b/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/ed2ccada-c232-4c6d-96a8-377a34f98e2b/thumbnail.jpg",
   "durationSec": 1275,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 1836659617,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/ed2ccada-c232-4c6d-96a8-377a34f98e2b/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/ed2ccada-c232-4c6d-96a8-377a34f98e2b/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/ed2ccada-c232-4c6d-96a8-377a34f98e2b",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "MAHDI-PHYS-058": {
   "type": "video",
   "title": "RC / 02 - [MAHDI-PHYS-058] correction ex n 02 dipole RC",
   "guid": "a84ead95-d351-45cf-938e-120af012ccc3",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/a84ead95-d351-45cf-938e-120af012ccc3/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/a84ead95-d351-45cf-938e-120af012ccc3/thumbnail.jpg",
   "durationSec": 602,
   "resolutions": "480p,720p,240p,360p",
   "sizeBytes": 1049141001,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/a84ead95-d351-45cf-938e-120af012ccc3/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/a84ead95-d351-45cf-938e-120af012ccc3/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/a84ead95-d351-45cf-938e-120af012ccc3",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "MAHDI-PHYS-059": {
   "type": "video",
   "title": "RC / 03 - [MAHDI-PHYS-059] correction ex n 03 dipole RC",
   "guid": "9748d0c8-3e1e-4998-9143-9be9c332911e",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/9748d0c8-3e1e-4998-9143-9be9c332911e/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/9748d0c8-3e1e-4998-9143-9be9c332911e/thumbnail.jpg",
   "durationSec": 561,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 917447889,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/9748d0c8-3e1e-4998-9143-9be9c332911e/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/9748d0c8-3e1e-4998-9143-9be9c332911e/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/9748d0c8-3e1e-4998-9143-9be9c332911e",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "MAHDI-PHYS-060": {
   "type": "video",
   "title": "RC / 04 - [MAHDI-PHYS-060] correction ex n 04 dipole RC",
   "guid": "1a3b2d03-5145-46f5-bbaa-1f712b0cdcf7",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/1a3b2d03-5145-46f5-bbaa-1f712b0cdcf7/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/1a3b2d03-5145-46f5-bbaa-1f712b0cdcf7/thumbnail.jpg",
   "durationSec": 1024,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 1666934792,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/1a3b2d03-5145-46f5-bbaa-1f712b0cdcf7/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/1a3b2d03-5145-46f5-bbaa-1f712b0cdcf7/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/1a3b2d03-5145-46f5-bbaa-1f712b0cdcf7",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "MAHDI-PHYS-061": {
   "type": "video",
   "title": "RC / 05 - [MAHDI-PHYS-061] correction ex n 05 dipole RC",
   "guid": "3460a865-12e4-4edd-a817-6aa551addc99",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/3460a865-12e4-4edd-a817-6aa551addc99/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/3460a865-12e4-4edd-a817-6aa551addc99/thumbnail.jpg",
   "durationSec": 731,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 1085059894,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/3460a865-12e4-4edd-a817-6aa551addc99/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/3460a865-12e4-4edd-a817-6aa551addc99/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/3460a865-12e4-4edd-a817-6aa551addc99",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "MAHDI-PHYS-062": {
   "type": "video",
   "title": "RC / 06 - [MAHDI-PHYS-062] correction ex n 06 dipole RC",
   "guid": "7c2ecb5e-4210-40c8-8a0c-649485bda753",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/7c2ecb5e-4210-40c8-8a0c-649485bda753/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/7c2ecb5e-4210-40c8-8a0c-649485bda753/thumbnail.jpg",
   "durationSec": 904,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 848714343,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/7c2ecb5e-4210-40c8-8a0c-649485bda753/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/7c2ecb5e-4210-40c8-8a0c-649485bda753/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/7c2ecb5e-4210-40c8-8a0c-649485bda753",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "MAHDI-PHYS-063": {
   "type": "pdf",
   "title": "[MAHDI-PHYS-063] DIPOLE RC (avec notes).pdf",
   "zone": "wael-academy-files",
   "path": "BAC/mahdi BAC/[MAHDI-PHYS-063] DIPOLE RC (avec notes).pdf",
   "ext": "pdf",
   "sizeBytes": 2877608,
   "url": "https://wael-academy-files.b-cdn.net/BAC/mahdi%20BAC/%5BMAHDI-PHYS-063%5D%20DIPOLE%20RC%20%28avec%20notes%29.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "MAHDI-PHYS-064": {
   "type": "pdf",
   "title": "[MAHDI-PHYS-064] DIPOLE RC (vierge).pdf",
   "zone": "wael-academy-files",
   "path": "BAC/mahdi BAC/[MAHDI-PHYS-064] DIPOLE RC (vierge).pdf",
   "ext": "pdf",
   "sizeBytes": 1105202,
   "url": "https://wael-academy-files.b-cdn.net/BAC/mahdi%20BAC/%5BMAHDI-PHYS-064%5D%20DIPOLE%20RC%20%28vierge%29.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "MAHDI-PHYS-065": {
   "type": "video",
   "title": "RC / 07 - [MAHDI-PHYS-065] dipole RC etude théorique ..",
   "guid": "5aa9101b-3d17-4808-8259-d1f9123e3453",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/5aa9101b-3d17-4808-8259-d1f9123e3453/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/5aa9101b-3d17-4808-8259-d1f9123e3453/thumbnail.jpg",
   "durationSec": 2266,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 3879902571,
   "status": "ready",
   "duplicateCount": 2,
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/5aa9101b-3d17-4808-8259-d1f9123e3453/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/5aa9101b-3d17-4808-8259-d1f9123e3453/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/5aa9101b-3d17-4808-8259-d1f9123e3453",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "MAHDI-PHYS-066": {
   "type": "video",
   "title": "RC / 08 - [MAHDI-PHYS-066] dipole RC étude exprémentale",
   "guid": "c5358e77-0b8b-4f71-93f4-8d12fb33202f",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/c5358e77-0b8b-4f71-93f4-8d12fb33202f/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/c5358e77-0b8b-4f71-93f4-8d12fb33202f/thumbnail.jpg",
   "durationSec": 917,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 1111942410,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/c5358e77-0b8b-4f71-93f4-8d12fb33202f/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/c5358e77-0b8b-4f71-93f4-8d12fb33202f/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/c5358e77-0b8b-4f71-93f4-8d12fb33202f",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "MAHDI-PHYS-067": {
   "type": "pdf",
   "title": "[MAHDI-PHYS-067] ex 03-04 dipole rc.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/mahdi BAC/[MAHDI-PHYS-067] ex 03-04 dipole rc.pdf",
   "ext": "pdf",
   "sizeBytes": 7527306,
   "url": "https://wael-academy-files.b-cdn.net/BAC/mahdi%20BAC/%5BMAHDI-PHYS-067%5D%20ex%2003-04%20dipole%20rc.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "MAHDI-PHYS-068": {
   "type": "pdf",
   "title": "[MAHDI-PHYS-068] ex 05-06 dipole RC.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/mahdi BAC/[MAHDI-PHYS-068] ex 05-06 dipole RC.pdf",
   "ext": "pdf",
   "sizeBytes": 6407074,
   "url": "https://wael-academy-files.b-cdn.net/BAC/mahdi%20BAC/%5BMAHDI-PHYS-068%5D%20ex%2005-06%20dipole%20RC.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "MAHDI-PHYS-069": {
   "type": "pdf",
   "title": "[MAHDI-PHYS-069] exercice 01-02 dipole RC.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/mahdi BAC/[MAHDI-PHYS-069] exercice 01-02 dipole RC.pdf",
   "ext": "pdf",
   "sizeBytes": 8615759,
   "url": "https://wael-academy-files.b-cdn.net/BAC/mahdi%20BAC/%5BMAHDI-PHYS-069%5D%20exercice%2001-02%20dipole%20RC.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "MAHDI-PHYS-070": {
   "type": "pdf",
   "title": "[MAHDI-PHYS-070] correction ex 02_ex 03 oscillations libres amorties.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/mahdi BAC/[MAHDI-PHYS-070] correction ex 02_ex 03 oscillations libres amorties.pdf",
   "ext": "pdf",
   "sizeBytes": 7672431,
   "url": "https://wael-academy-files.b-cdn.net/BAC/mahdi%20BAC/%5BMAHDI-PHYS-070%5D%20correction%20ex%2002_ex%2003%20oscillations%20libres%20amorties.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "MAHDI-PHYS-071": {
   "type": "pdf",
   "title": "[MAHDI-PHYS-071] correction ex 03-ex 04 dipole RL.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/mahdi BAC/[MAHDI-PHYS-071] correction ex 03-ex 04 dipole RL.pdf",
   "ext": "pdf",
   "sizeBytes": 5408010,
   "url": "https://wael-academy-files.b-cdn.net/BAC/mahdi%20BAC/%5BMAHDI-PHYS-071%5D%20correction%20ex%2003-ex%2004%20dipole%20RL.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "MAHDI-PHYS-072": {
   "type": "pdf",
   "title": "[MAHDI-PHYS-072] correction ex 05-ex 06 dipole RL.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/mahdi BAC/[MAHDI-PHYS-072] correction ex 05-ex 06 dipole RL.pdf",
   "ext": "pdf",
   "sizeBytes": 7088142,
   "url": "https://wael-academy-files.b-cdn.net/BAC/mahdi%20BAC/%5BMAHDI-PHYS-072%5D%20correction%20ex%2005-ex%2006%20dipole%20RL.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "MAHDI-PHYS-073": {
   "type": "pdf",
   "title": "[MAHDI-PHYS-073] correction ex n 01-ex n 02 dipole RL.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/mahdi BAC/[MAHDI-PHYS-073] correction ex n 01-ex n 02 dipole RL.pdf",
   "ext": "pdf",
   "sizeBytes": 6607138,
   "url": "https://wael-academy-files.b-cdn.net/BAC/mahdi%20BAC/%5BMAHDI-PHYS-073%5D%20correction%20ex%20n%2001-ex%20n%2002%20dipole%20RL.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "MAHDI-PHYS-074": {
   "type": "video",
   "title": "RL / 01 - [MAHDI-PHYS-074] dipole RL  correction EX n 02",
   "guid": "f9a37c17-cd78-459b-a9f7-ddf00e10a780",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/f9a37c17-cd78-459b-a9f7-ddf00e10a780/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/f9a37c17-cd78-459b-a9f7-ddf00e10a780/thumbnail.jpg",
   "durationSec": 576,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 981011145,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/f9a37c17-cd78-459b-a9f7-ddf00e10a780/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/f9a37c17-cd78-459b-a9f7-ddf00e10a780/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/f9a37c17-cd78-459b-a9f7-ddf00e10a780",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "MAHDI-PHYS-075": {
   "type": "video",
   "title": "RL / 02 - [MAHDI-PHYS-075] dipole RL correction EX n 01",
   "guid": "0d383b6b-e8ea-4d54-a588-8f4620660fcf",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/0d383b6b-e8ea-4d54-a588-8f4620660fcf/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/0d383b6b-e8ea-4d54-a588-8f4620660fcf/thumbnail.jpg",
   "durationSec": 1159,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 1926660180,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/0d383b6b-e8ea-4d54-a588-8f4620660fcf/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/0d383b6b-e8ea-4d54-a588-8f4620660fcf/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/0d383b6b-e8ea-4d54-a588-8f4620660fcf",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "MAHDI-PHYS-076": {
   "type": "video",
   "title": "RL / 03 - [MAHDI-PHYS-076] dipole RL correction EX n 03",
   "guid": "24593557-dc0c-4505-924b-3e2d412a20a1",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/24593557-dc0c-4505-924b-3e2d412a20a1/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/24593557-dc0c-4505-924b-3e2d412a20a1/thumbnail.jpg",
   "durationSec": 643,
   "resolutions": "480p,720p,240p,360p",
   "sizeBytes": 1026286520,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/24593557-dc0c-4505-924b-3e2d412a20a1/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/24593557-dc0c-4505-924b-3e2d412a20a1/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/24593557-dc0c-4505-924b-3e2d412a20a1",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "MAHDI-PHYS-077": {
   "type": "video",
   "title": "RL / 04 - [MAHDI-PHYS-077] dipole RL correction EX n 04",
   "guid": "8648544b-3269-401a-8b40-c95ce41f7987",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/8648544b-3269-401a-8b40-c95ce41f7987/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/8648544b-3269-401a-8b40-c95ce41f7987/thumbnail.jpg",
   "durationSec": 620,
   "resolutions": "480p,720p,240p,360p",
   "sizeBytes": 993881415,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/8648544b-3269-401a-8b40-c95ce41f7987/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/8648544b-3269-401a-8b40-c95ce41f7987/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/8648544b-3269-401a-8b40-c95ce41f7987",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "MAHDI-PHYS-078": {
   "type": "video",
   "title": "RL / 05 - [MAHDI-PHYS-078] dipole RL correction EX n 05",
   "guid": "c11b0258-3777-48f5-bf89-59ab4fa67da6",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/c11b0258-3777-48f5-bf89-59ab4fa67da6/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/c11b0258-3777-48f5-bf89-59ab4fa67da6/thumbnail.jpg",
   "durationSec": 870,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 1531692821,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/c11b0258-3777-48f5-bf89-59ab4fa67da6/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/c11b0258-3777-48f5-bf89-59ab4fa67da6/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/c11b0258-3777-48f5-bf89-59ab4fa67da6",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "MAHDI-PHYS-079": {
   "type": "video",
   "title": "RL / 06 - [MAHDI-PHYS-079] dipole RL correction EX n 06",
   "guid": "93bb7650-15a0-414f-b058-d71a56235f0c",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/93bb7650-15a0-414f-b058-d71a56235f0c/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/93bb7650-15a0-414f-b058-d71a56235f0c/thumbnail.jpg",
   "durationSec": 838,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 1415244586,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/93bb7650-15a0-414f-b058-d71a56235f0c/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/93bb7650-15a0-414f-b058-d71a56235f0c/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/93bb7650-15a0-414f-b058-d71a56235f0c",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "MAHDI-PHYS-080": {
   "type": "video",
   "title": "RL / 07 - [MAHDI-PHYS-080] dipole RL etude théorique",
   "guid": "f05dcbf6-eb83-4295-8113-8828df6fe546",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": null,
   "thumbnail": null,
   "durationSec": 0,
   "resolutions": null,
   "sizeBytes": 0,
   "status": "uploadFailed",
   "duplicateCount": 2,
   "url": null,
   "mp4": null,
   "playable": false,
   "urlNote": "INDISPONIBLE dans Bunny (status=uploadFailed, 0 octet) - re-televerser depuis le disque"
  },
  "MAHDI-PHYS-081": {
   "type": "video",
   "title": "RL / 08 - [MAHDI-PHYS-081] dipole RL étude exprementale",
   "guid": "6b46648d-7b20-4f2d-931a-98893b8ca4c3",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/6b46648d-7b20-4f2d-931a-98893b8ca4c3/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/6b46648d-7b20-4f2d-931a-98893b8ca4c3/thumbnail.jpg",
   "durationSec": 921,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 1262151648,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/6b46648d-7b20-4f2d-931a-98893b8ca4c3/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/6b46648d-7b20-4f2d-931a-98893b8ca4c3/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/6b46648d-7b20-4f2d-931a-98893b8ca4c3",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "MAHDI-PHYS-084": {
   "type": "pdf",
   "title": "[MAHDI-PHYS-084] PDF COURS DIPOLE RL.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/mahdi BAC/[MAHDI-PHYS-084] PDF COURS DIPOLE RL.pdf",
   "ext": "pdf",
   "sizeBytes": 2647891,
   "url": "https://wael-academy-files.b-cdn.net/BAC/mahdi%20BAC/%5BMAHDI-PHYS-084%5D%20PDF%20COURS%20DIPOLE%20RL.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "MOHSSEN-SVT-001": {
   "type": "video",
   "title": "trimestre 1 / exercices théme 1 / exercices thème 1 / Exercice typique  homme / 01 - [MOHSSEN-SVT-001] Exercice typique  homme",
   "guid": "e87854af-6d35-4dd3-8f42-87df0ef3ad29",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/e87854af-6d35-4dd3-8f42-87df0ef3ad29/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/e87854af-6d35-4dd3-8f42-87df0ef3ad29/thumbnail.jpg",
   "durationSec": 1010,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 877592819,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/e87854af-6d35-4dd3-8f42-87df0ef3ad29/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/e87854af-6d35-4dd3-8f42-87df0ef3ad29/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/e87854af-6d35-4dd3-8f42-87df0ef3ad29",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "MOHSSEN-SVT-002": {
   "type": "pdf",
   "title": "[MOHSSEN-SVT-002] pdf.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/mohssen SVT/[MOHSSEN-SVT-002] pdf.pdf",
   "ext": "pdf",
   "sizeBytes": 337654,
   "url": "https://wael-academy-files.b-cdn.net/BAC/mohssen%20SVT/%5BMOHSSEN-SVT-002%5D%20pdf.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "MOHSSEN-SVT-003": {
   "type": "video",
   "title": "trimestre 1 / exercices théme 1 / exercices thème 1 / exercice typique femme / 01 - [MOHSSEN-SVT-003] exercice typique femme",
   "guid": "bd99170d-e606-40ed-ae7f-63223317b606",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/bd99170d-e606-40ed-ae7f-63223317b606/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/bd99170d-e606-40ed-ae7f-63223317b606/thumbnail.jpg",
   "durationSec": 387,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 280682734,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/bd99170d-e606-40ed-ae7f-63223317b606/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/bd99170d-e606-40ed-ae7f-63223317b606/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/bd99170d-e606-40ed-ae7f-63223317b606",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "MOHSSEN-SVT-004": {
   "type": "pdf",
   "title": "[MOHSSEN-SVT-004] exercice-femme2023 (1).pdf",
   "zone": "wael-academy-files",
   "path": "BAC/mohssen SVT/[MOHSSEN-SVT-004] exercice-femme2023 (1).pdf",
   "ext": "pdf",
   "sizeBytes": 209229,
   "url": "https://wael-academy-files.b-cdn.net/BAC/mohssen%20SVT/%5BMOHSSEN-SVT-004%5D%20exercice-femme2023%20%281%29.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "MOHSSEN-SVT-005": {
   "type": "video",
   "title": "trimestre 1 / exercices théme 1 / exercices thème 1 / exercice typique procréation / 01 - [MOHSSEN-SVT-005] exercice typique procréation",
   "guid": "b4814556-3eb1-489d-845d-57ed9ff81304",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/b4814556-3eb1-489d-845d-57ed9ff81304/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/b4814556-3eb1-489d-845d-57ed9ff81304/thumbnail.jpg",
   "durationSec": 525,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 466782678,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/b4814556-3eb1-489d-845d-57ed9ff81304/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/b4814556-3eb1-489d-845d-57ed9ff81304/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/b4814556-3eb1-489d-845d-57ed9ff81304",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "MOHSSEN-SVT-006": {
   "type": "pdf",
   "title": "[MOHSSEN-SVT-006] exercice typique procréation .pdf",
   "zone": "wael-academy-files",
   "path": "BAC/mohssen SVT/[MOHSSEN-SVT-006] exercice typique procréation .pdf",
   "ext": "pdf",
   "sizeBytes": 385169,
   "url": "https://wael-academy-files.b-cdn.net/BAC/mohssen%20SVT/%5BMOHSSEN-SVT-006%5D%20exercice%20typique%20procr%C3%A9ation%20.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "MOHSSEN-SVT-007": {
   "type": "pdf",
   "title": "[MOHSSEN-SVT-007] qcm dc 1 2022.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/mohssen SVT/[MOHSSEN-SVT-007] qcm dc 1 2022.pdf",
   "ext": "pdf",
   "sizeBytes": 519894,
   "url": "https://wael-academy-files.b-cdn.net/BAC/mohssen%20SVT/%5BMOHSSEN-SVT-007%5D%20qcm%20dc%201%202022.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "MOHSSEN-SVT-008": {
   "type": "video",
   "title": "trimestre 1 / exercices théme 1 / exercices thème 1 / qcm reproduction humaine et santé / 01 - [MOHSSEN-SVT-008] qcm reproduction humaine et santé",
   "guid": "99b9e3b9-74fe-4448-bd39-27b2d1d7f8aa",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/99b9e3b9-74fe-4448-bd39-27b2d1d7f8aa/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/99b9e3b9-74fe-4448-bd39-27b2d1d7f8aa/thumbnail.jpg",
   "durationSec": 499,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 216459980,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/99b9e3b9-74fe-4448-bd39-27b2d1d7f8aa/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/99b9e3b9-74fe-4448-bd39-27b2d1d7f8aa/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/99b9e3b9-74fe-4448-bd39-27b2d1d7f8aa",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "MOHSSEN-SVT-013": {
   "type": "video",
   "title": "trimestre 1 / exercices théme 2 / exercices génétique formelle / exercice génétique des diploides 1 / 01 - [MOHSSEN-SVT-013] exercice génétique des diploides 1",
   "guid": "a7fedb70-9b56-41f7-9f61-4be7bbc633b3",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/a7fedb70-9b56-41f7-9f61-4be7bbc633b3/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/a7fedb70-9b56-41f7-9f61-4be7bbc633b3/thumbnail.jpg",
   "durationSec": 564,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 390750350,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/a7fedb70-9b56-41f7-9f61-4be7bbc633b3/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/a7fedb70-9b56-41f7-9f61-4be7bbc633b3/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/a7fedb70-9b56-41f7-9f61-4be7bbc633b3",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "MOHSSEN-SVT-014": {
   "type": "pdf",
   "title": "[MOHSSEN-SVT-014] exercice génétique des diploides 1.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/mohssen SVT/[MOHSSEN-SVT-014] exercice génétique des diploides 1.pdf",
   "ext": "pdf",
   "sizeBytes": 230207,
   "url": "https://wael-academy-files.b-cdn.net/BAC/mohssen%20SVT/%5BMOHSSEN-SVT-014%5D%20exercice%20g%C3%A9n%C3%A9tique%20des%20diploides%201.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "MOHSSEN-SVT-015": {
   "type": "video",
   "title": "trimestre 1 / exercices théme 2 / exercices génétique formelle / méthodologie génétique des diploides / 01 - [MOHSSEN-SVT-015] méthodologie génétique des diploides",
   "guid": "b2ef8f81-43dd-46f3-9b5b-ef2fd230b27e",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/b2ef8f81-43dd-46f3-9b5b-ef2fd230b27e/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/b2ef8f81-43dd-46f3-9b5b-ef2fd230b27e/thumbnail.jpg",
   "durationSec": 303,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 243588777,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/b2ef8f81-43dd-46f3-9b5b-ef2fd230b27e/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/b2ef8f81-43dd-46f3-9b5b-ef2fd230b27e/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/b2ef8f81-43dd-46f3-9b5b-ef2fd230b27e",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "MOHSSEN-SVT-016": {
   "type": "pdf",
   "title": "[MOHSSEN-SVT-016] méthodologie génétique des diploides.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/mohssen SVT/[MOHSSEN-SVT-016] méthodologie génétique des diploides.pdf",
   "ext": "pdf",
   "sizeBytes": 462346,
   "url": "https://wael-academy-files.b-cdn.net/BAC/mohssen%20SVT/%5BMOHSSEN-SVT-016%5D%20m%C3%A9thodologie%20g%C3%A9n%C3%A9tique%20des%20diploides.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "MOHSSEN-SVT-018": {
   "type": "video",
   "title": "[MOHSSEN-SVT-018] L1 WA .mp4",
   "guid": "2a055744-7e86-4a46-b5bd-8105ee0f9914",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/2a055744-7e86-4a46-b5bd-8105ee0f9914/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/2a055744-7e86-4a46-b5bd-8105ee0f9914/thumbnail.jpg",
   "durationSec": 1044,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 909426581,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/2a055744-7e86-4a46-b5bd-8105ee0f9914/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/2a055744-7e86-4a46-b5bd-8105ee0f9914/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/2a055744-7e86-4a46-b5bd-8105ee0f9914",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "MOHSSEN-SVT-019": {
   "type": "video",
   "title": "[MOHSSEN-SVT-019] nidation et role du placenta - .mp4",
   "guid": "ca8d6f5b-b8ff-4e08-ba90-e83ccc25b6df",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/ca8d6f5b-b8ff-4e08-ba90-e83ccc25b6df/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/ca8d6f5b-b8ff-4e08-ba90-e83ccc25b6df/thumbnail.jpg",
   "durationSec": 957,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 846757930,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/ca8d6f5b-b8ff-4e08-ba90-e83ccc25b6df/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/ca8d6f5b-b8ff-4e08-ba90-e83ccc25b6df/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/ca8d6f5b-b8ff-4e08-ba90-e83ccc25b6df",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "MOHSSEN-SVT-022": {
   "type": "video",
   "title": "trimestre 1 / théme 1 Reproduction humaine et santé / cours 11 / 01 - [MOHSSEN-SVT-022] Maitrise de la procréation",
   "guid": "abf98db2-2109-49ff-9283-7d1f31b0c7a3",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/abf98db2-2109-49ff-9283-7d1f31b0c7a3/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/abf98db2-2109-49ff-9283-7d1f31b0c7a3/thumbnail.jpg",
   "durationSec": 768,
   "resolutions": "480p,720p,240p,360p",
   "sizeBytes": 564987431,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/abf98db2-2109-49ff-9283-7d1f31b0c7a3/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/abf98db2-2109-49ff-9283-7d1f31b0c7a3/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/abf98db2-2109-49ff-9283-7d1f31b0c7a3",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "MOHSSEN-SVT-023": {
   "type": "pdf",
   "title": "[MOHSSEN-SVT-023] Fonctions des testicules2023.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/mohssen SVT/[MOHSSEN-SVT-023] Fonctions des testicules2023.pdf",
   "ext": "pdf",
   "sizeBytes": 446365,
   "url": "https://wael-academy-files.b-cdn.net/BAC/mohssen%20SVT/%5BMOHSSEN-SVT-023%5D%20Fonctions%20des%20testicules2023.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "MOHSSEN-SVT-024": {
   "type": "video",
   "title": "trimestre 1 / théme 1 Reproduction humaine et santé / cours 2 / 01 - [MOHSSEN-SVT-024] L2 WA",
   "guid": "137cbb5c-575c-4d2d-a47f-729decfcbedb",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/137cbb5c-575c-4d2d-a47f-729decfcbedb/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/137cbb5c-575c-4d2d-a47f-729decfcbedb/thumbnail.jpg",
   "durationSec": 1039,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 779835576,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/137cbb5c-575c-4d2d-a47f-729decfcbedb/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/137cbb5c-575c-4d2d-a47f-729decfcbedb/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/137cbb5c-575c-4d2d-a47f-729decfcbedb",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "MOHSSEN-SVT-025": {
   "type": "video",
   "title": "trimestre 1 / théme 1 Reproduction humaine et santé / cours 3 / 01 - [MOHSSEN-SVT-025] L3",
   "guid": "a46996aa-6689-45f5-9081-fc3597e9bbb6",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/a46996aa-6689-45f5-9081-fc3597e9bbb6/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/a46996aa-6689-45f5-9081-fc3597e9bbb6/thumbnail.jpg",
   "durationSec": 1086,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 874168172,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/a46996aa-6689-45f5-9081-fc3597e9bbb6/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/a46996aa-6689-45f5-9081-fc3597e9bbb6/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/a46996aa-6689-45f5-9081-fc3597e9bbb6",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "MOHSSEN-SVT-026": {
   "type": "pdf",
   "title": "[MOHSSEN-SVT-026] L3 controle de l_activite testiculaire cours .pdf",
   "zone": "wael-academy-files",
   "path": "BAC/mohssen SVT/[MOHSSEN-SVT-026] L3 controle de l_activite testiculaire cours .pdf",
   "ext": "pdf",
   "sizeBytes": 443645,
   "url": "https://wael-academy-files.b-cdn.net/BAC/mohssen%20SVT/%5BMOHSSEN-SVT-026%5D%20L3%20controle%20de%20l_activite%20testiculaire%20cours%20.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "MOHSSEN-SVT-027": {
   "type": "video",
   "title": "trimestre 1 / théme 1 Reproduction humaine et santé / cours 4 / 01 - [MOHSSEN-SVT-027] L4    La fonction reproductrice chez la femme - Copie",
   "guid": "e66f14d2-ef88-4614-8c52-01debf0e004c",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/e66f14d2-ef88-4614-8c52-01debf0e004c/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/e66f14d2-ef88-4614-8c52-01debf0e004c/thumbnail.jpg",
   "durationSec": 750,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 702459795,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/e66f14d2-ef88-4614-8c52-01debf0e004c/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/e66f14d2-ef88-4614-8c52-01debf0e004c/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/e66f14d2-ef88-4614-8c52-01debf0e004c",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "MOHSSEN-SVT-028": {
   "type": "pdf",
   "title": "[MOHSSEN-SVT-028] la fonction reproductrice chez la femme .pdf",
   "zone": "wael-academy-files",
   "path": "BAC/mohssen SVT/[MOHSSEN-SVT-028] la fonction reproductrice chez la femme .pdf",
   "ext": "pdf",
   "sizeBytes": 763248,
   "url": "https://wael-academy-files.b-cdn.net/BAC/mohssen%20SVT/%5BMOHSSEN-SVT-028%5D%20la%20fonction%20reproductrice%20chez%20la%20femme%20.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "MOHSSEN-SVT-029": {
   "type": "video",
   "title": "[MOHSSEN-SVT-029] L5    La fonction reproductrice chez la femme.mp4",
   "guid": "49d68243-31df-45c8-b80e-1e18e005dad7",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/49d68243-31df-45c8-b80e-1e18e005dad7/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/49d68243-31df-45c8-b80e-1e18e005dad7/thumbnail.jpg",
   "durationSec": 847,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 674909860,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/49d68243-31df-45c8-b80e-1e18e005dad7/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/49d68243-31df-45c8-b80e-1e18e005dad7/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/49d68243-31df-45c8-b80e-1e18e005dad7",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "MOHSSEN-SVT-031": {
   "type": "pdf",
   "title": "[MOHSSEN-SVT-031] cycles sexuls .pdf",
   "zone": "wael-academy-files",
   "path": "BAC/mohssen SVT/[MOHSSEN-SVT-031] cycles sexuls .pdf",
   "ext": "pdf",
   "sizeBytes": 715699,
   "url": "https://wael-academy-files.b-cdn.net/BAC/mohssen%20SVT/%5BMOHSSEN-SVT-031%5D%20cycles%20sexuls%20.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "MOHSSEN-SVT-032": {
   "type": "video",
   "title": "trimestre 1 / théme 1 Reproduction humaine et santé / cours 6 / 01 - [MOHSSEN-SVT-032] L6 cycle sexuels",
   "guid": "d527ba2c-29fa-4b36-ab99-0958352c8aeb",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/d527ba2c-29fa-4b36-ab99-0958352c8aeb/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/d527ba2c-29fa-4b36-ab99-0958352c8aeb/thumbnail.jpg",
   "durationSec": 914,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 940327677,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/d527ba2c-29fa-4b36-ab99-0958352c8aeb/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/d527ba2c-29fa-4b36-ab99-0958352c8aeb/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/d527ba2c-29fa-4b36-ab99-0958352c8aeb",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "MOHSSEN-SVT-033": {
   "type": "pdf",
   "title": "[MOHSSEN-SVT-033] cycle ovarien hormonal202.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/mohssen SVT/[MOHSSEN-SVT-033] cycle ovarien hormonal202.pdf",
   "ext": "pdf",
   "sizeBytes": 311200,
   "url": "https://wael-academy-files.b-cdn.net/BAC/mohssen%20SVT/%5BMOHSSEN-SVT-033%5D%20cycle%20ovarien%20hormonal202.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "MOHSSEN-SVT-034": {
   "type": "video",
   "title": "trimestre 1 / théme 1 Reproduction humaine et santé / cours 7 / 01 - [MOHSSEN-SVT-034] L7 cycle ovarien hormonal",
   "guid": "8867eab1-e468-48ed-b289-82e87ed374c6",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/8867eab1-e468-48ed-b289-82e87ed374c6/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/8867eab1-e468-48ed-b289-82e87ed374c6/thumbnail.jpg",
   "durationSec": 626,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 517632198,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/8867eab1-e468-48ed-b289-82e87ed374c6/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/8867eab1-e468-48ed-b289-82e87ed374c6/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/8867eab1-e468-48ed-b289-82e87ed374c6",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "MOHSSEN-SVT-036": {
   "type": "video",
   "title": "[MOHSSEN-SVT-036] régulation femme.mp4",
   "guid": "5ca71864-cbca-4391-921b-5a8b024ee26d",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/5ca71864-cbca-4391-921b-5a8b024ee26d/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/5ca71864-cbca-4391-921b-5a8b024ee26d/thumbnail.jpg",
   "durationSec": 1170,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 914575494,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/5ca71864-cbca-4391-921b-5a8b024ee26d/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/5ca71864-cbca-4391-921b-5a8b024ee26d/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/5ca71864-cbca-4391-921b-5a8b024ee26d",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "MOHSSEN-SVT-037": {
   "type": "pdf",
   "title": "[MOHSSEN-SVT-037] L9 fécondation.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/mohssen SVT/[MOHSSEN-SVT-037] L9 fécondation.pdf",
   "ext": "pdf",
   "sizeBytes": 233016,
   "url": "https://wael-academy-files.b-cdn.net/BAC/mohssen%20SVT/%5BMOHSSEN-SVT-037%5D%20L9%20f%C3%A9condation.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "MOHSSEN-SVT-038": {
   "type": "video",
   "title": "trimestre 1 / théme 1 Reproduction humaine et santé / cours 9 / 01 - [MOHSSEN-SVT-038] procréation 1",
   "guid": "73317162-a69a-4cf0-9da7-9baf465c99d6",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/73317162-a69a-4cf0-9da7-9baf465c99d6/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/73317162-a69a-4cf0-9da7-9baf465c99d6/thumbnail.jpg",
   "durationSec": 1224,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 1107237345,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/73317162-a69a-4cf0-9da7-9baf465c99d6/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/73317162-a69a-4cf0-9da7-9baf465c99d6/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/73317162-a69a-4cf0-9da7-9baf465c99d6",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "MOHSSEN-SVT-041": {
   "type": "video",
   "title": "[MOHSSEN-SVT-041] Rappel 1 dihybridisme .mp4",
   "guid": "9d9b96f0-fd52-43c4-a1c8-eea2cf0e51b0",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/9d9b96f0-fd52-43c4-a1c8-eea2cf0e51b0/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/9d9b96f0-fd52-43c4-a1c8-eea2cf0e51b0/thumbnail.jpg",
   "durationSec": 920,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 745397601,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/9d9b96f0-fd52-43c4-a1c8-eea2cf0e51b0/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/9d9b96f0-fd52-43c4-a1c8-eea2cf0e51b0/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/9d9b96f0-fd52-43c4-a1c8-eea2cf0e51b0",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "MOHSSEN-SVT-042": {
   "type": "pdf",
   "title": "[MOHSSEN-SVT-042] deux gènes independants 2027.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/mohssen SVT/[MOHSSEN-SVT-042] deux gènes independants 2027.pdf",
   "ext": "pdf",
   "sizeBytes": 1539587,
   "url": "https://wael-academy-files.b-cdn.net/BAC/mohssen%20SVT/%5BMOHSSEN-SVT-042%5D%20deux%20g%C3%A8nes%20independants%202027.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "MOHSSEN-SVT-043": {
   "type": "pdf",
   "title": "[MOHSSEN-SVT-043] deux gènes independants.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/mohssen SVT/[MOHSSEN-SVT-043] deux gènes independants.pdf",
   "ext": "pdf",
   "sizeBytes": 6984111,
   "url": "https://wael-academy-files.b-cdn.net/BAC/mohssen%20SVT/%5BMOHSSEN-SVT-043%5D%20deux%20g%C3%A8nes%20independants.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "MOHSSEN-SVT-044": {
   "type": "video",
   "title": "trimestre 1 / théme 2 la génétique (cours 12) / L 3 / 01 - [MOHSSEN-SVT-044] deux gènes indépendants",
   "guid": "778675f4-1f63-4a69-a1fa-41d160a76aa9",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/778675f4-1f63-4a69-a1fa-41d160a76aa9/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/778675f4-1f63-4a69-a1fa-41d160a76aa9/thumbnail.jpg",
   "durationSec": 1007,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 905137410,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/778675f4-1f63-4a69-a1fa-41d160a76aa9/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/778675f4-1f63-4a69-a1fa-41d160a76aa9/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/778675f4-1f63-4a69-a1fa-41d160a76aa9",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "MOHSSEN-SVT-045": {
   "type": "pdf",
   "title": "[MOHSSEN-SVT-045] deux gènes liés liaison partielle .pdf",
   "zone": "wael-academy-files",
   "path": "BAC/mohssen SVT/[MOHSSEN-SVT-045] deux gènes liés liaison partielle .pdf",
   "ext": "pdf",
   "sizeBytes": 228337,
   "url": "https://wael-academy-files.b-cdn.net/BAC/mohssen%20SVT/%5BMOHSSEN-SVT-045%5D%20deux%20g%C3%A8nes%20li%C3%A9s%20liaison%20partielle%20.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "MOHSSEN-SVT-046": {
   "type": "video",
   "title": "trimestre 1 / théme 2 la génétique (cours 12) / L 4 / 01 - [MOHSSEN-SVT-046] deux gènes liés liaison partielle",
   "guid": "7edce61d-7438-4140-b288-74a3ffc1cd12",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/7edce61d-7438-4140-b288-74a3ffc1cd12/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/7edce61d-7438-4140-b288-74a3ffc1cd12/thumbnail.jpg",
   "durationSec": 921,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 861372207,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/7edce61d-7438-4140-b288-74a3ffc1cd12/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/7edce61d-7438-4140-b288-74a3ffc1cd12/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/7edce61d-7438-4140-b288-74a3ffc1cd12",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "MOHSSEN-SVT-047": {
   "type": "pdf",
   "title": "[MOHSSEN-SVT-047] deux gènes liés liaison partielle.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/mohssen SVT/[MOHSSEN-SVT-047] deux gènes liés liaison partielle.pdf",
   "ext": "pdf",
   "sizeBytes": 3708659,
   "url": "https://wael-academy-files.b-cdn.net/BAC/mohssen%20SVT/%5BMOHSSEN-SVT-047%5D%20deux%20g%C3%A8nes%20li%C3%A9s%20liaison%20partielle.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "MOHSSEN-SVT-048": {
   "type": "video",
   "title": "trimestre 1 / théme 2 la génétique (cours 12) / L 5 / 01 - [MOHSSEN-SVT-048] deux gènes liés liaison  totale",
   "guid": "871cee96-9d0f-49b5-a00e-b7628bcb1781",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/871cee96-9d0f-49b5-a00e-b7628bcb1781/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/871cee96-9d0f-49b5-a00e-b7628bcb1781/thumbnail.jpg",
   "durationSec": 449,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 369185442,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/871cee96-9d0f-49b5-a00e-b7628bcb1781/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/871cee96-9d0f-49b5-a00e-b7628bcb1781/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/871cee96-9d0f-49b5-a00e-b7628bcb1781",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "MOHSSEN-SVT-049": {
   "type": "pdf",
   "title": "[MOHSSEN-SVT-049] deux gènes liés liaison totale.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/mohssen SVT/[MOHSSEN-SVT-049] deux gènes liés liaison totale.pdf",
   "ext": "pdf",
   "sizeBytes": 6172737,
   "url": "https://wael-academy-files.b-cdn.net/BAC/mohssen%20SVT/%5BMOHSSEN-SVT-049%5D%20deux%20g%C3%A8nes%20li%C3%A9s%20liaison%20totale.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "MOHSSEN-SVT-050": {
   "type": "pdf",
   "title": "[MOHSSEN-SVT-050] brassage de l'IG au cours de la reproduction sexuée.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/mohssen SVT/[MOHSSEN-SVT-050] brassage de l'IG au cours de la reproduction sexuée.pdf",
   "ext": "pdf",
   "sizeBytes": 273176,
   "url": "https://wael-academy-files.b-cdn.net/BAC/mohssen%20SVT/%5BMOHSSEN-SVT-050%5D%20brassage%20de%20l%27IG%20au%20cours%20de%20la%20reproduction%20sexu%C3%A9e.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "MOHSSEN-SVT-051": {
   "type": "video",
   "title": "trimestre 1 / théme 2 la génétique (cours 12) / L1 brassage de l'IG au cours de la reproduction sexuée / 01 - [MOHSSEN-SVT-051] brassage de l'information génétique2025",
   "guid": "01e3cb18-8e66-4ca7-af6b-9da5f7480e68",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/01e3cb18-8e66-4ca7-af6b-9da5f7480e68/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/01e3cb18-8e66-4ca7-af6b-9da5f7480e68/thumbnail.jpg",
   "durationSec": 979,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 804908467,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/01e3cb18-8e66-4ca7-af6b-9da5f7480e68/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/01e3cb18-8e66-4ca7-af6b-9da5f7480e68/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/01e3cb18-8e66-4ca7-af6b-9da5f7480e68",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "NAJEH-AR-001": {
   "type": "video",
   "title": "LETTRES / محور 2 المنزع العقلي عند الجاحظ / 01 - [NAJEH-AR-001] 1 مقدمة محور الجاحظ",
   "guid": "607ed03a-c363-4e0b-8c49-fce03695d681",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/607ed03a-c363-4e0b-8c49-fce03695d681/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/607ed03a-c363-4e0b-8c49-fce03695d681/thumbnail.jpg",
   "durationSec": 268,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 192720577,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/607ed03a-c363-4e0b-8c49-fce03695d681/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/607ed03a-c363-4e0b-8c49-fce03695d681/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/607ed03a-c363-4e0b-8c49-fce03695d681",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "NAJEH-AR-002": {
   "type": "pdf",
   "title": "[NAJEH-AR-002] المنزع العقلي عند الجاحظ.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/najeh farhani BAC/[NAJEH-AR-002] المنزع العقلي عند الجاحظ.pdf",
   "ext": "pdf",
   "sizeBytes": 1521973,
   "url": "https://wael-academy-files.b-cdn.net/BAC/najeh%20farhani%20BAC/%5BNAJEH-AR-002%5D%20%D8%A7%D9%84%D9%85%D9%86%D8%B2%D8%B9%20%D8%A7%D9%84%D8%B9%D9%82%D9%84%D9%8A%20%D8%B9%D9%86%D8%AF%20%D8%A7%D9%84%D8%AC%D8%A7%D8%AD%D8%B8.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "NAJEH-AR-003": {
   "type": "video",
   "title": "LETTRES / محور 2 المنزع العقلي عند الجاحظ / 02 - [NAJEH-AR-003] المنزع العقلي في  4 الاسلوب الحجاجي",
   "guid": "454a1bf0-c465-434e-9ef6-5b701edf0447",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/454a1bf0-c465-434e-9ef6-5b701edf0447/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/454a1bf0-c465-434e-9ef6-5b701edf0447/thumbnail.jpg",
   "durationSec": 924,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 683993263,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/454a1bf0-c465-434e-9ef6-5b701edf0447/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/454a1bf0-c465-434e-9ef6-5b701edf0447/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/454a1bf0-c465-434e-9ef6-5b701edf0447",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "NAJEH-AR-004": {
   "type": "video",
   "title": "LETTRES / محور 2 المنزع العقلي عند الجاحظ / 03 - [NAJEH-AR-004] المنزع العقلي في الفكر الاعتزالي 3",
   "guid": "c08e539d-c404-4dd9-bc8c-55ce69653bad",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/c08e539d-c404-4dd9-bc8c-55ce69653bad/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/c08e539d-c404-4dd9-bc8c-55ce69653bad/thumbnail.jpg",
   "durationSec": 494,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 403457261,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/c08e539d-c404-4dd9-bc8c-55ce69653bad/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/c08e539d-c404-4dd9-bc8c-55ce69653bad/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/c08e539d-c404-4dd9-bc8c-55ce69653bad",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "NAJEH-AR-005": {
   "type": "video",
   "title": "LETTRES / محور 2 المنزع العقلي عند الجاحظ / 04 - [NAJEH-AR-005] المنهج العلمي 2",
   "guid": "eb46b5ec-723c-4e5e-a44c-11f37871770a",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/eb46b5ec-723c-4e5e-a44c-11f37871770a/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/eb46b5ec-723c-4e5e-a44c-11f37871770a/thumbnail.jpg",
   "durationSec": 1586,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 1419859683,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/eb46b5ec-723c-4e5e-a44c-11f37871770a/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/eb46b5ec-723c-4e5e-a44c-11f37871770a/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/eb46b5ec-723c-4e5e-a44c-11f37871770a",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "NAJEH-AR-006": {
   "type": "video",
   "title": "LETTRES / محور 2 المنزع العقلي عند الجاحظ / 05 - [NAJEH-AR-006] موضوع محور 5الجاحظ",
   "guid": "6c7e84a5-464f-4b85-8381-f6012f9c016f",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/6c7e84a5-464f-4b85-8381-f6012f9c016f/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/6c7e84a5-464f-4b85-8381-f6012f9c016f/thumbnail.jpg",
   "durationSec": 948,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 784276150,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/6c7e84a5-464f-4b85-8381-f6012f9c016f/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/6c7e84a5-464f-4b85-8381-f6012f9c016f/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/6c7e84a5-464f-4b85-8381-f6012f9c016f",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "NAJEH-AR-029": {
   "type": "video",
   "title": "LETTRES / محور الحماسة1 / 01 - [NAJEH-AR-029] 1 الايقاع",
   "guid": "965150fb-d893-496f-9257-f1e340d38a46",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/965150fb-d893-496f-9257-f1e340d38a46/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/965150fb-d893-496f-9257-f1e340d38a46/thumbnail.jpg",
   "durationSec": 1110,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 831624000,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/965150fb-d893-496f-9257-f1e340d38a46/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/965150fb-d893-496f-9257-f1e340d38a46/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/965150fb-d893-496f-9257-f1e340d38a46",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "NAJEH-AR-030": {
   "type": "pdf",
   "title": "[NAJEH-AR-030] 11.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/najeh farhani BAC/[NAJEH-AR-030] 11.pdf",
   "ext": "pdf",
   "sizeBytes": 1999309,
   "url": "https://wael-academy-files.b-cdn.net/BAC/najeh%20farhani%20BAC/%5BNAJEH-AR-030%5D%2011.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "NAJEH-AR-031": {
   "type": "video",
   "title": "LETTRES / محور الحماسة1 / 02 - [NAJEH-AR-031] 3 الصورة الشعرية",
   "guid": "1b5496d1-3246-4335-bca8-5b79a70ef9b1",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/1b5496d1-3246-4335-bca8-5b79a70ef9b1/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/1b5496d1-3246-4335-bca8-5b79a70ef9b1/thumbnail.jpg",
   "durationSec": 464,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 371406336,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/1b5496d1-3246-4335-bca8-5b79a70ef9b1/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/1b5496d1-3246-4335-bca8-5b79a70ef9b1/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/1b5496d1-3246-4335-bca8-5b79a70ef9b1",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "NAJEH-AR-032": {
   "type": "video",
   "title": "LETTRES / محور الحماسة1 / 03 - [NAJEH-AR-032] 3 المعجم",
   "guid": "198252dc-c66f-4400-969d-2b4c7a38eb4b",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/198252dc-c66f-4400-969d-2b4c7a38eb4b/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/198252dc-c66f-4400-969d-2b4c7a38eb4b/thumbnail.jpg",
   "durationSec": 437,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 296007495,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/198252dc-c66f-4400-969d-2b4c7a38eb4b/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/198252dc-c66f-4400-969d-2b4c7a38eb4b/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/198252dc-c66f-4400-969d-2b4c7a38eb4b",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "NAJEH-AR-033": {
   "type": "video",
   "title": "LETTRES / محور الحماسة1 / 04 - [NAJEH-AR-033] المعاني الحماسية",
   "guid": "c5acda55-7b90-4f1c-9edf-464efc0cf8e9",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/c5acda55-7b90-4f1c-9edf-464efc0cf8e9/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/c5acda55-7b90-4f1c-9edf-464efc0cf8e9/thumbnail.jpg",
   "durationSec": 653,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 460087957,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/c5acda55-7b90-4f1c-9edf-464efc0cf8e9/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/c5acda55-7b90-4f1c-9edf-464efc0cf8e9/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/c5acda55-7b90-4f1c-9edf-464efc0cf8e9",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "NAJEH-AR-034": {
   "type": "video",
   "title": "LETTRES / محور الحماسة1 / 05 - [NAJEH-AR-034] النقاش",
   "guid": "aa545513-b8b8-4fb8-b596-793a4f015b12",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/aa545513-b8b8-4fb8-b596-793a4f015b12/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/aa545513-b8b8-4fb8-b596-793a4f015b12/thumbnail.jpg",
   "durationSec": 478,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 260323035,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/aa545513-b8b8-4fb8-b596-793a4f015b12/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/aa545513-b8b8-4fb8-b596-793a4f015b12/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/aa545513-b8b8-4fb8-b596-793a4f015b12",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "NAJEH-AR-035": {
   "type": "video",
   "title": "LETTRES / محور الحماسة1 / 06 - [NAJEH-AR-035] تدريب علو موضوع حماسي",
   "guid": "0e40d1a3-c478-4970-aacd-e498b8e8e9dd",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/0e40d1a3-c478-4970-aacd-e498b8e8e9dd/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/0e40d1a3-c478-4970-aacd-e498b8e8e9dd/thumbnail.jpg",
   "durationSec": 1618,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 985067302,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/0e40d1a3-c478-4970-aacd-e498b8e8e9dd/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/0e40d1a3-c478-4970-aacd-e498b8e8e9dd/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/0e40d1a3-c478-4970-aacd-e498b8e8e9dd",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "NAJEH-AR-043": {
   "type": "video",
   "title": "SCTFQ / محور 1 في التفكير العلمي / 01 - [NAJEH-AR-043] 3 العلوم العربية",
   "guid": "f53f2b5a-cb28-4f22-b845-f237166e5e33",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/f53f2b5a-cb28-4f22-b845-f237166e5e33/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/f53f2b5a-cb28-4f22-b845-f237166e5e33/thumbnail.jpg",
   "durationSec": 553,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 387087441,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/f53f2b5a-cb28-4f22-b845-f237166e5e33/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/f53f2b5a-cb28-4f22-b845-f237166e5e33/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/f53f2b5a-cb28-4f22-b845-f237166e5e33",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "NAJEH-AR-044": {
   "type": "video",
   "title": "SCTFQ / محور 1 في التفكير العلمي / 02 - [NAJEH-AR-044] التدرب على فقرة حجاجية 4",
   "guid": "47350b17-c186-4766-90d3-2a4a8d7c0ee5",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/47350b17-c186-4766-90d3-2a4a8d7c0ee5/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/47350b17-c186-4766-90d3-2a4a8d7c0ee5/thumbnail.jpg",
   "durationSec": 532,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 409387195,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/47350b17-c186-4766-90d3-2a4a8d7c0ee5/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/47350b17-c186-4766-90d3-2a4a8d7c0ee5/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/47350b17-c186-4766-90d3-2a4a8d7c0ee5",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "NAJEH-AR-045": {
   "type": "video",
   "title": "SCTFQ / محور 1 في التفكير العلمي / 03 - [NAJEH-AR-045] العوامل التي ساعدت العرب على الإبداع 1",
   "guid": "4a0fdd55-af2a-47d3-ae31-cc431cb34631",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/4a0fdd55-af2a-47d3-ae31-cc431cb34631/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/4a0fdd55-af2a-47d3-ae31-cc431cb34631/thumbnail.jpg",
   "durationSec": 561,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 366720199,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/4a0fdd55-af2a-47d3-ae31-cc431cb34631/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/4a0fdd55-af2a-47d3-ae31-cc431cb34631/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/4a0fdd55-af2a-47d3-ae31-cc431cb34631",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "NAJEH-AR-046": {
   "type": "pdf",
   "title": "[NAJEH-AR-046] المحور الأول فيد.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/najeh farhani BAC/[NAJEH-AR-046] المحور الأول فيد.pdf",
   "ext": "pdf",
   "sizeBytes": 686580,
   "url": "https://wael-academy-files.b-cdn.net/BAC/najeh%20farhani%20BAC/%5BNAJEH-AR-046%5D%20%D8%A7%D9%84%D9%85%D8%AD%D9%88%D8%B1%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%D9%81%D9%8A%D8%AF.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "NAJEH-AR-047": {
   "type": "video",
   "title": "SCTFQ / محور 1 في التفكير العلمي / 04 - [NAJEH-AR-047] المناهج العلمية وصفات العالم المسلم 2",
   "guid": "d6c5c5a3-46dd-4a1a-b533-009d08eccfba",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/d6c5c5a3-46dd-4a1a-b533-009d08eccfba/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/d6c5c5a3-46dd-4a1a-b533-009d08eccfba/thumbnail.jpg",
   "durationSec": 453,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 347990748,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/d6c5c5a3-46dd-4a1a-b533-009d08eccfba/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/d6c5c5a3-46dd-4a1a-b533-009d08eccfba/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/d6c5c5a3-46dd-4a1a-b533-009d08eccfba",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "NAJEH-AR-048": {
   "type": "video",
   "title": "SCTFQ / محور 2 في الأدب والفن / 01 - [NAJEH-AR-048] 1 الأدب والشعر",
   "guid": "407bb8b1-391a-4119-88a3-fc540022dd5c",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/407bb8b1-391a-4119-88a3-fc540022dd5c/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/407bb8b1-391a-4119-88a3-fc540022dd5c/thumbnail.jpg",
   "durationSec": 814,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 482221079,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/407bb8b1-391a-4119-88a3-fc540022dd5c/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/407bb8b1-391a-4119-88a3-fc540022dd5c/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/407bb8b1-391a-4119-88a3-fc540022dd5c",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "NAJEH-AR-049": {
   "type": "video",
   "title": "SCTFQ / محور 2 في الأدب والفن / 02 - [NAJEH-AR-049] 2 الأدب نثرا ونقدا",
   "guid": "7f675eba-0a6b-471f-9956-1d81442fcc5a",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/7f675eba-0a6b-471f-9956-1d81442fcc5a/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/7f675eba-0a6b-471f-9956-1d81442fcc5a/thumbnail.jpg",
   "durationSec": 348,
   "resolutions": "480p,720p,240p,360p",
   "sizeBytes": 220605855,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/7f675eba-0a6b-471f-9956-1d81442fcc5a/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/7f675eba-0a6b-471f-9956-1d81442fcc5a/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/7f675eba-0a6b-471f-9956-1d81442fcc5a",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "NAJEH-AR-050": {
   "type": "video",
   "title": "SCTFQ / محور 2 في الأدب والفن / 03 - [NAJEH-AR-050] 3 الفن",
   "guid": "0fd67a2c-3c41-4daa-ad8a-31ccff49bfd9",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/0fd67a2c-3c41-4daa-ad8a-31ccff49bfd9/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/0fd67a2c-3c41-4daa-ad8a-31ccff49bfd9/thumbnail.jpg",
   "durationSec": 759,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 485963069,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/0fd67a2c-3c41-4daa-ad8a-31ccff49bfd9/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/0fd67a2c-3c41-4daa-ad8a-31ccff49bfd9/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/0fd67a2c-3c41-4daa-ad8a-31ccff49bfd9",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "NAJEH-AR-051": {
   "type": "video",
   "title": "SCTFQ / محور 2 في الأدب والفن / 04 - [NAJEH-AR-051] 4 الاجابة على أهم الأسئلة",
   "guid": "23d0dada-b063-4c1e-bf8e-e179a3650fe6",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/23d0dada-b063-4c1e-bf8e-e179a3650fe6/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/23d0dada-b063-4c1e-bf8e-e179a3650fe6/thumbnail.jpg",
   "durationSec": 433,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 279467649,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/23d0dada-b063-4c1e-bf8e-e179a3650fe6/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/23d0dada-b063-4c1e-bf8e-e179a3650fe6/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/23d0dada-b063-4c1e-bf8e-e179a3650fe6",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "NAJEH-AR-052": {
   "type": "video",
   "title": "SCTFQ / محور 2 في الأدب والفن / 05 - [NAJEH-AR-052] اصلاح فرض حول محور الأدب والفن 5",
   "guid": "989a76da-fc75-4038-b4bb-2c77795ee641",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/989a76da-fc75-4038-b4bb-2c77795ee641/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/989a76da-fc75-4038-b4bb-2c77795ee641/thumbnail.jpg",
   "durationSec": 1429,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 987717179,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/989a76da-fc75-4038-b4bb-2c77795ee641/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/989a76da-fc75-4038-b4bb-2c77795ee641/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/989a76da-fc75-4038-b4bb-2c77795ee641",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "NAJEH-AR-053": {
   "type": "pdf",
   "title": "[NAJEH-AR-053] المحور الثاني مع فرض فيديو.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/najeh farhani BAC/[NAJEH-AR-053] المحور الثاني مع فرض فيديو.pdf",
   "ext": "pdf",
   "sizeBytes": 669771,
   "url": "https://wael-academy-files.b-cdn.net/BAC/najeh%20farhani%20BAC/%5BNAJEH-AR-053%5D%20%D8%A7%D9%84%D9%85%D8%AD%D9%88%D8%B1%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D9%85%D8%B9%20%D9%81%D8%B1%D8%B6%20%D9%81%D9%8A%D8%AF%D9%8A%D9%88.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "RAOUEDHA-FR-001": {
   "type": "pdf",
   "title": "[RAOUEDHA-FR-001] Activité langue le but BS.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/Raouedha erguez FRANCAIS/[RAOUEDHA-FR-001] Activité langue le but BS.pdf",
   "ext": "pdf",
   "sizeBytes": 244835,
   "url": "https://wael-academy-files.b-cdn.net/BAC/Raouedha%20erguez%20FRANCAIS/%5BRAOUEDHA-FR-001%5D%20Activit%C3%A9%20langue%20le%20but%20BS.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "RAOUEDHA-FR-002": {
   "type": "pdf",
   "title": "[RAOUEDHA-FR-002] expression écrite le point de vue absolu   pt absolu.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/Raouedha erguez FRANCAIS/[RAOUEDHA-FR-002] expression écrite le point de vue absolu   pt absolu.pdf",
   "ext": "pdf",
   "sizeBytes": 324632,
   "url": "https://wael-academy-files.b-cdn.net/BAC/Raouedha%20erguez%20FRANCAIS/%5BRAOUEDHA-FR-002%5D%20expression%20%C3%A9crite%20le%20point%20de%20vue%20absolu%20%20%20pt%20absolu.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "RAOUEDHA-FR-003": {
   "type": "video",
   "title": "Trimestre 1 / Module 2 _Histoires d_amour_ / 01 - [RAOUEDHA-FR-003] expression écrite le point de vue absolu",
   "guid": "46b190fe-1c98-4e02-96bc-5962e4f70c90",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/46b190fe-1c98-4e02-96bc-5962e4f70c90/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/46b190fe-1c98-4e02-96bc-5962e4f70c90/thumbnail.jpg",
   "durationSec": 718,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 358720281,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/46b190fe-1c98-4e02-96bc-5962e4f70c90/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/46b190fe-1c98-4e02-96bc-5962e4f70c90/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/46b190fe-1c98-4e02-96bc-5962e4f70c90",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "RAOUEDHA-FR-005": {
   "type": "video",
   "title": "Trimestre 1 / Module 2 _Histoires d_amour_ / 02 - [RAOUEDHA-FR-005] le but exercices",
   "guid": "b5152abe-f58a-44f8-8feb-b14fe205cc11",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/b5152abe-f58a-44f8-8feb-b14fe205cc11/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/b5152abe-f58a-44f8-8feb-b14fe205cc11/thumbnail.jpg",
   "durationSec": 537,
   "resolutions": "480p,720p,240p,360p",
   "sizeBytes": 267651587,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/b5152abe-f58a-44f8-8feb-b14fe205cc11/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/b5152abe-f58a-44f8-8feb-b14fe205cc11/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/b5152abe-f58a-44f8-8feb-b14fe205cc11",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "RAOUEDHA-FR-006": {
   "type": "pdf",
   "title": "[RAOUEDHA-FR-006] Le but exercices.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/Raouedha erguez FRANCAIS/[RAOUEDHA-FR-006] Le but exercices.pdf",
   "ext": "pdf",
   "sizeBytes": 336797,
   "url": "https://wael-academy-files.b-cdn.net/BAC/Raouedha%20erguez%20FRANCAIS/%5BRAOUEDHA-FR-006%5D%20Le%20but%20exercices.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "RAOUEDHA-FR-007": {
   "type": "video",
   "title": "Trimestre 1 / Module 2 _Histoires d_amour_ / 03 - [RAOUEDHA-FR-007] le but",
   "guid": "3bd1f5a4-8f21-41c7-ba50-8c20d0b6cff7",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/3bd1f5a4-8f21-41c7-ba50-8c20d0b6cff7/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/3bd1f5a4-8f21-41c7-ba50-8c20d0b6cff7/thumbnail.jpg",
   "durationSec": 857,
   "resolutions": "480p,720p,240p,360p",
   "sizeBytes": 492608790,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/3bd1f5a4-8f21-41c7-ba50-8c20d0b6cff7/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/3bd1f5a4-8f21-41c7-ba50-8c20d0b6cff7/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/3bd1f5a4-8f21-41c7-ba50-8c20d0b6cff7",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "RAOUEDHA-FR-008": {
   "type": "video",
   "title": "Trimestre 1 / Module 2 _Histoires d_amour_ / 04 - [RAOUEDHA-FR-008] étude de texte répondre aux questions de compréhension",
   "guid": "e329b0ea-da0b-4251-b135-1f3a3ce3d097",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/e329b0ea-da0b-4251-b135-1f3a3ce3d097/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/e329b0ea-da0b-4251-b135-1f3a3ce3d097/thumbnail.jpg",
   "durationSec": 999,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 582474860,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/e329b0ea-da0b-4251-b135-1f3a3ce3d097/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/e329b0ea-da0b-4251-b135-1f3a3ce3d097/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/e329b0ea-da0b-4251-b135-1f3a3ce3d097",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "RAOUEDHA-FR-009": {
   "type": "pdf",
   "title": "[RAOUEDHA-FR-009] étude de texte répondre aux questions de compréhension.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/Raouedha erguez FRANCAIS/[RAOUEDHA-FR-009] étude de texte répondre aux questions de compréhension.pdf",
   "ext": "pdf",
   "sizeBytes": 565578,
   "url": "https://wael-academy-files.b-cdn.net/BAC/Raouedha%20erguez%20FRANCAIS/%5BRAOUEDHA-FR-009%5D%20%C3%A9tude%20de%20texte%20r%C3%A9pondre%20aux%20questions%20de%20compr%C3%A9hension.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "RAOUEDHA-FR-010": {
   "type": "video",
   "title": "Trimestre 1 / Module1 _souvenirs et nostalgie_ / 01 - [RAOUEDHA-FR-010] la cause et la conséquence exercices MM",
   "guid": "4dcb55cf-fc73-42e9-928b-4d4789e3cbbd",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/4dcb55cf-fc73-42e9-928b-4d4789e3cbbd/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/4dcb55cf-fc73-42e9-928b-4d4789e3cbbd/thumbnail.jpg",
   "durationSec": 669,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 519724569,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/4dcb55cf-fc73-42e9-928b-4d4789e3cbbd/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/4dcb55cf-fc73-42e9-928b-4d4789e3cbbd/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/4dcb55cf-fc73-42e9-928b-4d4789e3cbbd",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "RAOUEDHA-FR-011": {
   "type": "pdf",
   "title": "[RAOUEDHA-FR-011] la cause et la conséquence exercices.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/Raouedha erguez FRANCAIS/[RAOUEDHA-FR-011] la cause et la conséquence exercices.pdf",
   "ext": "pdf",
   "sizeBytes": 589613,
   "url": "https://wael-academy-files.b-cdn.net/BAC/Raouedha%20erguez%20FRANCAIS/%5BRAOUEDHA-FR-011%5D%20la%20cause%20et%20la%20cons%C3%A9quence%20exercices.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "RAOUEDHA-FR-012": {
   "type": "video",
   "title": "Trimestre 1 / Module1 _souvenirs et nostalgie_ / 02 - [RAOUEDHA-FR-012] la cause et la conséquence",
   "guid": "5e45be68-83b0-4b78-935b-22ddf87e6df9",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/5e45be68-83b0-4b78-935b-22ddf87e6df9/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/5e45be68-83b0-4b78-935b-22ddf87e6df9/thumbnail.jpg",
   "durationSec": 863,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 494508719,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/5e45be68-83b0-4b78-935b-22ddf87e6df9/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/5e45be68-83b0-4b78-935b-22ddf87e6df9/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/5e45be68-83b0-4b78-935b-22ddf87e6df9",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "RAOUEDHA-FR-013": {
   "type": "pdf",
   "title": "[RAOUEDHA-FR-013] La cause et la conséquence.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/Raouedha erguez FRANCAIS/[RAOUEDHA-FR-013] La cause et la conséquence.pdf",
   "ext": "pdf",
   "sizeBytes": 326299,
   "url": "https://wael-academy-files.b-cdn.net/BAC/Raouedha%20erguez%20FRANCAIS/%5BRAOUEDHA-FR-013%5D%20La%20cause%20et%20la%20cons%C3%A9quence.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "RAOUEDHA-FR-014": {
   "type": "pdf",
   "title": "[RAOUEDHA-FR-014] Module1 le txt explicatif le txt argumentatif quelle différence BS (1).pdf",
   "zone": "wael-academy-files",
   "path": "BAC/Raouedha erguez FRANCAIS/[RAOUEDHA-FR-014] Module1 le txt explicatif le txt argumentatif quelle différence BS (1).pdf",
   "ext": "pdf",
   "sizeBytes": 189539,
   "url": "https://wael-academy-files.b-cdn.net/BAC/Raouedha%20erguez%20FRANCAIS/%5BRAOUEDHA-FR-014%5D%20Module1%20le%20txt%20explicatif%20le%20txt%20argumentatif%20quelle%20diff%C3%A9rence%20BS%20%281%29.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "RAOUEDHA-FR-015": {
   "type": "pdf",
   "title": "[RAOUEDHA-FR-015] Répondre à une question portant sur les procédés d_écriture application.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/Raouedha erguez FRANCAIS/[RAOUEDHA-FR-015] Répondre à une question portant sur les procédés d_écriture application.pdf",
   "ext": "pdf",
   "sizeBytes": 320036,
   "url": "https://wael-academy-files.b-cdn.net/BAC/Raouedha%20erguez%20FRANCAIS/%5BRAOUEDHA-FR-015%5D%20R%C3%A9pondre%20%C3%A0%20une%20question%20portant%20sur%20les%20proc%C3%A9d%C3%A9s%20d_%C3%A9criture%20application.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "RAOUEDHA-FR-016": {
   "type": "video",
   "title": "Trimestre 1 / Module1 _souvenirs et nostalgie_ / 03 - [RAOUEDHA-FR-016] répondre à une question portant sur les procésés d_écriture",
   "guid": "3c90080e-74da-480c-9e6f-d04fc12c6bef",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/3c90080e-74da-480c-9e6f-d04fc12c6bef/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/3c90080e-74da-480c-9e6f-d04fc12c6bef/thumbnail.jpg",
   "durationSec": 598,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 395822351,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/3c90080e-74da-480c-9e6f-d04fc12c6bef/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/3c90080e-74da-480c-9e6f-d04fc12c6bef/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/3c90080e-74da-480c-9e6f-d04fc12c6bef",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "RAOUEDHA-FR-017": {
   "type": "video",
   "title": "Trimestre 1 / Module1 _souvenirs et nostalgie_ / 04 - [RAOUEDHA-FR-017] souvenirs et nostalgie  vocabulaire",
   "guid": "7390a014-2e57-456a-acca-e68cba6bdfa5",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/7390a014-2e57-456a-acca-e68cba6bdfa5/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/7390a014-2e57-456a-acca-e68cba6bdfa5/thumbnail.jpg",
   "durationSec": 838,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 409775630,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/7390a014-2e57-456a-acca-e68cba6bdfa5/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/7390a014-2e57-456a-acca-e68cba6bdfa5/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/7390a014-2e57-456a-acca-e68cba6bdfa5",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "RAOUEDHA-FR-018": {
   "type": "pdf",
   "title": "[RAOUEDHA-FR-018] souvenirs et nostalgie vovabulaire.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/Raouedha erguez FRANCAIS/[RAOUEDHA-FR-018] souvenirs et nostalgie vovabulaire.pdf",
   "ext": "pdf",
   "sizeBytes": 374245,
   "url": "https://wael-academy-files.b-cdn.net/BAC/Raouedha%20erguez%20FRANCAIS/%5BRAOUEDHA-FR-018%5D%20souvenirs%20et%20nostalgie%20vovabulaire.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "RAOUEDHA-FR-019": {
   "type": "video",
   "title": "Trimestre 1 / Module1 _souvenirs et nostalgie_ / 05 - [RAOUEDHA-FR-019] texte explicatif texte argumentatif quelle différence",
   "guid": "7ca92797-6816-4556-a199-321d992b9cb5",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/7ca92797-6816-4556-a199-321d992b9cb5/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/7ca92797-6816-4556-a199-321d992b9cb5/thumbnail.jpg",
   "durationSec": 655,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 346493326,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/7ca92797-6816-4556-a199-321d992b9cb5/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/7ca92797-6816-4556-a199-321d992b9cb5/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/7ca92797-6816-4556-a199-321d992b9cb5",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "RAOUEDHA-FR-020": {
   "type": "video",
   "title": "Trimestre 1 / Module1 _souvenirs et nostalgie_ / 06 - [RAOUEDHA-FR-020] texte explicatif1",
   "guid": "62ee1544-0731-43c7-b569-d020444ac8a1",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/62ee1544-0731-43c7-b569-d020444ac8a1/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/62ee1544-0731-43c7-b569-d020444ac8a1/thumbnail.jpg",
   "durationSec": 507,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 297658411,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/62ee1544-0731-43c7-b569-d020444ac8a1/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/62ee1544-0731-43c7-b569-d020444ac8a1/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/62ee1544-0731-43c7-b569-d020444ac8a1",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "RAOUEDHA-FR-021": {
   "type": "pdf",
   "title": "[RAOUEDHA-FR-021] texte explicatif2(1).pdf",
   "zone": "wael-academy-files",
   "path": "BAC/Raouedha erguez FRANCAIS/[RAOUEDHA-FR-021] texte explicatif2(1).pdf",
   "ext": "pdf",
   "sizeBytes": 327021,
   "url": "https://wael-academy-files.b-cdn.net/BAC/Raouedha%20erguez%20FRANCAIS/%5BRAOUEDHA-FR-021%5D%20texte%20explicatif2%281%29.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "RAOUEDHA-FR-022": {
   "type": "video",
   "title": "Trimestre 1 / Module1 _souvenirs et nostalgie_ / 07 - [RAOUEDHA-FR-022] texte explicatif2",
   "guid": "3c27b024-6c9e-4417-abcc-ce9984f6a048",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/3c27b024-6c9e-4417-abcc-ce9984f6a048/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/3c27b024-6c9e-4417-abcc-ce9984f6a048/thumbnail.jpg",
   "durationSec": 536,
   "resolutions": "480p,720p,240p,360p",
   "sizeBytes": 277353830,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/3c27b024-6c9e-4417-abcc-ce9984f6a048/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/3c27b024-6c9e-4417-abcc-ce9984f6a048/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/3c27b024-6c9e-4417-abcc-ce9984f6a048",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "RAOUEDHA-FR-023": {
   "type": "pdf",
   "title": "[RAOUEDHA-FR-023] texte explicatif2.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/Raouedha erguez FRANCAIS/[RAOUEDHA-FR-023] texte explicatif2.pdf",
   "ext": "pdf",
   "sizeBytes": 246346,
   "url": "https://wael-academy-files.b-cdn.net/BAC/Raouedha%20erguez%20FRANCAIS/%5BRAOUEDHA-FR-023%5D%20texte%20explicatif2.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "RAOUEDHA-FR-024": {
   "type": "pdf",
   "title": "[RAOUEDHA-FR-024] étude de texte lire comprendre une question de compréhension.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/Raouedha erguez FRANCAIS/[RAOUEDHA-FR-024] étude de texte lire comprendre une question de compréhension.pdf",
   "ext": "pdf",
   "sizeBytes": 475946,
   "url": "https://wael-academy-files.b-cdn.net/BAC/Raouedha%20erguez%20FRANCAIS/%5BRAOUEDHA-FR-024%5D%20%C3%A9tude%20de%20texte%20lire%20comprendre%20une%20question%20de%20compr%C3%A9hension.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "RAOUEDHA-FR-025": {
   "type": "video",
   "title": "Trimestre 1 / Module1 _souvenirs et nostalgie_ / 08 - [RAOUEDHA-FR-025] étude de texte lire et comprendre une question de compréhension",
   "guid": "d8d998c5-7ad4-4350-b2ff-057518621a75",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/d8d998c5-7ad4-4350-b2ff-057518621a75/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/d8d998c5-7ad4-4350-b2ff-057518621a75/thumbnail.jpg",
   "durationSec": 745,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 369102987,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/d8d998c5-7ad4-4350-b2ff-057518621a75/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/d8d998c5-7ad4-4350-b2ff-057518621a75/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/d8d998c5-7ad4-4350-b2ff-057518621a75",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "WALID-PHILO-001": {
   "type": "video",
   "title": "01 - [WALID-PHILO-001] الانية بما هي ذات واعية (ديكارت) 3",
   "guid": "8f500215-76e7-45a8-aa57-37f0d8a35444",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/8f500215-76e7-45a8-aa57-37f0d8a35444/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/8f500215-76e7-45a8-aa57-37f0d8a35444/thumbnail.jpg",
   "durationSec": 518,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 314601824,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/8f500215-76e7-45a8-aa57-37f0d8a35444/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/8f500215-76e7-45a8-aa57-37f0d8a35444/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/8f500215-76e7-45a8-aa57-37f0d8a35444",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "WALID-PHILO-002": {
   "type": "video",
   "title": "02 - [WALID-PHILO-002] التكامل بين الوعي  10و اللاوعي",
   "guid": "7724acd7-0cbb-4839-b18e-930b67ef0fd4",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/7724acd7-0cbb-4839-b18e-930b67ef0fd4/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/7724acd7-0cbb-4839-b18e-930b67ef0fd4/thumbnail.jpg",
   "durationSec": 493,
   "resolutions": "480p,720p,240p,360p",
   "sizeBytes": 293533472,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/7724acd7-0cbb-4839-b18e-930b67ef0fd4/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/7724acd7-0cbb-4839-b18e-930b67ef0fd4/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/7724acd7-0cbb-4839-b18e-930b67ef0fd4",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "WALID-PHILO-003": {
   "type": "video",
   "title": "03 - [WALID-PHILO-003] الذات المتجسدة 5",
   "guid": "b2eb60c0-e3a6-4234-b44c-9f4eef01be13",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/b2eb60c0-e3a6-4234-b44c-9f4eef01be13/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/b2eb60c0-e3a6-4234-b44c-9f4eef01be13/thumbnail.jpg",
   "durationSec": 342,
   "resolutions": "480p,720p,240p,360p",
   "sizeBytes": 217360683,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/b2eb60c0-e3a6-4234-b44c-9f4eef01be13/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/b2eb60c0-e3a6-4234-b44c-9f4eef01be13/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/b2eb60c0-e3a6-4234-b44c-9f4eef01be13",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "WALID-PHILO-004": {
   "type": "video",
   "title": "04 - [WALID-PHILO-004] الغيرية كامنة في الذات 11",
   "guid": "36d6004a-9a68-497d-b1a6-b2f0ff7efd26",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/36d6004a-9a68-497d-b1a6-b2f0ff7efd26/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/36d6004a-9a68-497d-b1a6-b2f0ff7efd26/thumbnail.jpg",
   "durationSec": 454,
   "resolutions": "480p,720p,240p,360p",
   "sizeBytes": 264621786,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/36d6004a-9a68-497d-b1a6-b2f0ff7efd26/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/36d6004a-9a68-497d-b1a6-b2f0ff7efd26/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/36d6004a-9a68-497d-b1a6-b2f0ff7efd26",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "WALID-PHILO-005": {
   "type": "video",
   "title": "05 - [WALID-PHILO-005] الوعي بما هو تشكل تاريخي 7",
   "guid": "8c5f6208-52cd-454f-9825-732a17d08c34",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/8c5f6208-52cd-454f-9825-732a17d08c34/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/8c5f6208-52cd-454f-9825-732a17d08c34/thumbnail.jpg",
   "durationSec": 254,
   "resolutions": "480p,720p,240p,360p",
   "sizeBytes": 135548421,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/8c5f6208-52cd-454f-9825-732a17d08c34/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/8c5f6208-52cd-454f-9825-732a17d08c34/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/8c5f6208-52cd-454f-9825-732a17d08c34",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "WALID-PHILO-006": {
   "type": "video",
   "title": "06 - [WALID-PHILO-006] الوعي بناء تاريخي (ماركس) 8",
   "guid": "5f8cccd0-0010-47c2-840f-6b860fcb91f7",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/5f8cccd0-0010-47c2-840f-6b860fcb91f7/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/5f8cccd0-0010-47c2-840f-6b860fcb91f7/thumbnail.jpg",
   "durationSec": 273,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 157871697,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/5f8cccd0-0010-47c2-840f-6b860fcb91f7/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/5f8cccd0-0010-47c2-840f-6b860fcb91f7/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/5f8cccd0-0010-47c2-840f-6b860fcb91f7",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "WALID-PHILO-007": {
   "type": "video",
   "title": "07 - [WALID-PHILO-007] تاسيس انطولوجيا جديدة للجسد 6",
   "guid": "3a5457e2-1731-4522-8879-61afac64ea72",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/3a5457e2-1731-4522-8879-61afac64ea72/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/3a5457e2-1731-4522-8879-61afac64ea72/thumbnail.jpg",
   "durationSec": 224,
   "resolutions": "480p,720p,240p,360p",
   "sizeBytes": 125810709,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/3a5457e2-1731-4522-8879-61afac64ea72/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/3a5457e2-1731-4522-8879-61afac64ea72/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/3a5457e2-1731-4522-8879-61afac64ea72",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "WALID-PHILO-008": {
   "type": "video",
   "title": "08 - [WALID-PHILO-008] تعالي الانية على الغيرية 2",
   "guid": "d5ee1fcf-8417-4946-a97e-38643e67f47f",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/d5ee1fcf-8417-4946-a97e-38643e67f47f/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/d5ee1fcf-8417-4946-a97e-38643e67f47f/thumbnail.jpg",
   "durationSec": 541,
   "resolutions": "360p,480p,720p,240p",
   "sizeBytes": 333764015,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/d5ee1fcf-8417-4946-a97e-38643e67f47f/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/d5ee1fcf-8417-4946-a97e-38643e67f47f/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/d5ee1fcf-8417-4946-a97e-38643e67f47f",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "WALID-PHILO-009": {
   "type": "video",
   "title": "09 - [WALID-PHILO-009] تمهيد محور الإنية  1والغيرية",
   "guid": "40c729f7-3af9-478c-934e-0e2e072b4c93",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/40c729f7-3af9-478c-934e-0e2e072b4c93/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/40c729f7-3af9-478c-934e-0e2e072b4c93/thumbnail.jpg",
   "durationSec": 463,
   "resolutions": "480p,720p,240p,360p",
   "sizeBytes": 281080971,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/40c729f7-3af9-478c-934e-0e2e072b4c93/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/40c729f7-3af9-478c-934e-0e2e072b4c93/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/40c729f7-3af9-478c-934e-0e2e072b4c93",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "WALID-PHILO-010": {
   "type": "video",
   "title": "10 - [WALID-PHILO-010] جدلية الوعي و اللاوعي 9",
   "guid": "3115f134-86c4-48a7-8e3d-3f16bb0e153b",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/3115f134-86c4-48a7-8e3d-3f16bb0e153b/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/3115f134-86c4-48a7-8e3d-3f16bb0e153b/thumbnail.jpg",
   "durationSec": 276,
   "resolutions": "480p,720p,240p,360p",
   "sizeBytes": 146713035,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/3115f134-86c4-48a7-8e3d-3f16bb0e153b/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/3115f134-86c4-48a7-8e3d-3f16bb0e153b/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/3115f134-86c4-48a7-8e3d-3f16bb0e153b",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "WALID-PHILO-011": {
   "type": "video",
   "title": "11 - [WALID-PHILO-011] في جدلية الانية و الغيرية 4",
   "guid": "8b691551-e62b-42cf-b8d4-2401b09d38c1",
   "libraryId": 512369,
   "ext": "mp4",
   "hls": "https://vz-2a40c9b3-ad6.b-cdn.net/8b691551-e62b-42cf-b8d4-2401b09d38c1/playlist.m3u8",
   "thumbnail": "https://vz-2a40c9b3-ad6.b-cdn.net/8b691551-e62b-42cf-b8d4-2401b09d38c1/thumbnail.jpg",
   "durationSec": 461,
   "resolutions": "480p,720p,240p,360p",
   "sizeBytes": 277207756,
   "status": "ready",
   "url": "https://vz-2a40c9b3-ad6.b-cdn.net/8b691551-e62b-42cf-b8d4-2401b09d38c1/play_720p.mp4",
   "mp4": "https://vz-2a40c9b3-ad6.b-cdn.net/8b691551-e62b-42cf-b8d4-2401b09d38c1/play_720p.mp4",
   "quality": "720p",
   "iframe": "https://iframe.mediadelivery.net/embed/512369/8b691551-e62b-42cf-b8d4-2401b09d38c1",
   "playable": true,
   "urlNote": "referrer requis (BlockNoneReferrer) : ok depuis une page web, 403 si collé seul dans la barre d'adresse"
  },
  "WALID-PHILO-012": {
   "type": "pdf",
   "title": "[WALID-PHILO-012] محور الإنية والغيرية.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/walid ferhi/[WALID-PHILO-012] محور الإنية والغيرية.pdf",
   "ext": "pdf",
   "sizeBytes": 494737,
   "url": "https://wael-academy-files.b-cdn.net/BAC/walid%20ferhi/%5BWALID-PHILO-012%5D%20%D9%85%D8%AD%D9%88%D8%B1%20%D8%A7%D9%84%D8%A5%D9%86%D9%8A%D8%A9%20%D9%88%D8%A7%D9%84%D8%BA%D9%8A%D8%B1%D9%8A%D8%A9.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "playable": true
  },
  "cours 1/cours 1 la fonction reproductrice chez  l_homme.pdf": {
   "type": "pdf",
   "title": "[MOHSSEN-SVT-017] cours 1 la fonction reproductrice chez  l_homme.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/mohssen SVT/[MOHSSEN-SVT-017] cours 1 la fonction reproductrice chez  l_homme.pdf",
   "ext": "pdf",
   "sizeBytes": 638961,
   "url": "https://wael-academy-files.b-cdn.net/BAC/mohssen%20SVT/%5BMOHSSEN-SVT-017%5D%20cours%201%20la%20fonction%20reproductrice%20chez%20%20l_homme.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "matchedBy": "filename (ref is a raw disk path, not a ref code)",
   "playable": true
  },
  "cours 10/nidation et role du placenta .pdf": {
   "type": "pdf",
   "title": "[MOHSSEN-SVT-020] nidation et role du placenta .pdf",
   "zone": "wael-academy-files",
   "path": "BAC/mohssen SVT/[MOHSSEN-SVT-020] nidation et role du placenta .pdf",
   "ext": "pdf",
   "sizeBytes": 259719,
   "url": "https://wael-academy-files.b-cdn.net/BAC/mohssen%20SVT/%5BMOHSSEN-SVT-020%5D%20nidation%20et%20role%20du%20placenta%20.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "matchedBy": "filename (ref is a raw disk path, not a ref code)",
   "playable": true
  },
  "cours 11/L 11 maitrise de la procréation.pdf": {
   "type": "pdf",
   "title": "[MOHSSEN-SVT-021] L 11 maitrise de la procréation.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/mohssen SVT/[MOHSSEN-SVT-021] L 11 maitrise de la procréation.pdf",
   "ext": "pdf",
   "sizeBytes": 367792,
   "url": "https://wael-academy-files.b-cdn.net/BAC/mohssen%20SVT/%5BMOHSSEN-SVT-021%5D%20L%2011%20maitrise%20de%20la%20procr%C3%A9ation.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "matchedBy": "filename (ref is a raw disk path, not a ref code)",
   "playable": true
  },
  "cours 5/la fonction reproductrice chez la femme .pdf": {
   "type": "pdf",
   "title": "[MOHSSEN-SVT-028] la fonction reproductrice chez la femme .pdf",
   "zone": "wael-academy-files",
   "path": "BAC/mohssen SVT/[MOHSSEN-SVT-028] la fonction reproductrice chez la femme .pdf",
   "ext": "pdf",
   "sizeBytes": 763248,
   "url": "https://wael-academy-files.b-cdn.net/BAC/mohssen%20SVT/%5BMOHSSEN-SVT-028%5D%20la%20fonction%20reproductrice%20chez%20la%20femme%20.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "matchedBy": "filename (ref is a raw disk path, not a ref code)",
   "playable": true
  },
  "cours 8/L8 regulation du cycle sexul.pdf": {
   "type": "pdf",
   "title": "[MOHSSEN-SVT-035] L8 regulation du cycle sexul.pdf",
   "zone": "wael-academy-files",
   "path": "BAC/mohssen SVT/[MOHSSEN-SVT-035] L8 regulation du cycle sexul.pdf",
   "ext": "pdf",
   "sizeBytes": 265919,
   "url": "https://wael-academy-files.b-cdn.net/BAC/mohssen%20SVT/%5BMOHSSEN-SVT-035%5D%20L8%20regulation%20du%20cycle%20sexul.pdf",
   "urlNote": "url publique directe, aucun referrer requis",
   "matchedBy": "filename (ref is a raw disk path, not a ref code)",
   "playable": true
  }
 },
 "bacs": [
  {
   "id": "y-bac-math",
   "name": "باك — رياضيات",
   "matieres": [
    {
     "id": "subj-bac-math-mathematiques",
     "name": "Bac Math - Maths",
     "chapitres": []
    },
    {
     "id": "subj-bac-math-sciences-physiques",
     "name": "Bac Math - Physique",
     "chapitres": [
      {
       "id": "ch-bac-math-phys-1",
       "name": "Le condensateur",
       "items": [
        {
         "id": "les-bac-math-phys-1-01",
         "type": "cours",
         "title": "Étude expérimentale",
         "refs": [
          "MAHDI-PHYS-026",
          "MAHDI-PHYS-023"
         ]
        },
        {
         "id": "les-bac-math-phys-1-02",
         "type": "cours",
         "title": "Étude théorique",
         "refs": [
          "MAHDI-PHYS-029",
          "MAHDI-PHYS-023"
         ]
        },
        {
         "id": "les-bac-math-phys-1-03",
         "type": "exercice",
         "title": "Exercice 1",
         "refs": [
          "MAHDI-PHYS-024",
          "MAHDI-PHYS-030"
         ]
        },
        {
         "id": "les-bac-math-phys-1-04",
         "type": "exercice",
         "title": "Exercice 2",
         "refs": [
          "MAHDI-PHYS-025",
          "MAHDI-PHYS-030"
         ]
        },
        {
         "id": "les-bac-math-phys-1-05",
         "type": "exercice",
         "title": "Exercice 3",
         "refs": [
          "MAHDI-PHYS-027",
          "MAHDI-PHYS-030"
         ]
        },
        {
         "id": "les-bac-math-phys-1-06",
         "type": "exercice",
         "title": "Exercice 4",
         "refs": [
          "MAHDI-PHYS-028",
          "MAHDI-PHYS-030"
         ]
        }
       ]
      },
      {
       "id": "ch-bac-math-phys-2",
       "name": "RC",
       "items": [
        {
         "id": "les-bac-math-phys-2-01",
         "type": "cours",
         "title": "Dipôle RC : étude expérimentale",
         "refs": [
          "MAHDI-PHYS-066",
          "MAHDI-PHYS-063",
          "MAHDI-PHYS-064"
         ]
        },
        {
         "id": "les-bac-math-phys-2-02",
         "type": "cours",
         "title": "Dipôle RC : étude théorique",
         "refs": [
          "MAHDI-PHYS-065",
          "MAHDI-PHYS-063",
          "MAHDI-PHYS-064"
         ]
        },
        {
         "id": "les-bac-math-phys-2-03",
         "type": "exercice",
         "title": "Exercice 1",
         "refs": [
          "MAHDI-PHYS-057",
          "MAHDI-PHYS-069"
         ]
        },
        {
         "id": "les-bac-math-phys-2-04",
         "type": "exercice",
         "title": "Exercice 2",
         "refs": [
          "MAHDI-PHYS-058",
          "MAHDI-PHYS-069"
         ]
        },
        {
         "id": "les-bac-math-phys-2-05",
         "type": "exercice",
         "title": "Exercice 3",
         "refs": [
          "MAHDI-PHYS-059",
          "MAHDI-PHYS-067"
         ]
        },
        {
         "id": "les-bac-math-phys-2-06",
         "type": "exercice",
         "title": "Exercice 4",
         "refs": [
          "MAHDI-PHYS-060",
          "MAHDI-PHYS-067"
         ]
        },
        {
         "id": "les-bac-math-phys-2-07",
         "type": "exercice",
         "title": "Exercice 5",
         "refs": [
          "MAHDI-PHYS-061",
          "MAHDI-PHYS-068"
         ]
        },
        {
         "id": "les-bac-math-phys-2-08",
         "type": "exercice",
         "title": "Exercice 6",
         "refs": [
          "MAHDI-PHYS-062",
          "MAHDI-PHYS-068"
         ]
        }
       ]
      },
      {
       "id": "ch-bac-math-phys-3",
       "name": "La bobine",
       "items": [
        {
         "id": "les-bac-math-phys-3-01",
         "type": "cours",
         "title": "Bobine",
         "refs": [
          "MAHDI-PHYS-009",
          "MAHDI-PHYS-005",
          "MAHDI-PHYS-006"
         ]
        },
        {
         "id": "les-bac-math-phys-3-02",
         "type": "exercice",
         "title": "Exercice 1",
         "refs": [
          "MAHDI-PHYS-007",
          "MAHDI-PHYS-003"
         ]
        },
        {
         "id": "les-bac-math-phys-3-03",
         "type": "exercice",
         "title": "Exercice 2",
         "refs": [
          "MAHDI-PHYS-008",
          "MAHDI-PHYS-003"
         ]
        },
        {
         "id": "les-bac-math-phys-3-04",
         "type": "exercice",
         "title": "Exercice 3",
         "refs": [
          "MAHDI-PHYS-002",
          "MAHDI-PHYS-004"
         ]
        }
       ]
      },
      {
       "id": "ch-bac-math-phys-4",
       "name": "RL",
       "items": [
        {
         "id": "les-bac-math-phys-4-01",
         "type": "cours",
         "title": "Dipôle RL : étude expérimentale",
         "refs": [
          "MAHDI-PHYS-081",
          "MAHDI-PHYS-084"
         ]
        },
        {
         "id": "les-bac-math-phys-4-02",
         "type": "cours",
         "title": "Dipôle RL : étude théorique",
         "refs": [
          "MAHDI-PHYS-080",
          "MAHDI-PHYS-084"
         ]
        },
        {
         "id": "les-bac-math-phys-4-03",
         "type": "exercice",
         "title": "Exercice 1",
         "refs": [
          "MAHDI-PHYS-075",
          "MAHDI-PHYS-073"
         ]
        },
        {
         "id": "les-bac-math-phys-4-04",
         "type": "exercice",
         "title": "Exercice 2",
         "refs": [
          "MAHDI-PHYS-074",
          "MAHDI-PHYS-073"
         ]
        },
        {
         "id": "les-bac-math-phys-4-05",
         "type": "exercice",
         "title": "Exercice 3",
         "refs": [
          "MAHDI-PHYS-076",
          "MAHDI-PHYS-070"
         ]
        },
        {
         "id": "les-bac-math-phys-4-06",
         "type": "exercice",
         "title": "Exercice 4",
         "refs": [
          "MAHDI-PHYS-077",
          "MAHDI-PHYS-071"
         ]
        },
        {
         "id": "les-bac-math-phys-4-07",
         "type": "exercice",
         "title": "Exercice 5",
         "refs": [
          "MAHDI-PHYS-078",
          "MAHDI-PHYS-072"
         ]
        },
        {
         "id": "les-bac-math-phys-4-08",
         "type": "exercice",
         "title": "Exercice 6",
         "refs": [
          "MAHDI-PHYS-079",
          "MAHDI-PHYS-072"
         ]
        }
       ]
      },
      {
       "id": "ch-bac-math-phys-5",
       "name": "Oscillations libres amorties",
       "items": [
        {
         "id": "les-bac-math-phys-5-01",
         "type": "cours",
         "title": "Oscillations amorties libres : étude expérimentale",
         "refs": [
          "MAHDI-PHYS-033",
          "MAHDI-PHYS-038"
         ]
        },
        {
         "id": "les-bac-math-phys-5-02",
         "type": "cours",
         "title": "Oscillations amorties libres : étude théorique",
         "refs": [
          "MAHDI-PHYS-037",
          "MAHDI-PHYS-038"
         ]
        },
        {
         "id": "les-bac-math-phys-5-03",
         "type": "exercice",
         "title": "Exercice 1",
         "refs": [
          "MAHDI-PHYS-034",
          "MAHDI-PHYS-031"
         ]
        },
        {
         "id": "les-bac-math-phys-5-04",
         "type": "exercice",
         "title": "Exercice 2",
         "refs": [
          "MAHDI-PHYS-035",
          "MAHDI-PHYS-032"
         ]
        },
        {
         "id": "les-bac-math-phys-5-05",
         "type": "exercice",
         "title": "Exercice 3",
         "refs": [
          "MAHDI-PHYS-036",
          "MAHDI-PHYS-032"
         ]
        }
       ]
      },
      {
       "id": "ch-bac-math-phys-6",
       "name": "Oscillations électriques libres non amorties",
       "items": [
        {
         "id": "les-bac-math-phys-6-01",
         "type": "cours",
         "title": "Oscillations non amorties : étude expérimentale",
         "refs": [
          "MAHDI-PHYS-054",
          "MAHDI-PHYS-039"
         ]
        },
        {
         "id": "les-bac-math-phys-6-02",
         "type": "cours",
         "title": "Oscillations non amorties : étude théorique (partie 1)",
         "refs": [
          "MAHDI-PHYS-050",
          "MAHDI-PHYS-039"
         ]
        },
        {
         "id": "les-bac-math-phys-6-03",
         "type": "cours",
         "title": "Oscillations non amorties : étude théorique (partie 2)",
         "refs": [
          "MAHDI-PHYS-053",
          "MAHDI-PHYS-039"
         ]
        },
        {
         "id": "les-bac-math-phys-6-04",
         "type": "exercice",
         "title": "Exercice 1",
         "refs": [
          "MAHDI-PHYS-051",
          "MAHDI-PHYS-040"
         ]
        },
        {
         "id": "les-bac-math-phys-6-05",
         "type": "exercice",
         "title": "Exercice 2",
         "refs": [
          "MAHDI-PHYS-055",
          "MAHDI-PHYS-040"
         ]
        },
        {
         "id": "les-bac-math-phys-6-06",
         "type": "exercice",
         "title": "Exercice 3",
         "refs": [
          "MAHDI-PHYS-052",
          "MAHDI-PHYS-041"
         ]
        },
        {
         "id": "les-bac-math-phys-6-07",
         "type": "exercice",
         "title": "Exercice 4",
         "refs": [
          "MAHDI-PHYS-043",
          "MAHDI-PHYS-041"
         ]
        },
        {
         "id": "les-bac-math-phys-6-08",
         "type": "exercice",
         "title": "Exercice 5",
         "refs": [
          "MAHDI-PHYS-044",
          "MAHDI-PHYS-042"
         ]
        }
       ]
      },
      {
       "id": "ch-bac-math-phys-7",
       "name": "Cinétique chimique",
       "items": [
        {
         "id": "les-bac-math-phys-7-01",
         "type": "cours",
         "title": "Avancement d'une réaction chimique",
         "refs": [
          "MAHDI-PHYS-010",
          "MAHDI-PHYS-020"
         ]
        },
        {
         "id": "les-bac-math-phys-7-02",
         "type": "cours",
         "title": "Vitesse d'une réaction chimique",
         "refs": [
          "MAHDI-PHYS-022",
          "MAHDI-PHYS-020"
         ]
        },
        {
         "id": "les-bac-math-phys-7-03",
         "type": "cours",
         "title": "Notion d'équilibre chimique et estérification",
         "refs": [
          "MAHDI-PHYS-019",
          "MAHDI-PHYS-021"
         ]
        },
        {
         "id": "les-bac-math-phys-7-04",
         "type": "cours",
         "title": "Loi d'action de masse",
         "refs": [
          "MAHDI-PHYS-018",
          "MAHDI-PHYS-021"
         ]
        },
        {
         "id": "les-bac-math-phys-7-05",
         "type": "exercice",
         "title": "Exercice 1 : cinétique chimique",
         "refs": [
          "MAHDI-PHYS-014",
          "MAHDI-PHYS-020"
         ]
        },
        {
         "id": "les-bac-math-phys-7-06",
         "type": "exercice",
         "title": "Exercice 2 : cinétique chimique",
         "refs": [
          "MAHDI-PHYS-012",
          "MAHDI-PHYS-020"
         ]
        },
        {
         "id": "les-bac-math-phys-7-07",
         "type": "exercice",
         "title": "Exercice 3 : cinétique chimique",
         "refs": [
          "MAHDI-PHYS-011",
          "MAHDI-PHYS-020"
         ]
        },
        {
         "id": "les-bac-math-phys-7-08",
         "type": "exercice",
         "title": "Exercice 4 : cinétique chimique",
         "refs": [
          "MAHDI-PHYS-013",
          "MAHDI-PHYS-020"
         ]
        },
        {
         "id": "les-bac-math-phys-7-09",
         "type": "exercice",
         "title": "Exercice 1 : équilibre chimique",
         "refs": [
          "MAHDI-PHYS-015",
          "MAHDI-PHYS-021"
         ]
        },
        {
         "id": "les-bac-math-phys-7-10",
         "type": "exercice",
         "title": "Exercice 2 : équilibre chimique",
         "refs": [
          "MAHDI-PHYS-016",
          "MAHDI-PHYS-021"
         ]
        },
        {
         "id": "les-bac-math-phys-7-11",
         "type": "exercice",
         "title": "Exercice 3 : équilibre chimique",
         "refs": [
          "MAHDI-PHYS-017",
          "MAHDI-PHYS-021"
         ]
        }
       ]
      }
     ]
    },
    {
     "id": "subj-bac-math-sciences-de-la-vie-et-de-la-terre",
     "name": "Bac Math - SVT",
     "chapitres": [
      {
       "id": "ch-bac-math-svt-1",
       "name": "Chapitre 1 : La fonction reproductrice chez l'homme",
       "items": [
        {
         "id": "les-bac-math-svt-1-01",
         "type": "cours",
         "title": "La fonction reproductrice chez l'homme",
         "refs": [
          "MOHSSEN-SVT-018",
          "cours 1/cours 1 la fonction reproductrice chez  l_homme.pdf"
         ]
        },
        {
         "id": "les-bac-math-svt-1-02",
         "type": "cours",
         "title": "Fonctions des testicules",
         "refs": [
          "MOHSSEN-SVT-024",
          "MOHSSEN-SVT-023"
         ]
        },
        {
         "id": "les-bac-math-svt-1-03",
         "type": "cours",
         "title": "Contrôle de l'activité testiculaire",
         "refs": [
          "MOHSSEN-SVT-025",
          "MOHSSEN-SVT-026"
         ]
        },
        {
         "id": "les-bac-math-svt-1-04",
         "type": "exercice",
         "title": "Exercice typique homme",
         "refs": [
          "MOHSSEN-SVT-001",
          "MOHSSEN-SVT-002"
         ]
        }
       ]
      },
      {
       "id": "ch-bac-math-svt-2",
       "name": "Chapitre 2 : La fonction reproductrice chez la femme",
       "items": [
        {
         "id": "les-bac-math-svt-1-05",
         "type": "cours",
         "title": "La fonction reproductrice chez la femme",
         "refs": [
          "MOHSSEN-SVT-027",
          "MOHSSEN-SVT-028"
         ]
        },
        {
         "id": "les-bac-math-svt-1-06",
         "type": "cours",
         "title": "L'appareil reproducteur de la femme",
         "refs": [
          "MOHSSEN-SVT-029",
          "cours 5/la fonction reproductrice chez la femme .pdf"
         ]
        },
        {
         "id": "les-bac-math-svt-1-07",
         "type": "cours",
         "title": "Cycles sexuels",
         "refs": [
          "MOHSSEN-SVT-032",
          "MOHSSEN-SVT-031"
         ]
        },
        {
         "id": "les-bac-math-svt-1-08",
         "type": "cours",
         "title": "Cycle ovarien hormonal",
         "refs": [
          "MOHSSEN-SVT-034",
          "MOHSSEN-SVT-033"
         ]
        },
        {
         "id": "les-bac-math-svt-1-09",
         "type": "exercice",
         "title": "Exercice typique femme",
         "refs": [
          "MOHSSEN-SVT-003",
          "MOHSSEN-SVT-004"
         ]
        },
        {
         "id": "les-bac-math-svt-1-10",
         "type": "cours",
         "title": "Régulation du cycle sexuel",
         "refs": [
          "MOHSSEN-SVT-036",
          "cours 8/L8 regulation du cycle sexul.pdf"
         ]
        }
       ]
      },
      {
       "id": "ch-bac-math-svt-3",
       "name": "Chapitre 3 : La procréation",
       "items": [
        {
         "id": "les-bac-math-svt-1-11",
         "type": "cours",
         "title": "La procréation",
         "refs": [
          "MOHSSEN-SVT-038",
          "MOHSSEN-SVT-037"
         ]
        },
        {
         "id": "les-bac-math-svt-1-12",
         "type": "cours",
         "title": "Nidation et rôle du placenta",
         "refs": [
          "MOHSSEN-SVT-019",
          "cours 10/nidation et role du placenta .pdf"
         ]
        },
        {
         "id": "les-bac-math-svt-1-13",
         "type": "cours",
         "title": "Maîtrise de la procréation",
         "refs": [
          "MOHSSEN-SVT-022",
          "cours 11/L 11 maitrise de la procréation.pdf"
         ]
        },
        {
         "id": "les-bac-math-svt-1-14",
         "type": "exercice",
         "title": "Exercice typique procréation",
         "refs": [
          "MOHSSEN-SVT-005",
          "MOHSSEN-SVT-006"
         ]
        },
        {
         "id": "les-bac-math-svt-1-15",
         "type": "exercice",
         "title": "QCM : reproduction humaine et santé",
         "refs": [
          "MOHSSEN-SVT-008",
          "MOHSSEN-SVT-007"
         ]
        }
       ]
      },
      {
       "id": "ch-bac-math-svt-4",
       "name": "Chapitre 4 : La génétique",
       "items": [
        {
         "id": "les-bac-math-svt-2-01",
         "type": "cours",
         "title": "Brassage de l'information génétique au cours de la reproduction sexuée",
         "refs": [
          "MOHSSEN-SVT-051",
          "MOHSSEN-SVT-050"
         ]
        },
        {
         "id": "les-bac-math-svt-2-02",
         "type": "cours",
         "title": "Rappels de génétique formelle et monohybridisme",
         "refs": [
          "MOHSSEN-SVT-041"
         ]
        },
        {
         "id": "les-bac-math-svt-2-03",
         "type": "cours",
         "title": "Deux gènes indépendants avec dominance absolue",
         "refs": [
          "MOHSSEN-SVT-044",
          "MOHSSEN-SVT-042",
          "MOHSSEN-SVT-043"
         ]
        },
        {
         "id": "les-bac-math-svt-2-04",
         "type": "cours",
         "title": "Deux gènes liés liaison partielle",
         "refs": [
          "MOHSSEN-SVT-046",
          "MOHSSEN-SVT-045",
          "MOHSSEN-SVT-047"
         ]
        },
        {
         "id": "les-bac-math-svt-2-05",
         "type": "cours",
         "title": "Deux gènes liés liaison totale",
         "refs": [
          "MOHSSEN-SVT-048",
          "MOHSSEN-SVT-049"
         ]
        },
        {
         "id": "les-bac-math-svt-2-06",
         "type": "exercice",
         "title": "Exercice : génétique des diploïdes",
         "refs": [
          "MOHSSEN-SVT-013",
          "MOHSSEN-SVT-014"
         ]
        },
        {
         "id": "les-bac-math-svt-2-07",
         "type": "exercice",
         "title": "Méthodologie génétique des diploïdes",
         "refs": [
          "MOHSSEN-SVT-015",
          "MOHSSEN-SVT-016"
         ]
        }
       ]
      }
     ]
    },
    {
     "id": "subj-bac-math-philosophie",
     "name": "Bac Math - فلسفة",
     "chapitres": [
      {
       "id": "ch-bac-math-philo-1",
       "name": "محور الانية و الغيرية",
       "items": [
        {
         "id": "les-bac-math-philo-1-01",
         "type": "cours",
         "title": "تمهيد محور الإنية و الغيرية",
         "refs": [
          "WALID-PHILO-009",
          "WALID-PHILO-012"
         ]
        },
        {
         "id": "les-bac-math-philo-1-02",
         "type": "cours",
         "title": "تعالي الانية على الغيرية",
         "refs": [
          "WALID-PHILO-008",
          "WALID-PHILO-012"
         ]
        },
        {
         "id": "les-bac-math-philo-1-03",
         "type": "cours",
         "title": "الانية بما هي ذات واعية (ديكارت)",
         "refs": [
          "WALID-PHILO-001",
          "WALID-PHILO-012"
         ]
        },
        {
         "id": "les-bac-math-philo-1-04",
         "type": "cours",
         "title": "في جدلية الانية و الغيرية",
         "refs": [
          "WALID-PHILO-011",
          "WALID-PHILO-012"
         ]
        },
        {
         "id": "les-bac-math-philo-1-05",
         "type": "cours",
         "title": "الذات المتجسدة",
         "refs": [
          "WALID-PHILO-003",
          "WALID-PHILO-012"
         ]
        },
        {
         "id": "les-bac-math-philo-1-06",
         "type": "cours",
         "title": "تاسيس انطولوجيا جديدة للجسد",
         "refs": [
          "WALID-PHILO-007",
          "WALID-PHILO-012"
         ]
        },
        {
         "id": "les-bac-math-philo-1-07",
         "type": "cours",
         "title": "الوعي بما هو تشكل تاريخي",
         "refs": [
          "WALID-PHILO-005",
          "WALID-PHILO-012"
         ]
        },
        {
         "id": "les-bac-math-philo-1-08",
         "type": "cours",
         "title": "الوعي بناء تاريخي (ماركس)",
         "refs": [
          "WALID-PHILO-006",
          "WALID-PHILO-012"
         ]
        },
        {
         "id": "les-bac-math-philo-1-09",
         "type": "cours",
         "title": "جدلية الوعي و اللاوعي",
         "refs": [
          "WALID-PHILO-010",
          "WALID-PHILO-012"
         ]
        },
        {
         "id": "les-bac-math-philo-1-10",
         "type": "cours",
         "title": "التكامل بين الوعي و الاوعي",
         "refs": [
          "WALID-PHILO-002",
          "WALID-PHILO-012"
         ]
        },
        {
         "id": "les-bac-math-philo-1-11",
         "type": "cours",
         "title": "الغيرية كامنة في الذات",
         "refs": [
          "WALID-PHILO-004",
          "WALID-PHILO-012"
         ]
        }
       ]
      }
     ]
    },
    {
     "id": "subj-bac-math-francais",
     "name": "Bac Math - Français",
     "chapitres": [
      {
       "id": "ch-bac-math-fr-1",
       "name": "Module 1 : Souvenirs et nostalgie",
       "items": [
        {
         "id": "les-bac-math-fr-1-01",
         "type": "cours",
         "title": "Vocabulaire",
         "refs": [
          "RAOUEDHA-FR-017",
          "RAOUEDHA-FR-018"
         ]
        },
        {
         "id": "les-bac-math-fr-1-02",
         "type": "cours",
         "title": "La cause et la conséquence",
         "refs": [
          "RAOUEDHA-FR-012",
          "RAOUEDHA-FR-013"
         ]
        },
        {
         "id": "les-bac-math-fr-1-03",
         "type": "exercice",
         "title": "Exercice cause et conséquence",
         "refs": [
          "RAOUEDHA-FR-010",
          "RAOUEDHA-FR-011"
         ]
        },
        {
         "id": "les-bac-math-fr-1-04",
         "type": "cours",
         "title": "Texte explicatif, texte argumentatif : quelle différence ?",
         "refs": [
          "RAOUEDHA-FR-019",
          "RAOUEDHA-FR-014"
         ]
        },
        {
         "id": "les-bac-math-fr-1-05",
         "type": "cours",
         "title": "Expression écrite : texte explicatif",
         "refs": [
          "RAOUEDHA-FR-020",
          "RAOUEDHA-FR-021"
         ]
        },
        {
         "id": "les-bac-math-fr-1-06",
         "type": "cours",
         "title": "Expression écrite : texte explicatif (application)",
         "refs": [
          "RAOUEDHA-FR-022",
          "RAOUEDHA-FR-023"
         ]
        },
        {
         "id": "les-bac-math-fr-1-07",
         "type": "cours",
         "title": "Étude de texte : lire et comprendre une question de compréhension",
         "refs": [
          "RAOUEDHA-FR-025",
          "RAOUEDHA-FR-024"
         ]
        },
        {
         "id": "les-bac-math-fr-1-08",
         "type": "cours",
         "title": "Répondre à une question portant sur les procédés d'écriture (application)",
         "refs": [
          "RAOUEDHA-FR-016",
          "RAOUEDHA-FR-015"
         ]
        }
       ]
      },
      {
       "id": "ch-bac-math-fr-2",
       "name": "Module 2 : Histoire d'amour",
       "items": [
        {
         "id": "les-bac-math-fr-2-01",
         "type": "cours",
         "title": "Le but",
         "refs": [
          "RAOUEDHA-FR-007",
          "RAOUEDHA-FR-001"
         ]
        },
        {
         "id": "les-bac-math-fr-2-02",
         "type": "exercice",
         "title": "Le but : exercices",
         "refs": [
          "RAOUEDHA-FR-005",
          "RAOUEDHA-FR-006"
         ]
        },
        {
         "id": "les-bac-math-fr-2-03",
         "type": "cours",
         "title": "Étude de texte : répondre aux questions de compréhension",
         "refs": [
          "RAOUEDHA-FR-008",
          "RAOUEDHA-FR-009"
         ]
        },
        {
         "id": "les-bac-math-fr-2-04",
         "type": "cours",
         "title": "Expression écrite : le point de vue absolu",
         "refs": [
          "RAOUEDHA-FR-003",
          "RAOUEDHA-FR-002"
         ]
        }
       ]
      }
     ]
    },
    {
     "id": "subj-bac-math-arabe",
     "name": "Bac Math - عربية",
     "chapitres": [
      {
       "id": "ch-bac-math-ar-1",
       "name": "محور 1 في التفكير العلمي",
       "items": [
        {
         "id": "les-bac-math-ar-1-01",
         "type": "cours",
         "title": "العوامل التي ساعدت العرب على الإبداع",
         "refs": [
          "NAJEH-AR-045"
         ]
        },
        {
         "id": "les-bac-math-ar-1-02",
         "type": "cours",
         "title": "المناهج العلمية وصفات العالم المسلم",
         "refs": [
          "NAJEH-AR-047"
         ]
        },
        {
         "id": "les-bac-math-ar-1-03",
         "type": "cours",
         "title": "العلوم العربية",
         "refs": [
          "NAJEH-AR-043"
         ]
        },
        {
         "id": "les-bac-math-ar-1-04",
         "type": "exercice",
         "title": "التدرب على فقرة حجاجية",
         "refs": [
          "NAJEH-AR-044"
         ]
        }
       ]
      },
      {
       "id": "ch-bac-math-ar-2",
       "name": "محور 2 في الأدب والفن",
       "items": [
        {
         "id": "les-bac-math-ar-2-01",
         "type": "cours",
         "title": "الأدب والشعر",
         "refs": [
          "NAJEH-AR-048"
         ]
        },
        {
         "id": "les-bac-math-ar-2-02",
         "type": "cours",
         "title": "الأدب نثرا ونقدا",
         "refs": [
          "NAJEH-AR-049"
         ]
        },
        {
         "id": "les-bac-math-ar-2-03",
         "type": "cours",
         "title": "الفن",
         "refs": [
          "NAJEH-AR-050"
         ]
        },
        {
         "id": "les-bac-math-ar-2-04",
         "type": "cours",
         "title": "الاجابة على أهم الأسئلة",
         "refs": [
          "NAJEH-AR-051"
         ]
        },
        {
         "id": "les-bac-math-ar-2-05",
         "type": "exercice",
         "title": "اصلاح فرض حول محور الأدب والفن",
         "refs": [
          "NAJEH-AR-052"
         ]
        }
       ]
      }
     ]
    },
    {
     "id": "subj-bac-math-anglais",
     "name": "Bac Math - Anglais",
     "chapitres": []
    },
    {
     "id": "subj-bac-math-italien",
     "name": "Bac Math - Italien",
     "chapitres": []
    },
    {
     "id": "subj-bac-math-informatique",
     "name": "Bac Math - Informatique",
     "chapitres": []
    },
    {
     "id": "subj-bac-math-chinois",
     "name": "Bac Math - Chinois",
     "chapitres": []
    },
    {
     "id": "subj-bac-math-dessin",
     "name": "Bac Math - Dessin",
     "chapitres": []
    },
    {
     "id": "subj-bac-math-musique",
     "name": "Bac Math - Musique",
     "chapitres": []
    },
    {
     "id": "subj-bac-math-portugais",
     "name": "Bac Math - Portugais",
     "chapitres": []
    },
    {
     "id": "subj-bac-math-russe",
     "name": "Bac Math - Russe",
     "chapitres": []
    },
    {
     "id": "subj-bac-math-turc",
     "name": "Bac Math - Turc",
     "chapitres": []
    },
    {
     "id": "subj-bac-math-allemand",
     "name": "Bac Math - Allemand",
     "chapitres": []
    },
    {
     "id": "subj-bac-math-espagnol",
     "name": "Bac Math - Espagnol",
     "chapitres": []
    },
    {
     "id": "subj-bac-math-mae-wael",
     "name": "Bac Math - مع وائل",
     "chapitres": []
    }
   ]
  },
  {
   "id": "y-bac-sci",
   "name": "باك — علوم تجريبية",
   "matieres": [
    {
     "id": "subj-bac-sci-sciences-de-la-vie-et-de-la-terre",
     "name": "Bac Sciences - SVT",
     "chapitres": [
      {
       "id": "ch-bac-sci-svt-1",
       "name": "Chapitre 1 : La fonction reproductrice chez l'homme",
       "items": [
        {
         "id": "les-bac-sci-svt-1-01",
         "type": "cours",
         "title": "La fonction reproductrice chez l'homme",
         "refs": [
          "MOHSSEN-SVT-018",
          "cours 1/cours 1 la fonction reproductrice chez  l_homme.pdf"
         ]
        },
        {
         "id": "les-bac-sci-svt-1-02",
         "type": "cours",
         "title": "Fonctions des testicules",
         "refs": [
          "MOHSSEN-SVT-024",
          "MOHSSEN-SVT-023"
         ]
        },
        {
         "id": "les-bac-sci-svt-1-03",
         "type": "cours",
         "title": "Contrôle de l'activité testiculaire",
         "refs": [
          "MOHSSEN-SVT-025",
          "MOHSSEN-SVT-026"
         ]
        },
        {
         "id": "les-bac-sci-svt-1-04",
         "type": "exercice",
         "title": "Exercice typique homme",
         "refs": [
          "MOHSSEN-SVT-001",
          "MOHSSEN-SVT-002"
         ]
        }
       ]
      },
      {
       "id": "ch-bac-sci-svt-2",
       "name": "Chapitre 2 : La fonction reproductrice chez la femme",
       "items": [
        {
         "id": "les-bac-sci-svt-1-05",
         "type": "cours",
         "title": "La fonction reproductrice chez la femme",
         "refs": [
          "MOHSSEN-SVT-027",
          "MOHSSEN-SVT-028"
         ]
        },
        {
         "id": "les-bac-sci-svt-1-06",
         "type": "cours",
         "title": "L'appareil reproducteur de la femme",
         "refs": [
          "MOHSSEN-SVT-029",
          "cours 5/la fonction reproductrice chez la femme .pdf"
         ]
        },
        {
         "id": "les-bac-sci-svt-1-07",
         "type": "cours",
         "title": "Cycles sexuels",
         "refs": [
          "MOHSSEN-SVT-032",
          "MOHSSEN-SVT-031"
         ]
        },
        {
         "id": "les-bac-sci-svt-1-08",
         "type": "cours",
         "title": "Cycle ovarien hormonal",
         "refs": [
          "MOHSSEN-SVT-034",
          "MOHSSEN-SVT-033"
         ]
        },
        {
         "id": "les-bac-sci-svt-1-09",
         "type": "exercice",
         "title": "Exercice typique femme",
         "refs": [
          "MOHSSEN-SVT-003",
          "MOHSSEN-SVT-004"
         ]
        },
        {
         "id": "les-bac-sci-svt-1-10",
         "type": "cours",
         "title": "Régulation du cycle sexuel",
         "refs": [
          "MOHSSEN-SVT-036",
          "cours 8/L8 regulation du cycle sexul.pdf"
         ]
        }
       ]
      },
      {
       "id": "ch-bac-sci-svt-3",
       "name": "Chapitre 3 : La procréation",
       "items": [
        {
         "id": "les-bac-sci-svt-1-11",
         "type": "cours",
         "title": "La procréation",
         "refs": [
          "MOHSSEN-SVT-038",
          "MOHSSEN-SVT-037"
         ]
        },
        {
         "id": "les-bac-sci-svt-1-12",
         "type": "cours",
         "title": "Nidation et rôle du placenta",
         "refs": [
          "MOHSSEN-SVT-019",
          "cours 10/nidation et role du placenta .pdf"
         ]
        },
        {
         "id": "les-bac-sci-svt-1-13",
         "type": "cours",
         "title": "Maîtrise de la procréation",
         "refs": [
          "MOHSSEN-SVT-022",
          "cours 11/L 11 maitrise de la procréation.pdf"
         ]
        },
        {
         "id": "les-bac-sci-svt-1-14",
         "type": "exercice",
         "title": "Exercice typique procréation",
         "refs": [
          "MOHSSEN-SVT-005",
          "MOHSSEN-SVT-006"
         ]
        },
        {
         "id": "les-bac-sci-svt-1-15",
         "type": "exercice",
         "title": "QCM : reproduction humaine et santé",
         "refs": [
          "MOHSSEN-SVT-008",
          "MOHSSEN-SVT-007"
         ]
        }
       ]
      },
      {
       "id": "ch-bac-sci-svt-4",
       "name": "Chapitre 4 : La génétique",
       "items": [
        {
         "id": "les-bac-sci-svt-2-01",
         "type": "cours",
         "title": "Brassage de l'information génétique au cours de la reproduction sexuée",
         "refs": [
          "MOHSSEN-SVT-051",
          "MOHSSEN-SVT-050"
         ]
        },
        {
         "id": "les-bac-sci-svt-2-02",
         "type": "cours",
         "title": "Rappels de génétique formelle et monohybridisme",
         "refs": [
          "MOHSSEN-SVT-041"
         ]
        },
        {
         "id": "les-bac-sci-svt-2-03",
         "type": "cours",
         "title": "Deux gènes indépendants avec dominance absolue",
         "refs": [
          "MOHSSEN-SVT-044",
          "MOHSSEN-SVT-042",
          "MOHSSEN-SVT-043"
         ]
        },
        {
         "id": "les-bac-sci-svt-2-04",
         "type": "cours",
         "title": "Deux gènes liés liaison partielle",
         "refs": [
          "MOHSSEN-SVT-046",
          "MOHSSEN-SVT-045",
          "MOHSSEN-SVT-047"
         ]
        },
        {
         "id": "les-bac-sci-svt-2-05",
         "type": "cours",
         "title": "Deux gènes liés liaison totale",
         "refs": [
          "MOHSSEN-SVT-048",
          "MOHSSEN-SVT-049"
         ]
        },
        {
         "id": "les-bac-sci-svt-2-06",
         "type": "exercice",
         "title": "Exercice : génétique des diploïdes",
         "refs": [
          "MOHSSEN-SVT-013",
          "MOHSSEN-SVT-014"
         ]
        },
        {
         "id": "les-bac-sci-svt-2-07",
         "type": "exercice",
         "title": "Méthodologie génétique des diploïdes",
         "refs": [
          "MOHSSEN-SVT-015",
          "MOHSSEN-SVT-016"
         ]
        }
       ]
      }
     ]
    },
    {
     "id": "subj-bac-sci-sciences-physiques",
     "name": "Bac Sciences - Physique",
     "chapitres": [
      {
       "id": "ch-bac-sci-phys-1",
       "name": "Le condensateur",
       "items": [
        {
         "id": "les-bac-sci-phys-1-01",
         "type": "cours",
         "title": "Étude expérimentale",
         "refs": [
          "MAHDI-PHYS-026",
          "MAHDI-PHYS-023"
         ]
        },
        {
         "id": "les-bac-sci-phys-1-02",
         "type": "cours",
         "title": "Étude théorique",
         "refs": [
          "MAHDI-PHYS-029",
          "MAHDI-PHYS-023"
         ]
        },
        {
         "id": "les-bac-sci-phys-1-03",
         "type": "exercice",
         "title": "Exercice 1",
         "refs": [
          "MAHDI-PHYS-024",
          "MAHDI-PHYS-030"
         ]
        },
        {
         "id": "les-bac-sci-phys-1-04",
         "type": "exercice",
         "title": "Exercice 2",
         "refs": [
          "MAHDI-PHYS-025",
          "MAHDI-PHYS-030"
         ]
        },
        {
         "id": "les-bac-sci-phys-1-05",
         "type": "exercice",
         "title": "Exercice 3",
         "refs": [
          "MAHDI-PHYS-027",
          "MAHDI-PHYS-030"
         ]
        },
        {
         "id": "les-bac-sci-phys-1-06",
         "type": "exercice",
         "title": "Exercice 4",
         "refs": [
          "MAHDI-PHYS-028",
          "MAHDI-PHYS-030"
         ]
        }
       ]
      },
      {
       "id": "ch-bac-sci-phys-2",
       "name": "RC",
       "items": [
        {
         "id": "les-bac-sci-phys-2-01",
         "type": "cours",
         "title": "Dipôle RC : étude expérimentale",
         "refs": [
          "MAHDI-PHYS-066",
          "MAHDI-PHYS-063",
          "MAHDI-PHYS-064"
         ]
        },
        {
         "id": "les-bac-sci-phys-2-02",
         "type": "cours",
         "title": "Dipôle RC : étude théorique",
         "refs": [
          "MAHDI-PHYS-065",
          "MAHDI-PHYS-063",
          "MAHDI-PHYS-064"
         ]
        },
        {
         "id": "les-bac-sci-phys-2-03",
         "type": "exercice",
         "title": "Exercice 1",
         "refs": [
          "MAHDI-PHYS-057",
          "MAHDI-PHYS-069"
         ]
        },
        {
         "id": "les-bac-sci-phys-2-04",
         "type": "exercice",
         "title": "Exercice 2",
         "refs": [
          "MAHDI-PHYS-058",
          "MAHDI-PHYS-069"
         ]
        },
        {
         "id": "les-bac-sci-phys-2-05",
         "type": "exercice",
         "title": "Exercice 3",
         "refs": [
          "MAHDI-PHYS-059",
          "MAHDI-PHYS-067"
         ]
        },
        {
         "id": "les-bac-sci-phys-2-06",
         "type": "exercice",
         "title": "Exercice 4",
         "refs": [
          "MAHDI-PHYS-060",
          "MAHDI-PHYS-067"
         ]
        },
        {
         "id": "les-bac-sci-phys-2-07",
         "type": "exercice",
         "title": "Exercice 5",
         "refs": [
          "MAHDI-PHYS-061",
          "MAHDI-PHYS-068"
         ]
        },
        {
         "id": "les-bac-sci-phys-2-08",
         "type": "exercice",
         "title": "Exercice 6",
         "refs": [
          "MAHDI-PHYS-062",
          "MAHDI-PHYS-068"
         ]
        }
       ]
      },
      {
       "id": "ch-bac-sci-phys-3",
       "name": "La bobine",
       "items": [
        {
         "id": "les-bac-sci-phys-3-01",
         "type": "cours",
         "title": "Bobine",
         "refs": [
          "MAHDI-PHYS-009",
          "MAHDI-PHYS-005",
          "MAHDI-PHYS-006"
         ]
        },
        {
         "id": "les-bac-sci-phys-3-02",
         "type": "exercice",
         "title": "Exercice 1",
         "refs": [
          "MAHDI-PHYS-007",
          "MAHDI-PHYS-003"
         ]
        },
        {
         "id": "les-bac-sci-phys-3-03",
         "type": "exercice",
         "title": "Exercice 2",
         "refs": [
          "MAHDI-PHYS-008",
          "MAHDI-PHYS-003"
         ]
        },
        {
         "id": "les-bac-sci-phys-3-04",
         "type": "exercice",
         "title": "Exercice 3",
         "refs": [
          "MAHDI-PHYS-002",
          "MAHDI-PHYS-004"
         ]
        }
       ]
      },
      {
       "id": "ch-bac-sci-phys-4",
       "name": "RL",
       "items": [
        {
         "id": "les-bac-sci-phys-4-01",
         "type": "cours",
         "title": "Dipôle RL : étude expérimentale",
         "refs": [
          "MAHDI-PHYS-081",
          "MAHDI-PHYS-084"
         ]
        },
        {
         "id": "les-bac-sci-phys-4-02",
         "type": "cours",
         "title": "Dipôle RL : étude théorique",
         "refs": [
          "MAHDI-PHYS-080",
          "MAHDI-PHYS-084"
         ]
        },
        {
         "id": "les-bac-sci-phys-4-03",
         "type": "exercice",
         "title": "Exercice 1",
         "refs": [
          "MAHDI-PHYS-075",
          "MAHDI-PHYS-073"
         ]
        },
        {
         "id": "les-bac-sci-phys-4-04",
         "type": "exercice",
         "title": "Exercice 2",
         "refs": [
          "MAHDI-PHYS-074",
          "MAHDI-PHYS-073"
         ]
        },
        {
         "id": "les-bac-sci-phys-4-05",
         "type": "exercice",
         "title": "Exercice 3",
         "refs": [
          "MAHDI-PHYS-076",
          "MAHDI-PHYS-070"
         ]
        },
        {
         "id": "les-bac-sci-phys-4-06",
         "type": "exercice",
         "title": "Exercice 4",
         "refs": [
          "MAHDI-PHYS-077",
          "MAHDI-PHYS-071"
         ]
        },
        {
         "id": "les-bac-sci-phys-4-07",
         "type": "exercice",
         "title": "Exercice 5",
         "refs": [
          "MAHDI-PHYS-078",
          "MAHDI-PHYS-072"
         ]
        },
        {
         "id": "les-bac-sci-phys-4-08",
         "type": "exercice",
         "title": "Exercice 6",
         "refs": [
          "MAHDI-PHYS-079",
          "MAHDI-PHYS-072"
         ]
        }
       ]
      },
      {
       "id": "ch-bac-sci-phys-5",
       "name": "Oscillations libres amorties",
       "items": [
        {
         "id": "les-bac-sci-phys-5-01",
         "type": "cours",
         "title": "Oscillations amorties libres : étude expérimentale",
         "refs": [
          "MAHDI-PHYS-033",
          "MAHDI-PHYS-038"
         ]
        },
        {
         "id": "les-bac-sci-phys-5-02",
         "type": "cours",
         "title": "Oscillations amorties libres : étude théorique",
         "refs": [
          "MAHDI-PHYS-037",
          "MAHDI-PHYS-038"
         ]
        },
        {
         "id": "les-bac-sci-phys-5-03",
         "type": "exercice",
         "title": "Exercice 1",
         "refs": [
          "MAHDI-PHYS-034",
          "MAHDI-PHYS-031"
         ]
        },
        {
         "id": "les-bac-sci-phys-5-04",
         "type": "exercice",
         "title": "Exercice 2",
         "refs": [
          "MAHDI-PHYS-035",
          "MAHDI-PHYS-032"
         ]
        },
        {
         "id": "les-bac-sci-phys-5-05",
         "type": "exercice",
         "title": "Exercice 3",
         "refs": [
          "MAHDI-PHYS-036",
          "MAHDI-PHYS-032"
         ]
        }
       ]
      },
      {
       "id": "ch-bac-sci-phys-6",
       "name": "Oscillations électriques libres non amorties",
       "items": [
        {
         "id": "les-bac-sci-phys-6-01",
         "type": "cours",
         "title": "Oscillations non amorties : étude expérimentale",
         "refs": [
          "MAHDI-PHYS-054",
          "MAHDI-PHYS-039"
         ]
        },
        {
         "id": "les-bac-sci-phys-6-02",
         "type": "cours",
         "title": "Oscillations non amorties : étude théorique (partie 1)",
         "refs": [
          "MAHDI-PHYS-050",
          "MAHDI-PHYS-039"
         ]
        },
        {
         "id": "les-bac-sci-phys-6-03",
         "type": "cours",
         "title": "Oscillations non amorties : étude théorique (partie 2)",
         "refs": [
          "MAHDI-PHYS-053",
          "MAHDI-PHYS-039"
         ]
        },
        {
         "id": "les-bac-sci-phys-6-04",
         "type": "exercice",
         "title": "Exercice 1",
         "refs": [
          "MAHDI-PHYS-051",
          "MAHDI-PHYS-040"
         ]
        },
        {
         "id": "les-bac-sci-phys-6-05",
         "type": "exercice",
         "title": "Exercice 2",
         "refs": [
          "MAHDI-PHYS-055",
          "MAHDI-PHYS-040"
         ]
        },
        {
         "id": "les-bac-sci-phys-6-06",
         "type": "exercice",
         "title": "Exercice 3",
         "refs": [
          "MAHDI-PHYS-052",
          "MAHDI-PHYS-041"
         ]
        },
        {
         "id": "les-bac-sci-phys-6-07",
         "type": "exercice",
         "title": "Exercice 4",
         "refs": [
          "MAHDI-PHYS-043",
          "MAHDI-PHYS-041"
         ]
        },
        {
         "id": "les-bac-sci-phys-6-08",
         "type": "exercice",
         "title": "Exercice 5",
         "refs": [
          "MAHDI-PHYS-044",
          "MAHDI-PHYS-042"
         ]
        }
       ]
      },
      {
       "id": "ch-bac-sci-phys-7",
       "name": "Cinétique chimique",
       "items": [
        {
         "id": "les-bac-sci-phys-7-01",
         "type": "cours",
         "title": "Avancement d'une réaction chimique",
         "refs": [
          "MAHDI-PHYS-010",
          "MAHDI-PHYS-020"
         ]
        },
        {
         "id": "les-bac-sci-phys-7-02",
         "type": "cours",
         "title": "Vitesse d'une réaction chimique",
         "refs": [
          "MAHDI-PHYS-022",
          "MAHDI-PHYS-020"
         ]
        },
        {
         "id": "les-bac-sci-phys-7-03",
         "type": "cours",
         "title": "Notion d'équilibre chimique et estérification",
         "refs": [
          "MAHDI-PHYS-019",
          "MAHDI-PHYS-021"
         ]
        },
        {
         "id": "les-bac-sci-phys-7-04",
         "type": "cours",
         "title": "Loi d'action de masse",
         "refs": [
          "MAHDI-PHYS-018",
          "MAHDI-PHYS-021"
         ]
        },
        {
         "id": "les-bac-sci-phys-7-05",
         "type": "exercice",
         "title": "Exercice 1 : cinétique chimique",
         "refs": [
          "MAHDI-PHYS-014",
          "MAHDI-PHYS-020"
         ]
        },
        {
         "id": "les-bac-sci-phys-7-06",
         "type": "exercice",
         "title": "Exercice 2 : cinétique chimique",
         "refs": [
          "MAHDI-PHYS-012",
          "MAHDI-PHYS-020"
         ]
        },
        {
         "id": "les-bac-sci-phys-7-07",
         "type": "exercice",
         "title": "Exercice 3 : cinétique chimique",
         "refs": [
          "MAHDI-PHYS-011",
          "MAHDI-PHYS-020"
         ]
        },
        {
         "id": "les-bac-sci-phys-7-08",
         "type": "exercice",
         "title": "Exercice 4 : cinétique chimique",
         "refs": [
          "MAHDI-PHYS-013",
          "MAHDI-PHYS-020"
         ]
        },
        {
         "id": "les-bac-sci-phys-7-09",
         "type": "exercice",
         "title": "Exercice 1 : équilibre chimique",
         "refs": [
          "MAHDI-PHYS-015",
          "MAHDI-PHYS-021"
         ]
        },
        {
         "id": "les-bac-sci-phys-7-10",
         "type": "exercice",
         "title": "Exercice 2 : équilibre chimique",
         "refs": [
          "MAHDI-PHYS-016",
          "MAHDI-PHYS-021"
         ]
        },
        {
         "id": "les-bac-sci-phys-7-11",
         "type": "exercice",
         "title": "Exercice 3 : équilibre chimique",
         "refs": [
          "MAHDI-PHYS-017",
          "MAHDI-PHYS-021"
         ]
        }
       ]
      }
     ]
    },
    {
     "id": "subj-bac-sci-mathematiques",
     "name": "Bac Sciences - Maths",
     "chapitres": []
    },
    {
     "id": "subj-bac-sci-philosophie",
     "name": "Bac Sciences - فلسفة",
     "chapitres": [
      {
       "id": "ch-bac-sci-philo-1",
       "name": "محور الانية و الغيرية",
       "items": [
        {
         "id": "les-bac-sci-philo-1-01",
         "type": "cours",
         "title": "تمهيد محور الإنية و الغيرية",
         "refs": [
          "WALID-PHILO-009",
          "WALID-PHILO-012"
         ]
        },
        {
         "id": "les-bac-sci-philo-1-02",
         "type": "cours",
         "title": "تعالي الانية على الغيرية",
         "refs": [
          "WALID-PHILO-008",
          "WALID-PHILO-012"
         ]
        },
        {
         "id": "les-bac-sci-philo-1-03",
         "type": "cours",
         "title": "الانية بما هي ذات واعية (ديكارت)",
         "refs": [
          "WALID-PHILO-001",
          "WALID-PHILO-012"
         ]
        },
        {
         "id": "les-bac-sci-philo-1-04",
         "type": "cours",
         "title": "في جدلية الانية و الغيرية",
         "refs": [
          "WALID-PHILO-011",
          "WALID-PHILO-012"
         ]
        },
        {
         "id": "les-bac-sci-philo-1-05",
         "type": "cours",
         "title": "الذات المتجسدة",
         "refs": [
          "WALID-PHILO-003",
          "WALID-PHILO-012"
         ]
        },
        {
         "id": "les-bac-sci-philo-1-06",
         "type": "cours",
         "title": "تاسيس انطولوجيا جديدة للجسد",
         "refs": [
          "WALID-PHILO-007",
          "WALID-PHILO-012"
         ]
        },
        {
         "id": "les-bac-sci-philo-1-07",
         "type": "cours",
         "title": "الوعي بما هو تشكل تاريخي",
         "refs": [
          "WALID-PHILO-005",
          "WALID-PHILO-012"
         ]
        },
        {
         "id": "les-bac-sci-philo-1-08",
         "type": "cours",
         "title": "الوعي بناء تاريخي (ماركس)",
         "refs": [
          "WALID-PHILO-006",
          "WALID-PHILO-012"
         ]
        },
        {
         "id": "les-bac-sci-philo-1-09",
         "type": "cours",
         "title": "جدلية الوعي و اللاوعي",
         "refs": [
          "WALID-PHILO-010",
          "WALID-PHILO-012"
         ]
        },
        {
         "id": "les-bac-sci-philo-1-10",
         "type": "cours",
         "title": "التكامل بين الوعي و الاوعي",
         "refs": [
          "WALID-PHILO-002",
          "WALID-PHILO-012"
         ]
        },
        {
         "id": "les-bac-sci-philo-1-11",
         "type": "cours",
         "title": "الغيرية كامنة في الذات",
         "refs": [
          "WALID-PHILO-004",
          "WALID-PHILO-012"
         ]
        }
       ]
      }
     ]
    },
    {
     "id": "subj-bac-sci-francais",
     "name": "Bac Sciences - Français",
     "chapitres": [
      {
       "id": "ch-bac-sci-fr-1",
       "name": "Module 1 : Souvenirs et nostalgie",
       "items": [
        {
         "id": "les-bac-sci-fr-1-01",
         "type": "cours",
         "title": "Vocabulaire",
         "refs": [
          "RAOUEDHA-FR-017",
          "RAOUEDHA-FR-018"
         ]
        },
        {
         "id": "les-bac-sci-fr-1-02",
         "type": "cours",
         "title": "La cause et la conséquence",
         "refs": [
          "RAOUEDHA-FR-012",
          "RAOUEDHA-FR-013"
         ]
        },
        {
         "id": "les-bac-sci-fr-1-03",
         "type": "exercice",
         "title": "Exercice cause et conséquence",
         "refs": [
          "RAOUEDHA-FR-010",
          "RAOUEDHA-FR-011"
         ]
        },
        {
         "id": "les-bac-sci-fr-1-04",
         "type": "cours",
         "title": "Texte explicatif, texte argumentatif : quelle différence ?",
         "refs": [
          "RAOUEDHA-FR-019",
          "RAOUEDHA-FR-014"
         ]
        },
        {
         "id": "les-bac-sci-fr-1-05",
         "type": "cours",
         "title": "Expression écrite : texte explicatif",
         "refs": [
          "RAOUEDHA-FR-020",
          "RAOUEDHA-FR-021"
         ]
        },
        {
         "id": "les-bac-sci-fr-1-06",
         "type": "cours",
         "title": "Expression écrite : texte explicatif (application)",
         "refs": [
          "RAOUEDHA-FR-022",
          "RAOUEDHA-FR-023"
         ]
        },
        {
         "id": "les-bac-sci-fr-1-07",
         "type": "cours",
         "title": "Étude de texte : lire et comprendre une question de compréhension",
         "refs": [
          "RAOUEDHA-FR-025",
          "RAOUEDHA-FR-024"
         ]
        },
        {
         "id": "les-bac-sci-fr-1-08",
         "type": "cours",
         "title": "Répondre à une question portant sur les procédés d'écriture (application)",
         "refs": [
          "RAOUEDHA-FR-016",
          "RAOUEDHA-FR-015"
         ]
        }
       ]
      },
      {
       "id": "ch-bac-sci-fr-2",
       "name": "Module 2 : Histoire d'amour",
       "items": [
        {
         "id": "les-bac-sci-fr-2-01",
         "type": "cours",
         "title": "Le but",
         "refs": [
          "RAOUEDHA-FR-007",
          "RAOUEDHA-FR-001"
         ]
        },
        {
         "id": "les-bac-sci-fr-2-02",
         "type": "exercice",
         "title": "Le but : exercices",
         "refs": [
          "RAOUEDHA-FR-005",
          "RAOUEDHA-FR-006"
         ]
        },
        {
         "id": "les-bac-sci-fr-2-03",
         "type": "cours",
         "title": "Étude de texte : répondre aux questions de compréhension",
         "refs": [
          "RAOUEDHA-FR-008",
          "RAOUEDHA-FR-009"
         ]
        },
        {
         "id": "les-bac-sci-fr-2-04",
         "type": "cours",
         "title": "Expression écrite : le point de vue absolu",
         "refs": [
          "RAOUEDHA-FR-003",
          "RAOUEDHA-FR-002"
         ]
        }
       ]
      }
     ]
    },
    {
     "id": "subj-bac-sci-arabe",
     "name": "Bac Sciences - عربية",
     "chapitres": [
      {
       "id": "ch-bac-sci-ar-1",
       "name": "محور 1 في التفكير العلمي",
       "items": [
        {
         "id": "les-bac-sci-ar-1-01",
         "type": "cours",
         "title": "العوامل التي ساعدت العرب على الإبداع",
         "refs": [
          "NAJEH-AR-045",
          "NAJEH-AR-046"
         ]
        },
        {
         "id": "les-bac-sci-ar-1-02",
         "type": "cours",
         "title": "المناهج العلمية وصفات العالم المسلم",
         "refs": [
          "NAJEH-AR-047",
          "NAJEH-AR-046"
         ]
        },
        {
         "id": "les-bac-sci-ar-1-03",
         "type": "cours",
         "title": "العلوم العربية",
         "refs": [
          "NAJEH-AR-043",
          "NAJEH-AR-046"
         ]
        },
        {
         "id": "les-bac-sci-ar-1-04",
         "type": "exercice",
         "title": "التدرب على فقرة حجاجية",
         "refs": [
          "NAJEH-AR-044",
          "NAJEH-AR-046"
         ]
        }
       ]
      },
      {
       "id": "ch-bac-sci-ar-2",
       "name": "محور 2 في الأدب والفن",
       "items": [
        {
         "id": "les-bac-sci-ar-2-01",
         "type": "cours",
         "title": "الأدب والشعر",
         "refs": [
          "NAJEH-AR-048",
          "NAJEH-AR-053"
         ]
        },
        {
         "id": "les-bac-sci-ar-2-02",
         "type": "cours",
         "title": "الأدب نثرا ونقدا",
         "refs": [
          "NAJEH-AR-049",
          "NAJEH-AR-053"
         ]
        },
        {
         "id": "les-bac-sci-ar-2-03",
         "type": "cours",
         "title": "الفن",
         "refs": [
          "NAJEH-AR-050",
          "NAJEH-AR-053"
         ]
        },
        {
         "id": "les-bac-sci-ar-2-04",
         "type": "cours",
         "title": "الاجابة على أهم الأسئلة",
         "refs": [
          "NAJEH-AR-051",
          "NAJEH-AR-053"
         ]
        },
        {
         "id": "les-bac-sci-ar-2-05",
         "type": "exercice",
         "title": "اصلاح فرض حول محور الأدب والفن",
         "refs": [
          "NAJEH-AR-052",
          "NAJEH-AR-053"
         ]
        }
       ]
      }
     ]
    },
    {
     "id": "subj-bac-sci-anglais",
     "name": "Bac Sciences - Anglais",
     "chapitres": []
    },
    {
     "id": "subj-bac-sci-informatique",
     "name": "Bac Sciences - Informatique",
     "chapitres": []
    },
    {
     "id": "subj-bac-sci-espagnol",
     "name": "Bac Sciences - Espagnol",
     "chapitres": []
    },
    {
     "id": "subj-bac-sci-chinois",
     "name": "Bac Sciences - Chinois",
     "chapitres": []
    },
    {
     "id": "subj-bac-sci-dessin",
     "name": "Bac Sciences - Dessin",
     "chapitres": []
    },
    {
     "id": "subj-bac-sci-musique",
     "name": "Bac Sciences - Musique",
     "chapitres": []
    },
    {
     "id": "subj-bac-sci-portugais",
     "name": "Bac Sciences - Portugais",
     "chapitres": []
    },
    {
     "id": "subj-bac-sci-russe",
     "name": "Bac Sciences - Russe",
     "chapitres": []
    },
    {
     "id": "subj-bac-sci-turc",
     "name": "Bac Sciences - Turc",
     "chapitres": []
    },
    {
     "id": "subj-bac-sci-allemand",
     "name": "Bac Sciences - Allemand",
     "chapitres": []
    },
    {
     "id": "subj-bac-sci-italien",
     "name": "Bac Sciences - Italien",
     "chapitres": []
    },
    {
     "id": "subj-bac-sci-mae-wael",
     "name": "Bac Sciences - مع وائل",
     "chapitres": []
    }
   ]
  },
  {
   "id": "y-bac-eco",
   "name": "باك — اقتصاد وتصرّف",
   "matieres": [
    {
     "id": "subj-bac-eco-economie",
     "name": "Bac Éco - Économie",
     "chapitres": [
      {
       "id": "ch-bac-eco-eco-1",
       "name": "Le comportement et l'équilibre du consommateur",
       "items": [
        {
         "id": "les-bac-eco-eco-1-01",
         "type": "cours",
         "title": "L'utilité totale et l'utilité marginale",
         "refs": [
          "ELINE-ECO-009",
          "ELINE-ECO-006"
         ]
        },
        {
         "id": "les-bac-eco-eco-1-02",
         "type": "cours",
         "title": "La contrainte budgétaire",
         "refs": [
          "ELINE-ECO-010",
          "ELINE-ECO-007"
         ]
        },
        {
         "id": "les-bac-eco-eco-1-03",
         "type": "cours",
         "title": "L'équilibre du consommateur",
         "refs": [
          "ELINE-ECO-003",
          "ELINE-ECO-002"
         ]
        },
        {
         "id": "les-bac-eco-eco-1-04",
         "type": "cours",
         "title": "Fonction de la demande",
         "refs": [
          "ELINE-ECO-031",
          "ELINE-ECO-030"
         ]
        },
        {
         "id": "les-bac-eco-eco-1-05",
         "type": "cours",
         "title": "Choix citoyen du consommateur",
         "refs": [
          "ELINE-ECO-001",
          "ELINE-ECO-008"
         ]
        },
        {
         "id": "les-bac-eco-eco-1-06",
         "type": "cours",
         "title": "Méthodologie de la dissertation économique",
         "refs": [
          "ELINE-ECO-005",
          "ELINE-ECO-004"
         ]
        },
        {
         "id": "les-bac-eco-eco-1-07",
         "type": "exercice",
         "title": "Problème (partie 1)",
         "refs": [
          "ELINE-ECO-038",
          "ELINE-ECO-024"
         ]
        },
        {
         "id": "les-bac-eco-eco-1-08",
         "type": "exercice",
         "title": "Problème (partie 2)",
         "refs": [
          "ELINE-ECO-035"
         ]
        },
        {
         "id": "les-bac-eco-eco-1-09",
         "type": "exercice",
         "title": "Problème (partie 3)",
         "refs": [
          "ELINE-ECO-036",
          "ELINE-ECO-023"
         ]
        },
        {
         "id": "les-bac-eco-eco-1-10",
         "type": "exercice",
         "title": "Exercice 2",
         "refs": [
          "ELINE-ECO-027",
          "ELINE-ECO-025"
         ]
        },
        {
         "id": "les-bac-eco-eco-1-11",
         "type": "exercice",
         "title": "Exercice 3",
         "refs": [
          "ELINE-ECO-028",
          "ELINE-ECO-029",
          "ELINE-ECO-032"
         ]
        },
        {
         "id": "les-bac-eco-eco-1-12",
         "type": "exercice",
         "title": "Exercice 4",
         "refs": [
          "ELINE-ECO-020",
          "ELINE-ECO-021"
         ]
        }
       ]
      },
      {
       "id": "ch-bac-eco-eco-2",
       "name": "Le comportement et l'équilibre du producteur",
       "items": [
        {
         "id": "les-bac-eco-eco-2-01",
         "type": "cours",
         "title": "La fonction de production (partie 1)",
         "refs": [
          "ELINE-ECO-018",
          "ELINE-ECO-015"
         ]
        },
        {
         "id": "les-bac-eco-eco-2-02",
         "type": "cours",
         "title": "La fonction de production (partie 2)",
         "refs": [
          "ELINE-ECO-017",
          "ELINE-ECO-016"
         ]
        },
        {
         "id": "les-bac-eco-eco-2-03",
         "type": "cours",
         "title": "Contrainte budgétaire du producteur",
         "refs": [
          "ELINE-ECO-013",
          "ELINE-ECO-014"
         ]
        },
        {
         "id": "les-bac-eco-eco-2-04",
         "type": "cours",
         "title": "Le choix citoyen du producteur",
         "refs": [
          "ELINE-ECO-012",
          "ELINE-ECO-019"
         ]
        },
        {
         "id": "les-bac-eco-eco-2-05",
         "type": "exercice",
         "title": "Exercice 1",
         "refs": [
          "ELINE-ECO-039",
          "ELINE-ECO-044"
         ]
        },
        {
         "id": "les-bac-eco-eco-2-06",
         "type": "exercice",
         "title": "Exercice 2",
         "refs": [
          "ELINE-ECO-049",
          "ELINE-ECO-047",
          "ELINE-ECO-055"
         ]
        },
        {
         "id": "les-bac-eco-eco-2-07",
         "type": "exercice",
         "title": "Exercice 3",
         "refs": [
          "ELINE-ECO-054",
          "ELINE-ECO-053"
         ]
        },
        {
         "id": "les-bac-eco-eco-2-08",
         "type": "exercice",
         "title": "Exercice 4",
         "refs": [
          "ELINE-ECO-040",
          "ELINE-ECO-043"
         ]
        },
        {
         "id": "les-bac-eco-eco-2-09",
         "type": "exercice",
         "title": "Exercice 5",
         "refs": [
          "ELINE-ECO-041",
          "ELINE-ECO-042"
         ]
        }
       ]
      }
     ]
    },
    {
     "id": "subj-bac-eco-gestion",
     "name": "Bac Éco - Gestion",
     "chapitres": []
    },
    {
     "id": "subj-bac-eco-mathematiques",
     "name": "Bac Éco - Maths",
     "chapitres": []
    },
    {
     "id": "subj-bac-eco-philosophie",
     "name": "Bac Éco - فلسفة",
     "chapitres": [
      {
       "id": "ch-bac-eco-philo-1",
       "name": "محور الانية و الغيرية",
       "items": [
        {
         "id": "les-bac-eco-philo-1-01",
         "type": "cours",
         "title": "تمهيد محور الإنية و الغيرية",
         "refs": [
          "WALID-PHILO-009",
          "WALID-PHILO-012"
         ]
        },
        {
         "id": "les-bac-eco-philo-1-02",
         "type": "cours",
         "title": "تعالي الانية على الغيرية",
         "refs": [
          "WALID-PHILO-008",
          "WALID-PHILO-012"
         ]
        },
        {
         "id": "les-bac-eco-philo-1-03",
         "type": "cours",
         "title": "الانية بما هي ذات واعية (ديكارت)",
         "refs": [
          "WALID-PHILO-001",
          "WALID-PHILO-012"
         ]
        },
        {
         "id": "les-bac-eco-philo-1-04",
         "type": "cours",
         "title": "في جدلية الانية و الغيرية",
         "refs": [
          "WALID-PHILO-011",
          "WALID-PHILO-012"
         ]
        },
        {
         "id": "les-bac-eco-philo-1-05",
         "type": "cours",
         "title": "الذات المتجسدة",
         "refs": [
          "WALID-PHILO-003",
          "WALID-PHILO-012"
         ]
        },
        {
         "id": "les-bac-eco-philo-1-06",
         "type": "cours",
         "title": "تاسيس انطولوجيا جديدة للجسد",
         "refs": [
          "WALID-PHILO-007",
          "WALID-PHILO-012"
         ]
        },
        {
         "id": "les-bac-eco-philo-1-07",
         "type": "cours",
         "title": "الوعي بما هو تشكل تاريخي",
         "refs": [
          "WALID-PHILO-005",
          "WALID-PHILO-012"
         ]
        },
        {
         "id": "les-bac-eco-philo-1-08",
         "type": "cours",
         "title": "الوعي بناء تاريخي (ماركس)",
         "refs": [
          "WALID-PHILO-006",
          "WALID-PHILO-012"
         ]
        },
        {
         "id": "les-bac-eco-philo-1-09",
         "type": "cours",
         "title": "جدلية الوعي و اللاوعي",
         "refs": [
          "WALID-PHILO-010",
          "WALID-PHILO-012"
         ]
        },
        {
         "id": "les-bac-eco-philo-1-10",
         "type": "cours",
         "title": "التكامل بين الوعي و الاوعي",
         "refs": [
          "WALID-PHILO-002",
          "WALID-PHILO-012"
         ]
        },
        {
         "id": "les-bac-eco-philo-1-11",
         "type": "cours",
         "title": "الغيرية كامنة في الذات",
         "refs": [
          "WALID-PHILO-004",
          "WALID-PHILO-012"
         ]
        }
       ]
      }
     ]
    },
    {
     "id": "subj-bac-eco-histoire",
     "name": "Bac Éco - تاريخ",
     "chapitres": []
    },
    {
     "id": "subj-bac-eco-francais",
     "name": "Bac Éco - Français",
     "chapitres": [
      {
       "id": "ch-bac-eco-fr-1",
       "name": "Module 1 : Souvenirs et nostalgie",
       "items": [
        {
         "id": "les-bac-eco-fr-1-01",
         "type": "cours",
         "title": "Vocabulaire",
         "refs": [
          "RAOUEDHA-FR-017",
          "RAOUEDHA-FR-018"
         ]
        },
        {
         "id": "les-bac-eco-fr-1-02",
         "type": "cours",
         "title": "La cause et la conséquence",
         "refs": [
          "RAOUEDHA-FR-012",
          "RAOUEDHA-FR-013"
         ]
        },
        {
         "id": "les-bac-eco-fr-1-03",
         "type": "exercice",
         "title": "Exercice cause et conséquence",
         "refs": [
          "RAOUEDHA-FR-010",
          "RAOUEDHA-FR-011"
         ]
        },
        {
         "id": "les-bac-eco-fr-1-04",
         "type": "cours",
         "title": "Texte explicatif, texte argumentatif : quelle différence ?",
         "refs": [
          "RAOUEDHA-FR-019",
          "RAOUEDHA-FR-014"
         ]
        },
        {
         "id": "les-bac-eco-fr-1-05",
         "type": "cours",
         "title": "Expression écrite : texte explicatif",
         "refs": [
          "RAOUEDHA-FR-020",
          "RAOUEDHA-FR-021"
         ]
        },
        {
         "id": "les-bac-eco-fr-1-06",
         "type": "cours",
         "title": "Expression écrite : texte explicatif (application)",
         "refs": [
          "RAOUEDHA-FR-022",
          "RAOUEDHA-FR-023"
         ]
        },
        {
         "id": "les-bac-eco-fr-1-07",
         "type": "cours",
         "title": "Étude de texte : lire et comprendre une question de compréhension",
         "refs": [
          "RAOUEDHA-FR-025",
          "RAOUEDHA-FR-024"
         ]
        },
        {
         "id": "les-bac-eco-fr-1-08",
         "type": "cours",
         "title": "Répondre à une question portant sur les procédés d'écriture (application)",
         "refs": [
          "RAOUEDHA-FR-016",
          "RAOUEDHA-FR-015"
         ]
        }
       ]
      },
      {
       "id": "ch-bac-eco-fr-2",
       "name": "Module 2 : Histoire d'amour",
       "items": [
        {
         "id": "les-bac-eco-fr-2-01",
         "type": "cours",
         "title": "Le but",
         "refs": [
          "RAOUEDHA-FR-007",
          "RAOUEDHA-FR-001"
         ]
        },
        {
         "id": "les-bac-eco-fr-2-02",
         "type": "exercice",
         "title": "Le but : exercices",
         "refs": [
          "RAOUEDHA-FR-005",
          "RAOUEDHA-FR-006"
         ]
        },
        {
         "id": "les-bac-eco-fr-2-03",
         "type": "cours",
         "title": "Étude de texte : répondre aux questions de compréhension",
         "refs": [
          "RAOUEDHA-FR-008",
          "RAOUEDHA-FR-009"
         ]
        },
        {
         "id": "les-bac-eco-fr-2-04",
         "type": "cours",
         "title": "Expression écrite : le point de vue absolu",
         "refs": [
          "RAOUEDHA-FR-003",
          "RAOUEDHA-FR-002"
         ]
        }
       ]
      }
     ]
    },
    {
     "id": "subj-bac-eco-arabe",
     "name": "Bac Éco - عربية",
     "chapitres": [
      {
       "id": "ch-bac-eco-ar-1",
       "name": "محور 1 في التفكير العلمي",
       "items": [
        {
         "id": "les-bac-eco-ar-1-01",
         "type": "cours",
         "title": "العوامل التي ساعدت العرب على الإبداع",
         "refs": [
          "NAJEH-AR-045"
         ]
        },
        {
         "id": "les-bac-eco-ar-1-02",
         "type": "cours",
         "title": "المناهج العلمية وصفات العالم المسلم",
         "refs": [
          "NAJEH-AR-047"
         ]
        },
        {
         "id": "les-bac-eco-ar-1-03",
         "type": "cours",
         "title": "العلوم العربية",
         "refs": [
          "NAJEH-AR-043"
         ]
        },
        {
         "id": "les-bac-eco-ar-1-04",
         "type": "exercice",
         "title": "التدرب على فقرة حجاجية",
         "refs": [
          "NAJEH-AR-044"
         ]
        }
       ]
      },
      {
       "id": "ch-bac-eco-ar-2",
       "name": "محور 2 في الأدب والفن",
       "items": [
        {
         "id": "les-bac-eco-ar-2-01",
         "type": "cours",
         "title": "الأدب والشعر",
         "refs": [
          "NAJEH-AR-048"
         ]
        },
        {
         "id": "les-bac-eco-ar-2-02",
         "type": "cours",
         "title": "الأدب نثرا ونقدا",
         "refs": [
          "NAJEH-AR-049"
         ]
        },
        {
         "id": "les-bac-eco-ar-2-03",
         "type": "cours",
         "title": "الفن",
         "refs": [
          "NAJEH-AR-050"
         ]
        },
        {
         "id": "les-bac-eco-ar-2-04",
         "type": "cours",
         "title": "الاجابة على أهم الأسئلة",
         "refs": [
          "NAJEH-AR-051"
         ]
        },
        {
         "id": "les-bac-eco-ar-2-05",
         "type": "exercice",
         "title": "اصلاح فرض حول محور الأدب والفن",
         "refs": [
          "NAJEH-AR-052"
         ]
        }
       ]
      }
     ]
    },
    {
     "id": "subj-bac-eco-anglais",
     "name": "Bac Éco - Anglais",
     "chapitres": []
    },
    {
     "id": "subj-bac-eco-geographie",
     "name": "Bac Éco - جغرافيا",
     "chapitres": []
    },
    {
     "id": "subj-bac-eco-chinois",
     "name": "Bac Éco - Chinois",
     "chapitres": []
    },
    {
     "id": "subj-bac-eco-dessin",
     "name": "Bac Éco - Dessin",
     "chapitres": []
    },
    {
     "id": "subj-bac-eco-musique",
     "name": "Bac Éco - Musique",
     "chapitres": []
    },
    {
     "id": "subj-bac-eco-portugais",
     "name": "Bac Éco - Portugais",
     "chapitres": []
    },
    {
     "id": "subj-bac-eco-russe",
     "name": "Bac Éco - Russe",
     "chapitres": []
    },
    {
     "id": "subj-bac-eco-sciences-de-la-vie-et-de-la-terre",
     "name": "Bac Éco - SVT",
     "chapitres": []
    },
    {
     "id": "subj-bac-eco-turc",
     "name": "Bac Éco - Turc",
     "chapitres": []
    },
    {
     "id": "subj-bac-eco-allemand",
     "name": "Bac Éco - Allemand",
     "chapitres": []
    },
    {
     "id": "subj-bac-eco-espagnol",
     "name": "Bac Éco - Espagnol",
     "chapitres": []
    },
    {
     "id": "subj-bac-eco-informatique",
     "name": "Bac Éco - Informatique",
     "chapitres": []
    },
    {
     "id": "subj-bac-eco-italien",
     "name": "Bac Éco - Italien",
     "chapitres": []
    },
    {
     "id": "subj-bac-eco-mae-wael",
     "name": "Bac Éco - مع وائل",
     "chapitres": []
    }
   ]
  },
  {
   "id": "y-bac-lettres",
   "name": "باك — آداب",
   "matieres": [
    {
     "id": "subj-bac-lettres-arabe",
     "name": "Bac Lettres - عربية",
     "chapitres": [
      {
       "id": "ch-bac-lettres-ar-1",
       "name": "محور الحماسة",
       "items": [
        {
         "id": "les-bac-lettres-ar-1-01",
         "type": "cours",
         "title": "الايقاع",
         "refs": [
          "NAJEH-AR-029",
          "NAJEH-AR-030"
         ]
        },
        {
         "id": "les-bac-lettres-ar-1-02",
         "type": "cours",
         "title": "المعجم",
         "refs": [
          "NAJEH-AR-032",
          "NAJEH-AR-030"
         ]
        },
        {
         "id": "les-bac-lettres-ar-1-03",
         "type": "cours",
         "title": "الصورة الشعرية",
         "refs": [
          "NAJEH-AR-031",
          "NAJEH-AR-030"
         ]
        },
        {
         "id": "les-bac-lettres-ar-1-04",
         "type": "cours",
         "title": "المعاني الحماسية",
         "refs": [
          "NAJEH-AR-033",
          "NAJEH-AR-030"
         ]
        },
        {
         "id": "les-bac-lettres-ar-1-05",
         "type": "cours",
         "title": "النقاش",
         "refs": [
          "NAJEH-AR-034",
          "NAJEH-AR-030"
         ]
        },
        {
         "id": "les-bac-lettres-ar-1-06",
         "type": "exercice",
         "title": "تدريب على موضوع حماسي",
         "refs": [
          "NAJEH-AR-035",
          "NAJEH-AR-030"
         ]
        }
       ]
      },
      {
       "id": "ch-bac-lettres-ar-2",
       "name": "محور 2 المنزع العقلي عند الجاحظ",
       "items": [
        {
         "id": "les-bac-lettres-ar-2-01",
         "type": "cours",
         "title": "مقدمة محور الجاحظ",
         "refs": [
          "NAJEH-AR-001",
          "NAJEH-AR-002"
         ]
        },
        {
         "id": "les-bac-lettres-ar-2-02",
         "type": "cours",
         "title": "المنهج العلمي",
         "refs": [
          "NAJEH-AR-005",
          "NAJEH-AR-002"
         ]
        },
        {
         "id": "les-bac-lettres-ar-2-03",
         "type": "cours",
         "title": "المنزع العقلي في الفكر الاعتزالي",
         "refs": [
          "NAJEH-AR-004",
          "NAJEH-AR-002"
         ]
        },
        {
         "id": "les-bac-lettres-ar-2-04",
         "type": "cours",
         "title": "المنزع العقلي في الاسلوب الحجاجي",
         "refs": [
          "NAJEH-AR-003",
          "NAJEH-AR-002"
         ]
        },
        {
         "id": "les-bac-lettres-ar-2-05",
         "type": "cours",
         "title": "موضوع محور الجاحظ",
         "refs": [
          "NAJEH-AR-006",
          "NAJEH-AR-002"
         ]
        }
       ]
      }
     ]
    },
    {
     "id": "subj-bac-lettres-francais",
     "name": "Bac Lettres - Français",
     "chapitres": []
    },
    {
     "id": "subj-bac-lettres-anglais",
     "name": "Bac Lettres - Anglais",
     "chapitres": []
    },
    {
     "id": "subj-bac-lettres-philosophie",
     "name": "Bac Lettres - فلسفة",
     "chapitres": [
      {
       "id": "ch-bac-lettres-philo-1",
       "name": "محور الانية و الغيرية",
       "items": [
        {
         "id": "les-bac-lettres-philo-1-01",
         "type": "cours",
         "title": "تمهيد محور الإنية و الغيرية",
         "refs": [
          "WALID-PHILO-009",
          "WALID-PHILO-012"
         ]
        },
        {
         "id": "les-bac-lettres-philo-1-02",
         "type": "cours",
         "title": "تعالي الانية على الغيرية",
         "refs": [
          "WALID-PHILO-008",
          "WALID-PHILO-012"
         ]
        },
        {
         "id": "les-bac-lettres-philo-1-03",
         "type": "cours",
         "title": "الانية بما هي ذات واعية (ديكارت)",
         "refs": [
          "WALID-PHILO-001",
          "WALID-PHILO-012"
         ]
        },
        {
         "id": "les-bac-lettres-philo-1-04",
         "type": "cours",
         "title": "في جدلية الانية و الغيرية",
         "refs": [
          "WALID-PHILO-011",
          "WALID-PHILO-012"
         ]
        },
        {
         "id": "les-bac-lettres-philo-1-05",
         "type": "cours",
         "title": "الذات المتجسدة",
         "refs": [
          "WALID-PHILO-003",
          "WALID-PHILO-012"
         ]
        },
        {
         "id": "les-bac-lettres-philo-1-06",
         "type": "cours",
         "title": "تاسيس انطولوجيا جديدة للجسد",
         "refs": [
          "WALID-PHILO-007",
          "WALID-PHILO-012"
         ]
        },
        {
         "id": "les-bac-lettres-philo-1-07",
         "type": "cours",
         "title": "الوعي بما هو تشكل تاريخي",
         "refs": [
          "WALID-PHILO-005",
          "WALID-PHILO-012"
         ]
        },
        {
         "id": "les-bac-lettres-philo-1-08",
         "type": "cours",
         "title": "الوعي بناء تاريخي (ماركس)",
         "refs": [
          "WALID-PHILO-006",
          "WALID-PHILO-012"
         ]
        },
        {
         "id": "les-bac-lettres-philo-1-09",
         "type": "cours",
         "title": "جدلية الوعي و اللاوعي",
         "refs": [
          "WALID-PHILO-010",
          "WALID-PHILO-012"
         ]
        },
        {
         "id": "les-bac-lettres-philo-1-10",
         "type": "cours",
         "title": "التكامل بين الوعي و الاوعي",
         "refs": [
          "WALID-PHILO-002",
          "WALID-PHILO-012"
         ]
        },
        {
         "id": "les-bac-lettres-philo-1-11",
         "type": "cours",
         "title": "الغيرية كامنة في الذات",
         "refs": [
          "WALID-PHILO-004",
          "WALID-PHILO-012"
         ]
        }
       ]
      }
     ]
    },
    {
     "id": "subj-bac-lettres-histoire",
     "name": "Bac Lettres - تاريخ",
     "chapitres": []
    },
    {
     "id": "subj-bac-lettres-informatique",
     "name": "Bac Lettres - Informatique",
     "chapitres": []
    },
    {
     "id": "subj-bac-lettres-pensee-islamique",
     "name": "Bac Lettres - تفكير اسلامي",
     "chapitres": []
    },
    {
     "id": "subj-bac-lettres-geographie",
     "name": "Bac Lettres - جغرافيا",
     "chapitres": []
    },
    {
     "id": "subj-bac-lettres-allemand",
     "name": "Bac Lettres - Allemand",
     "chapitres": []
    },
    {
     "id": "subj-bac-lettres-chinois",
     "name": "Bac Lettres - Chinois",
     "chapitres": []
    },
    {
     "id": "subj-bac-lettres-dessin",
     "name": "Bac Lettres - Dessin",
     "chapitres": []
    },
    {
     "id": "subj-bac-lettres-musique",
     "name": "Bac Lettres - Musique",
     "chapitres": []
    },
    {
     "id": "subj-bac-lettres-portugais",
     "name": "Bac Lettres - Portugais",
     "chapitres": []
    },
    {
     "id": "subj-bac-lettres-russe",
     "name": "Bac Lettres - Russe",
     "chapitres": []
    },
    {
     "id": "subj-bac-lettres-turc",
     "name": "Bac Lettres - Turc",
     "chapitres": []
    },
    {
     "id": "subj-bac-lettres-espagnol",
     "name": "Bac Lettres - Espagnol",
     "chapitres": []
    },
    {
     "id": "subj-bac-lettres-italien",
     "name": "Bac Lettres - Italien",
     "chapitres": []
    },
    {
     "id": "subj-bac-lettres-sciences-de-la-vie-et-de-la-terre",
     "name": "Bac Lettres - SVT",
     "chapitres": []
    },
    {
     "id": "subj-bac-lettres-mae-wael",
     "name": "Bac Lettres - مع وائل",
     "chapitres": []
    }
   ]
  },
  {
   "id": "y-bac-tech",
   "name": "باك — علوم تقنية",
   "matieres": [
    {
     "id": "subj-bac-tech-electrique",
     "name": "Bac Technique - Electrique",
     "chapitres": [
      {
       "id": "ch-bac-tech-elec-1",
       "name": "Microcontrôleur",
       "items": [
        {
         "id": "les-bac-tech-elec-1-01",
         "type": "cours",
         "title": "MikroC 1 : interruption",
         "refs": [
          "ATEF-ELEC-001",
          "ATEF-ELEC-002"
         ]
        },
        {
         "id": "les-bac-tech-elec-1-02",
         "type": "cours",
         "title": "MikroC 2 : convertisseur",
         "refs": [
          "ATEF-ELEC-005",
          "ATEF-ELEC-006"
         ]
        },
        {
         "id": "les-bac-tech-elec-1-03",
         "type": "cours",
         "title": "MikroC 3 : timer",
         "refs": [
          "ATEF-ELEC-008",
          "ATEF-ELEC-007"
         ]
        },
        {
         "id": "les-bac-tech-elec-1-04",
         "type": "exercice",
         "title": "Série : micro-conversion",
         "refs": [
          "ATEF-ELEC-030",
          "ATEF-ELEC-028",
          "ATEF-ELEC-029"
         ]
        }
       ]
      },
      {
       "id": "ch-bac-tech-elec-2",
       "name": "Circuit combinatoire",
       "items": [
        {
         "id": "les-bac-tech-elec-2-01",
         "type": "cours",
         "title": "Circuit combinatoire : additionneur binaire et BCD",
         "refs": [
          "ATEF-ELEC-009",
          "ATEF-ELEC-010"
         ]
        },
        {
         "id": "les-bac-tech-elec-2-02",
         "type": "cours",
         "title": "Circuit combinatoire : soustracteur",
         "refs": [
          "ATEF-ELEC-012",
          "ATEF-ELEC-011"
         ]
        },
        {
         "id": "les-bac-tech-elec-2-03",
         "type": "cours",
         "title": "Circuit combinatoire : comparateur",
         "refs": [
          "ATEF-ELEC-014",
          "ATEF-ELEC-013"
         ]
        },
        {
         "id": "les-bac-tech-elec-2-04",
         "type": "cours",
         "title": "Circuit combinatoire : MUX et DMUX",
         "refs": [
          "ATEF-ELEC-016",
          "ATEF-ELEC-015"
         ]
        },
        {
         "id": "les-bac-tech-elec-2-05",
         "type": "cours",
         "title": "Circuit combinatoire : UAL",
         "refs": [
          "ATEF-ELEC-018",
          "ATEF-ELEC-017"
         ]
        },
        {
         "id": "les-bac-tech-elec-2-06",
         "type": "cours",
         "title": "Série : circuit combinatoire",
         "refs": [
          "ATEF-ELEC-022",
          "ATEF-ELEC-021",
          "ATEF-ELEC-023"
         ]
        }
       ]
      },
      {
       "id": "ch-bac-tech-elec-3",
       "name": "Logique séquentielle",
       "items": [
        {
         "id": "les-bac-tech-elec-3-01",
         "type": "cours",
         "title": "Logique séquentielle : compteur",
         "refs": [
          "ATEF-ELEC-019",
          "ATEF-ELEC-020"
         ]
        },
        {
         "id": "les-bac-tech-elec-3-02",
         "type": "cours",
         "title": "Logique séquentielle : GRAFCET synchronisé",
         "refs": [
          "ATEF-ELEC-003",
          "ATEF-ELEC-004"
         ]
        },
        {
         "id": "les-bac-tech-elec-3-03",
         "type": "exercice",
         "title": "Série : interruption",
         "refs": [
          "ATEF-ELEC-026",
          "ATEF-ELEC-024",
          "ATEF-ELEC-025"
         ]
        }
       ]
      }
     ]
    },
    {
     "id": "subj-bac-tech-mathematiques",
     "name": "Bac Technique - Maths",
     "chapitres": []
    },
    {
     "id": "subj-bac-tech-sciences-physiques",
     "name": "Bac Technique - Physique",
     "chapitres": [
      {
       "id": "ch-bac-tech-phys-1",
       "name": "Le condensateur",
       "items": [
        {
         "id": "les-bac-tech-phys-1-01",
         "type": "cours",
         "title": "Étude expérimentale",
         "refs": [
          "MAHDI-PHYS-026",
          "MAHDI-PHYS-023"
         ]
        },
        {
         "id": "les-bac-tech-phys-1-02",
         "type": "cours",
         "title": "Étude théorique",
         "refs": [
          "MAHDI-PHYS-029",
          "MAHDI-PHYS-023"
         ]
        },
        {
         "id": "les-bac-tech-phys-1-03",
         "type": "exercice",
         "title": "Exercice 1",
         "refs": [
          "MAHDI-PHYS-024",
          "MAHDI-PHYS-030"
         ]
        },
        {
         "id": "les-bac-tech-phys-1-04",
         "type": "exercice",
         "title": "Exercice 2",
         "refs": [
          "MAHDI-PHYS-025",
          "MAHDI-PHYS-030"
         ]
        },
        {
         "id": "les-bac-tech-phys-1-05",
         "type": "exercice",
         "title": "Exercice 3",
         "refs": [
          "MAHDI-PHYS-027",
          "MAHDI-PHYS-030"
         ]
        },
        {
         "id": "les-bac-tech-phys-1-06",
         "type": "exercice",
         "title": "Exercice 4",
         "refs": [
          "MAHDI-PHYS-028",
          "MAHDI-PHYS-030"
         ]
        }
       ]
      },
      {
       "id": "ch-bac-tech-phys-2",
       "name": "RC",
       "items": [
        {
         "id": "les-bac-tech-phys-2-01",
         "type": "cours",
         "title": "Dipôle RC : étude expérimentale",
         "refs": [
          "MAHDI-PHYS-066",
          "MAHDI-PHYS-063",
          "MAHDI-PHYS-064"
         ]
        },
        {
         "id": "les-bac-tech-phys-2-02",
         "type": "cours",
         "title": "Dipôle RC : étude théorique",
         "refs": [
          "MAHDI-PHYS-065",
          "MAHDI-PHYS-063",
          "MAHDI-PHYS-064"
         ]
        },
        {
         "id": "les-bac-tech-phys-2-03",
         "type": "exercice",
         "title": "Exercice 1",
         "refs": [
          "MAHDI-PHYS-057",
          "MAHDI-PHYS-069"
         ]
        },
        {
         "id": "les-bac-tech-phys-2-04",
         "type": "exercice",
         "title": "Exercice 2",
         "refs": [
          "MAHDI-PHYS-058",
          "MAHDI-PHYS-069"
         ]
        },
        {
         "id": "les-bac-tech-phys-2-05",
         "type": "exercice",
         "title": "Exercice 3",
         "refs": [
          "MAHDI-PHYS-059",
          "MAHDI-PHYS-067"
         ]
        },
        {
         "id": "les-bac-tech-phys-2-06",
         "type": "exercice",
         "title": "Exercice 4",
         "refs": [
          "MAHDI-PHYS-060",
          "MAHDI-PHYS-067"
         ]
        },
        {
         "id": "les-bac-tech-phys-2-07",
         "type": "exercice",
         "title": "Exercice 5",
         "refs": [
          "MAHDI-PHYS-061",
          "MAHDI-PHYS-068"
         ]
        },
        {
         "id": "les-bac-tech-phys-2-08",
         "type": "exercice",
         "title": "Exercice 6",
         "refs": [
          "MAHDI-PHYS-062",
          "MAHDI-PHYS-068"
         ]
        }
       ]
      },
      {
       "id": "ch-bac-tech-phys-3",
       "name": "La bobine",
       "items": [
        {
         "id": "les-bac-tech-phys-3-01",
         "type": "cours",
         "title": "Bobine",
         "refs": [
          "MAHDI-PHYS-009",
          "MAHDI-PHYS-005",
          "MAHDI-PHYS-006"
         ]
        },
        {
         "id": "les-bac-tech-phys-3-02",
         "type": "exercice",
         "title": "Exercice 1",
         "refs": [
          "MAHDI-PHYS-007",
          "MAHDI-PHYS-003"
         ]
        },
        {
         "id": "les-bac-tech-phys-3-03",
         "type": "exercice",
         "title": "Exercice 2",
         "refs": [
          "MAHDI-PHYS-008",
          "MAHDI-PHYS-003"
         ]
        },
        {
         "id": "les-bac-tech-phys-3-04",
         "type": "exercice",
         "title": "Exercice 3",
         "refs": [
          "MAHDI-PHYS-002",
          "MAHDI-PHYS-004"
         ]
        }
       ]
      },
      {
       "id": "ch-bac-tech-phys-4",
       "name": "RL",
       "items": [
        {
         "id": "les-bac-tech-phys-4-01",
         "type": "cours",
         "title": "Dipôle RL : étude expérimentale",
         "refs": [
          "MAHDI-PHYS-081",
          "MAHDI-PHYS-084"
         ]
        },
        {
         "id": "les-bac-tech-phys-4-02",
         "type": "cours",
         "title": "Dipôle RL : étude théorique",
         "refs": [
          "MAHDI-PHYS-080",
          "MAHDI-PHYS-084"
         ]
        },
        {
         "id": "les-bac-tech-phys-4-03",
         "type": "exercice",
         "title": "Exercice 1",
         "refs": [
          "MAHDI-PHYS-075",
          "MAHDI-PHYS-073"
         ]
        },
        {
         "id": "les-bac-tech-phys-4-04",
         "type": "exercice",
         "title": "Exercice 2",
         "refs": [
          "MAHDI-PHYS-074",
          "MAHDI-PHYS-073"
         ]
        },
        {
         "id": "les-bac-tech-phys-4-05",
         "type": "exercice",
         "title": "Exercice 3",
         "refs": [
          "MAHDI-PHYS-076",
          "MAHDI-PHYS-070"
         ]
        },
        {
         "id": "les-bac-tech-phys-4-06",
         "type": "exercice",
         "title": "Exercice 4",
         "refs": [
          "MAHDI-PHYS-077",
          "MAHDI-PHYS-071"
         ]
        },
        {
         "id": "les-bac-tech-phys-4-07",
         "type": "exercice",
         "title": "Exercice 5",
         "refs": [
          "MAHDI-PHYS-078",
          "MAHDI-PHYS-072"
         ]
        },
        {
         "id": "les-bac-tech-phys-4-08",
         "type": "exercice",
         "title": "Exercice 6",
         "refs": [
          "MAHDI-PHYS-079",
          "MAHDI-PHYS-072"
         ]
        }
       ]
      },
      {
       "id": "ch-bac-tech-phys-5",
       "name": "Oscillations libres amorties",
       "items": [
        {
         "id": "les-bac-tech-phys-5-01",
         "type": "cours",
         "title": "Oscillations amorties libres : étude expérimentale",
         "refs": [
          "MAHDI-PHYS-033",
          "MAHDI-PHYS-038"
         ]
        },
        {
         "id": "les-bac-tech-phys-5-02",
         "type": "cours",
         "title": "Oscillations amorties libres : étude théorique",
         "refs": [
          "MAHDI-PHYS-037",
          "MAHDI-PHYS-038"
         ]
        },
        {
         "id": "les-bac-tech-phys-5-03",
         "type": "exercice",
         "title": "Exercice 1",
         "refs": [
          "MAHDI-PHYS-034",
          "MAHDI-PHYS-031"
         ]
        },
        {
         "id": "les-bac-tech-phys-5-04",
         "type": "exercice",
         "title": "Exercice 2",
         "refs": [
          "MAHDI-PHYS-035",
          "MAHDI-PHYS-032"
         ]
        },
        {
         "id": "les-bac-tech-phys-5-05",
         "type": "exercice",
         "title": "Exercice 3",
         "refs": [
          "MAHDI-PHYS-036",
          "MAHDI-PHYS-032"
         ]
        }
       ]
      },
      {
       "id": "ch-bac-tech-phys-6",
       "name": "Oscillations électriques libres non amorties",
       "items": [
        {
         "id": "les-bac-tech-phys-6-01",
         "type": "cours",
         "title": "Oscillations non amorties : étude expérimentale",
         "refs": [
          "MAHDI-PHYS-054",
          "MAHDI-PHYS-039"
         ]
        },
        {
         "id": "les-bac-tech-phys-6-02",
         "type": "cours",
         "title": "Oscillations non amorties : étude théorique (partie 1)",
         "refs": [
          "MAHDI-PHYS-050",
          "MAHDI-PHYS-039"
         ]
        },
        {
         "id": "les-bac-tech-phys-6-03",
         "type": "cours",
         "title": "Oscillations non amorties : étude théorique (partie 2)",
         "refs": [
          "MAHDI-PHYS-053",
          "MAHDI-PHYS-039"
         ]
        },
        {
         "id": "les-bac-tech-phys-6-04",
         "type": "exercice",
         "title": "Exercice 1",
         "refs": [
          "MAHDI-PHYS-051",
          "MAHDI-PHYS-040"
         ]
        },
        {
         "id": "les-bac-tech-phys-6-05",
         "type": "exercice",
         "title": "Exercice 2",
         "refs": [
          "MAHDI-PHYS-055",
          "MAHDI-PHYS-040"
         ]
        },
        {
         "id": "les-bac-tech-phys-6-06",
         "type": "exercice",
         "title": "Exercice 3",
         "refs": [
          "MAHDI-PHYS-052",
          "MAHDI-PHYS-041"
         ]
        },
        {
         "id": "les-bac-tech-phys-6-07",
         "type": "exercice",
         "title": "Exercice 4",
         "refs": [
          "MAHDI-PHYS-043",
          "MAHDI-PHYS-041"
         ]
        },
        {
         "id": "les-bac-tech-phys-6-08",
         "type": "exercice",
         "title": "Exercice 5",
         "refs": [
          "MAHDI-PHYS-044",
          "MAHDI-PHYS-042"
         ]
        }
       ]
      },
      {
       "id": "ch-bac-tech-phys-7",
       "name": "Cinétique chimique",
       "items": [
        {
         "id": "les-bac-tech-phys-7-01",
         "type": "cours",
         "title": "Avancement d'une réaction chimique",
         "refs": [
          "MAHDI-PHYS-010",
          "MAHDI-PHYS-020"
         ]
        },
        {
         "id": "les-bac-tech-phys-7-02",
         "type": "cours",
         "title": "Vitesse d'une réaction chimique",
         "refs": [
          "MAHDI-PHYS-022",
          "MAHDI-PHYS-020"
         ]
        },
        {
         "id": "les-bac-tech-phys-7-03",
         "type": "cours",
         "title": "Notion d'équilibre chimique et estérification",
         "refs": [
          "MAHDI-PHYS-019",
          "MAHDI-PHYS-021"
         ]
        },
        {
         "id": "les-bac-tech-phys-7-04",
         "type": "cours",
         "title": "Loi d'action de masse",
         "refs": [
          "MAHDI-PHYS-018",
          "MAHDI-PHYS-021"
         ]
        },
        {
         "id": "les-bac-tech-phys-7-05",
         "type": "exercice",
         "title": "Exercice 1 : cinétique chimique",
         "refs": [
          "MAHDI-PHYS-014",
          "MAHDI-PHYS-020"
         ]
        },
        {
         "id": "les-bac-tech-phys-7-06",
         "type": "exercice",
         "title": "Exercice 2 : cinétique chimique",
         "refs": [
          "MAHDI-PHYS-012",
          "MAHDI-PHYS-020"
         ]
        },
        {
         "id": "les-bac-tech-phys-7-07",
         "type": "exercice",
         "title": "Exercice 3 : cinétique chimique",
         "refs": [
          "MAHDI-PHYS-011",
          "MAHDI-PHYS-020"
         ]
        },
        {
         "id": "les-bac-tech-phys-7-08",
         "type": "exercice",
         "title": "Exercice 4 : cinétique chimique",
         "refs": [
          "MAHDI-PHYS-013",
          "MAHDI-PHYS-020"
         ]
        },
        {
         "id": "les-bac-tech-phys-7-09",
         "type": "exercice",
         "title": "Exercice 1 : équilibre chimique",
         "refs": [
          "MAHDI-PHYS-015",
          "MAHDI-PHYS-021"
         ]
        },
        {
         "id": "les-bac-tech-phys-7-10",
         "type": "exercice",
         "title": "Exercice 2 : équilibre chimique",
         "refs": [
          "MAHDI-PHYS-016",
          "MAHDI-PHYS-021"
         ]
        },
        {
         "id": "les-bac-tech-phys-7-11",
         "type": "exercice",
         "title": "Exercice 3 : équilibre chimique",
         "refs": [
          "MAHDI-PHYS-017",
          "MAHDI-PHYS-021"
         ]
        }
       ]
      }
     ]
    },
    {
     "id": "subj-bac-tech-philosophie",
     "name": "Bac Technique - فلسفة",
     "chapitres": [
      {
       "id": "ch-bac-tech-philo-1",
       "name": "محور الانية و الغيرية",
       "items": [
        {
         "id": "les-bac-tech-philo-1-01",
         "type": "cours",
         "title": "تمهيد محور الإنية و الغيرية",
         "refs": [
          "WALID-PHILO-009",
          "WALID-PHILO-012"
         ]
        },
        {
         "id": "les-bac-tech-philo-1-02",
         "type": "cours",
         "title": "تعالي الانية على الغيرية",
         "refs": [
          "WALID-PHILO-008",
          "WALID-PHILO-012"
         ]
        },
        {
         "id": "les-bac-tech-philo-1-03",
         "type": "cours",
         "title": "الانية بما هي ذات واعية (ديكارت)",
         "refs": [
          "WALID-PHILO-001",
          "WALID-PHILO-012"
         ]
        },
        {
         "id": "les-bac-tech-philo-1-04",
         "type": "cours",
         "title": "في جدلية الانية و الغيرية",
         "refs": [
          "WALID-PHILO-011",
          "WALID-PHILO-012"
         ]
        },
        {
         "id": "les-bac-tech-philo-1-05",
         "type": "cours",
         "title": "الذات المتجسدة",
         "refs": [
          "WALID-PHILO-003",
          "WALID-PHILO-012"
         ]
        },
        {
         "id": "les-bac-tech-philo-1-06",
         "type": "cours",
         "title": "تاسيس انطولوجيا جديدة للجسد",
         "refs": [
          "WALID-PHILO-007",
          "WALID-PHILO-012"
         ]
        },
        {
         "id": "les-bac-tech-philo-1-07",
         "type": "cours",
         "title": "الوعي بما هو تشكل تاريخي",
         "refs": [
          "WALID-PHILO-005",
          "WALID-PHILO-012"
         ]
        },
        {
         "id": "les-bac-tech-philo-1-08",
         "type": "cours",
         "title": "الوعي بناء تاريخي (ماركس)",
         "refs": [
          "WALID-PHILO-006",
          "WALID-PHILO-012"
         ]
        },
        {
         "id": "les-bac-tech-philo-1-09",
         "type": "cours",
         "title": "جدلية الوعي و اللاوعي",
         "refs": [
          "WALID-PHILO-010",
          "WALID-PHILO-012"
         ]
        },
        {
         "id": "les-bac-tech-philo-1-10",
         "type": "cours",
         "title": "التكامل بين الوعي و الاوعي",
         "refs": [
          "WALID-PHILO-002",
          "WALID-PHILO-012"
         ]
        },
        {
         "id": "les-bac-tech-philo-1-11",
         "type": "cours",
         "title": "الغيرية كامنة في الذات",
         "refs": [
          "WALID-PHILO-004",
          "WALID-PHILO-012"
         ]
        }
       ]
      }
     ]
    },
    {
     "id": "subj-bac-tech-francais",
     "name": "Bac Technique - Français",
     "chapitres": [
      {
       "id": "ch-bac-tech-fr-1",
       "name": "Module 1 : Souvenirs et nostalgie",
       "items": [
        {
         "id": "les-bac-tech-fr-1-01",
         "type": "cours",
         "title": "Vocabulaire",
         "refs": [
          "RAOUEDHA-FR-017",
          "RAOUEDHA-FR-018"
         ]
        },
        {
         "id": "les-bac-tech-fr-1-02",
         "type": "cours",
         "title": "La cause et la conséquence",
         "refs": [
          "RAOUEDHA-FR-012",
          "RAOUEDHA-FR-013"
         ]
        },
        {
         "id": "les-bac-tech-fr-1-03",
         "type": "exercice",
         "title": "Exercice cause et conséquence",
         "refs": [
          "RAOUEDHA-FR-010",
          "RAOUEDHA-FR-011"
         ]
        },
        {
         "id": "les-bac-tech-fr-1-04",
         "type": "cours",
         "title": "Texte explicatif, texte argumentatif : quelle différence ?",
         "refs": [
          "RAOUEDHA-FR-019",
          "RAOUEDHA-FR-014"
         ]
        },
        {
         "id": "les-bac-tech-fr-1-05",
         "type": "cours",
         "title": "Expression écrite : texte explicatif",
         "refs": [
          "RAOUEDHA-FR-020",
          "RAOUEDHA-FR-021"
         ]
        },
        {
         "id": "les-bac-tech-fr-1-06",
         "type": "cours",
         "title": "Expression écrite : texte explicatif (application)",
         "refs": [
          "RAOUEDHA-FR-022",
          "RAOUEDHA-FR-023"
         ]
        },
        {
         "id": "les-bac-tech-fr-1-07",
         "type": "cours",
         "title": "Étude de texte : lire et comprendre une question de compréhension",
         "refs": [
          "RAOUEDHA-FR-025",
          "RAOUEDHA-FR-024"
         ]
        },
        {
         "id": "les-bac-tech-fr-1-08",
         "type": "cours",
         "title": "Répondre à une question portant sur les procédés d'écriture (application)",
         "refs": [
          "RAOUEDHA-FR-016",
          "RAOUEDHA-FR-015"
         ]
        }
       ]
      },
      {
       "id": "ch-bac-tech-fr-2",
       "name": "Module 2 : Histoire d'amour",
       "items": [
        {
         "id": "les-bac-tech-fr-2-01",
         "type": "cours",
         "title": "Le but",
         "refs": [
          "RAOUEDHA-FR-007",
          "RAOUEDHA-FR-001"
         ]
        },
        {
         "id": "les-bac-tech-fr-2-02",
         "type": "exercice",
         "title": "Le but : exercices",
         "refs": [
          "RAOUEDHA-FR-005",
          "RAOUEDHA-FR-006"
         ]
        },
        {
         "id": "les-bac-tech-fr-2-03",
         "type": "cours",
         "title": "Étude de texte : répondre aux questions de compréhension",
         "refs": [
          "RAOUEDHA-FR-008",
          "RAOUEDHA-FR-009"
         ]
        },
        {
         "id": "les-bac-tech-fr-2-04",
         "type": "cours",
         "title": "Expression écrite : le point de vue absolu",
         "refs": [
          "RAOUEDHA-FR-003",
          "RAOUEDHA-FR-002"
         ]
        }
       ]
      }
     ]
    },
    {
     "id": "subj-bac-tech-arabe",
     "name": "Bac Technique - عربية",
     "chapitres": [
      {
       "id": "ch-bac-tech-ar-1",
       "name": "محور 1 في التفكير العلمي",
       "items": [
        {
         "id": "les-bac-tech-ar-1-01",
         "type": "cours",
         "title": "العوامل التي ساعدت العرب على الإبداع",
         "refs": [
          "NAJEH-AR-045"
         ]
        },
        {
         "id": "les-bac-tech-ar-1-02",
         "type": "cours",
         "title": "المناهج العلمية وصفات العالم المسلم",
         "refs": [
          "NAJEH-AR-047"
         ]
        },
        {
         "id": "les-bac-tech-ar-1-03",
         "type": "cours",
         "title": "العلوم العربية",
         "refs": [
          "NAJEH-AR-043"
         ]
        },
        {
         "id": "les-bac-tech-ar-1-04",
         "type": "exercice",
         "title": "التدرب على فقرة حجاجية",
         "refs": [
          "NAJEH-AR-044"
         ]
        }
       ]
      },
      {
       "id": "ch-bac-tech-ar-2",
       "name": "محور 2 في الأدب والفن",
       "items": [
        {
         "id": "les-bac-tech-ar-2-01",
         "type": "cours",
         "title": "الأدب والشعر",
         "refs": [
          "NAJEH-AR-048"
         ]
        },
        {
         "id": "les-bac-tech-ar-2-02",
         "type": "cours",
         "title": "الأدب نثرا ونقدا",
         "refs": [
          "NAJEH-AR-049"
         ]
        },
        {
         "id": "les-bac-tech-ar-2-03",
         "type": "cours",
         "title": "الفن",
         "refs": [
          "NAJEH-AR-050"
         ]
        },
        {
         "id": "les-bac-tech-ar-2-04",
         "type": "cours",
         "title": "الاجابة على أهم الأسئلة",
         "refs": [
          "NAJEH-AR-051"
         ]
        },
        {
         "id": "les-bac-tech-ar-2-05",
         "type": "exercice",
         "title": "اصلاح فرض حول محور الأدب والفن",
         "refs": [
          "NAJEH-AR-052"
         ]
        }
       ]
      }
     ]
    },
    {
     "id": "subj-bac-tech-anglais",
     "name": "Bac Technique - Anglais",
     "chapitres": []
    },
    {
     "id": "subj-bac-tech-mecanique",
     "name": "Bac Technique - Mécanique",
     "chapitres": [
      {
       "id": "ch-bac-tech-meca-1",
       "name": "FAST",
       "items": [
        {
         "id": "les-bac-tech-meca-1-01",
         "type": "cours",
         "title": "Application 1",
         "refs": [
          "AMMAR-MECA-054",
          "AMMAR-MECA-043",
          "AMMAR-MECA-044"
         ]
        },
        {
         "id": "les-bac-tech-meca-1-02",
         "type": "cours",
         "title": "Application 2",
         "refs": [
          "AMMAR-MECA-055",
          "AMMAR-MECA-045",
          "AMMAR-MECA-046"
         ]
        },
        {
         "id": "les-bac-tech-meca-1-03",
         "type": "cours",
         "title": "Application 3",
         "refs": [
          "AMMAR-MECA-056",
          "AMMAR-MECA-047",
          "AMMAR-MECA-048"
         ]
        },
        {
         "id": "les-bac-tech-meca-1-04",
         "type": "cours",
         "title": "Application 4",
         "refs": [
          "AMMAR-MECA-057",
          "AMMAR-MECA-049",
          "AMMAR-MECA-050"
         ]
        },
        {
         "id": "les-bac-tech-meca-1-05",
         "type": "cours",
         "title": "Application 5",
         "refs": [
          "AMMAR-MECA-058",
          "AMMAR-MECA-051",
          "AMMAR-MECA-052",
          "AMMAR-MECA-053"
         ]
        }
       ]
      },
      {
       "id": "ch-bac-tech-meca-2",
       "name": "Cotation fonctionnelle",
       "items": [
        {
         "id": "les-bac-tech-meca-2-01",
         "type": "cours",
         "title": "Application 1",
         "refs": [
          "AMMAR-MECA-001",
          "AMMAR-MECA-007",
          "AMMAR-MECA-008"
         ]
        },
        {
         "id": "les-bac-tech-meca-2-02",
         "type": "cours",
         "title": "Application 2",
         "refs": [
          "AMMAR-MECA-002",
          "AMMAR-MECA-007",
          "AMMAR-MECA-008"
         ]
        },
        {
         "id": "les-bac-tech-meca-2-03",
         "type": "cours",
         "title": "Application 3",
         "refs": [
          "AMMAR-MECA-003",
          "AMMAR-MECA-007",
          "AMMAR-MECA-008"
         ]
        },
        {
         "id": "les-bac-tech-meca-2-04",
         "type": "cours",
         "title": "Application 4",
         "refs": [
          "AMMAR-MECA-004",
          "AMMAR-MECA-007",
          "AMMAR-MECA-008"
         ]
        },
        {
         "id": "les-bac-tech-meca-2-05",
         "type": "cours",
         "title": "Application 5",
         "refs": [
          "AMMAR-MECA-005",
          "AMMAR-MECA-007",
          "AMMAR-MECA-008"
         ]
        },
        {
         "id": "les-bac-tech-meca-2-06",
         "type": "cours",
         "title": "Application 6",
         "refs": [
          "AMMAR-MECA-006",
          "AMMAR-MECA-007",
          "AMMAR-MECA-008"
         ]
        }
       ]
      },
      {
       "id": "ch-bac-tech-meca-3",
       "name": "Dessin de définition",
       "items": [
        {
         "id": "les-bac-tech-meca-3-01",
         "type": "cours",
         "title": "Application 1",
         "refs": [
          "AMMAR-MECA-010",
          "AMMAR-MECA-009",
          "AMMAR-MECA-011"
         ]
        },
        {
         "id": "les-bac-tech-meca-3-02",
         "type": "cours",
         "title": "Application 2",
         "refs": [
          "AMMAR-MECA-013",
          "AMMAR-MECA-012",
          "AMMAR-MECA-014"
         ]
        },
        {
         "id": "les-bac-tech-meca-3-03",
         "type": "cours",
         "title": "Application 3",
         "refs": [
          "AMMAR-MECA-016",
          "AMMAR-MECA-015",
          "AMMAR-MECA-017"
         ]
        },
        {
         "id": "les-bac-tech-meca-3-04",
         "type": "cours",
         "title": "Application 4",
         "refs": [
          "AMMAR-MECA-019",
          "AMMAR-MECA-018",
          "AMMAR-MECA-020"
         ]
        }
       ]
      }
     ]
    },
    {
     "id": "subj-bac-tech-informatique",
     "name": "Bac Technique - Informatique",
     "chapitres": []
    },
    {
     "id": "subj-bac-tech-chinois",
     "name": "Bac Technique - Chinois",
     "chapitres": []
    },
    {
     "id": "subj-bac-tech-dessin",
     "name": "Bac Technique - Dessin",
     "chapitres": []
    },
    {
     "id": "subj-bac-tech-musique",
     "name": "Bac Technique - Musique",
     "chapitres": []
    },
    {
     "id": "subj-bac-tech-portugais",
     "name": "Bac Technique - Portugais",
     "chapitres": []
    },
    {
     "id": "subj-bac-tech-russe",
     "name": "Bac Technique - Russe",
     "chapitres": []
    },
    {
     "id": "subj-bac-tech-sciences-de-la-vie-et-de-la-terre",
     "name": "Bac Technique - SVT",
     "chapitres": []
    },
    {
     "id": "subj-bac-tech-turc",
     "name": "Bac Technique - Turc",
     "chapitres": []
    },
    {
     "id": "subj-bac-tech-allemand",
     "name": "Bac Technique - Allemand",
     "chapitres": []
    },
    {
     "id": "subj-bac-tech-espagnol",
     "name": "Bac Technique - Espagnol",
     "chapitres": []
    },
    {
     "id": "subj-bac-tech-italien",
     "name": "Bac Technique - Italien",
     "chapitres": []
    },
    {
     "id": "subj-bac-tech-mae-wael",
     "name": "Bac Technique - مع وائل",
     "chapitres": []
    }
   ]
  },
  {
   "id": "y-bac-info",
   "name": "باك — علوم إعلامية",
   "matieres": [
    {
     "id": "subj-bac-info-programmation",
     "name": "Bac Info - Programmation",
     "chapitres": []
    },
    {
     "id": "subj-bac-info-algorithmique",
     "name": "Bac Info - Algorithmique",
     "chapitres": []
    },
    {
     "id": "subj-bac-info-mathematiques",
     "name": "Bac Info - Maths",
     "chapitres": []
    },
    {
     "id": "subj-bac-info-sciences-physiques",
     "name": "Bac Info - Physique",
     "chapitres": [
      {
       "id": "ch-bac-info-phys-1",
       "name": "Le condensateur",
       "items": [
        {
         "id": "les-bac-info-phys-1-01",
         "type": "cours",
         "title": "Étude expérimentale",
         "refs": [
          "MAHDI-PHYS-026",
          "MAHDI-PHYS-023"
         ]
        },
        {
         "id": "les-bac-info-phys-1-02",
         "type": "cours",
         "title": "Étude théorique",
         "refs": [
          "MAHDI-PHYS-029",
          "MAHDI-PHYS-023"
         ]
        },
        {
         "id": "les-bac-info-phys-1-03",
         "type": "exercice",
         "title": "Exercice 1",
         "refs": [
          "MAHDI-PHYS-024",
          "MAHDI-PHYS-030"
         ]
        },
        {
         "id": "les-bac-info-phys-1-04",
         "type": "exercice",
         "title": "Exercice 2",
         "refs": [
          "MAHDI-PHYS-025",
          "MAHDI-PHYS-030"
         ]
        },
        {
         "id": "les-bac-info-phys-1-05",
         "type": "exercice",
         "title": "Exercice 3",
         "refs": [
          "MAHDI-PHYS-027",
          "MAHDI-PHYS-030"
         ]
        },
        {
         "id": "les-bac-info-phys-1-06",
         "type": "exercice",
         "title": "Exercice 4",
         "refs": [
          "MAHDI-PHYS-028",
          "MAHDI-PHYS-030"
         ]
        }
       ]
      },
      {
       "id": "ch-bac-info-phys-2",
       "name": "RC",
       "items": [
        {
         "id": "les-bac-info-phys-2-01",
         "type": "cours",
         "title": "Dipôle RC : étude expérimentale",
         "refs": [
          "MAHDI-PHYS-066",
          "MAHDI-PHYS-063",
          "MAHDI-PHYS-064"
         ]
        },
        {
         "id": "les-bac-info-phys-2-02",
         "type": "cours",
         "title": "Dipôle RC : étude théorique",
         "refs": [
          "MAHDI-PHYS-065",
          "MAHDI-PHYS-063",
          "MAHDI-PHYS-064"
         ]
        },
        {
         "id": "les-bac-info-phys-2-03",
         "type": "exercice",
         "title": "Exercice 1",
         "refs": [
          "MAHDI-PHYS-057",
          "MAHDI-PHYS-069"
         ]
        },
        {
         "id": "les-bac-info-phys-2-04",
         "type": "exercice",
         "title": "Exercice 2",
         "refs": [
          "MAHDI-PHYS-058",
          "MAHDI-PHYS-069"
         ]
        },
        {
         "id": "les-bac-info-phys-2-05",
         "type": "exercice",
         "title": "Exercice 3",
         "refs": [
          "MAHDI-PHYS-059",
          "MAHDI-PHYS-067"
         ]
        },
        {
         "id": "les-bac-info-phys-2-06",
         "type": "exercice",
         "title": "Exercice 4",
         "refs": [
          "MAHDI-PHYS-060",
          "MAHDI-PHYS-067"
         ]
        },
        {
         "id": "les-bac-info-phys-2-07",
         "type": "exercice",
         "title": "Exercice 5",
         "refs": [
          "MAHDI-PHYS-061",
          "MAHDI-PHYS-068"
         ]
        },
        {
         "id": "les-bac-info-phys-2-08",
         "type": "exercice",
         "title": "Exercice 6",
         "refs": [
          "MAHDI-PHYS-062",
          "MAHDI-PHYS-068"
         ]
        }
       ]
      },
      {
       "id": "ch-bac-info-phys-3",
       "name": "La bobine",
       "items": [
        {
         "id": "les-bac-info-phys-3-01",
         "type": "cours",
         "title": "Bobine",
         "refs": [
          "MAHDI-PHYS-009",
          "MAHDI-PHYS-005",
          "MAHDI-PHYS-006"
         ]
        },
        {
         "id": "les-bac-info-phys-3-02",
         "type": "exercice",
         "title": "Exercice 1",
         "refs": [
          "MAHDI-PHYS-007",
          "MAHDI-PHYS-003"
         ]
        },
        {
         "id": "les-bac-info-phys-3-03",
         "type": "exercice",
         "title": "Exercice 2",
         "refs": [
          "MAHDI-PHYS-008",
          "MAHDI-PHYS-003"
         ]
        },
        {
         "id": "les-bac-info-phys-3-04",
         "type": "exercice",
         "title": "Exercice 3",
         "refs": [
          "MAHDI-PHYS-002",
          "MAHDI-PHYS-004"
         ]
        }
       ]
      },
      {
       "id": "ch-bac-info-phys-4",
       "name": "RL",
       "items": [
        {
         "id": "les-bac-info-phys-4-01",
         "type": "cours",
         "title": "Dipôle RL : étude expérimentale",
         "refs": [
          "MAHDI-PHYS-081",
          "MAHDI-PHYS-084"
         ]
        },
        {
         "id": "les-bac-info-phys-4-02",
         "type": "cours",
         "title": "Dipôle RL : étude théorique",
         "refs": [
          "MAHDI-PHYS-080",
          "MAHDI-PHYS-084"
         ]
        },
        {
         "id": "les-bac-info-phys-4-03",
         "type": "exercice",
         "title": "Exercice 1",
         "refs": [
          "MAHDI-PHYS-075",
          "MAHDI-PHYS-073"
         ]
        },
        {
         "id": "les-bac-info-phys-4-04",
         "type": "exercice",
         "title": "Exercice 2",
         "refs": [
          "MAHDI-PHYS-074",
          "MAHDI-PHYS-073"
         ]
        },
        {
         "id": "les-bac-info-phys-4-05",
         "type": "exercice",
         "title": "Exercice 3",
         "refs": [
          "MAHDI-PHYS-076",
          "MAHDI-PHYS-070"
         ]
        },
        {
         "id": "les-bac-info-phys-4-06",
         "type": "exercice",
         "title": "Exercice 4",
         "refs": [
          "MAHDI-PHYS-077",
          "MAHDI-PHYS-071"
         ]
        },
        {
         "id": "les-bac-info-phys-4-07",
         "type": "exercice",
         "title": "Exercice 5",
         "refs": [
          "MAHDI-PHYS-078",
          "MAHDI-PHYS-072"
         ]
        },
        {
         "id": "les-bac-info-phys-4-08",
         "type": "exercice",
         "title": "Exercice 6",
         "refs": [
          "MAHDI-PHYS-079",
          "MAHDI-PHYS-072"
         ]
        }
       ]
      },
      {
       "id": "ch-bac-info-phys-5",
       "name": "Oscillations libres amorties",
       "items": [
        {
         "id": "les-bac-info-phys-5-01",
         "type": "cours",
         "title": "Oscillations amorties libres : étude expérimentale",
         "refs": [
          "MAHDI-PHYS-033",
          "MAHDI-PHYS-038"
         ]
        },
        {
         "id": "les-bac-info-phys-5-02",
         "type": "cours",
         "title": "Oscillations amorties libres : étude théorique",
         "refs": [
          "MAHDI-PHYS-037",
          "MAHDI-PHYS-038"
         ]
        },
        {
         "id": "les-bac-info-phys-5-03",
         "type": "exercice",
         "title": "Exercice 1",
         "refs": [
          "MAHDI-PHYS-034",
          "MAHDI-PHYS-031"
         ]
        },
        {
         "id": "les-bac-info-phys-5-04",
         "type": "exercice",
         "title": "Exercice 2",
         "refs": [
          "MAHDI-PHYS-035",
          "MAHDI-PHYS-032"
         ]
        },
        {
         "id": "les-bac-info-phys-5-05",
         "type": "exercice",
         "title": "Exercice 3",
         "refs": [
          "MAHDI-PHYS-036",
          "MAHDI-PHYS-032"
         ]
        }
       ]
      },
      {
       "id": "ch-bac-info-phys-6",
       "name": "Oscillations électriques libres non amorties",
       "items": [
        {
         "id": "les-bac-info-phys-6-01",
         "type": "cours",
         "title": "Oscillations non amorties : étude expérimentale",
         "refs": [
          "MAHDI-PHYS-054",
          "MAHDI-PHYS-039"
         ]
        },
        {
         "id": "les-bac-info-phys-6-02",
         "type": "cours",
         "title": "Oscillations non amorties : étude théorique (partie 1)",
         "refs": [
          "MAHDI-PHYS-050",
          "MAHDI-PHYS-039"
         ]
        },
        {
         "id": "les-bac-info-phys-6-03",
         "type": "cours",
         "title": "Oscillations non amorties : étude théorique (partie 2)",
         "refs": [
          "MAHDI-PHYS-053",
          "MAHDI-PHYS-039"
         ]
        },
        {
         "id": "les-bac-info-phys-6-04",
         "type": "exercice",
         "title": "Exercice 1",
         "refs": [
          "MAHDI-PHYS-051",
          "MAHDI-PHYS-040"
         ]
        },
        {
         "id": "les-bac-info-phys-6-05",
         "type": "exercice",
         "title": "Exercice 2",
         "refs": [
          "MAHDI-PHYS-055",
          "MAHDI-PHYS-040"
         ]
        },
        {
         "id": "les-bac-info-phys-6-06",
         "type": "exercice",
         "title": "Exercice 3",
         "refs": [
          "MAHDI-PHYS-052",
          "MAHDI-PHYS-041"
         ]
        },
        {
         "id": "les-bac-info-phys-6-07",
         "type": "exercice",
         "title": "Exercice 4",
         "refs": [
          "MAHDI-PHYS-043",
          "MAHDI-PHYS-041"
         ]
        },
        {
         "id": "les-bac-info-phys-6-08",
         "type": "exercice",
         "title": "Exercice 5",
         "refs": [
          "MAHDI-PHYS-044",
          "MAHDI-PHYS-042"
         ]
        }
       ]
      },
      {
       "id": "ch-bac-info-phys-8",
       "name": "Oscillations électriques entretenues",
       "items": [
        {
         "id": "les-bac-info-phys-8-01",
         "type": "cours",
         "title": "Oscillations entretenues",
         "refs": [
          "MAHDI-PHYS-049",
          "MAHDI-PHYS-056"
         ]
        },
        {
         "id": "les-bac-info-phys-8-02",
         "type": "exercice",
         "title": "Exercice 1",
         "refs": [
          "MAHDI-PHYS-046",
          "MAHDI-PHYS-056"
         ]
        },
        {
         "id": "les-bac-info-phys-8-03",
         "type": "exercice",
         "title": "Exercice 2",
         "refs": [
          "MAHDI-PHYS-047",
          "MAHDI-PHYS-056"
         ]
        },
        {
         "id": "les-bac-info-phys-8-04",
         "type": "exercice",
         "title": "Exercice 3",
         "refs": [
          "MAHDI-PHYS-045",
          "MAHDI-PHYS-056"
         ]
        },
        {
         "id": "les-bac-info-phys-8-05",
         "type": "exercice",
         "title": "Exercice 4",
         "refs": [
          "MAHDI-PHYS-048",
          "MAHDI-PHYS-056"
         ]
        }
       ]
      }
     ]
    },
    {
     "id": "subj-bac-info-francais",
     "name": "Bac Info - Français",
     "chapitres": [
      {
       "id": "ch-bac-info-fr-1",
       "name": "Module 1 : Souvenirs et nostalgie",
       "items": [
        {
         "id": "les-bac-info-fr-1-01",
         "type": "cours",
         "title": "Vocabulaire",
         "refs": [
          "RAOUEDHA-FR-017",
          "RAOUEDHA-FR-018"
         ]
        },
        {
         "id": "les-bac-info-fr-1-02",
         "type": "cours",
         "title": "La cause et la conséquence",
         "refs": [
          "RAOUEDHA-FR-012",
          "RAOUEDHA-FR-013"
         ]
        },
        {
         "id": "les-bac-info-fr-1-03",
         "type": "exercice",
         "title": "Exercice cause et conséquence",
         "refs": [
          "RAOUEDHA-FR-010",
          "RAOUEDHA-FR-011"
         ]
        },
        {
         "id": "les-bac-info-fr-1-04",
         "type": "cours",
         "title": "Texte explicatif, texte argumentatif : quelle différence ?",
         "refs": [
          "RAOUEDHA-FR-019",
          "RAOUEDHA-FR-014"
         ]
        },
        {
         "id": "les-bac-info-fr-1-05",
         "type": "cours",
         "title": "Expression écrite : texte explicatif",
         "refs": [
          "RAOUEDHA-FR-020",
          "RAOUEDHA-FR-021"
         ]
        },
        {
         "id": "les-bac-info-fr-1-06",
         "type": "cours",
         "title": "Expression écrite : texte explicatif (application)",
         "refs": [
          "RAOUEDHA-FR-022",
          "RAOUEDHA-FR-023"
         ]
        },
        {
         "id": "les-bac-info-fr-1-07",
         "type": "cours",
         "title": "Étude de texte : lire et comprendre une question de compréhension",
         "refs": [
          "RAOUEDHA-FR-025",
          "RAOUEDHA-FR-024"
         ]
        },
        {
         "id": "les-bac-info-fr-1-08",
         "type": "cours",
         "title": "Répondre à une question portant sur les procédés d'écriture (application)",
         "refs": [
          "RAOUEDHA-FR-016",
          "RAOUEDHA-FR-015"
         ]
        }
       ]
      },
      {
       "id": "ch-bac-info-fr-2",
       "name": "Module 2 : Histoire d'amour",
       "items": [
        {
         "id": "les-bac-info-fr-2-01",
         "type": "cours",
         "title": "Le but",
         "refs": [
          "RAOUEDHA-FR-007",
          "RAOUEDHA-FR-001"
         ]
        },
        {
         "id": "les-bac-info-fr-2-02",
         "type": "exercice",
         "title": "Le but : exercices",
         "refs": [
          "RAOUEDHA-FR-005",
          "RAOUEDHA-FR-006"
         ]
        },
        {
         "id": "les-bac-info-fr-2-03",
         "type": "cours",
         "title": "Étude de texte : répondre aux questions de compréhension",
         "refs": [
          "RAOUEDHA-FR-008",
          "RAOUEDHA-FR-009"
         ]
        },
        {
         "id": "les-bac-info-fr-2-04",
         "type": "cours",
         "title": "Expression écrite : le point de vue absolu",
         "refs": [
          "RAOUEDHA-FR-003",
          "RAOUEDHA-FR-002"
         ]
        }
       ]
      }
     ]
    },
    {
     "id": "subj-bac-info-arabe",
     "name": "Bac Info - Arabe",
     "chapitres": [
      {
       "id": "ch-bac-info-ar-1",
       "name": "محور 1 في التفكير العلمي",
       "items": [
        {
         "id": "les-bac-info-ar-1-01",
         "type": "cours",
         "title": "العوامل التي ساعدت العرب على الإبداع",
         "refs": [
          "NAJEH-AR-045"
         ]
        },
        {
         "id": "les-bac-info-ar-1-02",
         "type": "cours",
         "title": "المناهج العلمية وصفات العالم المسلم",
         "refs": [
          "NAJEH-AR-047"
         ]
        },
        {
         "id": "les-bac-info-ar-1-03",
         "type": "cours",
         "title": "العلوم العربية",
         "refs": [
          "NAJEH-AR-043"
         ]
        },
        {
         "id": "les-bac-info-ar-1-04",
         "type": "exercice",
         "title": "التدرب على فقرة حجاجية",
         "refs": [
          "NAJEH-AR-044"
         ]
        }
       ]
      },
      {
       "id": "ch-bac-info-ar-2",
       "name": "محور 2 في الأدب والفن",
       "items": [
        {
         "id": "les-bac-info-ar-2-01",
         "type": "cours",
         "title": "الأدب والشعر",
         "refs": [
          "NAJEH-AR-048"
         ]
        },
        {
         "id": "les-bac-info-ar-2-02",
         "type": "cours",
         "title": "الأدب نثرا ونقدا",
         "refs": [
          "NAJEH-AR-049"
         ]
        },
        {
         "id": "les-bac-info-ar-2-03",
         "type": "cours",
         "title": "الفن",
         "refs": [
          "NAJEH-AR-050"
         ]
        },
        {
         "id": "les-bac-info-ar-2-04",
         "type": "cours",
         "title": "الاجابة على أهم الأسئلة",
         "refs": [
          "NAJEH-AR-051"
         ]
        },
        {
         "id": "les-bac-info-ar-2-05",
         "type": "exercice",
         "title": "اصلاح فرض حول محور الأدب والفن",
         "refs": [
          "NAJEH-AR-052"
         ]
        }
       ]
      }
     ]
    },
    {
     "id": "subj-bac-info-anglais",
     "name": "Bac Info - Anglais",
     "chapitres": []
    },
    {
     "id": "subj-bac-info-philosophie",
     "name": "Bac Info - فلسفة",
     "chapitres": [
      {
       "id": "ch-bac-info-philo-1",
       "name": "محور الانية و الغيرية",
       "items": [
        {
         "id": "les-bac-info-philo-1-01",
         "type": "cours",
         "title": "تمهيد محور الإنية و الغيرية",
         "refs": [
          "WALID-PHILO-009",
          "WALID-PHILO-012"
         ]
        },
        {
         "id": "les-bac-info-philo-1-02",
         "type": "cours",
         "title": "تعالي الانية على الغيرية",
         "refs": [
          "WALID-PHILO-008",
          "WALID-PHILO-012"
         ]
        },
        {
         "id": "les-bac-info-philo-1-03",
         "type": "cours",
         "title": "الانية بما هي ذات واعية (ديكارت)",
         "refs": [
          "WALID-PHILO-001",
          "WALID-PHILO-012"
         ]
        },
        {
         "id": "les-bac-info-philo-1-04",
         "type": "cours",
         "title": "في جدلية الانية و الغيرية",
         "refs": [
          "WALID-PHILO-011",
          "WALID-PHILO-012"
         ]
        },
        {
         "id": "les-bac-info-philo-1-05",
         "type": "cours",
         "title": "الذات المتجسدة",
         "refs": [
          "WALID-PHILO-003",
          "WALID-PHILO-012"
         ]
        },
        {
         "id": "les-bac-info-philo-1-06",
         "type": "cours",
         "title": "تاسيس انطولوجيا جديدة للجسد",
         "refs": [
          "WALID-PHILO-007",
          "WALID-PHILO-012"
         ]
        },
        {
         "id": "les-bac-info-philo-1-07",
         "type": "cours",
         "title": "الوعي بما هو تشكل تاريخي",
         "refs": [
          "WALID-PHILO-005",
          "WALID-PHILO-012"
         ]
        },
        {
         "id": "les-bac-info-philo-1-08",
         "type": "cours",
         "title": "الوعي بناء تاريخي (ماركس)",
         "refs": [
          "WALID-PHILO-006",
          "WALID-PHILO-012"
         ]
        },
        {
         "id": "les-bac-info-philo-1-09",
         "type": "cours",
         "title": "جدلية الوعي و اللاوعي",
         "refs": [
          "WALID-PHILO-010",
          "WALID-PHILO-012"
         ]
        },
        {
         "id": "les-bac-info-philo-1-10",
         "type": "cours",
         "title": "التكامل بين الوعي و الاوعي",
         "refs": [
          "WALID-PHILO-002",
          "WALID-PHILO-012"
         ]
        },
        {
         "id": "les-bac-info-philo-1-11",
         "type": "cours",
         "title": "الغيرية كامنة في الذات",
         "refs": [
          "WALID-PHILO-004",
          "WALID-PHILO-012"
         ]
        }
       ]
      }
     ]
    },
    {
     "id": "subj-bac-info-sti",
     "name": "Bac Info - STI",
     "chapitres": []
    },
    {
     "id": "subj-bac-info-chinois",
     "name": "Bac Info - Chinois",
     "chapitres": []
    },
    {
     "id": "subj-bac-info-dessin",
     "name": "Bac Info - Dessin",
     "chapitres": []
    },
    {
     "id": "subj-bac-info-musique",
     "name": "Bac Info - Musique",
     "chapitres": []
    },
    {
     "id": "subj-bac-info-portugais",
     "name": "Bac Info - Portugais",
     "chapitres": []
    },
    {
     "id": "subj-bac-info-russe",
     "name": "Bac Info - Russe",
     "chapitres": []
    },
    {
     "id": "subj-bac-info-sciences-de-la-vie-et-de-la-terre",
     "name": "Bac Info - SVT",
     "chapitres": []
    },
    {
     "id": "subj-bac-info-turc",
     "name": "Bac Info - Turc",
     "chapitres": []
    },
    {
     "id": "subj-bac-info-allemand",
     "name": "Bac Info - Allemand",
     "chapitres": []
    },
    {
     "id": "subj-bac-info-espagnol",
     "name": "Bac Info - Espagnol",
     "chapitres": []
    },
    {
     "id": "subj-bac-info-italien",
     "name": "Bac Info - Italien",
     "chapitres": []
    },
    {
     "id": "subj-bac-info-mae-wael",
     "name": "Bac Info - مع وائل",
     "chapitres": []
    }
   ]
  }
 ]
};

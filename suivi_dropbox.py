# -*- coding: utf-8 -*-
"""Suivi du scan Dropbox « Annee scolaire 2026-2027 ».

Le scan ecrit une ligne par dossier de premier niveau. Ce viseur relit ce
journal toutes les 3 s et affiche l'avancement. Ctrl+C pour fermer : cela
n'arrete pas le scan, qui tourne dans un autre processus.
"""
import os
import re
import sys
import time

LOG = (r"C:\Users\USER\AppData\Local\Temp\claude\C--Users-USER"
       r"\4f027a41-0cfa-49c1-8c8b-4ae87e7456c4\scratchpad\dbxwalk.log")
TREE = (r"C:\Users\USER\AppData\Local\Temp\claude\C--Users-USER"
        r"\4f027a41-0cfa-49c1-8c8b-4ae87e7456c4\scratchpad\dropbox-tree.txt")
ATTENDUS = ["/1 ere", "/2 eme", "/3 eme", "/7 eme", "/8 eme", "/9 eme", "/BAC"]
TOTAL_GO = 79.3           # taille annoncee par l'export zip
REFRESH = 3

LIGNE = re.compile(r"^\s*(/\S[^ ]*(?: \S+)?)\s+files=(\d+)\s+dirs=(\d+)\s+([\d.]+) GB")
FIN = re.compile(r"dirs=(\d+) files=(\d+) bytes=([\d,]+)")


def bar(frac, n=46):
    frac = 0 if frac < 0 else 1 if frac > 1 else frac
    f = int(frac * n)
    return "#" * f + "-" * (n - f)


def main():
    t0 = time.time()
    while True:
        try:
            txt = open(LOG, encoding="utf-8", errors="replace").read()
        except Exception:
            txt = ""
        faits, files, dirs, go = [], 0, 0, 0.0
        for ln in txt.split("\n"):
            m = LIGNE.match(ln)
            if m:
                faits.append(m.group(1).strip())
                files, dirs, go = int(m.group(2)), int(m.group(3)), float(m.group(4))
        fini = os.path.exists(TREE)
        os.system("cls" if os.name == "nt" else "clear")
        print("=== SCAN DROPBOX - Annee scolaire 2026-2027 ===\n")
        frac = len(faits) / float(len(ATTENDUS))
        print("[{}] {:5.1f}%   {}/{} dossiers racine".format(
            bar(frac), frac * 100, len(faits), len(ATTENDUS)))
        print("\n  fichiers trouves : {}".format(files))
        print("  dossiers         : {}".format(dirs))
        print("  donnees          : {:.1f} Go sur ~{} Go".format(go, TOTAL_GO))
        print("\n--- dossiers racine ---")
        for d in ATTENDUS:
            if d in faits:
                print("   [x] {}".format(d))
            elif len(faits) == ATTENDUS.index(d):
                print("   [.] {}   <- en cours".format(d))
            else:
                print("   [ ] {}".format(d))
        el = time.time() - t0
        print("\n  fenetre ouverte depuis {:d} min {:02d} s".format(
            int(el // 60), int(el % 60)))
        if fini:
            print("\n*** TERMINE *** l'arbre complet est ecrit dans :")
            print("    dropbox-tree.txt")
            m = FIN.search(txt)
            if m:
                print("    dossiers={} fichiers={} octets={}".format(
                    m.group(1), m.group(2), m.group(3)))
            break
        print("\n  (Ctrl+C pour fermer cette fenetre - le scan continue)")
        time.sleep(REFRESH)


try:
    main()
except KeyboardInterrupt:
    print("\nferme. Le scan continue en arriere-plan.")

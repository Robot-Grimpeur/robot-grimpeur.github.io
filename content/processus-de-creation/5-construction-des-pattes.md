---
title: 5. Construction des pattes
attachments:
---

## Description

Afin de pouvoir marcher avec la démarche indiquée [ici]({{< relref "./2-fonctionnement-du-deplacement.md" >}}), les pattes du robot vont devoir pouvoir être rétractables. Pour se faire, nous utiliserons une coulisse avec un ressort.

## v1

{{< img src="patte-v1.png" caption="Photographie de la version 1 des pattes" >}}
{{< img src="grande-vis.png" caption="Photographie d'une grande vis" >}}

Le principe de ce modèle est d'utiliser une grande vis comme guidage et liaison pour la coulisse, le ressort et le cadre. Toutefois, notre vis était trop grande pour le trou.

## v2

{{< img src="patte-v2.png" caption="Photographie de la version 2 des pattes" >}}

Les problèmes de la v1 ont été réglés. Toutefois, de nouveaux sont survenus:

- La friction entre les pièces est trop grande
- Le point de jonction entre la coulisse et le cadre est trop fragile
- Il n'y a pas de possiblités facile d'attache aux ventouses

## v3

{{< img src="patte-v3.png" caption="Photographie de la version 3 des pattes" >}}
{{< img src="ressorts.png" caption="Photographie d'un ressort coupé et d'un long ressort" >}}

Plusieurs améliorations ont été apportées:

- Une 2e coulisse imbriquée a été ajoutée pour plus de stabilité
- Les coulisses sont été alongées
- Nous avons dû utiliser de plus petites visses afin de pouvoir les insérer dans les ressorts

Toutefois, il reste encore plusieurs problèmes:

- Les nouvelles visses sont trop longues. Il faudra donc alonger le cadre
- L'épaisseur du PLA autour du trou de visse est trop mince, donc il se casse avec un peu de force

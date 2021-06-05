---
title: 6. Impression flexible
attachments:
---

## Description

Certaines pièces du robot devront être flexible. Toutefois, le plastique utilisé dans nos autres pièces, le PLA, ne peut être plié sans être cassé. Nous devions donc trouvé un autre type de plastique imprimable.

En faisant un peu de recherche, nous avons trouvé cet article: [TPU Filament: The Basics & Best Brands 2021 ](https://m.all3dp.com/2/tpu-filament-explained-and-compared/). En fonction des spécifications techniques et des coûts des différents plastiques proposés, nous sommes arrivés à la conclusion que le {{< lexicon ninjaflex >}} serait le plastique le plus approprié.

## Défis techniques

Étant un plastique flexible, le {{< lexicon ninjaflex >}} cause plusieurs défis. Les voici avec leur solution:

- Pour ne pas causer de bloquages, le {{< lexicon ninjaflex >}} doit être imprimé à des vitesses très lentes
- Pour être lisse, le {{< lexicon flow >}} d'impression doit être réglé à 150%
- Pour se plier de la bonne manière, le motif d'{{< lexicon infill >}} doit être correctement choisi. Pour se faire, nous avons imprimé divers cylindres avec différents paramètres pour les comparer. Nous sommes arrivés à la conclusion que le motif en quadrillage était celui qui donnait les meilleurs résultats.
  {{< img src="cylindres-ninjaflex.png" caption="Photographie des cylindres de test" >}}

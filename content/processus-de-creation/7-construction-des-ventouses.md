---
title: 7. Construction des ventouses
attachments:
---

## Description

Afin de pouvoir marcher avec la démarche indiquée [ici]({{< relref "./2-fonctionnement-du-deplacement.md" >}}), les ventouses du robot vont devoir se déposer sur le mur sans laisser l'air entrer. La pompe à air s'occupera d'enlever l'air dans la ventouse par un tuyau à vide afin de créer un pression de $\pu{-85 kPa}$.

## v1

{{< img src="ventouse-v1.jpeg" caption="Amazon - Photographie de la version 1 des ventouses" >}}

Nous avons décidé d'acheter des ventouses préfaites. Le plan était de percer un trou et ensuite lier la ventouse au tuyau à vide par de la colle chaude. Toutefois, après avoir testé cette méthode, nous avons trouvé quelques problèmes:

- Percer un trou brise le petit support de la ventouse que qui empèche celle-ci d'être attachée à une patte
- Ce n'est pas une liaison démontable entre le tuyau à vide et la ventouse

## v2

{{< img src="ventouse-v2.png" caption="Photographie de la version 2 des ventouses" >}}

À cause des problèmes de la v1, la décision a donc été que concevoir nos propres ventouses. Une ventouse imprimé en PLA était la solution. Celle-ci est de forme cylindrique afin de faciliter l'impression. La flexibilité de la ventouse n'a pas d'importance puisque si toute l'air est retiré la ventouse se tiendrait par elle même grâce à la pression atmosphérique.

Dans cette version, la ventouse tient grâce à la pompe, mais ce n'est pas parfait. Il reste encore plusieurs problèmes:

- Si la ventouse de faite déposer un peu sur le côté, celle-ci ne se plie pas, donc l'air entre
- Si on désactive la pompe, la ventouse tombe
- La liaison au tuyau à vide est fait de manière à ce qu'on insère le tuyau à vide dans le trou d'attache sur la ventouse ce qui laisse entrer l'air. Il faut utiliser du {{< lexicon ducttape >}} pour empêcher cela en scellant le trou.

## v3

{{< img src="ventouse-v3.png" caption="Photographie de la version 3 des ventouses" >}}

Cette version apporte plusieurs changements:

- Après avoir découvert un plastique très flexible appelé {{< lexicon ninjaflex>}} nous avons décidé d'imprimer une ventouse faite complètement de ce matériau
- La liaison au tuyau à vide est externe et est fait de manière à ce qu'on insère le tuyau à vide sur la partie d'attache
- La ventouse est de forme de cône pour bien plier

Toutefois, il y a un problème majeur. À cause de raisons d'impression 3D, il n'est pas possible d'imprimer quelque chose avec un angle plus bas que 45°, sinon l'impression s'effondre. Ceci cause donc une ventouse plutôt à pic qui plie de manière étrange et laisser entrer de l'air. Celle-ci ne peut donc pas lever beaucoup de poids (Maximum feuille de papier).

## v4

{{< img src="ventouse-v4.png" caption="Photographie de la version 4 des ventouses" >}}

Cette version est un mélange de la v2 et de la v3. Plusieurs améliorations ont été apportées:

- La hauteur de la ventouse est plus basse pour faciliter le déplacement de la patte
- Une bordure de {{< lexicon ninjaflex>}}, un plastique très flexible, est ajouté autour de la partie en PLA de la ventouse pour empêcher l'air de pénétrer
- Comme la v2, la liaison au tuyau à vide est également externe

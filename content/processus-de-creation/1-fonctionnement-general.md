---
title: 1. Fonctionnement général
attachments:
---

## Description

Le robot utiliserait le principe de pression pour se _coller_ au mur. Grâce à une **pompe**, le robot serait capable de créer un **différentiel de pression** suffisament grand dans ses pates (ses ventouses) pour que la force de la gravité soit plus petite que la force de la pression atmosphérique

Le but de ce projet est de crér un **robot d'entretien spécialisé**, capable d'atteindre des endroits impossibles pour d'autres robots. En effet, les robots marchants ou roulants sont limités aux milieux terrestres, alors que les drône sont moins stables et ont besoin de plus de marge de manœuvre.

## Calculs préalables

Afin de vérifier si cette idée était même réaliste, nous avons effectué des calculs préalables. Ce sont des estimations grossières ayant but de donner un ordre de grandeur.

Soit une pompe à vide capable d'abaisser la pression de $\pu{85 kPa}$, telle que [celle-ci](https://www.amazon.ca/DC12V-Vacuum-Small-Oilless-85KPa/dp/B07H4R7QNC/), et une ventouse ayant une superficie de contact avec l'air ambiant de $\pu{5 cm2}$

{{< mathjax >}}

$$
\begin{align}
P &= \frac{F}{A} \\
F &= P \cdot A \\
F &\approx \pu{85 kPa} \cdot \pu{5 cm2} \\
F &\approx \pu{425 N} \\
\end{align}
$$

{{< /mathjax >}}

Sachant que, sur Terre, la constante $g$ est d'environ $\pu{9.8 m/s2}$, il est possible d'approximer la masse qui pourrait être soulevée.

{{< mathjax >}}

$$
\begin{align}
F &= m \cdot a \\
m &= \frac{F}{a} \\
m &\approx \frac{\pu{425 N}}{\pu{9.8 m/s2}} \\
m &\approx \pu{43.37 kg} \\
\end{align}
$$

{{< /mathjax >}}

Cette approximation nous a indiqué qu'il n'était pas illogique d'aller de l'avant avec le projet.

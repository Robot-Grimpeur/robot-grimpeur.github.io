---
title: 4. Schéma électrique
attachments:
---

{{< img src="schema-electrique.svg" caption="Schéma du circuit électrique" >}}

## Description

Le schéma ci-haut représente le circuit électrique du robot. Puisque [la pompe que nous avons sélectionnée](https://www.amazon.ca/DC12V-Vacuum-Small-Oilless-85KPa/dp/B07H4R7QNC/) est sur du 12V, nous avons décidé de choisir nos autres pièces sur ce voltage. Pour contrôller les entrées et les sorties d'air, nous avons donc sélectionné [ces valves à deux voies de 12V](https://www.aliexpress.com/item/1005001385832132.html). Afin d'articuler les pattes, nous utiliserons [4 servos de 25 kg](https://www.amazon.ca/Waterproof-Digital-Arduino-Crawler-Control/dp/B07DHP2922/). Ces servos ont besoin de courrant allant jusqu'à 6.8V. Nous les connecterons donc en paires en série pour qu'ils reçoivent chacun 6V. Finalement, pour orchestrer tous ces périphériques, nous utiliserons un [Raspberry Pi 3B+](https://www.raspberrypi.org/products/raspberry-pi-3-model-b-plus/). Ce dernier doit être alimenté sur du 5.1V et du 2.5A. Pour se faire, nous utiliserons un adapteur tel que [celui-ci](https://www.amazon.ca/Converter-Regulator-Waterproof-Converters-Smartahone/dp/B07H7X37T6). Le Raspberry Pi contrôllera les servos grâce à leur connection de contrôle et les valves grâce à des transistors, en {{<color "#fa5252" "white" >}}rouge{{</color>}} dans le schéma.

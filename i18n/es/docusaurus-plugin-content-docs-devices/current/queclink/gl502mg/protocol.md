---
slug: /queclink/gl502mg/protocol
id: gl502mg-protocol
sidebar_label: Protocol
title: QuecLink - GL502MG Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo y guía de integración en Plaspy para el QuecLink GL502MG
keywords:
  - Protocolo QuecLink GL502MG
  - Rastreador GPS GL502MG
  - QuecLink GL502MG Plaspy
  - Comunicación QuecLink GL502MG
  - Protocolo rastreador QuecLink
  - Protocolo rastreador de activos
  - Compatibilidad rastreador GPS
  - Protocolo seguimiento de flotas
  - Protocolo rastreo de contenedores
  - Compatibilidad rastreador GPS con Plaspy
---

# QuecLink - Protocolo GL502MG

Esta página describe el contexto público del protocolo para usar el rastreador QuecLink GL502MG con la plataforma Plaspy. Se centra en cómo el dispositivo se comunica con un servidor remoto en términos generales y qué necesita saber para garantizar que el GL502MG informe ubicación y estado a Plaspy. El contenido destaca puntos de conexión, opciones de transporte y consideraciones prácticas de compatibilidad sin exponer detalles sensibles de implementación.

El GL502MG es un rastreador resistente con clasificación IP68, diseñado para seguimiento de activos, remolques y contenedores, con larga vida de batería y opciones modernas de conectividad. Plaspy utiliza configuraciones de conexión compartidas entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138 con el puerto 8888. El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888. Todos los dispositivos en Plaspy usan el mismo puerto y Plaspy detecta automáticamente el protocolo del rastreador.

## Visión general del protocolo

El protocolo del rastreador define cómo el GL502MG intercambia información de estado, posición y diagnóstico con un servidor backend. Para Plaspy, esto significa que el dispositivo debe estar configurado para reportar al endpoint de Plaspy y utilizar uno de los métodos de transporte compatibles. El propósito del protocolo es que la telemetría sea útil para la plataforma y que la comunicación sea resistente para despliegues con batería de larga duración y conexiones intermitentes.

- Permite al GL502MG enviar reportes periódicos de ubicación y eventos a Plaspy para la visibilidad de activos.
- Traslada metadatos de identificación y estado que permiten a Plaspy asociar los mensajes con el registro de dispositivo correcto.
- Soporta transmisión sobre redes celulares, incluyendo LTE Cat M1 y NB2, con conmutación a redes legadas para continuidad de cobertura.
- Funciona con sensores y ayudas de posicionamiento del dispositivo como GNSS, posicionamiento por WiFi y BLE para ofrecer datos de ubicación más completos.
- Permite que la plataforma reciba indicadores de batería y salud necesarios para despliegues de larga duración y planificación de mantenimiento.

## Cómo detecta Plaspy el protocolo

Plaspy recibe el tráfico entrante de los dispositivos en un endpoint compartido y determina automáticamente el manejo correcto para una amplia gama de implementaciones de rastreadores. En la mayoría de las implementaciones, usted solo necesita apuntar el GL502MG al servidor Plaspy y elegir el protocolo de transporte apropiado en el dispositivo.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138 con el puerto 8888.
- Los dispositivos pueden configurarse para usar UDP o TCP para el reporte, según lo permita el equipo y las características de confiabilidad deseadas.
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que no necesita puertos distintos por modelo.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de la plataforma.
- En configuraciones típicas, los usuarios no seleccionan un protocolo manualmente dentro de Plaspy si el GL502MG está configurado correctamente para reportar al endpoint de Plaspy.

## Contexto de transporte y conexión

El contexto de conexión abarca cómo el GL502MG llega a Plaspy a través de la red. El rastreador soporta enlaces celulares de bajo consumo modernos y transportes estándar TCP o UDP, y debe configurarse para apuntar al host y puerto de Plaspy usados por todos los dispositivos.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según la capacidad del equipo y las condiciones de red.
- Los dispositivos pueden apuntar a d.plaspy.com o a la dirección numérica del servidor 54.85.159.138 cuando DNS o el enrutamiento lo requieren.
- Usar TCP puede ofrecer una entrega más confiable en redes que soportan conexiones persistentes, mientras que UDP puede ser beneficioso por menor sobrecarga en escenarios restringidos.
- Asegúrese de que el APN y la configuración celular del dispositivo permitan conexiones salientes hacia el servidor Plaspy y el protocolo de transporte elegido.
- Mantenga el firmware actualizado y siga las directrices de QuecLink sobre gestión de red y energía para conservar una conectividad fiable.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware pueden afectar qué modos de reporte, intervalos de mensajes o funciones opcionales están disponibles en un GL502MG.
- Las revisiones de hardware u accesorios opcionales como antenas externas o soportes magnéticos no suelen cambiar el protocolo reportado, pero pueden influir en el rendimiento radio y la calidad de posicionamiento.
- Los menús de configuración del fabricante pueden permitir cambiar el transporte, la dirección del servidor y los intervalos de reporte, lo que modificará cómo se comporta el dispositivo con Plaspy.
- La selección de transporte (UDP versus TCP) debe adecuarse a las condiciones de red y a la capacidad del dispositivo para optimizar la vida de la batería y la fiabilidad de entrega.
- Valide cualquier ajuste específico del dispositivo usando la documentación oficial de QuecLink y las notas de la versión antes de desplegar a gran escala.
- Si depende de posicionamiento asistido por BLE o WiFi, confirme cómo esos puntos de datos son incluidos por el firmware del dispositivo en los reportes de enlace ascendente.

## Por qué es importante entender el protocolo

Saber cómo el GL502MG se comunica con Plaspy ayuda a asegurar una configuración exitosa, comportamiento predecible en campo y una resolución de problemas eficiente cuando los dispositivos no aparecen en la plataforma.

- Ayuda a confirmar que el dispositivo está apuntando al endpoint correcto de Plaspy y usando el puerto 8888 para que los mensajes lleguen al servidor.
- Facilita la selección del transporte apropiado para su despliegue, equilibrando fiabilidad y consumo de batería.
- Permite interpretar más fácilmente el estado informado por el dispositivo y los indicadores de batería para la planificación de mantenimiento a largo plazo.
- Reduce el tiempo dedicado a diagnosticar problemas de conectividad al limitar la investigación a red, APN o configuración de firmware.
- Apoya la planificación de escalado al comprender cómo se comportan los dispositivos con distintos intervalos de reporte y condiciones de red.

## Por qué usar Plaspy con este protocolo

Usar el QuecLink GL502MG con Plaspy ofrece una vía práctica para lograr visibilidad a nivel de activo en contenedores, remolques y otros equipos remotos. El hardware GL502MG está diseñado para larga duración y condiciones adversas, mientras que Plaspy recibe y normaliza la telemetría para que los equipos puedan monitorear ubicación, estado de batería y eventos operativos sin gestionar el parsing a bajo nivel del protocolo.

El modelo de endpoint compartido de Plaspy simplifica los despliegues: apunte el GL502MG a d.plaspy.com o 54.85.159.138 en el puerto 8888 usando UDP o TCP, y Plaspy detectará automáticamente el protocolo del rastreador y procesará los reportes entrantes. Para conocer más sobre Plaspy visite https://www.plaspy.com y para detalles más actuales del dispositivo y firmware consulte al fabricante en https://www.queclink.com/. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo y deben verificarse contra la documentación oficial de QuecLink.

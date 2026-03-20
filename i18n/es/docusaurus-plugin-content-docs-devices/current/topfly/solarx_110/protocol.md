---
slug: /topfly/solarx_110/protocol
id: solarx_110-protocol
sidebar_label: Protocol
title: TopFly - SolarX 110 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del TopFly SolarX 110 y cómo comunica telemetría y posiciones GPS con Plaspy
keywords:
  - Protocolo TopFly SolarX 110
  - Protocolo GPS TopFly SolarX 110
  - Compatibilidad TopFly SolarX 110 Plaspy
  - Protocolo de rastreo SolarX 110
  - Protocolo de comunicación SolarX 110
  - Protocolo rastreador GPS con energía solar
  - Protocolo rastreador de activos Plaspy
  - Protocolo rastreador gestión de flotas
  - Integración sensores BLE rastreador GPS
  - Protocolo informe GPS en tiempo real
---

# TopFly - Protocolo SolarX 110

Esta página describe el contexto público del protocolo para utilizar el TopFly SolarX 110 con Plaspy. Se centra en cómo el SolarX 110 comunica telemetría básica, posiciones GNSS y datos de sensores accesorios a Plaspy sin exponer detalles internos del firmware ni implementaciones privadas. El objetivo es ayudar a usuarios técnicos e integradores a comprender, a alto nivel, cómo interactúa el rastreador con Plaspy para planear configuración y despliegue.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando los dispositivos reportan a la plataforma. El comportamiento exacto del protocolo y las funcionalidades admitidas pueden variar según la versión de firmware, la revisión de hardware o la implementación del fabricante. El SolarX 110 es un rastreador alimentado por energía solar, con certificación IP67, batería recargable de 2500 mAh, GNSS multiconstelación, BLE 5.3 para sensores accesorios, gran almacenamiento en el dispositivo y intervalos de reporte tan rápidos como cada 3 segundos; esas características influyen en cómo se emplea el protocolo de comunicación en campo.

## Resumen del protocolo

A grandes rasgos, el protocolo de comunicación del SolarX 110 define cómo el dispositivo se identifica, entrega posiciones y telemetría, y sincroniza datos almacenados con un servidor remoto. El papel público del protocolo es poner a disposición de Plaspy la ubicación, lecturas de sensores e información de eventos para visualización, alertas y análisis histórico.

- Transmite reportes de posición GNSS y telemetría básica como nivel de batería, señal y estado de sensores para que Plaspy pueda mostrar ubicación en vivo e histórico.
- Incluye datos de sensores accesorios vía BLE y de sensores internos para asociar condiciones ambientales o estado de puertas con las rutas GPS.
- Ofrece buffering en el dispositivo y comportamiento de resincronización para que los puntos almacenados se carguen cuando vuelva la conectividad y Plaspy complete huecos históricos.
- Permite intervalos de reporte configurables y mensajes basados en eventos para que los equipos operativos equilibren la frecuencia de actualización frente al consumo de energía.
- Soporta modos de transmisión seguros opcionales y disparadores de actualización de firmware como parte del ciclo de vida de comunicación del dispositivo.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en un endpoint y puerto compartidos y determina automáticamente el protocolo del rastreador cuando un dispositivo bien configurado se reporta. En la mayoría de los casos no necesitará seleccionar manualmente un protocolo dentro de Plaspy si el SolarX 110 está configurado para reportar al endpoint de Plaspy usando los parámetros de transporte compatibles.

- Apunte el dispositivo al endpoint del servidor Plaspy mediante el dominio d.plaspy.com o a la IP del servidor 54.85.159.138.
- Configure el dispositivo para usar el puerto 8888; Plaspy emplea el mismo puerto para todos los dispositivos compatibles, por lo que una sola configuración de puerto es suficiente en una flota heterogénea.
- Los dispositivos pueden usar transporte TCP o UDP para alcanzar el endpoint de Plaspy según la configuración del dispositivo y la preferencia del operador.
- Cuando el dispositivo envía su identidad y reportes periódicos a Plaspy, la plataforma mapea los flujos entrantes al tipo de rastreador detectado y comienza a ingerir ubicación y telemetría automáticamente.
- Identificadores de dispositivo correctos y una conexión estable al endpoint de Plaspy son los prerequisitos habituales para la detección automática.

## Transporte y contexto de conexión

Las elecciones de conexión influyen en la latencia, la confiabilidad y el consumo de batería. El SolarX 110 soporta opciones de transporte comunes para poder conectarse a Plaspy en diversos entornos de red. Use el endpoint y los ajustes de puerto de Plaspy que se indican abajo al configurar el dispositivo para reportes remotos.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888, según el soporte del equipo y consideraciones de red.
- Se puede apuntar a Plaspy mediante el dominio d.plaspy.com o, como alternativa, a la IP 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración a nivel de flota al registrar dispositivos heterogéneos.
- La selección del transporte puede afectar garantías de entrega y el perfil de consumo energético, por lo que debe elegir TCP o UDP conforme a sus objetivos de confiabilidad y batería.
- Asegúrese de que el APN y la conectividad de la SIM estén correctos en el SolarX 110 para que pueda alcanzar d.plaspy.com o la dirección numérica del servidor.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware y las revisiones de hardware pueden cambiar los mensajes que envía el SolarX 110 y cómo funcionan características como el reporte de sensores BLE o el buffering.
- Variaciones por parte del fabricante y compilaciones regionales de firmware pueden alterar los transportes soportados, las opciones de cifrado o los campos de telemetría.
- El SolarX 110 soporta opciones de transmisión segura y FOTA según la documentación del dispositivo; la disponibilidad puede depender del firmware.
- La elección entre UDP y TCP puede afectar el rendimiento en tiempo real y debe validarse para su caso de uso.
- Los amplios buffers en el dispositivo y la capacidad de reportes de alta frecuencia hasta 3 segundos influyen en los patrones de ingestión del servidor y deben planificarse.
- Siempre valide los números de serie y el firmware de sus unidades contra la documentación oficial antes de desplegar masivamente.

## Por qué es importante conocer el protocolo

Comprender de forma práctica el protocolo de comunicación del SolarX 110 ayuda a integradores y operadores de flotas a lograr una configuración fiable, comportamiento predecible y resolución eficiente de problemas cuando los dispositivos se usan con Plaspy. Saber cómo reporta el dispositivo, qué transportes soporta y cómo Plaspy espera las conexiones entrantes reduce errores de configuración y acorta los tiempos de resolución.

- Garantiza que la configuración de reporte del dispositivo apunte al endpoint d.plaspy.com o 54.85.159.138 en el puerto 8888 para que pueda producirse la detección automática.
- Ayuda a escoger el modo de transporte adecuado TCP o UDP según su red y restricciones de energía.
- Facilita la interpretación de datos faltantes, resincronización de buffers y el comportamiento de eventos durante cortes o transiciones.
- Permite planificar la integración de accesorios BLE y mapear flujos de sensores en los paneles y alarmas de Plaspy.
- Orienta el momento y la verificación de actualizaciones de firmware para mantener un comportamiento de protocolo consistente en la flota.

## Por qué usar Plaspy con este protocolo

Combinar el SolarX 110 con Plaspy ofrece a los equipos operativos una plataforma unificada para visibilidad en tiempo real, alarmas configurables y análisis histórico de rutas, aprovechando características del hardware como captación solar, grandes buffers locales, soporte BLE para sensores y alertas anti manipulaciones. Plaspy ingiere los flujos del dispositivo cuando el SolarX 110 reporta al endpoint compartido de Plaspy y proporciona herramientas de visualización y reenvío útiles para flujos de trabajo de gestión de flotas y activos.

Si desea conocer más sobre Plaspy y cómo funciona con el SolarX 110, visite https://www.plaspy.com. Para obtener los detalles más actuales y específicos del dispositivo sobre el protocolo, comportamiento del firmware e instrucciones del fabricante, verifique la información en el sitio oficial de TopFly https://www.topflytech.com/ ya que el soporte de dispositivos e implementaciones de firmware pueden cambiar con el tiempo.

---
slug: /gotop/g02_4g/protocol
id: g02_4g-protocol
sidebar_label: Protocol
title: GOTOP - G02-4G Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para usar el rastreador GOTOP G02-4G con Plaspy para seguimiento de flotas en tiempo real
keywords:
  - Protocolo GOTOP G02-4G
  - Protocolo GPS GOTOP G02-4G
  - Protocolo de comunicación GOTOP G02-4G
  - Protocolo de rastreo GOTOP G02-4G
  - Compatibilidad GOTOP G02-4G con Plaspy
  - Protocolo de rastreador GPS GOTOP
  - Rastreo de flotas GOTOP G02-4G
  - Integración de dispositivos Plaspy
  - Protocolo de telemetría vehicular
  - Protocolo para rastreadores GPS de motocicletas
---

# GOTOP - Protocolo G02-4G

Esta página presenta el contexto público del protocolo para integrar el rastreador GOTOP G02-4G con Plaspy. Aquí se explica cómo el equipo comunica telemetría y eventos a Plaspy y qué debe considerar al configurar el rastreador para reportar a la plataforma. El contenido es de alto nivel y no incluye detalles privados de implementación ni internals de firmware.

Plaspy utiliza una configuración de conexión compartida para los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo está correctamente configurado para enviar datos a Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que el reporte puede diferir entre unidades o versiones de firmware dentro de la misma línea de modelo.

## Resumen del protocolo

En este contexto, el protocolo define el comportamiento de reporte y el intercambio de comandos que permite al G02-4G enviar posiciones GPS, eventos de alarma y datos de estado a Plaspy. Regula cómo el rastreador se identifica, cómo se empaquetan los datos de ubicación y sensores, y cómo se transmiten las actualizaciones de estado para que Plaspy pueda ingerir, mostrar y actuar sobre la información.

- Permite transmisión periódica y orientada por eventos de posiciones GPS, estado de ACC/encendido y alarmas al endpoint de ingestión de Plaspy.
- Incluye identificadores del dispositivo e información de estado para que Plaspy asocie los mensajes entrantes con el registro correcto del rastreador.
- Envía indicadores de eventos como activación de geocercas, alarmas por movimiento o vibración, batería baja y pérdida de alimentación principal para alertas inmediatas.
- Soporta métodos de entrega redundantes como datos celulares 4G con conmutación a 3G/2G y reporte opcional por SMS cuando las condiciones de red lo requieren.
- Garantiza que Plaspy reciba la telemetría necesaria para mapas, recorridos históricos, alertas automatizadas e integraciones con flujos operativos de la flota.

## Cómo detecta Plaspy el protocolo

Plaspy escucha en un endpoint de ingestión compartido y determina automáticamente qué protocolo utiliza un dispositivo cuando llega un mensaje compatible. Esto significa que, normalmente, los usuarios no necesitan seleccionar un protocolo dentro de Plaspy si el equipo está configurado para reportar al endpoint de Plaspy usando el transporte y la dirección correctos.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor de Plaspy es 54.85.159.138 para el reporte de dispositivos.
- El puerto es 8888 y Plaspy usa el mismo puerto para todos los dispositivos soportados.
- Plaspy detecta automáticamente el protocolo del rastreador una vez que el dispositivo reporta al endpoint de Plaspy en el puerto 8888.
- En la mayoría de los casos, configurar el G02-4G para reportar a d.plaspy.com en el puerto 8888 con el transporte elegido es suficiente para la detección.
- Si un dispositivo no aparece en Plaspy, verifique el acceso a la red, la dirección del servidor y que el rastreador esté enviando telemetría activamente.

## Transporte y contexto de conexión

El contexto de conexión trata de cómo el G02-4G alcanza Plaspy más que de la estructura exacta de los mensajes que envía. El equipo soporta reporte por red celular y puede configurarse para usar distintos transportes según los requisitos y las capacidades del firmware.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte y la configuración del equipo.
- Los dispositivos suelen apuntar a d.plaspy.com o 54.85.159.138 como endpoint de ingestión de Plaspy.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos, lo que simplifica la configuración en flotas mixtas.
- El G02-4G envía telemetría por 4G LTE con conmutación a 3G y 2G y también puede ofrecer reporte por SMS como canal secundario.
- Asegúrese de que el rastreador tenga una suscripción de datos móviles activa y que las políticas del operador permitan conexiones salientes al endpoint de Plaspy en el puerto 8888.

## Notas sobre compatibilidad del protocolo

- Las variaciones de firmware entre unidades pueden modificar las opciones de mensaje soportadas, los intervalos de reporte o el comportamiento de las alarmas.
- Las revisiones de hardware pueden introducir diferencias en los transportes soportados o en las entradas periféricas que afectan los datos reportados.
- Algunas compilaciones de firmware requieren utilidades de configuración del fabricante o comandos SMS para establecer la dirección del servidor y el transporte.
- La selección del transporte (UDP vs TCP) puede afectar características de entrega como fiabilidad y latencia en condiciones de red específicas.
- El reporte por SMS es útil para redundancia, pero habitualmente incluye campos diferentes y costos distintos en comparación con el reporte por datos celulares.
- Valide siempre la compatibilidad para su caso de uso de flota confirmando la versión exacta de firmware y la revisión del modelo antes de un despliegue a gran escala.

## Por qué es importante entender el protocolo

Comprender cómo el G02-4G se comunica con Plaspy ayuda a instaladores, integradores y operadores de flota a lograr despliegues confiables y una resolución de problemas más ágil. Conocer el papel del transporte, la dirección del servidor y el reporte de eventos reduce el tiempo de configuración y mejora la visibilidad operativa.

- Asegura que se aplique la dirección del servidor y el transporte correctos para que los dispositivos se conecten a Plaspy de forma fiable.
- Ayuda a diagnosticar problemas comunes como telemetría faltante, identificación incorrecta del dispositivo o reportes intermitentes.
- Clarifica las expectativas sobre los tipos de eventos disponibles desde el equipo, como estado de ACC, activaciones de geocerca y alarmas de alimentación.
- Orienta las decisiones sobre redundancia y estrategias de conmutación usando SMS frente a datos celulares.
- Apoya la planificación de actualizaciones de firmware, pruebas de campo y despliegues por etapas en flotas mixtas.

## Por qué usar Plaspy con este protocolo

Usar el GOTOP G02-4G con Plaspy ofrece a las organizaciones un camino sencillo hacia la visibilidad centralizada de la flota. La caja resistente con certificación IP67 del equipo, su amplio rango de voltaje y la posicionamiento GNSS preciso lo hacen adecuado para motocicletas, bicicletas eléctricas y automóviles, donde el factor de forma compacto y el reporte confiable son importantes. Plaspy ingiere la telemetría del G02-4G para proporcionar mapas en vivo, alertas, historial e puntos de integración para los flujos operativos de la flota sin requerir cambios de puerto por dispositivo o selección manual de protocolo.

Si desea saber más sobre cómo Plaspy funciona con dispositivos como el GOTOP G02-4G, visite el sitio de Plaspy en https://www.plaspy.com. Para obtener los detalles más recientes sobre protocolos específicos del dispositivo, notas de firmware y orientación del fabricante, verifique la información actual en el sitio oficial de GOTOP en https://www.gotop.cc/. El soporte de protocolos, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que consultar la documentación del fabricante ayuda a asegurar una configuración precisa.

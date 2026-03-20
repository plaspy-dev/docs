---
slug: /tramigo/t22/protocol
id: t22-protocol
sidebar_label: Protocol
title: Tramigo - T22 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen técnico público sobre la comunicación del Tramigo T22 con los servidores de Plaspy para rastreo GPS y compatibilidad de dispositivos
keywords:
  - Protocolo Tramigo T22
  - Protocolo GPS Tramigo T22
  - Protocolo Tramigo T22 para Plaspy
  - Protocolo de comunicación Tramigo T22
  - Protocolo de rastreo Tramigo T22
  - Protocolo rastreador GPS Tramigo
  - Compatibilidad rastreador Tramigo Plaspy
  - Rastreo de flotas Tramigo T22
  - Protocolo rastreador GPS Plaspy
  - Rastreo de vehículos Tramigo
---

# Tramigo - T22 Protocol

Esta página describe el contexto público del protocolo para usar el rastreador Tramigo T22 con Plaspy. Explica, a alto nivel, cómo el T22 se comunica a través de redes móviles y cómo Plaspy recibe y procesa esas comunicaciones. El objetivo es ofrecer un contexto del protocolo claro, sin entrar en detalles sensibles, que ayude en la integración, configuración y resolución de problemas, a la vez que recomienda verificar la documentación del fabricante para detalles específicos de firmware.

Plaspy utiliza un punto de conexión y puerto compartidos para los dispositivos compatibles y detecta automáticamente el protocolo de reporte cuando llegan los datos. El comportamiento exacto del Tramigo T22 puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por lo tanto, parámetros como los intervalos de reporte, modos de sueño y manejo de eventos pueden diferir entre unidades. Esta página se centra en el contexto de comunicación y no en paquetes propietarios ni en detalles internos de firmware.

## Resumen del protocolo

El Tramigo T22 emplea servicios de datos celulares para enviar información de posición y eventos a un servidor backend. En la práctica, el dispositivo transmite su ubicación, desencadenadores de eventos y actualizaciones de estado por GSM/GPRS a un servidor configurado, y Plaspy procesa esos mensajes para ofrecer ubicación, alertas e historial. El papel del protocolo es trasladar de forma confiable los datos del dispositivo desde el rastreador hasta Plaspy usando el transporte de red que el dispositivo soporte.

- Proporciona un canal para transmitir posición GPS, marca temporal y marcadores de evento del T22 al servidor
- Permite identificar el dispositivo para que Plaspy asocie los mensajes entrantes con el registro correcto del rastreador
- Soporta modos de reporte reflejando configuraciones del dispositivo como reportes por tiempo o distancia y comportamiento en modo de sueño
- Acomoda comportamiento de almacenamiento y reenvío, ya que el dispositivo puede almacenar datos internamente hasta que haya conexión disponible
- Transporta eventos e indicadores simples como ignición, pánico y batería baja como parte de los reportes regulares

## Cómo Plaspy detecta el protocolo

Plaspy recibe datos de dispositivos en un único endpoint público e inspecciona el tráfico entrante para determinar el protocolo del rastreador. Dado que Plaspy gestiona muchos tipos de rastreadores en el mismo endpoint, por lo general usted no necesita seleccionar un protocolo dentro de Plaspy siempre que el dispositivo esté configurado para reportar a la dirección y puerto del servidor de Plaspy.

- Plaspy usa el dominio de servidor compartido d.plaspy.com para el reporte de dispositivos
- La IP del servidor Plaspy es 54.85.159.138 y el puerto utilizado por todos los dispositivos es 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo envía datos al endpoint de Plaspy
- En la mayoría de los casos, un dispositivo correctamente configurado no requiere selección manual de protocolo dentro de Plaspy
- Si un dispositivo parece no conectar, verifique que esté configurado para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888 y confirme el tipo de transporte

## Transporte y contexto de conexión

El Tramigo T22 se comunica por redes celulares usando GPRS y puede configurarse para usar UDP o TCP según la configuración de la unidad y el soporte del firmware. El contexto de conexión se refiere principalmente a apuntar el rastreador al endpoint correcto de Plaspy y garantizar que la operadora permita el transporte elegido.

- Los dispositivos se pueden configurar para reportar a d.plaspy.com o directamente a 54.85.159.138
- El puerto usado para el reporte a Plaspy es 8888 para todos los dispositivos soportados
- El T22 puede usar UDP o TCP en el puerto 8888 según la configuración del dispositivo y el firmware
- Asegúrese de que la SIM y la configuración de datos del operador permitan conexiones GPRS al endpoint de Plaspy
- Restricciones de firewall o del APN en la red celular pueden impedir la entrega y deben verificarse durante la configuración

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el contenido de los mensajes, los transportes soportados y los eventos disponibles; verifique las notas de la versión del firmware cuando sea posible
- Revisiones de hardware o características opcionales del T22 (por ejemplo respaldo de batería o comportamiento de memoria interna) pueden afectar la forma de reportar y el almacenamiento y reenvío
- Es posible que sean necesarias herramientas de configuración del fabricante o opciones de configuración por USB para establecer el servidor de reporte a d.plaspy.com o 54.85.159.138 y seleccionar UDP o TCP en el puerto 8888
- La selección de transporte (UDP frente a TCP) debe coincidir con lo que admite el firmware del dispositivo y lo que permite la red móvil/APN
- La detección automática de Plaspy reduce la necesidad de seleccionar protocolos manualmente, pero sigue siendo necesaria la configuración correcta del endpoint y del transporte en el dispositivo
- Siempre valide el comportamiento del dispositivo con una SIM y una red de prueba antes del despliegue para asegurar patrones de reporte confiables

## Por qué es importante entender el protocolo

Conocer cómo se comunica el Tramigo T22 ayuda a garantizar una conexión fiable con Plaspy, acelera la resolución de problemas y contribuye a la confiabilidad a largo plazo del servicio de rastreo. Tener presente el contexto del protocolo y del transporte permite a los integradores identificar errores de configuración, limitaciones de red o comportamientos de firmware que afecten la entrega de datos.

- Facilita confirmar que el dispositivo apunta a d.plaspy.com o a 54.85.159.138 en el puerto 8888
- Ayuda a acotar problemas entre la red, el dispositivo y el servidor cuando los mensajes no llegan
- Orienta la decisión de usar UDP o TCP según la estabilidad de la red y los requisitos de datos
- Guía pasos de validación como probar con una SIM conocida, verificar la configuración APN y confirmar la versión de firmware
- Apoya la planificación de la vida útil de la batería y los intervalos de reporte al entender cómo el dispositivo envía datos y utiliza modos de sueño

## Por qué usar Plaspy con este protocolo

Usar el Tramigo T22 con Plaspy ofrece a las organizaciones visibilidad directa del estado y la ubicación de activos aprovechando el endpoint de ingestión compartido y la detección automática de protocolos de Plaspy. El GPS y el módulo GSM del T22, junto con la infraestructura en la nube de Plaspy, facilitan el monitoreo de vehículos, la recuperación de activos y la gestión de flotas sin que sea necesario gestionar la selección de protocolos dentro de la plataforma.

Si desea conocer más sobre Plaspy y cómo puede recibir y procesar reportes del Tramigo T22, visite https://www.plaspy.com. Para obtener los detalles más recientes específicos del dispositivo, notas de firmware e instrucciones oficiales de configuración, por favor verifique la información en el sitio del fabricante http://www.tramigo.net/. El soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo, por lo que se recomienda consultar la documentación del fabricante para una configuración precisa y específica del dispositivo.

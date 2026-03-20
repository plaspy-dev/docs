---
slug: /aplicom/t20/protocol
id: t20-protocol
sidebar_label: Protocol
title: Aplicom - T20 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para usar el Aplicom T20 con Plaspy, con guías de conexión y transporte para integradores
keywords:
  - protocolo Aplicom T20
  - protocolo GPS Aplicom T20
  - protocolo de comunicación Aplicom T20
  - protocolo de rastreo Aplicom T20
  - compatibilidad de dispositivos Plaspy
  - protocolo de rastreador Plaspy
  - integración telemática vehicular
  - pasarela telemática LTE-M
  - seguimiento telemetría CAN bus
  - protocolo de rastreo de flotas
---

# Aplicom - Protocolo T20

Esta página ofrece el contexto público del protocolo para usar el rastreador Aplicom T20 con Plaspy. Explica de forma general cómo el T20 comunica telemetría y ubicación a la plataforma Plaspy y qué debe saber usted como integrador sobre ajustes de conexión y comportamiento de reporte, sin entrar en detalles sensibles ni internos específicos de firmware.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; no obstante, el comportamiento exacto puede variar según el firmware, la revisión de hardware y la implementación del fabricante. El Aplicom T20 es una pasarela telemática compacta LTE‑M con dos puertos CAN y múltiples opciones de E/S, y esta página describe cómo ese dispositivo se integra con Plaspy a nivel general sin profundizar en internals de firmware.

## Resumen del protocolo

El protocolo que utiliza el T20 regula cómo el dispositivo se identifica, cómo reporta posición y telemetría, y cómo envía eventos a un servidor remoto. Para la integración con Plaspy, los aspectos públicos relevantes son la selección del transporte, la configuración del endpoint y la disponibilidad de flujos de telemetría y eventos que Plaspy pueda consumir.

- Permite que el T20 entregue ubicación, telemetría del bus CAN y eventos de sensores periféricos a Plaspy para mapeo e informes.
- Transporta la identificación y el contexto de sesión para que Plaspy asocie los mensajes entrantes con el registro de dispositivo correcto.
- Envía actualizaciones periódicas y basadas en eventos para que Plaspy reciba tanto fijaciones regulares de posición como eventos o alarmas bajo demanda.
- Admite transporte orientado a conexión o sin conexión según la configuración del dispositivo y la red, ofreciendo flexibilidad para distintos despliegues.
- Funciona junto con filtrado o preprocesamiento en el borde del T20 para reducir el volumen de datos cuando los integradores utilizan el SDK de Aplicom.

## Cómo detecta Plaspy el protocolo

Plaspy recibe el tráfico entrante de dispositivos en un endpoint compartido y determina automáticamente el protocolo del rastreador sin que usted tenga que seleccionar manualmente uno, siempre que el dispositivo esté correctamente configurado. La configuración correcta del endpoint y del transporte en el dispositivo son los requisitos principales para la detección automática y el registro exitoso en Plaspy.

- El dominio del servidor Plaspy para reporte de dispositivos es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138.
- El puerto de escucha de Plaspy es 8888 y todos los dispositivos en Plaspy usan el mismo puerto.
- El dispositivo puede configurarse en UDP o TCP en el puerto 8888 según la configuración del rastreador y los requisitos de la red.
- Cuando un T20 apunta al endpoint de Plaspy, Plaspy detecta automáticamente el protocolo del rastreador y asocia los mensajes entrantes con el dispositivo correcto.
- En la mayoría de los casos no será necesario seleccionar un protocolo dentro de Plaspy si el T20 está configurado para reportar al endpoint de Plaspy.

## Transporte y contexto de conexión

Las opciones de conexión y el comportamiento de red forman parte de la superficie pública de integración del T20. Si el rastreador usa UDP o TCP, y si resuelve un nombre de host o envía directamente a una dirección IP, son opciones configurables en el aprovisionamiento del dispositivo y afectan aspectos de firewall y configuración del operador.

- Los dispositivos pueden apuntar al hostname de Plaspy d.plaspy.com o a la dirección IP 54.85.159.138 según preferencia del instalador o restricciones del entorno.
- El dispositivo puede configurarse en UDP o TCP en el puerto 8888 y el mismo puerto se utiliza en todos los dispositivos en Plaspy.
- TCP puede elegirse cuando se prefiera entrega fiable y semántica de sesión; UDP puede elegirse para reportes más simples y con menor sobrecarga según las capacidades del firmware.
- Asegúrese de que el firewall saliente celular y la configuración APN permitan tráfico hacia el endpoint de Plaspy en el puerto 8888.
- Considere las condiciones de red en despliegues LTE‑M, donde el tamaño de los paquetes y el comportamiento de keepalive afectan la batería del dispositivo y el uso de datos.

## Notas sobre compatibilidad del protocolo

- Las variaciones de firmware pueden cambiar qué mensajes se envían, con qué frecuencia se reportan y qué eventos periféricos se soportan.
- Diferentes revisiones de hardware y variantes regionales pueden exponer distintas opciones de E/S, comportamiento GNSS o mapeos de señales CAN.
- Las herramientas de configuración del fabricante o funciones del SDK pueden añadir filtrado en el borde o reportes resumidos que alteren la telemetría que Plaspy recibe.
- La selección de transporte entre UDP y TCP se configura en el dispositivo y debe coincidir con el despliegue previsto y las limitaciones de la red.
- Valide siempre qué canales de telemetría y eventos periféricos están habilitados en un dispositivo específico antes de asumir que Plaspy los recibirá.
- Confirme los detalles de integración consultando la documentación del fabricante para la revisión de hardware y firmware exacta del T20 en uso.

## Por qué es importante entender el protocolo

Comprender cómo el T20 se comunica con Plaspy acelera la puesta en marcha, reduce el tiempo de resolución de problemas y ayuda a mantener telemetría de flota fiable durante la vida útil del despliegue.

- Ayuda a los instaladores a elegir el transporte y el endpoint correctos para que los dispositivos se registren rápidamente en Plaspy.
- Facilita la interpretación de problemas de conectividad frente a problemas de telemetría o configuración.
- Orienta las decisiones sobre preprocesamiento en el borde y sobre cuánto dato bruto de CAN o sensores se reenvía a Plaspy.
- Permite planificar actualizaciones de firmware y cambios de configuración que puedan afectar la temporización o el contenido de los mensajes.
- Permite a los integradores documentar los eventos y campos de telemetría esperados para informes y automatizaciones posteriores en Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el Aplicom T20 junto con Plaspy brinda un camino eficaz para que flotas e integradores recopilen ubicación, diagnósticos del bus CAN y eventos de sensores periféricos en un flujo telemático centralizado. La conectividad LTE‑M y las interfaces industriales del T20 lo hacen adecuado para rastreo de vehículos y equipos móviles donde la baja potencia, el soporte de red a largo plazo y el manejo robusto de sensores son importantes.

Si desea saber más sobre cómo Plaspy funciona con dispositivos como el Aplicom T20, visite https://www.plaspy.com para explorar características de la plataforma y opciones de despliegue. Para los detalles específicos del protocolo, comportamiento de firmware y documentación del fabricante más recientes, verifique la información actual en el sitio de Aplicom https://www.aplicom.com/ ya que la implementación y las funcionalidades de firmware pueden cambiar con el tiempo.

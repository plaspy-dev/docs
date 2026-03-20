---
slug: /thingsys/ts_g17m/protocol
id: ts_g17m-protocol
sidebar_label: Protocol
title: ThingSys - TS-G17M Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo del ThingSys TS-G17M y cómo comunica ubicación y alertas con Plaspy
keywords:
  - protocolo ThingSys TS-G17M
  - protocolo GPS ThingSys TS-G17M
  - compatibilidad TS-G17M Plaspy
  - protocolo de comunicación TS-G17M
  - protocolo de rastreo TS-G17M
  - protocolo de rastreador GPS ThingSys
  - integración de dispositivos Plaspy
  - guía del protocolo de rastreador GPS
  - protocolo rastreador GPS para motocicleta
  - protocolo de posicionamiento híbrido
---

# ThingSys - Protocolo TS-G17M

Esta página ofrece contexto público sobre el protocolo para usar el rastreador GPS ThingSys TS-G17M con Plaspy. Explica, en términos generales y sin información sensible, cómo el dispositivo informa ubicación y estado a la plataforma Plaspy, además del contexto de conexión y consideraciones prácticas para una integración exitosa. El TS-G17M es un rastreador compacto para motocicletas y vehículos pequeños con posicionamiento híbrido y múltiples alarmas que entregan telemetría a sistemas de gestión de flotas como Plaspy.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo cuando el equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo, los comandos disponibles y la cadencia de los mensajes pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en el contexto público y no en detalles propietarios del dispositivo.

## Descripción general del protocolo

El protocolo implementado por el TS-G17M permite que el equipo reporte ubicación, estado, alarmas y telemetría para que Plaspy presente seguimiento en tiempo real, alertas y reproducción histórica. A alto nivel, el protocolo regula cómo el rastreador se identifica, cómo se envían los informes periódicos y los eventos, y cómo se transmiten los comandos remotos y cambios de configuración entre Plaspy y el equipo.

- Permite al rastreador enviar actualizaciones de posición y estado a Plaspy para mapeo y reproducción en línea de tiempo.
- Transmite eventos de alarma como SOS, vibración, inclinación, batería baja y pérdida de alimentación para que Plaspy genere alertas.
- Transporta telemetría como estado de ACC o ignición y confirmaciones de control de relé para acciones de inmovilizador remoto.
- Soporta tanto reportes en tiempo real como modos de seguimiento programado o por intervalos usados en monitoreo de flotas.
- Proporciona un canal para configuración remota y entrega de comandos desde Plaspy al equipo, sujeto a las capacidades del firmware.

## Cómo Plaspy detecta el protocolo

Plaspy recibe el tráfico de los rastreadores en un endpoint público común e identifica automáticamente el protocolo de reporte de cada dispositivo cuando este envía datos a dicho endpoint. En la mayoría de las implementaciones no es necesario seleccionar manualmente un protocolo dentro de Plaspy si el TS-G17M está correctamente configurado para reportar al servidor de Plaspy.

- Plaspy acepta reportes de dispositivos en el dominio público del servidor d.plaspy.com y en la IP 54.85.159.138.
- El puerto de red soportado para reportes de dispositivos es 8888 y todos los dispositivos en Plaspy usan el mismo puerto.
- El equipo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del dispositivo y la configuración celular.
- Cuando el TS-G17M apunta su endpoint GPRS a Plaspy, Plaspy detectará el protocolo del rastreador automáticamente e ingresará los datos de ubicación y alarma.
- Por lo general, los usuarios solo necesitan establecer la dirección de reporte del dispositivo y el transporte; Plaspy se encarga de la identificación del protocolo al recibir los datos.

## Transporte y contexto de conexión

La configuración de conexión y la selección de transporte son consideraciones prácticas al configurar un TS-G17M para su uso con Plaspy. El rastreador reporta sobre datos celulares y también puede recurrir a SMS para ciertas funciones; sin embargo, la vía principal en tiempo real hacia Plaspy es sobre GPRS usando TCP o UDP hacia el endpoint y puerto compartidos de Plaspy.

- El TS-G17M puede reportar vía GPRS usando TCP IP o UDP al puerto 8888 en el endpoint de Plaspy.
- Los equipos pueden apuntarse a d.plaspy.com o directamente a 54.85.159.138 para reportes.
- El SMS se utiliza comúnmente como canal secundario para configuración o reportes de emergencia, dependiendo del firmware del dispositivo.
- Plaspy usa el mismo puerto para todos los dispositivos compatibles, por lo que la configuración en el equipo se simplifica a la selección de endpoint y transporte.
- La fiabilidad de la red, la configuración del APN y el comportamiento del operador pueden influir en si TCP o UDP es preferible para su despliegue.

## Notas sobre compatibilidad del protocolo

- La compatibilidad puede depender de la versión de firmware del equipo y de la revisión específica de hardware del TS-G17M; las funciones y el tiempo de los mensajes pueden variar.
- Los comandos de configuración del fabricante y los controles remotos disponibles, como la activación del relé, están sujetos al firmware y a la configuración del dispositivo.
- La selección del modo de transporte entre UDP y TCP puede afectar las características de entrega de mensajes y debe coincidir con la configuración del equipo.
- El reporte y la entrega de comandos basados en SMS pueden estar disponibles como respaldo pero funcionan de manera diferente al reporte vía GPRS.
- Verifique que el APN del dispositivo, la dirección de reporte y el transporte estén configurados para el endpoint de Plaspy para permitir la detección automática.
- Consulte siempre la documentación del fabricante para listas de comandos específicas del firmware y cualquier variante de modelo que altere el comportamiento del protocolo.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el TS-G17M ayuda a asegurar una configuración confiable, acelerar la resolución de problemas y prever el comportamiento una vez que los dispositivos estén desplegados en Plaspy. Conocer el contexto de conexión y los puntos habituales de variación reduce la fricción en la integración y mejora el tiempo de actividad operativo para los flujos de trabajo de seguimiento y alarma.

- Ayuda a garantizar que los ajustes de APN y endpoint sean correctos para un flujo de datos consistente hacia Plaspy.
- Facilita la resolución de problemas cuando la telemetría o las alarmas no llegan como se espera.
- Orienta la decisión sobre usar TCP o UDP según las características de la red y del operador.
- Aclara cómo las actualizaciones de firmware o las variantes de hardware pueden cambiar el comportamiento y la disponibilidad de funciones.
- Permite planificar mejor el manejo de alarmas, el control remoto del relé y la calidad de auditoría de las trazas históricas.

## Por qué usar Plaspy con este protocolo

Usar el TS-G17M con Plaspy proporciona una vista centralizada de ubicaciones, alarmas y telemetría que resulta útil para flotas de motocicletas, servicios de mensajería y programas de protección de activos. El equipo alimenta posicionamiento híbrido y estado del vehículo en Plaspy para que los equipos puedan monitorear movimiento, recibir alertas de geocerca y SOS, y emitir comandos remotos cuando estén autorizados.

Para obtener más información sobre Plaspy y cómo puede gestionar equipos como el TS-G17M, visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, así que verifique la información más reciente sobre protocolo específico del dispositivo y notas de firmware en el sitio del fabricante https://www.thingsys.com/.

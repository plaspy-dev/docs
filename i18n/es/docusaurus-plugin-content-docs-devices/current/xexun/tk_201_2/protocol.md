---
slug: /xexun/tk_201_2/protocol
id: tk_201_2-protocol
sidebar_label: Protocol
title: Xexun - TK-201-2 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador Xexun TK-201-2 y su compatibilidad con Plaspy
keywords:
- protocolo Xexun TK-201-2
- protocolo GPS Xexun TK-201-2
- compatibilidad TK-201-2 con Plaspy
- comunicación rastreador Xexun
- protocolo rastreador GPS
- protocolo rastreador de mascotas
- compatibilidad de dispositivos Plaspy
- configuración de transporte del rastreador
- integración de rastreo GPS
- resumen del protocolo del dispositivo
---

# Xexun - Protocolo TK-201-2

Esta página describe el contexto público del protocolo para usar el rastreador Xexun TK-201-2 con Plaspy. Se centra en cómo se comunica el dispositivo en términos generales, qué ajustes de conexión se usan para reportar a Plaspy y las consideraciones prácticas que debe conocer al integrar una unidad TK-201-2 para seguimiento de mascotas u otros casos de uso relacionados con seguridad y monitoreo.

El TK-201-2 es un rastreador compacto pensado para mascotas que también se utiliza en seguimiento de niños, cuidado de personas mayores, seguridad laboral y otros escenarios de ubicación discreta. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión del hardware y la implementación del fabricante. El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138. El puerto es 8888 y el dispositivo puede configurarse usando UDP o TCP en el puerto 8888. Todos los dispositivos en Plaspy usan el mismo puerto y Plaspy detecta automáticamente el protocolo del rastreador.

## Descripción general del protocolo

El protocolo de comunicación del TK-201-2 define cómo el rastreador informa su identificación, posición, alertas y estado a un servicio backend como Plaspy. El protocolo garantiza que las muestras de ubicación, los eventos de movimiento y geocerca, el estado de la batería y otras señales rastreadas puedan traducirse en telemetría y alertas útiles para la plataforma.

- Permite que el dispositivo se identifique y envíe informes regulares de posición y estado a un servidor
- Transmite mensajes de alerta y estado como alarma por movimiento, exceso de velocidad y batería baja
- Admite modos de reporte configurables como reporte por intervalo de tiempo o por distancia
- Permite comunicar eventos de geocerca y solicitudes de historial de trazas a la plataforma
- Proporciona la carga útil transportable que Plaspy recibe y mapea a telemetría y alertas del dispositivo

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en un único endpoint compartido y determina automáticamente el protocolo de rastreador adecuado cuando un dispositivo informa a ese endpoint. En la mayoría de los casos no necesita seleccionar el protocolo manualmente dentro de Plaspy si su TK-201-2 está configurado correctamente para reportar al servidor de Plaspy.

- El dominio del servidor Plaspy es d.plaspy.com, que apunta al endpoint de ingestión de Plaspy
- La IP del servidor Plaspy es 54.85.159.138, que puede usarse en lugar del nombre de dominio si es necesario
- El puerto es 8888 y Plaspy usa el mismo puerto para todos los dispositivos compatibles
- Plaspy detecta automáticamente el protocolo del rastreador una vez que el dispositivo comienza a reportar
- Por lo general, los usuarios solo necesitan apuntar el rastreador al endpoint de Plaspy y elegir UDP o TCP en el puerto 8888 según lo que admita el dispositivo

## Transporte y contexto de conexión

Las opciones de transporte determinan cómo el TK-201-2 envía sus tramas de protocolo a Plaspy. Los dispositivos pueden configurarse para UDP o TCP según las características del firmware y las condiciones de la red local. La estabilidad de la conexión, las reglas del firewall y el comportamiento de la red celular pueden influir en qué transporte es más recomendable.

- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según el soporte y la configuración del equipo
- Los dispositivos pueden apuntar a d.plaspy.com o a 54.85.159.138 como destino para el reporte
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración del servidor y el onboarding de equipos
- UDP se usa comúnmente por su bajo overhead en reportes, mientras que TCP puede seleccionarse cuando se requiere entrega garantizada
- Asegúrese de que su red o operador no bloquee el puerto 8888 para conexiones salientes desde el rastreador

## Notas de compatibilidad del protocolo

- El TK-201-2 es compatible con Plaspy cuando el dispositivo está configurado para reportar al endpoint y puerto de Plaspy
- Las versiones de firmware pueden modificar el comportamiento de reporte o las funciones disponibles; verifique las especificaciones de firmware al solucionar problemas
- Revisiones de hardware y variantes regionales pueden cambiar el transporte predeterminado o el contenido de los mensajes
- Las configuraciones del fabricante en el dispositivo determinan si reporta por UDP o TCP y qué campos se incluyen
- Siempre valide que el dispositivo esté apuntando a d.plaspy.com o a 54.85.159.138 en el puerto 8888 al confirmar conectividad
- Revise la configuración del dispositivo después de una actualización de firmware para confirmar la compatibilidad continua

## Por qué es importante entender el protocolo

Tener una comprensión práctica del protocolo de comunicación del TK-201-2 ayuda a asegurar un funcionamiento confiable, agiliza la resolución de problemas y garantiza un comportamiento predecible en despliegues en producción. Saber cómo reporta el dispositivo y qué transporte utiliza reduce el tiempo de configuración y mejora la confianza operativa.

- Ayuda a verificar que el rastreador está llegando a Plaspy y siendo interpretado correctamente
- Facilita el diagnóstico de por qué faltan actualizaciones de ubicación o alertas
- Orienta en la selección del transporte adecuado para el entorno de red
- Contribuye a planificar la duración de la batería al entender los intervalos y modos de reporte
- Apoya pruebas y planificación más fluidas ante actualizaciones de firmware para mantener la compatibilidad

## Por qué usar Plaspy con este protocolo

Usar el Xexun TK-201-2 con Plaspy ofrece a empresas y propietarios una forma práctica de convertir los reportes del dispositivo en historial de ubicaciones, seguimiento en tiempo real y alertas. El modelo de endpoint compartido de Plaspy y la detección automática de protocolo simplifican la puesta en línea de dispositivos, de modo que usted pueda concentrarse en el monitoreo operativo en lugar de seleccionar parsers manualmente.

Si desea más información sobre Plaspy y cómo gestiona el onboarding y la telemetría de dispositivos, visite https://www.plaspy.com. Para obtener los detalles más recientes sobre protocolos específicos de dispositivos, notas de firmware y orientación del fabricante consulte el sitio oficial de Xexun en https://www.xexun.com/; el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo, por lo que se recomienda verificar la documentación del fabricante más reciente.

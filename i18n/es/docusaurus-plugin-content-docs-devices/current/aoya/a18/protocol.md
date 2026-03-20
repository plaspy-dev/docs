---
slug: /aoya/a18/protocol
id: a18-protocol
sidebar_label: Protocol
title: AoYa - A18 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo del rastreador AoYa A18 y cómo se comunica con Plaspy para seguimiento vehicular confiable
keywords:
  - protocolo AoYa A18
  - rastreador GPS AoYa A18
  - compatibilidad A18 Plaspy
  - protocolo de comunicación AoYa A18
  - protocolo de rastreo A18
  - configuración rastreador AoYa
  - seguimiento vehicular A18
  - integración de dispositivos Plaspy
  - guía AoYa GPS A18
  - seguimiento de flotas A18
---

# AoYa - Protocolo A18

Esta página describe el contexto público del protocolo para usar el rastreador AoYa A18 con Plaspy. Explica, a alto nivel, cómo el dispositivo se comunica con los servidores de Plaspy, qué ajustes de conexión se usan comúnmente y por qué comprender el comportamiento de reporte del equipo es útil al integrar el A18 en una flota o en un sistema de monitoreo.

Plaspy emplea ajustes de conexión compartidos para los dispositivos soportados y detecta automáticamente el protocolo cuando un equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo para el A18 puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en información pública, no sensible, y en el contexto práctico de conectividad más que en detalles internos del dispositivo.

## Descripción general del protocolo

El protocolo del AoYa A18 regula cómo el rastreador informa ubicación, estado y alertas a un servidor remoto y cómo recibe configuración remota cuando está soportado. En la práctica, permite que el dispositivo se identifique ante el servidor, envíe actualizaciones de ubicación periódicas o por eventos y transmita telemetría básica que Plaspy presenta en su plataforma.

- Proporciona identificación y contexto de sesión para que Plaspy pueda asociar los mensajes entrantes con el dispositivo y la cuenta correctos.
- Indica las fuentes de posición como GPS, AGPS y LBS para respaldar la precisión y los reportes de respaldo.
- Envía actualizaciones periódicas de ubicación e informes de eventos que Plaspy usa para seguimiento en tiempo real e historial.
- Incluye elementos simples de telemetría y estado, como batería o alertas de movimiento, útiles para la supervisión operativa.
- Permite configuración remota en algunos despliegues según soporte del firmware y del fabricante.

## Cómo detecta Plaspy el protocolo

Plaspy escucha en un único endpoint y puerto compartido para los reportes de dispositivos y detecta automáticamente el protocolo empleado por la secuencia de datos entrante. Cuando un A18 está configurado para reportar al endpoint de Plaspy, la plataforma identifica el patrón del mensaje y enruta los datos a la entrada de dispositivo correspondiente sin que normalmente sea necesario seleccionar el protocolo manualmente.

- El dominio del servidor de Plaspy es d.plaspy.com, que los dispositivos pueden usar como host de reporte.
- La IP del servidor de Plaspy es 54.85.159.138 y puede usarse donde DNS no esté disponible o no se desee usarlo.
- El puerto para reportes de dispositivos es 8888 y todos los dispositivos en Plaspy usan el mismo puerto.
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según soporte del equipo y condiciones de red.
- Debido a que Plaspy detecta automáticamente el protocolo del rastreador, los usuarios por lo general no necesitan seleccionar un protocolo dentro de Plaspy cuando el dispositivo apunta correctamente al endpoint.

## Transporte y contexto de conexión

Los detalles de conexión son importantes para una integración exitosa, aunque son independientes de los detalles internos del protocolo. El A18 puede enviar sus reportes sobre transporte IP estándar hacia Plaspy, y los administradores deben elegir el transporte que coincida con el firmware del equipo y el entorno de red.

- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888.
- Los equipos pueden apuntar al dominio d.plaspy.com o directamente a la IP 54.85.159.138.
- Usar el nombre de dominio es preferible en entornos donde se esperan cambios de IP o enrutamiento basado en DNS.
- El reporte por UDP puede ser útil por su menor sobrecarga y tolerancia de tiempos de entrega más relajados, mientras que TCP ofrece una opción orientada a conexión cuando el rastreador lo soporta.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto de reporte, lo que simplifica la configuración de cortafuegos y de red.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware del A18 pueden cambiar la frecuencia de reporte, los campos disponibles y las opciones de transporte soportadas. Valide el comportamiento del firmware antes de un despliegue a gran escala.
- Las revisiones de hardware o variantes del fabricante pueden presentar diferencias menores en cómo se envían los mensajes o qué funciones están disponibles.
- Los comandos de configuración del fabricante y los ajustes remotos dependen de la implementación y pueden no estar completamente expuestos a través de Plaspy a menos que el dispositivo soporte configuración remota.
- Seleccionar UDP frente a TCP en el equipo debe coincidir con la capacidad del firmware y las restricciones de red en los sitios de instalación.
- Confirme siempre que la dirección del servidor y el puerto estén correctamente ingresados en el dispositivo para garantizar que Plaspy reciba los reportes.
- En caso de duda, consulte la documentación oficial de AoYa para ejemplos de configuración específicos del dispositivo.

## Por qué es importante comprender el protocolo

Tener un entendimiento práctico del protocolo de comunicación ayuda a una configuración confiable, agiliza la resolución de problemas y facilita un funcionamiento predecible a largo plazo al usar el A18 con Plaspy. Conocer las expectativas de conexión y reporte reduce fricciones en la integración y mejora el tiempo de actividad del rastreo.

- Asegura que los dispositivos apunten al endpoint y puerto correctos de Plaspy para que los mensajes se entreguen.
- Ayuda a diagnosticar problemas comunes de conectividad, como selección incorrecta de transporte o fallos en la resolución DNS.
- Aclara cómo las diferencias de firmware afectan la telemetría disponible y la cadencia de reportes.
- Facilita la planificación de kompromisos entre consumo de energía y frecuencia de reporte según los modos de espera y actualización del dispositivo.
- Permite confirmar más fácilmente que la identidad del dispositivo que Plaspy recibe coincide con el hardware instalado.

## Por qué usar Plaspy con este protocolo

Usar el AoYa A18 con Plaspy ofrece a las organizaciones una vía sencilla para obtener visibilidad vehicular con un rastreador compacto que soporta GPS, AGPS y LBS. La detección automática de protocolos de Plaspy y su enfoque de puerto unificado simplifican la incorporación y reducen los pasos de configuración necesarios para comenzar a recibir datos de ubicación y estado desde el A18.

Si desea conocer más sobre cómo Plaspy gestiona la conectividad de dispositivos e integra rastreadores como el AoYa A18, visite https://www.plaspy.com. Para detalles específicos de protocolo, notas de firmware y guías de configuración más actuales, verifique la información en el sitio del fabricante http://www.aoyagps.com/ ya que el comportamiento y las capacidades de firmware pueden cambiar con el tiempo.

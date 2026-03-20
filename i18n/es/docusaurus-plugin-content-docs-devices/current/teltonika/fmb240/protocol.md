---
slug: /teltonika/fmb240/protocol
id: fmb240-protocol
sidebar_label: Protocol
title: Teltonika - FMB240 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del rastreador Teltonika FMB240 y ajustes de conexión con Plaspy
keywords:
  - Protocolo Teltonika FMB240
  - Protocolo GPS FMB240
  - Teltonika FMB240 Plaspy
  - Protocolo de comunicación FMB240
  - Protocolo de rastreo FMB240
  - Protocolo rastreador GPS Teltonika
  - Telemetría CAN bus Plaspy
  - Rastreador Bluetooth LE Plaspy
  - Protocolo rastreo vehicular Plaspy
  - Gestión de flotas FMB240
---

# Teltonika - Protocolo FMB240

Esta página describe el contexto del protocolo público para usar el rastreador Teltonika FMB240 con Plaspy. Explica a alto nivel cómo se comunica el dispositivo, qué puntos de conexión expone Plaspy para el reporte y qué elementos del protocolo del rastreador son relevantes para integrarlo correctamente en un flujo de trabajo de gestión de flotas.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. El FMB240 es un rastreador compacto con certificación IP67, lectura de bus CAN y Bluetooth LE, capaz de enviar ubicación y telemetría a Plaspy; verifique la versión de firmware y la variante antes del despliegue, ya que el estado y comportamiento del fabricante pueden cambiar.

## Resumen del protocolo

En este contexto, el protocolo es la interfaz de reporte y control que usa el FMB240 para enviar GPS, telemetría derivada del CAN y datos de sensores a un servidor remoto. Define cómo el rastreador se identifica, cómo se reporta la telemetría y cómo se representan ante el servidor funciones opcionales como el emparejamiento de sensores Bluetooth y los canales CAN.

- Permite que el FMB240 reporte ubicación, marcas de tiempo y parámetros del vehículo provenientes del CAN a Plaspy para seguimiento en tiempo real e histórico.
- Transmite telemetría de sensores Bluetooth LE e entradas internas para que Plaspy visualice y genere alertas sobre datos ambientales.
- Incluye identificación del dispositivo e información de estado básica para que la plataforma asocie los mensajes entrantes con el activo correcto.
- Soporta modos de configuración y de operación según ajustes del dispositivo y decisiones del instalador.
- Actúa como la frontera entre el comportamiento del firmware del dispositivo y las capas de normalización y presentación de datos de Plaspy.

## Cómo Plaspy detecta el protocolo

Plaspy recibe los reportes del dispositivo en un endpoint público compartido y determina automáticamente el protocolo del rastreador según las características de la conexión y la carga útil. En la mayoría de los casos, el usuario solo configura el dispositivo para reportar al endpoint de Plaspy y la plataforma se encarga del reconocimiento del protocolo sin selección manual.

- El dominio del servidor Plaspy es d.plaspy.com
- La IP del servidor Plaspy es 54.85.159.138
- El puerto es 8888
- Todos los dispositivos en Plaspy usan el mismo puerto
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy
- Si el dispositivo apunta correctamente al endpoint de Plaspy, normalmente no es necesario seleccionar el protocolo manualmente dentro de Plaspy

## Transporte y contexto de conexión

El transporte de conexión determina cómo el FMB240 establece una sesión con Plaspy, pero no cambia la intención de reporte a alto nivel. Los dispositivos pueden configurarse para usar distintos tipos de transporte y el mismo endpoint de Plaspy maneja ambos estilos de conexión para los modelos soportados.

- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888
- Los dispositivos pueden apuntar a d.plaspy.com o a 54.85.159.138 para reportar
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración en el equipo
- La elección del transporte (UDP vs TCP) depende del firmware del dispositivo, la configuración del instalador y las condiciones de red
- Use los detalles del endpoint de Plaspy arriba al configurar el reporte en el FMB240 para que los mensajes lleguen a la plataforma y se detecten automáticamente

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden afectar qué campos de telemetría están disponibles y cómo se reportan los mensajes CAN; verifique la versión de firmware al validar el comportamiento.
- Las variantes de hardware, como las opciones LV-CAN200 o ALL-CAN300, influyen en los canales CAN disponibles y en las redes vehiculares soportadas.
- El empaque y los códigos de pedido del fabricante pueden variar los E/S o accesorios incluidos, lo que afecta la instalación y la disponibilidad de datos.
- La selección de transporte (UDP vs TCP) es una decisión del instalador y puede influir en la fiabilidad en redes móviles específicas.
- La detección automática de Plaspy reduce la necesidad de ajustes de protocolo seleccionados por el usuario, pero el reporte desde el dispositivo debe apuntar exactamente al endpoint de Plaspy.
- Confirme el estado de soporte y la disponibilidad del producto con el fabricante, especialmente para dispositivos con aviso de fin de vida.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el FMB240 con Plaspy ayuda a asegurar una instalación confiable, un mapeo preciso de la telemetría y una resolución más eficiente de problemas cuando los dispositivos no funcionan como se espera. Tener presente las consideraciones de protocolo y transporte conduce a mejores resultados en despliegue y operación.

- Asegura los ajustes correctos de endpoint y transporte para que los datos lleguen a Plaspy de forma confiable
- Facilita mapear los canales CAN y los datos de sensores Bluetooth a los campos apropiados en Plaspy para reportes y alertas
- Ayuda en la resolución de problemas cuando falta telemetría al separar causas de red, transporte y firmware
- Orienta en actualizaciones de firmware y configuración que pueden cambiar la telemetría disponible o el comportamiento de reporte
- Apoya decisiones informadas sobre variantes de hardware y cableado de instalación que afectan la recolección de datos

## Por qué usar Plaspy con este protocolo

Usar el Teltonika FMB240 con Plaspy ofrece una forma compacta de combinar ubicación GPS, diagnósticos vehiculares derivados del CAN y telemetría de sensores Bluetooth en una única vista de gestión de flotas. Para organizaciones con flotas mixtas, el formato compacto del FMB240, su soporte CAN y las opciones de sensorización ambiental lo convierten en una opción práctica cuando se requiere telemetría consolidada y visibilidad operativa.

Para saber más sobre Plaspy y cómo se integra con dispositivos como el FMB240 visite https://www.plaspy.com. Para documentos de protocolo específicos del dispositivo, notas de firmware y detalles actualizados del fabricante verifique la información en https://www.teltonika-gps.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.

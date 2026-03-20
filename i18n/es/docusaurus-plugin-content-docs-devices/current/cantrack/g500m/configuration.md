---
slug: /cantrack/g500m/configuration
id: g500m-configuration
sidebar_label: Configuration
title: CanTrack - G500M Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el CanTrack G500M con Plaspy usando ajustes de servidor compartido y pasos prácticos
keywords:
  - Configuración CanTrack G500M
  - Configuración G500M
  - CanTrack G500M Plaspy
  - Configuración OBD II G500M
  - Configuración servidor Plaspy
  - Configuración rastreador GPS
  - Configuración seguimiento vehicular
  - Configuración GSM GPRS G500M
  - rastreo en tiempo real Plaspy
  - rastreador gestión de flotas
---

# CanTrack - Configuración del G500M

Esta página documenta el contexto público de configuración para usar el CanTrack G500M Mini GPS Tracker con Plaspy. Se centra en los ajustes de servidor prácticos y el flujo de trabajo de configuración que permiten al G500M enviar posición y telemetría a Plaspy para seguimiento en tiempo real, reproducción histórica y generación de alertas. Use esta guía para entender qué espera Plaspy y cómo se prepara típicamente el dispositivo para su integración.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Verifique siempre los pasos específicos del equipo en la documentación oficial de CanTrack cuando sea necesario.

## Visión general de la configuración

El objetivo de la configuración es apuntar el G500M al backend de Plaspy y verificar que pueda enviar datos de ubicación y eventos de forma fiable. Con el G500M conectado al puerto OBD II del vehículo y un enlace GSM/GPRS operativo, el dispositivo envía telemetría por TCP/IP al servidor y puerto configurados. Plaspy ingiere esos datos y los asigna automáticamente a su cuenta una vez que el dispositivo es visible en la plataforma.

- Configure el dispositivo para que reporte al endpoint y puerto del servidor Plaspy
- Asegúrese de que el rastreador tenga conexión de datos válida y alimentación desde el puerto OBD II
- Valide la visibilidad del dispositivo y las actualizaciones de posición en vivo en Plaspy
- Confirme que los eventos de encendido (ACC) y de movimiento aparezcan como se espera
- Pruebe la recuperación de posiciones almacenadas tras interrupciones de conectividad

## Ajustes del servidor Plaspy

Utilice los siguientes ajustes públicos de servidor al configurar el G500M para Plaspy. Estos son los valores que Plaspy requiere para que los dispositivos alcancen la plataforma.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on the device if a transport selection is required
- Plaspy automatically detects the tracker protocol when the device connects

Nota: Plaspy usa el mismo puerto para todos los dispositivos compatibles, por lo que el puerto 8888 es el puerto común en las integraciones.

## Requisitos habituales antes de la configuración

- Vehículo con un puerto OBD II de 16 pines accesible para una instalación plug and play
- SIM activa con un plan de datos móviles compatible con GSM GPRS para el reporte por TCP/IP
- Acceso a la herramienta oficial de configuración de CanTrack, comandos SMS o software del proveedor
- Dispositivo alimentado y funcional; se recomienda firmware reciente cuando sea posible
- Una cuenta en Plaspy y claridad sobre cómo identificará el dispositivo en la plataforma (IMEI o ID de dispositivo)
- Un entorno de prueba básico para validar posición en vivo, estado ACC y reporte de eventos

## Cómo se conecta este rastreador a Plaspy

Al configurarse, el G500M envía telemetría de ubicación y eventos por GSM/GPRS utilizando TCP/IP al endpoint y puerto compartidos de Plaspy. Plaspy recibe la conexión y detecta automáticamente el protocolo del rastreador, haciendo que el dispositivo sea visible en la plataforma sin necesidad de seleccionar manualmente el protocolo en el servidor.

- El dispositivo se configura para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888
- El transporte de datos puede usar TCP o UDP según la configuración del dispositivo y las condiciones de la red
- Plaspy detecta automáticamente el protocolo del rastreador y asigna la telemetría entrante a la cuenta
- Las posiciones en tiempo real, estado ACC y eventos de movimiento se envían a Plaspy para mapas en vivo y alertas
- La memoria interna del equipo se vuelve a subir a Plaspy tras los cortes de cobertura para asegurar la integridad histórica

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración de CanTrack para el G500M (herramienta web del fabricante, app móvil o comandos SMS según lo provea CanTrack o su proveedor).
2. Ingrese la dirección del servidor Plaspy ya sea como el dominio d.plaspy.com o la IP 54.85.159.138 según la interfaz de configuración disponible.
3. Configure el puerto del dispositivo en 8888. Recuerde que Plaspy usa el mismo puerto para todos los dispositivos.
4. Seleccione UDP o TCP si la configuración del equipo exige elegir un protocolo de transporte.
5. Aplique o guarde la configuración en la herramienta del dispositivo o enviando los comandos requeridos.
6. Reinicie el dispositivo si las instrucciones del fabricante lo requieren para aplicar los ajustes de red.
7. Valide que el dispositivo reporte a Plaspy confirmando que la unidad aparece en su cuenta Plaspy y que posiciones en vivo y eventos son visibles.

## Comandos de configuración de ejemplo

El G500M puede configurarse mediante las herramientas del fabricante, conjuntos de comandos SMS o software proporcionado por el proveedor. Los comandos exactos y la sintaxis varían según el firmware y la utilidad del proveedor. Dado que el contenido modelConfiguration no se proporciona aquí, no es posible listar cadenas de comandos precisas de forma genérica.

Si dispone de la documentación de comandos SMS del fabricante o de una herramienta del proveedor, úsela para establecer el servidor d.plaspy.com o 54.85.159.138 y el puerto 8888, y seleccione UDP o TCP según sea necesario. Conserve los marcadores de posición del fabricante como {{apn}}, {{apnu}} o {{apnp}} si aparecen, y reemplácelos por las credenciales APN de su SIM cuando corresponda.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la sintaxis de comandos y las opciones de configuración disponibles; consulte la documentación de CanTrack para instrucciones específicas por firmware.
- TCP puede ofrecer una conexión persistente mientras que UDP suele tolerar mejor la conectividad intermitente; elija según las recomendaciones del proveedor y el comportamiento de la red.
- El G500M almacena posiciones localmente durante áreas sin cobertura y volverá a subirlas a Plaspy cuando la conectividad se restablezca.
- Use el IMEI del dispositivo o el ID proporcionado para identificar la unidad en Plaspy después de la primera conexión exitosa.
- Si configura mediante comandos SMS, confirme que la SIM acepta SMS y que la configuración vía SMS está soportada por su firmware.

## Por qué usar Plaspy con esta configuración

Usar el CanTrack G500M con Plaspy ofrece una vía sencilla hacia la visibilidad centralizada de vehículos con esfuerzo mínimo de instalación. El factor de forma plug and play OBD II del G500M, combinado con el endpoint compartido de Plaspy y la detección automática de protocolo, ayuda a gerentes de flota y propietarios de vehículos a obtener seguimiento en vivo fiable, registro de viajes y alertas de eventos sin configuraciones complejas del lado del servidor.

Learn more about Plaspy and how it supports device integrations at https://www.plaspy.com. For the latest device specific setup instructions, firmware notes, and official technical documentation for the G500M, verify details at the manufacturer site https://www.cantrackgps.com/ as hardware revisions and configuration methods can change over time.

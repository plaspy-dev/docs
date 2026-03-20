---
slug: /cantrack/nb20/configuration
id: nb20-configuration
sidebar_label: Configuration
title: CanTrack - NB20 Configuration
sidebar_class_name: menu_item_tracker
description: Guía para configurar CanTrack NB20 en Plaspy con ajustes de servidor compartido y pasos prácticos
keywords:
  - Configuración CanTrack NB20
  - Instalación CanTrack NB20
  - Configuración NB20 Plaspy
  - Configuración rastreador NB20 GPS
  - Configuración rastreador Plaspy
  - Configuración rastreador de mascotas
  - Configuración servidor CanTrack NB20
  - Integración NB20 plataforma
  - Configuración GPS Plaspy
  - Guía CanTrack NB20
---

# CanTrack - Configuración NB20

Esta página resume el contexto público de configuración para usar el rastreador CanTrack NB20 con la plataforma Plaspy. Explica los ajustes compartidos del servidor Plaspy que deberá usar al apuntar un NB20 a Plaspy y describe los pasos prácticos que suelen seguir instaladores e integradores para habilitar ubicación en tiempo real, alertas de geocerca y reproducción de historial para casos de uso de rastreo de mascotas.

Plaspy utiliza un endpoint y puerto de servidor comunes para los dispositivos soportados y detecta automáticamente el protocolo correcto del rastreador. No obstante, los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, revisión de hardware, tipo de instalación y herramientas del proveedor. Use esta guía para alinear el NB20 con los ajustes y flujos de Plaspy, y confirme los comandos y menús específicos del dispositivo con la documentación de CanTrack o su herramienta de configuración.

## Resumen de la configuración

El objetivo al configurar el NB20 para Plaspy es asegurar que el equipo pueda enviar de forma fiable sus datos de posicionamiento híbrido y estado para que el dispositivo sea visible en la plataforma en mapas en vivo, alertas e historial. La configuración se centra en establecer el endpoint del servidor, el transporte y cualquier parámetro relacionado con el operador para que el NB20 pueda subir su telemetría por la conexión celular.

- Apunte el NB20 al dominio o IP del servidor Plaspy para que sepa dónde enviar datos
- Use el puerto 8888, que es el puerto común que Plaspy emplea para todos los dispositivos soportados
- Seleccione UDP o TCP si el NB20 solicita elegir el transporte
- Verifique que el dispositivo tenga una Nano SIM o eSIM activa y cobertura celular suficiente
- Confirme que el dispositivo aparezca en su cuenta de Plaspy tras la configuración y pruebe el reporte

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Tenga en cuenta que todos los dispositivos en Plaspy usan el mismo puerto y Plaspy detectará automáticamente el protocolo que presente el rastreador una vez que el dispositivo comience a enviar datos al endpoint indicado.

## Requisitos previos típicos

- NB20 encendido y cargado con una Nano SIM o eSIM funcional provisionada para datos
- Acceso al método oficial de configuración de CanTrack, como su app, portal web o comandos SMS
- Cobertura celular para la red elegida y un plan de datos activo para el dispositivo
- Una cuenta de Plaspy o acceso a la plataforma Plaspy para validar que el dispositivo aparece y reporta
- Preparación básica del sitio, como conocer identificadores del dispositivo (por ejemplo IMEI) para emparejarlo en Plaspy
- Un plan de pruebas para validar ubicación en vivo, alertas de geocerca y notificaciones de batería baja

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el NB20 envía sus uplinks de ubicación y estado al endpoint y puerto compartidos de Plaspy, de modo que la plataforma puede mostrar telemetría en vivo, alertas e historial. Plaspy recibe el flujo de datos e identifica el protocolo del rastreador de forma automática, permitiendo que el NB20 aparezca en los mapas y reportes sin necesidad de cambios específicos por dispositivo en el servidor.

- El NB20 se configura para reportar a d.plaspy.com o directamente a 54.85.159.138
- Los uplinks de datos se envían al puerto 8888 que Plaspy usa para todos los dispositivos
- El transporte puede ser UDP o TCP según la elección de configuración del NB20
- Plaspy detecta automáticamente el protocolo del rastreador y parsea los mensajes de ubicación y estado
- Una vez recibidos los datos, Plaspy entrega ubicación en vivo, eventos de geocerca y reproducción de historial

## Flujo de configuración típico

1. Acceda al método o software oficial de CanTrack para el NB20, como la app del fabricante, la herramienta web o el conjunto de comandos SMS documentado.
2. Ingrese el servidor Plaspy como d.plaspy.com o use la IP del servidor 54.85.159.138 en el campo de servidor u host.
3. Establezca el puerto en 8888, que es el puerto compartido de Plaspy para todos los dispositivos.
4. Elija UDP o TCP si el dispositivo requiere seleccionar el protocolo de transporte.
5. Aplique o guarde la configuración usando la herramienta o el método de comandos de CanTrack.
6. Reinicie el NB20 si la herramienta del fabricante o el firmware lo requieren para que los ajustes de red entren en efecto.
7. Valide que el dispositivo reporte a Plaspy verificando en su cuenta la ubicación en vivo, notificaciones de geocerca o un uplink reciente.

## Ejemplos de comandos de configuración

La configuración del modelo NB20 puede realizarse usando las herramientas de CanTrack, su app móvil, o comandos SMS y en la nube según el firmware y las herramientas del proveedor. Los comandos exactos y los nombres de menú pueden variar según el firmware y la variante regional del equipo. Consulte la documentación de CanTrack para la sintaxis de comandos específica del fabricante y ejemplos.

Si utiliza un método de configuración por línea de comandos o SMS proporcionado por CanTrack, siga el orden recomendado por el fabricante, suministrando el dominio del servidor Plaspy d.plaspy.com o la IP 54.85.159.138 y el puerto 8888. Si el conjunto de comandos del dispositivo requiere marcadores de posición como [apn], [apnu] o [apnp], manténgalos como marcadores y reemplácelos por los valores APN de su operador móvil según corresponda.

## Notas de configuración

- Las variaciones de firmware pueden cambiar menús, formatos de comandos y el flujo exacto. Verifique los comandos según la versión de firmware del dispositivo.
- Elija UDP o TCP según las opciones del firmware del NB20 y cualquier recomendación de CanTrack; ambos transportes son compatibles con Plaspy.
- Para dispositivos con eSIM, siga las instrucciones del proveedor y del operador para la activación del perfil antes de intentar la configuración del servidor.
- Recuerde que todos los dispositivos en Plaspy usan el mismo puerto y que Plaspy detecta automáticamente el protocolo del dispositivo una vez que los uplinks llegan al servidor.
- Mantenga un registro del IMEI del dispositivo y de cualquier cambio de configuración para agilizar la resolución de problemas con el fabricante o el soporte de Plaspy.

## Por qué usar Plaspy con esta configuración

Apuntar el CanTrack NB20 a Plaspy proporciona una vía directa para obtener visibilidad en tiempo real, alertas de geocerca y trazas históricas para el rastreo de mascotas. Plaspy acepta uplinks en un endpoint y puerto compartidos y realiza la detección automática del protocolo, por lo que una vez que el NB20 se configura con el servidor y puerto de Plaspy, el dispositivo normalmente aparece y comienza a reportar sin cambios adicionales por dispositivo en el servidor.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the most current device specific commands, firmware notes, and technical documents verify details at the manufacturer site https://www.cantrackgps.com/ because manufacturer setup methods and firmware behavior can change over time.

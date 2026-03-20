---
slug: /teltonika/gh5200/configuration
id: gh5200-configuration
sidebar_label: Configuration
title: Teltonika - GH5200 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Teltonika GH5200 con los ajustes de servidor de Plaspy y pasos detallados
keywords:
  - Configuración Teltonika GH5200
  - Instalación Teltonika GH5200
  - GH5200 configuración Plaspy
  - GH5200 configuración servidor
  - GH5200 instalación rastreador GPS
  - Configuración de rastreador Plaspy
  - Configuración rastreador GPS personal
  - Instalación rastreador para trabajador solitario
  - Configuración rastreador GPS vestible
  - Teltonika rastreador Plaspy
---

# Teltonika - Configuración del GH5200

Esta página documenta el contexto público de configuración para usar el Teltonika GH5200 con Plaspy. Explica los ajustes compartidos del servidor Plaspy y los pasos prácticos que el fabricante o instalador debe realizar para apuntar un GH5200 a Plaspy, de modo que posiciones, eventos y telemetría de seguridad sean visibles en la plataforma. El GH5200 es un rastreador personal compacto 2G diseñado para la seguridad laboral y personal, y es compatible con Plaspy de forma inmediata.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Cuando el GH5200 ofrece un comando público para establecer parámetros, esta página conserva ese comando y explica sus marcadores de posición; para cualquier significado de parámetros no incluido aquí, consulte la documentación oficial de Teltonika.

## Resumen de la configuración

El objetivo principal es preparar el GH5200 para que se comunique de forma fiable con Plaspy y así las ubicaciones en tiempo real y los eventos de seguridad aparezcan en su panel de control. La configuración normalmente ajusta el APN del equipo y el endpoint del servidor, selecciona el transporte si es necesario y verifica el reporte y el reenvío de eventos.

- Configure el APN y las credenciales de red para que el rastreador tenga acceso de datos celulares.  
- Apunte el equipo al dominio o IP del servidor Plaspy y al puerto compartido que usan todos los dispositivos.  
- Elija el modo de transporte si el equipo requiere seleccionar UDP o TCP.  
- Guarde y aplique la configuración, luego confirme que el dispositivo está reportando a Plaspy.  
- Valide que eventos clave de seguridad como pulsadores y detección de incidentes aparezcan en la plataforma.

## Ajustes del servidor de Plaspy

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888 (all devices in Plaspy use the same port)  
- Transport support for UDP or TCP on port 8888 depending on device requirements  
- Plaspy automatically detects the tracker protocol for supported devices

Estos son los valores del endpoint público de Plaspy que debe usar al configurar el GH5200 para que el dispositivo pueda enviar datos de posición y eventos a Plaspy.

## Requisitos típicos antes de la configuración

- Un GH5200 cargado con alimentación aplicada y la preparación básica del dispositivo confirmada.  
- Una SIM celular activa con un plan de datos válido y las credenciales APN correctas para su operador.  
- Acceso al método de configuración del fabricante para el GH5200, como comandos por SMS o las herramientas y documentación oficiales de Teltonika.  
- Registro de los identificadores requeridos por Plaspy para el onboarding, de modo que el dispositivo pueda asociarse a la cuenta correcta una vez que empiece a reportar.  
- Un plan de pruebas para validar el reporte, incluyendo un entorno tranquilo para comprobar la conectividad inicial y un método para observar los mensajes entrantes en Plaspy.

## Cómo se conecta este rastreador a Plaspy

El GH5200 se configura para enviar su ubicación y la telemetría de eventos al endpoint y puerto compartidos de Plaspy para que Plaspy ingiera y muestre posiciones, marcas temporales y eventos de seguridad. Una vez que el dispositivo está apuntando a Plaspy, las actualizaciones de posición y los mensajes de incidente fluyen hacia la plataforma donde se muestran en mapas y en los flujos de alerta.

- El rastreador envía mensajes periódicos de ubicación a d.plaspy.com o a 54.85.159.138 en el puerto 8888.  
- El transporte se configura en UDP o TCP según la configuración del equipo y las condiciones de la red.  
- Plaspy detecta automáticamente el protocolo del rastreador y analiza los mensajes entrantes para su visualización.  
- Mensajes de eventos como pulsadores, man down y falta de movimiento se reenvían a Plaspy y se registran como incidentes.  
- Una configuración correcta habilita visibilidad en tiempo real y reportes históricos dentro del panel de Plaspy.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración de Teltonika o al software para el GH5200 según lo indicado en la documentación del dispositivo.  
2. Configure el APN del equipo y las credenciales del operador necesarias para habilitar el acceso de datos celulares.  
3. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP 54.85.159.138 en el campo de servidor del dispositivo.  
4. Establezca el puerto 8888, que es el puerto compartido de Plaspy utilizado por todos los dispositivos compatibles.  
5. Seleccione UDP o TCP si el dispositivo requiere elegir un modo de transporte.  
6. Aplique o guarde la configuración en la herramienta del dispositivo o enviando el comando correspondiente.  
7. Reinicie el dispositivo si la documentación del fabricante lo recomienda o si es necesario para aplicar los ajustes.  
8. Verifique que el dispositivo reporte a Plaspy y que los mensajes de posición y eventos aparezcan en su cuenta Plaspy.

## Ejemplo de comandos de configuración

El GH5200 admite un comando público de parámetros que establece valores de APN y parámetros de servidor. El ejemplo que sigue conserva los marcadores de posición para sus credenciales de red. Envíe este comando usando el canal de configuración del GH5200 que soporte su dispositivo, como SMS o la herramienta de Teltonika, según las instrucciones del fabricante.

- Example parameter command with APN placeholders

```text
setparam 2001:{{apn}};2002:{{apnu}};2003:{{apnp}};2004:d.plaspy.com;2005:8888;2006:1
```

- Notas sobre marcadores de posición y campos
  - {{apn}} es el nombre del APN del operador celular.  
  - {{apnu}} es el nombre de usuario del APN si su operador lo requiere.  
  - {{apnp}} es la contraseña del APN si su operador la requiere.  
  - El comando establece el parámetro 2004 en el dominio del servidor Plaspy d.plaspy.com y 2005 en el puerto 8888.  
  - El parámetro 2006 es una opción numérica presente en el comando de ejemplo; consulte la documentación de Teltonika para saber qué valores corresponden a UDP, TCP u otras opciones de transporte en su firmware.

Si su entorno o firmware usa un método de configuración distinto, siga la documentación oficial de Teltonika para el transporte exacto del comando o los pasos en la interfaz gráfica.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar los números de parámetro, los formatos de comando admitidos o las codificaciones de las opciones de transporte. Confirme las correspondencias de parámetros con la documentación actual de Teltonika.  
- El comando de ejemplo del GH5200 se usa comúnmente vía SMS o con la herramienta del fabricante según el método de configuración del dispositivo; utilice el canal soportado por su instalación.  
- Elija UDP o TCP según los requisitos de su red y de la herramienta del dispositivo. Plaspy acepta ambos en el puerto 8888 y detectará el protocolo automáticamente.  
- Verifique las credenciales del APN con su operador móvil antes de aplicar los ajustes para evitar tiempos prolongados de resolución de problemas.  
- Debido a que Plaspy usa el mismo puerto para todos los dispositivos compatibles, utilice el puerto 8888 al configurar el GH5200 para evitar problemas de enrutamiento.

## Por qué usar Plaspy con esta configuración

Usar el GH5200 con Plaspy proporciona a las organizaciones una vía sencilla para integrar dispositivos personales de seguridad vestibles en un flujo de monitoreo centralizado. El GH5200 suministra actualizaciones continuas de posición y eventos de seguridad que Plaspy presenta en mapas, en registros de incidentes y en canales de alerta para que los equipos puedan responder más rápido y mantener supervisión sobre trabajadores solitarios y personal vulnerable.

Para obtener más información sobre Plaspy visite https://www.plaspy.com y para los detalles más recientes específicos del dispositivo, notas de firmware y definiciones de parámetros, verifique la información en el sitio del fabricante https://www.teltonika-gps.com/. Los métodos de configuración del fabricante y el comportamiento del firmware pueden cambiar con el tiempo, por lo que siempre debe contrastar los parámetros con la documentación actual de Teltonika al aplicar ajustes de dispositivo.

---
slug: /arknav/at_5000/configuration
id: at_5000-configuration
sidebar_label: Configuration
title: ArkNav - AT-5000 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública del ArkNav AT-5000 para conectar con Plaspy — ajustes de servidor, flujo de instalación y notas prácticas
keywords:
  - Configuración ArkNav AT-5000
  - Configuración Plaspy AT-5000
  - Configuración del rastreador ArkNav
  - Configuración GPS AT-5000
  - Configuración de dispositivo Plaspy
  - Configuración de seguimiento de vehículos ArkNav
  - Configuración de servidor AT-5000
  - Compatibilidad GPS tracker Plaspy
  - Seguimiento de activos ArkNav AT-5000
  - Guía de instalación AT-5000
---

# ArkNav - AT-5000 Configuración

Esta página describe el contexto público de configuración para usar el rastreador ArkNav AT-5000 con Plaspy. Resume los ajustes de servidor, los requisitos típicos y un flujo de trabajo práctico para preparar un AT-5000 de modo que reporte a la plataforma Plaspy. La orientación aquí está pensada para integradores técnicos e instaladores que aplican los valores compartidos de Plaspy, apoyándose en la documentación de ArkNav para controles específicos del equipo.

Plaspy utiliza ajustes de servidor compartidos entre todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando este se conecta. Los pasos de configuración en el lado del fabricante para el AT-5000 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y la herramienta del proveedor que utilice; esta página se centra en los valores públicos de Plaspy y en un flujo de trabajo seguro y repetible para apuntar el rastreador a Plaspy.

## Resumen de configuración

Configurar el AT-5000 para Plaspy implica principalmente dirigir el dispositivo al endpoint del servidor de Plaspy y confirmar que informe posición y estado correctamente. El objetivo es garantizar que el rastreador pueda alcanzar Plaspy mediante la red celular, sea reconocido por la plataforma y comience a enviar eventos y actualizaciones de ubicación.

- Configure el rastreador para que reporte al endpoint de servidor de Plaspy y así los paquetes de ubicación lleguen a la plataforma.
- Verifique la conectividad de red y los ajustes APN del operador que el dispositivo pueda requerir.
- Elija la opción de transporte adecuada en el dispositivo si el firmware lo exige (UDP o TCP).
- Guarde y aplique los ajustes, reinicie el rastreador si el equipo lo requiere, y valide el primer latido (heartbeat).
- Confirme que el rastreador aparece en Plaspy y que está reportando según lo esperado.

## Ajustes de servidor de Plaspy

Al configurar el AT-5000 para Plaspy, utilice los siguientes valores públicos de servidor exactamente como se indican:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when a device connects

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos soportados y confía en la detección automática de protocolo para identificar el protocolo del rastreador.

## Requisitos típicos antes de la instalación

- Un AT-5000 alimentado con carga de batería suficiente o conectado a su fuente de poder.
- Una SIM celular activa y un plan de datos compatible con el rastreador, si el dispositivo usa GSM para el reporte de datos.
- Acceso al método de configuración de ArkNav o a la herramienta del proveedor necesaria para editar servidor, puerto y opciones de transporte.
- Conocimiento de los ajustes APN del operador que el rastreador necesite para alcanzar servicios de Internet.
- Acceso físico al dispositivo para la configuración inicial y para los reinicios que puedan ser necesarios.
- Una cuenta en Plaspy o acceso de administrador para verificar que el rastreador aparece y reporta correctamente en la plataforma.

## Cómo se conecta este rastreador a Plaspy

El AT-5000 envía su posición y estado al endpoint de servidor configurado a través de la red celular. Una vez que el dispositivo apunta al endpoint de Plaspy y se le permite conectar, Plaspy detectará el protocolo entrante y comenzará a ingerir la telemetría para visualización y monitoreo.

- El dispositivo se configura para reportar al endpoint y puerto compartido de Plaspy.
- Los paquetes de ubicación y eventos se envían por datos celulares a d.plaspy.com o 54.85.159.138 usando el puerto 8888.
- Plaspy usa detección automática de protocolo para reconocer el protocolo del rastreador sin selección manual del lado del servidor.
- El reporte del rastreador permite la visibilidad de posición y estado operativo dentro de Plaspy.
- Los informes periódicos o por eventos del dispositivo son procesados por Plaspy para alertas, historial y monitoreo en tiempo real.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración de ArkNav o al software para el AT-5000 provisto por el fabricante o el distribuidor.
2. En los ajustes de servidor, ingrese el dominio de servidor de Plaspy d.plaspy.com o la IP del servidor 54.85.159.138.
3. Establezca el puerto del servidor en 8888.
4. Si el dispositivo requiere selección de transporte, elija UDP o TCP según su preferencia de instalación y el soporte del equipo.
5. Aplique o guarde los cambios de configuración en la herramienta del dispositivo.
6. Reinicie el AT-5000 si el equipo o el firmware lo requieren para activar los nuevos ajustes.
7. Valide que el dispositivo reporte a Plaspy revisando la conexión o el latido en su cuenta de Plaspy y confirmando la llegada de datos.

## Ejemplos de comandos de configuración

El método de configuración del AT-5000 varía según el firmware de ArkNav y la herramienta del proveedor que utilice. Dado que ArkNav ofrece múltiples interfaces de configuración y esta guía pública no incluye comandos exclusivos del dispositivo, siga la herramienta de ArkNav o la referencia de comandos SMS suministrada con el equipo para establecer servidor, puerto y transporte.

Cuando edite los campos de servidor en la herramienta de ArkNav, utilice cualquiera de los siguientes:
- Server domain: d.plaspy.com
- Or server IP: 54.85.159.138
- Port: 8888
- Transport: UDP or TCP

Si la herramienta del proveedor admite cadenas de comando directas o configuración por SMS, consulte la documentación de ArkNav para la sintaxis exacta y conserve los marcadores de posición como los valores APN que su operador requiera.

## Notas de configuración

- Diferencias de firmware y herramientas: Las interfaces de configuración de ArkNav y la sintaxis de comandos pueden cambiar entre versiones de firmware y herramientas de proveedor; siempre consulte la documentación de ArkNav para el procedimiento exacto.
- TCP versus UDP: Elija UDP o TCP según lo requiera su red y la preferencia del instalador; Plaspy acepta ambos transportes en el puerto 8888 y detecta automáticamente el protocolo en el servidor.
- APN y ajustes del operador: Asegúrese de que el APN y las credenciales del operador del rastreador sean correctos para que el dispositivo pueda establecer la conexión de datos antes de intentar alcanzar d.plaspy.com.
- Comportamiento de puerto compartido: Plaspy usa el mismo puerto para todos los dispositivos, lo que simplifica la configuración y evita asignaciones de puertos específicas por equipo.
- Validación: Después de aplicar los ajustes y reiniciar el dispositivo si es necesario, confirme que el rastreador es visible y está reportando en Plaspy antes de dar por finalizada la instalación.

## Por qué usar Plaspy con esta configuración

Usar el ArkNav AT-5000 con Plaspy ofrece una forma sencilla de integrar hardware de rastreo de larga duración y resistente en una plataforma moderna de visibilidad de flotas y activos. La larga autonomía de la batería y el diseño robusto del AT-5000 lo hacen apropiado para despliegues prolongados, mientras que apuntar el dispositivo a Plaspy le da acceso centralizado a flujos de ubicación, historial y monitoreo operativo.

Learn more about Plaspy and how it works with devices like the AT-5000 at https://www.plaspy.com. For the most current device specific configuration methods, firmware details, and command syntax refer to the manufacturer site https://www.arknavgps.com.tw/ to verify the latest instructions and compatibility notes.

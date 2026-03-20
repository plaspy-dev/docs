---
slug: /ulbotech/t373/configuration
id: t373-configuration
sidebar_label: Configuration
title: Ulbotech - T373 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Ulbotech T373 para conectar con Plaspy usando ajustes de servidor compartido y detección automática de protocolos
keywords:
  - Configuración Ulbotech T373
  - Instalación Ulbotech T373
  - Configuración de servidor T373
  - Configuración T373 Plaspy
  - Guía de configuración rastreador GPS
  - Configuración de rastreador Plaspy
  - Configuración de seguimiento vehicular T373
  - Integración T373 en plataforma
  - Ajustes de servidor dispositivo GPS
  - Seguimiento de flota Ulbotech T373
---

# Ulbotech - Configuración del T373

Esta página describe el contexto público de configuración para usar el Ulbotech T373 con Plaspy. Está enfocada en los ajustes prácticos del lado de la plataforma que usted debe aplicar o verificar para que el equipo pueda reportar a Plaspy. No sustituye el manual del fabricante; resume los parámetros de servidor y el flujo de trabajo habitual con Plaspy.

Plaspy utiliza ajustes de servidor compartidos para los rastreadores soportados y detecta automáticamente el protocolo en su lado. Los pasos exactos en el equipo pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, así que use esta página como referencia práctica y confirme detalles específicos con la documentación de Ulbotech.

## Resumen de la configuración

Este proceso prepara el T373 para enviar datos de ubicación y estado al endpoint compartido de Plaspy, de modo que el dispositivo aparezca y permanezca visible en la plataforma. El procedimiento es intencionalmente sencillo porque Plaspy centraliza el manejo de protocolos y utiliza el mismo puerto para todos los dispositivos.

- Configure el equipo para que apunte al dominio o IP del servidor de Plaspy y que la telemetría vaya a la plataforma
- Seleccione el protocolo de transporte (UDP o TCP) si el equipo lo requiere
- Establezca el puerto 8888, el puerto compartido para todos los dispositivos de Plaspy
- Guarde y aplique los ajustes y reinicie el equipo si el fabricante lo pide
- Verifique que el rastreador esté reportando y sea visible en Plaspy después de la configuración

## Ajustes del servidor Plaspy

Use estos valores públicos de Plaspy al configurar el T373 en el equipo o en las herramientas del proveedor:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol when the device reports to the server

Estos valores son los puntos de conexión centrales que el rastreador debe contactar para que Plaspy reciba telemetría.

## Requisitos típicos antes de comenzar

- Acceso a la interfaz de configuración del T373 o a la herramienta oficial de Ulbotech provista por el vendedor
- Equipo alimentado y accesible por el método de configuración (USB, herramienta web, SMS u otro método del fabricante)
- Conectividad de red adecuada para el equipo (celular, WiFi o transporte soportado por el fabricante)
- Conocimiento de cualquier procedimiento de inicio de sesión o emparejamiento requerido por Ulbotech
- Una cuenta en Plaspy o información de aprovisionamiento si su despliegue requiere registrar dispositivos en la plataforma

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el rastreador envía su telemetría al endpoint y puerto compartidos de Plaspy, y Plaspy se encarga de interpretar el protocolo. Esto permite a la plataforma recopilar ubicación, estado y mensajes de evento sin direcciones de servidor personalizadas por dispositivo.

- El rastreador se configura para reportar a d.plaspy.com o a 54.85.159.138
- Las comunicaciones se envían al puerto 8888, que Plaspy utiliza para todos los dispositivos compatibles
- En equipos que requieren selección de transporte, se puede elegir UDP o TCP
- Plaspy realiza la detección automática del protocolo, por lo que la selección del protocolo en el equipo suele ser sencilla
- Tras la conexión exitosa, el dispositivo queda visible y reportable en Plaspy para monitoreo y análisis

## Flujo de configuración habitual

1. Acceda al método o software oficial de configuración de Ulbotech para el T373 (herramienta web del fabricante, utilidad de escritorio, comandos SMS o interfaz de instalador).
2. En los ajustes de red/servidor del dispositivo ingrese la dirección del servidor como d.plaspy.com o 54.85.159.138.
3. Ajuste el puerto del servidor a 8888, el puerto compartido de Plaspy para todos los dispositivos.
4. Seleccione UDP o TCP si el equipo requiere una opción de transporte; de lo contrario deje el valor predeterminado del equipo.
5. Aplique o guarde la configuración en la herramienta del dispositivo y confirme que no haya mensajes de error.
6. Reinicie el equipo si la herramienta del fabricante o el firmware lo requieren para activar los cambios de red.
7. Valide que el equipo reporte a Plaspy comprobando la lista de dispositivos o la telemetría en vivo en su vista de la plataforma Plaspy.

## Ejemplos de comandos de configuración

Los comandos y el formato exacto dependen del firmware del Ulbotech T373 y de la herramienta del proveedor. Los manuales del fabricante suelen incluir comandos por SMS, comandos serie o una utilidad de configuración. Dado que los comandos pueden variar por modelo, consulte la guía de configuración de Ulbotech para la sintaxis exacta y cualquier marcador de posición requerido.

Si dispone de los comandos de Ulbotech para su versión de firmware T373, aplíquelos en la secuencia que recomiende el fabricante, sustituyendo los marcadores de posición con sus valores de red y manteniendo los ajustes de servidor de Plaspy:

- Server domain or IP: d.plaspy.com or 54.85.159.138
- Port: 8888
- Transport: UDP or TCP

Siempre respete el orden de comandos del fabricante al aplicar ajustes y siga los pasos de verificación que indique Ulbotech.

## Notas de configuración

- Diferentes versiones de firmware o revisiones de hardware pueden requerir pasos o sintaxis de comando distintos; consulte la documentación del T373 correspondiente a su unidad.
- Si el equipo soporta tanto UDP como TCP, pruebe el transporte que mejor se adapte a su entorno de red; Plaspy detectará el protocolo automáticamente cuando el dispositivo se conecte.
- El servidor de Plaspy utiliza el mismo puerto 8888 para todos los dispositivos soportados; esto simplifica los despliegues con múltiples equipos.
- Las herramientas de instalador o la configuración vía SMS pueden incluir marcadores de posición; reemplácelos por sus valores reales siguiendo las instrucciones del fabricante.
- Confirme la conectividad de red (señal, ajustes APN o acceso WiFi) mediante la herramienta del fabricante antes de asumir un problema del servidor.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el Ulbotech T373 centraliza la telemetría y el reporte de eventos en un único endpoint de la plataforma, lo que facilita la supervisión de flotas y activos. Como Plaspy detecta automáticamente los protocolos y emplea un puerto compartido, integrar múltiples dispositivos o flotas mixtas resulta más sencillo que gestionar numerosas direcciones de servidor personalizadas.

Para saber más sobre Plaspy y cómo gestiona la conectividad y la detección de protocolos visite https://www.plaspy.com. Para obtener detalles específicos del dispositivo, comportamiento de firmware y herramientas del fabricante, consulte la documentación de Ulbotech en http://www.ulbotech.com/ para verificar los pasos de configuración más recientes para sus unidades T373.

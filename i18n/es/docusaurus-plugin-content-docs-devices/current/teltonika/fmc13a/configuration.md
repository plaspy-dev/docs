---
slug: /teltonika/fmc13a/configuration
id: fmc13a-configuration
sidebar_label: Configuration
title: Teltonika - FMC13A Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el Teltonika FMC13A a Plaspy con ajustes de servidor y comandos de ejemplo
keywords:
  - Configuración Teltonika FMC13A
  - Configuración FMC13A
  - Configuración servidor FMC13A
  - Configuración FMC13A Plaspy
  - Configuración rastreador GPS Teltonika
  - Configuración software seguimiento FMC13A
  - Configuración rastreador Plaspy
  - Seguimiento de flotas FMC13A
  - Configuración adaptador CAN FMC13A
  - Configuración plataforma GPS FMC13A
---

# Teltonika - Configuración FMC13A

Esta página brinda el contexto público de configuración para usar el rastreador Teltonika FMC13A con Plaspy. Se enfoca en los ajustes de servidor prácticos, el flujo de trabajo y ejemplos de comandos que se usan comúnmente para apuntar el dispositivo a Plaspy, de modo que el rastreador envíe datos de ubicación y diagnósticos a la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El FMC13A es un dispositivo 4G LTE Cat 1 diseñado para Norteamérica y admite diversas funciones de monitoreo vehicular. Cuando existen comandos públicos se incluyen a continuación para facilitar una configuración práctica.

## Resumen de configuración

El objetivo de este proceso es preparar el FMC13A para comunicarse de forma fiable con Plaspy, verificar la conectividad y hacer que el dispositivo sea visible en la plataforma. El ejemplo público de comando que se muestra abajo demuestra cómo establecer valores APN y apuntar el dispositivo al endpoint y puerto de Plaspy.

- Configurar parámetros de acceso de red como APN y credenciales
- Apuntar el dispositivo a la dirección del servidor Plaspy para que la telemetría llegue a la plataforma
- Elegir el transporte y guardar los ajustes para mantener la conectividad
- Validar la conectividad para que el FMC13A aparezca y reporte datos en Plaspy
- Usar herramientas de configuración del fabricante o comandos SMS cuando estén disponibles

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte soportado UDP o TCP según requiera el dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que el FMC13A debe configurarse para usar el puerto 8888

## Requisitos típicos antes de la configuración

- Dispositivo alimentado y accesible, ya sea en banco de pruebas o instalado en el vehículo
- SIM de datos 4G LTE válida provisionada para Norteamérica con el APN correspondiente
- Acceso al método oficial de configuración de Teltonika, como comandos SMS o software del fabricante
- Conocimiento de la versión de firmware del equipo y de las herramientas del proveedor necesarias para aplicar parámetros
- Posibilidad de reiniciar o cortar la alimentación del rastreador después de aplicar la configuración
- Una cuenta en Plaspy y la forma de confirmar que el dispositivo aparece en la plataforma tras la configuración

## Cómo se conecta este rastreador a Plaspy

El FMC13A se configura para enviar ubicación y datos del equipo al único endpoint y puerto del servidor Plaspy, de modo que la plataforma pueda recibir y mostrar la telemetría para el monitoreo de flotas. Plaspy detecta el protocolo del rastreador automáticamente y el puerto compartido simplifica la configuración del dispositivo.

- El rastreador se apunta a d.plaspy.com o a la IP 54.85.159.138
- El rastreador envía telemetría al puerto 8888, que se utiliza para todos los dispositivos en Plaspy
- El transporte puede seleccionarse como UDP o TCP en el dispositivo según la herramienta de configuración
- Plaspy recibe los datos del dispositivo y aplica la detección de protocolo de forma automática
- Una vez conectado, el rastreador ofrece visibilidad de ubicación e informe de eventos dentro de Plaspy

## Flujo de configuración habitual

1. Acceda al método oficial de configuración de Teltonika para el FMC13A, como la configuración por SMS o la herramienta de Teltonika adecuada para su firmware.
2. Introduzca el endpoint del servidor de Plaspy indicando d.plaspy.com o 54.85.159.138 en el campo de servidor.
3. Configure el puerto del servidor en 8888, que es el puerto compartido que usa Plaspy para todos los dispositivos.
4. Elija UDP o TCP si el dispositivo requiere seleccionar un protocolo de transporte.
5. Aplique o guarde la configuración según la herramienta del fabricante o confirme mediante el SMS correspondiente.
6. Reinicie o haga un ciclo de alimentación del dispositivo si el firmware del FMC13A lo exige para aplicar los ajustes.
7. Valide que el dispositivo reporte a Plaspy y que aparezca en la plataforma usando su cuenta de Plaspy.

## Comandos de configuración de ejemplo

El siguiente comando público es una actualización de parámetros de una sola línea que se usa comúnmente en dispositivos Teltonika. Establece parámetros APN y apunta el dispositivo al servidor y puerto de Plaspy. Mantenga los marcadores de posición al preparar el comando.

- Para establecer APN y parámetros del servidor via SMS o por comando por lotes del dispositivo use:

```
setparam 2001:{{apn}};2002:{{apnu}};2003:{{apnp}};2004:d.plaspy.com;2005:8888;2006:1
```

- Breve explicación de marcadores y campos
  - {{apn}} marcador para el nombre del APN de su proveedor de datos móviles
  - {{apnu}} marcador para el nombre de usuario del APN si la SIM lo requiere
  - {{apnp}} marcador para la contraseña del APN si la SIM lo requiere
  - 2004 es el host del servidor fijado a d.plaspy.com
  - 2005 es el puerto del servidor fijado a 8888
  - Mantenga los marcadores hasta sustituirlos por los valores apropiados para su SIM y red

Si usa una herramienta del fabricante en lugar de SMS, aplique los mismos valores para host y puerto del servidor y siga los pasos de la herramienta para guardar y enviar la configuración al dispositivo.

## Notas de configuración

- Las versiones de firmware y de herramientas pueden cambiar los identificadores de parámetros y los formatos de comando soportados, por lo que debe verificar la sintaxis del comando para su versión de firmware del FMC13A.
- El FMC13A soporta configuración mediante métodos del fabricante como SMS o el software oficial de configuración; elija el método que mejor se adapte a su flujo de trabajo de instalación.
- Cuando se requiera seleccionar el transporte, elija UDP o TCP en función de sus consideraciones de red y operador y luego confirme la conectividad en Plaspy.
- Mantenga las credenciales del APN seguras y verifique el acceso de datos de la SIM antes de aplicar los ajustes del servidor.
- Siempre contraste cualquier número de parámetro o formato de comando con la documentación de Teltonika para el FMC13A antes de aplicar cambios.

## Por qué usar Plaspy con esta configuración

Usar el Teltonika FMC13A con Plaspy ofrece a las organizaciones una forma directa de recopilar datos de ubicación y monitoreo remoto desde un rastreador moderno 4G LTE Cat 1. Apuntar el dispositivo a d.plaspy.com o a 54.85.159.138 en el puerto 8888 y validar la conectividad permite que Plaspy ingiera los datos del rastreador para visibilidad de flota, monitoreo de eventos y supervisión operativa.

Para saber más sobre Plaspy visite https://www.plaspy.com. Para los métodos de configuración específicos del dispositivo, detalles de firmware y orientación del fabricante, verifique la información actual en https://www.teltonika-gps.com/

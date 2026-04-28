---
slug: /aovx/vx300/configuration
id: vx300-configuration
sidebar_label: Configuration
title: AOVX - VX300 Configuration
sidebar_class_name: menu_item_tracker
description: Configure el AOVX VX300 con Plaspy mediante ajustes compartidos del servidor y una guía práctica de instalación GPS
keywords:
  - configuración AOVX VX300
  - configuración AOVX VX300 para Plaspy
  - configuración del servidor AOVX VX300
  - configuración del rastreador GPS AOVX VX300
  - configuración del software de rastreo AOVX VX300
  - configuración de la plataforma GPS AOVX VX300
  - guía de configuración VX300
  - compatibilidad VX300 con Plaspy
  - configuración de rastreo vehicular
  - configuración de rastreador GPS
---

# AOVX - Configuración del VX300

Esta página explica el contexto de configuración pública para usar el AOVX VX300 con Plaspy. Se enfoca en los datos compartidos de conexión de Plaspy, el flujo general de configuración y los pasos prácticos que normalmente se utilizan para preparar el rastreador para enviar información a la plataforma.

Plaspy utiliza la misma configuración de servidor para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Eso significa que la tarea principal es apuntar el VX300 al punto de conexión de Plaspy y confirmar que el dispositivo esté listo para enviar datos. Los pasos exactos del fabricante pueden variar según el firmware, la revisión del hardware, el tipo de instalación y las herramientas del proveedor que se usen para aplicar la configuración.

## Panorama de la configuración

Configurar el VX300 para Plaspy consiste principalmente en definir a dónde debe enviar sus datos de rastreo y confirmar que la ruta de reporte esté activa. El flujo de configuración pública proporcionado por el fabricante usa comandos SMS para establecer el punto de acceso de red, el destino del servidor, el intervalo de reporte y el modo de datos, antes de validar el estado del dispositivo.

- Defina la información del punto de acceso del operador para que el rastreador pueda establecer conexión de datos.
- Dirija el dispositivo al dominio o la dirección IP del servidor de Plaspy.
- Use el puerto compartido de Plaspy para que el rastreador informe al punto de conexión correcto.
- Elija el modo de transporte compatible con el dispositivo, ya sea UDP o TCP en el puerto 8888.
- Aplique la configuración y verifique que el rastreador responda como se espera.
- Confirme que el dispositivo pueda reportar en Plaspy para que los datos de ubicación y estado sean visibles en la plataforma.

## Parámetros del servidor de Plaspy

Use los siguientes parámetros públicos de Plaspy al configurar el AOVX VX300:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Compatibilidad de transporte con UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador
- Todos los dispositivos compatibles con Plaspy usan el mismo puerto

## Requisitos habituales antes de la instalación

Antes de aplicar la configuración, asegúrese de que el rastreador esté listo para la instalación y de que usted tenga acceso al método de configuración pública del fabricante.

- El dispositivo debe estar encendido e instalado físicamente según la guía del fabricante.
- Usted debe tener acceso al método o software oficial de configuración que AOVX utiliza para el VX300.
- Deben estar disponibles los datos de conectividad del operador si el dispositivo requiere ajustes de acceso a la red.
- El rastreador debe estar listo para aceptar comandos de configuración o cambios de parámetros.
- Usted debe tener a mano los datos del servidor de Plaspy para ingresarlos durante la instalación.
- La instalación debe estar lo suficientemente avanzada como para permitir que el dispositivo se reinicie y comience a reportar después de la configuración.
- Revise la documentación actual del fabricante antes de aplicar los ajustes finales.

## Cómo se conecta este rastreador a Plaspy

El VX300 se conecta a Plaspy enviando sus mensajes de rastreo y de dispositivo al punto de conexión compartido del servidor de Plaspy en el puerto 8888. Una vez configurado, el rastreador reporta en Plaspy y la plataforma identifica automáticamente el protocolo que usa el dispositivo.

- El rastreador se dirige a d.plaspy.com o 54.85.159.138 como destino de reporte.
- El tráfico se envía a través del puerto 8888, que es el puerto común utilizado por los dispositivos compatibles con Plaspy.
- El dispositivo puede configurarse para usar UDP o TCP si el método de instalación requiere elegir un modo de transporte.
- Plaspy detecta automáticamente el protocolo del rastreador, lo que reduce la necesidad de seleccionar el protocolo manualmente.
- Después de la configuración, el dispositivo debe comenzar a enviar datos de ubicación y estado para que sean visibles en Plaspy.
- El monitoreo operativo se vuelve posible una vez que el rastreador reporta de forma consistente a la plataforma.

## Flujo de configuración común

1. Abra el método o la herramienta oficial de configuración de AOVX para el VX300.
2. Ingrese los datos APN del operador que necesita el dispositivo para establecer conectividad de datos.
3. Configure el servidor como d.plaspy.com o 54.85.159.138.
4. Establezca el puerto en 8888.
5. Seleccione UDP o TCP si el dispositivo solicita un modo de transporte.
6. Aplique o guarde los cambios de configuración en la herramienta del fabricante o mediante el método de comandos compatible.
7. Reinicie el dispositivo si el flujo del fabricante lo requiere.
8. Valide que el rastreador esté reportando a Plaspy y que el estado del dispositivo aparezca correctamente.

## Ejemplos de comandos de configuración

El flujo público de instalación del VX300 utiliza comandos SMS. El método exacto puede variar ligeramente según la herramienta del fabricante o el firmware, pero los siguientes comandos representan la secuencia de configuración publicada.

- Configure el APN del operador usando los marcadores de posición proporcionados por su servicio móvil:

```text
APN,{{apn}}#
```

Si su operador requiere usuario y contraseña, inclúyalos en el mismo comando:

```text
APN,{{apn}},{{apnu}},{{apnp}}#
```

- Defina el servidor GPRS como el punto de conexión de Plaspy y el puerto compartido:

```text
SERVER,1,d.plaspy.com,8888,0#
```

- Defina el intervalo de actualización:

```text
TIMER,60,60#
```

- Cambie el rastreador al modo GPRS:

```text
GPRSON,1#
```

- Revise la configuración actual:

```text
PARAM#
```

- Revise el estado del rastreador:

```text
STATUS#
```

## Notas de configuración

- El flujo de instalación pública usa comandos SMS, por lo que se requiere acceso al método de configuración por comandos del dispositivo.
- Plaspy utiliza un puerto compartido para los dispositivos compatibles, lo que simplifica la implementación en entornos con múltiples modelos de rastreador.
- La compatibilidad con UDP y TCP puede depender del firmware del dispositivo o de la interfaz de configuración del fabricante, así que confirme la opción de transporte disponible antes de guardar.
- Los marcadores de posición del APN en los ejemplos de comandos deben reemplazarse con los valores reales del proveedor de red móvil.
- El formato exacto de las respuestas y el comportamiento del dispositivo pueden variar según la versión del firmware y el flujo de instalación.
- Compare siempre la configuración final del dispositivo con la documentación más reciente de AOVX antes del despliegue.

## Por qué usar Plaspy con esta configuración

Usar el VX300 con Plaspy le brinda a las organizaciones una forma práctica de centralizar la visibilidad de la flota, monitorear el estado de los dispositivos y administrar la operación desde una plataforma de rastreo compartida. Una vez que el rastreador apunta a los parámetros del servidor de Plaspy, la plataforma puede detectar automáticamente el protocolo del rastreador y organizar los datos entrantes para uso operativo.

Para equipos que administran varios vehículos o implementaciones con dispositivos mixtos, este enfoque de configuración mantiene la instalación uniforme al usar el mismo puerto de Plaspy en los dispositivos compatibles, sin impedir que el VX300 envíe sus propios datos de rastreo. Para conocer más sobre Plaspy, visite https://www.plaspy.com. Para obtener la información más reciente sobre instalación específica del dispositivo, comportamiento del firmware y orientación del fabricante, verifique la información actual en https://www.aovx.com/.

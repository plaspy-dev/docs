---
slug: /aovx/gl100/configuration
id: gl100-configuration
sidebar_label: Configuration
title: AOVX - GL100 Configuration
sidebar_class_name: menu_item_tracker
description: Guía de configuración del AOVX GL100 para Plaspy con ajustes de servidor flujo de instalación y comandos SMS públicos
keywords:
  - configuración del AOVX GL100
  - configuración del AOVX GL100 para Plaspy
  - configuración del servidor AOVX GL100
  - configuración del rastreador GPS AOVX GL100
  - configuración del software de rastreo AOVX GL100
  - configuración de GL100 en Plaspy
  - configuración de la plataforma GPS GL100
  - configuración del rastreador AOVX
  - configuración de rastreadores GPS para Plaspy
  - configuración del rastreador de activos GL100
---

# AOVX - Configuración del GL100

Esta página cubre el contexto público de configuración para usar el AOVX GL100 con Plaspy. Se enfoca en los ajustes compartidos del servidor de Plaspy, el flujo general de instalación y los comandos públicos disponibles para la configuración inicial del rastreador.

Plaspy utiliza ajustes de servidor comunes para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Aun así, los pasos exactos del fabricante pueden variar según el firmware, la revisión del hardware, el tipo de instalación y las herramientas de configuración que ofrece AOVX, por lo que es importante validar las instrucciones actuales del dispositivo junto con los ajustes públicos de Plaspy.

## Resumen de la configuración

Por lo general, el AOVX GL100 se prepara apuntando el rastreador al extremo del servidor de Plaspy, confirmando el puerto de comunicación y guardando la configuración para que el dispositivo empiece a enviar datos. En este modelo, el flujo público de instalación también incluye la configuración del APN, un comando de servidor GPRS, el control del intervalo y el cambio del dispositivo al modo GPRS.

- Configure el rastreador para que pueda conectarse al servidor de Plaspy en el extremo compartido.
- Use el mismo valor de puerto que Plaspy asigna a todos los dispositivos compatibles.
- Confirme que el rastreador esté configurado para comunicarse con Plaspy usando la opción de transporte compatible.
- Aplique el intervalo de reporte que coincida con el flujo de seguimiento esperado.
- Guarde los ajustes y verifique que el rastreador reporte correctamente a la plataforma.
- Revise el estado del dispositivo y la salida de configuración después de la instalación cuando las herramientas del fabricante lo permitan.

## Ajustes del servidor de Plaspy

- El dominio del servidor es d.plaspy.com
- La IP del servidor es 54.85.159.138
- El puerto es 8888
- El dispositivo puede configurarse con UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador
- Todos los dispositivos compatibles en Plaspy usan el mismo puerto, lo que simplifica la implementación en flotas mixtas

## Requisitos habituales antes de configurar

- El rastreador debe estar encendido y listo para configurarse.
- Debe tener acceso al método o software oficial de configuración de AOVX para el dispositivo.
- Confirme que el dispositivo pueda configurarse para comunicarse con un servidor de rastreo externo.
- Asegúrese de contar con los datos correctos del APN proporcionados por la operadora antes de ingresar los ajustes de red.
- Revise la documentación actual del fabricante por si existen diferencias de configuración según el firmware.
- Defina el intervalo de reporte deseado antes de aplicar la configuración final.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el GL100 envía sus datos de rastreo al extremo y puerto compartidos del servidor de Plaspy. Luego, Plaspy identifica automáticamente el protocolo entrante, lo que ayuda a reducir la complejidad de la instalación al incorporar el dispositivo.

- El rastreador se apunta a d.plaspy.com o a la IP 54.85.159.138.
- La comunicación se envía por el puerto 8888, que es el mismo puerto usado por los dispositivos compatibles de Plaspy.
- Se puede seleccionar UDP o TCP si el dispositivo requiere elegir un transporte.
- Plaspy detecta automáticamente el protocolo del rastreador después de que el dispositivo comienza a reportar.
- Las actualizaciones de ubicación y estado quedan disponibles en Plaspy una vez que la conexión está activa y el dispositivo envía datos.
- El reporte continuo permite monitoreo, alertas y seguimiento histórico dentro de la plataforma.

## Flujo común de configuración

1. Abra el método o software oficial de configuración de AOVX para el GL100.
2. Ingrese los datos del APN de la operadora si el dispositivo requiere configuración de red celular.
3. Configure el servidor GPRS como d.plaspy.com o use la IP del servidor 54.85.159.138.
4. Configure el puerto 8888 para la conexión con Plaspy.
5. Elija UDP o TCP si el firmware del rastreador requiere seleccionar un transporte.
6. Guarde o aplique los cambios de configuración en la herramienta del fabricante o mediante el flujo de comandos SMS compatible.
7. Reinicie el dispositivo si el proceso del fabricante requiere un reinicio para que los ajustes surtan efecto.
8. Valide que el rastreador reporte correctamente a Plaspy y confirme el estado con los comandos de verificación disponibles.

## Ejemplos de comandos de configuración

El flujo público de configuración del GL100 usa comandos SMS. Los marcadores como `{{apn}}`, `{{apnu}}` y `{{apnp}}` representan el nombre del APN de la operadora, el usuario del APN y la contraseña del APN, respectivamente, cuando esos datos son necesarios.

- Configurar el APN de la operadora

```text
APN,{{apn}},{{apnu}},{{apnp}}#
```

- Configurar el servidor GPRS para Plaspy

```text
SERVER,1,d.plaspy.com,8888,0#
```

- Configurar el intervalo de actualización

```text
TIMER,60,60#
```

- Cambiar el rastreador a modo GPRS

```text
GPRSON,1#
```

- Verificar la configuración actual

```text
PARAM#
```

- Verificar el estado del rastreador

```text
STATUS#
```

## Notas de configuración

- Los comandos públicos mostrados aquí son útiles para la configuración inicial, pero el comportamiento exacto todavía puede depender de la versión del firmware y de variantes regionales.
- Si el dispositivo requiere elegir un transporte, use UDP o TCP en el puerto 8888 según el flujo de trabajo del fabricante.
- Plaspy utiliza el mismo puerto para los dispositivos compatibles, lo que ayuda a mantener una configuración uniforme en toda la flota.
- El manejo del protocolo es automático en Plaspy, así que la tarea principal es apuntar el GL100 al servidor y puerto correctos.
- El software del fabricante, la configuración por SMS y los menús del dispositivo pueden variar según la versión, por lo que la documentación actual de AOVX sigue siendo la mejor referencia para detalles específicos del dispositivo.
- Después de cambiar los ajustes, verifique la salida del dispositivo con los comandos de estado o parámetros disponibles cuando estén soportados.

## Por qué usar Plaspy con esta configuración

Usar el AOVX GL100 con Plaspy ofrece una forma práctica de centralizar la visibilidad del rastreador, el monitoreo operativo y las alertas en una sola plataforma. Una vez que el dispositivo se dirige al servidor de Plaspy y reporta correctamente, los equipos pueden usar los datos entrantes para los flujos de rastreo y la supervisión continua de la flota.

El modelo de servidor compartido de Plaspy y la detección automática de protocolos simplifican la implementación, especialmente cuando se rastrean varios dispositivos compatibles. Si desea conocer más sobre Plaspy y sus capacidades como plataforma de rastreo, visite https://www.plaspy.com. Para obtener la información más reciente sobre configuración específica del dispositivo, comportamiento del firmware y guía del fabricante, verifique la información en https://www.aovx.com/.

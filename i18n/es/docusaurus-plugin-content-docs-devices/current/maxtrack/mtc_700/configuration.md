---
slug: /maxtrack/mtc_700/configuration
id: mtc_700-configuration
sidebar_label: Configuration
title: Maxtrack - MTC-700 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Maxtrack MTC-700 con ajustes de servidor Plaspy y ejemplos de comandos SMS
keywords:
  - Configuración Maxtrack MTC-700
  - Instalación Maxtrack MTC-700
  - Configuración servidor MTC-700
  - Configuración Plaspy MTC-700
  - Guía configuración rastreador GPS
  - Configuración plataforma rastreo vehicular
  - Integración rastreador Plaspy
  - Configuración SMS MTC-700
  - Configuración APN MTC-700
  - Instrucciones tracker Maxtrack
---

# Maxtrack - Configuración del MTC-700

Esta página ofrece contexto público para configurar la familia de rastreadores Maxtrack MTC-700 con Plaspy. Reúne los ajustes de servidor prácticos y el formato de comandos SMS públicos que el fabricante proporciona, para ayudar a preparar el equipo y que reporte posición y telemetría a Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque los pasos concretos en el lado del fabricante pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y las herramientas del proveedor. El ejemplo que sigue incluye el formato de comando SMS publicado para el MTC-700 y explica cómo aplicar los valores del servidor Plaspy de forma segura y práctica.

## Resumen de la configuración

El objetivo es dirigir el MTC-700 al endpoint del servidor Plaspy, asegurarse de que el dispositivo pueda usar una ruta válida por datos o SMS y verificar que el rastreador aparezca en la plataforma Plaspy. El flujo público de configuración de este modelo suele utilizar comandos SMS como uno de los métodos disponibles.

- Configure el equipo para que reporte al endpoint y puerto del servidor Plaspy.
- Establezca el APN y parámetros relacionados con la SIM para que el rastreador pueda conectarse por GPRS cuando esté disponible.
- Valide la conectividad y que la unidad sea visible en Plaspy.
- Utilice ejemplos de comandos SMS provistos por el fabricante para una configuración remota rápida.
- Confirme el tipo de transporte TCP o UDP según lo requiera el dispositivo y la red.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte soportado UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador para los dispositivos compatibles

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos soportados y acepta UDP o TCP en el puerto 8888.

## Requisitos típicos antes de la configuración

- Asegúrese de que el MTC-700 tenga alimentación estable y esté encendido durante la configuración.
- Tenga a mano el IMEI del dispositivo o el identificador del rastreador para colocarlo en los campos de los comandos SMS.
- Confirme que la tarjeta SIM esté activa y cuente con datos o crédito para SMS si va a usar configuración por SMS.
- Acceso al método oficial de configuración de Maxtrack, como comandos SMS o software del proveedor.
- Conozca los ajustes APN de su operador para reemplazar los marcadores cuando sea necesario.
- Si utiliza herramientas de software, tenga conexión al rastreador mediante la interfaz recomendada por el fabricante.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el MTC-700 envía sus paquetes de datos al endpoint y puerto compartidos de Plaspy para que la plataforma pueda ingerir y mostrar la información. Plaspy detectará el protocolo y procesará los mensajes del rastreador sin requerir configuración de puerto por dispositivo.

- El rastreador se configura para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El transporte de datos puede establecerse por UDP o TCP según la selección del dispositivo y la red.
- Plaspy detecta automáticamente el protocolo del rastreador en las conexiones entrantes.
- Cuando no haya GPRS, el MTC-700 puede enviar información de posición vía SMS como respaldo, si el modelo lo soporta.
- Una vez reportando, los mensajes de posición y eventos se hacen visibles y utilizables dentro de Plaspy.

## Flujo común de configuración

1. Acceda al método o software de configuración oficial de Maxtrack según la documentación del fabricante.
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP 54.85.159.138 en el campo de dirección del servidor.
3. Establezca el puerto del servidor en 8888.
4. Seleccione UDP o TCP si el dispositivo solicita elegir un transporte.
5. Si usa configuración por SMS, prepare el comando SMS reemplazando los marcadores por el ID del dispositivo y los valores APN.
6. Aplique o guarde la configuración en el dispositivo o envíe el comando SMS al rastreador.
7. Reinicie el dispositivo si el fabricante lo requiere para activar los nuevos ajustes.
8. Valide que el dispositivo reporte a Plaspy y aparezca en la plataforma.

## Ejemplos de comandos de configuración

El fabricante publica un formato de comando SMS para la configuración inicial. El ejemplo público usa la contraseña por defecto 0000 y marcadores para el ID del rastreador y los valores APN. Reemplace los marcadores por sus valores reales antes de enviar.

- Notas sobre los marcadores
  - {{trackerID}} Reemplace con el IMEI del dispositivo o el identificador del rastreador según lo requiera el equipo.
  - {{apn}} Reemplace con el nombre del APN de su operador móvil.
  - {{apnu}} Reemplace con el usuario del APN si es necesario; de lo contrario, use un valor vacío.
  - {{apnp}} Reemplace con la contraseña del APN si es necesario; de lo contrario, use un valor vacío.

SMS ejemplo de comando (envíe al rastreador desde un número autorizado):

```
0000,{{trackerID}},2,0,{{apn}},{{apnu}},{{apnp}},54.85.159.138,8888,,.
```

- Este único SMS establece el prefijo de contraseña del dispositivo, el campo de ID del rastreador, los parámetros APN y la IP y puerto del servidor Plaspy tal como se muestran arriba.
- Si prefiere usar el dominio del servidor en lugar de la IP y su dispositivo soporta nombres de dominio en la configuración por SMS, use d.plaspy.com en lugar de 54.85.159.138 cuando el fabricante lo permita.
- El comando mostrado mantiene el orden publicado por Maxtrack; respete dicho orden al completar los marcadores.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis exacta del SMS o los parámetros disponibles; siempre verifique el formato del comando SMS con la documentación actual de Maxtrack.
- El MTC-700 soporta la configuración vía SMS en el ejemplo público, lo cual es útil cuando no hay acceso remoto por software.
- La elección entre TCP o UDP puede afectar el comportamiento de firewall y del operador; pruebe ambas opciones si surgen problemas de conectividad.
- La familia MTC-700 soporta doble SIM y respaldo por SMS, lo que puede ser útil para redundancia en la conectividad.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos y realiza la detección automática de protocolo, lo que simplifica la configuración del lado del servidor.

## Por qué usar Plaspy con esta configuración

Configurar el Maxtrack MTC-700 para que reporte a Plaspy ofrece un endpoint de servidor consistente para visibilidad de flotas y monitoreo de eventos. Con ajustes de servidor compartidos y detección automática de protocolo, integrar el MTC-700 permite centralizar datos de ubicación y telemetría de los dispositivos configurados al mismo endpoint y puerto.

Para conocer más sobre Plaspy y las configuraciones compatibles visite https://www.plaspy.com. Para métodos de configuración específicos más recientes, comportamiento de firmware y detalles del fabricante, verifique la documentación oficial de Maxtrack en https://maxtrack.com.br.

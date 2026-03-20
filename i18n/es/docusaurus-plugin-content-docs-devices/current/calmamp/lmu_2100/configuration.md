---
slug: /calmamp/lmu_2100/configuration
id: lmu_2100-configuration
sidebar_label: Configuration
title: CalmAmp - LMU-2100 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para CalmAmp LMU-2100 y parámetros de servidor para usar con Plaspy
keywords:
  - Configuración CalmAmp LMU-2100
  - Configuración LMU-2100
  - Configuración Plaspy LMU-2100
  - Configuración servidor LMU-2100
  - Configuración rastreador CalmAmp
  - Rastreo de flotas LMU-2100
  - Comandos SMS LMU-2100
  - Configurar APN LMU-2100
  - Configuración rastreador Plaspy
  - Rastreo vehicular LMU-2100
---

# CalmAmp - Configuración LMU-2100

Esta página describe el contexto público de configuración para usar el CalmAmp LMU-2100 con Plaspy. Reúne los ajustes de servidor clave y la información práctica que puede aplicar al preparar el LMU-2100 para comunicarse con Plaspy. Cuando los comandos del fabricante son de dominio público se incluyen como referencia.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor como CalAmp PULS o métodos de configuración por SMS, por lo que considere los ejemplos aquí como guía práctica y verifique los procedimientos específicos del dispositivo con el fabricante.

## Resumen de la configuración

El objetivo de configurar el LMU-2100 para Plaspy es preparar el equipo para que envíe con fiabilidad telemetría y eventos al endpoint compartido de Plaspy, de modo que el dispositivo sea visible y gestionable en la plataforma. Normalmente esto implica establecer el APN de la red, la dirección y puerto del servidor, elegir el transporte apropiado y verificar que el equipo reporte correctamente.

- Configure el APN del operador y las credenciales necesarias para que el LMU-2100 tenga conectividad GPRS.
- Apunte el equipo hacia los ajustes del servidor de Plaspy para que envíe mensajes de ubicación y eventos al endpoint correcto.
- Seleccione el transporte (UDP o TCP) si fuera necesario y asegúrese de que el dispositivo use el puerto común de Plaspy.
- Valide la configuración y confirme que el equipo reporte a Plaspy para que la unidad aparezca en la plataforma.
- Reinicie o vuelva a iniciar el equipo cuando sea necesario para aplicar los ajustes y realice una verificación final de conectividad.

## Ajustes de servidor de Plaspy

Use los siguientes ajustes públicos de Plaspy al configurar el dispositivo:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP; el dispositivo puede configurarse usando UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos en Plaspy usan el mismo puerto

Estos valores corresponden al endpoint compartido y al puerto que Plaspy utiliza para los rastreadores compatibles y deben ingresarse en el dispositivo o mediante la interfaz de configuración del fabricante.

## Requisitos típicos antes de la configuración

- Asegúrese de que el LMU-2100 tenga una SIM móvil válida con datos habilitados y el APN correcto del operador móvil.
- El dispositivo cuente con alimentación y se encuentre en un lugar con cobertura celular para validar GPRS u otra radio soportada.
- Acceso al método de configuración CalAmp previsto para la unidad, como comandos SMS, PULS OTA o la herramienta de aprovisionamiento del proveedor.
- Tener disponible el ID del dispositivo (MID) o el IMEI para identificación; el LMU-2100 puede responder con su ID usando comandos del fabricante.
- Un método para recibir y revisar las respuestas del dispositivo para verificación (respuestas SMS o registros del servidor).
- Acceso administrativo a Plaspy para confirmar que el rastreador aparece y comienza a reportar después de la configuración.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el LMU-2100 enviará sus mensajes de telemetría y eventos al endpoint y puerto compartido de Plaspy para que Plaspy muestre la ubicación, alertas y estado. La detección automática de protocolos de Plaspy gestiona el protocolo del rastreador, por lo que se utiliza un único puerto compartido entre dispositivos.

- El dispositivo se configura para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- Plaspy recibe actualizaciones de ubicación y eventos del dispositivo para su visualización en la plataforma.
- Las reglas de eventos generadas por la unidad (por ejemplo desde el motor PEG) se transmiten y pueden ser monitoreadas en Plaspy.
- La detección de protocolo en Plaspy identifica automáticamente el protocolo del rastreador, por lo que no se requieren configuraciones de protocolo separadas en el lado de la plataforma.
- El transporte puede configurarse como UDP o TCP en el dispositivo según las necesidades de la instalación.

## Flujo de trabajo de configuración común

1. Acceda al método oficial de configuración CalmAmp para el LMU-2100, como comandos SMS, PULS OTA o herramientas de aprovisionamiento del proveedor.
2. Ingrese la dirección del servidor de Plaspy usando d.plaspy.com o la IP 54.85.159.138 en la configuración del dispositivo.
3. Establezca el puerto del servidor en 8888; tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles.
4. Seleccione UDP o TCP en el dispositivo si requiere elegir un transporte.
5. Configure el APN del operador y las credenciales APN necesarias para que el equipo pueda establecer conectividad GPRS.
6. Aplique o guarde la configuración y reinicie o vuelva a iniciar el dispositivo si es necesario para aplicar los ajustes.
7. Valide que el dispositivo reporte a Plaspy revisando las respuestas del equipo y confirmando que la unidad aparece en la plataforma Plaspy.

Si configura mediante comandos SMS, siga el orden de comandos del fabricante y confirme las respuestas en cada paso antes de continuar.

## Ejemplos de comandos de configuración

El LMU-2100 puede configurarse enviando comandos SMS a la unidad. Los comandos que siguen se proporcionan en la configuración pública del modelo y deben enviarse en el orden indicado cuando use SMS. El ID del dispositivo usado para dirigir los comandos SMS es el MID de 10 dígitos que responde el comando !R0.

- Establecer el APN del operador
```text
!RP,2306,0,{{apn}}
```
Reemplace {{apn}} con el APN de su operador móvil.

- Establecer el nombre de usuario del APN (si es necesario)
```text
!RP,2314,0,{{apnu}}
```
Reemplace {{apnu}} con el nombre de usuario del APN. Omitir si su APN no requiere usuario.

- Establecer la contraseña del APN (si es necesario)
```text
!RP,2315,0,{{apnp}}
```
Reemplace {{apnp}} con la contraseña del APN. Omitir si no se requiere.

- Establecer el servidor GPRS a Plaspy por IP
```text
!RP,2319,0,54.85.159.138
```
Esto apunta la unidad directamente a la IP del servidor Plaspy. Alternativamente use d.plaspy.com donde el dispositivo lo soporte.

- Establecer el puerto del servidor (puerto común de Plaspy)
```text
!RP,769,0,8888
```
Todos los dispositivos en Plaspy usan el puerto 8888.

- Reiniciar el rastreador para aplicar ajustes (opcional pero común)
```text
!R3,70,0
```
Este comando de reinicio se usa típicamente para aplicar cambios de configuración; úselo solo si su instalación lo requiere.

- Verificar la configuración actual en el dispositivo
```text
!RO
```
Use este comando de verificación para solicitar y revisar los parámetros configurados.

Nota: El comando !R0 puede usarse para solicitar el MID del dispositivo, que se requiere como identificador del equipo al dirigir algunos comandos SMS.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis de comandos o los parámetros soportados; verifique la sintaxis según la versión de firmware del dispositivo.
- El LMU-2100 soporta CalAmp PULS para programación OTA y el equipo puede aceptar también la configuración por SMS como se mostró en los ejemplos.
- Elija UDP o TCP según la fiabilidad de la red y las necesidades de la instalación; Plaspy acepta cualquiera de los dos transportes en el puerto 8888.
- Todos los dispositivos en Plaspy usan el mismo puerto y Plaspy realiza detección automática de protocolo, por lo que no es necesaria la selección de protocolo en la plataforma.
- Al usar comandos SMS conserve los marcadores de posición como {{apn}}, {{apnu}} y {{apnp}} y reemplácelos por los valores específicos de su operador móvil.

## Por qué usar Plaspy con esta configuración

Usar el CalmAmp LMU-2100 con Plaspy proporciona a las organizaciones una forma directa de recopilar datos de ubicación, eventos y comportamiento desde un equipo diseñado para aplicaciones de seguros y flotas. La telemetría y el motor de eventos del LMU-2100, combinados con el endpoint compartido de Plaspy, ofrecen una vía práctica para obtener visibilidad operativa y monitoreo centralizado.

Para obtener más información sobre Plaspy visite https://www.plaspy.com y revise la documentación específica del dispositivo en el sitio del fabricante http://www.calamp.com/ para confirmar el comportamiento del firmware más reciente y los métodos de configuración, dado que las especificaciones y los flujos de trabajo del fabricante pueden cambiar con el tiempo.

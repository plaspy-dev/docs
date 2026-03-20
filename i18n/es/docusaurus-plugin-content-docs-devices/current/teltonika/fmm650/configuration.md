---
slug: /teltonika/fmm650/configuration
id: fmm650-configuration
sidebar_label: Configuration
title: Teltonika - FMM650 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar un Teltonika FMM650 con Plaspy usando ajustes de servidor compartidos y comandos de ejemplo
keywords:
  - Configuración Teltonika FMM650
  - Configuración FMM650 para Plaspy
  - Configuración de servidor Teltonika
  - Configuración FMM650 para plataforma GPS
  - Guía de configuración del rastreador Teltonika
  - Rastreo de flotas FMM650
  - Integración de rastreador con Plaspy
  - Configuración de telemática vehicular
  - Ajustes APN y servidor FMM650
  - Configuración SMS Teltonika
---

# Teltonika - Configuración FMM650

Esta página documenta el contexto de configuración pública para usar el Teltonika FMM650 con Plaspy. Reúne ajustes de servidor prácticos, pasos preparatorios y un ejemplo de comando por SMS para configurar parámetros básicos y así dirigir el dispositivo a Plaspy para seguimiento en tiempo real e ingestión de telemetría.

Las indicaciones que siguen reflejan los ajustes de servidor compartidos de Plaspy y la detección automática de protocolo que se usa con los rastreadores compatibles. Los pasos del fabricante para el FMM650 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El FMM650 admite varios métodos de configuración (incluyendo comandos por SMS en lote que se muestran más abajo y herramientas de Teltonika), por lo que valide los detalles según el firmware del dispositivo y la documentación oficial de Teltonika cuando sea necesario.

## Resumen de la configuración

Configurar el FMM650 para Plaspy prepara el dispositivo para enviar posiciones y telemetría del vehículo a la plataforma Plaspy y garantiza que pueda verse y gestionarse desde su cuenta. El proceso se centra en establecer el acceso de red, el servidor de destino, el transporte y guardar la configuración para que Plaspy detecte e interprete automáticamente el protocolo del rastreador.

- Configure las credenciales APN para que el dispositivo tenga acceso a datos móviles cuando la instalación lo requiera.
- Direccione el dispositivo al servidor de Plaspy usando el dominio o IP proporcionados y el puerto compartido de la plataforma.
- Seleccione el protocolo de transporte (UDP o TCP) si la interfaz del dispositivo lo solicita.
- Guarde y aplique los ajustes, luego verifique que el dispositivo reporte a Plaspy y aparezca en la vista de su flota.
- Use las herramientas de Teltonika o comandos por SMS en lote para configuraciones masivas o remotas cuando corresponda.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos usan el mismo puerto para la ingestión en la plataforma

## Requisitos típicos antes de la configuración

- Un FMM650 con energía y acceso a la interfaz de configuración del equipo o al canal de control por SMS.
- Una SIM con datos celulares activa y configurada con el APN, usuario y contraseña según sea requerido por su operador.
- Acceso a las herramientas de configuración de Teltonika o la capacidad de enviar comandos por SMS en lote si va a usar configuración remota por SMS.
- Acceso físico o remoto para reiniciar el dispositivo tras aplicar cambios si la instalación requiere reinicio.
- Credenciales o acceso a una cuenta de Plaspy para verificar que el dispositivo aparece y reporta correctamente.
- Conocimiento de restricciones específicas del sitio, como la colocación de antenas y las prácticas de cableado del vehículo.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el FMM650 envía posiciones GNSS y telemetría del vehículo al endpoint compartido de servidor y puerto de Plaspy. Plaspy ingiere telemetría, estado del dispositivo y eventos para que los operadores de flota puedan supervisar vehículos, ver datos de tacógrafo y CAN/J1939 cuando estén disponibles y actuar sobre alertas.

- El dispositivo se configura para reportar a d.plaspy.com (o 54.85.159.138) en el puerto 8888 para que Plaspy reciba las señales GPS y la telemetría.
- Las actualizaciones de posición se entregan a Plaspy y se muestran en la plataforma para visibilidad en tiempo real.
- La telemetría CAN y J1939, las transmisiones de tacógrafo y los datos de sensores seriales se reenvían a Plaspy cuando la instalación lo admite.
- El estado del dispositivo, como batería de respaldo y conectividad, es visible en Plaspy para monitoreo operativo.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no necesita seleccionar el protocolo manualmente en la plataforma.

## Flujo de trabajo típico de configuración

1. Acceda al método o software oficial de Teltonika (por ejemplo Teltonika Configurator, herramientas FOTA o comandos SMS en lote).
2. Ingrese el endpoint de Plaspy como d.plaspy.com o 54.85.159.138 en la configuración de servidor del dispositivo.
3. Configure el puerto del dispositivo en 8888, que es el puerto compartido de Plaspy para todos los dispositivos.
4. Seleccione UDP o TCP si el dispositivo requiere elegir el transporte durante la configuración.
5. Proporcione APN, nombre de usuario APN y contraseña APN según lo exija su operador móvil.
6. Aplique o guarde los cambios de configuración en el dispositivo.
7. Reinicie el dispositivo si la versión de firmware o el método de configuración lo requieren.
8. Valide que el dispositivo reporte a Plaspy y que aparezca correctamente en la vista de su flota en Plaspy.

## Ejemplo de comandos de configuración

El siguiente ejemplo es un comando SMS en lote publicado por Teltonika para una configuración básica. Ilustra cómo establecer campos APN y dirigir el dispositivo a Plaspy. Mantenga los marcadores al sustituir sus valores de operador.

- Ejemplo de comando SMS en lote
```text
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

- Notas sobre el comando
  - [apn] es un marcador para el APN de su operador móvil.
  - [apnu] es un marcador para el nombre de usuario APN cuando sea requerido.
  - [apnp] es un marcador para la contraseña APN cuando sea requerido.
  - El comando incluye d.plaspy.com y el puerto 8888 para apuntar el dispositivo al servidor de Plaspy.
  - El parámetro 2006 aparece en el ejemplo; confirme el valor correcto para la selección de transporte u otras banderas con la documentación o las herramientas de Teltonika antes de usarlo.
  - Puede usar el dominio d.plaspy.com tal como se muestra o reemplazarlo con la IP del servidor Plaspy 54.85.159.138 si su método de configuración requiere un endpoint numérico.

Siempre verifique el mapeo exacto de parámetros para la versión de firmware de su equipo usando la documentación oficial de Teltonika o la herramienta Teltonika Configurator antes de enviar comandos SMS.

## Notas sobre la configuración

- Las diferencias de firmware pueden cambiar la numeración de parámetros y las opciones disponibles; consulte las notas de la versión del firmware del FMM650 para identificar cambios que afecten la configuración.
- Teltonika admite múltiples canales de configuración (SMS, Configurator, FOTA WEB). Utilice el método que mejor se adapte a su despliegue y flujo de trabajo de instalación.
- Elija UDP o TCP según los requisitos de su red y confirme el valor correcto de transporte con la documentación o el soporte de Teltonika.
- Aplicar la configuración de forma remota vía SMS es conveniente para activos desplegados, pero confirme que los comandos SMS en lote son compatibles y que el dispositivo acepta este tipo de comandos en su firmware.
- Mantenga un registro de las credenciales APN, valores de servidor y cualquier bandera específica del dispositivo usada durante la configuración para facilitar la resolución de problemas y los despliegues masivos.

## Por qué usar Plaspy con esta configuración

Usar el FMM650 con Plaspy ofrece visibilidad centralizada de la ubicación del vehículo, telemetría CAN y tacógrafo, y estado del dispositivo en activos de flota pesada. Los ajustes de servidor compartidos de Plaspy simplifican el aprovisionamiento de dispositivos porque la plataforma usa el mismo puerto y detección automática de protocolo para los rastreadores compatibles, reduciendo la configuración por dispositivo en la plataforma.

Learn more about Plaspy and how it integrates with trackers like the Teltonika FMM650 at https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior, and parameter mappings, verify details on the manufacturer website https://www.teltonika-gps.com/ as vendor documentation may change over time.

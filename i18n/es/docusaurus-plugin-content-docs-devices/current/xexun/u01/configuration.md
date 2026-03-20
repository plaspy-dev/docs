---
slug: /xexun/u01/configuration
id: u01-configuration
sidebar_label: Configuration
title: Xexun - U01 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Xexun U01 con Plaspy, incluye ajustes de servidor, comandos SMS y pasos prácticos
keywords:
  - xexun u01 configuración
  - xexun u01 instalación
  - xexun u01 plaspy
  - configuración tracker plaspy
  - ajustes servidor u01
  - configuración reloj posicionamiento interior
  - u01 configuración sms
  - guía integración tracker
  - configuración gprs u01
  - configuración servidor dispositivo
---

# Xexun - Configuración del U01

Esta página documenta el contexto público de configuración para usar el Xexun U01 con Plaspy. Explica los ajustes públicos del servidor que debe aplicar al dispositivo, muestra los comandos SMS de configuración más comunes proporcionados por el fabricante y describe los pasos prácticos para poner el U01 en línea en una implementación con Plaspy.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El U01 admite la configuración vía SMS además de los flujos de integración descritos aquí, y esta página se centra en los ajustes públicos y prácticos necesarios para conectar el dispositivo a Plaspy.

## Resumen de configuración

Configurar el U01 para Plaspy prepara el dispositivo para enviar datos de posición y telemetría a un punto central de Plaspy y garantiza que el dispositivo sea visible y gestionable dentro de la plataforma. El proceso normalmente emplea el método de configuración del fabricante, que para el U01 incluye comandos SMS que se muestran a continuación.

- Indicar a Plaspy el endpoint y puerto donde el U01 reportará ubicación y telemetría.
- Configurar el APN y parámetros GPRS para que el dispositivo alcance Plaspy mediante datos celulares.
- Validar transporte y conectividad y confirmar que el dispositivo esté enviando datos a Plaspy.
- Guardar ajustes y reiniciar el dispositivo si es necesario para comenzar el reporte en vivo.
- Usar configuración por SMS cuando no estén disponibles herramientas de gestión locales o remotas.

## Ajustes del servidor de Plaspy

Configure el dispositivo para que reporte al servidor de Plaspy usando los siguientes ajustes públicos al configurar el U01:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Tenga en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y la plataforma detectará automáticamente el protocolo del rastreador.

## Requisitos típicos antes de la configuración

- Un U01 con batería cargada y acceso al método de configuración por SMS del dispositivo o a la herramienta oficial del fabricante.
- Una tarjeta SIM con datos activos y capacidad de SMS si va a configurar APN y ajustes GPRS.
- La contraseña por defecto del dispositivo si es requerida para comandos o desbloquear ajustes. La contraseña de ejemplo pública en las guías del fabricante es 123456.
- Acceso a las instrucciones de configuración del fabricante o a la herramienta de instalador para pasos específicos de firmware.
- Un breve periodo de prueba para verificar la conectividad después de aplicar los ajustes y reiniciar el dispositivo.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el U01 envía telemetría y actualizaciones de posición al endpoint y puerto compartidos de Plaspy para que la plataforma pueda ingerir, mostrar y actuar sobre esos datos. La comunicación se realiza a través de la conexión GPRS del dispositivo y los ajustes de servidor configurados.

- El dispositivo se configura para reportar al endpoint y puerto de Plaspy usando los ajustes GPRS.
- Las actualizaciones de telemetría y posición se envían a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Plaspy recibe los reportes y detecta automáticamente el protocolo que usa el rastreador.
- La plataforma ingiere alertas SOS o eventos y las reenvía a los flujos de monitoreo y notificación configurados.
- Los intervalos de actualización controlan la frecuencia con la que el U01 envía ubicación y telemetría a Plaspy.

## Flujo típico de configuración

1. Acceda al método de configuración oficial de Xexun para el U01, normalmente comandos SMS o el software/herramienta proporcionada por el proveedor.
2. Proporcione los ajustes de APN del operador celular para que el dispositivo establezca datos GPRS. Use los marcadores de posición del APN si es necesario.
3. Ingrese la dirección del servidor de Plaspy como d.plaspy.com o 54.85.159.138 según su preferencia y compatibilidad de firmware.
4. Configure el puerto del dispositivo en 8888 y elija UDP o TCP si el dispositivo requiere selección explícita del transporte.
5. Aplique o guarde la configuración según el procedimiento del fabricante y, si es necesario, reinicie el dispositivo.
6. Valide que el U01 reporte a Plaspy comprobando el estado del dispositivo o los mensajes entrantes en la plataforma.
7. Supervise las actualizaciones regulares de posición y telemetría y ajuste los intervalos de reporte según sea necesario.

## Ejemplos de comandos de configuración

El fabricante proporciona comandos por SMS para el U01. La secuencia de ejemplo a continuación usa la contraseña por defecto del dispositivo 123456. Conserve los marcadores de posición exactamente como se muestran al reemplazarlos con sus valores de red.

- Paso inicial opcional para restaurar ajustes de fábrica
```text
begin123456
```

- Configurar el APN del operador
```text
apn123456 [apn]
```
Explanation: replace [apn] with your mobile operator APN string.

- Configurar el usuario del APN
```text
apnuser123456 [apnu]
```
Explanation: replace [apnu] with the APN username if required by your operator. Omit if not used.

- Configurar la contraseña del APN
```text
apnpasswd123456 [apnp]
```
Explanation: replace [apnp] with the APN password if required by your operator. Omit if not used.

- Configurar el servidor GPRS a Plaspy usando la IP pública y el puerto
```text
adminip123456 54.85.159.138 8888
```
Explanation: this command points the device at Plaspy. If your firmware supports DNS names, you may be able to use d.plaspy.com instead of the IP, but many vendor examples use the IP address.

- Establecer el modo GPRS
```text
gprsmode123456
```
Explanation: use this command to switch the device into GPRS reporting mode if required by the firmware.

- Establecer el intervalo de reporte a 60 segundos
```text
t060s***n123456
```
Explanation: this command sets the update interval to 60 seconds. Adjust value according to your deployment needs and power constraints.

Siga los comandos en el orden mostrado cuando el orden sea significativo, especialmente al realizar una restauración de fábrica inicial y la configuración del APN antes de asignar el servidor.

## Notas de configuración

- La contraseña de ejemplo por defecto mostrada en la guía del fabricante es 123456. Confirme o cambie esta contraseña siguiendo las instrucciones oficiales si es necesario.
- La configuración por SMS es un método común para este dispositivo; si están disponibles, las herramientas del proveedor o métodos OTA pueden ofrecer una vía alternativa.
- Las versiones de firmware y las revisiones de hardware pueden cambiar la sintaxis de los comandos y los parámetros soportados. Consulte la documentación del dispositivo cuando un comando no sea aceptado.
- Elija UDP o TCP según su red y políticas de firewall. Plaspy admite cualquiera de los dos transportes en el puerto 8888 y detectará el protocolo del dispositivo.
- Plaspy usa el mismo puerto para todos los dispositivos compatibles, lo que simplifica implementaciones con múltiples unidades.

## Por qué usar Plaspy con esta configuración

Usar el Xexun U01 con Plaspy brinda a las organizaciones datos de posicionamiento de alta precisión en interiores junto con telemetría y reportes de eventos en una sola plataforma. Configurar el U01 para que reporte al servidor de Plaspy permite a los equipos de operaciones monitorear ubicaciones, recibir alertas SOS e integrar telemetría vital en flujos de trabajo para seguridad, control de asistencia y seguimiento de activos.

Para obtener más información sobre Plaspy y cómo puede integrar dispositivos U01 en su implementación visite https://www.plaspy.com. Para conocer los comandos específicos más recientes y el comportamiento del firmware, verifique los detalles actuales de configuración en el sitio del fabricante https://www.xexun.com/

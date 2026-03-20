---
slug: /teltonika/fmb001/configuration
id: fmb001-configuration
sidebar_label: Configuration
title: Teltonika - FMB001 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Teltonika FMB001 con Plaspy, incluye ajustes de servidor y ejemplos de comandos
keywords:
  - Configuración Teltonika FMB001
  - Configuración FMB001
  - Configuración rastreador Plaspy
  - Teltonika Configurator
  - Teltonika FOTA WEB
  - Configuración rastreador OBD II
  - Configuración rastreo de vehículos
  - Ajustes servidor rastreador GPS
  - Rastreo de flotas Plaspy
  - Configuración FMB001 Plaspy
---

# Teltonika - Configuración del FMB001

Esta página reúne la información pública y práctica para preparar el rastreador Teltonika FMB001 para su uso con Plaspy. Contiene los ajustes de servidor más comunes y ejemplos de comandos empleados para apuntar el dispositivo a la plataforma Plaspy, manteniendo en cuenta las herramientas y el flujo de trabajo del fabricante.

Plaspy utiliza un conjunto de ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y el método de configuración que elija, como Teltonika Configurator, FOTA WEB o comandos por SMS. Use esta guía como referencia práctica y verifique detalles específicos del dispositivo en la documentación de Teltonika cuando sea necesario.

## Resumen de la configuración

Configurar el FMB001 para Plaspy consiste en asignar el dispositivo al endpoint de Plaspy, asegurarse de que los parámetros de transporte estén definidos y verificar que el equipo reporte su telemetría OBD y BLE a la plataforma. El objetivo es obtener reportes continuos y fiables de ubicación y telemetría del vehículo para visibilidad y monitoreo operativo.

- Apunte el servidor del rastreador a los valores de Plaspy para que el FMB001 envíe datos al endpoint correcto.
- Configure el APN y las credenciales celulares para que el dispositivo tenga conectividad mediante su enlace 2G GSM.
- Elija y confirme el protocolo de transporte (UDP o TCP) si el equipo solicita selección de transporte.
- Verifique que el dispositivo aparezca en Plaspy y envíe ubicación además de telemetría OBD y BLE.
- Use Teltonika Configurator o comandos SMS para aprovisionamiento masivo o configuración de unidades individuales según corresponda.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador para dispositivos compatibles

Estos son los valores públicos de Plaspy que deben aplicarse al configurar el FMB001 y al apuntar el dispositivo a la plataforma.

## Requisitos típicos antes de comenzar

- Un vehículo con puerto OBD II operativo para alimentar e integrar el FMB001
- Una SIM celular activa con datos habilitados y las credenciales APN correctas
- Acceso a Teltonika Configurator, Teltonika FOTA WEB o la posibilidad de enviar comandos SMS al dispositivo para configurarlo
- El IMEI o identificador del equipo para registro y verificación en Plaspy
- Conocimiento de la versión de firmware del dispositivo y de cualquier herramienta del fabricante necesaria para el aprovisionamiento
- Un plan claro para la selección de transporte (UDP o TCP) según la red y la preferencia del instalador

## Cómo se conecta este rastreador a Plaspy

El FMB001 se configura para reportar su posición GNSS y la telemetría derivada del OBD al endpoint y puerto compartidos de Plaspy. Plaspy ingiere esos mensajes y los asocia a su cuenta para seguimiento en vivo, alertas e informes.

- El dispositivo envía mensajes periódicos a d.plaspy.com en el puerto 8888
- Plaspy acepta conexiones por UDP o TCP y detecta automáticamente el protocolo del rastreador
- La telemetría OBD como odómetro real, nivel de combustible, kilometraje y RPM del motor se reenvía a Plaspy junto con la ubicación
- Los datos de sensores Bluetooth LE se incluyen en el mismo flujo del dispositivo cuando están soportados, permitiendo monitoreo de condiciones ambientales y de movimiento
- Una vez activo el reporte, el dispositivo se vuelve visible en Plaspy para seguimiento en tiempo real y análisis histórico

## Flujo de trabajo de configuración común

1. Acceda al método de configuración oficial de Teltonika que prefiera, como Teltonika Configurator o Teltonika FOTA WEB, o prepárese para usar comandos SMS para configurar una sola unidad.
2. Ingrese el endpoint de Plaspy como dominio d.plaspy.com o la IP 54.85.159.138 según lo requiera la herramienta.
3. Establezca el puerto de destino en 8888 para el flujo de datos del rastreador.
4. Elija UDP o TCP si la configuración del dispositivo solicita seleccionar el protocolo de transporte.
5. Configure o confirme APN, usuario APN y contraseña APN para que el rastreador tenga acceso a internet móvil.
6. Aplique o guarde la configuración en el dispositivo y reinícielo si la herramienta o el firmware lo requieren.
7. Valide que el equipo reporte a Plaspy revisando el estado del dispositivo y los mensajes recientes en la plataforma Plaspy.

## Ejemplo de comandos de configuración

El FMB001 admite el ajuste de parámetros vía SMS con los formatos de comando comunes de Teltonika. A continuación se muestra un ejemplo público de comando batch para parámetros básicos. Conserve los marcadores y sustitúyalos por los datos de su operador donde corresponda.

- Comando SMS único para establecer credenciales APN y servidor Plaspy

```text
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

Explicación de marcadores y campos
- [apn] = nombre del APN de su operador celular
- [apnu] = nombre de usuario del APN si su operador lo requiere, de lo contrario deje en blanco u omita si es compatible
- [apnp] = contraseña del APN si su operador la requiere, de lo contrario deje en blanco u omita si es compatible
- 2004 establece el dominio del servidor a d.plaspy.com
- 2005 establece el puerto del servidor a 8888
- 2006 normalmente controla el transporte o un valor índice en los conjuntos de parámetros de Teltonika; confirme su significado en la documentación de Teltonika o en la vista del Configurator

Nota: Este ejemplo es el comando público de estilo SMS tomado del ejemplo de configuración del fabricante. Si utiliza Teltonika Configurator o FOTA WEB, ingrese los mismos valores en los campos correspondientes de servidor y APN en lugar de enviar un SMS. La IP del servidor Plaspy 54.85.159.138 también puede emplearse en herramientas que requieran una IP en lugar de un dominio.

## Observaciones sobre la configuración

- Las diferencias de firmware y las variantes regionales del dispositivo pueden cambiar los ID de los parámetros y las opciones de configuración disponibles; verifique los números de parámetro en Teltonika Configurator según su versión de firmware.
- La configuración por SMS es compatible con el comando de ejemplo anterior, pero el aprovisionamiento a gran escala suele ser más sencillo con Teltonika Configurator o FOTA WEB.
- Elija UDP o TCP según la fiabilidad de la red y su preferencia operativa; Plaspy acepta ambos y detectará automáticamente el protocolo.
- Mantenga los marcadores [apn], [apnu] y [apnp] tal como se muestran y sustitúyalos por los valores reales de su operador al aplicar el comando.
- El FMB001 tiene información de estado de fin de vida (EOL) comunicada por el fabricante; confirme la disponibilidad actual y las recomendaciones de reemplazo con Teltonika antes de hacer despliegues a gran escala.

## Por qué usar Plaspy con esta configuración

Configurar el Teltonika FMB001 para reportar a Plaspy ofrece a las organizaciones una visibilidad unificada de la ubicación del vehículo, la telemetría OBD y los datos de sensores Bluetooth en una sola plataforma. Esta integración favorece el monitoreo operativo, la programación de mantenimiento basada en odómetro y RPM, y casos de uso extendidos como el monitoreo de condiciones de la carga con sensores BLE.

Para saber más sobre Plaspy y las integraciones de dispositivos compatibles visite https://www.plaspy.com. Para los métodos de configuración más actuales, la documentación de parámetros y la información de firmware consulte el sitio del fabricante https://www.teltonika-gps.com/

---
slug: /tzone/tz_avl05_3g/configuration
id: tz_avl05_3g-configuration
sidebar_label: Configuration
title: TZone - TZ-AVL05 3G Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el TZone TZ-AVL05 3G con ajustes de servidor Plaspy y ejemplos de comandos SMS
keywords:
  - Configuración TZone TZ-AVL05 3G
  - Instalación TZone TZ-AVL05 3G
  - Configuración de servidor TZ-AVL05 3G
  - TZ-AVL05 3G Plaspy
  - Configuración de rastreador Plaspy
  - Instalación rastreador GPS TZone
  - Seguimiento de vehículos TZ-AVL05 3G
  - Ajustes APN rastreador TZone
  - Configuración GPRS TZone
  - Comandos SMS TZ-AVL05 3G
---

# TZone - TZ-AVL05 3G Configuración

Esta página ofrece orientación pública para usar el rastreador GPS TZone TZ-AVL05 3G con la plataforma Plaspy. Reúne los ajustes de servidor prácticos y los comandos SMS de configuración más utilizados para preparar el dispositivo y que envíe ubicaciones y alarmas a Plaspy. Utilice esta guía junto con el manual del equipo y las instrucciones del proveedor al realizar una instalación.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, mientras que los pasos exactos por parte del fabricante pueden variar según la versión de firmware, la variante de hardware, el tipo de instalación y las herramientas de configuración del proveedor. El TZ-AVL05 3G admite configuración por SMS y por GPRS; los comandos que se muestran a continuación reflejan los comandos SMS públicos más comunes para la configuración GPRS y el reporte.

## Resumen de la configuración

El objetivo de este flujo de configuración es apuntar el TZ-AVL05 3G a Plaspy y verificar que reporte de forma regular y fiable. El proceso prepara el rastreador para sesiones de datos, asegura que el APN del operador sea correcto y habilita las subidas periódicas de posición para que el dispositivo sea visible en Plaspy.

- Configure el APN del operador móvil para que el rastreador pueda establecer una conexión GPRS.
- Defina el intervalo de reporte para que el dispositivo envíe actualizaciones periódicas de posición a Plaspy.
- Configure la dirección y el puerto del servidor GPRS para apuntar a Plaspy usando el mismo puerto compartido para todos los dispositivos.
- Active el modo GPRS para que el rastreador inicie sesiones de datos en lugar de usar solo SMS.
- Valide la conectividad y confirme que el dispositivo aparece en Plaspy con la frecuencia de actualizaciones esperada.
- Use SMS o la herramienta del fabricante para aplicar estos cambios según el firmware y el flujo de trabajo del instalador.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP may be used; choose the transport if the device requires selection
- Plaspy automatically detects the tracker protocol and all devices use the same port for reporting

## Requisitos previos antes de la configuración

- Un equipo TZ-AVL05 3G con alimentación y acceso a su interfaz de SMS o configuración
- Una tarjeta SIM activa con datos habilitados y el APN correcto del operador móvil
- Acceso a la guía oficial de configuración de TZone o al software instalador como referencia
- Capacidad básica para enviar SMS desde un teléfono móvil o una herramienta de configuración para mandar comandos
- Conocimiento de la contraseña del dispositivo si difiere del valor de fábrica usado en los comandos SMS
- Una cuenta en Plaspy o acceso de administrador en la plataforma para confirmar que el dispositivo aparece después de la configuración

## Cómo se conecta este rastreador a Plaspy

El TZ-AVL05 3G se configura para iniciar sesiones GPRS y enviar datos de posición y alarmas al endpoint y puerto compartidos del servidor Plaspy. Una vez configurado con el servidor Plaspy y el APN correcto, el rastreador transmitirá periódicamente actualizaciones de posición para que el dispositivo sea visible dentro de la plataforma.

- El rastreador abre una conexión a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El transporte de datos puede ser UDP o TCP según la configuración del equipo y la preferencia del instalador.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que el mismo endpoint y puerto se reutilizan entre dispositivos.
- Las actualizaciones periódicas de posición y las alarmas se envían a Plaspy conforme al intervalo de reporte configurado.
- Una configuración correcta permite monitorización operativa, reporte de eventos e historial de ubicaciones dentro de Plaspy.

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración de TZone, como los comandos SMS del equipo o la herramienta del proveedor, y revise el manual del dispositivo.
2. Introduzca el servidor Plaspy por nombre o IP usando d.plaspy.com o 54.85.159.138 en el campo de servidor.
3. Configure el puerto del servidor en 8888, que es el puerto compartido que usa Plaspy para todos los dispositivos.
4. Seleccione UDP o TCP si el dispositivo requiere elección de transporte.
5. Configure el APN del operador y cualquier nombre de usuario o contraseña del APN si su operador los requiere.
6. Aplique o guarde la configuración y, si es necesario, reinicie el equipo para activar los nuevos ajustes de red.
7. Valide que el rastreador reporte a Plaspy comprobando los datos entrantes o las actualizaciones de posición en la plataforma.

## Comandos de configuración ejemplo

El TZ-AVL05 3G puede configurarse enviando comandos SMS al dispositivo. Los comandos que siguen se suministran en el orden típicamente usado para la configuración GPRS inicial. Reemplace los marcadores de posición según sea necesario.

1. Establecer el APN del operador
   - Formato del comando (reemplace {{apn}} y otros marcadores según corresponda):
   ```sms
   *000000,011,{{apn}}{{#if apnu}},{{apnu}}{{/if}}{{#if apnp}},{{apnp}}{{/if}}#
   ```
   - Explicación: Sustituya {{apn}} por el APN de su operador. Si su APN requiere usuario o contraseña, provea {{apnu}} y {{apnp}} respectivamente. Si la contraseña del dispositivo se cambió desde el valor de fábrica, reemplace el 000000 inicial por la contraseña actual del equipo.

2. Establecer el intervalo de actualización a 60 segundos
   ```sms
   *000000,018,60,999#
   ```
   - Explicación: Esto configura el intervalo de reporte a 60 segundos; el parámetro 999 puede relacionarse con modos de reporte específicos según la documentación del fabricante.

3. Configurar el servidor GPRS a Plaspy (IP y puerto)
   ```sms
   *000000,015,0,54.85.159.138,8888#
   ```
   - Explicación: Este comando apunta el equipo a Plaspy usando la IP y el puerto. Puede sustituir d.plaspy.com por la IP si el firmware resuelve nombres de dominio de manera fiable.

4. Activar el modo GPRS
   ```sms
   *000000,016,1#
   ```
   - Explicación: Habilita el modo GPRS para que el equipo use el servidor GPRS configurado para el reporte.

Nota: La secuencia numérica inicial en estos ejemplos (000000) suele ser la contraseña del dispositivo usada en los comandos SMS. Si la contraseña de su equipo fue cambiada, utilice la contraseña actual. Mantenga los marcadores de posición como {{apn}}, {{apnu}} y {{apnp}} y sustitúyalos por los valores específicos del operador.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar el formato de los comandos y los parámetros soportados; confirme siempre los comandos en la documentación oficial de TZone para su versión de firmware.
- La configuración vía SMS suele estar soportada en este modelo; asegúrese de que la SIM pueda enviar y recibir SMS y tenga datos habilitados para GPRS.
- Al elegir TCP frente a UDP, considere la fiabilidad de la red y la configuración de la plataforma; Plaspy soporta ambos y detectará el protocolo automáticamente.
- Si el equipo admite usar un nombre de dominio en lugar de una IP, puede usar d.plaspy.com en lugar de 54.85.159.138, pero verifique la resolución DNS en el firmware del dispositivo.
- Mantenga un registro de cualquier cambio de contraseña en el equipo, ya que los comandos SMS normalmente requieren el prefijo con la contraseña actual del dispositivo.

## Por qué usar Plaspy con esta configuración

Configurar el TZ-AVL05 3G para reportar a Plaspy le brinda al operador un camino sencillo hacia la visibilidad centralizada de ubicaciones, la monitorización de alarmas y la supervisión de flotas. Usar los ajustes de servidor compartidos de Plaspy simplifica las implementaciones porque la plataforma emplea el mismo puerto en todos los equipos y detecta automáticamente el protocolo del rastreador, reduciendo el trabajo de selección de protocolo por dispositivo.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the latest device specific details, firmware commands, and manufacturer procedures verify information on the official TZone site http://www.tzonedigital.com/.

---
slug: /tzone/tz_bc08/configuration
id: tz_bc08-configuration
sidebar_label: Configuration
title: TZone - TZ-BC08 Configuration
sidebar_class_name: menu_item_tracker
description: Configurar el TZone TZ-BC08 para usarlo con Plaspy mediante SMS y ajustes de servidor públicos para rastreo confiable
keywords:
  - Configuración TZone TZ-BC08
  - Instalación TZone TZ-BC08
  - Configuración SMS TZ-BC08
  - Configuración GPRS TZ-BC08
  - Configuración servidor Plaspy
  - Configuración rastreador Plaspy
  - Guía configuración rastreador GPS
  - Ajustes servidor rastreador
  - Instalación plataforma de rastreo
  - Detección de protocolo de rastreador
---

# TZone - TZ-BC08: Configuración

Esta página documenta el contexto público de configuración para usar el TZone TZ-BC08 con Plaspy. Se concentra en los ajustes prácticos y los comandos SMS publicados que permiten dirigir unidades TZ-BC08 compatibles hacia Plaspy, de modo que su dispositivo pueda reportar datos de ubicación a la plataforma. Use esto como referencia práctica junto con la documentación oficial del fabricante.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El TZ-BC08 puede configurarse mediante comandos SMS para establecer el APN, el intervalo de reporte y la dirección del servidor GPRS para que pueda comunicarse con el endpoint centralizado de Plaspy.

## Resumen de la configuración

Esta configuración prepara el TZ-BC08 para enviar actualizaciones periódicas de ubicación y estado a la plataforma Plaspy. Los comandos SMS públicos que se muestran a continuación demuestran cómo definir el APN del operador móvil, el intervalo de reporte, el servidor GPRS y el modo GPRS necesario para el reporte por red móvil.

- Configurar el APN del operador móvil para que el dispositivo pueda usar datos móviles para el reporte GPRS.
- Establecer el intervalo de reporte para controlar la frecuencia de envío de actualizaciones de posición.
- Apuntar el rastreador al endpoint del servidor de Plaspy para que los mensajes lleguen a su cuenta.
- Activar el modo GPRS para que el dispositivo use datos móviles y se comunique con Plaspy.
- Validar la conectividad y la visibilidad del dispositivo en Plaspy tras aplicar los ajustes.

## Ajustes del servidor Plaspy

Al configurar el TZ-BC08 para Plaspy, utilice los siguientes ajustes públicos del servidor exactamente como se muestran:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol for incoming connections

Plaspy usa el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo correcto, por lo que apuntar el rastreador a d.plaspy.com o a la IP del servidor en el puerto 8888 suele ser suficiente en la mayoría de los casos.

## Requisitos típicos antes de la instalación

- Asegúrese de que el dispositivo tenga alimentación (batería instalada o alimentación externa) y esté listo para aceptar comandos SMS.
- Una tarjeta SIM funcional con datos y capacidad de SMS instalada en el dispositivo y un APN activo para el operador móvil.
- Acceso a un teléfono o a un gateway SMS capaz de enviar los comandos de configuración al dispositivo.
- Conocimiento de la contraseña de gestión del dispositivo usada en los comandos SMS (los ejemplos usan 000000 como contraseña).
- Acceso a la documentación oficial de TZone o a la herramienta de configuración para referencia y notas específicas de firmware.
- Una cuenta Plaspy lista para recibir nuevos dispositivos y verificar el reporte del equipo.

## Cómo se conecta este rastreador a Plaspy

El TZ-BC08 se configura para reportar al endpoint y puerto compartidos de Plaspy, de modo que las actualizaciones de ubicación y estado lleguen a su cuenta de Plaspy. Una vez que el APN y los valores de servidor estén establecidos y el modo GPRS activado, el dispositivo usará la red móvil para enviar actualizaciones.

- El dispositivo envía actualizaciones periódicas a Plaspy según el intervalo configurado.
- El rastreador utiliza GPRS (datos móviles) para conectarse a Plaspy usando el APN y los ajustes del servidor configurados.
- Los mensajes se envían a d.plaspy.com o a la IP del servidor 54.85.159.138 en el puerto 8888.
- Seleccione UDP o TCP en el dispositivo si requiere elegir transporte; Plaspy aceptará ambos y detectará el protocolo automáticamente.
- Plaspy analiza los mensajes entrantes y muestra el estado y la posición del dispositivo en la plataforma.

## Flujo de configuración habitual

1. Acceda al método de configuración oficial del fabricante o prepare el envío de comandos SMS según lo documente TZone.
2. Configure el APN del operador para la SIM para que el dispositivo pueda usar GPRS para datos.
3. Ingrese el dominio del servidor de Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en la configuración del dispositivo.
4. Establezca el puerto 8888 para la conexión al servidor.
5. Elija UDP o TCP si el dispositivo requiere una selección de transporte.
6. Aplique o guarde la configuración y reinicie el dispositivo si el fabricante lo exige.
7. Valide que el dispositivo reporte a Plaspy comprobando la conectividad del equipo y las actualizaciones de posición recientes en su cuenta Plaspy.

Si utiliza configuración por SMS, siga el orden de acciones en los comandos de ejemplo: APN, intervalo de reporte, dirección del servidor y, finalmente, habilitar el modo GPRS.

## Comandos de configuración de ejemplo

Para configurar el TZ-BC08 vía SMS, envíe los siguientes comandos en el orden indicado. Estos comandos públicos aparecen en la documentación de configuración del dispositivo. Cada comando usa la contraseña de gestión del dispositivo al inicio (el ejemplo muestra la contraseña 000000).

1. Establecer el APN del operador
- Forma básica sin usuario ni contraseña:
```text
*000000,011,{{apn}}#
```
- Si su operador requiere usuario y contraseña del APN, inclúyalos como marcadores:
```text
*000000,011,{{apn}},{{apnu}},{{apnp}}#
```
Explicación: {{apn}} es el APN del operador móvil. {{apnu}} y {{apnp}} son marcadores opcionales para usuario y contraseña del APN.

2. Establecer el intervalo de actualización a 60 segundos
```text
*000000,018,60,999#
```
Explicación: Esto configura el intervalo de reporte a 60 segundos. El parámetro final (999) sigue la sintaxis del comando publicada por el fabricante.

3. Configurar el servidor GPRS hacia Plaspy
```text
*000000,015,0,54.85.159.138,8888#
```
Explicación: Este comando establece la IP y el puerto del servidor. Puede usar el dominio d.plaspy.com en lugar de la IP si el dispositivo acepta entradas de dominio.

4. Activar modo GPRS
```text
*000000,016,1#
```
Explicación: Habilita el modo GPRS para que el dispositivo use datos móviles y envíe actualizaciones al servidor configurado.

Notas sobre los comandos
- El "000000" inicial en los ejemplos es la contraseña de gestión mostrada en los comandos públicos. Reemplácela por la contraseña de su dispositivo si es distinta.
- Mantenga los marcadores como {{apn}}, {{apnu}} y {{apnp}} al componer los SMS; sustitúyalos por los valores de su operador.
- Envíe los comandos en el orden mostrado para la configuración inicial: APN, intervalo, servidor y finalmente activación de GPRS.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis de los comandos o los parámetros disponibles; verifique siempre los comandos contra el manual del dispositivo correspondiente a su unidad.
- El TZ-BC08 puede configurarse por SMS como se muestra arriba; algunos instaladores también ofrecen alternativas por USB, Bluetooth o herramientas de software según la versión del equipo — consulte la documentación del fabricante para opciones adicionales.
- Elija UDP o TCP según las necesidades de su despliegue; Plaspy soporta ambos y detectará automáticamente el protocolo entrante.
- Dado que Plaspy usa el mismo puerto para todos los dispositivos, configurar correctamente el puerto 8888 es crítico para la entrega al plataforma.
- Mantenga seguras las credenciales de APN y las contraseñas del dispositivo y documente los ajustes originales antes de realizar cambios.

## Por qué usar Plaspy con esta configuración

Usar el TZ-BC08 con Plaspy centraliza los datos del dispositivo y facilita el monitoreo de ubicación, conectividad y comportamiento de reporte desde una sola plataforma. Configurar el equipo para apuntar al endpoint compartido de Plaspy simplifica la incorporación, ya que el mismo puerto y la detección automática de protocolo aplican a los dispositivos compatibles.

Para saber más sobre Plaspy e integraciones soportadas, visite https://www.plaspy.com. Para obtener los pasos de configuración más recientes específicos del dispositivo, el comportamiento del firmware y detalles oficiales del TZone TZ-BC08, verifique la información en el sitio del fabricante http://www.tzonedigital.com/ ya que los métodos de configuración y el firmware pueden cambiar con el tiempo.

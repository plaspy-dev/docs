---
slug: /xexun/tk_102/configuration
id: tk_102-configuration
sidebar_label: Configuration
title: Xexun - TK-102 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar un rastreador Xexun TK-102 con Plaspy, incluidos servidores y ejemplos de comandos SMS
keywords:
  - Configuración Xexun TK-102
  - Instalación Xexun TK-102
  - Configuración TK-102 Plaspy
  - Instalación rastreador GPS TK-102
  - Ajustes de servidor Xexun
  - Configuración de rastreadores Plaspy
  - Guía de configuración rastreadores GPS
  - Configuración seguimiento de vehículos TK-102
  - Comandos SMS TK-102
  - Guía de configuración Xexun
---

# Xexun - Configuración TK-102

Esta página reúne la información pública y práctica necesaria para apuntar un rastreador Xexun TK-102 a Plaspy para seguimiento en tiempo real y envío de datos. Incluye, cuando aplica, ejemplos de comandos SMS para establecer el APN y los valores de servidor.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos de configuración en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, así que use esta guía como referencia práctica y verifique los detalles específicos del equipo con la documentación oficial de Xexun cuando sea necesario.

## Resumen de la configuración

Este proceso prepara el TK-102 para comunicarse con Plaspy configurando los parámetros de acceso a la red y el destino de reporte por GPRS. El objetivo es asegurar que el equipo pueda alcanzar el servidor de Plaspy y que los intervalos y modos de reporte sean apropiados para sus necesidades de monitoreo.

- Configure el APN y el modo GPRS para que el equipo tenga conectividad de datos y pueda enviar reportes a Plaspy.
- Establezca el servidor de reporte apuntando al nombre de host o IP de Plaspy y al puerto compartido usado por todos los dispositivos.
- Seleccione el modo de transporte si el firmware del dispositivo lo requiere, UDP o TCP.
- Opcionalmente restaure los valores de fábrica o defina una contraseña del equipo antes de aplicar los ajustes del servidor.
- Valide la conectividad y confirme que el rastreador aparece en Plaspy después de guardar los cambios.

## Ajustes del servidor Plaspy

Al configurar el TK-102 para su uso con Plaspy, utilice los siguientes ajustes públicos exactamente como se indican:

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP depending on device selection  
- Plaspy automatically detects the tracker protocol  
- Note that all devices in Plaspy use the same port

## Requisitos previos típicos

- Un equipo TK-102 con batería cargada, alimentación funcional y una SIM válida con datos habilitados para reportes GPRS.
- APN, nombre de usuario APN y contraseña APN provistos por el operador móvil cuando sean requeridos.
- Acceso al método de configuración soportado por la unidad, como comandos SMS o una herramienta de configuración del fabricante.
- El IMEI o número identificador del dispositivo para asociar el rastreador a su cuenta Plaspy.
- Una cuenta en Plaspy y permisos para agregar o provisionar dispositivos en la plataforma.
- Si usa SMS para configurar, un teléfono capaz de enviar SMS al equipo y la contraseña del dispositivo en caso de que los comandos la requieran.

## Cómo se conecta este rastreador a Plaspy

El TK-102 se configura para enviar ubicaciones y datos de reporte al endpoint y puerto compartidos de Plaspy, de modo que la plataforma pueda recibir la telemetría y mostrarla. Plaspy acepta las conexiones entrantes y emplea detección automática de protocolo para interpretar los mensajes del rastreador.

- El equipo utiliza GPRS para enviar datos al dominio o IP de Plaspy en el puerto 8888.
- Puede configurar el servidor en d.plaspy.com o directamente en 54.85.159.138 como dirección.
- El transporte puede ser UDP o TCP según la configuración del rastreador y las opciones del firmware.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no es necesario seleccionar manualmente el protocolo en el servidor.
- Los datos reportados por el equipo se muestran en Plaspy para seguimiento, notificaciones de eventos y monitoreo operativo.
- El TK-102 puede mantener copias locales en su tarjeta SD mientras reporta a Plaspy por GPRS.

## Flujo de configuración típico

1. Acceda al método de configuración oficial del fabricante o a su software según la documentación de Xexun, o prepárese para enviar comandos SMS si el equipo soporta configuración por SMS.  
2. Configure el APN del rastreador usando la cadena APN de su operador para habilitar conectividad GPRS.  
3. Ingrese el servidor de Plaspy usando d.plaspy.com o 54.85.159.138 como dirección.  
4. Ajuste el puerto a 8888, que es el utilizado por todos los dispositivos en Plaspy.  
5. Seleccione UDP o TCP si el firmware del equipo requiere elegir un transporte.  
6. Aplique o guarde la configuración en el rastreador y reinícielo si el firmware lo exige.  
7. Verifique que el equipo reporte a Plaspy y que aparezca en su cuenta o en la lista de dispositivos.

## Comandos de configuración de ejemplo

El TK-102 suele aceptar comandos SMS para su configuración. A continuación se muestran ejemplos públicos en el orden que presenta la documentación del dispositivo. Los comandos de ejemplo usan la contraseña predeterminada del equipo 123456 cuando se requiere. Sustituya los marcadores de posición y parámetros según su operador y entorno.

- Optional initial reset to factory settings
```text
begin123456
```
- Set the operator APN
```text
apn123456 {{apn}}
```
- Set the APN username if required
```text
apnuser123456 {{apnu}}
```
- Set the APN password if required
```text
apnpasswd123456 {{apnp}}
```
- Set the GPRS server to Plaspy using the public IP and port
```text
adminip123456 54.85.159.138 8888
```
- Set the GPRS mode (enable GPRS reporting)
```text
gprsmode123456
```
- Set the update interval to 60 seconds
```text
t060s***n123456
```

Notas sobre marcadores de posición y la contraseña
- {{apn}} es la cadena del punto de acceso (APN) del operador móvil que debe proporcionar.
- {{apnu}} y {{apnp}} son el nombre de usuario y la contraseña del APN cuando su operador los requiera.
- 123456 en los ejemplos es la contraseña predeterminada del dispositivo usada en los ejemplos públicos. Si su equipo tiene otra contraseña, use ese valor en lugar de 123456.

## Notas de configuración

- Aquí se muestra la configuración por SMS porque el TK-102 soporta configuración mediante SMS en la documentación pública. Algunos instaladores prefieren las herramientas de PC del fabricante o interfaces de configuración cuando están disponibles.
- Las versiones de firmware y las revisiones de hardware pueden cambiar el formato de comandos o los pasos requeridos. Si un comando falla, revise primero la documentación del firmware del dispositivo.
- Cuando esté disponible, elija UDP o TCP según la fiabilidad de la red y las recomendaciones de su operador. Plaspy acepta ambos y detecta automáticamente el protocolo.
- Siempre confirme los valores de APN con el operador móvil y verifique que el dispositivo tenga conectividad de datos GPRS antes de depender del reporte en la plataforma.
- Después de aplicar los ajustes, espere a que el equipo se registre en la red móvil y luego verifique el reporte en Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el TK-102 con Plaspy ofrece una forma directa de centralizar el reporte de ubicación y la visibilidad de eventos para flotas, activos o rastreadores personales. Con los ajustes de servidor compartidos de Plaspy puede estandarizar la configuración de equipos en sus despliegues y confiar en Plaspy para interpretar y mostrar los datos entrantes del rastreador.

Para más información sobre Plaspy visite https://www.plaspy.com. Para obtener los comandos específicos más recientes, notas de firmware y documentación del fabricante, verifique los detalles en el sitio oficial de Xexun https://www.xexun.com/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.

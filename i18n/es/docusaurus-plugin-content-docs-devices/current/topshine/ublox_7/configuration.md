---
slug: /topshine/ublox_7/configuration
id: ublox_7-configuration
sidebar_label: Configuration
title: TopShine - Ublox 7 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración y servidor para TopShine Ublox 7 con Plaspy
keywords:
  - Configuración TopShine Ublox 7
  - Configuración inicial TopShine Ublox 7
  - Configuración de servidor TopShine Ublox 7
  - Ublox 7 Plaspy
  - Configuración rastreador GPS Ublox 7
  - Configuración rastreador TopShine
  - Integración rastreador GPS Plaspy
  - Configuración GPRS Ublox 7
  - Configuración TopShine MT06
  - Configuración rastreador Plaspy
---

# TopShine - Ublox 7: Configuración

Esta página documenta el contexto público de configuración para usar el rastreador TopShine Ublox 7 (MT06) con Plaspy. Reúne los ajustes prácticos de servidor y los comandos SMS/GPRS que se emplean con más frecuencia para preparar la unidad y garantizar comunicaciones confiables con la plataforma Plaspy.

Plaspy usa ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Cuando están disponibles, aquí se incluyen los comandos SMS del fabricante y se explican los marcadores de posición como los parámetros APN y la contraseña predeterminada del dispositivo.

## Resumen de configuración

El objetivo de la configuración es apuntar el Ublox 7 a Plaspy, verificar la conectividad y habilitar el reporte de posición y eventos para que el dispositivo sea visible en su cuenta de Plaspy. Para el Ublox 7 Mini el fabricante proporciona comandos por SMS para ajustar el ID del dispositivo, el APN, el servidor GPRS, el modo de transporte y el intervalo de reporte.

- Configurar el APN del operador y las credenciales APN opcionales para que el dispositivo pueda usar GPRS.  
- Establecer la dirección y el puerto del servidor GPRS para que el rastreador envíe datos a Plaspy.  
- Elegir el transporte (UDP o TCP) si es necesario y habilitar la operación GPRS para reporte en línea.  
- Validar el IMEI del equipo y el ID del dispositivo para que coincidan con los registros en la plataforma de rastreo.  
- Confirmar que el rastreador reporte al endpoint compartido de Plaspy y que sea visible en la plataforma.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888 (Plaspy uses the same port for all supported devices)  
- Transport support for UDP or TCP (the device may be configured to use either)  
- Plaspy automatically detects the tracker protocol when the device connects

Estos valores corresponden al endpoint público de ingestión de Plaspy y deben ingresarse en el dispositivo o enviarse mediante el método de configuración correspondiente para que el Ublox 7 reporte a Plaspy.

## Requisitos típicos antes de la configuración

- Alimentar el rastreador desde la batería del vehículo o una fuente de banco estable para que complete los pasos de configuración.  
- Tener una SIM operativa que soporte GPRS y con el APN configurado para el operador móvil.  
- Acceder al IMEI del dispositivo para identificar el rastreador y formar las entradas de ID en la plataforma.  
- Poder enviar comandos SMS al rastreador o usar la herramienta de configuración del fabricante según sea necesario.  
- Conocimientos básicos de la contraseña predeterminada del dispositivo y de cualquier restricción de seguridad para la configuración.  
- Una cuenta de Plaspy lista para recibir y validar el dispositivo una vez que comience a reportar.

## Cómo este rastreador se conecta a Plaspy

El Ublox 7 Mini puede enviar GNSS y telemetría a Plaspy usando SMS o GPRS sobre TCP/UDP. Cuando se utiliza GPRS, el dispositivo se configura para apuntar al endpoint y puerto compartidos de Plaspy, de modo que los datos entrantes se atribuyen y parsean automáticamente.

- El dispositivo envía posición y telemetría al endpoint del servidor Plaspy (d.plaspy.com o 54.85.159.138) en el puerto 8888.  
- Plaspy detecta automáticamente el protocolo del rastreador e ingiere los mensajes sin exigir un puerto personalizado por dispositivo.  
- Eventos como encendido/apagado de ignición, exceso de velocidad y alarmas se reenvían a Plaspy para cartografía y alertas.  
- Usar GPRS (TCP/UDP) ofrece actualizaciones en tiempo real; SMS puede emplearse para flujos más sencillos o como respaldo.  
- Una vez activo el reporte, Plaspy muestra ubicación en vivo, historial y telemetría para monitoreo operativo.

## Flujo de configuración típico

1. Acceda al método oficial de configuración del fabricante o al software, o prepárese para enviar comandos SMS según documenta TopShine.  
2. Confirme el IMEI del dispositivo y anote los dígitos necesarios para configurar el ID del equipo.  
3. Ingrese d.plaspy.com o 54.85.159.138 como la dirección del servidor GPRS en la configuración del dispositivo.  
4. Establezca el puerto 8888 como puerto del servidor GPRS (Plaspy usa el mismo puerto para todos los dispositivos).  
5. Elija UDP o TCP como transporte si el dispositivo requiere seleccionar uno.  
6. Configure el APN del operador y el nombre de usuario/contraseña APN que requiera la SIM.  
7. Aplique o guarde la configuración y reinicie el dispositivo si es necesario para activar GPRS.  
8. Verifique que el rastreador reporte a Plaspy y aparezca en la plataforma como se espera.

## Ejemplos de comandos de configuración

El fabricante provee comandos por SMS para la configuración pública. La contraseña predeterminada del rastreador en estos ejemplos es 000000. Conserve los marcadores de posición al enviar comandos desde su herramienta SMS.

1. Optional initial factory reset (use only when required)
```
W000000,990,099###
```
- Resetea el dispositivo a los valores de fábrica. Etiquete este paso como opcional y realícelo sólo cuando sea necesario.

2. Set the device ID (the manufacturer instruction uses the first 14 IMEI digits; confirm IMEI handling for your deployment)
```
W000000,010,{{('XXXXXXXXXXXXXX' + imei.substring(0,14)).slice(-14)}}
```
- Reemplace la plantilla por el valor real de 14 dígitos derivado del IMEI del dispositivo. Confirme cómo espera el dispositivo la cadena de ID; algunas implementaciones usan el IMEI completo para el mapeo en la plataforma.

3. Set the operator APN (use placeholders as needed)
```
W000000,011,[apn],[apnu],[apnp]
```
- [apn] = APN del operador móvil  
- [apnu] = nombre de usuario APN (opcional)  
- [apnp] = contraseña APN (opcional)  
- Si no se requiere usuario/contraseña, omita los campos opcionales según la sintaxis del dispositivo.

4. Set the GPRS server to Plaspy (public IP and port shown)
```
W000000,012,54.85.159.138,8888
```
- En su lugar puede configurar el servidor como d.plaspy.com si el dispositivo acepta nombres de dominio. Tanto el dominio como la IP son aceptables; asegúrese de usar el puerto 8888.

5. Switch device to GPRS mode
```
W000000,013,2
```
- Comando para habilitar el modo de reporte GPRS según las instrucciones del fabricante.

6. Set the position update interval
```
W000000,014,6
```
- Comando de ejemplo para intervalo; verifique el significado del valor (segundos, minutos o un código) en la documentación del fabricante.

7. Query device IMEI for verification
```
W000000,601
```
- Use este comando para solicitar el IMEI del dispositivo al rastreador.

Notas sobre marcadores de posición y valores predeterminados:
- Los ejemplos SMS anteriores usan la contraseña predeterminada del dispositivo 000000 según el fragmento público del fabricante. Reemplace la contraseña si su dispositivo ha sido modificada.  
- Mantenga el orden de comandos al seguir el flujo de ejemplo: ID/APN/servidor/modo/intervalo, y verifique cada paso mediante las respuestas del dispositivo.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis de comandos o los parámetros admitidos; siempre verifique el conjunto de comandos para su versión exacta del dispositivo.  
- El Ublox 7 admite métodos de configuración por SMS y GPRS; los comandos SMS se usan con frecuencia cuando no hay una herramienta de software disponible.  
- Al elegir TCP frente a UDP, considere la estabilidad de la red y las características de entrega de datos; Plaspy acepta ambos y detecta el protocolo automáticamente.  
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos; esto simplifica la configuración del servidor en el lado del rastreador.  
- Si el dispositivo acepta nombres de dominio, puede usar d.plaspy.com en lugar de la dirección IP; confirme la resolución DNS en la red del rastreador.

## Por qué usar Plaspy con esta configuración

Usar el Ublox 7 Mini con Plaspy proporciona visibilidad sobre vehículos pequeños y activos con un rastreador compacto y robusto que soporta comunicación por protocolo abierto. Al configurar el rastreador para que reporte a Plaspy, habilita ubicación en tiempo real, alarmas y telemetría operativa que los operadores de flota pueden usar para monitoreo, alertas e informes históricos.

Para obtener más información sobre Plaspy y cómo ingiere los datos del rastreador, visite https://www.plaspy.com. Para los comandos de configuración específicos más recientes, notas de firmware y especificaciones técnicas detalladas, verifique la información vigente en el sitio del fabricante https://www.gztopshine.com/ ya que los métodos de instalación y el comportamiento del dispositivo pueden cambiar con el tiempo.

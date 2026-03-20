---
slug: /condor/cm_311/configuration
id: cm_311-configuration
sidebar_label: Configuration
title: Condor - CM-311 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Condor CM-311 con parámetros de servidor Plaspy, comandos SMS y pasos de verificación
keywords:
  - Configuración Condor CM-311
  - Configuración CM-311
  - Configuración CM-311 Plaspy
  - Configuración rastreador GPS Condor
  - Ajustes servidor CM-311
  - Configuración rastreador GPS para mascotas
  - Configuración rastreador Plaspy
  - Comandos SMS Condor CM-311
  - Configuración servidor rastreador GPS
  - Rastreadores compatibles con Plaspy
---

# Condor - Configuración CM-311

Esta página documenta el contexto público de configuración para usar el rastreador Condor CM-311 con Plaspy. Reúne los ajustes de servidor prácticos y los comandos SMS documentados que se usan comúnmente para preparar un CM-311 y que reporte a la plataforma Plaspy. Use esta guía para comprender lo que Plaspy espera y cómo puede configurar el CM-311 para comunicarse con los servidores de Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo informa. Los pasos exactos en el lado del fabricante para configurar el CM-311 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Los comandos de ejemplo que siguen reflejan patrones públicos de configuración por SMS del CM-311 y deben validarse con el equipo que tenga a la mano.

## Resumen de la configuración

Este proceso prepara el CM-311 para enviar actualizaciones de ubicación y telemetría básica a la plataforma Plaspy, de modo que el dispositivo aparezca en su cuenta Plaspy para seguimiento en vivo y reproducción de historial.

- Configure el APN del dispositivo para que pueda acceder a la red de datos celulares necesaria para reportes GPRS.
- Establezca el identificador o alias del equipo para reconocer la instancia CM-311 en Plaspy.
- Apunte el rastreador al endpoint y puerto del servidor Plaspy para que los reportes lleguen al servicio.
- Ajuste el intervalo de reporte y el modo GPRS según sus necesidades de seguimiento y expectativas de batería.
- Verifique la configuración usando el SMS de verificación del dispositivo para confirmar que el rastreador está llegando a Plaspy.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol when the device connects

Estos valores son la información pública del endpoint de Plaspy que necesita al configurar el CM-311. Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles y detectará automáticamente el protocolo.

## Requisitos típicos antes de empezar

- Un CM-311 cargado y operativo con capacidad para enviar y recibir mensajes SMS
- Una SIM celular activa con APN configurado para acceso de datos
- El número IMEI del dispositivo disponible para crear alias o llevar registro
- Acceso al método de configuración del fabricante, como comandos SMS o herramienta del proveedor
- Conocimiento básico de la contraseña predeterminada del equipo cuando sea requerida para la configuración
- Una cuenta Plaspy lista para recibir y mostrar el dispositivo cuando este informe

## Cómo se conecta este rastreador a Plaspy

El CM-311 se configura para reportar actualizaciones de ubicación a través de la red celular al endpoint y puerto del servidor Plaspy. Una vez configurado, el rastreador abre periódicamente una sesión GPRS/TCP o GPRS/UDP hacia el servidor Plaspy y envía reportes de posición que la plataforma procesa y muestra.

- El dispositivo se configura para enviar reportes GPRS a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888
- Puede elegir transporte UDP o TCP en el dispositivo cuando el rastreador requiera selección de transporte
- Plaspy recibe los mensajes entrantes y detecta automáticamente el protocolo del rastreador
- Los reportes se vuelven visibles en Plaspy para seguimiento en vivo, historial de rutas y monitoreo básico de telemetría
- Comandos de validación pueden usarse para confirmar que el rastreador está conectándose al endpoint de Plaspy

## Flujo típico de configuración

1. Acceda al método oficial de configuración del Condor CM-311, normalmente mediante comandos SMS según indique el fabricante o mediante la herramienta del proveedor.
2. Configure el APN del equipo usando los valores del operador para que pueda usar GPRS.
3. Introduzca el servidor de Plaspy como d.plaspy.com o la IP del servidor 54.85.159.138.
4. Establezca el puerto del servidor en 8888.
5. Elija el transporte UDP o TCP si el dispositivo exige selección de transporte.
6. Aplique o guarde la configuración y reinicie el dispositivo si el rastreador lo requiere.
7. Valide que el dispositivo reporte a Plaspy y aparezca en su cuenta Plaspy o utilice el SMS de verificación provisto.

Si utiliza el flujo por SMS del CM-311 que se muestra a continuación, siga el orden de los comandos y sustituya su APN e identificadores según sea necesario.

## Ejemplo de comandos de configuración

El CM-311 admite configuración mediante SMS. Los siguientes comandos de ejemplo se toman del patrón público de configuración del CM-311. La contraseña predeterminada del dispositivo que se muestra en estos ejemplos es 0000. Envíe cada línea como un SMS al número del dispositivo (la SIM del equipo). Preserve los marcadores de posición y reemplácelos con sus valores reales.

1. Configure el APN del operador (reemplazar [apn] por el APN de su operador; incluya [apnu] y [apnp] solo si su operador exige usuario y contraseña del APN)
```text
APN,0000,[apn]
```
O con usuario y contraseña
```text
APN,0000,[apn],[apnu],[apnp]
```

2. Defina un identificador alias de 5 dígitos para el equipo. Use los últimos 5 dígitos del IMEI para crear este alias. Reemplace \<last5imei> con ese valor e incluya la almohadilla final
```text
ALIAS,0000,<last5imei>#
```
Ejemplo explicativo: si el IMEI termina en 54321 entonces envíe
```text
ALIAS,0000,54321#
```

3. Configure la zona horaria a UTC 0
```text
GMT,0000,-0#
```

4. Establezca el servidor GPRS al endpoint de Plaspy por IP con puerto y banderas de transporte. Este ejemplo usa la IP y el puerto de Plaspy y selecciona UDP como bandera de transporte cuando sea requerido
```text
SERVIDOR,0000,54.85.159.138,8888,U,A#
```
Notas sobre esa línea:
- 54.85.159.138 es la IP del servidor Plaspy
- 8888 es el puerto de Plaspy usado para todos los dispositivos
- La U aquí indica transporte UDP en la sintaxis de este dispositivo. Use el valor correspondiente para TCP si el dispositivo lo requiere.

5. Establezca el intervalo de actualización de posición a cada 1 minuto (unidades de intervalo específicas del dispositivo)
```text
INTERVALO,0000,M,6#
```

6. Active el modo GPRS
```text
GPRS,0000,A#
```

7. Verifique la conexión y los ajustes con el comando de verificación del dispositivo
```text
CONEXION,0000#
```

Importante:
- La contraseña numérica 0000 en los ejemplos es la contraseña predeterminada del dispositivo mostrada en el contenido público de configuración. Si la contraseña del equipo ha sido cambiada, use la contraseña actual.
- Reemplace marcadores como [apn], [apnu] y [apnp] con los valores de su operador. Use \<last5imei> tal y como se describió al establecer el alias.

## Notas de configuración

- Los ejemplos del CM-311 arriba usan comandos SMS tal como aparecen en la configuración pública del modelo. La configuración vía SMS es un método común para esta familia de dispositivos.
- Elija transporte UDP o TCP según la sintaxis del dispositivo y las condiciones de red. Plaspy acepta cualquiera de los dos transportes en el puerto 8888 y detectará automáticamente los detalles del protocolo.
- Las variaciones de firmware y regionales pueden cambiar la sintaxis exacta de los comandos SMS o los campos disponibles. Siempre confirme la sintaxis de los comandos con la versión del dispositivo que tenga.
- Todos los dispositivos en Plaspy usan el mismo puerto y Plaspy detectará automáticamente el protocolo del rastreador cuando el dispositivo informe.
- Confirme las credenciales APN con su operador de la SIM; algunos operadores requieren usuario y contraseña y otros aceptan solo la cadena APN.

## Por qué usar Plaspy con esta configuración

Usar el CM-311 con Plaspy permite a dueños y cuidadores de mascotas obtener visibilidad constante en la nube de las actualizaciones de ubicación y el historial de rutas. El diseño compacto y el reporte celular del CM-311, combinados con la infraestructura de servidor compartida de Plaspy, permiten que los dispositivos individuales aparezcan dentro del mismo marco de telemetría y monitoreo que soporta despliegues de seguimiento a mayor escala.

To learn more about Plaspy and how it handles device integration, visit https://www.plaspy.com. For the latest, device specific commands, firmware notes, and any manufacturer changes, verify configuration steps on the official Condor documentation at https://condorskyseeker.com/ as manufacturer setup methods and firmware behavior can change over time.

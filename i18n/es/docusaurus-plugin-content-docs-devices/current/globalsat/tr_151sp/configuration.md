---
slug: /globalsat/tr_151sp/configuration
id: tr_151sp-configuration
sidebar_label: Configuration
title: GlobalSat - TR-151SP Configuration
sidebar_class_name: menu_item_tracker
description: Guía práctica de configuración del GlobalSat TR-151SP para integrarlo con Plaspy, incluye servidor y comandos SMS
keywords:
  - configuración GlobalSat TR-151SP
  - configuración inicial GlobalSat TR-151SP
  - TR-151SP Plaspy
  - configuración rastreador Plaspy
  - configuración rastreador GPS
  - comandos SMS TR-151SP
  - configuración seguimiento activos
  - configuración seguimiento vehículos
  - integración plataforma de seguimiento
  - configuración servidor TR-151SP
---

# GlobalSat - Configuración del TR-151SP

En esta página se describe el contexto público de configuración para usar el rastreador GlobalSat TR-151SP con la plataforma Plaspy. El contenido se concentra en los pasos y comandos de uso público que permiten apuntar el TR-151SP a Plaspy para que el equipo informe ubicación y estado. El TR-151SP es un rastreador GPS/GSM/GPRS de larga duración de batería y admite configuración por SMS, como muestran los ejemplos públicos de comandos más abajo.

Plaspy utiliza ajustes de servidor compartidos para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando los equipos se conectan. Los pasos exactos en el lado del fabricante pueden variar según firmware, revisión de hardware, tipo de instalación y las herramientas de configuración del proveedor. Utilice las indicaciones aquí junto con la documentación oficial de GlobalSat y las notas del instalador para la revisión de su dispositivo.

## Resumen de configuración

El objetivo de este proceso es preparar el TR-151SP para que se comunique de forma confiable con Plaspy usando el endpoint y el puerto compartido de Plaspy. El dispositivo admite comandos de configuración por SMS; los ejemplos públicos a continuación muestran cómo establecer los valores APN, la dirección del servidor y el puerto para Plaspy.

- Configure los parámetros de red del equipo y los valores APN para que el rastreador pueda usar GPRS para conectarse.
- Indique que el rastreador reporte a Plaspy especificando el endpoint y el puerto del servidor de Plaspy.
- Valide la conectividad para que los reportes de ubicación y los eventos del dispositivo aparezcan en Plaspy.
- Use los comandos SMS proporcionados cuando no disponga de la herramienta del fabricante.
- Reinicie o arranque nuevamente el rastreador tras aplicar la configuración para garantizar que el nuevo servidor y puerto se utilicen.

## Configuración del servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Todos los dispositivos en Plaspy usan el mismo puerto y la plataforma detectará el protocolo del dispositivo automáticamente cuando el rastreador se conecte al endpoint de servidor configurado.

## Requisitos previos típicos

- Un TR-151SP con batería cargada, con una SIM funcional y cobertura GSM adecuada para GPRS o SMS.
- IMEI del dispositivo (se requiere para las plantillas de SMS).
- APN, usuario APN y contraseña APN del proveedor de la SIM si el rastreador usará datos GPRS.
- Acceso a un método para enviar SMS o a la herramienta oficial de configuración de GlobalSat.
- Anote la versión de firmware o la revisión de hardware si está disponible, ya que la sintaxis de comandos puede variar.

## Cómo se conecta este rastreador a Plaspy

El TR-151SP se puede configurar para enviar sus datos a Plaspy actualizando sus ajustes de servidor y de red. Una vez configurado, el rastreador utilizará el endpoint y el puerto compartidos de Plaspy para el envío de datos y Plaspy detectará automáticamente el protocolo.

- El rastreador se apunta a Plaspy usando el dominio o la IP y el puerto en la configuración del dispositivo.
- El equipo usa GPRS o la configuración por SMS para establecer la dirección y el puerto del servidor.
- Tras la configuración, el rastreador envía mensajes de ubicación y eventos a d.plaspy.com (o 54.85.159.138) en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del dispositivo, por lo que no es necesario seleccionar el protocolo por dispositivo en la plataforma.
- Usar los valores APN correctos asegura que el rastreador pueda iniciar una sesión GPRS para conectarse al servidor de Plaspy.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración de GlobalSat para el TR-151SP, ya sea mediante la herramienta del fabricante o la interfaz de comandos por SMS.
2. Introduzca el endpoint de Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138 según requiera la interfaz del equipo.
3. Ajuste el puerto a 8888 (Plaspy usa el mismo puerto para todos los dispositivos).
4. Elija UDP o TCP si el rastreador solicita selección de transporte durante la configuración.
5. Proporcione APN, usuario APN y contraseña APN según necesite su SIM usando [apn], [apnu] y [apnp].
6. Aplique o guarde la configuración y luego reinicie o haga un arranque si el firmware del dispositivo lo requiere.
7. Valide que el TR-151SP reporte a Plaspy y que los datos aparezcan en la plataforma Plaspy.

## Ejemplos de comandos de configuración

Para configurar el rastreador, envíe los siguientes comandos por mensajes SMS. El formato de ejemplo público usado por Plaspy aparece como una línea completa de comando SMS. Preserve los marcadores de posición cuando llene los comandos.

- Comando de configuración
Envíe este SMS (reemplace los marcadores y calcule la suma de verificación como se explica abajo):

```
GSS,{{imei}},3,0,D1=[apn],D2=[apnu],D3=[apnp],E0=54.85.159.138,E1=8888,A1=1*{{checksum}}!
```

- Comando de reinicio (opcional, úselo cuando sea necesario reiniciar para aplicar los ajustes)

```
GSC,{{imei}},3,0,LH*{{checksumreeboot}}!
```

Notas sobre los marcadores y la suma de verificación:
- {{imei}} — reemplace con el IMEI del dispositivo.
- [apn] — reemplace con el APN del proveedor de la SIM.
- [apnu] — reemplace con el usuario APN si es requerido, o deje en blanco si no aplica.
- [apnp] — reemplace con la contraseña APN si es requerida, o deje en blanco si no aplica.
- {{checksum}} y {{checksumreeboot}} — el comando requiere una suma de verificación que se añade después del asterisco. La rutina pública de checksum calcula un XOR de los caracteres del comando antes del asterisco y produce un valor hexadecimal de dos dígitos en mayúsculas. Asegúrese de calcular la suma de verificación para la porción del comando anterior al * y añadirla como se muestra.

El ejemplo público original también mencionó un formato global de envoltura SMS usado por Plaspy para mensajes por lotes. Cuando use configuración por SMS individual, envíe los comandos exactamente como se muestran arriba con el checksum correcto.

## Notas de configuración

- El TR-151SP admite configuración por SMS según los ejemplos públicos mostrados aquí. Use el procedimiento oficial de GlobalSat cuando tenga disponible la herramienta del fabricante.
- El cálculo del checksum es requerido por el formato de comando. El checksum es el XOR de cada byte de la cadena de comando antes del asterisco, convertido a un valor hexadecimal de dos caracteres en mayúsculas.
- Las variantes de firmware y regionales pueden modificar la sintaxis de comandos o los parámetros requeridos. Verifique los comandos con las notas de firmware de su dispositivo.
- Elija UDP o TCP según la preferencia del instalador o la capacidad del dispositivo. Plaspy soporta ambos y detecta el protocolo automáticamente.
- Todos los dispositivos en Plaspy usan el mismo puerto 8888, así que use ese valor al configurar el puerto del servidor del equipo.

## Por qué usar Plaspy con esta configuración

Configurar el GlobalSat TR-151SP para reportar a Plaspy ofrece a las organizaciones una forma sencilla de centralizar la telemetría de los dispositivos. Apuntar el rastreador al endpoint compartido de Plaspy permite visibilidad consistente de ubicaciones y eventos y aprovecha la detección automática de protocolos de Plaspy, por lo que no será necesario administrar la selección de protocolo por dispositivo.

Learn more about Plaspy at https://www.plaspy.com and verify the latest device specific configuration details and firmware notes from the manufacturer at https://www.globalsat.com.tw/. Manufacturer specifications, setup methods, and firmware behavior can change over time so confirm current instructions on GlobalSat's official site before wide deployment.

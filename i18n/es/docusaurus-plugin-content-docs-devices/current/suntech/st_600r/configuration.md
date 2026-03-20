---
slug: /suntech/st_600r/configuration
id: st_600r-configuration
sidebar_label: Configuration
title: Suntech - ST 600R Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Suntech ST 600R con ajustes de servidor Plaspy y ejemplos de comandos SMS para integración
keywords:
  - Configuración Suntech ST 600R
  - Instalación Suntech ST 600R
  - Configuración de servidor Suntech ST 600R
  - Suntech ST 600R Plaspy
  - Configuración rastreador GPS ST 600R
  - Guía de configuración ST 600R
  - Configuración rastreador GPS Suntech
  - Configuración seguimiento de vehículos Suntech
  - Configuración rastreador GPS Plaspy
  - Configuración SMS rastreador
---

# Suntech - Configuración del ST 600R

Esta página documenta el contexto público de configuración para usar el Suntech ST 600R con Plaspy. Se centra en los ajustes de servidor prácticos, la preparación requerida y ejemplos de comandos SMS que suelen emplearse para apuntar el equipo al servicio de Plaspy. El objetivo es ayudar a instaladores y personal técnico a preparar el ST 600R para su operación con Plaspy, basándose en patrones de configuración disponibles públicamente.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del equipo una vez que éste comienza a enviar datos a la plataforma. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Cuando están disponibles, incluimos ejemplos de comandos SMS públicos de Suntech que se usan para configurar el APN, el intervalo de reporte y los parámetros de servidor.

## Resumen de la configuración

El objetivo de la configuración es dejar el ST 600R listo para comunicarse de forma fiable con la plataforma Plaspy y que sea visible en sus flujos de trabajo de gestión de flota o activos. El proceso normalmente incluye establecer la identificación del dispositivo, el APN del operador y el endpoint y puerto del servidor Plaspy, y luego validar los reportes del equipo.

- Configure el identificador del dispositivo e identifique la subcadena del IMEI que se usa como ID en Plaspy.
- Establezca el APN del operador celular y, opcionalmente, las credenciales APN para que el equipo pueda abrir sesiones de datos.
- Apunte la configuración GPRS/3G del ST 600R hacia Plaspy usando los valores de servidor compartidos.
- Configure los intervalos de reporte para que el dispositivo envíe actualizaciones de ubicación con la frecuencia deseada.
- Valide la conectividad y confirme que el dispositivo aparece y reporta en la plataforma Plaspy.

## Ajustes de servidor de Plaspy

Use los siguientes ajustes públicos de servidor Plaspy al configurar el Suntech ST 600R:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del tracker cuando llegan los datos

Tenga en cuenta que todos los dispositivos que se conectan a Plaspy usan el mismo puerto y la plataforma detectará automáticamente el protocolo correcto para cada equipo.

## Requisitos típicos antes de la configuración

- Un dispositivo ST 600R con batería y alimentación, instalado según las instrucciones del proveedor y listo para configurarse.
- Una tarjeta SIM funcional con datos habilitados y el APN conocido del operador móvil.
- Acceso al IMEI del dispositivo para poder calcular el ID que se utilizará en la configuración por SMS.
- Capacidad para enviar comandos SMS al tracker si va a usar configuración por SMS, o acceso a la herramienta de configuración del fabricante si está disponible.
- Conocimientos básicos para elegir entre UDP o TCP en el dispositivo si la selección de transporte es requerida.

## Cómo se conecta este tracker a Plaspy

Cuando está configurado, el ST 600R envía sus datos de ubicación y eventos a Plaspy usando el endpoint y puerto de servidor compartidos. Plaspy recibe los datos y los asigna al ID de dispositivo para que el tracker sea visible en la plataforma para monitoreo e informes.

- El tracker se configura para reportar al dominio o IP y puerto del servidor Plaspy indicados más arriba.
- Los datos se transmiten por la conexión de datos celulares usando el APN y el servicio GPRS/3G configurados.
- Plaspy detecta automáticamente el protocolo del tracker una vez que llegan paquetes al puerto 8888.
- El dispositivo reporta según el intervalo configurado, lo que hace que la visibilidad en la plataforma sea predecible.
- Los eventos y actualizaciones de estado del equipo se entregan a Plaspy para monitoreo operativo.

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración oficial de Suntech para el ST 600R, normalmente comandos SMS o la herramienta de configuración del proveedor. Verifique siempre la documentación del equipo para conocer el método exacto que admite su firmware.
2. Determine el ID del dispositivo a partir del IMEI. El método público utiliza los últimos 9 dígitos del IMEI excluyendo el dígito de verificación final.
3. Ingrese d.plaspy.com o la IP 54.85.159.138 como dirección del servidor en la configuración del dispositivo.
4. Establezca el puerto del servidor en 8888 y elija UDP o TCP si el dispositivo requiere la selección explícita del transporte.
5. Aplique o guarde la configuración en el equipo y, si es necesario, reinícielo para activar los nuevos ajustes.
6. Valide que el dispositivo reporte a Plaspy revisando la plataforma para datos entrantes y confirmando que se reconoce el ID de dispositivo.

## Comandos de configuración de ejemplo

Los ejemplos públicos de configuración del ST 600R suelen enviarse al tracker vía SMS. El ID del dispositivo son los últimos 9 dígitos del IMEI excluyendo el dígito final. Por ejemplo, si el IMEI es 123456789012345, extraiga los dígitos 6 a 14 para formar el ID del dispositivo.

Los comandos que siguen preservan los marcadores de posición utilizados para valores de APN. Reemplace los marcadores con los valores de su operador y con el ID de dispositivo calculado.

1. Reinicio opcional a valores de fábrica (usar solo si necesita restaurar los valores por defecto):
```
ST300CMD;{{device_id}};02;Reset
```
Etiqueta: reinicio inicial opcional. Reemplace {{device_id}} con los últimos 9 dígitos del IMEI excluyendo el dígito final del IMEI.

2. Establecer APN del operador y servidor GPRS. Si necesita enviar usuario o contraseña del APN, ponga la bandera APN en 1, de lo contrario en 0. Campos: comando;device_id;02;APN_FLAG;APN;APN_USER;APN_PASS;SERVER_IP;SERVER_PORT;;;;
```
ST300NTW;{{device_id}};02;0;{{apn}};{{apnu}};{{apnp}};54.85.159.138;8888;;;;
```
Notas:
- Reemplace el cuarto campo (0) por 1 si proporciona credenciales {{apnu}} o {{apnp}}.
- {{apn}} es el APN del operador, {{apnu}} es el usuario APN y {{apnp}} es la contraseña APN.
- Este comando apunta el equipo a Plaspy usando la IP pública y el puerto del servidor.

3. Establecer intervalo de reporte a 60 segundos (ejemplo de configuración de reporte):
```
ST300RPT;{{device_id}};02;60;60;60;3;0;0;0;0;0
```
Este comando configura reportes periódicos. Ajuste los intervalos según sus necesidades operativas y las capacidades del firmware.

4. Comprobar configuración actual (comando de verificación):
```
ST300CMD;{{device_id}};02;PresetA
```
Este comando solicita al dispositivo que envíe su configuración actual para verificación.

## Notas de configuración

- Los ejemplos públicos del ST 600R muestran la configuración por SMS como un método común; su firmware o las herramientas del proveedor también pueden soportar configuración por software o USB.
- Diferentes versiones de firmware o revisiones de hardware pueden requerir formatos de comando o un orden de parámetros ligeramente distintos. Confirme siempre con la documentación del firmware del dispositivo.
- Elija UDP o TCP según la preferencia del instalador y el comportamiento de la red; Plaspy acepta ambos en el puerto 8888 y detectará automáticamente el protocolo del tracker.
- Al suministrar credenciales APN, asegúrese de que la bandera APN en el comando de red esté configurada correctamente para que el equipo utilice el usuario y la contraseña proporcionados.
- Si realiza un reinicio de fábrica, trate ese paso como opcional y solo úselo cuando sea necesario para una reconfiguración completa.

## Por qué usar Plaspy con esta configuración

Usar el Suntech ST 600R con Plaspy ofrece un camino sencillo para obtener datos de ubicación y reportes de calidad desde un dispositivo pensado para redes celulares. Apuntar el tracker a Plaspy con los ajustes de servidor compartidos simplifica el despliegue en flotas grandes porque la plataforma usa el mismo puerto y la detección automática de protocolo para gestionar diferentes protocolos de tracker.

Learn more about Plaspy on the main website https://www.plaspy.com. For the most current device specific configuration methods, firmware behavior, and manufacturer details verify information with the official Suntech documentation at http://www.suntechint.com/.

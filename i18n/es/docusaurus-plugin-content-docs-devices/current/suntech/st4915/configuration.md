---
slug: /suntech/st4915/configuration
id: st4915-configuration
sidebar_label: Configuration
title: Suntech - ST4915 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Suntech ST4915 para integrarse con Plaspy, incluye servidor y ejemplos de comandos SMS
keywords:
  - configuración Suntech ST4915
  - configuración ST4915
  - integración ST4915 Plaspy
  - configuración rastreador GPS ST4915
  - ajustes servidor Suntech
  - configuración SMS ST4915
  - guía configuración rastreador de activos
  - configuración rastreador gestión de flotas
  - configuración telemetría ST4915
  - configuración rastreador batería larga duración
---

# Suntech - Configuración ST4915

Esta página documenta la información pública y práctica para configurar la serie Suntech ST4915 con Plaspy. Se centra en el endpoint del servidor y en los comandos y procedimientos típicos del fabricante que están disponibles públicamente para que el ST4915 informe a Plaspy en tiempo real, tanto posiciones como telemetría.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El modelo ST4915 puede configurarse mediante comandos SMS como los que se muestran a continuación; esta página usa ese contenido público como referencia principal para los ejemplos de configuración.

## Resumen de la configuración

Este proceso prepara el ST4915 para comunicarse con Plaspy, apuntando el dispositivo al endpoint compartido de Plaspy, ajustando el transporte y los parámetros de reporte, y verificando que los paquetes de posición y telemetría lleguen a la plataforma.

- Configure los parámetros de red del equipo para que informe al endpoint del servidor de Plaspy.
- Proporcione el ID del dispositivo derivado del IMEI para que los comandos del fabricante se apliquen a la unidad correcta.
- Configure el APN del operador y las credenciales que sean necesarias para la conectividad de datos móviles.
- Ajuste los intervalos de reporte y el comportamiento para equilibrar la vida útil de la batería y la frecuencia de actualizaciones.
- Valide la configuración con el comando de verificación del fabricante y confirme la visibilidad en Plaspy.

## Ajustes del servidor Plaspy

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888 (Plaspy uses the same port for all supported devices)  
- Transport: device may be configured to use UDP or TCP on port 8888  
- Protocol handling: Plaspy automatically detects the tracker protocol when the device sends data

## Requisitos típicos antes de configurar

- Tener el IMEI del dispositivo a mano (se usa para derivar el ID del dispositivo requerido por los comandos SMS del ST4915).  
- Una SIM activa con datos y capacidad de SMS instalada en el rastreador y conocer el APN del operador.  
- Capacidad para enviar SMS al dispositivo para configuración vía SMS o acceso a la herramienta de configuración del fabricante si está disponible.  
- Acceso a una cuenta Plaspy o permisos administrativos para confirmar que el dispositivo aparece y que los reportes son correctos.  
- Conocimientos básicos del flujo de configuración del ST4915 y de la documentación o herramientas del proveedor aplicables a su revisión de hardware.

## Cómo se conecta este rastreador a Plaspy

El ST4915 envía posiciones GNSS y telemetría a Plaspy apuntando al endpoint y puerto compartido de Plaspy. Una vez que el dispositivo se configura para comunicarse con d.plaspy.com (o con la IP del servidor Plaspy) en el puerto 8888, Plaspy procesa los mensajes y los asocia a su cuenta usando la identidad del dispositivo.

- El rastreador envía paquetes de ubicación y telemetría a d.plaspy.com o a 54.85.159.138 en el puerto 8888.  
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no se requiere seleccionar el protocolo en el servidor.  
- El dispositivo puede usar TCP o UDP en el puerto 8888 según la configuración elegida en el equipo.  
- Los intervalos de reporte configurados en el dispositivo determinan la frecuencia de actualizaciones y el impacto en la batería; Plaspy recibe y muestra esas actualizaciones.  
- Eventos del dispositivo, como movimiento o cambios de entradas, se transmiten a Plaspy para alertas y paneles de control.

## Flujo de configuración común

1. Acceda al método oficial de configuración del fabricante o su software (en el ST4915 esto suele incluir aprovisionamiento por comandos SMS o herramientas del proveedor).  
2. Derive el ID del dispositivo a partir del IMEI (ver Ejemplos de comandos más abajo) y prepare las credenciales del APN.  
3. Ingrese d.plaspy.com o 54.85.159.138 como dirección del servidor GPRS en la configuración del equipo.  
4. Ajuste el puerto del servidor a 8888 (Plaspy usa el mismo puerto para todos los dispositivos compatibles).  
5. Elija UDP o TCP en el dispositivo si requiere selección de transporte.  
6. Aplique o guarde la configuración en el equipo y reinícielo si el hardware o el firmware lo exige para que los cambios surtan efecto.  
7. Valide que el dispositivo informe a Plaspy y que las posiciones y eventos aparezcan en su cuenta Plaspy.

## Ejemplos de comandos de configuración

El contenido público del ST4915 muestra comandos basados en SMS. El fabricante utiliza un ID de dispositivo derivado del IMEI (los seis dígitos antes del dígito de control del IMEI). Ejemplo de derivación: si el IMEI es 123456789012345, el ID del dispositivo son los seis dígitos en las posiciones 9–14 (901234 en el ejemplo mostrado por el fabricante). Use ese ID en los comandos a continuación donde aparece {{device_id}}.

Notas sobre los marcadores:
- {{device_id}} — el ID del dispositivo derivado del IMEI según se describió arriba.  
- [apn] — la cadena APN del operador requerida para la conexión de datos de la SIM.  
- [apnu] — usuario del APN si el operador lo requiere (mantenga el marcador si es necesario).  
- [apnp] — contraseña del APN si el operador la requiere (mantenga el marcador si es necesario).  
- El comando SA200NTW contiene una bandera que debe ser 1 si se proporciona usuario o contraseña del APN, de lo contrario 0.

1) Configure el APN del operador y el servidor GPRS (reemplace los marcadores según proceda):

```text
SA200NTW;{{device_id}};02;[0 or 1];[apn];[apnu];[apnp];54.85.159.138;8888;;;;
```

- Reemplace [0 or 1] por 1 si proporciona [apnu] o [apnp], de lo contrario 0.  
- Este comando apunta el rastreador a Plaspy en 54.85.159.138 puerto 8888 (mismo puerto usado para todos los dispositivos Plaspy). También puede usar d.plaspy.com en lugar de la IP si la sintaxis de SMS o la herramienta de configuración lo permite.

2) Establezca el intervalo de actualización/reportes a 60 segundos (ejemplo para reportes frecuentes; ajuste según la vida útil de la batería):

```text
SA200RPT;{{device_id}};02;60;60;60;3;0;0;0;0;0
```

- Esto configura los intervalos de reporte y parámetros de repetición según el formato de comandos SMS del dispositivo.

3) Verifique o consulte la configuración actual en el equipo:

```text
SA200CMD;{{device_id}};02;PresetA
```

- Este comando de consulta solicita que el dispositivo envíe los datos de configuración preestablecida para su verificación.

Si las herramientas del proveedor o el firmware usan una sintaxis de comando ligeramente diferente, siga la guía del proveedor. Los ejemplos anteriores preservan los comandos SMS públicos proporcionados por el fabricante y muestran cómo apuntar el dispositivo al endpoint compartido de Plaspy.

## Notas de configuración

- Las diferencias de firmware y las revisiones de hardware pueden cambiar la sintaxis exacta de los SMS o los campos disponibles; siempre confirme con las notas de la versión del firmware del dispositivo.  
- El ST4915 soporta aprovisionamiento vía SMS según la documentación pública; según su instalación, puede preferir el software del proveedor o herramientas de campo.  
- Elija UDP o TCP según sus requisitos de confiabilidad y sobrecarga; Plaspy acepta ambos y detecta el protocolo automáticamente en el servidor.  
- Los campos de usuario y contraseña del APN son opcionales y el comando tiene una bandera para indicar cuándo se suministran; asegúrese de establecer esa bandera correctamente.  
- Dado que Plaspy usa el puerto 8888 para todos los dispositivos, solo necesita configurar ese puerto en el rastreador y apuntar a d.plaspy.com o a la IP del servidor Plaspy.

## Por qué usar Plaspy con esta configuración

Configurar el Suntech ST4915 para informar a Plaspy combina la larga duración de batería y la robustez del hardware del dispositivo con las herramientas centralizadas de seguimiento y telemetría en tiempo real de Plaspy. Para flotas de activos remotos, semirremolques y equipos, esta configuración permite operación prolongada sin supervisión con visibilidad accionable, alertas de eventos y flujos de trabajo integrados que reducen mantenimiento y mejoran la recuperación o la respuesta operativa.

Learn more about Plaspy and how it can ingest ST4915 telemetry at https://www.plaspy.com. For the latest device-specific configuration details, firmware behavior, and command syntax verify the official Suntech documentation at http://www.suntechint.com/ as manufacturer methods and firmware versions can change over time.

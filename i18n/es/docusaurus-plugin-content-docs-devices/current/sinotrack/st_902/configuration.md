---
slug: /sinotrack/st_902/configuration
id: st_902-configuration
sidebar_label: Configuration
title: SinoTrack - ST-902 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el rastreador SinoTrack ST-902 OBD2 a Plaspy mediante servidor compartido y comandos SMS
keywords:
  - Configuración SinoTrack ST-902
  - Instalación SinoTrack ST-902
  - Integración ST-902 Plaspy
  - Configuración SMS SinoTrack
  - Configuración rastreador OBD2 GPS
  - Configuración servidor GPRS
  - Ajustes servidor Plaspy
  - Configuración APN ST-902
  - Seguimiento vehicular ST-902
  - Guía SinoTrack ST-902
---

# SinoTrack - ST-902 Configuration

Esta página describe el contexto público de configuración para usar el SinoTrack ST-902 con Plaspy. Resume los pasos prácticos y los comandos SMS públicos que permiten apuntar el ST-902 a Plaspy para que el dispositivo envíe ubicaciones y eventos de alarma a un colector de Plaspy. Las indicaciones que siguen se basan en métodos de configuración públicos del dispositivo y en los ajustes del servidor de Plaspy.

Plaspy utiliza un único endpoint y puerto compartido entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos de configuración en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; siga los comandos del dispositivo que se indican abajo y siempre verifique los detalles con la documentación de SinoTrack cuando sea necesario.

## Resumen de configuración

El objetivo de esta configuración es preparar el ST-902 para comunicarse de forma fiable con Plaspy vía GPRS y confirmar que el rastreador sea visible y reporte en la plataforma. El ST-902 soporta configuración por SMS y reporte por GPRS, lo que permite a los instaladores ajustar el APN y los parámetros del servidor de forma remota mediante comandos SMS.

- Configure el dispositivo para usar el endpoint de servidor de Plaspy de modo que la telemetría y las alarmas lleguen a la plataforma.
- Establezca las credenciales APN del operador para que el dispositivo pueda iniciar sesiones de datos GPRS.
- Seleccione el transporte (UDP o TCP) si aplica y configure el puerto común de Plaspy para que el colector acepte la telemetría entrante.
- Verifique la configuración usando el comando de verificación del dispositivo y confirme que la unidad aparezca en Plaspy.
- Active intervalos de reporte y alarmas apropiadas para que Plaspy reciba telemetría útil para paneles y alertas.

## Ajustes del servidor Plaspy

- El dominio del servidor de Plaspy d.plaspy.com debe ser aceptado por los rastreadores que usan nombres DNS.
- La IP del servidor Plaspy 54.85.159.138 se proporciona para configuraciones que requieren IP directa.
- El puerto 8888 es el puerto compartido usado por Plaspy para todos los dispositivos compatibles.
- Hay soporte de transporte tanto para UDP como para TCP; configure UDP o TCP en el puerto 8888 según lo requiera el dispositivo.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que generalmente no es necesario especificar un protocolo dentro de Plaspy.

## Requisitos previos antes de la instalación

- El dispositivo debe estar conectado al puerto OBD2 del vehículo y alimentado para aceptar comandos SMS y establecer GPRS.
- SIM activa con datos habilitados y las credenciales APN correctas del operador.
- Acceso al IMEI del dispositivo y a cualquier información de registro necesaria para su despliegue.
- Capacidad para enviar SMS al número del dispositivo para configuración por SMS, o acceso a la herramienta oficial de configuración SinoTrack si está disponible.
- Una cuenta en Plaspy o acceso al sistema para confirmar la visibilidad del dispositivo tras la configuración.
- Familiaridad con el flujo de comandos SMS del dispositivo y con los marcadores de posición como APN, usuario APN y contraseña APN.

## Cómo se conecta este rastreador a Plaspy

El ST-902 se configura para enviar actualizaciones de posición, marcas de tiempo y eventos de alarma por GPRS al endpoint del servidor de Plaspy. Cuando el rastreador está apuntando al endpoint y puerto de Plaspy, abrirá una sesión de datos y enviará telemetría que Plaspy procesa para visualización y alertas.

- El rastreador envía datos de ubicación y eventos al endpoint compartido de Plaspy en d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Plaspy recibe la telemetría GPRS y detecta automáticamente el protocolo del rastreador, de modo que los datos se enrutan correctamente en la plataforma.
- Eventos de alarma como exceso de velocidad, impacto, geocerca y batería baja se transmiten para que Plaspy pueda disparar notificaciones y acciones.
- SMS está disponible como canal de respaldo/configuración para modificar APN y ajustes de servidor cuando el acceso directo al dispositivo es limitado.
- Los intervalos de reporte son configurables para balancear la frecuencia de actualizaciones y el consumo de datos manteniendo la visibilidad en Plaspy.

## Flujo típico de configuración

1. Acceda al método oficial de configuración SMS de SinoTrack o a la herramienta del proveedor para enviar comandos de configuración al dispositivo.
2. Introduzca la dirección del servidor Plaspy ya sea como el dominio d.plaspy.com o la IP 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Establezca el puerto del dispositivo en 8888 (Plaspy utiliza el mismo puerto para todos los dispositivos).
4. Seleccione el protocolo de transporte (UDP o TCP) si el dispositivo requiere elegirlo.
5. Configure las credenciales APN para la SIM instalada para que el rastreador pueda iniciar GPRS.
6. Aplique o guarde la configuración y reinicie el dispositivo si es necesario para que los ajustes tomen efecto.
7. Valide que el dispositivo reporte a Plaspy usando el comando de verificación del dispositivo y comprobando la plataforma Plaspy para datos entrantes.

## Comandos de configuración de ejemplo

El ST-902 soporta configuración por SMS. Los siguientes comandos públicos aparecen en la documentación del dispositivo y deben enviarse por SMS al número del rastreador en el orden indicado cuando corresponda.

- Reiniciar a configuración de fábrica (paso inicial opcional para limpiar configuraciones previas)
```text
RESET
```

- Ajustar la zona horaria a UTC+0
```text
8960000E00
```

- Configurar el APN del operador
```text
8030000 {{apn}} {{apnu}} {{apnp}}
```
Nota: {{apn}} es el APN del operador, {{apnu}} es el nombre de usuario APN (deje en blanco si no se requiere) y {{apnp}} es la contraseña APN (deje en blanco si no se requiere). Mantenga los marcadores de posición al sustituir sus credenciales del operador.

- Configurar el servidor GPRS a Plaspy por IP y puerto
```text
8040000 54.85.159.138 8888
```
También puede usar el dominio de Plaspy:
```text
8040000 d.plaspy.com 8888
```

- Establecer intervalo de actualización cuando el dispositivo está ON
```text
8050000 60
```

- Establecer intervalo de actualización cuando el dispositivo está OFF
```text
8090000 60
```

- Cambiar el dispositivo al modo GPRS
```text
7100000
```

- Verificar la configuración del dispositivo y leer ajustes actuales
```text
RCONF
```

Siga la respuesta del dispositivo al comando RCONF para confirmar el servidor configurado, el APN y los intervalos de reporte.

## Notas de configuración

- La configuración por SMS es compatible con el ST-902 y es el método práctico para la provisión remota cuando el dispositivo ya está instalado.
- Las versiones de firmware y las variantes regionales de hardware pueden modificar el formato exacto de los comandos o los marcadores de posición soportados; verifique con la respuesta del dispositivo y la documentación del proveedor.
- Elija UDP o TCP según las opciones del rastreador; Plaspy acepta ambos en el puerto 8888 y detecta el protocolo automáticamente.
- Use el dominio d.plaspy.com cuando sea posible para simplificar eventuales migraciones de servidor; la IP 54.85.159.138 es una alternativa para configuraciones directas.
- Confirme las credenciales APN con la operadora móvil y mantenga los marcadores de usuario/contraseña si no son requeridos.

## Por qué usar Plaspy con esta configuración

Usar el ST-902 con Plaspy ofrece visibilidad centralizada de la ubicación de vehículos, alarmas y telemetría derivada del OBD2 en toda la flota. La forma plug-and-play del OBD2 combinada con ajustes de servidor configurables por SMS permite a los equipos desplegar dispositivos con rapidez y apuntarlos al colector compartido de Plaspy para paneles en tiempo real, alertas e informes históricos.

Learn more about Plaspy and how it can ingest ST-902 telemetry at https://www.plaspy.com. For the latest device-specific commands, firmware notes, and manufacturer details verify the official SinoTrack documentation at https://www.sinotrackgps.com/ as vendor procedures and firmware behavior can change over time.

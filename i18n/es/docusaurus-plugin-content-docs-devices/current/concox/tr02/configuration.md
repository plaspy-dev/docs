---
slug: /concox/tr02/configuration
id: tr02-configuration
sidebar_label: Configuration
title: Concox - TR02 Configuration
sidebar_class_name: menu_item_tracker
description: Configure el Concox TR02 para que reporte a Plaspy usando configuraciones públicas de SMS y GPRS para visibilidad en la plataforma
keywords:
  - Configuración Concox TR02
  - Instalación Concox TR02
  - Concox TR02 Plaspy
  - Configuración servidor TR02
  - Comandos SMS TR02
  - Configuración rastreador GPS
  - Configuración rastreo vehicular
  - Ajustes APN TR02
  - Configuración GPRS tracker
  - Guía rastreador Concox
---

# Concox - Configuración TR02

Esta página documenta el contexto público de configuración para usar el rastreador Concox TR02 con Plaspy. Explica los parámetros públicos del servidor Plaspy y los pasos prácticos necesarios para apuntar un TR02 a la plataforma, de modo que reporte ubicación y estado. La guía está orientada a los métodos de configuración por SMS y GPRS más comunes y de acceso público.

Plaspy utiliza un endpoint de servidor compartido y el mismo puerto para todos los dispositivos compatibles, detectando automáticamente el protocolo del rastreador cuando llegan datos. Los pasos exactos en el equipo del fabricante pueden variar según la versión de firmware, la variante de hardware, el tipo de instalación y las herramientas del proveedor; use esta página como referencia práctica y confirme los detalles específicos del dispositivo en la documentación oficial de Concox.

## Resumen de la configuración

El objetivo de este proceso es preparar el TR02 para que se comunique con Plaspy y así el dispositivo aparezca y reporte de forma fiable en la plataforma. En TR02, la configuración pública suele usar comandos SMS para fijar el APN y los parámetros GPRS, y luego activar el reporte por GPRS hacia el endpoint de Plaspy.

- Configure el APN y los parámetros GPRS del TR02 para que pueda conectarse a datos móviles.
- Apunte el rastreador al endpoint del servidor Plaspy (dominio o IP) y al puerto compartido que usa Plaspy.
- Habilite el reporte periódico o ajuste el intervalo de actualización para que el dispositivo envíe posiciones a Plaspy.
- Valide la conectividad y verifique que el dispositivo informe correctamente en la plataforma.
- Use los comandos SMS disponibles o las herramientas del fabricante para aplicar cambios y confirmar la configuración.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol when the device sends data

Estos valores son los ajustes públicos de Plaspy que debe usar al configurar el TR02 para que reporte a la plataforma.

## Requisitos previos antes de la configuración

- Un dispositivo TR02 con alimentación, instalado correctamente y accesible para configuración.
- Una tarjeta SIM activa con plan de datos y la información APN correcta del operador móvil.
- Capacidad para enviar y recibir SMS al dispositivo si va a usar comandos SMS para la configuración.
- Acceso a la documentación del fabricante Concox o a instrucciones de instalación para confirmar formatos de comando y detalles de firmware.
- Anote el IMEI o identificador del dispositivo para poder localizarlo en Plaspy cuando empiece a reportar.
- Un plan de pruebas básico para validar el reporte después de aplicar la configuración.

## Cómo se conecta este rastreador a Plaspy

El TR02 se configura para enviar datos por GPRS al endpoint de Plaspy, de modo que la plataforma pueda recibir mensajes de ubicación y estado y mostrar la unidad. El dispositivo utiliza el APN y los ajustes de servidor configurados para abrir la conexión y transmitir actualizaciones por el transporte seleccionado.

- El rastreador apunta al endpoint y puerto compartido de Plaspy usado por todos los dispositivos.
- El dispositivo envía actualizaciones periódicas de posición según su TIMER o intervalo de reporte.
- Plaspy detecta automáticamente el protocolo del rastreador entrante e interpreta los mensajes.
- Los eventos y mensajes de estado enviados por el dispositivo son recibidos por Plaspy para visibilidad y alertas.
- Una conexión y reporte exitosos hacen que el TR02 sea visible en la plataforma para seguimiento y gestión de grupos.

## Flujo de trabajo común de configuración

1. Acceda al método de configuración oficial de Concox para su unidad TR02, típicamente mediante comandos SMS o la herramienta del fabricante.
2. Ingrese el servidor Plaspy usando el dominio d.plaspy.com o la IP del servidor 54.85.159.138.
3. Establezca el puerto del servidor en 8888, ya que Plaspy usa el mismo puerto para todos los dispositivos.
4. Elija UDP o TCP si el TR02 solicita seleccionar el transporte al configurar el servidor.
5. Configure el APN del dispositivo y cualquier usuario o contraseña APN que requiera su operador.
6. Aplique o guarde la configuración en el dispositivo y reinicie el rastreador si el firmware lo requiere.
7. Valide que el TR02 reporte a Plaspy y que aparezca en la plataforma con las actualizaciones esperadas.

## Ejemplos de comandos de configuración

El TR02 admite configuración por SMS. Los siguientes comandos son comandos SMS públicos que se usan comúnmente para preparar un TR02 para reportar a Plaspy. Conserve los marcadores de posición y envíe cada comando como un SMS separado al número del dispositivo. Los comandos se muestran en el orden típico para una configuración inicial.

1. Reset de fábrica opcional (usar solo si necesita restaurar valores por defecto):
```
FACTORY#
```

2. Establecer la zona horaria a UTC 0:
```
GMT,E,0#
```

3. Configurar el APN del operador. Reemplace {{apn}} por el APN de su operador. Si su operador exige usuario o contraseña, incluya {{apnu}} y {{apnp}}:
```
APN,{{apn}}#
```
O con usuario y contraseña:
```
APN,{{apn}},{{apnu}},{{apnp}}#
```
(Marcadores: {{apn}} = cadena APN, {{apnu}} = usuario APN, {{apnp}} = contraseña APN.)

4. Establecer el servidor GPRS al dominio o IP de Plaspy (ambas opciones funcionan). Estos comandos configuran servidor y puerto para el reporte:
```
SERVER,1,d.plaspy.com,8888,0#
```
O usando la IP del servidor Plaspy:
```
SERVER,0,54.85.159.138,8888,0#
```

5. Fijar el intervalo de actualización/reporte cada 60 segundos. Se muestran dos formatos comunes de TIMER:
```
TIMER,60#
```
O:
```
TIMER,60,60#
```

6. Activar modo GPRS:
```
GPRSON,1#
```

7. Verificar los parámetros GPRS actuales para confirmar la configuración:
```
GPRSSET#
```

Envíe estos comandos SMS en el orden mostrado para una configuración inicial típica. Si usa el comando de reset de fábrica, nótelo como opcional y solo utilícelo cuando sea necesario.

## Notas de configuración

- Las versiones de firmware de Concox y las herramientas del proveedor pueden cambiar la disponibilidad o sintaxis de los comandos; confirme siempre el formato exacto de los SMS con la documentación del firmware del dispositivo.
- El TR02 admite configuración por SMS como se muestra arriba; también pueden existir herramientas del fabricante para configuraciones masivas.
- Puede apuntar el dispositivo a d.plaspy.com o a la IP numérica del servidor; ambos son aceptados en los comandos públicos anteriores.
- Para la selección del transporte, elija UDP o TCP si el firmware lo solicita; Plaspy acepta ambos y detectará el protocolo automáticamente.
- Mantenga los marcadores de APN ({{apn}}, {{apnu}}, {{apnp}}) tal cual al preparar los mensajes; reemplácelos por las credenciales de su operador.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con un Concox TR02 ofrece un camino sencillo hacia la visibilidad de la flota y el rastreo vehicular. Con los comandos SMS públicos indicados puede configurar APN, el intervalo de reporte y los ajustes del servidor compartido de Plaspy para que el dispositivo reporte de forma fiable en una sola plataforma que detecta automáticamente el protocolo del rastreador.

Para conocer más sobre Plaspy y las funciones de la plataforma, visite https://www.plaspy.com. Para los detalles más actuales sobre configuración específica de dispositivos, notas de firmware y referencias oficiales de comandos, verifique la información en el sitio de Concox https://www.iconcox.com/.

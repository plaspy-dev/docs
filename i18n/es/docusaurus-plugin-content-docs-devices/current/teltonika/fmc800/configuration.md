---
slug: /teltonika/fmc800/configuration
id: fmc800-configuration
sidebar_label: Configuration
title: Teltonika - FMC800 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Teltonika FMC800 y conectarlo a Plaspy mediante ajustes de servidor compartido y comando de ejemplo
keywords:
  - Configuración Teltonika FMC800
  - Instalación Teltonika FMC800
  - Configuración FMC800 para Plaspy
  - Ajustes de servidor FMC800
  - Configuración rastreador GPS FMC800
  - Configuración rastreador Teltonika
  - Rastreo de vehículos FMC800
  - Seguimiento de flotas Teltonika FMC800
  - Configuración rastreador Plaspy
  - Configuración OBD Teltonika FMC800
---

# Teltonika - Configuración FMC800

Esta página describe el contexto público de configuración para usar el rastreador Teltonika FMC800 con Plaspy. Se centra en los ajustes de servidor compartidos de Plaspy, pasos prácticos de configuración y comandos de ejemplo que se usan comúnmente para apuntar el dispositivo a Plaspy. El FMC800 es un rastreador compacto tipo OBD plug and play con conectividad LTE Cat 1, funciones de crash trace y acelerómetro, y soporte Bluetooth LE para sensores externos. En esta guía se utilizan esas características públicas del dispositivo para explicar cómo preparar el rastreador para la integración con Plaspy.

Plaspy utiliza un único conjunto de ajustes de servidor para los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando éste se conecta. Los pasos exactos de configuración desde el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación o las herramientas del proveedor. Use esta guía como referencia práctica pública y consulte la documentación oficial de Teltonika o las herramientas del dispositivo para procedimientos específicos.

## Resumen de la configuración

El objetivo de la configuración es dejar el FMC800 listo para comunicarse de forma fiable con Plaspy, permitiendo visibilidad en tiempo real y reportes en su plataforma de flota. Esto normalmente implica configurar el APN y parámetros de red, apuntar el dispositivo al endpoint de servidor de Plaspy y verificar que el rastreador aparezca en el sistema.

- Configurar el APN y parámetros de red para que el FMC800 tenga acceso a Internet
- Establecer el host del servidor en Plaspy y configurar el puerto compartido que usa Plaspy
- Seleccionar el método de transporte requerido por su instalación si el dispositivo lo solicita
- Guardar y aplicar los ajustes, luego verificar que el dispositivo reporte a Plaspy
- Use el comando setparam de ejemplo que se muestra abajo como punto de partida público para muchas configuraciones FMC800

## Ajustes del servidor Plaspy

Use estos ajustes públicos del servidor Plaspy al configurar el FMC800. Plaspy utiliza el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador cuando los dispositivos se conectan

## Requisitos habituales antes de la configuración

- Un FMC800 alimentado e instalado según la guía de instalación del dispositivo, por ejemplo conectado al puerto OBD II del vehículo si se utiliza así
- Una tarjeta SIM con un plan de datos activo y los ajustes APN correctamente configurados para su operador móvil
- Acceso al método oficial de configuración de Teltonika para el FMC800 (SMS, Teltonika Configurator o herramienta de aprovisionamiento del proveedor)
- Los valores de APN, usuario APN y contraseña APN de su operador móvil, mantenidos como marcadores hasta que inserte los valores reales
- Confirmación de la versión de firmware del dispositivo y de cualquier requisito de aprovisionamiento del proveedor que afecte la configuración
- Capacidad básica para enviar SMS o usar el software del fabricante si se requiere configuración remota

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el FMC800 envía sus datos de ubicación y eventos al endpoint y puerto compartido de Plaspy. Plaspy recibe la conexión entrante en el puerto configurado y detecta automáticamente el protocolo del dispositivo para parsear y mostrar los datos en la plataforma.

- El rastreador inicia una conexión a d.plaspy.com o a 54.85.159.138 en el puerto 8888
- Seleccione transporte UDP o TCP en el dispositivo si éste requiere elegir un transporte
- El dispositivo envía actualizaciones periódicas de ubicación y reportes de eventos al servidor Plaspy
- Plaspy detecta e interpreta automáticamente el protocolo del rastreador cuando llegan los datos
- Una configuración exitosa hace que el dispositivo aparezca y reporte en Plaspy para monitoreo y alertas

## Flujo típico de configuración

1. Acceda al método oficial de configuración de Teltonika para el FMC800 (por ejemplo comandos SMS, herramientas Teltonika o aprovisionamiento del proveedor).
2. Ingrese d.plaspy.com o 54.85.159.138 como host del servidor en los ajustes del dispositivo.
3. Configure el puerto del dispositivo en 8888. Plaspy usa el mismo puerto para los dispositivos soportados.
4. Elija UDP o TCP como transporte si el FMC800 requiere selección de transporte.
5. Proporcione los marcadores para APN, usuario APN y contraseña APN donde se requiera y guarde los valores.
6. Aplique o guarde la configuración y reinicie el dispositivo si el método lo solicita.
7. Verifique que el dispositivo reporte a Plaspy y aparezca como en línea en la plataforma.

## Comandos de configuración de ejemplo

La configuración pública del FMC800 puede aplicarse mediante un comando batch de parámetros. El siguiente ejemplo es un formato común de comando público que establece los valores de APN y apunta el dispositivo a Plaspy. Conserve los marcadores y reemplácelos por los valores de su operador.

- Comando de parámetros en lote de ejemplo (SMS o herramienta de aprovisionamiento):

```
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

- Explicación de marcadores y campos:
  - [apn] : Reemplace con el APN de su operador móvil
  - [apnu] : Reemplace con el usuario APN si su operador lo requiere, de lo contrario deje vacío
  - [apnp] : Reemplace con la contraseña APN si su operador lo requiere, de lo contrario deje vacío
  - 2004 está configurado a d.plaspy.com para apuntar al dominio de servidor de Plaspy
  - 2005 está configurado a 8888 que es el puerto compartido de Plaspy
  - 2006:1 se usa comúnmente para indicar el transporte o una bandera de activación según el firmware; confirme con la documentación del fabricante

Si su método de aprovisionamiento usa la IP del servidor en lugar del dominio, ingrese 54.85.159.138 en lugar de d.plaspy.com. Si su dispositivo o herramienta requiere selección explícita de transporte, elija UDP o TCP según su entorno.

## Notas de configuración

- Las diferencias de firmware pueden cambiar los IDs de parámetros, la sintaxis de comandos o las banderas requeridas. Confirme los IDs de parámetros con la documentación de firmware del FMC800 antes de un despliegue masivo.
- El dispositivo puede configurarse por SMS o mediante las herramientas de Teltonika; utilice el método que soporte su proveedor o instalador.
- Elija UDP o TCP según los requisitos de su instalación; Plaspy soporta ambos transportes en el puerto 8888 y detectará el protocolo automáticamente.
- Mantenga los marcadores de APN y reemplácelos por los valores del operador al aprovisionar.
- Siempre valide que el dispositivo reporte al servidor Plaspy después de aplicar los ajustes y reiniciar si es necesario.

## Por qué usar Plaspy con esta configuración

Usar el Teltonika FMC800 con Plaspy ofrece una forma sencilla de integrar la ubicación del vehículo, indicadores de crash trace y reportes de eventos en una única plataforma de gestión de flotas. La forma OBD del FMC800, su conectividad celular y sus funciones de sensor, combinadas con la configuración de servidor compartido y la detección automática de protocolo de Plaspy, simplifican el despliegue y el monitoreo en toda la flota.

To learn more about Plaspy and how to manage device integrations visit https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior, and manufacturer details verify information on the official Teltonika website https://www.teltonika-gps.com/

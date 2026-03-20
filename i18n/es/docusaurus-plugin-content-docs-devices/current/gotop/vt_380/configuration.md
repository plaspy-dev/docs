---
slug: /gotop/vt_380/configuration
id: vt_380-configuration
sidebar_label: Configuration
title: GOTOP - VT-380 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador GOTOP VT-380 en Plaspy con ajustes de servidor y flujo de instalación
keywords:
  - GOTOP VT-380 configuración
  - GOTOP VT-380 instalación
  - GOTOP VT-380 configuración de servidor
  - GOTOP VT-380 Plaspy
  - VT-380 configuración
  - VT-380 guía de instalación
  - configuración de rastreador GPS
  - configuración de seguimiento de vehículos
  - configuración de flota
  - configuración de dispositivo Plaspy
---

# GOTOP - VT-380: Configuración

Esta página documenta el contexto público de configuración para usar el rastreador GOTOP VT-380 con Plaspy. Explica los ajustes de servidor compartidos que Plaspy espera, el flujo práctico de configuración y las condiciones previas comunes que debe verificar antes de integrar un dispositivo VT-380 en Plaspy para seguimiento en tiempo real y carga de rutas históricas.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador para las conexiones entrantes. Los pasos de configuración del lado del fabricante para el VT-380 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que esta página se centra en los ajustes públicos del lado de la plataforma y en la orientación práctica para aplicarlos a su equipo.

## Resumen de configuración

El objetivo de la configuración es apuntar el VT-380 al endpoint del servidor de Plaspy y confirmar un flujo de datos fiable para que la telemetría, las alertas y los waypoints registrados sean visibles en la plataforma Plaspy. Como Plaspy usa un único puerto para todos los dispositivos y realiza la detección de protocolo automáticamente, la configuración normalmente se limita al host del servidor, el puerto, la selección de transporte (si es necesario) y guardar los ajustes en el rastreador.

- Configure el VT-380 para reportar al endpoint del servidor de Plaspy para que la ubicación y los eventos de alarma lleguen a la plataforma.
- Elija el protocolo de transporte (UDP o TCP) si el dispositivo requiere selección explícita.
- Establezca el host del servidor a Plaspy y el puerto configurado para asegurar que los paquetes se enruten al endpoint correcto.
- Valide la conectividad y confirme que los waypoints almacenados se cargan tras la reconexión para conservar el historial completo.
- Guarde y aplique los cambios en el VT-380 y reinicie el dispositivo cuando lo indique la herramienta del fabricante.

## Ajustes del servidor de Plaspy

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: UDP or TCP supported by the device
- Plaspy automatically detects the tracker protocol for incoming connections

Tenga en cuenta que todos los dispositivos en Plaspy usan el mismo puerto y que la detección automática de protocolo de Plaspy reduce la necesidad de una configuración específica por protocolo en muchos rastreadores.

## Requisitos típicos antes de la instalación

- Un VT-380 con alimentación y operativo, con antenas conectadas e instalado según las instrucciones del fabricante.
- Una SIM celular válida con datos habilitados y servicio GPRS activo para reporte TCP/UDP (SMS puede usarse como alternativa según la capacidad del dispositivo).
- Acceso a la herramienta oficial de configuración GOTOP o al método de configuración por SMS/serial que provea el fabricante.
- Tener registrado el IMEI o identificador del dispositivo VT-380 para poder asociarlo a un registro de vehículo en Plaspy.
- Una cuenta o despliegue activo en Plaspy donde pueda agregar y monitorear el dispositivo una vez que comience a reportar.
- Visibilidad de red básica para verificar que el dispositivo pueda alcanzar d.plaspy.com o 54.85.159.138 en el puerto 8888 desde la red celular.

## Cómo se conecta este rastreador a Plaspy

El VT-380 envía ubicación, alarmas y telemetría de sensores a Plaspy sobre GPRS usando TCP o UDP. Cuando GPRS no está disponible, el dispositivo almacena waypoints y sube los datos guardados automáticamente una vez que se restablece la conectividad. Plaspy ingiere esos paquetes y los asocia a los registros de vehículo para seguimiento en vivo y reportes históricos.

- El VT-380 se configura para reportar al endpoint del servidor Plaspy d.plaspy.com (o 54.85.159.138) en el puerto 8888.
- La telemetría y los paquetes de alarma del dispositivo se transmiten por TCP o UDP según la selección de transporte.
- Cuando la conexión se interrumpe, el VT-380 sube los waypoints almacenados a Plaspy tras la reconexión para preservar el historial de rutas.
- Plaspy detecta automáticamente el protocolo del rastreador y procesa los paquetes entrantes para su mapeo, alertas y reportes.
- Eventos de alarma como SOS, geocerca, corte de energía y movimiento se reenvían a Plaspy para notificación y registro.

## Flujo típico de configuración

1. Acceda al método o software oficial de configuración del GOTOP VT-380 proporcionado por GOTOP o su proveedor (comandos SMS, herramienta de escritorio o interfaz web según su unidad).
2. En los ajustes del servidor del rastreador, ingrese el host del servidor de Plaspy como d.plaspy.com o use la IP 54.85.159.138 si su herramienta de configuración requiere una dirección IP.
3. Establezca el puerto del servidor en 8888 (todos los dispositivos en Plaspy usan el mismo puerto).
4. Elija UDP o TCP como transporte si el VT-380 requiere selección explícita.
5. Aplique o guarde la configuración en la herramienta del dispositivo y confirme que los cambios fueron aceptados.
6. Reinicie el VT-380 si las instrucciones del fabricante indican que es necesario para activar los nuevos ajustes de red.
7. Valide que el dispositivo reporte a Plaspy revisando la conectividad y la telemetría en su despliegue Plaspy.

## Ejemplos de comandos de configuración

El VT-380 soporta múltiples enfoques de configuración según el firmware y las herramientas del proveedor (comandos SMS, herramientas serial/USB o utilitarios de escritorio). Los comandos exactos y la sintaxis varían según la versión de firmware y la herramienta proporcionada por el fabricante, por lo que consulte la documentación oficial de GOTOP para cadenas de comando precisas. Dado que aquí no se incluyen comandos públicos específicos del modelo, confíe en el manual o en la utilidad de configuración GOTOP para ingresar el host del servidor Plaspy (d.plaspy.com o 54.85.159.138), el puerto 8888 y la selección de transporte.

## Notas de configuración

- Las diferencias de firmware entre unidades VT-380 pueden cambiar la sintaxis exacta de los comandos o la ubicación de los menús; verifique siempre la versión de firmware y la documentación correspondiente de GOTOP.
- Cuando esté disponible, prefiera el reporte GPRS TCP/UDP para telemetría en tiempo real y use SMS solo como respaldo para configuración o mensajes de emergencia.
- Elegir UDP puede reducir la sobrecarga en reportes de alta frecuencia, mientras que TCP puede mejorar la fiabilidad de entrega según las condiciones de la red.
- El registro en memoria flash interno del VT-380 preserva waypoints durante la pérdida de conectividad y los sube a Plaspy tras la reconexión; verifique el comportamiento de registro y carga en los ajustes de su dispositivo.
- Mantenga una copia de cualquier plantilla de comandos SMS o exportación de configuración que use para poder reproducir los ajustes en múltiples dispositivos.

## Por qué usar Plaspy con esta configuración

Usar el GOTOP VT-380 con Plaspy ofrece una vía práctica hacia la visibilidad centralizada de la flota, combinando posicionamiento GNSS robusto y comunicaciones GSM resilientes con los paneles, alertas y reportes de Plaspy. Configurar el VT-380 para que reporte al endpoint y puerto compartidos de Plaspy garantiza que la ubicación, las alarmas y los waypoints almacenados estén disponibles para despacho, cumplimiento y respuesta a incidentes.

Learn more about Plaspy and how it supports device integrations at https://www.plaspy.com. For the latest device-specific setup commands, firmware notes, and configuration tools for the VT-380, verify current information on the manufacturer's website https://www.gotop.cc/ since setup methods and firmware behavior can change over time.

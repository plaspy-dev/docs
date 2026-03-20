---
slug: /teltonika/tft100/configuration
id: tft100-configuration
sidebar_label: Configuration
title: Teltonika - TFT100 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Teltonika TFT100 y conectarlo a Plaspy con ajustes de servidor y comandos de ejemplo
keywords:
  - Configuración Teltonika TFT100
  - Instalación Teltonika TFT100
  - Configuración servidor TFT100
  - Configuración Plaspy TFT100
  - Configuración rastreador Plaspy
  - Ajustes servidor rastreador GPS
  - Integración telemetría TFT100
  - Guía Teltonika Configurator
  - Configuración seguimiento de flotas
  - Rastreador para vehículos industriales
---

# Teltonika - TFT100 Configuración

Esta página describe el contexto público de configuración para usar el Teltonika TFT100 con Plaspy. Resume los ajustes de servidor prácticos y muestra un comando de ejemplo que puede usar para apuntar el rastreador a Plaspy, además de indicar qué verificar antes de integrar el dispositivo en su cuenta de Plaspy. Utilice esta página como referencia de despliegue junto con la documentación del fabricante y sus procedimientos internos de instalación.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El TFT100 puede configurarse con las herramientas de Teltonika o enviando comandos de configuración; los ejemplos a continuación muestran cómo aplicar los valores de servidor de Plaspy de forma compatible con esos métodos.

## Resumen de la configuración

El objetivo de esta configuración es preparar el TFT100 para que comunique de forma fiable la ubicación y la telemetría a Plaspy. Con el APN y los datos del servidor correctos, el dispositivo enviará datos GPS y del vehículo al punto final compartido de Plaspy para que su flota sea visible en la plataforma.

- Configure los parámetros celulares y el APN del equipo para que el rastreador pueda acceder a servidores externos.
- Apunte el rastreador al dominio o IP del servidor de Plaspy y use el puerto compartido para que Plaspy reciba los datos.
- Seleccione el método de transporte (UDP o TCP) si el dispositivo lo requiere y guarde la configuración.
- Valide la conectividad y confirme que el rastreador informa a Plaspy para que aparezca en mapas en vivo y vistas de telemetría.
- Use Teltonika Configurator o comandos SMS según lo soporte el TFT100 para aplicar los ajustes.

## Ajustes del servidor de Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Tenga en cuenta que todos los dispositivos en Plaspy utilizan el mismo puerto 8888 y Plaspy intentará detectar el protocolo correcto para el flujo entrante del rastreador.

## Requisitos típicos antes de la configuración

- Una unidad TFT100 instalada y con alimentación, con acceso al método de configuración del dispositivo.
- Conectividad celular activa y una SIM con plan de datos configurada con los valores APN correctos.
- Acceso a herramientas de configuración de Teltonika como Teltonika Configurator o un medio para enviar comandos SMS de configuración.
- Los ajustes del servidor de Plaspy indicados más arriba para poder introducir d.plaspy.com o la IP del servidor y el puerto.
- Conocimiento de identificadores del dispositivo como IMEI o número de serie para confirmar qué unidad está reportando.
- Un procedimiento de prueba o un entorno controlado para validar que el dispositivo es visible en Plaspy después de la configuración.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura correctamente, el TFT100 envía flujos de ubicación y telemetría al punto final y puerto compartidos de Plaspy para que los datos estén disponibles en la plataforma para monitorización en tiempo real y análisis histórico. Plaspy recibe el enlace ascendente y lo asocia a su cuenta según la configuración de su instancia.

- El rastreador envía actualizaciones de posición GPS al endpoint de Plaspy d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- La telemetría y los datos del bus del vehículo que el dispositivo parsea se reenvían a Plaspy para visualización y alertas.
- El dispositivo puede usar UDP o TCP como transporte; Plaspy detectará automáticamente el protocolo del rastreador.
- Una configuración exitosa habilita seguimiento en vivo, reporte de eventos y paneles de telemetría en Plaspy.
- Todos los dispositivos soportados por Plaspy comparten el puerto 8888, lo que simplifica los ajustes de servidor en una flota.

## Flujo típico de configuración

1. Acceda al método de configuración oficial de Teltonika, por ejemplo Teltonika Configurator, FOTA WEB o la interfaz de comandos por SMS.
2. Introduzca la dirección del servidor de Plaspy como d.plaspy.com o la IP del servidor 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Ajuste el puerto del servidor a 8888. Plaspy usa el mismo puerto para todos los dispositivos compatibles.
4. Seleccione el transporte UDP o TCP si el rastreador requiere una selección de transporte.
5. Configure el APN y cualquier parámetro de la SIM necesario para que el rastreador pueda acceder a Internet.
6. Aplique o guarde la configuración y reinicie el dispositivo si la herramienta o el firmware lo requieren.
7. Verifique que el TFT100 reporte con éxito a Plaspy y que la unidad aparezca en la interfaz de Plaspy.

## Comandos de ejemplo para configuración

Para configurar los parámetros básicos en su dispositivo Teltonika a través de la interfaz de comandos del dispositivo, use el siguiente comando de ejemplo. Este comando establece los parámetros del APN y dirige el rastreador al servidor y puerto de Plaspy. Reemplace los marcadores por sus credenciales de operador.

```
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

- [apn] = el nombre del APN de su operador móvil
- [apnu] = nombre de usuario del APN si su operador lo exige
- [apnp] = contraseña del APN si su operador lo exige

Este comando único configura los campos de APN y apunta el rastreador a d.plaspy.com en el puerto 8888. También puede introducir el servidor como la IP 54.85.159.138 si su proceso de configuración lo requiere. Si usa Teltonika Configurator o FOTA WEB, introduzca los mismos valores en los campos correspondientes de servidor y APN. Si es necesario reiniciar tras aplicar los ajustes, hágalo para asegurar que la nueva configuración esté activa.

## Notas de configuración

- Teltonika ofrece múltiples mecanismos de configuración; use Configurator o FOTA WEB cuando estén disponibles para un flujo GUI, o comandos SMS para cambios rápidos y remotos.
- Las revisiones de firmware y hardware pueden cambiar los identificadores de parámetros y las opciones disponibles. Confirme la numeración y semántica de los parámetros en la wiki de producto de Teltonika para su versión de firmware.
- Elija TCP o UDP según las necesidades de la instalación; Plaspy detectará automáticamente el protocolo, pero el dispositivo debe configurarse para usar el transporte seleccionado.
- Todos los dispositivos que apunten a Plaspy deberían usar el puerto 8888 para simplificar el enrutamiento del servidor y la detección automática del protocolo.
- Mantenga seguras las credenciales del APN y los identificadores de los dispositivos. Conserve los marcadores en cualquier plantilla y reemplácelos por valores reales antes de enviar comandos.

## Por qué usar Plaspy con esta configuración

Usar el Teltonika TFT100 con Plaspy otorga a los equipos de operaciones visibilidad centralizada sobre flotas de e-movilidad y equipos pesados. Cuando el rastreador está configurado para enviar telemetría a Plaspy, los responsables de flota obtienen ubicación en tiempo real, datos del bus del vehículo y eventos de sensores que respaldan tareas de monitoreo, planificación de mantenimiento y seguridad.

Learn more about Plaspy and how it handles fleet telemetry at https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior, and manufacturer guidance, verify details with Teltonika at https://www.teltonika-gps.com/ as product parameters and recommended procedures can change over time.

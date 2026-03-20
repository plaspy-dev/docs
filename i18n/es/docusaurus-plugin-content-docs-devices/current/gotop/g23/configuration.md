---
slug: /gotop/g23/configuration
id: g23-configuration
sidebar_label: Configuration
title: GOTOP - G23 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador GOTOP G23 y conectarlo a Plaspy con ajustes de servidor compartido y pasos prácticos de instalación
keywords:
  - configuración GOTOP G23
  - instalación GOTOP G23
  - GOTOP G23 Plaspy
  - rastreador GPS GOTOP G23
  - configuración de servidor GOTOP G23
  - configuración de rastreador GOTOP
  - configuración GPS G23
  - configuración de rastreo de flotas
  - configuración de servidor Plaspy
  - configuración de seguimiento de vehículos
---

# GOTOP - Configuración del G23

Esta página documenta el contexto público de configuración para usar el rastreador mini wire GOTOP G23 con Plaspy. Resume los valores de servidor compartido que usa la plataforma, explica los pasos prácticos para preparar el G23 para el reporte y ofrece orientación de flujo de trabajo para que instaladores e integradores puedan validar la conectividad y la operación básica con Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración del proveedor que usted use. Utilice esta página como referencia práctica de integración y verifique los detalles específicos del equipo con la documentación del fabricante cuando sea necesario.

## Resumen de configuración

El objetivo de configurar un GOTOP G23 para Plaspy es apuntar el dispositivo al endpoint y puerto compartido de Plaspy, asegurar que el dispositivo tenga conectividad de red y verificar que el rastreador envíe telemetría GNSS y eventos para que el equipo sea visible en los paneles y alertas de Plaspy.

- Apunte el G23 al endpoint de servidor de Plaspy (dominio o IP) usando la interfaz de configuración del dispositivo.
- Seleccione el tipo de transporte (UDP o TCP) y ajuste el puerto al puerto estándar de Plaspy para que el dispositivo pueda enviar datos.
- Confirme que el dispositivo tenga conexión GSM activa y una SIM válida si aplica, y que el G23 esté alimentado y registrado en la red.
- Valide que Plaspy reciba posiciones GNSS y mensajes de evento (ACC, corte de energía, exceso de velocidad, etc.).
- Reinicie el dispositivo después de aplicar los ajustes si el procedimiento del fabricante lo requiere para comenzar a reportar.

## Ajustes del servidor Plaspy

Use estos valores públicos del servidor Plaspy al configurar el GOTOP G23:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP may be used on port 8888
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

Incluya ya sea el dominio del servidor o la IP en la configuración del dispositivo según la herramienta de configuración del G23 y su preferencia como instalador.

## Requisitos previos antes de la configuración

- Una unidad G23 con alimentación y accesible, y acceso al método de configuración del fabricante (interfaz UART-TTL serial o herramienta software provista por GOTOP).
- Una micro SIM válida instalada y operativa en la red 2G donde el dispositivo funcionará.
- Conocimiento del IMEI del dispositivo o identificador del equipo para poder asociar el rastreador al registro de cuenta en Plaspy.
- Acceso a la cuenta de Plaspy o al proceso de incorporación para registrar el dispositivo una vez que comience a reportar al servidor.
- Herramientas básicas para instalación y verificación, como un multímetro para comprobaciones de alimentación y un adaptador serial si usa la interfaz UART-TTL.

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado, el GOTOP G23 envía posiciones GNSS y telemetría de eventos sobre su enlace GSM al endpoint y puerto compartido de Plaspy para que el dispositivo sea visible en la plataforma en mapas en tiempo real, alertas y historial.

- El G23 reporta posiciones GNSS y LBS al servidor Plaspy en d.plaspy.com (o 54.85.159.138) en el puerto 8888.
- El dispositivo puede usar transporte UDP o TCP para transmitir paquetes de posición y alarmas a Plaspy.
- La telemetría de eventos como detección de ACC, alarma por corte de energía, exceso de velocidad y vibración se reenvía a Plaspy para la evaluación de reglas y notificaciones.
- Plaspy mapea los datos entrantes del protocolo del rastreador a paneles de la plataforma, reglas de geocerca y flujos de reporte.
- Debido a la detección automática del protocolo por parte de Plaspy, el mismo puerto y endpoint funcionan para los dispositivos soportados sin necesidad de puertos personalizados por dispositivo.

## Flujo de configuración común

1. Acceda al método oficial de configuración del fabricante o al software para el GOTOP G23 (por ejemplo la interfaz serial UART-TTL y la herramienta de configuración del proveedor, o comandos SMS/serial si están disponibles).
2. Ingrese el dominio de servidor de Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en el campo de dirección del servidor del dispositivo según la herramienta del equipo.
3. Configure el puerto del servidor en 8888, ya que Plaspy usa el mismo puerto para todos los dispositivos soportados.
4. Elija UDP o TCP como transporte si el dispositivo solicita selección explícita.
5. Aplique o guarde la configuración usando la herramienta o el conjunto de comandos del dispositivo.
6. Reinicie el G23 si el procedimiento del fabricante lo requiere para que los nuevos ajustes entren en vigor.
7. Valide que el dispositivo reporte a Plaspy comprobando la conectividad y que las posiciones GNSS y los eventos aparezcan en la lista de dispositivos de Plaspy o en la vista de incorporación.

## Ejemplos de comandos de configuración

La configuración del modelo G23 normalmente se realiza mediante la utilidad de configuración serial del fabricante o el conjunto de comandos del proveedor. La sintaxis exacta de los comandos puede variar según el firmware y la herramienta del proveedor, por lo que aquí no se incluyen comandos públicos universales. Use las instrucciones de configuración de GOTOP o el documento del protocolo serial proporcionado con el dispositivo para actualizar el dominio o la IP del servidor, establecer el puerto 8888 y elegir UDP o TCP.

Si dispone de la lista de comandos del proveedor, siga el orden que esa documentación indique: establecer la dirección del servidor, fijar el puerto a 8888, seleccionar el transporte UDP o TCP, guardar los ajustes y reiniciar. Mantenga cualquier marcador de posición que aparezca en los comandos del proveedor como {{apn}} y reemplácelo por los valores APN de su red.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis de comandos y las opciones disponibles; revise siempre la documentación GOTOP para la versión de firmware del G23 que esté utilizando.
- Elegir UDP o TCP afecta la confiabilidad y el comportamiento de los paquetes; seleccione el transporte que se ajuste a las necesidades de su instalación y a las recomendaciones del proveedor.
- Plaspy utiliza el mismo puerto en todos los dispositivos y realiza detección automática de protocolo, por lo que no necesita mapear puertos por dispositivo en la plataforma.
- Si configura por serial UART-TTL, asegúrese de usar niveles de voltaje correctos y un adaptador serial confiable para evitar errores de configuración.
- Mantenga un registro del IMEI del dispositivo y de la dirección de servidor configurada para poder solucionar rápidamente problemas de registro con Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el GOTOP G23 con Plaspy ofrece visibilidad centralizada de posiciones GNSS en tiempo real y eventos de los dispositivos para gestión de flotas, monitoreo antirrobo e informes operativos. El factor de forma compacto del G23, sus entradas de alarma ACC y de alimentación, y el soporte de batería de respaldo facilitan instalaciones prácticas, mientras que Plaspy recibe y procesa la telemetría del rastreador en mapas, alertas y reproducción histórica.

To learn more about Plaspy and how it handles device reporting and fleet workflows visit https://www.plaspy.com. For the latest device-specific configuration methods, firmware notes, and manufacturer integration details verify documentation at the GOTOP website https://www.gotop.cc/ as hardware and software behavior can change over time.

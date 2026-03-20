---
slug: /navtelekom/smart_s_4537/configuration
id: smart_s_4537-configuration
sidebar_label: Configuration
title: Navtelekom - СМАРТ S-4537 Configuration
sidebar_class_name: menu_item_tracker
description: Notas públicas de configuración para usar el rastreador Navtelekom СМАРТ S-4537 con Plaspy y guía práctica de ajuste
keywords:
  - Configuración Navtelekom СМАРТ S-4537
  - Configuración de rastreador Navtelekom
  - Configuración de dispositivo Plaspy
  - Configuración de servidor de rastreador GPS
  - Configuración de rastreador para gestión de flotas
  - Configuración de telemetría CAN bus
  - Configuración de rastreador vehicular 4G
  - Integración de rastreador con Plaspy
  - Guía de configuración de plataforma GPS
  - Telemetría y reporte de eventos
---

# Navtelekom - Configuración de СМАРТ S-4537

Esta página describe el contexto público de configuración para usar el rastreador Navtelekom СМАРТ S-4537 con Plaspy. Resume los ajustes de servidor prácticos, las comprobaciones previas y los pasos habituales que integradores emplean al apuntar el S-4537 a Plaspy para seguimiento en tiempo real y recolección de telemetría. Use esta guía como referencia orientada a la plataforma; las herramientas del fabricante y la versión de firmware determinan los pasos exactos en el equipo.

Plaspy utiliza ajustes de servidor compartidos entre dispositivos soportados y detecta automáticamente el protocolo del rastreador, por lo que el mismo endpoint y puerto se usan para muchos modelos. Los pasos exactos en el dispositivo pueden variar según la revisión de firmware, la revisión de hardware, el tipo de instalación y la herramienta de configuración empleada (por ejemplo NTC Configurator y la gestión remota DRC son comúnmente usadas con este modelo). Siempre contraste con la documentación más reciente de Navtelekom cuando esté disponible.

## Resumen de configuración

El objetivo de la configuración es preparar el СМАРТ S-4537 para que envíe ubicación y telemetría a Plaspy de forma fiable y segura. La configuración incluye ingresar el endpoint del servidor, seleccionar el transporte, ajustar parámetros de reporte y definir la lógica de eventos en el equipo necesaria para su despliegue.

- Apunte el dispositivo al endpoint de Plaspy para que envíe GNSS y telemetría CAN a la plataforma.
- Seleccione el protocolo de transporte que el equipo soporte y confirme la conectividad celular.
- Configure los intervalos de reporte y las reglas de eventos para que Plaspy reciba actualizaciones en tiempo real útiles.
- Verifique SIM, alimentación y conexiones de antena para evitar cortes intermitentes de datos durante la instalación.
- Valide la visibilidad en Plaspy después de la configuración para asegurar que el dispositivo muestra actualizaciones y telemetría en vivo.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888 (Plaspy uses the same port for all supported devices)  
- Transport support for UDP or TCP (the device may be configured to use UDP or TCP on port 8888)  
- Plaspy automatically detects the tracker protocol when the device connects

Estos valores son el endpoint público de Plaspy que debe usar al configurar el rastreador para que reporte a Plaspy.

## Requisitos previos típicos

- Un СМАРТ S-4537 instalado y alimentado con antenas y batería de respaldo conectadas según la guía de instalador.
- Conectividad celular activa y al menos una SIM funcional insertada para el módem 4G y la conmutación de doble SIM.
- Acceso al método oficial de configuración del fabricante, como NTC Configurator u otra herramienta de Navtelekom.
- Los ajustes del servidor Plaspy (d.plaspy.com o 54.85.159.138 y puerto 8888) disponibles para el instalador.
- Acceso administrativo a la cuenta o espacio de trabajo de flota en Plaspy para verificar la visibilidad del dispositivo tras la configuración.
- Conocimiento de cualquier paso de firmware o configuración específica del dispositivo indicado por Navtelekom para su revisión de hardware.

## Cómo se conecta este rastreador a Plaspy

El СМАРТ S-4537 envía posiciones GNSS y telemetría recolectada a través de su módem 4G integrado al endpoint y puerto de Plaspy. Plaspy recibe esos paquetes y aplica detección automática de protocolo para que los dispositivos aparezcan en la plataforma sin selección manual de protocolo en el servidor.

- El rastreador reporta posición GNSS y telemetría con sello de tiempo a d.plaspy.com en el puerto 8888.
- La telemetría del bus CAN de Engine y Comfort se captura localmente y se envía a Plaspy para paneles y reportes.
- Entradas digitales, salidas, datos RS-485 MODBUS y valores de sensores 1-Wire se reenvían a Plaspy como eventos y telemetría configurados.
- El transporte puede ser UDP o TCP según la configuración del dispositivo; asegúrese de que el transporte elegido use el puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta al endpoint compartido.

## Flujo de trabajo de configuración habitual

1. Acceda al método o software oficial de Navtelekom, como NTC Configurator o la herramienta del fabricante aprobada.  
2. Abra la sección de red o ajustes de servidor del dispositivo que está configurando.  
3. Ingrese el endpoint del servidor Plaspy usando d.plaspy.com o la IP 54.85.159.138 según corresponda.  
4. Configure el puerto del servidor a 8888.  
5. Si el dispositivo requiere selección de transporte, elija UDP o TCP y establezca el puerto 8888 para ese transporte.  
6. Aplique o guarde la configuración en el dispositivo y cargue o envíe los ajustes con la herramienta del fabricante.  
7. Reinicie el dispositivo si el firmware o la herramienta de configuración lo requieren para activar los nuevos ajustes.  
8. Valide en Plaspy que el dispositivo aparece en línea y está reportando datos GNSS y telemetría.

## Ejemplos de comandos de configuración

Los comandos y la sintaxis exacta de configuración dependen del firmware de Navtelekom y de la herramienta que utilice. Algunas implementaciones usan NTC Configurator para configuración por GUI, mientras que otras aceptan SMS o configuración directa mediante utilidades del fabricante o gestión remota (DRC). Debido a que los comandos varían según el firmware y la herramienta del instalador, siga la guía actual de Navtelekom para su revisión del equipo.

Si utiliza un método por SMS o CLI provisto por Navtelekom, conserve los marcadores de posición suministrados por el fabricante como APN o nombres de usuario y reemplácelos por los valores de su operador. Siempre confirme la sintaxis de comando con la documentación de Navtelekom antes de aplicar cambios.

## Notas de configuración

- Las diferencias de firmware pueden cambiar los parámetros disponibles y la sintaxis de comandos; confirme la versión de firmware del dispositivo y consulte las notas de versión de Navtelekom.  
- El comportamiento de TCP y UDP difiere en confiabilidad y en el manejo de cortafuegos; elija el transporte que mejor se adapte a su red y al operador, pero asegúrese de que el puerto esté configurado en 8888.  
- Plaspy utiliza el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador, lo que simplifica la configuración del servidor.  
- Si realiza la configuración vía SMS o con un configurador local, pruebe los ajustes en un equipo antes de un despliegue masivo.  
- Mantenga un registro de los ajustes aplicados y de las versiones de firmware para facilitar la resolución de problemas y auditorías futuras.

## Por qué usar Plaspy con esta configuración

Usar el СМАРТ S-4537 con Plaspy ofrece una forma consolidada de capturar ubicación en tiempo real, telemetría dual-CAN y datos de sensores periféricos en una sola plataforma. Para flotas e integradores, la combinación de módem 4G integrado, resiliencia de doble SIM y múltiples interfaces (CAN, RS-485, 1-Wire, BLE) permite centralizar la monitorización vehicular y las alertas operacionales en Plaspy sin añadir hardware gateway extra.

Learn more about Plaspy and how it supports mixed fleets and telemetry workflows at https://www.plaspy.com. For the latest device specific configuration instructions, firmware details, and manufacturer tools for the СМАРТ S-4537, verify information on the official Navtelekom site https://www.navtelecom.ru/ as device behaviour and setup methods can change with firmware and hardware revisions.

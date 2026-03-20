---
slug: /navtelekom/smart_s_2413/configuration
id: smart_s_2413-configuration
sidebar_label: Configuration
title: Navtelekom - SMART S-2413 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para Navtelekom SMART S-2413 compatible con Plaspy y ajustes de servidor necesarios
keywords:
  - Configuración Navtelekom SMART S-2413
  - Configuración de servidor Navtelekom SMART S-2413
  - Configuración SMART S-2413 en Plaspy
  - Configuración de rastreador GPS Navtelekom
  - Configuración de software de rastreo SMART S-2413
  - Manual Navtelekom SMART S-2413
  - Rastreo de flotas SMART S-2413
  - Configuración de plataforma GPS Navtelekom
  - Guía de configuración SMART S-2413
  - Configuración de rastreador Plaspy
---

# Navtelekom - Configuración SMART S-2413

Esta página documenta el contexto público de configuración para usar el Navtelekom SMART S-2413 con Plaspy. Se centra en los ajustes prácticos del servidor y en el flujo de trabajo necesario para apuntar el dispositivo a Plaspy y validar la conectividad. El contenido se basa en los detalles de conexión públicos de Plaspy y en el resumen de funcionalidades del SMART S-2413 como guía para la configuración.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y las herramientas del proveedor que utilice (por ejemplo Navtelekom DRC o el NTC Configurator local), por lo que debe seguir las herramientas del fabricante para menús específicos del dispositivo y comportamiento del firmware.

## Resumen de la configuración

El objetivo de esta configuración es preparar el SMART S-2413 para comunicarse de forma fiable con Plaspy, de modo que la ubicación y la telemetría aparezcan en la plataforma. Esto implica ingresar el endpoint del servidor de Plaspy, seleccionar el transporte si es necesario, guardar la configuración en el rastreador y confirmar la conectividad exitosa en el sistema Plaspy.

- Configure el SMART S-2413 para reportar al endpoint y puerto del servidor de Plaspy.
- Asegúrese de que el dispositivo tenga una SIM válida y conectividad celular para que la telemetría se pueda enviar por GSM.
- Confirme que las entradas, salidas, periféricos RS-485 y sensores Bluetooth del dispositivo estén habilitados según sea necesario para que los flujos de telemetría incluyan los sensores esperados.
- Guarde y aplique la configuración del fabricante, luego verifique el check-in del dispositivo en la plataforma Plaspy.
- Use las herramientas de Navtelekom (DRC o NTC Configurator) para firmware y configuración remota cuando corresponda.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte: el dispositivo puede configurarse usando UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y usa el mismo puerto para todos los dispositivos soportados

## Requisitos típicos antes de la configuración

- Una unidad SMART S-2413 con energía, documentación del fabricante o acceso a NTC Configurator o Navtelekom DRC para la configuración.
- Una tarjeta SIM activa insertada y la conectividad celular verificada en el dispositivo.
- Acceso al vehículo o al lugar de la instalación para realizar verificaciones iniciales de alimentación y conectividad.
- Conocimiento de qué entradas, salidas, periféricos RS-485 y sensores Bluetooth necesita habilitar para su caso de uso.
- Confirmación de la versión de firmware del dispositivo si depende de comportamientos específicos del firmware o de funciones de configuración remota.
- Un método para ver registros o el estado del dispositivo (herramienta del fabricante o retroalimentación de la plataforma) para validar el reporte exitoso.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el SMART S-2413 transmite posición y telemetría a través de la red celular al endpoint y puerto del servidor Plaspy. Plaspy ingiere la telemática entrante y la mapea a paneles, alertas y funciones de reporte.

- El dispositivo se configura para enviar actualizaciones de posición regulares e informes de eventos a d.plaspy.com (54.85.159.138) en el puerto 8888.
- Puede seleccionar transporte UDP o TCP en el dispositivo si es necesario; ambos son aceptados en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador al conectarse, de modo que la plataforma puede parsear el flujo de telemetría entrante.
- Las entradas digitales del dispositivo, el canal analógico configurable, datos seriales RS-485 y datos de sensores Bluetooth son reenviados por el dispositivo y se convierten en flujos de telemetría en Plaspy.
- Una vez que el reporte está activo, Plaspy ofrece seguimiento en vivo, historial de rutas y alertas basadas en eventos según los datos del dispositivo.

## Flujo de trabajo común de configuración

1. Acceda al método o software oficial de configuración de Navtelekom, como NTC Configurator o Navtelekom DRC.
2. Asegúrese de que el SMART S-2413 esté alimentado y que la SIM esté insertada y registrada en la red celular.
3. En los ajustes de servidor del dispositivo ingrese el dominio del servidor de Plaspy d.plaspy.com o la IP del servidor 54.85.159.138.
4. Establezca el puerto del servidor en 8888.
5. Elija el protocolo de transporte (UDP o TCP) si el firmware del dispositivo requiere selección de transporte.
6. Aplique o guarde la configuración y envíe los cambios al dispositivo.
7. Reinicie el dispositivo si la herramienta del fabricante o el firmware requieren un reinicio para aplicar los ajustes de red.
8. Valide que el dispositivo reporte a Plaspy y aparezca en la plataforma; verifique telemetría, actualizaciones de posición e informes de eventos.

## Comandos de configuración de ejemplo

El SMART S-2413 admite métodos de configuración local y remota a través de las herramientas de Navtelekom. La sintaxis exacta de comandos y los pasos varían según el firmware y la herramienta de configuración que utilice. Use el NTC Configurator oficial o Navtelekom DRC para comandos específicos del dispositivo y flujos de menú. Si utiliza configuración por SMS o una herramienta serial/USB proporcionada por Navtelekom, consulte la documentación del fabricante para los formatos precisos de comandos y los marcadores requeridos.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la ubicación de menús, la sintaxis de comandos y los transportes disponibles; confirme siempre la versión de firmware antes de seguir una guía procedural.
- Si el dispositivo requiere elegir entre UDP y TCP, puede usarse cualquiera de los dos; Plaspy acepta ambos en el puerto 8888 y autodetecta el protocolo entrante.
- Use las herramientas del fabricante (NTC Configurator o DRC) para configuraciones complejas como mapeo de periféricos RS-485, emparejamiento de sensores Bluetooth o canales de telemetría personalizados.
- Verifique que la SIM tenga datos suficientes y que los ajustes APN sean correctos mediante la herramienta de configuración de Navtelekom cuando sea necesario.
- Mantenga un registro del IMEI del dispositivo y de los datos de registro para ayudar a identificar la unidad en Plaspy después de la configuración.

## Por qué usar Plaspy con esta configuración

Usar el SMART S-2413 con Plaspy ofrece a los administradores de flota e integradores un camino sencillo hacia el seguimiento en tiempo real, monitoreo de eventos y telemetría consolidada. La flexibilidad de E/S del dispositivo, el soporte RS-485 y la capacidad de sensores Bluetooth permiten integrar múltiples tipos de sensores en una sola plataforma, mientras que Plaspy ingiere el flujo telemático estándar para proporcionar ubicación en vivo, rutas históricas y alertas por eventos.

Para conocer más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para los pasos de configuración específicos de dispositivo, comportamiento de firmware y documentación técnica completa, consulte al fabricante en https://www.navtelecom.ru/ para verificar la información actual.

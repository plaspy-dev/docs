---
slug: /aplicom/a11_ble/configuration
id: a11_ble-configuration
sidebar_label: Configuration
title: Aplicom - A11 BLE Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Aplicom A11 BLE y reportar a Plaspy usando ajustes de servidor compartidos y herramientas del fabricante
keywords:
  - Configuración Aplicom A11 BLE
  - Instalación Aplicom A11 BLE
  - Configuración servidor Aplicom A11 BLE
  - Integración rastreador Plaspy
  - Configuración servidor Plaspy
  - Configuración rastreador GPS Aplicom
  - Configuración seguimiento de flotas
  - Configuración telemática Bluetooth LE
  - Actualizaciones OTA telemáticas
  - Seguimiento de activos 4G LTE
---

# Aplicom - Configuración A11 BLE

Esta página describe el contexto público de configuración para usar el Aplicom A11 BLE con la plataforma Plaspy. Explica los ajustes de servidor compartidos que debe aplicar en el dispositivo y describe el flujo de trabajo general que utilizan instaladores y técnicos para conectar el A11 BLE a Plaspy y permitir el envío de ubicación y telemetría.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas específicas del proveedor. Aquí se usa la descripción del Aplicom A11 BLE como referencia práctica; para comandos o menús específicos del equipo consulte la documentación oficial de Aplicom y sus herramientas de configuración.

## Resumen de la configuración

Este proceso prepara el Aplicom A11 BLE para enviar datos de posición y estado a Plaspy, verifica que la plataforma alcance el dispositivo y habilita la visibilidad del activo dentro de las herramientas de flota de Plaspy. El foco está en aplicar el punto de enlace (endpoint) compartido de Plaspy y el puerto correspondiente, y en confirmar una ruta de datos operativa desde el dispositivo hasta la plataforma.

- Dirija el dispositivo a Plaspy usando los ajustes de servidor publicados para que la plataforma reciba los reportes del equipo.
- Seleccione el método de transporte (UDP o TCP) si la configuración del A11 BLE requiere elegir uno.
- Aplique y guarde la configuración del fabricante usando las herramientas oficiales de Aplicom o los flujos de trabajo soportados por instaladores.
- Valide que el dispositivo aparece y reporta correctamente en Plaspy tras la configuración.
- Utilice funciones OTA y Bluetooth cuando sean aplicables para gestionar ajustes y actualizaciones sin acceso físico.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888 for device reporting and platform ingestion  
- Transport support for UDP or TCP depending on device configuration requirements  
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Requisitos previos habituales

- Confirme que el A11 BLE tiene alimentación y que el cableado requerido en vehículo o activo está completo.  
- Asegúrese de que el dispositivo tenga conectividad móvil activa si la instalación lo requiere, y de que esté provisionado para el envío de datos.  
- Acceso al método oficial de configuración de Aplicom o al software del fabricante, o a una interfaz de instalador aprobada, para aplicar los ajustes de servidor.  
- Una cuenta en Plaspy o acceso a la plataforma para verificar que el dispositivo llega y reporta después de la configuración.  
- Tenga presente la versión de firmware del dispositivo y cualquier nota del proveedor que pueda afectar las opciones de configuración.  

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el Aplicom A11 BLE envía su ubicación y datos operativos al endpoint y al puerto compartidos de Plaspy para que la plataforma pueda mostrar, analizar y generar alertas sobre la actividad del dispositivo. La detección automática de protocolos de Plaspy elimina la necesidad de especificar el protocolo en el lado de la plataforma, aunque el rastreador mismo puede requerir la selección del transporte durante la configuración.

- Los reportes del dispositivo se dirigen a d.plaspy.com o a la IP del servidor 54.85.159.138 en el puerto 8888.  
- El rastreador puede configurarse para usar UDP o TCP si la herramienta exige seleccionar un transporte.  
- Plaspy recibe los mensajes entrantes e identifica automáticamente el protocolo del rastreador para su procesamiento.  
- Una vez activo el reporte, Plaspy ofrece visibilidad, registro de eventos y monitoreo del estado del activo.  
- Las actualizaciones OTA y el emparejamiento BLE en el A11 BLE permanecen disponibles para la gestión adicional del dispositivo e integración de sensores.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración de Aplicom o al software del fabricante para gestionar los ajustes del equipo.  
2. Ingrese el servidor de Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138 según lo permita la herramienta.  
3. Configure el puerto de reporte en 8888, que Plaspy utiliza para todos los dispositivos compatibles.  
4. Elija el transporte UDP o TCP si el dispositivo solicita una selección durante la configuración.  
5. Guarde o aplique la configuración con la herramienta de Aplicom o el flujo del instalador y confirme que el dispositivo aceptó el cambio.  
6. Valide que el dispositivo reporta a Plaspy y aparece en la plataforma con la conectividad y telemetría esperadas.

## Notas de configuración

- Las versiones de firmware y revisiones de hardware pueden mostrar menús u opciones distintas; registre siempre la versión de firmware al solucionar problemas.  
- Las prácticas del instalador y las variantes por mercado pueden afectar los canales de configuración disponibles y los comportamientos por defecto.  
- Si el equipo soporta UDP y TCP, evalúe cuál transporte se ajusta mejor a su red y reglas de firewall; Plaspy admite ambos.  
- El emparejamiento BLE y las funciones OTA en el A11 BLE son útiles para actualizaciones remotas e integración de accesorios, pero siga las indicaciones de Aplicom para esos flujos de trabajo.  
- Consulte siempre las instrucciones del fabricante para manejar de forma segura las actualizaciones y cambios de configuración del dispositivo.

## Por qué usar Plaspy con esta configuración

Usar el Aplicom A11 BLE con Plaspy ofrece una forma directa de integrar la telemetría de activos y vehículos en una única plataforma de flota y rastreo. El endpoint compartido de Plaspy y el puerto consistente simplifican el despliegue en flotas mixtas de dispositivos, mientras que la detección automática de protocolos de Plaspy reduce la complejidad de configuración en el lado de la plataforma.

Para conocer más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para obtener los métodos de configuración específicos más recientes, el comportamiento de firmware y los detalles del fabricante, verifique la información en el sitio de Aplicom https://www.aplicom.com/ ya que las especificaciones y los pasos de configuración del proveedor pueden cambiar con el tiempo.

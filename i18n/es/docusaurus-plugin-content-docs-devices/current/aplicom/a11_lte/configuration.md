---
slug: /aplicom/a11_lte/configuration
id: a11_lte-configuration
sidebar_label: Configuration
title: Aplicom - A11 LTE Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Aplicom A11 LTE con Plaspy usando la configuración de servidor compartido
keywords:
  - Configuración Aplicom A11 LTE
  - Configuración A11 LTE Aplicom
  - Aplicom A11 LTE Plaspy
  - Configuración rastreador GPS Aplicom
  - Configuración rastreador Plaspy
  - Configuración seguimiento de flotas
  - Configuración telemática LTE
  - Integración balizas Bluetooth
  - Actualizaciones OTA de dispositivos
  - Configuración seguimiento de activos
---

# Aplicom - Configuración A11 LTE

Esta página ofrece contexto público para la configuración de la unidad telemática Aplicom A11 LTE con la plataforma Plaspy. Explica los ajustes de servidor compartido y los pasos generales que deberá aplicar para apuntar un dispositivo A11 LTE a Plaspy, de modo que el equipo pueda reportar ubicación y telemetría a la plataforma. La guía se centra en los detalles de integración públicos y en el flujo de trabajo general para que el dispositivo sea visible en Plaspy.

Plaspy emplea ajustes de servidor compartido para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. No obstante, los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y las herramientas de configuración que proporcione Aplicom o su distribuidor. Consulte la documentación del fabricante y las utilidades de configuración para obtener indicaciones precisas sobre menús y acciones específicas de firmware.

## Visión general de la configuración

Este proceso prepara el A11 LTE para comunicarse con Plaspy indicando el punto de reporte hacia el servidor de Plaspy y comprobando la conectividad. El objetivo es garantizar que el dispositivo envíe sus datos a la plataforma de forma fiable para que los activos y vehículos aparezcan en Plaspy para su monitoreo e informes.

- Apuntar el endpoint de reporte del dispositivo a la dirección del servidor compartido de Plaspy.
- Configurar el dispositivo para usar el puerto y la opción de transporte que requiere el rastreador.
- Validar la conectividad móvil y cualquier emparejamiento Bluetooth de sensores necesario para su caso de uso.
- Confirmar que el dispositivo aparece en Plaspy y que se reciben muestras básicas de telemetría o ubicación.
- Tener en cuenta las configuraciones de firmware y OTA para asegurar que la configuración persista tras actualizaciones.

## Configuración del servidor de Plaspy

- server domain d.plaspy.com  
- server IP 54.85.159.138  
- port 8888  
- transport support for UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Requisitos habituales antes de la configuración

- Asegúrese de que el A11 LTE tenga una fuente de alimentación confiable y esté encendido durante la configuración inicial y las pruebas.
- Una conexión de datos móviles activa adecuada para 4G LTE y roaming según lo permita el dispositivo.
- Acceso al método o software oficial de configuración de Aplicom para aplicar los ajustes de servidor y transporte.
- Tener a mano el identificador del dispositivo o la información de serie para registro o verificación en Plaspy.
- Acceso físico para cualquier emparejamiento Bluetooth o instalación de sensores si su despliegue usa balizas o etiquetas.
- Verificación básica de alcance de red para que el dispositivo pueda resolver y alcanzar d.plaspy.com o la IP del servidor de Plaspy.

## Cómo se conecta este rastreador a Plaspy

Al configurarse para Plaspy, el A11 LTE envía su ubicación y la telemetría relevante al endpoint y puerto compartido del servidor de Plaspy, de modo que la plataforma pueda mostrar el estado y el movimiento del dispositivo. Plaspy utiliza el mismo puerto para todos los equipos y detecta automáticamente el protocolo que usa el rastreador para comunicarse.

- El dispositivo se configura para enviar paquetes de reporte a d.plaspy.com o a 54.85.159.138.
- Las comunicaciones se dirigen al puerto 8888 en el endpoint del servidor de Plaspy.
- El dispositivo puede configurarse para usar transporte UDP o TCP según las opciones disponibles.
- Plaspy detecta automáticamente el protocolo del rastreador y mapea los datos entrantes adecuadamente.
- Los reportes recibidos permiten la visibilidad, el procesamiento de eventos y el monitoreo operativo dentro de Plaspy.

## Flujo de configuración habitual

1. Acceda al método o software oficial de configuración de Aplicom proporcionado para el A11 LTE y localice los ajustes de servidor o reporte.
2. Ingrese d.plaspy.com o, alternativamente, la IP del servidor 54.85.159.138 como endpoint de reporte del dispositivo.
3. Configure el puerto de reporte a 8888 según lo requiere Plaspy.
4. Seleccione UDP o TCP si el dispositivo le pide elegir un protocolo de transporte para el reporte.
5. Guarde o aplique la configuración dentro de la herramienta de Aplicom y confirme que los cambios se mantienen.
6. Valide que el dispositivo reporte a Plaspy comprobando que aparece y envía datos a la plataforma.

## Notas de configuración

- Las versiones de firmware y las revisiones de hardware pueden afectar la disposición de los menús y las opciones disponibles; siga la documentación de Aplicom para pasos específicos del modelo.
- Las prácticas del instalador y las variantes regionales pueden modificar cómo se configuran la red y el roaming; confirme APN y ajustes de conectividad según sea necesario mediante las herramientas del fabricante.
- Elija UDP o TCP de acuerdo con las capacidades del dispositivo y las recomendaciones de Aplicom; Plaspy soporta ambos y detectará automáticamente el protocolo empleado.
- El emparejamiento de sensores Bluetooth y la configuración de balizas BLE son independientes de los ajustes de servidor; complete esos pasos desde la interfaz de Aplicom si planea usar sensores accesorios.
- Las actualizaciones OTA pueden cambiar el comportamiento; verifique los ajustes críticos después de actualizaciones importantes de firmware.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el Aplicom A11 LTE ofrece un camino directo para centralizar la visibilidad de flotas y activos al dirigir los reportes de los dispositivos a un endpoint compartido y detectado. Esto permite a las organizaciones consolidar datos de rastreo, monitorear el estado operativo y aprovechar las funciones de alertas e informes de Plaspy sin configurar un servidor personalizado por cada equipo.

Para obtener más información sobre Plaspy y las integraciones compatibles visite https://www.plaspy.com. Para los detalles específicos más recientes del fabricante sobre el A11 LTE, incluyendo notas de firmware, herramientas de configuración y manuales detallados de dispositivo, consulte el sitio web de Aplicom https://www.aplicom.com/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.

---
slug: /aplicom/a11_lte_ble/configuration
id: a11_lte_ble-configuration
sidebar_label: Configuration
title: Aplicom - A11 LTE BLE Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Aplicom A11 LTE BLE con Plaspy usando ajustes de servidor compartidos y pasos generales
keywords:
  - Configuración Aplicom A11 LTE BLE
  - Instalación Aplicom A11 LTE BLE
  - Configuración servidor Aplicom
  - Configuración rastreador Plaspy
  - Configuración dispositivo rastreo de flotas
  - Configuración plataforma rastreador GPS
  - Guía configuración rastreo de vehículos
  - Rastreo de activos Bluetooth LE
  - Conectividad A11 LTE BLE
  - Configuración dispositivo telemática
---

# Aplicom - A11 LTE BLE Configuración

Esta página describe el contexto público de configuración para usar el rastreador Aplicom A11 LTE BLE con Plaspy. Explica los valores de servidor compartidos que Plaspy espera y detalla los pasos generales necesarios para apuntar el dispositivo al endpoint de Plaspy, de modo que pueda enviar ubicación y datos de sensores a la plataforma.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador en el servidor. Los pasos exactos desde el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor que usted utilice. Use esta guía como referencia orientada a la plataforma y verifique cualquier paso específico del equipo en la documentación de Aplicom.

## Resumen de la configuración

El objetivo de esta configuración es preparar una unidad A11 LTE BLE para comunicarse de forma fiable con la plataforma Plaspy y validar que aparezca y reporte correctamente en la interfaz. El proceso se centra en aplicar los valores de servidor de Plaspy, confirmar el transporte seleccionado y verificar el reporte para que el dispositivo sea visible para operadores y sistemas de monitoreo.

- Apuntar el dispositivo al endpoint de Plaspy para que los reportes lleguen a la plataforma
- Seleccionar el transporte y puerto acorde a los requisitos de Plaspy
- Confirmar que el rastreador establece conectividad de red y puede alcanzar Plaspy
- Validar que la ubicación y cualquier dato de sensores Bluetooth LE aparezcan en Plaspy
- Asegurar que la configuración se guarde y persista para funcionamiento continuo

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de servidor de Plaspy al configurar el Aplicom A11 LTE BLE:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles y que la detección automática del protocolo se realiza en el servidor de Plaspy.

## Requisitos típicos antes de la configuración

- Una unidad Aplicom A11 LTE BLE instalada y con alimentación lista para configurar
- Conectividad celular activa u otro acceso a red según el dispositivo y la región
- Acceso a las herramientas de configuración de Aplicom o interfaces de instalador que proporcione el proveedor
- Conocer si la configuración del equipo se realiza por aire (OTA) o mediante una utilidad local
- Acceso a los ajustes del servidor Plaspy indicados arriba para ingresarlos en el dispositivo
- Una forma de observar los reportes del dispositivo en Plaspy para confirmar la configuración exitosa

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el A11 LTE BLE envía su telemetría y los datos de sensores disponibles al endpoint y puerto compartidos de Plaspy. Plaspy recibe el tráfico entrante del dispositivo, detecta el protocolo automáticamente y presenta los datos para monitoreo, mapeo y generación de eventos dentro de la plataforma.

- El rastreador se configura para reportar a d.plaspy.com o a la IP equivalente 54.85.159.138
- Los reportes se envían al puerto 8888 usando UDP o TCP según la configuración del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador y procesa los mensajes entrantes
- Los datos de ubicación y la información relacionada con Bluetooth LE se reenvían a Plaspy para su visualización
- La correcta llegada de reportes se valida confirmando que el dispositivo aparece y se actualiza en la plataforma Plaspy

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración oficial de Aplicom o al software proporcionado por el fabricante o proveedor.
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en la configuración del dispositivo donde se requiera el host del servidor.
3. Establezca el puerto del servidor en 8888 como destino de los reportes del dispositivo.
4. Elija UDP o TCP si el dispositivo requiere selección explícita del transporte.
5. Guarde o aplique la configuración en el dispositivo y permita que establezca conectividad de red.
6. Valide que el dispositivo reporte a Plaspy y que la telemetría aparezca según lo esperado en la plataforma.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar los nombres de menús y los flujos de configuración; consulte la documentación de Aplicom para los pasos exactos de su unidad.
- El dispositivo admite integración con Bluetooth LE para balizas y sensores que pueden emparejarse y reportarse a través de la unidad; los procedimientos de emparejamiento se realizan con las herramientas de Aplicom.
- Elija UDP o TCP de acuerdo con sus necesidades operativas y las recomendaciones de su instalador; Plaspy acepta cualquiera de los dos transportes en el puerto compartido.
- La región de mercado y las diferencias entre operadores móviles pueden afectar la conectividad y el comportamiento de roaming; asegure que el dispositivo tenga servicio compatible.
- Si el dispositivo soporta actualizaciones OTA, use las herramientas oficiales para mantener el firmware actualizado antes de despliegues a gran escala.

## Por qué usar Plaspy con esta configuración

Usar el Aplicom A11 LTE BLE con Plaspy ofrece un enfoque consistente y centrado en la plataforma para el monitoreo de flotas y activos. El A11 LTE BLE aporta conectividad móvil global y flexibilidad Bluetooth LE, mientras que Plaspy proporciona un único endpoint de servidor y detección de protocolo para simplificar la incorporación de dispositivos y la visibilidad continua.

Para más información sobre Plaspy y cómo gestiona las conexiones de dispositivos visite https://www.plaspy.com. Para métodos de configuración específicos del dispositivo, comportamiento de firmware y detalles del fabricante, verifique la información en el sitio de Aplicom https://www.aplicom.com/

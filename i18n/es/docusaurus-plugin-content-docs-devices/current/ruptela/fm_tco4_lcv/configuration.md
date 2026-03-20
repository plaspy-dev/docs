---
slug: /ruptela/fm_tco4_lcv/configuration
id: fm_tco4_lcv-configuration
sidebar_label: Configuration
title: Ruptela - FM-Tco4 LCV Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Ruptela FM-Tco4 LCV con ajustes del servidor Plaspy y pasos prácticos
keywords:
  - configuración Ruptela FM-Tco4 LCV
  - instalación Ruptela FM-Tco4 LCV
  - configuración rastreador Ruptela
  - configuración servidor FM-Tco4 LCV
  - configuración Plaspy FM-Tco4 LCV
  - configuración GPS Plaspy
  - instalación seguimiento de vehículo Ruptela
  - configuración rastreador gestión de flotas
  - configuración CANbus LCV
  - integración OBD II
---

# Ruptela - FM-Tco4 LCV: Configuración

Esta página ofrece contexto público y práctico para configurar el Ruptela FM-Tco4 LCV con Plaspy. Se centra en los ajustes compartidos del servidor y en los pasos habituales que debe seguir para que el rastreador entregue datos de posición y del vehículo a Plaspy para visibilidad y monitoreo de la flota.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use esta guía para preparar el FM-Tco4 LCV para Plaspy y consulte la documentación de Ruptela o a su instalador para instrucciones específicas del dispositivo.

## Visión general de la configuración

El objetivo al configurar el FM-Tco4 LCV para Plaspy es preparar el dispositivo para comunicarse de forma fiable con el servidor de Plaspy, de modo que la ubicación, los datos CANbus y OBD II sean visibles en su cuenta Plaspy. El proceso de configuración se centra en apuntar el rastreador a Plaspy, seleccionar el transporte correcto y verificar los reportes.

- Configure el dispositivo para que apunte al endpoint del servidor de Plaspy y pueda enviar ubicación y telemetría del vehículo.
- Seleccione el transporte adecuado (UDP o TCP) y asegúrese de que el puerto 8888 esté configurado.
- Valide la conectividad desde el rastreador hacia Plaspy usando herramientas de red o del fabricante.
- Confirme que el dispositivo esté reportando y sea visible en Plaspy después de aplicar los ajustes.
- Si utiliza configuración por SMS o software del fabricante, aplique los cambios según las indicaciones de Ruptela.

## Ajustes del servidor de Plaspy

Use los siguientes ajustes públicos de Plaspy al configurar el rastreador en el lado del fabricante:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP — the device may be configured using UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol so the platform can accept the device without manual protocol selection

Tenga en cuenta que todos los dispositivos en Plaspy usan el mismo puerto y Plaspy detectará automáticamente el protocolo del rastreador durante la comunicación inicial.

## Requisitos típicos antes de la configuración

- El FM-Tco4 LCV debe estar alimentado e instalado correctamente en el vehículo por un instalador calificado.
- Necesitará acceso a las herramientas oficiales de configuración de Ruptela o a la interfaz del instalador para cambiar los ajustes de servidor y transporte.
- Si piensa usar configuración por SMS o reporte celular, podría requerir una SIM activa con datos o capacidad SMS adecuada.
- Credenciales o acceso a la instancia de Plaspy para verificar la provisión del dispositivo y su visibilidad.
- Confirmación del cableado del vehículo o del acceso al CANbus si planea habilitar la recopilación de telemetría CANbus y OBD II.
- Un plan para probar la conectividad y los reportes una vez aplicados los ajustes.

## Cómo se conecta este rastreador a Plaspy

Al configurarse, el FM-Tco4 LCV envía su posición y datos del vehículo al endpoint y puerto compartidos de Plaspy para que la plataforma muestre seguimiento, lecturas CANbus y eventos OBD II. Plaspy recibe las transmisiones del dispositivo, reconoce automáticamente el protocolo y presenta la telemetría en el panel de la flota.

- El dispositivo envía reportes periódicos de posición a d.plaspy.com o a 54.85.159.138 en el puerto 8888
- El transporte puede ser UDP o TCP según la configuración del rastreador
- Plaspy detecta automáticamente el protocolo del rastreador para aceptar la transmisión entrante
- La telemetría del vehículo, como lecturas CANbus y OBD II, se reenvía a Plaspy cuando está habilitada en el dispositivo
- Los eventos y actualizaciones de estado se vuelven visibles en Plaspy para monitoreo e informes

## Flujo de configuración típico

1. Acceda al método o software oficial de configuración de Ruptela recomendado para dispositivos FM-Tco4 LCV (herramienta web, aplicación de escritorio o comandos SMS).
2. En los ajustes de servidor del dispositivo ingrese d.plaspy.com o la IP 54.85.159.138 como dirección del servidor.
3. Ajuste el puerto del dispositivo a 8888 (Plaspy utiliza el mismo puerto para todos los dispositivos compatibles).
4. Elija UDP o TCP si el rastreador requiere seleccionar un transporte.
5. Aplique o guarde la configuración en la herramienta de Ruptela o envíe la configuración por SMS si está usando ese método.
6. Reinicie el dispositivo si la herramienta o el procedimiento del fabricante exige un reinicio para aplicar los cambios.
7. Valide que el dispositivo reporte a Plaspy comprobando el estado del dispositivo y los mensajes entrantes en su cuenta Plaspy.

## Ejemplos de comandos de configuración

El FM-Tco4 LCV soporta múltiples métodos de configuración según el firmware y las herramientas del instalador. Dado que no se proporcionan comandos específicos del fabricante aquí, siga la interfaz oficial de configuración de Ruptela o la referencia de comandos SMS para la sintaxis exacta. Las herramientas habituales del fabricante permiten establecer la dirección del servidor, el puerto y el transporte con los valores de Plaspy indicados más arriba.

Si prefiere la configuración por SMS y la documentación de Ruptela incluye comandos SMS, utilice esos comandos para establecer:
- server address a d.plaspy.com o 54.85.159.138
- port a 8888
- transport a UDP o TCP

Siempre verifique los comandos y los marcadores de posición con la documentación de Ruptela antes de enviarlos.

## Notas de configuración

- Las diferencias de firmware pueden cambiar los nombres de menú, la sintaxis de comandos y las funciones disponibles. Confirme los pasos específicos por firmware con Ruptela.
- La configuración por SMS es compatible con el dispositivo para ciertas funciones, pero se recomienda usar la herramienta oficial de Ruptela o un instalador profesional para la configuración de CANbus y OBD II.
- La elección entre TCP y UDP puede afectar las garantías de entrega y el mantenimiento de sesiones; seleccione el transporte que requiera su red y las instrucciones de Ruptela.
- Plaspy utiliza el mismo puerto para todos los dispositivos y realiza la detección automática del protocolo, por lo que los valores críticos a ajustar son la dirección del servidor y el puerto.
- Mantenga un registro de cualquier identificador de dispositivo que ingrese en Plaspy para poder correlacionar un dispositivo entrante con el rastreador configurado.

## Por qué usar Plaspy con esta configuración

Configurar el Ruptela FM-Tco4 LCV para reportar a Plaspy ofrece a las organizaciones visibilidad centralizada de la ubicación del vehículo, el historial de rutas y la telemetría del vehículo, incluidas las lecturas CANbus y OBD II cuando están habilitadas. Esta integración apoya el monitoreo de combustible, la responsabilidad del conductor y el control operativo para flotas de vehículos comerciales ligeros.

Para saber más sobre Plaspy y cómo la plataforma funciona con rastreadores compatibles visite https://www.plaspy.com. Para instrucciones específicas del dispositivo, notas de firmware y los últimos detalles de configuración de Ruptela verifique la información en el sitio de Ruptela https://ruptela.com/ ya que los métodos de configuración del fabricante y el comportamiento del dispositivo pueden cambiar con el tiempo.

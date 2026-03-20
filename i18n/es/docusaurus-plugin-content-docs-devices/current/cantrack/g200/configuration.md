---
slug: /cantrack/g200/configuration
id: g200-configuration
sidebar_label: Configuration
title: CanTrack - G200 Configuration
sidebar_class_name: menu_item_tracker
description: Guía práctica para configurar el CanTrack G200 y reportar ubicación al servidor público de Plaspy
keywords:
  - Configuración CanTrack G200
  - Instalación CanTrack G200
  - Configuración servidor CanTrack G200
  - Configuración G200 Plaspy
  - Configuración rastreador GPS G200
  - Configuración GPS CanTrack
  - Configuración rastreador Plaspy
  - Rastreo vehicular G200
  - Rastreo de activos G200
  - Configuración rastreador GPRS
---

# CanTrack - Configuración del G200

Esta página describe el contexto público de configuración para usar el CanTrack G200 con Plaspy. Se centra en los ajustes prácticos del servidor y el flujo de trabajo necesarios para preparar el dispositivo a fin de que reporte ubicación y estado a la plataforma Plaspy, usando el endpoint y puerto compartidos que Plaspy requiere.

Plaspy utiliza un único punto de conexión y puerto compartido para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El G200 se comunica mediante satélites GPS y redes GSM GPRS e incluye funciones como ultra larga espera, múltiples métodos de posicionamiento, alarma por manipulación y almacenamiento en memoria, factores que pueden influir en cómo debe configurarse el reporte y los modos de ahorro de energía.

## Visión general de la configuración

El objetivo al configurar el G200 para Plaspy es dirigir el rastreador al endpoint del servidor de Plaspy y confirmar que reporte correctamente datos de posición y eventos. La configuración prepara el dispositivo para conectarse vía red celular y garantiza visibilidad en la plataforma Plaspy para seguimiento en tiempo real, alertas e historial.

- Apunte el dispositivo al endpoint del servidor de Plaspy y confirme la selección del protocolo de transporte cuando sea necesario.
- Asegúrese de que los ajustes de datos móviles, como el APN, estén configurados para que el enlace GPRS pueda transmitir los paquetes de rastreo.
- Configure los intervalos de reporte y los modos de ahorro de energía según las necesidades de la instalación para equilibrar la duración de la batería y la precisión de ubicación.
- Valide la conectividad confirmando que el dispositivo se registre y envíe datos a la plataforma Plaspy.
- Pruebe eventos clave como movimiento, geocercas y alarmas por manipulación para verificar la visibilidad en la plataforma.

## Ajustes del servidor de Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; the device may be configured using UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

Estos valores son el endpoint público y el puerto de Plaspy que el G200 debe apuntar para reportar a la plataforma.

## Requisitos típicos antes de la configuración

- Un dispositivo CanTrack G200 alimentado y accesible, instalado o disponible temporalmente para configuración.
- Servicio GSM GPRS activo en una SIM con plan de datos operativo y los ajustes APN del operador configurados.
- Acceso al método oficial de configuración de CanTrack o al software correspondiente para el modelo G200.
- Información básica sobre los intervalos de reporte deseados y modos de ahorro de energía para aplicar las opciones adecuadas.
- Un método para confirmar las comunicaciones del dispositivo, como una instalación temporal, banco de pruebas o un vehículo con cobertura celular.
- Su cuenta de CanTrack o el identificador del dispositivo listo para usar al validar el equipo en Plaspy.

## Cómo se conecta este rastreador a Plaspy

El CanTrack G200 envía su ubicación y datos del dispositivo a través de la red celular GPRS al endpoint y puerto del servidor Plaspy. Una vez configurado para apuntar al servidor de Plaspy, la plataforma recibirá la telemetría y la mostrará en la interfaz de Plaspy para monitoreo y alertas.

- El dispositivo se configura para reportar a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888.
- El transporte puede ser UDP o TCP según el firmware del equipo y la elección de configuración.
- Plaspy identifica el protocolo del dispositivo automáticamente una vez que los paquetes llegan al puerto compartido.
- Las actualizaciones de ubicación, alertas y las cargas de datos almacenados se reenvían a la plataforma Plaspy para su visualización e historial.
- La visibilidad en Plaspy permite monitorear movimiento, eventos de manipulación y otras alertas compatibles.

## Flujo común de configuración

1. Acceda al método oficial de configuración del CanTrack G200 o al software proporcionado por el fabricante.
2. En los ajustes del servidor, ingrese el dominio d.plaspy.com o la IP 54.85.159.138 como destino.
3. Establezca el puerto del servidor en 8888; tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos.
4. Elija el protocolo de transporte UDP o TCP si el dispositivo solicita una selección.
5. Configure los parámetros de red requeridos, como el APN de la tarjeta SIM, para que los datos GPRS estén disponibles.
6. Aplique o guarde la configuración en el dispositivo mediante la herramienta oficial o el método por comandos.
7. Reinicie o aplique un ciclo de energía al equipo si el fabricante lo exige para que los ajustes entren en efecto.
8. Valide que el dispositivo reporte a Plaspy comprobando la lista de dispositivos y las posiciones recientes en la plataforma Plaspy.

## Ejemplo de comandos de configuración

La documentación pública del modelo G200 no incluye cadenas de comandos específicas para configurar los ajustes del servidor. Los comandos exactos y su sintaxis pueden variar según la versión de firmware y la herramienta de configuración del fabricante. Use el software oficial de CanTrack, la app móvil o el conjunto de comandos documentado para el G200 para aplicar el dominio o la IP del servidor y el puerto 8888, seleccionando UDP o TCP si se solicita.

Si dispone de ejemplos de comandos suministrados por el fabricante, introdúzcalos en la herramienta oficial de configuración o envíelos siguiendo las instrucciones del proveedor. Para los marcadores de APN u otros valores similares, suministre los datos del APN de su operador donde se requiera.

## Notas de configuración

- Las diferencias de firmware pueden cambiar cómo se introducen las entradas de servidor y las opciones de transporte; siga la documentación del firmware del G200 para la sintaxis exacta.
- Seleccionar UDP o TCP puede afectar la fiabilidad y la reintentos de paquetes; elija el transporte que se ajuste a sus necesidades de instalación y a las indicaciones del firmware del dispositivo.
- Asegúrese de que el APN y los datos móviles del dispositivo estén configurados correctamente antes de probar la conectividad a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Si usa almacenamiento en memoria y comportamiento de almacenar y reenviar, confirme cómo el G200 sube los datos históricos una vez que se establece la conexión con Plaspy.
- Verifique siempre el proceso de configuración con la documentación o el soporte de CanTrack para tener en cuenta las herramientas del fabricante y las revisiones.

## Por qué usar Plaspy con esta configuración

Configurar el CanTrack G200 para que reporte a Plaspy ofrece un endpoint simple y consistente para la telemetría del dispositivo, permitiendo visibilidad centralizada y monitoreo operativo de vehículos y activos. Usar el servidor compartido de Plaspy y la detección automática de protocolo reduce la complejidad de configuración por dispositivo y ayuda a los equipos a estandarizar el despliegue en muchos rastreadores.

Learn more about Plaspy and its device compatibility at https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior, and manufacturer instructions confirm details on the official CanTrack site https://www.cantrackgps.com/.

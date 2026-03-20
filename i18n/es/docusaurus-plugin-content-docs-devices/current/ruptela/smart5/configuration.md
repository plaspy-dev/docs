---
slug: /ruptela/smart5/configuration
id: smart5-configuration
sidebar_label: Configuration
title: Ruptela - Smart5 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para integrar el rastreador Ruptela Smart5 con Plaspy, incluye ajustes de servidor y flujo de instalación
keywords:
  - Configuración Ruptela Smart5
  - Configuración Smart5
  - Configuración Smart5 Plaspy
  - Configuración rastreador GPS Smart5
  - Rastreo vehicular Smart5
  - Configuración servidor Smart5
  - Ruptela GPS Plaspy
  - Rastreo de flotas Smart5
  - Configuración telemetría Smart5
  - Integración rastreador GPS Plaspy
---

# Ruptela - Configuración del Smart5

Esta página documenta el contexto público de configuración para usar el rastreador GPS Ruptela Smart5 con Plaspy. Resume los ajustes de servidor compartidos de Plaspy que deberá ingresar en el equipo o en la herramienta del fabricante, describe los prerrequisitos comunes y plantea un flujo práctico para que el Smart5 reporte a Plaspy y así disponer de mapas en vivo, alertas y paneles de flota.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo se conecta. Los pasos exactos del fabricante para configurar Smart5 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor que utilice, por lo que considere esta guía como una referencia pública práctica y confirme los detalles específicos del equipo con el fabricante cuando sea necesario.

## Resumen de configuración

Este proceso prepara el Smart5 para enviar datos de localización y telemetría a la plataforma Plaspy, apuntando el rastreador al endpoint compartido de Plaspy y asegurando que el equipo tenga conectividad celular y la configuración de transporte correcta.

- Apunte el Smart5 al endpoint del servidor Plaspy para que los mensajes lleguen a la plataforma y sean procesados.
- Asegúrese de que el dispositivo tenga conectividad celular y los ajustes de APN o SIM requeridos para la carga de datos.
- Seleccione el modo de transporte que soporte el equipo e ingrese el puerto correcto para que Plaspy reciba los mensajes.
- Valide la conectividad y que la telemetría, CANbus y los datos de sensores aparezcan en Plaspy para visibilidad en tiempo real.
- Pruebe y supervise el comportamiento de reporte para confirmar el almacenamiento en búfer y la reconexión tras interrupciones temporales.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects
- Note that all devices in Plaspy use the same port 8888 for incoming tracker connections

## Requisitos típicos antes de la configuración

- Un Smart5 con alimentación y accesible, instalado en la forma adecuada según las necesidades del sitio.
- Conectividad celular activa para el dispositivo (Smart5 soporta LTE Cat 1 con retroceso a 2G) y una SIM válida configurada con el APN del operador.
- Acceso al método oficial de configuración de Ruptela o al software necesario para cambiar servidor, puerto y ajustes de transporte.
- Conocimiento de la versión de firmware del equipo y de cualquier procedimiento o credencial de configuración específicos del proveedor.
- Una cuenta en Plaspy o acceso administrativo para confirmar que el dispositivo aparece en su flota después de la configuración.
- Herramientas básicas para reiniciar el dispositivo o cortar la alimentación si necesita aplicar cambios con un reinicio.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el Smart5 envía sus ubicaciones en búfer y telemetría al endpoint y puerto compartidos de Plaspy para que la plataforma ingiera y muestre los datos. Plaspy recibe los mensajes, detecta el protocolo del rastreador automáticamente y procesa GNSS y telemetría del vehículo para reportes en tiempo real e históricos.

- Smart5 transmite posiciones GNSS y actualizaciones de ubicación al servidor Plaspy en d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Los frames CANbus y OBD capturados por el equipo se reenvían a Plaspy para diagnósticos y paneles de telemetría.
- Eventos del acelerómetro y lecturas de sensores, incluidos datos de sensores Bluetooth LE, se envían a Plaspy para el reporte de eventos.
- El dispositivo usa transporte TCP o UDP según su configuración; Plaspy acepta ambos y detecta el protocolo automáticamente.
- El almacenamiento local en el Smart5 permite que los registros se suban a Plaspy después de interrupciones cortas de conectividad.

## Flujo de configuración recomendado

1. Acceda al método de configuración oficial de Ruptela para Smart5 (herramienta web del fabricante, aplicación de escritorio o interfaz SMS/configuración).
2. Ingrese d.plaspy.com como dominio del servidor o, si la herramienta requiere una IP, use 54.85.159.138.
3. Establezca el puerto del servidor en 8888, que es el puerto compartido que usa Plaspy para todos los dispositivos.
4. Seleccione el modo de transporte UDP o TCP si el equipo exige elegir transporte.
5. Aplique o guarde la configuración en la herramienta del fabricante y confirme que los cambios fueron aceptados.
6. Reinicie el equipo si la herramienta o el dispositivo requieren un reboot para activar los nuevos ajustes del servidor.
7. Valide que el Smart5 reporte a Plaspy comprobando la presencia del equipo y la telemetría entrante en la plataforma Plaspy.

## Ejemplo de comandos de configuración

El método de configuración del Smart5 depende de las herramientas y el firmware de Ruptela. Dado que las utilidades del fabricante varían, esta página no proporciona la sintaxis específica de comandos del equipo. Al configurar el Smart5 normalmente ingresará los siguientes valores públicos en la herramienta de configuración de Ruptela que haya elegido:

- Server domain or IP: d.plaspy.com or 54.85.159.138
- Port: 8888
- Transport: UDP or TCP

Si prefiere la configuración por línea de comandos o SMS y su firmware lo soporta, consulte la referencia oficial de configuración del Ruptela Smart5 para los formatos exactos de comandos y las reglas de sustitución de marcadores. Siempre preserve los marcadores como los valores del APN cuando lo indique la herramienta del fabricante y verifique los comandos contra la documentación oficial de Ruptela.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la ubicación de los menús de configuración, los transportes disponibles o la sintaxis de comandos; confirme siempre con las notas de la versión del Ruptela Smart5 para su firmware.
- Elija TCP cuando su instalación requiera entrega fiable y ordenada, o UDP cuando prefiera menor overhead y entrega más rápida y la red sea estable; Plaspy acepta ambos.
- Asegúrese de que el APN y el registro celular sean correctos para que el dispositivo pueda alcanzar d.plaspy.com o 54.85.159.138 desde la red móvil.
- Si cambia las entradas de servidor para usar la dirección IP en lugar del dominio, verifique la política de DNS o ruteo directo del operador o del equipo requerida por su despliegue.
- Pruebe el reporte del dispositivo inmediatamente después de configurar y revise Plaspy para fijaciones GNSS, telemetría CAN/OBD y datos de sensores para confirmar la funcionalidad de extremo a extremo.

## Por qué usar Plaspy con esta configuración

Usar el Ruptela Smart5 con Plaspy ofrece a las flotas una vía práctica para combinar datos de posición GNSS precisos con diagnósticos del vehículo y telemetría de sensores en una sola plataforma. Apuntar el Smart5 al endpoint y puerto compartidos de Plaspy permite consolidar ubicación, datos CANbus y OBD y eventos de sensores para que los equipos operativos monitoreen vehículos, respondan a alertas y generen informes accionables.

Learn more about Plaspy and platform capabilities at https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time, so verify the latest Smart5 documentation and setup instructions at the official Ruptela website https://ruptela.com/.

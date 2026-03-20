---
slug: /topfly/tld2_d/protocol
id: tld2_d-protocol
sidebar_label: Protocol
title: TopFly - TLD2-D Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador GPS TopFly TLD2-D y cómo se comunica con Plaspy y ajustes comunes de conexión
keywords:
  - TopFly TLD2-D
  - Protocolo TLD2-D
  - Protocolo GPS TopFly
  - TLD2-D Plaspy
  - Rastreador OBDII TopFly
  - Protocolo de rastreo vehicular
  - Seguimiento de flotas TopFly
  - Protocolo de rastreador GPS Plaspy
  - Telemetría OBDII TLD2-D
  - Rastreador GPS con sensor Bluetooth
---

# TopFly - Protocolo TLD2-D

Esta página ofrece una visión pública del protocolo del rastreador GPS TopFly TLD2-D y explica cómo el dispositivo se comunica con la plataforma Plaspy. Está orientada a proporcionar contexto de alto nivel, sin revelar información sensible, para que administradores de flota, integradores y usuarios técnicos comprendan el comportamiento de conexión e informes al usar este rastreador OBDII plug and play con Plaspy.

El TLD2-D es compatible con Plaspy desde su configuración inicial y soporta múltiples transportes para telemetría y sensores. Plaspy utiliza ajustes de conexión compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, el comportamiento exacto del dispositivo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Esta página describe el contexto de conexión y pasos prácticos para alinear el reporte del dispositivo con Plaspy sin exponer internals propietarios del protocolo.

## Descripción general del protocolo

A alto nivel, el protocolo de comunicación del TLD2-D define cómo el rastreador se identifica, reporta posiciones GNSS, transmite telemetría CAN BUS y datos de sensores BLE, y notifica eventos a un servidor remoto. El protocolo permite que Plaspy ingiera ubicación, diagnóstico del vehículo e señales de sensores para usarlas en mapas, alertas y análisis históricos.

- Permite reportes de posición GNSS y actualizaciones de ubicación con marca temporal para seguimiento en tiempo real e historial
- Transporta telemetría OBDII y CAN BUS como VIN, odómetro, nivel de combustible, RPM y DTC para diagnóstico de flotas
- Transmite lecturas de sensores BLE y eventos del dispositivo junto a la ubicación para enriquecer los flujos de monitoreo
- Señala el estado del dispositivo y eventos como cambios de encendido, conducción brusca y alertas de batería de respaldo
- Proporciona los identificadores y campos de telemetría necesarios para que Plaspy pueda correlacionar los datos del dispositivo con vehículos y activos de la flota

## Cómo detecta Plaspy el protocolo

Plaspy acepta conexiones de dispositivos en un endpoint y puerto entrante compartidos y está diseñado para detectar automáticamente el protocolo de reporte que usan los rastreadores compatibles. Cuando un TLD2-D se configura para reportar a Plaspy, normalmente no es necesario seleccionar el protocolo de forma manual dentro de Plaspy.

- Plaspy recibe datos de dispositivos en el dominio d.plaspy.com y en la IP pública del servidor 54.85.159.138
- Todos los dispositivos en Plaspy usan el mismo número de puerto 8888 para el tráfico entrante de rastreadores
- El TLD2-D puede configurarse para usar UDP o TCP en el puerto 8888 según los ajustes del dispositivo y las condiciones de red
- Plaspy detecta automáticamente el protocolo del rastreador una vez que el dispositivo empieza a reportar al endpoint compartido
- Si un dispositivo está correctamente apuntado al endpoint de Plaspy, usted por lo general no necesitará elegir un protocolo manualmente dentro de la plataforma

## Contexto de transporte y conexión

La elección de la conexión y del transporte afecta la confiabilidad, la latencia y la forma en que el dispositivo establece sesiones con Plaspy. El TLD2-D soporta varios modos de transporte y puede configurarse para apuntar a Plaspy usando el nombre de dominio o la IP pública del servidor.

- El TLD2-D puede reportar a Plaspy usando TCP o UDP en el puerto 8888 según la configuración del dispositivo
- Los dispositivos pueden configurarse para enviar telemetría a d.plaspy.com o directamente a 54.85.159.138
- Plaspy utiliza el único puerto entrante 8888 para todos los rastreadores soportados para simplificar la configuración de dispositivos
- La selección del transporte puede verse influida por el comportamiento de la red, recomendaciones del operador y configuraciones por defecto del firmware
- MQTT y SMS también son soportados por la familia de dispositivos como rutas alternativas de telemetría cuando aplican, mientras que Plaspy ingiere los reportes primarios por TCP o UDP

## Notas de compatibilidad del protocolo

- Confirme que el dispositivo ejecuta un firmware que expone los campos de telemetría que usted requiere, ya que las versiones de firmware pueden ampliar o cambiar los valores reportados
- Las revisiones de hardware y las variantes regionales pueden diferir en bandas soportadas, transportes o capacidades de sensores
- La selección de transporte (TCP versus UDP) puede afectar las garantías de entrega y debe alinearse con la política de su flota y el entorno de red
- El comportamiento de sensores BLE y los modelos de accesorios compatibles puede variar según el firmware y debe validarse durante el despliegue
- Aunque el TLD2-D es compatible con Plaspy desde su configuración, verifique que los transportes opcionales que planea usar estén habilitados en los ajustes del dispositivo
- Consulte la documentación del fabricante para ejemplos de configuración específicos del dispositivo y notas de firmware antes de un despliegue masivo

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación y las opciones de transporte ayuda a los equipos a configurar los dispositivos correctamente, solucionar problemas de conectividad y mantener la fiabilidad operativa a largo plazo con Plaspy. Tener claridad sobre qué reporta el dispositivo y cómo se conecta reduce la fricción en la integración y favorece un comportamiento predecible en flotas en producción.

- Asegura que los reportes del dispositivo apunten a d.plaspy.com o a la IP del servidor de Plaspy y usen el puerto 8888 según lo requerido
- Ayuda a diagnosticar problemas de conectividad relacionados con TCP versus UDP o comportamientos de conmutación celular
- Facilita la validación de que la telemetría CAN BUS y BLE se esté recibiendo e interpretando correctamente por Plaspy
- Apoya la planificación de actualizaciones de firmware y las comprobaciones de compatibilidad en una flota con revisiones variadas
- Contribuye a crear reglas de monitoreo y alertas en Plaspy que dependan de campos de evento y telemetría consistentes

## Por qué usar Plaspy con este protocolo

Usar el TopFly TLD2-D con Plaspy ofrece una vía rápida y sin complicaciones hacia la telemática operativa. La forma OBDII plug and play, junto con diagnósticos de vehículo y la integración de sensores, brinda a los equipos de operaciones visibilidad inmediata sobre ubicación, salud del vehículo y condiciones ambientales sin instalaciones complejas. Plaspy ingiere la telemetría del dispositivo y la presenta en mapas, alertas e informes útiles para gestión de flotas, respuesta ante robo y programas de seguridad de conductores.

Para conocer más sobre cómo Plaspy funciona con dispositivos compatibles y revisar las funciones de la plataforma, visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo; verifique la información más reciente específica del dispositivo y del firmware en el sitio del fabricante https://www.topflytech.com/ antes de realizar un despliegue a gran escala.

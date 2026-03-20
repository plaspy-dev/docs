---
slug: /concox/jm_vl04/protocol
id: jm_vl04-protocol
sidebar_label: Protocol
title: Concox - JM-VL04 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del Concox JM-VL04 y cómo se comunica con Plaspy usando configuración compartida de servidor
keywords:
  - protocolo Concox JM-VL04
  - protocolo GPS Concox JM-VL04
  - protocolo JM-VL04
  - rastreador JM-VL04 Plaspy
  - protocolo rastreador vehicular Concox
  - protocolo de comunicación JM-VL04
  - protocolo de rastreo JM-VL04
  - protocolo rastreador OBD Concox
  - compatibilidad de dispositivos Plaspy
  - protocolo GPS vehicular Plaspy
---

# Concox - Protocolo JM-VL04

Esta página explica el contexto público del protocolo para integrar el rastreador OBD Concox JM-VL04 con Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy a alto nivel y en qué aspectos de la configuración del dispositivo y la red son relevantes para una integración exitosa, sin exponer detalles privados de implementación.

El JM-VL04 es un rastreador OBD 4G orientado a uso profesional con características como acelerómetro, giroscopio, cálculo de kilometraje, compensación en zonas con poca cobertura GNSS, alarma por voz, escucha remota, configuración vía BLE y soporte amplio de bandas LTE. Plaspy utiliza ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Resumen del protocolo

El protocolo del JM-VL04 define cómo el equipo envía ubicación, estado y eventos a un servidor remoto, y cómo llegan los comandos de configuración de vuelta al dispositivo. En una integración con una plataforma como Plaspy, el protocolo permite identificar el dispositivo, entregar telemetría GPS y de sensores, y reportar alarmas o estados diagnósticos relevantes para operaciones de flota.

- Permite telemetría periódica y por eventos desde el rastreador hacia el servidor para datos de ubicación y sensores.
- Incluye información de identificación y estado del dispositivo para que Plaspy asocie los reportes con el vehículo y la configuración correctos.
- Transmite alarmas y eventos de comportamiento del conductor generados por el acelerómetro, el giroscopio y los algoritmos a bordo.
- Soporta actualizaciones de configuración y parámetros mediante comandos remotos o configuración asistida por BLE según implemente el fabricante.
- Ayuda a la plataforma a compensar huecos de GNSS y complementar datos de sensores para ofrecer seguimiento continuo en áreas con recepción satelital débil.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en un endpoint compartido y detecta automáticamente el protocolo del rastreador, por lo que normalmente no es necesario seleccionar manualmente un protocolo cuando el dispositivo está bien configurado para reportar a Plaspy. La detección se centra en identificar el formato y los campos presentes en los reportes del dispositivo, sin acceder ni modificar internamente el equipo.

- Plaspy escucha en el endpoint compartido d.plaspy.com y en la IP 54.85.159.138 usando el puerto estándar 8888.
- La plataforma detecta automáticamente el protocolo del rastreador a partir del tráfico entrante, por lo que la selección de protocolo dentro de Plaspy suele ser innecesaria.
- Un JM-VL04 correctamente configurado debe apuntar su dirección de reporte a d.plaspy.com o a 54.85.159.138 usando el transporte seleccionado.
- Plaspy soporta los comportamientos de reporte comunes en rastreadores vehiculares y mapea los datos entrantes a registros de dispositivo y flujos de telemetría.
- Si un dispositivo no aparece registrado, verificar que esté reportando al endpoint y al puerto de Plaspy es el primer paso recomendado.

## Transporte y contexto de conexión

El JM-VL04 puede usar redes celulares para alcanzar el endpoint de Plaspy. Según el soporte del dispositivo y la configuración, puede emplear UDP o TCP para el reporte. Entender cómo se apunta el dispositivo hacia Plaspy y qué transporte se utiliza ayuda a asegurar la entrega confiable de datos de ubicación y eventos.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según firmware y ajustes del usuario.
- El endpoint público de Plaspy es accesible en d.plaspy.com y directamente en 54.85.159.138 en el puerto 8888.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica el enrutamiento y la configuración.
- La elección entre UDP y TCP puede afectar las garantías de entrega; verifique la documentación o la interfaz de configuración del dispositivo para opciones de transporte.
- Asegúrese de que el plan de datos de la SIM y la cobertura de red soporten el transporte elegido y que los ajustes APN sean correctos para conexiones salientes.

## Notas sobre compatibilidad del protocolo

- Versiones de firmware y revisiones de hardware pueden introducir diferencias en el formato de los reportes o en los campos incluidos.
- Las plantillas de configuración del fabricante pueden permitir alternar entre modos de reporte UDP y TCP; confirme el transporte seleccionado al integrar equipos.
- Funciones como alarma por voz, escucha remota y configuración BLE son capacidades del dispositivo y pueden no afectar directamente el protocolo de red, aunque influyen en los flujos de configuración.
- Algunas implementaciones incluyen campos opcionales o extensiones; la detección automática de Plaspy maneja variaciones comunes, pero se recomienda validar con un reporte de muestra funcional.
- Siempre confirme que los ajustes de reporte del dispositivo apunten a d.plaspy.com o 54.85.159.138 en el puerto 8888 al resolver conectividad.
- Cuando sea posible, pruebe un dispositivo en un entorno controlado antes de un despliegue masivo para confirmar el comportamiento esperado con Plaspy.

## Por qué es importante entender el protocolo

Conocer el protocolo de comunicación y el contexto de conexión facilita la configuración fiable, la resolución eficiente de problemas y la operación sostenida de la flota. Tener claridad reduce el tiempo de integración y ayuda a mantener una telemetría consistente en flotas heterogéneas.

- Agiliza la puesta en marcha al confirmar que el dispositivo reporta al endpoint y puerto correctos de Plaspy.
- Facilita el diagnóstico de problemas de conectividad al acotar si la causa está en el transporte, el APN o la configuración del equipo.
- Mejora el manejo de alarmas y eventos al clarificar qué señales enviará realmente el dispositivo según distintas versiones de firmware.
- Ayuda a planificar actualizaciones de firmware o cambios de hardware al identificar posibles cambios en el protocolo que afecten el mapeo de datos.
- Permite entablar conversaciones informadas con el fabricante cuando un comportamiento parece depender del firmware o de la implementación.

## Por qué usar Plaspy con este protocolo

Integrar el Concox JM-VL04 con Plaspy ofrece a las organizaciones una forma práctica de capturar telemetría OBD y de sensores junto con datos de ubicación y eventos. Las funciones orientadas al vehículo del JM-VL04, como el cálculo de kilometraje, la detección de comportamiento de conducción y el soporte ampliado de bandas de red, complementan las capacidades de telemetría centralizada, alertas y supervisión de flota de Plaspy para proporcionar información útil sobre los vehículos.

Para saber más sobre Plaspy y cómo funciona con dispositivos como el JM-VL04, visite https://www.plaspy.com. Para detalles específicos del protocolo, notas de firmware y guías de configuración más recientes, verifique la información con el fabricante en https://www.iconcox.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.

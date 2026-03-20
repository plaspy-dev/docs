---
slug: /concox/jm_vl02/protocol
id: jm_vl02-protocol
sidebar_label: Protocol
title: Concox - JM-VL02 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para integrar el rastreador Concox JM-VL02 con Plaspy y gestionar telemetría y seguimiento de flotas
keywords:
  - Protocolo Concox JM-VL02
  - Protocolo GPS Concox JM-VL02
  - Protocolo de comunicación Concox JM-VL02
  - Protocolo de rastreo Concox JM-VL02
  - Protocolo de rastreador GPS Concox
  - Compatibilidad JM-VL02 con Plaspy
  - Protocolo de rastreo de vehículos
  - Protocolo de gestión de flotas
  - Protocolo de telemetría GPS
  - Protocolo de inmovilizador y alarma
---

# Concox - Protocolo JM-VL02

Esta página describe el contexto público del protocolo para usar el rastreador Concox JM-VL02 con Plaspy. Se enfoca en cómo el dispositivo se comunica con la plataforma Plaspy en términos generales, para que integradores y operadores de flotas comprendan el comportamiento de conexión e informes utilizado para el seguimiento en tiempo real y la telemetría de los vehículos.

El JM-VL02 es un rastreador vehicular industrial con LTE Cat-M1 / NB2 y conmutación a GSM 2G, posicionamiento GNSS, entradas/salidas para vehículo (ACC/ignición, SOS, relé) y un acelerómetro integrado. Plaspy usa ajustes de conexión compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador; el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Resumen del protocolo

El protocolo de comunicación del JM-VL02 define cómo el rastreador informa posición, telemetría, eventos y señales de control básicas a un servidor remoto para que una plataforma como Plaspy pueda recibir y procesar esos datos. Esta página evita detalles de implementación y explica el papel práctico del protocolo en un despliegue con Plaspy.

- Permite la entrega periódica y basada en eventos de posiciones GNSS y de localización derivada de la red celular al backend.
- Transmite el estado del vehículo y entradas como estado de ACC/ignición, pulsaciones del botón SOS, eventos de entradas digitales y estado del relé para soportar flujos de trabajo de telemática y seguridad.
- Reporta eventos derivados del acelerómetro para detección de conducción brusca, colisiones y otras alertas de movimiento útiles para la supervisión de seguridad.
- Proporciona un canal para comandos remotos y señales de control iniciadas desde la plataforma de flotas cuando el dispositivo y el firmware del fabricante lo permiten.
- Permite que el rastreador se identifique para que la plataforma asocie los datos entrantes con el registro de activo correcto.

## Cómo detecta Plaspy el protocolo

Plaspy acepta conexiones entrantes de una amplia gama de modelos de rastreadores utilizando un único endpoint y puerto compartidos. Cuando un JM-VL02 u otro rastreador compatible reporta a Plaspy, la plataforma identifica automáticamente el protocolo del dispositivo, por lo que normalmente no es necesario seleccionar el protocolo manualmente dentro de Plaspy si el dispositivo está configurado correctamente.

- Plaspy espera que los rastreadores reporten al endpoint de la plataforma en d.plaspy.com o directamente a la IP del servidor 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración entre modelos.
- El dispositivo puede estar configurado para enviar datos mediante UDP o TCP en el puerto 8888, según la configuración del equipo y las condiciones de la red.
- Si el rastreador está configurado para apuntar al endpoint de Plaspy y la red permite conexiones salientes, Plaspy detectará el protocolo automáticamente y comenzará a ingerir la telemetría.
- En la mayoría de los despliegues, el usuario solo configura el APN y la dirección del servidor; Plaspy se encarga de la identificación del protocolo al recibir los datos.

## Transporte y contexto de conexión

El transporte describe cómo el rastreador alcanza los servidores de Plaspy, más que el formato interno de los mensajes. El JM-VL02 soporta modos de conectividad celular diseñados para maximizar cobertura y continuidad, y puede configurarse para entregar datos a Plaspy usando los ajustes de transporte compartidos de la plataforma.

- Los dispositivos pueden configurarse para usar UDP o TCP para el reporte, ambos en el puerto 8888.
- Los rastreadores pueden apuntar al hostname d.plaspy.com o a la IP del servidor 54.85.159.138 al configurar el servidor de reportes.
- El puerto 8888 es utilizado por todos los dispositivos en Plaspy, lo que reduce la variación de configuración en una flota mixta.
- Consideraciones de red como restricciones del operador, ajustes de APN y reglas de firewall pueden afectar el comportamiento del transporte y deben validarse durante la instalación.
- La elección entre UDP y TCP puede depender de la fiabilidad de la red local, las opciones del firmware del dispositivo y las indicaciones del operador.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware del fabricante pueden cambiar qué eventos se reportan, con qué frecuencia se envían y qué funciones opcionales están soportadas.
- Revisiones de hardware o variantes regionales del JM-VL02 pueden exponer diferentes configuraciones de E/S o comportamientos de sensores; verifique los pines físicos y el cableado de entradas antes del despliegue.
- La selección del transporte (UDP vs TCP) puede necesitar ajustes según el comportamiento del operador y las garantías de entrega deseadas.
- Las capacidades de comando remoto, como el control del relé, dependen de las características del firmware y de los protocolos de comando admitidos por el fabricante.
- Valide la compatibilidad y los ajustes recomendados frente a la documentación oficial de Concox y las notas de versión correspondientes al SKU y versión de firmware exactos.
- Pruebe un dispositivo de muestra en la red celular prevista y contra el endpoint de Plaspy para confirmar el comportamiento esperado antes de un despliegue a gran escala.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del rastreador ayuda a asegurar una configuración correcta, operación predecible y una resolución de problemas más rápida al integrar dispositivos JM-VL02 con Plaspy. Saber qué reportará el equipo y cómo llega la información a la plataforma hace que los despliegues sean más confiables y fáciles de mantener.

- Confirma que la posición, el estado de ignición y los eventos de entradas llegan a Plaspy como se espera para los flujos de estado de activos y alarmas.
- Ayuda a seleccionar ajustes de transporte y APN apropiados para una entrega fiable en la red celular objetivo.
- Facilita la depuración de telemetría faltante o malformada al acotar posibles causas entre firmware del dispositivo, red o configuración.
- Asegura que las acciones de control remoto, como la inmovilización por relé, se mapeen correctamente y solo se invoquen cuando estén soportadas y autorizadas.
- Apoya la planificación de mantenimiento a largo plazo al considerar actualizaciones de firmware y revisiones de hardware en el ciclo de vida del dispositivo.

## Por qué usar Plaspy con este protocolo

Usar el JM-VL02 con Plaspy combina hardware robusto orientado a vehículos con una plataforma diseñada para ingerir ubicación, telemetría y datos de eventos. Para flotas que necesitan visibilidad sobre la ubicación del vehículo, comportamiento del conductor, estado de ignición y eventos de emergencia, esta integración proporciona las corrientes de datos esenciales para despacho, monitoreo de seguridad y prevención de pérdidas.

Plaspy acepta conexiones de dispositivos JM-VL02 en d.plaspy.com o 54.85.159.138 en el puerto 8888 y detectará automáticamente el protocolo del rastreador cuando los dispositivos estén configurados para reportar a ese endpoint. Para saber más sobre Plaspy y cómo soporta la telemática de flotas visite https://www.plaspy.com. Para detalles específicos del protocolo del dispositivo, notas de firmware y guías del fabricante del JM-VL02, verifique la información en el sitio oficial de Concox https://www.iconcox.com/ ya que el soporte del protocolo y el comportamiento del firmware pueden cambiar con el tiempo.

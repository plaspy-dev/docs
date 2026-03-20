---
slug: /gotop/a5g/protocol
id: a5g-protocol
sidebar_label: Protocol
title: GOTOP - A5G Protocol
sidebar_class_name: menu_item_tracker
description: Información pública del protocolo GOTOP A5G para integración con Plaspy con ajustes de conexión y guía de compatibilidad
keywords:
  - Protocolo GOTOP A5G
  - Protocolo GPS GOTOP A5G
  - Compatibilidad GOTOP A5G Plaspy
  - Comunicación GOTOP A5G
  - Protocolo de rastreo GOTOP A5G
  - Protocolo rastreador GPS GOTOP
  - Protocolo GPS para flotas
  - Protocolo de rastreo vehicular
  - Compatibilidad de dispositivos Plaspy
  - Telemetría GOTOP
---

# GOTOP - Protocolo A5G

Esta página ofrece el contexto público del protocolo para usar el rastreador vehicular GOTOP A5G con la plataforma Plaspy. Se concentra en cómo se comunica el dispositivo en términos generales, qué ajustes de conexión requiere Plaspy y cómo esa comunicación permite seguimiento en tiempo real, alarmas y telemetría, sin exponer detalles sensibles de implementación. El A5G es un rastreador con cámara compatible con 4G+3G+2G, con interfaces RS232 y 1-wire y alarmas configurables, por lo que resulta adecuado para flotas, taxis, alquileres y aplicaciones antirrobo cuando está conectado a Plaspy.

Plaspy usa ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando un equipo se reporta al endpoint de Plaspy. No obstante, el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Este documento explica los aspectos públicamente útiles de esa integración, incluyendo el endpoint de Plaspy y las opciones de transporte, y recomienda confirmar detalles específicos de firmware con el fabricante.

## Resumen del protocolo

El protocolo de reporte del rastreador define cómo el A5G se identifica ante un servidor, informa posición y datos de sensores, y transmite eventos de alarma y estado para su uso en una plataforma de flotas como Plaspy. A alto nivel, el protocolo cubre identificación del dispositivo, telemetría periódica o basada en eventos y actualizaciones de estado que Plaspy consume para poblar mapas, alertas y registros históricos.

- Permite que el A5G envíe coordenadas GPS, localización por fallback GSM, velocidad, rumbo y valores de sensores a Plaspy para visibilidad en tiempo real.
- Transporta información de alarmas y eventos como SOS, jamming, corte de antena, corte de energía, apertura de puertas y eventos de encendido para que Plaspy active alertas y flujos de trabajo.
- Proporciona información de identificación y estado que permite a Plaspy asociar los reportes con el vehículo y el registro de dispositivo correctos.
- Soporta intervalos de reporte y desencadenantes de eventos configurables para que los operadores equilibren frecuencia de actualización y consumo de datos.
- Funciona sobre transportes de red estándar, de modo que el dispositivo puede reportar al endpoint centralizado de Plaspy para su procesamiento y visualización.

## Cómo detecta Plaspy el protocolo

La plataforma de Plaspy acepta conexiones en un endpoint y puerto compartidos y está diseñada para detectar automáticamente el protocolo del rastreador cuando un dispositivo bien configurado se reporta. En la mayoría de implementaciones, el dispositivo solo necesita configurarse para reportar al endpoint de Plaspy y elegir un transporte apropiado; Plaspy se encarga del resto sin que sea necesario seleccionar manualmente el protocolo en la interfaz.

- El dominio público del servidor de Plaspy para reportes de dispositivos es d.plaspy.com y la IP del servidor es 54.85.159.138.
- Plaspy escucha en el puerto 8888 para reportes de dispositivos y todos los dispositivos en Plaspy usan el mismo puerto.
- Cuando el A5G se configura para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888, Plaspy aceptará la conexión y realizará la detección automática del protocolo.
- Por lo general, los usuarios no necesitan seleccionar un protocolo dentro de Plaspy si el dispositivo está enviando datos al endpoint de Plaspy y está configurado correctamente.
- Si un dispositivo no se comunica como se espera, verificar la configuración de red, la versión de firmware y la selección del transporte suele ser el primer paso.

## Contexto de transporte y conexión

El A5G puede configurarse para usar transportes de red comunes para alcanzar el endpoint de recolección de Plaspy. La elección del transporte puede depender del firmware del dispositivo y de las opciones de configuración que ofrece GOTOP; los operadores deben confirmar los modos disponibles para su revisión de hardware antes del despliegue.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y la configuración.
- Los equipos pueden apuntar al dominio d.plaspy.com o a la dirección numérica del servidor 54.85.159.138 al configurar el endpoint de reporte.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos compatibles para simplificar la configuración y las reglas de firewall de red.
- Consideraciones de red como la configuración del APN, el enrutamiento de datos del plan SIM y el comportamiento de roaming del operador pueden afectar la conectividad al endpoint de Plaspy.
- Asegúrese de que el tráfico saliente hacia d.plaspy.com en el puerto 8888 esté permitido desde la red del vehículo o la pasarela celular usada por el dispositivo.

## Notas de compatibilidad del protocolo

- Las variaciones de firmware pueden cambiar los modos de reporte disponibles, el soporte de transportes y características opcionales como el reenvío de eventos de cámara o el mapeo de sensores.
- Las revisiones de hardware del A5G pueden exponer diferentes interfaces o cableado para RS232, 1-wire y entradas analógicas; verifique el pinout y el cableado de su unidad.
- Los menús de configuración del fabricante y los APN predeterminados pueden variar por región o lote de producción; actualice los ajustes para apuntar a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Algunas funciones avanzadas, como inmovilización remota o transferencia de evidencias de cámara, pueden requerir firmware específico o manejo del lado del servidor que debe validarse.
- La selección de transporte (UDP frente a TCP) puede afectar la fiabilidad y el tiempo de entrega de los mensajes; elija el transporte soportado por su firmware y recomendado por GOTOP para su caso de uso.
- Valide siempre el comportamiento del dispositivo después de actualizaciones de firmware, ya que ajustes del protocolo o nuevas funciones pueden cambiar la forma en que el rastreador reporta.

## Por qué es importante entender el protocolo

Un conocimiento práctico del protocolo de comunicación del A5G ayuda a instaladores y operadores a configurar correctamente los dispositivos, solucionar problemas de conectividad y asegurar la calidad consistente de los datos en Plaspy para operaciones diarias y respuesta a incidentes.

- Ayuda a confirmar que el dispositivo está reportando al endpoint y transporte correctos de Plaspy para que los datos aparezcan en la cuenta adecuada.
- Facilita la resolución de telemetría faltante al guiar las comprobaciones de APN, acceso saliente al puerto 8888 y alcance del servidor d.plaspy.com o 54.85.159.138.
- Permite tomar decisiones informadas sobre intervalos de reporte y desencadenantes de eventos para equilibrar puntualidad y costos de datos móviles.
- Aclara qué entradas de sensores y alarmas se mapean a eventos en Plaspy para que las alertas y automatizaciones se configuren con precisión.
- Prepara a los equipos para validar el comportamiento tras actualizaciones de firmware o al cambiar revisiones de hardware y así evitar cambios inesperados en los reportes.

## Por qué usar Plaspy con este protocolo

Usar el GOTOP A5G con Plaspy ofrece a las organizaciones visibilidad consolidada de la ubicación de los vehículos, alarmas, eventos de conductor y datos opcionales de cámara o sensores. El panel centralizado y las alertas de Plaspy convierten la telemetría del A5G en información operativa para enrutamiento, seguridad, mantenimiento y cumplimiento, beneficiando a flotas, operaciones de alquiler y proveedores de transporte.

Si desea saber más sobre cómo Plaspy maneja integraciones de dispositivos, visite https://www.plaspy.com para explorar las características de la plataforma y guías de despliegue. El soporte de protocolos, el comportamiento de firmware y los detalles de implementación de los dispositivos pueden cambiar con el tiempo, por lo que le recomendamos verificar la información más reciente específica del A5G y las notas de firmware con el fabricante en https://www.gotop.cc/.

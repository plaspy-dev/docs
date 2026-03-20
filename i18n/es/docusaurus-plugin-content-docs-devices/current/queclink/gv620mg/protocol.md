---
slug: /queclink/gv620mg/protocol
id: gv620mg-protocol
sidebar_label: Protocol
title: QuecLink - GV620MG Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador QuecLink GV620MG y cómo se comunica con Plaspy para un seguimiento de flotas fiable
keywords:
  - Protocolo QuecLink GV620MG
  - QuecLink GV620MG GPS
  - Compatibilidad GV620MG Plaspy
  - Protocolo de comunicación GV620MG
  - Protocolo de seguimiento GV620MG
  - Protocolo del rastreador QuecLink
  - Rastreador LTE GPS GV620MG
  - Protocolo GPS para remolques
  - Seguimiento de flotas Plaspy
  - Compatibilidad de dispositivos Plaspy
---

# QuecLink - Protocolo GV620MG

Esta página describe el contexto público del protocolo para usar el rastreador QuecLink GV620MG con Plaspy. Se centra en cómo el equipo se comunica con la plataforma Plaspy en términos no sensibles y explica las consideraciones de conexión e informes que importan para una integración y operación exitosas.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando un dispositivo comienza a reportar a la plataforma. El comportamiento exacto del equipo y los detalles de los mensajes pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página ofrece orientación a alto nivel y recomienda verificar la documentación oficial de QuecLink.

## Resumen del protocolo

El protocolo del rastreador es el conjunto de comportamientos que utiliza el GV620MG para reportar posición GNSS, telemetría, estados de sensores y eventos de E/S a un servidor remoto como Plaspy. En términos públicos, el protocolo define cómo la unidad se identifica, cómo programa y envía actualizaciones de ubicación y estado, y cómo puede recibir configuraciones remotas o instrucciones de control.

- Permite la entrega de posición GNSS, eventos del acelerómetro, datos de sensores BLE, estados de entradas y salidas, y estado de batería y celular a Plaspy.
- Transporta información de identidad y telemetría para que Plaspy asigne los mensajes entrantes al vehículo y perfil de activo correctos.
- Soporta reportes periódicos, reportes por eventos (movimiento, ignición, alarmas) y respuestas a comandos remotos según lo permita el firmware del equipo.
- Provee el marco para que Plaspy genere alertas, eventos de geocerca, reproducción de historial y paneles de telemetría a partir de los datos del rastreador.
- Opera sobre canales de transporte estándar que soporta el GV620MG para que los operadores puedan encaminar el tráfico de los dispositivos hacia Plaspy para una gestión centralizada de flotas.

## Cómo Plaspy detecta el protocolo

Plaspy recibe el tráfico de los dispositivos en un punto final y puerto compartidos y detecta automáticamente el protocolo del rastreador cuando el GV620MG comienza a reportar. Esto reduce la necesidad de seleccionar manualmente el protocolo dentro de Plaspy siempre que el dispositivo esté configurado para reportar a los ajustes de servidor Plaspy correctos.

- Plaspy ofrece un único punto final de servidor para el tráfico de dispositivos que permite la detección automática del protocolo cuando los equipos se conectan.
- Normalmente usted configura el GV620MG para que apunte al endpoint y puerto de Plaspy y no necesita elegir un protocolo en la plataforma.
- Plaspy soporta comportamientos de telemetría comunes, por lo que los primeros reportes del dispositivo se usan para identificar el tipo de equipo y la estructura de mensaje.
- La identificación correcta del dispositivo depende de que éste envíe su identificador único y los campos de telemetría estándar que Plaspy reconoce.
- Si un dispositivo no aparece, revisar la configuración de red del equipo, la versión de firmware y el modo de transporte suele ser el primer paso.

## Transporte y contexto de conexión

Las opciones de transporte afectan cómo el GV620MG llega a Plaspy pero no cambian la intención general del protocolo. El GV620MG puede configurarse para usar UDP o TCP según la configuración de la unidad y el entorno de red, y Plaspy escucha en un único puerto para todos los dispositivos compatibles.

- Los dispositivos pueden configurarse para reportar a d.plaspy.com o a la dirección IP del servidor Plaspy 54.85.159.138.
- Plaspy acepta conexiones de dispositivos en el puerto 8888; el equipo puede usar UDP o TCP en el puerto 8888 según su configuración.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica el aprovisionamiento de equipos y las reglas de firewall para los operadores de flota.
- La elección entre UDP y TCP puede estar influenciada por los valores predeterminados del firmware, las características de la red y la necesidad de entrega fiable de tipos de mensaje específicos.
- Asegúrese de que las políticas del operador móvil y del firewall permitan tráfico saliente desde los dispositivos hacia el endpoint de Plaspy y el puerto 8888.

## Notas sobre compatibilidad del protocolo

- Las variaciones de firmware entre unidades GV620MG pueden modificar el timing exacto de los mensajes, campos opcionales o el comportamiento para eventos específicos.
- Las revisiones de hardware o SKUs regionales pueden incluir diferentes bandas de radio o cableado de periféricos que afectan la integración pero no el concepto público del protocolo.
- Algunas funciones de telemetría, como el reenvío de sensores BLE, entradas analógicas o integración RS232, dependen de la configuración del equipo y de las opciones de firmware disponibles.
- La elección de transporte entre UDP y TCP debe coincidir con la configuración del dispositivo y tener en cuenta consideraciones de NAT del operador o la red.
- Confirme que los identificadores del dispositivo y los intervalos de reporte estén configurados para coincidir con las expectativas de su cuenta y ajustes de flota en Plaspy.
- Siempre valide la compatibilidad y las funciones disponibles con las notas de producto oficiales de QuecLink para su firmware y SKU específico.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el GV620MG ayuda a los administradores a configurar los equipos correctamente, resolver problemas de conectividad y asegurar reportes confiables a largo plazo en Plaspy. Una visión clara del transporte y los comportamientos comunes del protocolo reduce el tiempo de integración y mejora la resiliencia operativa.

- Asegura la configuración correcta del servidor y el puerto para que los dispositivos alcancen el endpoint de Plaspy y sean detectados automáticamente.
- Facilita el diagnóstico de datos faltantes o parciales al enfocarse en transporte, firmware y configuración de intervalos de reporte.
- Orienta la decisión entre UDP y TCP según la confiabilidad de la red y los flujos de mensajes esperados.
- Apoya la planificación de actualizaciones de firmware y la gestión de cambios que puedan afectar reportes o funciones opcionales.
- Mejora la capacidad de mapear la telemetría del dispositivo a los paneles, alertas y reglas de automatización de Plaspy.

## Por qué usar Plaspy con este protocolo

El QuecLink GV620MG está diseñado para despliegues en remolques y vehículos pesados, y al integrarlo con Plaspy proporciona ubicación y telemetría accionables para operaciones de flota, monitoreo de carga refrigerada, flujos de trabajo anti robo y alertas basadas en sensores. Plaspy ingiere el flujo de datos del GV620MG y convierte GNSS, sensores BLE, entradas y estado de batería en mapas, alertas, reportes y acciones de control remoto que ayudan a los equipos a mantener los activos visibles y gestionados.

Para obtener más información sobre Plaspy y cómo maneja la conectividad de dispositivos y el seguimiento de flotas visite https://www.plaspy.com. El soporte de protocolos, el comportamiento de firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que le recomendamos verificar la información específica del protocolo del dispositivo y la guía de firmware más reciente en el sitio del fabricante https://www.queclink.com/ al planificar despliegues.

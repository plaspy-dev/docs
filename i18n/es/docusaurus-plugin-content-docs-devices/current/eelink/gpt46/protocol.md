---
slug: /eelink/gpt46/protocol
id: gpt46-protocol
sidebar_label: Protocol
title: EElink - GPT46 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para integrar EElink GPT46 con Plaspy y seguimiento fiable de activos
keywords:
  - protocolo EElink GPT46
  - protocolo GPS EElink GPT46
  - compatibilidad EElink GPT46 Plaspy
  - protocolo de comunicación GPT46
  - protocolo de rastreo GPT46
  - integración de dispositivos Plaspy
  - rastreador GPS LTE Cat M1
  - rastreador de activos con host BLE
  - protocolo de rastreo de flotas
  - monitoreo de activos logísticos
---

# EElink - Protocolo GPT46

Esta página sintetiza el contexto del protocolo público para usar el rastreador EElink GPT46 con Plaspy. Se enfoca en cómo el dispositivo envía ubicación y telemetría a la plataforma Plaspy y en qué implica esa comunicación para el despliegue y la resolución de problemas. El contenido está pensado para lectores técnicos que planifican integraciones, instaladores y equipos de operaciones que necesiten comprender cómo el rastreador se conecta a un endpoint en la nube.

El GPT46 es un rastreador de larga espera compatible con LTE Cat M1 y NB1 con funcionalidad de host BLE, diseñado para monitoreo industrial de activos y logística. Plaspy emplea configuraciones de conexión compartidas entre dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto del equipo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Siempre verifique las notas de firmware y las indicaciones del fabricante al preparar despliegues masivos.

## Resumen del protocolo

A un alto nivel, el protocolo de reporte define cómo el GPT46 empaqueta las fijaciones de ubicación, la telemetría y el contexto de sensores, y cómo reenvía esos mensajes a un endpoint en la nube para que Plaspy los consuma. El protocolo regula el temporizado de los reportes, la identificación del dispositivo y la estructura de los datos que Plaspy mapea en paneles y reglas de alerta.

- Permite que el GPT46 envíe posiciones GPS, estado del dispositivo y datos de sensores BLE emparejados a Plaspy para su georreferenciación y análisis.
- Transporta la identidad y el estado del dispositivo para que Plaspy pueda asociar los reportes con el registro de activo correspondiente.
- Soporta registros periódicos y mensajes basados en eventos para que los operadores reciban actualizaciones oportunas ante movimientos o alertas de sensor.
- Permite que Plaspy traduzca la telemetría entrante en campos útiles como ubicación, estado de batería y lecturas de sensores.
- Actúa como la capa de interfaz entre el dispositivo en campo y Plaspy sin exponer los detalles internos del firmware del equipo.

## Cómo detecta Plaspy el protocolo

Plaspy recibe el tráfico de los rastreadores en un endpoint y puerto compartidos y usa ese canal común para identificar automáticamente el protocolo del dispositivo. En la mayoría de los despliegues no es necesario seleccionar manualmente el protocolo dentro de Plaspy cuando el equipo está configurado para reportar al endpoint de Plaspy con los ajustes de conexión correctos.

- Plaspy escucha en la dirección de servidor compartida d.plaspy.com para informes entrantes de dispositivos.
- La IP pública del servidor Plaspy es 54.85.159.138 y la plataforma usa el puerto 8888 para las conexiones de dispositivos.
- Los equipos pueden configurarse para usar UDP o TCP en el puerto 8888 al reportar a Plaspy.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto, lo que simplifica la configuración y las reglas de firewall.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que los equipos correctamente configurados generalmente se reconocen sin selección manual del protocolo.

## Transporte y contexto de conexión

El GPT46 puede reportar a un endpoint en la nube a través de redes LTE Cat M1 o NB1 y puede usar transporte UDP o TCP según la configuración del dispositivo y las capacidades del firmware. El contexto de conexión es importante para la configuración de firewalls, el enrutamiento del operador y para garantizar la entrega confiable de mensajes a Plaspy.

- El dispositivo puede apuntar al dominio d.plaspy.com para enrutamiento basado en hostname hacia la plataforma Plaspy.
- Alternativamente, el dispositivo se puede configurar para reportar directamente a la IP pública 54.85.159.138 si el setup de red lo requiere.
- Plaspy recibe tráfico de dispositivos en el puerto 8888 y este es el puerto común usado por todos los dispositivos soportados.
- La elección del transporte puede ser UDP o TCP en el puerto 8888 dependiendo de la configuración del rastreador y del comportamiento de la red.
- Verifique el comportamiento de la red del operador para LTE Cat M1 o NB1 ya que puede afectar la reconexión y el timing de los mensajes.

## Notas de compatibilidad del protocolo

- El GPT46 está diseñado para ser compatible con Plaspy, pero el comportamiento puede variar según versiones de firmware y variantes regionales de hardware.
- Las funciones de host BLE aportan contexto de sensores, pero requieren emparejamiento y configuración correctos en el dispositivo para que esas lecturas se incluyan en los reportes.
- Seleccionar UDP frente a TCP puede modificar las características de entrega y debe probarse en su escenario de despliegue.
- La provisión del operador y el soporte de bandas del dispositivo para LTE Cat M1 o NB1 varían por mercado y pueden afectar la conectividad.
- Actualizaciones de firmware o utilidades de configuración del fabricante pueden cambiar los intervalos de reporte y el contenido de los mensajes.
- Valide siempre un equipo de muestra de extremo a extremo antes de desplegar grandes cantidades de unidades.

## Por qué es importante entender el protocolo

Comprender el protocolo que usa el GPT46 para reportar a Plaspy ayuda a asegurar una instalación exitosa, un comportamiento de telemetría predecible y una resolución de problemas más rápida cuando surjan incidencias. También permite a los equipos de operaciones tomar decisiones informadas sobre transporte, administración de energía e integraciones de sensores.

- Simplifica la configuración inicial al alinear los ajustes de reporte del dispositivo con los requisitos de conexión de Plaspy.
- Reduce el tiempo de diagnóstico cuando los dispositivos no aparecen, al confirmar transporte, host y configuración de puerto.
- Ayuda a planificar la vida útil de la batería y la cadencia de reportes para cumplir requisitos operativos sin mantenimiento excesivo.
- Aclara cómo se incluye la información de sensores BLE para que los integradores puedan diseñar flujos de trabajo completos para alertas y monitoreo.
- Facilita las comprobaciones de compatibilidad cuando se introducen cambios de firmware o del proveedor de conectividad.

## Por qué usar Plaspy con este protocolo

Usar el GPT46 con Plaspy ofrece a las organizaciones visibilidad centralizada de activos que se benefician de larga espera, telemetría celular de bajo consumo y la ampliación mediante sensores BLE. La combinación soporta monitoreo en tiempo real, reproducción histórica y alertas útiles para flotas, logística y casos de antirrobo sin necesidad de mantenimiento frecuente en sitio.

Para conocer más sobre Plaspy y cómo recibe datos de rastreadores, visite https://www.plaspy.com. Para las notas de protocolo específicas del dispositivo, comportamiento de firmware y detalles de implementación más actuales consulte al fabricante en https://www.eelink.com.cn/ ya que el soporte de protocolo y las funciones de firmware pueden cambiar con el tiempo.

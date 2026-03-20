---
slug: /topshine/ca02/protocol
id: ca02-protocol
sidebar_label: Protocol
title: TopShine - CA02 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador TopShine CA02 y su comunicación con Plaspy para seguimiento en tiempo real
keywords:
  - protocolo TopShine CA02
  - protocolo GPS TopShine CA02
  - protocolo TopShine CA02 para Plaspy
  - protocolo de comunicación TopShine CA02
  - protocolo de rastreo TopShine CA02
  - compatibilidad TopShine CA02
  - rastreadores compatibles con Plaspy
  - protocolo de rastreador GPS
  - protocolo de rastreo de vehículos
  - protocolo GPS para flotas
---

# TopShine - CA02 Protocolo

Esta página explica el contexto público del protocolo para usar el rastreador GPS TopShine CA02 y su alarma de seguridad automotriz en la plataforma Plaspy. Se enfoca en los detalles de comunicación y conexión a alto nivel necesarios para la integración y la resolución de problemas, no en aspectos privados o internos del firmware.

El CA02 es un rastreador 2G GSM integrado para tablero compatible con Plaspy, con sirena integrada, sensor de impacto, control de cierre centralizado y relé para inmovilizador. Plaspy utiliza ajustes de conexión compartidos entre dispositivos soportados y detecta automáticamente el protocolo del equipo, aunque el comportamiento exacto puede variar según el firmware, la revisión de hardware y cómo el fabricante implemente funciones como alarmas, comandos de inmovilizador y expansiones opcionales.

## Visión general del protocolo

A grandes rasgos, el protocolo del CA02 es el conjunto de mensajes y el comportamiento de conexión que el dispositivo usa para reportar posición GPS, eventos de alarma y estado a un servidor remoto, y para recibir comandos de control remoto. En el contexto de integración con Plaspy, el protocolo permite la entrega segura de ubicación y telemetría a la plataforma para que los eventos se muestren en el panel y en las aplicaciones móviles.

- Proporciona actualizaciones en tiempo real de posición GPS y movimiento a Plaspy para mostrar ubicación e historial de rutas.
- Envía eventos de alarma y estado como activaciones del sensor de impacto, puertas abiertas, exceso de velocidad, violaciones de geocerca y detección de interferencia GSM para notificaciones inmediatas.
- Soporta señales de control remoto desde la plataforma para funciones como cierre centralizado y corte de motor por relé.
- Permite telemetría opcional, como monitorización de combustible u otros módulos de expansión, que se reenvía junto con los datos GPS cuando está disponible.
- Actúa como la interfaz transportable entre el hardware del dispositivo y Plaspy, haciendo que la telemetría sea información útil para monitoreo e informes.

## Cómo detecta Plaspy el protocolo

Plaspy está diseñado para aceptar reportes de muchos dispositivos usando un punto de entrada y puerto compartidos. Cuando un CA02 correctamente configurado informa a Plaspy, la plataforma detecta automáticamente el protocolo del rastreador y enruta los datos a los parseadores y componentes del panel correspondientes. En la mayoría de los casos no necesita seleccionar manualmente un protocolo dentro de Plaspy si el dispositivo está apuntando al endpoint correcto.

- El dominio del servidor Plaspy para reportes de dispositivos es d.plaspy.com.
- La dirección IP del servidor Plaspy es 54.85.159.138.
- Plaspy escucha en el puerto 8888 para conexiones de dispositivos y todos los equipos soportados usan el mismo puerto.
- El CA02 puede configurarse para usar UDP o TCP en el puerto 8888 según la configuración del equipo.
- Cuando el dispositivo reporta al endpoint de Plaspy, la plataforma detecta automáticamente el protocolo del rastreador y asocia la telemetría entrante con el dispositivo de la cuenta.

## Transporte y contexto de la conexión

El contexto de conexión describe cómo el CA02 envía datos a Plaspy y cómo se devuelven los comandos. El CA02 usa conectividad celular 2G GSM para acceder a internet y luego se conecta al endpoint de Plaspy para reportar datos GPS y alarmas. El transporte puede ser TCP o UDP según la configuración y el soporte del firmware.

- El dispositivo puede configurarse con UDP o TCP en el puerto 8888 para reportar a Plaspy.
- Los equipos pueden apuntar al dominio d.plaspy.com o directamente a la IP 54.85.159.138.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto de reporte 8888 para simplificar el despliegue.
- La elección entre UDP y TCP puede afectar las características de entrega y está controlada por la configuración del dispositivo y las condiciones de la red.
- Asegúrese de que la SIM celular y el APN estén provisionados para que el CA02 pueda abrir conexiones salientes al endpoint de Plaspy.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar cómo se codifican los eventos o qué campos opcionales están presentes; confirme siempre el comportamiento de la versión de firmware del equipo.
- Revisiones de hardware o expansiones opcionales como sensores de combustible o módulos de micrófono pueden añadir telemetría que la plataforma debe interpretar.
- Las configuraciones del fabricante o variantes regionales del producto pueden alterar los tipos de alarma disponibles o el conjunto de comandos expuesto por el dispositivo.
- La selección de transporte entre UDP y TCP puede configurarse en el dispositivo y afectar la fiabilidad en distintas redes.
- Confirme que el equipo esté configurado para reportar a d.plaspy.com o a 54.85.159.138 y que use el puerto 8888 para garantizar que Plaspy pueda recibir datos.
- Valide cualquier comando personalizado del fabricante o mecanismos de respaldo por SMS contra la documentación oficial antes de confiar en ellos en producción.

## Por qué importa entender el protocolo

Comprender cómo el CA02 se comunica con Plaspy ayuda a asegurar instalaciones fiables, agiliza la resolución de problemas y garantiza un funcionamiento predecible a largo plazo. El conocimiento del comportamiento de conexión y reporte reduce el tiempo de inactividad y mejora la calidad de la telemetría disponible para gerentes de flotas y propietarios de vehículos.

- Ayuda a confirmar que el dispositivo está apuntando al endpoint y puerto correctos de Plaspy para que la telemetría llegue de forma consistente.
- Agiliza el diagnóstico cuando faltan eventos o datos de ubicación al centrar la investigación en transporte, SIM/APN o configuraciones.
- Orienta la decisión sobre usar UDP o TCP según el rendimiento y los requisitos de fiabilidad de la red.
- Permite a los integradores verificar que telemetrías opcionales, como combustible o expansiones de alarma, se reenvían y se interpretan en Plaspy.
- Informa los pasos de prueba y validación durante la instalación para que las acciones de inmovilizador y alarma se comporten como se espera en el campo.

## Por qué usar Plaspy con este protocolo

Usar el TopShine CA02 con Plaspy brinda a las organizaciones visibilidad centralizada de la ubicación de los vehículos, eventos de alarma y estado del inmovilizador, manteniendo la configuración y el reporte sencillos. Para gestores de flotas y despliegues orientados a seguridad, la combinación de sirena integrada, sensor de impacto y corte de motor por relé con el monitoreo de Plaspy ofrece tanto disuasión como control operativo remoto.

Para saber más sobre Plaspy y cómo puede usarse el CA02 en su implementación, visite https://www.plaspy.com. Para detalles específicos del protocolo del dispositivo, notas de firmware y la guía más reciente del fabricante, verifique la información actual en el sitio de TopShine https://www.gztopshine.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.

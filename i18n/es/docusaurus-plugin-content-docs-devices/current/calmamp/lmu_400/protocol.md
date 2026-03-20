---
slug: /calmamp/lmu_400/protocol
id: lmu_400-protocol
sidebar_label: Protocol
title: CalmAmp - LMU-400 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para la compatibilidad del tracker CalmAmp LMU 400 con servidores y ajustes de Plaspy
keywords:
  - Protocolo CalmAmp LMU 400
  - Protocolo GPS CalmAmp LMU 400
  - Compatibilidad CalmAmp LMU 400 con Plaspy
  - Protocolo de rastreador de vehículo CalmAmp
  - Protocolo de rastreo LMU 400
  - Protocolo de comunicación LMU 400
  - Rastreador CalmAmp Plaspy
  - Protocolo de rastreo de vehículos Plaspy
  - Gestión de flotas CalmAmp LMU 400
  - Guía de protocolo LMU 400
---

# CalmAmp - Protocolo LMU-400

Esta página presenta el contexto público del protocolo para usar el tracker CalmAmp LMU-400 con Plaspy. Explica, a alto nivel, cómo el dispositivo se comunica con la plataforma Plaspy y qué ajustes de conexión son necesarios para que la unidad reporte telemetría y eventos. El objetivo es ofrecer orientación práctica y no sensible sobre el protocolo para que integradores y operadores de flota comprendan cómo el LMU-400 intercambia datos útiles con Plaspy.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del tracker cuando una unidad reporta al endpoint de Plaspy. El comportamiento exacto del protocolo del LMU-400 puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. El LMU-400 es un tracker vehicular compacto con batería de respaldo interna, acelerómetro opcional de 3 ejes, antenas internas y soporte para funciones CalmAmp como el motor de eventos PEG y la gestión remota PULS, factores que influyen en qué reporta el dispositivo y cómo puede configurarse.

## Visión general del protocolo

El protocolo del LMU-400 define cómo el dispositivo informa ubicaciones GPS, estado, entradas de sensores y alertas de eventos a un servidor remoto para que Plaspy pueda ingerir y presentar esa información. La guía pública se centra en qué tipos de información se transmiten y cómo se usan esos datos, en lugar de exponer tramas de mensajes de bajo nivel.

- Envía reportes periódicos de posición y marca de tiempo a un endpoint remoto para seguimiento e historial
- Incluye identificación del dispositivo e indicadores de estado para que Plaspy asocie los mensajes con la unidad correcta
- Transmite eventos de entradas y movimiento desde el acelerómetro opcional, estado del buzzer y eventos de interrupción del starter para soportar alertas y reglas
- Soporta configuración OTA y mecanismos de actualización de firmware gestionados por herramientas CalmAmp como PULS y PEG
- Opera sobre redes de datos celulares compatibles con el dispositivo para garantizar la entrega oportuna de mensajes de ubicación y eventos

## Cómo detecta Plaspy el protocolo

Plaspy detecta automáticamente el protocolo del tracker cuando el dispositivo está correctamente configurado para reportar al endpoint de Plaspy. En la mayoría de los casos, el propietario o instalador solo necesita apuntar el LMU-400 al servidor de Plaspy y permitir que la plataforma clasifique los mensajes entrantes.

- El dominio del servidor Plaspy para reportes de dispositivos es d.plaspy.com
- La IP del servidor Plaspy para reportes de dispositivos es 54.85.159.138
- El puerto usado por Plaspy para todas las conexiones de dispositivos es 8888 y Plaspy utiliza el mismo puerto para cada dispositivo soportado
- Plaspy detecta automáticamente el protocolo del tracker, por lo que normalmente no es necesaria la selección manual dentro de la plataforma
- Asegúrese de que el dispositivo envíe información identificadora como IMEI o número de serie para que Plaspy pueda emparejar los mensajes con una cuenta y un registro de unidad

## Contexto de transporte y conexión

El contexto de transporte describe cómo el LMU-400 alcanza el endpoint de Plaspy a través de redes móviles y qué opciones de direccionamiento están disponibles para la configuración del dispositivo. Esta información trata sobre el transporte de red y las elecciones comunes de configuración, más que sobre los detalles internos del protocolo.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y las decisiones de aprovisionamiento
- Las unidades pueden apuntar al dominio d.plaspy.com o directamente a la IP 54.85.159.138
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que la configuración de puerto en el dispositivo es uniforme entre modelos
- La selección de red celular como GSM GPRS CDMA o HSPA la gestiona el hardware del LMU-400 y el proveedor de servicio, lo que determina la confiabilidad del enlace y la latencia
- Al realizar pruebas, confirme que el dispositivo puede resolver el dominio y alcanzar el endpoint de Plaspy por el protocolo de transporte elegido

## Notas de compatibilidad del protocolo

- Las versiones de firmware pueden cambiar qué reportes y eventos envía un LMU-400 y cómo se aplican los comandos de configuración
- Las revisiones de hardware o funciones opcionales como el acelerómetro o el relé de interrupción del starter afectan la telemetría y tipos de eventos disponibles
- Servicios del fabricante como PEG y PULS ofrecen configuración y actualizaciones OTA que interactúan con el comportamiento y las capacidades del protocolo
- La elección de transporte UDP versus TCP puede influir en las características de entrega de mensajes y debe coincidir con el aprovisionamiento del dispositivo
- Siempre valide un dispositivo nuevo o una nueva versión de firmware en una cuenta no productiva o en una flota de prueba antes de un despliegue masivo
- Confirme los detalles de compatibilidad y las funciones soportadas contra la documentación de CalmAmp para la versión específica de firmware y la revisión de hardware del LMU-400

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del LMU-400 y el contexto de transporte ayuda a configurar los dispositivos correctamente, diagnosticar problemas de entrega y mantener operaciones de rastreo confiables a lo largo del tiempo.

- Asegura que los dispositivos apunten al endpoint y transporte correctos de Plaspy para que los mensajes lleguen de forma confiable
- Facilita el diagnóstico cuando faltan datos de ubicación, entradas o estado de salud
- Guía las decisiones de firmware y configuración al habilitar funciones como detección de movimiento o la interrupción del starter
- Permite validar que las reglas PEG y las actualizaciones PULS se aplican y que el dispositivo reporta los eventos esperados
- Apoya la planificación para la gestión de flotas a escala, incluyendo comportamiento de la red y estrategias de gestión de energía

## Por qué usar Plaspy con este protocolo

Usar el CalmAmp LMU-400 con Plaspy proporciona a las organizaciones una forma directa de recopilar ubicación del vehículo, estado y datos de eventos en una sola plataforma. Plaspy ingiere la telemetría del LMU-400, aplica el manejo de eventos y presenta la información para monitoreo operativo, geocercas y análisis histórico. La combinación de las capacidades del hardware LMU-400 y la detección automática del protocolo de Plaspy simplifica la incorporación de dispositivos y reduce el trabajo de configuración manual.

Si desea saber más sobre Plaspy y cómo se integra con trackers como el CalmAmp LMU-400, visite https://www.plaspy.com. Para los detalles de protocolo específicos del dispositivo, comportamiento de firmware e instrucciones del fabricante más actuales, verifique la información en el sitio oficial de CalmAmp http://www.calamp.com/ ya que las implementaciones y los firmwares pueden cambiar con el tiempo.

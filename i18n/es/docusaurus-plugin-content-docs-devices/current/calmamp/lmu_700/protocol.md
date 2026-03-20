---
slug: /calmamp/lmu_700/protocol
id: lmu_700-protocol
sidebar_label: Protocol
title: CalmAmp - LMU-700 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo CalmAmp LMU 700 y su compatibilidad con Plaspy con notas de conexión e integración
keywords:
  - Protocolo CalmAmp LMU-700
  - Protocolo GPS CalmAmp LMU-700
  - Protocolo de rastreo CalmAmp LMU-700
  - Compatibilidad CalmAmp LMU-700 Plaspy
  - Comunicaciones GPS LMU 700
  - Guía de integración LMU 700
  - Seguimiento de vehículos LMU 700
  - Configuración LMU 700 Plaspy
  - Telemetría CalmAmp LMU 700
  - Integración de seguimiento LMU 700
---

# CalmAmp - Protocolo LMU-700

Esta página ofrece una visión pública y no sensible del contexto de comunicación del CalmAmp LMU-700 cuando se utiliza con Plaspy. Su objetivo es explicar cómo el equipo envía datos de ubicación y eventos a Plaspy y qué ajustes de conexión se usan comúnmente para una integración exitosa.

Plaspy aplica ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo informa al endpoint de Plaspy. El comportamiento exacto del protocolo y el contenido de los mensajes puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en el transporte y el contexto de integración en lugar de formatos de paquete de bajo nivel.

## Resumen del protocolo

El LMU-700 transmite datos GPS y eventos a servidores backend usando canales de datos celulares y, en algunos casos, puede soportar SMS mejorado para ciertos tipos de mensajes. El protocolo del equipo define cómo se identifica, cómo codifica las ubicaciones y eventos de entradas/salidas, y cómo genera alertas que se entregan a un receptor como Plaspy.

- Define cómo el rastreador se identifica ante el servidor para asociar la telemetría con el activo correcto.
- Transporta posiciones GPS, marcas de tiempo y eventos de entradas/salidas o alertas que los sistemas posteriores usan para supervisión.
- Soporta tanto mensajería por canal de datos como SMS mejorado como opciones de transporte cuando están disponibles.
- Permite reglas de eventos programables en el dispositivo que generan reportes cuando se cumplen umbrales.
- Funciona en conjunto con la gestión por aire (OTA) para configuración y actualizaciones de firmware.

## Detección del protocolo por Plaspy

Plaspy centraliza las conexiones entrantes de dispositivos en un único endpoint público y determina automáticamente el protocolo del rastreador según el tráfico entrante. En la mayoría de los casos usted no necesita seleccionar un protocolo manualmente dentro de Plaspy siempre que el dispositivo esté configurado correctamente para reportar a la dirección y puerto de Plaspy.

- Plaspy escucha en el endpoint público d.plaspy.com y en la IP de servidor correspondiente 54.85.159.138.
- Todos los dispositivos que reportan a Plaspy usan el mismo número de puerto, por lo que un único puerto entrante simplifica la configuración.
- Plaspy detecta automáticamente el protocolo del rastreador a partir del patrón de conexión y la carga útil entrante.
- Si un dispositivo está configurado para reportar a Plaspy, por lo general no se requiere la selección manual del protocolo.
- Una configuración adecuada del dispositivo en la etapa de fabricación o en la provisión de gestión de flota asegura que la detección automática funcione de forma fiable.

## Contexto de transporte y conexión

El LMU-700 puede usar datos celulares o SMS mejorado para comunicarse. Para el reporte por datos, la elección de la capa de transporte (UDP o TCP) y el destino de red son elementos clave de configuración que determinan cómo los mensajes alcanzan a Plaspy.

- Los dispositivos pueden configurarse para reportar al dominio d.plaspy.com o directamente a la IP del servidor 54.85.159.138.
- El puerto común usado para todos los dispositivos Plaspy es el 8888 y se admiten tanto los transportes UDP como TCP según la configuración del equipo y las condiciones de la red.
- La elección entre UDP y TCP se define al configurar el dispositivo y puede depender de cómo fue aprovisionado por el instalador o el gestor de flota.
- El SMS mejorado puede ser una alternativa o respaldo cuando los datos celulares no están disponibles o están restringidos.
- Asegúrese de que el APN y los ajustes celulares del LMU-700 coincidan con su proveedor móvil y el plan de provisión de flota para que pueda alcanzar el endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar la cadencia de mensajes, el comportamiento de reporte y qué funciones vienen habilitadas por defecto.
- Las revisiones de hardware o variantes regionales pueden diferir en las bandas celulares soportadas u opciones de mensajería.
- Las herramientas de configuración del fabricante y los servicios OTA pueden alterar el comportamiento del equipo; verifique los ajustes OTA si las unidades actúan de forma inesperada.
- La elección de transporte entre UDP y TCP afecta las características de entrega pero no cambia la intención de reporte a nivel superior.
- El soporte de SMS mejorado puede estar disponible para mercados o compilaciones de firmware específicas y puede afectar cómo se entregan las alarmas.
- Siempre valide la configuración del dispositivo con la documentación oficial más reciente antes de un despliegue a gran escala.

## Importancia de comprender el protocolo

Entender cómo comunica el LMU-700 ayuda a instaladores y gestores de flota a asegurar reportes fiables, asociación correcta de activos y alertas predecibles cuando el dispositivo se usa con Plaspy. Este conocimiento reduce la fricción en la integración y acelera la resolución de problemas.

- Ayuda a confirmar que el dispositivo apunta al endpoint correcto de Plaspy y usa el transporte esperado.
- Facilita interpretar por qué una unidad puede no estar reportando si el firmware o la configuración difieren de lo esperado.
- Asiste en la planificación de respaldos de conectividad, como SMS mejorado frente a datos celulares.
- Soporta el aprovisionamiento correcto de APN, transporte y ajustes de servidor durante la instalación.
- Contribuye a coordinar actualizaciones OTA o cambios en reglas que afectan cuándo y cómo el dispositivo reporta eventos.

## Por qué usar Plaspy con este protocolo

Usar el CalmAmp LMU-700 con Plaspy ofrece a las organizaciones una forma práctica de capturar ubicación GPS, eventos de entradas/salidas y alertas programables, y centralizar esos datos para supervisión operativa. El endpoint central de Plaspy y la detección automática de protocolos simplifican los despliegues a gran escala al eliminar la necesidad de mapear múltiples endpoints y puertos de dispositivos.

To learn more about how Plaspy works with vehicle trackers and to explore platform features, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and official documentation for the LMU-700, please verify information on the manufacturer site http://www.calamp.com/. Protocol support and firmware behavior can change over time so checking the latest manufacturer resources is recommended.

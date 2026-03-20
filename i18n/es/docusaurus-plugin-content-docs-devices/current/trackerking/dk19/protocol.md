---
slug: /trackerking/dk19/protocol
id: dk19-protocol
sidebar_label: Protocol
title: TrackerKing - DK19 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del TrackerKing DK19 que explica cómo comunica telemetría con Plaspy y consideraciones de integración
keywords:
  - protocolo TrackerKing DK19
  - protocolo GPS TrackerKing DK19
  - compatibilidad TrackerKing DK19 Plaspy
  - protocolo de comunicación TrackerKing DK19
  - protocolo de rastreo TrackerKing DK19
  - telemetría DK19
  - gestión de flotas DK19
  - integración de dispositivos Plaspy
  - GT06 CRX3 JT808 Tianqin
  - rastreo vehicular DK19
---

# TrackerKing - Protocolo DK19

Esta página resume el contexto público del protocolo para usar el TrackerKing DK19 con Plaspy. Describe cómo el DK19 normalmente transmite telemetría y eventos a la plataforma Plaspy, así como los ajustes de conexión que se usan frecuentemente para la integración. El objetivo es ayudar a integradores técnicos y administradores de flota a comprender el flujo de comunicación sin exponer detalles privados de implementación.

Plaspy utiliza ajustes de conexión compartidos para los dispositivos soportados y detecta automáticamente el protocolo del tracker cuando el equipo reporta a la plataforma. El comportamiento exacto del protocolo y las funcionalidades disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en información práctica y pública y en recomendaciones de integración basadas en la especificación del DK19 y en los protocolos de rastreo comunes que soporta el dispositivo.

## Resumen del protocolo

El DK19 soporta protocolos de rastreo estándar y reporta telemetría de una forma que permite a Plaspy mostrar ubicación, estado y alarmas para monitoreo en tiempo real y reproducción histórica. La capa de protocolo en el dispositivo se encarga de identificar la unidad ante el servidor, empaquetar datos GNSS y de sensores, y señalar eventos definidos como cambios de ignición o alarmas de seguridad.

- Funciona como puente entre el vehículo y la plataforma, enviando GNSS, estado de ignición, alarmas y kilometraje a Plaspy para su visualización y procesamiento.
- Identifica el dispositivo ante el endpoint de Plaspy para que la plataforma pueda asociar los informes entrantes con el activo correcto.
- Codifica información de estado y eventos que Plaspy utiliza para activar alertas, reportes y reglas de automatización.
- Soporta múltiples formatos de rastreo comunes para facilitar el alta en plataformas como Plaspy, incluyendo GT06, CRX3, JT808 y Tianqin según lo implemente el dispositivo.
- Permite retransmisión o reporte almacenado en zonas sin cobertura para que Plaspy pueda reconstruir períodos de conectividad deficiente.

## Cómo detecta Plaspy el protocolo

Plaspy está diseñado para aceptar reportes de dispositivos en un único endpoint y puerto compartido y para detectar automáticamente el protocolo entrante. Cuando un TrackerKing DK19 se configura para reportar a Plaspy, la plataforma utiliza el endpoint de red y el contenido de los primeros reportes para asociar el flujo con la lógica de parseo correspondiente, por lo que normalmente no es necesario seleccionar el protocolo manualmente.

- Los dispositivos deben configurarse para enviar reportes a d.plaspy.com o a la IP del servidor Plaspy 54.85.159.138.
- Plaspy escucha en el puerto 8888 para conexiones de trackers y espera que los dispositivos utilicen ese puerto para el reporte.
- Plaspy soporta detección automática de protocolo, por lo que los usuarios por lo general no necesitan elegir un protocolo dentro de la plataforma una vez que el dispositivo apunta correctamente al endpoint de Plaspy.
- Asegúrese de que el DK19 esté enviando el identificador del dispositivo y los campos básicos de estado requeridos por el protocolo soportado para que Plaspy pueda emparejar los reportes entrantes con el registro del dispositivo.
- Si un dispositivo no aparece, verifique la configuración de red del dispositivo y que se haya seleccionado correctamente el transporte UDP o TCP en el DK19.

## Transporte y conexión

El DK19 soporta opciones de transporte celular y puede configurarse para reportar a Plaspy usando UDP o TCP según la operadora y la configuración del equipo. Plaspy acepta ambos transportes en el mismo puerto, lo que simplifica la configuración entre distintos modelos de tracker.

- El DK19 puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del dispositivo y la preferencia del instalador.
- Los dispositivos pueden apuntar al nombre DNS d.plaspy.com o a la dirección del servidor 54.85.159.138 al configurar el destino de reporte.
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que la configuración de puertos es consistente entre modelos y facilita la planificación de firewall y redes.
- Elija el transporte que mejor se ajuste a la fiabilidad celular y a las restricciones del operador en su región; UDP es común por su menor overhead y TCP puede ofrecer continuidad de sesión.
- Confirme el APN y los ajustes de datos en el DK19 para asegurar que la unidad pueda establecer conexión con el endpoint de Plaspy.

## Notas sobre compatibilidad de protocolo

- El firmware del DK19 puede incluir soporte para varios protocolos estándar; confirme qué protocolos están habilitados en la versión de firmware instalada en su unidad.
- Las revisiones de hardware y módulos opcionales como variantes Cat M o NB IoT pueden afectar el comportamiento de red y los transportes soportados.
- Las herramientas de configuración del fabricante o los ajustes por defecto pueden seleccionar un protocolo o transporte particular; valide estos ajustes con las expectativas de su cuenta Plaspy.
- La selección de transporte (UDP vs TCP) puede influir en el comportamiento en zonas de cobertura débil y debe validarse en pruebas de campo.
- La detección automática de Plaspy reduce la necesidad de asignar el protocolo manualmente, pero se requieren campos de dirección e identificador correctos para una asociación fiable.
- Siempre valide la integración en un entorno controlado antes de desplegar en una flota de producción, especialmente cuando planee funciones de control remoto como comandos de inmovilizador.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del DK19 y cómo interactúa con Plaspy ayuda a asegurar una configuración exitosa, telemetría confiable y una resolución de problemas más eficiente. Saber qué envía el tracker y cómo Plaspy espera recibirlo reduce la fricción en el alta y mejora los resultados operativos.

- Garantiza la correcta direccionamiento del dispositivo para que los reportes entrantes se asignen al vehículo adecuado en Plaspy.
- Ayuda a diagnosticar problemas de conectividad aclarando si el dispositivo usa UDP o TCP y a qué endpoint apunta.
- Soporta el mapeo correcto de alarmas y eventos para que funciones como detección de ignición y alertas por exceso de velocidad se comporten como se espera en Plaspy.
- Orienta las decisiones sobre firmware y configuración que afectan la frecuencia de reporte, retransmisión en zonas sin cobertura y comportamiento de energía.
- Facilita la coordinación con el soporte del fabricante cuando el comportamiento del dispositivo difiere de los flujos de protocolo esperados.

## Por qué usar Plaspy con este protocolo

Usar el TrackerKing DK19 con Plaspy ofrece una solución práctica para equipos que requieren visibilidad continua de vehículos, respuesta ante robos y telemetría de flota en una sola plataforma. La conectividad 4G del DK19 con fallback a 2G, la detección de ignición y las alarmas de eventos alimentan directamente a Plaspy para visualización en mapas, rutas históricas y alertas basadas en reglas que mejoran la respuesta y la supervisión operativa.

El modelo de endpoint compartido de Plaspy simplifica el alta de dispositivos: apunte el DK19 a d.plaspy.com o a 54.85.159.138 en el puerto 8888 usando UDP o TCP, y Plaspy detectará el protocolo del tracker automáticamente cuando lleguen los reportes. Para saber más sobre cómo Plaspy puede trabajar con el DK19 y otros trackers compatibles, visite https://www.plaspy.com. Para obtener los detalles más actuales sobre protocolos específicos del dispositivo y el comportamiento del firmware, verifique la información con el fabricante en https://trackerking.cn/ ya que las implementaciones y el firmware pueden cambiar con el tiempo.

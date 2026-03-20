---
slug: /okb_tehnoavtomatika/mta_glonass_ver12m_can_fms/protocol
id: mta_glonass_ver12m_can_fms-protocol
sidebar_label: Protocol
title: OKB Tehnoavtomatika - MTA-Glonass (ver.12M-CAN FMS) Protocol
sidebar_class_name: menu_item_tracker
description: Protocolo público del MTA-Glonass ver.12M CAN FMS y cómo comunica telemetría con Plaspy para gestión de flotas
keywords:
  - Protocolo OKB Tehnoavtomatika MTA-Glonass
  - Protocolo GPS MTA-Glonass
  - Compatibilidad MTA-Glonass CAN FMS
  - Protocolo de dispositivo Plaspy
  - Integración de rastreadores Plaspy
  - Protocolo de rastreo de vehículos
  - Protocolo telemática para flotas
  - Protocolo de rastreador GNSS
  - Telemetría CAN FMS
  - Comunicación de rastreador GPS
---

# Protocolo OKB Tehnoavtomatika - MTA-Glonass (ver.12M-CAN FMS)

Esta página ofrece una visión pública y no sensible del contexto de comunicación del OKB Tehnoavtomatika MTA-Glonass (ver.12M-CAN FMS) cuando se utiliza con Plaspy. Explica cómo el rastreador envía posiciones GNSS y telemetría del vehículo a Plaspy y qué papel juega el protocolo de reporte en ese flujo de datos. El enfoque está en el contexto práctico del protocolo útil para despliegue, configuración y solución de problemas, no en detalles de firmware o formatos de paquetes propietarios.

Plaspy usa ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo está configurado para reportar a Plaspy. El comportamiento exacto del protocolo y la telemetría disponible pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que la configuración y las funciones disponibles en el MTA-Glonass (ver.12M-CAN FMS) pueden diferir entre unidades o compilaciones de firmware.

## Resumen del protocolo

El protocolo del dispositivo define cómo el MTA-Glonass (ver.12M-CAN FMS) comunica la ubicación, la telemetría CAN FMS, entradas de sensores y eventos a un servidor remoto. Para la integración con Plaspy, los aspectos públicos del protocolo determinan qué campos de telemetría están disponibles, con qué frecuencia se envían los reportes y cómo se identifican los eventos para su procesamiento posterior.

- Permite que el rastreador informe coordenadas GNSS y eventos de movimiento que Plaspy muestra en mapas y reportes.
- Transmite datos del bus del vehículo desde la interfaz CAN FMS, como parámetros del motor y diagnósticos, que Plaspy puede mapear a campos de telemetría.
- Lleva estados de sensores de combustible y entradas auxiliares para que Plaspy genere análisis de combustible y alertas.
- Proporciona datos de eventos y marcas de tiempo que respaldan reproducción histórica, registros de cumplimiento y auditorías en Plaspy.
- Funciona sobre datos móviles estándar o canales SMS para entregar telemetría en tiempo real y mecanismos de respaldo a la plataforma Plaspy.

## Cómo detecta Plaspy el protocolo

Plaspy recibe las conexiones entrantes de dispositivos en un endpoint común y utiliza detección automatizada para identificar el protocolo del equipo, de modo que usted normalmente no necesita seleccionar un protocolo manualmente. Cuando un MTA-Glonass correctamente configurado reporta al endpoint de Plaspy, Plaspy asociará el flujo entrante con el comportamiento de dispositivo soportado y presentará la telemetría en consecuencia.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138.
- El puerto que usa Plaspy para reportes de dispositivos es 8888 y Plaspy emplea el mismo puerto para todos los dispositivos compatibles.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que en la plataforma normalmente no es necesario seleccionar un ajuste de protocolo cuando el dispositivo está configurado para reportar a Plaspy.
- La configuración correcta del dispositivo para apuntar al endpoint de Plaspy y el transporte elegido son los prerequisitos más comunes para una detección automática exitosa.
- Si un dispositivo no es detectado, se recomienda empezar por revisar la configuración de transporte, el APN y la documentación del fabricante sobre parámetros de reporte del dispositivo.

## Transporte y contexto de conexión

El MTA-Glonass (ver.12M-CAN FMS) puede enviar telemetría usando transportes de datos móviles comunes y direcciones flexibles. Al conectarse a Plaspy, el dispositivo puede estar configurado para usar UDP o TCP en el puerto de red que Plaspy escucha, y puede usar el nombre de dominio de Plaspy o la IP del servidor como destino de reporte.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte y la configuración del equipo.
- Los dispositivos pueden apuntar a d.plaspy.com o a la IP del servidor Plaspy 54.85.159.138 como endpoint de reporte.
- Todos los dispositivos en Plaspy usan el mismo puerto para reportes, lo que simplifica la conectividad del servidor y la configuración de dispositivos.
- La configuración de la red móvil, como el APN y el comportamiento del canal de datos, afecta la forma en que el rastreador establece conexiones con Plaspy.
- SMS u otros canales de respaldo son comúnmente usados por esta familia de rastreadores para configuración o como método secundario de entrega de eventos críticos en escenarios de baja cobertura de datos.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar los campos de telemetría disponibles, los intervalos de reporte y el comportamiento de eventos; verifique qué revisión de firmware está instalada en cada unidad.
- Las revisiones de hardware u opciones de interfaz (por ejemplo cableado CAN FMS diferente u sensores opcionales) pueden afectar qué datos expone el dispositivo a Plaspy.
- La selección de transporte (UDP frente a TCP) puede influir en las características de entrega y debe elegirse según las condiciones de la red y el comportamiento del operador de telefonía.
- Puede requerirse configuración o aprovisionamiento por parte del fabricante para habilitar el reporte a plataformas de terceros como Plaspy.
- Algunas funciones, como la disponibilidad de ciertos parámetros CAN FMS o entradas de sensores opcionales, dependen del cableado del vehículo y los módulos instalados.
- Valide la compatibilidad y cualquier parámetro de configuración específico del dispositivo contra la documentación oficial del fabricante antes de un despliegue a gran escala.

## Por qué es importante comprender el protocolo

Tener una comprensión clara del protocolo de reporte del dispositivo ayuda a garantizar una integración confiable, un mapeo de telemetría preciso y una solución de problemas más sencilla cuando usa el MTA-Glonass (ver.12M-CAN FMS) con Plaspy. Saber qué telemetría envía el rastreador y cómo se conecta a Plaspy reduce el tiempo de despliegue y respalda un comportamiento operativo consistente.

- Ayuda a confirmar que los parámetros CAN FMS y las entradas del sensor de combustible estarán disponibles en los reportes de Plaspy.
- Acelera la solución de problemas cuando falta telemetría o cuando los eventos difieren de lo esperado.
- Orienta la configuración correcta del transporte y del APN para una entrega de datos fiable a Plaspy.
- Informa decisiones de actualización de firmware y gestión de cambios para despliegues en toda la flota.
- Permite mapear con precisión los eventos del dispositivo a los flujos de alertas y reportes de Plaspy.

## Ventajas de usar Plaspy con este protocolo

Usar el MTA-Glonass (ver.12M-CAN FMS) con Plaspy ofrece una vía práctica para combinar posicionamiento GNSS, telemetría del bus del vehículo y medición de combustible en una sola vista operativa. Las organizaciones que necesitan telemetría centrada en el vehículo, análisis de combustible y flujos de trabajo de antirrobo o control remoto pueden aprovechar el CAN FMS y las entradas de sensores del dispositivo junto con las capacidades de la plataforma Plaspy para mejorar la visibilidad y la supervisión operativa.

Para obtener más información sobre Plaspy y cómo maneja la conectividad y la telemetría de los dispositivos, visite https://www.plaspy.com. Para detalles de protocolo específicos del dispositivo, notas de firmware y guía de instalación más actualizados, verifique la información en el sitio oficial del fabricante http://www.okb-ta.ru/ ya que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo.

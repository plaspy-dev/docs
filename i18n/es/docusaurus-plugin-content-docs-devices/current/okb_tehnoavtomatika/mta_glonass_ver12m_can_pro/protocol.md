---
slug: /okb_tehnoavtomatika/mta_glonass_ver12m_can_pro/protocol
id: mta_glonass_ver12m_can_pro-protocol
sidebar_label: Protocol
title: OKB Tehnoavtomatika - MTA-Glonass (ver.12M-CAN-PRO) Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo MTA-Glonass ver.12M-CAN-PRO y su comunicación con Plaspy para gestión de flotas
keywords:
  - protocolo OKB Tehnoavtomatika MTA Glonass
  - protocolo GPS MTA Glonass
  - compatibilidad MTA Glonass Plaspy
  - protocolo de rastreo de vehículos
  - telemetría de flotas bus CAN
  - comunicación de dispositivos GNSS
  - rastreo por canal de datos GPRS
  - visión general del protocolo de telemetría
  - detección de protocolo de rastreador
  - telemetría para diagnóstico remoto
---

# Protocolo de OKB Tehnoavtomatika - MTA-Glonass (ver.12M-CAN-PRO)

Esta página ofrece un panorama público a nivel de protocolo para usar el rastreador OKB Tehnoavtomatika MTA-Glonass (ver.12M-CAN-PRO) con Plaspy. Se centra en cómo se comunica el equipo en términos generales, qué papel cumple el protocolo de reporte para entregar posición y telemetría a Plaspy, y qué verificar al integrar el dispositivo en una implementación de Plaspy. El contenido es de alto nivel y evita detalles sensibles de implementación, describiendo de forma práctica el contexto de conexión y compatibilidad.

Plaspy utiliza ajustes de conexión compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo está configurado para reportar al endpoint de Plaspy. Tenga en cuenta que el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Para tramas específicas, notas de versión de firmware o comandos de configuración consulte la documentación del fabricante y las notas de firmware más recientes de OKB Tehnoavtomatika.

## Resumen del protocolo

El protocolo del MTA-Glonass (ver.12M-CAN-PRO) regula cómo se empaquetan y transmiten desde la unidad terminal hacia un servidor como Plaspy la posición GNSS, la telemetría del bus CAN, los estados de entradas y los registros de eventos. A un nivel público, el protocolo permite que el dispositivo se identifique, transmita datos medidos y soporte flujos básicos de control remoto o configuración cuando las capacidades del terminal y la red lo permiten.

- Permite el envío periódico y basado en eventos de posiciones GNSS y telemetría a un servidor remoto para seguimiento en tiempo real e informes históricos.
- Transporta parámetros derivados del bus CAN y lecturas de entradas para que Plaspy pueda correlacionar el estado del vehículo con la ubicación para diagnóstico e informes de flota.
- Incluye identificadores e información de sesión que permiten al servidor receptor asociar mensajes entrantes con un dispositivo instalado.
- Soporta el almacenamiento en búfer de eventos cuando hay pérdida de conectividad y el reenvío de registros históricos una vez restaurado el enlace.
- Funciona sobre canales de datos celulares estándar y SMS cuando el terminal lo soporta, proporcionando rutas de reporte redundantes.

## Cómo detecta Plaspy el protocolo

Plaspy está diseñado para aceptar datos de muchos modelos de rastreadores usando un único endpoint y puerto compartidos. Cuando un terminal MTA-Glonass reporta a Plaspy, normalmente no es necesario seleccionar manualmente el protocolo dentro de Plaspy si el dispositivo está configurado para enviar datos al endpoint de Plaspy. La detección automática facilita la incorporación en despliegues de flotas que mezclan distintos modelos de rastreadores.

- Plaspy escucha en un endpoint común cuyo hostname es d.plaspy.com y la dirección del servidor 54.85.159.138.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto, que es 8888, por lo que no se requiere mapeo de puertos por dispositivo.
- Plaspy detecta automáticamente el protocolo del rastreador basándose en la conexión entrante y los identificadores reportados por el dispositivo.
- Usted normalmente configura el rastreador para que reporte al endpoint de Plaspy y deja que Plaspy gestione la selección del protocolo.
- Si un equipo no reporta como se espera, verifique primero los parámetros de reporte del dispositivo, la conectividad de red y las opciones de configuración del fabricante antes de cambiar ajustes en Plaspy.

## Transporte y contexto de conexión

El terminal MTA-Glonass soporta múltiples opciones de transporte para enviar telemetría. Plaspy acepta el tráfico de los dispositivos a través del endpoint y puerto compartidos, y los equipos pueden configurarse para usar distintos modos de transporte según las condiciones de red y la configuración. Comprender el contexto de transporte ayuda a asegurar una conectividad fiable y un flujo de datos predecible.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888, según el firmware del equipo y la preferencia del operador.
- Los puntos típicos de configuración incluyen apuntar el terminal a d.plaspy.com o a la dirección numérica 54.85.159.138.
- Todos los dispositivos en Plaspy se conectan usando el mismo puerto, por lo que la configuración de firewall y APN puede estandarizarse en una flota.
- Elija UDP para reportes con menor sobrecarga cuando esté soportado, o TCP cuando se prefiera un transporte orientado a conexión.
- Verifique que el APN celular y los ajustes GPRS del terminal permitan sesiones de datos hacia el endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- El comportamiento del protocolo puede variar entre revisiones de firmware; confirme la versión del firmware del terminal al solucionar comportamientos inesperados.
- Las revisiones de hardware y los módulos I/O opcionales pueden exponer conjuntos distintos de telemetría y eventos que no están presentes en todas las unidades.
- La selección de transporte entre UDP y TCP afecta la fiabilidad y la lógica de reintentos, pero no cambia la telemetría de alto nivel que el dispositivo puede enviar.
- El SMS como canal de reserva puede estar soportado para configuración o alertas, pero las cargas útiles y capacidades varían según el modelo y el firmware.
- Puede ser necesario usar las herramientas de configuración del fabricante o servicios de aprovisionamiento para establecer el host de reporte en d.plaspy.com o la dirección numérica del servidor.
- Valide siempre la compatibilidad y las funciones soportadas con la documentación del dispositivo proporcionada por OKB Tehnoavtomatika.

## Por qué es importante entender el protocolo

Tener un entendimiento práctico del protocolo de comunicación ayuda a asegurar que el dispositivo esté configurado correctamente para Plaspy, facilita la resolución de problemas de conectividad o discrepancias en los datos, y apoya operaciones a largo plazo predecibles para una flota de vehículos. Conocer las funciones generales del protocolo reduce el tiempo de integración y permite tomar decisiones informadas sobre configuración y monitoreo.

- Ayuda a diagnosticar por qué un dispositivo no aparece en Plaspy o por qué faltan campos específicos de telemetría.
- Orienta la configuración del APN, los intervalos de reporte y el modo de transporte para ajustarlos a las necesidades operativas.
- Facilita la planificación del almacenamiento en búfer de eventos, el almacenamiento offline y cómo se reconcilian los registros históricos tras restaurarse la conectividad.
- Aclara qué parámetros del bus CAN y entradas externas se espera ver en los reportes de Plaspy.
- Reduce el tiempo en prueba y error alineando la configuración del fabricante con las expectativas del endpoint de Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el MTA-Glonass (ver.12M-CAN-PRO) con Plaspy ofrece a los operadores de flota un camino fiable para capturar posición GNSS, métricas derivadas del CAN y telemetría basada en eventos en una plataforma unificada. El conjunto de capacidades del dispositivo, que incluye integración CAN, entradas por pulso y analógicas, y almacenamiento en búfer de eventos, complementa las funciones de Plaspy para monitoreo en tiempo real, alertas e informes históricos sin necesidad de cambios de puerto o endpoint por dispositivo.

Plaspy acepta conexiones en d.plaspy.com o 54.85.159.138 en el puerto 8888 y detecta automáticamente el protocolo del rastreador, por lo que la incorporación es ágil en flotas mixtas. Para conocer más sobre Plaspy y cómo puede recibir telemetría del terminal MTA-Glonass visite https://www.plaspy.com. Para obtener los detalles más recientes del protocolo específico del dispositivo, notas de firmware y orientación del fabricante, verifique la información actual en el sitio de OKB Tehnoavtomatika http://www.okb-ta.ru/

---
slug: /gotop/g60/protocol
id: g60-protocol
sidebar_label: Protocol
title: GOTOP - G60 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para integrar GOTOP G60 con Plaspy para reportes GPS y telemetría de eventos
keywords:
  - Protocolo GOTOP G60
  - Protocolo GPS GOTOP G60
  - Protocolo GOTOP G60 para Plaspy
  - Protocolo de comunicación GOTOP G60
  - Protocolo de rastreo GOTOP G60
  - Compatibilidad rastreador GOTOP Plaspy
  - Informes GPRS SMS GOTOP G60
  - Protocolo rastreador magnético
  - Protocolo rastreador vehicular Plaspy
  - Rastreo de flotas G60
---

# GOTOP - Protocolo G60

Esta página describe, en términos públicos y no sensibles, el contexto del protocolo para usar el rastreador GOTOP G60 con Plaspy. El objetivo es que gerentes de flota e integradores comprendan los métodos de reporte, los objetivos de conexión y consideraciones prácticas para la configuración y resolución de problemas.

El G60 es un rastreador magnético para activos y vehículos compatible con Plaspy que comunica posición y telemetría vía SMS o GPRS sobre 4G. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta el protocolo del equipo de forma automática. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que el rendimiento en campo puede diferir entre unidades o tras actualizaciones de firmware.

## Visión general del protocolo

El protocolo de reporte del G60 es el mecanismo que el dispositivo usa para enviar ubicación, alertas y estado a una plataforma backend como Plaspy. En términos públicos, el protocolo define cómo el equipo empaqueta la información identificatoria y la telemetría para su envío por redes celulares, de modo que Plaspy pueda procesar y presentar datos de ubicación y eventos útiles.

- Permite que el G60 reporte fijaciones GPS, posiciones por estación base como alternativa, y telemetría de eventos como vibración o batería baja.
- Incluye información identificatoria para que Plaspy asocie los mensajes entrantes con el registro de dispositivo correcto.
- Soporta reporte por GPRS y retrocesos por SMS para mantener visibilidad cuando la conectividad de datos es variable.
- Facilita consultas remotas de parámetros y verificaciones de estado iniciadas por SMS cuando la configuración por GPRS no está disponible.
- Define los datos mínimos que Plaspy necesita para ofrecer seguimiento, reproducción de ruta y alertas sin exponer detalles internos del dispositivo.

## Cómo detecta Plaspy el protocolo

Plaspy está diseñado para aceptar reportes entrantes de muchos modelos de rastreadores sin que los usuarios finales deban seleccionar manualmente un protocolo. Cuando un G60 o un dispositivo similar se configura para reportar al endpoint de Plaspy, la plataforma detecta automáticamente el protocolo del rastreador y enruta los datos a la canalización de procesamiento adecuada.

- Plaspy escucha en un único endpoint compartido para simplificar la configuración de equipos para integradores y técnicos de campo.
- Dispositivos configurados para reportar a d.plaspy.com o a la IP del servidor de Plaspy alcanzarán el mismo punto de ingestion para la detección automática del protocolo.
- Por lo general, usted no necesita seleccionar un protocolo dentro de Plaspy si el dispositivo apunta correctamente al endpoint de Plaspy.
- La detección automática reduce pasos de configuración y facilita la incorporación de unidades que usan tanto SMS como GPRS.
- Si un dispositivo no aparece, verifique que esté configurado con el objetivo de reporte Plaspy correcto y el modo de transporte adecuado.

## Transporte y contexto de conexión

El contexto de conexión define cómo el G60 entrega sus mensajes de protocolo a Plaspy. El dispositivo soporta reporte celular y puede configurarse para usar distintos protocolos de transporte según el firmware y las preferencias de configuración.

- El G60 puede reportar por GPRS o SMS, usando GPRS como canal de datos primario y SMS como opción de respaldo.
- Los dispositivos pueden configurarse para usar UDP o TCP para el reporte por GPRS en el puerto 8888.
- El dominio del servidor de Plaspy para reportes es d.plaspy.com y la IP pública del servidor es 54.85.159.138.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto, lo que simplifica el aprovisionamiento y las reglas de firewall.
- La elección entre UDP y TCP depende de la configuración del rastreador y del comportamiento del operador en la región de despliegue.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el tiempo de mensajes, el transporte soportado y los campos disponibles; siempre verifique la versión de firmware del equipo al validar su comportamiento.
- Las revisiones de hardware o variantes regionales pueden alterar el soporte de bandas de radio y, en algunos casos, las opciones de mensaje disponibles para Plaspy.
- La elección del transporte en el dispositivo (UDP vs TCP) puede afectar las características de entrega; confirme el transporte previsto al aprovisionar.
- El comportamiento de reporte por SMS y los conjuntos de comandos suelen estar definidos por el fabricante y pueden variar entre unidades.
- Para despliegues que usan posicionamiento por estación base como fallback, espere distinta precisión y cadencia de reporte comparado con fijaciones GPS.
- Valide la compatibilidad probando una unidad de muestra en la red prevista y monitoreando cómo Plaspy ingiere sus mensajes.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el G60 ayuda a los equipos a fijar expectativas sobre tiempo de puesta en marcha, autonomía de batería y fiabilidad, y facilita la resolución de problemas cuando los dispositivos no reportan como se espera.

- Asegura la configuración correcta de endpoint y transporte para que los dispositivos lleguen a Plaspy de forma confiable.
- Ayuda a equilibrar intervalo de reporte y duración de batería al entender la frecuencia de envío de datos.
- Orienta sobre el uso de GPRS como transporte primario con SMS como respaldo para resiliencia en áreas de baja cobertura.
- Guía la gestión y pruebas de firmware para evitar regresiones cuando el fabricante actualiza el comportamiento del protocolo.
- Facilita la planificación de integraciones para alertas, reproducción de rutas y paneles telemétricos en Plaspy.

## Por qué usar Plaspy con este protocolo

Combinar el GOTOP G60 con Plaspy ofrece una solución práctica para organizaciones que requieren rastreo discreto y de larga autonomía junto con las funcionalidades operativas de una plataforma moderna de flotas. El montaje magnético del G60 y su carcasa robusta con protección IP65 lo hacen adecuado para instalaciones discretas en contenedores, carga y vehículos de alquiler, mientras reporta posición y eventos a Plaspy para visibilidad en tiempo real y análisis histórico.

Plaspy simplifica la conectividad usando un endpoint de ingestión compartido y un único puerto para todos los dispositivos, detectando automáticamente el protocolo del rastreador cuando un equipo apunta al objetivo de reporte de Plaspy. Para saber más sobre Plaspy y cómo gestiona la integración de dispositivos y la telemetría de flotas visite https://www.plaspy.com. El soporte de protocolo, el comportamiento de firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo; verifique los detalles más recientes del protocolo y firmware específicos del fabricante en https://www.gotop.cc/

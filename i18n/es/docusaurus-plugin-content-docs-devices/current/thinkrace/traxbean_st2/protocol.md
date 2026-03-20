---
slug: /thinkrace/traxbean_st2/protocol
id: traxbean_st2-protocol
sidebar_label: Protocol
title: ThinkRace - Traxbean ST2 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del ThinkRace Traxbean ST2 y cómo se comunica con Plaspy para localización y telemetría
keywords:
  - Protocolo ThinkRace Traxbean ST2
  - Protocolo GPS Traxbean ST2
  - Compatibilidad protocolo ThinkRace Plaspy
  - Protocolo de comunicación Traxbean ST2
  - Protocolo de rastreo Traxbean ST2
  - Protocolo rastreador GPS ThinkRace
  - Protocolo reloj inteligente para cuidado de mayores
  - Integración rastreador GPS Plaspy
  - Reporte dispositivo a servidor
  - Seguimiento telemetría en tiempo real
---

# ThinkRace - Protocolo Traxbean ST2

Esta página ofrece una visión pública y de alto nivel del contexto del protocolo de comunicación para usar el ThinkRace Traxbean ST2 con Plaspy. Se centra en cómo el dispositivo informa ubicación, telemetría de salud y eventos a Plaspy sin exponer detalles sensibles de implementación. Utilice este documento como referencia orientada al protocolo para comprender cómo el ST2 suele integrarse en una implementación de Plaspy.

Plaspy emplea ajustes de conexión compartidos para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta a la plataforma. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página mantiene un enfoque intencionalmente general y práctico, señalando los datos de conexión clave necesarios para la configuración del dispositivo.

## Resumen del protocolo

El Traxbean ST2 se comunica con los servicios de back end para entregar datos de ubicación, signos vitales y eventos que Plaspy procesa para mapas, alertas e informes. El protocolo del rastreador regula cómo el dispositivo empaqueta la telemetría, se identifica frente a un endpoint de servidor y notifica eventos como SOS o detección de caídas. Para los usuarios de Plaspy, los aspectos importantes son la identificación fiable, las actualizaciones periódicas y por eventos, y los ajustes de transporte que permitan al dispositivo alcanzar el endpoint de Plaspy.

- El protocolo permite enviar información de identificación y autenticación del dispositivo junto con la telemetría para que Plaspy pueda asociar los datos a un equipo conocido.
- Los reportes periódicos de ubicación y telemetría se usan para mapas en vivo y trayectos históricos en Plaspy.
- Los mensajes de evento, como SOS, detección de caídas e inmovilidad, se entregan como informes priorizados para su manejo inmediato.
- La telemetría de salud, como frecuencia cardíaca y SpO2, se transmite junto con la ubicación para que Plaspy pueda aplicar reglas de alerta y paneles de control.
- El protocolo admite tanto reportes programados como envíos asincrónicos por eventos para asegurar la entrega oportuna de alarmas críticas.

## Detección del protocolo por Plaspy

Plaspy recibe conexiones entrantes en un único endpoint y puerto compartidos y realiza detección automática de protocolo, por lo que normalmente usted no necesita seleccionar manualmente un protocolo cuando el dispositivo está configurado correctamente para reportar a Plaspy. La detección y el enrutamiento se realizan en el borde de la plataforma, lo que permite que muchos modelos de rastreadores, incluido el Traxbean ST2, sean ingresados bajo un modelo de conexión común.

- Plaspy utiliza un único endpoint de servidor d.plaspy.com para recibir reportes de dispositivos.
- La IP del servidor Plaspy también resuelve a 54.85.159.138 para despliegues que prefieren o requieren una dirección directa.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración en flotas mixtas.
- Plaspy detecta automáticamente el protocolo del rastreador cuando un dispositivo se conecta al endpoint y puerto compartidos.
- En configuraciones típicas, el integrador ajusta el dispositivo para que reporte a d.plaspy.com (o 54.85.159.138) y Plaspy se encarga del resto.

## Transporte y contexto de conexión

La selección del transporte y la configuración del endpoint son fundamentales para lograr que el Traxbean ST2 comunique con Plaspy. El rastreador puede configurarse para enviar datos sobre protocolos de transporte comunes soportados por redes móviles; elegir el transporte y endpoint correctos garantiza que los mensajes lleguen al servicio de ingestión de Plaspy.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y su configuración.
- Plaspy recibe conexiones de rastreadores en el puerto 8888, y este mismo puerto se usa para todos los dispositivos soportados por la plataforma.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o a la IP del servidor Plaspy 54.85.159.138 si no hay resolución DNS disponible.
- Asegúrese de que el operador móvil y la configuración APN permitan el transporte elegido y el puerto saliente para que los reportes puedan alcanzar Plaspy.
- La fiabilidad de la red y el comportamiento del operador pueden influir en si UDP o TCP es la mejor opción para su despliegue.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware y las variantes de hardware del Traxbean ST2 pueden alterar la temporización de mensajes, los campos de telemetría disponibles o funciones opcionales; confirme el comportamiento del firmware para un lote de dispositivos dado.
- Los valores predeterminados del fabricante pueden enrutar el dispositivo a través de los servicios de back end de ThinkRace; cuando sea posible, puede configurar el envío directo a Plaspy.
- La selección de transporte (UDP frente a TCP) debe coincidir con la configuración del equipo y las restricciones del operador para lograr la mejor fiabilidad de entrega.
- El modelo de endpoint compartido de Plaspy reduce la complejidad de configuración por dispositivo, pero no elimina la necesidad de validar el ID del dispositivo y la cadencia de reporte.
- Algunas funciones como telemetría avanzada de salud o escaneo de balizas BLE pueden depender de opciones de firmware habilitadas o configuraciones de accesorios.
- Siempre valide cada dispositivo en Plaspy durante el despliegue para confirmar la entrega de eventos, los campos de telemetría y la cadencia de actualizaciones.

## Por qué es importante comprender el protocolo

Conocer las características básicas del protocolo ayuda a agilizar la puesta en marcha, la resolución de problemas y la operación a largo plazo de dispositivos Traxbean ST2 en Plaspy. Entender cómo el dispositivo reporta, qué transportes puede usar y hacia dónde debe enviar datos reduce el tiempo de integración y ayuda a diseñar flujos de monitoreo confiables.

- Asegura la configuración correcta del servidor y del transporte para que los datos lleguen de forma consistente a Plaspy.
- Facilita el diagnóstico de problemas de entrega cuando la telemetría o los eventos no aparecen en los paneles.
- Orienta la decisión de usar reenvío directo desde el dispositivo o enrutar a través de los servicios del fabricante.
- Permite planificar actualizaciones de firmware y cómo pueden cambiar la telemetría disponible o la temporización de mensajes.
- Ayuda a configurar umbrales de alerta y intervalos de reporte que se ajusten a las capacidades del dispositivo.

## Por qué usar Plaspy con este protocolo

Usar el Traxbean ST2 con Plaspy integra telemetría de salud y seguridad de wearables en un único entorno de monitoreo que puede combinar el seguimiento de personas y activos. Para organizaciones enfocadas en cuidado de mayores, residencias asistidas o despliegues mixtos, esta integración ofrece visibilidad oportuna de ubicación y signos vitales junto con alertas por eventos como SOS y detección de caídas. El modelo de ingestión de Plaspy y el puerto unificado simplifican poner en línea muchos dispositivos rápidamente, al tiempo que mantienen la prioridad de eventos y la fidelidad de la telemetría.

Para obtener más información sobre Plaspy y cómo ingiere la telemetría de dispositivos, visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que verifique la información más reciente sobre el protocolo específico del dispositivo y el firmware en el sitio del fabricante https://www.thinkrace.com/.

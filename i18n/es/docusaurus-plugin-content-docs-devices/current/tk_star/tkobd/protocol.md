---
slug: /tk_star/tkobd/protocol
id: tkobd-protocol
sidebar_label: Protocol
title: TK-Star - TKOBD Protocol
sidebar_class_name: menu_item_tracker
description: Referencia pública del protocolo TKOBD de TK-Star y su compatibilidad con Plaspy para reportes e integración confiable
keywords:
  - Protocolo TK-Star TKOBD
  - Protocolo GPS TK-Star TKOBD
  - Protocolo de comunicación TKOBD
  - Protocolo de rastreo TKOBD
  - Compatibilidad tracker TK-Star con Plaspy
  - Protocolo OBD GPS
  - Rastreo vehicular TKOBD
  - Integración de dispositivos Plaspy
  - Gestión de flotas TKOBD
  - Reporte de telemetría TKOBD
---

# TK-Star - Protocolo TKOBD

Esta página documenta el contexto público del protocolo para usar el rastreador TK-Star TKOBD con Plaspy. Se centra en cómo el dispositivo se comunica con los servidores de Plaspy a alto nivel, qué ajustes de conexión son habituales y qué aspectos del flujo de comunicación son relevantes al integrar el dispositivo en la plataforma Plaspy.

Plaspy utiliza configuraciones de conexión compartidas entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo reporte al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página ofrece orientación pública, no sensible, y notas prácticas de compatibilidad en lugar de detalles internos del dispositivo.

## Resumen del protocolo

El dispositivo TKOBD envía actualizaciones de ubicación y estado a un servidor remoto para que Plaspy pueda ingerir y mostrar posiciones en tiempo real, alertas y rutas históricas. El rastreador emplea su módem celular y posicionamiento de múltiples fuentes (GPS, GLONASS, BDS, LBS, Wi Fi) para generar datos de localización que se transmiten a Plaspy para mapeo y notificaciones.

- El protocolo define cómo el rastreador empaqueta identificación, ubicación, estado y eventos de alarma para su entrega a un backend.
- La frecuencia de reporte y los disparadores de eventos determinan con qué frecuencia el dispositivo envía actualizaciones para seguimiento en vivo y alertas.
- Los campos de identificación en los reportes permiten que Plaspy asocie los datos entrantes con el equipo y la cuenta correctos.
- Los registros de telemetría y alarma posibilitan que Plaspy presente notificaciones en tiempo real, el historial de rutas y paneles de estado a los usuarios.
- La comunicación funciona sobre conexiones de transporte estándar para que los dispositivos puedan alcanzar los servidores de Plaspy en redes móviles.

## Cómo Plaspy detecta el protocolo

Plaspy está diseñado para recibir datos de muchos modelos de dispositivos en un único endpoint compartido y para identificar automáticamente el protocolo cuando un equipo se conecta y transmite. En la mayoría de los casos, no es necesario seleccionar el protocolo manualmente en Plaspy si el dispositivo está configurado para reportar al servidor de Plaspy.

- Plaspy usa un único endpoint y puerto para el reporte de dispositivos y detecta automáticamente el protocolo entrante.
- Normalmente usted configura el equipo para que reporte a d.plaspy.com o a la IP del servidor Plaspy y el dispositivo será reconocido por la plataforma.
- Cuando un dispositivo correctamente configurado comienza a enviar datos, Plaspy mapea la transmisión entrante al registro del dispositivo y a la lógica de parseo correspondiente.
- La detección automática reduce la complejidad de configuración para flotas que despliegan muchos modelos de rastreadores compatibles.
- Si un dispositivo no aparece en Plaspy, revise el destino de reporte y los ajustes de firmware del equipo antes de ajustar la configuración de la plataforma.

## Contexto de transporte y conexión

El TKOBD puede enviar sus reportes sobre transportes de datos móviles comunes y normalmente se apunta al endpoint de reporte de Plaspy. El dispositivo puede configurarse para usar UDP o TCP según los ajustes del equipo y las condiciones de la red.

- Los dispositivos configurados para reportar a Plaspy pueden usar UDP o TCP en el puerto 8888.
- El dominio del servidor Plaspy a utilizar es d.plaspy.com y la IP pública del servidor es 54.85.159.138 en el puerto 8888.
- Todos los dispositivos en Plaspy usan el mismo puerto para reportes, lo que simplifica el aprovisionamiento y las comprobaciones de alcanzabilidad del servidor.
- La selección del transporte (UDP frente a TCP) puede afectar la entrega en redes celulares con pérdida de paquetes y generalmente se elige según la capacidad del dispositivo y las necesidades del despliegue.
- Asegúrese de que el APN y los ajustes de datos móviles en la SIM sean correctos para que el rastreador pueda alcanzar el endpoint de Plaspy.

## Notas de compatibilidad del protocolo

- Las diferencias de firmware pueden cambiar el contenido de los mensajes, los eventos disponibles o la cadencia de reporte entre lotes de producción.
- Las revisiones de hardware y las variantes regionales pueden afectar el rendimiento GNSS o los canales de telemetría disponibles.
- Ajustes del fabricante o configuraciones personalizadas pueden alterar qué protocolo de transporte usa el dispositivo por defecto.
- Verifique que el equipo esté apuntando a d.plaspy.com o a 54.85.159.138 y use el puerto 8888 al diagnosticar problemas de conectividad.
- Plaspy detecta el protocolo automáticamente, pero la identificación precisa del dispositivo depende de campos de identificación correctos en los reportes.
- Consulte la documentación oficial del fabricante para comportamientos específicos de firmware que puedan impactar la integración.

## Por qué es importante conocer el protocolo

Comprender cómo se comunica el rastreador ayuda a garantizar reportes confiables, agilizar la resolución de problemas y prever el comportamiento de la flota cuando los dispositivos se gestionan desde Plaspy. Saber qué envía el dispositivo y cómo llega a Plaspy facilita validar instalaciones y resolver incidencias intermitentes.

- Confirma que los equipos están correctamente apuntados al endpoint de Plaspy para que los datos lleguen a d.plaspy.com en el puerto 8888.
- Le ayuda a elegir entre UDP o TCP según las necesidades del despliegue y las características de la red celular.
- Facilita la interpretación del tiempo de telemetría y alarmas para que las alertas en Plaspy reflejen eventos del mundo real.
- Acelera la resolución de problemas al acotar si la incidencia es de red, configuración del dispositivo o firmware cuando faltan reportes.
- Orienta la planificación de actualizaciones de firmware cuando cambios en el contenido de mensajes puedan afectar la integración con Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el TK-Star TKOBD con Plaspy ofrece a operadores de flotas y propietarios de vehículos una vía directa hacia el rastreo centralizado, alertas en tiempo real y revisión de rutas históricas sin configuraciones complejas por dispositivo. El factor de forma con conector OBD facilita la instalación, mientras Plaspy agrega telemetría y alarmas en una vista operativa única para despacho, seguridad y recuperación.

Para obtener más información sobre Plaspy y cómo se integra con rastreadores GPS como el TKOBD visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo; verifique la documentación y las notas de firmware más recientes con el fabricante en https://www.tk-star.com/ antes de finalizar despliegues.

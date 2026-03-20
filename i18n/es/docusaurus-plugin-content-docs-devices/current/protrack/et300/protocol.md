---
slug: /protrack/et300/protocol
id: et300-protocol
sidebar_label: Protocol
title: Protrack - ET300 Protocol
sidebar_class_name: menu_item_tracker
description: Información pública del protocolo para conectar el Protrack ET300 a Plaspy y permitir seguimiento y reportes en tiempo real
keywords:
  - Protrack ET300 protocolo
  - Protrack ET300 protocolo GPS
  - protocolo de rastreo ET300
  - compatibilidad Protrack ET300 con Plaspy
  - protocolo de comunicación ET300
  - protocolo rastreador GPS Protrack
  - compatibilidad seguimiento de flotas ET300
  - integración Protrack ET300
  - protocolo de dispositivo Protrack ET300
  - telemetría ET300
---

# Protrack - Protocolo ET300

Esta página resume el contexto público del protocolo para usar el rastreador vehicular Protrack ET300 con la plataforma Plaspy. Describe cómo el ET300 transmite telemetría y eventos útiles a Plaspy, y cuáles son los factores que influyen en una integración exitosa sin exponer detalles internos del dispositivo ni implementaciones sensibles.

El ET300 es compatible con Plaspy desde fábrica y está diseñado para monitoreo vehicular confiable en entornos exigentes. Plaspy utiliza ajustes de conexión compartidos entre dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Siempre consulte al fabricante para detalles específicos de firmware.

## Resumen del protocolo

El protocolo de reporte del rastreador es el mecanismo que el ET300 usa para enviar posiciones, eventos y estados a un servidor remoto. En términos generales, este protocolo define cómo el dispositivo se identifica, reporta telemetría como ubicación y velocidad, y notifica eventos como entradas o salidas de geocerca, pérdida de energía o acciones del inmovilizador.

- Permite que el dispositivo transmita actualizaciones de ubicación y notificaciones de eventos a Plaspy para monitoreo en tiempo real.
- Transporta información de identidad y sesión para que Plaspy asocie los mensajes con un dispositivo ET300 específico.
- Comunica tipos de eventos usados en flujos de trabajo de flota, como alertas de geocerca, excesos de velocidad y cortes de alimentación.
- Soporta reportes periódicos y mensajes impulsados por eventos para que los viajes históricos y los registros de incidentes sean útiles en Plaspy.
- Funciona sobre transportes de red estándar, de modo que los dispositivos pueden reportar desde redes móviles a los endpoints de Plaspy.

## Cómo Plaspy detecta el protocolo

La plataforma de ingestión de Plaspy acepta conexiones de muchos modelos de rastreadores y determina automáticamente el protocolo apropiado para cada dispositivo cuando llegan los datos al endpoint compartido. Esto significa que la mayoría de las unidades ET300 solo necesitan apuntar al endpoint de Plaspy para comenzar a enviar telemetría utilizable sin seleccionar manualmente el protocolo dentro de la plataforma.

- Plaspy escucha en un único endpoint y puerto comunes para las conexiones de rastreadores.
- Cuando un ET300 reporta al endpoint de Plaspy, la plataforma inspecciona los mensajes entrantes y los mapea a comportamientos de dispositivo conocidos.
- Normalmente usted no necesita seleccionar un protocolo específico en Plaspy si el dispositivo está configurado para reportar al servidor de Plaspy.
- La detección automática agiliza la incorporación de flotas mixtas que incluyen unidades ET300 y otros rastreadores compatibles.
- Si un dispositivo no aparece, verifique la configuración del equipo, la versión de firmware y la accesibilidad de red al endpoint de Plaspy.

## Transporte y contexto de conexión

Los detalles de conexión determinan cómo el ET300 alcanza a Plaspy pero no revelan los detalles internos del protocolo. El ET300 puede configurarse para usar UDP o TCP en un único puerto de Plaspy según la capacidad del dispositivo y las preferencias del instalador. Los dispositivos deben poder comunicarse con el servidor de Plaspy usando el dominio público o su dirección IP.

- El dominio del servidor Plaspy para reportes es d.plaspy.com.
- La IP del servidor Plaspy es 54.85.159.138 y puede usarse cuando se requiere un host numérico.
- El puerto utilizado para todos los dispositivos en Plaspy es 8888 y es común entre los rastreadores soportados.
- El dispositivo puede configurarse con UDP o TCP en el puerto 8888 según las opciones del equipo y las condiciones de red.
- Usar el dominio de Plaspy facilita el enrutamiento basado en DNS, mientras que la dirección IP ofrece una alternativa para entornos de red que la exigen.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el tiempo entre mensajes, los eventos disponibles o campos opcionales; confirme la versión de firmware al solucionar problemas.
- Las variantes de hardware y las configuraciones de fábrica a veces se entregan con transportes predeterminados o intervalos de reporte distintos.
- Algunas funciones, como control de inmovilizador o telemetría de sensor de combustible, pueden requerir cableado específico u opciones de firmware para habilitarse.
- Cambiar entre UDP y TCP puede afectar la confiabilidad en ciertas condiciones de redes móviles; elija el transporte que mejor se ajuste a la capacidad del dispositivo y al comportamiento del operador móvil.
- Valide que la dirección y el puerto de reporte del dispositivo estén configurados al endpoint de Plaspy al poner en servicio las unidades.
- En caso de duda, consulte la documentación del fabricante para comandos y procedimientos de configuración específicos del dispositivo.

## Por qué es importante entender el protocolo

Tener un conocimiento básico del protocolo de comunicación del ET300 y del contexto de conexión ayuda a instaladores, integradores y personal operativo a configurar los dispositivos correctamente y a resolver problemas comunes que afectan la visibilidad y las alertas en Plaspy.

- Confirma que los dispositivos reportan al endpoint y puerto correctos de Plaspy para una ingestión de datos inmediata.
- Ayuda a diagnosticar por qué una unidad no aparece en Plaspy cuando la configuración de firmware o transporte difiere de lo esperado.
- Aclara qué eventos reportados y campos de telemetría pueden usarse en alertas automáticas y reglas de flota.
- Permite planificar la selección de transporte y la configuración de red para despliegues móviles fiables.
- Facilita conversaciones informadas con el fabricante cuando los comportamientos esperados difieren de los resultados en campo.

## Por qué usar Plaspy con este protocolo

Usar el ET300 con Plaspy ofrece seguimiento en tiempo real y reportes de eventos sencillos para flotas pequeñas y vehículos individuales. La carcasa robusta IP65 del ET300 y sus funciones básicas de telemetría lo convierten en una opción práctica para flujos de trabajo de anti robo, monitoreo de conducta del conductor y supervisión básica de flota, mientras que Plaspy convierte los mensajes del dispositivo en vistas en mapa, alertas e informes históricos.

Si desea conocer más sobre las capacidades de Plaspy y cómo el ET300 encaja en un flujo de trabajo de seguimiento de flota, visite https://www.plaspy.com. Para las referencias de protocolo específicas del dispositivo, notas de firmware e instrucciones de configuración más actualizadas consulte al fabricante en http://www.protrackgps.in/ ya que las implementaciones y el comportamiento del firmware pueden cambiar con el tiempo.

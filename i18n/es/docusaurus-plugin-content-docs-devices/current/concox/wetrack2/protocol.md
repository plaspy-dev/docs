---
slug: /concox/wetrack2/protocol
id: wetrack2-protocol
sidebar_label: Protocol
title: Concox - WeTrack2 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo Concox WeTrack2 y cómo el rastreador se comunica con Plaspy para seguimiento de flotas en tiempo real
keywords:
  - protocolo Concox WeTrack2
  - protocolo GPS Concox WeTrack2
  - compatibilidad WeTrack2 Plaspy
  - protocolo de comunicación WeTrack2
  - protocolo de rastreo WeTrack2
  - rastreador Concox Plaspy
  - rastreador GPS vehicular WeTrack2
  - rastreo de flotas WeTrack2
  - protocolo GPS Concox
  - compatibilidad de dispositivos Plaspy
---

# Concox - WeTrack2 Protocolo

Esta página explica el contexto público del protocolo para usar el rastreador Concox WeTrack2 con Plaspy. Se enfoca en cómo el dispositivo se comunica con Plaspy en términos generales, qué ajustes de conexión son necesarios y consideraciones prácticas para integrar el rastreador en una flota activa sin entrar en detalles sensibles de implementación.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y las decisiones del fabricante. Use esta guía para comprender el transporte y el contexto de reporte del WeTrack2 y planear la configuración o pasos de solución de problemas antes de consultar la documentación oficial del fabricante para detalles específicos del firmware.

## Visión general del protocolo

El protocolo de reporte es el conjunto de reglas que el WeTrack2 emplea para identificarse y enviar telemetría a un servidor remoto como Plaspy. En la práctica, el protocolo define cómo se empaquetan y transmiten la ubicación, el estado de encendido, eventos de movimiento y otra telemetría para que la plataforma pueda convertir esos mensajes en actualizaciones de posición y alertas útiles.

- Permite al WeTrack2 enviar posiciones GNSS, actualizaciones de estado y eventos al servidor para seguimiento en tiempo real y registro histórico.
- Transmite señales de encendido ACC, detección de movimiento y alarmas que Plaspy utiliza para generar alertas y flujos operativos.
- Proporciona identidad consistente y contexto de sesión para que Plaspy asocie los reportes entrantes con el dispositivo y la cuenta correctos.
- Soporta almacenamiento local y subida diferida para que los datos registrados durante cortes breves de conectividad se entreguen cuando se restablezca la comunicación.
- Funciona sobre transporte de red estándar para alcanzar los servidores de Plaspy, donde la plataforma parsea los mensajes en métricas y reportes del panel de control.

## Cómo Plaspy detecta el protocolo

Plaspy acepta conexiones en un único endpoint compartido e identifica automáticamente el protocolo del rastreador entrante, por lo que la mayoría de los usuarios no necesitan seleccionar una opción de protocolo manualmente. Cuando un WeTrack2 se configura para reportar a Plaspy, el sistema inspecciona el contexto de la conexión entrante y la identidad reportada del dispositivo para enrutar e interpretar los mensajes correctamente.

- El dominio del servidor Plaspy es d.plaspy.com, que es un endpoint válido de reporte para dispositivos compatibles.
- La IP del servidor Plaspy es 54.85.159.138 y puede usarse como endpoint alternativo para la configuración del dispositivo.
- El puerto es 8888 y todos los dispositivos en Plaspy usan el mismo puerto para reportes.
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según soporte y preferencia del equipo.
- Dado que Plaspy detecta automáticamente el protocolo del rastreador, normalmente solo es necesario asegurarse de que el dispositivo apunte al endpoint correcto de Plaspy y que la configuración de transporte coincida con la del equipo.

## Contexto de transporte y conexión

Plaspy acepta telemetría de dispositivos WeTrack2 sobre transporte IP estándar. El rastreador soporta conectividad celular común y está pensado para reportar telemetría a un único endpoint de Plaspy, donde la plataforma recibe, procesa y almacena los datos para paneles y alertas.

- Los dispositivos pueden configurarse para reportar al dominio d.plaspy.com o directamente a la IP 54.85.159.138.
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888; la elección depende del firmware del dispositivo y la preferencia del operador.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica el aprovisionamiento y centraliza el tráfico entrante.
- Los pasos típicos de configuración en el lado del dispositivo implican establecer la dirección del servidor y seleccionar el protocolo de transporte soportado por el rastreador.
- El almacenamiento local en el WeTrack2 preserva registros durante interrupciones breves de la red para que los reportes se entreguen cuando se restablezca la conectividad.

## Notas sobre compatibilidad del protocolo

- Las variaciones de firmware pueden cambiar el timing de mensajes, campos opcionales o los transportes soportados entre revisiones del dispositivo.
- Revisiones de hardware o versiones específicas por región pueden alterar características disponibles, como constelaciones GNSS soportadas o comportamiento de GPIO.
- Las opciones de configuración del fabricante pueden habilitar o deshabilitar campos de telemetría específicos o modificar el intervalo de reporte del dispositivo.
- La elección de transporte entre UDP y TCP puede afectar características de entrega como retransmisión y manejo de sesiones.
- Confirme que la configuración del dispositivo apunte a d.plaspy.com o 54.85.159.138 en el puerto 8888 para la ingestión por parte de Plaspy.
- Valide la compatibilidad del dispositivo consultando la documentación oficial más reciente de Concox al planear despliegues masivos o actualizaciones.

## Por qué es importante conocer el protocolo

Tener una comprensión práctica del protocolo de comunicación WeTrack2 ayuda a garantizar una incorporación de dispositivos confiable, a acelerar la solución de problemas y a mejorar la operación a largo plazo con Plaspy. Saber los límites de comunicación y qué verificar cuando faltan datos o están mal formateados ahorra tiempo a administradores y equipos de servicio.

- Simplifica el aprovisionamiento al confirmar la dirección del servidor y el transporte correcto antes del despliegue.
- Acelera la resolución de problemas al enfocar las revisiones en la configuración de transporte, la versión de firmware y si el dispositivo alcanza d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Ayuda a interpretar el comportamiento de almacenamiento y subidas diferidas para explicar y manejar vacíos históricos.
- Permite planificar actualizaciones de firmware o revisiones de hardware que puedan afectar el contenido de mensajes o la telemetría disponible.
- Mejora la postura de seguridad al alentar a los operadores a verificar la configuración del dispositivo y las rutas de red en lugar de suponer detalles internos del protocolo.

## Por qué usar Plaspy con este protocolo

Usar WeTrack2 con Plaspy ofrece un camino directo hacia visibilidad en tiempo real, alertas y reportes históricos para scooters, motocicletas, vehículos livianos y equipos industriales. La combinación de características del hardware WeTrack2, como detección de encendido, soporte para inmovilizador remoto, sensibilidad GNSS y almacenamiento a bordo, junto con el endpoint de ingestión unificado de Plaspy, ayuda a los equipos a mantener conciencia situacional y responder más rápido a incidentes.

Para obtener más información sobre cómo Plaspy funciona con una amplia variedad de rastreadores, visite https://www.plaspy.com. El soporte de protocolos, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, así que verifique la información específica del dispositivo y la guía de firmware más reciente en el sitio del fabricante https://www.iconcox.com/ antes de finalizar despliegues.

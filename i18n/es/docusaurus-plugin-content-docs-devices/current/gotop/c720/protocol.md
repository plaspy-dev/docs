---
slug: /gotop/c720/protocol
id: c720-protocol
sidebar_label: Protocol
title: GOTOP - C720 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para integrar el localizador GOTOP C720 con la plataforma Plaspy
keywords:
  - Protocolo GOTOP C720
  - Protocolo GPS GOTOP C720
  - GOTOP C720 Plaspy
  - Protocolo de comunicación GOTOP C720
  - Protocolo de rastreador GPS GOTOP
  - Protocolo de rastreo C720
  - Compatibilidad GOTOP C720
  - Protocolo de seguimiento de vehículos
  - Compatibilidad del rastreador GOTOP con Plaspy
  - Protocolo de rastreador encubierto de vehículos
---

# GOTOP - Protocolo C720

Esta página describe el contexto público del protocolo para usar el localizador GPS GOTOP C720 con Plaspy. Se enfoca en cómo el equipo transmite ubicación y telemetría de alarmas a una plataforma externa y qué implica eso para la configuración, validación y solución de problemas de una implementación en Plaspy.

Plaspy usa ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo cuando un C720 está configurado para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo y el contenido de los mensajes pueden variar según la versión de firmware, la revisión del hardware y las decisiones de implementación del fabricante, por lo que esta página ofrece una visión amplia y segura en lugar de detalles internos específicos de firmware.

## Resumen del protocolo

El C720 comunica su posición, estado y alarmas a plataformas en línea a través de enlaces celulares. El equipo emplea su conexión GSM GPRS para enviar telemetría y puede usar SMS o voz cuando está soportado. El propósito del protocolo es asegurar que el rastreador se identifique, entregue datos de ubicación y alarmas utilizables y soporte reportes basados en eventos para alertas inmediatas.

- Envía fijaciones de posición y telemetría con marca de tiempo para seguimiento en tiempo real e histórico.
- Transmite señales de alarma y eventos como activación de geocercas, alarmas por vibración o movimiento, batería baja y pérdida de alimentación principal.
- Comunica la identidad y el estado del dispositivo para que Plaspy pueda asociar los mensajes entrantes con el activo correcto.
- Soporta reportes periódicos y basados en eventos para ofrecer tanto actualizaciones programadas de ubicación como alertas inmediatas.
- Permite integraciones con flujos de control remoto, como funciones de inmovilizador o corte de alimentación, cuando el dispositivo lo soporta.

## Cómo Plaspy detecta el protocolo

Plaspy acepta telemetría en un endpoint y puerto compartidos y detecta automáticamente el protocolo cuando el dispositivo reporta a ese endpoint. En despliegues típicos, el C720 se configura para enviar datos al servidor de Plaspy y la plataforma identifica el formato entrante, por lo que en la mayoría de los casos no es necesaria una selección manual del protocolo.

- Configure el C720 para reportar al endpoint de Plaspy d.plaspy.com o a la IP del servidor 54.85.159.138 en el puerto 8888.
- Los dispositivos pueden utilizar transporte UDP o TCP según la configuración del equipo y el soporte del firmware.
- Cuando el rastreador se conecta y envía telemetría, Plaspy asigna la identidad del dispositivo a un activo registrado e interpreta los mensajes entrantes automáticamente.
- Normalmente usted no necesita seleccionar un protocolo dentro de Plaspy siempre que el dispositivo apunte correctamente al endpoint de Plaspy y no esté bloqueado por firewalls de red.
- Si un dispositivo no aparece en línea, verifique APN, la selección de transporte, la dirección del servidor y la conectividad básica antes de ajustar configuraciones en la plataforma.

## Transporte y contexto de conexión

El C720 soporta transmisión de datos por GPRS y puede entregar mensajes a un servidor remoto mediante transporte TCP o UDP estándar. Para compatibilidad con Plaspy, el dispositivo debe apuntar al endpoint y puerto compartidos de Plaspy para que el tráfico entrante sea recibido y enrutado de forma consistente.

- Plaspy recibe tráfico de dispositivos en el puerto 8888 y todos los dispositivos soportados por Plaspy usan ese mismo puerto.
- El rastreador puede configurarse para usar UDP o TCP en el puerto 8888 según su firmware y ajustes.
- Apunte el C720 a d.plaspy.com o a la IP directa 54.85.159.138 y confirme que el modo de transporte coincide con la configuración del dispositivo.
- Asegúrese de que el APN de la SIM del vehículo permita datos GPRS y que el enrutamiento de la red móvil o los firewalls permitan tráfico saliente hacia el servidor de Plaspy.
- SMS puede usarse como vía de comunicación alternativa para algunas funciones, pero GPRS es obligatorio para telemetría continua en línea e integración con la plataforma.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware entre lotes de producción pueden cambiar el comportamiento de los mensajes y las opciones de transporte disponibles.
- Revisiones de hardware, como variantes de antena o de conexión de alimentación, pueden afectar la calidad de la señal y los tiempos de detección de alarmas.
- Algunas funciones, como el control del inmovilizador, requieren cableado correcto y soporte de firmware en el dispositivo.
- La elección entre UDP y TCP debe basarse en las capacidades del dispositivo y en consideraciones de confiabilidad de la red.
- Los reportes por SMS están disponibles para alertas básicas, pero GPRS proporciona el conjunto completo de telemetría necesario para los paneles de Plaspy.
- Siempre valide un dispositivo de muestra de extremo a extremo antes de un despliegue a gran escala para confirmar cómo se comporta esa revisión de firmware con Plaspy.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el C720 ayuda a garantizar una configuración fiable, agilizar la resolución de problemas y prever el comportamiento cuando los dispositivos se administran desde Plaspy. Conocer el transporte, la dirección del servidor y los patrones de reporte de eventos reduce el tiempo de inactividad y mejora los tiempos de respuesta ante alarmas.

- Confirma que el dispositivo apunta al endpoint y puerto correctos de Plaspy para que la telemetría llegue de forma consistente.
- Ayuda a diagnosticar problemas de conectividad como APN mal configurado, puertos bloqueados o restricciones de la red móvil.
- Aclara qué alarmas y tipos de evento recibirá la plataforma y cómo se mapean a notificaciones y flujos de trabajo.
- Facilita el cableado y la configuración correctos de funciones de inmovilizador y sensor de alimentación principal usados en escenarios antirrobo.
- Ayuda a planificar despliegues a escala de flota al resaltar riesgos por variaciones de firmware y consideraciones de red.

## Por qué usar Plaspy con este protocolo

Usar el GOTOP C720 con Plaspy proporciona a las organizaciones visibilidad encubierta y fiable del vehículo junto con manejo centralizado de alarmas y reproducción histórica. Plaspy ingiere la telemetría del C720, muestra eventos de geocerca y alarmas y almacena el historial de ubicaciones para auditorías y procesos de recuperación, ayudando a los equipos de operaciones a responder rápidamente a incidentes y gestionar activos de forma eficiente.

Para saber más sobre Plaspy y cómo puede integrarse con rastreadores como el GOTOP C720 visite https://www.plaspy.com. Para notas de protocolo específicas del dispositivo, detalles de firmware y guías de instalación más recientes, verifique la información en el sitio del fabricante https://www.gotop.cc/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.

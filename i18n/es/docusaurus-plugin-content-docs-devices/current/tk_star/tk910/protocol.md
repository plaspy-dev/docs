---
slug: /tk_star/tk910/protocol
id: tk910-protocol
sidebar_label: Protocol
title: TK-Star - TK910 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para integrar el TK910 de TK‑Star con Plaspy mediante ajustes compartidos y detección automática
keywords:
  - Protocolo TK Star TK910
  - Protocolo GPS TK910
  - Compatibilidad TK Star TK910 Plaspy
  - Protocolo de comunicación TK910
  - Protocolo de rastreo TK910
  - Protocolo rastreador GPS TK Star
  - Compatibilidad de dispositivos Plaspy
  - Protocolo de rastreo vehicular TK910
  - Integración telemetría TK910
  - Rastreo de flotas TK910
---

# TK-Star - Protocolo TK910

Esta página ofrece un resumen público del protocolo para usar el rastreador TK‑Star TK910 con la plataforma Plaspy. Se enfoca en cómo el dispositivo comunica información de ubicación y eventos útiles a Plaspy en términos generales y no sensibles, y explica el papel del protocolo de reporte durante la configuración y operación.

Plaspy utiliza ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo comienza a reportar al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por eso esta página describe el contexto de comunicación común en lugar de detalles internos específicos de firmware.

## Resumen del protocolo

El protocolo de reporte del TK910 define los comportamientos del dispositivo y los flujos de mensajes que permiten al equipo enviar ubicaciones asistidas por GNSS, correcciones por LBS y Wi‑Fi, y eventos de alarma a un servidor remoto para rastreo y gestión de flotas. Al integrarse con Plaspy, el protocolo permite que el rastreador se identifique, envíe actualizaciones periódicas y por eventos, y entregue telemetría que Plaspy puede mostrar en paneles y notificaciones.

- Permite reportes periódicos de posición y mensajes por eventos como vibración, geocerca, movimiento y exceso de velocidad.
- Incluye identificación y telemetría para que Plaspy asocie los mensajes al vehículo o activo correcto.
- Transmite posiciones asistidas por GNSS además de asistencia por LBS y Wi‑Fi para mejorar las ubicaciones en zonas con cobertura limitada.
- Admite comandos remotos y control cuando hay hardware opcional instalado, como corte de motor, sujeto a la configuración y soporte del fabricante.
- Proporciona los datos básicos que Plaspy necesita para archivar trayectos históricos y generar notificaciones.

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones entrantes en un único endpoint compartido y detecta automáticamente el protocolo del rastreador a partir del tráfico reportado y la identificación del dispositivo. En la mayoría de los casos no es necesario seleccionar manualmente un protocolo en Plaspy cuando el TK910 está correctamente configurado para enviar datos al endpoint de Plaspy.

- Plaspy escucha en el endpoint común del servidor en d.plaspy.com y en la IP pública 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración y el alta de equipos.
- Plaspy detecta automáticamente el protocolo del rastreador una vez que el TK910 comienza a reportar al endpoint de Plaspy.
- Si un dispositivo envía identificación y telemetría con el formato esperado, Plaspy mapeará los mensajes al registro del dispositivo sin necesidad de seleccionar el protocolo manualmente.
- Para variantes de firmware inusuales o despliegues altamente personalizados, puede ser útil revisar la documentación del fabricante.

## Transporte y contexto de conexión

El TK910 envía datos a la backend de Plaspy a través de la red celular utilizando las opciones de transporte estándar que soporta el dispositivo. Plaspy ofrece un único puerto de escucha para todos los equipos, lo que facilita apuntar los rastreadores a Plaspy desde la configuración del dispositivo.

- El TK910 puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del dispositivo y las necesidades de configuración.
- Los dispositivos pueden enviar datos al dominio de Plaspy d.plaspy.com o a la dirección IP 54.85.159.138.
- Plaspy utiliza el puerto 8888 como puerto común para todos los dispositivos y conexiones soportadas.
- La elección entre UDP y TCP depende del firmware del equipo y de la configuración definida por el instalador.
- Asegúrese de que el plan de datos de la SIM y la conectividad móvil permitan tráfico GPRS saliente hacia el endpoint de Plaspy.

## Notas de compatibilidad del protocolo

- El TK910 es compatible con Plaspy cuando está configurado para reportar al endpoint de Plaspy, aunque los detalles de implementación pueden variar entre versiones de firmware.
- Revisiones de hardware y compilaciones regionales de firmware pueden introducir diferencias en la cadencia de mensajes y en características opcionales.
- La selección del modo de transporte UDP frente a TCP afecta la semántica de entrega y debe coincidir con la configuración del dispositivo.
- Funciones opcionales como inmovilizador remoto requieren el cableado y la configuración correctos además del soporte del protocolo.
- Valide el registro del IMEI del dispositivo y las configuraciones de APN para garantizar la conectividad exitosa con el endpoint de Plaspy.
- Consulte la documentación del fabricante para listas de comandos específicas del firmware y posibles variantes de modelo que alteren el comportamiento.

## Por qué es importante conocer el protocolo

Comprender el protocolo de comunicación facilita el alta de dispositivos, asegura que el rastreador reporte la telemetría esperada y simplifica la resolución de problemas cuando la conectividad o el reporte de eventos no funcionan como se espera.

- Confirma la configuración correcta del endpoint y del transporte para que los dispositivos reporten de forma fiable a Plaspy.
- Ayuda a verificar que eventos críticos como violaciones de geocerca y alertas por vibración se entreguen e interpreten correctamente.
- Facilita el diagnóstico de problemas a nivel de red, como puertos bloqueados o ajustes de APN incorrectos.
- Aclara qué funciones opcionales, como el corte remoto de motor, funcionarán en su despliegue.
- Apoya la planificación de actualizaciones de firmware y revisiones de hardware que puedan cambiar el comportamiento de reporte.

## Por qué usar Plaspy con este protocolo

Usar el TK910 con Plaspy ofrece a gestores de flota y propietarios de vehículos una forma sencilla de recolectar posiciones asistidas por GNSS, correcciones por LBS y Wi‑Fi, y alertas de eventos en una plataforma unificada. Plaspy ingiere la telemetría, asigna dispositivos automáticamente, archiva trayectos históricos y expone alertas para flujos operativos y respuesta a incidentes.

Para obtener más información sobre Plaspy y cómo maneja la integración de dispositivos y la supervisión de flotas visite https://www.plaspy.com. Para documentación específica y actualizaciones de firmware consulte al fabricante en https://www.tk-star.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.

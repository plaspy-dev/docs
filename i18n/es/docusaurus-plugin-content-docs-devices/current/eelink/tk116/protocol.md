---
slug: /eelink/tk116/protocol
id: tk116-protocol
sidebar_label: Protocol
title: EElink - TK116 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo EElink TK116 y su comunicación con la plataforma Plaspy
keywords:
  - protocolo EElink TK116
  - rastreador GPS TK116
  - protocolo EElink Plaspy
  - protocolo de comunicación TK116
  - protocolo de rastreo TK116
  - compatibilidad rastreador GPS Plaspy
  - gestión de flotas TK116
  - rastreador para motocicletas TK116
  - compatibilidad GPS EElink
  - rastreo en tiempo real TK116
---

# EElink - Protocolo TK116

Esta página describe el contexto público del protocolo para usar el EElink TK116 con Plaspy. Se enfoca en cómo el rastreador se comunica con Plaspy en términos generales, las configuraciones de conexión compartidas que usa la plataforma y los aspectos de la comunicación del dispositivo más relevantes para una integración y operación exitosas. Es una visión orientada al protocolo dirigida a usuarios técnicos, integradores y administradores de flota.

Plaspy utiliza configuraciones de conexión compartidas entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando un dispositivo informa a la plataforma. El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138 con el puerto 8888. El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 y todos los dispositivos en Plaspy usan el mismo puerto. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que confirme los detalles específicos del equipo con el fabricante cuando sea necesario.

## Descripción general del protocolo

El protocolo del rastreador define cómo el TK116 informa posición, telemetría y eventos a un servidor remoto como Plaspy. A alto nivel, el protocolo asegura que el dispositivo pueda identificarse, enviar información de ubicación y estado utilizable, y transmitir alertas de eventos que Plaspy pueda convertir en rastreo en tiempo real, notificaciones e informes.

- Proporciona el flujo básico de mensajes para actualizaciones de posición, informes de estado y notificaciones de eventos como ACC, SOS y alarmas.
- Transporta la información de identificación que permite a Plaspy asociar los mensajes entrantes con un registro de dispositivo específico.
- Transmite telemetría e entradas digitales/analógicas que Plaspy mapea al estado del vehículo, alertas y reglas.
- Habilita controles y comandos remotos opcionales cuando lo soporta el dispositivo y la implementación lo permite.
- Funciona sobre transporte de red estándar para entregar mensajes al endpoint de Plaspy para su análisis y visualización.

## Cómo detecta Plaspy el protocolo

Plaspy recibe el tráfico de dispositivos en un endpoint unificado y detecta automáticamente el protocolo del rastreador, por lo que usted por lo general no necesita seleccionar un protocolo manualmente en la plataforma. Cuando usted configure un TK116 para reportar a Plaspy, la plataforma utiliza las configuraciones de conexión compartidas para aceptar y clasificar los mensajes entrantes.

- El dominio del servidor de Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138 para referencia directa del endpoint.
- El puerto es 8888 y Plaspy usa el mismo puerto en todos los dispositivos compatibles para simplificar la configuración.
- Plaspy detecta automáticamente el protocolo del rastreador basándose en los mensajes entrantes enviados al endpoint compartido.
- En la mayoría de los casos solo necesita configurar el dispositivo para que apunte al endpoint de Plaspy y elegir UDP o TCP según lo soporte la unidad.
- Si un dispositivo no se reconoce automáticamente, lo habitual es verificar la versión de firmware y la configuración del fabricante como siguiente paso.

## Transporte y contexto de conexión

El contexto de conexión abarca cómo el TK116 transmite datos a Plaspy y qué opciones de configuración son comúnmente disponibles. El TK116 se comunica por 2G y puede configurarse para enviar datos usando UDP o TCP según el soporte del equipo y las decisiones de despliegue.

- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según la unidad y la preferencia del despliegue.
- Los dispositivos pueden apuntar a d.plaspy.com o a 54.85.159.138 como dirección del servidor al configurar el endpoint de reporte.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica las reglas de red y la configuración de firewall.
- La selección del transporte (UDP frente a TCP) puede influir en características de entrega como la fiabilidad y la latencia; elija el modo que su dispositivo y condiciones de red recomienden.
- Asegúrese de que la SIM y la red móvil en campo soporten la conectividad 2G requerida por el TK116.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware y las revisiones de hardware pueden cambiar el temporizado de mensajes, las funciones soportadas y los campos opcionales; valide contra las notas de firmware del dispositivo.
- Las opciones de configuración del fabricante o las variantes regionales pueden habilitar o deshabilitar funciones como SOS, control de relé o reporte de micrófono.
- La elección de transporte entre UDP y TCP depende del dispositivo; confirme qué transportes soporta la unidad TK116 específica.
- La disponibilidad de red para servicios 2G afecta la conectividad y debe confirmarse para las regiones de despliegue.
- Valide la identidad del dispositivo y el formato de reporte durante la configuración inicial para asegurar que los mensajes sean reconocidos por Plaspy.
- Ante la duda, consulte la documentación oficial del fabricante y las notas de lanzamiento para confirmar el comportamiento específico del dispositivo.

## Por qué es importante comprender el protocolo

Comprender el protocolo del rastreador ayuda a garantizar una instalación fluida, reportes confiables y un manejo preciso de eventos en Plaspy. Saber qué envía el rastreador y cómo lo recibe Plaspy reduce el tiempo de puesta en marcha y mejora la eficiencia en la resolución de problemas.

- Diagnóstico más rápido de problemas de conectividad o reporte durante la provisión inicial y el despliegue en campo.
- Mapeo más claro entre las entradas del dispositivo y las alertas, eventos de geocerca y telemetría visibles en Plaspy.
- Mejor planificación de la red y la provisión de SIM, especialmente en zonas con cobertura 2G limitada.
- Mayor confianza al habilitar funciones opcionales como control de relé o manejo de SOS.
- Validación más sencilla de actualizaciones de firmware o cambios de configuración que puedan afectar el monitoreo y las reglas.

## Por qué usar Plaspy con este protocolo

Usar el TK116 con Plaspy proporciona a las organizaciones visibilidad en tiempo real de la ubicación del vehículo, eventos de ignición y alarmas, y telemetría que respalda operaciones de flota y flujos de trabajo de seguridad. Plaspy ingiere los datos del dispositivo enviados a d.plaspy.com o 54.85.159.138 en el puerto 8888 y los presenta en paneles, alertas e informes para que los equipos puedan actuar ante eventos como alarmas por robo, disparos de SOS o ciclos de encendido/apagado del motor.

Plaspy está diseñado para aceptar tráfico de dispositivos en un único puerto compartido y detectar automáticamente el protocolo del rastreador, lo que facilita el despliegue de dispositivos como el TK116 a escala. Para saber más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. El soporte de protocolos, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, así que verifique la información y las notas de firmware más recientes con el fabricante en https://www.eelink.com.cn/.

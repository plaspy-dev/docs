---
slug: /eelink/tk418/protocol
id: tk418-protocol
sidebar_label: Protocol
title: EElink - TK418 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para usar el EElink TK418 con Plaspy y cómo se gestiona la comunicación del dispositivo
keywords:
  - protocolo EElink TK418
  - protocolo GPS EElink TK418
  - EElink TK418 Plaspy
  - protocolo de rastreo EElink
  - protocolo rastreador TK418
  - compatibilidad TK418 Plaspy
  - rastreador GPS TK418
  - rastreo de vehículos TK418
  - protocolo de telemetría TK418
  - protocolo de dispositivo EElink
---

# EElink - Protocolo del TK418

Esta página explica el contexto público del protocolo para usar el rastreador EElink TK418 con Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy, qué función cumple el protocolo del equipo en la entrega de ubicaciones y eventos, y qué ajustes de conexión compartidos puede esperar al integrar el equipo en flotas y flujos de trabajo de seguimiento de activos.

El TK418 es compatible con Plaspy desde el primer momento y se comunica mediante el protocolo EELINK como punto de integración público. Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta el protocolo del rastreador de forma automática, aunque el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Esta página ofrece contexto práctico y no sensible del protocolo e recomienda verificar la documentación del fabricante para detalles específicos de firmware.

## Resumen del protocolo

El protocolo define cómo el TK418 informa posiciones, telemetría y eventos de alerta a un servidor telemático y cómo esos datos se representan para su ingestión por Plaspy. Para integradores, el protocolo es el puente entre los sensores del dispositivo y los paneles, alertas e informes históricos de Plaspy.

- Permite que el TK418 envíe soluciones GNSS, estado del ACC, eventos de choque y vibración, y telemetría de sensores a Plaspy.
- Proporciona identidad del dispositivo y contexto de eventos para que Plaspy asocie los mensajes entrantes con el activo o vehículo correcto.
- Transporta telemetría con marca temporal que Plaspy utiliza en mapas en tiempo real, alertas y reconstrucción histórica de rutas.
- Soporta notificaciones de eventos opcionales como SOS, exceso de velocidad y cambios en el estado de energía que Plaspy presenta a los operadores.
- Permite comandos de configuración o control remoto cuando el firmware del equipo lo soporta y existe transporte seguro disponible.

## Cómo detecta Plaspy el protocolo

Plaspy acepta datos de rastreadores en un único endpoint compartido y detecta automáticamente el protocolo que utiliza el dispositivo. Si el TK418 está configurado para reportar al endpoint de Plaspy, normalmente no es necesario seleccionar el protocolo manualmente en Plaspy para la mayoría de las implementaciones.

- Plaspy escucha en el endpoint del servidor compartido d.plaspy.com y también acepta conexiones a 54.85.159.138 para ingestión.
- El puerto de ingestión de Plaspy para todos los dispositivos soportados es 8888 y se mantiene consistente entre modelos.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que los dispositivos bien configurados se identificarán sin mapeo manual.
- Asegúrese de que el TK418 esté configurado para reportar al endpoint de Plaspy y que los ajustes de transporte del dispositivo coincidan con los requisitos de la red y del operador.
- Si un dispositivo usa firmware alternativo o una configuración personalizada, valide el comportamiento de reporte probando mensajes en vivo al endpoint de Plaspy.

## Transporte y contexto de conexión

El transporte de conexión y la dirección de red determinan cómo el TK418 alcanza los servidores de Plaspy. El TK418 soporta transportes celulares modernos y puede configurarse en UDP o TCP según la capacidad del dispositivo y las condiciones de la red.

- El TK418 puede configurarse para usar UDP o TCP en el puerto 8888 para el reporte.
- Los dispositivos pueden apuntar al dominio del servidor Plaspy d.plaspy.com o directamente a la IP del servidor 54.85.159.138.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos para simplificar la configuración y las reglas de firewall.
- La elección entre UDP o TCP afecta las características de entrega pero no cambia que Plaspy ingiere mensajes en el endpoint compartido.
- Confirme que los firewalls del operador y de la red permitan tráfico saliente hacia el endpoint de Plaspy en el puerto 8888.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar comandos soportados, formatos de eventos o campos opcionales usados por el protocolo EELINK en el TK418.
- Las revisiones de hardware y accesorios opcionales, como módulos de relé o sensores externos, pueden alterar qué puntos de telemetría están disponibles.
- Las variaciones del lado del fabricante en menús de configuración o valores predeterminados de firmware pueden afectar la selección de transporte y la cadencia de reporte.
- Algunas funciones descritas por el fabricante pueden requerir firmware o configuración específicos para reportar de forma fiable a Plaspy.
- Valide comportamientos críticos como el reporte de eventos SOS, notificaciones de corte de energía y control de inmovilizador en un entorno de pruebas antes del despliegue en producción.
- Al integrar muchas unidades, realizar pruebas representativas entre versiones de firmware ayuda a reducir sorpresas debido a variaciones en el comportamiento del dispositivo.

## Por qué importa entender el protocolo

Comprender el protocolo de comunicación del TK418 ayuda a integradores y administradores de flota a asegurar una configuración confiable, agilizar la resolución de problemas y lograr una operación predecible a largo plazo con Plaspy. Saber qué debe enviar el dispositivo y cuándo facilita el diagnóstico de problemas de conectividad y calidad de datos.

- Confirma que el dispositivo está reportando la telemetría y los eventos esperados a Plaspy tras el despliegue.
- Facilita la resolución de problemas de posiciones perdidas, eventos faltantes o valores de telemetría inesperados.
- Ayuda a configurar los ajustes de transporte del dispositivo y las reglas de firewall para que los reportes lleguen de forma fiable a d.plaspy.com en el puerto 8888.
- Permite validar funciones opcionales como comandos de inmovilizador o entradas de sensores externos antes de depender de ellas operacionalmente.
- Aumenta la confianza al desplegar actualizaciones de firmware o variantes de hardware en una flota.

## Por qué usar Plaspy con este protocolo

Usar el TK418 con Plaspy combina la capacidad de hardware compacta del dispositivo con una plataforma de ingestión que gestiona automáticamente la detección de protocolo y los ajustes de conexión compartidos. Para organizaciones que necesitan visibilidad continua, alertas configurables y telemetría integrada, el TK418 junto con Plaspy ofrece una ruta práctica para el seguimiento en tiempo real, la notificación de incidentes y los informes operativos.

Para obtener más información sobre Plaspy y las capacidades de la plataforma que complementan la telemetría a nivel de dispositivo, visite https://www.plaspy.com. Para detalles actuales del protocolo del dispositivo, notas de firmware y orientación del fabricante, verifique la información con EElink en https://www.eelink.com.cn/ ya que el soporte del protocolo y el comportamiento del firmware pueden cambiar con el tiempo.

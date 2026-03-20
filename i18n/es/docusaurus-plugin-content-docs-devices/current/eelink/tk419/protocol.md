---
slug: /eelink/tk419/protocol
id: tk419-protocol
sidebar_label: Protocol
title: EElink - TK419 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo EElink TK419 y su compatibilidad con Plaspy, incluyendo ajustes de conexión y contexto de integración
keywords:
  - eelink tk419 protocolo
  - eelink tk419 protocolo gps
  - eelink tk419 protocolo de comunicación
  - eelink tk419 protocolo de rastreo
  - eelink tk419 plaspy
  - plaspy compatibilidad eelink
  - protocolo gps eelink
  - rastreo de vehículos eelink tk419
  - integración protocolo eelink
  - gestión de flotas tk419
---

# EElink - Protocolo TK419

Esta página documenta el contexto público del protocolo del EElink TK419 cuando se usa con Plaspy. Resume cómo el rastreador comunica posiciones GNSS, alarmas y telemetría a través de redes celulares hacia Plaspy, sin exponer detalles sensibles o propietarios de implementación. Utilice esta guía para comprender el contexto de conexión y el papel práctico del protocolo del dispositivo en una implementación con Plaspy.

El TK419 es un rastreador 4G compacto diseñado para flotas de vehículos y seguridad de activos; transmite telemetría mediante redes GPRS y LTE Cat 1. Plaspy emplea ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Para conjuntos de comandos específicos y detalles de firmware consulte la documentación oficial de EElink.

## Visión general del protocolo

El protocolo implementado por el TK419 proporciona el mecanismo para que el dispositivo se identifique, reporte posiciones GNSS, transmita alarmas y estado de entradas/salidas (IO), y acepte configuraciones o comandos de control cuando están disponibles. En implementaciones con Plaspy, el protocolo actúa como puente entre los mensajes crudos del dispositivo y los datos útiles de ubicación y alertas.

- Permite que el dispositivo envíe posiciones GNSS periódicas o basadas en eventos y actualizaciones de estado a Plaspy.
- Transmite alarmas y estados de IO como encendido ACC, alertas por choque o vibración, eventos de geovalla y notificaciones de batería de respaldo.
- Permite a la plataforma asociar los mensajes entrantes con una identidad de dispositivo para que Plaspy muestre ubicación en tiempo real y el historial.
- Soporta la configuración remota y controles operativos que el fabricante pueda ofrecer, como inmovilizador remoto o actualización de parámetros cuando el dispositivo y el firmware lo permiten.
- Traduce la telemetría del dispositivo en registros estructurados que Plaspy utiliza para mapas, alertas e informes.

## Cómo detecta Plaspy el protocolo

Plaspy recibe el tráfico de rastreadores en un punto de ingestión compartido y detecta automáticamente qué protocolo está usando un dispositivo cuando este apunta correctamente al endpoint de Plaspy. Normalmente no es necesario seleccionar el protocolo de forma manual en la plataforma si el rastreador reporta a la dirección y puerto del servidor Plaspy.

- El endpoint de ingestión de Plaspy es accesible en el dominio d.plaspy.com y la dirección de servidor 54.85.159.138.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto para reportar, lo que simplifica la configuración de dispositivos y las reglas de firewall.
- Plaspy inspecciona los mensajes entrantes en el endpoint compartido y los asigna automáticamente a la identidad de dispositivo y al manejador de protocolo correspondiente.
- Cuando la configuración del dispositivo es correcta, usted normalmente no necesita seleccionar un protocolo en Plaspy para que el TK419 sea reconocido.
- Si un rastreador no aparece en línea, confirmar que el dispositivo está reportando a d.plaspy.com en el puerto correcto es un paso de resolución de problemas primordial.

## Transporte y contexto de conexión

El TK419 puede transmitir datos por la red celular y soporta opciones de transporte estándar que se seleccionan por configuración del dispositivo o por valores predeterminados del firmware. Para conectividad de red Plaspy expone un único endpoint y puerto consistentes entre los dispositivos soportados para reducir la complejidad de configuración.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888, según el soporte del dispositivo y la configuración del sitio.
- El endpoint de Plaspy puede especificarse por nombre de dominio d.plaspy.com o por la IP del servidor 54.85.159.138 cuando no hay servicio DNS disponible.
- Plaspy utiliza el puerto 8888 para toda la ingestión de dispositivos, de modo que las reglas de firewall y APN se puedan estandarizar en las flotas.
- La selección del transporte afecta cómo se entregan los paquetes en la red móvil, pero no cambia el papel de alto nivel del protocolo en el reporte de telemetría.
- Confirme que el transporte elegido está soportado por el firmware del dispositivo y que los ajustes de APN y datos son correctos para una entrega confiable.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware en el TK419 pueden cambiar el comportamiento de mensajes, las funciones soportadas o los parámetros de configuración disponibles. Verifique la versión de firmware al diagnosticar problemas.
- Revisiones de hardware o variaciones de SKU pueden dar lugar a diferencias en capacidades de IO o soporte de periféricos que afecten la telemetría reportada.
- Las opciones de configuración del fabricante, como SMS frente a configuración basada en plataforma, pueden alterar cómo se aplican las actualizaciones remotas.
- La elección entre TCP o UDP puede afectar la confiabilidad y las características de entrega según las condiciones de la red.
- Siempre valide que los ajustes del dispositivo apunten a d.plaspy.com o 54.85.159.138 y que usen el puerto 8888 para la ingestión en Plaspy.
- Para casos límite o integraciones avanzadas consulte la documentación de EElink para confirmar las capacidades del dispositivo y los comandos soportados por su firmware.

## Por qué es importante entender el protocolo

Conocer cómo se comunica el TK419 ayuda a asegurar una implementación exitosa, simplifica la resolución de problemas y mejora la confiabilidad a largo plazo de los flujos de trabajo de rastreo y alarmas en Plaspy. Entender el contexto de protocolo y transporte reduce el tiempo de configuración y aclara qué elementos dependen del dispositivo y cuáles de la plataforma.

- Acelera la puesta en marcha inicial al confirmar el endpoint y puerto correctos de Plaspy antes de profundizar en la resolución de problemas.
- Ayuda a aislar problemas de conectividad debidos a transporte, APN o firewall en lugar de la interpretación por parte de la plataforma.
- Permite una comunicación más efectiva con el fabricante cuando se requiere clarificar comportamientos específicos del firmware.
- Facilita la planificación de actualizaciones de firmware y despliegues de hardware al anticipar cambios en el protocolo o en las funciones.
- Aumenta la confianza al mapear IO y alarmas del dispositivo con las alertas y automatizaciones de Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el TK419 con Plaspy ofrece a operadores de flotas y gestores de activos visibilidad continua, reenvío de alarmas y gestión centralizada de la telemetría de vehículos y activos móviles. El soporte multi GNSS del dispositivo, el reporte de batería de respaldo, la detección de ACC y el relé inmovilizador opcional se combinan con la ingestión y el sistema de alertas de Plaspy para ofrecer flujos de trabajo prácticos de monitoreo y seguridad.

El modelo de endpoint compartido de Plaspy y la detección automática de protocolo reducen la fricción en despliegues de flotas grandes y simplifican la configuración de red usando d.plaspy.com o 54.85.159.138 en el puerto 8888 para todos los dispositivos soportados. Para aprender más sobre Plaspy y cómo soporta integraciones de rastreadores GPS visite https://www.plaspy.com. Para los detalles más recientes específicos del dispositivo, notas de firmware y orientación del fabricante consulte el sitio de EElink en https://www.eelink.com.cn/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.

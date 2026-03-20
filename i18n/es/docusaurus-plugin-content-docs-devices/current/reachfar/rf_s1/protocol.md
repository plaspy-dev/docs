---
slug: /reachfar/rf_s1/protocol
id: rf_s1-protocol
sidebar_label: Protocol
title: Reachfar - RF-S1 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para usar el reloj Reachfar RF-S1 con Plaspy y ajustes de conexión compartidos
keywords:
  - Reachfar RF-S1
  - protocolo RF-S1
  - protocolo Reachfar
  - localizador GPS RF-S1
  - compatible con Plaspy
  - protocolo de localizadores GPS
  - protocolo GPS para wearables
  - localizador personal Plaspy
  - protocolo de seguimiento RF-S1
  - compatibilidad de protocolos de localizadores
---

# Reachfar - Protocolo RF-S1

Esta página describe el contexto público del protocolo para integrar el reloj inteligente de salud y localización Reachfar RF-S1 con Plaspy. Explica, en términos generales y no sensibles, cómo el dispositivo reporta ubicación, telemetría de salud y eventos de alerta a la plataforma Plaspy, y qué considerar al configurar los dispositivos para que informen a Plaspy.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo apunta al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en el contexto de comunicación y en orientación práctica de compatibilidad más que en los detalles internos del firmware.

## Visión general del protocolo

El RF-S1 emplea un protocolo de reporte para enviar posición, eventos SOS, telemetría de salud y actualizaciones de estado a Plaspy. En la práctica, ese protocolo permite que el reloj se identifique, transmita datos aprovechables a la plataforma y genere notificaciones de eventos que Plaspy puede mostrar a cuidadores o administradores.

- Permite reportes periódicos y por evento de ubicación para que Plaspy muestre la posición en tiempo real y el historial.
- Transporta telemetría de salud como frecuencia cardíaca y SpO2 en mensajes de estado para su monitoreo en Plaspy.
- Envía notificaciones de alta prioridad como pulsación del botón SOS y alarmas por remoción para alertas inmediatas.
- Permite la identificación del dispositivo y reportes básicos de estado para que Plaspy pueda asociar los datos entrantes con el activo correcto.
- Entrega metadatos de llamadas de voz y eventos a Plaspy cuando el equipo soporta voz bidireccional y registro de eventos.

## Cómo Plaspy detecta el protocolo

Plaspy recibe reportes de dispositivos en un endpoint y puerto compartidos y detecta automáticamente el protocolo del rastreador, por lo que la mayoría de usuarios no necesitan seleccionar un protocolo manualmente en Plaspy. La configuración correcta del equipo para que reporte al endpoint de Plaspy es el requisito habitual para que la detección automática funcione de forma fiable.

- El dominio del servidor Plaspy es d.plaspy.com y la plataforma también acepta conexiones a 54.85.159.138 en el mismo puerto.
- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 para conectarse a Plaspy.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración en flotas con equipos mixtos.
- Cuando el RF-S1 está configurado para reportar al endpoint de Plaspy, la plataforma reconocerá el protocolo del dispositivo de forma automática.
- Normalmente, los usuarios solo deben apuntar el rastreador al endpoint de Plaspy y asegurarse de que el transporte y las credenciales estén configurados según la guía del fabricante.

## Transporte y contexto de conexión

Las opciones de conexión, como UDP o TCP y la dirección del servidor, determinan cómo el RF-S1 llega a Plaspy, pero no cambian el significado de alto nivel de los mensajes del protocolo. Configure el transporte según las opciones del RF-S1 y el entorno de red donde se despliegue.

- El dispositivo puede usar UDP o TCP en el puerto 8888 según el soporte y la configuración del equipo.
- Los equipos pueden apuntar a d.plaspy.com o a 54.85.159.138 como endpoint del servidor Plaspy.
- Plaspy usa el mismo puerto para todos los dispositivos soportados, lo que reduce diferencias de configuración al mezclar rastreadores.
- El enrutamiento de red, el NAT del operador y las reglas de firewall pueden afectar si TCP o UDP funciona mejor en un despliegue específico.
- Asegúrese de que el dispositivo tenga conectividad a la red móvil y de que el tráfico saliente hacia el endpoint y puerto de Plaspy esté permitido por el operador y la red local.

## Notas de compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el contenido y la frecuencia de los mensajes; verifique la versión de firmware del RF-S1 al diagnosticar compatibilidad.
- Revisiones de hardware o variantes regionales del dispositivo pueden implementar opciones de reporte o conjuntos de telemetría ligeramente diferentes.
- La configuración en el lado del fabricante o ajustes de los operadores regionales pueden influir en qué transporte o modo de reporte es recomendable.
- La elección entre UDP y TCP puede afectar las características de entrega de telemetría y mensajes de eventos.
- Confirme funciones soportadas como metadatos de voz bidireccional o campos de telemetría específicos consultando la documentación del fabricante.
- Valide el comportamiento del dispositivo en una prueba controlada antes de un despliegue amplio para asegurar que Plaspy reciba las transmisiones de eventos y telemetría esperadas.
- En caso de duda, consulte la documentación de Reachfar para confirmar los valores predeterminados específicos del dispositivo y los comandos de configuración soportados.

## Por qué es importante entender el protocolo

Conocer cómo el RF-S1 se comunica con Plaspy ayuda a asegurar una configuración correcta, agilizar la resolución de problemas y lograr una operación fiable a largo plazo en escenarios de monitorización personal.

- Configuración más rápida al asegurar que el dispositivo apunte a d.plaspy.com o 54.85.159.138 usando el transporte correcto y el puerto 8888.
- Resolución de problemas más eficiente cuando eventos como SOS o alarmas por remoción no aparecen en Plaspy.
- Mejor planificación del comportamiento de red, como NAT, limitaciones del operador y el transporte preferido para su despliegue.
- Expectativas claras sobre qué telemetría y eventos el dispositivo reenviará a Plaspy según distintas revisiones de firmware.
- Mayor fiabilidad operacional al validar la configuración y probar casos límite antes de escalar.

## Por qué usar Plaspy con este protocolo

Usar el Reachfar RF-S1 con Plaspy integra la localización y la telemetría de salud de wearables en una sola plataforma de monitoreo. Para cuidadores y organizaciones centradas en la seguridad personal, la combinación ofrece una vista centralizada de ubicación, alertas SOS, alarmas por remoción y actualizaciones de estado de salud que facilitan una respuesta más rápida y un mejor control.

Plaspy acepta reportes en d.plaspy.com y 54.85.159.138 en el puerto 8888, usa el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador para mantener la configuración sencilla. Obtenga más información sobre Plaspy en https://www.plaspy.com y verifique los últimos detalles del protocolo RF-S1 y firmware con el fabricante en https://www.reachfargps.com/. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que siempre debe consultar la documentación del fabricante para la información más actual.

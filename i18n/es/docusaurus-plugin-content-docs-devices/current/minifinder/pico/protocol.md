---
slug: /minifinder/pico/protocol
id: pico-protocol
sidebar_label: Protocol
title: MiniFinder - Pico Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para integrar MiniFinder Pico con Plaspy y lograr seguimiento y alertas confiables
keywords:
  - protocolo MiniFinder Pico
  - protocolo Pico GPS
  - compatibilidad MiniFinder Pico Plaspy
  - protocolo de comunicación Pico
  - protocolo de rastreo MiniFinder
  - integración rastreador GPS Pico
  - rastreo en tiempo real Pico
  - rastreo de activos Pico
  - rastreador de seguridad personal Pico
  - protocolo de dispositivo Plaspy
---

# MiniFinder - Protocolo Pico

Esta página describe el contexto público del protocolo para usar el MiniFinder Pico con Plaspy. Explica, en términos generales, cómo se comunica el dispositivo, qué esperar cuando un Pico informe a Plaspy y de qué manera el protocolo permite que la telemetría y los eventos lleguen a Plaspy sin exponer detalles de implementación privados.

El MiniFinder Pico es un rastreador compacto para seguridad personal y protección de pequeños activos, con posicionamiento GNSS, botón SOS y detección de movimiento/caídas. Plaspy utiliza configuraciones de conexión compartidas entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por eso esta página se enfoca en el contexto público del protocolo y en orientaciones prácticas de integración.

## Resumen del protocolo

El rastreador Pico usa su pila de comunicaciones para reportar ubicación, alertas y estado a un servidor remoto. El protocolo define cómo el equipo se identifica, cómo se representan los eventos para su entrega y cómo se transmiten los reportes de ubicación periódicos para que Plaspy pueda ingerir y mostrar telemetría útil.

- Permite la transmisión de posiciones GNSS y marcas de tiempo para que Plaspy muestre ubicaciones en tiempo real e históricas.
- Transporta reportes de eventos como pulsaciones de SOS, detección de caídas, activaciones de geovallas, cambios de movimiento y estado de batería baja.
- Proporciona identidad del dispositivo e información de estado básica para que Plaspy asocie los datos entrantes con la unidad Pico correcta.
- Soporta reportes periódicos y mensajes basados en eventos para equilibrar alertas oportunas y duración de batería.
- Funciona sobre transporte IP estándar para que los dispositivos puedan reportar directamente al endpoint del servidor de Plaspy.

## Cómo detecta Plaspy el protocolo

Plaspy escucha en un único endpoint y puerto compartido para reportes entrantes y detecta automáticamente el protocolo de los dispositivos compatibles. Cuando el Pico está configurado para enviar sus reportes al endpoint de Plaspy, la plataforma identifica el tipo de dispositivo y parsea los mensajes entrantes, por lo que generalmente no es necesario seleccionar manualmente un protocolo dentro de la plataforma.

- El endpoint de servidor de Plaspy es d.plaspy.com y es alcanzable en 54.85.159.138.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto, lo que simplifica la configuración y el ruteo.
- Plaspy detecta automáticamente el protocolo del rastreador cuando un dispositivo correctamente configurado reporta a la plataforma.
- En la mayoría de los casos solo necesita apuntar el dispositivo al endpoint de Plaspy y asegurarse de los ajustes de transporte y APN correctos en la SIM.
- Una identidad de dispositivo adecuada y una versión de firmware compatible en el Pico ayudan a que Plaspy reconozca y procese los reportes de forma fiable.

## Transporte y contexto de conexión

Los dispositivos Pico se pueden configurar para usar UDP o TCP según el firmware y las opciones de configuración. El contexto de conexión determina cómo se entregan los reportes a Plaspy e influye en la confiabilidad y el consumo de batería; elija el transporte que mejor se ajuste a sus necesidades de despliegue y a las capacidades del Pico.

- Los dispositivos pueden usar UDP o TCP para enviar reportes al puerto 8888 del endpoint de Plaspy.
- Las unidades Pico pueden apuntar a d.plaspy.com o a la dirección numérica del servidor 54.85.159.138.
- Plaspy usa el mismo puerto para todos los dispositivos soportados, por lo que configurar el puerto 8888 es el estándar.
- La selección de transporte (UDP vs TCP) depende de las opciones de dispositivo y del entorno de red.
- Asegúrese de que el perfil de la SIM y el APN permitan conexiones salientes en el transporte elegido y que cualquier firewall de red permita tráfico hacia el endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Pico es compatible con Plaspy cuando el dispositivo está configurado para reportar al endpoint de Plaspy y presenta un comportamiento de firmware soportado.
- Las versiones de firmware y las revisiones de hardware pueden cambiar la temporización de los mensajes y los tipos de eventos disponibles; verifique las notas de la versión del firmware para detalles específicos del dispositivo.
- Los menús de configuración del fabricante, los ajustes de APN y la provisión de la SIM pueden afectar si los reportes llegan al servidor de Plaspy.
- La elección de transporte (UDP o TCP) puede influir en la fiabilidad de entrega y el consumo de batería; valide la mejor opción para su caso de uso.
- Las plataformas en la nube o de gestión del fabricante pueden incluir características propietarias; confirme si esas funciones afectan el reporte directo a Plaspy.
- Para despliegues grandes, valide siempre la compatibilidad probando un dispositivo de muestra con Plaspy antes del despliegue completo.

## Por qué es importante comprender el protocolo

Entender cómo se comunica el Pico con Plaspy ayuda a los instaladores y administradores a configurar correctamente los equipos, diagnosticar problemas de conectividad y optimizar los reportes para la vida de la batería y la oportunidad de las alertas. Un contexto claro del protocolo reduce el tiempo hasta la primera ubicación válida y mejora la fiabilidad operativa.

- Garantiza que los dispositivos apunten al endpoint correcto de Plaspy y usen el transporte y puerto adecuados.
- Facilita la resolución de telemetría faltante al revisar SIM, APN, transporte y configuración de endpoint.
- Orienta en la selección de intervalos de reporte y ajustes de eventos para equilibrar batería y necesidades de monitoreo.
- Aclara cómo los tipos de eventos del Pico se traducen en alertas y notificaciones dentro de Plaspy para los operadores.
- Ayuda a planificar actualizaciones de firmware y despliegues de hardware identificando cambios que puedan afectar la integración.

## Por qué usar Plaspy con este protocolo

Usar MiniFinder Pico con Plaspy permite a las organizaciones incorporar rastreo GPS compacto, wearable y funciones SOS dentro de un flujo centralizado de monitoreo y gestión de incidentes. La forma compacta del Pico, su precisión GNSS y sus capacidades de reporte de eventos lo hacen adecuado para seguridad personal, monitoreo de personas vulnerables y protección de pequeños activos cuando se combina con una plataforma capaz de ingerir y actuar sobre esos eventos.

Para saber más sobre cómo Plaspy puede gestionar dispositivos Pico e integrar ubicación y alertas en sus operaciones, visite https://www.plaspy.com. Para detalles específicos del protocolo, información de firmware y guías del fabricante, verifique la documentación vigente en https://minifinder.se/.

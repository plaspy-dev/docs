---
slug: /gosafe/g737/protocol
id: g737-protocol
sidebar_label: Protocol
title: Gosafe - G737 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del brazalete Gosafe G737, cómo se comunica con Plaspy y consideraciones de conexión
keywords:
  - Protocolo Gosafe G737
  - Protocolo GPS Gosafe G737
  - Protocolo G737 Plaspy
  - Protocolo rastreador GPS Gosafe
  - Protocolo de comunicación G737
  - Protocolo de rastreo Gosafe
  - Compatibilidad de dispositivos Plaspy
  - Integración de rastreadores GPS
  - Protocolo de monitoreo electrónico
  - Protocolo GPS para brazalete de tobillo
---

# Gosafe - Protocolo G737

Esta página ofrece contexto público sobre el protocolo para usar el brazalete Gosafe G737 con Plaspy. Resume, en términos generales, cómo se comunica el dispositivo, qué ajustes de conexión espera Plaspy y consideraciones prácticas para integrar el G737 en flotas y en flujos de trabajo de monitoreo electrónico sin revelar detalles privados de implementación.

Plaspy utiliza ajustes compartidos de conexión para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo apunta al endpoint de Plaspy. Para el G737, los objetivos comunes de conexión en Plaspy son d.plaspy.com o la IP del servidor Plaspy 54.85.159.138 en el puerto 8888. Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 y Plaspy usa el mismo puerto para todos los equipos mientras realiza la detección automática del protocolo. El comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Visión general del protocolo

El G737 envía datos de ubicación, eventos y telemetría a Plaspy mediante el protocolo de reporte implementado por el fabricante. Ese protocolo es el mecanismo que el rastreador utiliza para identificarse, reportar fijaciones GNSS y enviar señales de eventos como manipulación (tamper), SOS o transiciones de zona. Plaspy recibe esos reportes en un endpoint común y los traduce en actualizaciones de mapa, alertas y registros históricos.

- Traduce identificadores del dispositivo y telemetría en eventos útiles para los paneles y alertas de Plaspy
- Reporta fijaciones GNSS, localización celular como alternativa y registros de eventos con marcas temporales como tamper y SOS
- Entrega eventos de zonas y geocercas para que Plaspy evalúe cumplimiento y active notificaciones
- Soporta registro a bordo para que los datos históricos se carguen a Plaspy cuando se restablece la conectividad
- Transporta información de estado y telemetría que permiten a Plaspy mostrar batería, señal y estado del dispositivo

## Cómo Plaspy detecta el protocolo

Plaspy está diseñado para aceptar conexiones entrantes en un endpoint y puerto compartidos y para identificar automáticamente el protocolo del rastreador a partir del flujo de datos entrante. Cuando el G737 se configura para reportar a Plaspy, la plataforma detecta el protocolo del dispositivo sin requerir selección manual en la mayoría de los casos, lo que simplifica el despliegue.

- Ejemplos de endpoints de escucha de Plaspy incluyen d.plaspy.com y la IP del servidor 54.85.159.138
- Plaspy recibe datos en el puerto 8888 para todos los dispositivos y protocolos compatibles
- El dispositivo puede configurarse para usar UDP o TCP para enviar reportes a Plaspy en el puerto 8888
- Con los ajustes de reporte correctos en el dispositivo, normalmente no es necesario seleccionar manualmente el protocolo dentro de Plaspy
- La detección automática acelera la configuración en flotas mixtas con múltiples modelos de rastreadores

## Transporte y contexto de conexión

Comprender la configuración de la capa de transporte ayuda a garantizar que el G737 pueda enviar datos a Plaspy de forma fiable. El rastreador soporta conectividad celular para entregar fijaciones GNSS y eventos, y usted puede apuntar el dispositivo al dominio de Plaspy o a la dirección numérica del servidor según la configuración del sitio y la disponibilidad de DNS.

- Los dispositivos pueden configurarse para apuntar a d.plaspy.com o a la dirección numérica 54.85.159.138
- El puerto de escucha de Plaspy para todos los dispositivos es 8888
- El G737 puede configurarse para usar UDP o TCP en el puerto 8888 según la capacidad del equipo y las preferencias de configuración
- Usar el nombre de dominio permite enrutamiento basado en DNS, mientras que la IP está disponible para entornos que requieren direccionamiento directo
- Plaspy acepta ambos tipos de transporte y utiliza el puerto compartido para mantener consistencia entre modelos de dispositivos

## Notas sobre compatibilidad del protocolo

- El G737 es compatible con Plaspy cuando se configura para reportar al endpoint y puerto de Plaspy
- Las revisiones de firmware pueden cambiar el detalle de los mensajes y el comportamiento de los eventos, por lo que confirme la versión de firmware al diagnosticar problemas
- Revisión de hardware o variantes regionales del dispositivo pueden ofrecer características opcionales distintas, como manejo de balizas BLE
- La selección de transporte UDP versus TCP puede afectar las garantías de entrega y debe coincidir con la configuración del dispositivo y las políticas de red
- Las actualizaciones de firmware por aire FOTA pueden ajustar la cadencia de reportes o la estructura de los payloads y deben validarse tras las actualizaciones
- Valide el comportamiento del dispositivo en un entorno controlado antes de un despliegue a gran escala
- Siempre consulte la documentación del fabricante para comandos y procedimientos de configuración específicos del dispositivo

## Por qué es importante entender el protocolo

Tener claro cómo se comunica el G737 ayuda a asegurar una configuración confiable, agilizar la resolución de problemas y garantizar una operación predecible a largo plazo cuando se combina con Plaspy. Conocer las expectativas de conexión y cómo se entregan los eventos reduce el tiempo invertido en diagnosticar reportes faltantes o ajustes desalineados.

- Agiliza la configuración inicial confirmando que el dispositivo apunta a d.plaspy.com o a 54.85.159.138 en el puerto 8888
- Facilita la resolución de telemetría faltante revisando tipo de transporte, conectividad de red y versiones de firmware
- Mejora la validación de eventos de tamper, SOS y geocerca para que los supervisores reciban las notificaciones esperadas
- Ayuda a planear el registro a bordo y la retransmisión de datos tras cortes de conectividad
- Permite tomar decisiones informadas sobre el momento de FOTA y la validación posterior a la actualización
- Apoya la integración de flujos de trabajo de balizas BLE y accesorios en coordinación con el manejo de eventos de Plaspy

## Por qué usar Plaspy con este protocolo

Usar el G737 con Plaspy brinda a las organizaciones visibilidad centralizada sobre ubicación, estado de tamper y telemetría de eventos esenciales para programas de monitoreo electrónico y cumplimiento. La combinación de GNSS de alta precisión, detección de manipulación y soporte de baliza BLE en el dispositivo, junto con la detección automática de protocolos y el modelo de endpoint unificado de Plaspy, reduce la complejidad de la configuración y ayuda a mantener una supervisión continua.

Para saber más sobre Plaspy y cómo la plataforma funciona con dispositivos como el Gosafe G737 visite https://www.plaspy.com. El soporte de protocolos, el comportamiento de firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que verifique la información más reciente específica del dispositivo en el sitio del fabricante https://gosafesystem.com/ antes de un despliegue a gran escala.

---
slug: /minifinder/nano/protocol
id: nano-protocol
sidebar_label: Protocol
title: MiniFinder - Nano Protocol
sidebar_class_name: menu_item_tracker
description: Referencia pública del protocolo para integrar MiniFinder Nano con Plaspy; incluye ajustes de conexión y guía de compatibilidad
keywords:
  - Protocolo MiniFinder Nano
  - Protocolo GPS MiniFinder Nano
  - Protocolo MiniFinder Nano Plaspy
  - Protocolo de comunicación MiniFinder Nano
  - Protocolo de rastreo MiniFinder Nano
  - Compatibilidad MiniFinder Nano
  - Integración MiniFinder Nano Plaspy
  - Protocolo GPS portátil MiniFinder
  - Protocolo rastreador de seguridad personal
  - Protocolo de dispositivo Plaspy
---

# MiniFinder - Protocolo Nano

Esta página describe el contexto público del protocolo para usar el rastreador MiniFinder Nano con Plaspy. Se centra en las consideraciones de comunicación y conexión necesarias para que la pulsera Nano envíe ubicación, alarmas y telemetría de sensores a la plataforma Plaspy, evitando detalles privados del fabricante. Use este documento como referencia práctica para la planificación de integraciones y la resolución de problemas junto con la documentación del fabricante.

Plaspy utiliza ajustes de conexión compartidos para todos los rastreadores soportados y detecta automáticamente el protocolo cuando un dispositivo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo en el Nano puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por ello, la confirmación final del comportamiento debe verificarse en la documentación de MiniFinder y en las notas de versión del firmware del dispositivo.

## Resumen del protocolo

El protocolo de reporte del rastreador define las reglas que el Nano utiliza para empaquetar y enviar datos GPS, de sensores y de alarma a un servidor backend. En el contexto de Plaspy, el objetivo del protocolo es asegurar que el dispositivo pueda identificarse, transmitir posición y eventos de forma fiable, y permitir que Plaspy muestre esa información a operadores y a los motores de reglas.

- Permite la transmisión de posiciones y metadatos temporales para que Plaspy muestre ubicación en tiempo real e historial.
- Transporta eventos de alarma y estado, como pulsaciones de SOS, detección de caídas y estados de batería o conectividad.
- Proporciona identificación del dispositivo y contexto de sesión para que Plaspy asocie los datos entrantes con el activo o perfil de usuario correcto.
- Soporta transporte sobre protocolos de red estándar para que el dispositivo alcance Plaspy vía redes móviles o Wi‑Fi.
- Permite que Plaspy ingiera telemetría para alertas, enrutamiento e informes sin que los usuarios deban mapear manualmente cada campo.

## Cómo detecta Plaspy el protocolo

Plaspy recibe reportes de dispositivos en un endpoint y puerto compartidos y utiliza detección automática para clasificar los mensajes entrantes. En la mayoría de implementaciones, los usuarios no necesitan seleccionar un protocolo dentro de Plaspy siempre que el dispositivo esté configurado para reportar al endpoint de Plaspy y la conectividad de red sea correcta.

- Plaspy escucha tráfico de dispositivos en d.plaspy.com y en la dirección pública 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración y el enrutamiento del servidor.
- Plaspy detecta automáticamente el protocolo del rastreador cuando recibe telemetría correctamente formada desde un dispositivo.
- Una configuración adecuada del dispositivo debe apuntar el Nano al endpoint de Plaspy para permitir la detección y asociación automáticas.
- Si un dispositivo no aparece, verifique la accesibilidad de la red, la configuración de transporte y que el dispositivo esté configurado para reportar al endpoint de Plaspy.

## Contexto de transporte y conexión

Los detalles de conexión y transporte determinan cómo el Nano alcanza Plaspy y son la causa más habitual de problemas de configuración. El MiniFinder Nano puede configurarse para usar transporte UDP o TCP según la configuración del dispositivo y el comportamiento del operador móvil. Asegúrese de que el dispositivo apunte al endpoint y al transporte correctos de Plaspy para que los datos fluyan de forma fiable.

- Los dispositivos pueden configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138.
- El puerto del servidor Plaspy para todos los dispositivos es 8888 y el Nano puede configurarse para usar UDP o TCP en ese puerto.
- Plaspy usa el mismo puerto para todos los dispositivos compatibles para agilizar la configuración y reducir errores.
- Los firewalls de red y la configuración APN del operador deben permitir tráfico saliente UDP o TCP hacia el endpoint de Plaspy en el puerto 8888.
- Al hacer pruebas, verifique la resolución DNS de d.plaspy.com así como la conectividad básica hacia la dirección numérica del servidor.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar campos específicos, nombres de eventos o la temporización que utiliza el Nano; siempre confirme el comportamiento tras actualizaciones de firmware.
- Las revisiones de hardware o las variantes regionales del dispositivo portátil pueden tener pequeñas diferencias en cómo se reportan sensores o alarmas.
- La elección del transporte (UDP frente a TCP) puede afectar la semántica de entrega y estar limitada por condiciones de la red o políticas del operador.
- La detección automática de protocolo de Plaspy reduce la configuración manual, pero los ajustes de reporte del dispositivo deben apuntar al endpoint y puerto de Plaspy.
- Las funciones en la nube del fabricante y MiniFinder Live pueden ofrecer almacenamiento adicional de datos o herramientas de configuración que complementen la integración con Plaspy.
- Valide cualquier suposición de integración con la documentación oficial de MiniFinder para la versión de firmware y la revisión de hardware específicas del Nano.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del MiniFinder Nano ayuda a realizar una configuración inicial correcta, reduce el tiempo de resolución de problemas de conectividad y garantiza un comportamiento predecible ante cambios de firmware o de red.

- Asegura que los dispositivos estén configurados para reportar a d.plaspy.com o 54.85.159.138 usando el puerto 8888 según lo requiere Plaspy.
- Facilita la resolución de problemas a nivel de transporte, como puertos bloqueados, resolución DNS o restricciones del operador.
- Aclara cómo se entregan las alarmas, eventos SOS y la telemetría para que las reglas y notificaciones de Plaspy funcionen como se espera.
- Orienta la decisión sobre usar UDP o TCP según la fiabilidad de la red y el comportamiento del operador.
- Reduce comportamientos inesperados tras actualizaciones de firmware al fomentar la validación de cualquier cambio en el protocolo.

## Por qué usar Plaspy con este protocolo

Usar el MiniFinder Nano con Plaspy ofrece a las organizaciones visibilidad unificada de eventos de seguridad personal y telemetría de ubicación junto con otros activos rastreados. La forma portátil del Nano, su posicionamiento híbrido y sus capacidades de alarma lo hacen adecuado para cuidado de personas mayores, protección de trabajadores solitarios y otros flujos de trabajo de seguridad enfocados en personas, donde las alertas oportunas y las trazas de auditoría claras son críticas. Plaspy agrega telemetría y eventos para soportar notificaciones, reglas de escalación e informes históricos para cumplimiento y revisiones operativas.

Para obtener más información sobre Plaspy y cómo se integra con rastreadores portátiles como el MiniFinder Nano visite https://www.plaspy.com. Para los detalles más actuales del protocolo del dispositivo, notas de firmware y orientación del fabricante, verifique las especificaciones en el sitio de MiniFinder https://minifinder.se/ ya que el comportamiento del firmware y los detalles de implementación pueden cambiar con el tiempo.

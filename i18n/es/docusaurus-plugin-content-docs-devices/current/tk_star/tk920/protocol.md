---
slug: /tk_star/tk920/protocol
id: tk920-protocol
sidebar_label: Protocol
title: TK-Star - TK920 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para integrar el rastreador TK920 de TK-Star con Plaspy mediante ajustes de conexión compartidos y detección automática
keywords:
  - protocolo TK-Star TK920
  - protocolo GPS TK-Star TK920
  - protocolo del rastreador TK920
  - protocolo de comunicación TK920
  - protocolo de seguimiento TK920
  - compatibilidad rastreador GPS TK-Star
  - compatibilidad TK920 con Plaspy
  - soporte rastreadores Plaspy
  - seguimiento de vehículos TK920
  - seguimiento de activos TK920
---

# TK-Star - Protocolo TK920

Esta página describe el contexto público del protocolo para usar el rastreador TK-Star TK920 con Plaspy. Se centra en cómo el dispositivo se comunica con la plataforma Plaspy en términos generales, cómo se emplean los ajustes de conexión compartidos de Plaspy y qué considerar al integrar el TK920 para seguimiento en tiempo real y alertas. El TK920 es un rastreador robusto 4G diseñado para monitoreo prolongado de vehículos y activos, con posicionamiento multi-constelación y larga duración de batería; este documento explica el contexto de comunicación más que los detalles internos del firmware.

Plaspy utiliza ajustes de conexión compartidos para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando una unidad está configurada para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por eso, aunque Plaspy gestiona la detección e ingestión del protocolo, ciertos comportamientos específicos dependerán del firmware y la configuración provistos por TK Star.

## Visión general del protocolo

El protocolo de comunicación define cómo el TK920 reporta su identidad, ubicación y eventos a Plaspy, y cómo se intercambian a alto nivel los acuses de recibo del servidor y mensajes de control. Las descripciones de esta página se mantienen generales y orientadas al público, enfatizando el papel del protocolo en la entrega fiable de telemetría y alertas a Plaspy sin exponer los detalles internos del dispositivo.

- Permite actualizaciones periódicas y por eventos del TK920 hacia la plataforma Plaspy para que posición y estado se muestren en los paneles.
- Transmite alarmas y eventos de sensores como vibración, geocerca, movimiento y exceso de velocidad a Plaspy para notificaciones y procesamiento de reglas.
- Permite que el dispositivo se identifique para que Plaspy asocie los datos entrantes con el registro correcto del activo o vehículo.
- Soporta transporte sobre sockets de red estándar para que el rastreador use conectividad celular y alcance los servidores de Plaspy.
- Proporciona un flujo predecible de telemetría que Plaspy consume y almacena para monitoreo en vivo y revisión histórica de rutas.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes y telemetría en un único endpoint y puerto compartidos y realiza identificación automática de protocolo, por lo que la mayoría de los usuarios no necesita seleccionar un protocolo específico dentro de Plaspy. Los dispositivos correctamente configurados que apuntan al endpoint de Plaspy normalmente serán reconocidos e ingeridos sin selección manual de protocolo.

- El dominio del servidor Plaspy para reporte de rastreadores es d.plaspy.com, que resuelve al endpoint de la plataforma.
- La IP del servidor Plaspy es 54.85.159.138, que puede usarse en la configuración del dispositivo cuando DNS no esté disponible.
- Plaspy escucha en el puerto 8888 para conexiones de rastreadores y utiliza el mismo puerto para todos los dispositivos soportados.
- El rastreador puede configurarse para usar UDP o TCP apuntando al puerto 8888 según la capacidad del equipo y las condiciones de red.
- La detección automática reduce pasos de configuración para los usuarios, pero la telemetría del dispositivo debe estar dirigida al endpoint de Plaspy para que la detección tenga éxito.

## Transporte y contexto de conexión

Las decisiones de transporte y conexión determinan cómo el TK920 envía su telemetría a Plaspy. Esta sección aclara los contextos de conexión soportados y consideraciones prácticas para apuntar un equipo a Plaspy y asegurar una entrega confiable.

- El TK920 puede configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138 según preferencias del sitio o disponibilidad de DNS.
- Los dispositivos pueden usar UDP o TCP en el puerto 8888 para enviar telemetría y mensajes de evento a Plaspy.
- Plaspy usa el mismo puerto para todos los dispositivos, lo que simplifica la configuración del servidor y las reglas de firewall.
- La elección entre UDP y TCP puede afectar las garantías de entrega y el comportamiento en red; seleccione el transporte compatible con el dispositivo y la red.
- Verifique que el APN de datos móviles y la conectividad celular funcionen para que el rastreador pueda alcanzar el endpoint de Plaspy por el transporte elegido.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden alterar el momento de los mensajes, los informes soportados o las alarmas disponibles; verifique la versión de firmware al validar el comportamiento.
- Las revisiones de hardware y las variantes regionales pueden cambiar las opciones de conectividad soportadas o el comportamiento de los sensores.
- Las instrucciones del fabricante y los servidores por defecto varían según lote de producción y personalizaciones del firmware del proveedor.
- Puede ser necesario elegir UDP o TCP en el dispositivo para ajustarse a la capacidad del firmware y las características de la red.
- Siempre valide un equipo de muestra apuntándolo a d.plaspy.com o a 54.85.159.138 en el puerto 8888 y confirme que Plaspy detecta e ingiere los datos.
- Al combinar el TK920 con otras fuentes de telemetría, verifique cómo se reportan las entradas adicionales a Plaspy para evitar conflictos.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a asegurar una configuración sin contratiempos, comportamiento predecible en producción y una resolución de problemas eficiente si la telemetría no aparece como se espera. Conocer el contexto de conexión y las variaciones comunes reduce el tiempo de integración y minimiza el tiempo de inactividad.

- Ayuda a confirmar la configuración del dispositivo, como la dirección del servidor y el transporte, para que los datos lleguen a Plaspy de forma fiable.
- Facilita la interpretación de diferencias en el comportamiento del dispositivo que provienen de revisiones de firmware o hardware.
- Colabora en la resolución de problemas de conectividad al aclarar si la causa es de red, de transporte o de configuración del equipo.
- Soporta la planificación de despliegues masivos estandarizando la configuración de los dispositivos para usar el endpoint y puerto de Plaspy.
- Incrementa la confianza al validar la entrega de alarmas y eventos durante las pruebas de aceptación.

## Por qué usar Plaspy con este protocolo

Usar el TK920 con Plaspy ofrece una solución práctica para organizaciones que requieren rastreo persistente con larga duración de batería y hardware resistente para condiciones de campo. Plaspy consolida la ubicación, alarmas y estado entrantes del TK920 en paneles, alertas y herramientas de rutas históricas que resultan útiles para gestores de flotas, equipos de seguridad y personal operativo.

Para obtener más información sobre Plaspy y cómo funciona con rastreadores compatibles visite https://www.plaspy.com. Para el comportamiento específico más reciente del protocolo del dispositivo, notas de firmware y orientación del fabricante, verifique los detalles en el sitio oficial de TK Star en https://www.tk-star.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.

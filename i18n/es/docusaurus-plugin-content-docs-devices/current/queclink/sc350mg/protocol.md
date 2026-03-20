---
slug: /queclink/sc350mg/protocol
id: sc350mg-protocol
sidebar_label: Protocol
title: QuecLink - SC350MG Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador QuecLink SC350MG y cómo se comunica con Plaspy
keywords:
  - protocolo QuecLink SC350MG
  - protocolo GPS QuecLink SC350MG
  - QuecLink SC350MG Plaspy
  - protocolo de rastreo SC350MG
  - compatibilidad protocolo QuecLink
  - protocolo rastreador e bike
  - protocolo rastreador GNSS
  - rastreo de vehículos Plaspy
  - rastreador LTE Cat M1
  - protocolo telemetría BMS ECU
---

# QuecLink - Protocolo SC350MG

Esta página ofrece contexto público sobre el uso del rastreador QuecLink SC350MG con la plataforma Plaspy. Explica, en términos generales, cómo se comunica el dispositivo, qué puntos de conexión y opciones de transporte espera Plaspy, y qué debe considerar durante la configuración y la validación. La información está dirigida a administradores e integradores que necesitan comprender la relación de comunicación entre el SC350MG y Plaspy sin entrar en detalles privados de implementación.

El SC350MG es un rastreador GNSS compacto y resistente al agua diseñado para e‑bikes, con conectividad LTE Cat M1 y NB2 además de retroceso 2G, amplio rango de voltaje de entrada e interfaces ECU/BMS vía CAN o UART. Plaspy utiliza configuraciones de conexión compartidas para los dispositivos soportados y detecta automáticamente el protocolo del rastreador. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que la configuración del dispositivo y la versión de firmware pueden influir en cómo el rastreador reporta a Plaspy.

## Resumen del protocolo

El protocolo del rastreador es el conjunto de reglas y formatos de mensaje que permiten al SC350MG enviar ubicación, telemetría y estado a un servidor remoto como Plaspy. A grandes rasgos, el protocolo define cómo el dispositivo establece el transporte, cómo se identifica y cómo se codifican y entregan la telemetría y el estado para que Plaspy convierta los datos crudos en eventos y métricas utilizables.

- Permite al SC350MG enviar posición GNSS, eventos de movimiento y telemetría al endpoint de Plaspy.
- Transporta identidad del dispositivo e información de sesión para que la plataforma asocie los mensajes con el activo correcto.
- Lleva telemetría de ECU y BMS leída por el dispositivo vía CAN o UART para diagnóstico remoto o informes.
- Soporta el envío de datos por enlaces celulares con mecanismos de respaldo para asegurar la llegada de la información a Plaspy.
- Funciona junto con funciones del dispositivo como BLE, detección por vibración y eventos del acelerómetro para ofrecer una visión operacional más completa.

## Cómo detecta Plaspy el protocolo

Plaspy acepta conexiones entrantes de dispositivos en un único endpoint y puerto compartidos e implementa detección automática de protocolo para identificar cómo reporta cada rastreador. Cuando un SC350MG está configurado para reportar al endpoint de Plaspy, por lo general usted no necesita seleccionar manualmente un protocolo dentro de Plaspy.

- Plaspy escucha conexiones de dispositivos en el endpoint público d.plaspy.com y en la dirección IP 54.85.159.138.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto, que es el 8888, lo que simplifica la configuración del dispositivo.
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y los requerimientos de la red.
- Cuando un dispositivo correctamente configurado se conecta al endpoint de Plaspy, la plataforma detecta automáticamente el protocolo del rastreador y asocia los datos con el registro de dispositivo adecuado.
- La configuración correcta del reporte por parte del rastreador es el paso clave para que la detección automática funcione.

## Contexto de transporte y conexión

El contexto de conexión abarca las opciones de capa de transporte y el destino del endpoint que deben configurarse en el SC350MG para que alcance Plaspy. El dispositivo soporta enlaces celulares modernos de bajo consumo con respaldo y puede apuntar a un nombre DNS o a una dirección IP del servidor.

- El SC350MG puede configurarse para enviar datos usando UDP o TCP en el puerto 8888 según la configuración del dispositivo y las consideraciones de la red.
- Plaspy acepta conexiones en d.plaspy.com o directamente en 54.85.159.138 usando el puerto común 8888.
- Usar el nombre DNS d.plaspy.com permite al dispositivo resolver la IP correcta del servidor y ofrece flexibilidad si Plaspy actualiza sus endpoints.
- TCP se utiliza típicamente cuando se requiere una conexión fiable y persistencia de sesión; UDP puede seleccionarse para menor sobrecarga cuando el dispositivo y la red lo permiten.
- Asegúrese de que el APN y la configuración celular del dispositivo permitan conexiones salientes al endpoint de Plaspy y de que los firewalls del operador no bloqueen el puerto 8888.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware entre unidades SC350MG pueden alterar los campos de telemetría disponibles y el comportamiento de los intervalos de reporte y generación de eventos.
- Revisiones de hardware o SKUs específicos por región pueden habilitar o deshabilitar interfaces como CAN, UART o BLE; confirme qué interfaces están presentes en su unidad.
- Los ajustes del fabricante pueden afectar qué datos ECU y BMS se exponen a través del canal de telemetría del rastreador y qué campos se incluyen en los mensajes uplink.
- Elegir TCP frente a UDP en el puerto 8888 modificará el comportamiento de conexión y puede cambiar cómo el dispositivo maneja reintentos y confirmaciones.
- Siempre valide la compatibilidad del dispositivo probando una unidad representativa contra el endpoint d.plaspy.com y confirmando la llegada e interpretación de los datos.
- En caso de duda consulte la documentación oficial de QuecLink y las notas de la versión del firmware antes de desplegar a gran escala.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el SC350MG con Plaspy facilita un despliegue sin contratiempos, acelera la resolución de problemas y asegura una operación confiable a largo plazo. Tener claro el transporte, el comportamiento de reporte y las diferencias de firmware reduce la fricción de integración y acelera la validación.

- Simplifica la configuración inicial al asegurar que el dispositivo esté apuntando a d.plaspy.com o 54.85.159.138 en el puerto requerido 8888 usando el transporte correcto.
- Ayuda a diagnosticar problemas de conectividad enfocándose en el transporte, el APN y si el dispositivo está usando UDP o TCP según lo configurado.
- Clarifica las expectativas sobre qué métricas ECU BMS y eventos de sensores estarán disponibles en los informes y paneles de la plataforma.
- Reduce el tiempo de soporte al confirmar la versión de firmware y la revisión de hardware antes de investigar más a fondo el protocolo.
- Apoya decisiones sobre gestión de energía e intervalos de reporte que afectan la batería o el comportamiento eléctrico del vehículo.

## Por qué usar Plaspy con este protocolo

Usar Plaspy con el QuecLink SC350MG ofrece una forma directa de recoger posición GNSS, telemetría y datos de interfaz vehicular para flotas de e‑bikes y usuarios individuales. El modelo de puerto y endpoint unificado de Plaspy reduce la complejidad de configuración por dispositivo y la detección automática de protocolo de la plataforma elimina la necesidad de seleccionar manualmente el protocolo cuando los dispositivos apuntan al endpoint de Plaspy.

Si desea saber más sobre la integración del QuecLink SC350MG con Plaspy visite https://www.plaspy.com para detalles de la plataforma e información de incorporación. Para documentos específicos del protocolo del dispositivo, notas de firmware y la guía más reciente del fabricante verifique la información actual en https://www.queclink.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.

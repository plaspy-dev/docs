---
slug: /totemtech/at21_4g/protocol
id: at21_4g-protocol
sidebar_label: Protocol
title: Totemtech - AT21-4G Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo del rastreador Totemtech AT21-4G y cómo se comunica con Plaspy para ubicación y telemetría
keywords:
  - Protocolo Totemtech AT21-4G
  - Protocolo GPS Totemtech AT21-4G
  - Protocolo de rastreo Totemtech AT21-4G
  - Comunicación Totemtech AT21-4G
  - Protocolo de rastreadores Plaspy
  - Compatibilidad de dispositivos Plaspy
  - Protocolo rastreador GPS solar
  - Protocolo de rastreo de activos remotos
  - Compatibilidad protocolo rastreador LTE
  - Protocolo rastreador multi GNSS
---

# Totemtech - Protocolo AT21-4G

Esta página presenta el contexto público del protocolo para usar el rastreador Totemtech AT21-4G con la plataforma Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy en términos generales, qué ajustes de conexión son necesarios y qué aspectos son relevantes para una integración confiable sin exponer detalles internos de firmware o formatos de paquete privados.

El AT21-4G es un rastreador de activos 4G alimentado por energía solar, diseñado para despliegues remotos de larga duración y compatible con Plaspy. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Debe combinarse este contexto general con la documentación de Totemtech al validar funciones o comandos específicos del firmware.

## Resumen del protocolo

El protocolo de comunicación define las reglas que utiliza el AT21-4G para reportar ubicación, valores de sensores y eventos a un servidor backend como Plaspy. Esta sección explica el papel público del protocolo para identificación de dispositivos, reporte de datos y entrega fiable, en lugar de detallar formatos de paquete de bajo nivel.

- El protocolo establece cómo el rastreador envía datos de GPS, telemetría y eventos para que Plaspy pueda mapear e interpretar los campos útiles para monitoreo e informes.
- Permite la identificación del dispositivo y el contexto de sesión para que Plaspy asocie los reportes entrantes con el activo y la cuenta correctos.
- Los intervalos de reporte, el comportamiento de suspensión y la lógica de almacenamiento y reenvío son controlados por el dispositivo y se reflejan en los datos que recibe Plaspy.
- El comportamiento dependiente del transporte determina si los mensajes se envían por UDP, TCP o mediante SMS, lo cual influye en la fiabilidad y en el consumo de energía.
- El registro local en el dispositivo permite que el protocolo soporte cargas diferidas, de modo que Plaspy pueda reconstruir recorridos históricos después de brechas de conectividad.

## Cómo detecta Plaspy el protocolo

Plaspy recibe telemetría de muchos modelos de rastreadores y detecta automáticamente el protocolo cuando el dispositivo reporta al endpoint de ingestión de Plaspy. En configuraciones típicas, el usuario no necesita seleccionar un protocolo dentro de Plaspy siempre que el dispositivo esté configurado para reportar al endpoint correcto de Plaspy.

- El endpoint de ingestión de Plaspy es accesible en el dominio d.plaspy.com y en la dirección IP 54.85.159.138.
- El servicio escucha en el puerto 8888 para reportes de dispositivos y todos los dispositivos en Plaspy usan el mismo puerto para ingestión.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el AT21-4G se configura para enviar datos al endpoint de Plaspy.
- En la mayoría de los despliegues no es necesaria una selección manual de protocolo en Plaspy si el dispositivo apunta correctamente al servidor Plaspy.
- Si el rastreador dispone de múltiples opciones de transporte, configurar el transporte previsto (UDP o TCP) apuntando a d.plaspy.com en el puerto 8888 es el paso principal para comenzar el envío de reportes.

## Transporte y contexto de conexión

Las opciones de transporte y los ajustes de conexión controlan cómo el AT21-4G se conecta a Plaspy y afectan la fiabilidad de entrega, la latencia y el consumo energético. El dispositivo soporta varios métodos de transporte y puede configurarse según las necesidades del despliegue.

- El AT21-4G puede configurarse para usar UDP o TCP en el puerto 8888 según el firmware y la provisión del dispositivo.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o a la dirección IP 54.85.159.138 como endpoint del servidor.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos soportados, lo que simplifica la configuración del servidor en flotas mixtas.
- UDP suele utilizarse para reportes de menor overhead, mientras que TCP puede elegirse cuando se prefieren entregas fiables y manejo de sesiones.
- El dispositivo cuenta con fallback por SMS para entornos donde los datos IP no están disponibles; el comportamiento de SMS se gestiona de forma separada a los transportes IP.
- La configuración de red y APN en el equipo determina si el dispositivo llega a Plaspy vía LTE Cat 1 o si cae a generaciones de red inferiores.

## Notas sobre compatibilidad de protocolo

- Las diferencias entre versiones de firmware pueden cambiar los campos de reporte disponibles, las opciones de transporte y los comandos de configuración. Verifique siempre la versión de firmware al validar la compatibilidad.
- Las revisiones de hardware y los kits de bandas regionales pueden afectar el comportamiento celular y, por lo tanto, el rendimiento práctico de reportes a Plaspy.
- Los métodos de configuración del fabricante, como aprovisionamiento por SMS, herramientas USB o configuraciones en portales del proveedor, pueden alterar qué valores de transporte y servidor están activos.
- Elija UDP o TCP en el dispositivo según las prioridades del despliegue en cuanto a consumo de batería y fiabilidad de entrega.
- El almacenamiento de registros offline y el comportamiento de store and forward pueden variar según el firmware y determinarán cómo se suben los datos históricos a Plaspy.
- Valide cualquier característica especial de sensores o E/S contra la documentación de Totemtech para confirmar cómo aparecen esos campos en los reportes de Plaspy.

## Por qué es importante entender el protocolo

Comprender cómo el rastreador se comunica con Plaspy ayuda a asegurar un despliegue exitoso, facilita la resolución de problemas y garantiza un funcionamiento predecible a largo plazo. Conocer el transporte, el endpoint y el comportamiento general reduce el tiempo dedicado a diagnosticar problemas de conectividad e interpretación de datos.

- Configurar correctamente el endpoint y el puerto es el primer paso para que el dispositivo reporte a Plaspy de forma fiable.
- Conocer las implicaciones de UDP frente a TCP ayuda a equilibrar la vida útil de la batería frente a las garantías de entrega.
- Entender el papel del registro offline y del store and forward explica cómo aparecen los recorridos históricos tras pérdidas de señal.
- Reconocer el comportamiento dependiente del firmware agiliza la resolución de problemas cuando faltan campos o eventos en los reportes entrantes.
- Comprender cómo se presenta la identificación y el contexto de sesión ayuda a correlacionar los reportes del dispositivo con el inventario y los registros de activos.

## Por qué usar Plaspy con este protocolo

Usar el AT21-4G con Plaspy ofrece a las organizaciones una forma práctica de monitorear activos remotos con hardware solar de larga duración, aprovechando las funciones de mapeo, alertas e informes de Plaspy. La combinación soporta actualizaciones de ubicación en tiempo real, agregación de telemetría desde entradas/salidas y sensores, y reproducción histórica tras brechas de conectividad.

El endpoint de ingestión compartido de Plaspy simplifica la configuración para flotas mixtas mediante el uso de d.plaspy.com o 54.85.159.138 en el puerto 8888 y detectando automáticamente el protocolo del rastreador cuando el dispositivo apunta correctamente al servidor Plaspy. Para obtener más información sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para el comportamiento más reciente específico del dispositivo, notas de firmware e instrucciones del fabricante, verifique la información en el sitio de Totemtech http://www.totemtek.com/ ya que las implementaciones y las funcionalidades del firmware pueden cambiar con el tiempo.

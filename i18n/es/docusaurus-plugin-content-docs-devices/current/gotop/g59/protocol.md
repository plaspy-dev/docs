---
slug: /gotop/g59/protocol
id: g59-protocol
sidebar_label: Protocol
title: GOTOP - G59 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública para integrar el GOTOP G59 con Plaspy y lograr seguimiento en tiempo real y notificaciones confiables
keywords:
  - protocolo GOTOP G59
  - protocolo GPS GOTOP G59
  - protocolo de comunicación GOTOP G59
  - protocolo de rastreo GOTOP G59
  - compatibilidad GOTOP G59 Plaspy
  - protocolo rastreador de mascotas GOTOP G59
  - integración rastreador GOTOP Plaspy
  - documentación protocolo G59
  - protocolo comunicación rastreador de mascotas
  - protocolo rastreador GPS Plaspy
---

# GOTOP - Protocolo G59

Esta página resume el contexto público del protocolo para usar el rastreador de mascotas GOTOP G59 con Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy de forma general, qué ajustes de conexión se usan comúnmente y qué deben conocer integradores y administradores para garantizar un funcionamiento confiable sin exponer detalles privados de implementación del fabricante.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo está correctamente apuntado al endpoint de Plaspy. El comportamiento exacto del protocolo y los campos disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página ofrece orientación general y contexto de integración en lugar de formatos de comando específicos de firmware.

## Resumen del protocolo

El G59 comunica información de ubicación, estado y alertas a un servicio backend mediante su protocolo de reporte a través de datos móviles o SMS. Ese protocolo define cómo el rastreador se identifica, informa fijaciones de posición y telemetría, y transmite alertas como cruces de geocerca y eventos de batería baja. Plaspy procesa esos reportes para mostrar la ubicación en vivo, el historial y las notificaciones a usuarios y administradores.

- Permite que el dispositivo envíe posición y estado a un servidor remoto para mapear y conservar historial.
- Transporta información de alertas y telemetría como eventos de geocerca, batería baja y estado de actividad.
- Permite que el servidor relacione la identidad del dispositivo con cuentas de usuario y configuraciones en Plaspy.
- Transmite datos auxiliares como telemetría de actividad y estado de llamadas de voz remotas para registro y notificaciones.
- Sirve como base para funciones del servidor como geocercas, reglas de notificación y monitoreo de la salud del dispositivo.

## Cómo detecta Plaspy el protocolo

Plaspy escucha en un endpoint y puerto compartidos para los reportes entrantes de los dispositivos y detecta automáticamente el protocolo de cada rastreador cuando los dispositivos se configuran para reportar a Plaspy. En la mayoría de los casos usted no necesita seleccionar manualmente un protocolo en Plaspy, siempre que el equipo esté apuntando al endpoint correcto de Plaspy y utilice un modo de transporte compatible.

- Plaspy espera que los dispositivos reporten al dominio del servidor d.plaspy.com o a la dirección IP del servidor 54.85.159.138.
- El puerto común de escucha para Plaspy es 8888 y todos los dispositivos soportados usan el mismo puerto para reportar.
- Los dispositivos pueden configurarse para usar UDP o TCP para el reporte, según el soporte y la configuración del equipo.
- Cuando un dispositivo correctamente configurado se conecta al endpoint de Plaspy, la plataforma identifica el protocolo del rastreador y mapea los datos entrantes al registro del dispositivo.
- Normalmente usted solo debe asegurarse de que el APN y el objetivo de reporte estén configurados correctamente en el rastreador para que la detección automática ocurra.

## Transporte y contexto de conexión

El contexto de conexión cubre cómo el dispositivo alcanza el servicio de Plaspy, más que la estructura interna de los mensajes de reporte. El G59 puede usar reporte por datos móviles o enlaces por SMS para ubicación, y la selección del transporte de red puede afectar la latencia y el comportamiento de entrega.

- El G59 puede configurarse para usar UDP o TCP en el puerto 8888 para enviar reportes a Plaspy.
- Los dispositivos pueden apuntarse al dominio d.plaspy.com o a la IP de respaldo 54.85.159.138 según la configuración o el comportamiento del DNS.
- Todos los dispositivos en Plaspy usan el mismo número de puerto 8888, lo que simplifica la configuración de firewall y red para flotas.
- Consideraciones de red como NAT del operador, ajustes de APN y reglas de firewall pueden afectar la conectividad y deben validarse al incorporar dispositivos.
- Los enlaces de ubicación y notificaciones por SMS suelen estar disponibles como canal suplementario y son útiles cuando la conectividad de datos es limitada.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar qué campos o funciones reporta el dispositivo; verifique las notas de la versión del fabricante.
- Revisiones de hardware o distintas SKU del producto pueden ofrecer sensores o conjuntos de funciones diferentes aun bajo el mismo nombre de modelo.
- Los dispositivos pueden soportar reporte por UDP o TCP; seleccione el transporte que soporte su configuración de rastreador.
- El comportamiento por SMS, como el formato del enlace de ubicación y los comandos de respuesta, puede variar según firmware y operador.
- Confirme APN, servidor de reporte y ajustes de transporte antes de asumir compatibilidad con Plaspy.
- La documentación del fabricante y los registros de cambios de firmware son la fuente autorizada para el comportamiento específico del dispositivo.

## Por qué es importante comprender el protocolo

Tener un entendimiento práctico del protocolo de comunicación del dispositivo ayuda a asegurar una configuración confiable, una resolución de problemas eficaz y un comportamiento predecible a largo plazo al usar el G59 con Plaspy. Saber qué reporta el rastreador y cómo se conecta a la plataforma facilita diagnosticar problemas de conectividad y validar alertas.

- Ayuda a verificar que el dispositivo esté enviando los mensajes de ubicación y estado esperados a Plaspy.
- Permite una resolución de problemas más rápida cuando un dispositivo aparece desconectado o reporta valores inesperados.
- Facilita la configuración correcta de red, APN y reglas de firewall para permitir tráfico UDP o TCP en el puerto 8888.
- Aclara qué funciones reportadas por el dispositivo están disponibles en Plaspy para alertas, historial y monitoreo.
- Reduce el tiempo de incorporación al asegurar que los dispositivos apunten a d.plaspy.com o a la IP de servidor proporcionada.

## Por qué usar Plaspy con este protocolo

Usar el GOTOP G59 con Plaspy ofrece a dueños de mascotas y organizaciones una plataforma consistente para seguimiento en tiempo real, historial y alertas, beneficiándose de un modelo de endpoint de servidor único y compartido. Plaspy agrega fijaciones de posición, eventos de geocerca, estado de llamadas de voz e indicadores de salud del dispositivo para que los usuarios puedan administrar equipos, recibir notificaciones y revisar historiales en un solo lugar.

Si desea profundizar en cómo Plaspy soporta integraciones de flotas y dispositivos, visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo; verifique la información de protocolo específica del dispositivo y las notas de firmware actuales en el sitio oficial del fabricante https://www.gotop.cc/.

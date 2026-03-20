---
slug: /ulbotech/t363a/protocol
id: t363a-protocol
sidebar_label: Protocol
title: Ulbotech - T363A Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del Ulbotech T363A y cómo se comunica con Plaspy para telemetría de flotas y datos OBD
keywords:
  - protocolo Ulbotech T363A
  - compatibilidad T363A Plaspy
  - protocolo rastreador GPS Ulbotech
  - telemetría OBD T363A
  - seguimiento de flotas T363A
  - telemetría vehicular Ulbotech
  - compatibilidad dispositivos Plaspy
  - detección de protocolo Plaspy
  - protocolo rastreador OBD II
  - protocolo de comunicación T363A
---

# Ulbotech - Protocolo T363A

Esta página ofrece una visión general pública y de alto nivel sobre el contexto de comunicación para usar el rastreador OBD Ulbotech T363A con la plataforma Plaspy. Se centra en cómo el dispositivo informa posición, telemetría OBD y eventos a Plaspy en términos no sensibles, y qué debe considerar al configurar los equipos para asegurar conectividad y entrega de datos confiables.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo y los campos disponibles pueden variar según la versión de firmware, la revisión de hardware y la configuración del fabricante; use este documento como contexto de integración y consulte los recursos oficiales de Ulbotech para detalles específicos de firmware.

## Resumen del protocolo

El T363A comunica la posición del vehículo, telemetría derivada de OBD y notificaciones de eventos a sistemas backend a través de la red celular. El dispositivo combina fijaciones de posición GNSS, lecturas diagnósticas OBD-II y eventos de sensores a bordo en un flujo de reporte que una plataforma telemática como Plaspy puede consumir para rastreo en tiempo real e informes históricos.

- Permite enviar posición GNSS y hora a Plaspy para ubicación en vivo y reproducción de rutas
- Envía telemetría basada en OBD como estado de ignición y valores diagnósticos cuando están disponibles en el vehículo
- Reporta datos de acelerómetro y eventos usados para detección de conductas y eventos bruscos
- Proporciona identidad y estado del dispositivo para que Plaspy asocie los mensajes al activo correcto
- Admite flujos de gestión y configuración remota cuando el reporte del dispositivo se dirige al backend

## Cómo Plaspy detecta el protocolo

Plaspy recibe datos de numerosos modelos de rastreadores y utiliza la conexión entrante para identificar automáticamente el protocolo del dispositivo. En la mayoría de los casos usted no necesitará seleccionar manualmente un protocolo dentro de Plaspy si el T363A está correctamente configurado para reportar al endpoint y puerto de Plaspy.

- Plaspy escucha en un único puerto compartido para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador
- Cuando un equipo reporta al endpoint de Plaspy, la plataforma compara los datos entrantes con perfiles de modelo o protocolo conocidos
- La configuración adecuada del dispositivo para apuntar al endpoint de Plaspy es el requisito típico para la detección automática
- La detección automática reduce la necesidad de selección manual de protocolo durante la provisión inicial
- Si un dispositivo no aparece en Plaspy después de apuntarlo al endpoint, las primeras comprobaciones de transporte y reporte del dispositivo son los pasos básicos de solución de problemas

## Transporte y contexto de conexión

El transporte de conexión y el destino forman parte de la configuración del dispositivo más que del protocolo interno. El T363A puede configurarse para enviar datos por UDP o TCP según la versión de firmware y la preferencia del instalador. Plaspy ofrece un único endpoint accesible para el reporte de dispositivos y así simplificar el despliegue.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138
- Plaspy usa el puerto 8888 para conexiones de dispositivos y todos los equipos usan el mismo puerto para reportar
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según el soporte del equipo y las consideraciones de red
- Apuntar el T363A a d.plaspy.com o a 54.85.159.138 en el transporte configurado enruta los datos hacia Plaspy
- Asegúrese de que la red del vehículo o el APN de la SIM permitan salidas TCP o UDP hacia el endpoint y puerto de Plaspy

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden alterar los campos de reporte disponibles, la frecuencia de mensajes y las opciones de transporte; consulte las notas de la versión del firmware
- Revisiones de hardware o funciones opcionales como Bluetooth o salidas de inmovilizador pueden afectar el conjunto de telemetría disponible para Plaspy
- Las herramientas de configuración del fabricante pueden venir por defecto con ajustes de transporte o servidor diferentes; confirme que el dispositivo apunta al endpoint de Plaspy
- Las variantes regionales del módem o restricciones del operador pueden influir en la conectividad GPRS y deben validarse durante el despliegue
- La elección de transporte (UDP vs TCP) puede afectar la semántica de entrega y el comportamiento en redes móviles con mala calidad
- Valide siempre que el T363A reporta a Plaspy tras la configuración antes de un despliegue a gran escala

## Por qué es importante entender el protocolo

Comprender cómo el T363A se comunica con un backend ayuda a asegurar una configuración fluida y operaciones confiables a largo plazo en Plaspy. Conocer el papel del transporte, la identidad del dispositivo y los tipos de telemetría que el equipo puede generar ayuda en la provisión, la solución de problemas y el diseño de flujos de trabajo que utilicen los datos entrantes.

- Facilita la provisión correcta del dispositivo para que los mensajes lleguen a Plaspy sin necesidad de seleccionar el protocolo manualmente
- Ayuda a solucionar problemas de conectividad separando problemas de transporte de diferencias de protocolo o firmware
- Orienta sobre qué parámetros OBD y eventos estarán disponibles en un vehículo concreto
- Informa decisiones sobre configuración de transporte y APN para mejorar la fiabilidad en la entrega de mensajes
- Ayuda a planificar ciclos de actualización de firmware y mantenimiento que puedan cambiar el comportamiento de reporte

## Por qué usar Plaspy con este protocolo

Usar el Ulbotech T363A con Plaspy brinda a las organizaciones una vía práctica para combinar una instalación OBD plug and play con una plataforma que ingiere ubicación, telemetría y datos de eventos para visibilidad de flota. El receptor GNSS del dispositivo, la telemetría OBD y el conjunto de sensores son adecuados para casos de uso típicos de flota, como monitoreo de rutas, activadores de mantenimiento basados en diagnósticos e insights sobre comportamiento del conductor cuando se integran con un backend telemático.

Si desea saber más sobre cómo Plaspy maneja la conectividad de dispositivos, la detección de protocolo y los flujos de telemetría de flota, visite https://www.plaspy.com. Para los detalles más actuales sobre el protocolo específico del dispositivo, comportamiento de firmware y documentación del fabricante consulte el sitio oficial de Ulbotech en http://www.ulbotech.com/.

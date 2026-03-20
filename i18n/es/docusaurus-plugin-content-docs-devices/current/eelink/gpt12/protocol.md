---
slug: /eelink/gpt12/protocol
id: gpt12-protocol
sidebar_label: Protocol
title: EElink - GPT12 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo EElink GPT12 sobre cómo el rastreador se comunica con Plaspy y el contexto de conexión
keywords:
  - protocolo EElink GPT12
  - protocolo GPS EElink GPT12
  - comunicación EElink GPT12
  - rastreador GPS GPT12
  - protocolo de rastreo GPT12
  - compatibilidad rastreador EElink con Plaspy
  - guía de protocolo para rastreadores GPS
  - seguimiento de flotas EElink GPT12
  - seguimiento de activos GPT12
  - integración de protocolo EELINK
---

# EElink - Protocolo GPT12

Esta página resume el contexto público del protocolo para usar el rastreador EElink GPT12 con Plaspy. Se centra en cómo el dispositivo se comunica con la plataforma Plaspy a alto nivel, qué puntos de conexión utilizar y qué verificar al integrar el rastreador en su flujo de monitoreo de flota o activos.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta el protocolo del rastreador automáticamente cuando el equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante de funciones como modos de posicionamiento, alarmas y actualizaciones OTA. Use esta guía para comprender el rol de la comunicación y luego consulte al fabricante para detalles específicos del firmware.

## Resumen del protocolo

El GPT12 comunica posiciones, estado y alertas a un endpoint de servidor usando su protocolo de reporte. Ese protocolo define cómo el rastreador se identifica, reporta posiciones GPS o LBS y transmite alarmas como geocerca y bajo nivel de batería. Según la documentación del GPT12, el dispositivo soporta la familia de protocolos EELINK, común en reportes de dispositivos y configuración remota.

- Permite que el dispositivo se identifique ante el servidor e incluya metadatos esenciales para el rastreo
- Transporta actualizaciones de posición periódicas usando posicionamiento dual GPS y LBS cuando están disponibles
- Transmite notificaciones de eventos, como alarmas de geocerca y alertas de batería baja, para acciones oportunas
- Soporta canales de configuración remota para ajustar parámetros mediante comandos por red o SMS
- Facilita la integración con los endpoints de la plataforma para que los datos de ubicación sean utilizables en los paneles y APIs de Plaspy

## Cómo Plaspy detecta el protocolo

Plaspy acepta conexiones entrantes en un endpoint compartido y determina automáticamente el protocolo del rastreador según el tráfico recibido. Cuando un GPT12 está configurado para reportar a Plaspy, usted normalmente no necesita seleccionar manualmente un protocolo en la plataforma.

- Plaspy usa un único endpoint de escucha para que los rastreadores reporten, simplificando la configuración de dispositivos
- El dominio del servidor de Plaspy para reportes de dispositivos es d.plaspy.com
- La dirección IP del servidor de Plaspy para el endpoint de reportes es 54.85.159.138
- Plaspy escucha en el puerto 8888 y detecta automáticamente el protocolo del rastreador una vez que llegan los datos
- Por lo general, usted solo debe configurar el dispositivo para que apunte al endpoint de Plaspy; la plataforma se encarga de la detección del protocolo

## Transporte y contexto de conexión

Los dispositivos GPT12 pueden configurarse para enviar sus reportes por UDP o TCP según las capacidades del equipo y la configuración del usuario. Plaspy soporta ambos métodos de transporte en el mismo puerto, lo que facilita la configuración de dispositivos con distintas versiones de firmware o escenarios de despliegue.

- Los dispositivos pueden apuntar a d.plaspy.com o directamente a 54.85.159.138
- Plaspy escucha en el puerto 8888 para reportes de rastreadores y acepta tanto UDP como TCP
- El mismo puerto se usa en todos los dispositivos compatibles con Plaspy, reduciendo la variabilidad en la configuración
- Elija UDP si prefiere menor sobrecarga y TCP si necesita mayor fiabilidad de conexión, según el firmware del dispositivo
- Asegúrese de que el APN y el acceso de red del dispositivo permitan conexiones salientes al endpoint de Plaspy

## Notas sobre compatibilidad del protocolo

- El GPT12 soporta la familia de protocolos EELINK según su documentación, pero el comportamiento de mensajes puede variar según el firmware
- Actualizaciones de firmware o revisiones de hardware pueden añadir, cambiar o descontinuar tipos de mensajes e intervalos de reporte
- La selección de transporte (UDP versus TCP) puede afectar la entrega de mensajes y debe coincidir con la configuración del dispositivo
- Ajustes del fabricante como APN, intervalo de reporte y estrategia de suspensión influyen en la frecuencia con la que los datos llegan a Plaspy
- Valide la configuración del dispositivo confirmando que reporta a d.plaspy.com o 54.85.159.138 en el puerto 8888
- Revise la documentación oficial de EElink y las notas de versión del firmware al solucionar comportamientos inesperados

## Por qué es importante entender el protocolo

Tener un entendimiento práctico del protocolo de comunicación GPT12 ayuda a asegurar una configuración fiable, facilitar la resolución de problemas y mantener una operación predecible a largo plazo con Plaspy. Saber cómo reporta el rastreador y qué espera la plataforma reduce la fricción en la integración y acorta el tiempo para disponer de datos útiles de monitoreo.

- Le ayuda a confirmar que el dispositivo apunta al endpoint y puerto correctos de Plaspy
- Facilita la interpretación de por qué un dispositivo puede no aparecer en línea o por qué las actualizaciones son poco frecuentes
- Informa decisiones de configuración como intervalo de reporte, ciclos de sueño y modo de transporte
- Guía la resolución de problemas cuando las alarmas o los reportes de posición son inconsistentes
- Apoya la planificación de actualizaciones de firmware y cambios futuros de características que afecten el flujo de datos

## Por qué usar Plaspy con este protocolo

Usar el EElink GPT12 con Plaspy ofrece a las organizaciones una vía sencilla para recoger datos de posición y alertas en una plataforma unificada. Plaspy gestiona los reportes entrantes de los rastreadores compatibles y pone los datos de ubicación a disposición para monitoreo, alertas y reproducción histórica sin requerir la selección manual del protocolo cuando los dispositivos están correctamente configurados.

Para saber más sobre Plaspy y las funcionalidades de la plataforma visite https://www.plaspy.com. Verifique los detalles más recientes específicos del dispositivo, el comportamiento del firmware y la disponibilidad de funciones con el fabricante en https://www.eelink.com.cn/ ya que las implementaciones pueden cambiar con el tiempo.

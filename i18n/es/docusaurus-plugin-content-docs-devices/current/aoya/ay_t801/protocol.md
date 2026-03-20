---
slug: /aoya/ay_t801/protocol
id: ay_t801-protocol
sidebar_label: Protocol
title: AoYa - AY-T801 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo del rastreador AoYa AY-T801 y su comunicación con los servidores de Plaspy
keywords:
  - AoYa AY-T801
  - protocolo AoYa AY-T801
  - rastreador GPS AY-T801
  - protocolo GPS AoYa
  - compatibilidad AY-T801 con Plaspy
  - rastreo de vehículos AY-T801
  - protocolo Beidou para rastreadores GPS
  - protocolo de comunicación AY-T801
  - rastreo de flotas AoYa AY-T801
  - integración de rastreadores con Plaspy
---

# AoYa - AY-T801 Protocolo

Esta página describe el contexto público del protocolo para usar el rastreador AoYa AY-T801 con Plaspy. Se centra en cómo el equipo comunica información de posición, estado y alarmas a la plataforma Plaspy y qué esperar al configurar el rastreador para que reporte a nuestros servidores. El objetivo es ofrecer información clara y no sensible que ayude a administradores e integradores a comprender la conexión del dispositivo con Plaspy y las variables que pueden afectar la comunicación.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando una unidad reporta a la plataforma. El comportamiento exacto del protocolo y los detalles de los mensajes pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página ofrece orientación general para la integración y recomienda verificar con la documentación del equipo y los recursos del fabricante.

## Descripción general del protocolo

El AY-T801 emplea sus sistemas de posicionamiento integrados y el firmware interno para recopilar información de ubicación, estado y alarmas, y enviar esos informes a un servidor remoto. El protocolo define cómo se identifica el equipo, cómo reporta telemetría y alarmas, y cómo se pueden intercambiar comandos remotos o mensajes de configuración cuando el dispositivo soporta esa funcionalidad.

- Permite el reporte periódico y por eventos de posiciones GPS y Beidou a un servidor para rastreo y reproducción histórica.
- Incluye identificadores del equipo y campos de estado que permiten a Plaspy asociar mensajes con el activo correcto.
- Transmite entradas digitales y alarmas como estado de ACC, alarma de alimentación, vibración, gatillo de geocercas y alerta de batería baja.
- Soporta acciones de control remoto cuando el fabricante implementa rutas de comando, por ejemplo corte remoto de motor o actualizaciones de configuración.
- Permite que Plaspy interprete los mensajes entrantes en posición, velocidad, rumbo y eventos de alarma para monitoreo y alertas.

## Cómo Plaspy detecta el protocolo

Plaspy recibe los reportes de los equipos en un único endpoint compartido y determina automáticamente el protocolo del rastreador según la conexión entrante y el contenido de los mensajes. En la mayoría de los despliegues los usuarios no necesitan seleccionar manualmente un protocolo dentro de Plaspy cuando el dispositivo está configurado para reportar al endpoint de Plaspy.

- El dominio del servidor Plaspy para reportes de dispositivos es d.plaspy.com.
- La IP del servidor Plaspy para conexiones directas es 54.85.159.138.
- Plaspy escucha en el puerto 8888 y todos los dispositivos soportados usan el mismo puerto para reportar.
- Los dispositivos pueden configurarse para usar UDP o TCP según la capacidad y la configuración del equipo.
- Cuando un AY-T801 correctamente configurado reporta al endpoint de Plaspy, la plataforma detectará e interpretará automáticamente los mensajes entrantes.

## Transporte y contexto de conexión

Las elecciones de conexión y el comportamiento del transporte afectan la fiabilidad y la latencia, pero no cambian el papel general del protocolo. El AY-T801 puede configurarse para reportar por UDP o TCP según el firmware y las opciones de configuración. Lo importante para la integración con Plaspy es que el rastreador apunte al endpoint de reporte de Plaspy.

- Los equipos pueden configurarse para usar UDP en el puerto 8888 para reportes con menor sobrecarga.
- Alternativamente pueden usar TCP en el puerto 8888 cuando se requiere conexión persistente o confirmación de entrega y el equipo lo soporta.
- Los rastreadores deben apuntar a d.plaspy.com o a la IP del servidor Plaspy 54.85.159.138 al configurar la dirección de reporte.
- Todos los dispositivos soportados por Plaspy comparten el mismo puerto de reporte para simplificar la configuración y la detección.
- Las condiciones de red, NAT y las restricciones del operador pueden influir en si UDP o TCP es la opción preferible en cada despliegue.

## Notas de compatibilidad del protocolo

- El AY-T801 es compatible con Plaspy cuando se configura para reportar al endpoint de Plaspy, pero el comportamiento puede variar según la versión de firmware.
- Actualizaciones de firmware del fabricante pueden cambiar la temporización de mensajes, los conjuntos de campos o las alarmas disponibles; verifique la versión de firmware al diagnosticar problemas.
- Las revisiones de hardware o variantes regionales pueden diferir en los transportes soportados o en funciones opcionales como el control remoto del motor.
- Algunas funciones descritas por el fabricante, como alarma luminosa o compensación de trayectoria, dependen de la configuración del equipo y de las opciones de firmware.
- Elija UDP o TCP según la capacidad del equipo y el entorno de red, y confirme el transporte seleccionado en los ajustes del dispositivo.
- Valide siempre los nombres de alarma esperados y el mapeo de campos entre el dispositivo y Plaspy durante la puesta en marcha.

## Por qué es importante entender el protocolo

Comprender el protocolo del rastreador ayuda a asegurar una configuración confiable, un mapeo preciso de eventos y una resolución eficiente de problemas entre el dispositivo y Plaspy. Tener claridad sobre lo que el equipo reporta y cómo se conecta reduce el tiempo de diagnóstico y contribuye a mantener visibilidad consistente de la flota.

- Garantiza el registro correcto del equipo y su asociación con los activos en Plaspy.
- Facilita la depuración de problemas de conectividad relacionados con la elección del transporte o la alcance de la red.
- Aclara cómo las alarmas y las entradas digitales se traducen en alertas y paneles en Plaspy.
- Apoya la planificación de actualizaciones de firmware y cambios de funciones que pueden afectar la integración.
- Ayuda a evaluar cómo se comportarán las funciones de control remoto cuando se enruten a través de Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el AoYa AY-T801 con Plaspy ofrece a las organizaciones una forma consolidada de recoger datos de posición, estado y alarmas de rastreadores compactos con soporte Beidou y GPS. Plaspy convierte los reportes del dispositivo en información útil para monitoreo en tiempo real, reproducción histórica, alertas por geocerca e informes a nivel de flota, ayudando a los equipos a mantener la seguridad y el control operativo.

Si desea conocer más sobre cómo Plaspy funciona con dispositivos como el AY-T801 y otros rastreadores compatibles, visite https://www.plaspy.com. Para descripciones de protocolo específicas del dispositivo, notas de firmware y detalles de implementación más actualizados, consulte la documentación del fabricante en http://www.aoyagps.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.

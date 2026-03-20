---
slug: /concox/pl200/protocol
id: pl200-protocol
sidebar_label: Protocol
title: Concox - PL200 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para integrar el Concox PL200 con Plaspy usando ajustes de conexión compartidos y detección automática
keywords:
  - Concox PL200
  - protocolo Concox PL200
  - rastreador GPS PL200
  - compatibilidad Concox Plaspy
  - protocolo de comunicación PL200
  - protocolo de rastreo PL200
  - protocolo GPS Concox
  - rastreador compatible con Plaspy
  - rastreador GPS personal PL200
  - rastreador para trabajadores solitarios PL200
---

# Concox - PL200 Protocol

Esta página describe el contexto público del protocolo para usar el Concox PL200 con la plataforma Plaspy. Se centra en cómo el PL200 comunica datos con Plaspy en términos generales, qué ajustes de conexión se usan habitualmente y qué comportamientos son relevantes para un rastreo y alertas en tiempo real confiables. El contenido está pensado para ayudar a administradores e integradores a comprender cómo el equipo informa ubicación, eventos y telemetría a Plaspy sin exponer detalles sensibles de implementación.

Plaspy emplea ajustes de conexión compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo informa al endpoint de Plaspy. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware del PL200, la revisión de hardware, la variante regional y la implementación del fabricante; por ello verifique el comportamiento específico del dispositivo con la documentación oficial del fabricante cuando sea necesario.

## Resumen del protocolo

El PL200 utiliza un enlace celular para entregar correcciones GNSS, alertas de eventos y telemetría a un servidor remoto. El protocolo de comunicación a nivel de dispositivo define cómo el rastreador se identifica, cómo se formatea la información de ubicación y estado, y cómo transmite eventos como SOS, batería baja o transiciones de geocerca para que una plataforma como Plaspy pueda ingerir y presentar esos datos.

- Permite al PL200 reportar posiciones GNSS, soluciones asistidas y el estado del dispositivo a un servidor remoto para rastreo en vivo.
- Envía notificaciones de eventos como SOS, alertas de movimiento, entrada y salida de geocercas y advertencias de batería al servidor.
- Proporciona identificación del dispositivo y telemetría básica para que Plaspy pueda asociar los datos entrantes con el registro de dispositivo correcto.
- Admite datos asistidos adicionales, como posiciones mejoradas por BLE y Wi‑Fi, que mejoran la precisión en entornos difíciles.
- Permite la configuración remota y la entrega de comandos cuando el firmware del dispositivo soporta comandos OTA o configuración por SMS.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en un endpoint y puerto compartidos y usa esa conexión para determinar qué protocolo de rastreador se está usando. En la mayoría de las implementaciones no es necesario que usted seleccione manualmente un protocolo dentro de Plaspy siempre que el dispositivo esté configurado correctamente para reportar al endpoint de Plaspy.

- El dominio del servidor de Plaspy es d.plaspy.com y los dispositivos pueden apuntar ahí para reportar.
- La IP del servidor Plaspy es 54.85.159.138 y puede usarse como alternativa al dominio en la configuración del dispositivo.
- Plaspy utiliza el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta.
- Normalmente usted no necesitará elegir un protocolo en Plaspy si el equipo reporta al endpoint correcto y está configurado correctamente.
- La detección de Plaspy se basa en la conexión entrante y los datos reportados, no en una selección manual de protocolo por parte del usuario.

## Transporte y contexto de conexión

El PL200 puede configurarse para usar métodos de transporte estándar al reenviar su tráfico de reporte a Plaspy. La configuración de la conexión es un paso habitual durante el despliegue; el dispositivo utilizará el transporte y endpoint configurados para enviar informes periódicos de ubicación, alarmas y mensajes de estado a Plaspy.

- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según el soporte del equipo y las necesidades del despliegue.
- El dominio d.plaspy.com y la IP 54.85.159.138 son endpoints válidos a los que los dispositivos pueden apuntar para reportar.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la planificación de cortafuegos y redes para los despliegues.
- Elija UDP para menor sobrecarga y reportes en tiempo real típicos, o TCP cuando se requiera fiabilidad de sesión y el dispositivo lo soporte.
- Asegúrese de que APN, SIM y credenciales celulares estén configuradas para que el PL200 pueda alcanzar el endpoint de Plaspy mediante datos móviles.

## Notas sobre compatibilidad del protocolo

- El comportamiento del protocolo puede variar según la versión de firmware del PL200; pueden añadirse o modificarse funciones mediante actualizaciones de firmware.
- Las revisiones de hardware y las variantes regionales pueden influir en los transportes y bandas soportadas.
- Los métodos de configuración del fabricante, como comandos SMS, herramientas de configuración o actualizaciones OTA, pueden cambiar la forma en que el dispositivo se configura para reportar.
- La elección de transporte (UDP versus TCP) puede afectar las características de entrega y debe coincidir con la capacidad del dispositivo y las políticas de red.
- Verifique que el dispositivo apunte a d.plaspy.com o a 54.85.159.138 y use el puerto 8888 para asegurar compatibilidad con Plaspy.
- Siempre contraste la compatibilidad y los pasos de configuración con la documentación oficial del Concox PL200 para la revisión de firmware con la que se envió el equipo.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del PL200 ayuda a asegurar una configuración confiable, agiliza la resolución de problemas y permite un comportamiento predecible en sistemas de rastreo en producción. Saber cómo reporta el dispositivo y qué eventos envía reduce la incertidumbre durante la puesta en marcha y ayuda a los equipos de soporte a responder más rápido ante incidencias.

- Acelera la configuración inicial al confirmar el endpoint y la selección de transporte correctos.
- Mejora la resolución de problemas al aclarar qué eventos deben aparecer en Plaspy y por qué puede faltar telemetría.
- Facilita la planificación de reglas de red y cortafuegos, dado que Plaspy usa un puerto único y endpoints conocidos.
- Orienta las decisiones de gestión de firmware cuando el fabricante publique cambios o correcciones de funciones.
- RespaldA flujos de trabajo de emergencia confiables al confirmar cómo se entregan las señales de SOS y otras alarmas a Plaspy.

## Por qué usar Plaspy con este protocolo

Utilizar el Concox PL200 con Plaspy ofrece a las organizaciones un enfoque simplificado para el rastreo personal, la protección de trabajadores en solitario y la supervisión de equipos móviles. Plaspy ingiere los mensajes de ubicación, telemetría y eventos del PL200 y los presenta en una vista operativa unificada para despacho, alertas y análisis histórico. Las funciones de asistencia por BLE y Wi‑Fi del PL200 complementan el reporte GNSS para mejorar el posicionamiento en áreas urbanas y en los límites interiores, mientras que las capacidades de SOS y voz bidireccional apoyan flujos de respuesta rápida.

Si desea saber más sobre cómo Plaspy puede trabajar con el PL200 y otros dispositivos compatibles, visite https://www.plaspy.com. Para detalles más recientes y específicos del protocolo, notas de firmware e instrucciones de configuración del fabricante, consulte los recursos oficiales de Concox en https://www.iconcox.com/ ya que el soporte del protocolo y el comportamiento del firmware pueden cambiar con el tiempo.

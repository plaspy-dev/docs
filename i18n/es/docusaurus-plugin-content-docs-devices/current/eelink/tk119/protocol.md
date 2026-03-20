---
slug: /eelink/tk119/protocol
id: tk119-protocol
sidebar_label: Protocol
title: EElink - TK119 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para la compatibilidad del EElink TK119 con la plataforma Plaspy
keywords:
  - protocolo EElink TK119
  - protocolo GPS EElink TK119
  - protocolo de comunicación EElink TK119
  - protocolo de rastreo TK119
  - compatibilidad tracker EElink Plaspy
  - protocolo MoveLink EELINK
  - protocolo rastreador GPS vehicular
  - protocolo rastreador para gestión de flotas
  - integración rastreador GPS Plaspy
  - protocolo de telemetría TK119
---

# EElink - Protocolo TK119

Esta página describe el contexto del protocolo público para usar el rastreador EElink TK119 con la plataforma de gestión de flotas Plaspy. Se centra en cómo se comunica el equipo en términos generales, el comportamiento de reporte MoveLink EELINK y cómo Plaspy recibe posiciones, telemetría y eventos de alarma sin exponer detalles privados del fabricante.

Plaspy emplea configuraciones de conexión compartidas entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página ofrece contexto práctico para la integración y recomienda verificar contra la documentación de EElink.

## Visión general del protocolo

El TK119 utiliza un enfoque estándar de reporte para enviar posición GNSS, estado y eventos de alarma a plataformas backend como Plaspy. El protocolo a nivel de dispositivo regula cómo el rastreador se identifica, reporta datos periódicos y eventos, y soporta flujos de comandos y control cuando se permiten acciones remotas.

- Permite la entrega de actualizaciones de ubicación y telemetría desde el rastreador al backend de Plaspy para seguimiento en tiempo real y registro histórico.
- Identifica el dispositivo ante la plataforma para que Plaspy pueda asociar los reportes con el vehículo y la cuenta correctos.
- Transmite señales de evento como cambios de ACC, violaciones de geocerca, alertas por choque o vibración y notificaciones de batería baja.
- Soporta primitivas de control remoto a nivel de dispositivo, como activación de relé, cuando lo permiten las políticas del equipo y del operador.
- Funciona sobre transporte celular para llevar datos GNSS y eventos del dispositivo al servidor de Plaspy para su procesamiento y visualización.

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones entrantes de rastreadores en un endpoint compartido y determina automáticamente el protocolo adecuado según los datos que envía el dispositivo. En la mayoría de los casos, configurar correctamente el equipo para apuntar al endpoint de Plaspy es suficiente y no es necesario seleccionar manualmente un protocolo dentro de Plaspy.

- Plaspy escucha los reportes de los dispositivos en el endpoint público d.plaspy.com y también acepta conexiones a 54.85.159.138 para alcanzar el mismo backend.
- Plaspy utiliza el puerto 8888 como puerto común de escucha para todos los dispositivos soportados, de modo que la configuración del equipo puede estandarizarse.
- Los dispositivos configurados para enviar datos al endpoint de Plaspy serán identificados automáticamente por la plataforma y asociados con la cuenta correcta cuando las credenciales de reporte coincidan.
- Por lo general, usted no necesita elegir un protocolo manualmente en Plaspy si el rastreador está configurado para reportar al servidor de Plaspy.
- Si un dispositivo no aparece en línea, comprobar el endpoint del servidor, la selección de transporte y la configuración de firmware son pasos prácticos iniciales.

## Transporte y contexto de conexión

La selección de transporte y la configuración de conexión determinan cómo el TK119 envía sus reportes a Plaspy. El equipo puede configurarse para usar alguno de los modos de transporte principales según su configuración y el entorno de red. Estos detalles son a nivel de conexión y no requieren exponer campos de paquete.

- El TK119 puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del dispositivo y la preferencia del instalador.
- Los dispositivos pueden apuntar al dominio de Plaspy d.plaspy.com o a la IP del servidor 54.85.159.138 para entregar los reportes.
- Plaspy usa el mismo puerto para todos los equipos, lo que simplifica la configuración del dispositivo y las verificaciones de diagnóstico.
- La elección entre UDP y TCP puede afectar las características de entrega en condiciones de cobertura celular deficiente, pero no cambia la semántica general del protocolo que Plaspy procesa.
- Asegúrese de que el APN del rastreador y los permisos de datos salientes estén correctamente configurados para garantizar la entrega fiable al endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- El TK119 es compatible con Plaspy cuando se configura para reportar al endpoint de Plaspy usando el modo de reporte admitido por la unidad.
- El comportamiento del protocolo puede variar entre revisiones de firmware; verifique el firmware del rastreador si encuentra reportes inesperados o campos faltantes.
- Las revisiones de hardware y accesorios opcionales, como relés o sensores externos, pueden modificar la telemetría y los tipos de eventos disponibles.
- La selección de transporte UDP versus TCP debe coincidir con la configuración del rastreador y con las expectativas del servidor en cuanto a confiabilidad.
- Las condiciones de red, la configuración del APN y las restricciones de la SIM pueden afectar la visibilidad aun cuando los ajustes del protocolo sean correctos.
- Siempre consulte la documentación de EElink para instrucciones específicas por modelo y firmware antes de un despliegue masivo.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el TK119 con Plaspy ayuda a asegurar una configuración fluida, reportes confiables y una resolución más rápida de problemas cuando no llegan eventos o telemetría como se espera. Tener una comprensión práctica reduce el tiempo de integración y apoya la continuidad operativa.

- Acelera la configuración inicial al asegurar que el dispositivo apunte a d.plaspy.com o a 54.85.159.138 y use el puerto 8888 requerido por Plaspy.
- Ayuda a diagnosticar problemas de conectividad separando fallas de transporte de problemas de protocolo o firmware.
- Permite decidir entre UDP y TCP según cobertura y necesidades de entrega.
- Facilita el manejo predecible de alarmas y control de relés al comprender qué eventos reporta el rastreador.
- Hace más segura la planificación de actualizaciones de firmware, porque puede validar cambios de comportamiento frente a las expectativas del protocolo conocido.

## Por qué usar Plaspy con este protocolo

Usar el TK119 con Plaspy ofrece un camino práctico hacia visibilidad en tiempo real, manejo de alarmas y reportes operativos para flotas y activos vehiculares. Plaspy ingiere la posición y los eventos enviados por el TK119, transformando los reportes en vistas de mapa, alertas y rutas históricas que apoyan las operaciones diarias y la respuesta ante incidentes.

Para saber más sobre Plaspy y cómo la plataforma se integra con dispositivos como el EElink TK119, visite https://www.plaspy.com. Para obtener la guía más actualizada del protocolo específico del dispositivo, notas de firmware y detalles de implementación consulte el sitio del fabricante EElink en https://www.eelink.com.cn/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.

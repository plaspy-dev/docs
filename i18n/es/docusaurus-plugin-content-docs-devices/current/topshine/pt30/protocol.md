---
slug: /topshine/pt30/protocol
id: pt30-protocol
sidebar_label: Protocol
title: TopShine - PT30 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del rastreador TopShine PT30 y su integración con Plaspy
keywords:
  - Protocolo TopShine PT30
  - Protocolo GPS TopShine PT30
  - Protocolo TopShine PT30 para Plaspy
  - Protocolo de comunicación TopShine PT30
  - Protocolo de rastreo TopShine PT30
  - Compatibilidad del rastreador TopShine PT30
  - Protocolo de dispositivo Plaspy
  - Rastreo vehicular TopShine PT30
  - Protocolo del rastreador GPS PT30
  - Rastreo GPRS TopShine PT30
---

# TopShine - Protocolo PT30

Esta página describe, en términos generales y no sensibles, el contexto público del protocolo utilizado por el rastreador TopShine PT30 para integrarse con Plaspy. Aquí se explica cómo el dispositivo informa posición y estado a Plaspy, y qué aspectos de la comunicación son relevantes para integrar o diagnosticar el equipo en la plataforma Plaspy.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo cuando el equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que el comportamiento puede diferir entre unidades o compilaciones de firmware.

## Resumen del protocolo

El protocolo de reporte del PT30 define cómo el equipo envía información de posición, estado y alertas a un servidor remoto. En términos generales, el protocolo proporciona al servidor los datos necesarios para identificar el dispositivo, registrar puntos de ubicación y activar alarmas o respuestas basadas en los eventos reportados por el rastreador.

- Permite que el rastreador informe ubicación GPS y datos de posición con marca temporal a un servidor remoto.
- Incluye identificación básica del dispositivo para que la plataforma receptora asocie los mensajes a una unidad conocida.
- Transmite mensajes de evento y estado como alertas SOS, notificaciones de movimiento o geocerca, estado de batería o energía y reportes periódicos de latido.
- Soporta reporte por GPRS y, según lo provea el dispositivo, fallback por SMS para la entrega de ubicación.
- Permite al servicio receptor procesar y mostrar historial de ubicaciones y actualizaciones en tiempo real para monitoreo y diagnóstico.

## Cómo Plaspy detecta el protocolo

Plaspy recibe tráfico de rastreadores en un único endpoint compartido y determina automáticamente qué protocolo usa un dispositivo cuando está configurado correctamente. En la mayoría de los casos no es necesario seleccionar manualmente el protocolo dentro de Plaspy si el equipo apunta al servidor de Plaspy y usa un transporte soportado.

- Plaspy escucha en un único puerto para todos los dispositivos compatibles y emplea lógica de detección de protocolo para identificar mensajes entrantes.
- El dominio del servidor de Plaspy para reportes es d.plaspy.com y la IP del servidor es 54.85.159.138.
- Plaspy usa el mismo puerto para todos los dispositivos y reconoce el protocolo del rastreador automáticamente cuando llegan reportes válidos.
- Cuando un PT30 u otro rastreador se configura para reportar al endpoint de Plaspy normalmente se lo identifica sin que el usuario deba seleccionar el protocolo manualmente.
- Si un dispositivo no aparece, las causas más comunes incluyen dirección de servidor incorrecta, desajuste de transporte o configuraciones de firmware que impiden el reporte al endpoint.

## Transporte y contexto de conexión

El PT30 soporta reportes por GPRS y puede configurarse para usar TCP o UDP dependiendo de la configuración del dispositivo y del firmware. Para la integración con Plaspy los detalles clave de conexión son compartidos y consistentes entre dispositivos soportados, por lo que configurar la dirección de servidor y el transporte correctos es el paso principal.

- Los equipos pueden configurarse para usar UDP o TCP en el puerto 8888 según el soporte del dispositivo y la configuración del usuario.
- El endpoint de Plaspy para reporte es d.plaspy.com y la IP del servidor 54.85.159.138 que aceptan conexiones en el puerto 8888.
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que la configuración del puerto es uniforme entre modelos.
- Elija TCP si su entorno requiere un transporte orientado a conexión, o UDP cuando se prefiera menor sobrecarga y el firmware del dispositivo esté ajustado para ello.
- Asegúrese de que el APN y los ajustes GPRS del PT30 sean correctos para que el rastreador pueda alcanzar el endpoint de Plaspy a través de la red móvil.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden modificar comandos disponibles y formatos de reporte, por lo que dos PT30 con firmware distinto pueden comportarse de forma diferente.
- Revisiones de hardware o modelos regionales podrían cambiar ajustes predeterminados de transporte o requisitos de servidor saliente.
- La selección de transporte entre TCP y UDP es configurable en el dispositivo y debe coincidir con la configuración usada al apuntar el equipo a Plaspy.
- Ajustes del fabricante como APN, intervalo de reporte y configuración de alarmas afectan cómo y cuándo el dispositivo envía datos a Plaspy.
- Verifique siempre que el equipo esté configurado para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888 para que Plaspy reciba los datos.
- Ante la duda, consulte los menús de configuración del equipo y la documentación del fabricante para confirmar detalles de compatibilidad.

## Por qué es importante comprender el protocolo

Conocer el protocolo de comunicación del rastreador ayuda a garantizar reportes confiables, un historial de ubicaciones preciso y una resolución más rápida cuando surgen problemas. Incluso sin entrar en detalles de bajo nivel, saber cómo el dispositivo se conecta y qué reporta facilita la configuración y el diagnóstico.

- Acelera la configuración al clarificar la dirección de servidor y la elección de transporte requeridas para Plaspy.
- Reduce el tiempo de inactividad al facilitar la detección de desajustes entre las configuraciones del equipo y los requisitos de Plaspy.
- Mejora el diagnóstico de problemas comunes como faltas de actualización, APN incorrecto o modo de transporte erróneo.
- Ayuda a planificar funciones dependientes de firmware como SOS, geocerca o reportes de energía.
- Apoya decisiones informadas sobre ubicación del equipo, intervalos de reporte y gestión de energía para un uso prolongado.

## Por qué usar Plaspy con este protocolo

Usar el TopShine PT30 con Plaspy ofrece a las organizaciones una forma práctica de consolidar el reporte de ubicación y el monitoreo de eventos en una sola plataforma. Plaspy acepta reportes PT30 en su endpoint compartido y proporciona herramientas para visualizar ubicaciones, recibir alertas y mantener historiales de dispositivos para supervisión operativa.

Plaspy está diseñado para aceptar reportes en un puerto uniforme y detectar protocolos de rastreadores automáticamente, simplificando la incorporación de dispositivos PT30 que apunten a d.plaspy.com o 54.85.159.138 en el puerto 8888. Conozca más sobre Plaspy en el sitio principal https://www.plaspy.com y verifique la información actual de protocolo y firmware en el sitio del fabricante https://www.gztopshine.com/. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que siempre conviene confirmar la información más reciente con el fabricante.

---
slug: /gotop/g08_4g/protocol
id: g08_4g-protocol
sidebar_label: Protocol
title: GOTOP - G08-4G Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para la compatibilidad del GOTOP G08-4G con Plaspy en rastreo y telemetría de vehículos
keywords:
  - protocolo GOTOP G08-4G
  - protocolo GPS GOTOP G08-4G
  - GOTOP G08-4G Plaspy
  - protocolo GOTOP
  - rastreador G08-4G
  - protocolo rastreador OBD
  - protocolo seguimiento de flotas
  - compatibilidad seguimiento vehicular
  - protocolo rastreador 4G GPS
  - protocolo dispositivos Plaspy
---

# GOTOP - Protocolo G08-4G

Esta página ofrece una visión pública y de alto nivel sobre el contexto de comunicación para usar el rastreador OBD GOTOP G08-4G con Plaspy. Se centra en cómo el dispositivo reporta posición, estado y alarmas a la plataforma Plaspy, y en qué aspectos del comportamiento de reporte del rastreador son relevantes para una integración y operación exitosas. Esta guía está dirigida a gestores de flotas, integradores y usuarios técnicos que necesitan comprender el contexto del protocolo sin exponer detalles sensibles de implementación.

El G08-4G es un rastreador OBD-II plug and play con antenas integradas de GPS y celular y conectividad 4G LTE. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy; el comportamiento exacto de los mensajes y los campos disponibles puede variar según la versión de firmware, la revisión de hardware y la configuración del fabricante. Considere esta página como una orientación sobre el protocolo y no como una referencia de comandos específica de firmware.

## Resumen del protocolo

El protocolo que utiliza el G08-4G define cómo el dispositivo transmite identidad, posición, telemetría y eventos de alarma a un servidor remoto para que Plaspy pueda mostrar seguimiento en tiempo real, alertas y rutas históricas. A alto nivel, el protocolo garantiza que el dispositivo pueda establecer conectividad de transporte, identificarse y enviar mensajes periódicos o por evento que se correspondan con los campos de telemetría de Plaspy.

- Permite al rastreador reportar la posición GPS y el estado del vehículo a Plaspy para visualización en tiempo real y registro.
- Transporta notificaciones de alarmas y eventos como activaciones de geocerca, alertas por vibración o movimiento, e indicadores de pérdida de alimentación.
- Transmite identificadores y telemetría que permiten a Plaspy asociar los mensajes con el registro de dispositivo correcto.
- Soporta tanto reportes periódicos continuos como mensajes por evento para un uso eficiente de la red.
- Permite modos de reporte alternativos como SMS cuando la conectividad de datos no está disponible.

## Detección del protocolo por parte de Plaspy

Plaspy recibe datos entrantes en un endpoint y puerto compartidos y detecta automáticamente el protocolo del rastreador según los mensajes que envía el dispositivo. En la mayoría de los casos, un G08-4G correctamente configurado que reporte al endpoint de Plaspy será reconocido sin que el usuario tenga que seleccionar el protocolo manualmente.

- Plaspy expone un único endpoint público para el reporte de dispositivos en d.plaspy.com y una IP pública de servidor 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto y Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta a ese endpoint.
- El dispositivo puede estar configurado para reportar al endpoint de Plaspy por UDP o TCP según la configuración del equipo.
- Cuando el G08-4G está configurado para reportar a d.plaspy.com en el puerto compartido, Plaspy mapea los mensajes entrantes al perfil del dispositivo.
- La selección manual de protocolo dentro de Plaspy suele ser innecesaria si el rastreador está enviando la identificación y la telemetría esperadas.

## Contexto de transporte y conexión

El contexto de conexión describe cómo el G08-4G llega a Plaspy más que el formato detallado de los mensajes. El rastreador soporta reporte de datos IP sobre redes celulares y puede usar distintas capas de transporte. Comprender las opciones de transporte ayuda a asegurar que los dispositivos apunten al endpoint correcto de Plaspy y que las reglas de red permitan las conexiones del dispositivo.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el firmware y los ajustes del equipo.
- El endpoint de reporte de Plaspy está disponible en d.plaspy.com y la IP de servidor correspondiente es 54.85.159.138.
- Plaspy utiliza el puerto 8888 para todos los dispositivos compatibles, por lo que un único puerto saliente suele ser suficiente en la mayoría de los despliegues.
- Algunas funciones del dispositivo pueden cambiar a reporte por SMS cuando los datos celulares no están disponibles; SMS es una vía separada y se maneja según corresponda entre el dispositivo y Plaspy.
- Asegúrese de que los firewalls de la red del vehículo u operador permitan conectividad saliente hacia d.plaspy.com en el puerto 8888 para garantizar reportes fiables.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden modificar campos de mensaje, intervalos de reporte y telemetría disponible; verifique la versión de firmware del dispositivo al solucionar problemas.
- Las variaciones de hardware o las diferencias regionales del módulo pueden afectar las bandas celulares soportadas y el comportamiento de respaldo.
- La elección de transporte (UDP frente a TCP) se configura en el dispositivo y puede influir en las características de entrega en determinadas redes.
- El reporte por SMS es una vía complementaria pero puede no transportar la misma telemetría completa que los reportes por datos IP.
- La detección automática de Plaspy reduce la necesidad de seleccionar un protocolo manualmente, pero se requiere una configuración correcta del endpoint del dispositivo.
- Siempre valide el comportamiento del dispositivo con la documentación de GOTOP para el modelo y firmware específicos que esté usando.

## Por qué es importante entender el protocolo

Conocer cómo el G08-4G se comunica con Plaspy mejora el éxito en la configuración, la eficiencia en la resolución de problemas y la fiabilidad a largo plazo. Entender el contexto de comunicación ayuda a los equipos de operación a identificar por qué un dispositivo podría no aparecer en línea, qué transporte está activo y qué mensajes de evento se deberían esperar.

- Garantiza que los dispositivos estén configurados para reportar a d.plaspy.com o a la IP del servidor para que Plaspy pueda ingerir los mensajes.
- Ayuda a verificar que las reglas de red y firewall permitan tráfico saliente en el puerto 8888.
- Le permite interpretar la cadencia de reporte del dispositivo y por qué algunos eventos pueden demorarse o faltar.
- Soporta la resolución de problemas del comportamiento de respaldo como SMS frente a datos IP.
- Orienta las decisiones de actualización de firmware cuando se requieren nuevos campos de telemetría o correcciones.

## Ventajas de usar Plaspy con este protocolo

Usar el GOTOP G08-4G con Plaspy ofrece una integración sencilla para organizaciones que necesitan visibilidad de vehículos plug and play sin cableado complejo. La forma OBD facilita la instalación, mientras que la conectividad 4G y el respaldo por SMS ayudan a mantener la continuidad en el reporte de posición y alarmas. Cuando el G08-4G se apunta al endpoint compartido de Plaspy, la plataforma puede mostrar ubicación en tiempo real, historial de rutas y flujos de alertas útiles para prevención de robos, operaciones de flota y gestión de rentas.

Conozca más sobre cómo Plaspy soporta la conectividad de dispositivos y los flujos de trabajo de flota en https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo; verifique la información más reciente del protocolo y del firmware del dispositivo con GOTOP en https://www.gotop.cc/ para obtener la guía actualizada.

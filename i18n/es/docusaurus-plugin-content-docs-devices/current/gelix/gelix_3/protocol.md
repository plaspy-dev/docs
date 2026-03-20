---
slug: /gelix/gelix_3/protocol
id: gelix_3-protocol
sidebar_label: Protocol
title: Gelix - Gelix 3 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo Gelix 3 para seguimiento GPS y compatibilidad con Plaspy con ajustes de conexión y consideraciones de integración
keywords:
  - Protocolo Gelix Gelix 3
  - Protocolo GPS Gelix 3
  - Protocolo de comunicación Gelix 3
  - Protocolo de rastreo Gelix 3
  - Protocolo Gelix Plaspy
  - Compatibilidad Gelix 3 Plaspy
  - Protocolo rastreador GPS Gelix
  - Protocolo de telemetría dispositivo Gelix
  - Protocolo registrador consumo energético
  - Protocolo monitorización remota Gelix
---

# Gelix - Protocolo Gelix 3

Esta página ofrece contexto público sobre el protocolo utilizado por el tracker Gelix 3 al integrarse con Plaspy. Se centra en cómo se comunica el Gelix 3 en términos generales, qué ajustes de conexión son los más habituales y cómo esos parámetros influyen en una integración correcta con la plataforma Plaspy. La información está dirigida a usuarios técnicos e integradores que desean comprender la relación de comunicación entre el dispositivo y Plaspy sin entrar en detalles internos del firmware.

El Gelix 3 es un registrador de consumo energético versátil con entradas/salidas automatizadas y un módem GSM GPRS integrado o puerto Ethernet, pensado para telemetría, monitorización de eventos, control de accesos, control de equipos y aplicaciones afines. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del tracker. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que el funcionamiento puede diferir entre instalaciones o versiones de firmware.

## Resumen del protocolo

El protocolo del Gelix 3 regula cómo el dispositivo reporta telemetría, estado y eventos a un servidor remoto, y cómo recibe mensajes de configuración o control cuando eso está soportado. Para la integración con Plaspy esto significa que el tracker envía registros de telemetría y eventos identificables que Plaspy puede aceptar y mapear en la plataforma.

- Permite la entrega de telemetría como consumo energético, estados de entradas/salidas, eventos e información de posición a Plaspy.
- Proporciona identificación del dispositivo e información de estado que permite a Plaspy asociar informes entrantes con una unidad Gelix 3.
- Transmite registros de eventos y alarmas desde sensores y periféricos integrados para que aparezcan en los paneles y registros de la plataforma.
- Soporta opciones de configuración remota cuando el dispositivo y el firmware exponen comandos de gestión por el enlace de reporte.
- Permite que Plaspy procese la entrega, el registro y las alertas como parte de los flujos habituales de monitoreo de flotas y activos.

## Cómo Plaspy detecta el protocolo

Plaspy acepta conexiones entrantes de dispositivos en un endpoint y puerto común, y usa el contenido de los reportes para determinar el manejo correcto. En la mayoría de los casos, un Gelix 3 configurado para reportar a Plaspy será reconocido automáticamente sin necesidad de seleccionar el protocolo manualmente.

- El dominio público de servidor de Plaspy para reportes de dispositivos es d.plaspy.com.
- La dirección IP pública del servidor de Plaspy es 54.85.159.138 y el servicio escucha en el puerto 8888.
- Los dispositivos pueden configurarse para usar transporte UDP o TCP hacia Plaspy en el puerto 8888.
- Todos los dispositivos gestionados por Plaspy usan el mismo puerto, lo que simplifica la configuración de los equipos.
- Cuando un Gelix 3 correctamente configurado se conecta al endpoint de Plaspy, Plaspy detectará automáticamente el protocolo del tracker y lo asociará con la cuenta receptora.

## Transporte y contexto de conexión

El contexto de conexión cubre cómo el Gelix 3 establece el transporte de red hacia un servidor y qué endpoints son típicos para la integración con Plaspy. Las unidades Gelix 3 pueden usar GPRS celular o Ethernet según la opción de hardware y la configuración.

- El Gelix 3 puede configurarse para reportar a Plaspy usando UDP o TCP en el puerto 8888, según capacidades y ajustes del dispositivo.
- Los equipos pueden apuntar al dominio d.plaspy.com o directamente a la IP 54.85.159.138 de Plaspy.
- Plaspy escucha en un único puerto para todos los dispositivos soportados, lo que reduce la complejidad al configurar múltiples modelos de tracker.
- Seleccione el tipo de transporte de acuerdo con el firmware del dispositivo y el entorno de red, ya que algunas instalaciones prefieren UDP y otras requieren TCP.
- La configuración de red, como APN, reglas de firewall y comportamiento NAT, puede afectar la conectividad y debe validarse durante la puesta en marcha.

## Notas sobre compatibilidad del protocolo

- El Gelix 3 es compatible con Plaspy cuando está configurado correctamente para reportar al endpoint y puerto de Plaspy.
- Las versiones de firmware y las revisiones de hardware del Gelix 3 pueden modificar las funciones disponibles y el comportamiento de los comandos; verifique la versión de firmware del dispositivo para conocer capacidades concretas.
- Las configuraciones del fabricante a veces varían por región o variante del producto y pueden afectar qué modos de transporte o reporte están disponibles.
- Si el dispositivo soporta tanto GSM GPRS como Ethernet, confirme cuál interfaz está activa y cómo está configurada para alcanzar el endpoint de Plaspy.
- La elección entre UDP y TCP puede influir en la confiabilidad y las características de entrega según las condiciones de red.
- Siempre valide los parámetros de configuración con la documentación oficial del Gelix 3 para el modelo y firmware exactos que vaya a desplegar.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del Gelix 3 ayuda a garantizar reportes estables, correcta interpretación de la telemetría y una resolución de problemas más rápida cuando surgen incidencias. Un conocimiento claro del flujo de reporte reduce el tiempo de integración y evita errores comunes de configuración.

- Ayuda a confirmar que el dispositivo apunta al endpoint correcto de Plaspy y usa el transporte y puerto esperados.
- Facilita el diagnóstico de telemetría faltante o reportes de eventos inconsistentes al comparar los registros del dispositivo con los registros de ingestión de Plaspy.
- Informa la decisión sobre el transporte a utilizar UDP versus TCP y cómo eso afecta la entrega en su red.
- Orienta la planificación de actualizaciones de firmware cuando el fabricante introduce cambios en el protocolo o nuevos mensajes.
- Permite mapear correctamente los sensores integrados y canales de entradas/salidas del Gelix 3 en los paneles y alertas de Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el Gelix 3 con Plaspy ofrece a las organizaciones una forma centralizada de recopilar telemetría de consumo energético, notificaciones de eventos y estado del dispositivo Gelix 3 junto con otros activos. La detección automática de protocolos de Plaspy y su enfoque de puerto unificado simplifican la incorporación y permiten que los equipos se concentren en casos operativos como monitoreo de energía, manejo de alarmas y control remoto de equipos.

Para saber más sobre cómo Plaspy puede trabajar con dispositivos Gelix y comenzar la integración visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación específicos del fabricante pueden cambiar con el tiempo, por lo que debe verificar la documentación y los detalles de firmware más recientes con Gelix en http://www.gelix.com/ antes del despliegue definitivo.

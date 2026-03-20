---
slug: /queclink/wr100_leu/protocol
id: wr100_leu-protocol
sidebar_label: Protocol
title: QuecLink - WR100 LEU Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para usar la pasarela QuecLink WR100 LEU con Plaspy y asegurar el reenvío fiable de datos de rastreadores
keywords:
  - protocolo QuecLink WR100 LEU
  - compatibilidad WR100 LEU Plaspy
  - protocolo GPS WR100 LEU
  - protocolo de comunicación WR100 LEU
  - protocolo de rastreo WR100 LEU
  - pasarela QuecLink Plaspy
  - protocolo de dispositivo Plaspy
  - pasarela celular para rastreadores GPS
  - telemetría router LTE industrial
  - pasarela para seguimiento de flotas
---

# QuecLink - WR100 LEU Protocolo

Esta página describe el contexto público del protocolo para emplear el dispositivo QuecLink WR100 LEU como pasarela en despliegues con Plaspy. Se centra en cómo el router actúa como transporte de respaldo de red para rastreadores compatibles con Plaspy y en cómo el comportamiento de comunicación del equipo se relaciona con el endpoint de servidor de Plaspy y sus capacidades de detección.

El WR100 LEU es un router industrial LTE Cat 4 diseñado para reenviar telemetría, ubicación y eventos desde rastreadores compatibles con Plaspy hacia la nube. Plaspy utiliza ajustes de conexión comunes para los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión del hardware y la implementación del fabricante. Para la conectividad, Plaspy acepta reportes de dispositivos hacia d.plaspy.com (o 54.85.159.138) en el puerto 8888 y los equipos pueden configurarse para usar UDP o TCP en ese puerto.

## Resumen del protocolo

En este contexto, el protocolo es el conjunto de reglas que el WR100 LEU y los rastreadores conectados usan para entregar coordenadas GPS, telemetría y notificaciones de eventos a Plaspy. Como pasarela, el WR100 LEU provee transporte seguro y confiable para los mensajes de los rastreadores sin alterar el endpoint público de reporte que usa Plaspy.

- Permite la entrega fiable de telemetría y datos de ubicación desde el campo hasta el endpoint de Plaspy.
- Transporta identidad de dispositivo y datos de sesión para que Plaspy pueda asociar los mensajes entrantes con el registro correcto del rastreador.
- Soporta reenvío de eventos y alarmas para que Plaspy pueda activar alertas y reglas en tiempo real basadas en los mensajes del rastreador.
- Conserva el contexto del transporte (TCP o UDP) y la alcanzabilidad de red para que Plaspy reciba actualizaciones consistentes.
- Funciona junto con características del router como VPN, firewall y redundancia de doble SIM para mantener un reporte continuo.

## Cómo Plaspy detecta el protocolo

Plaspy detecta automáticamente el protocolo entrante de los rastreadores una vez que los mensajes llegan al endpoint compartido del servidor. En la mayoría de los despliegues no es necesario seleccionar manualmente un protocolo dentro de Plaspy cuando el dispositivo o la pasarela están configurados para reportar al endpoint de Plaspy.

- Plaspy escucha en un único endpoint compartido para todos los dispositivos en d.plaspy.com y 54.85.159.138 en el puerto 8888.
- La plataforma utiliza las características de los mensajes entrantes para determinar el protocolo y dirigir los datos al parser adecuado.
- Si el WR100 LEU reenvía reportes de rastreador con el formato correcto al endpoint de Plaspy, la detección del protocolo se realiza de forma automática.
- Generalmente, los usuarios configuran la pasarela o los rastreadores para apuntar a Plaspy; no se requiere selección manual del protocolo dentro de Plaspy cuando el reporte está correctamente encaminado.
- Una identificación correcta del dispositivo y un transporte estable ayudan a Plaspy a detectar y mantener el mapeo de protocolo adecuado para cada rastreador.

## Contexto de transporte y conexión

La configuración de la conexión y el transporte son importantes para la entrega fiable de datos de los rastreadores. El WR100 LEU soporta múltiples opciones de subida y puede reenviar el tráfico de los rastreadores por la red celular, Wi‑Fi o Ethernet cableada hacia Plaspy.

- Los dispositivos y las pasarelas pueden configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y las preferencias del despliegue.
- Los rastreadores y el WR100 LEU pueden apuntar al dominio del servidor Plaspy d.plaspy.com o directamente a 54.85.159.138 como destino de reporte.
- Plaspy utiliza el mismo puerto para todos los dispositivos soportados, lo que simplifica la planificación de firewall y red en flotas.
- Cuando use el WR100 LEU como pasarela, asegúrese de que las reglas de NAT, firewall y reenvío de puertos permitan tráfico saliente hacia el endpoint de Plaspy en el puerto 8888.
- Las VPN o túneles seguros que proporciona el router pueden emplearse delante de la conexión a Plaspy para añadir una capa extra de seguridad de transporte sin cambiar el endpoint de reporte.

## Notas sobre compatibilidad del protocolo

- Las variaciones de firmware en el WR100 LEU o en los rastreadores pueden cambiar los transportes disponibles, la temporización de mensajes o campos opcionales; verifique siempre la revisión de firmware en uso.
- Las revisiones de hardware y las interfaces opcionales (por ejemplo RS232/RS485) pueden afectar la forma en que se recoge y reenvía la telemetría a Plaspy.
- Algunos despliegues prefieren TCP por su fiabilidad, mientras otros usan UDP por menor latencia; elija el transporte según las capacidades del dispositivo y las condiciones de red.
- Las configuraciones por defecto del fabricante pueden no apuntar a Plaspy automáticamente; confirme que el host y puerto de reporte estén establecidos en d.plaspy.com o 54.85.159.138 y en el puerto 8888 según corresponda.
- La detección automática de protocolo de Plaspy reduce la necesidad de configuración manual dentro de la plataforma, pero es necesario un enrutamiento y direccionamiento correctos desde la pasarela.
- Valide la compatibilidad y los ajustes recomendados consultando la documentación oficial de QuecLink para guía específica por modelo y firmware.

## Por qué es importante entender el protocolo

Conocer cómo el WR100 LEU reenvía la telemetría de los rastreadores y cómo Plaspy espera recibir esos datos ayuda a reducir el tiempo de puesta en marcha y mejora la confiabilidad operativa. Una comprensión clara del protocolo facilita la resolución de problemas y garantiza la integridad de los datos a lo largo de la cadena de transporte.

- Ayuda a confirmar que los rastreadores y la pasarela apuntan al endpoint y puerto correctos de Plaspy.
- Hace más rápido el diagnóstico de problemas de red o entrega de mensajes al acotar el alcance a transporte, pasarela o capa de rastreador.
- Mejora el tiempo de actividad al orientar decisiones sobre usar TCP frente a UDP, VPNs o funcionalidades de redundancia como doble SIM.
- Garantiza que los mensajes de eventos y alarmas se preserven de extremo a extremo para que Plaspy pueda activar reglas y notificaciones con precisión.
- Soporta comportamientos previsibles durante actualizaciones de firmware o cambios de hardware al coincidir las características de reporte esperadas.

## Por qué usar Plaspy con este protocolo

Usar el QuecLink WR100 LEU como pasarela de comunicaciones para rastreadores compatibles con Plaspy ofrece una vía resistente y segura para telemetría y datos de ubicación. La redundancia de doble SIM del router, su soporte de VPN y las capacidades de red industrial ayudan a mantener los flujos de Plaspy activos en escenarios exigentes de flotas y telemetría remota sin requerir cambios a nivel de protocolo dentro de la plataforma.

Si desea saber más sobre cómo Plaspy gestiona las conexiones de dispositivos y la detección automática de protocolos, visite https://www.plaspy.com. Para obtener detalles específicos más recientes sobre protocolos del dispositivo, comportamiento de firmware y orientación de implementación para el WR100 LEU, verifique la información en el sitio del fabricante https://www.queclink.com/ ya que el comportamiento del protocolo y las capacidades del firmware pueden cambiar con el tiempo.

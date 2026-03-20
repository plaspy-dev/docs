---
slug: /coban/bn_501/protocol
id: bn_501-protocol
sidebar_label: Protocol
title: Coban - BN-501 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del Coban BN-501 y cómo se comunica con Plaspy para rastreo GPS de dispositivos portátiles
keywords:
  - Coban BN-501
  - protocolo Coban BN-501
  - rastreador GPS Coban
  - compatibilidad BN-501 Plaspy
  - protocolo GPS para dispositivos portátiles
  - comunicación de rastreador personal
  - integración de rastreador GPS Plaspy
  - protocolo de seguimiento BN-501
  - rastreador portátil Coban
  - telemetría y alarmas del dispositivo
---

# Coban - Protocolo BN-501

Esta página presenta el contexto público del protocolo para usar el rastreador Coban BN-501 con Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy mediante la configuración de conexión compartida y qué aspectos del comportamiento de reporte son relevantes para la integración y la solución de problemas. El contenido es de alto nivel para evitar exponer detalles de implementación, pero brinda a los usuarios técnicos una visión clara del flujo de comunicación.

El BN-501 es un rastreador portátil y discreto con GPS, posicionamiento asistido por WiFi, BLE 5.0 y opciones celulares multired. Plaspy utiliza ajustes de conexión compartida entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque el comportamiento concreto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Para detalles específicos de firmware consulte la documentación oficial del fabricante.

## Resumen del protocolo

El protocolo de reporte del BN-501 permite que el dispositivo entregue a Plaspy datos de ubicación, telemetría y eventos para que la plataforma muestre seguimiento en tiempo real y gestione alarmas. El protocolo regula cómo el rastreador se identifica, informa su posición y estado, y transmite eventos de alarma como SOS, movimiento y batería baja.

- Permite enviar fijaciones de ubicación GPS y asistidas por WiFi, además de indicadores de proximidad BLE a Plaspy para mapeo y procesamiento de eventos.
- Transporta señales de alarma, incluyendo SOS, impacto, movimiento y alertas de geocerca, que aparecen como eventos en Plaspy.
- Lleva telemetría del dispositivo, como nivel de batería y estado de conectividad, para que Plaspy pueda activar notificaciones y flujos de mantenimiento.
- Soporta vías de configuración como Bluetooth y comandos SMS para puesta en servicio, mientras usa TCP o UDP para el reporte de datos en vivo.
- Ayuda a Plaspy a correlacionar la identidad del dispositivo con los datos entrantes para que ubicación y eventos se atribuyan al activo o persona correctos.

## Cómo detecta Plaspy el protocolo

Plaspy recibe reportes de muchos modelos de rastreadores en un endpoint y puerto compartidos y utiliza ese contexto de conexión unificado para determinar el protocolo entrante. En la mayoría de los casos, un BN-501 configurado para reportar al endpoint de Plaspy será reconocido automáticamente y comenzará a enviar datos de posición y eventos utilizables sin que usted deba seleccionar manualmente el protocolo en la interfaz.

- Plaspy escucha en un único puerto de dispositivo y detecta automáticamente el protocolo cuando llegan datos.
- Normalmente usted no necesita elegir un protocolo en Plaspy si el dispositivo apunta correctamente al endpoint de Plaspy.
- Plaspy admite los modos de reporte del BN-501 e ingiere información derivada de GPS, WiFi asistido y BLE proporcionada por el dispositivo.
- La detección automática simplifica despliegues que combinan múltiples modelos y fabricantes en la misma cuenta.
- Si un dispositivo no aparece, las comprobaciones comunes incluyen la configuración de la dirección del servidor en el dispositivo, la selección del transporte y la versión de firmware.

## Transporte y contexto de conexión

El BN-501 puede reportar posición y alertas a Plaspy mediante transporte de datos IP o por métodos alternativos según la configuración. Para el reporte IP, Plaspy ofrece un único endpoint público y puerto al que los dispositivos deben enviar sus datos. Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888, según el soporte del equipo y el modo de transporte preferido.

- El dominio del servidor Plaspy para el reporte de dispositivos es d.plaspy.com para configuraciones basadas en DNS.
- La IP del servidor Plaspy es 54.85.159.138 y el puerto compartido para reporte de dispositivos es 8888.
- El BN-501 puede configurarse para usar UDP o TCP en el puerto 8888 para alcanzar Plaspy.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que facilita la configuración de red en flotas mixtas.
- Algunas implementaciones del BN-501 también pueden usar SMS como respaldo o para flujos específicos; TCP y UDP son los transportes IP estándar para reporte en tiempo real.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar la cadencia de mensajes, campos disponibles y comportamiento de reporte. Verifique la versión de firmware del BN-501 al diagnosticar diferencias.
- Las revisiones de hardware o variantes regionales pueden alterar las bandas celulares soportadas o el comportamiento en redes de bajo consumo, y afectar qué transporte es más confiable.
- El dispositivo soporta configuración por BLE y comandos SMS, útiles cuando es necesario ajustar el transporte de red antes de apuntar a Plaspy.
- La elección de transporte entre TCP y UDP puede afectar las características de entrega, especialmente en redes con alta pérdida de paquetes o comportamientos NAT.
- Siempre valide la compatibilidad y los ajustes recomendados contra la documentación oficial de Coban para su unidad BN-501 específica.
- La compatibilidad con Plaspy se ofrece con base en el comportamiento observado y los modos de reporte estándar; confirme el comportamiento del firmware en producción antes de despliegues a gran escala.

## Por qué es importante entender el protocolo

Comprender cómo el BN-501 se comunica con Plaspy ayuda a garantizar un despliegue exitoso, alertas confiables y una resolución eficiente de problemas cuando los dispositivos están en campo. Conocer las vías básicas de reporte y las variaciones comunes permite resolver más rápido problemas de conectividad e interpretación de datos.

- Acelera la configuración inicial al confirmar la dirección del servidor y el modo de transporte correctos para el dispositivo.
- Ayuda a identificar si la falta de datos se debe a la selección de transporte, configuración del dispositivo o diferencias de firmware.
- Mejora la afinación de alarmas y eventos al alinear los intervalos de reporte y los modos de ahorro de energía con las expectativas de procesamiento de Plaspy.
- Permite pasos de solución de problemas sensatos, como verificar la configuración BLE, ajustes de respaldo por SMS y cobertura celular.
- Apoya la planificación de fiabilidad a largo plazo al destacar cómo los perfiles de energía y las estrategias de reporte afectan la batería y la puntualidad de los datos.

## Por qué usar Plaspy con este protocolo

El BN-501 ofrece una opción portátil y discreta para organizaciones que necesitan protección personal, monitoreo de mascotas o seguimiento de activos ocultos, manteniendo visibilidad y alertas en tiempo real. Usar el BN-501 con Plaspy brinda a los equipos acceso centralizado a ubicación, alarmas y telemetría para actuar rápidamente ante eventos SOS, alertas de movimiento o violaciones de geocerca.

Para saber más sobre Plaspy y cómo la plataforma maneja el reporte de dispositivos y la visibilidad de la flota, visite https://www.plaspy.com. Para notas específicas de protocolo, información de firmware y guías de instalación consulte los recursos oficiales del fabricante en https://www.coban.net/ que contendrán las actualizaciones técnicas y de firmware más recientes.

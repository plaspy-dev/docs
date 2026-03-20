---
slug: /thingsys/ts_g17h/protocol
id: ts_g17h-protocol
sidebar_label: Protocol
title: ThingSys - TS-G17H Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para integrar el ThingSys TS-G17H con los servidores de Plaspy para rastreo vehicular en tiempo real
keywords:
  - Protocolo ThingSys TS G17H
  - Protocolo GPS ThingSys TS G17H
  - Protocolo ThingSys TS G17H para Plaspy
  - Protocolo de comunicación ThingSys TS G17H
  - Protocolo de rastreo ThingSys TS G17H
  - Compatibilidad GT06 con Plaspy
  - TS G17H reporte GPRS TCP IP
  - Protocolo rastreador GPS vehicular Plaspy
  - Protocolo TS G17H para gestión de flotas
  - Detección de protocolo en Plaspy
---

# ThingSys - Protocolo TS-G17H

Esta página ofrece un panorama público del protocolo para usar el rastreador ThingSys TS-G17H con Plaspy. Se centra en el contexto de comunicación necesario para una integración y operación correctas, describiendo cómo el dispositivo envía posición, telemetría y eventos de alarma a Plaspy sin entrar en detalles privados de implementación. El contenido está pensado para técnicos e integradores que necesitan entender, a nivel general, cómo se comunica el equipo con la plataforma Plaspy.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo apunta al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que el funcionamiento puede diferir entre unidades o lanzamientos de firmware. El TS-G17H suele desplegarse usando reporte GPRS TCP/IP y en configuraciones típicas soporta el conjunto de mensajes estilo GT06.

## Resumen del protocolo

El TS-G17H utiliza un canal estándar de reporte GPRS TCP/IP e implementa el conjunto de mensajes estilo GT06 para posición, telemetría y alarmas. En una implementación con Plaspy, el rol del protocolo es encapsular identificación y telemetría en mensajes que el servidor procesa para seguimiento en tiempo real, alertas y reproducción histórica.

- Proporciona identificación del dispositivo e información de sesión para que Plaspy asocie los reportes entrantes con el rastreador y vehículo correctos.
- Transmite ubicación, velocidad, marca de tiempo y telemetría básica como estado de ignición para uso en mapeo e informes.
- Entrega notificaciones de alarmas y eventos como geocerca y exceso de velocidad que activan alertas y flujos de trabajo en Plaspy.
- Soporta patrones de control remoto, por ejemplo control de inmovilizador por relé a través del canal de comandos del dispositivo cuando está configurado.
- Permite configuración de dispositivo y comprobaciones de estado por GPRS para facilitar aprovisionamiento remoto y resolución de problemas.

## Cómo Plaspy detecta el protocolo

Plaspy acepta conexiones de rastreadores en un endpoint común y detecta el protocolo automáticamente para dispositivos configurados correctamente. Cuando un TS-G17H apunta al servidor de Plaspy, la plataforma compara los mensajes entrantes con patrones de protocolo conocidos y asocia el dispositivo a una cuenta de usuario sin que en la mayoría de los casos sea necesario seleccionar el protocolo manualmente.

- El endpoint público del servidor de Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138 para referencias directas de configuración.
- Plaspy usa el puerto 8888 para el reporte de dispositivos y todos los equipos soportados comparten este mismo puerto.
- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y las condiciones de red.
- Si el TS-G17H está configurado para reportar al endpoint de Plaspy, Plaspy normalmente detectará automáticamente los mensajes estilo GT06 y registrará los reportes entrantes.
- En general, usted no necesitará seleccionar un protocolo dentro de Plaspy cuando el dispositivo esté correctamente apuntando al endpoint del servidor.

## Transporte y contexto de conexión

Las opciones de conexión para el TS-G17H se centran en datos celulares GPRS; el dispositivo soporta reportes por TCP o UDP al endpoint de Plaspy en el mismo puerto usado por otros equipos. Esta sección resume las opciones a nivel de transporte y cómo apuntar una unidad a Plaspy para reporte en tiempo real.

- El TS-G17H reporta por GPRS con TCP/IP como configuración común y también puede usar UDP cuando está soportado.
- Los equipos pueden configurarse para enviar tráfico al dominio d.plaspy.com o a la IP del servidor 54.85.159.138 según requiera el método de aprovisionamiento.
- El puerto 8888 es el puerto compartido que Plaspy emplea para el reporte de dispositivos y se utiliza en todos los rastreadores soportados.
- La elección entre UDP y TCP afecta la fiabilidad y el comportamiento de entrega en el nivel de transporte, pero no cambia la intención general de los mensajes.
- Confirme el APN y la disponibilidad de GPRS con su proveedor celular para asegurar que el rastreador pueda establecer una sesión de datos y reportar a Plaspy.

## Notas de compatibilidad del protocolo

- Los conjuntos de mensajes estilo GT06 son de uso frecuente, pero campos específicos y el soporte de comandos pueden variar según la versión de firmware y la revisión del dispositivo.
- Las actualizaciones de firmware de ThingSys pueden añadir, modificar o desaprobar tipos de mensajes o ajustes que afecten el comportamiento de la integración.
- Revisiones de hardware o variantes con características opcionales pueden alterar entradas disponibles, como puertos para sensores externos o cableado de control de relé.
- La selección de transporte entre TCP y UDP debe coincidir con la configuración del dispositivo y el entorno de red para garantizar reportes fiables.
- Valide siempre el IMEI y la configuración del servidor después del aprovisionamiento para asegurarse de que el dispositivo reporta correctamente al endpoint de Plaspy.
- En caso de duda, consulte la documentación oficial de ThingSys para listas de comandos específicas por firmware y comandos de configuración.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del TS-G17H ayuda a operadores e integradores a configurar los equipos correctamente, diagnosticar problemas de conectividad con mayor rapidez y asegurar una operación confiable a largo plazo con Plaspy. Tener claridad sobre el comportamiento del protocolo reduce errores de configuración y acelera la resolución cuando los dispositivos no responden como se espera.

- Asegura los ajustes correctos de servidor, puerto y APN para que el rastreador pueda establecer una sesión GPRS y reportar a Plaspy.
- Ayuda a interpretar los reportes de estado y las alarmas que vea en Plaspy al validar el comportamiento esperado.
- Orienta la decisión entre TCP y UDP en función de la fiabilidad de la red y las políticas de firewall.
- Facilita la gestión coordinada de firmware al reconocer cuándo una actualización puede introducir cambios en el protocolo.
- Mejora los flujos de trabajo de diagnóstico para aprovisionamiento remoto, verificación de IMEI y validación de eventos.

## Por qué usar Plaspy con este protocolo

Usar el ThingSys TS-G17H con Plaspy ofrece una solución práctica para organizaciones que requieren rastreo en tiempo real discreto y fiable, además de funciones básicas de control remoto. El conjunto de mensajes estilo GT06 combinado con reporte GPRS TCP/IP permite a Plaspy ingerir ubicación, estado de ignición y eventos de alarma para mapeo, alertas y análisis histórico sin necesidad de configuraciones de puerto por equipo complejas.

Para obtener más información sobre Plaspy y cómo funciona con protocolos comunes de rastreadores visite https://www.plaspy.com. Verifique el soporte actual de protocolos, el comportamiento del firmware y los detalles de implementación del dispositivo con el fabricante en https://www.thingsys.com/ ya que las revisiones de firmware y hardware pueden cambiar el comportamiento del protocolo con el tiempo.

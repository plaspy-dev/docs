---
slug: /lk_gps/tk905/protocol
id: tk905-protocol
sidebar_label: Protocol
title: LK-GPS - TK905 Protocol
sidebar_class_name: menu_item_tracker
description: Visión general pública del protocolo del LK-GPS TK905 y su comunicación con Plaspy para rastreo y alertas de vehículos
keywords:
  - protocolo LK-GPS TK905
  - protocolo GPS LK-GPS TK905
  - protocolo de rastreo TK905
  - compatibilidad LK-GPS Plaspy
  - protocolo de comunicación TK905
  - rastreador GPS TK905 Plaspy
  - rastreo vehicular TK905
  - integración protocolo TK905
  - compatibilidad firmware TK905
  - protocolo de rastreador TK905
---

# LK-GPS - Protocolo TK905

Esta página describe el contexto del protocolo público para usar el rastreador LK-GPS TK905 con la plataforma Plaspy. Se enfoca en cómo se comunica el dispositivo en términos generales, qué ajustes de conexión son necesarios para la ingesta en Plaspy y consideraciones prácticas para un despliegue exitoso sin exponer detalles internos del dispositivo ni información sensible de implementación.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando los dispositivos reportan a la plataforma. El comportamiento exacto del protocolo en el TK905 puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página explica el rol de la comunicación y el contexto de integración más que especificaciones concretas de firmware.

## Resumen del protocolo

El TK905 comunica posición, eventos de movimiento y alarmas a un servidor en línea para que una plataforma como Plaspy pueda recibir y presentar esos datos. El protocolo regula cómo el dispositivo reporta su identidad, coordenadas GPS, marcas de tiempo y notificaciones de eventos, de modo que los mensajes recibidos sean utilizables por un servicio de rastreo.

- Permite al rastreador enviar datos de ubicación y eventos a servidores remotos para mapeo e historial.
- Transporta información de identidad y estado del dispositivo para que Plaspy pueda atribuir los mensajes al rastreador correcto.
- Entrega señales de alarma y telemetría como exceso de velocidad o impactos para flujos de alerta y notificación.
- Soporta transporte sobre canales de datos móviles estándar para que el rastreador alcance Plaspy desde redes celulares.
- Proporciona un mecanismo de reporte consistente que Plaspy puede parsear para mostrar ubicación en vivo e historial de eventos.

## Cómo detecta Plaspy el protocolo

Plaspy recibe los reportes entrantes en un endpoint y puerto compartidos y detecta automáticamente el protocolo del rastreador a partir de la conexión y la carga útil entrantes. En la mayoría de configuraciones típicas no es necesario que usted seleccione manualmente un protocolo dentro de Plaspy si el TK905 está configurado para reportar al endpoint de Plaspy.

- Plaspy escucha en un puerto común para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador.
- Los dispositivos apuntando al endpoint de Plaspy se identifican y asocian por el ID del dispositivo o los datos IMEI reportados.
- Usualmente usted solo necesita configurar el dispositivo para que reporte al host de Plaspy para comenzar la integración.
- Si un rastreador no aparece, verifique la configuración de reporte del dispositivo, el APN o si el dispositivo está configurado para usar TCP o UDP para alcanzar el endpoint de Plaspy.
- La detección automática de Plaspy reduce la selección manual de protocolos y facilita la incorporación de flotas mixtas.

## Transporte y contexto de conexión

El TK905 puede configurarse para usar UDP o TCP para reportar, según el soporte del dispositivo y la configuración elegida. Para la integración con Plaspy, los dispositivos deben apuntar al servidor y puerto de Plaspy para que los reportes lleguen al endpoint centralizado de ingesta.

- El dominio del servidor de Plaspy para reportes de dispositivos es d.plaspy.com.
- La IP del servidor de Plaspy es 54.85.159.138 y el puerto de escucha es 8888.
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según soporte y configuración del dispositivo.
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que una única configuración de salida funciona para flotas mixtas.
- Confirme el APN del rastreador, los datos móviles y el intervalo de reporte para asegurar que los mensajes puedan alcanzar d.plaspy.com o 54.85.159.138 con éxito.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware y las revisiones de hardware pueden cambiar el contenido exacto de los mensajes y los comandos soportados; verifique el comportamiento si los reportes no aparecen.
- Algunas unidades TK905 permiten alternar entre UDP y TCP; elija el transporte que coincida con las capacidades del equipo y las condiciones de red.
- Variaciones por parte del fabricante en comandos de configuración o ajustes predeterminados pueden requerir SMS o configuración local para apuntar el dispositivo a Plaspy.
- Valide el intervalo de reporte y la gestión de energía del dispositivo para equilibrar la duración de batería y la frecuencia de seguimiento requerida.
- Restricciones de red o del APN por parte del proveedor móvil pueden afectar la entrega de los mensajes de rastreo.
- Siempre contraste el comportamiento del dispositivo con la documentación oficial del fabricante cuando tenga dudas.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el TK905 ayuda a asegurar una configuración confiable, facilitar el diagnóstico y mantener una operación predecible a largo plazo al usar Plaspy. Saber qué transporte usa el dispositivo, cómo se identifica y qué eventos reporta permite a los administradores ajustar intervalos de reporte, alertas y configuraciones de energía según las necesidades operativas.

- Asegura que los dispositivos estén correctamente configurados para reportar al endpoint de Plaspy d.plaspy.com y al puerto correcto.
- Ayuda a diagnosticar por qué un dispositivo puede no aparecer en Plaspy debido a APN, selección de transporte o diferencias de firmware.
- Permite optimizar los intervalos de reporte para preservar la batería manteniendo la granularidad de rastreo requerida.
- Facilita la correspondencia consistente de IDs de dispositivo con activos para gestión de flotas e informes históricos.
- Reduce el tiempo de integración al clarificar lo que la plataforma espera de los mensajes entrantes del rastreador.

## Por qué usar Plaspy con este protocolo

Usar el TK905 con Plaspy brinda a las organizaciones un rastreo discreto y eficiente en consumo de batería junto con una plataforma centralizada para visualización de ubicación, alertas y telemetría básica. Plaspy recibe los reportes del dispositivo y los presenta mediante mapas y herramientas de historial para que los equipos operativos puedan monitorear el movimiento, responder a alarmas como exceso de velocidad o impactos, y mantener una auditoría concisa de los activos.

Si desea conocer más sobre cómo Plaspy trabaja con dispositivos como el TK905 y ver las capacidades de la plataforma, visite https://www.plaspy.com. El soporte de protocolos, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que le recomendamos verificar la información más reciente sobre el protocolo y el firmware del fabricante en https://www.lk-gps.com.

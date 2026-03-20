---
slug: /sentar/d31/protocol
id: d31-protocol
sidebar_label: Protocol
title: Sentar - D31 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para integrar el reloj GPS infantil Sentar D31 con los servidores Plaspy para seguimiento y alertas confiables
keywords:
  - Sentar D31
  - Protocolo Sentar D31
  - Protocolo GPS Sentar D31
  - Rastreador D31 Plaspy
  - Protocolo reloj GPS Sentar
  - Rastreadores compatibles con Plaspy
  - Comunicación rastreador GPS
  - Protocolo rastreador GPS infantil
  - Protocolo de seguimiento Plaspy
  - Comunicación Sentar D31
---

# Sentar - Protocolo D31

Esta página describe, en términos públicos y no sensibles, el contexto del protocolo para usar el reloj GPS infantil Sentar D31 con Plaspy. Se centra en cómo el dispositivo se comunica con los servidores de Plaspy a alto nivel para que integradores de sistemas, cuidadores y administradores comprendan el papel del protocolo de reporte al emparejar el D31 con la plataforma Plaspy.

El D31 es un dispositivo vestible 4G compacto que combina posicionamiento GNSS, A‑GPS, LBS y WiFi con conectividad celular y función SOS. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador; sin embargo, el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Resumen del protocolo

El protocolo de reporte del D31 es el mecanismo que permite al reloj enviar ubicación, estado y eventos a Plaspy para visibilidad en tiempo real y reproducción histórica. A grandes rasgos, el protocolo define cómo el dispositivo se identifica, cómo reporta posiciones y telemetría, y cómo se señalan eventos como alertas SOS al servidor remoto.

- Permite la identificación del dispositivo y el envío periódico de ubicación y telemetría a Plaspy.
- Transmite fuentes de posición como soluciones GNSS, datos asistidos y ubicaciones derivadas de la red para su visualización en mapas.
- Entrega indicadores de salud y estado del dispositivo como nivel de batería y estado de conectividad para monitoreo.
- Señala eventos de alta prioridad, como SOS o llamadas de emergencia, para que Plaspy genere alertas inmediatas.
- Soporta actualizaciones periódicas y mensajes basados en eventos para equilibrar la oportunidad de la información y la duración de la batería.

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones entrantes en un único endpoint compartido y detecta automáticamente el protocolo del rastreador cuando el dispositivo está configurado para reportar a ese endpoint. En la mayoría de los casos, los usuarios no necesitarán seleccionar manualmente el protocolo en Plaspy si el D31 está apuntando al servidor de Plaspy y usa el transporte soportado.

- El dominio del servidor Plaspy es d.plaspy.com, que es el nombre de host recomendado para el reporte de dispositivos.
- La IP del servidor Plaspy es 54.85.159.138 y puede usarse donde DNS esté restringido.
- El puerto es 8888, que es el puerto único que Plaspy utiliza para todos los dispositivos.
- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el equipo y las condiciones de red.
- Todos los dispositivos en Plaspy usan el mismo puerto y Plaspy detecta automáticamente el protocolo del rastreador cuando llegan los datos.
- Cuando está correctamente dirigido al endpoint de Plaspy, el D31 suele comenzar a reportar sin selección manual de protocolo en la interfaz de Plaspy.

## Contexto de transporte y conexión

El contexto de conexión trata sobre cómo el D31 alcanza a Plaspy y no sobre el formato interno de paquetes. El D31 soporta conectividad celular en 4G con redes de reserva y puede usar UDP o TCP según la configuración del dispositivo y el comportamiento de la red. Apuntar el dispositivo al endpoint correcto de Plaspy es el paso clave para una entrega confiable.

- Los dispositivos pueden configurarse para reportar al hostname d.plaspy.com o a la dirección 54.85.159.138.
- El dispositivo puede usar UDP o TCP en el puerto 8888 para reportar; elija el transporte soportado por la red y el firmware del dispositivo.
- Plaspy usa el mismo puerto para todos los rastreadores soportados, lo que simplifica la configuración entre modelos.
- La selección del transporte puede afectar la fiabilidad de entrega y el consumo de energía, pero no cambia la semántica general del reporte.
- Asegúrese de que la SIM del dispositivo y el plan celular permitan conexiones salientes al endpoint de Plaspy y de que los firewalls del operador habiliten el transporte elegido.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden introducir diferencias en los campos reportados, en la nomenclatura de eventos y en el comportamiento temporal, incluso para el mismo modelo.
- Las revisiones de hardware o variantes de SKU del D31 pueden habilitar o deshabilitar ciertos sensores o fuentes de posicionamiento.
- Las herramientas de configuración del fabricante o los ajustes por defecto pueden usar distintos transportes o endpoints; confirme que el dispositivo esté apuntando al endpoint de Plaspy.
- Las condiciones de red y las restricciones del operador pueden influir en si UDP o TCP funciona mejor en su despliegue.
- Firmware personalizado del fabricante o compilaciones específicas por región pueden alterar los intervalos de reporte o los campos de telemetría disponibles.
- Valide siempre el comportamiento del dispositivo con reportes en vivo hacia Plaspy y consulte la documentación oficial de Sentar para detalles específicos del dispositivo.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del D31 ayuda a garantizar que el dispositivo reporte de forma confiable a Plaspy, que las alertas lleguen a tiempo y que el comportamiento sea predecible frente a cambios de firmware y condiciones de red. Tener expectativas claras sobre lo que el rastreador envía y cómo lo recibe Plaspy reduce el tiempo de configuración y mejora la visibilidad operativa.

- Simplifica la configuración inicial al asegurar que el dispositivo apunte a d.plaspy.com o 54.85.159.138 en el puerto correcto.
- Facilita la resolución de problemas por reportes faltantes o retrasados al verificar la selección de transporte y la salud de la red del dispositivo.
- Aclara las expectativas sobre telemetría disponible como batería, estado de conectividad y eventos SOS.
- Ayuda a planear la autonomía de la batería y los intervalos de reporte según la frecuencia de transmisión del dispositivo.
- Permite una resolución más rápida cuando las actualizaciones de firmware cambian los campos reportados o la semántica de los eventos.

## Por qué usar Plaspy con este protocolo

Usar el Sentar D31 con Plaspy ofrece a cuidadores y administradores una forma unificada de monitorear la ubicación, recibir alertas de emergencia y revisar la salud del dispositivo desde una sola plataforma. El posicionamiento híbrido del D31 y su conectividad celular brindan visibilidad continua que Plaspy puede presentar como mapas en vivo, notificaciones de eventos y rutas históricas para apoyar flujos de trabajo de cuidado y supervisión.

Para saber más sobre Plaspy y cómo se integra con dispositivos como el D31 visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación específicos del dispositivo pueden cambiar con el tiempo, por lo que verifique la documentación actual del protocolo y las notas de firmware con el fabricante en http://www.sentarsmart.com/.

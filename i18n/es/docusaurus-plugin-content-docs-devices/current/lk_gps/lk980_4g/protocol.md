---
slug: /lk_gps/lk980_4g/protocol
id: lk980_4g-protocol
sidebar_label: Protocol
title: LK-GPS - LK980-4G Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo LK-GPS LK980-4G para integrar con Plaspy, ajustes de conexión y notas de compatibilidad
keywords:
  - protocolo LK-GPS LK980-4G
  - protocolo GPS LK980-4G
  - protocolo LK-GPS Plaspy
  - protocolo de comunicación LK980-4G
  - protocolo de rastreo LK980-4G
  - compatibilidad de dispositivos Plaspy
  - rastreo vehicular LK980-4G
  - gestión de flotas LK-GPS
  - guía de protocolo LK-GPS
  - protocolo de rastreador GPS Plaspy
---

# LK-GPS - Protocolo LK980-4G

Esta página describe el contexto público del protocolo para usar el rastreador LK-GPS LK980-4G con Plaspy. Resume cómo el dispositivo comunica posiciones, telemetría y eventos a la plataforma Plaspy, qué ajustes de conexión se usan públicamente y qué papel tiene el protocolo de reporte del equipo sin entrar en detalles sensibles de implementación.

El LK980-4G es un rastreador cableado y compacto con antenas GPS y GSM integradas y conectividad 4G LTE con retroceso a 2G. Plaspy emplea ajustes de conexión compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en información general útil públicamente y recomienda verificar con la documentación oficial del fabricante.

## Resumen del protocolo

El protocolo implementado por el LK980-4G regula cómo el rastreador se identifica ante un servidor, reporta ubicación y telemetría, y reenvía alarmas y eventos a Plaspy. En términos prácticos, el protocolo posibilita actualizaciones de posición oportunas, notificaciones de eventos como SOS o alertas por manipulación, y el manejo remoto de comandos cuando está disponible.

- Permite al rastreador enviar coordenadas GPS, marcas de tiempo y telemetría básica a Plaspy para mapeo y registro.
- Transmite notificaciones de eventos, incluyendo SOS, vibración o alertas por manipulación, y cambios de estado para la pronta atención del operador.
- Provee un canal para comandos y controles remotos cuando el dispositivo y el firmware del fabricante lo soportan, por ejemplo acciones de inmovilizador.
- Transporta identificación del dispositivo y datos de estado para que Plaspy asocie los mensajes entrantes con el vehículo o activo correcto.
- Soporta tanto reportes periódicos como mensajes disparados por eventos, de modo que las flotas puedan equilibrar frecuencia de informes y gestión de energía.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones de dispositivos en un punto final compartido y determina automáticamente el protocolo del rastreador, eliminando la necesidad de seleccionar manualmente el protocolo en la mayoría de las configuraciones. Cuando un LK980-4G configurado correctamente reporta al punto final de Plaspy, la plataforma asocia el flujo de datos entrante con el registro de dispositivo y la canalización de procesamiento correspondiente.

- Plaspy escucha en un único punto público d.plaspy.com para el reporte de dispositivos.
- La plataforma es accesible en la IP pública 54.85.159.138 para configuraciones con dirección IP directa.
- El puerto de red usado para las conexiones de los dispositivos es el 8888 y es el mismo para todos los equipos compatibles con Plaspy.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que usted normalmente no necesita seleccionar un protocolo manualmente en la plataforma.
- Los dispositivos configurados para reportar correctamente a d.plaspy.com o a 54.85.159.138 en el puerto 8888 serán procesados por Plaspy según el protocolo detectado.

## Transporte y configuración de conexión

Los parámetros de transporte y destino forman parte de la configuración pública necesaria para apuntar un LK980-4G a Plaspy. El rastreador puede estar configurado para usar UDP o TCP según la configuración del equipo y el soporte de firmware; ambos tipos de transporte son aceptados en el puerto del punto final de Plaspy.

- Los LK980-4G pueden usar UDP o TCP para reportar, dependiendo de la configuración y capacidades del firmware.
- Plaspy acepta conexiones en el puerto 8888 tanto para transporte UDP como TCP.
- Los dispositivos se pueden configurar para reportar al nombre DNS d.plaspy.com o directamente a la IP 54.85.159.138.
- El mismo número de puerto 8888 se utiliza en todos los dispositivos soportados por Plaspy, lo que simplifica la configuración.
- La selección de transporte afecta el comportamiento de entrega y puede elegirse según las características de la red y la configuración del equipo.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el formato de los reportes del LK980-4G y qué eventos se incluyen, por lo que confirme la compatibilidad para una versión de firmware específica.
- Las revisiones de hardware y los conjuntos de funciones opcionales pueden alterar entradas, salidas o el comportamiento de sensores que afectan lo que transmite el protocolo.
- Los métodos de configuración del fabricante, como SMS o ajustes por aplicación, pueden ser necesarios para apuntar el dispositivo a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Elegir UDP frente a TCP puede influir en la entrega, el comportamiento de retransmisión y los requisitos de firewall en su entorno.
- Plaspy detecta automáticamente el protocolo del dispositivo, pero una configuración correcta del equipo y campos de identificación precisos son esenciales para un mapeo fiable a su cuenta.
- Valide funciones críticas como comandos remotos de inmovilizador o campos especiales de telemetría contra la documentación del fabricante antes de utilizarlas operativamente.

## Por qué importa entender el protocolo

Conocer el protocolo de comunicación ayuda a instaladores y administradores a asegurar reportes confiables, resolver problemas de conectividad y verificar que los flujos de eventos y comandos funcionen como se espera con Plaspy. La claridad sobre transporte, punto final y semántica de eventos reduce el riesgo en las implementaciones y acelera la resolución cuando los dispositivos no aparecen en la plataforma.

- Asegura que los dispositivos estén configurados para apuntar a d.plaspy.com o 54.85.159.138 en el puerto 8888 y usen un transporte soportado.
- Ayuda a diagnosticar problemas a nivel de red, como puertos bloqueados, comportamiento NAT o restricciones del operador que afectan UDP o TCP.
- Permite al equipo confirmar qué eventos y campos de telemetría enviará el rastreador para alertas y reportes precisos.
- Orienta la planificación de actualizaciones de firmware cuando el fabricante introduce cambios o mejoras en el protocolo.
- Soporta el mapeo preciso de identificadores de dispositivo para que los mensajes entrantes se asocien con el vehículo o activo correcto.

## Por qué usar Plaspy con este protocolo

Para organizaciones que necesitan visibilidad continua, alertas oportunas y supervisión centralizada de flotas, combinar el LK980-4G con Plaspy ofrece una solución práctica de monitoreo. El hardware del equipo aporta 4G LTE con retroceso a 2G, antenas integradas y un conjunto de funciones de seguridad y telemetría como SOS, alertas por vibración o manipulación, función de escucha y soporte para inmovilizador remoto, mientras Plaspy proporciona ingestión centralizada, mapeo, alertas y reproducción histórica.

Plaspy acepta conexiones LK980-4G en un único puerto compartido y detecta automáticamente el protocolo del dispositivo, lo que simplifica despliegues a gran escala y la gestión de flotas heterogéneas. Para más información sobre la integración de dispositivos y las capacidades de la plataforma, visite el sitio de Plaspy en https://www.plaspy.com. Para detalles específicos del protocolo por dispositivo, comportamiento de firmware y orientación del fabricante, por favor verifique la información en el sitio oficial de LK GPS en https://www.lk-gps.com.

---
slug: /neomatica/adm_p50/protocol
id: adm_p50-protocol
sidebar_label: Protocol
title: Neomatica - ADM P50 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para integrar el Neomatica ADM P50 con Plaspy y lograr seguimiento y alertas confiables
keywords:
  - Protocolo Neomatica ADM P50
  - Protocolo GPS Neomatica ADM P50
  - Compatibilidad ADM P50 Plaspy
  - Protocolo de rastreo ADM P50
  - Protocolo de rastreador GPS Neomatica
  - Protocolo de comunicación ADM P50
  - Integración de dispositivos Plaspy
  - Rastreador de activos GPS Plaspy
  - Rastreador SOS ADM P50
  - Configuración Neomatica ADM P50
---

# Neomatica - Protocolo ADM P50

Esta página explica, a nivel público, el contexto del protocolo para usar el rastreador Neomatica ADM P50 con la plataforma Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy en términos generales, en los ajustes de conexión más habituales y en consideraciones prácticas para conectar, monitorear y solucionar problemas del ADM P50 sin exponer detalles implementacionales sensibles.

El ADM P50 es un rastreador GPS compacto alimentado por batería, diseñado con un chipset GNSS MT3333 compatible con GPS y GLONASS, y firmware optimizado para consumo energético con modos que van desde seguimiento en tiempo real hasta reportes de baja frecuencia. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto puede variar según la versión del firmware, la revisión de hardware y la implementación del fabricante. Verifique el comportamiento específico del equipo con la documentación de Neomatica cuando sea necesario.

## Resumen del protocolo

El protocolo de reporte del ADM P50 es el mecanismo por el cual el dispositivo envía posiciones, telemetría de movimiento y eventos, y actualizaciones de estado a Plaspy. En términos públicos, el protocolo permite que el rastreador se identifique, entregue datos GNSS y ubicaciones de respaldo (fallback), y transmita eventos discretos como pulsaciones de SOS, estados del acelerómetro y reportes de batería para la ingestión por los servicios de Plaspy.

- Proporciona información de identificación y sesión para que Plaspy asocie los datos con el dispositivo y la cuenta correctos.
- Transporta coordenadas GNSS y puntos LBS de respaldo usados para ubicación en tiempo real y reproducción histórica de rutas.
- Transmite mensajes de eventos y telemetría como alertas SOS, cambios de movimiento detectados por el acelerómetro y notificaciones de batería baja.
- Soporta modos de reporte periódicos o por evento para equilibrar la precisión de ubicación y la duración de la batería en Plaspy.
- Permite señales relacionadas con emparejamiento, como eventos de etiquetas Bluetooth para posicionamiento en interiores, que se reportan a la plataforma.

## Cómo Plaspy detecta el protocolo

Plaspy acepta conexiones en un único endpoint y puerto compartidos y realiza detección automática del protocolo en los reportes entrantes. Cuando el ADM P50 está configurado para reportar a Plaspy, la plataforma identifica el protocolo del rastreador a partir del patrón de conexión y los datos recibidos, por lo que normalmente no es necesario seleccionar el protocolo manualmente en la plataforma.

- Configure el host de reporte del dispositivo hacia Plaspy usando el dominio público d.plaspy.com o la dirección IP pública 54.85.159.138.
- Use el puerto 8888 para el envío de datos, que Plaspy emplea como puerto común para todos los dispositivos soportados.
- Plaspy admite la detección automática del protocolo cuando un ADM P50 correctamente configurado reporta al endpoint compartido.
- En la mayoría de los despliegues no es necesario seleccionar un protocolo dentro de Plaspy siempre que el dispositivo esté enviando datos al servidor de Plaspy.
- Confirme los intervalos de reporte y las opciones de eventos en el ADM P50 para asegurarse de que la plataforma reciba la telemetría y las alertas deseadas.

## Transporte y contexto de conexión

La elección del transporte determina cómo el ADM P50 envía datos a Plaspy, pero no altera el propósito general del protocolo. El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según sus capacidades y preferencias de configuración. Ambos modos de transporte son comunes en rastreadores alimentados por batería para equilibrar fiabilidad y consumo energético.

- El ADM P50 puede configurarse para usar UDP o TCP en el puerto 8888 para enviar datos a Plaspy.
- Los dispositivos pueden apuntar al servidor de Plaspy usando el nombre DNS d.plaspy.com o la IP 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica el despliegue y la configuración de cortafuegos.
- Elija UDP para menor overhead y posible ahorro de batería, o TCP para una mayor fiabilidad en la entrega según sus necesidades operativas y opciones de firmware.
- Asegúrese de que el tráfico saliente hacia el endpoint de Plaspy esté permitido desde la red del dispositivo y que los parámetros de APN y la SIM en el ADM P50 estén configurados correctamente.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden modificar el contenido de los mensajes, los tipos de eventos disponibles o los modos de reporte soportados; verifique la versión de firmware al validar el comportamiento.
- Las revisiones de hardware o accesorios opcionales, como la etiqueta Bluetooth ADM34, pueden añadir nuevas clases de eventos o cambiar campos de telemetría.
- La selección de transporte entre UDP y TCP puede afectar la semántica de entrega, pero no el propósito general del protocolo.
- Ajustes del fabricante como intervalos de reporte, modos de potencia y umbrales de LBS fallback pueden cambiar la frecuencia con la que Plaspy recibe actualizaciones.
- Siempre valide la compatibilidad con la documentación oficial de Neomatica para el ADM P50 al planear despliegues o actualizaciones.
- En caso de duda, confirme los parámetros de configuración del dispositivo y los registros de cambios del firmware antes de realizar despliegues a gran escala.

## Por qué es importante entender el protocolo

Comprender, a alto nivel, cómo se comunica el ADM P50 ayuda a asegurar una incorporación confiable, una interpretación precisa de la telemetría y una resolución de problemas efectiva cuando el dispositivo se usa con Plaspy. Saber qué tipos de datos puede enviar el rastreador y cómo se conecta a Plaspy facilita ajustar la configuración del equipo para alcanzar objetivos operativos sin necesidad de profundizar en detalles propietarios.

- Facilita la configuración correcta del dispositivo: intervalos de reporte, elección de transporte y direccionamiento del servidor para cumplir con los requerimientos operativos.
- Ayuda a diagnosticar problemas de conectividad y telemetría confirmando que el dispositivo apunta a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Mejora la gestión de la vida útil de la batería al elegir modos de reporte apropiados y comprender cómo los reportes por evento impactan el consumo.
- Garantiza que tipos de eventos como SOS, movimiento y señales de etiquetas Bluetooth sean reconocidos y enrutados por Plaspy para alertas y georreferenciación.
- Apoya la planificación de actualizaciones de firmware y cambios de funcionalidad alineando expectativas con la documentación del fabricante.

## Por qué usar Plaspy con este protocolo

Usar el ADM P50 con Plaspy ofrece a las organizaciones un seguimiento personal y de activos compacto y eficiente en consumo, integrado en una plataforma de monitoreo unificada. Plaspy ingiere datos GNSS y LBS, telemetría de movimiento y eventos, y alertas SOS desde el ADM P50 para proporcionar conocimiento situacional, reproducción histórica de rutas y alertas configurables para flujos de trabajo de seguridad y protección de activos.

Si desea saber más sobre la conexión de dispositivos Neomatica y cómo Plaspy gestiona los reportes de los dispositivos, visite https://www.plaspy.com. Para obtener los detalles más recientes sobre protocolos específicos del dispositivo, notas de firmware y guías de configuración, consulte al fabricante en https://neomatica.com/. El soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo, por lo que se recomienda revisar la documentación oficial de Neomatica antes del despliegue.

---
slug: /concox/ll302/protocol
id: ll302-protocol
sidebar_label: Protocol
title: Concox - LL302 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del rastreador GPS Concox LL302 y su comunicación con Plaspy, con notas sobre transporte y compatibilidad
keywords:
  - protocolo Concox LL302
  - protocolo GPS Concox LL302
  - compatibilidad LL302 Plaspy
  - protocolo de rastreo LL302
  - comunicación rastreador GPS LL302
  - protocolo rastreador de activos Concox
  - LL302 LTE Cat 1
  - compatibilidad Concox LL302 con Plaspy
  - rastreo vehicular LL302
  - protocolo de telemetría LL302
---

# Concox - Protocolo LL302

Esta página ofrece un contexto público del protocolo para usar el rastreador de activos GPS Concox LL302 con Plaspy. Resume cómo el dispositivo se comunica con Plaspy a nivel de conexión, qué papel desempeña el protocolo de reporte del rastreador en la entrega de datos y consideraciones prácticas de compatibilidad para una integración exitosa sin exponer detalles confidenciales del fabricante.

Plaspy utiliza ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo cuando el rastreador reporta al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según el firmware del dispositivo, la revisión de hardware (por ejemplo, las variantes LL302 E y LL302 L) y la implementación del fabricante, por lo que esta página se centra en el transporte y el contexto de compatibilidad de alto nivel que importan durante la configuración y la solución de problemas.

## Resumen del protocolo

A alto nivel, el protocolo de reporte LL302 es el mecanismo que traslada posiciones GNSS y telemetría de sensores desde el dispositivo hacia Plaspy. El protocolo permite que el rastreador se identifique, envíe actualizaciones de ubicación periódicas o por eventos y entregue eventos de sensores que Plaspy traduce en alertas y datos operativos.

- Permite la entrega periódica y por eventos de posiciones GNSS a Plaspy para seguimiento en tiempo real.
- Transporta telemetría de sensores como vibración del acelerómetro, eventos de manipulación por luz, estado del sensor hall y lecturas opcionales de temperatura y humedad.
- Proporciona información de identificación y estado que permite a Plaspy asociar los mensajes entrantes con el registro de activo correcto.
- Soporta distintos modos de reporte para equilibrar la frecuencia de actualizaciones y la autonomía de la batería, acorde con el diseño de larga duración del LL302.
- Actúa como la capa pública de interoperabilidad entre el hardware LL302 y el endpoint de ingestión de Plaspy.

## Cómo Plaspy detecta el protocolo

Plaspy está diseñado para aceptar telemetría de muchos modelos de rastreadores usando un endpoint de red consistente y para identificar automáticamente el protocolo usado por un dispositivo entrante. En la mayoría de los casos, un LL302 correctamente configurado que informe al endpoint de Plaspy será detectado y mapeado sin necesidad de seleccionar el protocolo manualmente dentro de Plaspy.

- Plaspy escucha en un endpoint compartido y un único puerto para todos los dispositivos compatibles, por lo que rara vez es necesario seleccionar el protocolo manualmente.
- Las conexiones entrantes dirigidas al endpoint de Plaspy se examinan y se asocian automáticamente con un protocolo de rastreador soportado.
- Si un LL302 está configurado para reportar a Plaspy y su firmware envía campos estándar de telemetría e identificación, Plaspy detectará y registrará el dispositivo.
- Normalmente usted solo necesita confirmar que el dispositivo reporta a la dirección correcta de Plaspy y que utiliza el modo de transporte apropiado.
- Al solucionar problemas de detección, revise el destino de reporte del dispositivo y verifique la accesibilidad de red hacia el endpoint de Plaspy.

## Contexto de transporte y conexión

El contexto de conexión abarca cómo el LL302 establece enlaces de red con Plaspy más que la estructura interna de los paquetes. El LL302 puede configurarse para enviar datos por UDP o TCP según las opciones del dispositivo y las capacidades del firmware. Plaspy acepta ambos transportes en el mismo puerto y endpoint compartido para simplificar la configuración del dispositivo.

- Los dispositivos pueden configurarse para reportar por UDP o TCP al puerto 8888 según el soporte del equipo y las preferencias de configuración.
- El dominio del servidor Plaspy para reporte de dispositivos es d.plaspy.com y la IP pública del servidor es 54.85.159.138.
- Plaspy usa el puerto 8888 para todos los dispositivos compatibles, por lo que el mismo puerto se aplica entre modelos y ayuda a estandarizar reglas de firewall y APN.
- Elija UDP para reportes con menor sobrecarga en algunos escenarios o TCP cuando se prefiera entrega confiable y el firmware del LL302 lo soporte.
- Verifique que el APN del dispositivo y el operador móvil permitan conexiones salientes al endpoint y puerto de Plaspy.

## Notas de compatibilidad del protocolo

- Las diferencias de firmware entre revisiones del LL302 pueden cambiar los campos de reporte disponibles y los disparadores de evento; confirme las notas de la versión del firmware con el fabricante.
- Las variantes de hardware LL302 E y LL302 L abarcan distintas bandas LTE regionales y pueden presentar ligeras diferencias en el comportamiento del protocolo relacionadas con el firmware regional.
- La selección de transporte entre UDP y TCP puede afectar la semántica de entrega y el perfil de consumo energético; revise los menús de configuración del dispositivo para ver los modos disponibles.
- Los ajustes por defecto del fabricante pueden no apuntar a Plaspy; generalmente deberá configurar el destino de reporte del dispositivo a d.plaspy.com o a la IP del servidor Plaspy.
- Parte de la telemetría de sensores opcional (temperatura, humedad) puede requerir instalación de periféricos y habilitación explícita en la configuración del dispositivo.
- Siempre valide la compatibilidad y los ajustes recomendados frente a la documentación de Concox para el modelo específico y la compilación de firmware.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación en un nivel alto ayuda a asegurar una configuración confiable, una ingestión precisa de telemetría y una solución de problemas eficiente cuando usa el LL302 con Plaspy. Saber qué transporte, destino y modos de reporte están en uso reduce errores de configuración y acorta el tiempo hasta tener seguimiento operativo.

- Asegura la configuración correcta del dispositivo para destino de reporte y transporte, de modo que Plaspy pueda detectar el rastreador automáticamente.
- Facilita la solución de problemas de conectividad al centrar la verificación en APN, el puerto saliente 8888 y la accesibilidad a d.plaspy.com o la IP del servidor Plaspy.
- Informa decisiones sobre frecuencia de reporte y perfiles de energía para equilibrar la vida útil de la batería y la oportunidad de las actualizaciones en despliegues de larga duración.
- Aclara expectativas sobre qué eventos de sensores estarán disponibles en Plaspy según el hardware instalado y las capacidades del firmware.
- Reduce el tiempo de integración al alinear la configuración del dispositivo con las suposiciones de red e ingestión de Plaspy.

## Por qué usar Plaspy con este protocolo

El Concox LL302 es adecuado para seguimiento de activos y vehículos a largo plazo gracias a su posicionamiento multisensor, montaje magnético robusto y batería de gran capacidad. Cuando el LL302 reporta su telemetría a Plaspy a través del endpoint y puerto compartidos de Plaspy, las organizaciones obtienen visibilidad en tiempo real, alertas por eventos e informes históricos útiles para operaciones de flota, flujos antirobo y monitoreo ambiental.

El modelo de endpoint compartido y la detección automática de protocolos de Plaspy simplifican la incorporación masiva de dispositivos LL302 sin sacrificar la capacidad de recibir fixes GNSS, alertas de manipulación y movimiento, y telemetría ambiental opcional. Para obtener más información sobre Plaspy y cómo puede ingerir telemetría LL302, visite https://www.plaspy.com. El soporte de protocolo y el comportamiento del dispositivo pueden cambiar con el tiempo debido a actualizaciones de firmware o revisiones del fabricante, por lo que es recomendable verificar los detalles específicos de modelo y firmware en el sitio de Concox https://www.iconcox.com/.

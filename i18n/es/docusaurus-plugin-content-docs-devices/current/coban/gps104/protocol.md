---
slug: /coban/gps104/protocol
id: gps104-protocol
sidebar_label: Protocol
title: Coban - GPS104 Protocol
sidebar_class_name: menu_item_tracker
description: Guía de protocolo público para usar el rastreador Coban GPS104 con Plaspy, incluye ajustes de conexión y consideraciones de compatibilidad
keywords:
  - protocolo Coban GPS104
  - protocolo GPS Coban GPS104
  - protocolo Coban GPS104 para Plaspy
  - protocolo de comunicación Coban GPS104
  - protocolo de seguimiento Coban GPS104
  - compatibilidad Coban GPS104 con Plaspy
  - seguimiento GPRS Coban GPS104
  - ajustes TCP UDP Coban GPS104
  - protocolo de rastreador Coban para Plaspy
  - integración dispositivo GPS104
---

# Coban - Protocolo GPS104

Esta página ofrece contexto público sobre el protocolo para usar el rastreador Coban GPS104 con la plataforma Plaspy. Explica cómo el dispositivo puede comunicarse con Plaspy, qué ajustes de conexión espera la plataforma y consideraciones prácticas para integrar dispositivos GPS104 en un entorno de monitoreo de flotas sin entrar en detalles de implementación privados.

El Coban GPS104 combina conectividad GSM GPRS con posicionamiento por satélite GPS y permite métodos de reporte configurables. Plaspy utiliza ajustes de conexión compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador. El comportamiento exacto y las funciones disponibles en un GPS104 concreto pueden variar según la versión de firmware, la revisión de hardware y la configuración del fabricante, por lo que se recomienda la verificación final con la documentación oficial del dispositivo.

## Resumen del protocolo

El protocolo que utiliza un Coban GPS104 define cómo el dispositivo se identifica ante un servidor, cómo se codifican y envían los informes de ubicación y estado, y cómo acepta configuraciones remotas cuando procede. En el contexto de Plaspy, la función pública del protocolo es entregar telemetría útil y oportuna a través de GPRS para que la plataforma en la nube pueda mostrar datos de ubicación y eventos a los usuarios.

- Permite que el GPS104 envíe posiciones e informes de estado desde el dispositivo hacia Plaspy
- Transporta información identificadora para que Plaspy asocie los mensajes con el registro de dispositivo correcto
- Transmite eventos de alarma y sensores, como SOS, batería baja y alertas de movimiento, en un formato legible para el procesamiento de Plaspy
- Soporta alternancia entre métodos de reporte por SMS y GPRS cuando el rastreador y la red lo permiten
- Permite la configuración remota o la actualización de parámetros cuando el fabricante y el firmware exponen esa capacidad

## Cómo detecta Plaspy el protocolo

Plaspy acepta tráfico entrante de dispositivos en un único endpoint y puerto compartidos y emplea detección automática para que la mayoría de los dispositivos correctamente configurados comiencen a reportar sin necesidad de seleccionar el protocolo manualmente. Cuando un GPS104 apunta al endpoint de Plaspy y usa el transporte soportado, Plaspy identificará el tipo de mensaje y convertirá los informes entrantes para su uso en la plataforma.

- Plaspy escucha en el endpoint compartido de servidor d.plaspy.com
- La plataforma también es accesible en la dirección IP 54.85.159.138 como alternativa al dominio
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy
- En configuraciones típicas, el usuario no necesita seleccionar manualmente un protocolo dentro de Plaspy si el dispositivo está configurado para reportar al endpoint de Plaspy

## Transporte y ajustes de conexión

La selección del transporte afecta la forma en que el Coban GPS104 envía datos a Plaspy. Las unidades GPS104 suelen soportar reportes tanto por UDP como por TCP sobre GPRS y pueden configurarse para usar el transporte que mejor se adapte a las necesidades de la red y la aplicación. Plaspy acepta dispositivos que usan cualquiera de los dos transportes cuando apuntan al endpoint y puerto compartidos de Plaspy.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según el soporte y la configuración del equipo
- Los dispositivos pueden apuntar al dominio d.plaspy.com o a la dirección IP numérica 54.85.159.138
- Plaspy espera el tráfico de dispositivos en el puerto 8888 y ese mismo puerto se usa para todos los dispositivos soportados
- La elección entre UDP y TCP puede afectar características de entrega como retransmisiones y comportamiento de sesión
- Verifique que el APN y los ajustes GPRS del dispositivo sean correctos para que el rastreador pueda alcanzar el endpoint de Plaspy a través de la red celular

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware del GPS104 pueden cambiar qué funciones y formatos de mensaje están disponibles
- Revisiones de hardware y variantes regionales pueden alterar los transportes soportados o los sensores opcionales
- Las opciones de configuración del fabricante pueden permitir alternar entre los modos de reporte por SMS y GPRS
- Algunas funciones listadas por el fabricante dependen del manejo en el servidor y de las características compatibles de la plataforma
- La elección del transporte UDP frente a TCP puede estar limitada por el comportamiento de la red o del operador en una región determinada
- Siempre valide una combinación específica de dispositivo y firmware con la documentación vigente del fabricante

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación que usa el GPS104 ayuda a asegurar una configuración confiable, un diagnóstico preciso y una operación consistente a largo plazo al integrar con Plaspy. Saber qué envía el dispositivo y cómo se conecta reduce el tiempo de resolución de problemas de reporte o configuración y ayuda a elegir los ajustes de red y servidor adecuados.

- Diagnóstico más rápido de problemas de conectividad al saber si el dispositivo usa TCP o UDP
- Mejor configuración del APN y de los intervalos de reporte para minimizar el tráfico GPRS y cumplir requisitos de monitoreo
- Expectativas claras sobre qué eventos y alarmas del dispositivo serán reenviados a Plaspy
- Validación más sencilla de que un dispositivo está correctamente identificado y asociado en la plataforma Plaspy
- Mejor planificación ante actualizaciones de firmware o cambios de hardware que puedan afectar el comportamiento del protocolo

## Por qué usar Plaspy con este protocolo

Usar el Coban GPS104 con Plaspy ofrece a las organizaciones una ruta práctica para obtener visibilidad de vehículos y activos mediante una plataforma en la nube que acepta métodos de reporte de rastreadores ampliamente usados. La combinación de funciones de seguimiento del GPS104, como seguimiento inteligente, alarmas y configuración remota de parámetros, puede mapearse en Plaspy para proporcionar monitoreo, alertas y datos históricos de posición.

Si desea evaluar Plaspy para sus dispositivos Coban GPS104 o comenzar con la integración, conozca más sobre la plataforma en https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que le recomendamos verificar la información de protocolo específica del dispositivo y las notas de firmware más recientes en el sitio del fabricante https://www.coban.net/.

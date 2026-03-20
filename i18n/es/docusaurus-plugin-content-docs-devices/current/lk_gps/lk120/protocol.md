---
slug: /lk_gps/lk120/protocol
id: lk120-protocol
sidebar_label: Protocol
title: LK-GPS - LK120 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para el rastreador LK-GPS LK120 y su integración con Plaspy, con ajustes de conexión y compatibilidad
keywords:
  - protocolo LK-GPS LK120
  - protocolo GPS LK-GPS LK120
  - integración LK-GPS LK120 Plaspy
  - protocolo de rastreo LK120
  - protocolo de comunicación LK120
  - protocolo para rastreador wearable LK-GPS
  - seguimiento SOS geocerca LK120
  - compatibilidad LK-GPS Plaspy
  - rastreador GPS LK120 protocolo
  - protocolo LK120 2G 4G
---

# LK-GPS - Protocolo LK120

Esta página presenta el contexto público del protocolo para usar el rastreador LK-GPS LK120 con Plaspy. Explica a alto nivel cómo se comunica el dispositivo, las configuraciones de conexión que acepta Plaspy y consideraciones prácticas relevantes al integrar un rastreador wearable 2G/4G en una plataforma centralizada. El contenido se concentra en detalles observables del protocolo y de conexión que son útiles para la configuración y resolución de problemas, sin abordar información sensible o formatos propietarios en detalle.

El LK120 es un rastreador compacto para llevar puesto, pensado para mascotas y uso personal, que ofrece seguimiento en tiempo real, alertas de geocerca y un botón SOS mediante redes celulares. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando este envía datos a la plataforma. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que conviene confirmar detalles específicos del modelo y firmware con el fabricante cuando sea necesario.

## Resumen del protocolo

A grandes rasgos, el protocolo del rastreador define cómo el LK120 informa ubicación, estado y eventos a un servidor remoto para que Plaspy pueda procesar y mostrar la telemetría. El protocolo es el puente entre los datos GPS y de estado generados por el dispositivo y las funciones de mapeo, alertas e informes de Plaspy. Esta página no documenta formatos de paquetes propietarios ni internals de parseo, pero describe el papel que cumple el protocolo en una integración exitosa.

- Permite transmisiones periódicas o por evento de coordenadas GPS, marcas de tiempo y banderas de estado hacia Plaspy
- Transporta notificaciones de eventos como pulsaciones de SOS, entrada y salida de geocercas, alertas de movimiento y batería baja
- Envía información identificadora para que Plaspy asocie los mensajes entrantes con el registro correcto del dispositivo
- Soporta entrega sobre capas de transporte comunes para que los dispositivos lleguen a Plaspy desde redes celulares
- Provee los elementos de telemetría que Plaspy utiliza para alimentar mapas en vivo, historiales de eventos y flujos de alertas

## Cómo detecta Plaspy el protocolo

Plaspy recibe el tráfico de los dispositivos en un endpoint y puerto compartidos y aplica detección automática para identificar el protocolo entrante. Cuando un LK120 está configurado para reportar a Plaspy, por lo general no es necesario seleccionar manualmente un protocolo dentro de la plataforma. La configuración correcta del dispositivo hacia el endpoint de Plaspy es el requisito típico para que la detección automática funcione.

- Plaspy acepta reportes de dispositivos en el dominio d.plaspy.com y en la IP pública 54.85.159.138
- Plaspy utiliza el puerto 8888 para todos los dispositivos soportados, de modo que un único puerto facilita la configuración
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y requisitos regionales
- Si el rastreador envía sus campos identificadores y de telemetría al endpoint de Plaspy, la plataforma detectará el protocolo automáticamente
- La selección manual del protocolo en la plataforma rara vez es necesaria cuando el dispositivo apunta correctamente y usa parámetros de transporte compatibles

## Transporte y contexto de conexión

El contexto de conexión se centra en cómo el LK120 alcanza a Plaspy más que en los detalles internos de los paquetes. El rastreador usa conectividad celular para enviar telemetría e informes de eventos a un servidor remoto. Para la integración con Plaspy, debe asegurarse de que el dispositivo apunte al endpoint de Plaspy soportado y utilice el transporte correcto según lo permitan el equipo y el entorno SIM/red.

- El LK120 puede configurarse para usar UDP o TCP en el puerto 8888 para enviar reportes a Plaspy
- Los dispositivos pueden apuntar al dominio del servidor Plaspy d.plaspy.com o directamente a la IP 54.85.159.138 según las opciones de configuración del equipo
- Plaspy usa el mismo puerto 8888 para todos los dispositivos soportados para simplificar la puesta en marcha entre distintos modelos
- Consideraciones de red como NAT del operador, reglas de firewall y ajustes de APN pueden afectar la conectividad y deben validarse durante la configuración
- Verifique que la SIM del dispositivo y el plan celular permitan datos salientes hacia el endpoint de Plaspy y que cualquier autenticación APN esté configurada correctamente

## Notas sobre compatibilidad del protocolo

- Las variaciones de firmware entre lotes de producción del LK120 pueden cambiar las funciones disponibles o la forma en que se reportan eventos específicos
- Las revisiones de hardware y las variantes regionales del dispositivo pueden habilitar o deshabilitar bandas celulares, afectando la disponibilidad y el comportamiento en red
- Los menús de configuración del fabricante a veces ofrecen tanto opciones de dominio como de IP; elija la opción recomendada por el manual del dispositivo para la integración con Plaspy
- La elección de transporte UDP frente a TCP puede influir en características de entrega como latencia y fiabilidad según las condiciones de la red
- Confirme que la versión de firmware del dispositivo en uso es conocida por interoperar con plataformas en la nube como Plaspy si requiere funciones específicas
- Valide los formatos de reportes de geocerca, SOS y batería baja contra la documentación del fabricante para asegurar que Plaspy pueda mapear esos eventos correctamente

## Por qué es importante entender el protocolo

Comprender cómo el LK120 se comunica con Plaspy ayuda a garantizar reportes confiables, una incorporación más ágil y una resolución de problemas más rápida cuando faltan eventos o el comportamiento difiere de lo esperado. Un conocimiento práctico del contexto de conexión, los tipos de eventos y las opciones de transporte reduce el tiempo de configuración y mejora la fiabilidad a largo plazo.

- Facilita la correcta configuración del dispositivo para que los mensajes lleguen a Plaspy en d.plaspy.com o 54.85.159.138 por el puerto 8888
- Ayuda a diagnosticar problemas de conectividad relacionados con la elección entre UDP y TCP y el comportamiento de las redes de los operadores
- Permite confirmar si un evento observado corresponde a una capacidad del dispositivo o a un comportamiento específico del firmware
- Apoya decisiones informadas al actualizar firmware o cambiar variantes de hardware
- Reduce el tiempo de resolución cuando alertas de geocerca, eventos SOS o reportes de batería no aparecen en Plaspy

## Por qué usar Plaspy con este protocolo

Usar el LK-GPS LK120 con Plaspy ofrece a organizaciones y propietarios visibilidad centralizada de rastreadores wearables para mascotas y seguridad personal. Plaspy ingiere la ubicación y los datos de eventos del LK120 para que los usuarios reciban vistas en tiempo real, historiales y eventos que facilitan la recuperación, la seguridad y los flujos operativos. La combinación de un rastreador pequeño y una plataforma en la nube es adecuada para refugios, monitoreo de activos pequeños, dueños de mascotas y equipos de campo que necesitan telemetría sin fricciones.

Plaspy acepta reportes en d.plaspy.com y en 54.85.159.138 por el puerto 8888 y detecta automáticamente el protocolo del rastreador cuando el dispositivo apunta a ese endpoint. Para saber más sobre Plaspy y cómo funciona con dispositivos como el LK120, visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y la documentación del fabricante pueden cambiar con el tiempo, por lo que verifique los detalles específicos del dispositivo y las notas de firmware más recientes con el fabricante en https://www.lk-gps.com.

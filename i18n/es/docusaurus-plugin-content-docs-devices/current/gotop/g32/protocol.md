---
slug: /gotop/g32/protocol
id: g32-protocol
sidebar_label: Protocol
title: GOTOP - G32 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo GOTOP G32 y cómo el dispositivo comunica ubicaciones a Plaspy para seguimiento confiable de mascotas
keywords:
  - protocolo GOTOP G32
  - protocolo GPS GOTOP G32
  - protocolo de comunicación GOTOP G32
  - protocolo de rastreo GOTOP G32
  - rastreador GOTOP Plaspy
  - protocolo rastreador GPS mascotas
  - compatibilidad G32 Plaspy
  - integración GOTOP G32
  - guía protocolo rastreador GPS
  - conectividad G32
---

# GOTOP - Protocolo G32

Esta página describe el contexto público del protocolo para usar el rastreador GOTOP G32 con Plaspy. Explica, a alto nivel, cómo el G32 comunica ubicaciones y eventos a Plaspy y qué esperar al integrar el dispositivo. La información se centra en el contexto de conexión y protocolo que es seguro publicar y que ayuda a usuarios técnicos e integradores a comprender el papel del protocolo del rastreador para entregar telemetría útil a una plataforma central.

El G32 es un rastreador compacto para mascotas diseñado para gatos y perros que soporta reportes por SMS y 4G, posicionamiento asistido por AGPS, reenvío de datos acumulados en zonas sin cobertura y alarmas configurables. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo está correctamente apuntado a Plaspy. El comportamiento exacto del protocolo y el contenido de los mensajes pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que los detalles específicos del dispositivo deben validarse con la documentación de GOTOP cuando sea necesario.

## Resumen del protocolo

El protocolo de reporte del G32 es el mecanismo del dispositivo que transmite posición, estado y eventos de alarma desde el rastreador hacia un servidor remoto como Plaspy. En la práctica, el protocolo permite que el rastreador se identifique, entregue marcas de tiempo y coordenadas, e incluya banderas de evento que el servidor puede interpretar como geocerca, movimiento, batería baja u otras alertas. El protocolo también admite el almacenamiento temporal y la re-subida posterior de puntos cuando se restablece la conectividad para preservar la continuidad.

- Permite la transmisión de datos de ubicación y eventos desde el G32 hacia un endpoint remoto para visualización y almacenamiento en tiempo real.
- Transporta información de identificación para que Plaspy asocie los reportes entrantes con el registro de dispositivo correcto.
- Transmite banderas de alarma y telemetría como activaciones de geocerca, eventos de movimiento y estado de batería para notificaciones inmediatas.
- Soporta funciones de continuidad de datos, como la re-subida tras zonas sin señal, para reconstruir trayectos históricos después de pérdidas de cobertura.
- Opera sobre la capa de transporte del dispositivo para que Plaspy ingiera los mensajes y los presente en mapas, líneas de tiempo y flujos de alertas.

## Cómo Plaspy detecta el protocolo

Plaspy acepta conexiones entrantes de dispositivos en un endpoint común y utiliza detección automática de protocolo para que la mayoría de usuarios no tengan que seleccionar un protocolo manualmente. Cuando un G32 está configurado para reportar a Plaspy, la plataforma inspecciona la sesión entrante y mapea el dispositivo a las reglas de procesamiento adecuadas. Esta detección automática simplifica la configuración para equipos que despliegan muchos modelos de dispositivos distintos.

- Plaspy acepta reportes en el dominio d.plaspy.com y en la IP del servidor 54.85.159.138.
- La plataforma escucha en el puerto 8888 y usa el mismo puerto para todos los dispositivos compatibles.
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según las capacidades del modelo y sus ajustes.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo está correctamente apuntado al endpoint de Plaspy.
- En la mayoría de los casos usted no necesita seleccionar un protocolo dentro de Plaspy si el rastreador está reportando a d.plaspy.com en el puerto configurado.

## Transporte y contexto de conexión

Los detalles de conexión determinan cómo el G32 envía sus mensajes de reporte a Plaspy y con qué fiabilidad llegan esos mensajes. El G32 soporta modos de reporte celular y puede configurarse para usar el transporte de red que mejor se adapte al despliegue. Elegir el transporte y la dirección de destino correctos es una parte importante de la integración exitosa del dispositivo con Plaspy.

- El G32 puede configurarse para enviar datos vía UDP o TCP en el puerto 8888 según el firmware y la configuración.
- Al apuntar el dispositivo a Plaspy, los equipos pueden usar el dominio d.plaspy.com o la dirección numérica del servidor 54.85.159.138.
- El puerto 8888 es el puerto compartido en escucha que Plaspy usa para todos los modelos de dispositivos para simplificar la configuración.
- Usar el APN y los ajustes celulares correctos en el dispositivo asegura que los paquetes se enruten a Plaspy de forma fiable sobre el transporte elegido.
- Si el dispositivo acumula puntos durante pérdida de señal, re-subirá los datos almacenados cuando la conectividad celular se restablezca para que Plaspy pueda recuperar los trayectos completos.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el contenido de los mensajes, los campos disponibles y los transportes soportados; valide la versión de firmware del G32 al solucionar problemas de compatibilidad.
- Las revisiones de hardware o variantes de SKU pueden afectar qué transportes o funciones están disponibles en una unidad específica.
- Algunas implementaciones del G32 pueden depender de respaldo por SMS o de reenvío por la nube del fabricante además del reporte IP directo; verifique cómo está configurada su unidad para reportar.
- La selección entre UDP y TCP puede influir en las garantías de entrega y debe coincidir con las capacidades del dispositivo y las condiciones de la red.
- El puerto compartido y la detección automática de Plaspy reducen la necesidad de selección manual de protocolo, pero los ajustes de destino en el dispositivo deben apuntar a Plaspy.
- Siempre contraste los ajustes del dispositivo y los identificadores de dispositivo en la cuenta de Plaspy para asegurar que los reportes entrantes se asocien con el registro de dispositivo previsto.

## Por qué es importante entender el protocolo

Comprender de forma práctica el protocolo de comunicación del G32 ayuda a poner los dispositivos en línea rápidamente, diagnosticar problemas de reporte y asegurar datos históricos consistentes. Saber cómo reporta el dispositivo y qué dispara las alarmas facilita confirmar el comportamiento correcto en Plaspy e interpretar con precisión alertas e historial de ubicaciones.

- Acelera la puesta en marcha inicial al asegurar que los dispositivos apunten a d.plaspy.com o 54.85.159.138 en el puerto 8888 utilizando un transporte aprobado.
- Ayuda a aislar problemas de conectividad entre el dispositivo, la red celular y Plaspy cuando los reportes faltan o llegan con retraso.
- Aclara por qué los puntos almacenados y la re-subida tras zonas sin señal son importantes para reconstruir el historial de movimiento después de interrupciones.
- Facilita validar que los tipos de alarma del dispositivo aparezcan correctamente en las reglas de notificación de Plaspy.
- Permite tomar decisiones informadas sobre la ubicación del dispositivo, la selección del APN y las actualizaciones de firmware para mantener telemetría confiable.

## Por qué usar Plaspy con este protocolo

Usar el G32 junto con Plaspy ofrece una forma práctica de centralizar el rastreo de mascotas, las alarmas y la reproducción histórica en una sola plataforma. Plaspy agrega las actualizaciones de ubicación y los eventos del G32, lo que facilita gestionar reglas de geocerca, alertas de movimiento y notificaciones de batería baja para un dispositivo o para flotas a escala. Para propietarios de mascotas y pequeñas operaciones que necesitan visibilidad confiable, la combinación de las funciones de hardware del G32 y las capacidades de la plataforma Plaspy ofrece monitoreo práctico sin configuraciones complejas.

Para saber más sobre Plaspy y cómo maneja la conectividad de dispositivos y alertas, visite https://www.plaspy.com. Para el comportamiento más reciente específico del protocolo del dispositivo, notas de firmware e instrucciones de configuración del fabricante, verifique los detalles en el sitio de GOTOP https://www.gotop.cc/ ya que las implementaciones y el firmware pueden cambiar con el tiempo.

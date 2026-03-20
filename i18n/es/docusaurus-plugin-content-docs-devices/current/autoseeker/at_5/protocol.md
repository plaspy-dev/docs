---
slug: /autoseeker/at_5/protocol
id: at_5-protocol
sidebar_label: Protocol
title: Autoseeker - AT-5 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo del rastreador Autoseeker AT-5 y cómo se comunica con Plaspy para integrar dispositivos
keywords:
  - protocolo Autoseeker AT-5
  - Autoseeker AT-5 GPS
  - protocolo Autoseeker Plaspy
  - protocolo de rastreo AT-5
  - compatibilidad rastreador GPS AT-5
  - protocolo GPS Autoseeker
  - protocolo de comunicación AT-5
  - compatibilidad de dispositivos Plaspy
  - rastreo vehicular Autoseeker
  - rastreador magnético de activos AT-5
---

# Autoseeker - Protocolo AT-5

Esta página describe el contexto público del protocolo para usar el rastreador Autoseeker AT-5 con Plaspy. Aquí se explica, a un nivel general, cómo el dispositivo envía posiciones y eventos a Plaspy y qué considerar al configurar el equipo para el reporte en la nube. El AT-5 es un rastreador magnético 4G para activos, con múltiples modos de posicionamiento (GPS y Beidou), asistencia por WiFi y LBS, batería de alta capacidad y varios alarmas que generan eventos reportables.

Plaspy utiliza configuraciones compartidas de conexión para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando este informa al endpoint de Plaspy. El comportamiento del AT-5 puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por eso Plaspy acepta conexiones usando el mismo servidor y puerto, aunque el timing y el contenido exacto de los mensajes pueden diferir entre dispositivos y compilaciones de firmware.

## Resumen del protocolo

El protocolo de comunicación del AT-5 define cómo el rastreador envía muestras de posición, actualizaciones de estado y eventos de alarma a un servidor remoto, y cómo se manejan comandos remotos o acuses de recibo cuando están soportados. Para la integración con Plaspy, el contexto público del protocolo se centra principalmente en el direccionamiento y el transporte más que en los formatos internos de paquete.

- Permite que el AT-5 informe ubicaciones periódicas y actualizaciones por evento como SOS, vibración o batería baja.
- Hace posible que el rastreador incluya información identificadora para que Plaspy asocie los reportes entrantes con la instancia de dispositivo correcta.
- Transporta datos de estado y sensores que Plaspy convierte en telemetría, alertas e historial útil para monitoreo.
- Soporta múltiples métodos de posicionamiento reportados por el dispositivo, de modo que Plaspy pueda mostrar el tipo de fix más adecuado.
- Genera notificaciones por alarmas y movimiento que son importantes para monitoreo en tiempo real y análisis histórico.

## Cómo detecta Plaspy el protocolo

Plaspy detecta automáticamente los protocolos de los dispositivos una vez que el rastreador está configurado para reportar al endpoint de la red Plaspy. En la mayoría de configuraciones comunes, el usuario no necesita seleccionar un protocolo dentro de Plaspy siempre que el dispositivo esté apuntando al servidor y puerto de Plaspy.

- Los dispositivos deben configurarse para reportar al dominio del servidor de Plaspy d.plaspy.com o a la IP 54.85.159.138.
- Plaspy escucha en el puerto 8888 y todos los dispositivos soportados usan el mismo puerto para reportar.
- El AT-5 puede estar configurado para usar transporte UDP o TCP hacia Plaspy en el puerto 8888 según la configuración del dispositivo.
- Una vez que un dispositivo empieza a reportar al endpoint de Plaspy, la plataforma asociará los datos entrantes con el dispositivo correspondiente sin requerir una selección manual de protocolo.
- Dado que los fabricantes pueden modificar el contenido incremental de los mensajes, la detección de Plaspy se centra en el direccionamiento y el comportamiento de sesión más que en exponer detalles internos del dispositivo.

## Contexto de transporte y conexión

El contexto de conexión describe cómo el AT-5 alcanza la red de Plaspy y qué opciones de transporte son las más usadas. El AT-5 soporta reporte celular y puede configurarse para apuntar a un host o dirección IP de red y un protocolo de transporte.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 para enviar reportes a Plaspy.
- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138 para direccionamiento directo.
- Todos los dispositivos en Plaspy usan el mismo puerto y ese puerto es 8888 para datos entrantes de rastreadores.
- La elección entre UDP y TCP puede afectar el comportamiento de entrega y debe decidirse según las capacidades del firmware y las condiciones de red.
- Asegúrese de que el APN y la configuración de la SIM en el AT-5 sean correctos para que el dispositivo pueda alcanzar d.plaspy.com o 54.85.159.138 a través de la red celular.

## Notas sobre compatibilidad de protocolo

- Las revisiones de firmware pueden cambiar la frecuencia de reporte del AT-5 o qué campos se incluyen en los reportes; verifique las notas de firmware al solucionar problemas.
- Revisiones de hardware y funciones opcionales como posicionamiento asistido por WiFi o sensores adicionales pueden modificar la telemetría disponible.
- Las configuraciones aplicadas por el fabricante pueden presentar variaciones del protocolo según región o configuración de fábrica; revise los menús de configuración del dispositivo.
- La selección de transporte entre UDP y TCP puede verse limitada por el firmware del dispositivo y por el comportamiento de la red móvil.
- Siempre valide la compatibilidad probando un dispositivo contra el endpoint de Plaspy en un entorno controlado antes del despliegue masivo.
- Confirme que el dispositivo esté configurado para usar el dominio o la IP del servidor Plaspy y el puerto correcto para evitar problemas de conectividad.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el AT-5 ayuda a asegurar una integración fluida, seguimiento confiable y una resolución eficiente de problemas cuando los dispositivos se despliegan a escala. Conocer las expectativas de transporte y direccionamiento reduce el tiempo de configuración y mejora la respuesta ante incidentes.

- Ayuda a confirmar que el equipo apunta a d.plaspy.com o a 54.85.159.138 y usa el puerto 8888 según lo requerido por Plaspy.
- Facilita la interpretación de eventos reportados como SOS, exceso de velocidad o alertas de manipulación en el contexto correcto.
- Permite diagnosticar más rápido problemas de conectividad revisando la selección UDP vs TCP y la alcanzabilidad celular.
- Apoya la planificación de actualizaciones de firmware o cambios de hardware que puedan alterar el comportamiento de reporte.
- Reduce el tiempo de despliegue de flotas al garantizar que la configuración de los dispositivos coincida con los requisitos compartidos de conexión de Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el Autoseeker AT-5 con Plaspy ofrece a las organizaciones una vía práctica para captar ubicaciones, estados y eventos de alarma desde un rastreador magnético compacto para activos. La plataforma de Plaspy acepta reportes en un único puerto compartido y detecta automáticamente los protocolos reportados por los dispositivos, de modo que los equipos puedan concentrarse en la operación en lugar de en la configuración de bajo nivel del protocolo.

Si desea obtener más información sobre cómo Plaspy puede trabajar con dispositivos como el Autoseeker AT-5, visite https://www.plaspy.com para explorar las funciones y la documentación de la plataforma. Tenga en cuenta que el soporte de protocolos, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que conviene verificar la información más reciente específica del dispositivo y las notas de firmware en el sitio del fabricante https://autoseekergps.com/ antes de un despliegue a gran escala.

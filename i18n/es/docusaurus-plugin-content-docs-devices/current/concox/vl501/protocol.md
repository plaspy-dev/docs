---
slug: /concox/vl501/protocol
id: vl501-protocol
sidebar_label: Protocol
title: Concox - VL501 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del rastreador Concox VL501 y su comunicación con Plaspy para seguimiento de flotas e integración
keywords:
  - Protocolo Concox VL501
  - Protocolo GPS Concox VL501
  - Compatibilidad Concox VL501 Plaspy
  - Protocolo rastreador GPS Concox
  - Protocolo de comunicación VL501
  - VL501 rastreador Plaspy
  - Seguimiento vehicular Concox VL501
  - Gestión de flotas VL501 Plaspy
  - Protocolo telemetría GPS Concox
  - Compatibilidad dispositivos Plaspy
---

# Concox - Protocolo VL501

Esta página ofrece una visión pública del protocolo usado por el Concox VL501 en su integración con la plataforma Plaspy. Se centra en el contexto de comunicación y las consideraciones prácticas necesarias para que el VL501 reporte ubicación, telemetría y eventos a Plaspy, sin exponer detalles internos del firmware ni implementaciones sensibles. El VL501 es un rastreador LTE plug and play que envía posición GNSS, eventos de sensores y telemetría Bluetooth a través de redes celulares; aquí se describe cómo se integra con Plaspy.

Plaspy utiliza configuraciones de conexión compartidas para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo informa al endpoint de Plaspy. El comportamiento exacto en el dispositivo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página explica el contexto público y de alto nivel del protocolo, a la vez que recomienda verificar la documentación del fabricante y las notas de versión del firmware.

## Resumen del protocolo

El protocolo de comunicación del rastreador define cómo el VL501 se identifica ante un servidor, envía reportes de posición y eventos de sensores, y sube datos almacenados tras interrupciones de conectividad. Con Plaspy, el protocolo permite entregar localizaciones GPS, notificaciones de movimiento y eventos, y estado del dispositivo para que la plataforma pueda mostrar seguimiento en tiempo real y reportes históricos.

- Permite que el VL501 informe posición GNSS y telemetría a un servidor remoto para que Plaspy muestre ubicación en vivo y reproducción.
- Entrega notificaciones de eventos como colisiones, desconexión, batería baja, geocercas y SOS para que Plaspy dispare alertas y flujos de trabajo.
- Soporta subida de datos en búfer tras periodos de conectividad intermitente, de modo que los datos históricos se sincronicen con Plaspy cuando se restablece la conexión.
- Facilita la identificación del dispositivo y el reporte de estado para que Plaspy asocie los mensajes entrantes con el registro de activo correcto.
- Permite acciones de gestión remota del dispositivo cuando están soportadas, como sincronización de configuración y coordinación de actualizaciones de firmware.

## Cómo detecta Plaspy el protocolo

Plaspy ofrece un endpoint y puerto compartidos para el reporte de dispositivos y detecta automáticamente el protocolo cuando un VL501 está configurado para reportar a la plataforma. En la mayoría de los despliegues, los usuarios no necesitan seleccionar manualmente un protocolo dentro de Plaspy si el dispositivo apunta correctamente al servidor de Plaspy.

- Los dispositivos deben configurarse para reportar al dominio del servidor de Plaspy d.plaspy.com o a la IP 54.85.159.138 para que Plaspy reciba los mensajes entrantes.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto de reporte, que es el 8888, lo que simplifica la configuración en flotas.
- Plaspy detecta automáticamente el protocolo del rastreador y asocia los mensajes entrantes con el dispositivo correcto, reduciendo la necesidad de selección manual.
- La configuración adecuada del dispositivo en el lado del rastreador (APN, elección de transporte y dirección del servidor) suele ser el requisito principal para una detección automática exitosa.
- Si no se reciben mensajes, verifique que el dispositivo apunte al endpoint de Plaspy y que el proveedor celular y las reglas de firewall permitan tráfico saliente hacia el servidor y puerto de Plaspy.

## Transporte y contexto de conexión

El VL501 puede configurarse para usar transporte UDP o TCP según el soporte del dispositivo y la elección de configuración. Plaspy acepta reportes sobre el puerto compartido, por lo que las consideraciones principales de transporte son asegurar que el rastreador use la dirección de servidor correcta y que la infraestructura de red permita que el transporte elegido llegue a Plaspy.

- El dominio del servidor de Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138 para uso por IP directa.
- El puerto de reporte utilizado por todos los dispositivos soportados por Plaspy es 8888 y el VL501 puede configurarse para usar UDP o TCP en ese puerto.
- Elija UDP o TCP en el dispositivo según las opciones del firmware y el equilibrio deseado entre simplicidad y garantías de entrega.
- Asegúrese de que el APN del dispositivo y el plan del operador permitan conexiones salientes al servidor de Plaspy y que las reglas de NAT o firewall no bloqueen el puerto 8888.
- Para la configuración inicial suele ser útil probar la conectividad usando el dominio del servidor y confirmar que los mensajes llegan a Plaspy antes de un despliegue masivo.

## Notas de compatibilidad del protocolo

- Las versiones de firmware pueden introducir diferencias en la tasa de reporte, la estructura de las cargas útiles de eventos y los transportes soportados; consulte las notas de versión del firmware del VL501 para detalles específicos.
- Las revisiones de hardware y las variantes regionales pueden afectar el rendimiento GNSS, las bandas LTE y características disponibles como el micrófono o el comportamiento del Bluetooth.
- La selección de transporte entre UDP y TCP debe coincidir con la configuración del dispositivo; usar el transporte incorrecto impedirá que los mensajes lleguen a Plaspy.
- Las opciones de configuración del fabricante, como intervalos de reporte, umbrales de eventos y comportamiento de buffering, pueden influir en cómo y cuándo el VL501 envía datos a Plaspy.
- Valide el reporte del dispositivo en un vehículo de prueba controlado o en un piloto pequeño antes de desplegar en toda la flota.
- Confirme con la documentación del fabricante cualquier variante regional del dispositivo y las limitaciones regulatorias antes de un despliegue a gran escala.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el VL501 ayuda a asegurar una configuración fiable, acelerar la resolución de problemas y garantizar un funcionamiento predecible a largo plazo con Plaspy. Aunque Plaspy detecta el protocolo automáticamente, conocer el comportamiento de conexión y eventos del rastreador facilita diagnosticar problemas y ajustar la configuración para una flota.

- Ayuda a diagnosticar fallas de reporte revisando transporte, dirección del servidor y ajustes APN en el dispositivo.
- Aclara cómo se reportan eventos como colisiones, alertas por desconexión y SOS para que las reglas y notificaciones en Plaspy se configuren correctamente.
- Orienta las decisiones sobre intervalos de reporte y buffering para equilibrar uso de datos, consumo de batería y frescura de posiciones.
- Facilita la planificación de mantenimiento de firmware, actualizaciones OTA y despliegues coordinados entre dispositivos.
- Reduce el tiempo de integración al alinear la configuración del dispositivo con las expectativas de Plaspy antes del despliegue masivo.

## Por qué usar Plaspy con este protocolo

Usar el Concox VL501 con Plaspy ofrece a las organizaciones visibilidad en tiempo real y alertas basadas en eventos con un esfuerzo de instalación mínimo. El diseño plug and play del VL501, su GNSS multiconstelación, sensores de movimiento integrados, soporte Bluetooth y buffering local lo hacen adecuado para despliegues rápidos donde el seguimiento fiable y la notificación son prioridades. En combinación con Plaspy, el VL501 puede alimentar paneles de flota, notificaciones de incidentes y reportes históricos que ayudan a los equipos operativos y de seguridad a actuar sobre la telemetría.

Para obtener más información sobre Plaspy y cómo la plataforma gestiona el reporte de dispositivos, visite https://www.plaspy.com. El soporte de protocolos, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo; por favor verifique la documentación específica del dispositivo y las notas de firmware más recientes en el sitio del fabricante https://www.iconcox.com/ para obtener la información más actualizada.

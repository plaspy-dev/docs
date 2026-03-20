---
slug: /tzone/tz_avl19/protocol
id: tz_avl19-protocol
sidebar_label: Protocol
title: TZone - TZ-AVL19 Protocol
sidebar_class_name: menu_item_tracker
description: Visión general del protocolo público del rastreador TZone TZ-AVL19 y su comunicación con Plaspy para seguimiento confiable de flotas
keywords:
  - protocolo TZone TZ-AVL19
  - TZone TZ-AVL19 GPS
  - integración TZ-AVL19 Plaspy
  - protocolo rastreador GPS TZone
  - compatibilidad seguimiento TZ-AVL19
  - protocolo de dispositivo Plaspy
  - seguimiento vehicular TZ-AVL19
  - gestión de flotas TZone
  - TZ-AVL19 GPRS GPS
  - comunicación rastreador TZone
---

# TZone - Protocolo TZ-AVL19

Esta página describe el contexto público del protocolo para usar el rastreador GPS TZone TZ-AVL19 con la plataforma Plaspy. Explica, a un nivel general, cómo el dispositivo informa ubicación, eventos y estado a Plaspy, y qué aspectos de la comunicación del rastreador son relevantes al integrar o solucionar problemas del equipo. El objetivo es ofrecer orientación práctica sin exponer detalles privados de implementación.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138. El puerto es 8888 y el dispositivo puede configurarse con UDP o TCP en ese puerto. Todos los dispositivos en Plaspy usan el mismo puerto. El comportamiento exacto de los paquetes y la disponibilidad de funciones pueden variar según el firmware, la revisión de hardware y la implementación del fabricante del TZ-AVL19, por lo que usted debe verificar las opciones específicas del equipo al configurar un rastreador.

## Visión general del protocolo

El protocolo de comunicación define cómo el TZ-AVL19 informa posición, alarmas, estados de entradas y telemetría a un servidor remoto para que la plataforma de flotas como Plaspy pueda procesar esos datos. En términos generales, el protocolo es el lenguaje que utiliza el dispositivo para entregar información oportuna y útil sobre la ubicación y el estado del vehículo.

- Permite reportes de posición periódicos o por eventos, tanto para posiciones únicas como para modos de rastreo continuo.
- Codifica eventos y alarmas como exceso de velocidad, geocerca, SOS, temblor, estacionamiento y batería baja para su procesamiento en el servidor.
- Transporta indicadores discretos de control y estado del vehículo, por ejemplo puerta abierta/cerrada y motor encendido/apagado, para soportar monitoreo o acciones remotas.
- Soporta múltiples métodos de transporte para que el dispositivo envíe datos por GPRS usando TCP o UDP y, cuando procede, haga retroceso a SMS.
- Permite transmitir telemetría y datos de sensores opcionales cuando están disponibles, por ejemplo nivel de combustible, sensores de temperatura y eventos del acelerómetro.

## Cómo detecta Plaspy el protocolo

Plaspy acepta conexiones en un único endpoint compartido y determina automáticamente qué protocolo de rastreador se está usando para los datos entrantes. Cuando un TZ-AVL19 está configurado para reportar al endpoint de Plaspy, la plataforma asignará los mensajes entrantes a un manejador compatible, por lo que normalmente no es necesaria la selección manual de protocolo dentro de Plaspy.

- El dominio del servidor Plaspy es d.plaspy.com, que los dispositivos pueden usar como host de reporte.
- La IP del servidor Plaspy es 54.85.159.138 y los dispositivos pueden apuntar a esta dirección si no se utiliza DNS.
- El puerto es 8888 y es el puerto común que Plaspy usa para todas las conexiones de dispositivos.
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según lo que el firmware y la red permitan.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que los usuarios normalmente no necesitan seleccionar un protocolo en la plataforma si el dispositivo está enviando al endpoint correcto de Plaspy.

## Contexto de transporte y conexión

El contexto de conexión es un detalle práctico importante al configurar un TZ-AVL19 para reportar a Plaspy. El rastreador puede usar GPRS para enviar datos en tiempo real a Plaspy sobre la red, y la elección entre TCP o UDP afecta el comportamiento de entrega y consideraciones de red como reglas de firewall.

- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según soporte del firmware y condiciones de red.
- Los dispositivos pueden apuntar a d.plaspy.com o a 54.85.159.138 como endpoint de Plaspy; usar el nombre DNS simplifica cambios en el servidor.
- El puerto es 8888 y todos los dispositivos en Plaspy usan el mismo puerto para mantener consistencia entre modelos.
- TCP ofrece entrega orientada a conexión mientras que UDP reduce el overhead; el TZ-AVL19 soporta reportes sobre cualquiera de los dos transportes en configuraciones típicas.
- Algunas instalaciones también utilizan SMS como respaldo para alertas críticas si la conectividad de datos no está disponible, según la configuración del rastreador.

## Notas de compatibilidad del protocolo

- El TZ-AVL19 es compatible con Plaspy cuando está configurado para reportar al endpoint de la plataforma, pero el contenido exacto de los mensajes y las funciones disponibles pueden depender de la versión de firmware del equipo.
- Revisiones de hardware u opciones opcionales, como registro en tarjeta SD, cámara externa o soporte de lector RFID, pueden cambiar qué campos o eventos envía el rastreador.
- La configuración por parte del fabricante y los valores predeterminados pueden requerir habilitar el reporte por GPRS o seleccionar el transporte TCP/UDP antes de que Plaspy reciba datos.
- Las condiciones de red, la configuración de APN y la provisión de la SIM en el dispositivo pueden afectar la conectividad a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El reporte por SMS y otros mecanismos de respaldo dependen de la configuración del dispositivo; confirme si SMS se usa para reenvío de alarmas o como transporte de respaldo.
- Valide siempre la compatibilidad contra la documentación del fabricante y las notas de la versión de firmware más recientes del TZ-AVL19.

## Por qué es importante entender el protocolo

Conocer cómo se comunica el TZ-AVL19 contribuye a una configuración fluida, un flujo de datos confiable y una resolución eficaz de problemas cuando se trabaja con Plaspy. Comprender el contexto de comunicación reduce el tiempo de puesta en marcha y ayuda a identificar problemas cuando la telemetría o los eventos no llegan como se espera.

- Asegura que el dispositivo apunte al endpoint correcto de Plaspy y use el método de transporte soportado.
- Ayuda a distinguir entre problemas de conectividad y errores de configuración del dispositivo, como reportes deshabilitados o APN incorrecto.
- Orienta la decisión entre usar TCP o UDP según necesidades operativas, por ejemplo alarmas más oportunas o menor consumo de ancho de banda.
- Apoya la planificación de funciones opcionales como sensores externos, registro en SD o comunicación bidireccional que pueden afectar el comportamiento de reporte.
- Facilita la coordinación de actualizaciones de firmware y consultas al soporte del fabricante proporcionando información clara sobre el comportamiento observado.

## Por qué usar Plaspy con este protocolo

Combinar el TZone TZ-AVL19 con Plaspy ofrece a las organizaciones una forma práctica de recopilar ubicación en tiempo real, alarmas y estado del vehículo en una sola plataforma. Para gestores de flota, la combinación de las capacidades del hardware TZ-AVL19 y la visibilidad de Plaspy facilita la supervisión de rutas, la respuesta a incidentes y la elaboración de informes operativos sin necesidad de sondear manualmente los dispositivos.

Si desea conocer más sobre las funciones y capacidades de la plataforma Plaspy, visite https://www.plaspy.com. Para obtener los detalles más actuales sobre el protocolo específico del dispositivo, notas de firmware y listas de funciones opcionales del TZ-AVL19, verifique la información en el sitio del fabricante http://www.tzonedigital.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.

---
slug: /topshine/2fd_100/protocol
id: 2fd_100-protocol
sidebar_label: Protocol
title: TopShine - 2FD-100 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador TopShine 2FD-100 y cómo se comunica con Plaspy para rastreo y telemetría
keywords:
  - Protocolo TopShine 2FD-100
  - Protocolo GPS TopShine 2FD-100
  - Protocolo TopShine 2FD-100 para Plaspy
  - Protocolo de comunicación TopShine 2FD-100
  - Protocolo de rastreo TopShine 2FD-100
  - Compatibilidad TopShine 2FD-100 con Plaspy
  - Protocolo rastreador GPS TopShine
  - Protocolo rastreador OBD2 2FD-100
  - Protocolo de seguimiento de vehículos TopShine
  - Integración de telemetría 2FD-100
---

# TopShine - Protocolo 2FD-100

Esta página presenta un resumen público del protocolo del TopShine 2FD-100 y de cómo se comunica con Plaspy. Se centra en el contexto de comunicación de alto nivel necesario para encaminar reportes de posición, alarmas y telemetría desde el dispositivo hacia Plaspy, tomando la descripción del producto 2FD-100 como base factual. El 2FD-100 es un rastreador OBD2 bidireccional con conectividad 4G y alarma inteligente para vehículos, diseñado para seguridad vehicular, voz bidireccional, soporte de punto de acceso WiFi y telemetría avanzada para flotas y vehículos de pasajeros.

Plaspy usa ajustes de conexión compartidos para los dispositivos soportados e identifica automáticamente los protocolos cuando los dispositivos reportan al endpoint de Plaspy. Para el 2FD-100 esto implica que el dispositivo puede apuntar a Plaspy usando el mismo host y puerto usados en la plataforma y Plaspy intentará identificar el protocolo entrante de forma automática. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que la configuración y el comportamiento deben validarse con la documentación del dispositivo y las notas de firmware actuales.

## Descripción general del protocolo

El protocolo del 2FD-100 define el comportamiento público utilizado para reportar posiciones GPS, alarmas, estados de entradas y telemetría a un servidor remoto como Plaspy. Regula cómo el dispositivo presenta información de identificación, actualizaciones periódicas de ubicación y mensajes impulsados por eventos, de modo que una plataforma de flota pueda traducir esos mensajes en estado de vehículo y en historial utilizable.

- Permite reportes periódicos y basados en eventos para que Plaspy muestre ubicación en tiempo real y reproducción histórica.
- Transporta eventos de alarma y estado como choque, exceso de velocidad, geocerca, SOS y cambios de ignición para alertas y flujos de trabajo.
- Transmite telemetría y estados de accesorios para integraciones como sensores de combustible, entradas de puertas y monitoreo por voz o cámara.
- Proporciona identidad del dispositivo e información de sesión que permite a Plaspy asociar los datos entrantes con una unidad 2FD-100 específica.
- Soporta intercambios de comandos y respuestas para funciones de control remoto cuando el firmware del equipo expone esas capacidades.

## Cómo Plaspy detecta el protocolo

Plaspy recibe el tráfico de dispositivos en un endpoint y puerto compartidos y usa ese punto de entrada común para identificar qué protocolo habla cada rastreador. Cuando un 2FD-100 está configurado para reportar a Plaspy, la plataforma intentará automáticamente emparejar el tráfico entrante con un protocolo soportado, por lo que normalmente no se requiere selección manual del protocolo en Plaspy.

- Plaspy escucha en un único puerto de la plataforma y detecta automáticamente el protocolo del rastreador para las conexiones entrantes.
- Los dispositivos configurados para reportar al endpoint de Plaspy normalmente no necesitan seleccionar un protocolo dentro de Plaspy manualmente.
- La detección exitosa depende de que el dispositivo envíe información identificable y mensajes reconocibles al endpoint de Plaspy.
- Para el 2FD-100, asegúrese de que el dispositivo apunte al servidor Plaspy y use un transporte soportado para que la plataforma pueda identificar el protocolo.
- Si la detección no ocurre, verifique el firmware del dispositivo, las guías de configuración del fabricante y los ajustes de reporte antes de contactar al soporte de la plataforma.

## Transporte y contexto de conexión

La configuración de la conexión es una capa separada del protocolo en sí. El 2FD-100 usa su módem 4G/GSM y puede configurarse para enviar datos tanto por UDP como por TCP al puerto compartido de Plaspy. Para Plaspy, la información del endpoint público del servidor es un objetivo de configuración obligatorio para que la telemetría llegue a la plataforma de forma fiable.

- El nombre de host del servidor Plaspy es d.plaspy.com y la IP pública del servidor es 54.85.159.138.
- Plaspy utiliza el puerto 8888 para todos los dispositivos y conexiones soportadas.
- El 2FD-100 puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del dispositivo y la preferencia del operador.
- Asegúrese de que la conectividad saliente del dispositivo hacia el puerto 8888 esté permitida por el enrutamiento celular y cualquier firewall intermedio.
- Use el nombre de host del servidor Plaspy o la IP proporcionada para la configuración del dispositivo según el manual del equipo y el entorno de red.

## Notas de compatibilidad del protocolo

- La compatibilidad puede verse afectada por la versión de firmware del dispositivo; versiones más nuevas o antiguas pueden cambiar la temporización de mensajes o los campos disponibles.
- Revisiones de hardware u accesorios opcionales pueden modificar la telemetría disponible y el comportamiento de reporte de entradas.
- Los valores predeterminados de configuración del fabricante pueden apuntar los dispositivos a la plataforma del proveedor desde fábrica; cambie el destino de reporte a Plaspy al integrar.
- La elección entre UDP y TCP puede afectar las características de entrega pero no la capacidad de alto nivel para reportar posiciones.
- Confirme qué comandos de control remoto y qué entradas de alarma expone el firmware antes de depender de ellos en flujos operativos.
- Valide los detalles de integración con la documentación de TopShine al planificar despliegues a gran escala o funciones críticas.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del 2FD-100 ayuda a garantizar una configuración confiable, una resolución de problemas más eficiente y un comportamiento predecible cuando el dispositivo se usa con Plaspy. Tener claridad sobre cómo el dispositivo reporta datos y cómo Plaspy los ingiere reduce el tiempo de integración y mejora la confianza operativa.

- Identificación más rápida de errores de configuración como host, IP o ajustes de transporte incorrectos.
- Resolución más efectiva de actualizaciones de posición perdidas o eventos de alarma faltantes.
- Mejor planificación de actualizaciones de firmware y su posible impacto en campos de telemetría y comportamiento de eventos.
- Mapéo más preciso de entradas y salidas del dispositivo a alertas de la plataforma y acciones de control remoto.
- Reducción del tiempo de integración al desplegar a escala en flotas mixtas o con varias revisiones de hardware.

## Por qué usar Plaspy con este protocolo

Usar el TopShine 2FD-100 con Plaspy brinda a las organizaciones una forma de centralizar la ubicación vehicular, las alarmas y la telemetría avanzada en una única plataforma de gestión de flotas. La forma OBD2 integrada del 2FD-100, su voz bidireccional, punto de acceso WiFi y el soporte para accesorios expandibles lo hacen adecuado para flotas que requieren seguridad y conectividad para pasajeros, mientras que Plaspy proporciona la plataforma para monitoreo, reproducción y orquestación de alertas.

Si desea conocer más sobre Plaspy y cómo funciona con dispositivos como el 2FD-100 visite https://www.plaspy.com. El soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo, por lo que le recomendamos verificar los detalles de protocolo específicos del dispositivo y las notas de firmware más recientes en el sitio del fabricante https://www.gztopshine.com/ antes de despliegues a gran escala.

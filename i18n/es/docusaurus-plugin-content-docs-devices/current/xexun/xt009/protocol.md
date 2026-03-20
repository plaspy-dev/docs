---
slug: /xexun/xt009/protocol
id: xt009-protocol
sidebar_label: Protocol
title: Xexun - XT009 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para integrar el Xexun XT009 con Plaspy, explicando conexión, transporte y compatibilidad
keywords:
  - protocolo xexun xt009
  - protocolo gps xexun xt009
  - protocolo de rastreo xt009
  - protocolo tracker xexun
  - compatibilidad plaspy xt009
  - comunicación gps xt009
  - protocolo rastreador motocicleta xt009
  - protocolo gps xexun
  - protocolo dispositivo xt009
  - soporte de dispositivo plaspy
---

# Xexun - Protocolo XT009

Esta página ofrece una visión pública del protocolo para integrar el rastreador de motocicletas Xexun XT009 con Plaspy. Se centra en el contexto de comunicación que permite al XT009 reportar posición, estado y alarmas a la plataforma Plaspy, sin exponer la lógica interna de los parsers ni detalles de firmware. Use esta guía para comprender cómo se conecta el equipo y qué verificar al integrar el rastreador con Plaspy.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando un equipo reporta a la plataforma. El comportamiento exacto en el dispositivo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por ello los detalles del protocolo y el comportamiento de comandos pueden diferir entre unidades o compilaciones de firmware.

## Resumen del protocolo

El protocolo de reporte es el mecanismo que usa el XT009 para enviar posiciones GPS, actualizaciones de estado y eventos de alarma desde el dispositivo hasta un servidor remoto. Para la integración con Plaspy, el protocolo facilita los identificadores y la telemetría que permiten asociar mensajes con el dispositivo correcto y convertir los reportes en datos útiles de posición y alertas.

- Permite al XT009 transmitir coordenadas GPS y telemetría básica a un servidor remoto para su procesamiento.
- Transporta la identidad y el estado del dispositivo para que Plaspy pueda mapear los mensajes entrantes con el rastreador adecuado.
- Incluye tipos de eventos como alertas de movimiento, batería baja, SOS y notificaciones por manipulación o corte de energía en los reportes del dispositivo.
- Permite al equipo utilizar conectividad GSM GPRS para enviar paquetes de datos a un endpoint centralizado para su ingestión.
- Soporta modos de reporte como ubicación única o seguimiento periódico según la configuración del equipo.

## Cómo detecta Plaspy el protocolo

Plaspy recibe el tráfico entrante de los dispositivos en un único endpoint y puerto compartido y determina automáticamente el protocolo del rastreador a partir de los reportes recibidos. En la mayoría de los casos no es necesario seleccionar un protocolo manualmente dentro de Plaspy si el XT009 está configurado para reportar al endpoint de la plataforma.

- Plaspy escucha los reportes de dispositivos en d.plaspy.com y en la IP del servidor 54.85.159.138 en el puerto 8888.
- Todos los dispositivos configurados para reportar a Plaspy usan el mismo puerto, lo que simplifica la configuración entre modelos.
- Plaspy acepta reportes tanto por UDP como por TCP y recibirá tráfico del dispositivo en el puerto 8888 utilizando cualquiera de los dos transportes.
- Cuando el XT009 envía datos al endpoint de Plaspy, la plataforma asocia automáticamente los mensajes con los registros de dispositivos cuando es posible.
- Por lo general, usted sólo necesita asegurarse de que el rastreador apunte al endpoint correcto de Plaspy y que el dispositivo tenga permitido enviar datos por GPRS.

## Transporte y contexto de conexión

El contexto de conexión abarca el transporte de red y la configuración del servidor que el dispositivo utiliza para alcanzar Plaspy. El XT009 puede configurarse para reportar a través de la red celular y puede usar UDP o TCP en el puerto 8888, dependiendo de la configuración del dispositivo y del firmware.

- Los dispositivos pueden configurarse para reportar al dominio de Plaspy d.plaspy.com o directamente a la IP del servidor 54.85.159.138.
- El puerto 8888 se utiliza para todos los dispositivos soportados en Plaspy, y el XT009 puede configurarse para usar UDP o TCP en ese puerto.
- La elección entre UDP o TCP puede afectar la fiabilidad y el comportamiento de retransmisión; ambos son aceptados por Plaspy en el puerto 8888.
- Verifique que la conexión GPRS o celular del equipo esté activa y que los ajustes de reporte del rastreador apunten al endpoint de Plaspy.
- Las restricciones del operador de red o la configuración APN en la tarjeta SIM pueden influir en la conectividad; confirme esos ajustes si los reportes no llegan.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el formato de los mensajes o los campos incluidos en los reportes del XT009. Verifique la compatibilidad tras actualizaciones de firmware.
- Las revisiones de hardware o los modelos variantes pueden tener modos de reporte por defecto o menús de configuración distintos.
- Las opciones de configuración del fabricante (por ejemplo, cómo establecer el dominio del servidor o el modo de transporte) pueden variar y deben consultarse en el manual del dispositivo.
- La selección de transporte entre UDP y TCP debe probarse en su entorno de red para evaluar la fiabilidad y el paso por cortafuegos.
- Confirme que el rastreador esté configurado para reportar al endpoint de Plaspy (d.plaspy.com o 54.85.159.138) y al puerto 8888 para asegurar la detección automática.
- En caso de duda, pruebe un equipo en bancada o una unidad aislada antes de un despliegue masivo para validar el comportamiento con su operadora y firmware.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación le ayuda a configurar correctamente los dispositivos, solucionar problemas de conectividad de forma eficiente y mantener un rastreo fiable de vehículos y activos cuando usa Plaspy.

- Garantiza que el rastreador apunte al endpoint y al transporte correctos de Plaspy para que los mensajes lleguen de forma fiable.
- Ayuda a interpretar por qué ciertas alarmas o telemetría pueden faltar o mostrarse con distinto formato entre versiones de firmware.
- Permite una resolución de problemas más eficaz con las operadoras de red, al confirmar si los reportes salen del dispositivo y llegan al servidor de Plaspy.
- Facilita la planificación de despliegues de flota al clarificar qué opciones de configuración deben estandarizarse entre unidades.
- Contribuye a validar que comportamientos del dispositivo como SOS, alertas de movimiento y notificaciones por corte de energía se transmitan según lo esperado.

## Por qué usar Plaspy con este protocolo

Usar el Xexun XT009 con Plaspy ofrece una vía sencilla para integrar rastreo discreto y resistente a la intemperie de motocicletas dentro de un entorno centralizado de monitoreo y gestión de flotas. La forma compacta del XT009, su diseño resistente al agua y el soporte para múltiples alarmas lo convierten en una opción práctica para la visibilidad de motocicletas, mientras que Plaspy se encarga de la ingestión, la asociación de dispositivos y el procesamiento de la telemetría.

El modelo de endpoint compartido de Plaspy y la detección automática de protocolo reducen la complejidad de la puesta en marcha al exigir ajustes coherentes de servidor y puerto entre dispositivos. Para obtener más información sobre Plaspy y cómo puede trabajar con rastreadores compatibles como el XT009, visite https://www.plaspy.com. Por favor verifique los detalles específicos del protocolo del dispositivo, el comportamiento del firmware y la documentación del fabricante en el sitio oficial de Xexun https://www.xexun.com/ ya que las implementaciones del fabricante y los firmwares pueden cambiar con el tiempo.

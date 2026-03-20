---
slug: /globalsat/gdo_10/protocol
id: gdo_10-protocol
sidebar_label: Protocol
title: GlobalSat - GDO-10 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del oscilador GNSS GlobalSat GDO-10 y su comunicación con Plaspy para telemetría y monitoreo de tiempo
keywords:
  - Protocolo GlobalSat GDO-10
  - Compatibilidad GDO-10 Plaspy
  - Telemetría de tiempo GDO-10
  - Protocolo de oscilador GNSS disciplinado
  - Monitoreo 1PPS 10MHz GDO-10
  - Dispositivo de sincronización GlobalSat Plaspy
  - Protocolo de comunicación GDO-10
  - Integración de dispositivos Plaspy
  - Protocolo de sincronización horaria GNSS
  - Compatibilidad telemetría GDO-10
---

# GlobalSat - Protocolo GDO-10

Esta página ofrece contexto público sobre el protocolo para integrar el GlobalSat GDO-10 con Plaspy. Se centra en cómo el GDO-10, un oscilador disciplinado por GNSS con OCXO y salidas de 1PPS y 10 MHz con alta precisión, puede incorporarse a un flujo de telemetría y monitoreo que reporte la salud de la sincronización y métricas de tiempo a Plaspy. El contenido explica el papel de comunicación del dispositivo en una implementación Plaspy sin exponer detalles privados de implementación.

Plaspy utiliza configuraciones de conexión compartidas para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo está configurado correctamente para enviar datos al endpoint de Plaspy. El comportamiento exacto del protocolo y los detalles de telemetría pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que la integración práctica suele combinar las salidas de hardware del GDO-10 con un gateway o adaptador de telemetría que reenvía el estado a Plaspy.

## Resumen del protocolo

El GDO-10 comunica información de tiempo y estado a un gateway de monitoreo o a una interfaz de telemetría; ese gateway, a su vez, envía telemetría estandarizada a Plaspy. En este esquema, el contexto público del protocolo describe cómo el dispositivo se identifica, reporta su estado y suministra las señales de tiempo que un adaptador de monitoreo traduce a métricas significativas y posteriormente envía a Plaspy.

- El rol del protocolo es representar el estado de lock, la salud de la antena y la calidad de la temporización para su ingestión por un gateway de telemetría conectado a Plaspy.
- Los identificadores y campos de estado que provee el GDO-10 permiten a Plaspy mostrar la salud del dispositivo y la calidad de sincronización en los paneles.
- El protocolo posibilita el reporte periódico de métricas diagnósticas que ayudan a verificar el lock GNSS, la integridad del 1PPS y la condición de la referencia de 10 MHz.
- Normalmente, el reporte a nivel de protocolo lo realiza un dispositivo intermedio o gateway que puentea las salidas del GDO-10 hacia mensajes de telemetría compatibles con Plaspy.
- Plaspy usa los metadatos reportados para correlacionar los endpoints de temporización con otros activos monitoreados y generar alertas cuando la sincronización se desvía de los umbrales esperados.

## Cómo detecta Plaspy el protocolo

Plaspy está diseñado para aceptar telemetría entrante de muchos tipos de dispositivos en un endpoint compartido y detectar automáticamente el protocolo cuando el dispositivo apunta al servidor Plaspy. En integraciones con GDO-10 esto significa que, por lo general, usted no necesita seleccionar manualmente un protocolo en Plaspy si el gateway o adaptador de telemetría está correctamente configurado para reenviar el estado del GDO-10 al endpoint de Plaspy.

- Plaspy recibe la telemetría de dispositivos en un endpoint común del servidor y usa ese único punto de entrada para la detección de protocolo.
- Cuando la telemetría llega al endpoint compartido, Plaspy compara los mensajes entrantes con comportamientos de dispositivos conocidos y presenta los datos sin requerir selección manual de protocolo.
- Asegúrese de que su gateway o adaptador de telemetría reenvíe el estado del GDO-10 al endpoint de Plaspy para que la detección automática funcione correctamente.
- Si un dispositivo no se detecta automáticamente, verifique la configuración del endpoint en el gateway y consulte la documentación del fabricante por modos de reporte específicos del firmware.
- La detección automática simplifica la incorporación en despliegues mixtos que incluyen endpoints de temporización como el GDO-10 junto con rastreadores de activos tradicionales.

## Contexto de transporte y conexión

El contexto de conexión describe cómo la telemetría del GDO-10 llega a Plaspy mediante un gateway o adaptador. Plaspy publica un endpoint de red compartido al que los dispositivos y gateways compatibles pueden enviar telemetría para que los datos se enrutuen a su cuenta de Plaspy y sean procesados automáticamente.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138.
- El endpoint de Plaspy acepta telemetría de dispositivos en el puerto 8888 y ese mismo puerto se usa para todos los dispositivos soportados por Plaspy.
- Los dispositivos o gateways pueden configurarse para usar UDP o TCP en el puerto 8888 según la capacidad del hardware y las necesidades del despliegue.
- Se recomienda usar el nombre de dominio d.plaspy.com, aunque en entornos con restricciones también es posible apuntar la telemetría a la dirección IP del servidor.
- Confirme el método de transporte y la configuración de puerto en su gateway de telemetría para asegurar el reenvío confiable del estado del GDO-10 a Plaspy.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware en el GDO-10 pueden cambiar qué campos de telemetría están disponibles o cómo se reporta el estado; valide con las notas de la versión de firmware del dispositivo.
- Las revisiones de hardware y los módulos de interfaz opcionales pueden modificar el conjunto de señales de monitoreo disponibles o la configuración de gateway recomendada.
- La configuración del fabricante o ajustes regionales de GNSS podrían afectar el estado de lock reportado y deben considerarse al diagnosticar compatibilidad.
- Elegir UDP frente a TCP para el transporte puede influir en las garantías de entrega y puede estar limitado por el gateway o el entorno de red.
- Verifique siempre qué señales puede leer su gateway de monitoreo desde el GDO-10 y cómo se mapean esas señales a mensajes de telemetría enviados a Plaspy.
- Para el despliegue final, confirme compatibilidad y las configuraciones recomendadas consultando la documentación de GlobalSat y las guías de integración del proveedor del gateway.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación y cómo el GDO-10 reporta su estado ayuda a asegurar una configuración confiable, un monitoreo preciso y una resolución más rápida de problemas cuando se usa Plaspy. Aunque el GDO-10 proporciona salidas de tiempo estables, la ruta de telemetría y el comportamiento de reporte determinan qué tan bien esas señales se representan en los paneles de Plaspy.

- Tener expectativas claras sobre los campos reportados agiliza la integración y reduce pruebas y errores al mapear elementos de telemetría.
- La familiaridad con el protocolo ayuda a elegir el transporte y la configuración del gateway adecuados para una entrega de datos resiliente.
- Conocer el comportamiento dependiente del firmware ayuda a interpretar cambios en las métricas reportadas después de actualizaciones del dispositivo.
- Un mejor entendimiento reduce el tiempo medio de resolución para alarmas de sincronización y facilita despliegues replicables entre sitios.
- Conocer las limitaciones del protocolo informa decisiones de diseño para monitoreo redundante de temporización y estrategias locales de respaldo.

## Por qué usar Plaspy con este protocolo

Integrar el GDO-10 con Plaspy aporta visibilidad de temporización de precisión a una plataforma centralizada de telemetría. Las organizaciones que requieren temporización disciplinada por GNSS consistente en redes, laboratorios de prueba o sitios de infraestructura se benefician de combinar las salidas de alta estabilidad del GDO-10 con la capacidad de Plaspy para ingerir, correlacionar y presentar la salud de sincronización junto con otros activos monitoreados.

Plaspy le ayuda a rastrear el estado de lock, la salud de la antena y la calidad de temporización como parte de una vista operacional unificada. Para más información sobre cómo integrar endpoints de temporización y gateways de telemetría con Plaspy, visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolos, el comportamiento de firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que debe verificar la información específica más reciente en el sitio del fabricante https://www.globalsat.com.tw/.

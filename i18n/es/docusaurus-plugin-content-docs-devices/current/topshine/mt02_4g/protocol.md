---
slug: /topshine/mt02_4g/protocol
id: mt02_4g-protocol
sidebar_label: Protocol
title: TopShine - MT02-4G Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para integrar TopShine MT02-4G con Plaspy, sobre configuración y conectividad para rastreo
keywords:
  - Protocolo TopShine MT02-4G
  - Protocolo GPS TopShine MT02-4G
  - Protocolo TopShine MT02-4G para Plaspy
  - Protocolo de comunicación MT02-4G
  - Protocolo de rastreo MT02-4G
  - Protocolo para rastreador GPS 4G
  - Protocolo de dispositivo Plaspy
  - Compatibilidad rastreador TopShine
  - Rastreo de vehículos MT02-4G
  - Protocolo seguimiento de flotas
---

# TopShine - Protocolo MT02-4G

Esta página ofrece una visión pública y no sensible del contexto de comunicación para usar el rastreador TopShine MT02-4G con Plaspy. Se centra en cómo el dispositivo informa posición y telemetría a Plaspy, los ajustes de conexión compartidos que utiliza el servicio y consideraciones prácticas de compatibilidad para despliegue y resolución de problemas.

Plaspy utiliza ajustes de conexión compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador a partir de los informes entrantes. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por eso esta página enfatiza el contexto público de comunicación más que los detalles internos del firmware. El MT02-4G es compatible con Plaspy y ofrece funciones como conectividad 4G, registro a bordo, batería de respaldo y capacidad OTA, que influyen en cómo reporta datos a una plataforma de rastreo.

## Descripción general del protocolo

A nivel alto, el protocolo del rastreador describe cómo el MT02-4G envía posición, movimiento, estados de E/S y alertas de evento a un servidor remoto para que Plaspy pueda mostrar posición en vivo, el historial de rutas y las notificaciones configuradas. El protocolo es el mecanismo que convierte las lecturas GPS y de sensores dentro del dispositivo en datos útiles en la plataforma Plaspy.

- Permite que el MT02-4G transmita coordenadas GPS y telemetría del vehículo a Plaspy para seguimiento en tiempo real y registro histórico.
- Transporta información de eventos como exceso de velocidad, activación de geocercas, alertas SOS y estado de alimentación o batería.
- Proporciona identificación y estado del dispositivo para que Plaspy asocie los informes entrantes con el registro correcto del rastreador.
- Soporta la carga de registros offline para que los puntos almacenados se envíen cuando se restablezca la conectividad de red.
- Funciona en conjunto con las funciones OTA y de gestión remota para permitir actualizaciones de firmware y configuración por aire cuando el dispositivo lo soporte.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en un único endpoint y puerto compartidos y está diseñado para detectar automáticamente el protocolo del rastreador que está usando un dispositivo al llegar un informe. Cuando el MT02-4G se configura para apuntar a Plaspy, la plataforma compara los patrones de datos observados con los comportamientos de los dispositivos soportados, por lo que generalmente no hace falta seleccionar el protocolo manualmente dentro de Plaspy.

- Plaspy recibe informes de dispositivos en d.plaspy.com y en la IP del servidor 54.85.159.138 en el puerto 8888.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración y la planificación de firewalls.
- Plaspy detecta automáticamente el protocolo del rastreador a partir de la conexión entrante y los datos reportados, por lo que por lo general no necesita elegir un protocolo a mano.
- La configuración correcta del dispositivo para apuntar al endpoint de Plaspy es el requisito más común para que la detección automática tenga éxito.
- Si su dispositivo no aparece, una primera verificación práctica es confirmar que el rastreador está configurado para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888.

## Transporte y contexto de conexión

El MT02-4G puede comunicarse mediante datos celulares y puede configurarse para usar transporte UDP o TCP según las opciones del dispositivo y las condiciones de la red. La elección del transporte afecta el comportamiento de la conexión, pero no cambia el hecho de que Plaspy acepta informes en el mismo endpoint y puerto para todos los rastreadores compatibles.

- Los dispositivos pueden configurarse para usar UDP en el puerto 8888 para envíos livianos.
- También pueden configurarse para usar TCP en el puerto 8888 para reportes orientados a conexión, según el firmware y la configuración.
- Plaspy acepta conexiones dirigidas a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888.
- Usar el puerto común entre dispositivos facilita la configuración de redes y firewalls para flotas.
- Verifique que la configuración de transporte del MT02-4G coincida con la política de red prevista y con los ajustes que apunta al endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el comportamiento de los reportes y los comandos disponibles, por lo que la compatibilidad debe validarse con el firmware que esté en uso.
- Las revisiones de hardware u accesorios opcionales del MT02-4G pueden habilitar o modificar canales de telemetría, como sensor de combustible o identificación del conductor.
- Ajustes del lado del fabricante o variantes de firmware personalizado pueden introducir diferencias de protocolo que afecten la integración.
- La elección entre UDP y TCP puede ser importante para la fiabilidad en determinados entornos de red.
- Confirme que el dispositivo esté configurado para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888 y que la APN y la configuración de la SIM permitan conectividad de datos.
- Para despliegues avanzados o poco habituales, consulte el manual del dispositivo y los recursos del fabricante para confirmar el comportamiento.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a asegurar que el MT02-4G informe de manera confiable a Plaspy, evita configuraciones incorrectas y reduce el tiempo de diagnóstico ante problemas de conectividad. Tener una idea básica de las funciones del protocolo facilita validar la configuración del dispositivo e interpretar por qué los datos pueden faltar o llegar con retraso.

- Asegura que el rastreador apunte al endpoint correcto de Plaspy y use el transporte adecuado.
- Ayuda a diagnosticar problemas de conectividad como puertos bloqueados, APN incorrecta o ajustes de servidor equivocados.
- Orienta la planificación de actualizaciones de firmware para saber cuándo puede cambiar el comportamiento de los reportes.
- Permite expectativas realistas sobre el registro offline y cómo se cargan los puntos almacenados.
- Facilita una comunicación más clara con el proveedor del dispositivo cuando se requiera soporte del fabricante.

## Por qué usar Plaspy con este protocolo

Usar el MT02-4G con Plaspy ofrece un camino directo a visibilidad de vehículos en tiempo real, reproducción histórica de rutas y alertas de eventos configurables, útiles para operaciones de flota, prevención de robo y monitoreo de activos. La combinación de conectividad 4G, registro a bordo, batería de respaldo y capacidad OTA hace al MT02-4G un dispositivo práctico para integrarse en una plataforma de rastreo centralizada como Plaspy.

Si desea saber más sobre cómo Plaspy recibe y gestiona los datos de los rastreadores o explorar las funciones de la plataforma para flotas de dispositivos visite https://www.plaspy.com. Para detalles más actualizados sobre el protocolo específico del dispositivo, notas de firmware y revisiones de hardware, consulte el sitio oficial de TopShine https://www.gztopshine.com/ ya que la documentación del fabricante puede cambiar con el tiempo.

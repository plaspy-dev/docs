---
slug: /topshine/mt01/protocol
id: mt01-protocol
sidebar_label: Protocol
title: TopShine - MT01 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del rastreador TopShine MT01 y ajustes de conexión y compatibilidad con Plaspy
keywords:
  - Protocolo TopShine MT01
  - Protocolo GPS TopShine MT01
  - Protocolo de comunicación MT01
  - Protocolo de rastreo MT01
  - Compatibilidad TopShine Plaspy
  - Integración de dispositivos Plaspy
  - Protocolo rastreador GPS vehicular
  - Rastreador de flotas MT01
  - Protocolo de telemetría MT01
  - Configuración MT01 Plaspy
---

# TopShine - Protocolo MT01

Esta página describe el contexto público del protocolo para usar el rastreador TopShine MT01 con la plataforma Plaspy. Explica, en términos generales, cómo se comunica el dispositivo, qué ajustes de conexión utiliza Plaspy y qué revisar durante la puesta en marcha y la resolución de problemas. La guía se centra en comportamientos observables y públicos, no en detalles internos del firmware.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo reporta a la plataforma. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware del MT01, la revisión de hardware y la implementación del fabricante, por lo que siempre confirme los detalles específicos del dispositivo al planificar integraciones.

## Resumen del protocolo

El MT01 envía datos de ubicación, telemetría y eventos a un servidor remoto mediante el protocolo de comunicación implementado por el fabricante. Ese protocolo define cómo el equipo se identifica, reporta posiciones GPS y sensores, y responde a solicitudes de configuración y control remoto. Cuando se integra con Plaspy, el rastreador envía reportes periódicos y por eventos que la plataforma procesa y muestra como posiciones en tiempo real y alertas.

- Permite reportes periódicos y por evento de posición GPS, velocidad y marca de tiempo a un endpoint remoto.
- Transporta telemetría y datos de sensores como estado de alimentación, nivel de batería y eventos opcionales como sensor de combustible o choque para ingestión por Plaspy.
- Incluye información de identidad del dispositivo para que Plaspy pueda asociar los reportes entrantes con el registro de activo correcto.
- Soporta flujos de configuración remota y control cuando el dispositivo y el firmware permiten comunicación bidireccional.
- Funciona con el registrador offline (offline logger) del MT01 para subir trazas almacenadas después de pérdidas temporales de conectividad y mantener continuidad histórica.

## Cómo Plaspy detecta el protocolo

Plaspy acepta reportes de dispositivos en un endpoint de servidor compartido y determina automáticamente el protocolo del rastreador con base en el perfil de los datos entrantes. En la mayoría de los despliegues usted no necesita seleccionar manualmente un protocolo dentro de Plaspy si el MT01 está configurado para reportar al endpoint de Plaspy usando el transporte y la dirección correctos.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138. El puerto es 8888.
- Todos los dispositivos en Plaspy usan el mismo puerto y Plaspy detecta automáticamente el protocolo para reportes correctamente dirigidos.
- Si el MT01 está configurado para apuntar al endpoint de Plaspy y enviar sus reportes, la plataforma ingerirá y mapeará los datos al registro de dispositivo correspondiente.
- Normalmente solo necesita asegurarse de que la dirección de reporte y el transporte del dispositivo coincidan con los ajustes de Plaspy para que la detección automática funcione.
- Consulte las guías de integración de Plaspy o a su integrador si un dispositivo requiere campos específicos del proveedor o configuración del vendedor para alcanzar d.plaspy.com.

## Transporte y configuración de conexión

El MT01 puede configurarse para usar UDP o TCP según el soporte del dispositivo y la configuración elegida. Plaspy acepta conexiones en un único puerto compartido para todos los dispositivos, por lo que la selección del transporte y la correcta dirección del servidor son los puntos de configuración comunes a confirmar antes de incorporar equipos.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según soporte del equipo y elección del instalador.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o a la dirección numérica 54.85.159.138 para alcanzar Plaspy.
- Plaspy escucha en el puerto 8888 y usa el mismo puerto entre los rastreadores soportados para simplificar la configuración.
- El comportamiento de datos móviles o la alternancia a SMS/GPRS en caso de fallo lo controla el firmware del rastreador y la configuración celular, no los ajustes de transporte de Plaspy.
- Verifique el APN del MT01 y los ajustes de transporte saliente al provisionar para que los reportes lleguen de forma confiable al endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las variaciones de firmware pueden cambiar las funciones y los formatos de reporte disponibles; identifique la versión de firmware del MT01 al validar el comportamiento.
- Revisiones de hardware u accesorios opcionales como sensores de combustible y relés de inmovilizador pueden modificar los campos de telemetría que envía el rastreador.
- Los valores por defecto de configuración del fabricante pueden variar por región o distribuidor; confirme que el dispositivo está configurado para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- La elección de transporte entre UDP y TCP puede afectar las características de entrega en ciertas condiciones de red; elija el que se ajuste a sus necesidades de fiabilidad.
- Si el dispositivo usa SMS como respaldo para comandos remotos, revise las listas de comandos SMS en la documentación oficial.
- Confirme siempre la compatibilidad y el mapeo de entradas de sensores opcionales antes de un despliegue a gran escala.

## Por qué es importante entender el protocolo

Conocer el protocolo de comunicación del rastreador ayuda a garantizar un flujo de datos confiable, agilizar la resolución de problemas y mapear correctamente las funciones del dispositivo en Plaspy. Tener claridad sobre cómo se envían los reportes y qué incluye cada uno reduce el tiempo de integración y favorece operaciones de flota previsibles.

- Ayuda a confirmar que el dispositivo apunta a d.plaspy.com o 54.85.159.138 y usa el puerto 8888 para una entrega exitosa.
- Agiliza la resolución de problemas cuando faltan actualizaciones de ubicación o notificaciones de eventos al centrar la revisión en transporte, APN y comportamiento del firmware.
- Asegura que los sensores opcionales y las entradas se interpreten correctamente por Plaspy cuando el dispositivo envía sus campos de telemetría.
- Informa la decisión entre UDP y TCP según su entorno de red y las garantías de entrega esperadas.
- Facilita la planificación para el registro offline y la recuperación de datos del MT01 tras huecos de cobertura.

## Por qué usar Plaspy con este protocolo

Usar el TopShine MT01 con Plaspy proporciona a las organizaciones una vista operativa de la ubicación de vehículos, eventos y telemetría opcional como estado de combustible o alertas de pánico. Las características del hardware MT01, como amplio rango de tensión, carcasa compacta a prueba de intemperie y registro de datos a bordo, se complementan bien con las capacidades de Plaspy para mapeo en tiempo real, alertas e informes históricos.

Si desea saber más sobre Plaspy y cómo se integra el MT01 con la plataforma, visite https://www.plaspy.com. Para detalles específicos de protocolo del dispositivo más actualizados, notas de firmware y compatibilidad con accesorios, consulte la documentación oficial del fabricante en https://www.gztopshine.com/ ya que el soporte del protocolo y el comportamiento del firmware pueden cambiar con el tiempo.

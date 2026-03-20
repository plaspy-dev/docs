---
slug: /queclink/gl33/protocol
id: gl33-protocol
sidebar_label: Protocol
title: QuecLink - GL33 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo GL33 de QuecLink y su compatibilidad con Plaspy, incluyendo ajustes de conexión y contexto de integración
keywords:
  - Protocolo QuecLink GL33
  - Protocolo GPS QuecLink GL33
  - Protocolo de comunicación QuecLink GL33
  - GL33 Plaspy
  - Protocolo rastreador GPS GL33
  - Protocolo de rastreo QuecLink
  - Compatibilidad QuecLink GL33
  - Protocolo de dispositivo Plaspy
  - Protocolo rastreador GPS Plaspy
  - Rastreo de activos GL33
---

# QuecLink - Protocolo GL33

Esta página ofrece una visión pública del protocolo para usar el rastreador QuecLink GL33 con Plaspy. Resume cómo suele comunicarse el dispositivo con servicios backend, las configuraciones de conexión que emplea Plaspy y consideraciones prácticas para que los equipos configuren y operen unidades GL33 en protección de carga y activos, respetando la confidencialidad del fabricante.

El QuecLink GL33 es un rastreador 2G recargable y compacto diseñado para la protección encubierta de activos y carga. Combina posicionamiento GPS, localización por LBS como respaldo y señalización de proximidad RF433/434 para ofrecer datos de ubicación por capas a Plaspy. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Visión general del protocolo

El protocolo de reportes GL33 define cómo el rastreador envía información de ubicación, telemetría y eventos a un backend remoto para que servicios como Plaspy puedan normalizar y presentar datos de rastreo útiles. Esta visión pública se concentra en el papel de esa comunicación más que en detalles propietarios o específicos de firmware.

- Permite la transmisión regular de fijaciones GPS y ubicaciones de respaldo por LBS a servicios backend para seguimiento en tiempo real.
- Transporta telemetría como estado de movimiento, nivel de batería y eventos de proximidad RF para que Plaspy pueda generar alertas y líneas de tiempo.
- Incluye información de identidad y sesión que permite a Plaspy asociar los reportes entrantes con el registro de dispositivo correcto.
- Soporta configuración remota y cambios de modo a través de canales celulares para que los gestores de despliegue puedan activar el homing RF o modificar el comportamiento de reporte.
- Provee el flujo de datos que Plaspy consume y muestra en mapas, geocercas y flujos de trabajo de incidentes.

## Cómo Plaspy detecta el protocolo

Plaspy recibe reportes GL33 en un endpoint público compartido e identifica automáticamente el protocolo entrante para que la mayoría de los usuarios no necesiten seleccionar manualmente un protocolo en la plataforma. La configuración correcta del dispositivo para reportar a Plaspy suele ser el único paso necesario en el lado del dispositivo.

- El dominio del servidor Plaspy para reportes de dispositivos es d.plaspy.com y la IP pública asociada es 54.85.159.138.
- Plaspy escucha en el puerto 8888 para reportes de dispositivos y usa el mismo puerto para todos los dispositivos soportados por la plataforma.
- Los dispositivos pueden configurarse para usar UDP o TCP al enviar reportes a Plaspy en el puerto 8888.
- Cuando un GL33 apunta al endpoint de Plaspy y comienza a reportar, Plaspy detecta automáticamente el protocolo y empieza a normalizar los datos entrantes.
- En general, usted no necesita elegir un protocolo dentro de Plaspy siempre que el dispositivo esté configurado para reportar al endpoint de Plaspy.

## Transporte y contexto de conexión

La configuración de transporte determina cómo el GL33 llega a Plaspy a través de la red celular. El dispositivo puede configurarse para usar opciones de transporte comunes según el firmware de la unidad y las necesidades del despliegue; Plaspy acepta esos transportes en el endpoint compartido.

- El GL33 puede configurarse para usar UDP o TCP al enviar reportes al backend en el puerto 8888.
- Los dispositivos pueden apuntar a d.plaspy.com o a la dirección numérica 54.85.159.138 según la configuración de red y la disponibilidad de DNS.
- Plaspy usa un único puerto de entrada, 8888, para todo el tráfico de dispositivos para simplificar el despliegue y la provisión.
- Elija UDP para reportes con menor sobrecarga o TCP para entrega orientada a conexión según el soporte del dispositivo y el entorno de red.
- Confirme la selección de transporte y la configuración del APN en el dispositivo para asegurar conectividad confiable a través del proveedor celular.

## Notas sobre compatibilidad del protocolo

- Las variaciones de firmware entre unidades GL33 pueden afectar comandos disponibles, tipos de eventos e intervalos de reporte; confirme siempre el comportamiento del firmware para un lote dado.
- Las revisiones de hardware o variantes regionales del modelo pueden implementar comportamiento distinto en radio o gestión de energía que cambie ligeramente cuándo y cómo se envían los reportes.
- La selección de transporte entre UDP y TCP puede influir en las características de entrega y debe ajustarse a la configuración del dispositivo y las condiciones de la red.
- La señalización de proximidad RF433/434 es una capacidad de corto alcance que complementa el GPS y LBS para recuperación de última milla y puede requerir activación de modo.
- La configuración remota vía GPRS o SMS puede cambiar los destinos de reporte y debe validarse durante el despliegue para asegurar que el dispositivo apunte a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Consulte siempre la documentación del fabricante para limitaciones específicas del modelo, comandos de firmware soportados y ajustes de despliegue recomendados.

## Por qué es importante entender el protocolo

Tener una comprensión clara y práctica del comportamiento de comunicación del GL33 ayuda a garantizar un despliegue exitoso, operaciones confiables y resolución eficiente de problemas con Plaspy. Conocer qué reporta el dispositivo y cómo se conecta reduce el tiempo de configuración y mejora la respuesta ante incidentes.

- Ayuda a validar que el dispositivo esté configurado para enviar datos a d.plaspy.com o 54.85.159.138 en el puerto 8888 usando el transporte adecuado.
- Facilita el diagnóstico de brechas de conectividad o reportes al acotar la investigación a transporte, APN, firmware o ubicación física.
- Permite tomar decisiones sensatas sobre intervalos de reporte y uso de energía para cumplir requisitos de vida útil de batería y rastreo.
- Favorece el uso coordinado de GPS, LBS y proximidad RF para flujos de trabajo de rastreo y recuperación por capas.
- Reduce la fricción en la integración porque Plaspy detecta automáticamente el protocolo una vez que el dispositivo llega al endpoint compartido.

## Por qué usar Plaspy con este protocolo

Usar el QuecLink GL33 con Plaspy ofrece a las organizaciones una combinación práctica de hardware discreto y un backend que normaliza datos de ubicación de múltiples fuentes. Plaspy presenta fijaciones GPS, retrocesos LBS, eventos de movimiento, estado de batería e indicadores de proximidad RF en vistas unificadas que ayudan a equipos de seguridad, logística y recuperación a actuar con rapidez y decisión.

Si desea saber más sobre cómo Plaspy se integra con dispositivos como el GL33 visite https://www.plaspy.com. Para detalles actuales específicos del protocolo del dispositivo, notas de firmware y orientación del fabricante, verifique la información en el sitio oficial de QuecLink https://www.queclink.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.

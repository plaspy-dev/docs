---
slug: /oigo_telematics/ar_3hu/protocol
id: ar_3hu-protocol
sidebar_label: Protocol
title: Oigo Telematics - AR-3HU Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para el rastreador GPS Oigo Telematics AR-3HU e integración con Plaspy
keywords:
  - Protocolo Oigo Telematics AR-3HU
  - Protocolo GPS AR-3HU
  - Oigo AR-3HU Plaspy
  - Protocolo de comunicación AR-3HU
  - Protocolo de rastreo AR-3HU
  - Protocolo rastreador GPS Oigo Telematics
  - Compatibilidad de dispositivos Plaspy
  - Rastreo de flotas AR-3HU
  - Integración rastreador de vehículos AR-3HU
  - Informes de eventos AR-3HU
---

# Oigo Telematics - Protocolo AR-3HU

Esta página describe el contexto público del protocolo para usar el rastreador Oigo Telematics AR-3HU con Plaspy. Explica a alto nivel cómo el dispositivo se comunica, cómo Plaspy recibe y reconoce los datos del rastreador y qué aspectos de la comunicación son más relevantes al integrar el equipo en flotas o en procesos de recuperación de vehículos robados.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. El AR-3HU es un rastreador 3G HSDPA diseñado para instalación discreta, con un amplio conjunto de reportes de eventos y alertas; esta documentación se centra en el contexto público y no sensible del protocolo, útil para la configuración y resolución de problemas.

## Resumen del protocolo

El protocolo de comunicación AR-3HU define cómo el equipo informa su ubicación, estado y alertas de eventos a una plataforma remota. En el contexto de Plaspy, el objetivo del protocolo es permitir que el AR-3HU se identifique, entregue telemetría oportuna y transmita condiciones de evento en un formato que Plaspy pueda interpretar automáticamente.

- Permite que el rastreador envíe actualizaciones periódicas de ubicación y estado a Plaspy para visibilidad en tiempo real.
- Transporta reportes de eventos como exceso de velocidad, frenadas bruscas y uso no autorizado para que Plaspy genere alertas.
- Permite que el dispositivo incluya marcadores de identidad y configuración para que la plataforma receptora asocie los mensajes con un vehículo específico.
- Soporta transporte sobre sockets de red comunes para que el AR-3HU se comunique desde redes celulares hasta el endpoint de Plaspy.
- Proporciona suficiente contexto para que Plaspy muestre la telemetría y agregue el dispositivo a los flujos de trabajo de la flota sin necesidad de seleccionar el protocolo manualmente.

## Cómo Plaspy detecta el protocolo

Plaspy acepta reportes entrantes en un endpoint compartido y detecta automáticamente el protocolo del rastreador cuando un dispositivo correctamente configurado informa al servicio. En la mayoría de los casos, basta con apuntar el dispositivo al endpoint de Plaspy y usar el transporte correcto para que sea reconocido y procesado.

- Plaspy utiliza un único endpoint de escucha en d.plaspy.com y la IP 54.85.159.138 en el puerto 8888 para el reporte de dispositivos.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración entre distintos modelos de rastreadores.
- Plaspy detecta automáticamente el protocolo del rastreador; por lo general, el usuario no necesita seleccionar el protocolo manualmente dentro de la plataforma.
- Si el AR-3HU está configurado para reportar al endpoint de Plaspy, Plaspy identificará los reportes entrantes y los asociará a registros de dispositivo cuando los mensajes incluyan los datos de identidad del equipo.
- Una configuración adecuada del dispositivo y firmware actualizado ayudan a garantizar que los mensajes del protocolo incluyan los campos que Plaspy espera para una detección automática fiable.

## Transporte y contexto de conexión

El contexto de conexión describe cómo el AR-3HU alcanza Plaspy a través de la red celular. El equipo soporta opciones de transporte habituales y puede apuntarse a Plaspy ya sea por nombre de dominio o por dirección IP, según la preferencia del instalador y las restricciones de la red.

- Los dispositivos pueden configurarse usando UDP o TCP en el puerto 8888 según el soporte del equipo y la configuración.
- El dominio del servidor de Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138 para direccionamiento directo.
- El puerto usado para el reporte es 8888 y Plaspy utiliza el mismo puerto para todos los dispositivos soportados.
- La elección entre UDP o TCP afecta características de entrega como orden y retransmisiones; seleccione el modo de transporte que el firmware del AR-3HU soporte y que mejor encaje con su red.
- Asegúrese de que el APN y la conectividad celular estén configurados correctamente en el dispositivo para que pueda alcanzar d.plaspy.com o 54.85.159.138 en el puerto 8888.

## Notas de compatibilidad del protocolo

- La compatibilidad puede variar según la versión de firmware del AR-3HU; firmware más recientes pueden añadir o cambiar campos y el comportamiento del reporte de eventos.
- Las revisiones de hardware o accesorios opcionales pueden afectar la E/S disponible o los tipos de eventos reportados a la plataforma.
- Las opciones de configuración del lado del fabricante pueden cambiar cómo el dispositivo se identifica o qué eventos reporta; revise los ajustes antes del despliegue.
- Elegir UDP frente a TCP al configurar el dispositivo puede influir en el comportamiento de entrega de mensajes; haga coincidir el transporte con lo que el firmware instalado soporte.
- Pruebe un número reducido de dispositivos tras la configuración para confirmar que Plaspy recibe e interpreta los reportes como se espera.
- Siempre valide los detalles de compatibilidad consultando la documentación del dispositivo suministrada por el fabricante para la versión de firmware y la revisión de hardware específica.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a instaladores y operadores a configurar los equipos correctamente, resolver problemas de conectividad y mantener flujos de datos fiables hacia Plaspy a largo plazo.

- Acelera la puesta en marcha al asegurar que los dispositivos apunten al endpoint correcto de Plaspy y que el transporte esté configurado adecuadamente.
- Mejora la resolución de problemas al clarificar si una incidencia es de red, transporte o configuración del equipo.
- Ayuda a definir las expectativas sobre qué tipos de eventos y qué cadencia de reporte proporcionará el AR-3HU a Plaspy.
- Facilita la planificación del ciclo de vida del firmware y del dispositivo al destacar cuándo los cambios de protocolo podrían requerir ajustes de configuración.
- Apoya el mapeo fiable de la identidad del dispositivo a registros de vehículo para que Plaspy muestre telemetría y alertas precisas.

## Por qué usar Plaspy con este protocolo

Usar el AR-3HU con Plaspy ofrece una solución práctica para organizaciones que requieren visibilidad consistente del vehículo, alertas basadas en eventos y supervisión centralizada de la flota. La instalación discreta del AR-3HU y sus capacidades de reporte de eventos combinan bien con la detección automática de protocolos de Plaspy y su estrategia de puerto unificado, reduciendo la carga de configuración durante el despliegue.

Si necesita más información sobre cómo funciona Plaspy con el AR-3HU o desea evaluar opciones de despliegue para una flota, conozca más sobre Plaspy en https://www.plaspy.com. Para los detalles más actuales sobre el protocolo específico del dispositivo, notas de firmware y orientaciones del fabricante, verifique la información en el sitio de Oigo Telematics https://www.oigotelematics.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.

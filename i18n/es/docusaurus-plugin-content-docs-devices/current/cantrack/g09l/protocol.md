---
slug: /cantrack/g09l/protocol
id: g09l-protocol
sidebar_label: Protocol
title: CanTrack - G09L Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo CanTrack G09L y su comunicación con Plaspy para rastreo de flotas y telemetría
keywords:
  - Protocolo CanTrack G09L
  - Protocolo GPS G09L
  - CanTrack G09L Plaspy
  - Protocolo de comunicación G09L
  - Protocolo de rastreo G09L
  - Protocolo de rastreador GPS CanTrack
  - Rastreo de flotas G09L
  - Protocolo rastreador GPS luz trasera
  - Dispositivos compatibles con Plaspy
  - Protocolo de telemática para vehículos pesados
---

# CanTrack - Protocolo G09L

Esta página describe el contexto público del protocolo para usar el rastreador CanTrack G09L con Plaspy. Explica a alto nivel cómo el dispositivo reporta posición y telemetría a Plaspy, qué opciones de conexión son comunes y cómo el comportamiento del protocolo afecta la integración sin exponer detalles privados de implementación.

El G09L es compatible con Plaspy desde el primer momento y combina funciones de luz trasera con GPS integrado, sensor G y batería de respaldo para camiones y vehículos pesados. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Para conjuntos de comandos específicos del dispositivo y las notas de firmware más recientes consulte la documentación del fabricante.

## Visión general del protocolo

El protocolo del G09L define cómo la unidad envía telemetría, fijaciones de posición, eventos de sensores y actualizaciones de estado a un servidor remoto. En Plaspy este protocolo se usa para entregar datos de ubicación y eventos que pueden accionarse en paneles, alertas e informes, respetando las limitaciones operativas y el factor de forma de un rastreador integrado en la luz trasera.

- Permite que el G09L reporte fijaciones de posición GPS y BeiDou con marcas temporales a un servidor de seguimiento remoto
- Transporta eventos de sensores como alarmas del sensor G y el estado de alimentación para que Plaspy genere alertas y registros de incidentes
- Proporciona un mecanismo para identificar el dispositivo y asociar los datos entrantes con un vehículo y una cuenta en Plaspy
- Transmite actualizaciones diagnósticas y de estado para que Plaspy refleje nivel de batería, señal y estado de firmware
- Admite señales de gestión remota como cambios de configuración o disparadores FOTA cuando el fabricante las expone

## Cómo detecta Plaspy el protocolo

Plaspy escucha en un endpoint y puerto compartidos las reportes entrantes de dispositivos y determina automáticamente el protocolo del rastreador cuando un equipo correctamente configurado envía datos. Esto elimina la necesidad de que usted seleccione manualmente un protocolo dentro de Plaspy en la mayoría de las implementaciones estándar.

- Plaspy usa el mismo puerto para todos los dispositivos soportados, lo que simplifica la configuración de routers y firewalls
- Cuando un G09L apunta al endpoint de Plaspy y comienza a reportar, Plaspy detecta automáticamente el tipo de protocolo
- Normalmente no es necesario que los usuarios seleccionen un protocolo manualmente si el dispositivo está configurado para reportar al servidor de Plaspy
- La identificación adecuada del dispositivo requiere que el G09L esté configurado con la dirección de servidor y las credenciales correctas cuando apliquen
- La detección depende de recibir reportes regulares de posición y eventos desde el dispositivo, por lo que debe verificarse la configuración inicial

## Transporte y contexto de conexión

El G09L puede configurarse para enviar datos sobre transportes IP comunes según el firmware y las opciones de configuración del dispositivo. En el entorno Plaspy se usa un nombre de servidor y puerto consistentes para centralizar las conexiones entrantes de múltiples modelos.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según el soporte y las opciones del equipo
- Plaspy acepta conexiones dirigidas a d.plaspy.com o directamente a 54.85.159.138
- Todos los dispositivos en Plaspy usan el mismo puerto 8888, lo que hace predecible la configuración de red en toda la flota
- La configuración del servidor y del APN del G09L se realiza comúnmente vía SMS o desde el portal del fabricante antes de comenzar a reportar
- Elija el transporte basado en las capacidades del dispositivo y las consideraciones de confiabilidad de la red en su despliegue

## Notas sobre compatibilidad del protocolo

- Las diferencias entre versiones de firmware pueden cambiar qué campos de telemetría y eventos reporta un G09L
- Revisiones de hardware o diferencias regionales en el SKU pueden afectar las bandas GNSS o el comportamiento celular disponible
- Las integraciones con servidores del fabricante y el comportamiento de sus portales pueden diferir de las integraciones con plataformas en la nube como Plaspy
- La selección entre UDP y TCP puede afectar las garantías de entrega y debe coincidir con la configuración del dispositivo
- Valide la compatibilidad contra la documentación oficial de CanTrack para comandos específicos del dispositivo y notas de FOTA
- Confirme que el APN, el host del servidor y el intervalo de reporte estén correctamente configurados en cada dispositivo antes de esperar datos en Plaspy

## Por qué es importante comprender el protocolo

Tener una comprensión práctica del protocolo de comunicación del G09L agiliza la configuración inicial, mejora la eficiencia en la resolución de problemas y respalda una operación confiable a largo plazo cuando se integra con Plaspy. Conocer los límites del protocolo y el contexto de transporte reduce errores de configuración y acelera la resolución de incidencias.

- Asegura que el dispositivo esté configurado para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888 para que Plaspy reciba los datos
- Facilita la solución de problemas de conectividad al centrar la investigación en el transporte, el APN y la configuración del servidor
- Apoya decisiones informadas sobre intervalos de reporte, filtrado de eventos y retención de datos en Plaspy
- Permite una mejor coordinación con técnicos de campo para actualizaciones de firmware o revisiones de hardware
- Reduce el tiempo de integración al aclarar qué datos espera Plaspy y cómo suele reportarlos el rastreador

## Por qué usar Plaspy con este protocolo

Usar el CanTrack G09L con Plaspy brinda a las flotas visibilidad consolidada de la ubicación de los vehículos, eventos de conducción y salud del dispositivo, manteniendo una instalación discreta en la luz trasera. Plaspy centraliza telemetría en tiempo real, reproducción histórica y alertas para que los operadores supervisen rutas, respondan incidentes y analicen el comportamiento de conducción desde una misma plataforma.

Para obtener más información sobre Plaspy y cómo se integra con dispositivos como el G09L visite https://www.plaspy.com. Para los detalles de protocolo específicos del dispositivo, notas de firmware e instrucciones de configuración más recientes consulte al fabricante en https://www.cantrackgps.com/. El soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo por lo que se recomienda verificar la información vigente en el sitio del fabricante.

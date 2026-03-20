---
slug: /atrack/al11/protocol
id: al11-protocol
sidebar_label: Protocol
title: ATrack - AL11 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del ATrack AL11 y su comunicación con Plaspy para seguimiento confiable de vehículos y activos
keywords:
  - Protocolo ATrack AL11
  - Protocolo GPS ATrack AL11
  - Protocolo de comunicación ATrack AL11
  - Protocolo de rastreo ATrack AL11
  - Compatibilidad ATrack AL11 Plaspy
  - Protocolo de dispositivo Plaspy
  - Rastreador 4G GPS AL11
  - Rastreo de activos AL11
  - Rastreo vehicular AL11
  - Rastreador AL11 IP67
---

# ATrack - Protocolo AL11

Esta página ofrece una visión pública y general del contexto de comunicación del ATrack AL11 cuando se integra con Plaspy. Se centra en cómo el dispositivo reporta datos a la plataforma Plaspy y en los aspectos de transporte y compatibilidad que conviene considerar, sin exponer detalles privados de implementación. Utilice esta información como referencia para la planificación de integraciones y la resolución de problemas, junto con la documentación del fabricante.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo cuando el equipo informa al endpoint de Plaspy. El comportamiento exacto del protocolo del AL11 puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que siempre debe verificar el comportamiento específico del dispositivo con la documentación de ATrack y las notas de versión del firmware.

## Visión general del protocolo

El AL11 utiliza un protocolo de reporte para enviar información de ubicación, estado y sensores desde el rastreador hacia un servidor remoto. En la práctica, este protocolo permite que el dispositivo se identifique ante el servidor, transmita telemetría periódica y por eventos, y mantenga informado al servidor sobre el estado de salud del equipo y su movimiento.

- Proporciona identificación del dispositivo y telemetría periódica para que Plaspy pueda asociar los datos con el activo correcto
- Transmite actualizaciones de ubicación y datos de sensores o eventos utilizados para geolocalización y monitoreo de estado
- Admite intervalos de reporte configurables y disparadores por eventos según la implementación del firmware del dispositivo
- Permite al servidor recibir información de estado útil para el monitoreo de salud del equipo y la visibilidad de la flota
- Funciona sobre transportes de red estándar, por lo que el AL11 puede reportar a servidores centralizados de flotas como Plaspy

## Cómo Plaspy detecta el protocolo

Plaspy recibe los reportes de dispositivos en un endpoint y puerto compartidos y detecta automáticamente el protocolo cuando llegan los datos. Para la mayoría de usuarios, esto implica una configuración mínima dentro de Plaspy una vez que el AL11 está apuntando al endpoint de reporte de Plaspy.

- Plaspy escucha reportes entrantes de dispositivos en el dominio d.plaspy.com
- La IP del servidor Plaspy es 54.85.159.138 y la plataforma acepta conexiones en el puerto 8888
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan reportes con el formato esperado al endpoint
- Si el AL11 está configurado para reportar a d.plaspy.com o a 54.85.159.138 en el puerto correcto, normalmente no es necesario seleccionar el protocolo manualmente dentro de Plaspy

## Transporte y contexto de conexión

El AL11 soporta conectividad celular moderna y puede usar UDP o TCP para enviar reportes, según la configuración del dispositivo y el firmware. El transporte elegido influye en cómo el dispositivo establece la sesión con el servidor y cómo se entregan los mensajes individuales.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte y la configuración del equipo
- Los dispositivos pueden apuntar al endpoint de Plaspy usando el dominio d.plaspy.com o la IP del servidor 54.85.159.138
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos soportados, reduciendo la complejidad en flotas mixtas
- Elija el transporte según la configuración del dispositivo y las condiciones de red; verifique las opciones de firmware del AL11 para conocer los modos de transporte preferidos
- Asegúrese de que cortafuegos intermedios o políticas de la red móvil permitan tráfico saliente UDP o TCP hacia el endpoint de Plaspy en el puerto configurado

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden modificar qué mensajes o campos envía el AL11; confirme la compatibilidad con la versión de firmware instalada
- Revisiones de hardware u opciones de sensores pueden cambiar la telemetría disponible, por ejemplo eventos del acelerómetro o estados de entradas
- Los parámetros de configuración del fabricante (por ejemplo host del servidor, tipo de transporte e intervalos de reporte) determinan cómo se comunica el AL11 con Plaspy
- El reporte del dispositivo puede verse afectado por la cobertura de red y la tecnología celular seleccionada por la tarjeta SIM y el operador
- Siempre valide que el dispositivo esté apuntando a d.plaspy.com o a 54.85.159.138 en el puerto 8888 y que esté usando el transporte previsto (UDP o TCP)
- Ante la duda, consulte la documentación de ATrack para ajustes específicos del modelo y recomendaciones de firmware

## Por qué importa entender el protocolo

Comprender cómo el AL11 se comunica con Plaspy facilita la integración y ayuda a resolver problemas comunes en despliegues. Conocer el comportamiento básico del protocolo del rastreador hace más sencillo confirmar que el dispositivo está reportando correctamente e interpretar los datos dentro de la plataforma de flota.

- Ayuda a asegurar que el dispositivo esté configurado correctamente para reportar al endpoint de Plaspy y alcanzar d.plaspy.com o 54.85.159.138
- Agiliza la resolución de problemas cuando falta telemetría o es inconsistente, permitiendo acotar el problema a transporte, firmware o configuración
- Mejora la planificación de despliegues al alinear intervalos de reporte y ajustes de eventos con los requerimientos operativos
- Favorece operaciones de flota confiables al clarificar cómo los eventos y actualizaciones de estado del dispositivo se traducen en alertas e informes
- Proporciona contexto para actualizaciones de firmware o cambios de configuración que puedan afectar la visibilidad de datos en Plaspy

## Por qué usar Plaspy con este protocolo

Usar el ATrack AL11 con Plaspy ofrece a las organizaciones una vía sencilla para agregar datos de ubicación y eventos desde rastreadores robustos 4G/3G en una única plataforma de gestión de flotas. El endpoint centralizado de Plaspy y la detección automática de protocolo permiten que muchas unidades AL11 se integren rápidamente una vez que estén configuradas para reportar al servidor Plaspy.

Para configuración detallada del dispositivo, consulte la guía de configuración del AL11 y asegúrese de que el equipo esté apuntando al endpoint de reporte de Plaspy en d.plaspy.com o a la IP 54.85.159.138 usando el puerto 8888. Plaspy usa el mismo puerto para todos los dispositivos y detecta automáticamente el protocolo del rastreador, lo que agiliza la incorporación y reduce la configuración por dispositivo.

Para obtener más información sobre Plaspy y los flujos de trabajo compatibles visite https://www.plaspy.com. Para detalles del protocolo del fabricante, notas de firmware e instrucciones específicas de configuración de dispositivo, verifique la información en el sitio de ATrack en https://www.atrack.com.tw/ ya que el soporte de dispositivos y el comportamiento del firmware pueden cambiar con el tiempo.

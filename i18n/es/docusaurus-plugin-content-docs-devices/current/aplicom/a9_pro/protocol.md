---
slug: /aplicom/a9_pro/protocol
id: a9_pro-protocol
sidebar_label: Protocol
title: Aplicom - A9 PRO Protocol
sidebar_class_name: menu_item_tracker
description: Panorama público del protocolo del Aplicom A9 PRO y su comunicación con Plaspy para rastreo y telemetría
keywords:
  - protocolo Aplicom A9 PRO
  - protocolo GPS Aplicom A9 PRO
  - Aplicom A9 PRO y Plaspy
  - protocolo de comunicación A9 PRO
  - protocolo de rastreo A9 PRO
  - compatibilidad protocolo Aplicom
  - protocolo rastreador GPS Plaspy
  - gestión de flotas Aplicom
  - protocolo telemetría Aplicom
  - integración dispositivo A9 PRO
---

# Aplicom - Protocolo A9 PRO

Esta página ofrece una visión pública y práctica del contexto del protocolo de comunicación del Aplicom A9 PRO en relación con su uso en Plaspy. Está enfocada en cómo el dispositivo entrega posición GNSS, telemetría del bus CAN y eventos de E/S a la superficie de ingestión de Plaspy sin exponer detalles internos específicos de implementación. Use esta guía para comprender el papel general del protocolo del rastreador en la integración del dispositivo y para prepararse en tareas de configuración y solución de problemas.

El Aplicom A9 PRO es una unidad telemática 4G LTE compacta y robusta con GNSS mejorado, capacidad de bus CAN y E/S flexibles. Plaspy utiliza ajustes de conexión compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta a la plataforma. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por ello siempre valide los detalles específicos del dispositivo con la documentación del fabricante cuando sea necesario.

## Resumen del protocolo

El protocolo que utiliza el A9 PRO es el mecanismo que transporta telemetría, posiciones GNSS, notificaciones de eventos y datos del bus del vehículo desde el equipo hasta Plaspy. En un despliegue típico, el protocolo asegura que el dispositivo se identifique, entregue datos con marca de tiempo y comunique cambios de estado clave a la plataforma para seguimiento en tiempo real y procesamiento posterior.

- Permite la entrega de posición GNSS y marcas de tiempo a Plaspy para mapeo e informes históricos.
- Transporta telemetría del bus CAN y eventos de sensores y E/S para que los parámetros del vehículo estén disponibles en los paneles de Plaspy.
- Lleva estado del dispositivo y alertas de eventos como disparos del acelerómetro, cambios en E/S y estado de encendido.
- Soporta flujos de gestión remota del dispositivo cuando se combina con las herramientas de Aplicom y el reenvío mediante ADS REST API.
- Actúa como puente entre las fuentes de datos a bordo y la canalización de ingestión de Plaspy sin que el usuario necesite seleccionar el protocolo manualmente.

## Cómo detecta Plaspy el protocolo

Plaspy acepta conexiones de muchos modelos de rastreadores y determina automáticamente el protocolo del dispositivo cuando este reporta al endpoint de Plaspy. Esta detección automática reduce pasos de configuración manual dentro de Plaspy siempre que el rastreador esté apuntando al endpoint correcto y utilice ajustes de transporte compatibles.

- El endpoint público de Plaspy es d.plaspy.com y la plataforma es accesible en 54.85.159.138.
- El endpoint de Plaspy escucha en el puerto 8888; todos los dispositivos en Plaspy usan el mismo puerto para reportar.
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888, según el hardware y la instalación.
- Cuando el A9 PRO está correctamente configurado para reportar al endpoint de Plaspy, por lo general no se requiere la selección manual de protocolo en Plaspy.
- La detección automática permite a Plaspy enrutar los datos entrantes al parser y canal de ingestión apropiados para su procesamiento.

## Contexto de transporte y conexión

Los ajustes de conexión determinan cómo el A9 PRO entrega telemetría a Plaspy y son uno de los primeros elementos a verificar durante la puesta en marcha. El dispositivo puede usar distintos protocolos de transporte y formatos de dirección según la preferencia del instalador y las condiciones de la red.

- El A9 PRO puede configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138.
- Los dispositivos pueden usar UDP o TCP en el puerto 8888; elija el transporte que su red y firmware del dispositivo soporten.
- Plaspy utiliza el mismo puerto para todos los dispositivos soportados, lo que simplifica la configuración de endpoints en flotas mixtas.
- Verifique la conectividad celular y la configuración del APN en el dispositivo para que las conexiones salientes al endpoint de Plaspy tengan éxito.
- Asegúrese de que los firewalls de la red permitan tráfico saliente hacia el servidor de Plaspy y el protocolo de transporte seleccionado.

## Notas sobre compatibilidad del protocolo

- Las variaciones de firmware entre unidades A9 PRO pueden cambiar las opciones de reporte soportadas y los campos de telemetría disponibles.
- Las revisiones de hardware o variantes de fábrica pueden presentar diferentes capacidades de E/S y CAN que afectan los datos enviados.
- Herramientas del fabricante como la configuración Aplicom A-Series y el ADS REST API pueden usarse para reenviar o adaptar datos hacia Plaspy.
- La elección entre UDP y TCP puede influir en el comportamiento de entrega; verifique que la configuración del dispositivo coincida con los requisitos de red y fiabilidad previstos.
- Siempre valide qué funciones están disponibles en un número de serie o build de firmware determinado antes de finalizar los planes de integración.
- Para telemetría avanzada o mapeos personalizados, consulte la documentación y las herramientas de configuración de Aplicom para confirmar el comportamiento.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a asegurar una instalación confiable, interpretación precisa de datos y operación predecible a largo plazo cuando el A9 PRO se usa con Plaspy. Conocer el contexto del protocolo y del transporte agiliza la resolución de problemas y reduce cambios innecesarios una vez que los dispositivos están en campo.

- Confirma que el dispositivo está apuntando al endpoint correcto de Plaspy y usando el puerto 8888 como exige la plataforma.
- Ayuda a diagnosticar problemas de conectividad revisando la configuración UDP frente a TCP y la configuración de la red celular.
- Asegura que la telemetría esperada, como campos CAN y eventos de E/S, esté habilitada y mapeada correctamente en la configuración del dispositivo.
- Mejora la consistencia de eventos y alertas al alinear los intervalos de reporte y los ajustes de detección de movimiento del dispositivo con las expectativas de Plaspy.
- Reduce el riesgo en despliegues al identificar incompatibilidades de firmware o hardware antes de realizar implementaciones a gran escala.

## Por qué usar Plaspy con este protocolo

Usar el Aplicom A9 PRO con Plaspy ofrece a las organizaciones una forma escalable de capturar ubicación, telemetría del vehículo y datos de eventos en una sola plataforma. La combinación de las capacidades del A9 PRO y la detección automática de protocolo y el endpoint unificado de ingestión de Plaspy simplifica la visibilidad de la flota, las alertas y el análisis para los equipos operativos.

El modelo de endpoint y puerto compartido de Plaspy mantiene la configuración del dispositivo sencilla: apunte el A9 PRO a d.plaspy.com o a 54.85.159.138 usando UDP o TCP en el puerto 8888 y la plataforma detectará automáticamente el protocolo del rastreador. Para obtener más información sobre Plaspy y cómo puede integrarse con dispositivos telemáticos visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo; verifique la información de protocolo específica más reciente del fabricante en https://www.aplicom.com/

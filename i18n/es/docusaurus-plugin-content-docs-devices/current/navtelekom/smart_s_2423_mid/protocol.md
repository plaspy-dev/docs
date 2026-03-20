---
slug: /navtelekom/smart_s_2423_mid/protocol
id: smart_s_2423_mid-protocol
sidebar_label: Protocol
title: Navtelekom - SMART S-2423 MID+ Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para conectar el Navtelekom SMART S-2423 MID+ con Plaspy y comprobar compatibilidad
keywords:
  - Protocolo Navtelekom SMART S-2423 MID+
  - Protocolo GPS Navtelekom
  - Compatibilidad SMART S-2423 MID+ Plaspy
  - Protocolo de rastreador Navtelekom
  - Comunicación SMART S-2423 MID+
  - Protocolo de dispositivo Plaspy
  - Protocolo de seguimiento de flotas
  - Protocolo de telemetría vehicular
  - Protocolo rastreador GPS Plaspy
  - Compatibilidad de rastreo Navtelekom
---

# Navtelekom - Protocolo SMART S-2423 MID+

Esta página describe el contexto público del protocolo para usar el rastreador Navtelekom SMART S-2423 MID+ con Plaspy. Se enfoca en cómo el dispositivo se comunica con Plaspy a alto nivel, los ajustes de conexión recomendados y las consideraciones prácticas para asegurar el reporte confiable de posiciones y telemetría en la plataforma.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo cuando el equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por eso esta guía se mantiene en un nivel público y no sensible, pero señala los hechos clave de conexión que usted necesita para configurar e investigar la integración.

## Resumen del protocolo

El protocolo de reporte del SMART S-2423 MID+ define cómo el rastreador envía identificación, posición y datos de telemetría a un servidor remoto para que Plaspy los procese y presente. Su función es entregar de forma confiable posiciones GNSS con sello de tiempo, entradas de sensores e información básica de estado desde el vehículo hacia un endpoint central donde Plaspy vincula los datos con el activo correspondiente.

- Transporta la identificación del dispositivo y el contexto de sesión para que Plaspy pueda asociar los reportes con la cuenta y el activo correctos.
- Transmite reportes de posición periódicos o por evento y telemetría de movimiento para seguimiento en tiempo real y reproducción histórica.
- Entrega datos de sensores y E/S como eventos del acelerómetro, estados de entradas y lecturas de sensores de corto alcance para telemetría y alertas.
- Proporciona suficiente información para habilitar alertas, geocercas, historial de rutas y flujos simples de control remoto según lo que el dispositivo soporte.
- Funciona sobre canales de transporte comunes para que los integradores elijan el estilo de conexión que mejor se adapte a su despliegue y entorno de operador.

## Cómo Plaspy detecta el protocolo

Plaspy detecta automáticamente el protocolo del rastreador para las conexiones entrantes dirigidas al endpoint compartido de Plaspy. Cuando un SMART S-2423 MID+ está configurado para reportar a Plaspy, la plataforma usa las características de los datos entrantes para identificar y procesar el dispositivo sin que, en la mayoría de los casos, sea necesaria una selección manual del protocolo.

- Configure el destino de reporte del dispositivo hacia el dominio del servidor Plaspy d.plaspy.com o hacia la IP del servidor 54.85.159.138 usando el puerto común de Plaspy.
- Use el puerto 8888 para la conexión de reporte; Plaspy emplea el mismo puerto para todos los dispositivos soportados para simplificar el aprovisionamiento.
- Los dispositivos pueden enviarse por UDP o TCP en el puerto 8888 según la configuración del rastreador y las condiciones de la red.
- Cuando el dispositivo envía correctamente reportes al endpoint de Plaspy, el sistema detecta el protocolo del rastreador de forma automática y comienza a parsear los campos estándar de telemetría y posición.
- Si el dispositivo no aparece, verifique la accesibilidad de red, la configuración de APN y SIM, y que el rastreador esté apuntando al dominio o IP y puerto de Plaspy.

## Transporte y contexto de conexión

Las opciones de transporte y la dirección usada por el equipo son parte importante de una integración exitosa. El SMART S-2423 MID+ puede configurarse para enviar sus reportes por UDP o TCP al listener de Plaspy en el puerto compartido, y Plaspy acepta ambos transportes en el mismo puerto para adaptarse a diferentes configuraciones de dispositivo y comportamiento del operador.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y la preferencia del instalador.
- El dominio de servidor de Plaspy para reportes de dispositivos es d.plaspy.com y la IP pública del servidor es 54.85.159.138.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto para simplificar el aprovisionamiento de flotas y las reglas de firewall.
- Asegúrese de que los ajustes de APN del operador, el estado de la SIM y cualquier perfil de datos o APN en el dispositivo sean correctos para que el rastreador alcance d.plaspy.com o la IP del servidor.
- Si usa un firewall o un APN privado, permita conexiones salientes hacia el dominio o la IP del servidor en el puerto 8888 para el protocolo de transporte seleccionado.

## Notas sobre compatibilidad del protocolo

- Las variaciones de firmware pueden modificar los campos exactos, la cadencia de reporte o la telemetría opcional que el dispositivo envía, por lo que el comportamiento puede diferir entre versiones de firmware.
- Las revisiones de hardware y las interfaces opcionales (por ejemplo RS-485 o anexos 1-Wire) pueden cambiar qué telemetría está disponible para enviar a Plaspy.
- La selección de transporte (UDP vs TCP) es configurable y puede afectar las características de entrega de mensajes según las condiciones de red.
- Las herramientas de configuración del fabricante, como NTC Configurator, son la vía recomendada para preparar dispositivos para reportes a Plaspy y mantener el firmware actualizado.
- Confirme los ajustes de APN y SIM del dispositivo, ya que influyen en su capacidad para alcanzar el endpoint de Plaspy y ser detectado automáticamente.
- Siempre valide la compatibilidad y el comportamiento exacto del protocolo contra la documentación del dispositivo proporcionada por Navtelekom al planificar despliegues a gran escala.

## Por qué es importante comprender el protocolo

Comprender el protocolo de comunicación del rastreador y el contexto de conexión circundante ayuda a garantizar la entrega fiable de posiciones y telemetría a Plaspy, acelera la resolución de problemas durante la instalación y mejora la estabilidad operativa a largo plazo.

- Asegura que el servidor y el puerto correctos estén configurados para que los reportes lleguen a Plaspy sin intervención manual.
- Ayuda a diagnosticar problemas de conectividad como puertos bloqueados, APN incorrecto o incompatibilidades de transporte entre el dispositivo y la red.
- Aclara qué telemetría y entradas de sensores el dispositivo realmente reportará a Plaspy en función del firmware y las opciones de hardware.
- Permite establecer expectativas razonables sobre intervalos de reporte, activación por eventos y mapeo de sensores en los paneles de Plaspy.
- Facilita la planificación de despliegues a gran escala al identificar dependencias como el aprovisionamiento de SIM, herramientas de configuración y gestión de firmware.

## Por qué usar Plaspy con este protocolo

Usar el SMART S-2423 MID+ con Plaspy ofrece a los operadores de flotas un camino directo para consolidar posiciones GNSS, eventos basados en acelerómetro, entradas de sensores y telemetría de corto alcance en una sola plataforma telemática. El enfoque de endpoint compartido de Plaspy y la detección automática de protocolo reducen la carga de configuración en flotas mixtas y facilitan poner en línea nuevos dispositivos con rapidez.

Para saber más sobre Plaspy y cómo gestiona los reportes de dispositivos, visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo; verifique la información más reciente y específica del dispositivo con el fabricante en https://www.navtelecom.ru/ para asegurar una configuración y compatibilidad precisas.

---
slug: /aplicom/a11_ble/protocol
id: a11_ble-protocol
sidebar_label: Protocol
title: Aplicom - A11 BLE Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para usar el rastreador Aplicom A11 BLE con Plaspy en seguimiento de flotas y activos
keywords:
  - Protocolo Aplicom A11 BLE
  - Protocolo GPS Aplicom A11 BLE
  - Comunicación Aplicom A11 BLE
  - Protocolo de rastreo A11 BLE
  - Rastreador Aplicom Plaspy
  - A11 BLE Bluetooth LE
  - Protocolo de seguimiento de flotas
  - Protocolo de telemática vehicular
  - Compatibilidad de protocolo de rastreadores
  - Actualizaciones OTA A11 BLE
---

# Aplicom - Protocolo A11 BLE

Esta página describe el contexto del protocolo público para usar el rastreador Aplicom A11 BLE con Plaspy. Explica, en términos generales, cómo el dispositivo comunica datos a la plataforma Plaspy, qué papel cumple el protocolo de reporte en la entrega de telemetría y qué ajustes de conexión emplea Plaspy para recibir información de este modelo.

Plaspy utiliza un endpoint y puerto compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando la unidad está configurada para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por ello, utilice esta guía junto con la documentación del dispositivo y las notas de firmware de Aplicom.

## Resumen del protocolo

El protocolo de comunicación del A11 BLE permite empaquetar y transmitir información de posición, sensores y estado al servidor remoto para que los sistemas de monitoreo y los administradores de flota la consuman. El protocolo actúa como el contrato entre el dispositivo y Plaspy para entregar telemetría y actualizaciones de estado utilizables.

- Transporta datos telemáticos principales como posición GNSS, sello de tiempo y estado del dispositivo hacia el servidor
- Soporta la transmisión de datos de periféricos recopilados vía Bluetooth LE para casos de uso con sensores y balizas
- Permite identificar la unidad para que Plaspy asigne correctamente los mensajes entrantes al activo correspondiente
- Habilita señales de configuración y de actualización OTA iniciadas por las herramientas del fabricante o servicios de gestión
- Facilita reportes periódicos y mensajes basados en eventos para soportar flujos de trabajo de localización y alertas

## Cómo detecta Plaspy el protocolo

Plaspy recibe mensajes de los dispositivos en un endpoint compartido y usa esa conexión para determinar el manejo apropiado de los datos entrantes. Cuando un A11 BLE está configurado para reportar a Plaspy, la plataforma normalmente identificará el protocolo correcto de forma automática, de modo que usted no necesite seleccionar manualmente el protocolo dentro de Plaspy.

- El endpoint del servidor de Plaspy es d.plaspy.com y también accesible en 54.85.159.138 usando las configuraciones públicas
- Plaspy usa un único puerto para todos los dispositivos soportados, lo que simplifica la configuración y el onboarding
- El A11 BLE puede configurarse para reportar al endpoint de Plaspy usando opciones estándar de transporte de red
- La detección automática reduce pasos de configuración para el usuario cuando el dispositivo apunta correctamente al endpoint de Plaspy
- Si un dispositivo no parece conectarse, verifique las configuraciones de reporte y la compatibilidad de firmware según la documentación del fabricante

## Transporte y contexto de conexión

El transporte y direccionamiento de la conexión determinan cómo el A11 BLE alcanza Plaspy. El dispositivo admite modos de transporte comunes y puede configurarse para alcanzar el endpoint de Plaspy usando nombre de dominio o dirección numérica.

- Los dispositivos pueden usar UDP o TCP en el puerto 8888 dependiendo del soporte y la configuración del dispositivo
- Las unidades pueden configurarse para reportar al dominio d.plaspy.com o a la dirección numérica 54.85.159.138
- Plaspy acepta conexiones en el mismo puerto para todos los dispositivos, lo que simplifica los ajustes y el aprovisionamiento a nivel de flota
- Elija TCP cuando prefiera entrega confiable y comunicación orientada a sesión, o UDP para reporte con menor overhead cuando el dispositivo lo soporte
- Asegúrese de que el APN del dispositivo y la conectividad celular estén activos cuando use redes móviles para alcanzar el endpoint de Plaspy

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar funciones disponibles y detalles de los mensajes; valide la versión de firmware del dispositivo al diagnosticar compatibilidad
- Revisiones de hardware o perfiles de configuración diferentes del fabricante pueden alterar los transportes soportados o el manejo de periféricos
- Los datos de Bluetooth LE normalmente se reportan a través del canal principal de reporte del dispositivo; asegúrese de que los sensores BLE estén emparejados y reconocidos por el A11 BLE antes de confiar en esos datos en Plaspy
- La selección de transporte (UDP vs TCP) debe coincidir con la configuración del dispositivo y las restricciones de red, como firewalls o comportamiento del operador
- Confirme siempre que el dispositivo apunte al endpoint de Plaspy d.plaspy.com o a 54.85.159.138 y que use el puerto 8888 para evitar problemas de conectividad
- Consulte las notas de lanzamiento y las guías de configuración de Aplicom para comportamientos específicos del dispositivo y ajustes recomendados

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a garantizar una configuración inicial sin contratiempos, un diagnóstico efectivo y una operación consistente a largo plazo de los dispositivos A11 BLE en Plaspy. Saber cómo el dispositivo reporta datos y cómo Plaspy espera recibirlos reduce errores de configuración y acorta tiempos de resolución ante incidentes.

- Ayuda a verificar que el dispositivo está enviando los campos de telemetría esperados y que se identifica correctamente en Plaspy
- Orienta la elección del modo de transporte, los intervalos de reporte y las configuraciones de gestión de energía según los objetivos de la flota
- Mejora la resolución de problemas al aislar si la falla está en el dispositivo, la red o el servidor
- Facilita la integración de datos de sensores Bluetooth LE y explica el flujo de esos datos desde el periférico hasta el servidor
- Informa cuándo las actualizaciones de firmware o cambios del fabricante pueden requerir revalidación de ajustes en Plaspy

## Por qué usar Plaspy con este protocolo

Usar el Aplicom A11 BLE con Plaspy ofrece una vía práctica para centralizar datos de GPS, celular y sensores basados en Bluetooth LE en una única plataforma de gestión de flotas. Para organizaciones que requieren visibilidad sobre vehículos y activos, la combinación de las capacidades del hardware A11 BLE y la ingestión unificada de Plaspy simplifica el despliegue y el monitoreo operativo.

Para saber más sobre Plaspy y cómo gestiona la conectividad de dispositivos y la ingestión de telemetría, visite https://www.plaspy.com. Para los detalles más actuales del protocolo específico del dispositivo, notas de firmware y guías de configuración del Aplicom A11 BLE, verifique la información en el sitio del fabricante https://www.aplicom.com/.

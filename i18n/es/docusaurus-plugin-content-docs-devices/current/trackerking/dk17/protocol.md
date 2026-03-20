---
slug: /trackerking/dk17/protocol
id: dk17-protocol
sidebar_label: Protocol
title: TrackerKing - DK17 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo TrackerKing DK17 para integración con Plaspy, incluye ajustes de conexión y notas de compatibilidad
keywords:
  - Protocolo TrackerKing DK17
  - Protocolo GPS TrackerKing DK17
  - Protocolo de comunicación TrackerKing DK17
  - Protocolo de rastreo TrackerKing DK17
  - Compatibilidad TrackerKing DK17 con Plaspy
  - Protocolo rastreador vehicular DK17
  - Integración de rastreadores con Plaspy
  - Guía protocolo GPS para vehículos
  - Rastreo de flotas DK17
  - Compatibilidad protocolo rastreador GPS
---

# TrackerKing - Protocolo DK17

Esta página ofrece una visión pública y no sensible del contexto de comunicación para usar el TrackerKing DK17 con la plataforma Plaspy. Explica cómo el equipo informa ubicación y eventos a Plaspy, qué endpoints y transportes se usan comúnmente, y por qué entender el protocolo es importante para una integración exitosa y operación continua.

Plaspy utiliza ajustes de conexión compartidos para todos los equipos compatibles y detecta automáticamente el protocolo cuando un dispositivo reporta a la plataforma. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en contexto de alto nivel y recomendaciones de integración, en lugar de detalles internos de firmware o paquetes propietarios.

## Resumen del protocolo

El protocolo de reporte del DK17 define cómo el equipo se identifica, envía telemetría y comunica estados de eventos a un servidor backend. En términos prácticos, el protocolo permite que el rastreador entregue posiciones, lecturas de sensores y alertas a Plaspy para que la plataforma muestre ubicaciones en tiempo real, notificaciones y reportes históricos.

- Permite actualizaciones periódicas y basadas en eventos para seguimiento en vivo e historial de rutas.
- Transporta telemetría como voltaje de batería, estadísticas de kilometraje y estado de encendido para monitoreo de flota.
- Transmite notificaciones de alarma y eventos como SOS, vibración, geocerca y pérdida de energía para activar alertas.
- Admite comandos de control remoto cuando el firmware del equipo y el modelo de seguridad lo permiten.
- Proporciona la información de identificación que Plaspy necesita para asociar los reportes entrantes con el registro del dispositivo.

## Cómo detecta Plaspy el protocolo

Plaspy recibe el tráfico entrante de los dispositivos en un endpoint compartido y utiliza esa conexión para reconocer el formato de reporte y poblar la plataforma con datos utilices. En la mayoría de instalaciones DK17, el usuario no necesita seleccionar manualmente un protocolo dentro de Plaspy si el dispositivo está configurado correctamente para reportar al endpoint de Plaspy.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138. El puerto es 8888.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el DK17 reporta al endpoint de la plataforma.
- Los usuarios normalmente configuran el APN y el host de reporte del dispositivo hacia d.plaspy.com o a la IP indicada para establecer conectividad.
- Dado que Plaspy utiliza un puerto compartido para la comunicación de dispositivos, no se requiere una configuración de puerto por dispositivo en el lado de la plataforma.
- Una identificación correcta del dispositivo en los primeros reportes permite que Plaspy asocie la telemetría con el activo de flota correspondiente.

## Transporte y contexto de conexión

El transporte de la conexión y el direccionamiento son parte importante de una integración exitosa, pero no reemplazan la necesidad de confirmar la configuración del firmware del dispositivo y del APN. El DK17 puede configurarse para usar métodos de transporte comunes soportados por el equipo y la red móvil.

- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según el soporte del equipo y la preferencia del instalador.
- Los dispositivos pueden apuntar a d.plaspy.com o a la IP 54.85.159.138 al configurar el host de reporte.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración del servidor y reduce diferencias por equipo.
- Elementos a nivel de red como la configuración del APN, la salud de la SIM y la cobertura del operador afectan la confiabilidad del transporte.
- Al elegir UDP frente a TCP, considere el comportamiento de la red y las características de retransmisión según las implemente el firmware del dispositivo.

## Notas sobre compatibilidad del protocolo

- Diferencias en la versión de firmware pueden modificar campos soportados, nombres de eventos y la telemetría disponible; verifique las notas de la versión del firmware DK17 cuando el comportamiento preciso sea importante.
- Revisiones de hardware o variantes del modelo pueden agregar u omitir sensores y entradas que afectan la telemetría reportada a Plaspy.
- La selección de transporte (UDP o TCP) es una elección de configuración del dispositivo y puede afectar garantías de entrega y tiempos de espera.
- Los valores por defecto del fabricante para intervalos de reporte y umbrales de eventos pueden requerir ajustes para despliegues a escala de flota o para cumplir con requisitos regulatorios regionales.
- Valide la configuración del APN y del host de reporte en el equipo para asegurar que pueda alcanzar d.plaspy.com o 54.85.159.138 de forma confiable.
- Confirme que cualquier función de control remoto o inmovilizador esté soportada tanto por el firmware instalado como por los permisos configurados en la plataforma.

## Por qué es importante entender el protocolo

Conocer cómo se comunica el DK17 ayuda a instaladores y responsables de flota a configurar correctamente los equipos, diagnosticar problemas de conectividad o reporte, y asegurar que las alertas y controles funcionen como se espera con el tiempo.

- Acelera la configuración inicial alineando host de reporte, APN y transporte del dispositivo con las expectativas de conexión de Plaspy.
- Mejora la resolución de problemas al distinguir entre fallas de transporte de red y comportamientos del firmware del equipo.
- Ayuda a garantizar que los eventos de alarma se mapeen a notificaciones e flujos de trabajo de operadores previstos.
- Soporta despliegues seguros de funciones de control remoto al confirmar si el equipo y el firmware aceptan comandos desde la plataforma.
- Facilita la planificación del ciclo de vida al clarificar cómo actualizaciones de firmware o cambios de hardware pueden afectar los campos reportados e integraciones.

## Por qué usar Plaspy con este protocolo

Usar dispositivos TrackerKing DK17 con Plaspy ofrece visibilidad centralizada de la ubicación del vehículo, telemetría y estado de eventos para que las flotas puedan monitorear operaciones, responder a incidentes y analizar uso histórico. La amplia tolerancia de voltaje de entrada del DK17, batería de respaldo y su conjunto de funciones de alarma y control lo convierten en una opción práctica para rastreo profesional vehicular cuando se combina con una plataforma capaz de ingerir y presentar la telemetría.

Si desea conocer más sobre Plaspy y cómo funciona con dispositivos como el DK17, visite https://www.plaspy.com. Para detalles específicos más recientes del protocolo del dispositivo, notas de firmware y guías del fabricante, verifique la información en el sitio de TrackerKing en https://trackerking.cn/. El soporte de protocolo, comportamiento de firmware e implementaciones del fabricante pueden cambiar con el tiempo, por lo que se recomienda confirmar la documentación vigente al planificar despliegues o actualizaciones.

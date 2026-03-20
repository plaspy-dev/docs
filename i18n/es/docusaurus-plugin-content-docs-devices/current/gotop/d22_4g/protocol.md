---
slug: /gotop/d22_4g/protocol
id: d22_4g-protocol
sidebar_label: Protocol
title: GOTOP - D22-4G Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para usar el GOTOP D22-4G con servidores Plaspy para reportes confiables de GPS y telemetría
keywords:
  - Protocolo GOTOP D22-4G
  - Protocolo GPS GOTOP D22-4G
  - Protocolo GOTOP D22-4G para Plaspy
  - Protocolo de comunicación GOTOP D22-4G
  - Protocolo de rastreo GOTOP D22-4G
  - Protocolo para rastreador vehicular
  - Compatibilidad rastreador GPS Plaspy
  - Protocolo de rastreo D22 4G
  - Documentación protocolo de rastreo vehicular
  - Protocolo de rastreo de flotas Plaspy
---

# GOTOP - Protocolo D22-4G

Esta página describe el contexto público del protocolo para usar el rastreador GOTOP D22-4G con Plaspy. Explica a alto nivel cómo comunica el dispositivo, qué papel juega el protocolo de reportes en la integración con Plaspy y cuáles son los ajustes de conexión que administradores e integradores deben configurar y verificar.

Plaspy emplea ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. El D22-4G es una terminal industrial impermeable para vehículos que transmite GPS y telemetría por 4G LTE a Plaspy para monitoreo de flotas, flujos antirobo y generación de eventos.

## Resumen del protocolo

El protocolo de comunicación del D22-4G define cómo el rastreador se identifica, reporta ubicación y telemetría de sensores, y envía notificaciones de eventos a un servidor remoto como Plaspy. Los protocolos para dispositivos de este tipo buscan entrega confiable, uso eficiente de datos móviles y codificación de eventos que permita a Plaspy presentar ubicación, alarmas y estados en el panel.

- Permite transmisiones periódicas y basadas en eventos de coordenadas GPS BDS, velocidad y estado de movimiento a Plaspy.
- Envía telemetría del equipo como estado de encendido ACC, entradas de sensores de puerta, alarmas y eventos de corte de combustible para su procesamiento.
- Soporta almacenamiento en buffer cuando está fuera de línea y retransmisión al volver a cobertura para recuperar datos históricos e ingresarlos en Plaspy.
- Permite que el dispositivo se identifique de forma única para que Plaspy relacione los datos entrantes con el activo y la configuración correctos.
- Transporta mensajes de alarma y estado que Plaspy mapea a alertas y reglas de automatización para flujos operativos.

## Cómo Plaspy detecta el protocolo

Plaspy acepta conexiones de muchos modelos de rastreadores y detecta automáticamente el protocolo cuando un dispositivo configurado correctamente reporta al endpoint de Plaspy. En la mayoría de los casos, usted no necesita seleccionar manualmente el protocolo dentro de Plaspy si el dispositivo apunta al servidor de Plaspy y envía sus reportes estándar.

- El nombre de dominio del servidor Plaspy para reportes de dispositivos es d.plaspy.com.
- La IP del servidor Plaspy es 54.85.159.138 y el endpoint configurado resuelve a esa dirección de producción.
- El puerto usado por Plaspy para conexiones de dispositivos es 8888 y todos los dispositivos en Plaspy usan el mismo puerto.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que los dispositivos correctamente apuntados normalmente se ingieren sin selección manual.
- Si un dispositivo no aparece en Plaspy, verifique que esté enviando mensajes a d.plaspy.com o a 54.85.159.138 en el puerto 8888 y revise la configuración del equipo y la conectividad de red.

## Transporte y contexto de conexión

La elección de transporte, como TCP o UDP, influye en el comportamiento de la conexión pero no cambia el hecho de que Plaspy recibe los mismos datos de reporte para su procesamiento. El D22-4G soporta transporte celular 4G LTE y puede configurarse para usar UDP o TCP en el puerto 8888 según los ajustes del dispositivo y el firmware.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte y la configuración del equipo.
- Los dispositivos destinados a Plaspy deben apuntar al dominio d.plaspy.com o a la IP 54.85.159.138.
- Plaspy usa el puerto 8888 para todos los dispositivos soportados, por lo que no se requiere mapeo de puertos por dispositivo.
- TCP ofrece entrega orientada a sesión mientras que UDP brinda reportes con menor overhead cuando la red y el dispositivo lo permiten.
- Verifique el APN y la configuración de datos celulares en el dispositivo para que el rastreador pueda establecer conexión con d.plaspy.com o 54.85.159.138.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden alterar la frecuencia de mensajes, los campos de telemetría disponibles y las opciones de transporte por defecto; siempre revise las notas de la versión del firmware.
- Las revisiones de hardware o las variantes regionales del D22-4G pueden tener conjuntos de entradas o disponibilidad de sensores ligeramente diferentes.
- Las opciones de configuración a nivel fabricante, como transporte por defecto, latidos (heartbeats) y comportamiento de retransmisión, pueden variar entre unidades.
- Elija transporte UDP o TCP según la confiabilidad de la red y las preferencias de configuración del dispositivo; algunas funciones pueden comportarse de manera distinta entre transportes.
- Valide la compatibilidad confirmando que el dispositivo pueda alcanzar d.plaspy.com o 54.85.159.138 en el puerto 8888 y que Plaspy esté ingiriendo mensajes desde el identificador del dispositivo.
- Consulte la documentación oficial del fabricante para diferencias específicas por modelo y firmware antes de desplegar flotas a gran escala.

## Por qué es importante conocer el protocolo

Comprender cómo comunica el D22-4G ayuda a configurar correctamente el equipo, agiliza la resolución de problemas y garantiza un comportamiento predecible durante la operación. Saber qué señales envía el rastreador y cómo Plaspy las acepta reduce el tiempo de integración y facilita la continuidad de la telemetría para los equipos de operaciones.

- Asegura que se apliquen correctamente el servidor, el APN y los ajustes de transporte para que el rastreador alcance d.plaspy.com en el puerto 8888.
- Facilita la resolución de problemas por datos faltantes o incompletos al alinear el comportamiento del firmware con los campos de telemetría esperados.
- Permite tomar decisiones informadas sobre transporte y intervalos de latido para optimizar consumo de batería y datos.
- Mejora la sintonía de alarmas y la clasificación de eventos cuando usted conoce cuáles entradas de sensores reporta el dispositivo.
- Reduce problemas de despliegue al verificar compatibilidad de firmware y revisión de hardware antes de instalaciones masivas.

## Ventajas de usar Plaspy con este protocolo

Usar el GOTOP D22-4G con Plaspy ofrece una vía práctica para obtener visibilidad en tiempo real de la flota, alertas basadas en eventos y análisis operativos. El dispositivo transmite coordenadas GPS BDS, entradas de ignición y puertas, alarmas y telemetría a Plaspy para que los gestores de flotas puedan monitorear activos, reaccionar ante incidentes y mantener un historial audit-ready de la actividad vehicular.

Plaspy acepta reportes de dispositivos en un único endpoint y puerto estandarizados, lo que simplifica los despliegues a escala de flota y la gestión continua de equipos. Para saber más sobre Plaspy y cómo trabaja con dispositivos como el GOTOP D22-4G visite https://www.plaspy.com. Por favor, verifique los detalles específicos del protocolo del dispositivo, el comportamiento del firmware y la guía del fabricante en el sitio oficial de GOTOP https://www.gotop.cc/.

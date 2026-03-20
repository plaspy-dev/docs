---
slug: /topten/pg99/protocol
id: pg99-protocol
sidebar_label: Protocol
title: TopTen - PG99 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del rastreador TopTen PG99 y su comunicación con Plaspy para seguimiento e integración confiables
keywords:
  - TopTen PG99
  - protocolo PG99
  - protocolo GPS TopTen
  - rastreador GPS PG99
  - comunicación PG99
  - compatibilidad rastreador TopTen
  - PG99 Plaspy
  - seguimiento vehicular PG99
  - rastreador de activos PG99
  - protocolo GPS Plaspy
---

# TopTen - Protocolo PG99

Esta página resume el contexto público del protocolo para usar el rastreador GPS TopTen PG99 con Plaspy. Se centra en cómo el dispositivo se comunica en términos generales para que administradores de flotas e integradores comprendan el papel del protocolo de reporte al conectar unidades PG99 a Plaspy para el seguimiento de vehículos y activos.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando un equipo informa a la plataforma. El endpoint de Plaspy es accesible en d.plaspy.com y en la IP 54.85.159.138 en el puerto 8888. Los equipos pueden configurarse para usar UDP o TCP en el puerto 8888. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que confirme los detalles específicos del dispositivo antes del despliegue.

## Resumen del protocolo

El PG99 comunica posición, estado y eventos de alarma a un servidor remoto usando su protocolo de reporte. Ese protocolo define cómo el rastreador se identifica, cómo se informan la ubicación y la telemetría, y cómo se entregan las notificaciones de eventos a la plataforma que recopila e interpreta los datos.

- Los datos de identificación y registro del dispositivo permiten a Plaspy asociar los reportes entrantes con el rastreador y la cuenta correctos.
- El reporte de ubicación incluye coordenadas GPS cuando están disponibles y datos de LBS como alternativa cuando la señal GPS es débil o no está disponible.
- Los campos de telemetría y estado transmiten condición de batería, alarmas de movimiento o vibración, velocidad, dirección y odómetro o indicadores de tiempo de funcionamiento según lo soporte el dispositivo.
- Los mensajes de alerta y alarma, como alarma por vibración, batería baja y exceso de velocidad, se reenvían para que Plaspy pueda generar notificaciones y entradas de historial.
- El comportamiento de gestión de energía, incluyendo modos de sueño profundo e intervalos de reporte, afecta la frecuencia con la que el equipo envía datos y cómo Plaspy interpreta las interrupciones en los reportes.

## Cómo detecta Plaspy el protocolo

Plaspy recibe reportes de dispositivos en un único endpoint compartido y la plataforma identifica automáticamente el protocolo de reporte usado por un flujo entrante del dispositivo. En la mayoría de los casos, una vez que el PG99 está configurado para reportar a Plaspy, no se requiere seleccionar el protocolo de forma manual dentro de la plataforma.

- Plaspy escucha en un endpoint común en d.plaspy.com y 54.85.159.138 usando el puerto 8888.
- Los dispositivos pueden configurarse para usar UDP o TCP para enviar reportes al endpoint de Plaspy.
- Plaspy detecta automáticamente el protocolo del rastreador para dispositivos correctamente configurados que reportan al endpoint compartido.
- Usted generalmente solo necesita asegurarse de que el rastreador esté apuntando al host y puerto de Plaspy y que el ID de dispositivo requerido esté programado correctamente en la unidad.
- Si un dispositivo no aparece en línea, revise la configuración de reporte del dispositivo, la selección del transporte y las diferencias de firmware que puedan afectar la compatibilidad.

## Contexto de transporte y conexión

El contexto de conexión describe cómo el PG99 establece y mantiene la comunicación con Plaspy más que los detalles de bajo nivel del protocolo. El PG99 puede usar distintos métodos de transporte y modos de energía que influyen en la conectividad y en el comportamiento de reporte.

- El PG99 puede configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138.
- Plaspy usa el puerto 8888 para todos los dispositivos soportados, lo que simplifica la configuración cuando la flota mezcla diferentes modelos.
- El equipo puede enviar datos por UDP o TCP en el puerto 8888 según la configuración del rastreador y las condiciones de la red.
- Los modos de sueño profundo y ahorro de energía del PG99 afectan la frecuencia de reporte y pueden retrasar la transmisión hasta los intervalos programados de activación.
- El reporte LBS ofrece una ubicación aproximada cuando no hay señal GPS, lo cual repercute en la forma en que Plaspy presenta la información.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el conjunto de campos disponibles, el comportamiento de las alarmas y los intervalos de reporte. Verifique las notas de la versión del firmware cuando sea posible.
- Las variantes de hardware y los lotes de fabricación a veces difieren en funciones soportadas o en la configuración por defecto.
- Las opciones de configuración del fabricante, como la selección del transporte y las configuraciones de sueño profundo, influirán en cómo el rastreador comunica con Plaspy.
- El fallback por LBS y el comportamiento de GPS asistido (A-GPS) dependen de la implementación y pueden variar según la disponibilidad de la red.
- Pruebe cualquier nuevo despliegue en la flota con dispositivos representativos para confirmar que los reportes, las alarmas y el comportamiento de energía cumplen los requisitos operativos.
- Siempre contraste la documentación del fabricante para instrucciones específicas del modelo y formatos de comando por defecto.

## Por qué es importante entender el protocolo

Conocer cómo se comunica el PG99 ayuda a garantizar una configuración fiable, la correcta interpretación de los datos reportados y una resolución de problemas más eficiente cuando los dispositivos no se comportan como se espera. Entender de forma práctica el comportamiento del protocolo también le ayuda a gestionar las compensaciones de energía y la rapidez de respuesta de las alarmas.

- Asegura el registro correcto del dispositivo para que Plaspy pueda mapear los reportes entrantes al activo o vehículo correspondiente.
- Ayuda a establecer intervalos de reporte y modos de energía apropiados para la vida operativa requerida.
- Mejora la resolución de problemas al distinguir entre problemas de conectividad y diferencias de protocolo o firmware.
- Aclara las expectativas respecto a la precisión de GPS frente a LBS y cuándo se usará información de respaldo.
- Facilita la planificación de flujos de trabajo de alarmas y notificaciones en Plaspy con base en el conjunto de eventos del dispositivo.

## Por qué usar Plaspy con este protocolo

Usar dispositivos TopTen PG99 con Plaspy ofrece a las organizaciones una forma centralizada de recopilar ubicación y eventos de alarma de rastreadores de activos en distintas implementaciones. El endpoint compartido de Plaspy y la detección automática de protocolos reducen la carga de configuración y simplifican poner en línea unidades PG99 junto a otros modelos soportados.

Plaspy centraliza alertas, datos históricos de ubicación y monitoreo en tiempo real para que los equipos mantengan la supervisión operativa al aprovechar las funciones del PG99, como modos de sueño profundo, múltiples opciones de reporte y alarmas de vibración y batería baja. Para obtener más información sobre Plaspy y cómo funciona con modelos comunes de rastreadores visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que confirme la documentación más reciente del dispositivo en el sitio del fabricante http://www.t10.cn.

---
slug: /lk_gps/lk900a_b_c/protocol
id: lk900a_b_c-protocol
sidebar_label: Protocol
title: LK-GPS - LK900A/B/C Protocol
sidebar_class_name: menu_item_tracker
description: Información pública del protocolo para usar el rastreador LK900A/B/C con Plaspy y orientación de compatibilidad
keywords:
- Protocolo LK GPS LK900A
- Protocolo LK GPS LK900B
- Protocolo LK GPS LK900C
- Protocolo GPS LK900A B C
- Protocolo de comunicación LK GPS
- Compatibilidad LK GPS Plaspy
- Guía de protocolo para rastreadores LK GPS
- Rastreo de vehículos protocolo Plaspy
- Integración telemetría LK GPS
- Rastreo de activos LK GPS
---

# LK-GPS - Protocolo LK900A/B/C

Esta página ofrece el contexto público del protocolo para usar el rastreador LK-GPS LK900A/B/C con Plaspy. Describe, en términos generales, cómo el dispositivo intercambia ubicación y telemetría con Plaspy y destaca los ajustes de conexión y consideraciones prácticas necesarios para garantizar la entrega fiable de actualizaciones de posición, eventos e historial a la plataforma.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando éste reporta a la plataforma. El LK900A/B/C es un rastreador GPS GSM magnético 4G compatible con Plaspy, con opciones de batería de larga duración y un conjunto de eventos de telemetría, aunque el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Para conectividad, el dominio del servidor Plaspy es d.plaspy.com, la IP del servidor Plaspy es 54.85.159.138 y el puerto es 8888. Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 y todos los dispositivos en Plaspy emplean el mismo puerto.

## Resumen del protocolo

El protocolo de reporte del dispositivo es el mecanismo que transporta posiciones GPS, identificación del equipo y telemetría desde el rastreador hacia Plaspy. La documentación pública de la serie LK900 suele centrarse en qué datos se informan y en cómo apuntar el dispositivo a un endpoint en la nube, más que en detalles internos del analizador. En Plaspy, el protocolo permite a la plataforma interpretar actualizaciones de ubicación, disparadores de eventos y subidas periódicas de historial para visualización y alertas.

- Transmite coordenadas GPS y telemetría básica para que Plaspy pueda mostrar la posición en tiempo real y las rutas históricas.
- Envía alertas de eventos como geocerca, movimiento, batería baja y manipulación a los registros de eventos de Plaspy.
- Incluye información de identificación del dispositivo para que Plaspy asocie los reportes entrantes con el registro correcto del rastreador.
- Soporta modos de reporte periódico o por intervalos usados para balancear la frecuencia de actualizaciones y la vida de la batería en despliegues prolongados.
- Permite a Plaspy reconciliar actualizaciones en vivo y subidas periódicas en recorridos continuos y líneas de tiempo de eventos.

## Cómo Plaspy detecta el protocolo

Plaspy recibe reportes en un endpoint de red compartido y detecta automáticamente el protocolo del rastreador para la mayoría de los dispositivos soportados. Cuando un LK900A/B/C correctamente configurado apunta al endpoint de Plaspy, la plataforma asocia la fuente con el dispositivo correspondiente y comienza a procesar posiciones y eventos sin necesidad, en la mayoría de los casos, de seleccionar manualmente el protocolo.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138 para el reporte de dispositivos.
- El puerto es 8888 y Plaspy detecta automáticamente el protocolo del rastreador para los dispositivos que reportan a ese puerto.
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según la configuración del rastreador y el entorno de red.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración entre modelos y fabricantes.
- Si usted apunta correctamente el tracker al endpoint de Plaspy, normalmente no necesitará seleccionar el protocolo dentro de Plaspy de forma manual.

## Transporte y contexto de conexión

El transporte y el direccionamiento son fundamentales para entregar los datos del rastreador a Plaspy. La serie LK900 utiliza conectividad celular para reenviar mensajes a la nube; las opciones básicas para configurar el destino son un nombre DNS o una dirección IP y un protocolo de transporte. Comprender estas opciones de conexión ayuda a asegurar que el dispositivo pueda alcanzar Plaspy de forma fiable desde el campo.

- Los dispositivos pueden apuntar a d.plaspy.com o a 54.85.159.138 al configurar el host de reporte.
- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y las preferencias de configuración.
- Plaspy emplea el mismo puerto para todos los dispositivos soportados, lo que ayuda a estandarizar la configuración para flotas.
- Factores de red como reglas de firewall del operador, configuración del APN y disponibilidad de señal afectan la entrega exitosa de los reportes.
- Para pruebas, confirme que el dispositivo puede resolver o alcanzar el endpoint elegido sobre el transporte seleccionado desde la región de despliegue prevista.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden modificar el tiempo entre mensajes, campos de telemetría opcionales y la disponibilidad de eventos; siempre verifique las notas de firmware para su versión de dispositivo.
- Las revisiones de hardware entre LK900A, LK900B y LK900C pueden afectar el comportamiento de la batería, la disponibilidad de sensores o las bandas soportadas y deben validarse con las especificaciones del fabricante.
- Ajustes del lado del fabricante y variantes regionales pueden generar variaciones en el protocolo que afectan cómo y cuándo el rastreador reporta eventos específicos.
- Seleccione transporte UDP o TCP según las capacidades del dispositivo y la fiabilidad de la red; algunos operadores o redes prefieren un transporte sobre el otro.
- Valide la configuración del APN y del plan de datos móviles para asegurar que el rastreador pueda establecer conexión con Plaspy desde la red del operador.
- En caso de duda, pruebe un dispositivo en su área operativa y compare los datos en vivo y el comportamiento de eventos con lo esperado en la documentación del fabricante.

## Por qué es importante entender el protocolo

Conocer el protocolo de comunicación usado por el LK900A/B/C ayuda a garantizar una configuración fluida, un mapeo preciso de eventos y una fiabilidad a largo plazo al reportar a Plaspy. Tener expectativas claras sobre lo que el rastreador enviará y cómo Plaspy lo recibe reduce el tiempo de resolución de problemas y ayuda a los equipos a diseñar perfiles de rastreo eficientes.

- Mejora la precisión en la configuración para que los dispositivos apunten a d.plaspy.com o a la IP de Plaspy y usen el puerto 8888 con el transporte correcto.
- Facilita la resolución de actualizaciones faltantes verificando transporte, conectividad de la SIM y comportamiento del firmware en lugar de los ajustes de la plataforma.
- Permite decisiones informadas sobre intervalos de reporte y modos de ahorro de energía para cumplir los requisitos de vida de batería y visibilidad.
- Aclara cómo aparecerán los tipos de eventos del rastreador en Plaspy para configurar alertas y notificaciones correctamente.
- Apoya la planificación de actualizaciones de firmware y cambios de hardware que podrían alterar el comportamiento de reporte o la telemetría disponible.

## Por qué usar Plaspy con este protocolo

Usar el LK900A/B/C con Plaspy ofrece a las organizaciones un camino sencillo hacia ubicación en tiempo real, reproducción de historial y alertas basadas en eventos sin configuraciones complejas en la plataforma. El factor de forma magnético, las opciones de batería extendida y el conjunto de eventos hacen que el rastreador sea práctico para flotas, vehículos de alquiler, logística y monitoreo de activos, mientras Plaspy centraliza los datos para despacho, informes y flujos operativos.

Para saber más sobre Plaspy y cómo integra protocolos de dispositivo como el LK900A/B/C, visite https://www.plaspy.com. Para obtener los detalles más recientes específicos del protocolo del dispositivo, notas de firmware y orientación de implementación, siempre verifique la información con el fabricante en https://www.lk-gps.com. El soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo, por lo que confirmar la documentación más reciente del fabricante ayuda a asegurar un despliegue exitoso.

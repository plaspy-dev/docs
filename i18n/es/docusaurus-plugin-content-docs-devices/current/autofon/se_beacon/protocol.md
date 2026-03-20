---
slug: /autofon/se_beacon/protocol
id: se_beacon-protocol
sidebar_label: Protocol
title: AutoFon - SE+ Beacon Protocol
sidebar_class_name: menu_item_tracker
description: Visión general pública del protocolo del AutoFon SE+ Beacon y su comunicación con Plaspy para seguimiento y reportes confiables
keywords:
  - protocolo AutoFon SE Beacon
  - protocolo GPS AutoFon SE Beacon
  - AutoFon SE Beacon Plaspy
  - protocolo de seguimiento SE Beacon
  - protocolo rastreador GPS AutoFon
  - comunicación SE Beacon
  - rastreador GPRS AutoFon
  - rastreo encubierto de vehículos
  - rastreador de larga duración de batería
  - compatibilidad SE Beacon
---

# AutoFon - Protocolo SE+ Beacon

Esta página ofrece una descripción pública y no sensible del contexto de comunicación que utiliza el AutoFon SE+ Beacon cuando se integra con la plataforma Plaspy. Está dirigida a usuarios técnicos, integradores y administradores de flotas que desean entender en términos generales cómo el dispositivo informa posiciones y eventos a Plaspy, sin entrar en detalles internos del hardware.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo está configurado correctamente para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo del SE+ Beacon puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se concentra en los aspectos prácticos de la comunicación más que en los formatos de paquete a bajo nivel.

## Resumen del protocolo

El SE+ Beacon transmite posiciones GNSS y telemetría de eventos a un servidor remoto para que Plaspy pueda mostrar ubicación en vivo, historial y alertas. El dispositivo utiliza datos móviles (GPRS) como canal principal de reporte y SMS como respaldo para alertas o mensajes de emergencia, mientras que un amplio buffer interno conserva los mensajes no enviados durante cortes de conectividad.

- El protocolo del rastreador define cómo el dispositivo empaqueta fijaciones de posición, eventos de movimiento, pulsos de SOS y entradas de alarma para su transmisión al servidor.
- Los mensajes de protocolo permiten que el SE+ Beacon se identifique ante el servidor, reporte el estado del equipo y entregue metadatos de eventos que Plaspy puede asociar a eventos del tablero.
- Los mensajes de latido o life signal forman parte del ciclo de reporte para confirmar que el dispositivo está operativo y accesible desde Plaspy.
- El respaldo por SMS y la gran memoria interna tipo black box ayudan a garantizar la entrega de eventos cuando la conectividad GPRS es intermitente.
- Notificaciones para actualización remota de firmware se intercambian vía GPRS para mantener los equipos alineados con las revisiones del fabricante y las políticas operativas.

## Cómo detecta Plaspy el protocolo

Plaspy escucha en un endpoint y puerto compartidos las conexiones entrantes de rastreadores y determina automáticamente el protocolo apropiado cuando un dispositivo reporta correctamente. Esta detección automática reduce la necesidad de seleccionar el protocolo manualmente dentro de Plaspy en la mayoría de las implementaciones SE+ Beacon correctamente configuradas.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138 utilizando el puerto común de Plaspy 8888.
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que no necesita puertos distintos por modelo.
- Plaspy detecta automáticamente el protocolo del rastreador una vez que el dispositivo se conecta al endpoint de Plaspy y comienza a enviar datos.
- En una configuración típica del SE+ Beacon, solo debe apuntar el dispositivo al endpoint de Plaspy y elegir el transporte apropiado (TCP o UDP) si el equipo requiere esa configuración.
- Si un dispositivo no aparece en línea, verifique la configuración de reporte del equipo, el servicio de datos de la SIM y si el dispositivo está apuntando al dominio o IP mencionados arriba.

## Transporte y contexto de conexión

El contexto de conexión describe cómo el SE+ Beacon alcanza Plaspy más que la estructura interna de los mensajes. El dispositivo puede reportar mediante datos móviles o usar SMS como alternativa, y la selección de transporte es una opción de configuración disponible en el equipo.

- El equipo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte y la configuración del dispositivo.
- Los dispositivos pueden apuntar a d.plaspy.com o a 54.85.159.138 como endpoint del servidor Plaspy.
- Plaspy acepta conexiones en el puerto compartido 8888 para todos los rastreadores compatibles.
- El reporte principal se realiza por GPRS para seguimiento en tiempo real; SMS se usa como respaldo o para modos de alerta específicos.
- La fiabilidad de la red, los ajustes de APN y la provisión de la SIM son causas comunes de problemas de conexión y deben validarse durante la puesta en marcha.

## Notas sobre compatibilidad del protocolo

- El SE+ Beacon se describe como compatible con Plaspy, pero el comportamiento puede variar entre builds de firmware y revisiones de hardware.
- Las actualizaciones de firmware del fabricante pueden añadir funciones, cambiar la temporización de mensajes o modificar campos opcionales que afectan el análisis y el comportamiento del dispositivo.
- Algunas unidades SE+ Beacon pueden venir por defecto en UDP mientras que otras prefieren TCP; confirme la configuración de transporte en el equipo para que coincida con las expectativas de Plaspy.
- Los modos de respaldo por SMS son útiles para alertas, pero no sustituyen el reporte continuo por GPRS cuando se requiere seguimiento en vivo.
- Valide la compatibilidad contra la documentación del fabricante y las notas de versiones del firmware para evitar comportamientos inesperados en producción.
- La gran memoria interna y la capacidad remota de FOTA mejoran la resiliencia, pero la configuración del buffer y los intervalos de latido afectan la rapidez con la que Plaspy recibe datos retrasados.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a asegurar una configuración fluida, una entrega de eventos confiable y una resolución de problemas más rápida al usar el SE+ Beacon con Plaspy. Conocer el papel del transporte, los endpoints y el comportamiento de reporte del dispositivo reduce las conjeturas al abordar problemas de conectividad o calidad de datos.

- Confirmar el transporte (UDP vs TCP) y la configuración de endpoints evita errores básicos de configuración.
- Conocer el comportamiento de latidos y buffering ayuda a ajustar expectativas sobre envíos de ubicación retrasados o agrupados.
- Saber qué eventos reporta el dispositivo (movimiento, impacto, SOS, entradas de alarma) permite mapear correctamente las alertas dentro de Plaspy.
- Reconocer el papel del SMS como respaldo aclara cuándo las alertas pueden llegar por SMS en lugar de por la plataforma en vivo.
- Mantener control de la revisión de firmware y los changelogs favorece operaciones predecibles y actualizaciones coordinadas.

## Por qué usar Plaspy con este protocolo

Usar el AutoFon SE+ Beacon con Plaspy ofrece una opción ligera y eficiente en consumo de batería para seguimiento a largo plazo y de baja visibilidad, donde la instalación discreta y la autonomía son prioridades. Plaspy ingiere señales GNSS y telemetría de eventos reportadas por GPRS y las expone en mapas en vivo, flujos de alertas y reproducción histórica para que los equipos puedan monitorear activos y responder a incidentes.

Si necesita más información sobre la integración del SE+ Beacon con Plaspy o sobre buenas prácticas de despliegue, obtenga más detalles en https://www.plaspy.com. El soporte de protocolo, el comportamiento de firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo; verifique la documentación específica del dispositivo y las notas de firmware del fabricante en https://www.autofon.ru/ antes de desplegar a gran escala.

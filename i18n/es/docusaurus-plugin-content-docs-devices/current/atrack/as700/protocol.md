---
slug: /atrack/as700/protocol
id: as700-protocol
sidebar_label: Protocol
title: ATrack - AS700 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para usar el rastreador GPS ATrack AS700 con Plaspy para comunicación e integración
keywords:
  - Protocolo ATrack AS700
  - protocolo GPS ATrack AS700
  - protocolo de seguimiento AS700
  - compatibilidad AS700 Plaspy
  - protocolo rastreador GPS ATrack
  - protocolo de comunicación AS700
  - ATrack AS700 LTE
  - protocolo seguimiento de activos Plaspy
  - protocolo rastreador GPS industrial
  - protocolo telemetría AS700
---

# ATrack - Protocolo AS700

Esta página describe el contexto público del protocolo para usar el rastreador ATrack AS700 con Plaspy. Explica cómo el dispositivo envía ubicación y telemetría al servicio Plaspy y qué ajustes de conexión debe esperar al configurar equipos para la ingestión en la nube. El enfoque aquí son los detalles de comunicación de alto nivel no sensibles, relevantes para la integración y la resolución de problemas.

El AS700 es un rastreador robusto, con asistencia solar y LTE Cat.1, pensado para despliegues exteriores a largo plazo y es compatible con Plaspy. Plaspy utiliza ajustes de conexión compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador. El comportamiento exacto del protocolo puede variar según firmware, revisión de hardware e implementación del fabricante, por lo que los detalles específicos del equipo deben verificarse con la documentación de ATrack cuando sea necesario.

## Descripción general del protocolo

El protocolo del rastreador es el conjunto de reglas que usa el AS700 para reportar posiciones GNSS, lecturas de sensores y mensajes de evento a un servidor, de modo que Plaspy pueda ingerir y mostrar esos datos. Esta página no reproduce formatos de mensajes propietarios; en su lugar describe el papel del protocolo y las expectativas comunes para una comunicación exitosa con Plaspy.

- Permite al AS700 transmitir posiciones GNSS, estado de batería y panel solar, eventos del acelerómetro y telemetría de sensores Bluetooth a Plaspy.
- Transporta información de identidad y estado para que Plaspy pueda asociar los mensajes entrantes con el registro de dispositivo correcto.
- Soporta tanto reportes periódicos como mensajes impulsados por eventos como movimiento, manipulación o umbrales de sensores.
- Permite que el dispositivo envíe datos de posicionamiento híbrido, como escaneos Wi‑Fi y reportes de testigos Bluetooth, para mejorar la precisión en interiores.
- Garantiza que Plaspy reciba la telemetría necesaria para seguimiento en tiempo real, reportes históricos y generación de alertas.

## Cómo Plaspy detecta el protocolo

Plaspy está diseñado para aceptar datos entrantes de dispositivos en un endpoint compartido e identificar automáticamente el protocolo del rastreador. Cuando un AS700 apunta al endpoint de Plaspy usando los ajustes de conexión documentados, normalmente no es necesario seleccionar el protocolo manualmente dentro de la plataforma.

- Plaspy escucha en el endpoint consistente d.plaspy.com y en la IP pública del servidor 54.85.159.138 para los reportes de dispositivos.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración en flotas grandes.
- Plaspy detecta automáticamente el protocolo del rastreador cuando llega al endpoint un mensaje de dispositivo con el formato correcto.
- Los usuarios normalmente configuran el AS700 para reportar al endpoint de Plaspy; una vez que llegan los datos, Plaspy los enruta al registro del dispositivo correspondiente.
- Si un dispositivo no aparece en Plaspy, verifique la configuración de reporte del equipo, la SIM y la conectividad, y que el dispositivo esté apuntando a d.plaspy.com o a la IP pública.

## Transporte y contexto de conexión

El AS700 soporta transporte IP sobre celular y puede configurarse para usar UDP o TCP según el firmware del equipo y la configuración del usuario. Para la conexión a Plaspy, use el puerto y el endpoint compartidos que se indican abajo para que el dispositivo pueda alcanzar la plataforma de forma fiable.

- El AS700 puede configurarse para usar UDP o TCP en el puerto 8888 para el transporte de datos hacia Plaspy.
- Los dispositivos deben configurarse para reportar a d.plaspy.com o a la dirección IP 54.85.159.138 como alternativa.
- El puerto de escucha de Plaspy para todos los dispositivos soportados es 8888, lo que simplifica el aprovisionamiento y las reglas de firewall.
- Elija UDP o TCP de acuerdo con las capacidades del firmware del rastreador y el comportamiento que requiera de la capa de transporte.
- Confirme el APN y la conectividad celular en el dispositivo para que los mensajes puedan alcanzar el endpoint de Plaspy a través de LTE.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar intervalos de reporte, campos telemétricos disponibles y opciones de transporte; siempre revise las notas de la versión del firmware.
- Las revisiones de hardware a veces alteran funciones disponibles, como el comportamiento de sensores Bluetooth o el rendimiento GNSS; valide contra el SKU de su modelo.
- Las herramientas de configuración del fabricante pueden ofrecer opciones para transporte UDP o TCP y para seleccionar el host destino; asegúrese de apuntar a d.plaspy.com o a la IP de Plaspy.
- Los campos de telemetría de batería y solar pueden estar presentes o ausentes según el firmware y la configuración desplegada.
- Las capacidades de posicionamiento híbrido, como escaneo Wi‑Fi y reportes de testigos Bluetooth, pueden requerir la activación de ajustes específicos de firmware.
- Al integrar a escala, pruebe primero con un pequeño número de unidades para confirmar que el firmware del dispositivo y la ingestión en Plaspy cumplen con sus necesidades operativas.

## Por qué es importante comprender el protocolo

Comprender el protocolo de comunicación y el contexto de conexión ayuda a asegurar una configuración ágil, reportes fiables y una resolución de problemas eficaz al desplegar el AS700 con Plaspy. Saber qué se espera que envíe el dispositivo y cómo llega a Plaspy reduce el tiempo de inactividad y favorece operaciones de flota predecibles.

- Acelera el aprovisionamiento inicial al asegurar que APN, host y transporte estén configurados correctamente.
- Ayuda a diagnosticar problemas de conectividad separando fallas de la red de errores de configuración del dispositivo.
- Aclara qué campos de telemetría puede esperar ver en Plaspy para paneles y alertas.
- Orienta la planificación de actualizaciones de firmware cuando nuevas funciones o correcciones afectan los datos reportados.
- Colabora con la planificación de seguridad y firewalls mediante el conocimiento del host destino y el uso de puerto consistente.

## Por qué usar Plaspy con este protocolo

Usar el AS700 con Plaspy ofrece a las organizaciones una manera práctica de convertir la telemetría robusta y alimentada por energía solar en inteligencia accionable para flotas y activos. La larga autonomía del AS700, su posicionamiento híbrido y sus entradas de sensores complementan la visibilidad en tiempo real, las alertas y los reportes históricos de Plaspy para soportar casos de uso como contenedores, remolques, generadores y maquinaria pesada.

Para obtener más información sobre Plaspy y cómo la plataforma ingiere telemetría de dispositivos, visite https://www.plaspy.com. Para el comportamiento de firmware más reciente y detalles de protocolo específicos del dispositivo, verifique la información con el fabricante en https://www.atrack.com.tw/ ya que la implementación del proveedor y el firmware pueden cambiar con el tiempo.

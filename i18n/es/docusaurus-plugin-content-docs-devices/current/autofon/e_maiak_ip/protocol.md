---
slug: /autofon/e_maiak_ip/protocol
id: e_maiak_ip-protocol
sidebar_label: Protocol
title: AutoFon - E-Маяк IP Protocol
sidebar_class_name: menu_item_tracker
description: Referencia pública del protocolo AutoFon E‑Маяк IP que explica cómo el rastreador se comunica con Plaspy y el contexto de conexión
keywords:
  - protocolo AutoFon E-Маяк IP
  - GPS AutoFon E-Маяк IP
  - AutoFon E-Маяк IP Plaspy
  - comunicaciones AutoFon E-Маяк IP
  - protocolo rastreador GPS AutoFon
  - protocolo seguimiento E-Маяк IP
  - compatibilidad E-Маяк IP Plaspy
  - integración rastreador AutoFon
  - seguimiento vehicular AutoFon
  - rastreo de activos E-Маяк IP
---

# AutoFon - E‑Маяк IP Protocolo

Esta página ofrece el contexto público del protocolo para usar el rastreador AutoFon E‑Маяк IP con Plaspy. Describe cómo el dispositivo reporta posición y alarmas, el papel del protocolo de reporte cuando se integra con Plaspy y consideraciones prácticas de conexión para un seguimiento y notificación fiables. El enfoque está en información de alto nivel y no sensible útil para la configuración y solución de problemas.

El E‑Маяк IP es compatible con Plaspy de fábrica para actualizaciones vía SMS y para mensajería de protocolo cuando GPRS está habilitado. Plaspy utiliza ajustes compartidos de conexión entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador durante la comunicación. El comportamiento exacto del protocolo puede variar según la versión de firmware, revisiones de hardware, intervalos de reporte e implementación del fabricante, por lo que esta página enfatiza detalles neutrales de implementación y pasos recomendados de validación.

## Visión general del protocolo

El protocolo de reporte del rastreador es el mecanismo que el E‑Маяк IP usa para identificarse, transmitir posición, enviar alarmas y relayar telemetría a un servidor de monitoreo como Plaspy. En muchas implementaciones el dispositivo enviará datos de ubicación y eventos útiles vía SMS, mientras que los mensajes de protocolo por GPRS pueden activarse para enviar datos directamente al endpoint de servidor que provee Plaspy.

- Permite que el dispositivo reporte coordenadas GPS, hora y telemetría como batería y temperatura a Plaspy.
- Transporta notificaciones de alarmas y eventos del acelerómetro integrado, botón SOS y entradas externas para procesamiento inmediato.
- Soporta tanto reenvío por SMS como mensajería de protocolo sobre GPRS, de modo que Plaspy puede ingerir mensajes incluso sin un servidor alojado por el fabricante.
- Permite a Plaspy asociar mensajes entrantes con la identidad del dispositivo para que el rastreo, geocercas y alertas funcionen de forma confiable.
- Determina la cadencia y el contenido de los mensajes de latido o liveness que Plaspy usa para supervisar la salud del dispositivo.

## Cómo Plaspy detecta el protocolo

Plaspy recibe el tráfico de los rastreadores en un único endpoint y puerto compartidos y aplica detección automática de protocolo, por lo que usted rara vez necesitará seleccionar un protocolo manualmente en la plataforma. Cuando el E‑Маяк IP está configurado para enviar mensajes de protocolo a Plaspy, el mismo endpoint de Plaspy gestiona la conexión y el servicio identifica el formato del rastreador para parsear los datos entrantes.

- Plaspy acepta tráfico de dispositivos en el dominio d.plaspy.com y en la IP pública 54.85.159.138 para conexiones directas.
- El servicio público de Plaspy escucha en el puerto 8888 y todos los dispositivos soportados por Plaspy usan ese mismo puerto para mensajes de protocolo.
- Los dispositivos pueden configurarse para usar UDP o TCP para reportar a Plaspy en el puerto 8888, según las capacidades del equipo y el transporte elegido.
- Debido a la detección automática de protocolo de Plaspy, un dispositivo correctamente configurado normalmente será procesado sin necesidad de seleccionar el protocolo manualmente en la plataforma.
- Si un dispositivo usa reenvío de SMS, Plaspy puede ingerir los mensajes SMS reenviados o aceptar mensajes de protocolo GPRS cuando el reporte directo está habilitado.

## Contexto de transporte y conexión

El contexto de conexión abarca cómo el E‑Маяк IP llega a Plaspy más que los detalles internos del protocolo. El dispositivo puede reportar usando SMS o enviar mensajes de protocolo sobre datos celulares. Al usar mensajería de protocolo GPRS, el dispositivo debe apuntar al endpoint de Plaspy y usar el mismo puerto que emplean todos los dispositivos de Plaspy.

- Los dispositivos pueden configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138 según la configuración de red y la resolución DNS.
- El dispositivo puede usar UDP o TCP en el puerto 8888 para el reporte directo del protocolo; Plaspy soporta ambos transportes en ese puerto.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto, lo que simplifica la configuración del equipo y el ruteo en el servidor.
- El reporte mediante SMS requiere el reenvío de los mensajes SMS a un número o gateway que Plaspy pueda ingerir; los mensajes de protocolo usan la ruta directa por GPRS.
- La selección del transporte (SMS vs GPRS y UDP vs TCP) debe basarse en cobertura, duración de batería y necesidades de fiabilidad para su despliegue.

## Notas de compatibilidad del protocolo

- Las diferencias de firmware pueden cambiar qué mensajes envía el dispositivo, los campos disponibles y los conjuntos de comandos soportados; confirme siempre el nivel de firmware al validar compatibilidad.
- Las revisiones de hardware o modelos variantes pueden alterar los transportes soportados o los canales de telemetría disponibles, como entradas adicionales o control de periféricos.
- Algunas funciones como monitoreo de audio remoto y modos avanzados del acelerómetro están disponibles a nivel de dispositivo, pero su formato de reporte puede variar según el firmware.
- Elegir entre reporte por SMS y GPRS afecta el consumo de batería y el comportamiento en tiempo real; SMS es útil para escenarios de muy bajo consumo mientras que GPRS soporta mensajería de protocolo más rica.
- La capacidad del dispositivo para apuntar a un endpoint de servidor depende de los parámetros del fabricante; consulte las guías oficiales de configuración para conocer los nombres y la sintaxis exacta de los parámetros.
- Valide la compatibilidad y cualquier paso de configuración especial contra la documentación oficial de AutoFon para la revisión del dispositivo que usted posee.

## Por qué es importante entender el protocolo

Comprender el contexto público del protocolo ayuda a instaladores y administradores a configurar el E‑Маяк IP para una operación confiable con Plaspy, diagnosticar por qué un dispositivo puede no aparecer en la plataforma y elegir el transporte que mejor se adapte a las limitaciones operativas.

- Asegura que el dispositivo esté configurado para reportar al endpoint y transporte correctos de Plaspy para un alta inmediata.
- Ayuda a interpretar el comportamiento de liveness y latidos del dispositivo para que las alertas y los paneles reflejen el estado real.
- Facilita la solución de problemas de mensajes faltantes o malformados al limitar el problema a transporte, firmware o diferencias de configuración.
- Informa las decisiones sobre energía e intervalos de reporte que equilibran duración de batería y visibilidad en tiempo real.
- Ayuda a planear actualizaciones de firmware o reemplazos de equipo al entender qué funciones del protocolo son necesarias para sus flujos de trabajo.

## Por qué usar Plaspy con este protocolo

Usar el AutoFon E‑Маяк IP con Plaspy ofrece una combinación práctica para seguimiento a largo plazo y bajo mantenimiento donde la instalación discreta, la longevidad de batería y el reporte robusto de alarmas son prioridades. Plaspy puede ingerir mensajes SMS de coordenadas y mensajes de protocolo GPRS del dispositivo, mostrar la ubicación en tiempo real en mapas, disparar alertas por eventos de acelerómetro y SOS, y presentar telemetría para gestión de flotas y activos.

Para conocer más sobre cómo Plaspy se integra con protocolos de rastreadores y revisar las funcionalidades de la plataforma, visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que verifique la información específica más reciente en el sitio del fabricante https://www.autofon.ru/.

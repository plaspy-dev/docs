---
slug: /autofon/maiak_44/protocol
id: maiak_44-protocol
sidebar_label: Protocol
title: AutoFon - Маяк 4.4 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo AutoFon Маяк 4.4 y su comunicación con Plaspy para ubicación y telemetría básica
keywords:
  - protocolo AutoFon Маяк 4.4
  - protocolo GPS AutoFon Маяк 4.4
  - compatibilidad AutoFon Маяк 4.4 Plaspy
  - protocolo de rastreo Маяк 4.4
  - protocolo de rastreador AutoFon
  - comunicación GPS rastreador AutoFon
  - informes SMS GPRS Маяк 4.4
  - integración de rastreador vehicular AutoFon
  - protocolo de telemetría Маяк 4.4
  - rastreadores compatibles con Plaspy
---

# AutoFon - Маяк 4.4 Protocolo

Esta página resume el contexto público del protocolo para usar el rastreador AutoFon Маяк 4.4 con Plaspy. Explica cómo este dispositivo compacto y de bajo consumo transmite información de ubicación y estado mediante SMS e informes GPRS periódicos, y cómo Plaspy procesa esos reportes para visualización en mapas, alertas y flujos básicos de control remoto.

Plaspy utiliza ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo comienza a reportar a la plataforma. El comportamiento exacto del protocolo del Маяк 4.4 puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en el contexto de comunicación público y de alto nivel, no en detalles internos de firmware ni en formatos privados de paquetes.

## Resumen del protocolo

El protocolo de comunicación del Маяк 4.4 define cómo la unidad se identifica ante un servidor remoto, reporta ubicación basada en GPS y LBS, envía mensajes de alarma y señales de vida, y acepta comandos de control vía SMS. En la práctica, el equipo utiliza SMS más paquetes GPRS periódicos para entregar ubicaciones y telemetría utilizables a servicios backend como Plaspy.

- Permite informes periódicos de posición y estado mediante paquetes GPRS y mensajes SMS, adecuados para reportes intermitentes y larga duración de batería.
- Transporta telemetría básica como estado de alimentación, activación de entradas de alarma y notificaciones de señal de vida que Plaspy puede mostrar y sobre las que puede generar alertas.
- Soporta control remoto mediante envío y recepción de comandos SMS autorizados para funciones como control de canales auxiliares y monitoreo de audio.
- Permite la identificación del dispositivo y contexto básico de sesión para que Plaspy pueda asociar los reportes entrantes con el activo supervisado correcto.
- Está optimizado para bajo consumo de datos y largo tiempo en espera, lo que lo hace adecuado para despliegues discretos o de bajo mantenimiento.

## Cómo Plaspy detecta el protocolo

Plaspy recibe reportes de dispositivos en un endpoint compartido y compara el tráfico entrante con comportamientos conocidos de rastreadores. Para el Маяк 4.4, por lo general el usuario no necesita seleccionar un protocolo dentro de Plaspy si el dispositivo está configurado para reportar al endpoint de Plaspy y el firmware del equipo usa modos estándar de reporte por SMS/GPRS.

- Plaspy escucha en un dominio y puerto compartidos para todos los dispositivos compatibles; el dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138.
- La plataforma Plaspy utiliza el mismo puerto para todos los dispositivos; el puerto es 8888 y Plaspy detecta automáticamente el protocolo del rastreador.
- Cuando un equipo envía su paquete GPRS periódico o un SMS de alarma al endpoint configurado, Plaspy asocia la conexión con un registro de dispositivo y aplica la detección de protocolo.
- Generalmente los usuarios configuran el rastreador para que reporte al endpoint de Plaspy; una vez que comienzan los reportes, la identificación y el parseo del protocolo ocurren automáticamente.
- Si un dispositivo está configurado correctamente pero los reportes no aparecen, verifique la configuración de reporte del equipo, la conectividad de red y los números autorizados para SMS.

## Contexto de transporte y conexión

El Маяк 4.4 puede reportar mediante SMS y sesiones GPRS intermitentes. Para el envío de paquetes GPRS a Plaspy, el dispositivo puede configurarse para usar UDP o TCP según la configuración de la unidad y las capacidades del firmware. Estas opciones de transporte afectan cómo el equipo abre sesiones hacia el endpoint de Plaspy, pero no cambian el tipo de datos de alto nivel que envía el rastreador.

- Los equipos pueden configurarse para enviar paquetes GPRS a d.plaspy.com o directamente a 54.85.159.138.
- El servidor Plaspy escucha en el puerto 8888; el dispositivo puede usar UDP o TCP en el puerto 8888 según el soporte y la configuración del equipo.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración de equipos y las reglas de firewall de red.
- SMS sigue siendo una vía alternativa para alertas y control remoto y es independiente de la selección de transporte GPRS.
- La confiabilidad de la red, los ajustes de APN y la configuración de la SIM influyen en si se usa GPRS o SMS para un reporte particular.

## Notas sobre compatibilidad del protocolo

- El Маяк 4.4 es compatible con Plaspy cuando está configurado para reportar vía SMS o GPRS periódico, pero el comportamiento exacto puede variar según el nivel de firmware.
- Diferentes revisiones de hardware y versiones de firmware pueden añadir o quitar campos opcionales, alterar intervalos de reporte o cambiar la sintaxis de comandos.
- La selección de transporte (UDP frente a TCP) puede configurarse en el equipo; elija el transporte compatible con el firmware actual y su entorno de red.
- Algunas funciones descritas en materiales del fabricante, como el monitoreo de audio remoto o el control de canales auxiliares, dependen de la entrega de comandos por SMS en lugar de transmisión continua de datos.
- Verifique los ajustes de APN, los números autorizados para SMS y los intervalos de señal de vida al poner en marcha los dispositivos para asegurar reportes confiables a Plaspy.
- Consulte siempre la documentación oficial de AutoFon para comportamientos y detalles de configuración específicos del firmware.

## Por qué es importante entender el protocolo

Comprender de forma práctica cómo se comunica el Маяк 4.4 ayuda a los instaladores y operadores a asegurar reportes confiables, un uso eficiente de la batería y alertas oportunas en Plaspy. Saber qué esperar del protocolo del equipo facilita la resolución de problemas y alinea los ajustes del dispositivo con las necesidades operativas.

- Ayuda a elegir intervalos de reporte apropiados y a balancear la vida de la batería con la frescura de la ubicación.
- Facilita el diagnóstico de reportes faltantes al distinguir fallas de SMS de problemas en sesiones GPRS.
- Aclara qué funciones usan SMS frente a GPRS para que los comandos de control y el monitoreo de audio se emitan correctamente.
- Asegura la correcta configuración de APN y transporte para que el dispositivo alcance el endpoint de Plaspy de forma confiable.
- Permite planificar para diferencias de firmware o hardware entre lotes y unidades desplegadas en campo.

## Por qué usar Plaspy con este protocolo

Usar el AutoFon Маяк 4.4 con Plaspy es una opción práctica cuando necesita rastreo discreto y de larga duración con telemetría básica y capacidades de control remoto. Plaspy puede ingerir paquetes GPRS intermitentes y alertas SMS del equipo, mostrar la ubicación en mapas, crear reglas de alerta para entradas de alarma y fallos de señal de vida, y enviar comandos autorizados por SMS cuando se requiera.

Para obtener más información sobre Plaspy y cómo funciona con dispositivos como el Маяк 4.4, visite https://www.plaspy.com. Para los detalles más actuales sobre protocolos específicos de dispositivos, notas de firmware y opciones de configuración, verifique la información en el sitio del fabricante https://www.autofon.ru/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.

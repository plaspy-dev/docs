---
slug: /thingsys/ts_g17hs/protocol
id: ts_g17hs-protocol
sidebar_label: Protocol
title: ThingSys - TS-G17Hs Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para usar el rastreador ThingSys TS-G17Hs con Plaspy para telemetría y rastreo vehicular confiables
keywords:
  - Protocolo ThingSys TS-G17Hs
  - Protocolo GPS TS-G17Hs
  - Protocolo rastreador GPS ThingSys
  - Compatibilidad TS-G17Hs Plaspy
  - Integración de dispositivos Plaspy
  - Rastreo vehicular TS-G17Hs
  - Protocolo GT06 TS-G17Hs
  - Protocolo CRX3 TS-G17Hs
  - Protocolo de rastreo TS-G17Hs
  - Rastreador vehicular ThingSys
---

# ThingSys - Protocolo TS-G17Hs

Esta página describe el contexto del protocolo público para integrar el rastreador ThingSys TS-G17Hs con Plaspy. Explica, en términos generales, cómo el dispositivo reporta posición y telemetría del vehículo, cómo Plaspy recibe esos informes y qué aspectos de la comunicación son relevantes al desplegar el equipo con Plaspy para flotas o protección antirrobo.

El TS-G17Hs es un rastreador compacto 4G LTE Cat 1 basado en el módulo SIMCOM 7670SA con retrocompatibilidad 2G, almacenamiento en zonas sin cobertura, entradas de ignición y SOS, y control de relé. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la configuración del fabricante. Para detalles específicos del protocolo y el comportamiento del firmware consulte la documentación oficial de ThingSys.

## Resumen del protocolo

El protocolo es el conjunto de mensajes que el TS-G17Hs usa para reportar posición GNSS, estado de ignición, alarmas y registros almacenados a una plataforma remota como Plaspy. En la práctica, define cómo se identifica el dispositivo, cómo se codifican los campos de telemetría y cómo se transmiten eventos como SOS o cargas desde zonas sin cobertura para que Plaspy los muestre en los paneles.

- Permite el envío periódico de posición y telemetría desde el TS-G17Hs a un endpoint remoto de Plaspy para seguimiento en tiempo real.
- Transmite señales del vehículo como estado de ACC (ignición), pulsaciones de SOS, eventos de movimiento/giroscopio y estado del relé para que Plaspy genere alertas y telemetría.
- Soporta almacenamiento en zonas sin cobertura, de modo que los mensajes guardados se suben cuando se recupera la conexión y los eventos quedan registrados en el historial de Plaspy.
- El TS-G17Hs suele soportar formatos de reporte GT06 y CRX3 y puede cambiarse a otros modos compatibles del fabricante vía SMS cuando sea necesario.
- La elección del protocolo y la configuración del dispositivo determinan si el rastreador reporta por UDP o TCP y cómo el servidor reconoce los datos entrantes.

## Cómo Plaspy detecta el protocolo

Plaspy recibe los informes de los dispositivos en un único endpoint y puerto compartido y detecta automáticamente el protocolo del rastreador que envía los datos. Cuando un TS-G17Hs está configurado para reportar a Plaspy, la plataforma normalmente reconoce el patrón del mensaje y asigna el dispositivo al analizador apropiado sin que usted deba seleccionar manualmente el protocolo.

- Plaspy acepta conexiones de rastreadores en d.plaspy.com y en la dirección pública 54.85.159.138 usando el puerto común 8888.
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 para alcanzar Plaspy según el soporte y la configuración del equipo.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración y la incorporación de equipos.
- Debido a la detección automática de protocolo, normalmente usted no necesita escoger un protocolo dentro de Plaspy si el dispositivo está correctamente apuntado al endpoint de Plaspy.
- Si el dispositivo está enviando en un formato alterno provisto por el fabricante, asegúrese de cambiar el rastreador al modo de reporte esperado antes de probar la conectividad.

## Transporte y contexto de conexión

El contexto de transporte cubre cómo el TS-G17Hs se conecta a Plaspy más que el formato interno de los mensajes. El TS-G17Hs ofrece opciones de transporte flexibles y puede apuntarse a un nombre de dominio o a una dirección IP para entregar telemetría a Plaspy.

- El equipo puede configurarse para usar UDP o TCP en el puerto 8888 al reportar a Plaspy.
- Los reportes del TS-G17Hs pueden dirigirse al dominio d.plaspy.com o a la IP 54.85.159.138 según las preferencias de instalación.
- Usar el puerto compartido 8888 reduce las diferencias de configuración al desplegar flotas mixtas.
- La configuración de red, como el APN y la conectividad GPRS, debe estar correcta para que el reporte celular llegue a Plaspy.
- El dispositivo soporta comandos por SMS o reportes de respaldo para escenarios de bajo consumo de datos o emergencia; estos operan por separado del transporte GPRS hacia Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el formato de ciertos mensajes o los campos incluidos; valide la compatibilidad con el nivel de firmware del rastreador en uso.
- Las revisiones de hardware y módulos opcionales (por ejemplo relé externo o micrófono) pueden afectar qué campos de telemetría reporta el dispositivo.
- El TS-G17Hs soporta modos de rastreo comunes como GT06 y CRX3 y puede cambiarse vía SMS a otros modos cuando el fabricante lo permite.
- La selección de transporte (UDP vs TCP) puede influir en las características de entrega de mensajes; elija el transporte que coincida con la configuración del dispositivo y el entorno de red.
- Confirme siempre el modo de reporte configurado en el rastreador y el destino del servidor antes de intentar registrar o solucionar problemas del equipo en Plaspy.
- Variaciones por parte del fabricante o compilaciones regionales de firmware pueden introducir diferencias de protocolo; consulte la documentación de ThingSys para notas específicas del firmware.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a lograr una puesta en marcha fluida, una interpretación precisa de la telemetría por parte de Plaspy y una operación confiable a largo plazo. Conocer cómo el TS-G17Hs reporta eventos y registros almacenados reduce la fricción en la integración y acelera la resolución cuando la telemetría no aparece como se espera.

- Garantiza que el dispositivo esté configurado para reportar a Plaspy en d.plaspy.com o 54.85.159.138 en el puerto 8888 usando el transporte correcto.
- Ayuda a diagnosticar por qué un equipo podría no aparecer en Plaspy cuando los reportes usan un protocolo o variante de firmware inesperada.
- Aclara cómo se esperan ver en Plaspy los mensajes de ignición, SOS y zonas sin cobertura para que las alertas y reglas se configuren correctamente.
- Orienta decisiones sobre selección de transporte, fallback por SMS y manejo de buffers en despliegues con cobertura intermitente.
- Facilita actualizaciones ordenadas de firmware y configuración al destacar qué cambios de protocolo podrían afectar la ingestión en Plaspy.

## Ventajas de usar Plaspy con este protocolo

Usar el TS-G17Hs con Plaspy ofrece a las organizaciones una forma práctica de reunir posición GNSS, telemetría sensible a la ignición, alertas SOS e historial almacenado por zonas sin cobertura en una sola vista de gestión de flota. Características del hardware del TS-G17Hs, como amplio rango de voltaje, batería de respaldo y detección de movimiento, combinan bien con la detección automática de protocolos de Plaspy y su modelo de endpoint compartido para reducir la complejidad por equipo en flotas mixtas.

El enfoque de endpoint único de Plaspy simplifica la incorporación, ya que los dispositivos pueden apuntar a d.plaspy.com o 54.85.159.138 en el puerto 8888 y la plataforma detectará automáticamente el protocolo del rastreador. Para saber más sobre Plaspy y su uso con el TS-G17Hs visite https://www.plaspy.com. Para obtener los detalles más actualizados sobre el protocolo del dispositivo, comportamiento del firmware y guía del fabricante, verifique la información en el sitio oficial de ThingSys en https://www.thingsys.com/

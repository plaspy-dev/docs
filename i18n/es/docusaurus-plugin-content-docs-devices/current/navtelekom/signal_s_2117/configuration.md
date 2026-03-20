---
slug: /navtelekom/signal_s_2117/configuration
id: signal_s_2117-configuration
sidebar_label: Configuration
title: Navtelekom - СИГНАЛ S-2117 Configuration
sidebar_class_name: menu_item_tracker
description: Configure el Navtelekom СИГНАЛ S-2117 para Plaspy con ajustes de servidor y guía práctica para un rastreo de flotas confiable
keywords:
  - Configuración Navtelekom СИГНАЛ S-2117
  - Configuración Navtelekom para Plaspy
  - Configuración de servidor СИГНАЛ S-2117
  - Configuración de rastreador GPS Plaspy
  - Rastreo de flotas con rastreador GNSS
  - Integración de telemetría vehicular
  - Configuración sensor de combustible RS-485
  - Rastreador de temperatura 1-Wire
  - Configuración del servidor Plaspy
  - Detección de protocolo de rastreador
---

# Navtelekom - СИГНАЛ S-2117 Configuración

Esta página documenta el contexto de configuración pública para usar el Navtelekom СИГНАЛ S-2117 con Plaspy. Se centra en los ajustes prácticos del servidor y el flujo de configuración necesario para apuntar el dispositivo a Plaspy, de modo que el rastreador pueda transmitir posición GNSS, telemetría y eventos a la plataforma. La guía utiliza valores públicos del servidor Plaspy y contexto general del fabricante sin reproducir manuales propietarios.

Plaspy emplea ajustes de servidor compartidos entre dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Para el S-2117, que está descontinuado pero sigue siendo utilizable, consulte las utilidades de configuración de Navtelekom o el manual oficial para procedimientos en el dispositivo; esta página explica qué introducir para compatibilidad con Plaspy y el flujo típico para validar la conectividad.

## Resumen de configuración

Configurar el СИГНАЛ S-2117 para Plaspy prepara el rastreador para enviar posición GNSS y telemetría a un entorno centralizado de gestión de flotas. La configuración práctica garantiza que el dispositivo apunte al endpoint del servidor de Plaspy y use los ajustes de transporte correctos para que Plaspy pueda ingerir los datos y mostrarlos en paneles, alertas e informes.

- Apunte el rastreador a la dirección del servidor de Plaspy para que los mensajes lleguen a su cuenta.
- Configure el dispositivo para usar el puerto compartido de Plaspy y permitir que la plataforma reciba y procese las entradas.
- Seleccione el modo de transporte (UDP o TCP) en el rastreador si la herramienta de configuración del fabricante lo solicita.
- Guarde y aplique los ajustes en la utilidad del fabricante y reinicie el rastreador si se indica.
- Valide que el rastreador aparezca en Plaspy y verifique telemetría como ubicación, alarmas y sensores de combustible o temperatura.

## Ajustes del servidor de Plaspy

- El dominio del servidor d.plaspy.com debe ingresarse como el endpoint principal del dispositivo.
- Si la herramienta del fabricante requiere una dirección IP en lugar del dominio, puede usar 54.85.159.138.
- El puerto 8888 es el puerto compartido que utiliza Plaspy para todos los rastreadores soportados.
- El dispositivo puede configurarse para UDP o TCP; seleccione el transporte que prefiera o el que requiera el aparato.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no es necesario indicar un tipo de protocolo dentro de Plaspy.

## Requisitos previos típicos

- Asegúrese de que el S-2117 tenga una SIM GSM válida y servicio celular activo si el dispositivo se comunica vía GSM según lo describe el fabricante.
- Alimente el dispositivo con una fuente estable y confirme que la unidad arranca y muestra los indicadores LED según el manual.
- Tenga acceso al método de configuración oficial de Navtelekom o al software del proveedor, por ejemplo la herramienta de configuración referenciada en la documentación del producto.
- Conozca el IMEI o identificador único del dispositivo para poder correlacionarlo en Plaspy cuando empiece a reportar.
- Tenga su cuenta de Plaspy lista para recibir y verificar el dispositivo; confirme el alcance de la cuenta y los permisos necesarios para añadir rastreadores.
- Si el rastreador usa conectores desmontables o sensores externos (por ejemplo sensores de combustible RS-485 o sondas 1-Wire), asegúrese de que el cableado y los sensores estén conectados según lo requerido antes de validar.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para apuntar a Plaspy, el СИГНАЛ S-2117 envía su posición GNSS, flujos de telemetría y mensajes de eventos al servidor y puerto compartidos de Plaspy. Plaspy ingiere estos mensajes y los asigna a canales de ubicación, alarmas y telemetría disponibles en la plataforma.

- El rastreador se configura para reportar al endpoint y puerto compartidos de Plaspy, incluyendo d.plaspy.com o 54.85.159.138 y el puerto 8888.
- Plaspy detecta automáticamente el protocolo utilizado por el rastreador y analiza los mensajes entrantes para extraer ubicación y telemetría.
- Posiciones GPS/GLONASS, eventos de alarma, alertas de manipulación y telemetría de sensores se reenvían a Plaspy para monitoreo en tiempo real.
- Lecturas de combustible desde sensores RS-485 y datos de temperatura o identificación desde interfaces 1-Wire se transmiten como campos de telemetría visibles en Plaspy.
- Eventos de control remoto y señales de pánico o voz bidireccional se representan como eventos o controles en la plataforma según los tipos de mensaje del dispositivo.

## Flujo de configuración habitual

1. Acceda al método de configuración oficial de Navtelekom o al software recomendado por el fabricante, por ejemplo el configurador del proveedor o la herramienta web/serie descrita en la documentación del producto.
2. En los ajustes de servidor o de reporte, ingrese el servidor de Plaspy como d.plaspy.com o, si la herramienta requiere IP, 54.85.159.138.
3. Establezca el puerto de destino en 8888, ya que Plaspy usa el mismo puerto para todos los dispositivos soportados.
4. Seleccione UDP o TCP si el dispositivo solicita elegir el transporte durante la configuración; ambos son compatibles con Plaspy.
5. Aplique o guarde la configuración del dispositivo usando la herramienta del fabricante y siga las indicaciones para escribir los ajustes en la memoria del equipo.
6. Reinicie el equipo si el procedimiento del fabricante o la herramienta exige un reinicio para activar los nuevos parámetros de red.
7. Valide que el dispositivo informa a Plaspy comprobando su cuenta Plaspy para el IMEI o identificador y confirmando la llegada de posiciones y mensajes de telemetría.

## Ejemplos de comandos de configuración

El S-2117 utiliza herramientas y procedimientos de configuración proporcionados por el fabricante que pueden variar con el firmware y el conjunto de utilidades. No se incluyen aquí cadenas de comandos o SMS exactos porque las utilidades oficiales de Navtelekom y el firmware determinan el método. Use la utilidad del proveedor o el manual del dispositivo para introducir el dominio o IP del servidor y el puerto 8888, y seleccione UDP o TCP cuando corresponda.

Si dispone de ejemplos concretos de comandos de Navtelekom o de un script de configuración suministrado por el proveedor, incorpórelos en su documentación interna y aplíquelos en el orden exacto recomendado por el fabricante.

## Notas de configuración

- El S-2117 es un modelo descontinuado; las versiones de firmware y las herramientas del proveedor pueden variar entre dispositivos y archivos de software. Verifique que la herramienta y el firmware que use coincidan con la revisión del equipo.
- La elección entre TCP y UDP puede afectar el comportamiento de entrega. Si la red y el dispositivo soportan ambos, elija el transporte que mejor se adapte a la fiabilidad de su red y a las reglas de firewall.
- Plaspy usa el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo, por lo que una vez que el dispositivo apunte a d.plaspy.com o a 54.85.159.138 en el puerto 8888, Plaspy intentará la detección del protocolo.
- Mantenga una copia del archivo de configuración del fabricante o exporte la configuración antes de realizar cambios para poder restaurar ajustes previos si es necesario.
- Consulte la documentación del proveedor para la calibración y el mapeo de sensores (por ejemplo sensores de combustible RS-485 o sondas de temperatura 1-Wire) para que los campos de telemetría se interpreten correctamente en Plaspy.

## Por qué usar Plaspy con esta configuración

Integrar el Navtelekom СИГНАЛ S-2117 con Plaspy ofrece a los operadores de flota una vía directa para añadir ubicación GNSS, telemetría de sensores y reporte de alarmas en una plataforma centralizada. Para flotas que requieren monitoreo de combustible, registro de temperatura e identificación de conductores, configurar el rastreador para reportar a Plaspy proporciona visibilidad consolidada y flujos de trabajo basados en eventos en activos distribuidos.

Para conocer más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Verifique los métodos de configuración específicos más recientes, el comportamiento del firmware y los detalles del fabricante en https://www.navtelecom.ru/ dado que los procedimientos del proveedor y el firmware pueden cambiar con el tiempo.

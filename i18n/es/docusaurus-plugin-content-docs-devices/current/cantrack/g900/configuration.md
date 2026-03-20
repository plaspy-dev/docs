---
slug: /cantrack/g900/configuration
id: g900-configuration
sidebar_label: Configuration
title: CanTrack - G900 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el CanTrack G900 y conectarlo a Plaspy con ajustes de servidor compartidos y pasos prácticos
keywords:
  - Configuración CanTrack G900
  - Guía de instalación G900
  - Configuración de servidor G900 CanTrack
  - Configuración G900 en Plaspy
  - Configuración rastreador GPS CanTrack
  - Rastreo vehicular G900
  - Rastreo de flotas G900
  - Configuración plataforma G900
  - Compatibilidad rastreador CanTrack Plaspy
  - Guía de instalación CanTrack G900
---

# CanTrack - Configuración del G900

Esta página describe el contexto público de configuración para usar el rastreador CanTrack G900 con la plataforma Plaspy. Explica los valores de servidor compartidos que debe aplicar al dispositivo y ofrece orientación práctica basada en las capacidades del G900, como seguimiento en tiempo real, alarma por exceso de velocidad y alarma por corte de alimentación.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use esta página para entender los valores de servidor requeridos y el flujo de trabajo recomendado antes de aplicar herramientas de configuración del fabricante o comandos SMS.

## Resumen de la configuración

El objetivo de esta configuración es preparar el G900 para que se comunique de manera confiable con Plaspy y así los datos de ubicación y eventos sean visibles en la plataforma. Las instrucciones se centran en el endpoint compartido de Plaspy y en los pasos prácticos que seguirá al usar las herramientas de CanTrack o el software del proveedor.

- Apunte el G900 al endpoint del servidor Plaspy para que el dispositivo entregue telemetría a Plaspy.
- Seleccione el transporte correcto (UDP o TCP) y configure el puerto compartido usado por Plaspy.
- Valide la conectividad desde el dispositivo hasta el servidor Plaspy y confirme la detección del protocolo.
- Verifique el reporte de eventos para alarmas como exceso de velocidad y corte de alimentación para que las alertas aparezcan en Plaspy.
- Guarde y aplique los ajustes mediante el método oficial de configuración de CanTrack y confirme que el dispositivo sea visible en la plataforma.

## Ajustes del servidor Plaspy

Al configurar el CanTrack G900 para Plaspy, utilice los siguientes ajustes públicos de servidor:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol so you do not need to specify a protocol inside Plaspy

Todos los dispositivos configurados para usar Plaspy emplean el mismo puerto, y Plaspy detectará el protocolo del rastreador automáticamente una vez que el dispositivo se conecte al endpoint indicado arriba.

## Requisitos típicos antes de la configuración

- Energice el dispositivo según las indicaciones del fabricante y confirme que el rastreador reporta estado.
- SIM activa con datos habilitados si el G900 usa GSM GPRS para el enlace ascendente, según las capacidades de red del dispositivo.
- Acceso al método de configuración oficial de CanTrack, al software del proveedor o a los comandos SMS usados para su firmware y región.
- Cobertura básica de la red GSM en la ubicación de la instalación para permitir el registro del dispositivo en la red móvil.
- Plan claro para la selección del transporte (UDP o TCP) según la preferencia del instalador o las opciones del firmware del dispositivo.
- Capacidad para reiniciar el equipo de forma segura tras aplicar los ajustes si es necesario.

## Cómo se conecta este rastreador a Plaspy

El G900 envía datos de ubicación y eventos al endpoint compartido de Plaspy para que el dispositivo pueda ser monitoreado dentro de la plataforma casi en tiempo real. Aplique los ajustes del servidor Plaspy para permitir que el rastreador establezca una sesión y entregue telemetría.

- El dispositivo reporta actualizaciones de posición y notificaciones de eventos a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Plaspy detectará automáticamente el protocolo del dispositivo una vez que el rastreador se conecte al servidor y puerto compartidos.
- La telemetría incluirá actualizaciones de seguimiento en tiempo real y alertas de eventos como exceso de velocidad o corte de alimentación según las generadas por el rastreador.
- Elegir UDP o TCP determina cómo el dispositivo transporta los paquetes hacia el endpoint de Plaspy; ambos son aceptados en el puerto 8888.
- Tras la configuración y una conexión exitosa, el dispositivo será visible y gestionable en Plaspy para monitoreo e informes.

## Flujo de trabajo común de configuración

1. Acceda al método de configuración oficial de CanTrack o al software del proveedor apropiado para su firmware y región del G900.
2. En los ajustes del dispositivo o de la herramienta, ingrese la dirección del servidor d.plaspy.com o la IP 54.85.159.138 según lo indique su guía de instalación.
3. Establezca el puerto del servidor en 8888 para coincidir con el puerto compartido de Plaspy para todos los dispositivos.
4. Elija UDP o TCP como transporte si el dispositivo o la herramienta de configuración requiere seleccionar un modo de transporte.
5. Aplique o guarde la configuración dentro de la herramienta del fabricante o mediante el método de comandos del dispositivo.
6. Reinicie el G900 si el método de configuración o el firmware exige un reinicio para aplicar los cambios.
7. Valide que el dispositivo reporte a Plaspy confirmando la conectividad y comprobando que el equipo aparezca en la plataforma.

## Ejemplos de comandos de configuración

El G900 puede configurarse mediante la herramienta oficial de CanTrack o por métodos de SMS/comandos provistos por el fabricante. Los comandos exactos y su formato dependen de la versión de firmware y del canal de configuración utilizado. Dado que las herramientas y los conjuntos de comandos del fabricante varían, siga la documentación oficial de CanTrack o la utilidad de configuración suministrada con su dispositivo para la sintaxis exacta.

Si dispone de comandos específicos de CanTrack para su firmware, introdúzcalos en la herramienta del proveedor o en el método SMS en el orden recomendado por el fabricante. Como guía general, ingrese la dirección del servidor Plaspy y el puerto tal como se muestra en el flujo de trabajo de configuración arriba.

## Notas de configuración

- Las diferencias de firmware y las revisiones de hardware pueden cambiar los ajustes disponibles y el flujo exacto de configuración; verifique la versión de firmware del dispositivo antes de aplicar comandos.
- TCP y UDP funcionan con Plaspy en el puerto 8888. Elija el modo de transporte requerido por su instalación o recomendado por el fabricante si cualquiera de las opciones está disponible.
- Dado que Plaspy detecta protocolos automáticamente, no necesita configurar el tipo de protocolo en el lado de Plaspy; enfoque su configuración en enviar los valores correctos de servidor y puerto desde el dispositivo.
- Use la herramienta de configuración oficial de CanTrack o el conjunto de comandos SMS documentado para obtener resultados más fiables y conservar las opciones específicas del dispositivo.
- Pruebe el reporte de eventos de exceso de velocidad y corte de alimentación después de la configuración para confirmar que esas alarmas se reciben en Plaspy.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el CanTrack G900 ofrece una forma sencilla de centralizar el seguimiento y la visibilidad de eventos. Los reportes de ubicación en tiempo real del G900, la alarma por exceso de velocidad y la alarma por corte de alimentación pueden reenviarse a Plaspy para que los gestores de flota y los propietarios de activos obtengan control operativo y alertas oportunas.

Para obtener más información sobre Plaspy y las capacidades de la plataforma, visite https://www.plaspy.com. Para los detalles más actuales sobre configuración específica del dispositivo, notas de firmware y comandos oficiales, verifique los pasos de configuración en la web de CanTrack https://www.cantrackgps.com/ ya que las especificaciones del fabricante y los métodos de instalación pueden cambiar con el tiempo.

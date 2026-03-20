---
slug: /trackerking/ec33b/configuration
id: ec33b-configuration
sidebar_label: Configuration
title: TrackerKing - EC33B Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el TrackerKing EC33B con Plaspy, incluye ajustes de servidor y pasos prácticos para integrar el rastreador
keywords:
  - Configuración TrackerKing EC33B
  - Instalación TrackerKing EC33B
  - Configuración EC33B en Plaspy
  - Configuración de servidor EC33B
  - Configurar rastreador GPS EC33B
  - Configuración de software de rastreo EC33B
  - Configuración de plataforma EC33B
  - Configuración de rastreador Plaspy
  - Seguimiento de vehículos EC33B
  - Seguimiento de flotas EC33B
---

# TrackerKing - Configuración EC33B

Esta página explica el contexto de configuración pública para usar el TrackerKing EC33B con Plaspy. Resume los ajustes de servidor que Plaspy espera, describe el flujo típico de configuración y detalla los pasos prácticos necesarios para preparar el EC33B y asegurar una comunicación fiable con la plataforma Plaspy. El contenido se basa en las capacidades públicas del dispositivo y en los parámetros de servidor compartidos que Plaspy utiliza para los dispositivos compatibles.

Plaspy emplea ajustes de servidor compartidos para todos los rastreadores soportados y detecta automáticamente el protocolo del dispositivo cuando llegan los mensajes. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que usted debe seguir la documentación del dispositivo y las utilidades del vendedor al realizar la configuración.

## Resumen de la configuración

Configurar el EC33B para Plaspy garantiza que el rastreador envíe telemetría, estado y eventos a un único endpoint compartido de Plaspy, de modo que flotas y operadores obtengan visibilidad en mapas, informes y alertas. Los pasos que siguen se enfocan en preparar el dispositivo para establecer un canal de datos persistente hacia Plaspy y validar que la información llega y se muestra en la plataforma.

- Configure el rastreador para que reporte al endpoint de Plaspy y así los mensajes de ubicación y eventos lleguen a la plataforma.
- Asegúrese de que el dispositivo use el puerto compartido de Plaspy y un transporte soportado (UDP o TCP) para que Plaspy pueda ingerir los datos.
- Valide el APN y la conectividad móvil para que el EC33B pueda enviar datos mediante la red celular.
- Confirme ajustes específicos del dispositivo, como la selección de protocolo o la configuración USB, para GT06 u otros protocolos compatibles.
- Pruebe el reporte y el reenvío de datos fuera de línea para verificar que los datos históricos se entregan después de interrupciones de cobertura.

## Ajustes del servidor Plaspy

Use los siguientes ajustes de servidor de Plaspy al configurar el EC33B. Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del dispositivo en las conexiones entrantes.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transportes soportados: UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no es necesario seleccionar explícitamente el protocolo en el lado del servidor

## Requisitos típicos antes de la configuración

- Alimente el equipo con la alimentación requerida del vehículo y confirme que el EC33B esté encendido y listo para configurar.
- Asegúrese de que el dispositivo tenga una SIM celular activa y un plan de datos que soporte el APN requerido por su operadora.
- Obtenga la herramienta oficial de configuración TrackerKing, la interfaz USB o las instrucciones del proveedor necesarias para cambiar servidor, puerto y opciones de transporte.
- Conozca el protocolo del dispositivo (GT06 u otro compatible) y confirme si el equipo requiere selección de protocolo durante la configuración.
- Tenga a mano los ajustes del servidor Plaspy (d.plaspy.com o 54.85.159.138 y puerto 8888) para introducirlos en la herramienta de configuración del rastreador.
- Prepárese para probar el reporte del dispositivo y la reproducción de rutas en Plaspy después de la configuración para validar conectividad y reenvío tras desconexiones.

## Cómo se conecta este rastreador a Plaspy

El EC33B se configura para enviar mensajes de ubicación, estado y alarmas al endpoint y puerto del servidor Plaspy. Una vez apuntando al endpoint compartido de Plaspy, los mensajes son recibidos por la plataforma, que detecta automáticamente el protocolo del rastreador y asigna la telemetría entrante al registro de dispositivo correspondiente.

- El EC33B envía actualizaciones de ubicación GNSS y telemetría a d.plaspy.com en el puerto 8888 usando UDP o TCP.
- Mensajes de eventos como ACC, SOS, exceso de velocidad y alarmas de geocerca se transmiten a Plaspy y se procesan como alertas.
- Los datos almacenados en el EC33B durante períodos sin cobertura se retransmiten al endpoint de Plaspy tras la restauración de la señal, preservando las rutas históricas.
- Los comandos remotos y de inmovilizador enviados desde Plaspy pueden ser enrutados de vuelta al dispositivo cuando la plataforma y el rastreador soportan canales de comando remoto.
- La detección automática de protocolo de Plaspy reduce la necesidad de emparejar manualmente el protocolo en el servidor; el dispositivo solo debe apuntar al endpoint y puerto de Plaspy.

## Flujo típico de configuración

1. Acceda al método o software oficial de configuración de TrackerKing (herramienta USB o utilidad proporcionada por el proveedor).
2. Ingrese la dirección del servidor Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138 en el campo de servidor del dispositivo.
3. Configure el puerto del equipo en 8888, que es el puerto compartido de Plaspy para todos los dispositivos.
4. Seleccione UDP o TCP si el EC33B requiere especificar el transporte; escoja el transporte mejor soportado por su red y la práctica de instalación.
5. Configure el APN y los parámetros de la SIM según sea necesario para que el equipo tenga conectividad de datos móviles.
6. Aplique o guarde la configuración en la herramienta TrackerKing y realice el reinicio del equipo si la herramienta lo requiere.
7. Valide que el EC33B reporte a Plaspy verificando que aparezcan datos recientes de ubicación y eventos en la plataforma.

## Ejemplos de comandos de configuración

Los comandos exactos de configuración o las cadenas SMS dependen del firmware del rastreador y de la herramienta de configuración TrackerKing. Dado que las herramientas del fabricante y el firmware varían, no se incluyen comandos precisos aquí. Use el software oficial USB de TrackerKing o la documentación del proveedor para establecer:

- Dirección del servidor a d.plaspy.com o 54.85.159.138
- Puerto a 8888
- Transporte a UDP o TCP (si es necesario)
- APN y credenciales de la red móvil para su SIM

Si la documentación de TrackerKing o la interfaz de configuración ofrecen ejemplos de comandos o cadenas SMS, siga esos comandos provistos por el proveedor y sustituya la dirección y el puerto del servidor por los valores de Plaspy indicados arriba.

## Notas de configuración

- Las diferencias de firmware pueden cambiar el formato de comandos y los menús de configuración; confirme la versión de firmware del EC33B antes de aplicar instrucciones.
- La elección TCP vs UDP puede afectar el comportamiento de entrega en algunas redes; seleccione el transporte en función de la estabilidad de la red y la práctica del instalador.
- Plaspy usa el mismo puerto para todos los dispositivos, lo que simplifica despliegues a gran escala; por dispositivo suele ser necesario configurar solo la dirección del servidor y el transporte.
- APN, usuario y contraseña dependen de la SIM; verifique e ingrese los valores correctos del APN para el operador móvil utilizado.
- Consulte siempre la guía del usuario de TrackerKing para pasos específicos del dispositivo, versiones de la utilidad USB y precauciones aplicables a cada modelo.

## Por qué usar Plaspy con esta configuración

Combinar el TrackerKing EC33B con Plaspy ofrece una solución práctica para obtener visibilidad unificada de la flota, alertas y reproducción del historial de rutas. La transmisión fiable de telemetría del EC33B, su caché de datos offline y las entradas orientadas a vehículos se integran con la ingestión y detección de protocolos de Plaspy para ofrecer una vista operativa útil para gerentes de flota, equipos de seguridad y personal de operaciones.

Para obtener más información sobre Plaspy y cómo puede gestionar rastreadores como el EC33B, visite https://www.plaspy.com. Para métodos de configuración específicos del dispositivo, notas de firmware y detalles del fabricante, consulte la documentación oficial de TrackerKing en https://trackerking.cn/. Los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo, por lo que se recomienda verificar la información vigente del fabricante.

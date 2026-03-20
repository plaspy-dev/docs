---
slug: /navtelekom/s_2654/configuration
id: s_2654-configuration
sidebar_label: Configuration
title: Navtelekom - СИГНАЛ S-2654 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Navtelekom СИГНАЛ S-2654 e integrarlo con Plaspy usando ajustes de servidor compartidos
keywords:
  - Navtelekom СИГНАЛ S-2654 configuración
  - Navtelekom S-2654 configuración Plaspy
  - configuración servidor СИГНАЛ S-2654
  - configuración rastreador GPS S-2654
  - configuración rastreador Plaspy
  - configuración rastreador vehicular GLONASS
  - rastreo de flotas S-2654
  - NTC Configurator S-2654
  - gestión remota DRC S-2654
  - configuración telemática industrial
---

# Navtelekom - СИГНАЛ S-2654 Configuración

Esta página describe el contexto público de configuración para utilizar el rastreador Navtelekom СИГНАЛ S-2654 con Plaspy. Incluye los ajustes de servidor compartidos que Plaspy espera, los requisitos típicos antes de la instalación y un flujo de trabajo práctico para aplicar las herramientas de configuración del fabricante y dirigir el dispositivo hacia Plaspy para el seguimiento en tiempo real y la ingestión de telemetría.

El S-2654 es un rastreador vehicular GLONASS con módem 3G integrado y redundancia de doble SIM, diseñado para telemetría industrial y de flotas. Plaspy utiliza ajustes de servidor compartidos entre dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero los pasos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas que utilice, como NTC Configurator o el sistema de gestión remota DRC.

## Resumen de la configuración

El objetivo de esta configuración es preparar el S-2654 para comunicarse de forma fiable con Plaspy, de modo que la ubicación del vehículo, las entradas y la telemetría sean visibles en la plataforma. La configuración se centra en apuntar el dispositivo al endpoint de servidor compartido de Plaspy y en garantizar conectividad celular y ajustes acordes a su despliegue.

- Apuntar el rastreador a los ajustes de servidor de Plaspy para que los datos se enruten hacia la plataforma y estén disponibles en mapas y reportes en tiempo real.
- Confirmar la conectividad celular y la disponibilidad de la(s) SIM para que las posiciones GNSS se envíen a través del módem 3G integrado.
- Validar los ajustes de transporte y puerto para que el dispositivo pueda establecer sesión con Plaspy.
- Habilitar o confirmar cualquier interfaz de telemetría o registro que planee reenviar a Plaspy.
- Probar el reporte del dispositivo y verificar que aparezca en Plaspy y envíe actualizaciones periódicas.

## Ajustes de servidor de Plaspy

Al configurar el СИГНАЛ S-2654 para Plaspy, utilice exactamente los siguientes ajustes públicos de servidor:

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- automatic protocol detection in Plaspy

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador, por lo que la dirección de servidor y el puerto son los valores centrales que debe aplicar.

## Requisitos típicos antes de la instalación

- Un S-2654 alimentado con antenas GNSS y GSM externas conectadas si su instalación lo requiere.
- Servicio celular activo en al menos una SIM con datos habilitados para el módem 3G y la ranura SIM configurada según la documentación del dispositivo.
- Acceso al método de configuración oficial del fabricante, como NTC Configurator o el sistema de gestión remota DRC, además de los cables o adaptadores USB necesarios.
- Conocimiento de la versión de firmware del equipo y los perfiles de configuración disponibles para asegurarse de seguir los pasos correctos para ese firmware.
- Opcionalmente, una tarjeta microSD formateada si planea usar el registro local como buffer durante cortes de conectividad.
- Acceso administrativo a Plaspy para validar el dispositivo después de la configuración y ver la telemetría en vivo una vez que comience el reporte.

## Cómo se conecta este rastreador a Plaspy

El S-2654 envía fijaciones GNSS y telemetría mediante su módem 3G integrado hacia Plaspy. Una vez configurado con el endpoint y puerto compartidos de Plaspy, el dispositivo transmitirá datos de posición e informes de eventos para que Plaspy proporcione rastreo en vivo, alertas e historial.

- El dispositivo se configura para reportar al endpoint y puerto compartidos de Plaspy y así sus datos se ingieren en la plataforma.
- Las fijaciones GNSS se transmiten por 3G al servidor de Plaspy para mapeo en tiempo real y reproducción de rutas.
- Eventos de entradas y telemetría de interfaces de entradas/salidas (I/O) y serial se reenvían a Plaspy para alertas y análisis.
- El registro local en microSD puede almacenar registros mientras la conectividad celular está ausente y luego reconciliarse con Plaspy.
- La redundancia de doble SIM ayuda a mantener el reporte activo cuando un operador tiene cobertura reducida.

## Flujo de trabajo común de configuración

1. Acceda al método o software de configuración oficial del fabricante, como NTC Configurator o el sistema DRC.
2. En los ajustes de servidor del dispositivo o en los parámetros APN, introduzca d.plaspy.com o 54.85.159.138 como dirección de servidor.
3. Establezca el puerto 8888 como puerto de destino utilizado por Plaspy para todos los dispositivos.
4. Elija UDP o TCP si el dispositivo requiere seleccionar el transporte para las conexiones al servidor.
5. Aplique o guarde el perfil de configuración en el S-2654 y asegúrese de que los parámetros APN o de la SIM sean correctos.
6. Reinicie el equipo si la herramienta de configuración o el firmware lo requieren para aplicar los cambios de red.
7. Valide que el dispositivo reporte a Plaspy revisando el estado del equipo y la telemetría entrante en la consola de Plaspy.

## Ejemplos de comandos de configuración

El S-2654 suele configurarse mediante herramientas del fabricante en lugar de una única línea de comandos. Los comandos exactos y la secuencia pueden variar según el firmware y la versión de NTC Configurator o DRC que utilice. Debido a estas diferencias, siga la documentación oficial de Navtelekom y use la interfaz gráfica o las opciones de gestión remota proporcionadas para introducir los ajustes del servidor Plaspy (d.plaspy.com o 54.85.159.138) y el puerto 8888, seleccionar UDP o TCP si procede, luego guardar y reiniciar el dispositivo.

Si ha exportado o recibido cadenas SMS o de línea de comandos específicas de la documentación de Navtelekom para su firmware, aplíquelas con las herramientas oficiales y conserve los marcadores de posición según las instrucciones del fabricante.

## Notas de configuración

- Las diferencias de firmware pueden cambiar los pasos de configuración o la ubicación exacta de los campos de servidor en la interfaz del NTC Configurator; siempre verifique qué rama de firmware utiliza su equipo.
- Elija UDP o TCP según las opciones de interfaz del dispositivo y cualquier recomendación de Navtelekom; Plaspy soporta ambos transportes y detectará el protocolo del dispositivo automáticamente.
- Dado que el modelo S-2654 está archivado, confirme que está usando la versión correcta de NTC Configurator y revise el historial del DRC por comportamientos conocidos de firmware antes de un despliegue masivo.
- Use la capacidad de registro en microSD para reducir pérdida de datos durante breves interrupciones de cobertura y reconciliar los registros con Plaspy cuando se restablezca la conectividad.
- Mantenga actualizados los ajustes APN y de la SIM en la herramienta del fabricante para garantizar que el módem 3G pueda establecer una sesión de datos antes de intentar registrarse en Plaspy.

## Por qué usar Plaspy con esta configuración

Integrar el Navtelekom СИГНАЛ S-2654 con Plaspy ofrece a las organizaciones una forma práctica de centralizar posicionamiento GLONASS, telemetría industrial y datos de entradas/salidas en una única plataforma de seguimiento y reporte. Plaspy ingiere los informes del dispositivo para proporcionar visibilidad en tiempo real, alertas de eventos y reproducción histórica que ayudan a las flotas a gestionar rutas, monitorear sensores e implementar flujos de trabajo antirrobo.

Para obtener más información sobre Plaspy visite https://www.plaspy.com y consulte la documentación y herramientas del fabricante en https://www.navtelecom.ru/ para detalles actualizados sobre configuración específica del equipo, notas de firmware e instrucciones de configuración. Las especificaciones y los métodos de configuración del fabricante pueden cambiar con el tiempo, por lo que se recomienda verificar la información actual en los recursos oficiales de Navtelekom.

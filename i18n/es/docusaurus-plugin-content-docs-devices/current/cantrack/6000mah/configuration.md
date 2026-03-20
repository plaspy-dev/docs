---
slug: /cantrack/6000mah/configuration
id: 6000mah-configuration
sidebar_label: Configuration
title: CanTrack - 6000mAh Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del rastreador CanTrack 6000mAh GF50 para integrarlo con Plaspy y reportar telemetría y alertas
keywords:
  - CanTrack 6000mAh configuración
  - CanTrack 6000mAh instalación
  - CanTrack 6000mAh configuración de servidor
  - CanTrack GF50 configuración
  - configuración rastreador Plaspy
  - configuración dispositivo Plaspy
  - configuración rastreador GPS
  - configuración rastreador magnético para activos
  - configuración rastreador GPS para activos
  - configuración seguimiento de flotas
---

# CanTrack - 6000mAh Configuración

Esta página documenta el contexto público de configuración del rastreador magnético para activos CanTrack 6000mAh (GF50) cuando se utiliza con la plataforma Plaspy. Se enfoca en los ajustes de servidor compartidos y los pasos prácticos que preparan el dispositivo para comunicarse con Plaspy, ofreciendo seguimiento en tiempo real, alertas y reproducción histórica. Utilice este material para entender qué debe configurar en el dispositivo o mediante las herramientas del fabricante antes de incorporar el equipo a Plaspy.

Plaspy emplea ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración que provea su proveedor. El GF50 admite configuración remota mediante comandos SMS y parámetros de servidor como APN e IP/puerto, por lo que debe seguir las indicaciones del fabricante para el formato específico de comandos y notas de firmware.

## Visión general de la configuración

El proceso de configuración garantiza que el GF50 informe ubicación y eventos de telemetría a Plaspy de forma confiable. Usted configurará el dispositivo para apuntar al servidor de Plaspy, verificará la conectividad y validará que la plataforma reciba actualizaciones de posición y alarmas.

- Establecer el endpoint del servidor y el transporte del dispositivo para que la telemetría se reenvíe a Plaspy.
- Configurar el APN y parámetros celulares cuando sean necesarios para que el rastreador pueda establecer conexión de datos.
- Verificar el IMEI o identificador del dispositivo y confirmar que el equipo sea visible en Plaspy tras el primer reporte.
- Probar eventos habituales como actualizaciones de ubicación, alertas de manipulación o vibración y notificaciones de batería baja para asegurar que las alertas lleguen a Plaspy.
- Guardar la configuración y, si es necesario, reiniciar el rastreador o aplicar un restablecimiento de fábrica solo cuando lo indique la documentación del fabricante.

## Ajustes del servidor Plaspy

- Dominio de servidor d.plaspy.com como endpoint canónico para el reporte de dispositivos
- IP de servidor 54.85.159.138 disponible como endpoint alterno si se requiere un host numérico
- Puerto 8888 debe usarse para todos los dispositivos que se conecten a Plaspy
- Soporte de transporte para UDP o TCP según la opción de configuración del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que la plataforma analizará la telemetría entrante sin selección de protocolo por dispositivo

Tenga en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y que, según las herramientas del fabricante, puede solicitarse el dominio d.plaspy.com o la IP 54.85.159.138 con puerto 8888.

## Requisitos típicos antes de la configuración

- Una unidad CanTrack GF50 cargada y con alimentación, con acceso a su IMEI o número de serie para el registro
- Una tarjeta SIM celular activa y provista con un APN de datos funcional cuando se use telemetría celular
- Método de configuración del fabricante, como comandos SMS, herramienta de configuración de escritorio o móvil, o interfaz de instalador
- Acceso a credenciales o cuenta en la plataforma Plaspy para verificar la visibilidad y el reporte del dispositivo después de configurarlo
- Un plan de prueba básico para validar la precisión de la ubicación, las alarmas y los reportes de batería tras la configuración
- Opcional: conocimiento de la versión de firmware del equipo para consultar diferencias en comandos del fabricante

## Cómo se conecta este rastreador a Plaspy

En despliegues habituales, el GF50 transmite fijaciones GPS, actualizaciones de estado y eventos de alarma al endpoint y puerto del servidor Plaspy. Plaspy ingiere estos mensajes entrantes, aplica detección automática de protocolo y expone los datos mediante paneles, alertas y reproducción histórica.

- El rastreador se configura para enviar telemetría a d.plaspy.com o a 54.85.159.138 en el puerto 8888
- El transporte puede establecerse en UDP o TCP según las opciones del dispositivo y las condiciones de la red
- Plaspy detecta automáticamente el protocolo del rastreador y decodifica mensajes de posición y eventos
- Eventos reportados como alertas anti-manipulación, rupturas de geocerca, alarmas por vibración y advertencias de batería baja aparecen en Plaspy con sello de tiempo y contexto de ubicación
- Una configuración correcta resulta en la visibilidad inmediata del dispositivo en la plataforma Plaspy para monitoreo y análisis histórico

## Flujo de trabajo típico de configuración

1. Acceda al método o software oficial de configuración del fabricante para el GF50, por ejemplo el conjunto de comandos SMS o la herramienta de configuración suministrada por CanTrack o su distribuidor.
2. Ingrese el endpoint de servidor de Plaspy especificando el dominio d.plaspy.com o la IP 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Configure el puerto del dispositivo en 8888, ya que Plaspy utiliza el mismo puerto para todos los dispositivos compatibles.
4. Elija UDP o TCP si el dispositivo requiere selección de transporte; escoja el que corresponda a su red y a las indicaciones del instalador.
5. Configure el APN y cualquier parámetro celular requerido para que el rastreador pueda establecer una sesión de datos cuando utilice telemetría celular.
6. Aplique o guarde la configuración en la herramienta del fabricante o envíe la secuencia de comandos SMS requerida al rastreador.
7. Reinicie el dispositivo si el fabricante o la herramienta de configuración lo solicita para que los nuevos ajustes de servidor entren en efecto.
8. Valide que el equipo reporte a Plaspy comprobando la primera actualización de posición y cualquier evento de alarma de prueba en su cuenta Plaspy.

## Ejemplos de comandos de configuración

El formato y la sintaxis exacta de los comandos dependen del firmware del GF50 y de la documentación del fabricante. Muchos instaladores usan comandos basados en SMS o la herramienta del proveedor para establecer APN, IP o dominio de servidor y puerto. Dado que los conjuntos de comandos varían entre versiones de firmware y variantes regionales, consulte el manual CanTrack GF50 para las cadenas SMS o acciones de herramienta precisas.

Las tareas típicas de configuración que realizará con comandos o con la herramienta del fabricante incluyen:
- Configurar el APN de datos
- Apuntar el rastreador a d.plaspy.com o a 54.85.159.138
- Establecer el puerto 8888
- Seleccionar UDP o TCP si es necesario
- Guardar los ajustes y, opcionalmente, reiniciar el dispositivo

Si necesita ejemplos concretos de comandos, consulte la lista oficial de comandos CanTrack GF50 en la documentación del fabricante o con su proveedor. Esos documentos proporcionan la sintaxis SMS exacta y los marcadores que se utilizan para valores de APN.

## Notas de configuración

- Las versiones de firmware y las revisiones de hardware pueden cambiar los formatos exactos de los comandos SMS y los menús de las herramientas; siempre confirme los comandos con el manual GF50 correspondiente a su unidad.
- La configuración por SMS es comúnmente compatible, pero la sintaxis exacta, el formato de respuesta y los comandos disponibles varían por región y versión de firmware.
- Elija UDP o TCP según la fiabilidad de la red y las indicaciones del instalador; UDP suele usarse por menor sobrecarga mientras que TCP puede preferirse donde sea importante la confirmación de entrega.
- Verifique siempre los ajustes de APN con su operador de SIM y conserve los marcadores como APN, usuario y contraseña si su herramienta de configuración los requiere.
- Evite realizar restablecimientos de fábrica a menos que CanTrack soporte lo indique o esté intentando solucionar un dispositivo no responsivo

## Por qué usar Plaspy con esta configuración

Usar el CanTrack 6000mAh GF50 con Plaspy ofrece una combinación práctica para protección de activos a largo plazo, montaje discreto y monitoreo remoto. Los ajustes de servidor compartidos de Plaspy simplifican la incorporación, ya que la plataforma acepta la telemetría en un único endpoint y puerto conocido y detecta automáticamente el protocolo entrante para decodificar y procesar los datos.

Para obtener más información sobre cómo Plaspy puede ingerir y mostrar la telemetría del GF50 visite https://www.plaspy.com. Para los comandos específicos más recientes, notas de firmware y manuales técnicos del dispositivo, verifique los detalles de configuración con el fabricante en https://www.cantrackgps.com/ ya que las especificaciones y métodos de configuración pueden cambiar con el tiempo.

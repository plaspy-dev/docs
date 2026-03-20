---
slug: /autoseeker/at_20/configuration
id: at_20-configuration
sidebar_label: Configuration
title: Autoseeker - AT-20 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Autoseeker AT-20 con valores de servidor Plaspy y pasos prácticos para integrar el rastreo vehicular
keywords:
  - configuración Autoseeker AT-20
  - configuración AT-20
  - configuración Plaspy AT-20
  - configuración rastreador GPS Autoseeker
  - ajustes de servidor AT-20
  - instalación rastreador vehicular Autoseeker
  - configuración rastreador GPS Plaspy
  - seguimiento de flotas Autoseeker AT-20
  - integración telemetría Autoseeker
  - configuración plataforma GPS AT-20
---

# Autoseeker - Configuración del AT-20

Esta página documenta el contexto público de configuración para usar el rastreador GPS Autoseeker AT-20 con la plataforma Plaspy. Se enfoca en los ajustes prácticos y públicos que necesita para apuntar un AT-20 a Plaspy y validar la conectividad básica. Utilice esta guía junto con la documentación del fabricante del AT-20 al realizar cambios específicos en el dispositivo.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador después de que el dispositivo se conecta. Los pasos exactos del lado del fabricante y la interfaz para configurar el AT-20 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, así que revise siempre el manual del dispositivo al aplicar estos ajustes.

## Resumen de la configuración

El objetivo de configurar un AT-20 para Plaspy es preparar el dispositivo para enviar ubicación y telemetría al punto de ingestión de Plaspy, validar la conectividad y confirmar que los eventos reportados aparecen en la plataforma. Esto implica ingresar la dirección del servidor Plaspy en el rastreador, seleccionar un método de transporte si fuese necesario y verificar que el dispositivo se registre y envíe datos correctamente.

- Configure el dispositivo para que envíe posiciones y datos de eventos al endpoint del servidor Plaspy.
- Verifique la conectividad celular y los ajustes APN en el rastreador para que pueda alcanzar Plaspy mediante LTE o GPRS.
- Seleccione y pruebe el protocolo de transporte en el rastreador si el firmware lo requiere.
- Valide el reporte de eventos como ACC, SOS, geocerca y detección de movimiento para asegurar que las alertas aparezcan en Plaspy.
- Confirme que las rutas históricas y las actualizaciones en tiempo real se muestren en el panel de Plaspy después de la configuración.

## Ajustes del servidor Plaspy

Use estos ajustes públicos de servidor de Plaspy al configurar el AT-20. Todos los dispositivos en Plaspy usan el mismo puerto, y Plaspy intenta detectar automáticamente el protocolo del rastreador después de la conexión.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP según el firmware del dispositivo y la preferencia
- Detección automática de protocolo en Plaspy para que la plataforma reconozca el protocolo del rastreador tras la llegada de paquetes
- Tenga en cuenta que todos los dispositivos en Plaspy usan el mismo puerto para simplificar la configuración

## Requisitos típicos antes de la configuración

- Confirme que el AT-20 tiene una tarjeta SIM funcional y un plan de datos activo para acceso LTE o GPRS.
- Asegúrese de que el rastreador tenga alimentación adecuada y esté instalado según las indicaciones del fabricante.
- Disponga de acceso a la herramienta oficial de configuración Autoseeker, a comandos SMS o a la interfaz web necesaria para cambiar los ajustes del servidor.
- Conozca los valores APN correctos del operador de la SIM cuando se requiera datos móviles.
- Identifique si su firmware AT-20 exige seleccionar el transporte entre UDP y TCP.
- Prepárese para verificar que el dispositivo aparezca en Plaspy tras la configuración mediante telemetría o informes de eventos.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el AT-20 envía sus posiciones GNSS y telemetría del vehículo al endpoint y puerto compartido del servidor Plaspy. Plaspy ingiere esos paquetes, detecta automáticamente el protocolo del rastreador y mapea la telemetría entrante a la plataforma para visualización y alertas.

- El dispositivo transmite reportes de posición a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El transporte se elige en el dispositivo usando UDP o TCP según las opciones del firmware y las necesidades de la instalación.
- La telemetría como estado ACC, eventos SOS y detección de movimiento se reenvía a Plaspy como mensajes de evento.
- Plaspy detecta automáticamente el protocolo del rastreador una vez que llegan paquetes al puerto compartido del servidor.
- Tras una conexión exitosa, las actualizaciones de ubicación en vivo y las rutas históricas se vuelven visibles en Plaspy.

## Flujo de configuración habitual

1. Acceda al método o software oficial de configuración Autoseeker para el AT-20 según lo documentado por el fabricante.
2. Ingrese el nombre de host del servidor Plaspy d.plaspy.com o alternativamente la IP 54.85.159.138 en los ajustes del endpoint del dispositivo.
3. Configure el puerto del servidor en 8888 según requiere Plaspy.
4. Seleccione UDP o TCP en el dispositivo si es necesario elegir un transporte; ambos son compatibles con Plaspy.
5. Guarde o aplique el cambio de configuración en la herramienta del dispositivo o mediante comando SMS si está soportado.
6. Reinicie el dispositivo si el firmware requiere un reboot para que los cambios de red surtan efecto.
7. Valide que el AT-20 esté reportando a Plaspy comprobando la telemetría entrante y las actualizaciones de posición en vivo en la plataforma Plaspy.

## Ejemplos de comandos de configuración

El fabricante del AT-20 puede ofrecer métodos de configuración que incluyan comandos SMS, herramientas web o una utilidad de configuración dedicada. Los comandos exactos y la sintaxis varían según la versión de firmware y variantes regionales. Dado que el AT-20 soporta configuración por TCP/GPRS y SMS, consulte el manual de Autoseeker para el formato preciso de los comandos SMS o los pasos de la utilidad para establecer servidor, puerto y transporte.

Si dispone de un conjunto de comandos proporcionado por su proveedor, aplique la secuencia para:
- establecer el host del servidor a d.plaspy.com o 54.85.159.138
- establecer el puerto del servidor en 8888
- establecer el modo de transporte a UDP o TCP si es necesario
- guardar la configuración y reiniciar el dispositivo si procede

Consulte la guía oficial de configuración de Autoseeker para ejemplos de comandos exactos según su versión de firmware.

## Notas de configuración

- Las variaciones de firmware pueden cambiar las opciones de configuración disponibles y la sintaxis de los comandos; consulte siempre el manual del AT-20 para la revisión de firmware de su dispositivo.
- Algunos despliegues prefieren UDP por menor latencia y menor overhead de paquete, mientras que otros seleccionan TCP por la confirmación de entrega incorporada; elija el transporte que se ajuste a sus prioridades operativas.
- La configuración vía SMS es común en dispositivos con radio celular y resulta útil cuando no hay acceso remoto a una herramienta web.
- Las prácticas del instalador y el cableado de accesorios para entradas como ACC y SOS afectan la telemetría que reporta el rastreador a Plaspy; verifique el cableado conforme a la guía de instalación de Autoseeker.
- Plaspy intentará la detección automática del protocolo en el puerto compartido del servidor, pero los ajustes correctos de servidor y puerto son necesarios en el dispositivo para la conectividad inicial.

## Por qué usar Plaspy con esta configuración

Usar el Autoseeker AT-20 con Plaspy proporciona una forma directa de centralizar telemetría 4G y su conmutación a GPRS en una única plataforma de rastreo y gestión de flotas. Las entradas enfocadas al vehículo y el reporte de eventos del AT-20 se integran con Plaspy para que los operadores puedan monitorear ubicaciones en tiempo real, recibir alertas y analizar rutas históricas para obtener información operativa.

Para saber más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para la sintaxis de comandos específica del dispositivo, comportamiento del firmware y las instrucciones de instalación más recientes, verifique los detalles con el fabricante en https://autoseekergps.com/ ya que los métodos de configuración y las funciones de firmware pueden cambiar con el tiempo.

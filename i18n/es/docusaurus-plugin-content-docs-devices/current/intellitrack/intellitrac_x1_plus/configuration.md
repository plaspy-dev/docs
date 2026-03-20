---
slug: /intellitrack/intellitrac_x1_plus/configuration
id: intellitrac_x1_plus-configuration
sidebar_label: Configuration
title: Intellitrack - Intellitrac X1 Plus Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Intellitrack Intellitrac X1 Plus y su compatibilidad con Plaspy
keywords:
  - Configuración Intellitrack Intellitrac X1 Plus
  - Configuración rastreador GPS Intellitrack
  - Configuración Intellitrac X1 Plus Plaspy
  - Configuración seguimiento de vehículos
  - Ajustes servidor rastreador GPS
  - Configuración de dispositivo Plaspy
  - Configuración GPRS TCP UDP rastreador
  - Guía configuración remota de rastreadores
  - Integración seguimiento de activos
  - Configuración geovallas para rastreadores
---

# Intellitrack - Configuración de Intellitrac X1 Plus

Esta página describe el contexto de configuración pública para usar el rastreador Intellitrack Intellitrac X1 Plus con la plataforma Plaspy. Se concentra en los ajustes de servidor y transporte necesarios para conectar el equipo a Plaspy y explica qué debe preparar antes de integrar el rastreador para que informe correctamente en la plataforma.

Plaspy utiliza un endpoint de servidor compartido y el mismo puerto para los dispositivos compatibles, y detecta automáticamente el protocolo del rastreador cuando éste se conecta. Los pasos para configurar el equipo por parte del fabricante pueden variar según la versión de firmware, la revisión de hardware, el contexto de la instalación y las herramientas del proveedor, así que utilice esta guía junto con la documentación oficial de Intellitrack y las utilidades de configuración correspondientes.

## Resumen de la configuración

Configurar el Intellitrac X1 Plus para Plaspy prepara el equipo para enviar datos de ubicación y eventos mediante GPRS o CS Data a la plataforma Plaspy. El proceso se centra en establecer una conectividad fiable, garantizar los valores correctos de servidor y transporte, y confirmar que el dispositivo sea visible dentro de Plaspy.

- Configure el dispositivo para que reporte al endpoint del servidor de Plaspy y confirme el método de transporte.
- Verifique los ajustes de datos móviles y APN para que el rastreador pueda usar GPRS TCP o UDP para enviar datos a Plaspy.
- Guarde y aplique los ajustes del fabricante, y reinicie el rastreador si es necesario.
- Confirme que el rastreador aparezca en Plaspy y que envíe actualizaciones periódicas de posición.
- Pruebe el reporte de eventos como alertas de geovalla o alarmas de energía para comprobar la visibilidad completa.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de Plaspy al configurar el Intellitrac X1 Plus:

- servidor dominio d.plaspy.com
- servidor IP 54.85.159.138
- puerto 8888
- transporte compatible UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos en Plaspy usan el mismo puerto

Estos valores son el endpoint y puerto compartidos que Plaspy utiliza para las conexiones de dispositivos. Ingrese el dominio o la IP según lo permita la herramienta del fabricante o el firmware.

## Requisitos típicos antes de la configuración

- Acceso al método o software de configuración oficial de Intellitrack proporcionado por el fabricante o su distribuidor.
- Un Intellitrac X1 Plus encendido y funcionando con batería suficiente o alimentación externa.
- Una tarjeta SIM activa y un plan de datos móviles válido si va a usar reporte por GPRS TCP o UDP.
- Credenciales APN del operador de la SIM disponibles para configurar si el firmware lo requiere.
- Cobertura celular estable en el lugar de instalación para permitir el registro inicial y el envío de datos.
- Permisos o credenciales para guardar y aplicar ajustes en el dispositivo o mediante la utilidad de configuración.

## Cómo se conecta este rastreador a Plaspy

El Intellitrac X1 Plus puede configurarse para enviar ubicación y estado del equipo al endpoint y puerto compartidos de Plaspy. Cuando está configurado correctamente, el rastreador establece una sesión usando el transporte seleccionado y empieza a reportar posiciones, eventos de movimiento y alarmas para que Plaspy pueda mostrar y gestionar esa información.

- El dispositivo envía datos usando GPRS TCP o UDP a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Plaspy recibe la conexión entrante y detecta automáticamente el protocolo del rastreador.
- Las actualizaciones periódicas de posición y los mensajes de evento se reenvían a la plataforma Plaspy para su visualización.
- Las geovallas, alarmas de energía y otros eventos compatibles se transmiten a Plaspy según la configuración del dispositivo.
- El uso del puerto compartido de Plaspy simplifica la gestión de múltiples modelos, ya que todos reportan al mismo endpoint.

## Flujo de configuración habitual

1. Acceda al método o software de configuración oficial de Intellitrack que le haya facilitado el fabricante o su distribuidor.
2. En los ajustes de servidor del dispositivo ingrese el endpoint de Plaspy por dominio d.plaspy.com o por IP 54.85.159.138.
3. Configure el puerto del servidor en 8888 según lo requerido por Plaspy.
4. Seleccione UDP o TCP como transporte si el firmware del dispositivo solicita elegir el método de transporte.
5. Ingrese el APN u otras credenciales de red del operador de la SIM si va a usar datos celulares.
6. Aplique o guarde la configuración en la herramienta del fabricante o mediante el método SMS/CS Data si está soportado.
7. Reinicie el equipo si la herramienta de configuración o el firmware recomienda un reinicio para activar los nuevos ajustes.
8. Valide que el dispositivo reporte a Plaspy comprobando la recepción de actualizaciones de posición y eventos en la plataforma Plaspy.

## Ejemplos de comandos de configuración

El Intellitrac X1 Plus admite múltiples métodos de configuración, incluyendo software del fabricante, CS Data, SMS o actualizaciones OTA. Los formatos exactos de comandos y la sintaxis varían según el firmware y la distribución del fabricante. Debido a que los comandos son específicos del fabricante y pueden cambiar con el firmware, consulte el manual de configuración de Intellitrack para conocer los comandos SMS o CS Data exactos para establecer dominio del servidor, puerto, APN y transporte.

Si dispone de la lista oficial de comandos de Intellitrack proporcionada por su distribuidor, utilice esos comandos para configurar:
- dirección del servidor a d.plaspy.com o 54.85.159.138
- puerto a 8888
- transporte a UDP o TCP
- APN y cualquier credencial de red requerida

Conserve los marcadores de posición de las plantillas del fabricante como {{apn}} o {{apnu}} al aplicar los comandos y reemplácelos por los valores específicos del operador.

## Notas de configuración

- Las versiones de firmware y las revisiones de hardware pueden cambiar la sintaxis de los comandos y las opciones disponibles. Confirme siempre los comandos según el manual del dispositivo para su versión de firmware.
- El Intellitrac X1 Plus soporta métodos de configuración por SMS, CS Data y GPRS TCP UDP; los comandos por SMS pueden estar disponibles pero varían según el firmware y la personalización del proveedor.
- Elija TCP o UDP según las necesidades de su instalación y las recomendaciones del proveedor; Plaspy acepta ambos transportes pero el dispositivo debe configurarse acorde.
- Todos los dispositivos que reportan a Plaspy usan el puerto 8888. Emplear el puerto compartido facilita la configuración del servidor para múltiples modelos de rastreadores.
- Si su herramienta de configuración permite ingresar tanto dominio como IP, usar d.plaspy.com es preferible para mantenimiento, mientras que 54.85.159.138 está disponible cuando hay restricciones de DNS.

## Por qué usar Plaspy con esta configuración

Usar el Intellitrac X1 Plus con Plaspy ofrece a las organizaciones una forma sencilla de integrar rastreo GPS compacto y con funciones avanzadas en una sola plataforma. Una vez que el rastreador esté configurado para reportar a Plaspy mediante el dominio o la IP y el puerto 8888, las actualizaciones de ubicación, las alertas de geovalla y las notificaciones de energía se podrán supervisar de manera centralizada para mejorar la supervisión operativa.

Para obtener más información sobre Plaspy y cómo admite la integración de dispositivos visite https://www.plaspy.com. Para comandos específicos del dispositivo, detalles de firmware y la guía más reciente del fabricante verifique la información actual en el sitio del fabricante Intellitrack https://www.systech-iot.com/.

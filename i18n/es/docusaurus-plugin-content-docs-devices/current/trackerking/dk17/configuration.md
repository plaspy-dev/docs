---
slug: /trackerking/dk17/configuration
id: dk17-configuration
sidebar_label: Configuration
title: TrackerKing - DK17 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del TrackerKing DK17 para conectarlo a Plaspy con valores de servidor compartidos y pasos prácticos
keywords:
  - Configuración TrackerKing DK17
  - Configuración DK17
  - TrackerKing DK17 Plaspy
  - Configuración rastreador GPS DK17
  - Configuración servidor DK17
  - Configuración software seguimiento DK17
  - Configuración rastreador GPS Plaspy
  - Guía configuración rastreador de vehículo
  - Configuración seguimiento de flotas
  - Configuración servidor Plaspy
---

# TrackerKing - Configuración DK17

Esta página documenta el contexto público de configuración para usar el TrackerKing DK17 con la plataforma Plaspy. Resume los ajustes de servidor que Plaspy espera, describe el flujo de trabajo práctico y los requisitos previos, y explica cómo la telemetría y los eventos del DK17 se entregan a Plaspy para paneles y alertas. Use esta guía para preparar un DK17 para su integración con Plaspy y para entender qué pasos del fabricante suelen ser necesarios.

Plaspy emplea valores de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos de configuración desde el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor usadas para configurar el equipo. El DK17 es un rastreador vehicular cableado con conectividad 4G y 2G Cat 1, batería interna de respaldo y entradas del vehículo para encendido e inmovilizador; esta guía considera esas capacidades como el contexto operativo y se concentra en los valores públicos de configuración de Plaspy.

## Resumen de configuración

Este proceso prepara el DK17 para comunicarse de forma fiable con el backend de Plaspy y para enviar posición en tiempo real, alarmas y telemetría a su cuenta de Plaspy. El objetivo es apuntar el dispositivo al endpoint de Plaspy, asegurarse de que el transporte elegido quede guardado y validar que los informes de posición y eventos lleguen a Plaspy.

- Configure el endpoint de reporte del dispositivo con el dominio o IP del servidor de Plaspy para que el DK17 envíe los datos al destino correcto.
- Use el puerto compartido de Plaspy para que la plataforma reciba y normalize mensajes de múltiples modelos.
- Seleccione UDP o TCP en el dispositivo si el firmware del DK17 exige elección de transporte.
- Guarde y aplique la configuración, luego confirme que el rastreador es visible y reporta en Plaspy.
- Valide que los eventos de alarma y las señales de encendido o inmovilizador aparezcan como se espera en la plataforma.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos en Plaspy usan el mismo puerto

## Requisitos habituales antes de la configuración

- Un DK17 instalado profesionalmente, cableado a la alimentación del vehículo y a las entradas de encendido según las instrucciones de instalación del fabricante.
- Una SIM celular activa que ofrezca la conectividad requerida por la variante del DK17 y que sea compatible con las bandas 4G y 2G locales.
- Acceso al método o software de configuración oficial de TrackerKing proporcionado por el proveedor o el instalador.
- Conocimiento del IMEI del rastreador o del identificador del dispositivo para poder localizarlo y validarlo en Plaspy una vez que comience a reportar.
- Un entorno de prueba seguro para reiniciar y verificar los reportes sin afectar la operación del vehículo.

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado, el DK17 envía ubicación, estado y mensajes de eventos al endpoint y puerto del servidor de Plaspy para que la plataforma pueda ingerir y presentar los datos para monitoreo y análisis histórico. Plaspy recibe los mensajes del dispositivo, detecta automáticamente el protocolo del mensaje y mapea los eventos comunes dentro de la plataforma.

- El rastreador se configura para enviar telemetría a d.plaspy.com o al IP equivalente 54.85.159.138.
- Todo el tráfico del dispositivo se envía al puerto 8888 y Plaspy trata este puerto como la entrada común para los dispositivos compatibles.
- El DK17 puede usar transporte UDP o TCP en el puerto 8888 según las opciones de firmware y la elección del instalador.
- Plaspy detecta automáticamente el protocolo del DK17, por lo que no es necesaria la selección manual de protocolo en la plataforma.
- Una vez en modo reporte, el DK17 envía actualizaciones de posición, eventos de encendido y alarmas a Plaspy para seguimiento en tiempo real y alertas.

## Flujo de trabajo típico de configuración

1. Acceda al método o software oficial de configuración del TrackerKing DK17 proporcionado por el fabricante o instalador.
2. En los ajustes del dispositivo, ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 como endpoint de reporte.
3. Establezca el puerto del dispositivo en 8888 como puerto de destino para telemetría y reporte de eventos.
4. Elija UDP o TCP si el firmware del DK17 requiere selección de transporte; guarde el transporte seleccionado.
5. Aplique o guarde la configuración en el rastreador y confirme que el dispositivo acepta los nuevos ajustes.
6. Reinicie el rastreador si el fabricante o el firmware requieren un reinicio para que los ajustes de red tengan efecto.
7. Valide que el dispositivo reporta a Plaspy y que aparece en su panel de Plaspy con posición en vivo y datos de eventos.

## Ejemplos de comandos de configuración

La documentación del fabricante del DK17 o la herramienta de configuración determinan la sintaxis exacta de los comandos y el método de entrega. Esta guía pública no incluye líneas de comando específicas del dispositivo porque los métodos varían según el firmware y el software del proveedor. En la práctica, configurará el endpoint de reporte a d.plaspy.com o 54.85.159.138 y establecerá el puerto 8888 usando la utilidad de configuración de TrackerKing, la interfaz web o la herramienta de instalador suministrada por el proveedor. Consulte la guía de configuración de TrackerKing o a su instalador para los pasos precisos según la versión de firmware de su dispositivo.

## Notas de configuración

- Las variaciones de firmware pueden cambiar menús, comandos SMS o de herramienta y el comportamiento del transporte; revise siempre las notas de la versión del firmware del TrackerKing para su DK17.
- Elija UDP para latencia mínima cuando la pérdida de paquetes sea aceptable, o TCP cuando se prefiera un transporte más fiable y esté soportado por el firmware.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos y detecta automáticamente el protocolo del rastreador, por lo que normalmente no es necesario seleccionar el protocolo en la plataforma.
- Las buenas prácticas del instalador incluyen validar el IMEI y los reportes de posición iniciales inmediatamente después de aplicar los ajustes para resolver problemas de conectividad in situ.
- La documentación del fabricante es la fuente principal para opciones de configuración específicas del dispositivo, cableado de accesorios y procedimientos de reinicio.

## Por qué usar Plaspy con esta configuración

Usar el DK17 con Plaspy ofrece a los operadores de flotas una visibilidad centralizada de la ubicación del vehículo, estado de encendido, alarmas y estadísticas de kilometraje en una sola plataforma. La conectividad 4G y 2G del DK17 y su rango de alimentación diseñado para vehículos ayudan a mantener el reporte continuo, y dirigir el rastreador al endpoint de Plaspy simplifica la integración y reduce el tiempo para disponer de seguimiento en vivo.

Para obtener más información sobre Plaspy visite https://www.plaspy.com y para detalles específicos del dispositivo TrackerKing DK17 consulte el sitio del fabricante https://trackerking.cn/. Las especificaciones del fabricante, el comportamiento del firmware y los métodos de configuración pueden cambiar con el tiempo, por lo que debe verificar las instrucciones actuales del dispositivo en el sitio oficial de TrackerKing.

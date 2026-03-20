---
slug: /gosafe/g2c_db/configuration
id: g2c_db-configuration
sidebar_label: Configuration
title: Gosafe - G2C-DB Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del tracker Gosafe G2C-DB para integrarlo con Plaspy, incluyendo servidor y transporte
keywords:
  - Configuración Gosafe G2C-DB
  - Instalación Gosafe G2C-DB
  - G2C-DB Plaspy
  - Configuración tracker Gosafe
  - Configuración GPS Gosafe
  - Configuración servidor G2C-DB
  - Tracker de activos Gosafe Plaspy
  - Configuración plataforma GPS G2C-DB
  - Configuración telemetría Gosafe
  - Configuración seguimiento de flotas Gosafe
---

# Gosafe - Configuración G2C-DB

Esta página documenta el contexto público de configuración para usar el tracker Gosafe G2C-DB con Plaspy. Incluye los ajustes de servidor compartidos y los pasos prácticos que normalmente se requieren para apuntar un dispositivo G2C-DB compatible hacia Plaspy, de modo que la ubicación, la telemetría de movimiento y el estado del dispositivo sean visibles en la plataforma. El G2C-DB es un rastreador GPS resistente y de larga autonomía pensado para remolques, contenedores y equipos remotos; combina posicionamiento multi-constelación con gestión de energía optimizada y memoria store-and-forward para una entrega fiable a Plaspy.

Plaspy usa ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del tracker, mientras que los pasos exactos en el lado del fabricante pueden variar según firmware, revisión de hardware, tipo de instalación y herramientas del proveedor. El G2C-DB soporta variantes GSM/GPRS y LTE Cat-1, reporte por SMS y TCP, modos de reporte configurables (periódico, por movimiento y rastreo activo), actualizaciones FOTA, ranura para nano SIM, batería reemplazable de 9000 mAh y memoria store-and-forward; todos estos aspectos influyen en cómo debe configurarse y validarse el equipo antes de que aparezca en Plaspy.

## Resumen de la configuración

Este proceso prepara el G2C-DB para comunicarse de forma confiable con Plaspy y garantiza que la ubicación y la telemetría lleguen al endpoint y puerto compartidos de Plaspy para su procesamiento. Usted configurará el dispositivo para que reporte a Plaspy, elegirá el método de transporte que soporte el equipo y confirmará que las actualizaciones alcanzan la plataforma.

- Apunte el G2C-DB al endpoint del servidor de Plaspy para que las posiciones GPS y la telemetría se envíen a la plataforma.
- Configure el puerto y el transporte del dispositivo (UDP o TCP) de acuerdo con los ajustes de Plaspy.
- Valide la conectividad celular, el estado de la batería y la salud del dispositivo para que la memoria store-and-forward funcione cuando la cobertura sea intermitente.
- Guarde y aplique la configuración y luego confirme que el dispositivo aparece y reporta en Plaspy.
- Ajuste los modos de reporte en el dispositivo y en Plaspy para equilibrar frecuencia de actualizaciones y duración de batería.

## Ajustes del servidor Plaspy

- Dominio del servidor: d.plaspy.com para reporte e ingestión de dispositivos.
- IP del servidor: 54.85.159.138 como dirección alterna para entradas directas cuando se requiera.
- Puerto: 8888, que es el puerto único que usa Plaspy para todos los dispositivos soportados.
- Transporte: soporte para UDP o TCP; configure la opción de transporte del dispositivo a UDP o TCP según lo requiera la interfaz del equipo.
- Plaspy detecta automáticamente el protocolo del tracker, por lo que los dispositivos que reporten a d.plaspy.com en el puerto 8888 serán reconocidos y parseados.

## Requisitos típicos antes de la configuración

- Batería de 9000 mAh cargada o instalada y el dispositivo encendido y accesible para la configuración.
- Servicio celular activo y una nano SIM válida insertada si la unidad necesita SIM para reportes GSM o LTE.
- Acceso al método o software oficial de configuración de Gosafe para el modelo G2C-DB y la revisión de firmware correspondiente.
- Conocimiento de si el dispositivo usará TCP o UDP para reportar y acceso para cambiar ese transporte si el equipo lo permite.
- Una cuenta en Plaspy o acceso de administrador para verificar que el dispositivo aparece y para ajustar reportes y etiquetas en la plataforma.
- Verificación básica de cobertura en el lugar de instalación para asegurar que los primeros reportes puedan transmitirse.

## Cómo se conecta este tracker a Plaspy

El G2C-DB se configura para enviar ubicaciones, eventos de movimiento y estado del dispositivo al endpoint y puerto compartidos de Plaspy, de modo que Plaspy pueda ingerir y mostrar la telemetría para flotas y gestión de activos. Según la configuración, el equipo puede usar reportes periódicos o basados en movimiento y confiará en su memoria store-and-forward para brechas temporales de cobertura.

- El tracker reporta coordenadas GPS, marcas de tiempo y eventos del acelerómetro a d.plaspy.com en el puerto 8888.
- Los datos se envían por TCP o UDP según el transporte seleccionado durante la configuración.
- La memoria store-and-forward asegura que los registros se almacenen localmente y se transmitan a Plaspy cuando vuelva la conectividad.
- Estados del dispositivo como nivel de batería y salud de conectividad se reportan a Plaspy para monitoreo operativo.
- Plaspy detecta automáticamente el protocolo que usa el tracker cuando se conecta al servidor y puerto compartidos.

## Flujo de trabajo común de configuración

1. Acceda al método o software oficial de Gosafe para configurar el modelo G2C-DB y la versión de firmware instalada.
2. En los ajustes de servidor del dispositivo ingrese d.plaspy.com o, cuando se requiera IP explícita, 54.85.159.138.
3. Configure el puerto de reporte en 8888, ya que Plaspy usa el mismo puerto para todos los dispositivos soportados.
4. Elija UDP o TCP como transporte si el dispositivo requiere selección y su despliegue prefiere uno u otro protocolo.
5. Guarde o aplique los cambios de configuración en la herramienta del fabricante.
6. Reinicie el dispositivo si el método de configuración o el firmware exige reboot para aplicar los nuevos ajustes de servidor.
7. Valide que el dispositivo reporta a Plaspy revisando la plataforma Plaspy para el primer paquete de telemetría y confirmando que la ubicación y el estado del dispositivo aparecen.

## Ejemplos de comandos de configuración

Los comandos y cadenas exactas dependen de la herramienta de configuración de Gosafe, la versión de firmware y de si utiliza SMS, cable USB de configuración, interfaz web del fabricante o herramientas FOTA remotas. Como los fabricantes ofrecen múltiples vías de configuración, adapte estas instrucciones generales al método que Gosafe le proporcione.

- Al ingresar la información del servidor en la herramienta del dispositivo, use:
  - Dominio del servidor: d.plaspy.com
  - IP alternativa del servidor: 54.85.159.138
  - Puerto: 8888
  - Transporte: UDP o TCP

Si utiliza una interfaz de comandos por SMS del fabricante o un archivo de comandos de texto, siga la sintaxis exacta proporcionada por Gosafe para su firmware. Los marcadores de posición {{apn}}, {{apnu}} y {{apnp}} son usados por algunos fabricantes para configuraciones APN; si aparecen en su documentación de Gosafe, respételos y reemplace con los valores APN del operador cuando sea necesario.

## Notas de configuración

- Las diferencias de firmware y revisiones de hardware pueden cambiar los campos de configuración disponibles y la sintaxis de los comandos; siempre revise las notas de firmware del G2C-DB.
- En despliegues con cobertura intermitente utilice la capacidad store-and-forward del G2C-DB para conservar eventos hasta que haya conectividad.
- Elija UDP para menor overhead y TCP cuando prefiera fiabilidad y entrega ordenada, recordando que Plaspy acepta ambos en el puerto compartido.
- El reporte por SMS puede estar soportado como vía alternativa para configuración o como reporte de respaldo según la documentación de Gosafe.
- Las prácticas del instalador y las variantes regionales del dispositivo (GSM/GPRS frente a LTE Cat-1) pueden requerir distintos ajustes APN o del operador; consulte la guía oficial de Gosafe.

## Por qué usar Plaspy con esta configuración

Usar el Gosafe G2C-DB con Plaspy brinda a los equipos operativos visibilidad centralizada de trackers de larga autonomía optimizados para bajo mantenimiento. La combinación de GNSS multi-constelación, reporte de eventos por acelerómetro, memoria store-and-forward y tolerancia a entornos exigentes hace que el G2C-DB sea adecuado para remolques, contenedores y equipos remotos, mientras que Plaspy ofrece la ingestión, el mapeo y las alertas necesarias para la gestión de flotas y la monitorización anti robo.

Para obtener más información sobre Plaspy y cómo se integra con trackers compatibles visite https://www.plaspy.com. Para los métodos de configuración más actuales, comportamiento de firmware y detalles del fabricante, verifique la información en el sitio oficial de Gosafe https://gosafesystem.com/.

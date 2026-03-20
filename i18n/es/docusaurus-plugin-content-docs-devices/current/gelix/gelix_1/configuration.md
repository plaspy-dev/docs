---
slug: /gelix/gelix_1/configuration
id: gelix_1-configuration
sidebar_label: Configuration
title: Gelix - Gelix 1 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para Gelix 1 con Plaspy, incluye ajustes de servidor e pasos de integración
keywords:
  - Configuración Gelix 1
  - Instalación Gelix 1
  - Configuración registrador GPS Gelix
  - Compatibilidad Gelix Plaspy
  - Configuración servidor Gelix
  - Configuración rastreador GPS
  - Configuración seguimiento de vehículos
  - Configuración registrador GPS pasivo
  - Recuperación de datos desde dispatcher
  - Recuperación de datos Bluetooth Gelix
---

# Gelix - Configuración de Gelix 1

Esta página ofrece el contexto público de configuración para usar el rastreador Gelix 1 con Plaspy. Explica cómo opera el Gelix 1 como un registrador de datos GPS pasivo, los métodos habituales para recuperar los datos de navegación y eventos almacenados, y los pasos prácticos necesarios para integrar su flujo de datos con la plataforma Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador en las conexiones entrantes. Los pasos exactos en el lado del fabricante para el Gelix 1 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; por tanto, siga esta guía para las configuraciones públicas de Plaspy y el flujo de trabajo general, y consulte la documentación de Gelix para instrucciones específicas del dispositivo.

## Resumen de la configuración

Esta configuración está orientada a preparar la ruta de recuperación de datos del Gelix 1 para que los registros y eventos almacenados sean visibles y utilizables en Plaspy. Dado que el Gelix 1 es principalmente un registrador pasivo con múltiples opciones de recuperación, la integración suele implicar configurar el sistema de recogida o el software despachador para reenviar los datos recopilados a Plaspy.

- Configure el punto de destino para que los registros almacenados se reenvíen al servidor de Plaspy.
- Valide la conectividad desde el punto de recuperación hasta Plaspy y confirme que los registros del dispositivo se procesan.
- Asegúrese de que el ajuste de transporte coincida con la capacidad del sistema de recuperación eligiendo UDP o TCP según corresponda.
- Guarde y aplique los ajustes en la herramienta del fabricante o en el software despachador y verifique que Plaspy reciba los datos.
- Confirme la visibilidad de los registros y eventos del dispositivo en Plaspy tras una transferencia exitosa.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos del servidor al configurar la herramienta de recuperación o el software despachador del Gelix 1 para reenviar los datos registrados a Plaspy:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP; el dispositivo puede configurarse usando UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos en Plaspy usan el mismo puerto

## Requisitos típicos antes de la configuración

- Acceso a la herramienta de configuración o de recuperación del Gelix 1 proporcionada por el fabricante o vendedor.
- Infraestructura de recuperación de datos en funcionamiento, como un PC despachador, PDA o punto de acceso radio para recogida por Bluetooth o RF.
- Alimentación al dispositivo y confirmación de que el Gelix 1 ha registrado datos disponibles para recuperar.
- Conectividad de red desde el sistema de recuperación o el software despachador a Internet para alcanzar d.plaspy.com o 54.85.159.138.
- Acceso administrativo al software despachador o al PC para ingresar el punto final y el puerto de Plaspy.
- Un plan de pruebas para validar la transferencia y la visibilidad de los registros en Plaspy.

## Cómo se conecta este rastreador a Plaspy

Al ser un registrador pasivo, el patrón habitual del Gelix 1 es recuperar los datos almacenados en la unidad y reenviar esos datos recopilados al servidor de Plaspy. El mecanismo de recuperación puede ser local o remoto, y el punto de reenvío debe configurarse para apuntar al servidor y puerto compartidos de Plaspy para que los registros se procesen automáticamente.

- El Gelix 1 registra datos de navegación y eventos mientras está en movimiento o cuando ocurre un evento externo.
- La recuperación de datos se realiza a través de un punto de acceso radio en la cochera o área de estacionamiento, o mediante intercambio por cable, IrDA o Bluetooth usando un PDA o PC.
- El sistema de recuperación o el software despachador reenvía los registros almacenados a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El reenvío puede usar UDP o TCP según la herramienta de recuperación y la configuración; Plaspy detecta automáticamente el protocolo entrante del rastreador.
- Una vez reenviados, los registros y eventos del dispositivo se vuelven visibles y utilizables en la plataforma Plaspy para monitoreo e informes.

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración de Gelix o al software del proveedor usado para recuperar datos del Gelix 1.
2. En el software de recuperación o herramienta despachadora, ingrese el servidor de Plaspy como d.plaspy.com o alternativamente 54.85.159.138.
3. Establezca el puerto de destino en 8888, que es el puerto compartido de Plaspy usado por todos los dispositivos compatibles.
4. Elija UDP o TCP si la herramienta de recuperación requiere seleccionar el transporte; el dispositivo puede configurarse con UDP o TCP en el puerto 8888.
5. Aplique o guarde la configuración en el software del fabricante o despachador.
6. Reinicie el software o dispositivo de recuperación si la herramienta exige reinicio para aplicar ajustes de red.
7. Valide que los registros se transmiten y que el dispositivo aparece en Plaspy revisando los registros o eventos recientemente recibidos.

## Ejemplos de comandos de configuración

El Gelix 1 normalmente se configura mediante las herramientas de recuperación proporcionadas por el fabricante o el software despachador, más que por comandos AT directos. Los comandos y procedimientos exactos varían según el firmware y las herramientas del proveedor. Use la utilidad oficial de configuración Gelix o su software despachador y configure los valores de servidor de Plaspy indicados en esta guía. Si su proveedor ofrece configuración por línea de comandos o por SMS, siga la sintaxis documentada y sustituya el hostname o IP y el puerto de Plaspy según corresponda.

Si cuenta con comandos o scripts suministrados por el proveedor para su despliegue, inclúyalos en el orden exacto recomendado por el fabricante y conserve cualquier marcador de posición que requieran.

## Notas de configuración

- Las versiones de firmware y de las herramientas del proveedor pueden cambiar las pantallas de configuración o las opciones disponibles. Verifique la interfaz o la sintaxis de comandos con la documentación actual de Gelix.
- Elija UDP o TCP según la capacidad del sistema de recuperación y las restricciones de la red local. Plaspy detectará automáticamente el protocolo del rastreador cuando lleguen los datos.
- Para despliegues con puntos de acceso radio, confirme que el software del AP está configurado para reenviar los registros del Gelix 1 al punto final y puerto de Plaspy.
- Al usar un flujo de trabajo con PDA o transferencia por cable, asegúrese de que el software intermedio pueda acceder al servidor público de Plaspy desde su red.
- Mantenga un pequeño conjunto de datos de prueba y confirme la ingestión exitosa en Plaspy antes de desplegar un gran número de dispositivos.

## Por qué usar Plaspy con esta configuración

Usar Plaspy para recibir y procesar los datos del Gelix 1 centraliza los registros de navegación y eventos en una única plataforma para monitoreo, análisis histórico y supervisión operativa. Las organizaciones que dependen de la recuperación periódica de datos se benefician al reenviar los registros recopilados a Plaspy para consolidar informes, activar procesos posteriores y mantener un archivo buscable de la actividad del dispositivo.

Learn more about Plaspy and how it can integrate with logging devices at https://www.plaspy.com. Please verify the latest Gelix 1 device specific setup details and any manufacturer supplied configuration methods on the official Gelix website http://www.gelix.com/ as firmware behavior and configuration procedures can change over time.

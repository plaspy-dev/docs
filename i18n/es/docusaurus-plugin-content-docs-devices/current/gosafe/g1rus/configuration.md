---
slug: /gosafe/g1rus/configuration
id: g1rus-configuration
sidebar_label: Configuration
title: Gosafe - G1RUS Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador Gosafe G1RUS y conectarlo a Plaspy usando ajustes de servidor compartidos y pasos prácticos
keywords:
  - Configuración Gosafe G1RUS
  - Instalación Gosafe G1RUS
  - G1RUS configuración Plaspy
  - Rastreador Gosafe Plaspy
  - Configuración servidor G1RUS
  - Configuración rastreador GPS G1RUS
  - configuración rastreador de activos
  - configuración de seguimiento de vehículos
  - Guía de instalación Gosafe
  - ajustes del servidor del rastreador
---

# Gosafe - Configuración del G1RUS

Esta página describe el contexto público de configuración para utilizar el rastreador Gosafe G1RUS con Plaspy. Explica los ajustes de servidor compartidos que Plaspy requiere, detalla los pasos prácticos que normalmente deberá ejecutar en el lado del fabricante y señala qué verificar antes de considerar el dispositivo completamente conectado y visible en la plataforma Plaspy. Las indicaciones a continuación se basan únicamente en información pública y están enfocadas a preparar el G1RUS para despliegues confiables a largo plazo.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use esta página como una lista de verificación práctica y confirme cualquier comando o flujo de menú específico con la documentación de Gosafe o sus herramientas de instalación.

## Resumen de la configuración

El objetivo de configurar el G1RUS para Plaspy es apuntar el rastreador al servidor de Plaspy, seleccionar el transporte adecuado y validar que los mensajes de ubicación y telemetría llegan a la plataforma. La configuración integra el dispositivo en el modelo de endpoint único de Plaspy para que la plataforma interprete automáticamente el protocolo del rastreador y comience a mostrar actualizaciones en vivo y alertas.

- Configure el rastreador para que informe a Plaspy usando el endpoint y puerto compartidos de Plaspy.
- Seleccione el modo de transporte compatible con el dispositivo y la red, UDP o TCP.
- Proporcione cualquier detalle necesario de conectividad celular, como una SIM funcional y el APN correcto en dispositivos que lo requieran.
- Guarde y aplique la configuración; reinicie o realice un ciclo de alimentación si el fabricante lo recomienda.
- Valide la conectividad confirmando que el dispositivo aparece en Plaspy y está enviando actualizaciones de posición y estado.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: UDP o TCP según la preferencia del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que el mismo puerto se usa para todos los dispositivos

## Requisitos previos para la configuración

- Una unidad G1RUS con alimentación suficiente o conectada a una fuente externa para realizar la configuración y las pruebas.
- Servicio celular activo o eSIM habilitada para datos en dispositivos que dependen de comunicaciones GSM/GPRS.
- Acceso al método oficial de configuración de Gosafe, como la aplicación del fabricante, portal web, herramienta serial o conjunto de comandos SMS.
- Información identificadora del dispositivo, por ejemplo el IMEI, para relacionar el rastreador con la vista o el inventario en Plaspy.
- Conocimiento de la versión de firmware y la revisión de hardware del dispositivo, ya que los menús y comandos pueden variar según la versión.
- Accesorios opcionales conectados y probados si piensa habilitar sensores externos, eventos del acelerómetro o integraciones Bluetooth.

## Cómo se conecta este tracker a Plaspy

Una vez configurado, el G1RUS envía fijaciones GNSS y telemetría al endpoint y puerto del servidor Plaspy. Plaspy ingiere ubicaciones, eventos de movimiento y mensajes de estado del dispositivo, y los muestra en la plataforma para monitoreo en tiempo real e informes históricos.

- El rastreador se configura para transmitir datos a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- El transporte puede ser UDP o TCP según la configuración del dispositivo y las condiciones de la red.
- Plaspy detecta automáticamente el protocolo del rastreador y decodifica los mensajes entrantes para su visualización en el mapa, alertas e informes.
- La telemetría, como eventos del acelerómetro, estado de entradas/salidas digitales e información de batería, se remite a Plaspy cuando el dispositivo está configurado para incluir esos campos.
- Después de la configuración, Plaspy mostrará el dispositivo en línea cuando se reciban mensajes correctamente en el puerto compartido.

## Flujo común de configuración

1. Acceda al método oficial de configuración de Gosafe para el G1RUS (aplicación del fabricante, herramienta serial o interfaz de comandos SMS).
2. Ingrese el servidor de Plaspy como dominio d.plaspy.com o como la dirección IP 54.85.159.138 en el campo de servidor u host del dispositivo.
3. Establezca el puerto del dispositivo en 8888. Tenga en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos soportados.
4. Seleccione UDP o TCP para el transporte si el dispositivo requiere una selección explícita; elija el que mejor soporte su red.
5. Aplique o guarde la configuración en la herramienta del dispositivo o envíe el comando de guardar/confirmar correspondiente.
6. Reinicie o realice un ciclo de alimentación del G1RUS si las instrucciones del fabricante requieren un reinicio para aplicar los cambios de servidor.
7. Valide que el dispositivo informe a Plaspy comprobando la recepción de posiciones y estados en la plataforma y confirmando que el dispositivo aparece en línea.

## Ejemplos de comandos de configuración

El G1RUS soporta múltiples interfaces de configuración y la sintaxis exacta de los comandos o el flujo de menús depende del firmware del fabricante y de la herramienta que utilice. Gosafe ofrece configuración de dispositivo mediante herramientas del fabricante, conexiones seriales o conjuntos de comandos SMS en muchas implementaciones. Debido a que los comandos y los parámetros varían según el firmware y la herramienta, consulte la guía de configuración oficial de Gosafe o la interfaz del dispositivo para la sintaxis exacta.

Si utiliza configuración basada en SMS en dispositivos que la soportan, los pasos públicos típicos son:
- Use el formato SMS del fabricante para establecer el host del servidor en d.plaspy.com o 54.85.159.138.
- Use el formato SMS del fabricante para establecer el puerto en 8888.
- Use el comando SMS de guardar o reiniciar según lo especifique Gosafe.

Consulte la documentación de Gosafe para las cadenas SMS o los comandos CLI exactos según su versión de firmware.

## Notas de configuración

- Las diferencias de firmware pueden cambiar las etiquetas del menú de configuración, las cadenas SMS o la sintaxis de comandos seriales. Verifique los comandos según la versión de firmware del dispositivo.
- Elija UDP o TCP según la confiabilidad de la red y el tratamiento de paquetes cortos por parte de su operador; ambos son compatibles con Plaspy en el puerto 8888.
- Asegúrese de que el APN y el plan de datos de la SIM sean correctos si la unidad usa datos celulares para las cargas TCP/UDP.
- Para despliegues largos y sin supervisión, confirme la estrategia de alimentación y el perfil de reporte para equilibrar la vida útil de la batería y la frecuencia de actualizaciones.
- Pruebe un solo dispositivo de extremo a extremo en Plaspy antes de desplegar una flota para confirmar el análisis de mensajes y que los campos de telemetría esperados sean visibles.

## Por qué usar Plaspy con esta configuración

Configurar el G1RUS para reportar a Plaspy ofrece visibilidad confiable para remolques, contenedores y otros activos de alto valor. La detección automática de protocolo y el endpoint compartido de Plaspy simplifican la integración, de modo que dispositivos que soportan TCP o UDP pueden ponerse en línea con un enfoque de configuración consistente. Con Plaspy, los administradores de flotas y propietarios de activos reciben ubicaciones en vivo, alertas condicionadas e informes basados en telemetría que mejoran la supervisión operativa y los tiempos de respuesta.

Learn more about Plaspy and how it supports asset tracking and fleet management at https://www.plaspy.com. For device specific commands, firmware details, and the most current setup methods for the G1RUS, verify the manufacturer documentation at https://gosafesystem.com/.

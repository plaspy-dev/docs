---
slug: /autofon/2xl/configuration
id: 2xl-configuration
sidebar_label: Configuration
title: AutoFon - Альфа-Маяк 2XL Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el AutoFon Альфа-Маяк 2XL con Plaspy con ajustes de servidor y flujo para reportes GPRS y SMS
keywords:
  - configuración AutoFon Альфа-Маяк 2XL
  - configuración AutoFon 2XL
  - configuración rastreador AutoFon Plaspy
  - configuración GPS Alpha Beacon 2XL
  - configuración servidor 2XL
  - configuración rastreador GPS Plaspy
  - configuración seguimiento activos AutoFon
  - seguimiento vehicular AutoFon 2XL
  - configuración servidor Plaspy
  - documentación Alpha Beacon 2XL
---

# AutoFon - Альфа-Маяк 2XL Configuración

Esta página ofrece el contexto público de configuración para utilizar el rastreador AutoFon Альфа-Маяк 2XL con Plaspy. Resume los ajustes de servidor compartidos que usa Plaspy, los pasos prácticos para apuntar el dispositivo a los endpoints de Plaspy y qué verificar al validar la conectividad y el reporte. Use esta guía para preparar el equipo para la integración con Plaspy, mientras sigue cualquier instrucción específica del fabricante.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando llegan los paquetes. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El 2XL soporta reporte por GPRS con SMS como respaldo, y el procedimiento a continuación se centra en los detalles públicos del servidor y del flujo necesarios para enrutar esos mensajes hacia Plaspy.

## Resumen de la configuración

El objetivo de la configuración es preparar el Альфа-Маяк 2XL para enviar ubicación y telemetría a Plaspy, de modo que el dispositivo sea visible en la plataforma, las alertas se enruten correctamente y los registros se guarden. En términos prácticos, esto implica ingresar el endpoint de Plaspy, confirmar los ajustes de transporte y validar que los reportes lleguen a la cuenta de Plaspy.

- Apunte el equipo al endpoint del servidor Plaspy usando la herramienta de configuración del fabricante o comandos SMS según lo suministrado por AutoFon.
- Confirme que el dispositivo esté configurado para usar el puerto compartido de Plaspy para que los paquetes sean aceptados y procesados por la plataforma.
- Elija UDP o TCP como medio de transporte si el firmware del equipo lo requiere o según las condiciones de red.
- Valide el reporte con una posición de prueba o un mensaje de estado y verifique el dispositivo en Plaspy para confirmar la ingestión exitosa.
- Cuando esté disponible, active el respaldo por SMS para que las alertas críticas puedan entregarse si el GPRS no está disponible.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol when it receives device messages  
- All devices in Plaspy use the same port so the platform accepts connections on port 8888 across supported models

## Requisitos típicos antes de la configuración

- Una unidad AutoFon Альфа-Маяк 2XL cargada y operativa con la SIM integrada activa y cobertura de red disponible para reportes GPRS o SMS.  
- Acceso al método oficial de configuración de AutoFon para el 2XL o conocimiento del conjunto de comandos SMS provistos por el fabricante.  
- Conocimientos básicos del modo de reporte del dispositivo para elegir GPRS como primario con SMS como respaldo si es necesario.  
- Cobertura de red y disponibilidad de datos para reporte GPRS hacia el endpoint del servidor Plaspy.  
- Una cuenta activa en Plaspy o acceso a la plataforma para verificar que el dispositivo aparezca y reporte después de la configuración.  
- Si la instalación es in situ, un plan de alimentación y montaje seguro adecuado a la carcasa y al despliegue del equipo.

## Cómo se conecta este rastreador a Plaspy

El Альфа-Маяк 2XL envía su posición y telemetría a Plaspy mediante paquetes GPRS o mensajes SMS dirigidos al endpoint y puerto del servidor de Plaspy. Plaspy ingiere los mensajes de coordenadas, actualizaciones de estado y alertas para su visualización en el panel, registro y flujos automatizados de notificación.

- El rastreador envía paquetes GPRS a d.plaspy.com o 54.85.159.138 en el puerto 8888 para la entrega en tiempo real de ubicación y telemetría.  
- Si está configurado, el SMS puede usarse como canal de respaldo para reenviar alertas críticas y mensajes de posición a la plataforma.  
- Las alertas SOS y otros eventos se reenvían a Plaspy para que aparezcan en los flujos de incidentes.  
- Plaspy detecta automáticamente el protocolo del rastreador, de modo que el servidor puede parsear los paquetes del dispositivo sin requerir una selección manual de protocolo en la plataforma.  
- Usar el puerto compartido de Plaspy garantiza una ingestión consistente entre dispositivos compatibles y simplifica la configuración de la flota.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración de AutoFon o al software para el Альфа-Маяк 2XL, o tenga a mano el conjunto de comandos SMS del fabricante.  
2. Ingrese la dirección del servidor usando el dominio d.plaspy.com o la IP 54.85.159.138 según el método de configuración disponible.  
3. Configure el valor de puerto en 8888 que Plaspy utiliza para todos los dispositivos compatibles.  
4. Elija UDP o TCP como transporte si el dispositivo exige una selección explícita para el transporte de paquetes.  
5. Guarde o aplique la configuración en la herramienta del dispositivo o envíe los comandos SMS de configuración según las instrucciones del fabricante.  
6. Reinicie o corte la alimentación del equipo si el firmware requiere un reinicio para aplicar los ajustes de red.  
7. Valide que el dispositivo reporte a Plaspy enviando una posición de prueba o verificando la telemetría inicial en su cuenta de Plaspy.

## Comandos de configuración de ejemplo

El AutoFon Альфа-Маяк 2XL admite la configuración mediante las herramientas oficiales del fabricante y comandos SMS que pueden variar según el firmware y la variante regional del producto. Debido a que los formatos exactos de los comandos SMS y las utilidades de configuración los proporciona el fabricante y pueden cambiar, consulte la documentación de AutoFon para la sintaxis y ejemplos actuales. Si su equipo incluyó una hoja de configuración o guía de SMS, utilice esos comandos exactos al ingresar d.plaspy.com o 54.85.159.138 y al establecer el puerto 8888. Plaspy aceptará paquetes UDP o TCP en el puerto 8888 y detectará el protocolo del dispositivo automáticamente cuando lleguen los mensajes.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar las opciones de configuración disponibles y la sintaxis requerida de los comandos. Siempre verifique la documentación de AutoFon para los comandos SMS o de software exactos para su unidad.  
- Elija UDP cuando necesite menor overhead y transmisiones más rápidas; elija TCP si prefiere entrega ordenada y el firmware del equipo lo soporta. Pruebe ambos si el comportamiento de la red no es claro.  
- El respaldo por SMS es útil para alertas críticas cuando la cobertura GPRS es intermitente; confirme el enrutamiento por SMS durante la configuración con los ajustes de Plaspy.  
- El dispositivo incluye un buffer interno tipo caja negra para paquetes no enviados, lo cual ayuda a reducir brechas de datos cuando la conectividad GPRS es inestable.  
- Las prácticas del instalador y las variantes de mercado pueden afectar cómo se aplican los ajustes. Si un proveedor preconfigura los dispositivos, confirme que los valores de servidor y puerto coinciden con los requisitos de Plaspy antes del despliegue.

## Por qué usar Plaspy con esta configuración

Usar el AutoFon Альфа-Маяк 2XL con Plaspy ofrece una manera sencilla de incorporar rastreo GPS de larga duración y bajo mantenimiento a un flujo de trabajo de flota o monitoreo de activos. La capacidad del rastreador para reenviar paquetes GPRS y alertas SMS a un endpoint compartido de Plaspy simplifica los despliegues a gran escala y centraliza la telemetría, el manejo de incidentes y el registro histórico para la supervisión operativa.

Para saber más sobre Plaspy y cómo la plataforma gestiona la ingestión, el enrutamiento y el monitoreo de dispositivos visite https://www.plaspy.com. Para métodos de configuración específicos del dispositivo más recientes, comportamiento de firmware y detalles del fabricante verifique la información actual en el sitio oficial de AutoFon https://www.autofon.ru/ ya que los procedimientos y la sintaxis de comandos pueden cambiar con nuevas versiones de firmware y revisiones del producto.

---
slug: /riti/670_idu_300/configuration
id: 670_idu_300-configuration
sidebar_label: Configuration
title: Riti - 670 (IDU-300) Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Riti Locator 670 IDU 300 con los ajustes de servidor de Plaspy
keywords:
  - configuración Riti 670
  - configuración Riti 670 para Plaspy
  - configuración servidor IDU 300
  - configuración rastreador GPS Riti
  - integración rastreador Plaspy
  - ajustes servidor rastreador GPS
  - configuración seguimiento de flotas
  - configuración de dispositivos telemáticos
  - configuración plataforma de seguimiento vehicular
  - detección de protocolo del rastreador
---

# Riti - 670 (IDU-300) Configuración

Esta página presenta el contexto público de configuración para usar el Riti Locator 670 IDU 300 con la plataforma Plaspy. Describe los ajustes de servidor compartidos que requiere Plaspy, consideraciones prácticas de instalación y el flujo general para preparar el equipo para que reenvíe posiciones GNSS y telemetría de periféricos a Plaspy para visibilidad en tiempo real e informes.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del equipo cuando se conecta. Los pasos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, así que utilice esta guía como referencia práctica y contraste con las instrucciones específicas del fabricante.

## Resumen de la configuración

La preparación del 670 para Plaspy se centra en habilitar la subida confiable de posiciones GNSS y telemetría de sensores a la plataforma y en confirmar que el dispositivo aparezca en Plaspy. El proceso normalmente incluye configurar el endpoint del servidor en el rastreador, asegurar la conectividad celular o de red y validar la subida para que Plaspy muestre la ubicación y los eventos en vivo.

- Configure el dispositivo para que reporte al endpoint y puerto del servidor de Plaspy, de modo que las posiciones y los datos de sensores lleguen a la plataforma.  
- Verifique la conectividad celular y los valores de APN para que la unidad pueda establecer una sesión IP y subir datos.  
- Seleccione el protocolo de transporte si el equipo exige elegir entre UDP o TCP y guarde la configuración.  
- Asegúrese de que la frecuencia de reporte periódica y las entradas de periféricos estén habilitadas para soportar kilometraje por segundo, batería y telemetría de sensores en Plaspy.  
- Confirme que la unidad sea visible en Plaspy tras la configuración y que el flujo de datos se reanude después de interrupciones de red.

## Ajustes del servidor de Plaspy

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP on port 8888 depending on device configuration options  
- Plaspy automatically detects the tracker protocol when the device connects  
- All devices in Plaspy use the same port which simplifies bulk deployments

## Requisitos previos

- Un Locator 670 instalado y con alimentación, con acceso a la interfaz o software de configuración del fabricante.  
- Un plan de datos celulares activo y una SIM correctamente provisionada para los equipos que usan redes móviles.  
- Valores de APN correctos proporcionados por el operador móvil listos para ingresar en la configuración del dispositivo cuando se requiera.  
- Acceso al método de configuración oficial de Riti o a la herramienta del proveedor para el modelo IDU 300 para cambiar servidor y parámetros de transporte.  
- Una cuenta en Plaspy y la capacidad de registrar o identificar dispositivos en la plataforma para monitoreo e informes.  
- Herramientas básicas para reiniciar el dispositivo después de la configuración y para visualizar reportes en vivo en Plaspy para la validación.

## Cómo se conecta este rastreador a Plaspy

El Locator 670 reenvía fijaciones GNSS y telemetría de periféricos al endpoint y puerto compartido de Plaspy para que la plataforma ofrezca mapas en vivo, eventos e informes históricos. Los datos se empaquetan en el dispositivo y se suben por la conexión celular al endpoint de Plaspy, donde la plataforma resuelve automáticamente el protocolo del rastreador.

- Actualizaciones de posición GNSS y kilometraje por segundo se envían al endpoint de Plaspy para el seguimiento en vivo.  
- El voltaje de la batería y las entradas analógicas de sensores se incluyen en la telemetría enviada a Plaspy para alertas y diagnóstico.  
- Eventos de periféricos como SOS, DVR y activaciones de sensores externos se reenvían como mensajes de evento a Plaspy.  
- El almacenamiento local en buffer conserva registros durante la pérdida de conectividad y la unidad sube los registros almacenados cuando la conexión se recupera.  
- El rastreador se configura para reportar al endpoint y puerto compartido de Plaspy para garantizar un tratamiento coherente entre dispositivos.

## Flujo de configuración habitual

1. Acceda al método de configuración oficial de Riti o al software para el Locator 670 IDU 300 provisto por el vendedor o instalador.  
2. Ingrese el endpoint del servidor de Plaspy usando el dominio d.plaspy.com o la IP del servidor 54.85.159.138 en el campo correspondiente.  
3. Establezca el puerto de comunicación en 8888, que es el puerto que usa Plaspy para todos los dispositivos compatibles.  
4. Seleccione UDP o TCP como opción de transporte si el menú del equipo solicita elegir un modo.  
5. Configure el APN o los ajustes del operador si el equipo requiere acceso a datos celulares y confirme que la SIM esté activa.  
6. Aplique o guarde la configuración y reinicie el dispositivo si las instrucciones del fabricante requieren un reinicio.  
7. Valide que el equipo reporte a Plaspy comprobando actualizaciones de posición y telemetría en la plataforma Plaspy.

## Comandos de ejemplo para configurar

El Locator 670 IDU 300 puede configurarse usando las herramientas de software proporcionadas por Riti o mediante comandos de firmware. Los comandos exactos y la sintaxis varían según la versión de firmware y el método de configuración del fabricante. Dado que Riti ofrece múltiples mecanismos de configuración, siga la guía del proveedor para el formato exacto del comando al modificar servidor y ajustes de transporte. Si utiliza comandos por SMS o serie provistos por Riti, conserve los marcadores de posición como los valores de APN y reemplace con los parámetros específicos del operador.

## Notas de configuración

- El Locator 670 es un modelo 3G descontinuado, por lo que confirme la compatibilidad de red y consideraciones de ciclo de vida con su operador antes de un despliegue a gran escala.  
- Las diferencias de firmware pueden modificar rutas de menú o la sintaxis exacta de los comandos para servidor, puerto y transporte. Verifique siempre las notas del firmware del dispositivo.  
- Elija UDP o TCP según su red local y la preferencia del instalador, pero Plaspy detectará automáticamente el protocolo del rastreador una vez que este se conecte.  
- Use el puerto compartido de Plaspy 8888 de manera consistente entre unidades para simplificar la provisión y la configuración de firewall.  
- El almacenamiento en buffer local y la subida automática al reconectar son importantes para unidades instaladas en zonas con cobertura intermitente.

## Por qué usar Plaspy con esta configuración

Usar el Riti Locator 670 IDU 300 con Plaspy ofrece a las flotas una forma sencilla de enviar posiciones GNSS y telemetría multisensor a una única plataforma para visibilidad en tiempo real, alertas e informes. En implementaciones legacy donde el IDU 300 sigue en servicio, sus reportes frecuentes, kilometraje por segundo y soporte de periféricos ayudan a mantener la supervisión operativa y los flujos de trabajo basados en eventos en Plaspy.

Para más información sobre Plaspy visite https://www.plaspy.com y revise los detalles de configuración específicos del dispositivo con el fabricante en https://www.riti.com.tw/ ya que el comportamiento del firmware y las instrucciones del fabricante pueden cambiar con el tiempo.

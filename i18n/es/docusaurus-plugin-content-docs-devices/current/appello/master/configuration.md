---
slug: /appello/master/configuration
id: master-configuration
sidebar_label: Configuration
title: Appello - Master Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador Appello Master con Plaspy, incluyendo ajustes de servidor y flujo de instalación
keywords:
  - Configuración Appello Master
  - Instalación Appello Master
  - Appello Master Plaspy
  - Configuración servidor Appello Master
  - Configuración rastreador GPS Appello
  - Configuración rastreador Plaspy
  - Ajustes servidor Plaspy
  - Guía instalación rastreador GPS
  - Configuración seguimiento vehicular
  - Configuración rastreador gestión de flotas
---

# Appello - Configuración del Master

Esta página describe el contexto público de configuración para usar el rastreador GPS Appello Master con la plataforma Plaspy. Resume los ajustes generales de servidor y los pasos principales necesarios para apuntar el dispositivo a Plaspy, de modo que el rastreador pueda enviar información de posición y estado a la plataforma. Los métodos de configuración del fabricante varían, por lo que esta guía se centra en los ajustes comunes requeridos por Plaspy y en el flujo típico de trabajo en lugar de la sintaxis exacta de los comandos del dispositivo.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador para simplificar la integración. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El Appello Master es un rastreador GSM GPRS y el fabricante ofrece canales de configuración como SMS o herramientas del proveedor para aplicar los parámetros de red y servidor; siga las instrucciones oficiales del fabricante para comandos específicos del dispositivo.

## Resumen de la configuración

Configurar el Appello Master para Plaspy prepara el dispositivo para comunicarse de forma fiable con la plataforma y permite que el rastreador sea visible para monitoreo e informes. El fabricante facilita métodos públicos para establecer el APN de la red y el endpoint del servidor, de modo que el dispositivo pueda usar la red móvil para llegar a Plaspy.

- Apunte el rastreador al dominio o IP del servidor de Plaspy para que la telemetría llegue a su cuenta.
- Asegúrese de que el rastreador tenga conexión de datos móviles válida y el APN correcto del operador.
- Seleccione el modo de transporte si es necesario y configure el puerto compartido de Plaspy para que el dispositivo pueda enviar paquetes a la plataforma.
- Valide la conectividad y confirme que el dispositivo está reportando en la interfaz web de Plaspy.
- Tenga en cuenta el firmware y las recomendaciones del fabricante, ya que los comandos y los menús pueden cambiar entre versiones.

## Ajustes del servidor Plaspy

- El dominio de servidor d.plaspy.com debe ser aceptable para la interfaz de configuración del rastreador.
- La IP de servidor 54.85.159.138 puede usarse cuando la interfaz del dispositivo requiera una dirección IP en lugar del dominio.
- El puerto 8888 es el puerto de ingestión de Plaspy y se usa de manera consistente para todos los dispositivos en Plaspy.
- El dispositivo puede configurarse para usar transporte UDP o TCP en el puerto 8888 según las opciones del equipo.
- Plaspy detecta automáticamente el protocolo del rastreador para que la plataforma procese los mensajes entrantes sin necesidad de seleccionar el protocolo manualmente.

## Requisitos típicos antes de la instalación

- Asegúrese de que el Appello Master tenga una fuente de alimentación estable y, cuando aplique, una batería interna cargada.
- Una tarjeta SIM operativa con datos móviles y capacidad SMS si la configuración del fabricante utiliza comandos por SMS.
- Datos del APN del operador de la red para que el dispositivo pueda registrarse en la red de datos móviles.
- Acceso al método oficial de configuración del fabricante, como la aplicación del proveedor, la herramienta web o la interfaz de comandos por SMS.
- Una cuenta en Plaspy y un flujo de trabajo previsto para agregar o monitorear el dispositivo una vez que comience a reportar.
- Un entorno adecuado para pruebas iniciales con cobertura móvil confiable para confirmar la conectividad.

## Cómo se conecta este rastreador a Plaspy

El Appello Master se configura para enviar sus mensajes de ubicación y estado al endpoint y puerto compartidos de Plaspy, de modo que el dispositivo aparezca dentro de la plataforma Plaspy para seguimiento y monitoreo. Plaspy recibe esos mensajes, detecta automáticamente el protocolo del rastreador y presenta la información de ubicación y eventos a través de la interfaz de la plataforma.

- El rastreador transmite datos al dominio del servidor Plaspy o a la IP indicada.
- Todo el tráfico del dispositivo se dirige al puerto 8888, que es el puerto único usado por Plaspy para los dispositivos compatibles.
- El transporte se configura como UDP o TCP en el dispositivo, según la opción disponible y las condiciones de la red.
- Plaspy detecta el protocolo automáticamente y asigna los datos entrantes a la sesión de dispositivo correspondiente.
- Una vez que informe, la actividad del dispositivo será visible en Plaspy para monitoreo operativo y gestión de eventos.

## Flujo típico de configuración

1. Acceda al método o software oficial de configuración proporcionado por Appello, por ejemplo la herramienta del proveedor o el canal de configuración por SMS.
2. Introduzca el servidor de Plaspy como d.plaspy.com o use la IP del servidor 54.85.159.138 cuando la interfaz del dispositivo lo requiera.
3. Configure el puerto del servidor en 8888, que es el puerto utilizado por Plaspy para todos los dispositivos.
4. Elija UDP o TCP como transporte si el dispositivo exige selección de transporte, según la red y su preferencia.
5. Guarde o aplique la configuración siguiendo el procedimiento del fabricante y asegúrese de que el dispositivo se reinicie o aplique los cambios según sea necesario.
6. Valide que el dispositivo reporte a Plaspy comprobando la presencia y la telemetría en la plataforma Plaspy.

## Notas de configuración

- El firmware y la disposición de los menús varían según la revisión y el mercado, por lo que los nombres de campos y opciones pueden diferir entre dispositivos.
- Algunos instaladores prefieren TCP por su fiabilidad, mientras que otros optan por UDP por menor sobrecarga; verifique la estabilidad de la red al seleccionar el transporte.
- El Appello Master soporta conectividad GSM GPRS y la documentación del fabricante puede incluir comandos por SMS o mediante herramientas para establecer APN y valores de servidor. Use esas instrucciones oficiales en lugar de copiar comandos de fuentes de terceros.
- Siempre confirme los datos de APN con su operador móvil antes de intentar la configuración basada en datos.
- Mantenga un registro del identificador del dispositivo y de los pasos de registro necesarios en Plaspy para reducir tiempos de solución de problemas.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el Appello Master permite a las organizaciones centralizar la visibilidad de ubicación, el monitoreo de eventos y la supervisión operacional de una flota o conjunto de activos. Al dirigir el tráfico del dispositivo al dominio o IP compartidos de Plaspy y al puerto consistente, se reduce la complejidad de configurar cada equipo y Plaspy se encarga de la detección de protocolos y del procesamiento de mensajes.

Para obtener más información sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para los detalles más actuales sobre configuración específica del dispositivo, comportamiento de firmware y procedimientos del fabricante, verifique la documentación oficial de Appello en http://www.cnjeo.com/ ya que las recomendaciones del proveedor pueden cambiar con el tiempo.

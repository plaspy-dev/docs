---
slug: /careu/ua1/configuration
id: ua1-configuration
sidebar_label: Configuration
title: CAREU - UA1 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador CAREU UA1 e integrarlo con Plaspy, con valores de servidor compartido y pasos prácticos
keywords:
  - configuración CAREU UA1
  - instalación CAREU UA1
  - CAREU UA1 Plaspy
  - configuración rastreador GPS UA1
  - ajustes servidor UA1 Plaspy
  - configuración rastreador GPS Plaspy
  - configuración rastreador de activos UA1
  - configuración plataforma GPS UA1
  - integración tracker CAREU Plaspy
  - guía de instalación UA1
---

# CAREU - Configuración UA1

Esta página documenta el contexto público de configuración para usar el CAREU UA1 con Plaspy. Se concentra en los ajustes prácticos y disponibles públicamente que debe aplicar en el dispositivo o desde la herramienta de configuración de CAREU para que el UA1 reporte ubicación y telemetría a la plataforma Plaspy. El contenido refleja las capacidades del UA1, como seguimiento GNSS de baja potencia, LTE Cat M1 NB1 con conmutación a 2G, SMS, FTP y USSD, configuración vía Bluetooth y detección de manipulación, pensadas para monitoreo a largo plazo de activos.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo correcto del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y la herramienta de configuración que utilice. Use los valores de endpoint compartido de Plaspy abajo cuando configure el UA1 y siempre confirme los flujos específicos del dispositivo con la documentación del fabricante si algún paso difiere en su firmware o app de comisionamiento.

## Resumen de la configuración

Este proceso prepara el UA1 para comunicarse de forma confiable con Plaspy y para aparecer en sus paneles de Plaspy para monitoreo y alertas. El objetivo es apuntar el rastreador al servidor de Plaspy, elegir el transporte adecuado, confirmar intervalos de reporte y comportamiento ante eventos, y validar que los reportes lleguen a Plaspy.

- Apuntar el UA1 al endpoint de Plaspy para que la ubicación y la telemetría se entreguen de forma fiable.
- Seleccionar el protocolo de transporte compatible con su firmware y entorno de red, UDP o TCP, en el puerto compartido de Plaspy.
- Verificar la conectividad de la SIM y la red celular para que el UA1 pueda usar LTE Cat M1 NB1 o conmutar a 2G según sea necesario.
- Configurar opciones de reporte y alarmas/eventos como envíos periódicos, alertas por movimiento y notificaciones de manipulación para que Plaspy las procese.
- Validar el registro del dispositivo y los mensajes entrantes en Plaspy para confirmar la incorporación.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de Plaspy al configurar el CAREU UA1. Plaspy utiliza el mismo puerto para los dispositivos soportados y detecta automáticamente el protocolo del rastreador.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que los dispositivos pueden usar TCP o UDP para conectarse

## Requisitos típicos antes de la configuración

- Batería cargada o instalada en el UA1 según su despliegue y una tarjeta SIM con plan de datos activo y capacidad de SMS.
- Acceso al método o software oficial de configuración de CAREU, como la herramienta de comisionamiento por Bluetooth o la utilidad de aprovisionamiento del proveedor.
- Conocimiento del endpoint Plaspy d.plaspy.com o de la IP del servidor 54.85.159.138 y del puerto 8888 para ingresar durante la configuración.
- Una versión de firmware del dispositivo que soporte reportes remotos a endpoints personalizados y el transporte que planea usar, o la posibilidad de actualizar firmware vía FOTA cuando sea necesario.
- Colocación temporal con buena visibilidad GNSS durante el comisionamiento para obtener una fijación de posición y validación.
- Una cuenta de Plaspy o un administrador que pueda confirmar que los mensajes del dispositivo están llegando y son visibles en la plataforma.

## Cómo este rastreador se conecta con Plaspy

El UA1 envía posiciones GNSS y telemetría a la plataforma Plaspy a través de redes celulares o canales de mensajería compatibles. Cuando está configurado para reportar a Plaspy, el rastreador usa el endpoint y puerto compartidos de Plaspy para que la plataforma reciba y procese automáticamente eventos de ubicación, movimiento y manipulación.

- Los reportes del dispositivo se envían a d.plaspy.com o a 54.85.159.138 en el puerto 8888 usando UDP o TCP.
- Las fijaciones de posición GNSS se incluyen en reportes periódicos y en mensajes impulsados por eventos como movimiento o detección de manipulación.
- La telemetría, como el movimiento detectado por el acelerómetro y los eventos de manipulación, se entrega a Plaspy para alertas y paneles.
- Si se usan, los canales FTP, SMS o USSD disponibles en el UA1 pueden complementar la entrega celular para actualizaciones de firmware o entrega alternativa de mensajes, mientras que la integración principal con Plaspy usa el endpoint y puerto compartidos.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no es necesario coincidir con un identificador de protocolo específico cuando el dispositivo apunta al servidor y puerto compartidos.

## Flujo de trabajo común de configuración

1. Acceda al método o software oficial de configuración de CAREU, como la app de comisionamiento por Bluetooth o la herramienta de aprovisionamiento del fabricante.  
2. Ingrese el servidor de Plaspy como d.plaspy.com o la IP 54.85.159.138 en los ajustes de servidor del dispositivo.  
3. Configure el puerto del dispositivo en 8888, recordando que Plaspy usa el mismo puerto para todos los dispositivos soportados.  
4. Elija UDP o TCP si el firmware del dispositivo requiere seleccionar un protocolo de transporte. Plaspy detectará automáticamente el protocolo utilizado.  
5. Configure los intervalos de reporte, los umbrales de evento para movimiento o manipulación y cualquier reenvío de sensores requerido, como datos opcionales de sensores BLE.  
6. Aplique o guarde la configuración y reinicie el dispositivo si la herramienta o el firmware lo requieren para que los cambios surtan efecto.  
7. Valide que el UA1 reporte en Plaspy revisando los mensajes entrantes y la ubicación del dispositivo en la plataforma Plaspy.

## Ejemplos de comandos de configuración

El UA1 normalmente se aprovisiona usando las herramientas oficiales de CAREU o la app de configuración por Bluetooth en lugar de una sola sintaxis universal de comandos. La sintaxis exacta de comandos y las cadenas SMS o de configuración disponibles dependen del firmware del UA1 y de la herramienta del proveedor que esté utilizando. Al configurar, los pasos prácticos son apuntar el dispositivo a d.plaspy.com o 54.85.159.138 y establecer el puerto 8888 desde la interfaz de configuración de CAREU, y elegir UDP o TCP según sea necesario. Dado que los conjuntos de comandos varían según la revisión de firmware del modelo, consulte el manual de configuración de CAREU para los comandos exactos.

## Notas de configuración

- Las diferencias de firmware pueden cambiar los menús de configuración, los transportes disponibles y la sintaxis exacta de comandos; siempre confirme la versión de firmware antes de seguir un flujo de comandos específico.
- Elegir UDP o TCP puede afectar el comportamiento de entrega en condiciones de red particulares; Plaspy soporta ambos y detectará automáticamente el protocolo del dispositivo cuando el rastreador reporte al servidor y puerto compartidos.
- El comisionamiento por Bluetooth está soportado en el UA1 para configuración en campo; a menudo es el método más sencillo para el comisionamiento sin cableado.
- El UA1 soporta FTP y SMS para flujos alternativos como FOTA o mensajería de respaldo, pero la integración principal con Plaspy debe usar el endpoint d.plaspy.com en el puerto 8888.
- Valide la conectividad en un área de prueba con visibilidad GNSS y confirme que los mensajes aparecen en Plaspy antes de un despliegue masivo.

## Por qué usar Plaspy con esta configuración

Usar el CAREU UA1 con Plaspy ofrece una solución de rastreo de baja potencia y resistente para aplicaciones de monitoreo a largo plazo y activos ocultos, al tiempo que entrega la visibilidad y las alertas que las organizaciones necesitan para la supervisión operativa. Las capacidades GNSS del UA1, la detección de movimiento y manipulación basada en acelerómetro, y las múltiples opciones de entrega celular lo hacen práctico para integrar en los flujos de trabajo de Plaspy para monitoreo de activos, alertas anti robo y telemetría programada.

Learn more about Plaspy and how this configuration supports fleet management and asset tracking on the main Plaspy website https://www.plaspy.com. For the most current device specific configuration methods, firmware behavior, and manufacturer details verify information on the CAREU manufacturer site https://www.systech-iot.com/.

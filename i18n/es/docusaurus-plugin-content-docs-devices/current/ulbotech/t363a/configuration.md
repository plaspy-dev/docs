---
slug: /ulbotech/t363a/configuration
id: t363a-configuration
sidebar_label: Configuration
title: Ulbotech - T363A Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del rastreador GPS Ulbotech T363A y pasos prácticos para conectarlo con la plataforma Plaspy
keywords:
  - Configuración Ulbotech T363A
  - Guía de instalación T363A
  - Rastreador GPS Ulbotech Plaspy
  - Configuración rastreador OBD II
  - Integración rastreador flota Plaspy
  - Configuración servidor T363A
  - Configuración dispositivo Plaspy
  - Configuración telemática vehicular
  - Configuración software T363A
  - Configuración plataforma rastreador GPS
---

# Ulbotech - Configuración del T363A

Esta página documenta el contexto público de configuración para usar el rastreador OBD GPS Ulbotech T363A con Plaspy. Se enfoca en los ajustes prácticos y visibles al usuario que preparan el dispositivo para reportar ubicación y telemetría OBD a la plataforma Plaspy. El contenido está dirigido a instaladores, administradores de flota y usuarios técnicos que necesitan una guía clara y orientada a la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador para las conexiones entrantes. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, las herramientas del instalador y el empaquetado regional. Use esta guía junto con la documentación oficial de Ulbotech y las herramientas de su dispositivo para completar la integración.

## Resumen de la configuración

Esta configuración prepara el T363A para enviar posición y telemetría del vehículo al backend de Plaspy, de modo que los vehículos sean visibles y reporten eventos en su cuenta de Plaspy. El proceso alinea el endpoint de red del dispositivo, el transporte y el comportamiento básico de reporte con los ajustes de servidor compartidos de Plaspy y luego verifica que el dispositivo aparezca en la plataforma.

- Apuntar el rastreador al endpoint de servidor de Plaspy y confirmar los ajustes de transporte
- Asegurarse de que el rastreador tenga conectividad celular y la alimentación necesaria para enviar datos GPRS
- Habilitar reportes periódicos de GNSS y OBD para que Plaspy reciba ubicación y telemetría del vehículo
- Validar la visibilidad del dispositivo y el reporte de eventos en la plataforma Plaspy
- Opcionalmente configurar la salida del inmovilizador y el emparejamiento Bluetooth según sus flujos de trabajo

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos del servidor Plaspy al configurar el T363A o verificar parámetros de red del dispositivo:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol for incoming connections

Tenga en cuenta que todos los dispositivos en Plaspy usan el mismo puerto y que Plaspy realiza detección automática de protocolo para simplificar el alta de dispositivos.

## Requisitos típicos antes de la configuración

- Confirme que la tarjeta SIM funciona y que existe conectividad GPRS compatible con el radio del dispositivo
- Acceso al puerto OBD-II del vehículo para instalación plug and play y alimentación
- Acceso a las herramientas de configuración de Ulbotech o al método proporcionado por el proveedor, como configuración por micro USB o comandos SMS cuando estén soportados
- Una cuenta de Plaspy y acceso a la instancia de su organización o flota para verificar el registro del dispositivo
- Dispositivo con alimentación y batería de respaldo cargada para que el rastreador pueda reportar después de la configuración
- Conocimiento de requisitos regionales del operador, como ajustes APN, si el firmware del dispositivo los requiere

## Cómo se conecta este rastreador a Plaspy

El T363A reporta posiciones GNSS y telemetría derivada de OBD al backend de Plaspy sobre GPRS usando transporte TCP o UDP. Una vez configurado para apuntar al endpoint y puerto compartido de Plaspy, el rastreador entrega registros de ubicación, eventos y telemetría para monitoreo en vivo e informes históricos.

- El dispositivo se configura para reportar al endpoint y puerto compartido de Plaspy
- Las posiciones GNSS y los PIDs OBD se empaquetan y envían por GPRS a Plaspy
- Eventos como cambios de ignición, conducción brusca o acciones del inmovilizador se reportan a la plataforma
- Plaspy recibe la transmisión y detecta automáticamente el protocolo del rastreador para parsear los mensajes
- La visibilidad en Plaspy habilita mapas en vivo, notificaciones de geocercas e informes telemáticos

## Flujo típico de configuración

1. Acceda al método oficial de configuración de Ulbotech o al software proporcionado con el T363A, como herramientas USB locales, herramientas web del proveedor o comandos SMS soportados.
2. En los ajustes de servidor o red del dispositivo ingrese el endpoint de Plaspy usando d.plaspy.com o 54.85.159.138.
3. Configure el puerto del servidor en 8888 como el puerto del dispositivo para la comunicación con Plaspy.
4. Si el dispositivo lo requiere, elija el tipo de transporte UDP o TCP en el puerto 8888.
5. Aplique o guarde la configuración en el dispositivo mediante la herramienta del proveedor o la interfaz de comandos.
6. Reinicie el dispositivo si el método de configuración o el firmware exige un reboot para activar los cambios de red.
7. Valide que el dispositivo reporte correctamente a Plaspy y aparezca en su cuenta con la telemetría y las actualizaciones de ubicación esperadas.

## Ejemplos de comandos de configuración

El conjunto de comandos exactos para el T363A depende del firmware del fabricante y de la herramienta de configuración que utilice. Los dispositivos Ulbotech suelen soportar configuración vía micro USB, software del proveedor o SMS según el firmware. Dado que los comandos específicos del modelo pueden variar, consulte la documentación de Ulbotech o la herramienta del proveedor para la sintaxis exacta.

Si trabaja con configuración vía SMS o con una interfaz de comandos del proveedor, los pasos públicos típicos incluyen enviar al dispositivo el servidor, el puerto y los valores de transporte. Por ejemplo, los pasos lógicos que realizará con su herramienta del proveedor son:

- Establecer dominio o IP del servidor a d.plaspy.com o 54.85.159.138
- Establecer el puerto en 8888
- Seleccionar UDP o TCP como transporte si se requiere
- Guardar y reiniciar el dispositivo

Consulte la documentación de Ulbotech para los comandos exactos y los marcadores soportados si su firmware expone configuración por SMS o CLI.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la sintaxis de comandos y las opciones de configuración disponibles; verifique la revisión de firmware del dispositivo antes de aplicar comandos.
- En regiones donde se requieran APN o ajustes del operador, asegúrese de configurar los valores APN correctos en el dispositivo de acuerdo con su proveedor de SIM y el manual de Ulbotech.
- La selección de UDP o TCP puede afectar las características de entrega de paquetes; use el transporte que mejor se adapte a la fiabilidad de su red y a las recomendaciones del proveedor.
- El dispositivo soporta configuración local vía micro USB y actualizaciones remotas por FOTA cuando están disponibles; use herramientas locales para el aprovisionamiento inicial si lo prefiere.
- Revisiones de mercado o de hardware pueden cambiar conectores físicos o indicadores, por lo que debe verificar que su unidad coincida con la documentación que está siguiendo.

## Por qué usar Plaspy con esta configuración

Usar el T363A con Plaspy ofrece a los operadores de flota y propietarios de activos visibilidad consistente de la ubicación del vehículo y de la telemetría derivada de OBD sin configuraciones de servidor complejas por dispositivo. Apuntar el rastreador al endpoint compartido de Plaspy permite detección automática de protocolo y simplifica el alta, de modo que los dispositivos aparecen rápidamente en la plataforma para seguimiento en vivo, alertas de geocercas e informes telemáticos.

Para más información sobre Plaspy visite https://www.plaspy.com. Para los pasos de configuración específicos del dispositivo, notas de firmware y detalles del fabricante, verifique la información en http://www.ulbotech.com/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.

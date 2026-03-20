---
slug: /gotop/tv_680/configuration
id: tv_680-configuration
sidebar_label: Configuration
title: GOTOP - TV-680 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el GOTOP TV-680 con Plaspy usando ajustes de servidor compartidos y pasos prácticos
keywords:
  - configuración GOTOP TV-680
  - configuración inicial GOTOP TV-680
  - GOTOP TV-680 Plaspy
  - configuración rastreador GPS GOTOP
  - configuración servidor TV-680
  - configuración rastreador GPS Plaspy
  - ajustes TCP UDP rastreador
  - configuración SIM rastreador
  - manual rastreador GOTOP
  - configuración plataforma rastreo vehicular
---

# GOTOP - Configuración del TV-680

Esta página ofrece el contexto público de configuración para usar el rastreador GPS GOTOP TV-680 con Plaspy. Resume los ajustes de servidor públicos y el flujo de trabajo típico necesario para apuntar el dispositivo a Plaspy y permitir que informe su ubicación y estado a la plataforma. El TV-680 utiliza un receptor GPS para la posición y la red celular GSM mediante una tarjeta SIM para transmitir sus datos; sus funciones en el equipo incluyen reporte de ubicación mediante llamada única y llamadas de voz bidireccionales.

Plaspy emplea ajustes de servidor compartidos para los rastreadores compatibles y detecta automáticamente el protocolo cuando llegan los datos. Los pasos de configuración en el lado del fabricante para el TV-680 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración que su proveedor suministre. Utilice esta guía para aplicar los ajustes públicos de Plaspy y consulte la documentación del fabricante para los menús y procedimientos específicos del dispositivo.

## Resumen de configuración

El objetivo principal de la configuración es preparar el TV-680 para comunicarse de forma confiable con el endpoint del servidor de Plaspy y que aparezca en la plataforma. Esto incluye establecer la dirección y el puerto del servidor, elegir el protocolo de transporte si es necesario y validar que el equipo tenga alimentación, una SIM operativa y pueda obtener fijación GPS.

- Configure el rastreador para que reporte su posición y eventos al endpoint del servidor de Plaspy.
- Asegúrese de que el rastreador esté encendido, tenga una tarjeta SIM activa y sea alcanzable en la red celular.
- Configure la dirección del servidor y el puerto común de Plaspy para que los reportes sean aceptados por la plataforma.
- Seleccione UDP o TCP como transporte si el equipo requiere una elección explícita.
- Valide la conectividad y confirme que el dispositivo aparece y actualiza su posición en Plaspy.

## Ajustes del servidor Plaspy

Use estos ajustes públicos de Plaspy al configurar el GOTOP TV-680:

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: the device may be configured to use UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices use the same port for reporting

## Requisitos habituales antes de la configuración

- Una unidad GOTOP TV-680 cargada y con acceso visible a la SIM
- Una tarjeta SIM activa con plan de datos y capacidad de voz si depende de funciones basadas en llamada
- Acceso al método de configuración del fabricante, como la interfaz web del dispositivo, la lista de comandos SMS o la herramienta de configuración del proveedor
- Conocimiento de los números autorizados del dispositivo y de cualquier número preconfigurado para llamadas bidireccionales o SOS
- Una ubicación despejada para que el dispositivo pueda adquirir señales de los satélites GPS durante las pruebas iniciales
- Acceso administrativo a Plaspy para verificar la aparición del dispositivo después de la configuración

## Cómo se conecta este rastreador a Plaspy

El TV-680 recopila datos de posición GPS y utiliza la red celular para transmitir esos datos al endpoint de Plaspy. Cuando se configura para reportar a Plaspy, el rastreador envía sus mensajes de posición y estado a la dirección y puerto compartidos de Plaspy, donde la plataforma reconoce y procesa automáticamente su protocolo.

- El rastreador transmite datos de ubicación a través de la red celular al endpoint d.plaspy.com o a la IP 54.85.159.138.
- Todo el tráfico de dispositivos para Plaspy se envía al puerto 8888 y Plaspy detecta el protocolo automáticamente.
- Puede elegir UDP o TCP en el equipo si el firmware solicita una opción de transporte.
- Una vez activo el envío de datos, Plaspy mostrará la ubicación y las actualizaciones de estado del dispositivo en la plataforma.
- El reporte de ubicación por llamada única y las llamadas bidireccionales son funciones del equipo independientes del reporte al servidor, pero no interfieren con el envío a Plaspy cuando ambas vías están habilitadas.

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración oficial del GOTOP TV-680 proporcionado por el fabricante o su proveedor, como la lista de comandos SMS, la interfaz web del equipo o la herramienta de configuración.
2. Introduzca la dirección del servidor de Plaspy colocando d.plaspy.com o 54.85.159.138 en el campo de servidor del rastreador.
3. Establezca el puerto del dispositivo en 8888 ya que Plaspy utiliza el mismo puerto para todos los dispositivos compatibles.
4. Si el firmware del rastreador requiere elegir el transporte, seleccione UDP o TCP según la opción del dispositivo.
5. Configure las opciones específicas del equipo necesarias para GOTOP, como números autorizados, intervalos de reporte o números SOS, conforme a la guía del fabricante.
6. Aplique o guarde la configuración en la herramienta del dispositivo y reinícielo si el firmware requiere un reboot para que los cambios surtan efecto.
7. Valide que el TV-680 esté reportando a Plaspy y que las actualizaciones de ubicación aparezcan en la plataforma.

## Ejemplos de comandos de configuración

Los métodos públicos de configuración y la sintaxis exacta de comandos del TV-680 varían según el firmware y el distribuidor. Dado que el fabricante ofrece diferentes vías de configuración (comandos SMS, herramientas del proveedor o interfaces de configuración), aquí no se incluyen comandos exactos. Consulte la documentación del GOTOP TV-680 o a su proveedor para obtener los comandos SMS específicos o los pasos de la herramienta de configuración para establecer el servidor en d.plaspy.com (o 54.85.159.138) y el puerto 8888, y para elegir UDP o TCP si fuera necesario.

Si dispone de ejemplos de comandos SMS proporcionados por el fabricante o de un script de configuración, aplíquelos en el orden que recomiende GOTOP y luego confirme el reporte en Plaspy.

## Notas de configuración

- Las diferencias de firmware pueden cambiar los nombres de los menús y la sintaxis de los comandos SMS; confirme siempre las cadenas exactas con el manual del GOTOP TV-680.
- El rastreador admite TCP y UDP en el puerto 8888; elija el transporte que recomiende el firmware del equipo o pruebe ambos si surgen problemas de conectividad.
- Plaspy usa el mismo puerto para todos los dispositivos compatibles y realiza detección automática de protocolo cuando llegan datos a d.plaspy.com o 54.85.159.138.
- Los reportes de ubicación por llamada y la función de voz bidireccional del TV-680 son características del dispositivo que no reemplazan el reporte al servidor Plaspy, pero pueden ser útiles para acceder a coordenadas de forma inmediata o en emergencias.
- Mantenga la SIM del dispositivo activa y confirme que el operador de red permite datos salientes o SMS según el método de configuración que utilice.

## Por qué usar Plaspy con esta configuración

Usar el GOTOP TV-680 con Plaspy ofrece a organizaciones y particulares una forma práctica de centralizar datos de ubicación, estado y eventos del rastreador en una sola plataforma. Al configurar el dispositivo para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888, habilita visibilidad continua y supervisión operativa a través de Plaspy, manteniendo al mismo tiempo las funciones en el equipo, como la localización por llamada y la voz bidireccional.

Para saber más sobre Plaspy y las capacidades de la plataforma, visite https://www.plaspy.com. Para obtener las instrucciones específicas del dispositivo más recientes, notas de firmware y la sintaxis de comandos, verifique los detalles de instalación con el fabricante en https://www.gotop.cc/ ya que el comportamiento y los métodos de configuración pueden cambiar con el tiempo.

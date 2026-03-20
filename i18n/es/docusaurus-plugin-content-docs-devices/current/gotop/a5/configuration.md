---
slug: /gotop/a5/configuration
id: a5-configuration
sidebar_label: Configuration
title: GOTOP - A5 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del GOTOP A5 para apuntar el rastreador a Plaspy y validar la conectividad
keywords:
  - configuración GOTOP A5
  - instalación GOTOP A5
  - configuración de servidor GOTOP A5
  - configuración de software de rastreo GOTOP A5
  - configuración de plataforma GPS GOTOP A5
  - GOTOP A5 Plaspy
  - configuración rastreador GPS GOTOP
  - rastreo vehicular A5
  - configuración GPRS GOTOP A5
  - configuración SMS GOTOP A5
---

# GOTOP - Configuración del A5

Esta página explica el contexto público de configuración para usar el rastreador GOTOP A5 con Plaspy. Aquí se detallan los ajustes de servidor que Plaspy requiere y cómo preparar el A5 para que reporte ubicación y eventos al platforma Plaspy. Use esta guía para saber qué debe ingresar en el dispositivo o en la herramienta del proveedor antes de validar la conectividad en Plaspy.

Plaspy utiliza un endpoint de servidor compartido y el mismo puerto para todos los dispositivos compatibles, y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y las herramientas de configuración del proveedor, por lo que siempre conviene verificar la documentación de GOTOP cuando sea necesario.

## Vista general de la configuración

Configurar el GOTOP A5 para Plaspy consiste principalmente en apuntar el dispositivo al endpoint del servidor de Plaspy y confirmar que el rastreador pueda usar datos móviles para alcanzar ese endpoint. Una vez configurado, el A5 enviará mensajes de posición y estado a Plaspy para que el dispositivo aparezca y se actualice en la plataforma.

- Apuntar el A5 al endpoint de Plaspy para que la plataforma reciba telemetría
- Configurar el transporte y el puerto para que el dispositivo pueda abrir sesión con Plaspy
- Asegurarse de que el A5 tenga conectividad móvil y los ajustes APN correctos para GPRS
- Verificar los reportes del dispositivo en la plataforma Plaspy después de la configuración
- Guardar y aplicar los ajustes en el dispositivo o la herramienta del proveedor y reiniciar si es necesario

## Ajustes del servidor de Plaspy

Use los siguientes ajustes públicos de Plaspy al configurar el GOTOP A5. Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detectará automáticamente el protocolo del rastreador cuando el dispositivo se conecte.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol

## Requisitos típicos antes de la configuración

- Un GOTOP A5 con alimentación y operativo en el vehículo
- Una tarjeta SIM activa con datos móviles habilitados para reportes GPRS
- Ajustes APN correctos configurados en el dispositivo o mediante la herramienta del proveedor si es necesario
- Acceso al método de configuración de GOTOP, como la herramienta web del proveedor, la app móvil o los comandos SMS documentados
- Una cuenta en Plaspy y la posibilidad de ver nuevos dispositivos en la plataforma
- Herramientas básicas para reiniciar el dispositivo después de aplicar la configuración, si se requiere

## Cómo se conecta este rastreador a Plaspy

El GOTOP A5 envía sus mensajes de ubicación, estado y eventos al endpoint compartido de Plaspy para que el dispositivo sea visible y rastreable en la plataforma. El proceso de configuración indica al A5 que abra una sesión TCP o UDP con el servidor de Plaspy y que transmita allí su telemetría.

- El rastreador se configura para reportar al endpoint de Plaspy d.plaspy.com o a 54.85.159.138
- El dispositivo usa el puerto 8888 para todas las conexiones salientes hacia Plaspy
- Si el firmware requiere elegir transporte, puede seleccionarse UDP o TCP en el dispositivo
- Plaspy detectará automáticamente el protocolo del rastreador cuando lleguen los primeros mensajes
- Tras la conexión exitosa, las actualizaciones de ubicación y los eventos aparecerán en Plaspy para monitoreo operativo

## Flujo típico de configuración

1. Acceda al método oficial de configuración de GOTOP para el A5, como la herramienta web del proveedor, la app móvil o los comandos SMS documentados.
2. Ingrese la dirección del servidor de Plaspy usando d.plaspy.com o 54.85.159.138 en el campo de servidor u host.
3. Establezca el puerto del dispositivo en 8888, que es el puerto que Plaspy usa para todos los dispositivos compatibles.
4. Elija el transporte UDP o TCP si el A5 requiere una selección explícita.
5. Configure el APN y cualquier parámetro de la SIM necesarios para la conectividad de datos GPRS en el A5.
6. Aplique o guarde la configuración en el dispositivo o dentro de la herramienta del proveedor y reinicie el equipo si así lo solicita el fabricante.
7. Valide que el dispositivo reporta a Plaspy y aparece en línea en la plataforma una vez que se conecta.

## Ejemplos de comandos de configuración

Los comandos y formatos exactos de configuración varían según el firmware de GOTOP y el método de configuración del proveedor que utilice. El GOTOP A5 soporta configuración mediante la herramienta del fabricante, plataforma web, app o comandos SMS, así que consulte la documentación del proveedor para la sintaxis precisa. Si usa configuración vía SMS, normalmente enviará parámetros de servidor, puerto y APN en el orden que requiera el firmware GOTOP.

Dado que las cadenas de comandos dependen del modelo y del firmware, esta guía no inventa sintaxis de comandos. Consulte el manual de configuración de GOTOP o su herramienta de proveedor para ejemplos exactos.

## Notas de configuración

- Las diferencias de firmware y de las herramientas pueden cambiar los campos o la sintaxis de comando exactos requeridos por el A5
- Si el dispositivo admite configuración por SMS, puede enviar ajustes de servidor y puerto mediante los comandos especificados por el proveedor
- Elija TCP o UDP según su instalación o la recomendación del proveedor; Plaspy aceptará cualquiera en el puerto 8888
- Asegúrese de que los ajustes de APN y los parámetros de la SIM sean correctos para que el rastreador use GPRS y alcance d.plaspy.com
- Después de aplicar los ajustes, es buena práctica reiniciar el rastreador y confirmar que se registra en Plaspy

## Por qué usar Plaspy con esta configuración

Usar el GOTOP A5 con Plaspy ofrece una forma práctica de unificar los reportes de dispositivos hacia un único endpoint de plataforma. Al configurar el rastreador para que apunte a d.plaspy.com o 54.85.159.138 en el puerto 8888, las organizaciones obtienen visibilidad consistente de la ubicación y el estado de los vehículos mediante las herramientas de monitoreo e historial de Plaspy.

Para obtener más información sobre Plaspy y cómo la plataforma se integra con dispositivos como el GOTOP A5 visite https://www.plaspy.com. Para las instrucciones más recientes del GOTOP A5, notas de firmware y la sintaxis de comandos, confirme los detalles con el fabricante en https://www.gotop.cc/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.

---
slug: /navtelekom/smart_s_2420/configuration
id: smart_s_2420-configuration
sidebar_label: Configuration
title: Navtelekom - SMART S-2420 Configuration
sidebar_class_name: menu_item_tracker
description: Guía paso a paso para configurar Navtelekom SMART S-2420 con los ajustes de servidor de Plaspy y notas prácticas de instalación
keywords:
  - Configuración Navtelekom SMART S-2420
  - Configuración SMART S-2420
  - Configuración SMART S-2420 Plaspy
  - Configuración rastreador Navtelekom
  - Configuración servidor rastreador GPS
  - Guía configuración rastreador vehicular
  - Configuración servidor Plaspy
  - Rastreo de flotas SMART S-2420
  - Configuración rastreador GLONASS GPS
  - Guía instalación SMART S-2420
---

# Navtelekom - Configuración del SMART S-2420

Esta página documenta el contexto público de configuración para usar el rastreador Navtelekom SMART S-2420 con Plaspy. Incluye los ajustes de servidor prácticos y el flujo de trabajo que aplicará al integrar este rastreador vehicular GLONASS/GPS de nivel básico en la plataforma Plaspy. Las indicaciones a continuación se centran en el endpoint compartido de Plaspy, las opciones de transporte y los pasos típicos que siguen instaladores e integradores para habilitar el reporte y la visibilidad en Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El SMART S-2420 admite telemetría básica a través de su módem 2G y configuración local por Bluetooth 4.0, por lo que debe usar las herramientas y la documentación del fabricante para los detalles del dispositivo mientras aplica los valores de servidor de Plaspy que se indican a continuación.

## Resumen de la configuración

El proceso de configuración prepara el rastreador para enviar datos de posición y telemetría a Plaspy y garantiza que el dispositivo sea visible y administrable desde la plataforma. Se trata principalmente de apuntar el equipo al servidor de Plaspy, seleccionar el transporte adecuado y validar la conectividad y el envío de datos.

- Configure el SMART S-2420 para que reporte al endpoint y puerto del servidor Plaspy.
- Seleccione transporte UDP o TCP en el dispositivo si el firmware requiere una opción de transporte.
- Valide que el rastreador se registre correctamente y envíe paquetes uplink a Plaspy.
- Mapee entradas digitales y salidas de control en Plaspy para flujos de trabajo de ignición, puertas e inmovilizador.
- Use Bluetooth o la herramienta oficial de Navtelekom para ajustes locales de parámetros y diagnóstico.

## Ajustes del servidor Plaspy

Utilice los siguientes ajustes públicos de servidor de Plaspy al configurar el SMART S-2420. Estos son los valores canónicos que Plaspy publica para la integración de dispositivos.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and Plaspy uses the same port for all supported devices

Cuando ingrese el dominio o la dirección IP en la configuración del dispositivo, asegúrese de especificar el puerto 8888 y elija el transporte (UDP o TCP) si el firmware del rastreador lo requiere.

## Requisitos típicos antes de la instalación

- Confirme que el SMART S-2420 esté alimentado desde el sistema eléctrico del vehículo, ya que la unidad no cuenta con batería interna.
- Asegúrese de que el dispositivo tenga una SIM 2G activa y de que el servicio 2G esté disponible en la región de despliegue.
- Tenga acceso al método de configuración oficial de Navtelekom, como herramientas por Bluetooth, software del proveedor o portal de configuración, y al manual del dispositivo.
- Obtenga el identificador del dispositivo (IMEI) y credenciales de instalador si las herramientas de Navtelekom las requieren.
- Prepare el cableado para ignición, sensores y salidas de relé si planea mapear E/S en Plaspy.
- Disponga de acceso a la cuenta o credenciales de la plataforma Plaspy para validar que el rastreador aparece y reporta correctamente después de la configuración.

## Cómo se conecta este rastreador a Plaspy

El SMART S-2420 envía paquetes periódicos de posición y telemetría a través de su módem 2G al endpoint y puerto del servidor Plaspy. Plaspy recibe estos paquetes, detecta automáticamente el protocolo del rastreador y muestra ubicación, estados de entrada y telemetría básica dentro de la plataforma para monitoreo e informes.

- El rastreador reporta fijaciones GPS/GLONASS y telemetría vía uplink 2G a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador y decodifica los mensajes entrantes para su visualización.
- Eventos de entradas digitales como ignición, sensores de puerta o alarmas se envían como parte del flujo de telemetría del dispositivo a Plaspy.
- Las salidas de control se gestionan desde Plaspy cuando están configuradas y cableadas correctamente en el rastreador para actuaciones remotas.
- El acceso local por Bluetooth 4.0 se utiliza para configuración y diagnóstico in situ, ayudando a los instaladores a aplicar los ajustes del servidor Plaspy si es necesario.

## Flujo típico de configuración

1. Acceda al método oficial de configuración de Navtelekom o al software correspondiente, como la herramienta por Bluetooth, la app de configuración o la utilidad del proveedor.
2. Ingrese la dirección del servidor Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138 en el campo de servidor/host del dispositivo.
3. Establezca el puerto del servidor en 8888 como lo requiere Plaspy.
4. Seleccione el protocolo de transporte UDP o TCP si el firmware del SMART S-2420 le pide elegir uno.
5. Aplique o guarde la configuración en la herramienta de configuración del dispositivo.
6. Reinicie o haga un ciclo de alimentación del dispositivo si el firmware exige un reinicio para aplicar los cambios de red/servidor.
7. Valide que el dispositivo reporte a Plaspy verificando el estado del equipo y la telemetría entrante en la plataforma Plaspy.

Siga las indicaciones del fabricante para el emparejamiento Bluetooth y el acceso seguro a las utilidades de configuración durante estos pasos.

## Ejemplos de comandos de configuración

La configuración del modelo SMART S-2420 no incluye comandos SMS o seriales publicados en este documento. Los comandos exactos y métodos de configuración varían según la revisión de firmware de Navtelekom y el conjunto de herramientas del proveedor. Use la aplicación oficial de configuración por Bluetooth o la documentación de Navtelekom para aplicar los siguientes ajustes públicos:

- Server host: d.plaspy.com or 54.85.159.138
- Server port: 8888
- Transport: UDP or TCP

Si dispone de cadenas de comando específicas suministradas por Navtelekom o su revendedor, aplíquelas en el orden indicado por el fabricante y mantenga intactos los marcadores como {{apn}}, {{apnu}} o {{apnp}} cuando su configuración de SIM/APN los requiera. Consulte siempre los manuales de Navtelekom para la sintaxis exacta de los comandos.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la disposición de menús y los nombres de parámetros; confirme la versión de firmware del dispositivo antes de seguir pasos específicos de la herramienta.
- Elija UDP para menor overhead y por ser la implementación más común en rastreadores, o TCP si necesita entrega orientada a conexión; el dispositivo debe configurarse para coincidir con su elección y Plaspy soporta ambos.
- Bluetooth 4.0 permite acceso local para la configuración; use la herramienta de Navtelekom o aplicaciones aprobadas por el proveedor para evitar una mala configuración.
- Debido a que el SMART S-2420 es un modelo archivado, revise las descargas de Navtelekom y el portal DRC para obtener los manuales correctos y cualquier aviso de firmware.
- Confirme siempre la disponibilidad de la red 2G en su área antes de un despliegue a gran escala, ya que los apagones regionales de red pueden afectar la conectividad.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el Navtelekom SMART S-2420 ofrece una vía sencilla para el rastreo básico de vehículos, registro de rutas y monitoreo de eventos simples. Para organizaciones enfocadas en visibilidad de flota con bajo costo, la combinación de un rastreador GLONASS/GPS de nivel de entrada y la detección centralizada de servidores de Plaspy ofrece reporte fiable de posición y estado de entradas sin una configuración de servidor compleja.

Para saber más sobre Plaspy y las integraciones de dispositivos compatibles visite https://www.plaspy.com. Los métodos de configuración específicos del dispositivo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo; verifique la guía de configuración y la documentación más actual en el sitio oficial de Navtelekom https://www.navtelecom.ru/.

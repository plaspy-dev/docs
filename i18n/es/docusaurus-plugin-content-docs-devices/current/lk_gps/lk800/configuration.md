---
slug: /lk_gps/lk800/configuration
id: lk800-configuration
sidebar_label: Configuration
title: LK-GPS - LK800 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para integrar LK800 con Plaspy y habilitar rastreo personal, alertas SOS y detección de caídas
keywords:
  - configuración LK-GPS LK800
  - configuración LK800 Plaspy
  - configuración rastreador LK-GPS
  - configuración servidor LK800
  - configuración GPS LK800
  - integración rastreador Plaspy
  - configuración rastreador personal GPS
  - software rastreo LK800
  - compatibilidad rastreador GPS Plaspy
  - configuración plataforma LK-GPS
---

# LK-GPS - Configuración del LK800

Esta página recoge la información pública de configuración necesaria para usar el rastreador personal LK800 con Plaspy. Aquí encontrará los datos prácticos de servidor y el flujo de trabajo para apuntar un dispositivo LK800 a Plaspy, de modo que la ubicación, alertas SOS, detección de caídas y otros eventos soportados aparezcan en su cuenta Plaspy.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador en la plataforma. Los pasos de configuración en el lado del fabricante para el LK800 pueden variar según el firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor que se usen para programar el dispositivo, así que utilice la guía siguiente junto con la documentación oficial de LK-GPS y la herramienta de configuración de su dispositivo.

## Visión general de la configuración

Esta configuración prepara al LK800 para enviar sus mensajes de ubicación y eventos al backend de Plaspy, de modo que el dispositivo sea visible y administrable desde la interfaz de Plaspy.

- Configure el LK800 para que reporte al endpoint de Plaspy y así la telemetría y las alertas lleguen a su cuenta.
- Seleccione la opción de transporte que soporte el dispositivo (UDP o TCP) y ajústela al puerto de Plaspy.
- Verifique la conectividad celular y los parámetros APN para que el dispositivo alcance el endpoint de Plaspy mediante 4G.
- Guarde y aplique la configuración, luego confirme que el dispositivo aparece y reporta en Plaspy.
- Utilice las herramientas del fabricante o los comandos SMS provistos por LK-GPS para realizar los pasos de configuración y verificación.

## Ajustes del servidor de Plaspy

Use los siguientes parámetros públicos de conexión a Plaspy al configurar el dispositivo LK800:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP (choose whichever the device or installation requires)
- Plaspy automatically detects the tracker protocol so the server can accept messages in supported formats
- Note that all devices in Plaspy use the same port, 8888, for device connections

## Requisitos previos comunes

- Un dispositivo LK800 con batería suficiente o conectado a una fuente de alimentación estable para la configuración.
- Una tarjeta SIM activa y un plan de datos habilitado para 4G si su despliegue usa conectividad celular.
- Acceso al método oficial de configuración de LK-GPS, como el software del proveedor, una herramienta web o comandos SMS soportados.
- Parámetros APN y del operador para la SIM si el firmware del dispositivo los requiere.
- Una cuenta Plaspy y la posibilidad de confirmar el reporte del dispositivo en la plataforma Plaspy.
- Un entorno de red que permita conexiones salientes al dominio o IP de Plaspy en el puerto requerido.

## Cómo se conecta este rastreador a Plaspy

Al configurarlo, el LK800 envía reportes de posición periódicos y mensajes de eventos al endpoint del servidor de Plaspy para que la ubicación, SOS y eventos de detección de caídas estén disponibles en monitoreo en tiempo real e informes históricos.

- El dispositivo transmite fijaciones GNSS y mensajes de eventos a d.plaspy.com o la IP 54.85.159.138 en el puerto 8888.
- Los mensajes usan UDP o TCP según el transporte seleccionado durante la configuración del dispositivo.
- Plaspy ingiere el protocolo del rastreador de forma automática y mapea los mensajes entrantes a la cuenta del usuario para mapas en vivo y alertas.
- Los eventos SOS y de detección de caídas se reenvían a los contactos configurados y a las alarmas de la plataforma para una respuesta rápida.
- Los reportes de batería y estado del dispositivo se entregan junto con las actualizaciones de ubicación para que los administradores puedan monitorear la salud del equipo.

## Flujo típico de configuración

1. Acceda al método o software de configuración oficial de LK-GPS proporcionado por el fabricante o el proveedor.
2. En los ajustes de servidor del dispositivo, ingrese el dominio de Plaspy d.plaspy.com o la IP del servidor 54.85.159.138.
3. Establezca el puerto del dispositivo en 8888 para que coincida con el endpoint de Plaspy.
4. Elija UDP o TCP si el dispositivo requiere seleccionar un protocolo de transporte.
5. Ingrese cualquier parámetro APN o del operador de la SIM y guarde esos ajustes si su equipo los necesita.
6. Aplique o guarde la configuración en el dispositivo y reinicie el rastreador si las instrucciones del fabricante lo indican.
7. Valide la conectividad confirmando que el LK800 reporta a Plaspy y que los mensajes de ubicación y eventos aparecen en su cuenta Plaspy.

## Ejemplos de comandos de configuración

El LK800 soporta métodos de configuración específicos del fabricante que varían por firmware y herramientas. La sintaxis exacta de comandos o cadenas SMS puede diferir según la versión del firmware y la herramienta del proveedor, por lo que debe consultar la documentación oficial de LK-GPS para obtener la sintaxis precisa.

Si utiliza configuración por SMS o una herramienta del proveedor, siga las instrucciones de LK-GPS para establecer el dominio o IP del servidor, el puerto 8888 y el transporte UDP o TCP. Plaspy recibirá los mensajes una vez que esos valores se apliquen y el dispositivo tenga conectividad de red.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la disposición de menús, el conjunto de comandos SMS o el comportamiento de la herramienta del proveedor. Confirme siempre con la documentación de LK-GPS correspondiente a su versión de firmware.
- Cuando tenga la opción, elija UDP o TCP según las necesidades de su instalación. UDP suele usarse para reportes de baja sobrecarga, mientras que TCP aporta fiabilidad de sesión cuando está disponible.
- Dado que Plaspy detecta automáticamente el protocolo entrante del rastreador, solo necesita establecer el destino y el transporte correctos; la plataforma hará el mapeo de los mensajes a la cuenta.
- Tenga listas las credenciales APN y la provisión de la SIM antes de intentar la configuración remota para evitar conectividad intermitente durante el ajuste.
- Las herramientas de instalación y del proveedor pueden ofrecer comandos de verificación o registros; use esos recursos para confirmar conexiones salientes exitosas a d.plaspy.com o 54.85.159.138 en el puerto 8888.

## Por qué usar Plaspy con esta configuración

Integrar el LK800 con Plaspy ofrece una forma directa de añadir rastreo personal confiable, alertas SOS y detección de caídas a una plataforma centralizada de monitoreo. Empresas y familias obtienen visibilidad en tiempo real, alertas configurables y datos históricos de rutas para responder con mayor rapidez y mantener registros de movimientos e incidentes.

Learn more about Plaspy at https://www.plaspy.com and verify the latest device specific setup, firmware notes, and command syntax with the manufacturer at https://www.lk-gps.com. Manufacturer specifications and configuration methods can change over time so always confirm current instructions on the LK-GPS website.

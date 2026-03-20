---
slug: /trackerking/dk12/configuration
id: dk12-configuration
sidebar_label: Configuration
title: TrackerKing - DK12 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el TrackerKing DK12 a Plaspy con indicaciones prácticas de servidor y configuración
keywords:
  - Configuración TrackerKing DK12
  - Instalación TrackerKing DK12
  - Configuración servidor DK12
  - Configuración DK12 Plaspy
  - Configuración rastreador GPS TrackerKing
  - Instalación seguimiento flota DK12
  - Configuración protocolo DK12
  - Configuración rastreador vehicular TrackerKing
  - Integración DK12 con Plaspy
  - Configuración plataforma rastreador GPS
---

# TrackerKing - Configuración del DK12

Esta página describe el contexto de configuración pública para usar el TrackerKing DK12 con Plaspy. Se enfoca en los ajustes de servidor y el flujo de trabajo prácticos necesarios para apuntar un DK12 a Plaspy y validar que el equipo comunica correctamente con la plataforma. Use esta guía junto con el manual del dispositivo al aplicar ajustes o realizar una instalación.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente los protocolos de los rastreadores, por lo que las instalaciones del DK12 suelen requerir el mismo endpoint y puerto usados por otros equipos. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. La conectividad 4G Cat1 con fallback a 2G del DK12 y sus funciones para vehículos, como detección de ACC y soporte de inmovilizador, son relevantes al planear la instalación y validación.

## Resumen de configuración

Esta configuración prepara el DK12 para reportar ubicación y telemetría a Plaspy y asegura que el dispositivo sea visible y manejable en la plataforma. Los pasos siguientes enfatizan acciones prácticas que un instalador o integrador realizará para habilitar una comunicación confiable entre el rastreador y Plaspy.

- Apuntar el DK12 al endpoint de ingestión de Plaspy para que los mensajes de posición y alarma lleguen a la plataforma.
- Seleccionar el modo de transporte soportado por el dispositivo y hacer coincidir los ajustes en Plaspy para una entrega fiable.
- Validar el reporte en vivo y los eventos de alarma para que el DK12 aparezca en el mapa de Plaspy y en las reglas de alerta.
- Confirmar que las señales de ignición e inmovilizador se reciban si esas funciones se usan para alertas o acciones remotas.
- Verificar la alimentación del equipo y la conectividad de red para evitar reportes intermitentes o zonas sin cobertura.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port 8888

Use either the domain d.plaspy.com or the IP 54.85.159.138 when configuring the DK12. Port 8888 is used for every device in Plaspy and the platform will detect the protocol sent by the tracker automatically.

## Requisitos habituales antes de la instalación

- Dispositivo alimentado y cableado según las instrucciones de instalación del TrackerKing DK12.
- SIM con datos móviles activa y provisionada para 4G Cat1 con fallback a 2G cuando la cobertura lo requiera.
- Acceso al método oficial de configuración de TrackerKing, como la herramienta del proveedor, comandos SMS o la interfaz web soportada por el DK12.
- Conocimiento de si la variante del DK12 en uso requiere seleccionar TCP o UDP para el transporte.
- Acceso físico al rastreador para reinicios y validaciones durante la puesta en marcha.
- Una cuenta y proyecto en Plaspy donde los nuevos dispositivos se podrán observar una vez que empiecen a reportar.

## Cómo se conecta este rastreador a Plaspy

El DK12 se configura para enviar posiciones, alarmas y telemetría al endpoint y puerto compartidos de Plaspy, de modo que esos mensajes sean ingeridos por la plataforma para monitorización en tiempo real y reproducción histórica. Plaspy soporta protocolos comunes compatibles con el DK12, por lo que la integración suele consistir en apuntar el dispositivo al endpoint de Plaspy y confirmar la conectividad.

- El rastreador envía mensajes periódicos de posición GPS a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Alarmas como vibración, geocerca, exceso de velocidad y eventos de inmovilizador se reenvían a Plaspy para su alertado.
- El estado de ignición y el reporte de ignición virtual se entregan a Plaspy para soportar registros de sesión y disparadores de reglas.
- Plaspy detecta el protocolo del rastreador de forma automática, por lo que no es necesaria la selección del protocolo en la plataforma.
- Los reportes, el historial de rutas y los datos de telemetría aparecen en Plaspy una vez que el dispositivo reporte correctamente al puerto 8888.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración de TrackerKing para el DK12, como la herramienta del proveedor, el conjunto de comandos SMS o la interfaz de instalador descrita en el manual del dispositivo.
2. Ingrese la dirección del servidor Plaspy usando d.plaspy.com o 54.85.159.138 en el campo de host del servidor del dispositivo.
3. Establezca el puerto del servidor en 8888. Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos soportados.
4. Elija UDP o TCP si el firmware del DK12 requiere una selección explícita del transporte para el envío de datos.
5. Aplique o guarde la configuración en la herramienta de TrackerKing o mediante comandos SMS y confirme que el dispositivo aceptó los nuevos ajustes.
6. Reinicie el DK12 si el firmware o las indicaciones del instalador lo requieren para que los nuevos ajustes de servidor entren en efecto.
7. Valide que el DK12 reporte a Plaspy verificando la aparición del dispositivo y la telemetría reciente en el panel de Plaspy o en las herramientas de monitoreo.

## Ejemplos de comandos de configuración

El DK12 puede configurarse usando herramientas del proveedor TrackerKing, comandos SMS directos o una interfaz de configuración según el firmware y el método del instalador. Los formatos exactos de los comandos y las herramientas varían según la versión de firmware y la liberación del proveedor, por lo que siga el manual oficial de TrackerKing para el conjunto de comandos correcto de su variante de DK12. Plaspy requiere que el endpoint del servidor esté configurado en d.plaspy.com o 54.85.159.138 y que el puerto sea 8888 con UDP o TCP como transporte si el dispositivo necesita una selección.

## Notas de configuración

- Las diferencias de firmware entre revisiones de hardware del DK12 pueden cambiar la sintaxis de los comandos y las opciones de configuración; siempre verifique la versión de firmware del equipo antes de aplicar instrucciones.
- Elija UDP o TCP según las características de la red y el comportamiento del firmware del DK12; UDP puede ser más tolerante en redes móviles mientras que TCP ofrece confirmación de conexión cuando está soportado.
- Al usar configuración por SMS del proveedor, asegúrese de que los marcadores como los valores de APN estén correctamente completados según el operador y la variante de hardware.
- Dado que Plaspy usa el puerto 8888 para todos los equipos y detecta protocolos automáticamente, no se requieren cambios de puerto por dispositivo en el lado de la plataforma.
- Si el DK12 soporta varios protocolos de rastreo como GT06, JT808 o Tianqin, la selección de protocolo suele ser automática en Plaspy, pero confirme que el dispositivo esté enviando un formato de mensaje compatible.

## Por qué usar Plaspy con esta configuración

Usar el TrackerKing DK12 con Plaspy ofrece a las organizaciones una vía confiable para obtener ubicación en tiempo real, historial de viajes y manejo de alarmas sin trabajo de protocolo personalizado. La conectividad multibanda del DK12 y sus entradas orientadas a vehículos combinan con la ingestión y el sistema de alertas de Plaspy para brindar monitoreo en vivo, herramientas de mitigación de robo y reproducción histórica de rutas para flotas y gestión de activos.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com and review the latest device specific information and firmware notes on the TrackerKing site https://trackerking.cn/. Manufacturer specifications and setup methods can change over time so verify the current DK12 configuration details on the TrackerKing website when planning an installation.

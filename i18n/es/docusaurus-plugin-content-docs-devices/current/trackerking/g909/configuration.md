---
slug: /trackerking/g909/configuration
id: g909-configuration
sidebar_label: Configuration
title: TrackerKing - G909 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del TrackerKing G909 con ajustes de servidor Plaspy y pasos prácticos para integrar flotas
keywords:
  - configuración TrackerKing G909
  - instalación TrackerKing G909
  - configuración G909 Plaspy
  - configuración rastreador GPS TrackerKing
  - configuración servidor G909
  - configuración rastreador Plaspy
  - configuración rastreador GPS para vehículos
  - rastreo de flotas G909
  - guía de instalación G909
  - ajustes servidor Plaspy
---

# TrackerKing - Configuración del G909

Esta página describe el contexto público de configuración para usar el TrackerKing G909 con la plataforma Plaspy. Explica los ajustes de servidor y los pasos prácticos que comúnmente aplicará al integrar un rastreador vehicular alimentado de forma fija como el G909 en Plaspy para seguimiento en tiempo real, notificaciones y funciones de comandos remotos.

Plaspy utiliza un endpoint y puerto compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, mientras que los pasos de configuración por parte del fabricante pueden variar según el firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use la información aquí para preparar el dispositivo y el flujo de trabajo del instalador; siempre verifique detalles específicos del equipo en la documentación de TrackerKing para las instrucciones más recientes del fabricante.

## Resumen de configuración

Este proceso prepara el G909 para enviar ubicación, telemetría y eventos de alarma a Plaspy de modo que el dispositivo sea visible y gestionable desde el panel y las APIs de Plaspy.

- Configure el dispositivo para que apunte al endpoint de Plaspy y así la telemetría se envíe a la plataforma centralizada.
- Asegúrese de que el transporte y el puerto del dispositivo coincidan con los ajustes de Plaspy para una entrega fiable.
- Valide la conectividad y los reportes del dispositivo para que el rastreador aparezca en Plaspy y transmita eventos.
- Active y verifique alarmas y telemetría clave, como ACC, kilometraje y voltaje de batería según sea necesario.
- Aplique y guarde la configuración en el G909 y confirme que el dispositivo reporta a Plaspy para la monitorización operativa.

## Ajustes del servidor Plaspy

Al configurar el G909 para Plaspy, utilice exactamente los siguientes ajustes públicos del servidor:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automáticamente detecta el protocolo del rastreador, por lo que la plataforma puede aceptar múltiples protocolos en el mismo puerto

Estos valores son el destino central al que el G909 debe reportar para que Plaspy reciba telemetría y eventos en tiempo real.

## Requisitos previos típicos

- Confirme que el G909 esté alimentado e instalado según las instrucciones de cableado de TrackerKing para que el dispositivo mantenga tiempo de actividad continuo.
- Obtenga acceso al método oficial de configuración de TrackerKing, la herramienta o el software del proveedor necesario para cambiar los ajustes de servidor y transporte.
- Verifique la conectividad de red adecuada para su región y hardware, de modo que el dispositivo pueda alcanzar el endpoint de Plaspy.
- Habilite la telemetría diagnóstica del vehículo según sea necesario, como detección de ACC y reporte de kilometraje cuando se requieran estas funciones.
- Tenga una cuenta de Plaspy o detalles de aprovisionamiento para validar que el dispositivo aparezca y se gestione desde la plataforma.
- Acceso a los registros del dispositivo o a la interfaz de estado para verificar conexiones salientes hacia el endpoint de Plaspy.

## Cómo se conecta este tracker a Plaspy

El G909 se configura para enviar datos de ubicación y eventos al endpoint y puerto compartidos de Plaspy, de modo que los operadores obtengan visibilidad continua y alertas en la plataforma. Plaspy recibe y decodifica el tráfico del rastreador y lo pone a disposición en el panel y a través de la API.

- El dispositivo se programa para enviar paquetes periódicos de telemetría y paquetes impulsados por eventos a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El transporte se configura como UDP o TCP según la opción del dispositivo y la preferencia del instalador.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que el mismo puerto puede aceptar conexiones de varios modelos soportados.
- Tipos de eventos como SOS, vibración, entrada/salida de geocerca, exceso de velocidad, cambios de ACC e informes de inmovilizador se reenvían a Plaspy para alertas y flujos de trabajo.
- Tras la configuración y el reporte, el dispositivo será visible en la plataforma Plaspy para reproducción de historial y monitorización operativa.

## Flujo de configuración habitual

1. Acceda al método de configuración oficial de TrackerKing o al software que proporciona el fabricante o su proveedor.
2. En los ajustes de servidor del dispositivo introduzca d.plaspy.com o alternativamente 54.85.159.138 como destino del servidor.
3. Ajuste el puerto del servidor a 8888 según lo requerido por Plaspy.
4. Elija UDP o TCP para el transporte si el dispositivo solicita selección de transporte.
5. Aplique o guarde la configuración mediante la herramienta del fabricante o la interfaz del dispositivo.
6. Reinicie el G909 si el firmware o la herramienta del fabricante exige un reinicio para que los cambios tengan efecto.
7. Valide que el dispositivo reporte a Plaspy comprobando el estado en la plataforma y verificando la entrada de telemetría.

## Ejemplos de comandos de configuración

Los comandos exactos o las cadenas de configuración para el G909 dependen del firmware de TrackerKing, las herramientas del proveedor o la interfaz del instalador. Los dispositivos TrackerKing suelen configurarse mediante una herramienta del fabricante, comandos SMS o una utilidad de aprovisionamiento por serial/USB; la sintaxis específica varía según la versión de firmware y debe consultarse en la documentación de TrackerKing.

Al configurar el equipo, establezca el servidor en d.plaspy.com o 54.85.159.138 y el puerto en 8888, eligiendo UDP o TCP si el dispositivo solicita el transporte. Si recibe cadenas de comandos o plantillas SMS proporcionadas por el fabricante, rellene los campos de servidor y puerto con esos valores exactos de Plaspy y siga las instrucciones del proveedor para aplicar los ajustes.

## Notas de configuración

- Plaspy usa el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, lo que simplifica la configuración del endpoint en flotas mixtas.
- Las revisiones de firmware y las variantes de hardware pueden cambiar la interfaz de configuración y la sintaxis de los comandos disponibles; confirme los comandos con la documentación de TrackerKing antes de aplicarlos.
- Elija UDP para menor sobrecarga y uso típico en telemetría de rastreadores, o TCP cuando requiera entrega orientada a la conexión y el dispositivo lo soporte; ambos transportes son aceptados por Plaspy en el puerto 8888.
- Mantenga un registro de los números de serie y versiones de firmware durante la instalación para ayudar en la resolución de problemas si un dispositivo no aparece en Plaspy.
- Las herramientas del fabricante o la configuración por SMS pueden incluir marcadores para APN o credenciales; respete los marcadores y complételos con los valores de su operadora según lo indique TrackerKing.

## Por qué usar Plaspy con esta configuración

Configurar el TrackerKing G909 para que reporte a Plaspy ofrece visibilidad centralizada de ubicación, alarmas y telemetría del vehículo, de modo que gestores de flota y propietarios puedan supervisar activos, recibir alertas oportunas y usar funciones de control remoto como inmovilización cuando estén soportadas. Usar Plaspy con el G909 ayuda a consolidar los datos de rastreo de dispositivos instalados en una sola plataforma para informes, reproducción de historial y flujos operativos.

Para saber más sobre Plaspy y cómo se integra con dispositivos como el TrackerKing G909 visite https://www.plaspy.com. Para los comandos de configuración específicos más recientes, notas de firmware y orientación de instalación consulte la documentación del fabricante TrackerKing en https://trackerking.cn/ ya que el comportamiento del dispositivo y los métodos de configuración pueden cambiar con el tiempo.

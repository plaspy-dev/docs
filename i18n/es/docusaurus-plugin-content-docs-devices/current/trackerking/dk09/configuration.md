---
slug: /trackerking/dk09/configuration
id: dk09-configuration
sidebar_label: Configuration
title: TrackerKing - DK09 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el TrackerKing DK09 con servidores Plaspy y verificar la conectividad del dispositivo
keywords:
  - configuración TrackerKing DK09
  - instalación TrackerKing DK09
  - compatibilidad DK09 Plaspy
  - configuración rastreador GPS
  - configuración seguimiento vehicular
  - configuración servidor DK09
  - configuración rastreador Plaspy
  - instalación rastreador oculto
  - configuración seguimiento de flotas
  - detección protocolo rastreador
---

# TrackerKing - Configuración del DK09

Esta página explica el contexto público de configuración para usar el TrackerKing DK09 con Plaspy. Se centra en los ajustes de servidor prácticos y en los pasos que necesitará para apuntar un DK09 hacia Plaspy, de modo que el dispositivo reporte ubicación, estado de ignición y alertas de eventos para monitoreo en tiempo real y reproducción histórica.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use esta guía para los parámetros públicos de Plaspy y el flujo de trabajo; siempre verifique los detalles específicos del dispositivo con la documentación de TrackerKing cuando esté disponible.

## Resumen de la configuración

El objetivo de configurar un DK09 para Plaspy es asegurar que el rastreador se comunique de forma fiable con el endpoint de ingestión de Plaspy, para que los datos de ubicación y eventos aparezcan en su cuenta. El proceso de configuración normalmente establece el endpoint y el transporte del servidor, confirma el acceso de red y valida que el rastreador envíe datos correctamente.

- Apuntar el DK09 al endpoint de Plaspy para que la telemetría llegue a la plataforma.
- Seleccionar el modo de transporte (UDP o TCP) si la herramienta del fabricante lo requiere.
- Configurar el puerto compartido de Plaspy para que el dispositivo use el mismo puerto de ingestión en el que escucha la plataforma.
- Validar que el dispositivo esté registrado y enviando datos para que sea visible en Plaspy.
- Confirmar que las alarmas del dispositivo y el reporte de ignición funcionen tras la configuración.

## Parámetros públicos de servidor de Plaspy

Al configurar TrackerKing DK09 para Plaspy, utilice estos ajustes públicos exactamente como se muestran:

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888  
- Transport: UDP or TCP supported by the device; you may choose either if the device requires a transport selection  
- Protocol handling: Plaspy automatically detects the tracker protocol on the shared ingestion port

Todos los dispositivos que reportan a Plaspy usan el mismo puerto, y Plaspy detectará automáticamente el protocolo del rastreador una vez que el dispositivo llegue al servidor.

## Requisitos habituales antes de comenzar

- Confirme que el DK09 tiene una conexión de datos 4G funcional y una SIM activa con datos habilitados.
- Asegúrese de que el rastreador tenga alimentación estable o batería interna cargada para la configuración inicial y las pruebas.
- Tenga acceso al método oficial de configuración de TrackerKing o al software correspondiente (herramienta web del fabricante, comandos SMS o aplicación de configuración) para cambiar los ajustes del servidor.
- Un ordenador o dispositivo móvil para usar la herramienta del fabricante y revisar los registros de conectividad.
- El IMEI o identificador del dispositivo a mano para localizar el rastreador en Plaspy después de que empiece a reportar.
- Conocimientos básicos sobre la elección entre UDP y TCP cuando el dispositivo requiera seleccionar un transporte.

## Cómo se conecta este rastreador a Plaspy

El DK09 envía su posición GNSS y la telemetría de eventos mediante datos celulares al endpoint de ingestión de Plaspy, de modo que los gestores de flota puedan monitorear ubicaciones en vivo y recibir alertas. En la práctica, el rastreador se configura para apuntar al endpoint y puerto compartidos de Plaspy, y la plataforma clasifica y decodifica el protocolo automáticamente.

- El DK09 se apunta a d.plaspy.com o a la IP del servidor Plaspy para que los reportes lleguen a la plataforma.
- El dispositivo usa el puerto 8888 para todas las conexiones salientes hacia Plaspy.
- Puede configurar el transporte UDP o TCP según las opciones del dispositivo.
- Plaspy detecta y decodifica el protocolo del rastreador automáticamente cuando llegan los datos.
- Tras el reporte, las actualizaciones de ubicación, el estado de ignición y los eventos de alarma aparecen en Plaspy para monitoreo en tiempo real y reproducción histórica.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración de TrackerKing o al software correspondiente (herramienta web del fabricante, app de configuración o interfaz de comandos SMS) proporcionado por TrackerKing o su distribuidor.  
2. Ingrese la dirección del servidor Plaspy usando el dominio d.plaspy.com o la dirección IP 54.85.159.138.  
3. Configure el puerto del servidor en 8888 (Plaspy usa el mismo puerto para todos los dispositivos).  
4. Elija el modo de transporte UDP o TCP si el dispositivo requiere que se seleccione uno.  
5. Aplique o guarde la configuración en la herramienta del dispositivo y confirme que los cambios fueron aceptados.  
6. Reinicie el dispositivo si el fabricante recomienda un reinicio como parte de la aplicación de ajustes.  
7. Valide que el DK09 reporte a Plaspy localizando el dispositivo en la plataforma después de que establezca la conexión y comience a enviar datos.

## Ejemplos de comandos de configuración

El fabricante del DK09 puede ofrecer múltiples métodos de configuración (herramientas web, utilitarios de escritorio, comandos SMS u OTA). Los comandos exactos y los nombres de parámetros dependen del firmware de TrackerKing y de la herramienta de aprovisionamiento. Como los comandos específicos del modelo los proporciona TrackerKing, consulte la guía oficial del fabricante para la sintaxis exacta.

Acciones comunes del fabricante que deberá realizar incluyen especificar el dominio o la IP y el puerto del servidor (d.plaspy.com o 54.85.159.138 y 8888) y seleccionar UDP o TCP si así se requiere. Si recibe ejemplos de comandos de TrackerKing o de su distribuidor, siga su orden y sintaxis, y conserve los sustitutos como {{apn}} o {{apnu}} si aparecen; dichos marcadores deben reemplazarse por las credenciales APN de su operador cuando sea necesario.

## Notas de configuración

- Diferencias de firmware y herramientas: Las revisiones de firmware de TrackerKing o las utilidades de configuración pueden cambiar los nombres de parámetros y la sintaxis de comandos; verifique la guía actual del fabricante antes de aplicar ajustes.
- Elección del transporte: UDP puede ser preferible por menor overhead mientras que TCP aporta fiabilidad de sesión; elija el transporte que soporte su instalación y la herramienta del dispositivo, sabiendo que Plaspy acepta ambos.
- APN y ajustes móviles: Si el rastreador requiere configuración de APN para datos 4G, use los valores correctos proporcionados por el operador de la SIM.
- Buenas prácticas del instalador: Verifique alimentación, colocación de antena y nivel de señal durante las pruebas iniciales para reducir falsas alarmas y problemas de conectividad.
- Verificación con el fabricante: Siempre confirme comandos y procedimientos de reinicio con la documentación de TrackerKing para evitar reinicios involuntarios o pérdida de configuración.

## Por qué usar Plaspy con esta configuración

Configurar el TrackerKing DK09 para que reporte a Plaspy brinda a los operadores de flota visibilidad centralizada de la ubicación del vehículo, el estado de ignición y los eventos de alarma. La plataforma Plaspy ingiere la telemetría del DK09 para supervisión en tiempo real, reproducción de rutas históricas y notificaciones basadas en eventos, facilitando la gestión de la respuesta ante robos y la supervisión operativa en flotas mixtas.

Para conocer más sobre Plaspy y sus funciones de seguimiento de flotas visite https://www.plaspy.com. Los métodos de configuración por dispositivo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, por lo que debe verificar las instrucciones y especificaciones técnicas más recientes en el sitio oficial de TrackerKing https://trackerking.cn/.

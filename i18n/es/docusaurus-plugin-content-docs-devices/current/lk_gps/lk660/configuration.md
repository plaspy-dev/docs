---
slug: /lk_gps/lk660/configuration
id: lk660-configuration
sidebar_label: Configuration
title: LK-GPS - LK660 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para integrar el rastreador LK660 con la plataforma Plaspy
keywords:
  - Configuración LK GPS LK660
  - Configuración LK660 Plaspy
  - Configuración servidor LK660
  - Configuración rastreador GPS LK660
  - Integración Plaspy LK660
  - Configuración rastreador LK GPS
  - Configuración rastreador GPS Plaspy
  - Configuración plataforma seguimiento LK660
  - Configuración rastreador personal
  - Ajustes servidor dispositivo GPS
---

# LK-GPS - Configuración del LK660

Esta página describe el contexto público de configuración necesario para usar el LK660 con Plaspy. Resume los ajustes prácticos del servidor y los pasos habituales para apuntar un rastreador LK660 hacia Plaspy, de modo que el dispositivo envíe sus ubicaciones y eventos a la plataforma. El contenido se basa en el uso del LK660 como un rastreador personal compacto que emplea posicionamiento por GPS y LBS con conectividad celular 2G.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración del proveedor. Use esta guía para preparar y validar la conectividad del LK660 con Plaspy y confirme siempre los pasos específicos del dispositivo con la documentación oficial de LK GPS o las instrucciones del proveedor.

## Resumen de la configuración

Este proceso prepara el LK660 para enviar su telemetría de posición y eventos a Plaspy, de modo que el dispositivo sea visible en su cuenta Plaspy para monitoreo en tiempo real y reproducción histórica. El objetivo principal es asegurarse de que el dispositivo utilice los ajustes del servidor Plaspy, el transporte correcto y una conexión de datos móvil funcional para que la telemetría llegue de forma confiable.

- Configure el rastreador para que reporte al endpoint y puerto del servidor Plaspy, de modo que la telemetría se enrute a su cuenta.
- Ajuste las opciones de transporte y protocolo en el LK660 si el dispositivo exige elegir entre UDP y TCP.
- Valide la conectividad a la red móvil y los ajustes de APN o de la SIM para que el dispositivo alcance Plaspy mediante la red celular.
- Aplique y guarde la configuración, reinicie el dispositivo si es necesario y confirme que el dispositivo aparece en Plaspy.
- Solucione problemas de reporte y entrega de mensajes con las herramientas del fabricante o mediante la configuración por SMS si está disponible.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y usa el mismo puerto para todos los dispositivos compatibles

Use el dominio d.plaspy.com o la IP 54.85.159.138 al ingresar los detalles del servidor en la interfaz de configuración del LK660. Todos los dispositivos Plaspy usan el puerto 8888 y la plataforma puede detectar el protocolo del dispositivo sin importar si se emplea UDP o TCP.

## Requisitos habituales antes de la configuración

- Un dispositivo LK660 cargado con batería funcional y conexión de alimentación adecuada.
- Una tarjeta SIM 2G compatible con un plan de datos y el APN correcto para el operador en su región.
- Acceso al método oficial de configuración de LK-GPS, como la app del fabricante, comandos por SMS o la herramienta de configuración de escritorio.
- Cobertura en las bandas celulares requeridas por el dispositivo para que el rastreador pueda establecer una sesión de datos.
- Una cuenta en Plaspy y acceso a la plataforma para verificar que el dispositivo aparezca y reporte correctamente.
- Conocimientos básicos del firmware del dispositivo y de los métodos de configuración disponibles para su región o variante del proveedor.

## Cómo se conecta este rastreador a Plaspy

Cuando está correctamente configurado, el LK660 abre una conexión de datos a través de la red celular y envía posiciones periódicas y mensajes de eventos al endpoint y puerto del servidor Plaspy. Plaspy ingiere la telemetría, muestra el dispositivo en mapas en vivo, activa alertas y almacena rutas históricas para su revisión.

- El rastreador se configura para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Los paquetes de telemetría y eventos se envían por UDP o TCP según la configuración del rastreador.
- Plaspy detecta automáticamente el protocolo del LK660 para poder interpretar correctamente los mensajes de ubicación y eventos.
- Eventos como SOS, detección de caídas y alertas de geocerca se entregan a Plaspy para notificación e informes.
- La conexión y el reporte exitosos se validan observando el dispositivo en Plaspy y verificando las marcas de tiempo de los mensajes recientes.

## Flujo común de configuración

1. Acceda al método o software oficial de configuración de LK-GPS para el LK660, como la app del fabricante, la utilidad de escritorio o el conjunto de comandos por SMS.
2. En los ajustes de servidor o reporte, ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138.
3. Configure el puerto remoto en 8888 según lo requiere Plaspy.
4. Elija UDP o TCP como transporte si el dispositivo solicita seleccionar uno.
5. Ingrese los ajustes de APN o relacionados con la SIM necesarios para que el dispositivo establezca conectividad de datos celulares.
6. Aplique o guarde la configuración y reinicie el dispositivo si la herramienta o el firmware exige un reinicio para que los cambios surtan efecto.
7. Valide que el dispositivo reporte a Plaspy revisando el estado del dispositivo y la telemetría reciente en su cuenta Plaspy.

## Ejemplos de comandos de configuración

El LK660 admite configuración mediante herramientas del fabricante y conjuntos de comandos por SMS según la versión de firmware y la variante regional. Dado que los comandos y la sintaxis pueden variar entre versiones de firmware, los comandos exactos no se incluyen aquí. En la práctica, empleará una de las siguientes aproximaciones provistas por LK GPS:

- La app móvil del fabricante o la utilidad de configuración de escritorio para ingresar dominio o IP del servidor y el puerto.
- Comandos por SMS para establecer servidor, puerto, APN y transporte si su firmware soporta la configuración por SMS.
- Herramienta USB o serial de configuración si es provista por el vendedor.

Al usar cualquier herramienta de configuración, ingrese d.plaspy.com o 54.85.159.138 como servidor y establezca el puerto en 8888. Elija UDP o TCP según las opciones de la herramienta y su preferencia de red. Consulte la documentación de LK-GPS o la referencia de comandos del proveedor para la sintaxis exacta y el orden de los comandos SMS requeridos por su firmware.

## Notas de configuración

- Las diferencias de firmware y las variantes regionales de hardware pueden modificar los pasos exactos y la sintaxis de comandos. Verifique la versión de firmware antes de aplicar comandos.
- Si su configuración utiliza SMS, asegúrese de que los comandos SMS sigan el formato del fabricante y de que la SIM tenga habilitada la capacidad de enviar y recibir SMS.
- La elección entre UDP y TCP puede afectar la entrega de mensajes y el comportamiento de retransmisión. Use la opción de transporte disponible en la herramienta del LK660 y recuerde que Plaspy detecta el protocolo automáticamente.
- Todos los dispositivos Plaspy usan el puerto 8888, por lo que no necesita un puerto distinto por dispositivo; utilice el mismo puerto al configurar múltiples rastreadores.
- Si encuentra problemas de conexión, verifique los ajustes de APN, la señal de la red móvil y que su plan de SIM incluya conectividad de datos en 2G cuando sea necesario.

## Por qué usar Plaspy con esta configuración

Configurar el LK660 para que reporte a Plaspy brinda a organizaciones y cuidadores una visibilidad confiable de la ubicación y el estado de personas o activos protegidos. Con actualizaciones continuas, reporte de eventos como SOS y caídas, alertas de geocercas y reproducción de rutas históricas, la combinación del hardware LK660 y la plataforma Plaspy facilita la conciencia situacional y respuestas oportunas sin necesidad de una configuración de servidor compleja.

Para obtener más información sobre Plaspy y cómo funciona con rastreadores compatibles, visite https://www.plaspy.com. Para detalles actuales específicos del dispositivo, notas de firmware y comandos exactos por SMS o configuración, consulte la documentación oficial de LK GPS en https://www.lk-gps.com.

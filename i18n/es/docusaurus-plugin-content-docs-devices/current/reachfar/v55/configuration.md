---
slug: /reachfar/v55/configuration
id: v55-configuration
sidebar_label: Configuration
title: Reachfar - V55 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador Reachfar V55 con los ajustes de servidor Plaspy y el flujo de puesta en marcha
keywords:
  - Configuración Reachfar V55
  - Configuración V55
  - Configurar servidor Reachfar V55
  - Configuración Plaspy
  - Configuración rastreador Plaspy
  - Configuración rastreador GPS Reachfar
  - Configuración GPS V55
  - Configuración seguimiento de flotas
  - Rastreador de vehículos Plaspy
  - Rastreador de activos V55
---

# Reachfar - Configuración del V55

Esta página documenta el contexto público de configuración para usar el rastreador GPS Reachfar V55 con Plaspy. Se centra en los ajustes de servidor prácticos y el flujo de puesta en marcha que permiten que el V55 sea visible en la plataforma Plaspy, y destaca los valores compartidos del servidor Plaspy que deberá aplicar al comisionarlo.

Plaspy usa configuraciones de servidor compartidas entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y la herramienta de configuración del proveedor que utilice, por lo que trate las instrucciones aquí como una guía pública práctica que complementa el manual del producto V55.

## Resumen de la configuración

Esta sección explica el propósito de configurar el V55 para Plaspy y qué debe esperar tras una configuración exitosa.

El proceso prepara el V55 para enviar datos de posición y telemetría al punto de ingestión de Plaspy, garantiza que el dispositivo pueda establecer una conexión confiable sobre la red celular y valida que Plaspy reciba y muestre el dispositivo en la plataforma.

- Direccione el V55 al endpoint del servidor Plaspy para que entregue datos GNSS, Wi‑Fi y LBS a su cuenta en Plaspy.
- Asegúrese de que el dispositivo tenga conexión celular activa y el APN o ajustes de red correctos para alcanzar Plaspy.
- Seleccione el método de transporte que soporte el dispositivo (UDP o TCP) y configure el puerto de Plaspy para que el V55 comunique en el mismo puerto usado por todos los dispositivos en Plaspy.
- Guarde y aplique los ajustes, luego valide que Plaspy reciba los primeros reportes y que las actualizaciones de ubicación aparezcan en la plataforma.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos del servidor Plaspy al configurar el V55. Estos valores son los detalles estándar del endpoint que Plaspy espera para el reporte de dispositivos.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: UDP o TCP según lo requiera el dispositivo o el firmware
- Plaspy detecta automáticamente el protocolo del rastreador para interpretar los mensajes del V55
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que configure 8888 de manera consistente al configurar cualquier rastreador compatible

## Requisitos típicos antes de la configuración

Prepare los siguientes elementos antes de comenzar a configurar un V55 para Plaspy.

- Un dispositivo V55 encendido con batería cargada o conectado a la alimentación del vehículo
- Una SIM celular activa con datos habilitados y la información APN necesaria para la red de su región
- Acceso al método oficial de configuración Reachfar recomendado para su unidad (herramienta web, herramienta de escritorio, comandos SMS o utilidad móvil, según el modelo y el firmware)
- La dirección del servidor Plaspy d.plaspy.com o la IP 54.85.159.138 y el puerto 8888 anotados para introducirlos en el dispositivo
- Acceso administrativo a Plaspy para confirmar que el dispositivo llega a su cuenta y ajustar parámetros de reporte o geocercas según sea necesario

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado, el V55 envía su posicionamiento y telemetría de apoyo a Plaspy para que los operadores puedan ver ubicaciones en tiempo real, recorridos históricos y recibir alertas.

- El V55 reporta las posiciones GNSS además de fijaciones asistidas por Wi‑Fi y LBS al endpoint compartido de Plaspy
- Los datos se envían a d.plaspy.com (o 54.85.159.138) en el puerto 8888 usando el transporte seleccionado UDP o TCP
- Plaspy ingiere los mensajes entrantes y detecta automáticamente el protocolo del rastreador para su parseo
- Una vez visible en Plaspy, el dispositivo proporciona actualizaciones de ubicación en tiempo real, reporte de eventos y reproducción en la plataforma
- Las alertas configurables en Plaspy (movimiento, geocerca, etc.) se activan a partir de los reportes que el V55 entrega al servidor compartido

## Flujo típico de configuración

Siga esta secuencia práctica al comisionar un V55 para Plaspy. Los pasos exactos pueden variar ligeramente según la herramienta del fabricante o el firmware de su dispositivo.

1. Acceda al método oficial de configuración Reachfar apropiado para el V55 (herramienta de escritorio del fabricante, app móvil o conjunto de comandos SMS).
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o, si la herramienta de configuración requiere una IP, introduzca 54.85.159.138.
3. Configure el puerto de destino en 8888, que Plaspy utiliza para todos los dispositivos compatibles.
4. Seleccione UDP o TCP como tipo de transporte si el dispositivo exige elegir uno.
5. Configure cualquier APN o ajustes de red celular requeridos para que el dispositivo pueda alcanzar Plaspy a través de la conexión de datos móviles.
6. Aplique o guarde la configuración y, si el dispositivo lo requiere, reinicie el V55 para que entren en vigor los nuevos ajustes de red.
7. Valide que el dispositivo reporte en Plaspy revisando las primeras actualizaciones de posición y el estado en su cuenta Plaspy.

## Ejemplos de comandos de configuración

El V55 puede configurarse usando las herramientas Reachfar o el conjunto de comandos del proveedor. Los comandos exactos y la sintaxis varían según el firmware y la utilidad del fabricante; Reachfar proporciona la documentación definitiva de comandos. Dado que los comandos y utilidades del fabricante difieren entre versiones de firmware, consulte el manual del V55 o la guía de configuración de Reachfar para cadenas de comandos y ejemplos exactos.

Si utiliza SMS o una herramienta de configuración del fabricante, siga los ejemplos oficiales de Reachfar para establecer servidor, puerto, transporte y valores de APN. Conserve marcadores de posición como [apn] o similares según sea necesario y sustituya por el APN, usuario y contraseña de su operador cuando proceda.

## Notas de configuración

- Las diferencias de firmware importan: los nombres de menú y la sintaxis de comandos exactos dependen de la revisión de firmware del V55 y de la utilidad de configuración proporcionada por Reachfar.
- La elección de transporte UDP frente a TCP puede afectar características de entrega; elija el transporte recomendado por su instalador o por la documentación de Reachfar, y tenga en cuenta que Plaspy acepta ambos siempre que el dispositivo apunte al endpoint y puerto de Plaspy.
- Use el mismo puerto Plaspy 8888 para todos los dispositivos para simplificar reglas de firewall y mantener la consistencia en la ingestión de la plataforma.
- Si configura el dispositivo por SMS, conserve un registro de los comandos enviados y las respuestas recibidas para facilitar la resolución de problemas.
- Siempre verifique las credenciales APN y de red con el operador móvil para asegurar que el V55 pueda alcanzar d.plaspy.com o 54.85.159.138 desde la ubicación de instalación.

## Por qué usar Plaspy con esta configuración

Configurar el Reachfar V55 para reportar a Plaspy ofrece un camino sencillo hacia la visibilidad en tiempo real, la reproducción histórica y alertas basadas en eventos para la supervisión de flotas y activos. La localización híbrida del V55 y su diseño robusto complementan la ingestión centralizada de Plaspy, permitiendo a los operadores monitorear dispositivos en entornos urbanos y remotos.

Para conocer más sobre Plaspy y cómo la plataforma puede apoyar sus flujos de trabajo de flota o activos visite https://www.plaspy.com. Para los pasos de configuración más recientes por dispositivo, sintaxis de comandos, notas de firmware e instrucciones de instalación verifique la documentación del V55 en el sitio de Reachfar en https://www.reachfargps.com/ ya que las especificaciones del fabricante y los métodos de configuración pueden cambiar con el tiempo.

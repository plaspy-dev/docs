---
slug: /gotop/g01/configuration
id: g01-configuration
sidebar_label: Configuration
title: GOTOP - G01 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del GOTOP G01 para usar con Plaspy y ajustes de servidor compartido
keywords:
- configuración GOTOP G01
- instalación GOTOP G01
- configuración de servidor GOTOP G01
- configuración de rastreador Plaspy
- configuración de servidor Plaspy
- configuración de rastreador GPS
- configuración de seguimiento de vehículos
- rastreador para gestión de flotas
- compatibilidad rastreador GOTOP
- configuración GPS G01
---

# GOTOP - G01 Configuración

Esta página explica el contexto de configuración pública para usar el rastreador GOTOP G01 con la plataforma Plaspy. Reúne los ajustes de servidor públicos y las indicaciones prácticas necesarias para apuntar un G01 a Plaspy y verificar que reporte correctamente, sin sustituir la documentación oficial del fabricante.

Plaspy utiliza ajustes de servidor compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Utilice las indicaciones aquí para preparar el dispositivo para la ingestión en Plaspy y confirme siempre los comandos y procedimientos específicos del G01 con la documentación oficial de GOTOP.

## Resumen de la configuración

Esta configuración prepara el G01 para enviar ubicación y telemetría del vehículo a Plaspy, haciendo que los dispositivos sean visibles en la plataforma para monitoreo en tiempo real, alertas e informes.

- Configure el G01 para que apunte al endpoint y puerto compartidos de Plaspy y así establezca el reporte hacia la plataforma.
- Ajuste el transporte (UDP o TCP) en el dispositivo si es necesario; Plaspy soporta ambos y detectará automáticamente el protocolo del rastreador.
- Valide la conectividad y la telemetría confirmando que el dispositivo aparece en Plaspy y envía eventos esperados como ACC, SOS o estado de alimentación.
- Guarde y aplique la configuración en el rastreador y, si es necesario, reinicie la unidad para comenzar sesiones de reporte nuevas.
- Use el método de configuración oficial de GOTOP o una herramienta del proveedor compatible para evitar problemas específicos de firmware.

## Ajustes de servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP; configure el rastreador para cualquiera de los dos si el dispositivo requiere selección
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta
- Tenga en cuenta que todos los dispositivos en Plaspy usan el mismo puerto para el reporte

## Requisitos típicos antes de configurar

- Acceso físico a la unidad G01 y un lugar seguro para aplicar o cambiar ajustes
- Tarjeta SIM válida instalada con datos o SMS habilitado según lo requiera la configuración del fabricante
- Acceso al método de configuración oficial de GOTOP como el software del proveedor, el conjunto de comandos SMS o la interfaz serial/UART según el empaquetado del dispositivo
- Batería suficiente o alimentación del vehículo para que el dispositivo complete la configuración y se conecte a la red
- Una cuenta o despliegue en Plaspy preparado para recibir y validar las conexiones de los dispositivos
- Conocimientos básicos para seleccionar UDP o TCP en el dispositivo si se requiere elegir el transporte

## Cómo se conecta este rastreador a Plaspy

Al configurarse, el G01 transmite posiciones GNSS y telemetría del vehículo por GSM al endpoint de ingestión de Plaspy, de modo que los responsables de flota reciban actualizaciones en vivo y alertas en los paneles de Plaspy.

- El rastreador se configura para reportar al endpoint compartido de Plaspy (d.plaspy.com o 54.85.159.138) usando el puerto 8888
- El transporte puede ser UDP o TCP según la configuración del equipo; Plaspy soporta ambos y detectará el protocolo automáticamente
- Las localizaciones, estado de ACC, SOS, pérdida de alimentación y otras entradas compatibles se reenvían a Plaspy para mapeo y alertas
- Plaspy recibe los mensajes entrantes y los pone a disposición para monitoreo en tiempo real, historial y flujos de eventos

## Flujo de trabajo típico de configuración

1. Acceda al método o software de configuración oficial de GOTOP recomendado para el G01 (comandos SMS, herramienta del proveedor o interfaz serial/UART).
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP 54.85.159.138 en los ajustes de servidor/centro del dispositivo.
3. Configure el puerto de reporte del dispositivo en 8888, que es el puerto compartido de Plaspy para todos los dispositivos.
4. Seleccione UDP o TCP en el rastreador si el equipo exige elegir el transporte.
5. Aplique o guarde la configuración usando la herramienta o el conjunto de comandos del fabricante.
6. Reinicie el dispositivo si el firmware o la guía del proveedor lo requieren para iniciar un registro nuevo.
7. Valide que el dispositivo reporta a Plaspy comprobando la plataforma Plaspy en busca de mensajes entrantes o actualizaciones de estado del dispositivo.

## Ejemplos de comandos de configuración

El conjunto exacto de comandos para configurar un GOTOP G01 depende del firmware y de la interfaz proporcionada por el fabricante. Debido a que los comandos del fabricante varían, esta página no incluye comandos SMS o seriales específicos del dispositivo. Utilice la guía de configuración de GOTOP o el software del proveedor para realizar los cambios en servidor, puerto y transporte indicados arriba.

Si dispone de una referencia de comandos del fabricante, aplique los valores públicos de Plaspy al configurar el servidor y el puerto:
- Servidor: d.plaspy.com o 54.85.159.138
- Puerto: 8888
- Transporte: UDP o TCP (según se requiera)

Conserve los marcadores de posición en los ejemplos del fabricante (por ejemplo un placeholder de APN como {{apn}}) y reemplácelos con los datos de su proveedor de SIM cuando la documentación de GOTOP lo indique.

## Notas sobre la configuración

- El comportamiento y los comandos exactos pueden diferir entre revisiones de firmware y lotes de hardware del G01; consulte la documentación de GOTOP para la sintaxis específica según firmware.
- TCP vs UDP: elija el transporte requerido por su herramienta de instalación o el entorno de red; Plaspy soporta ambos y detectará el protocolo al conectarse.
- Todos los dispositivos de Plaspy usan el mismo puerto (8888), por lo que múltiples tipos de dispositivos comparten el mismo punto de entrada de la plataforma.
- Si utiliza configuración por SMS o una interfaz serial/UART, respete los tiempos y el formato de comandos del fabricante para evitar escrituras parciales.
- Mantenga un registro de los ajustes aplicados y la versión de firmware al desplegar dispositivos para que los problemas de campo se puedan correlacionar con el historial de configuración.

## Por qué usar Plaspy con esta configuración

Configurar el GOTOP G01 para reportar a Plaspy ofrece un camino sencillo para integrar la ubicación del vehículo, eventos de encendido y alarmas en una única plataforma de gestión de flotas. Para organizaciones que requieren visibilidad operativa, alertas basadas en eventos e informes centralizados, usar el G01 con Plaspy permite monitoreo en tiempo real y flujos de trabajo accionables vinculados a entradas del vehículo como ACC, SOS y controles de inmovilizador.

Para saber más sobre Plaspy y ver las características de la plataforma visite https://www.plaspy.com. Las especificaciones del fabricante y los métodos de configuración pueden cambiar con el tiempo; verifique los detalles más recientes de configuración y el comportamiento del firmware del dispositivo con GOTOP en https://www.gotop.cc/.

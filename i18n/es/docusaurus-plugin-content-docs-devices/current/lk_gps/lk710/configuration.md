---
slug: /lk_gps/lk710/configuration
id: lk710-configuration
sidebar_label: Configuration
title: LK-GPS - LK710 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del LK-GPS LK710 con Plaspy, ajustes de servidor y pasos prácticos para seguimiento confiable
keywords:
  - Configuración LK GPS LK710
  - Instalación LK GPS LK710
  - Configuración LK710 en Plaspy
  - Configuración de rastreador LK GPS
  - Configuración de servidor LK710
  - Configuración de seguimiento de flotas LK GPS
  - Guía del rastreador LK710
  - Configuración de rastreador Plaspy
  - Rastreador de vehículo LK710
  - Manual LK GPS LK710
---

# LK-GPS - LK710 Configuración

Esta página aborda el contexto público de configuración para usar el rastreador LK-GPS LK710 con Plaspy. Resume los ajustes de servidor compartidos y los pasos prácticos que normalmente realizará para apuntar un LK710 a Plaspy, con el fin de habilitar seguimiento en tiempo real, telemetría y control remoto de inmovilizador. Utilice esta guía junto con la documentación de LK-GPS y sus herramientas de instalación para completar la puesta en marcha del dispositivo.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos concretos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El LK710 admite configuración por GSM/GPRS y por SMS, y está diseñado para integrarse de forma sencilla en plataformas en la nube como Plaspy cuando se configura para reportar al endpoint del servidor de la plataforma.

## Resumen de la configuración

Este proceso prepara el LK710 para comunicarse de forma fiable con Plaspy, de modo que las actualizaciones de ubicación, la telemetría de batería y los eventos del inmovilizador sean visibles en la plataforma. Los pasos siguientes se centran en la configuración del endpoint de red, la selección del transporte y la validación básica de que el rastreador está reportando correctamente.

- Configure el endpoint de reporte del dispositivo para que apunte a Plaspy y el equipo envíe GPS y telemetría a la plataforma.
- Seleccione el protocolo de transporte que el dispositivo soporte y configure el puerto 8888 para coincidir con los ajustes de Plaspy.
- Valide la conectividad celular y la sesión de datos para que el rastreador pueda alcanzar el endpoint del servidor Plaspy.
- Guarde y aplique los ajustes en el rastreador, luego verifique que el dispositivo aparezca en Plaspy y esté enviando actualizaciones periódicas.
- Use SMS o la herramienta del fabricante como canal alterno para comprobaciones de estado cuando GPRS no esté disponible.

## Ajustes del servidor Plaspy

Al configurar el LK710 para su uso con Plaspy, utilice exactamente los siguientes ajustes públicos de servidor:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: soporte para UDP o TCP según los requisitos del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador y usa el mismo puerto para todos los dispositivos compatibles

Use el dominio d.plaspy.com o la IP directa 54.85.159.138 al ingresar la información del servidor en la herramienta de configuración del LK710. Todos los dispositivos en Plaspy usan el mismo puerto y la plataforma detectará automáticamente los detalles del protocolo que envíe el rastreador.

## Requisitos típicos antes de la configuración

- Asegúrese de que el LK710 tenga la batería interna cargada o esté conectado a una fuente de alimentación vehicular adecuada.
- Instale y active una tarjeta SIM con capacidad de datos, con suficiente saldo o plan de datos y cobertura de red adecuada para la zona de despliegue.
- Confirme que tiene acceso a la herramienta de configuración oficial de LK-GPS o al conjunto de comandos SMS que use el proveedor del equipo.
- Verifique la conectividad celular y que las sesiones de datos GPRS sean posibles desde la ubicación del dispositivo.
- Tenga a mano información básica del equipo, como el identificador del dispositivo o IMEI, si su plataforma o herramientas de instalación lo requieren.
- Prepare los valores del servidor de Plaspy d.plaspy.com o 54.85.159.138 y el puerto 8888 antes de comenzar la configuración.

## Cómo se conecta este rastreador a Plaspy

El LK710 envía posiciones GPS y telemetría del dispositivo a través del enlace de datos celulares al endpoint del servidor Plaspy para que la plataforma muestre la ubicación en vivo, el historial y genere alertas. El reporte se configura apuntando a Plaspy usando el servidor y puerto compartidos, y Plaspy detectará automáticamente el protocolo del dispositivo cuando lleguen los mensajes.

- El rastreador se configura para reportar al endpoint compartido de Plaspy d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El transporte puede ser UDP o TCP según el firmware o la herramienta de configuración; escoja el transporte que el equipo soporte.
- Las actualizaciones de ubicación y la telemetría, como el nivel de batería y los disparadores de eventos, se reenvían a Plaspy para su visualización en el mapa y para el procesamiento de reglas.
- Si GPRS no está disponible, las consultas y comandos por SMS pueden utilizarse para comprobaciones críticas de estado y control remoto.
- Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que no es necesario mapear puertos por plataforma.

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración oficial del fabricante LK-GPS o al software documentado para el LK710, o prepare los comandos SMS de configuración que su unidad soporte.
2. En los ajustes de servidor del dispositivo, ingrese el dominio de Plaspy d.plaspy.com o la IP del servidor 54.85.159.138.
3. Configure el puerto de destino en 8888 para que coincida con el puerto requerido por Plaspy para todos los dispositivos.
4. Elija UDP o TCP si el dispositivo exige selección explícita del transporte.
5. Aplique o guarde la configuración en la herramienta del fabricante o envíe los comandos de configuración por SMS al dispositivo.
6. Reinicie el equipo si las instrucciones del fabricante lo requieren, para que los nuevos ajustes de red entren en vigor.
7. Valide que el LK710 reporte a Plaspy verificando la presencia del dispositivo en la plataforma y confirmando que llegan actualizaciones periódicas.

## Comandos de configuración de ejemplo

No se proporcionan comandos públicos específicos del LK710 en esta página. Los comandos exactos y la sintaxis varían según el firmware de LK-GPS, las herramientas del distribuidor y las versiones de los comandos SMS. Las herramientas típicas del fabricante le permiten ingresar el dominio o la IP del servidor y el puerto 8888 directamente, o bien puede enviar comandos SMS de configuración para establecer el servidor GPRS, el transporte y el APN. Consulte el manual oficial de configuración de LK-GPS o a su proveedor de dispositivos para el conjunto exacto de comandos y ejemplos.

Al usar comandos SMS proporcionados por el fabricante, en general deberá apuntar el equipo a d.plaspy.com o 54.85.159.138 y establecer el puerto 8888. Conserve los valores de marcador de posición de los ejemplos del fabricante como {{apn}}, {{apnu}} o {{apnp}} y reemplácelos por los parámetros APN de su operador móvil según lo indique la documentación de LK-GPS.

## Notas de configuración

- Las diferencias de firmware pueden cambiar las etiquetas de menú y la sintaxis de los comandos SMS; confirme siempre la versión de firmware y consulte el manual correspondiente.
- Elija UDP o TCP según las opciones del firmware del equipo y los requisitos de la instalación; Plaspy aceptará cualquiera de los dos en el puerto 8888.
- La configuración y consulta por SMS son útiles como respaldo cuando GPRS está restringido o durante la configuración inicial en zonas de baja cobertura.
- Pruebe la conectividad después de la configuración verificando que el dispositivo aparece y envía actualizaciones a Plaspy en d.plaspy.com o 54.85.159.138 usando el puerto 8888.
- Las prácticas del instalador y las personalizaciones OEM pueden alterar dónde y cómo se ingresan los ajustes de red; coordine con el proveedor del equipo cuando sea necesario.

## Por qué usar Plaspy con esta configuración

Usar el LK710 con Plaspy ofrece un camino sencillo hacia la visibilidad centralizada de vehículos y activos. Apuntar el LK710 al endpoint compartido de Plaspy permite que la ubicación en tiempo real, la telemetría de batería y el estado se agreguen en una sola plataforma para mapas, alertas y monitoreo operativo. El diseño compacto y resistente al agua del LK710 y su capacidad de inmovilizador remoto lo hacen adecuado para flotas, alquileres y flujos de trabajo antirobo que se benefician del manejo de eventos y los informes de Plaspy.

Para obtener más información sobre Plaspy visite https://www.plaspy.com y revise los detalles de dispositivos LK-GPS en https://www.lk-gps.com para conocer los procedimientos de configuración específicos del modelo más actuales. Las especificaciones del fabricante, los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo, por lo que siempre verifique la información más reciente de configuración del dispositivo en el sitio oficial de LK-GPS.

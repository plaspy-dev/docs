---
slug: /gotop/s7/configuration
id: s7-configuration
sidebar_label: Configuration
title: GOTOP - S7 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del rastreador GOTOP S7 para conectar con Plaspy, ajustes de servidor, flujo de instalación y consejos para seguimiento en vivo
keywords:
  - GOTOP S7 configuración
  - GOTOP S7 instalación
  - GOTOP S7 Plaspy
  - GOTOP S7 configuración servidor
  - GOTOP S7 rastreador GPS
  - GOTOP S7 seguimiento de flotas
  - Configuración rastreador Plaspy
  - Configuración servidor Plaspy
  - Configuración rastreador de vehículos
  - Guía de configuración rastreador GPS
---

# GOTOP - S7 Configuración

Esta página ofrece el contexto público de configuración para usar el rastreador impermeable GOTOP S7 con Plaspy. Cubre los ajustes públicos del servidor Plaspy a los que debe apuntar el dispositivo, el flujo de configuración típico y consideraciones prácticas basadas en la descripción del producto S7 y sus capacidades públicas.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante para el S7 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que esta página se centra en los elementos públicos y consistentes necesarios para conectar el S7 a la plataforma Plaspy.

## Resumen de la configuración

El objetivo de la configuración es preparar el S7 para que envíe de forma confiable ubicación y telemetría a Plaspy y sea visible en la plataforma. El módem celular y el GNSS del S7 suministran datos de posición y sensores en tiempo real que Plaspy procesa para mapas en vivo, alertas e informes históricos. Utilice los ajustes compartidos de servidor Plaspy que aparecen más abajo, confirme la conectividad de red y valide los reportes una vez configurado el dispositivo.

- Apunte el S7 al endpoint del servidor Plaspy para que los paquetes de datos lleguen a Plaspy.
- Configure el transporte y el puerto para que el dispositivo pueda abrir sesión con el endpoint de Plaspy.
- Verifique que el dispositivo tenga una conexión de datos celulares activa y el APN correcto si es necesario.
- Guarde y aplique la configuración en el S7, luego confirme que el dispositivo aparece en Plaspy.
- Valide en Plaspy eventos como encendido, consumo de combustible y telemetría proveniente de RS232 en los informes y paneles.

## Ajustes del servidor Plaspy

Use los siguientes valores públicos del endpoint de Plaspy al configurar el S7. Plaspy requiere el mismo puerto para todos los dispositivos soportados y detectará automáticamente el protocolo del rastreador:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

## Requisitos típicos antes de la configuración

- Confirme que el S7 tenga una fuente de alimentación estable y esté cableado según la guía del fabricante.
- Instale una SIM de datos celulares válida con servicio de datos activo compatible con redes 4G/2G.
- Tenga acceso al método oficial de configuración GOTOP para el S7 (herramienta web, comandos SMS o app del fabricante según aplique).
- Conozca el APN del dispositivo y cualquier dato de autenticación de la SIM si la red lo requiere.
- Asegúrese de tener acceso a una cuenta de Plaspy o a la plataforma para verificar los reportes del dispositivo después de la configuración.
- Mantenga disponible la información de versión de firmware y revisión de hardware por si la guía del proveedor varía según la versión.

## Cómo este rastreador se conecta a Plaspy

El S7 envía telemetría y datos de posicionamiento a través de su módem celular al endpoint y puerto del servidor Plaspy. Una vez configurado con el servidor compartido de Plaspy, los reportes del S7 son procesados por Plaspy y aparecen como actualizaciones de ubicación en vivo, eventos y registros históricos.

- El S7 reporta coordenadas GPS e información de fix GNSS a d.plaspy.com en el puerto 8888.
- Los eventos de encendido y ACC provenientes de la entrada digital se transmiten a Plaspy para el registro de viajes.
- Las lecturas analógicas y el estado de combustible se envían a Plaspy para telemetría y paneles de monitoreo de combustible.
- Los datos provenientes de RS232 (para periféricos conectados) se reenvían a Plaspy cuando se configura su envío.
- Plaspy utiliza el mismo puerto para todos los dispositivos y detecta automáticamente el protocolo, por lo que no es necesario seleccionar un tipo de protocolo en la plataforma.

## Flujo de configuración común

1. Acceda al método o software oficial de configuración del GOTOP S7 proporcionado por el fabricante.
2. En los ajustes de servidor del dispositivo, ingrese d.plaspy.com o, si la herramienta lo exige, la IP del servidor 54.85.159.138.
3. Establezca el puerto del servidor en 8888 (Plaspy utiliza el mismo puerto para todos los dispositivos).
4. Elija UDP o TCP como transporte si el dispositivo solicita seleccionar uno.
5. Ingrese el APN requerido o la configuración de red de la SIM instalada y guarde la configuración.
6. Aplique o guarde los cambios y reinicie el S7 si las instrucciones del fabricante indican que es necesario.
7. Verifique que el dispositivo reporte a Plaspy comprobando el estado y la ubicación en la plataforma Plaspy.

## Ejemplos de comandos de configuración

El S7 puede configurarse usando herramientas proporcionadas por el fabricante, conjuntos de comandos por SMS o software de configuración según el firmware y las herramientas del proveedor. La sintaxis exacta de los comandos y los canales de configuración disponibles varían según la revisión de firmware y las herramientas de aprovisionamiento del proveedor. Consulte la documentación de GOTOP o la interfaz de configuración suministrada con el dispositivo para los comandos y ejemplos precisos.

Si recibe un listado de comandos por SMS o CLI de GOTOP para la configuración del servidor, la secuencia normalmente incluirá establecer el dominio o la IP del servidor, el puerto, la selección de transporte (UDP o TCP) y los parámetros APN. Preserve cualquier marcador de posición provisto por el fabricante para valores y credenciales del APN al aplicar la configuración.

## Notas de configuración

- Las variaciones de firmware pueden cambiar los pasos exactos de configuración o la sintaxis disponible de los comandos. Siempre anote la versión de firmware antes de realizar cambios.
- TCP y UDP funcionan con Plaspy en el puerto 8888; UDP suele usarse por menor overhead, mientras que TCP puede elegirse por mayor fiabilidad de sesión según el soporte del dispositivo.
- El APN y la autenticación de la red de la SIM deben ser correctos para que el S7 establezca una conexión de datos; confirme estos valores con su operador móvil.
- Utilice la herramienta de configuración oficial GOTOP o el conjunto de comandos SMS documentado para el S7 para evitar errores en la configuración.
- Si depende de periféricos RS232, valide el cableado de los periféricos y los ajustes seriales según la guía de GOTOP antes de habilitar el reenvío RS232 a Plaspy.

## Por qué usar Plaspy con esta configuración

Combinar el GOTOP S7 con Plaspy permite una visibilidad centralizada de vehículos y activos mediante ubicación en vivo, eventos de encendido, telemetría de combustible y datos de periféricos. Para gestores de flotas y activos, esta combinación facilita el monitoreo operativo, alertas basadas en eventos e informes históricos que ayudan a mejorar la seguridad de los activos y la eficiencia operativa.

Para obtener más información sobre Plaspy e integración de dispositivos compatibles, visite https://www.plaspy.com. Las especificaciones del fabricante y los métodos de configuración pueden cambiar con el tiempo; confirme las instrucciones específicas del dispositivo y los detalles de firmware en el sitio oficial de GOTOP https://www.gotop.cc/ antes de desplegar a gran escala.

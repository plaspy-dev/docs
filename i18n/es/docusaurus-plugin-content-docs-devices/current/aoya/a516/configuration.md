---
slug: /aoya/a516/configuration
id: a516-configuration
sidebar_label: Configuration
title: AoYa - A516 Configuration
sidebar_class_name: menu_item_tracker
description: Configure el rastreador AoYa A516 para usar con Plaspy mediante ajustes de servidor público y flujo de instalación
keywords:
  - Configuración AoYa A516
  - Instalación AoYa A516
  - Configuración servidor AoYa A516
  - Configuración rastreador AoYa GPS
  - Configuración rastreador Plaspy
  - Configuración rastreo vehicular
  - Configuración plataforma A516 GPS
  - Configuración software seguimiento A516
  - Guía integración rastreador GPS
  - Configuración dispositivo de rastreo
---

# AoYa - Configuración A516

Esta página describe el contexto de configuración público para usar el rastreador GPS AoYa A516 con la plataforma Plaspy. Explica los valores de servidor compartidos que debe aplicar y ofrece un flujo de trabajo general para preparar el equipo y que reporte a Plaspy. La orientación se basa en las características públicas del dispositivo y en los métodos de configuración del fabricante, y pretende facilitar la integración del A516 con Plaspy para visibilidad y monitoreo.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El A516 es un rastreador compacto GSM/GPRS con batería reemplazable y admite métodos de configuración del fabricante como SMS o software del proveedor; este documento resume los pasos públicos necesarios para apuntar el rastreador a Plaspy sin reproducir sintaxis de comandos específicas del dispositivo.

## Resumen de configuración

El objetivo de la configuración es preparar el AoYa A516 para comunicarse de forma confiable con Plaspy y aparecer como un dispositivo activo en la plataforma. Esto implica aplicar los valores del servidor de Plaspy, asegurar la conectividad de red y validar que el rastreador informe correctamente.

- Configure el rastreador para que use el endpoint del servidor de Plaspy y así los datos de ubicación se envíen a la plataforma.
- Ajuste el transporte y el puerto para que el dispositivo pueda establecer conexión con Plaspy.
- Verifique que el dispositivo tenga conectividad de la red móvil válida y que el APN requerido esté aplicado.
- Valide la conectividad y la visibilidad del dispositivo en Plaspy para que el rastreo y la supervisión puedan comenzar.
- Utilice el método de configuración del fabricante para aplicar los ajustes y confirme que el dispositivo los acepta.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol when the device connects

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles y determinará automáticamente el protocolo según la conexión entrante.

## Requisitos habituales antes de la instalación

- Un AoYa A516 alimentado y operativo con batería cargada o instalada.
- Una SIM activa y cobertura de red móvil compatible con las capacidades GSM GPRS del dispositivo.
- Acceso al método o software de configuración del fabricante (por ejemplo configuración por SMS o la herramienta del proveedor).
- Conocimiento del APN del operador para permitir que el dispositivo use servicios de datos.
- Una cuenta en Plaspy o acceso a la plataforma para verificar el registro y el reporte del dispositivo después de la configuración.

## Cómo se conecta este rastreador a Plaspy

El AoYa A516 se configura para enviar información de posición y estado a un endpoint de servidor central. Cuando se apunta a Plaspy, el rastreador transmite actualizaciones que Plaspy recibe, parsea y muestra en la plataforma.

- El rastreador se configura para reportar al endpoint y puerto compartidos de Plaspy indicados arriba.
- Los mensajes del dispositivo llegan al servidor de Plaspy donde la plataforma detecta e interpreta automáticamente el protocolo del rastreador.
- Una vez que el reporte está activo, Plaspy muestra ubicación, estado de conectividad y eventos del dispositivo.
- El transporte puede ser UDP o TCP según la configuración del equipo; seleccione el transporte compatible con el dispositivo y el operador.
- Verificaciones periódicas en la interfaz de Plaspy confirman la comunicación exitosa y el monitoreo continuo.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración del fabricante o al software para el AoYa A516 (por ejemplo la configuración por SMS del proveedor o una utilidad de configuración).
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en el campo de servidor o "GPRS server".
3. Configure el puerto del servidor en 8888 como puerto de destino para los reportes del rastreador.
4. Si el dispositivo requiere seleccionar transporte, elija UDP o TCP según la capacidad del equipo y las condiciones de la red.
5. Guarde o aplique la configuración en el rastreador y asegúrese de que los ajustes de APN del operador y la conectividad estén configurados correctamente.
6. Valide que el dispositivo reporte a Plaspy y aparezca en línea en la plataforma, ajustando parámetros si es necesario.

## Notas de configuración

- El firmware del fabricante y las interfaces de las herramientas pueden variar por región y revisión; las pantallas exactas o la sintaxis de comandos pueden diferir.
- El A516 soporta configuración vía SMS según la documentación pública; si usa SMS para configurar el equipo, resuma los parámetros necesarios en lugar de reproducir la sintaxis de comandos.
- TCP y UDP se comportan de manera distinta en redes móviles; seleccione el transporte que funcione mejor con su operador y el entorno de instalación.
- Plaspy usa el mismo puerto para todos los dispositivos y realiza la detección automática del protocolo, por lo que debe centrarse en asegurar que la dirección de servidor y el puerto sean correctos.
- Confirme siempre el APN y la conectividad de red antes de investigar problemas en el servidor.

## Por qué usar Plaspy con esta configuración

Utilizar el AoYa A516 con Plaspy ofrece una vía sencilla para obtener visibilidad de vehículos y activos al dirigir el rastreador a una plataforma central que parsea los mensajes entrantes y los presenta en una sola interfaz. Esta configuración ayuda a las organizaciones a monitorear ubicaciones, gestionar flotas y recibir actualizaciones de estado sin necesidad de alojar servidores específicos para cada dispositivo.

Para conocer más sobre Plaspy y cómo puede gestionar dispositivos como el AoYa A516 visite https://www.plaspy.com. Para los métodos de configuración específicos más actuales, el comportamiento del firmware y detalles del fabricante, verifique la documentación oficial de AoYa en http://www.aoyagps.com/

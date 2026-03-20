---
slug: /genx_mobile/gnx_5p/configuration
id: gnx_5p-configuration
sidebar_label: Configuration
title: GenX Mobile - GNX-5P Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del GenX Mobile GNX-5P para Plaspy, con ajustes de servidor compartido y pasos prácticos de instalación
keywords:
  - Configuración GenX Mobile GNX-5P
  - Instalación GenX Mobile GNX-5P
  - Configuración GNX-5P Plaspy
  - Configuración servidor GNX-5P
  - Configuración GPS Plaspy
  - Configuración seguimiento vehicular
  - Seguimiento de flotas GNX-5P
  - Guía configuración rastreador GPS
  - Guía de configuración GenX Mobile
  - Configuración protocolo de rastreador
---

# GenX Mobile - GNX-5P Configuración

Esta página describe el contexto público de configuración para usar el GenX Mobile GNX-5P con Plaspy. Explica los ajustes del servidor compartido que requiere Plaspy, los pasos prácticos para apuntar el GNX-5P al endpoint de Plaspy y las comprobaciones habituales para confirmar que el dispositivo es visible en la plataforma. La guía se basa en las configuraciones públicas de Plaspy y en buenas prácticas generales; no sustituye la documentación del fabricante.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando los dispositivos reportan a la plataforma. Los pasos exactos en el lado del fabricante para el GNX-5P pueden variar según la revisión de firmware, la variante de hardware, el tipo de instalación y las herramientas del proveedor, por lo que siempre verifique cualquier comando o procedimiento con la documentación oficial de GenX Mobile cuando sea necesario.

## Resumen de la configuración

Configurar el GNX-5P para Plaspy significa preparar el dispositivo para enviar su localización y datos de eventos al endpoint del servidor compartido de Plaspy y confirmar que el dispositivo aparece en la plataforma. El proceso es directo y orientado a la práctica.

- Apuntar la configuración de red del GNX-5P al endpoint del servidor de Plaspy para que la ubicación y la telemetría se dirijan a Plaspy
- Seleccionar el modo de transporte soportado por el dispositivo y por Plaspy: UDP o TCP en el puerto compartido
- Aplicar y guardar los ajustes en el dispositivo y realizar los reinicios necesarios para activar la configuración
- Validar la conectividad y la visibilidad en Plaspy para garantizar que el rastreador está siendo monitoreado activamente
- Mantener el firmware y las herramientas de configuración actualizadas para evitar discrepancias por revisiones del dispositivo

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support UDP or TCP on port 8888 depending on device preference  
- Plaspy automatically detects the tracker protocol when the device connects  
Note that all devices in Plaspy use the same port so the GNX-5P should be configured to use port 8888 for compatibility

## Requisitos típicos antes de la configuración

- Un dispositivo GNX-5P instalado o accesible para configuración y pruebas  
- Fuente de alimentación o energía del vehículo aplicada al dispositivo para realizar la configuración en vivo y los reinicios  
- Conectividad celular activa adecuada para operación HSPA y una SIM activa si el dispositivo la requiere para el reporte de datos  
- Acceso al método o software oficial de configuración de GenX Mobile para este modelo  
- Un medio para ver registros o respuestas del dispositivo durante la configuración, como una herramienta del fabricante o una interfaz serial/depuración si está disponible  
- Una cuenta en Plaspy o acceso a la plataforma para confirmar que el dispositivo está reportando después de la configuración

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el GNX-5P envía sus datos de localización y eventos al endpoint de Plaspy para que el dispositivo sea visible y gestionable en la plataforma de Plaspy. Plaspy recibe la conexión en un puerto compartido y determina automáticamente el protocolo del dispositivo.

- El dispositivo se configura para reportar a d.plaspy.com o al endpoint numérico 54.85.159.138  
- Todas las comunicaciones se envían al puerto 8888, que Plaspy utiliza para los dispositivos soportados  
- El transporte puede ser UDP o TCP según lo que permita el firmware y las herramientas del GNX-5P y la elección del instalador  
- Plaspy detecta automáticamente el protocolo del rastreador para aplicar el parseo y procesamiento correctos después de la conexión  
- Una vez establecido el reporte, Plaspy muestra la posición del dispositivo, su estado y los eventos según las capacidades de la plataforma

## Flujo típico de configuración

1. Acceda al método o software oficial de configuración de GenX Mobile para el GNX-5P (interfaz web del fabricante, herramienta de configuración o procedimiento documentado por SMS/consola).  
2. Ingrese la dirección del servidor de Plaspy usando d.plaspy.com o 54.85.159.138 como endpoint de reporte.  
3. Configure el puerto de reporte del dispositivo a 8888, que es el puerto estándar de Plaspy para todos los dispositivos.  
4. Seleccione UDP o TCP si el GNX-5P solicita elegir el transporte y guarde esa opción.  
5. Aplique o guarde la configuración en la herramienta o interfaz del dispositivo.  
6. Reinicie el GNX-5P si las instrucciones del fabricante requieren un reboot para aplicar los ajustes de red.  
7. Valide que el dispositivo reporta a Plaspy comprobando la actividad en la plataforma y confirmando que el dispositivo aparece como en línea.

## Ejemplos de comandos de configuración

El GNX-5P permite configurarse usando las herramientas y métodos proporcionados por GenX Mobile. Los comandos exactos y la sintaxis varían según el firmware y la herramienta del proveedor, por lo que no se incluyen comandos universales aquí. Use la utilidad de configuración oficial de GenX Mobile o el método de instalación documentado para ingresar el dominio del servidor Plaspy d.plaspy.com o 54.85.159.138 y establecer el puerto 8888. Si su proveedor facilita comandos por línea de comandos o por SMS, siga su sintaxis exacta y conserve los marcadores de posición que indiquen.

## Notas de configuración

- Las diferencias de firmware entre revisiones del GNX-5P pueden cambiar la disposición de los menús y las opciones de protocolo disponibles; verifique la versión de firmware antes de seguir los pasos.  
- Elija UDP o TCP según su red y la preferencia del instalador; Plaspy acepta ambos y detectará el protocolo al conectarse.  
- Dado que Plaspy utiliza el mismo puerto para todos los dispositivos, asegúrese de que el puerto 8888 sea accesible desde la red del dispositivo y no esté bloqueado por cortafuegos intermedios.  
- Las herramientas del fabricante son la fuente autorizada para los comandos y las secuencias de configuración del GNX-5P; consulte los recursos de GenX Mobile para instrucciones específicas del dispositivo.  
- Tras la configuración inicial, valide el reporte en Plaspy como paso final para confirmar que la telemetría y los datos de ubicación están llegando y siendo parseados correctamente.

## Por qué usar Plaspy con esta configuración

Usar el GNX-5P con Plaspy ofrece una vía sencilla para centralizar el rastreo y la visibilidad operativa. Configurar el dispositivo para que reporte al endpoint y puerto compartidos de Plaspy permite a las organizaciones consolidar datos de ubicación, eventos y estado en una sola plataforma para monitoreo de flotas, supervisión de rutas y gestión de activos.

Para obtener más información sobre Plaspy y cómo esta configuración se integra en flujos de trabajo más amplios de gestión de flotas visite https://www.plaspy.com. Para los pasos de configuración más recientes y el comportamiento de firmware específico del GNX-5P, verifique la información vigente en el sitio oficial de GenX Mobile http://www.genxmobile.com/ ya que los procedimientos del fabricante y el firmware pueden cambiar con el tiempo.

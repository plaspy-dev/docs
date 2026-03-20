---
slug: /genx_mobile/gnx_3/configuration
id: gnx_3-configuration
sidebar_label: Configuration
title: GenX Mobile - GNX-3 Configuration
sidebar_class_name: menu_item_tracker
description: Configure el GNX-3 de GenX Mobile para Plaspy con parámetros de servidor compartido y guías prácticas de instalación
keywords:
  - Configuración GenX Mobile GNX-3
  - Configuración GNX-3 Plaspy
  - Configuración servidor GNX-3
  - Configuración software seguimiento GNX-3
  - Configuración rastreador GPS GenX Mobile
  - Configuración plataforma GNX-3
  - Integración rastreador Plaspy
  - Seguimiento de vehículos GNX-3
  - Pasos instalación GNX-3
  - Ajustes de conectividad GNX-3
---

# GenX Mobile - Configuración GNX-3

Esta página documenta el contexto público de configuración para usar el rastreador GenX Mobile GNX-3 con la plataforma Plaspy. Resume los parámetros de servidor compartidos que Plaspy requiere y ofrece orientación práctica y general para preparar el GNX-3 para reportar a Plaspy. El contenido aquí está pensado para usuarios técnicos e instaladores que necesitan información clara y pública, respetando siempre los procedimientos del fabricante.

Plaspy utiliza ajustes de servidor compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo se conecta. Los pasos exactos del lado del fabricante para el GNX-3 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use esta página para comprender los requisitos del lado de Plaspy y el flujo de trabajo típico, y luego complete los pasos específicos del dispositivo con las herramientas o la documentación de GenX Mobile.

## Visión general de la configuración

Configurar el GNX-3 para Plaspy implica dirigir el dispositivo para que reporte su ubicación y eventos al punto de conexión del servidor compartido de Plaspy y confirmar la conectividad para que la unidad aparezca en la plataforma. El objetivo es que el GNX-3 sea visible y fiable en Plaspy para seguimiento en tiempo real y monitoreo operativo.

- Proporcione al GNX-3 la dirección del servidor y el puerto de Plaspy para que pueda abrir una conexión de datos
- Seleccione el tipo de transporte requerido por el firmware del dispositivo y las condiciones de red
- Valide la conectividad desde la unidad de campo hasta Plaspy y verifique que el dispositivo aparezca en la plataforma
- Confirme el reporte de eventos y telemetría básica como actualizaciones de posición y eventos del acelerómetro
- Guarde y aplique los ajustes y realice un reinicio cuando el equipo lo requiera

## Ajustes del servidor Plaspy

Configure el GNX-3 para que reporte a los siguientes ajustes del servidor Plaspy al realizar la configuración del lado del fabricante:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: soporte para UDP o TCP según lo requiera el dispositivo o la red
- Plaspy detecta automáticamente el protocolo del rastreador cuando un dispositivo se conecta

Todos los dispositivos compatibles con Plaspy usan el mismo puerto y Plaspy se encarga de la detección de protocolo en el servidor.

## Requisitos típicos antes de comenzar

- Confirme que el GNX-3 tenga alimentación estable y que los accesorios requeridos estén conectados
- Asegúrese de que el dispositivo tenga conectividad de red activa apropiada para la unidad y la región
- Disponga del identificador del equipo, como IMEI o número de serie, para el registro en la plataforma
- Tenga acceso al método oficial de configuración de GenX Mobile o al software usado para cambiar los ajustes del servidor
- Mantenga una copia vigente de la guía de instalación o del firmware del GNX-3 proporcionada por el fabricante
- Acceso físico al dispositivo para reinicios o verificaciones que sean necesarios

## Cómo se conecta este rastreador a Plaspy

Al configurarse para Plaspy, el GNX-3 abre una conexión hacia el punto de conexión compartido de Plaspy y envía actualizaciones de posición y datos de eventos para que el dispositivo sea visible en la plataforma. Plaspy recibe la conexión entrante en el puerto compartido y mapea el rastreador usando la detección de protocolo para interpretar los datos.

- El dispositivo apunta a d.plaspy.com o a 54.85.159.138 y usa el puerto 8888 para enviar datos
- El transporte puede seleccionarse como UDP o TCP según el firmware del GNX-3 o la fiabilidad de la red
- Plaspy detecta automáticamente el protocolo para analizar los mensajes de ubicación y eventos
- Las actualizaciones de posición y los eventos del acelerómetro del GNX-3 se reenvían a Plaspy para visualización y alertas
- Una configuración exitosa permite monitoreo operativo y seguimiento histórico dentro de la plataforma Plaspy

## Flujo típico de configuración

1. Acceda al método oficial de configuración de GenX Mobile para el GNX-3 (herramienta web del fabricante, aplicación de configuración o interfaz por SMS según el dispositivo).
2. Introduzca el nombre de host del servidor Plaspy d.plaspy.com o alternativamente la IP del servidor 54.85.159.138 en el campo de servidor del dispositivo.
3. Establezca el puerto del dispositivo en 8888 según lo requiere Plaspy.
4. Elija UDP o TCP como transporte si el firmware del GNX-3 solicita una selección de transporte.
5. Aplique o guarde la configuración utilizando la herramienta del fabricante.
6. Reinicie o haga reboot del GNX-3 si las instrucciones del fabricante indican que es necesario para aplicar los ajustes de red.
7. Valide que el dispositivo esté reportando a Plaspy y aparezca en la plataforma con las actualizaciones esperadas.

## Ejemplos de comandos de configuración

El método de configuración del GNX-3 varía según el firmware y la herramienta de GenX Mobile utilizada para cambiar ajustes. Dado que los comandos y las interfaces del dispositivo difieren entre revisiones de hardware y utilidades del proveedor, no se incluyen comandos exactos aquí. Use la herramienta oficial de configuración de GenX Mobile o la guía para ingresar el nombre de host del servidor d.plaspy.com o la IP 54.85.159.138, establezca el puerto 8888 y seleccione UDP o TCP cuando corresponda. Si dispone de una interfaz de comandos por texto o SMS documentada por GenX Mobile, siga esos ejemplos del fabricante para actualizar los valores de servidor y puerto.

## Notas de configuración

- Las diferencias de firmware y las revisiones de hardware pueden cambiar los nombres de los menús o la sintaxis de comandos; confirme siempre con la guía del GNX-3
- Plaspy utiliza un único puerto compartido 8888 para todos los dispositivos compatibles y confía en la detección automática de protocolo en el servidor
- Elija UDP para menor overhead y posibles ventajas en latencia o TCP si el dispositivo o la red requiere entrega confiable
- Si su método de configuración admite marcadores de posición o ajustes de APN, siga la documentación de GenX Mobile para los valores correctos
- Verifique que las reglas de red y firewall permitan conexiones salientes del dispositivo hacia d.plaspy.com o 54.85.159.138 en el puerto 8888

## Por qué usar Plaspy con esta configuración

Usar el GNX-3 con Plaspy ofrece una forma práctica de centralizar el reporte de ubicación y eventos para flotas de vehículos y recursos móviles. Apuntar el GNX-3 al punto de conexión compartido de Plaspy y confirmar los ajustes de transporte permite visibilidad de la posición del vehículo, eventos de movimiento y alertas basadas en acelerómetro para un mejor control operativo.

Para saber más sobre Plaspy y cómo soporta dispositivos como el GenX Mobile GNX-3 visite https://www.plaspy.com. Para instrucciones específicas más recientes del GNX-3, notas de firmware y utilidades de configuración consulte el sitio del fabricante http://www.genxmobile.com/ ya que el comportamiento del dispositivo y los métodos de configuración pueden cambiar con el tiempo.

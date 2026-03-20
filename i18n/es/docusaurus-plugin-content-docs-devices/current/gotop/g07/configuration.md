---
slug: /gotop/g07/configuration
id: g07-configuration
sidebar_label: Configuration
title: GOTOP - G07 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del rastreador GOTOP G07 con ajustes de servidor Plaspy y pasos prácticos para la integración
keywords:
  - configuración GOTOP G07
  - instalación GOTOP G07
  - configuración servidor GOTOP G07
  - configuración Plaspy GOTOP G07
  - configuración rastreador GPS Plaspy
  - instalación rastreador GOTOP
  - seguimiento vehicular G07
  - configuración rastreador de activos
  - configuración plataforma G07
  - integración de dispositivo Plaspy
---

# GOTOP - Configuración del G07

Esta página describe el contexto público de configuración para usar el rastreador GOTOP G07 con Plaspy. Explica los ajustes de servidor compartidos de Plaspy que debe ingresar en el equipo o mediante la herramienta del fabricante, y ofrece pasos prácticos para confirmar que el G07 informe posiciones, alarmas y telemetría a Plaspy. El G07 es un rastreador resistente y de larga duración, compatible con Plaspy para reportes persistentes de ubicación y eventos.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use los detalles de esta página para aplicar los valores del servidor Plaspy y validar la conectividad; luego consulte la documentación de GOTOP o las herramientas del proveedor para opciones específicas del dispositivo.

## Resumen de la configuración

Este proceso prepara al G07 para enviar GNSS, LBS y telemetría del equipo a Plaspy, de modo que posiciones y alarmas aparezcan en la plataforma para visualización en tiempo real y reproducción histórica. Los ajustes públicos clave que usa Plaspy son los mismos para todos los dispositivos y deben ingresarse en el rastreador o en la herramienta de configuración de GOTOP.

- Ingrese el dominio o la IP del servidor de Plaspy para que el G07 reporte al backend d.plaspy.com o a 54.85.159.138.
- Configure el equipo para comunicarse por el puerto 8888 que Plaspy utiliza para todos los dispositivos compatibles.
- Seleccione UDP o TCP cuando el rastreador requiera elegir el tipo de transporte.
- Guarde y aplique la configuración y reinicie el G07 si su herramienta o firmware lo exige.
- Valide que el dispositivo aparezca y reporte correctamente en Plaspy después de la configuración.

## Ajustes del servidor Plaspy

- Dominio del servidor: d.plaspy.com para la configuración del host del dispositivo.
- IP del servidor: 54.85.159.138 como endpoint alternativo cuando la herramienta de configuración requiera una dirección numérica.
- Puerto: 8888, que Plaspy utiliza para todos los rastreadores compatibles.
- Transporte: configure UDP o TCP en el puerto 8888 si el dispositivo solicita seleccionar transporte.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el equipo reporta al endpoint compartido del servidor.

## Requisitos habituales antes de la configuración

- Fuente de energía y batería lista, o alimentación externa conectada para realizar la configuración.
- Micro SIM activa con plan de datos y APN correctos para reporte por GSM 2G si es necesario.
- Un método de configuración para el GOTOP G07, como el software del fabricante, una consola serial o la herramienta de programación del proveedor.
- Cobertura GSM en el lugar desde donde reportará el dispositivo para que el rastreador pueda alcanzar d.plaspy.com o 54.85.159.138.
- Los ajustes del servidor Plaspy (dominio o IP y puerto 8888) disponibles para ingresarlos en la configuración del equipo.
- Acceso a una cuenta o vista de la plataforma Plaspy para validar que el dispositivo esté reportando después de la configuración.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el G07 envía posiciones GNSS, datos de respaldo LBS y telemetría de eventos por GSM al endpoint y puerto del servidor Plaspy. Plaspy recibe esos paquetes, detecta automáticamente el protocolo del rastreador y procesa la ubicación y los datos de alarma para mostrarlos en la plataforma, tanto en tiempo real como en reproducción histórica.

- El G07 reporta al endpoint compartido de Plaspy d.plaspy.com o a la IP 54.85.159.138.
- El dispositivo se comunica por el puerto 8888 que Plaspy emplea para todos los equipos.
- Seleccione UDP o TCP en el dispositivo si la configuración exige elegir un transporte.
- La detección automática de protocolo de Plaspy reconoce el formato del G07 y procesa los mensajes de posición y alarma.
- Las posiciones, alarmas de manipulación y movimiento, estado de batería y otra telemetría soportada se vuelven visibles en Plaspy para monitoreo y respuesta a incidentes.

## Flujo de trabajo típico de configuración

1. Acceda al método o software oficial de configuración del GOTOP G07 proporcionado por su proveedor o fabricante.
2. En los ajustes de servidor o reporte, ingrese el dominio de Plaspy d.plaspy.com o la IP del servidor 54.85.159.138.
3. Establezca el puerto de reporte en 8888 que Plaspy usa para todos los dispositivos compatibles.
4. Si el equipo requiere seleccionar un transporte, escoja UDP o TCP en el puerto 8888.
5. Ingrese los valores de APN y SIM requeridos para que el dispositivo tenga conectividad de datos activa.
6. Aplique o guarde la configuración en la herramienta del fabricante y reinicie el rastreador si la herramienta o el firmware exigen un reinicio.
7. Valide que el dispositivo reporte a Plaspy y aparezca en la plataforma con datos de posición y telemetría.
8. Si no aparece el reporte, confirme la versión de firmware, el APN, la intensidad de señal y que el servidor/puerto correctos se hayan guardado.

## Comandos de ejemplo para configurar

Los comandos exactos y el método para configurar un GOTOP G07 dependen de la herramienta del fabricante, la versión de firmware o la interfaz del instalador que esté usando. Algunos proveedores ofrecen comandos por SMS, cadenas para consola serial o una utilidad de configuración de escritorio. Consulte la guía de configuración de GOTOP o la herramienta de su proveedor para la sintaxis precisa de los comandos para establecer el dominio del servidor, la IP del servidor, el puerto 8888 y para seleccionar UDP o TCP cuando sea necesario.

## Notas de configuración

- Es preferible usar el dominio d.plaspy.com para que DNS resuelva al endpoint actual de Plaspy; la IP 54.85.159.138 se proporciona como alternativa para herramientas que requieran una dirección numérica.
- Plaspy utiliza el puerto 8888 para todos los dispositivos; configurar el G07 en ese puerto es necesario para la compatibilidad con la plataforma.
- Elija UDP o TCP según la opción disponible en la herramienta o firmware de GOTOP; el comportamiento y la fiabilidad pueden variar según el transporte y las condiciones de la red.
- Las revisiones de firmware y hardware pueden cambiar las interfaces de configuración y los comandos disponibles; confirme siempre el procedimiento correcto para la revisión de su dispositivo.
- Verifique los ajustes de APN con el proveedor de la SIM y asegúrese de que la SIM tenga conectividad de datos antes de intentar registrar el dispositivo en Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el GOTOP G07 con Plaspy ofrece una solución práctica para organizaciones que necesitan visibilidad de ubicación persistente, alertas de eventos y monitoreo remoto de activos móviles de alto valor. Las opciones de batería de larga duración y el diseño robusto del G07 lo hacen adecuado para despliegues prolongados donde son esenciales las comprobaciones esporádicas y la fiabilidad en el reporte de alarmas.

Para obtener más información sobre Plaspy y cómo integrar dispositivos compatibles visite https://www.plaspy.com. Para instrucciones de configuración específicas del dispositivo, notas de firmware y herramientas del fabricante consulte el sitio de GOTOP en https://www.gotop.cc/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.

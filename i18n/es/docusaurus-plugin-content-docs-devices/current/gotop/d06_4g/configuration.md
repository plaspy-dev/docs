---
slug: /gotop/d06_4g/configuration
id: d06_4g-configuration
sidebar_label: Configuration
title: GOTOP - D06-4G Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del GOTOP D06-4G para Plaspy con ajustes de servidor y pasos prácticos de integración
keywords:
  - Configuración GOTOP D06-4G
  - Configuración GOTOP D06-4G para Plaspy
  - Configuración de servidor GOTOP D06-4G
  - Configuración rastreador GPS GOTOP
  - Configuración de dispositivo Plaspy
  - Configuración plataforma GPS para vehículos
  - Configuración de rastreo de vehículos
  - Rastreo de flotas Plaspy
  - Integración de dispositivos de rastreo
  - Configuración de telemetría D06-4G
---

# GOTOP - Configuración D06-4G

Esta página aborda el contexto público de configuración para usar el rastreador GOTOP D06-4G con la plataforma Plaspy. Resume los ajustes de servidor compartidos que Plaspy requiere, explica el flujo general para apuntar un D06-4G al endpoint de Plaspy y destaca verificaciones prácticas para validar la conectividad y el reporte de eventos. Utilice esta guía junto con el manual del dispositivo y las herramientas del proveedor para los pasos exactos del fabricante.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que el mismo endpoint y puerto de Plaspy se usan para todos los rastreadores compatibles. Los pasos de configuración en el lado del fabricante para el D06-4G pueden variar según el firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, así que confirme siempre los comandos precisos o el método de configuración con la documentación del dispositivo o la interfaz del instalador.

## Resumen de la configuración

El proceso de configuración prepara al D06-4G para transmitir datos de posición y eventos a Plaspy para monitoreo en tiempo real, alertas e historial. A alto nivel, deberá configurar el dispositivo para que apunte al servidor de Plaspy, seleccionar el protocolo de transporte si es necesario, guardar la configuración y verificar que los datos lleguen a la plataforma.

- Establezca la dirección del servidor del dispositivo al endpoint de Plaspy para que el rastreador reenvíe la telemetría a la plataforma.
- Configure el dispositivo para usar el puerto compartido de Plaspy para que la plataforma acepte los datos del rastreador.
- Elija UDP o TCP si la interfaz de configuración del D06-4G exige una selección de transporte.
- Guarde o aplique los cambios y reinicie el rastreador si lo requiere el firmware del equipo.
- Verifique los reportes en línea y los eventos de alarma en Plaspy para confirmar la integración exitosa.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com  
- IP del servidor 54.85.159.138  
- Puerto 8888  
- Soporte de transporte UDP o TCP en el dispositivo según se requiera  
- Detección automática de protocolo en Plaspy para que la plataforma identifique el protocolo del dispositivo cuando lleguen los datos  
- Tenga en cuenta que todos los dispositivos en Plaspy usan el mismo puerto, por lo que debe configurar el puerto 8888 para cada rastreador compatible

## Requisitos típicos antes de la configuración

- Acceso físico al rastreador o acceso remoto a la interfaz o software oficial de configuración del fabricante
- Energía adecuada en el dispositivo y batería de respaldo cargada si corresponde
- Una tarjeta SIM activa y conectividad a la red móvil si se usa transmisión de datos celulares (el dispositivo soporta 4G con retroceso a 2G)
- Conocer la versión de firmware y la revisión de hardware para seguir los comandos o pasos de GUI correctos del fabricante
- Acceso al manual de configuración GOTOP o a la herramienta del proveedor para el modelo D06-4G
- Una cuenta en Plaspy y el aprovisionamiento del dispositivo listo en su instancia de Plaspy para la validación final

## Cómo se conecta este rastreador a Plaspy

El D06-4G envía posiciones GNSS y telemetría de eventos a través de la red móvil al servidor configurado. Una vez que el rastreador apunta a Plaspy usando la dirección de servidor y el puerto compartidos, Plaspy ingiere el flujo entrante para mostrar la ubicación en vivo, las alertas y las rutas históricas.

- El rastreador transmite paquetes de posición y eventos a d.plaspy.com o a la IP del servidor 54.85.159.138
- Plaspy recibe los datos en el puerto compartido 8888 y detecta automáticamente el protocolo del rastreador
- El dispositivo puede usar transporte UDP o TCP según la configuración; Plaspy admite ambos y procesará los mensajes entrantes
- Eventos como entradas o salidas de geocerca, pérdida de energía, SOS y alarmas de vibración se reenvían a Plaspy como telemetría estándar
- Una vez conectado, el dispositivo es visible en Plaspy para seguimiento en vivo, reproducción de historial y notificaciones de alarma

## Flujo típico de configuración

1. Acceda al método o software de configuración oficial del GOTOP D06-4G según lo indicado en la documentación del fabricante o la herramienta del proveedor.
2. Ubique los ajustes de servidor o servidor de seguimiento en la interfaz del dispositivo.
3. Ingrese el servidor de Plaspy como el dominio d.plaspy.com o la IP del servidor 54.85.159.138.
4. Configure el puerto en 8888 según lo requiere Plaspy y guarde la configuración del puerto.
5. Seleccione el transporte UDP o TCP si el dispositivo exige una elección de transporte y guarde esa opción.
6. Aplique o guarde la configuración completa y reinicie el dispositivo si el firmware requiere un reinicio para que los ajustes tengan efecto.
7. Valide que el dispositivo reporte a Plaspy comprobando el estado en línea del equipo y la telemetría reciente en la plataforma Plaspy.

## Ejemplo de comandos de configuración

Los comandos exactos de configuración y los formatos de mensajes para el D06-4G dependen del firmware GOTOP y de la herramienta de aprovisionamiento del proveedor. Dado que los métodos del fabricante difieren, consulte el manual de usuario GOTOP o la guía SMS/API de configuración para la sintaxis exacta de los comandos. En flujos típicos reemplazará el objetivo del servidor y el puerto con los valores de Plaspy abajo cuando use comandos del fabricante o configuración por SMS:

- Dominio del servidor: d.plaspy.com
- IP del servidor: 54.85.159.138
- Puerto: 8888
- Transporte: UDP o TCP

Si su dispositivo admite configuración vía SMS o CLI, busque comandos que establezcan el host del servidor y el puerto y aplíquelos usando los valores anteriores. Por ejemplo, muchos dispositivos GOTOP usan un patrón de comando para fijar servidor y puerto; consulte el manual del dispositivo para el formato exacto del comando para el D06-4G. Como la sintaxis del fabricante varía, esta página no inventa comandos específicos; siga la documentación GOTOP o las herramientas provistas por el vendedor para la estructura correcta de comandos.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la sintaxis de los comandos y el diseño de la GUI; siempre corresponda las instrucciones con la versión de firmware del D06-4G.
- Elija TCP si necesita garantías de entrega en su entorno, o UDP para menor sobrecarga si la red es confiable; Plaspy acepta ambos transportes en el puerto 8888.
- Confirme el aprovisionamiento de la SIM y los límites del plan de datos antes de despliegues a gran escala, ya que la conectividad celular es necesaria para el reporte en vivo.
- Las prácticas de instalador y las revisiones de hardware varían según los proveedores regionales; verifique la guía de instalación suministrada con la unidad.
- Use el dominio o la IP del servidor Plaspy de forma intercambiable si su herramienta de configuración prefiere un formato sobre el otro.

## Por qué usar Plaspy con esta configuración

Usar el GOTOP D06-4G con Plaspy ofrece un camino directo para centralizar datos de posición y telemetría de eventos en una plataforma de monitoreo. El almacenamiento offline y el reporte de alarmas del D06-4G se complementan con la ingestión y visualización de Plaspy, permitiendo seguimiento en tiempo real, notificaciones de eventos y reproducción de rutas para flotas y casos de uso de seguridad.

Learn more about Plaspy and platform features at https://www.plaspy.com. For the most current device-specific configuration methods, firmware behavior, and manufacturer details, verify information on the GOTOP official site https://www.gotop.cc/ before applying changes.

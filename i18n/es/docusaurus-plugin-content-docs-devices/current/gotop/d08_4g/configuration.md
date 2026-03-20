---
slug: /gotop/d08_4g/configuration
id: d08_4g-configuration
sidebar_label: Configuration
title: GOTOP - D08-4G Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador GOTOP D08 4G y su compatibilidad con Plaspy usando ajustes de servidor compartido
keywords:
  - Configuración GOTOP D08 4G
  - Instalación GOTOP D08 4G
  - GOTOP D08 4G Plaspy
  - Configuración rastreador GPS
  - Configuración rastreo de vehículos
  - Rastreador gestión de flotas
  - Rastreador GPS OBD
  - Configuración rastreador GPS 4G
  - Configuración servidor de rastreadores
  - Configuración plataforma de rastreo
---

# GOTOP - Configuración D08-4G

Esta página documenta el contexto público de configuración para usar el rastreador GOTOP D08-4G con Plaspy. Resume los ajustes prácticos de servidor y los pasos habituales que debe seguir para apuntar un equipo D08-4G a la plataforma Plaspy. El contenido se centra en los detalles públicos de integración necesarios para que Plaspy reciba datos de posición y eventos para seguimiento en tiempo real y reproducción histórica.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Sin embargo, los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El D08-4G es un rastreador 4G montado en OBD con retroceso a 2G y posicionamiento multimodal; esta página explica cómo configurarlo para que reporte al endpoint de Plaspy usando los ajustes comunes que Plaspy requiere.

## Resumen de la configuración

Preparar el D08-4G para Plaspy implica configurar el dispositivo para que envíe de forma fiable eventos de ubicación y alarmas al servidor de Plaspy y aparezca en su cuenta. El proceso se centra en apuntar el rastreador al endpoint compartido de Plaspy y validar la conectividad tras la instalación.

- Configure el dispositivo para enviar telemetría al endpoint del servidor de Plaspy.
- Verifique la conectividad celular y que la SIM tenga un plan de datos activo.
- Defina el transporte y puerto para que los paquetes lleguen a la plataforma Plaspy.
- Confirme que el equipo reporte posiciones y eventos de alarma a Plaspy.
- Valide la visibilidad en Plaspy y pruebe flujos de trabajo típicos como geocercas y pérdida de alimentación.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos del servidor Plaspy al configurar el dispositivo. Plaspy exige el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador.

- Dominio del servidor d.plaspy.com para configuración basada en DNS
- IP del servidor 54.85.159.138 para configuración por IP directa si es necesario
- Puerto 8888 que Plaspy utiliza para todos los dispositivos
- Soporte de transporte UDP o TCP según la opción del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que puede usar el endpoint compartido sin seleccionar manualmente un protocolo en la plataforma

## Requisitos típicos antes de la configuración

- Una unidad D08-4G instalada en el puerto OBD del vehículo o preparada según la guía de instalación
- Una tarjeta SIM activa con un plan de datos compatible con LTE y retroceso a 2G según lo requieran las redes locales
- Acceso al método de configuración oficial de GOTOP o al software proporcionado por el proveedor
- Alimentación del rastreador y, si aplica, batería interna de respaldo cargada
- Firmware lo suficientemente reciente para soportar el reporte remoto a endpoints de servidor personalizados
- Acceso a su cuenta Plaspy para verificar la visibilidad del dispositivo después de la configuración

## Cómo se conecta este rastreador a Plaspy

El D08-4G transmite actualizaciones de posición y eventos de alarma mediante datos celulares al endpoint y puerto del servidor Plaspy. Una vez apuntado a Plaspy, el dispositivo enviará telemetría para seguimiento en tiempo real y alertas basadas en eventos en la plataforma Plaspy.

- El rastreador se configura para reportar al endpoint compartido d.plaspy.com o a la IP directa 54.85.159.138
- Los datos se envían al puerto 8888 que Plaspy emplea de manera consistente para todos los dispositivos
- El transporte puede ser UDP o TCP según la configuración del dispositivo y las condiciones de red
- Plaspy detecta y procesa automáticamente el protocolo del rastreador para parsear y mostrar los paquetes reportados
- Las posiciones y eventos de alarma como geocerca o fallo de alimentación se entregan a Plaspy para visualización y generación de alertas

## Flujo de configuración común

1. Acceda al método de configuración oficial de GOTOP o al software que suministre el fabricante o proveedor.
2. Ubique los ajustes de servidor o APN en la herramienta del dispositivo o en la lista de comandos SMS.
3. Ingrese el dominio del servidor d.plaspy.com o la IP directa 54.85.159.138 en el campo de servidor.
4. Establezca el puerto en 8888, que es el que Plaspy usa para todos los equipos.
5. Seleccione UDP o TCP si el D08-4G requiere elegir el transporte durante la configuración.
6. Aplique o guarde la configuración y envíe cualquier comando de commit que el proveedor requiera.
7. Reinicie o corte la alimentación del dispositivo si el fabricante indica que es necesario para activar los nuevos ajustes.
8. Valide que el equipo reporte a Plaspy comprobando el estado del dispositivo y las posiciones recientes en su cuenta Plaspy.

## Ejemplos de comandos de configuración

Los comandos exactos y la interfaz de configuración del D08-4G dependen de las herramientas del fabricante y la versión de firmware. Los dispositivos GOTOP suelen configurarse mediante la herramienta web del proveedor, utilitario de escritorio o el conjunto de comandos SMS que proporciona el fabricante. Use la documentación del proveedor o la utilidad de configuración para introducir el dominio o IP del servidor Plaspy y el puerto tal como se indica en la sección Ajustes del servidor Plaspy. Si su proveedor ofrece comandos SMS para establecer el servidor, siga esa lista oficial de comandos en lugar de usar comandos ad hoc.

## Notas de configuración

- Las versiones de firmware y las herramientas del proveedor varían por lote de producción y versión de firmware; consulte siempre la guía de configuración de GOTOP para instrucciones específicas del dispositivo.
- Elija UDP o TCP según la fiabilidad de la red y las recomendaciones del proveedor; Plaspy acepta cualquiera de los dos transportes en el puerto 8888.
- Asegúrese de que la SIM tenga un plan de datos activo y que el dispositivo pueda conectarse a redes LTE con retroceso a 2G según sea necesario.
- Dado que Plaspy usa el mismo puerto para todos los dispositivos, configurar el puerto 8888 es un paso obligatorio para la compatibilidad con Plaspy.
- Si depende de la configuración vía SMS proporcionada por el proveedor, verifique el formato exacto de los comandos SMS en la documentación de GOTOP antes de enviarlos.

## Por qué usar Plaspy con esta configuración

Conectar el GOTOP D08-4G a Plaspy proporciona visibilidad centralizada para el rastreo de flotas y vehículos, combinando las capacidades de posicionamiento multimodal y alarmas del dispositivo con los mapas en tiempo real, el registro de eventos y la reproducción histórica de Plaspy. Esta configuración es útil para operaciones que requieren reportes de ubicación consistentes, monitoreo de geocercas y alarmas, y despliegues sencillos en numerosos vehículos usando el factor de forma OBD.

Para saber más sobre Plaspy y cómo esta integración puede apoyar la visibilidad de su flota visite https://www.plaspy.com. Para conocer los métodos de configuración específicos más actuales, el comportamiento del firmware y los detalles del fabricante consulte la documentación oficial de GOTOP en https://www.gotop.cc/ ya que las instrucciones del proveedor pueden cambiar con el tiempo.

---
slug: /gotop/a12/configuration
id: a12-configuration
sidebar_label: Configuration
title: GOTOP - A12 Configuration
sidebar_class_name: menu_item_tracker
description: Configure el GOTOP A12 para Plaspy con ajustes de servidor compartidos y guía práctica para rastreo confiable de animales
keywords:
  - configuración GOTOP A12
  - instalación GOTOP A12
  - configuración servidor GOTOP A12
  - rastreo GOTOP A12
  - rastreador GPS GOTOP A12
  - configuración rastreador animal GOTOP
  - configuración GPRS GOTOP A12
  - GOTOP A12 Plaspy
  - configuración rastreador Plaspy
  - configuración servidor Plaspy
---

# GOTOP - A12 Configuración

Esta página detalla el contexto público de configuración para usar el rastreador GOTOP A12 con Plaspy. Describe los ajustes de servidor compartidos que Plaspy requiere y ofrece pasos prácticos para preparar el A12, de modo que pueda comunicarse con Plaspy para rastreo en tiempo real de animales, visualización de rutas históricas y alertas de eventos como movimiento o batería baja.

Plaspy utiliza ajustes de servidor comunes entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, mientras que los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El GOTOP A12 es un rastreador para animales con reporte en tiempo real por GPRS, alertas por movimiento, protección impermeable IPX7, posicionamiento GPS y LBS, y opciones de configuración por SMS o plataforma; use esta guía junto con la documentación oficial de GOTOP para comandos específicos del dispositivo y consideraciones de firmware.

## Resumen de configuración

El objetivo al configurar el GOTOP A12 para Plaspy es apuntar el dispositivo al servidor de Plaspy y confirmar que el rastreador transmite datos de ubicación y eventos de forma fiable. El proceso se centra en establecer el endpoint del servidor, asegurar la conectividad de datos móviles y validar que las actualizaciones aparezcan en la plataforma Plaspy.

- Apuntar el rastreador a los ajustes del servidor Plaspy para que los reportes GPRS lleguen a la plataforma
- Configurar opciones de transporte y puerto si el dispositivo requiere elegir explícitamente entre UDP y TCP
- Verificar la SIM, el APN y la conectividad de la red móvil para que el reporte GPRS funcione en la ubicación de instalación
- Validar que el dispositivo aparezca y reporte correctamente dentro de Plaspy después de la configuración
- Confirmar que las alertas de movimiento, batería baja y los datos de historial de rutas se transmitan como se espera

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de Plaspy al configurar el GOTOP A12. Plaspy usa el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador.

- dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- puerto 8888
- transporte: soporte para UDP o TCP
- detección automática de protocolo en Plaspy

## Requisitos habituales antes de la configuración

- Un GOTOP A12 cargado y operativo con el collar conectado y encendido
- Una tarjeta SIM válida instalada con datos móviles activos y GPRS habilitado
- Ajustes APN correctos para el operador de la SIM configurados en el dispositivo
- Acceso al método o software oficial de configuración GOTOP para el A12 (comandos SMS, herramienta web o utilidad del proveedor)
- Cobertura celular en la ubicación de instalación que permita comunicaciones GPRS
- Conocimiento de la versión de firmware del dispositivo y cualquier nota del proveedor para el modelo A12

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el GOTOP A12 usa GPRS para enviar datos de ubicación y eventos del dispositivo al endpoint y puerto compartidos de Plaspy. Plaspy recibe estos reportes y los hace visibles en la plataforma, detectando automáticamente el protocolo del rastreador, por lo que no suele ser necesario seleccionar el protocolo en el dispositivo para la detección.

- El A12 envía actualizaciones periódicas de posición a d.plaspy.com o 54.85.159.138 en el puerto 8888
- El transporte puede configurarse como UDP o TCP en el dispositivo cuando se solicite; Plaspy acepta ambos
- Las alertas del sensor de movimiento y las notificaciones de batería baja se reenvían si el rastreador transmite esos eventos vía GPRS
- Los datos de rutas históricas reportados por el dispositivo se hacen visibles en Plaspy una vez que se reciben los reportes
- Se pueden usar comandos por SMS o la herramienta del proveedor para ajustar los intervalos de reporte o las funciones de ahorro de energía antes de validar el reporte en vivo

## Flujo de configuración habitual

1. Acceda al método o software oficial de configuración del GOTOP A12 proporcionado por el fabricante o proveedor.
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 como endpoint objetivo.
3. Establezca el puerto en 8888, que Plaspy usa para todos los dispositivos compatibles.
4. Seleccione UDP o TCP en el dispositivo si el firmware del rastreador requiere una elección explícita de transporte.
5. Configure el APN de la SIM y cualquier ajuste requerido por el operador para que los datos GPRS estén disponibles.
6. Aplique o guarde la configuración en el dispositivo y reinicie el rastreador si la herramienta o el firmware requieren un reinicio.
7. Valide que el dispositivo reporte a Plaspy revisando el dispositivo y las actualizaciones de posición en vivo o recientes en la plataforma.
8. Pruebe las alertas de movimiento y el reporte de batería baja para confirmar el reenvío de eventos a Plaspy.

## Ejemplos de comandos de configuración

El fabricante del GOTOP A12 puede proporcionar configuración basada en comandos SMS o una herramienta de configuración del proveedor. Los comandos exactos y su sintaxis dependen del firmware del dispositivo y la documentación del proveedor. Consulte la documentación oficial de GOTOP para los comandos SMS o de herramienta exactos para su versión de firmware A12.

Si su proveedor facilita comandos SMS para establecer servidor, APN o transporte, los pasos públicos típicos reflejarán el flujo descrito arriba: establecer APN, establecer dominio o IP del servidor, poner el puerto 8888, elegir UDP o TCP, luego guardar y reiniciar. Use la referencia de comandos GOTOP suministrada con su dispositivo para las cadenas de comandos precisas.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis de los comandos o los menús de configuración disponibles; siempre revise las notas de la versión del proveedor.
- Si el A12 soporta configuración por SMS, esto puede ser útil como alternativa cuando la configuración remota por GPRS no sea posible durante la puesta en marcha.
- Elija UDP o TCP según la preferencia del instalador y las condiciones de la red; Plaspy detectará y gestionará automáticamente el protocolo entrante.
- Confirme los detalles del APN con el proveedor de la SIM y utilice el APN del operador, nombre de usuario y contraseña si el rastreador los requiere.
- Los modos de ahorro de energía y los intervalos de reporte afectan la frecuencia con la que Plaspy recibe actualizaciones; ajuste estos parámetros según sus necesidades de monitoreo.

## Por qué usar Plaspy con esta configuración

Usar el GOTOP A12 con Plaspy ofrece a organizaciones y cuidadores una forma eficiente de monitorear animales mediante una plataforma que acepta protocolos comunes de rastreadores y ajustes de servidor compartidos. El sensor de movimiento del A12, su diseño resistente al agua y el reporte por GPRS lo hacen adecuado para rastreo al aire libre, y configurarlo para apuntar a Plaspy proporciona rápidamente visibilidad sobre ubicación, movimiento y eventos de estado.

Para saber más sobre Plaspy visite https://www.plaspy.com. Para los comandos de configuración específicos del dispositivo, detalles de firmware y la documentación oficial de GOTOP, verifique las instrucciones en el sitio del fabricante https://www.gotop.cc/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.

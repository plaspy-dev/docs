---
slug: /thinkrace/traxbean_mt2/configuration
id: traxbean_mt2-configuration
sidebar_label: Configuration
title: ThinkRace - Traxbean MT2 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del ThinkRace Traxbean MT2 con ajustes de servidor Plaspy y pasos prácticos
keywords:
  - Configuración ThinkRace Traxbean MT2
  - Guía configuración Traxbean MT2
  - Tracker ThinkRace configuración Plaspy
  - Configuración servidor Traxbean MT2
  - Configuración rastreador GPS wearable
  - Configuración software seguimiento Traxbean MT2
  - Integración smartwatch GPS Plaspy
  - Configuración telemetría Traxbean MT2
  - Configuración dispositivo Plaspy
  - Lista verificación despliegue Traxbean MT2
---

# ThinkRace - Configuración del Traxbean MT2

Esta página ofrece información pública y práctica para configurar el ThinkRace Traxbean MT2 con Plaspy. Resume los ajustes del servidor Plaspy que debe aplicar en el dispositivo o durante la provisión por parte del proveedor, explica los requisitos habituales y describe un flujo de trabajo práctico para que el MT2 informe posición, eventos SOS y telemetría a Plaspy para su monitoreo centralizado.

Plaspy utiliza ajustes de servidor compartidos para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador una vez que el dispositivo envía datos a la plataforma. Los pasos exactos en el lado del fabricante pueden variar según firmware, revisión de hardware, tipo de instalación y herramientas del proveedor, por lo que use esta guía para los ajustes públicos y confirme cualquier paso específico del dispositivo con la documentación de ThinkRace o las herramientas del proveedor.

## Resumen de la configuración

Esta configuración prepara al Traxbean MT2 para enviar su ubicación, estado y eventos a la plataforma Plaspy, de modo que los operadores puedan visualizar y actuar sobre la telemetría en tiempo real. El objetivo es proporcionar el endpoint y el transporte correctos para que el dispositivo establezca una ruta de reporte estable.

- Apunte el dispositivo o la herramienta de provisión del proveedor al endpoint del servidor Plaspy para que la telemetría fluya hacia el backend de Plaspy.
- Configure el transporte de red y el puerto en el MT2 para que coincidan con los detalles de Plaspy y garantizar la conectividad.
- Verifique la alimentación del dispositivo, la SIM y el registro en la red para que el MT2 pueda alcanzar d.plaspy.com o la IP de Plaspy.
- Confirme que el dispositivo informa regularmente y que los eventos SOS y multimedia llegan a Plaspy.
- Valide la visibilidad en Plaspy y ajuste los intervalos de reporte o las opciones del dispositivo mediante las herramientas de ThinkRace si fuese necesario.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com para la configuración por parte del proveedor o del dispositivo
- IP del servidor 54.85.159.138 como dirección alternativa cuando sea requerida
- Puerto 8888 para todos los dispositivos gestionados por Plaspy
- Soporte de transporte UDP o TCP según la opción de configuración del dispositivo
- Detección automática de protocolo en Plaspy para que la plataforma determine el protocolo del rastreador una vez que reciba datos

## Requisitos típicos antes de la configuración

- El dispositivo tiene alimentación y batería cargada o alimentación externa conectada
- Suscripción celular activa y SIM insertada cuando se usa comunicación 4G LTE
- Acceso al método oficial de configuración de ThinkRace o al software de provisión del proveedor
- Cobertura de red en el área donde operará el dispositivo para que pueda registrarse en redes celulares
- Cuenta en Plaspy y flujo de registro de dispositivos listo para verificar la aparición del equipo en la plataforma
- Conocimiento de la versión de firmware del MT2 y de cualquier documento de configuración específico del proveedor

## Cómo se conecta este rastreador a Plaspy

El Traxbean MT2 transmite datos de ubicación y eventos al endpoint y puerto compartidos de Plaspy para que la plataforma pueda ingerir y mostrar la telemetría para monitoreo y respuesta a incidentes. Una vez que el MT2 esté configurado con el endpoint de Plaspy, la plataforma reconocerá automáticamente el protocolo y presentará el dispositivo.

- El dispositivo envía actualizaciones periódicas de ubicación y telemetría a d.plaspy.com o 54.85.159.138 en el puerto 8888
- El transporte puede ser UDP o TCP según la opción seleccionada durante la configuración
- Las pulsaciones del botón SOS y las alertas de emergencia se reenvían a Plaspy para la escalada inmediata
- Los disparos de cámara o eventos multimedia se envían junto con la telemetría cuando están soportados y habilitados
- Plaspy ingiere el flujo y aplica reglas de geocerca, alertas e informes históricos

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración de ThinkRace o a la herramienta de provisión del proveedor para el Traxbean MT2.
2. Ingrese d.plaspy.com o, cuando la herramienta lo requiera, la IP alterna 54.85.159.138 como dirección del servidor.
3. Configure el puerto del servidor en 8888, tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles.
4. Elija UDP o TCP si el dispositivo requiere selección de transporte; Plaspy detectará automáticamente el protocolo cuando lleguen los datos.
5. Aplique o guarde la configuración en la herramienta de ThinkRace o en la interfaz del dispositivo.
6. Reinicie el dispositivo si el fabricante lo requiere para aplicar cambios de red o servidor.
7. Valide que el MT2 reporte a Plaspy comprobando la visibilidad del dispositivo en la plataforma y confirmando la recepción de telemetría y eventos.

## Ejemplos de comandos de configuración

Los comandos y el formato de configuración exactos varían según el firmware de ThinkRace y las herramientas de provisión. Algunos entornos usan software del proveedor o portales web, mientras que otros aceptan comandos por SMS u OTA. En todos los casos deberá especificar el dominio o la IP del servidor Plaspy y el puerto compartido 8888 y elegir UDP o TCP si es necesario.

Al usar la herramienta del fabricante o la interfaz de provisión, ingrese uno de estos como endpoint del servidor:
- d.plaspy.com
- 54.85.159.138

Configure el puerto:
- 8888

Si su método de provisión admite cadenas de comando o configuración vía SMS, siga el formato de comandos de ThinkRace provisto por su proveedor. Debido a que los formatos de comando del proveedor difieren según el firmware y la herramienta, consulte la documentación de ThinkRace o la herramienta de provisión para la sintaxis exacta.

## Notas sobre la configuración

- Las diferencias de firmware pueden cambiar los campos exactos, los nombres de menú o la sintaxis de comandos para establecer el servidor y el transporte; siempre verifique las notas de la versión del firmware del MT2.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador después de que el dispositivo envíe datos.
- Elija UDP cuando prefiera menor sobrecarga y la red sea estable; elija TCP cuando necesite entrega confiable y persistencia de sesión, según los requerimientos de su instalación.
- Si el dispositivo admite tanto dominio como IP, prefiera d.plaspy.com para que DNS pueda proporcionar flexibilidad en rutas o mantenimiento futuro.
- Mantenga un registro de la versión de firmware y de los pasos de provisión usados durante el despliegue para facilitar la resolución de problemas y la ampliación de implementaciones.

## Por qué usar Plaspy con esta configuración

Configurar el Traxbean MT2 para reportar a Plaspy centraliza la ubicación en tiempo real, las alertas SOS y la telemetría del dispositivo en una única plataforma de monitoreo e informes. Esta combinación es útil para organizaciones que requieren conciencia situacional continua del personal en campo, escalada rápida de incidentes e integración de contexto multimedia o de voz durante eventos.

Para obtener más información sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para métodos de configuración específicos del dispositivo, notas de firmware y guías del fabricante, verifique los detalles en el sitio oficial de ThinkRace https://www.thinkrace.com/ ya que la documentación del proveedor y el comportamiento del firmware pueden cambiar con el tiempo.

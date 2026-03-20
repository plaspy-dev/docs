---
slug: /navtelekom/smart_s_2422/configuration
id: smart_s_2422-configuration
sidebar_label: Configuration
title: Navtelekom - SMART S-2422 Configuration
sidebar_class_name: menu_item_tracker
description: Guía práctica de configuración del Navtelekom SMART S-2422 para conectarlo a Plaspy con ajustes de servidor compartido
keywords:
  - Configuración Navtelekom SMART S-2422
  - Configuración SMART S-2422 Plaspy
  - Configuración rastreador Navtelekom
  - Configuración servidor SMART S-2422
  - Compatibilidad rastreador GPS Plaspy
  - Configuración rastreador vehicular Plaspy
  - Rastreo de flotas Navtelekom SMART S-2422
  - NTC Configurator SMART S-2422
  - Guía ajustes servidor Plaspy
  - Lista verificación instalación SMART S-2422
---

# Navtelekom - Configuración del SMART S-2422

Esta página documenta el contexto público de configuración para usar el rastreador Navtelekom SMART S-2422 con Plaspy. Se centra en los pasos prácticos y los ajustes de servidor compartidos necesarios para reenviar posiciones GNSS y telemetría a Plaspy, y explica qué debe preparar antes de integrar el equipo en la plataforma.

Plaspy utiliza un único endpoint y puerto de servidor compartido para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, como la utilidad NTC Configurator para Windows. Use esta guía como referencia general y consulte al fabricante para detalles específicos del dispositivo.

## Resumen de configuración

Configurar el SMART S-2422 para su uso con Plaspy implica preparar el dispositivo para enviar su ubicación y telemetría al endpoint del servidor de Plaspy y verificar que los datos aparezcan en su cuenta. El proceso consiste principalmente en usar la herramienta de configuración del fabricante para apuntar el rastreador a Plaspy y asegurarse de que tenga conectividad celular y parámetros de reportes correctos.

- Apuntar el servidor de subida del dispositivo a Plaspy y confirmar la selección del transporte si es necesario
- Configurar intervalos de reporte y qué entradas o campos de telemetría incluir
- Verificar que el dispositivo tenga una SIM 2G activa y cobertura de red para subir datos
- Usar la utilidad NTC Configurator para actualizaciones de firmware y archivos de configuración guardados
- Validar que el rastreador informe en Plaspy y que las actualizaciones de ubicación sean visibles

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador para conexiones entrantes

## Requisitos comunes antes de la configuración

- Una tarjeta SIM instalada y activa con datos habilitados para el módem 2G del dispositivo
- Alimentación al SMART S-2422 y cableado requerido completado para entradas y salidas
- PC con Windows y la utilidad NTC Configurator u otra herramienta del fabricante para editar ajustes del equipo
- Acceso a credenciales de la plataforma Plaspy o detalles de registro del dispositivo para confirmar visibilidad tras la configuración
- Conocimiento de la versión de firmware del dispositivo para poder aplicar cualquier orientación específica de Navtelekom
- Acceso físico al equipo para configurarlo o para conectar equipos de diagnóstico como herramientas Bluetooth cuando sea necesario

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado para Plaspy, el SMART S-2422 envía fijaciones de posición GNSS y telemetría a través de su enlace celular 2G al endpoint y puerto compartido de Plaspy. Plaspy recibe los reportes de ubicación y los cambios de estado de entradas para que estén disponibles en monitoreo en tiempo real, alertas y reproducción histórica.

- El dispositivo se configura para cargar datos a d.plaspy.com o directamente a 54.85.159.138
- Todas las subidas apuntan al puerto 8888 en el endpoint de Plaspy
- El transporte puede ser UDP o TCP según la configuración del equipo y la preferencia del instalador
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que el mismo puerto se usa para todos los dispositivos compatibles
- Plaspy ingiere las posiciones GNSS reportadas, eventos de entradas y los campos de telemetría configurados para paneles y alertas

## Flujo típico de configuración

1. Acceda al método oficial de configuración del fabricante o al software, por ejemplo NTC Configurator en un PC con Windows.
2. Configure el servidor de subida del equipo ingresando d.plaspy.com o 54.85.159.138 en el campo de servidor.
3. Establezca el puerto de subida en 8888 en los ajustes de red o servidor.
4. Elija UDP o TCP si el dispositivo requiere selección explícita del transporte para las subidas.
5. Configure los intervalos de reporte, las entradas a monitorear y cualquier parámetro de telemetría que necesite enviar a Plaspy.
6. Aplique o guarde la configuración en la herramienta del fabricante y, si se le solicita, escriba la configuración en el dispositivo.
7. Reinicie el dispositivo si el configurador lo requiere o después de aplicar cambios.
8. Valide que el SMART S-2422 informe a Plaspy comprobando la actividad del dispositivo en su cuenta de Plaspy y confirmando actualizaciones de ubicación en vivo o recientes.

## Ejemplos de comandos de configuración

El SMART S-2422 se configura normalmente usando la utilidad Navtelekom NTC Configurator en lugar de comandos SMS o de terminal en bruto. Los comandos exactos y los elementos de menú varían según el firmware y la versión del configurador. Al usar el software, busque campos etiquetados como Server, IP o Host, Port y Transport e ingrese los valores de Plaspy d.plaspy.com o 54.85.159.138 y el puerto 8888. Si su implementación usa comandos SMS o una CLI proporcionada por el fabricante, consulte la documentación oficial de Navtelekom para la sintaxis exacta para configurar host, puerto y transporte.

## Notas de configuración

- Las versiones de firmware y las revisiones del dispositivo pueden cambiar los nombres de menús y los flujos de configuración. Confirme los pasos exactos para su versión de firmware.
- Elija UDP o TCP según la preferencia del instalador y la fiabilidad de la red móvil. Plaspy soporta ambos y detecta el protocolo automáticamente.
- Mantenga una copia del perfil guardado del NTC Configurator para implementar más rápido en dispositivos adicionales.
- Verifique el APN y los ajustes de SIM en el dispositivo si las subidas no comienzan después de configurar el servidor.
- Si utiliza Bluetooth para diagnóstico local, asegúrese de que la herramienta del técnico sea compatible con la versión de firmware del equipo.

## Por qué usar Plaspy con esta configuración

Vincular el SMART S-2422 con Plaspy proporciona a los equipos operativos un método consistente para recopilar ubicación GNSS, eventos de entradas y telemetría para la supervisión de flotas. Usar el endpoint compartido de Plaspy simplifica la configuración del servidor en despliegues grandes, ya que todos los dispositivos usan la misma dirección y puerto mientras Plaspy detecta automáticamente el protocolo del rastreador.

Para obtener más información sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Los métodos de configuración específicos del dispositivo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, por lo que verifique la guía de instalación y firmware más reciente con Navtelekom en https://www.navtelecom.ru/

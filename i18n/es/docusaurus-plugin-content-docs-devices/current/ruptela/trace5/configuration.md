---
slug: /ruptela/trace5/configuration
id: trace5-configuration
sidebar_label: Configuration
title: Ruptela - Trace5 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Ruptela Trace5 con Plaspy, con ajustes de servidor y pasos prácticos para rastreo de flotas
keywords:
  - configuración Ruptela Trace5
  - configuración Trace5
  - configuración servidor Ruptela Trace5
  - configuración Trace5 Plaspy
  - configuración rastreador GPS Trace5
  - configuración rastreador Plaspy
  - instalación rastreador vehicular
  - rastreador para gestión de flotas
  - instalación Ruptela Trace5
  - configuración plataforma GPS
---

# Ruptela - Configuración del Trace5

Esta página documenta el contexto público de configuración para usar el rastreador Ruptela Trace5 con Plaspy. Se centra en los ajustes de servidor compartidos que Plaspy requiere y en pasos prácticos para apuntar un dispositivo Trace5 al endpoint de Plaspy, de modo que pueda reportar ubicación y estado a su cuenta de flota. El contenido está pensado como una referencia clara y neutral basada en prácticas públicas de configuración.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos en el lado del fabricante para configurar un Trace5 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de Ruptela que use, como Device Center o el asistente de instalación. Verifique siempre los detalles específicos del dispositivo con la documentación del fabricante cuando sea necesario.

## Resumen de configuración

Este proceso prepara un Ruptela Trace5 para enviar datos GNSS y de dispositivo a Plaspy, de modo que el equipo sea visible y administrable en la plataforma. El Trace5 es compacto, resistente y diseñado para entornos de flota; los pasos que siguen se enfocan en asegurar el enrutamiento de red correcto y la identificación del dispositivo para que Plaspy pueda recibir e interpretar los datos.

- Configure el servidor de salida del Trace5 hacia el endpoint de Plaspy para que el dispositivo sepa a dónde enviar la telemetría.  
- Elija el método de transporte requerido por su instalador o firmware: UDP o TCP.  
- Confirme que el dispositivo puede establecer conectividad celular y que los ajustes APN son correctos.  
- Guarde y aplique los ajustes en la herramienta de configuración de Ruptela y reinicie el dispositivo si es necesario.  
- Valide que el Trace5 informe a Plaspy y aparezca en la vista de su flota.

## Ajustes del servidor Plaspy

Use los siguientes ajustes del servidor de Plaspy al configurar el Trace5. Estos valores se comparten entre todos los dispositivos compatibles con Plaspy.

- Dominio del servidor d.plaspy.com  
- IP del servidor 54.85.159.138  
- Puerto 8888  
- Transporte: UDP o TCP en el puerto 8888  
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta  
- Tenga en cuenta que todos los dispositivos en Plaspy usan el mismo puerto

## Requisitos previos típicos antes de la configuración

- Asegúrese de que el Trace5 esté alimentado y accesible para su configuración y que la batería de respaldo esté cargada si aplica.  
- Confirme que el dispositivo tiene una SIM 4G activa con datos habilitados y la información APN correcta si se requiere.  
- Tenga acceso al método oficial de configuración de Ruptela o al software como Device Center o el asistente de instalación.  
- Verifique si su implementación prefiere UDP o TCP para el transporte de telemetría.  
- Confirme la cobertura celular y que la SIM no esté bloqueada por firewall o restricciones del operador.  
- Mantenga a la mano la versión de firmware y las notas de la versión por si los pasos varían según el firmware.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el Trace5 envía su telemetría y mensajes de estado al endpoint y puerto compartidos de Plaspy para que la plataforma pueda ofrecer rastreo, alertas y visibilidad operativa. Plaspy recibe las conexiones entrantes y determina automáticamente el protocolo del dispositivo para simplificar la integración.

- El Trace5 se configura para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888.  
- Puede seleccionar UDP o TCP como método de transporte según el firmware del dispositivo y la preferencia del instalador.  
- Plaspy detecta el protocolo del rastreador automáticamente cuando se establece la conexión.  
- Una vez recibidos los datos, Plaspy decodifica los mensajes y hace visible el dispositivo en la interfaz de gestión de flotas.  
- Los reportes regulares y los eventos del Trace5 permiten historial de ubicaciones y monitoreo operativo en Plaspy.

## Flujo típico de configuración

1. Acceda al método oficial de configuración de Ruptela o al software como Device Center o el asistente de instalación.  
2. En los ajustes de servidor del dispositivo, ingrese d.plaspy.com o alternativamente la IP del servidor 54.85.159.138.  
3. Establezca el puerto de destino en 8888. Todos los dispositivos en Plaspy usan el mismo puerto.  
4. Si el dispositivo lo solicita, elija UDP o TCP como protocolo de transporte.  
5. Configure cualquier parámetro de APN o de la SIM necesarios para la conectividad celular y guarde los cambios.  
6. Aplique o guarde la configuración y reinicie el dispositivo si la herramienta o el firmware requieren un reinicio.  
7. Valide que el dispositivo informe a Plaspy confirmando que la unidad aparece en su cuenta de Plaspy y envía telemetría regular.

## Ejemplos de comandos de configuración

El Trace5 se puede configurar usando las herramientas y utilidades de Ruptela. Los comandos exactos y su sintaxis dependen del firmware de Ruptela y del método de configuración elegido, por lo que no se incluyen comandos específicos aquí. Use el Ruptela Device Center oficial o el asistente de instalación para aplicar los ajustes de servidor d.plaspy.com o 54.85.159.138 con puerto 8888 y seleccione UDP o TCP si se le solicita.

Si prefiere configuraciones por comandos o una consola de firmware y dispone de comandos públicos de Ruptela, utilice esos comandos según la documentación de Ruptela. Preserve los marcadores de posición como los ajustes APN cuando estén presentes y reemplácelos por los valores de su operador.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la ubicación exacta del menú o el nombre del parámetro para la dirección del servidor, la selección de transporte y la configuración del APN.  
- Elija UDP o TCP según sus necesidades operativas; Plaspy acepta ambos en el puerto 8888 y gestiona la detección de protocolo automáticamente.  
- Todos los dispositivos de los modelos compatibles usan el mismo puerto de Plaspy para simplificar el despliegue y el enrutamiento.  
- Las características de seguridad varían según la variante del Trace5; por ejemplo, TLS v1.2 es compatible con ciertos modelos Trace5 mientras que otros pueden diferir. Consulte la documentación de la variante del dispositivo.  
- Consulte siempre la documentación de Ruptela y las notas de la versión para comandos específicos de firmware y procedimientos de restablecimiento.

## Por qué usar Plaspy con esta configuración

Configurar el Ruptela Trace5 para reportar a Plaspy ofrece a las organizaciones un camino directo hacia la visibilidad de la flota, el historial de ubicaciones y el monitoreo de eventos usando un endpoint de servidor compartido y consistente. El diseño resistente del Trace5 y su conectividad 4G lo hacen adecuado para múltiples casos de uso de seguimiento de flotas y activos, mientras que Plaspy proporciona la plataforma para recopilar y aprovechar los datos del dispositivo.

Para obtener más información sobre Plaspy y cómo esta configuración encaja en flujos de trabajo de flota más amplios, visite https://www.plaspy.com. Para los detalles más actuales sobre la configuración específica del dispositivo, notas de firmware y comandos oficiales, consulte el sitio de Ruptela en https://ruptela.com/ ya que las especificaciones y métodos del fabricante pueden cambiar con el tiempo.

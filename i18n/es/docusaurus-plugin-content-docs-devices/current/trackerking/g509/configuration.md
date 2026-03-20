---
slug: /trackerking/g509/configuration
id: g509-configuration
sidebar_label: Configuration
title: TrackerKing - G509 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el TrackerKing G509 con Plaspy, con ajustes de servidor compartido y pasos prácticos de instalación
keywords:
  - Configuración TrackerKing G509
  - Instalación TrackerKing G509
  - Configuración G509 Plaspy
  - Configuración servidor G509
  - Configuración rastreador GPS TrackerKing
  - Configuración plataforma G509 Plaspy
  - Configuración Plaspy rastreador vehicular
  - Configuración inmovilizador G509
  - Integración TrackerKing G509
  - Guía Plaspy rastreador de flotas
---

# TrackerKing - Configuración del G509

Esta página documenta el contexto público de configuración para usar el TrackerKing G509 con la plataforma Plaspy. Se concentra en los ajustes de servidor prácticos y el flujo de trabajo necesario para apuntar un G509 hacia Plaspy, de modo que las actualizaciones de posición, alarmas y eventos de relé sean visibles en los paneles y vistas móviles de Plaspy. La guía es intencionalmente centrada en la plataforma y está pensada para ayudar a instaladores y administradores de flota a preparar el dispositivo para la integración con Plaspy.

Plaspy usa ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que normalmente solo necesita configurar un endpoint y puerto comunes en el dispositivo. Los pasos exactos en el lado del fabricante para configurar el G509 pueden variar según firmware, revisión de hardware, tipo de instalación y las herramientas de configuración que utilice el instalador. Consulte la documentación de TrackerKing y la interfaz del equipo que tenga para las pantallas o comandos específicos de configuración.

## Resumen de la configuración

Configurar el G509 para Plaspy prepara el dispositivo para enviar posiciones en tiempo real, alarmas e historial a una plataforma centralizada de flotas. El objetivo es asegurar que el rastreador pueda alcanzar el servidor de Plaspy, que se seleccione el transporte y puerto correctos, y que se valide el comportamiento de reporte para que los vehículos aparezcan en la vista de flota de Plaspy.

- Apunte el G509 al endpoint de Plaspy para que sepa dónde reportar datos GPS y de alarma.
- Seleccione el modo de transporte que requiera el firmware del dispositivo, UDP o TCP, y configure el puerto compartido de Plaspy.
- Guarde y aplique la configuración en el G509 usando la herramienta de TrackerKing o el método soportado por el fabricante.
- Verifique que el dispositivo alcance Plaspy y que las posiciones en tiempo real y los eventos sean visibles en la plataforma.
- Pruebe alarmas comunes y acciones de relé para confirmar que Plaspy recibe y puede actuar sobre los eventos del dispositivo.

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte soportado UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al servidor compartido

Todos los dispositivos en Plaspy usan el mismo puerto, por lo que configurar el rastreador para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888 permite a Plaspy aceptar y detectar automáticamente el protocolo que usa el G509.

## Requisitos típicos antes de la instalación

- El G509 debe contar con energía y estar instalado físicamente según las guías de cableado de TrackerKing.
- Se requiere acceso al método o software oficial de configuración de TrackerKing para el G509.
- Una conexión de datos funcional o ruta de transporte desde el dispositivo hacia Internet para que el rastreador pueda comunicarse con Plaspy.
- Credenciales y acceso a su cuenta o instancia de flota en Plaspy para verificar la visibilidad del dispositivo después de la configuración.
- Un plan de pruebas para verificar el reporte de GPS y eventos de alarma como movimiento, exceso de velocidad, geocerca, vibración y corte de energía.
- Herramientas básicas para verificación en campo, por ejemplo un laptop o teléfono para revisar Plaspy durante las pruebas.

## Cómo se conecta este rastreador a Plaspy

Cuando el G509 se configura para reportar a Plaspy, el dispositivo envía sus mensajes de ubicación y eventos al endpoint y puerto compartido de Plaspy, de modo que los operadores de flota puedan monitorear y responder en tiempo real. Plaspy ingiere esos mensajes, interpreta el protocolo automáticamente y pone el dispositivo a disposición en paneles y herramientas de reporte.

- El G509 reporta actualizaciones de posición GPS a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Eventos de alarma como movimiento, exceso de velocidad, incumplimiento de geocerca, vibración y corte de energía se reenvían a Plaspy para notificación y registro.
- Eventos de relé y acciones de inmovilizador remoto pueden iniciarse desde Plaspy cuando el rastreador y la plataforma están configurados para permitir control remoto.
- Los datos históricos de ruta y las estadísticas de kilometraje enviados por el G509 quedan disponibles para reproducción y reporte en Plaspy.
- La detección automática de protocolo de Plaspy reconoce el formato de mensajes del G509 una vez que el dispositivo envía datos al servidor y puerto compartidos.

## Flujo de configuración típico

1. Acceda al método de configuración oficial de TrackerKing o al software para el G509. Esto puede ser una interfaz web, herramienta de escritorio o método por SMS según el firmware y las herramientas del instalador.
2. Ingrese la dirección del servidor de Plaspy indicando d.plaspy.com o 54.85.159.138 en el campo de servidor del dispositivo.
3. Configure el dispositivo para usar el puerto 8888, ya que todos los dispositivos en Plaspy emplean el mismo puerto.
4. Seleccione UDP o TCP si el dispositivo requiere elegir transporte; elija la opción que coincida con la guía de su instalador o las condiciones de red en su despliegue.
5. Aplique o guarde la configuración en el dispositivo usando la herramienta o el método de comandos del fabricante.
6. Reinicie el G509 si el firmware del dispositivo requiere reboot para aplicar cambios de red o servidor.
7. Valide que el dispositivo reporte a Plaspy revisando la vista de flota en Plaspy para actualizaciones de posición en vivo y probando eventos de alarma en el dispositivo.

## Ejemplos de comandos de configuración

Los comandos específicos del fabricante o las pantallas de configuración para el G509 varían según el firmware y el método usado por el instalador. Plaspy solo requiere que el dispositivo apunte a d.plaspy.com o 54.85.159.138 en el puerto 8888 y use UDP o TCP como transporte cuando el dispositivo lo solicite.

Si dispone de comandos SMS o CLI provistos por TrackerKing en el manual del dispositivo, mapee los campos de servidor y puerto a los valores anteriores y conserve cualquier autenticación o marcadores de APN requeridos. Los marcadores que se ven comúnmente en comandos del fabricante pueden incluir elementos como {{apn}}, {{apnu}} o {{apnp}} y deben reemplazarse por los datos APN de su operador cuando sea necesario.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la interfaz exacta de configuración y los nombres de los campos para servidor, IP, puerto y transporte; revise siempre las notas del firmware del G509.
- Cuando un dispositivo ofrece TCP y UDP, elija el transporte recomendado por su instalador o según las condiciones de la red en su área de despliegue; Plaspy acepta ambos en el puerto 8888.
- Algunas herramientas de configuración de TrackerKing utilizan SMS, serial o USB para establecer parámetros de servidor. Use el método oficial de TrackerKing provisto con su unidad.
- Después de cambiar la configuración del servidor, permita un tiempo para que el dispositivo se reconecte y para que Plaspy detecte automáticamente el protocolo antes de iniciar tareas de resolución de problemas.
- Mantenga un registro de los ajustes aplicados y la versión de firmware para facilitar el mantenimiento futuro y validar el comportamiento durante actualizaciones.

## Por qué usar Plaspy con esta configuración

Usar el TrackerKing G509 con Plaspy ofrece visibilidad consolidada de la ubicación de los vehículos, alarmas y controles de relé en una sola plataforma. Para equipos que gestionan flotas o protegen vehículos de alto valor, la solución combinada facilita monitorear movimientos, recibir notificaciones de eventos, revisar el historial de rutas e iniciar acciones de inmovilizador autorizadas cuando corresponda.

To learn more about Plaspy and how it can integrate with TrackerKing devices visit https://www.plaspy.com. Please verify the latest device specific setup details, firmware instructions, and wiring diagrams on the TrackerKing official site https://trackerking.cn/ because manufacturer setup methods and firmware behavior can change over time.

---
slug: /trackerking/g109/configuration
id: g109-configuration
sidebar_label: Configuration
title: TrackerKing - G109 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para integrar el TrackerKing G109 con Plaspy usando la configuración compartida del servidor
keywords:
  - configuración TrackerKing G109
  - instalación TrackerKing G109
  - TrackerKing G109 Plaspy
  - configuración rastreador GPS G109
  - configuración servidor G109
  - instalación rastreador GPS TrackerKing
  - configuración rastreador vehicular G109
  - configuración software de rastreo G109
  - configuración plataforma GPS G109
  - integración TrackerKing con Plaspy
---

# TrackerKing - Configuración del G109

Esta página describe el contexto de configuración pública para usar el TrackerKing G109 con Plaspy. Se enfoca en los valores prácticos a nivel de plataforma y en el flujo de trabajo necesario para apuntar el G109 a Plaspy, de modo que el dispositivo pueda entregar ubicación en tiempo real, alarmas e historial de rutas dentro de la plataforma Plaspy. El contenido aquí está pensado para ayudar a instaladores y gestores de flota a preparar el dispositivo para la integración, sin sustituir la documentación oficial del fabricante.

Plaspy emplea ajustes de servidor compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando los datos se reciben en la plataforma. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use la información del endpoint compartido de Plaspy que se muestra más abajo como destino en la herramienta de configuración de TrackerKing y consulte la documentación de TrackerKing para los pasos específicos del dispositivo.

## Resumen de la configuración

Configurar el G109 para Plaspy significa preparar el rastreador para que se conecte de forma confiable al endpoint del servidor de Plaspy y envíe datos de ubicación y eventos que puedan visualizarse en los paneles de Plaspy. El enfoque está en definir el destino de red, el transporte y en confirmar que el dispositivo puede enviar datos por 4G a la plataforma.

- Apuntar el rastreador al endpoint de servidor de Plaspy para que los paquetes lleguen a d.plaspy.com
- Elegir el tipo de transporte requerido si el dispositivo solicita seleccionar entre UDP y TCP
- Establecer el puerto compartido que usa Plaspy para que los datos del dispositivo sean aceptados y procesados
- Validar la conectividad confirmando que el dispositivo aparece en Plaspy y envía actualizaciones de ubicación
- Verificar que las alarmas y la telemetría como encendido, exceso de velocidad y pérdida de alimentación lleguen a Plaspy

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible: UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando se reciben datos
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que el G109 debe usar el puerto 8888 para compatibilidad

## Requisitos típicos antes de la configuración

- Un G109 alimentado y accesible, con batería suficiente o alimentación del vehículo para realizar la configuración y las pruebas
- Una SIM 4G activa con plan de datos instalada en el dispositivo y los ajustes APN correctos para el operador
- Acceso al método oficial de configuración de TrackerKing para el G109 (herramienta del fabricante, comandos SMS o interfaz USB/configuración según lo provea TrackerKing)
- Una cuenta Plaspy o acceso de administrador para confirmar que el dispositivo aparece y revisar la telemetría entrante
- Un área de prueba con cobertura 4G confiable para validar el reporte en vivo y la reproducción de historial
- Información básica sobre la ubicación e instalación del dispositivo para confirmar el comportamiento correcto tras el despliegue

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el G109 envía su telemetría y mensajes de eventos al endpoint y puerto compartidos de Plaspy para que la plataforma pueda ingerir y mostrar los datos. Plaspy recibe los paquetes, determina automáticamente el protocolo del rastreador y deja disponibles las posiciones y eventos en la interfaz de Plaspy para monitoreo y alertas.

- El G109 envía actualizaciones de posición al servidor de Plaspy d.plaspy.com usando el puerto 8888
- El transporte puede ser UDP o TCP según la configuración del dispositivo y la preferencia del instalador
- Notificaciones de eventos como alarma por vibración, geocerca, exceso de velocidad y fallo de alimentación se reenvían a Plaspy
- El estado de encendido, datos de kilometraje/odómetro y otra telemetría soportada se incluyen en los reportes del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que el dispositivo puede ser aceptado sin seleccionar manualmente el protocolo en la plataforma

## Flujo de trabajo de configuración habitual

1. Acceda al método o software oficial de configuración de TrackerKing para el G109 proporcionado por el fabricante.
2. En los ajustes del servidor del dispositivo, introduzca el destino de Plaspy usando el dominio d.plaspy.com o la IP del servidor 54.85.159.138.
3. Configure el puerto del dispositivo en 8888 para coincidir con el puerto requerido por Plaspy para todos los dispositivos soportados.
4. Elija UDP o TCP como transporte si el G109 solicita seleccionar el tipo de transporte.
5. Guarde o aplique la configuración en la herramienta de TrackerKing y confirme que los ajustes fueron aceptados.
6. Reinicie el dispositivo si las instrucciones del fabricante indican que es necesario para que los ajustes entren en vigor.
7. Valide que el dispositivo reporte a Plaspy comprobando las actualizaciones de ubicación y los mensajes de eventos entrantes en su cuenta Plaspy.

## Ejemplos de comandos de configuración

Los comandos y la sintaxis exacta para configurar el G109 dependen de la herramienta de configuración de TrackerKing, la versión de firmware y el método compatible con su unidad (por ejemplo comandos SMS, una utilidad de configuración por USB o una herramienta web). Dado que TrackerKing ofrece varios canales de configuración y las versiones de firmware varían, siga la documentación oficial de TrackerKing o la herramienta de configuración para aplicar el dominio o la IP del servidor Plaspy y los valores de puerto presentados arriba.

Si dispone de un conjunto oficial de comandos SMS o de un archivo de configuración de TrackerKing, aplique el destino d.plaspy.com o 54.85.159.138 y el puerto 8888 allí, o consulte al soporte de TrackerKing para el formato exacto de comandos según su firmware.

## Notas de configuración

- Las diferencias de firmware pueden cambiar los comandos exactos de configuración y las etiquetas de menú; siempre revise las notas de firmware del G109 antes de aplicar ajustes.
- Si el dispositivo ofrece tanto transporte UDP como TCP, pruebe ambos durante la puesta en servicio para confirmar la entrega fiable según las condiciones de su red.
- Plaspy usa el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador al recibir datos, por lo que se requiere el puerto uniforme 8888.
- Confirme la configuración APN y los parámetros de la SIM en el G109 antes de intentar alcanzar d.plaspy.com para que el rastreador pueda establecer una conexión de datos 4G.
- Tras la configuración inicial, verifique en Plaspy las alarmas y flujos de telemetría como encendido, vibración y kilometraje para asegurar visibilidad operativa completa.

## Por qué usar Plaspy con esta configuración

Usar el TrackerKing G109 con Plaspy ofrece a las organizaciones una vía práctica para el rastreo en tiempo real de vehículos y motocicletas, entrega oportuna de alarmas y reproducción histórica de rutas para análisis de incidentes. Apuntar el G109 al endpoint compartido de Plaspy simplifica la integración y permite a los operadores centrarse en la puesta en servicio, pruebas y procesos operativos en lugar de gestionar protocolos de backend.

Para obtener más información sobre Plaspy y cómo maneja la ingestión de dispositivos, visite https://www.plaspy.com. Para los comandos de configuración específicos más recientes, información de firmware y guías de instalación del G109, verifique los detalles en el sitio del fabricante https://trackerking.cn/ ya que los métodos y el comportamiento del firmware pueden cambiar con el tiempo.

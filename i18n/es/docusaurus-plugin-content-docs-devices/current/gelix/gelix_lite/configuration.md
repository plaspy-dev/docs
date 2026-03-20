---
slug: /gelix/gelix_lite/configuration
id: gelix_lite-configuration
sidebar_label: Configuration
title: Gelix - Gelix Lite Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Gelix Lite y compatibilidad con Plaspy para rastreo GPS
keywords:
  - Gelix
  - Gelix Lite
  - configuración Gelix Lite
  - instalación Gelix Lite
  - Gelix Lite Plaspy
  - configuración seguimiento Gelix
  - configuración GPS Gelix Lite
  - configuración dispositivo Plaspy
  - configuración rastreador GPS
  - configuración rastreo vehicular
---

# Gelix - Configuración de Gelix Lite

Esta página describe el contexto público de configuración para usar el dispositivo telemático Gelix Lite con Plaspy. Se concentra en los ajustes prácticos del servidor y el flujo de trabajo necesarios para apuntar el equipo a Plaspy, de modo que reporte ubicación y eventos a la plataforma. La guía se basa en conceptos de integración públicos y en los ajustes de servidor de Plaspy.

Plaspy utiliza configuraciones de servidor compartidas entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo envía datos. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, revisión de hardware, tipo de instalación y las herramientas del proveedor. El Gelix Lite soporta transmisión por GPRS IP y SMS y puede configurarse para reportar a servidores receptores; por lo general, deberá apuntar una de esas entradas receptoras a Plaspy usando los ajustes de servidor compartidos que se indican a continuación.

## Resumen de la configuración

Preparar el Gelix Lite para la integración con Plaspy implica configurar el dispositivo para que reporte al endpoint de Plaspy y validar la conectividad para que la unidad sea visible en la plataforma. El objetivo es garantizar conectividad GPRS confiable o un fallback por SMS, la dirección y transporte de servidor correctos, y que el dispositivo sea reconocido por Plaspy.

- Configure una de las entradas de servidor receptor del Gelix Lite para que apunte a Plaspy y así el dispositivo envíe su telemetría a la plataforma.
- Asegúrese de que el dispositivo tenga conectividad GPRS válida o capacidad SMS para la configuración inicial y el reporte continuo.
- Elija el protocolo de transporte que soporte el equipo y establezca el puerto conforme a los requisitos de Plaspy.
- Valide el IMEI y la identificación del equipo en Plaspy para que los mensajes recibidos se asocien con el activo correcto.
- Pruebe el reporte provocando movimiento o enviando un informe de posición manual y confirme que el dispositivo aparece en Plaspy.

## Ajustes del servidor de Plaspy

Use los siguientes ajustes públicos de servidor de Plaspy al configurar el Gelix Lite. Plaspy emplea el mismo puerto para todos los dispositivos y detecta automáticamente el protocolo del rastreador cuando llegan los datos.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte soportado UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador
- Tenga en cuenta que todos los dispositivos en Plaspy usan el mismo puerto 8888 para conexiones entrantes de rastreadores

## Requisitos habituales antes de la configuración

- Dispositivo alimentado y accesible, ya sea instalado en el vehículo o en banco de pruebas, para su configuración
- SIM activa con datos habilitados para reporte por GPRS IP o con SMS habilitado para configuración por SMS y fallback
- Acceso al método oficial de configuración de Gelix como la herramienta del proveedor, la interfaz de comandos por SMS o la utilidad serial/USB
- Conocimiento del IMEI o identificador del equipo para registrar y verificar la unidad en Plaspy
- Cobertura de red en la zona donde operará el dispositivo para permitir comunicación GPRS con el endpoint de Plaspy

## Cómo se conecta este rastreador a Plaspy

El Gelix Lite está configurado para enviar su telemetría registrada por GPRS IP o por SMS a servidores receptores designados. Al apuntar a Plaspy, el dispositivo transmite sus datos al endpoint y puerto compartidos de Plaspy para que la plataforma pueda mapear automáticamente el protocolo y presentar los datos del dispositivo.

- El dispositivo envía paquetes GPRS IP a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888
- El transporte puede ser UDP o TCP según la configuración y preferencia del equipo
- Plaspy detecta automáticamente el protocolo del rastreador a partir de los mensajes entrantes, por lo que se usa el mismo puerto para todos los dispositivos compatibles
- Gelix Lite puede configurarse para usar uno de dos servidores receptores; una de esas entradas puede apuntar a Plaspy
- SMS puede utilizarse para configurar mediante comandos o como ruta de reporte de reserva cuando esté soportado

## Flujo típico de configuración

1. Acceda al método o software oficial de configuración de Gelix proporcionado por el fabricante, o prepare los comandos SMS si ese es el canal soportado.
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP 54.85.159.138 como receptor del dispositivo.
3. Establezca el puerto del dispositivo en 8888 para coincidir con la configuración entrante de Plaspy.
4. Elija UDP o TCP si el dispositivo requiere selección de transporte; cualquiera de los dos es aceptable porque Plaspy detecta automáticamente el protocolo.
5. Aplique o guarde la configuración en la herramienta del dispositivo o envíe los comandos SMS de configuración y espere la confirmación.
6. Reinicie el dispositivo si las instrucciones del fabricante requieren reboot para aplicar los ajustes de red.
7. Valide que el dispositivo reporta a Plaspy verificando que su IMEI o identificador aparezca en la plataforma y que se reciban posiciones recientes o mensajes de latido.

## Ejemplos de comandos de configuración

El Gelix Lite admite configuración mediante herramientas del fabricante y comandos SMS. Los comandos exactos y la sintaxis varían según el firmware y el software del proveedor. Consulte la guía de configuración de Gelix para el conjunto de comandos preciso de su revisión de firmware. Los métodos típicos del fabricante incluyen:

- Uso de la aplicación oficial de configuración de Gelix o la interfaz serial para establecer la dirección de servidor y el puerto
- Envío de comandos SMS de configuración al número del dispositivo cuando la configuración por SMS está soportada

Dado que la sintaxis de los comandos difiere entre versiones de firmware y herramientas del proveedor, siga la documentación de Gelix o las indicaciones de la utilidad de configuración para ingresar:
- dominio o IP del servidor como d.plaspy.com o 54.85.159.138
- puerto 8888
- elección de transporte UDP o TCP

Si la documentación de Gelix proporciona ejemplos de comandos SMS, aplíquelos en el orden que indique el fabricante y verifique cada paso antes de avanzar al siguiente.

## Notas de configuración

- Las diferencias de firmware pueden cambiar las opciones disponibles y la sintaxis de comandos; confirme los comandos exactos para su versión de firmware Gelix Lite.
- Elija UDP o TCP según su red y la preferencia del instalador; Plaspy detectará el protocolo automáticamente en el puerto 8888.
- Cuando esté disponible, utilice la herramienta oficial de configuración de Gelix para obtener resultados más confiables que la configuración por SMS ad hoc.
- El Gelix Lite puede usar dos servidores receptores; puede mantener un receptor secundario para pruebas o reporte de respaldo.
- Según material del fabricante, el Gelix Lite puede soportar actualización remota de firmware; confirme los procedimientos de actualización con Gelix antes de aplicar cambios de firmware.

## Por qué usar Plaspy con esta configuración

Configurar el Gelix Lite para que reporte a Plaspy centraliza los datos de ubicación y eventos para la visibilidad de flotas y el monitoreo operativo. Usar el endpoint compartido de Plaspy simplifica la incorporación de dispositivos porque la plataforma emplea el mismo puerto entrante para todos los equipos y detecta automáticamente el protocolo del rastreador, lo que reduce la complejidad de configuración a escala.

Para conocer más sobre Plaspy y las funcionalidades de la plataforma, visite https://www.plaspy.com. Para los comandos específicos más recientes del Gelix Lite, detalles de firmware e instrucciones de instalación, verifique la documentación oficial del fabricante en http://www.gelix.com/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.

---
slug: /neomatica/adm500/configuration
id: adm500-configuration
sidebar_label: Configuration
title: Neomatica - ADM500 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Neomatica ADM500 con Plaspy, ajustes de servidor y pasos prácticos
keywords:
  - Configuración Neomatica ADM500
  - Configuración ADM500 Plaspy
  - Configuración servidor Neomatica ADM500
  - Configuración rastreador ADM500
  - Configuración rastreador Plaspy
  - Configuración telemática ADM500
  - Guía integración ADM500
  - Software seguimiento Neomatica ADM500
  - Rastreo vehicular ADM500
  - Configuración plataforma ADM500
---

# Neomatica - Configuración del ADM500

Esta página documenta el contexto público de configuración para usar el rastreador GPS Neomatica ADM500 con Plaspy. Resume los ajustes de servidor compartidos que Plaspy requiere, explica los pasos típicos para preparar el ADM500 para la integración con la plataforma y señala comprobaciones prácticas para validar la conectividad y la visibilidad en Plaspy. Esta guía se basa en prácticas públicas de integración y la descripción del dispositivo ADM500.

Plaspy utiliza ajustes de servidor compartidos entre dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use esta guía para aplicar los ajustes públicos de conexión de Plaspy al ADM500 y consulte la documentación de Neomatica o las herramientas del proveedor para comandos específicos de la interfaz y comportamiento del firmware.

## Resumen de configuración

Preparar el ADM500 para Plaspy implica configurar el dispositivo para que reporte su ubicación y telemetría al endpoint del servidor Plaspy, asegurar la conectividad de red y confirmar que la unidad aparece en la plataforma. La conectividad celular del ADM500, el soporte de doble SIM y las interfaces de configuración flexibles (herramientas para Windows/Android, SMS, comandos de servidor, Bluetooth) permiten varios flujos de trabajo prácticos.

- Configure el ADM500 para que reporte al endpoint del servidor Plaspy usando los ajustes compartidos (d.plaspy.com o 54.85.159.138 en el puerto 8888).
- Elija el protocolo de transporte que el dispositivo soporte (UDP o TCP) y ajuste el puerto a 8888 para Plaspy.
- Valide la conectividad celular y los parámetros APN para que los paquetes alcancen Plaspy de forma fiable desde el ADM500.
- Aplique la configuración y reinicie el dispositivo cuando sea necesario para que empiece a reportar al servidor Plaspy.
- Confirme que el dispositivo es visible en Plaspy; la plataforma detectará automáticamente el protocolo y procesará los mensajes entrantes.

## Ajustes del servidor Plaspy

Use estos ajustes públicos de servidor Plaspy al configurar el ADM500:

- Dominio del servidor: d.plaspy.com
- IP del servidor: 54.85.159.138
- Puerto: 8888
- Transporte: UDP o TCP son compatibles tanto en el dispositivo como en Plaspy
- Plaspy detectará automáticamente el protocolo correcto cuando el dispositivo se conecte

Tenga en cuenta que todos los dispositivos en Plaspy usan el mismo puerto y que la detección automática de protocolos de Plaspy simplifica la incorporación de dispositivos una vez que se configura el servidor y el transporte correctos.

## Requisitos previos antes de la configuración

- Asegúrese de que el ADM500 esté alimentado y que la batería de respaldo interna esté cargada o que el vehículo esté conectado a la alimentación.
- Inserte una nanoSIM funcional con un plan de datos y confirme el registro celular para conectividad LTE/GPRS.
- Tenga acceso al método oficial de configuración de Neomatica o al software correspondiente (configurador para Windows o Android, comandos SMS, o herramientas provistas por el fabricante).
- Conozca el IMEI o identificador del dispositivo para poder vincular la unidad física con los registros en Plaspy.
- Confirme los datos de APN y la información de la cuenta del operador móvil para la SIM en uso.
- Si va a usar Bluetooth o configuración local, disponga de un dispositivo compatible y de la app o configurador de Neomatica.

## Cómo se conecta este rastreador a Plaspy

El ADM500 envía paquetes estandarizados de ubicación y telemetría a través de la red celular al endpoint y puerto compartidos de Plaspy. Una vez configurado para usar el servidor Plaspy, la plataforma recibe coordenadas en tiempo real, telemetría de sensores y mensajes de eventos para poblar paneles, alertas e informes.

- El ADM500 reporta posición GNSS y datos de movimiento a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El dispositivo puede usar UDP o TCP como transporte; seleccione el que sea compatible o preferible en su entorno.
- Plaspy detecta automáticamente el protocolo del rastreador y parsea los paquetes entrantes para el monitoreo en vivo.
- Telemetría como encendido, entradas analógicas, lecturas de sensores de combustible y datos de sensores BLE se envía a Plaspy cuando están configurados.
- Los eventos y alarmas enviados por el dispositivo son procesados por Plaspy para alertas y registro histórico.

## Flujo de configuración típico

1. Acceda al método oficial de configuración de Neomatica o al software (configurador para Windows/Android, SMS o comandos de servidor) para el ADM500.
2. En los ajustes de servidor del dispositivo, ingrese el servidor Plaspy como d.plaspy.com o 54.85.159.138 según la herramienta de configuración que utilice.
3. Configure el puerto del servidor en 8888 como puerto de destino para Plaspy.
4. Si el ADM500 solicita selección de transporte, elija UDP o TCP según su preferencia o los requisitos de red.
5. Guarde o aplique la configuración en la herramienta del dispositivo y, si procede, envíe cualquier comando de servidor requerido para escribir los ajustes en el equipo.
6. Reinicie el ADM500 si la herramienta o el dispositivo solicita un reinicio para activar los nuevos ajustes del servidor.
7. Verifique que el ADM500 reporte a Plaspy y sea visible en la plataforma; confirme que el dispositivo aparece y está enviando actualizaciones de ubicación.

## Ejemplos de comandos de configuración

Los comandos exactos y la sintaxis para configurar el ADM500 varían según el firmware de Neomatica, el método de configuración elegido y las herramientas del proveedor. Muchos ADM500 se configuran con el configurador para Windows o Android, comandos SMS o comandos desde el servidor. Al usar un configurador o SMS, establezca la dirección del servidor en d.plaspy.com o 54.85.159.138 y el puerto en 8888, y seleccione UDP o TCP según corresponda. Plaspy detectará el protocolo automáticamente.

Si requiere ejemplos concretos de comandos, consulte la documentación oficial de Neomatica o la herramienta del proveedor que esté usando para obtener los formatos de comandos exactos y ejemplos específicos para su revisión de firmware.

## Notas de configuración

- Las versiones de firmware del dispositivo y las revisiones del configurador del proveedor pueden cambiar la sintaxis de comandos y los campos disponibles; siempre verifique la documentación de Neomatica para su versión de firmware.
- Use UDP o TCP según la fiabilidad de la red y la herramienta de configuración del dispositivo; ambos transportes son compatibles con Plaspy en el puerto 8888.
- Las configuraciones de doble SIM en el ADM500 pueden mejorar la disponibilidad; asegúrese de que los parámetros APN sean correctos para la SIM principal y la de respaldo.
- Para configuraciones por aire o por SMS, confirme que el dispositivo acepta comandos remotos en su estado actual de firmware.
- Plaspy utiliza el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo, lo que simplifica los despliegues con múltiples modelos.

## Por qué usar Plaspy con esta configuración

Configurar el Neomatica ADM500 para que reporte a Plaspy ofrece a las organizaciones un camino sencillo hacia la visibilidad en tiempo real, el monitoreo de eventos y la consolidación de telemetría para flotas y activos. El GNSS multi-constelación del ADM500, la integración de sensores y la resiliencia de doble SIM complementan el endpoint unificado de Plaspy y su detección automática de protocolos, permitiendo un rastreo confiable e incorporación simplificada.

Para conocer más sobre Plaspy y las capacidades de la plataforma, visite https://www.plaspy.com. Para métodos de configuración, notas de firmware y detalles del fabricante más recientes, verifique la información en el sitio de Neomatica https://neomatica.com/.

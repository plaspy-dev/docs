---
slug: /navtelekom/start_s_2011/configuration
id: start_s_2011-configuration
sidebar_label: Configuration
title: Navtelekom - START S-2011 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para conectar el START S-2011 de Navtelekom con la plataforma Plaspy
keywords:
  - Configuración Navtelekom START S-2011
  - Configuración START S-2011
  - Rastreador Navtelekom Plaspy
  - Configuración de servidor START S-2011
  - Integración START S-2011 Plaspy
  - Configuración rastreador GPS Navtelekom
  - Configuración seguimiento vehicular START S-2011
  - Configuración de tracker para Plaspy
  - Configuración plataforma GPS START S-2011
  - START S-2011 NTC Configurator
---

# Navtelekom - Configuración START S-2011

Esta página describe el contexto público de configuración para usar el rastreador GPS Navtelekom START S-2011 con la plataforma de gestión de flotas Plaspy. Reúne los ajustes prácticos y enfocados en la plataforma que usted necesita para apuntar el dispositivo a Plaspy y verificar la conectividad básica y la visibilidad en la plataforma. Use esto como referencia técnica para aplicar los valores de servidor compartidos de Plaspy y para validar que el rastreador reporte correctamente.

Plaspy emplea ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El START S-2011 es un rastreador 2G compacto con antenas GNSS y GSM internas, Bluetooth 4.0 para configuración local, batería de respaldo, alimentación por USB Tipo C y configuración vía NTC Configurator. Siga los procedimientos del fabricante para comandos específicos del dispositivo, actualizaciones de firmware y configuración local mientras aplica los valores de servidor de Plaspy que se muestran a continuación.

## Resumen de la configuración

Este proceso prepara el START S-2011 para comunicarse con Plaspy para que su ubicación, eventos de entrada y telemetría básica aparezcan en su cuenta Plaspy. El énfasis está en apuntar el dispositivo al endpoint compartido de Plaspy, confirmar los ajustes de transporte y ejecutar comprobaciones sencillas para verificar que el rastreador informe correctamente.

- Configure el rastreador para enviar sus paquetes de reporte al endpoint del servidor de Plaspy.
- Seleccione el protocolo de transporte adecuado y establezca el puerto de la plataforma que usa Plaspy.
- Guarde y aplique los ajustes en la herramienta del fabricante o mediante configuración local como Bluetooth o USB.
- Reinicie o encienda el dispositivo si es necesario para asegurar que los nuevos ajustes de servidor entren en vigor.
- Valide la conectividad confirmando que el rastreador aparece en Plaspy y envía actualizaciones periódicas de ubicación y eventos.

## Valores de servidor de Plaspy

Use los siguientes ajustes públicos del servidor de Plaspy al configurar el START S-2011. Plaspy emplea el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador.

- servidor dominio d.plaspy.com
- servidor IP 54.85.159.138
- puerto 8888
- transporte compatible UDP o TCP
- detección automática de protocolo en Plaspy

## Requisitos habituales antes de la configuración

- Un START S-2011 encendido con una nano SIM activa y cobertura 2G en su zona, ya que el dispositivo reporta sobre redes 2G.
- Acceso al método de configuración del fabricante como NTC Configurator, configuración local por Bluetooth o conexión USB según lo provea Navtelekom.
- Cable USB Tipo C o una fuente de alimentación estable y la batería del dispositivo cargada para la configuración y las pruebas.
- Una cuenta en Plaspy o acceso a la plataforma para verificar que el dispositivo aparece después de la configuración.
- Revisión del firmware para confirmar que el rastreador soporta el reporte remoto y el mapeo de protocolo previsto para Plaspy.
- Identificadores básicos del dispositivo disponibles como el IMEI para poder localizar y emparejar el rastreador dentro de Plaspy una vez que empiece a reportar.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el START S-2011 envía reportes periódicos de posición y paquetes de eventos al endpoint compartido del servidor de Plaspy y al puerto configurado. Plaspy mapea los datos entrantes en vistas de seguimiento, alertas y telemetría del tablero para que los operadores puedan monitorear los dispositivos en tiempo real.

- El rastreador se configura para reportar a d.plaspy.com o a la IP del servidor 54.85.159.138 en el puerto 8888.
- El transporte se ajusta a UDP o TCP en el equipo según la preferencia del instalador y la capacidad del dispositivo.
- Plaspy detecta automáticamente el protocolo del rastreador y procesa los paquetes de reporte entrantes.
- Ubicación, eventos de entradas discretas, lecturas de entradas analógicas y eventos de salidas de control se envían a Plaspy para su visualización y reglas.
- Actualizaciones regulares de posición y mensajes por eventos permiten seguimiento en vivo, alertas de geocerca y vistas básicas de telemetría.

## Flujo típico de configuración

1. Acceda al método oficial de configuración de Navtelekom, como NTC Configurator, la configuración local por Bluetooth o la herramienta de configuración por USB.
2. En los ajustes de servidor, introduzca el endpoint de Plaspy ya sea como dominio d.plaspy.com o la IP del servidor 54.85.159.138.
3. Ajuste el puerto de reporte a 8888 que usa Plaspy para todos los dispositivos compatibles.
4. Si el dispositivo solicita elegir transporte, seleccione UDP o TCP según su red y la preferencia del instalador.
5. Aplique o guarde la nueva configuración en la herramienta del fabricante y confirme que los ajustes se escribieron en el dispositivo.
6. Reinicie o desconecte y vuelva a conectar la alimentación del START S-2011 si el dispositivo lo requiere para activar la nueva configuración de servidor.
7. Valide que el dispositivo reporte a Plaspy localizando el rastreador en la plataforma y confirmando que llegan mensajes periódicos de posición o eventos.

## Ejemplos de comandos de configuración

El START S-2011 se configura típicamente usando el NTC Configurator de Navtelekom, la configuración local por Bluetooth o la conexión USB. La sintaxis exacta de comandos y la interfaz de usuario dependen de la herramienta del fabricante y de la versión de firmware. Dado que los comandos y herramientas del fabricante varían, consulte la documentación de Navtelekom o la interfaz del NTC Configurator para los pasos exactos para establecer dominio o IP del servidor, puerto y transporte. Use los valores del servidor Plaspy indicados más arriba cuando se le solicite la dirección de servidor y el puerto.

## Notas de configuración

- Plaspy usa el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que las acciones clave en el dispositivo son la dirección del servidor y la selección del transporte.
- Las revisiones de firmware y hardware pueden cambiar los menús de configuración y las opciones de transporte disponibles; confirme siempre la versión de firmware antes de realizar cambios.
- La configuración local por Bluetooth vía BLE o la configuración por USB con NTC Configurator pueden ofrecer flujos de trabajo diferentes; siga las instrucciones de la herramienta del fabricante.
- Elija UDP para un reporte con menor sobrecarga o TCP si su despliegue requiere entrega orientada a conexión, teniendo en cuenta las características de la red.
- Después de aplicar los ajustes, espere varios minutos para que el dispositivo se registre y para que Plaspy muestre los primeros mensajes entrantes.

## Por qué usar Plaspy con esta configuración

Usar el Navtelekom START S-2011 con Plaspy permite que un dispositivo compacto y de cableado reducido alimente posiciones en vivo y telemetría de entradas a una plataforma centralizada. Para flotas y gestores de activos que requieren actualizaciones de ubicación sencillas, reportes básicos de eventos y flujos de control remoto simples, configurar el START S-2011 para que reporte a Plaspy entrega visibilidad operativa y un flujo de telemetría integrado.

To learn more about Plaspy and supported integration practices visit https://www.plaspy.com. For device specific setup, firmware details, and the latest manufacturer guidance verify information with Navtelekom at https://www.navtelecom.ru/ as device behavior and configuration methods may change between firmware and hardware revisions.

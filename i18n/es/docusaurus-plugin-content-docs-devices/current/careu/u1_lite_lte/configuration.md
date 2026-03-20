---
slug: /careu/u1_lite_lte/configuration
id: u1_lite_lte-configuration
sidebar_label: Configuration
title: CAREU - U1 Lite+ LTE Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el CAREU U1 Lite+ LTE con Plaspy usando el servidor compartido y pasos prácticos
keywords:
  - Configuración CAREU U1 Lite+ LTE
  - Instalación CAREU U1 Lite+ LTE
  - Configuración de servidor CAREU U1 Lite+ LTE
  - Configuración de dispositivo Plaspy
  - Configuración rastreador GPS Plaspy
  - Guía U1 Lite+ LTE
  - Configuración telemática de vehículos
  - Integración OBD II CAN
  - Configuración rastreo de flotas
  - Configuración telemática de video
---

# CAREU - Configuración del U1 Lite+ LTE

Esta página describe el contexto público de configuración para usar el rastreador CAREU U1 Lite+ LTE con Plaspy. Se centra en los ajustes de servidor compartido y en el flujo de trabajo práctico que suelen seguir los operadores para apuntar el equipo a Plaspy y habilitar la telemetría, dejando los detalles específicos del fabricante a la documentación oficial de CAREU.

Plaspy usa ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración del proveedor que usted utilice. Use esta página para preparar y validar el U1 Lite+ LTE con Plaspy y consulte la documentación de CAREU o a su proveedor para pantallas de configuración o comandos específicos del modelo.

## Resumen de la configuración

Esta configuración prepara el U1 Lite+ LTE para enviar datos GNSS, CAN/OBD y de sensores a Plaspy para seguimiento en tiempo real y gestión de flotas. El objetivo es asegurarse de que el dispositivo esté apuntando al endpoint compartido de Plaspy, sea accesible a través de la red celular y aparezca dentro de su cuenta de Plaspy.

- Configure el dispositivo para que reporte al endpoint y puerto compartidos de Plaspy.
- Verifique que el dispositivo tenga acceso de red necesario y una SIM/APN adecuada para conectividad celular.
- Valide la selección de transporte (UDP o TCP) si la herramienta de configuración del dispositivo lo requiere.
- Guarde y aplique los ajustes, y confirme que el dispositivo está enviando ubicación y telemetría a Plaspy.
- Use funciones de gestión remota como FOTA o FTP solo después de confirmar la compatibilidad con el endpoint de Plaspy.

## Ajustes de servidor de Plaspy

Al configurar el CAREU U1 Lite+ LTE para Plaspy, utilice estos ajustes públicos exactamente como se muestran:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol so you do not need to select a protocol inside Plaspy

Nota: Todos los dispositivos en Plaspy usan el mismo puerto para las conexiones de rastreadores.

## Requisitos habituales antes de la configuración

- Una unidad U1 Lite+ LTE instalada y alimentada con acceso a la interfaz de configuración del dispositivo o a la herramienta oficial de CAREU.
- Una SIM celular activa con el plan de datos adecuado y un APN configurado para conectividad de datos si fuera necesario.
- Cobertura de red LTE/3G/2G en el área de instalación y verificación de que el dispositivo puede registrarse en la red.
- Acceso al manual de usuario de CAREU, al software de configuración o al portal del proveedor para conocer los pasos exactos que aplican a su hardware y versión de firmware.
- Una cuenta en Plaspy y un lugar en la plataforma Plaspy donde validar el dispositivo una vez que comience a reportar.
- Conocimiento de si su dispositivo requiere selección explícita de UDP o TCP durante la configuración.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el U1 Lite+ LTE reporta posición, telemetría OBD II/CAN y entradas de sensores compatibles a Plaspy a través de la conexión celular del dispositivo. El dispositivo se apunta al endpoint y puerto compartidos de Plaspy para que la plataforma pueda ingerir los mensajes y presentarlos en paneles y reportes en vivo.

- El rastreador se configura para reportar al endpoint compartido de Plaspy d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888.
- El transporte puede ser UDP o TCP según la configuración del dispositivo; ambos son aceptados en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que la plataforma interpreta los mensajes entrantes sin mapeo manual de protocolo.
- Cuando los mensajes llegan a Plaspy, las fijaciones de ubicación y la telemetría aparecen en la plataforma para monitoreo, geocercas y reportes.
- Los eventos del dispositivo y diagnósticos enviados por el U1 Lite+ LTE estarán disponibles para activar alertas y flujos de trabajo automatizados dentro de Plaspy.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración de CAREU o al software del fabricante (interfaz web del dispositivo, herramienta del fabricante, comandos SMS o portal del proveedor) para su modelo y versión de firmware del U1 Lite+ LTE.
2. En los ajustes de servidor o TCP/UDP del dispositivo, ingrese el dominio de Plaspy d.plaspy.com o la IP del servidor 54.85.159.138.
3. Configure el puerto de reporte en 8888 (Plaspy usa el mismo puerto para todos los dispositivos).
4. Elija UDP o TCP si el dispositivo requiere selección de transporte; ambos son compatibles con Plaspy en el puerto 8888.
5. Configure cualquier APN o ajuste de SIM requerido para que el dispositivo tenga conectividad de datos, luego aplique o guarde la configuración.
6. Reinicie o haga un ciclo de energía del dispositivo si las instrucciones del fabricante requieren reboot para que los ajustes hagan efecto.
7. Valide que el dispositivo reporte a Plaspy revisando su cuenta Plaspy para los primeros mensajes del equipo y verificando que la ubicación y la telemetría sean visibles.

## Ejemplos de comandos de configuración

El método exacto de configuración y los comandos para el CAREU U1 Lite+ LTE varían según el firmware y las herramientas del fabricante que usted utilice. Algunos instaladores usarán una app de mano, una utilidad web de configuración o comandos SMS/AT que proporciona CAREU. Debido a que los conjuntos de comandos e interfaces del fabricante difieren, consulte la documentación de CAREU o a su proveedor para los comandos exactos o los pasos GUI necesarios para apuntar el dispositivo a d.plaspy.com o 54.85.159.138 en el puerto 8888.

Si su proveedor suministra comandos por SMS o consola, siga la sintaxis del proveedor para:
- establecer el dominio del servidor o la IP del servidor en d.plaspy.com o 54.85.159.138
- fijar el puerto de reporte en 8888
- definir el transporte a UDP o TCP cuando sea necesario
Conserve cualquier marcador de APN que use el proveedor y confirme los valores antes de guardar.

## Notas de configuración

- Las diferencias de firmware pueden cambiar nombres de menús, sintaxis de comandos o la disponibilidad de UDP frente a TCP; siempre verifique el método correcto para la versión de firmware de su dispositivo.
- Si su instalación usa credenciales APN, configúrelas según lo requiera su operador móvil; los marcadores pueden usarse en comandos del proveedor y deben reemplazarse por los valores del operador.
- Plaspy acepta tanto UDP como TCP en el puerto 8888 y detecta automáticamente el protocolo del rastreador, por lo que el objetivo principal es apuntar el dispositivo a d.plaspy.com o 54.85.159.138 y garantizar la conectividad de red.
- La configuración remota y FOTA vía FTP son soportadas por la familia de dispositivos en general; confirme las URLs y procesos exactos de FOTA en la documentación de CAREU antes de iniciar actualizaciones.
- Cuando sea posible, realice una instalación de prueba y validación inicial en un entorno controlado para confirmar el reporte, el comportamiento de geocercas y el mapeo de telemetría OBD II/CAN en Plaspy.

## Por qué usar Plaspy con esta configuración

Configurar el CAREU U1 Lite+ LTE para que reporte a Plaspy ofrece a los operadores de flotas visibilidad consistente de la ubicación, diagnósticos del motor y eventos de sensores con un esfuerzo mínimo de integración. El endpoint compartido de Plaspy y la detección automática de protocolo facilitan el despliegue, de modo que los dispositivos pueden apuntarse a una única dirección de servidor y comenzar a reportar telemetría para monitoreo, alertas y análisis histórico.

Para conocer más sobre Plaspy y cómo soporta flotas mixtas y dispositivos telemáticos, visite https://www.plaspy.com. Para los detalles más recientes sobre configuración específica de dispositivos, notas de firmware e instrucciones del fabricante para el CAREU U1 Lite+ LTE, verifique la información en el sitio oficial de CAREU https://www.systech-iot.com/ ya que el comportamiento del dispositivo y los métodos de configuración pueden cambiar con el tiempo.

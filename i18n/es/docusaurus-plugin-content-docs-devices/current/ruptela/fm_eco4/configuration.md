---
slug: /ruptela/fm_eco4/configuration
id: fm_eco4-configuration
sidebar_label: Configuration
title: Ruptela - FM-Eco4 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Ruptela FM‑Eco4 y conectarlo a Plaspy con detección automática de protocolo
keywords:
  - Configuración Ruptela FM-Eco4
  - Instalación Ruptela FM-Eco4
  - Configuración servidor FM-Eco4
  - Integración FM-Eco4 Plaspy
  - Ajustes servidor Plaspy
  - Guía configuración rastreador GPS
  - Configuración seguimiento de vehículos
  - Configuración seguimiento de flotas
  - Instrucciones rastreador Ruptela
  - Detección de protocolo rastreador
---

# Ruptela — Configuración FM-Eco4

Esta página ofrece el contexto público de configuración y orientación práctica para usar el rastreador Ruptela FM‑Eco4 con Plaspy. Se centra en los ajustes del servidor y el flujo de trabajo necesarios para apuntar el dispositivo a Plaspy, qué verificar antes de la integración y cómo suele reportar el rastreador a la plataforma. La guía está pensada para instaladores e ingenieros de flota que preparan el FM‑Eco4 para su conexión a Plaspy.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Consulte la documentación de Ruptela y las herramientas locales de su instalador para comandos específicos del dispositivo, formatos SMS o detalles de software al seguir estos pasos públicos de configuración.

## Resumen de configuración

El objetivo al configurar un FM‑Eco4 para Plaspy es preparar el rastreador para que envíe de forma fiable datos de ubicación y estado al endpoint de Plaspy, de modo que el dispositivo aparezca y se actualice correctamente en la plataforma. Esto implica establecer la dirección y el puerto del servidor, seleccionar el transporte adecuado si es necesario, aplicar cualquier configuración de operador o APN que el equipo requiera para acceder a Internet y validar que el rastreador reporte con éxito a Plaspy.

- Apunte el rastreador al endpoint de Plaspy para que los datos lleguen a la instancia correcta de la plataforma.
- Configure la opción de transporte del dispositivo (UDP o TCP) si la interfaz lo requiere.
- Asegúrese de que la SIM y la configuración APN o cualquier ajuste por SMS estén correctos para que el rastreador pueda establecer conectividad.
- Aplique y guarde la configuración, y reinicie el rastreador si es necesario para activar los cambios.
- Verifique que el dispositivo aparezca en Plaspy y esté enviando ubicación y eventos.

## Ajustes del servidor de Plaspy

Use los siguientes datos públicos de servidor de Plaspy al configurar el FM‑Eco4:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol so the same port is used for all supported devices

Estos valores son la información pública del endpoint que debe introducir en la herramienta de configuración de Ruptela o por el método SMS/CLI que le proporcione Ruptela o su instalador.

## Requisitos antes de la configuración

- Confirme que el FM‑Eco4 tiene alimentación y es accesible para la configuración y las pruebas.
- Obtenga acceso al método oficial de configuración de Ruptela o al software que utilice su instalador.
- Si el equipo usa conectividad celular, asegúrese de que haya una SIM operativa instalada y que conozca los ajustes APN.
- Verifique la versión de firmware del dispositivo y cualquier nota del proveedor que afecte los pasos de configuración.
- Tenga a mano la información del endpoint de Plaspy: d.plaspy.com o 54.85.159.138 y puerto 8888.
- Prepárese para probar el reporte y la visibilidad en Plaspy después de aplicar la configuración.

## Cómo se conecta este rastreador a Plaspy

Al configurar el FM‑Eco4 para Plaspy, el rastreador envía sus mensajes de posición y estado al endpoint compartido y al puerto de la plataforma. Plaspy recibe los datos, identifica automáticamente el protocolo usado por el FM‑Eco4 y hace que el dispositivo sea visible en la interfaz de gestión de flotas para seguimiento en tiempo real e informes.

- El FM‑Eco4 envía periódicamente paquetes de ubicación y eventos a d.plaspy.com (o 54.85.159.138) en el puerto 8888.
- Elija UDP o TCP como transporte si la configuración del dispositivo exige una selección explícita.
- Plaspy escucha en el puerto 8888 para todos los dispositivos soportados y realiza la detección automática del protocolo.
- Una vez recibidos los paquetes, el dispositivo aparece en Plaspy y los reportes comienzan según los intervalos de envío del rastreador.
- Cualquier configuración vía SMS o software debe garantizar que las entradas finales del servidor coincidan con los ajustes de Plaspy.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración de Ruptela o al software recomendado para el FM‑Eco4.
2. Ingrese el dominio del servidor d.plaspy.com o la IP 54.85.159.138 en el campo de dirección del servidor/centro.
3. Configure el puerto de destino a 8888 (Plaspy usa el mismo puerto para todos los dispositivos soportados).
4. Si el dispositivo requiere elegir un protocolo de transporte, seleccione UDP o TCP según su entorno o las indicaciones del instalador.
5. Aplique o guarde la configuración para escribir los ajustes en el equipo.
6. Reinicie el equipo si el procedimiento de Ruptela exige un reboot para que los cambios surtan efecto.
7. Valide que el FM‑Eco4 esté reportando a Plaspy y que el dispositivo aparezca y se actualice correctamente en la plataforma.

## Ejemplos de comandos de configuración

El FM‑Eco4 puede configurarse con herramientas del proveedor, comandos SMS o una aplicación de escritorio según el método de configuración de Ruptela que esté usando. Los comandos exactos y la sintaxis dependen del firmware de Ruptela y de la herramienta. Debido a que los comandos del fabricante varían según el firmware, aquí no se listan textos SMS o CLI específicos. Al usar las herramientas de Ruptela, introduzca el dominio o la IP del servidor y el puerto de Plaspy exactamente como se muestran:

- Server domain example to enter in the tool: d.plaspy.com
- Server IP example to enter in the tool: 54.85.159.138
- Port to enter: 8888
- Transport option: choose UDP or TCP if prompted

Si prefiere la configuración por SMS y dispone del conjunto de comandos SMS de Ruptela según la documentación oficial, use los comandos SMS equivalentes para establecer servidor, puerto y transporte. Consulte la documentación de Ruptela para la sintaxis exacta del SMS según su versión de firmware.

## Notas de configuración

- Las versiones de firmware de Ruptela y las interfaces de configuración difieren; siga las instrucciones de la herramienta del proveedor que correspondan a su firmware FM‑Eco4.
- Algunas instalaciones emplean comandos SMS para configuración remota mientras que otras usan USB o herramientas de escritorio; utilice el método soportado por su dispositivo y firmware.
- TCP y UDP son compatibles con Plaspy en el puerto 8888; elija el protocolo según las recomendaciones del instalador o las restricciones de red.
- Plaspy usa el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador al recibir datos.
- Confirme siempre la conectividad de la SIM y los ajustes APN antes de investigar la visibilidad en el servidor.

## Por qué usar Plaspy con esta configuración

Configurar el Ruptela FM‑Eco4 para reportar a Plaspy brinda a los operadores de flotas una forma sencilla de centralizar el seguimiento, el estado de los vehículos y la monitorización de eventos en una sola plataforma. Con la robustez del FM‑Eco4 y sus funciones como monitoreo de comportamiento del conductor y de combustible, integrar esos datos en Plaspy ayuda a los equipos a supervisar rutas, mejorar la eficiencia de combustible y mantener el control operativo.

To learn more about Plaspy and how the platform supports fleet tracking, visit https://www.plaspy.com. For the latest device-specific setup instructions, firmware details, and official Ruptela commands, verify the current documentation at https://ruptela.com/ before applying configuration to production devices.

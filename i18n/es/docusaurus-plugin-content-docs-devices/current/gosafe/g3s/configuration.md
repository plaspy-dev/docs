---
slug: /gosafe/g3s/configuration
id: g3s-configuration
sidebar_label: Configuration
title: Gosafe - G3S Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Gosafe G3S con los ajustes de servidor Plaspy y pasos prácticos para conectar su rastreador
keywords:
- Configuración Gosafe G3S
- Configuración G3S
- Configuración G3S Plaspy
- Configuración rastreador Gosafe
- Configuración servidor G3S
- Configuración seguimiento Gosafe
- Configuración plataforma GPS G3S
- Configuración rastreador Plaspy
- Rastreo vehículo G3S
- Rastreo de flotas Gosafe G3S
---

# Gosafe - Configuración del G3S

Esta página describe la configuración pública para utilizar el rastreador Gosafe G3S con Plaspy. Explica los ajustes compartidos del servidor Plaspy que debe ingresar en el dispositivo y los pasos prácticos para preparar un G3S de modo que pueda reportar ubicación y estado a Plaspy. El contenido se centra en aspectos públicos y neutrales respecto al fabricante, además de la información del endpoint de Plaspy necesaria para la integración.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando éste envía datos a la plataforma. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que use esta guía como referencia general y confirme las instrucciones específicas del dispositivo con la documentación del fabricante cuando sea necesario.

## Resumen de configuración

Preparar un Gosafe G3S para que funcione con Plaspy consiste principalmente en asegurarse de que el rastreador pueda alcanzar el endpoint del servidor Plaspy a través de GSM/GPRS y esté configurado para usar el puerto y el transporte compartidos por la plataforma. El proceso de configuración suele verificar la conectividad, asignar el endpoint y el puerto en el dispositivo, y confirmar que el equipo se vuelva visible en Plaspy después del reinicio.

- Ingrese la dirección del servidor Plaspy y el puerto en el G3S usando el método oficial de configuración de Gosafe.
- Asegúrese de que el dispositivo tenga alimentación, una tarjeta SIM con datos activa y la APN correcta.
- Seleccione el transporte (UDP o TCP) si el dispositivo requiere elegirlo.
- Guarde la configuración y reinicie el G3S para que comience a enviar datos a Plaspy.
- Valide que el rastreador reporte correctamente y aparezca en Plaspy para su monitoreo.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de Plaspy al configurar el Gosafe G3S:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: UDP o TCP (el dispositivo puede configurarse para UDP o TCP en el puerto 8888)
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta
- Todos los dispositivos en Plaspy usan el mismo puerto para el reporte

## Requisitos típicos antes de la instalación

- Acceso físico al G3S o acceso a la herramienta del proveedor necesaria para cambiar sus ajustes de servidor.
- Dispositivo alimentado e instalado según las indicaciones del fabricante.
- Tarjeta SIM GSM/GPRS activa con servicio de datos y APN configurada correctamente para el operador.
- Acceso al método oficial de configuración de Gosafe, software o herramienta de instalador.
- Cuenta o acceso a la plataforma Plaspy para validar la configuración después de realizarla.
- Cobertura de red en el lugar de instalación para permitir que el dispositivo alcance el servidor Plaspy.

## Cómo se conecta este rastreador a Plaspy

El Gosafe G3S envía sus datos de ubicación y estado operativo por GSM/GPRS al endpoint y puerto del servidor Plaspy configurados en el dispositivo. Una vez que el equipo reporta a d.plaspy.com o a la IP de Plaspy en el puerto 8888, Plaspy detectará automáticamente el protocolo del rastreador y comenzará a procesar los datos entrantes para mostrarlos y generar alertas.

- El rastreador transmite actualizaciones de posición y mensajes de estado al endpoint de Plaspy.
- Plaspy recibe conexiones entrantes en el puerto 8888 y determina el protocolo del rastreador de forma automática.
- El dispositivo puede configurarse para usar UDP o TCP según las opciones del firmware.
- Tras la configuración correcta y el reinicio, el G3S debería aparecer en Plaspy para monitoreo e informes.
- La visibilidad en la plataforma permite supervisión operativa e integración con flujos de trabajo de gestión de flotas.

## Flujo de configuración habitual

1. Acceda al método de configuración oficial de Gosafe, al software o a la herramienta de instalador proporcionada por el proveedor.
2. Localice la configuración de servidor u host e ingrese d.plaspy.com o la IP 54.85.159.138 como endpoint del servidor.
3. Establezca el puerto del servidor en 8888 (Plaspy usa el mismo puerto para todos los dispositivos compatibles).
4. Elija UDP o TCP como transporte si el dispositivo solicita seleccionar el transporte.
5. Si aplica, verifique o configure la APN de la SIM para que el dispositivo tenga conectividad de datos.
6. Aplique o guarde la configuración y siga cualquier indicación del dispositivo para confirmar los cambios.
7. Reinicie el dispositivo si la herramienta de Gosafe o el firmware lo requieren para aplicar los ajustes.
8. Valide que el dispositivo reporte a Plaspy y sea visible para seguimiento y monitoreo.

## Ejemplos de comandos de configuración

El método de configuración del Gosafe G3S puede variar según la herramienta del proveedor, el firmware y las variantes regionales. Dado que las utilidades del fabricante difieren, no se incluyen aquí cadenas de comandos universales públicas. Use la interfaz oficial de Gosafe o la utilidad de instalador para ingresar el dominio o la IP del servidor Plaspy y el puerto según se indicó anteriormente.

Si su instalación utiliza configuración por SMS o comandos de texto y el fabricante proporciona la sintaxis pública de comandos, siga la documentación oficial de Gosafe para los formatos correctos. Para la mayoría de las instalaciones, la recomendación es utilizar el software o la aplicación de configuración del proveedor.

## Notas de configuración

- Las diferencias de firmware entre unidades Gosafe G3S pueden cambiar la disposición de los menús y los nombres exactos de los campos para servidor, puerto y selección de transporte.
- La elección entre UDP y TCP depende de las opciones ofrecidas por el firmware; consulte la herramienta de configuración Gosafe y pruebe la conectividad en Plaspy después de guardar.
- Puesto que Plaspy usa el mismo puerto para todos los dispositivos y detecta el protocolo automáticamente, ingrese el servidor y el puerto exactamente como se proporciona para evitar problemas de conexión.
- Verifique la APN y la configuración del plan de datos de la SIM antes de la validación final, ya que se requiere conectividad GPRS para que el dispositivo alcance d.plaspy.com.
- Siempre contraste las instrucciones del fabricante respecto a cualquier paso opcional de reinicio o restablecimiento; realice un restablecimiento únicamente cuando Gosafe o un instalador autorizado lo recomienden.

## Por qué usar Plaspy con esta configuración

Usar el Gosafe G3S con Plaspy ofrece a las organizaciones una manera sencilla de centralizar la recolección de datos de ubicación en tiempo real y el estado de los dispositivos en una plataforma única. Al configurar el G3S para que reporte al endpoint y puerto compartidos de Plaspy, las flotas e integradores pueden unificar el seguimiento, mejorar la toma de decisiones de despacho y mantener la supervisión operativa sin configuraciones de servidor complejas por dispositivo.

To learn more about Plaspy and supported device integrations visit https://www.plaspy.com. For the latest Gosafe device-specific setup details, firmware notes, and official configuration instructions verify information on the manufacturer website https://gosafesystem.com/. Manufacturer specifications and setup methods can change over time, so always confirm current procedures with Gosafe documentation.

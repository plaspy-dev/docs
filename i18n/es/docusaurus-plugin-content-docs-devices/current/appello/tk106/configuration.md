---
slug: /appello/tk106/configuration
id: tk106-configuration
sidebar_label: Configuration
title: Appello - TK106 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador GPS Appello TK106 con Plaspy usando servidor compartido y pasos generales
keywords:
  - Configuración Appello TK106
  - Instalación Appello TK106
  - Configuración servidor Appello TK106
  - Appello TK106 Plaspy
  - Configuración rastreador GPS Appello
  - Guía de instalación TK106
  - Integración TK106 Plaspy
  - Ajustes servidor Appello
  - Guía configuración rastreador GPS
  - Seguimiento vehicular TK106
---

# Appello - Configuración del TK106

En esta página se describe el contexto público de configuración para usar el rastreador Appello TK106 con la plataforma Plaspy. Explica los ajustes de servidor compartido que Plaspy requiere, resume los métodos de configuración habituales desde el lado del fabricante y señala lo que debe verificar antes de integrar el TK106 con Plaspy. La información se basa en datos públicos del dispositivo y en los patrones de configuración de ejemplo que suelen emplearse para este modelo.

Plaspy usa ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El TK106 suele admitir configuración por SMS y por red en los ejemplos del fabricante; esta guía resume esos pasos públicos en términos generales y se centra en el endpoint público de Plaspy y el puerto que se usa para el reporte.

## Resumen de configuración

El objetivo al configurar un Appello TK106 para Plaspy es preparar el dispositivo para que envíe datos de ubicación y estado al endpoint compartido de Plaspy, de modo que el equipo sea visible y manejable en la plataforma. La configuración normalmente implica suministrar al dispositivo los parámetros de acceso a la red correctos, la dirección del servidor y el puerto de Plaspy, y seleccionar el modo de transporte adecuado si el equipo lo requiere.

- Configure el rastreador para que reporte a Plaspy ingresando el endpoint y el puerto del servidor Plaspy.
- Verifique que el TK106 tenga conectividad móvil válida y que estén configurados los ajustes del fabricante necesarios, como el APN.
- Seleccione el modo de transporte del dispositivo (UDP o TCP) si el rastreador solicita elegirlo para que coincida con el soporte de Plaspy.
- Valide la conectividad para que el rastreador aparezca y reporte correctamente en Plaspy.
- Conserve la documentación del fabricante y las notas de firmware para atender diferencias entre revisiones del equipo.

## Ajustes del servidor Plaspy

- server domain d.plaspy.com  
- server IP 54.85.159.138  
- port 8888  
- transport support for UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol for supported devices

Estos valores públicos son el endpoint y las opciones de transporte que debe usar al orientar el TK106 para que reporte a Plaspy. Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y maneja la detección de protocolo de forma automática.

## Requisitos típicos antes de la instalación

- Un dispositivo TK106 cargado y operativo con acceso a la red para la configuración y el reporte.
- Una conexión móvil válida para el rastreador según el modelo y las bandas de red regionales.
- Acceso al método de configuración oficial del fabricante o al software correspondiente y a la documentación del equipo.
- Conocer el identificador del dispositivo (por ejemplo IMEI) y cualquier dato de cuenta o registro que requiera el fabricante.
- Si planea configurar mediante SMS o una aplicación del fabricante, asegúrese de disponer del teléfono y los permisos necesarios para enviar los comandos de configuración.
- Un plan para validar el reporte en Plaspy después de la configuración, incluyendo la forma de comprobar que el dispositivo aparece en la plataforma.

## Cómo se conecta este rastreador a Plaspy

Cuando el TK106 se configura para Plaspy, envía sus mensajes de posición y estado al endpoint de Plaspy para que el dispositivo sea visible y monitoreado dentro de la plataforma. Plaspy recibe el tráfico entrante en el endpoint y puerto compartidos y utiliza detección automática de protocolo para interpretar el protocolo del equipo e integrar los datos del rastreador.

- El rastreador se dirige a reportar al endpoint del servidor Plaspy d.plaspy.com o a la IP del servidor 54.85.159.138.
- Todos los dispositivos reportan al puerto 8888 en Plaspy, que es el puerto compartido de recepción.
- Puede seleccionar transporte UDP o TCP en el equipo cuando sea necesario; Plaspy soporta ambos en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador y asigna los mensajes entrantes a la lógica de parseo correspondiente.
- Tras una configuración exitosa, el dispositivo aparecerá en Plaspy y comenzará a enviar actualizaciones de posición e información de estado.

## Flujo típico de configuración

1. Acceda al método de configuración oficial del fabricante o al software para el TK106, como los comandos SMS documentados o la herramienta de configuración del proveedor.  
2. Ingrese la dirección del servidor Plaspy especificando d.plaspy.com o la IP del servidor 54.85.159.138 en el campo de servidor del dispositivo.  
3. Ajuste el puerto del servidor a 8888 para que el equipo envíe datos a Plaspy en el puerto compartido.  
4. Elija el transporte UDP o TCP si el dispositivo requiere selección de transporte, acorde con el soporte de Plaspy.  
5. Guarde o aplique la configuración en el rastreador usando el método del fabricante.  
6. Valide que el dispositivo reporte a Plaspy y aparezca en la plataforma; confirme la llegada de datos y la visibilidad del equipo.

Si utiliza un enfoque basado en SMS, siga las indicaciones del fabricante para enviar los ajustes necesarios en lugar de reproducir comandos sin procesar que puedan mostrarse en ejemplos. Los pasos anteriores resumen el flujo público más habitual y no la sintaxis específica de comandos.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis exacta de configuración y las opciones disponibles; verifique siempre la documentación del dispositivo correspondiente a su unidad.
- Las herramientas de instalador o del proveedor pueden ofrecer una interfaz gráfica o alternativas por SMS; use el método oficial provisto con el equipo.
- La elección entre TCP y UDP puede afectar las características de entrega y debe seleccionarse según las opciones del dispositivo y los requisitos de la instalación.
- En muchos casos el dominio y la IP del servidor Plaspy son intercambiables para la configuración del equipo; use el método recomendado por su instalador o la guía del dispositivo.
- Si el TK106 admite configuración por SMS, es un método común en campo; evite reproducir comandos sin procesar aquí y remítase a las instrucciones oficiales.

## Por qué usar Plaspy con esta configuración

Utilizar el Appello TK106 con Plaspy ofrece una forma directa de incorporar este rastreador compacto a un flujo de trabajo de monitoreo de flotas o activos. Plaspy centraliza los datos entrantes de los dispositivos, gestiona automáticamente la detección de protocolos y utiliza una disposición de puerto compartido para simplificar los ajustes de servidor entre múltiples modelos de rastreadores, reduciendo la carga de configuración por dispositivo.

Para obtener más información sobre Plaspy y cómo funciona con dispositivos como el Appello TK106 visite https://www.plaspy.com. Para detalles de configuración más actuales y específicos por dispositivo, notas de firmware e instrucciones del fabricante, verifique la información en el sitio oficial de Appello http://www.cnjeo.com/ ya que las especificaciones y métodos de configuración pueden cambiar con el tiempo.

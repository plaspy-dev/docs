---
slug: /okb_tehnoavtomatika/aap_personal/configuration
id: aap_personal-configuration
sidebar_label: Configuration
title: OKB Tehnoavtomatika - AAP PERSONAL Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador OKB Tehnoavtomatika AAP PERSONAL con servidores y pasos prácticos de Plaspy
keywords:
  - configuración OKB Tehnoavtomatika AAP PERSONAL
  - instalación OKB Tehnoavtomatika AAP PERSONAL
  - integración AAP PERSONAL Plaspy
  - configuración servidor AAP PERSONAL
  - configuración rastreador GPS AAP PERSONAL
  - configuración rastreador Plaspy
  - guía instalación dispositivo Plaspy
  - guía configuración rastreador GPS
  - rastreo vehicular AAP PERSONAL
  - configuración GPRS SMS AAP PERSONAL
---

# OKB Tehnoavtomatika - Configuración de AAP PERSONAL

Esta página documenta el contexto público de configuración para utilizar el rastreador OKB Tehnoavtomatika AAP PERSONAL con la plataforma Plaspy. Reúne los ajustes de servidor prácticos y el flujo de configuración que necesitará para apuntar un dispositivo AAP PERSONAL a Plaspy y que el equipo reporte ubicación y estado. La guía se basa en los puntos finales del servidor Plaspy y en prácticas comunes de configuración del fabricante, no en credenciales de servicios propietarios o privadas.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador una vez que el dispositivo comienza a reportar a Plaspy. Los pasos exactos en el lado del fabricante para configurar el AAP PERSONAL pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use esta página para alinear el AAP PERSONAL con los valores del servidor Plaspy y luego verifique el comportamiento del dispositivo con la documentación y las herramientas del fabricante.

## Resumen de la configuración

El objetivo de este proceso es preparar un rastreador AAP PERSONAL para que envíe su telemetría a Plaspy y así el dispositivo sea visible y administrable en la plataforma. El AAP PERSONAL admite reportes por GPRS y por SMS y opera en las bandas GSM 900/1800 con batería interna, por lo que es adecuado para tareas de monitoreo remoto. Apuntar el dispositivo a Plaspy consiste principalmente en establecer el punto final de servidor, el transporte y el puerto correctos, y luego validar que el dispositivo pueda conectarse a Plaspy.

- Configure el rastreador para que reporte a Plaspy ingresando el punto final del servidor y el puerto estándar de Plaspy
- Seleccione el protocolo de transporte UDP o TCP si el firmware del dispositivo lo requiere
- Asegure la conectividad GPRS y las credenciales APN correctas para el reporte por internet desde el dispositivo
- Guarde la configuración del dispositivo y reinícielo si es necesario para iniciar las conexiones a Plaspy
- Valide que el rastreador sea visible en Plaspy después de que comience a reportar al servidor compartido

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que utilice el puerto 8888 para el reporte del AAP PERSONAL

## Requisitos típicos antes de la configuración

- Un dispositivo AAP PERSONAL cargado y funcional con acceso al método de configuración del fabricante
- Una tarjeta SIM válida con plan de datos y GPRS habilitado cuando use reporte por internet
- Credenciales APN proporcionadas por el operador móvil si se requiere reporte por GPRS
- Acceso a la utilidad de configuración de OKB Tehnoavtomatika o al conjunto de comandos SMS documentado para el AAP PERSONAL
- Una computadora o teléfono para editar los ajustes y aplicar la configuración al dispositivo
- Alcance de red básico para que el dispositivo pueda resolver y conectarse a d.plaspy.com

## Cómo se conecta este rastreador a Plaspy

El AAP PERSONAL envía actualizaciones de ubicación y estado al punto final del servidor Plaspy usando datos GPRS o, como respaldo, reportes por SMS según la configuración. Una vez que el dispositivo está apuntando al servidor y puerto de Plaspy, la plataforma detectará el protocolo del rastreador y procesará los mensajes entrantes para que el equipo aparezca en la plataforma.

- El dispositivo se configura para reportar al punto final compartido de Plaspy d.plaspy.com o a la IP 54.85.159.138
- Las comunicaciones usan el puerto 8888, que es el puerto común de Plaspy para todos los dispositivos soportados
- El rastreador puede usar transporte UDP o TCP según las opciones de firmware y la configuración; Plaspy acepta ambos
- Plaspy detecta automáticamente el protocolo del rastreador y decodifica la telemetría cuando llegan los datos
- El reporte puede incluir actualizaciones periódicas de ubicación y notificaciones de eventos según lo soporte el dispositivo y el firmware

## Flujo de configuración habitual

1. Acceda al método oficial de configuración de OKB Tehnoavtomatika o al software para el AAP PERSONAL, o use el conjunto de comandos SMS documentado si está soportado
2. Ingrese el punto final del servidor como nombre de host d.plaspy.com o como la dirección IP 54.85.159.138 en el campo de servidor
3. Configure el puerto del servidor en 8888, que es el puerto compartido de Plaspy para todos los dispositivos
4. Elija UDP o TCP como protocolo de transporte si el dispositivo requiere seleccionar un transporte
5. Configure el APN y los ajustes GPRS en el dispositivo si usa reporte por internet, o verifique los ajustes SMS si su despliegue depende de SMS
6. Aplique o guarde la configuración en la interfaz del dispositivo o envíe los comandos SMS de configuración según las instrucciones del fabricante
7. Reinicie el dispositivo si la herramienta de configuración o el firmware lo exige para activar los nuevos ajustes de servidor
8. Valide que el dispositivo reporte a Plaspy comprobando su visibilidad en la plataforma y confirmando que se reciben datos entrantes

## Comandos de configuración de ejemplo

El AAP PERSONAL se suele configurar con la herramienta de software del fabricante o mediante comandos SMS según el firmware. Los comandos y la sintaxis exactos varían según la versión de firmware y las utilidades suministradas por el vendedor, por lo que no se incluyen comandos universales aquí. Al usar el método SMS del fabricante o su herramienta, utilice los valores del servidor de Plaspy:

- Nombre de host del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte UDP o TCP según se requiera

Consulte el manual de usuario oficial de OKB Tehnoavtomatika o la guía de configuración para los comandos SMS o de la utilidad precisos para establecer servidor, puerto, transporte y APN. Si obtiene ejemplos públicos de comandos del fabricante, aplíquelos en el orden recomendado por OKB Tehnoavtomatika e incluya los marcadores requeridos exactamente como se indiquen.

## Notas de configuración

- Las diferencias de firmware pueden cambiar las opciones de configuración disponibles, por ejemplo si el transporte es seleccionable o está fijado por el firmware
- La configuración por SMS puede ser útil cuando no hay GPRS disponible, pero confirme el conjunto de comandos y la sintaxis con OKB Tehnoavtomatika
- Elija UDP o TCP según el soporte del dispositivo y las condiciones de red; ambos transportes son aceptados por Plaspy en el puerto 8888
- Verifique las credenciales APN y el registro celular en el dispositivo antes de esperar reportes GPRS a Plaspy
- Las variaciones de mercado y las revisiones de hardware pueden cambiar el comportamiento por defecto; siempre consulte la documentación del fabricante para el número de serie y la versión de firmware de su dispositivo

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el AAP PERSONAL ofrece a las organizaciones una forma práctica de centralizar el reporte de ubicación y estado de rastreadores personales con batería que operan en escenarios remotos o móviles. Al apuntar el dispositivo a Plaspy y usar los ajustes de servidor y puerto compartidos, puede consolidar la telemetría de múltiples dispositivos y confiar en que Plaspy detectará y decodificará el protocolo del rastreador.

Para obtener más información sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para los detalles de configuración específicos más recientes, notas de firmware y referencias oficiales de comandos, verifique la información en el sitio del fabricante http://www.okb-ta.ru/

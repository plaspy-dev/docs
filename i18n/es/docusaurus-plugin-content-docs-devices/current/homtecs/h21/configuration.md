---
slug: /homtecs/h21/configuration
id: h21-configuration
sidebar_label: Configuration
title: Homtecs - H21 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el router 3G Homtecs H21 y conectarlo a Plaspy con ajustes de servidor compartidos
keywords:
  - Configuración Homtecs H21
  - Configuración H21
  - Configuración servidor Homtecs H21
  - Homtecs H21 Plaspy
  - Configuración router GPS Homtecs H21
  - Configuración router 3G Homtecs H21
  - Configuración APN Homtecs H21
  - Configuración red Homtecs H21
  - Configuración firmware Homtecs H21
  - Configuración router industrial Homtecs H21
---

# Homtecs - Configuración del H21

Esta página explica el contexto público de configuración para usar el router 3G Homtecs H21 con la plataforma Plaspy. Se centra en los ajustes de servidor compartidos y en las indicaciones prácticas necesarias para apuntar un dispositivo H21 hacia Plaspy, de modo que el equipo pueda aparecer y reportar en la plataforma. El contenido se basa en las capacidades públicas del dispositivo y en los ajustes del servidor Plaspy requeridos para la conectividad.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador para las conexiones entrantes. Los pasos de configuración del lado del fabricante para el H21 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de gestión del proveedor; utilice esta guía como orientación práctica y confirme el comportamiento del equipo con la documentación oficial de Homtecs.

## Resumen de la configuración

Configurar el H21 para Plaspy prepara el router para establecer conexiones IP salientes persistentes hacia Plaspy y reportar telemetría o tráfico enrutado según lo requiera su despliegue. El proceso de configuración consiste principalmente en asegurar que el equipo tenga acceso a la red, el endpoint de servidor correcto y los ajustes de transporte para que Plaspy pueda recibir e interpretar la conexión del dispositivo.

- Apunte el H21 al endpoint del servidor de Plaspy para que los datos se enruten a la plataforma.
- Configure los parámetros de transporte (UDP o TCP) y el puerto compartido que usa Plaspy.
- Proporcione o verifique el APN y la configuración de la SIM para que el H21 alcance Internet público.
- Guarde y aplique los cambios, luego valide que el H21 aparezca en Plaspy.
- Utilice las herramientas de gestión del fabricante o la interfaz web/CLI del H21 para efectuar y confirmar los cambios.

## Ajustes del servidor de Plaspy

Use los siguientes ajustes públicos de servidor de Plaspy al configurar el Homtecs H21:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: soporte para UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador para las conexiones entrantes

Tenga en cuenta que Plaspy utiliza el mismo puerto 8888 para todos los dispositivos soportados y detectará el protocolo del dispositivo automáticamente una vez que el equipo se conecte a d.plaspy.com o a 54.85.159.138.

## Requisitos típicos antes de la configuración

- Asegúrese de que el H21 esté alimentado e instalado físicamente con las antenas celulares y las conexiones I/O necesarias.
- Confirme que el router tiene una SIM de datos válida o una SIM con IP fija y que cuenta con los ajustes APN correspondientes.
- Acceso a la interfaz de gestión del H21 vía interfaz web, CLI, SSH o la herramienta de configuración del fabricante.
- Conocimiento del APN del operador y las credenciales si se requieren para la conectividad de datos.
- Una cuenta de Plaspy u acceso organizacional para poder confirmar que el dispositivo aparece en la plataforma después de la configuración.
- Acceso a la documentación de Homtecs para instrucciones específicas de firmware y características opcionales como dual SIM o GPS.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para usar Plaspy, el H21 establece conexiones de red salientes hacia el endpoint y puerto compartido de Plaspy para que la plataforma reciba telemetría y el estado de conexión. Plaspy recibe el tráfico del dispositivo e identifica automáticamente el protocolo para parsear los datos entrantes de ese equipo.

- El H21 se apunta a d.plaspy.com o a 54.85.159.138 como servidor de destino.
- El dispositivo utiliza el puerto 8888 para la telemetría saliente y las sesiones de conexión.
- El transporte puede ser UDP o TCP según la configuración del H21; elija el transporte compatible con su despliegue.
- Plaspy detecta automáticamente el protocolo del rastreador y procesa los mensajes entrantes.
- Si el H21 tiene telemetría GPS opcional o dispositivos de rastreo conectados, esos flujos de datos se reenvían a Plaspy cuando están correctamente enrutados.

## Flujo de trabajo común de configuración

1. Acceda al método de configuración oficial de Homtecs, como la interfaz web del H21, CLI, SSH o la herramienta de gestión de Homtecs.
2. Configure la conexión celular, incluyendo la selección de SIM y los valores de APN, para que el H21 tenga acceso a Internet.
3. Ingrese el servidor de Plaspy por nombre d.plaspy.com o por IP 54.85.159.138 en el campo de servidor/destino del dispositivo.
4. Establezca el puerto de destino en 8888 en los ajustes del servidor.
5. Elija el transporte UDP o TCP si el dispositivo requiere selección manual de transporte.
6. Aplique o guarde la configuración y, si es necesario, reinicie el H21 para activar los nuevos ajustes de servidor.
7. Valide que el dispositivo reporte a Plaspy consultando el estado del equipo en la plataforma Plaspy o confirmando los registros de conexión exitosos en el router.

## Ejemplos de comandos de configuración

Esta sección de ejemplo no incluye cadenas de comandos públicas específicas para el H21. Los comandos exactos y la sintaxis dependen de la interfaz web del fabricante, la CLI o las herramientas de configuración y varían según la versión de firmware. Al usar líneas de comando o configuración por SMS, apliquen los mismos valores públicos de Plaspy:

- Servidor de destino: dominio d.plaspy.com o IP 54.85.159.138
- Puerto de destino: 8888
- Transporte: UDP o TCP según lo requiera el dispositivo

Consulte la guía administrativa del Homtecs H21 para los comandos exactos de CLI o de la interfaz web necesarios para configurar servidor, puerto y transporte en su versión de firmware.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar los nombres de los menús y la sintaxis CLI exacta utilizada para establecer los valores de servidor y puerto.
- Si el H21 soporta doble SIM, verifique cuál SIM está activa al apuntar el dispositivo a Plaspy para evitar confusiones de enrutamiento.
- Elija UDP o TCP según sus necesidades de red y confiabilidad; Plaspy soporta ambos y detecta el protocolo automáticamente.
- Cuando use SIMs con IP dinámica, asegúrese de que el APN y cualquier ajuste de NAT traversal estén configurados para que las conexiones salientes a d.plaspy.com tengan éxito.
- Mantenga a la mano la documentación del fabricante para funciones como watchdog, reinicio automático y actualizaciones remotas de firmware que pueden afectar la conectividad.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el Homtecs H21 permite a las organizaciones centralizar la visibilidad y el monitoreo de sitios remotos que dependen de conectividad 3G industrial. El diseño industrial del H21 y sus funciones de gestión remota se complementan con el endpoint de servidor de Plaspy y la detección automática de protocolos, ofreciendo una forma sencilla de integrar la conectividad y la telemetría del dispositivo en una sola plataforma.

Para obtener más información sobre Plaspy y las integraciones de dispositivos compatibles visite https://www.plaspy.com. Las especificaciones del fabricante y los métodos de configuración pueden cambiar con el tiempo, por lo que verifique los detalles de configuración más recientes del H21 y el comportamiento del firmware en el sitio web de Homtecs http://www.homtecsm2m.com/ antes de desplegar.

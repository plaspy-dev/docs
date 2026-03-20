---
slug: /neomatica/adm100/configuration
id: adm100-configuration
sidebar_label: Configuration
title: Neomatica - ADM100 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para integrar Neomatica ADM100 con Plaspy, incluye ajustes de servidor y flujo práctico de configuración
keywords:
  - Configuración Neomatica ADM100
  - Configuración ADM100
  - Rastreador GPS Neomatica
  - Configuración Plaspy
  - Configuración servidor rastreador GPS
  - Configuración de seguimiento de vehículos
  - ADM100 Configuración Plaspy
  - Rastreador para gestión de flotas
  - Configuración rastreador EGTS
  - Configuración GPRS rastreador
---

# Neomatica - ADM100 Configuración

En esta página se describen los aspectos públicos necesarios para usar el Neomatica ADM100 con Plaspy. Aquí se explican los ajustes de servidor que Plaspy requiere y se detalla el flujo práctico para preparar y apuntar el ADM100 a Plaspy para seguimiento en tiempo real. La orientación se basa en las características públicas del ADM100 y en los parámetros compartidos de servidor que se requieren para la integración.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según versión de firmware, revisión de hardware, tipo de instalación y las herramientas del proveedor. El ADM100 permite configuración por USB, SMS o GPRS y puede resolver servidores por nombre de dominio, lo que facilita su uso con la configuración basada en dominio de Plaspy y el reporte remoto.

## Resumen de la configuración

Configurar el ADM100 para Plaspy consiste, sobre todo, en asegurarse de que el dispositivo pueda alcanzar el endpoint del servidor Plaspy a través de la red móvil y reportar correctamente mediante el transporte elegido. Este proceso prepara al ADM100 para enviar datos de posición y eventos a Plaspy, de modo que los vehículos sean visibles en mapas en vivo y en reportes históricos.

- Establezca la dirección del servidor del equipo al dominio o IP de Plaspy y utilice el puerto compartido que requiere Plaspy.
- Seleccione el protocolo de transporte si el equipo solicita elección entre TCP o UDP y confirme que los datos llegan a la plataforma.
- Verifique el APN y la conectividad de la SIM para que el reporte por GPRS funcione de forma fiable desde el vehículo.
- Aplique la configuración y reinicie el equipo si es necesario para comenzar el reporte.
- Valide que la unidad aparezca en Plaspy y que los mensajes de posición, velocidad y eventos sean visibles.
- Si corresponde, utilice el almacenamiento local del ADM100 y las funciones remotas de firmware para recuperación y actualizaciones.

## Ajustes de servidor Plaspy

Use estos ajustes públicos de servidor de Plaspy exactamente como se indican al configurar el objetivo del servidor en el ADM100.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Todos los dispositivos soportados por Plaspy usan el mismo puerto y Plaspy detectará automáticamente el protocolo del ADM100 una vez que el equipo comience a reportar al endpoint configurado.

## Requisitos típicos antes de configurar

- Un ADM100 alimentado e instalado o en banco de pruebas con tensión de vehículo aplicada dentro del rango soportado.
- Una tarjeta SIM activa con plan de datos y el APN correcto configurado para reporte por GPRS.
- Acceso al método oficial de configuración de Neomatica o al software del fabricante, como herramientas USB, comandos SMS o configuración por GPRS según el manual del ADM100.
- Conocimiento del tipo de transporte deseado UDP o TCP y disposición para apuntar el equipo a d.plaspy.com o a la IP del servidor de Plaspy.
- Una cuenta en Plaspy o un administrador que pueda confirmar la visibilidad del dispositivo después de la configuración y mapear las unidades en la plataforma.
- Opcionalmente, acceso al manual del ADM100 o soporte técnico para instrucciones específicas de firmware.

## Cómo se conecta este rastreador a Plaspy

El ADM100 envía posiciones GNSS y eventos del equipo al servidor de Plaspy mediante GPRS. Al apuntar al endpoint de Plaspy, el dispositivo reporta ubicación, eventos de E/S y datos de ruta almacenados para que Plaspy presente telemetría en tiempo real y registros históricos.

- El ADM100 se configura para reportar al endpoint compartido de Plaspy usando dominio o dirección IP.
- Los datos se envían por GPRS a Plaspy en el puerto 8888 usando UDP o TCP según la selección en el equipo.
- Plaspy procesa mensajes de posición, velocidad, rumbo y eventos para mapas en vivo y alertas.
- El historial de rutas almacenado en el ADM100 puede subirse a Plaspy para reproducción y reportes de cumplimiento.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que se requiere mínima selección de protocolo en la plataforma.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración de Neomatica o al software para ADM100 mediante USB, SMS o la herramienta del fabricante.
2. En los ajustes de servidor del equipo ingrese el dominio de Plaspy d.plaspy.com o, de forma opcional, la IP del servidor 54.85.159.138.
3. Establezca el puerto de reporte en 8888 para coincidir con el uso de puerto único de Plaspy para todos los dispositivos.
4. Elija UDP o TCP si el ADM100 requiere selección explícita del transporte.
5. Configure el APN y los parámetros de la SIM para que los datos GPRS puedan acceder a Internet y alcanzar el endpoint de Plaspy.
6. Aplique o guarde la configuración y reinicie el equipo si el firmware del ADM100 requiere un reinicio para activar los ajustes.
7. Valide que el equipo reporte a Plaspy confirmando que la unidad aparece en la plataforma y que se reciben mensajes de posición y eventos.

## Ejemplos de comandos de configuración

El ADM100 permite configuración vía herramientas del fabricante, comandos SMS o utilidades USB según el firmware. Los comandos exactos y su formato varían entre versiones y utilidades del proveedor. Para esta guía pública no se incluyen comandos específicos del equipo. Consulte el manual del Neomatica ADM100 para el conjunto preciso de comandos SMS o USB y siga esos procedimientos del fabricante para apuntar el dispositivo a d.plaspy.com o a 54.85.159.138 en el puerto 8888.

Si prefiere la configuración por SMS, consulte el manual del ADM100 para la sintaxis correcta y los marcadores de posición del APN. Tenga listos los valores del APN o nombres de usuario que le proporcione su operador celular.

## Notas de configuración

- Firmware y utilidades de configuración varían según la versión y la región, por lo que debe consultar el manual del ADM100 para la sintaxis exacta de comandos y las opciones de GUI.
- Elija UDP o TCP según la preferencia del instalador y la fiabilidad de la red; Plaspy aceptará cualquiera en el puerto 8888 y detectará el protocolo.
- El ADM100 soporta resolución por nombre de dominio, lo que permite usar d.plaspy.com en lugar de una IP para operaciones más simples a largo plazo.
- Confirme el APN, la SIM y la conectividad GPRS antes de esperar reportes en vivo en Plaspy.
- Para despliegues masivos, valide un equipo de extremo a extremo antes de aplicar las mismas configuraciones a toda la flota para asegurar un comportamiento coherente.

## Por qué usar Plaspy con esta configuración

Usar el Neomatica ADM100 con Plaspy ofrece a las organizaciones una manera directa de recolectar datos GPS y eventos en tiempo real para monitoreo de flotas, reproducción de rutas y generación de alertas. El almacenamiento no volátil de rutas del ADM100, sus entradas/salidas flexibles y la interfaz RS 485 complementan las funciones de la plataforma Plaspy para proporcionar visibilidad continua e informes operativos incluso cuando la cobertura de red es intermitente.

Para más información sobre Plaspy y cómo aparecen los dispositivos ADM100 en la plataforma visite https://www.plaspy.com. Para comandos de configuración específicos, notas de firmware e instrucciones del fabricante verifique los detalles en el sitio de Neomatica https://neomatica.com/ ya que los métodos y el comportamiento del firmware pueden cambiar con el tiempo.

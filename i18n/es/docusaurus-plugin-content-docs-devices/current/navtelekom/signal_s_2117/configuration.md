---
slug: /navtelekom/signal_s_2117/configuration
id: signal_s_2117-configuration
sidebar_label: Configuration
title: Navtelekom - Signal S-2117 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Navtelekom Signal S-2117 con Plaspy, parámetros de servidor y pasos prácticos para integrar el rastreador
keywords:
  - Configuración Navtelekom Signal S-2117
  - Instalación Navtelekom Signal S-2117
  - Signal S-2117 Plaspy
  - Configuración servidor Signal S-2117
  - Configuración rastreador GPS Signal S-2117
  - Integración rastreador Plaspy
  - Guía configuración plataforma GPS
  - Rastreo vehicular Signal S-2117
  - Rastreo de flotas Navtelekom
  - Detección protocolo rastreador
---

# Navtelekom - Configuración del Signal S-2117

Esta página documenta el contexto público de configuración para usar el Navtelekom Signal S-2117 con Plaspy. Se centra en los ajustes de servidor compartidos y en los pasos prácticos que usted puede seguir para apuntar el dispositivo a Plaspy, de modo que el rastreador sea visible en la plataforma para reportes de ubicación, alarmas y control remoto.

Plaspy utiliza ajustes de servidor comunes para los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El Signal S-2117 soporta reportes por GSM y GLONASS/GPS y ofrece interfaces como RS-485 y 1-Wire, útiles para sensores auxiliares; confirme los procedimientos de configuración específicos del equipo con la documentación de Navtelekom antes de realizar cambios.

## Resumen de la configuración

Configurar el Signal S-2117 para Plaspy prepara el dispositivo para enviar datos de posición y eventos a la plataforma y garantiza que el rastreador sea detectado y administrable dentro de Plaspy. Los siguientes puntos resumen los objetivos prácticos del proceso de configuración.

- Configurar el dispositivo para que informe al servidor de Plaspy y así lleguen a la plataforma eventos de ubicación y alarma.
- Asegurar la conectividad celular correcta y los ajustes de APN o de red necesarios para la transferencia de datos.
- Seleccionar el protocolo de transporte (UDP o TCP) requerido por el firmware del dispositivo y apuntarlo al puerto de Plaspy para que la plataforma reciba los mensajes.
- Validar la conectividad y confirmar que el dispositivo aparece en Plaspy, verificando actualizaciones de posición y eventos básicos.
- Guardar y aplicar la configuración en el rastreador y reiniciarlo si el firmware requiere reboot para aplicar cambios de red.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de Plaspy al configurar el Signal S-2117. Plaspy usa el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que estos valores se mantienen consistentes entre tipos de equipo.

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- automatic protocol detection in Plaspy

## Requisitos típicos antes de empezar

- El dispositivo debe tener alimentación y estar accesible para que el instalador o técnico realice la configuración.
- SIM activa con plan de datos y cobertura GSM en la zona donde operará el vehículo, ya que el Signal S-2117 usa conectividad celular.
- Conexiones de antena y cualquier sensor externo (dispositivos RS-485, sensores 1-Wire) instalados y asegurados si necesita telemetría de esos sensores.
- Acceso al método de configuración oficial de Navtelekom, como software de PC del fabricante, interfaz web o proceso por SMS/comandos AT.
- Registro de identificadores del equipo, como IMEI, para verificar la unidad correcta en Plaspy tras el registro.
- Conocimiento de los parámetros APN del operador si la SIM requiere APN personalizado, usuario o contraseña para establecer la sesión de datos.

## Cómo se conecta este rastreador a Plaspy

El Signal S-2117 envía posiciones y notificaciones de eventos al endpoint del servidor Plaspy, de modo que los gestores de flota puedan monitorear vehículos, responder a alarmas y usar funciones de control remoto. Configure el dispositivo para que apunte al endpoint y puerto compartidos de Plaspy y la plataforma identificará automáticamente el protocolo correcto.

- El rastreador transmite datos GNSS al dominio o IP del servidor Plaspy en el puerto especificado.
- Eventos de alarma y pánico se reenvían a Plaspy para que los operadores puedan recibir notificaciones.
- La telemetría de interfaces como RS-485 y 1-Wire puede enviarse a Plaspy cuando está configurada y soportada por el firmware del dispositivo.
- El equipo debe apuntar al endpoint y puerto compartidos de Plaspy para que todos los mensajes lleguen al mismo destino en la plataforma.
- La detección automática de protocolos de Plaspy identifica el protocolo del rastreador y decodifica los mensajes para mostrarlos en la plataforma.

## Flujo de trabajo típico de configuración

Siga estos pasos prácticos como flujo de trabajo típico para configurar el Signal S-2117 con Plaspy. Los menús y comandos exactos dependen del firmware de Navtelekom y de la herramienta del fabricante utilizada.

1. Acceda al método de configuración oficial de Navtelekom o al software para el Signal S-2117 (herramienta de PC del fabricante, interfaz web o interfaz de comandos por SMS).
2. Asegúrese de que el dispositivo tenga energía, la SIM insertada y señal GSM antes de intentar la configuración de red.
3. Ingrese la dirección del servidor Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138 en los ajustes de servidor del dispositivo.
4. Configure el puerto de destino en 8888; tenga en cuenta que Plaspy utiliza este mismo puerto para todos los dispositivos.
5. Seleccione UDP o TCP como transporte si el equipo requiere elegir uno; use el transporte compatible con su firmware y la red.
6. Aplique o guarde la configuración en la herramienta de gestión del dispositivo y reinícielo si el firmware lo solicita para aplicar cambios.
7. Valide que el rastreador informe a Plaspy comprobando las primeras actualizaciones de posición y mensajes de evento en la plataforma.

## Ejemplos de comandos de configuración

El método de configuración del Signal S-2117 varía según la herramienta de Navtelekom y la revisión de firmware. En esta página no se incluyen comandos públicos universales. Use el software oficial de Navtelekom o el manual del dispositivo para la sintaxis exacta y el orden de los comandos. Las herramientas típicas del fabricante permitirán ajustar el dominio o IP del servidor, el puerto, el transporte y el APN dentro de una interfaz guiada.

Si dispone de comandos SMS o estilo AT provistos por Navtelekom, aplíquelos en el orden indicado en la documentación oficial. Mantenga a mano los valores de APN y credenciales si el equipo los requiere durante la configuración.

## Notas de configuración

- Diferencias de firmware y revisiones de hardware pueden cambiar la ubicación de menús y la sintaxis de comandos; registre la versión de firmware antes de realizar cambios.
- Al elegir entre UDP y TCP, considere la fiabilidad de la red. Plaspy acepta ambos transportes y usted debe seleccionar la opción compatible con su firmware.
- Confirme APN, usuario y contraseña con el operador móvil al configurar el acceso de datos; un APN incorrecto impedirá que el dispositivo establezca la sesión de datos.
- Si usa sensores externos a través de RS-485 o 1-Wire, verifique que el firmware del dispositivo permita reenviar esos valores al servidor de rastreo.
- Consulte siempre la documentación de Navtelekom para pasos específicos del dispositivo y cualquier referencia a comandos por SMS.

## Por qué usar Plaspy con esta configuración

Configurar el Navtelekom Signal S-2117 para que reporte a Plaspy brinda a los equipos de operaciones visibilidad consistente de la ubicación de los vehículos, alarmas y datos de sensores conectados en una sola plataforma. Usar el endpoint y puerto compartidos de Plaspy simplifica el despliegue en flotas mixtas, ya que todos los dispositivos usan el mismo destino y la plataforma detecta automáticamente el protocolo del equipo.

Learn more about Plaspy and platform capabilities at https://www.plaspy.com. For the latest device-specific setup instructions, firmware notes, and manufacturer tools, verify details with the official Navtelekom website https://www.navtelecom.ru/ since manufacturer specifications and setup methods can change over time.

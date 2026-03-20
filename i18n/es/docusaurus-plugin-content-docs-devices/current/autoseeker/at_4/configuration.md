---
slug: /autoseeker/at_4/configuration
id: at_4-configuration
sidebar_label: Configuration
title: Autoseeker - AT-4 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Autoseeker AT-4 con ajustes de servidor Plaspy y pasos prácticos para seguimiento confiable de mascotas
keywords:
  - Configuración Autoseeker AT-4
  - Configuración Autoseeker AT-4 Plaspy
  - Configuración rastreador GPS Autoseeker
  - Configuración servidor Plaspy AT-4
  - Configuración rastreador de mascotas Autoseeker
  - Configuración software de rastreo AT-4
  - Configuración plataforma GPS Autoseeker AT-4
  - Configuración geocerca AT-4
  - Integración rastreador Autoseeker
  - Reporte de ubicación AT-4
---

# Autoseeker - Configuración del AT-4

Esta página describe el contexto público de configuración para usar el Autoseeker AT-4 con Plaspy. Explica los ajustes de servidor compartidos que Plaspy requiere, los requisitos típicos que debe verificar antes de la configuración y orientación práctica sobre el flujo de trabajo común para conectar el AT-4 a la plataforma Plaspy para rastreo en vivo, alertas de geocercas y reproducción de historial.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el equipo del fabricante pueden variar según la versión de firmware del AT-4, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use esta guía como referencia práctica para los detalles públicos de conexión a Plaspy; confirme cualquier control o comando específico del dispositivo con la documentación de Autoseeker o las instrucciones del proveedor.

## Resumen de la configuración

El objetivo de la configuración es apuntar el AT-4 a Plaspy para que el enlace celular del dispositivo pueda entregar actualizaciones de ubicación y estado a la plataforma de forma confiable. Esto implica ingresar el endpoint del servidor de Plaspy, confirmar los ajustes de transporte, guardar la configuración en el dispositivo y verificar que el rastreador informe correctamente a la plataforma.

- Configure el dispositivo para que reporte al endpoint de servidor compartido de Plaspy y así la ubicación y los eventos lleguen a la plataforma en tiempo real.
- Seleccione el modo de transporte que soporte el rastreador (UDP o TCP) y configure el dispositivo para usarlo.
- Guarde y aplique la configuración del fabricante para que el rastreador envíe datos a Plaspy en el puerto requerido.
- Valide la conectividad y la visibilidad en Plaspy confirmando que el dispositivo aparezca y transmita actualizaciones de posición.
- Use las herramientas del fabricante o los métodos SMS/portal que proporcione Autoseeker para realizar la configuración y la resolución de problemas.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol so the platform accepts incoming data from standard GPS trackers

## Requisitos típicos antes de configurar

- Asegúrese de que el AT-4 tenga la batería cargada y esté encendido durante la configuración y los primeros reportes.
- Confirme que el dispositivo tenga una SIM celular aprovisionada correctamente con datos habilitados y cobertura de red adecuada en 4G o bandas GSM de respaldo.
- Tenga disponible el IMEI o identificador del dispositivo para el registro en la plataforma o verificación si su flujo de trabajo lo requiere.
- Acceso al método oficial de configuración de Autoseeker, como la app proporcionada, el portal web o la interfaz SMS/comandos.
- Un lugar estable para pruebas donde el rastreador pueda obtener fijaciones GNSS y conectividad celular durante la validación.
- Familiaridad con las instrucciones de configuración suministradas por el proveedor para la revisión de firmware del AT-4 que esté usando.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el AT-4 envía mensajes de posición y estado a través de su conexión celular al endpoint y puerto compartidos de Plaspy para que los propietarios y operadores puedan monitorear animales en tiempo real. Plaspy ingiere los mensajes entrantes y los pone a disposición en mapas en vivo, alertas de geocerca y reproducción de historial.

- El rastreador se configura para reportar a d.plaspy.com o al IP equivalente 54.85.159.138.
- Todos los dispositivos usan el mismo puerto en Plaspy, el puerto 8888, lo que simplifica la configuración del servidor entre rastreadores.
- El rastreador puede usar transporte UDP o TCP; configure el transporte en el equipo según la opción soportada por la implementación y guarde el ajuste.
- Plaspy detecta automáticamente el protocolo del rastreador y acepta los datos entrantes para su procesamiento y visualización.
- Tras la configuración, el AT-4 generará actualizaciones de ubicación, mensajes de alarma y notificaciones de estado que se verán en Plaspy.

## Flujo de trabajo común de configuración

1. Acceda al método o software oficial de configuración de Autoseeker para el AT-4 (app, portal o interfaz SMS/comandos) siguiendo las instrucciones del proveedor.
2. En los ajustes de servidor o TCP/UDP del dispositivo ingrese el endpoint de Plaspy por nombre de host d.plaspy.com o por el IP del servidor 54.85.159.138.
3. Configure el puerto del dispositivo en 8888 según lo exige Plaspy.
4. Elija el protocolo de transporte UDP o TCP si el AT-4 solicita selección de transporte; opte por la alternativa que coincida con su despliegue o la guía del proveedor.
5. Aplique o guarde la configuración en el dispositivo usando la herramienta del fabricante o la secuencia de comandos correspondiente.
6. Reinicie el rastreador si las instrucciones del proveedor indican que es necesario para aplicar los ajustes de red.
7. Valide que el dispositivo reporte a Plaspy comprobando que aparezcan en la plataforma los mensajes de ubicación y estado y que las geocercas y alertas se disparen como corresponde.

## Ejemplo de comandos de configuración

No se proporcionó un conjunto público de comandos específico para el AT-4 en este resumen de configuración pública. Los comandos exactos y el formato para configurar la dirección del servidor, el puerto y el transporte en el AT-4 varían según el firmware de Autoseeker y la herramienta del proveedor que utilice (por ejemplo, una app oficial, portal web o interfaz de comandos por SMS). Al usar comandos o configuración por SMS, normalmente ingresará el nombre de host de Plaspy d.plaspy.com o el IP 54.85.159.138 y el puerto 8888, y seleccionará UDP o TCP si el dispositivo lo solicita.

Si recibe una lista de comandos de Autoseeker o de su proveedor, siga su orden y sintaxis exactamente. Mantenga los marcadores de posición que proporcione el fabricante para APN o credenciales y consulte el manual del dispositivo para los comandos de verificación que confirmen que los ajustes del servidor se aplicaron.

## Notas de configuración

- Plaspy usa el mismo puerto para todos los dispositivos compatibles; configure el AT-4 en el puerto 8888 para garantizar conectividad.
- El AT-4 permite seleccionar UDP o TCP; la elección del transporte puede afectar la fiabilidad de los mensajes y debería seguir la guía del instalador.
- Plaspy detecta automáticamente el protocolo del rastreador, lo que reduce la necesidad de coincidir un ID de protocolo en el lado de la plataforma.
- Las versiones de firmware y las herramientas del proveedor difieren; siempre confirme la sintaxis de comandos o las pantallas de la app correctas para su revisión de firmware del AT-4.
- Verifique la cobertura celular y el aprovisionamiento de la SIM antes de solucionar la conectividad con el servidor para evitar diagnósticos erróneos durante las pruebas.

## Por qué usar Plaspy con esta configuración

Usar el Autoseeker AT-4 con Plaspy ofrece a propietarios y operadores un camino sencillo hacia la visibilidad continua de animales, la entrega de alarmas y la reproducción de historial. La larga autonomía de la batería del AT-4, su resistencia exterior y sus funciones bidireccionales se combinan con el endpoint unificado de Plaspy para hacer que la supervisión remota y la respuesta a incidentes sean más simples y confiables.

To learn more about Plaspy and how it integrates with compatible trackers like the AT-4 visit https://www.plaspy.com. For the latest device-specific setup instructions, command syntax, and firmware details consult the manufacturer at https://autoseekergps.com/ to verify current information before deployment.

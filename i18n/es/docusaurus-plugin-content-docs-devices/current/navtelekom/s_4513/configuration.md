---
slug: /navtelekom/s_4513/configuration
id: s_4513-configuration
sidebar_label: Configuration
title: Navtelekom - СМАРТ S-4513 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para integrar el Navtelekom СМАРТ S-4513 con Plaspy con ajustes de servidor y pasos prácticos
keywords:
  - Configuración Navtelekom S-4513
  - Configuración СМАРТ S-4513
  - Rastreador Navtelekom Plaspy
  - Configuración servidor S-4513
  - Gestión de flotas S-4513
  - Configuración rastreador GPS
  - Configuración rastreador Plaspy
  - Configuración seguimiento de vehículos
  - Configuración GPS Navtelekom
  - Configuración telemetría S-4513
---

# Navtelekom - Configuración del СМАРТ S-4513

Esta página documenta el contexto público de configuración para usar el rastreador Navtelekom СМАРТ S-4513 con Plaspy. Se enfoca en los ajustes de servidor compartidos, el flujo práctico para apuntar el equipo a Plaspy y los requisitos habituales que debe verificar antes de la integración. Las indicaciones están pensadas para instaladores e integradores de flota que preparan el S-4513 para uso en producción con Plaspy.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos del lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y la herramienta de configuración que utilice. El S-4513 es compatible con Plaspy de fábrica y emplea su módem 4G, redundancia de doble SIM, GNSS integrado y E/S flexibles para enviar ubicaciones y telemetría a Plaspy una vez aplicados los ajustes de servidor.

## Resumen de configuración

Este proceso prepara el S-4513 para comunicarse de forma confiable con Plaspy, de modo que el rastreador aparezca en la plataforma y envíe posiciones y telemetría de sensores para monitoreo, alertas e informes.

- Apunte el equipo al endpoint de ingestión de Plaspy para que los datos GNSS y de sensores se reenvíen a la plataforma.
- Seleccione el transporte apropiado (UDP o TCP) si el dispositivo solicita elegir transporte.
- Configure el equipo para usar el puerto compartido de Plaspy para que la plataforma acepte los mensajes.
- Valide la conectividad desde el rastreador hacia Plaspy y confirme que el dispositivo aparece en la plataforma.
- Guarde o aplique los ajustes y, si es necesario, reinicie el rastreador para activar la nueva configuración del servidor.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; the device may be configured using UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

Use uno de los endpoints de servidor anteriores en la herramienta de configuración del fabricante o en la interfaz del dispositivo al registrar el S-4513 en Plaspy. La detección automática de protocolo de Plaspy significa que solo necesita suministrar el host correcto y el puerto compartido.

## Requisitos típicos antes de la configuración

- Una unidad S-4513 alimentada y accesible con el cableado del vehículo completado según corresponda.
- Una SIM de datos activa instalada y registrada si se utiliza datos celulares; confirme los ajustes de doble SIM si planea usar redundancia.
- Acceso al método de configuración del fabricante, como NTC Configurator, gestión remota DRC o la herramienta de configuración proporcionada por el proveedor.
- Una cuenta de Plaspy y permisos para registrar o ver dispositivos en la plataforma.
- Conocimiento de la versión de firmware del equipo y de cualquier nota del fabricante que afecte el flujo de configuración o el formato de comandos.
- Capacidad básica para reiniciar el dispositivo o cortar y restaurar la alimentación después de aplicar cambios de configuración.

## Cómo este rastreador se conecta a Plaspy

El S-4513 transmite posiciones GNSS y telemetría de sensores a través del enlace celular al endpoint de ingestión compartido de Plaspy. Una vez aplicados los ajustes de servidor, Plaspy procesa los paquetes de posición y telemetría y los muestra en la plataforma para seguimiento en tiempo real, historial y alertas.

- El rastreador se configura para reportar al endpoint y puerto compartido de Plaspy (d.plaspy.com o 54.85.159.138 en el puerto 8888).
- Los datos se envían desde el dispositivo mediante el transporte elegido (UDP o TCP) hacia Plaspy para ingestión y detección del protocolo.
- Posición, marca temporal y telemetría de sensores se reenvían a Plaspy para habilitar mapas en vivo, reglas de eventos e informes.
- Entradas digitales, sensores analógicos, valores MODBUS o sensores Bluetooth configurados en el S-4513 se incluyen en la telemetría enviada a Plaspy.
- Salidas de control pueden activarse según reglas en Plaspy una vez que la telemetría y el reporte de eventos estén activos.

## Flujo típico de configuración

1. Acceda al método oficial de configuración del fabricante o al software (por ejemplo NTC Configurator o el gestor de dispositivos del proveedor).
2. Localice la sección de ajustes de servidor o reporte del perfil de dispositivo que está configurando.
3. Introduzca el servidor como d.plaspy.com o use alternativamente la IP 54.85.159.138 si la herramienta requiere una dirección IP.
4. Establezca el puerto en 8888 (Plaspy utiliza el mismo puerto para todos los dispositivos compatibles).
5. Elija UDP o TCP si el dispositivo solicita la selección de transporte; Plaspy acepta ambos.
6. Aplique o guarde la configuración y siga las indicaciones del proveedor para enviar los cambios al equipo.
7. Reinicie el dispositivo si la herramienta del fabricante o el firmware lo requieren para activar los nuevos ajustes.
8. Valide que el dispositivo reporte a Plaspy comprobando en la plataforma la conexión del equipo o la aparición de telemetría reciente.

## Ejemplo de comandos de configuración

Este ejemplo no incluye cadenas SMS ni comandos por línea de comando específicos del proveedor. Los comandos exactos y su sintaxis varían según el firmware del fabricante y el método de configuración que utilice (NTC Configurator, DRC o comandos SMS del proveedor). Use las herramientas y la documentación oficiales de Navtelekom para el formato de comandos. Habitualmente, las herramientas del proveedor ofrecen campos en la interfaz gráfica para ingresar el host (d.plaspy.com o 54.85.159.138), el puerto 8888 y la selección de transporte, y a continuación envían los comandos apropiados al dispositivo.

Si recibe o utiliza cadenas de comandos suministradas por el proveedor que contengan marcadores de posición (por ejemplo {{apn}}, {{apnu}} o {{apnp}}), mantenga los marcadores y reemplácelos con los ajustes APN de su operador según las indicaciones del fabricante.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la ubicación exacta de los menús o la sintaxis de los comandos; confirme siempre la versión de firmware antes de aplicar los pasos.
- Elegir TCP frente a UDP suele ser una opción de configuración del dispositivo; Plaspy acepta ambos y maneja automáticamente el protocolo del rastreador una vez que los paquetes llegan al servidor.
- La redundancia de doble SIM en el S-4513 mejora la disponibilidad, pero asegúrese de que el APN y los ajustes de datos sean correctos para cada ranura SIM si usa conmutación entre operadores.
- Algunas instalaciones requieren reiniciar o hacer un ciclo de alimentación del equipo para que los cambios surtan efecto; siga las recomendaciones del proveedor para reinicios seguros.
- Use herramientas de gestión remota del fabricante (DRC, NTC Configurator) para actualizaciones masivas o remotas cuando estén disponibles y así reducir el trabajo manual.

## Por qué usar Plaspy con esta configuración

Integrar el Navtelekom СМАРТ S-4513 con Plaspy ofrece a las organizaciones una vía sencilla para obtener ubicación en tiempo real, telemetría y monitoreo de eventos. Las opciones de telemetría y E/S del S-4513 permiten a los gestores de flota recopilar datos de combustible, encendido y sensores, y llevarlos a Plaspy para tableros, alertas e informes históricos que apoyen la toma de decisiones operativas.

Para obtener más información sobre Plaspy y cómo procesa y presenta los datos rastreados visite https://www.plaspy.com. Verifique siempre los métodos de configuración específicos del dispositivo, el comportamiento del firmware y la documentación del fabricante en el sitio oficial de Navtelekom https://www.navtelecom.ru/ ya que la documentación del proveedor y el firmware pueden cambiar con el tiempo.

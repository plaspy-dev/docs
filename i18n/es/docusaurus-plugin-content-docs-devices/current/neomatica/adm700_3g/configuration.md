---
slug: /neomatica/adm700_3g/configuration
id: adm700_3g-configuration
sidebar_label: Configuration
title: Neomatica - ADM700 3G Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Neomatica ADM700 3G en Plaspy con ajustes de servidor compartido y flujo práctico de instalación
keywords:
  - configuración Neomatica ADM700 3G
  - configuración ADM700 3G Plaspy
  - configuración rastreador Neomatica
  - configuración servidor ADM700 3G
  - configuración plataforma GPS ADM700 3G
  - configuración seguimiento flota Neomatica
  - configuración EGTS ADM700 3G
  - configuración telemetría ADM700 3G
  - configuración dispositivo Plaspy
  - rastreador vehicular Neomatica ADM700 3G
---

# Neomatica - Configuración ADM700 3G

Esta página describe el contexto público de configuración para usar el rastreador Neomatica ADM700 3G con Plaspy. Resume los ajustes de servidor compartidos por Plaspy, explica cómo suele conectarse este modelo a la plataforma y ofrece un flujo de trabajo práctico para preparar el equipo y que reporte ubicación y telemetría a Plaspy. Utilice esta guía como complemento a la documentación del fabricante Neomatica y a sus procedimientos de instalación.

Plaspy emplea ajustes de servidor compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos exactos del lado del fabricante pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y las herramientas del proveedor. El ADM700 3G se describe aquí como un dispositivo telemático 3G robusto con soporte EGTS y protocolo abierto, capacidad de doble SIM y opciones de actualización remota de firmware que facilitan su integración en Plaspy al aplicar los ajustes de servidor que se indican a continuación.

## Resumen de la configuración

El objetivo de la configuración es apuntar el ADM700 3G al endpoint de ingestión de Plaspy y verificar que el equipo envíe correctamente datos GNSS y telemetría. Normalmente la configuración se realiza con el software del fabricante o mediante comandos SMS/interfaz de comandos para establecer el destino del servidor, el transporte y el puerto, y luego validar la conectividad en Plaspy.

- Configure el equipo para que reporte al endpoint de Plaspy y así se entreguen las posiciones GNSS y la telemetría.
- Seleccione el transporte (UDP o TCP) y establezca el puerto común de Plaspy para asegurar el enrutamiento correcto.
- Verifique la conectividad celular, el estado de las SIM y que el equipo esté usando el APN correcto si su red lo requiere.
- Guarde y aplique los ajustes, luego confirme que la unidad aparezca y reporte en Plaspy.
- Use las herramientas del fabricante para gestión de firmware y la selección del protocolo (EGTS o protocolo abierto) según corresponda.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol so devices using EGTS or the device open protocol are accepted on the same port

## Requisitos previos

- Una unidad ADM700 3G con alimentación y acceso a su interfaz de configuración (software del fabricante, comandos SMS o herramienta de configuración).
- Servicio celular activo con una o más tarjetas SIM instaladas y registradas en una red 3G/UMTS compatible.
- Conocimiento de los ajustes APN del operador si su SIM lo requiere; tenga las credenciales de APN a la mano.
- Acceso al método oficial de configuración de Neomatica o a la documentación de soporte para el ADM700 3G.
- Una cuenta en Plaspy o acceso de administrador para validar que el dispositivo sea visible y esté reportando tras la configuración.
- Un plan para la gestión de firmware si se requieren actualizaciones remotas en una flota.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el ADM700 3G envía posiciones GNSS y telemetría a Plaspy a través de redes de datos celulares usando el nombre de dominio o una IP directa. El rastreador puede emplear EGTS o su protocolo abierto para formatear los mensajes; la plataforma de Plaspy detectará automáticamente el protocolo cuando los datos lleguen al endpoint y puerto compartidos.

- El equipo reporta ubicación y telemetría a d.plaspy.com (o 54.85.159.138) en el puerto 8888.
- El transporte puede ser UDP o TCP; elija el que soporte su firmware o despliegue y configure el mismo puerto 8888.
- Plaspy procesa las posiciones GNSS, eventos de entradas/salidas y telemetría, y relaciona los registros con la cuenta/dispositivo correspondiente.
- Si la conectividad es intermitente, el ADM700 3G puede almacenar registros localmente y subirlos cuando se restablezca el enlace celular.
- El puerto compartido y la detección automática de protocolo en Plaspy simplifican la incorporación de varios equipos sin variar el servidor por dispositivo.

## Flujo típico de configuración

1. Acceda al método oficial de configuración de Neomatica para el ADM700 3G (herramienta del fabricante, GUI web o interfaz SMS/comandos).
2. En los ajustes de servidor o destino TCP/UDP del equipo, indique la dirección del servidor Plaspy usando d.plaspy.com o 54.85.159.138.
3. Establezca el puerto del servidor en 8888.
4. Seleccione UDP o TCP si el equipo requiere elegir un transporte; ambos son compatibles con Plaspy en el puerto 8888.
5. Proporcione los datos APN para la SIM activa si el equipo lo requiere y verifique los ajustes de doble SIM si está usando redundancia de red.
6. Aplique o guarde la configuración en el dispositivo y siga las indicaciones del fabricante para confirmar los cambios.
7. Reinicie o corte la alimentación del equipo si la guía del fabricante o el firmware indican que es necesario para activar los nuevos parámetros.
8. Valide que el ADM700 3G esté reportando a Plaspy confirmando la visibilidad del dispositivo y la llegada de telemetría en su cuenta Plaspy.

## Ejemplos de comandos de configuración

El ADM700 3G puede configurarse mediante herramientas del fabricante, interfaces web o formatos de comandos/SMS según el firmware y las preferencias del instalador. Los comandos exactos o los campos de menú varían entre versiones de firmware y herramientas de proveedor. Cuando use cualquier método basado en comandos, asegúrese de definir el dominio o IP y el puerto de Plaspy exactamente como se muestran:

- Point server to d.plaspy.com or 54.85.159.138
- Set port to 8888
- Select transport UDP or TCP as required

Dado que los formatos de comando del fabricante varían, consulte la documentación del Neomatica ADM700 3G para la sintaxis precisa si planea usar SMS o configuración por línea de comandos. Plaspy aceptará conexiones a d.plaspy.com o 54.85.159.138 en el puerto 8888 y detectará automáticamente el protocolo del dispositivo.

## Notas de configuración

- Las diferencias de firmware pueden modificar menús de configuración y la sintaxis de comandos; siempre verifique la versión de firmware antes de aplicar los ajustes.
- TCP y UDP funcionan con Plaspy en el puerto compartido 8888; elija el transporte que mejor se adapte a sus necesidades de red y fiabilidad.
- La operación en doble SIM del ADM700 3G mejora la resiliencia de conectividad; asegúrese de configurar los APN para cada ranura SIM si fuese necesario.
- Como Plaspy detecta automáticamente el protocolo del rastreador, por lo general solo necesita apuntar el equipo al endpoint y puerto de Plaspy en lugar de seleccionar un protocolo específico de Plaspy.
- Mantenga a la mano la documentación del fabricante para opciones específicas del dispositivo como activación EGTS, selección de protocolo o procedimientos de actualización de firmware.

## Por qué usar Plaspy con esta configuración

Usar el Neomatica ADM700 3G con Plaspy ofrece una vía confiable para capturar en tiempo real ubicación, telemetría y alertas basadas en eventos desde despliegues en vehículos y maquinaria. El soporte del ADM700 3G para EGTS y protocolo abierto, junto con la doble SIM y un desempeño GNSS robusto, lo hace adecuado para flotas, logística y equipos pesados donde la visibilidad continua y la reproducción histórica son importantes.

To learn more about Plaspy and how the platform can accept ADM700 3G devices, visit https://www.plaspy.com. Please verify the latest device-specific configuration steps, firmware behavior, and manufacturer details with Neomatica at https://neomatica.com/ since hardware revisions and firmware updates can change configuration methods over time.

---
slug: /teltonika/fmu126/configuration
id: fmu126-configuration
sidebar_label: Configuration
title: Teltonika - FMU126 Configuration
sidebar_class_name: menu_item_tracker
description: Configure el Teltonika FMU126 para reportar a Plaspy con ajustes de servidor compartido y comandos de ejemplo
keywords:
  - Configuración Teltonika FMU126
  - Configuración FMU126
  - Configuración servidor Teltonika FMU126
  - Configuración software FMU126
  - Configuración Plaspy Teltonika FMU126
  - Configuración plataforma FMU126 GPS
  - Configuración tracker Plaspy
  - Rastreo de vehículos FMU126
  - Configuración SMS FMU126
  - Configuración GPRS FMU126
---

# Teltonika - FMU126 Configuración

Esta página documenta el contexto público de configuración para usar el Teltonika FMU126 con Plaspy. Se centra en los ajustes de servidor y en los pasos prácticos que puede seguir para apuntar un FMU126 a Plaspy, de modo que el dispositivo reporte posición y datos diagnósticos a la plataforma. Esta guía utiliza únicamente endpoints públicos de Plaspy e incluye el comando de ejemplo documentado cuando está disponible.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del tracker cuando el dispositivo se conecta. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el método de instalación y la herramienta de configuración de Teltonika que utilice. Siempre que esté disponible, esta página incluye el comando de ejemplo del contenido público de configuración del FMU126 y explica los marcadores que debe reemplazar.

## Resumen de la configuración

Configurar el FMU126 para Plaspy prepara el tracker para enviar su ubicación y eventos a la plataforma Plaspy usando el endpoint y puerto compartido de Plaspy. El proceso normalmente establece la información del APN, el host o IP del servidor, el puerto del servidor y el tipo de transporte, y luego valida que el tracker aparezca en Plaspy.

- Proporcione al FMU126 el APN y las credenciales de red correctas para que pueda utilizar datos móviles y alcanzar Plaspy.
- Apunte el dispositivo al nombre de host o IP del servidor de Plaspy y configure el puerto compartido que usan todos los dispositivos Plaspy.
- Seleccione el protocolo de transporte (UDP o TCP) si el dispositivo requiere una selección explícita.
- Guarde y aplique la configuración y reinicie el dispositivo si el firmware lo exige.
- Verifique que el dispositivo sea visible y esté reportando en Plaspy y solucione la conectividad según sea necesario.

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del tracker cuando el dispositivo se conecta
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que puede usar consistentemente el puerto 8888 en modelos compatibles

## Requisitos típicos antes de configurar

- Un FMU126 instalado y con alimentación, con acceso a una red móvil mediante una SIM válida y un plan de datos activo.
- Credenciales para acceder al método oficial de configuración de Teltonika, como comandos SMS o herramientas de configuración del proveedor.
- Conocimiento de los datos del APN de la red móvil para la SIM que vaya a usar.
- Una forma de enviar comandos SMS o conectar el tracker a la herramienta del fabricante según el método de configuración elegido.
- Acceso a la cuenta Plaspy y a los registros de la flota para confirmar que el dispositivo aparece después de la configuración.

## Cómo se conecta este tracker a Plaspy

Al configurar el FMU126 para usar Plaspy, el tracker iniciará conexiones y enviará datos de reporte al endpoint y puerto compartido de Plaspy. La detección automática de protocolo de Plaspy interpreta el protocolo del dispositivo y hace que el tracker sea visible en la plataforma.

- El tracker envía mensajes de ubicación y eventos a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888.
- Puede seleccionar UDP o TCP como transporte según las opciones del dispositivo; Plaspy admite ambos en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del tracker y procesa los mensajes entrantes para ese dispositivo.
- Tras una configuración exitosa, el dispositivo aparecerá en Plaspy para seguimiento, monitoreo de estado e informes de eventos.
- La validación de conectividad normalmente incluye verificar el registro en GPRS, la iniciación de la sesión de datos y la llegada de mensajes a la plataforma.

## Flujo típico de configuración

1. Acceda al método de configuración oficial del fabricante o al software proporcionado por Teltonika (por ejemplo mediante comandos SMS o una herramienta de configuración oficial).
2. Ingrese el host del servidor como d.plaspy.com o utilice la IP del servidor 54.85.159.138 si prefiere la entrada numérica.
3. Configure el puerto del servidor en 8888. Tenga en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos.
4. Elija UDP o TCP si el dispositivo requiere seleccionar un protocolo de transporte.
5. Proporcione los ajustes del APN móvil y el nombre de usuario y contraseña del APN si son necesarios por el operador.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware requiere un reinicio para aplicar los cambios.
7. Valide que el dispositivo reporte a Plaspy comprobando el estado del dispositivo y los mensajes recientes en su cuenta Plaspy.

## Comandos de configuración de ejemplo

El contenido público de configuración del FMU126 incluye un comando básico de parámetros que puede usarse vía SMS u otros canales de configuración soportados por Teltonika. Preserve y reemplace los marcadores antes de enviar.

- SMS o lote de comandos para establecer APN y parámetros del servidor Plaspy

```
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

Explicación de marcadores y campos
- [apn] — reemplace con el nombre del APN de su tarjeta SIM
- [apnu] — reemplace con el nombre de usuario del APN si su operador lo requiere; deje vacío si no es necesario
- [apnp] — reemplace con la contraseña del APN si su operador la exige; deje vacío si no es necesario
- 2004 configura el dominio del servidor a d.plaspy.com, que es el host público de Plaspy
- 2005 configura el puerto en 8888, que Plaspy utiliza para todos los dispositivos
- 2006:1 normalmente representa la activación de GPRS o la selección del perfil de datos activo según el firmware del dispositivo; consulte la documentación de Teltonika para el significado exacto de este parámetro en su firmware

Si su herramienta de instalación o firmware usa etiquetas de parámetros diferentes o un configurador gráfico, realice las entradas equivalentes: valores de APN, host del servidor d.plaspy.com o 54.85.159.138, y puerto 8888, luego seleccione UDP o TCP si se solicita.

## Notas de configuración

- Los dispositivos Teltonika comúnmente soportan configuración por SMS y basada en GPRS; el comando de ejemplo anterior está formateado para ajuste por lotes de parámetros y puede enviarse vía SMS cuando la configuración por SMS esté habilitada.
- Las versiones de firmware y las revisiones de hardware pueden cambiar los códigos de parámetros y el comportamiento. Confirme siempre los identificadores de parámetros con la documentación del fabricante para el firmware de su tracker.
- Elija UDP o TCP según sus necesidades de red y confiabilidad; Plaspy soporta ambos tipos de transporte en el puerto 8888.
- Plaspy detectará automáticamente el protocolo del tracker una vez que el dispositivo se conecte correctamente a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- Si el dispositivo no aparece en Plaspy después de la configuración, verifique la corrección del APN, el establecimiento de la sesión de datos móviles y que el dispositivo pueda resolver o alcanzar d.plaspy.com o la IP proporcionada.

## Por qué usar Plaspy con esta configuración

Usar el FMU126 con Plaspy permite a las organizaciones centralizar la ubicación, los eventos y el reporte de estado de un tracker Teltonika capaz en una única plataforma. El soporte del FMU126 para GNSS, sensores BLE, integraciones RS232 y adaptadores CAN lo hace flexible para múltiples casos de uso, y apuntarlo a Plaspy ofrece visibilidad y monitoreo consistentes dentro de su flujo de trabajo de gestión de flotas.

To learn more about Plaspy and how it handles device connectivity, visit https://www.plaspy.com. For the latest device specific parameter meanings, firmware notes, and detailed Teltonika setup instructions verify the information on the manufacturer site https://www.teltonika-gps.com/ as device behavior and configuration commands can change with firmware and hardware revisions.

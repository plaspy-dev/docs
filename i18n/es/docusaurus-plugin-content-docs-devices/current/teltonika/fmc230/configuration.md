---
slug: /teltonika/fmc230/configuration
id: fmc230-configuration
sidebar_label: Configuration
title: Teltonika - FMC230 Configuration
sidebar_class_name: menu_item_tracker
description: Guía para configurar el Teltonika FMC230 con Plaspy, incluye ajustes de servidor, comandos SMS y pasos prácticos
keywords:
  - Configuración Teltonika FMC230
  - Configuración FMC230
  - Teltonika FMC230 con Plaspy
  - Configuración servidor FMC230
  - Configuración rastreador GPS
  - Configuración rastreador gestión de flotas
  - Rastreador vehículo FMC230
  - Configuración sensores BLE FMC230
  - Configuración rastreador Teltonika
  - Configuración dispositivo Plaspy
---

# Teltonika - FMC230 Configuration

Esta página describe el contexto público de configuración para usar el Teltonika FMC230 con la plataforma Plaspy. Reúne los pasos prácticos y los comandos públicos que se usan habitualmente para apuntar el FMC230 a Plaspy, de modo que el dispositivo reporte ubicación, eventos y telemetría de sensores BLE a su cuenta en Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del instalador. El FMC230 puede configurarse mediante comandos SMS como se muestra a continuación, o mediante las herramientas de configuración de Teltonika cuando estén disponibles; siga el método apropiado para su firmware e instalación.

## Resumen de la configuración

Esta configuración prepara el FMC230 para enviar posición y telemetría a Plaspy y asegura que el dispositivo sea visible y reporte como se espera. Se concentra en establecer el endpoint y el puerto del servidor, seleccionar el modo de transporte si fuera necesario, y validar la conectividad.

- Configure el rastreador para que reporte al servidor de Plaspy y así los paquetes de posición y eventos lleguen a su cuenta.  
- Ajuste el transporte del dispositivo a UDP o TCP según la preferencia del instalador y las condiciones de la red.  
- Aplique las credenciales APN y los parámetros GSM necesarios para que el rastreador use datos móviles y alcance el servidor.  
- Valide el reporte comprobando la actividad del dispositivo en Plaspy y confirmando las actualizaciones en tiempo real.  
- Use el comando de ejemplo setparam por SMS más abajo como un método público y documentado para aplicar los ajustes básicos de servidor.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com  
- IP del servidor 54.85.159.138  
- Puerto 8888  
- Soporte de transporte UDP o TCP en el puerto 8888  
- Plaspy detecta automáticamente el protocolo del rastreador independientemente de la variante del dispositivo

## Requisitos típicos antes de la configuración

- Un FMC230 alimentado con una fuente estable y montado según las instrucciones del fabricante.  
- Conectividad celular activa incluyendo una SIM con acceso a datos adecuada para su región y SKU del dispositivo.  
- Acceso al método oficial de configuración de Teltonika que planea usar, por ejemplo comandos SMS o el software de configuración de Teltonika.  
- Credenciales APN del proveedor móvil disponibles para introducir en los parámetros del equipo.  
- Acceso a los datos de su cuenta Plaspy para confirmar la visibilidad del dispositivo tras la configuración.  
- Conocimientos básicos sobre si UDP o TCP es preferible en su red y entorno de firewall.

## Cómo se conecta este rastreador a Plaspy

El FMC230 se configura para enviar sus mensajes de posición, eventos y telemetría al endpoint y puerto compartidos de Plaspy, de modo que Plaspy pueda ingerir los datos y mostrarlos en su panel. Plaspy recibe los mensajes y aplica la detección y el parseo del protocolo de forma automática.

- El rastreador envía actualizaciones de ubicación a d.plaspy.com o a 54.85.159.138 en el puerto 8888.  
- Los mensajes pueden enviarse por UDP o TCP según la selección de transporte del dispositivo.  
- Plaspy detecta automáticamente la variante de protocolo entrante y decodifica los mensajes del rastreador.  
- Una vez reportando, Plaspy aplica la lógica de eventos y el almacenamiento histórico para que pueda monitorear movimiento y datos de sensores.  
- La confirmación de la conexión exitosa se ve en Plaspy como actualizaciones de posición en tiempo real y marcas de tiempo de mensajes recientes.

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración oficial de Teltonika o al software recomendado para el firmware y el proceso de instalación de su FMC230.  
2. Introduzca la dirección del servidor Plaspy usando d.plaspy.com o la IP del servidor 54.85.159.138 en los ajustes de servidor del dispositivo.  
3. Establezca el puerto del dispositivo en 8888 para la comunicación con Plaspy.  
4. Elija UDP o TCP si su dispositivo requiere selección de transporte y su red tiene una preferencia.  
5. Proporcione el APN y las credenciales celulares necesarias para que el dispositivo pueda alcanzar los servidores Plaspy a través de la red móvil.  
6. Aplique o guarde la configuración y reinicie el dispositivo si el método o el firmware requieren un reinicio para activar los cambios.  
7. Valide que el dispositivo reporte a Plaspy comprobando actualizaciones en vivo y mensajes recientes en su cuenta Plaspy.

## Comandos de configuración de ejemplo

El FMC230 puede aceptar comandos de configuración vía SMS. El siguiente ejemplo público establece parámetros APN y el endpoint y puerto de Plaspy. Conserva y reemplace los marcadores de posición por sus valores reales de APN según sea necesario.

- Comando SMS de ejemplo para establecer APN y parámetros del servidor Plaspy

```text
setparam 2001:{{apn}};2002:{{apnu}};2003:{{apnp}};2004:d.plaspy.com;2005:8888;2006:1
```

- Explicación de marcadores y parámetros
  - {{apn}}  Reemplace con el nombre APN de su operador móvil.  
  - {{apnu}} Reemplace con el usuario APN si su operador lo requiere, de lo contrario deje en blanco.  
  - {{apnp}} Reemplace con la contraseña APN si su operador lo requiere, de lo contrario deje en blanco.  
  - El parámetro 2004 establece el dominio del servidor a d.plaspy.com.  
  - El parámetro 2005 establece el puerto en 8888.  
  - El parámetro 2006 puede representar una bandera de habilitación para GPRS o un perfil de conexión según el firmware, por lo que debe verificarlo en la documentación de Teltonika correspondiente a su versión de firmware.

Nota: Los identificadores de parámetros y su comportamiento pueden variar según la versión de firmware. Use el manual de Teltonika que coincida con el firmware de su dispositivo para confirmar el significado de los parámetros y los valores aceptables.

## Notas de configuración

- Las diferencias de firmware pueden cambiar los IDs de parámetros y la sintaxis SMS soportada; siempre verifique el conjunto de comandos contra la documentación de Teltonika de su firmware.  
- Elija UDP o TCP en función de la fiabilidad de la red y la configuración del firewall; TCP puede ofrecer mayor fiabilidad de sesión mientras que UDP es común por su menor sobrecarga.  
- La configuración por SMS es una opción práctica para instalaciones en campo, pero puede verse limitada por la longitud del mensaje y las reglas de parseo del firmware.  
- Reemplace los marcadores de APN por los valores del operador específicos para su SIM y región.  
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que no necesita un puerto distinto por modelo de dispositivo.

## Por qué usar Plaspy con esta configuración

Usar el FMC230 con Plaspy ofrece a las organizaciones una forma sencilla de centralizar la telemetría de vehículos y activos robustos, junto con datos de sensores BLE, en una sola plataforma de monitoreo. Los ajustes de servidor compartidos de Plaspy simplifican los despliegues porque todos los dispositivos usan el mismo puerto y Plaspy detecta el protocolo automáticamente, lo que reduce la complejidad de configuración por dispositivo.

Para obtener más información sobre Plaspy visite https://www.plaspy.com y revise los detalles actuales de dispositivos Teltonika en https://www.teltonika-gps.com/ para confirmar el comportamiento del firmware y la guía de configuración del fabricante.

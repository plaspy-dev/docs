---
slug: /xexun/u03/configuration
id: u03-configuration
sidebar_label: Configuration
title: Xexun - U03 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Xexun U03 con ajustes de servidor Plaspy y comandos SMS
keywords:
  - Configuración Xexun U03
  - Configuración U03
  - Xexun U03 Plaspy
  - Guía configuración U03
  - Configuración servidor U03
  - Configuración SMS U03
  - Configuración rastreador Plaspy
  - Configuración badge posicionamiento interior
  - Configuración placa UWB Plaspy
  - Instrucciones despliegue U03
---

# Xexun - U03 Configuración

Esta página describe el contexto de configuración pública para usar el Xexun U03 con Plaspy. Explica los ajustes compartidos del servidor Plaspy, los comandos SMS comunes que aparecen en ejemplos públicos de configuración de dispositivos y los pasos prácticos para que el rastreador informe a Plaspy. Utilice esta guía junto con la documentación del hardware del dispositivo y cualquier herramienta del proveedor que tenga para su unidad específica.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. La documentación del U03 y los comandos mostrados aquí reflejan ejemplos de configuración pública; si su unidad admite configuración por SMS o GPRS, estos comandos son las cadenas públicas usadas comúnmente para apuntar el dispositivo a Plaspy.

## Resumen de la configuración

El objetivo de la configuración es preparar el U03 para que se comunique con Plaspy y aparezca correctamente en la plataforma para monitoreo en tiempo real, alertas e informes. Para unidades que incluyen configuración por SMS o GPRS, los comandos públicos permiten establecer valores APN, puntos finales de servidor e intervalos de reporte.

- Configure el dispositivo para enviar datos al endpoint del servidor Plaspy para que la etiqueta o el rastreador aparezca en su cuenta de Plaspy.
- Establezca cualquier APN y credenciales del operador cuando el dispositivo soporte datos celulares.
- Verifique que el dispositivo sea accesible comprobando el transporte y los intervalos de reporte y observando las comprobaciones del dispositivo en Plaspy.
- Valide la telemetría como batería, movimiento y mensajes SOS que lleguen a Plaspy para monitorización y alertas.
- Anote la contraseña del dispositivo usada para comandos SMS y siga las instrucciones del fabricante para el firmware y las herramientas.

## Ajustes del servidor Plaspy

- server domain d.plaspy.com  
- server IP 54.85.159.138  
- port 8888  
- transport support for UDP or TCP on port 8888 depending on device requirement  
- automatic protocol detection in Plaspy so the platform identifies the tracker protocol once traffic reaches the server

Plaspy usa el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta al endpoint del servidor.

## Requisitos habituales antes de la configuración

- Confirme que la unidad U03 esté alimentada y accesible para configuración y pruebas.
- Si va a usar configuración GPRS por SMS, inserte una tarjeta SIM funcional y asegure que los servicios de SMS o datos estén activos.
- Conozca la contraseña de control por SMS del dispositivo; los ejemplos públicos abajo usan la contraseña predeterminada 123456 cuando aplica.
- Tenga acceso al método oficial de configuración del fabricante, como comandos SMS, una herramienta del proveedor o el manual del dispositivo.
- Confirme el APN, el usuario APN y la contraseña APN del operador si se utilizarán datos celulares.
- Prepárese para reiniciar o cortar la alimentación del dispositivo después de la configuración cuando sea necesario.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para reporte de red, el rastreador se establece para enviar su ubicación y estado al endpoint y puerto compartidos del servidor Plaspy. Plaspy recibe esos paquetes, identifica automáticamente el protocolo del rastreador y procesa la telemetría para mapeo en tiempo real, alertas e historial.

- El rastreador se configura para apuntar su servidor GPRS o de reporte al endpoint y puerto de Plaspy para que los mensajes lleguen a la plataforma.
- Plaspy detecta automáticamente el protocolo del rastreador una vez que los mensajes llegan a d.plaspy.com o a la IP y puerto del servidor.
- El dispositivo reporta telemetría relevante como actualizaciones de ubicación, eventos SOS, estado de batería y eventos de movimiento o manipulación a Plaspy.
- Plaspy ingiere los datos para monitoreo en tiempo real, reproducción histórica, eventos de geocercas y flujos de alertas.
- Use los ajustes del servidor Plaspy (d.plaspy.com o 54.85.159.138 y puerto 8888) en la configuración del dispositivo para que el tráfico se enrute correctamente.

## Flujo típico de configuración

1. Acceda al método o software oficial de configuración del fabricante para su unidad U03 (comandos SMS, app del proveedor o herramienta del dispositivo).
2. Ingrese el endpoint del servidor Plaspy suministrando d.plaspy.com o la IP del servidor 54.85.159.138 en el campo de servidor del dispositivo.
3. Establezca el puerto 8888 como el puerto de reporte del dispositivo. Plaspy usa el mismo puerto para todos los dispositivos.
4. Elija UDP o TCP si el dispositivo requiere selección de transporte.
5. Configure APN, usuario APN y contraseña APN si el dispositivo envía datos por GPRS celular.
6. Aplique o guarde la configuración y reinicie o desconecte y vuelva a conectar la alimentación del dispositivo si es necesario.
7. Verifique que el dispositivo informe a Plaspy comprobando la conectividad y la telemetría en su implementación de Plaspy.

Cuando la configuración por SMS está disponible, siga el formato de comandos públicos que se muestra abajo exactamente y verifique las respuestas del dispositivo antes de finalizar el flujo.

## Ejemplos de comandos de configuración

Los siguientes ejemplos de comandos SMS son ejemplos públicos para dispositivos que aceptan configuración por SMS. Los comandos de ejemplo usan la contraseña predeterminada del dispositivo 123456 cuando se requiere. Úselos en el orden mostrado si realiza una configuración inicial; el comando de restauración de fábrica es opcional y debe usarse sólo cuando sea necesario.

1. Comando opcional de restauración de fábrica inicial
```text
begin123456
```

2. Establecer el APN del operador
```text
apn123456 [apn]
```
- Reemplace [apn] con la cadena APN de su operador SIM.

3. Establecer el usuario APN (opcional)
```text
apnuser123456 [apnu]
```
- Reemplace [apnu] con el usuario APN si el operador lo requiere.

4. Establecer la contraseña APN (opcional)
```text
apnpasswd123456 [apnp]
```
- Reemplace [apnp] con la contraseña APN si es necesaria.

5. Establecer el servidor GPRS a Plaspy usando la IP pública y el puerto
```text
adminip123456 54.85.159.138 8888
```
- Esto usa la IP del servidor Plaspy y el puerto 8888 como se publica. Si su dispositivo acepta un nombre de dominio en lugar de una IP, puede usar d.plaspy.com 8888 cuando el firmware lo soporte.

6. Establecer el modo GPRS
```text
gprsmode123456
```
- Use el valor de modo específico del dispositivo si su firmware requiere un parámetro; el ejemplo público muestra el formato del comando de modo.

7. Establecer el intervalo de actualización a 60 segundos
```text
t060s***n123456
```
- Esto fija el intervalo de reporte del dispositivo en 60 segundos según el formato del ejemplo público. Confirme la sintaxis exacta del intervalo para su firmware.

Conserve la contraseña de control SMS en estos comandos. Si su unidad utiliza una contraseña distinta a la predeterminada pública 123456, reemplácela en consecuencia.

## Notas de configuración

- Las variantes de firmware y regionales pueden usar una sintaxis de comandos SMS diferente o requerir parámetros suplementarios; siempre confirme el conjunto de comandos correcto para el firmware de su dispositivo.
- Muchas implementaciones de Plaspy aceptan tanto el dominio del servidor d.plaspy.com como la IP del servidor 54.85.159.138; utilice la forma que soporte su firmware.
- Elija UDP o TCP según el soporte del dispositivo y las consideraciones de red; Plaspy detectará automáticamente el protocolo del rastreador una vez que los paquetes lleguen al puerto 8888.
- La configuración por SMS se usa frecuentemente en dispositivos de campo que no tienen una interfaz de usuario local. Mantenga un registro de las respuestas SMS del dispositivo para confirmar cambios exitosos.
- Si realiza una restauración de fábrica, vuelva a aplicar el APN y los ajustes de servidor y verifique el reporte a Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el U03 con Plaspy integra el dispositivo en un entorno unificado de visibilidad y monitoreo donde ubicación, eventos de seguridad y telemetría se presentan para uso operativo. Apuntar el rastreador a Plaspy mediante los ajustes de servidor compartidos asegura que los datos fluyan a la plataforma, donde usted puede configurar alertas, mapas, geocercas y flujos de informes.

Para obtener más información sobre Plaspy y cómo encaja esta configuración en implementaciones gestionadas, visite https://www.plaspy.com. Tenga en cuenta que los métodos de configuración específicos del dispositivo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, por lo que debe verificar las instrucciones de configuración más recientes y la sintaxis de comandos en el sitio del fabricante https://www.xexun.com/ antes de aplicar la configuración en producción.

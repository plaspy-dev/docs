---
slug: /tzone/tz_br04/configuration
id: tz_br04-configuration
sidebar_label: Configuration
title: TZone - TZ-BR04 Configuration
sidebar_class_name: menu_item_tracker
description: Cómo configurar el rastreador TZone TZ-BR04 para reportar a Plaspy usando servidores públicos y comandos SMS
keywords:
  - Configuración TZone TZ-BR04
  - Instalación TZone TZ-BR04
  - Configuración TZ-BR04 Plaspy
  - Configuración rastreador GPS TZone
  - Comandos SMS TZ BR04
  - Configuración servidor rastreador GPS
  - Configuración seguimiento de flotas
  - Configuración seguimiento vehicular
  - Configuración APN del rastreador
  - Guía rastreador TZone
---

# TZone - Configuración del TZ-BR04

En esta página se documenta el contexto público de configuración para usar el rastreador GPS TZone TZ-BR04 con Plaspy. Aquí encontrará los valores de servidor públicos de Plaspy que necesita y los comandos SMS públicos aceptados por el TZ-BR04 para configurar GPRS. Use esta guía para preparar el equipo para comunicarse con la plataforma Plaspy y para validar la conectividad básica una vez aplicada la configuración.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El TZ-BR04 admite configuración por SMS para parámetros GPRS como se muestra a continuación; los pasos prácticos aquí se enfocan en aplicar los valores de servidor de Plaspy y verificar que el dispositivo reporte correctamente.

## Resumen de la configuración

El objetivo de esta configuración es preparar el TZ-BR04 para que envíe su ubicación y estado a la plataforma Plaspy y que los activos aparezcan en la interfaz. En el flujo público habitual para el TZ-BR04 se usan comandos SMS para establecer el APN del operador, el intervalo de reporte y el endpoint del servidor GPRS.

- Configure el APN del operador móvil y, si aplica, las credenciales APN para que el dispositivo pueda abrir una sesión GPRS.
- Ajuste el intervalo de reporte a un valor adecuado para su operación, por ejemplo 60 segundos.
- Apunte el rastreador al servidor de Plaspy ingresando el endpoint y el puerto compartido.
- Habilite o active el modo GPRS para que el dispositivo pueda enviar datos por la red celular.
- Valide la conectividad del dispositivo en Plaspy y confirme que llegan las actualizaciones de ubicación.

## Configuración del servidor Plaspy

Use los siguientes ajustes públicos de servidor Plaspy al configurar el TZ-BR04. Estos son los valores que Plaspy publica para integración de dispositivos.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos soportados y realiza la detección del protocolo de forma automática.

## Requisitos típicos antes de la instalación

- Un dispositivo TZ-BR04 alimentado e instalado según sus requerimientos de sitio y listo para aceptar configuración.
- Una tarjeta SIM con servicio de datos activo y el APN correcto para el operador móvil.
- Acceso al método de configuración por SMS del dispositivo o a la herramienta de configuración del fabricante que use su TZ-BR04.
- La contraseña SMS del dispositivo si fue cambiada respecto al valor por defecto que se usa en los ejemplos.
- Un plan para confirmar la conectividad GPRS, por ejemplo un segundo teléfono para recibir SMS de respuesta del dispositivo o acceso a Plaspy para verificar paquetes entrantes.
- Conocimiento de si su dispositivo admite nombres de dominio o requiere una dirección IP en el campo de servidor.

## Cómo se conecta este rastreador a Plaspy

El TZ-BR04 se configura para abrir una conexión GPRS y enviar reportes periódicos al endpoint del servidor Plaspy. Una vez que el equipo apunta al servidor y puerto compartidos, Plaspy detecta automáticamente el protocolo del dispositivo y procesa los mensajes entrantes.

- El rastreador utiliza los ajustes APN configurados para establecer una sesión de datos GPRS.
- Reporta al endpoint de Plaspy en d.plaspy.com o directamente a la IP 54.85.159.138 en el puerto 8888.
- Puede elegir UDP o TCP como transporte en el equipo si el firmware solicita selección de transporte.
- Plaspy recibe los datos entrantes y ejecuta la detección automática de protocolo para mostrar el dispositivo en la plataforma.
- Los intervalos regulares de reporte entregan actualizaciones de ubicación y estado según la configuración del equipo.

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración TZone para el TZ-BR04, normalmente comandos SMS o la herramienta del proveedor.
2. Establezca el APN del operador y las credenciales opcionales mediante el comando SMS o la herramienta.
3. Ingrese la dirección del servidor de Plaspy usando d.plaspy.com o la IP 54.85.159.138 según lo permita el equipo.
4. Configure el puerto del servidor en 8888 y elija UDP o TCP si el dispositivo requiere selección de transporte.
5. Aplique o guarde la configuración en el equipo y active el modo GPRS si es necesario.
6. Reinicie el dispositivo si el procedimiento del fabricante o el firmware requiere un reinicio para aplicar cambios.
7. Valide que el dispositivo reporte a Plaspy comprobando paquetes entrantes o actualizaciones de ubicación visibles en la plataforma Plaspy.

## Comandos de ejemplo para configuración

El TZ-BR04 acepta comandos SMS para configurar GPRS. Los comandos siguientes son los ejemplos públicos para configuración por SMS. Usan la contraseña SMS de ejemplo 000000 como se muestra. Si su equipo usa otra contraseña SMS, reemplace 000000 por la contraseña correspondiente.

1. Establecer el APN del operador
- Forma básica cuando solo se necesita el APN:
```text
*000000,011,{{apn}}#
```
- Si su APN requiere usuario y contraseña incluya esos valores:
```text
*000000,011,{{apn}},{{apnu}},{{apnp}}#
```
Explicación: {{apn}} es el APN de su operador. {{apnu}} y {{apnp}} son los campos opcionales de usuario y contraseña del APN que solo se usan si su operador los exige.

2. Establecer el intervalo de actualización a 60 segundos
```text
*000000,018,60,999#
```
Explicación: Este ejemplo fija un intervalo de reporte de 60 segundos. Ajuste el valor según su caso de uso y los límites del firmware.

3. Configurar el servidor GPRS a Plaspy por IP
```text
*000000,015,0,54.85.159.138,8888#
```
Explicación: Este comando apunta el rastreador a la IP y al puerto 8888 de Plaspy. Si su equipo admite nombres de dominio en el campo de servidor puede usar d.plaspy.com en lugar de la IP cuando ingrese los datos en una herramienta de configuración.

4. Activar el modo GPRS
```text
*000000,016,1#
```
Explicación: Este comando habilita el modo GPRS para que el dispositivo intente usar datos celulares para enviar reportes.

Preserve la contraseña numérica SMS y el orden de los marcadores cuando envíe los comandos. Si su instalación requiere una contraseña diferente reemplace 000000 por la contraseña configurada en su equipo.

## Notas sobre la configuración

- La configuración por SMS se muestra arriba porque son los comandos públicos disponibles para el TZ-BR04; algunos instaladores usan una herramienta del fabricante o configuración local por puerto serie en su lugar.
- Las revisiones de firmware y hardware pueden modificar el formato de comandos, los parámetros disponibles o los tipos de transporte aceptados. Siempre valide los comandos en un equipo de prueba primero.
- Elija UDP o TCP según las condiciones de red y las opciones del firmware del dispositivo. Plaspy acepta ambos y detectará el protocolo automáticamente.
- Algunos firmwares aceptan nombres de dominio para la configuración del servidor, mientras que otros requieren una dirección IP. Use d.plaspy.com si es compatible; de lo contrario use 54.85.159.138.
- Mantenga un registro de cualquier cambio en la contraseña SMS y confirme los mensajes de respuesta del equipo para asegurar que los comandos fueron aceptados.

## Por qué usar Plaspy con esta configuración

Configurar el TZ-BR04 para reportar a Plaspy le proporciona un endpoint de servidor consistente y un comportamiento uniforme en la plataforma entre muchos modelos de dispositivos. Usar el puerto compartido de Plaspy y la detección automática de protocolos simplifica el onboarding de dispositivos y reduce la necesidad de ajustes de servidor específicos por modelo, permitiendo que los equipos se concentren en el despliegue y la operación en lugar de configuraciones de servidor a medida.

Para obtener más información sobre Plaspy y flujos de trabajo soportados visite https://www.plaspy.com. Los métodos de configuración específicos de cada dispositivo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, así que verifique las instrucciones actuales del dispositivo en el sitio oficial del fabricante http://www.tzonedigital.com/ antes de finalizar despliegues en producción.
